// Builds simc-guides/spell-ids-reference.json from a SimulationCraft HTML raid report.
//
// USAGE (run from repo root):
//   curl -s "https://www.simulationcraft.org/reports/MID1_Raid.html" -o _simc_raid.html
//   node simc-guides/build-spell-ids-reference.js
//
// WHY the HTML (not Trivial.txt): the text report has only one clean Spelldata block;
// the HTML has thousands of "<h4>Spelldata>" blocks with clean id/name/school. See DECISIONS.md.
//
// COVERAGE / LIMITATION: the report only contains spells the Patchwerk single-target sim
// actually used — damage/rotational abilities + simmed buffs. Non-damaging defensives,
// interrupts and utility (Mind Freeze, Kick, Cloak of Shadows, Ice Block, Blur, Astral Shift,
// Dispersion, ...) are NOT pressed in the sim and are therefore ABSENT here. Source those
// from the spec guides' Wowhead-confirmed IDs instead.
//
// MULTIPLE IDS: many abilities legitimately map to several game spell IDs (base cast +
// empowered/cleave variants + damage/heal sub-spells). All are kept; `multipleIds: true`
// flags them. Occurrence count does NOT reliably identify the canonical cast, so none is
// asserted as primary — the consumer keeps all (ideal for matching arbitrary log events).
const fs = require('fs');
const lines = fs.readFileSync('_simc_raid.html', 'utf8').split(/\r?\n/);
// id + name are always on the first line of the block; school is optional (casts have it, buffs don't).
const headRe = /<h4>Spelldata<\/h4><ul[^>]*><li><span>id:<\/span>(\d+)<\/li><li><span>name:<\/span>([^<]*)<\/li>/;
const schoolRe = /<li><span>school:<\/span>([^<]*)<\/li>/;

const map = new Map(); // name -> Map(id -> {school, type, count})
let blocks = 0;
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(headRe);
  if (!m) continue;
  const id = m[1]; const name = m[2].trim();
  const sm = lines[i].match(schoolRe); const school = sm ? sm[1].trim() : '';
  if (!name) continue;
  blocks++;
  const win = lines.slice(i, i + 45).join('\n');
  const cast = Math.min(...['Action Priority List', 'Affected By'].map(s => { const k = win.indexOf(s); return k < 0 ? 1e9 : k; }));
  const buff = Math.min(...['<h4>Trigger', 'Stack Behavior', '<h4>Stack'].map(s => { const k = win.indexOf(s); return k < 0 ? 1e9 : k; }));
  const type = cast < buff ? 'cast' : buff < 1e9 ? 'buff' : 'other';
  if (!map.has(name)) map.set(name, new Map());
  const ids = map.get(name);
  if (!ids.has(id)) ids.set(id, { school, type, count: 0 });
  const e = ids.get(id); e.count++; if (school && !e.school) e.school = school;
}

const spells = {}; let multi = 0;
const tc = { cast: 0, buff: 0, other: 0 };
for (const [name, ids] of [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const arr = [...ids.entries()].map(([id, v]) => ({ id: Number(id), school: v.school || null, type: v.type, occurrences: v.count }))
    .sort((a, b) => b.occurrences - a.occurrences);
  arr.forEach(e => tc[e.type]++);
  const entry = { ids: arr };
  if (arr.length > 1) { entry.multipleIds = true; multi++; }
  spells[name] = entry;
}
const out = {
  _meta: {
    source: 'https://www.simulationcraft.org/reports/MID1_Raid.html',
    patch: 'Midnight 12.0.5', extracted: 'from <h4>Spelldata> blocks',
    spelldataBlocks: blocks, distinctNames: Object.keys(spells).length, multiIdNames: multi,
    typeCounts: tc,
    notes: [
      'cast = damaging action (Spelldata followed by Action Priority List / Affected By).',
      'buff = aura (Spelldata followed by Trigger / Stack Behavior).',
      'Many abilities legitimately have multiple ids (base cast + empowered/cleave variants + damage/heal sub-spells) — all kept; multipleIds=true flags them (some may be old-profile remnants). Occurrence count does NOT reliably mark the canonical cast.',
      'COVERAGE: only spells the Patchwerk single-target sim used — damage abilities + simmed buffs. Non-damaging utility NOT used in the sim (most interrupts and several defensives: Kick, Mind Freeze, Ice Block, Blur, Astral Shift, Dispersion, ...) is ABSENT and must come from live Wowhead / the spec guides.',
    ],
  },
  spells,
};
fs.writeFileSync('simc-guides/spell-ids-reference.json', JSON.stringify(out, null, 2));
console.log('blocks:', blocks, '| names:', Object.keys(spells).length, '| multi-id:', multi, '| types:', JSON.stringify(tc));
