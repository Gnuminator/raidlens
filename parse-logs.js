'use strict';
// RaidLens local log parser (v2 — comprehensive)
// =============================================================================
// Streams WoW combat logs and, for every boss ENCOUNTER, builds a rich inventory
// of every spell that touches players. Run: node parse-logs.js
// Output: spell-id-report.txt (human-readable) + spell-id-report.json (machine).
//
// WHAT v2 FIXES / ADDS over v1:
//   1. SOURCE CLASSIFICATION BY UNIT FLAGS, not GUID prefix. The combat-log flags
//      bitfield carries a reaction bit (FRIENDLY 0x10 / HOSTILE 0x40). v1 classed
//      anything whose source GUID didn't start with "Player-" as boss damage, so a
//      friendly player's own recoil (Shadow Word: Death — nil source GUID but
//      FRIENDLY flags) and pet/totem damage (Spirit Link Totem — Creature GUID,
//      FRIENDLY flags) were mislabelled as boss mechanics. v2 reads the flags.
//   2. MANY MORE EVENT TYPES. v1 only read SPELL_DAMAGE / SPELL_PERIODIC_DAMAGE.
//      v2 also captures: fully-absorbed hits (SPELL_ABSORBED), avoided hits with
//      their miss type (SPELL_MISSED — DODGE/PARRY/MISS/IMMUNE/ABSORB; a *dodged*
//      boss spell is the strongest "avoidable" signal there is), enemy casts
//      (SPELL_CAST_START / _SUCCESS — the only place interrupt-target cast IDs
//      live), confirmed interrupts (SPELL_INTERRUPT — the definitive interruptable
//      list), debuff auras on players (SPELL_AURA_APPLIED — non-damaging mechanics),
//      melee (SWING_*) and ENVIRONMENTAL_DAMAGE.
//   3. AGGREGATION, not first-seen. Per spell: hit count, distinct players hit,
//      best-effort total damage, avoided counts by type, fully-absorbed count,
//      cast counts, interrupt count, distinct debuffed players. This is what lets
//      you tell a core mechanic from a one-off, and avoidable from raid-wide.
// =============================================================================

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const LOGFILES_DIR = path.join(__dirname, 'Logfiles');
const OUT_TXT = path.join(__dirname, 'spell-id-report.txt');
const OUT_JSON = path.join(__dirname, 'spell-id-report.json');

// Raid difficulty ids → names. Anything else (5-man, M+, event modes) → "Diff-N".
const DIFFICULTY = {
  '1': 'Normal', '2': 'Heroic', '14': 'Normal', '15': 'Heroic',
  '16': 'Mythic', '17': 'LFR', '23': 'Mythic',
};

// Combat-log unit-flag reaction bits.
const F_FRIENDLY = 0x10, F_NEUTRAL = 0x20, F_HOSTILE = 0x40;

// Event types we fully parse. Everything else inside an encounter is skipped
// cheaply (by reading just the leading token) so the high-volume heal/energize/
// aura-refresh lines never hit the CSV parser.
const INTERESTING = new Set([
  'SPELL_DAMAGE', 'SPELL_PERIODIC_DAMAGE', 'RANGE_DAMAGE', 'DAMAGE_SHIELD', 'DAMAGE_SPLIT',
  'SWING_DAMAGE',
  'SPELL_MISSED', 'SPELL_PERIODIC_MISSED', 'RANGE_MISSED', 'SWING_MISSED',
  'SPELL_ABSORBED',
  'SPELL_CAST_START', 'SPELL_CAST_SUCCESS',
  'SPELL_INTERRUPT',
  'SPELL_AURA_APPLIED',
  'ENVIRONMENTAL_DAMAGE',
]);

// key: "BossName||Difficulty" → encounter aggregate (merged across all log files)
const encounters = new Map();

const TS_RE = /^\S+ \S+\s+(.*)/;
function getEvent(line) {
  const m = TS_RE.exec(line);
  return m ? m[1] : null;
}

// CSV parser that handles WoW's quoted fields.
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

// Classify a damage/aura source by its flags bitfield (falls back to GUID shape).
//   'enemy'       — hostile/neutral NPC: a real boss/add mechanic
//   'environment' — no source (falling, lava, fire floor, …)
//   'self'        — the affected player's own effect (recoil, etc.)
//   'friendly'    — another player / their pet / totem / guardian
function classifySource(srcGUID, srcFlagsHex, dstGUID) {
  const f = parseInt(srcFlagsHex, 16);
  if (Number.isFinite(f)) {
    if (f & F_FRIENDLY) return srcGUID && srcGUID === dstGUID ? 'self' : 'friendly';
    if (f & F_HOSTILE) return 'enemy';
    if (f & F_NEUTRAL) return 'enemy';
  }
  if (!srcGUID || srcGUID === '0000000000000000') return 'environment';
  if (srcGUID.startsWith('Player-')) return srcGUID === dstGUID ? 'self' : 'friendly';
  return 'enemy';
}

const isPlayer = (guid) => !!guid && guid.startsWith('Player-');

// Get-or-create a spell aggregate inside a bucket Map.
function getSpell(map, id, name, school) {
  let s = map.get(id);
  if (!s) {
    s = {
      name: name || `#${id}`, school: school || '',
      dmgHits: 0, total: 0, players: new Set(),
      avoided: {}, absorbedFully: 0,
      castStart: 0, castSuccess: 0, interrupted: 0,
      debuffPlayers: new Set(), source: '',
    };
    map.set(id, s);
  } else if (name && (!s.name || s.name.startsWith('#'))) {
    s.name = name; // learn the name if a later event supplies it
  }
  return s;
}

async function processFile(filePath) {
  const rl = readline.createInterface({ input: fs.createReadStream(filePath), crlfDelay: Infinity });

  let enc = null;            // current encounter aggregate (null when not in a fight)
  let advancedEnabled = false;
  let advLen = 0;            // length of the advanced-param block (0 if advanced logging off)
  let advKnown = false;      // advLen confirmed from a real SPELL_CAST_SUCCESS line
  let lines = 0;

  for await (const raw of rl) {
    lines++;
    const line = raw.charCodeAt(raw.length - 1) === 13 ? raw.slice(0, -1) : raw;
    const ev = getEvent(line);
    if (!ev) continue;

    const comma = ev.indexOf(',');
    if (comma === -1) continue;
    const type = ev.slice(0, comma);

    // --- log header: learn whether advanced logging is on ---
    if (type === 'COMBAT_LOG_VERSION') {
      const p = parseCSV(ev);
      const idx = p.indexOf('ADVANCED_LOG_ENABLED');
      advancedEnabled = idx !== -1 && p[idx + 1] === '1';
      advLen = advancedEnabled ? 19 : 0;   // sane default; refined on first CAST_SUCCESS
      advKnown = !advancedEnabled;
      continue;
    }

    // --- encounter boundaries ---
    if (type === 'ENCOUNTER_START') {
      const p = parseCSV(ev);
      const name = p[2], encId = p[1];
      const diff = DIFFICULTY[p[3]] || `Diff-${p[3]}`;
      const key = `${name}||${diff}`;
      enc = encounters.get(key);
      if (!enc) {
        enc = {
          name, encounterId: encId, difficulty: diff, pulls: 0,
          roster: new Set(), boss: new Map(), env: new Map(), friendly: new Map(),
        };
        encounters.set(key, enc);
      }
      enc.pulls++;
      continue;
    }
    if (type === 'ENCOUNTER_END') { enc = null; continue; }

    if (!enc) continue;                 // only care about lines inside a boss fight
    if (!INTERESTING.has(type)) continue;
    // skip the buff auras (the bulk of AURA_APPLIED) before paying for a full parse
    if (type === 'SPELL_AURA_APPLIED' && ev.indexOf(',DEBUFF') === -1) continue;

    const p = parseCSV(ev);

    // -------- damage to players --------
    if (type === 'SPELL_DAMAGE' || type === 'SPELL_PERIODIC_DAMAGE' || type === 'RANGE_DAMAGE'
        || type === 'DAMAGE_SHIELD' || type === 'DAMAGE_SPLIT') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const id = p[9];
      if (!id) continue;
      const src = classifySource(p[1], p[3], dst);
      const bucket = src === 'enemy' ? enc.boss : src === 'environment' ? enc.env : enc.friendly;
      const s = getSpell(bucket, id, p[10], p[11]);
      s.dmgHits++; s.players.add(dst); enc.roster.add(dst);
      if (src !== 'enemy' && !s.source) s.source = src;
      const amt = +p[12 + advLen];
      if (Number.isFinite(amt) && amt >= 0 && amt < 1e12) s.total += amt;
      continue;
    }

    // -------- boss melee (no spell id) --------
    if (type === 'SWING_DAMAGE') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const src = classifySource(p[1], p[3], dst);
      const bucket = src === 'enemy' ? enc.boss : src === 'environment' ? enc.env : enc.friendly;
      const s = getSpell(bucket, 'swing', 'Melee (swing)', '0x1');
      s.dmgHits++; s.players.add(dst); enc.roster.add(dst);
      if (src !== 'enemy' && !s.source) s.source = src;
      const amt = +p[9 + advLen];
      if (Number.isFinite(amt) && amt >= 0 && amt < 1e12) s.total += amt;
      continue;
    }

    // -------- avoided / mitigated hits (the avoidable signal) --------
    if (type === 'SPELL_MISSED' || type === 'SPELL_PERIODIC_MISSED' || type === 'RANGE_MISSED') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const id = p[9];
      if (!id) continue;
      const src = classifySource(p[1], p[3], dst);
      const bucket = src === 'enemy' ? enc.boss : src === 'environment' ? enc.env : enc.friendly;
      const s = getSpell(bucket, id, p[10], p[11]);
      const mt = p[12] || 'MISS';
      s.avoided[mt] = (s.avoided[mt] || 0) + 1;
      s.players.add(dst); enc.roster.add(dst);
      if (src !== 'enemy' && !s.source) s.source = src;
      continue;
    }
    if (type === 'SWING_MISSED') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const src = classifySource(p[1], p[3], dst);
      const bucket = src === 'enemy' ? enc.boss : src === 'environment' ? enc.env : enc.friendly;
      const s = getSpell(bucket, 'swing', 'Melee (swing)', '0x1');
      const mt = p[9] || 'MISS';
      s.avoided[mt] = (s.avoided[mt] || 0) + 1;
      enc.roster.add(dst);
      continue;
    }

    // -------- fully absorbed hits (else invisible) --------
    if (type === 'SPELL_ABSORBED') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const id = p[9];
      if (!/^\d+$/.test(id)) continue;     // skip the swing-absorb variant (no triggering spell)
      const src = classifySource(p[1], p[3], dst);
      const bucket = src === 'enemy' ? enc.boss : src === 'environment' ? enc.env : enc.friendly;
      const s = getSpell(bucket, id, p[10], p[11]);
      s.absorbedFully++; s.players.add(dst); enc.roster.add(dst);
      if (src !== 'enemy' && !s.source) s.source = src;
      continue;
    }

    // -------- enemy casts (interrupt candidates + mechanic inventory) --------
    if (type === 'SPELL_CAST_SUCCESS') {
      if (advancedEnabled && !advKnown && p.length > 12) { advLen = p.length - 12; advKnown = true; }
      if (classifySource(p[1], p[3], p[5]) !== 'enemy') continue;
      const id = p[9];
      if (!id) continue;
      getSpell(enc.boss, id, p[10], p[11]).castSuccess++;
      continue;
    }
    if (type === 'SPELL_CAST_START') {
      if (classifySource(p[1], p[3], p[5]) !== 'enemy') continue;
      const id = p[9];
      if (!id) continue;
      getSpell(enc.boss, id, p[10], p[11]).castStart++;
      continue;
    }

    // -------- confirmed interrupts (definitive interruptable list) --------
    // Layout: p9-11 = the interrupting spell (e.g. Skull Bash); p12-14 = the
    // interrupted spell (extraSpellId/Name/School) — that's the boss cast we want.
    if (type === 'SPELL_INTERRUPT') {
      const id = p[12];                    // the interrupted spell (extraSpellId)
      if (!id) continue;
      const tf = parseInt(p[7], 16);       // flags of the unit whose cast was interrupted
      const targetEnemy = Number.isFinite(tf) ? !!(tf & F_HOSTILE) : !isPlayer(p[5]);
      if (!targetEnemy) continue;
      getSpell(enc.boss, id, p[13], p[14]).interrupted++;
      continue;
    }

    // -------- debuff auras on players (non-damaging mechanics) --------
    if (type === 'SPELL_AURA_APPLIED') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      if (p[12] !== 'DEBUFF') continue;
      const id = p[9];
      if (!id) continue;
      const src = classifySource(p[1], p[3], dst);
      if (src !== 'enemy' && src !== 'environment') continue;  // ignore self/friendly debuffs
      const bucket = src === 'enemy' ? enc.boss : enc.env;
      const s = getSpell(bucket, id, p[10], p[11]);
      s.debuffPlayers.add(dst); enc.roster.add(dst);
      if (src !== 'enemy' && !s.source) s.source = src;
      continue;
    }

    // -------- environmental (falling / lava / fire floor) --------
    if (type === 'ENVIRONMENTAL_DAMAGE') {
      const dst = p[5];
      if (!isPlayer(dst)) continue;
      const envType = p[9 + advLen] || 'Unknown';
      const s = getSpell(enc.env, 'env:' + envType, 'Environmental: ' + envType, '');
      s.dmgHits++; s.players.add(dst); enc.roster.add(dst); s.source = 'environment';
      const amt = +p[10 + advLen];
      if (Number.isFinite(amt) && amt >= 0 && amt < 1e12) s.total += amt;
      continue;
    }
  }

  return lines;
}

// -------- serialization --------

function dumpSpell(s, roster) {
  const players = s.players.size;
  const o = { name: s.name };
  if (s.school) o.school = s.school;
  if (s.source) o.source = s.source;
  if (s.dmgHits) o.dmgHits = s.dmgHits;
  if (players) o.players = players;
  if (players && roster) o.playerPct = +(players / roster).toFixed(2);
  if (s.total) o.total = s.total;
  if (Object.keys(s.avoided).length) o.avoided = s.avoided;
  if (s.absorbedFully) o.absorbedFully = s.absorbedFully;
  if (s.castStart) o.castStart = s.castStart;
  if (s.castSuccess) o.castSuccess = s.castSuccess;
  if (s.interrupted) o.interrupted = s.interrupted;
  if (s.debuffPlayers.size) o.debuffPlayers = s.debuffPlayers.size;
  return o;
}

// Sort key: most impactful first (damage volume, then breadth, then casts).
function relevance(s) {
  return s.dmgHits * 1000 + s.players.size * 100 + s.castStart + s.castSuccess
       + s.interrupted * 5000 + s.debuffPlayers.size * 50;
}

function bucketToObj(map, roster) {
  const out = {};
  [...map.entries()].sort((a, b) => relevance(b[1]) - relevance(a[1]))
    .forEach(([id, s]) => { out[id] = dumpSpell(s, roster); });
  return out;
}

function hint(s, roster) {
  const pct = roster ? s.players.size / roster : 0;
  const dodged = (s.avoided.DODGE || 0) + (s.avoided.PARRY || 0) + (s.avoided.MISS || 0);
  const tags = [];
  if (s.interrupted || s.castStart) tags.push('INTERRUPTABLE');
  if (dodged > 0) tags.push('AVOIDABLE(dodged)');
  if (s.dmgHits && pct >= 0.8 && dodged === 0) tags.push('raid-wide');
  if (s.dmgHits && pct > 0 && pct < 0.5 && !tags.includes('AVOIDABLE(dodged)')) tags.push('targeted/partial');
  if (!s.dmgHits && s.debuffPlayers.size) tags.push('debuff-only');
  return tags.join(' ');
}

function writeReports(totalFiles, totalLines) {
  const sorted = [...encounters.values()].sort((a, b) => a.name.localeCompare(b.name));

  // --- JSON ---
  const json = {};
  for (const e of sorted) {
    const roster = e.roster.size;
    if (!json[e.name]) json[e.name] = {};
    json[e.name][e.difficulty] = {
      encounterId: e.encounterId,
      pulls: e.pulls,
      rosterSeen: roster,
      boss: bucketToObj(e.boss, roster),
      environment: bucketToObj(e.env, roster),
      friendlyNoise: bucketToObj(e.friendly, roster),
    };
  }
  fs.writeFileSync(OUT_JSON, JSON.stringify(json, null, 2), 'utf8');

  // --- TXT ---
  const r = [];
  r.push('RaidLens Spell ID Report (v2)');
  r.push(`Source: ${totalFiles} log files, ${totalLines.toLocaleString()} lines`);
  r.push('Source classified by unit FLAGS (friendly/hostile), not GUID prefix.');
  r.push('boss = hostile-sourced. friendlyNoise = player/pet/totem/self (excluded).');
  r.push('avoided counts = hits the boss spell did NOT land (DODGE/PARRY/MISS/IMMUNE/ABSORB).');
  r.push('='.repeat(78));

  for (const e of sorted) {
    const roster = e.roster.size;
    r.push('');
    r.push(`=== ${e.name} [${e.difficulty}]  (enc ${e.encounterId}, ${e.pulls} pulls, ${roster} players) ===`);

    const bossSpells = [...e.boss.entries()].sort((a, b) => relevance(b[1]) - relevance(a[1]));
    r.push(`  BOSS / ENEMY spells (${bossSpells.length}):`);
    for (const [id, s] of bossSpells) {
      const bits = [];
      if (s.dmgHits) bits.push(`${s.dmgHits} hits / ${s.players.size} plr`);
      if (s.total) bits.push(`${s.total.toLocaleString()} dmg`);
      if (Object.keys(s.avoided).length) bits.push('avoided ' + Object.entries(s.avoided).map(([k, v]) => `${k}:${v}`).join(','));
      if (s.absorbedFully) bits.push(`absorbed ${s.absorbedFully}`);
      if (s.castStart) bits.push(`castStart ${s.castStart}`);
      if (s.castSuccess) bits.push(`cast ${s.castSuccess}`);
      if (s.interrupted) bits.push(`interrupted ${s.interrupted}`);
      if (s.debuffPlayers.size) bits.push(`debuff ${s.debuffPlayers.size}`);
      const h = hint(s, roster);
      r.push(`    ${String(id).padEnd(11)} "${s.name}"  [${bits.join(' | ')}]${h ? '  <' + h + '>' : ''}`);
    }

    if (e.friendly.size) {
      r.push(`  FRIENDLY NOISE — excluded from boss (${e.friendly.size}): [self / ally / pet / totem]`);
      for (const [id, s] of [...e.friendly.entries()].sort((a, b) => relevance(b[1]) - relevance(a[1]))) {
        r.push(`    ${String(id).padEnd(11)} "${s.name}" [${s.source || 'friendly'}${s.dmgHits ? ', ' + s.dmgHits + ' hits' : ''}]`);
      }
    }
    if (e.env.size) {
      r.push(`  ENVIRONMENT (${e.env.size}):`);
      for (const [id, s] of e.env.entries()) {
        r.push(`    ${String(id).padEnd(11)} "${s.name}" [${s.dmgHits} hits / ${s.players.size} plr]`);
      }
    }
  }
  fs.writeFileSync(OUT_TXT, r.join('\n') + '\n', 'utf8');
}

async function main() {
  // Optional CLI args: explicit file path(s) to parse (for smoke tests / partial runs).
  // No args → parse every .txt in Logfiles/.
  const argPaths = process.argv.slice(2);
  let filePaths;
  if (argPaths.length) {
    filePaths = argPaths;
  } else {
    filePaths = fs.readdirSync(LOGFILES_DIR).filter(f => f.endsWith('.txt')).sort()
      .map(f => path.join(LOGFILES_DIR, f));
  }
  if (filePaths.length === 0) {
    console.error(`No .txt files found in ${LOGFILES_DIR}`);
    process.exit(1);
  }

  console.log(`\nRaidLens Log Parser v2`);
  console.log(`Processing ${filePaths.length} file(s)\n`);

  const t0 = Date.now();
  let totalLines = 0;
  for (let i = 0; i < filePaths.length; i++) {
    const fp = filePaths[i];
    const mb = Math.round(fs.statSync(fp).size / 1024 / 1024);
    process.stdout.write(`  [${String(i + 1).padStart(2)}/${filePaths.length}] ${path.basename(fp)} (${mb} MB)... `);
    const n = await processFile(fp);
    totalLines += n;
    process.stdout.write(`${n.toLocaleString()} lines\n`);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\nFinished in ${elapsed}s — ${totalLines.toLocaleString()} total lines`);
  console.log(`Found ${encounters.size} distinct boss/difficulty combinations`);

  writeReports(filePaths.length, totalLines);
  console.log(`\nReports written:\n  ${OUT_TXT}\n  ${OUT_JSON}\n`);
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
