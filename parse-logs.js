'use strict';
// RaidLens local log parser
// Streams WoW combat logs, extracts spell IDs for every boss encounter.
// Run: node parse-logs.js
// Output: spell-id-report.txt + spell-id-report.json

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const LOGFILES_DIR = path.join(__dirname, 'Logfiles');
const OUT_TXT = path.join(__dirname, 'spell-id-report.txt');
const OUT_JSON = path.join(__dirname, 'spell-id-report.json');

const DIFFICULTY = {
  '1': 'Normal', '2': 'Heroic', '14': 'Normal',
  '15': 'Heroic', '16': 'Mythic', '17': 'LFR', '23': 'Mythic+',
};

// key: "BossName||Difficulty" → { name, encounterId, difficulty, pulls, spells: Map<id, {name, source}> }
const encounters = new Map();

const TS_RE = /^\S+ \S+\s+(.*)/;

function getEvent(line) {
  const m = TS_RE.exec(line);
  return m ? m[1] : null;
}

// CSV parser that handles quoted fields (WoW combat log format)
function parseCSV(line) {
  const out = [];
  let i = 0;
  const n = line.length;
  while (i < n) {
    if (line[i] === '"') {
      const end = line.indexOf('"', i + 1);
      out.push(end === -1 ? line.slice(i + 1) : line.slice(i + 1, end));
      i = end === -1 ? n : end + 2;
    } else {
      const end = line.indexOf(',', i);
      out.push(end === -1 ? line.slice(i) : line.slice(i, end));
      i = end === -1 ? n : end + 1;
    }
  }
  return out;
}

async function processFile(filePath) {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  let boss = null;
  let diff = null;
  let key = null;
  let lines = 0;

  for await (const line of rl) {
    lines++;
    const ev = getEvent(line);
    if (!ev) continue;

    if (ev.startsWith('ENCOUNTER_START,')) {
      const p = parseCSV(ev);
      // p: [ENCOUNTER_START, encounterId, "name", diffId, size]
      const name = p[2];
      const encId = p[1];
      diff = DIFFICULTY[p[3]] || `Diff-${p[3]}`;
      boss = name;
      key = `${name}||${diff}`;
      if (!encounters.has(key)) {
        encounters.set(key, { name, encounterId: encId, difficulty: diff, pulls: 0, spells: new Map() });
      }
      encounters.get(key).pulls++;

    } else if (ev.startsWith('ENCOUNTER_END,')) {
      boss = null; diff = null; key = null;

    } else if (boss) {
      if (!ev.startsWith('SPELL_DAMAGE,') && !ev.startsWith('SPELL_PERIODIC_DAMAGE,')) continue;

      const p = parseCSV(ev);
      // p: [event, srcGUID, srcName, srcFlags, srcRaidFlags, dstGUID, dstName, dstFlags, dstRaidFlags, spellId, spellName, ...]
      if (!p[5] || !p[5].startsWith('Player-')) continue; // only damage TO players

      const spellId = p[9];
      const spellName = p[10];
      if (!spellId || !spellName) continue;

      const srcGUID = p[1] || '';
      const source = srcGUID.startsWith('Player-')
        ? (srcGUID === p[5] ? 'self' : 'player')
        : 'boss/env';

      const enc = encounters.get(key);
      if (enc && !enc.spells.has(spellId)) {
        enc.spells.set(spellId, { name: spellName, source });
      }
    }
  }

  return lines;
}

async function main() {
  const files = fs.readdirSync(LOGFILES_DIR)
    .filter(f => f.endsWith('.txt'))
    .sort();

  if (files.length === 0) {
    console.error(`No .txt files found in ${LOGFILES_DIR}`);
    process.exit(1);
  }

  console.log(`\nRaidLens Log Parser`);
  console.log(`Processing ${files.length} files in ${LOGFILES_DIR}\n`);

  const t0 = Date.now();
  let totalLines = 0;

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const fp = path.join(LOGFILES_DIR, f);
    const mb = Math.round(fs.statSync(fp).size / 1024 / 1024);
    const label = `[${String(i + 1).padStart(2)}/${files.length}] ${f} (${mb} MB)`;
    process.stdout.write(`  ${label}... `);
    const n = await processFile(fp);
    totalLines += n;
    process.stdout.write(`${n.toLocaleString()} lines\n`);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\nFinished in ${elapsed}s — ${totalLines.toLocaleString()} total lines`);
  console.log(`Found ${encounters.size} distinct boss/difficulty combinations\n`);

  // --- Text report ---
  const report = [];
  report.push('RaidLens Spell ID Report');
  report.push(`Source: ${files.length} log files, ${totalLines.toLocaleString()} lines`);
  report.push('='.repeat(70));

  const sorted = [...encounters.values()].sort((a, b) => a.name.localeCompare(b.name));

  for (const enc of sorted) {
    report.push('');
    report.push(`=== ${enc.name} [${enc.difficulty}] ===`);
    report.push(`  WCL Encounter ID : ${enc.encounterId}`);
    report.push(`  Pulls in logs    : ${enc.pulls}`);

    const spells = [...enc.spells.entries()].sort((a, b) => Number(a[0]) - Number(b[0]));
    const bossSpells = spells.filter(([, s]) => s.source === 'boss/env');
    const playerSpells = spells.filter(([, s]) => s.source !== 'boss/env');

    report.push(`  Boss/env → player damage spells (${bossSpells.length}):`);
    for (const [id, s] of bossSpells) {
      report.push(`    ${id.padEnd(12)}  "${s.name}"`);
    }

    if (playerSpells.length > 0) {
      report.push(`  Player-sourced damage to players (${playerSpells.length}): [Dissonance / friendly fire / self]`);
      for (const [id, s] of playerSpells) {
        report.push(`    ${id.padEnd(12)}  "${s.name}"  [${s.source}]`);
      }
    }
  }

  fs.writeFileSync(OUT_TXT, report.join('\n') + '\n', 'utf8');

  // --- JSON report ---
  const json = {};
  for (const enc of sorted) {
    if (!json[enc.name]) json[enc.name] = {};
    json[enc.name][enc.difficulty] = {
      encounterId: enc.encounterId,
      pulls: enc.pulls,
      bossSpells: Object.fromEntries(
        [...enc.spells.entries()]
          .filter(([, s]) => s.source === 'boss/env')
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .map(([id, s]) => [id, s.name])
      ),
      playerSourcedSpells: Object.fromEntries(
        [...enc.spells.entries()]
          .filter(([, s]) => s.source !== 'boss/env')
          .sort((a, b) => Number(a[0]) - Number(b[0]))
          .map(([id, s]) => [id, { name: s.name, source: s.source }])
      ),
    };
  }
  fs.writeFileSync(OUT_JSON, JSON.stringify(json, null, 2), 'utf8');

  console.log(`Reports written:`);
  console.log(`  ${OUT_TXT}`);
  console.log(`  ${OUT_JSON}`);
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
