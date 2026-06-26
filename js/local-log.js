// RaidLens local-log analysis engine — parser core (Slice 1: fast-path datasets).
// =============================================================================
// Turns a raw WoW combat log (WoWCombatLog.txt) into the SAME shapes the WCL API
// provider returns, so analyze.js / render.js / ai.js can run with no WarcraftLogs
// account at all. This is the "WCL-independent core" (vision milestone M3).
//
// It implements the provider interface analyze.js already calls:
//   getFights() / getActors()         — replaces report.js's WCL fight+roster load
//   fetchDmgTable(fight)              — DamageTaken table  { entries:[{name,type,total,abilities:[{name,guid,total}]}] }
//   fetchDeaths(fight)               — [{ targetID, timestamp }]
//   fetchResurrects(fight)           — [{ timestamp }]
//   fetchInterruptEvents(fight)      — [{ sourceID, extraAbilityGameID, timestamp }]
//   fetchCastEvents(fight, ids)      — friendly casts  [{ type:'cast', abilityGameID, sourceID, timestamp }]
//   fetchEnemyCastEvents(fight, ids) — enemy casts     [{ type:'cast', abilityGameID, timestamp }]
//
// Feed it the log line-by-line (Node readline today, browser File stream later)
// via processLine(line); call finalize() once at EOF.
//
// Source is classified by the combat-log unit FLAGS reaction bit, same as
// parse-logs.js v2 — that's how friendly recoil / pet / totem casts are kept out
// of the enemy-cast set. (The damage-taken TABLE intentionally includes ALL damage
// to a player, matching WCL, which leaves self/raid-wide filtering to analyze.js.)
// Some low-level helpers are duplicated from parse-logs.js by design: that file is
// the Node spell-ID discovery tool; this one is the browser engine.
// =============================================================================

const LL_F_FRIENDLY = 0x10, LL_F_NEUTRAL = 0x20, LL_F_HOSTILE = 0x40;

// Combat-log specID → the bare spec name (subType) the rest of RaidLens uses.
// Shared names (Frost/Holy/Protection/Restoration) intentionally collapse to the
// bare name, matching WCL's masterData.subType.
const SPEC_ID_TO_NAME = {
  250: 'Blood', 251: 'Frost', 252: 'Unholy',
  577: 'Havoc', 581: 'Vengeance',
  102: 'Balance', 103: 'Feral', 104: 'Guardian', 105: 'Restoration',
  1467: 'Devastation', 1468: 'Preservation', 1473: 'Augmentation',
  253: 'Beast Mastery', 254: 'Marksmanship', 255: 'Survival',
  62: 'Arcane', 63: 'Fire', 64: 'Frost',
  268: 'Brewmaster', 269: 'Windwalker', 270: 'Mistweaver',
  65: 'Holy', 66: 'Protection', 70: 'Retribution',
  256: 'Discipline', 257: 'Holy', 258: 'Shadow',
  259: 'Assassination', 260: 'Outlaw', 261: 'Subtlety',
  262: 'Elemental', 263: 'Enhancement', 264: 'Restoration',
  265: 'Affliction', 266: 'Demonology', 267: 'Destruction',
  71: 'Arms', 72: 'Fury', 73: 'Protection',
};

const LL_DMG_EVENTS = new Set(['SPELL_DAMAGE', 'SPELL_PERIODIC_DAMAGE', 'RANGE_DAMAGE', 'DAMAGE_SHIELD', 'DAMAGE_SPLIT']);

function llParseCSV(line) {
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

// "6/22/2026 19:54:49.0802  EVENT,..." → { ts: epochMs, ev: "EVENT,..." }
const LL_PREFIX_RE = /^(\d+\/\d+\/\d+) (\d+:\d+:\d+\.\d+)\s+(.*)$/;
function llParsePrefix(line) {
  const m = LL_PREFIX_RE.exec(line);
  if (!m) return null;
  const [mo, d, y] = m[1].split('/').map(Number);
  const [h, mi, sec] = m[2].split(':');
  const ts = new Date(y, mo - 1, d, +h, +mi, 0, 0).getTime() + Math.round(parseFloat(sec) * 1000);
  return { ts, ev: m[3] };
}

function llClassify(srcGUID, srcFlagsHex) {
  const f = parseInt(srcFlagsHex, 16);
  if (Number.isFinite(f)) {
    if (f & LL_F_FRIENDLY) return 'friendly';
    if (f & LL_F_HOSTILE) return 'enemy';
    if (f & LL_F_NEUTRAL) return 'enemy';
  }
  if (!srcGUID || srcGUID === '0000000000000000') return 'environment';
  if (srcGUID.startsWith('Player-')) return 'friendly';
  return 'enemy';
}

const llIsPlayer = (guid) => !!guid && guid.startsWith('Player-');
function llCharName(fullName) {
  if (!fullName) return { name: 'Unknown', server: '' };
  const dash = fullName.indexOf('-');
  return dash === -1 ? { name: fullName, server: '' } : { name: fullName.slice(0, dash), server: fullName.slice(dash + 1) };
}

// Factory: a stateful report builder + provider.
function createLocalReport(opts) {
  opts = opts || {};
  const defensiveIds = opts.defensiveIds instanceof Set ? opts.defensiveIds : new Set();

  const fights = [];          // public: WCL-shaped fights
  const playersByGuid = new Map(); // guid -> { id, name, server, subType }
  let nextActorId = 1;
  let nextFightId = 1;

  let cur = null;             // current open fight's working buckets
  let advancedEnabled = false;
  let advLen = 0;
  let advKnown = false;

  function actorIdFor(guid, fullName) {
    let a = playersByGuid.get(guid);
    if (!a) {
      const { name, server } = llCharName(fullName);
      a = { id: nextActorId++, name, server, subType: 'Unknown' };
      playersByGuid.set(guid, a);
    } else if (fullName && a.name === 'Unknown') {
      const { name, server } = llCharName(fullName);
      a.name = name; a.server = server;
    }
    return a.id;
  }
  function actorNameFor(guid, fullName) {
    actorIdFor(guid, fullName);
    return playersByGuid.get(guid).name;
  }

  function newFightBuckets(encId, name, difficulty, startTs) {
    return {
      id: nextFightId++, name, encounterID: encId, difficulty,
      startTime: startTs, endTime: startTs, kill: false, fightPercentage: null,
      dmg: new Map(),          // playerName -> { name, type, total, abilities: Map<spellName,{name,guid,total}> }
      deaths: [], rez: [], interrupts: [], fcasts: [], ecasts: [],
    };
  }

  function addDamage(name, spellName, guid, amount) {
    let e = cur.dmg.get(name);
    if (!e) { e = { name, type: 'Player', total: 0, abilities: new Map() }; cur.dmg.set(name, e); }
    e.total += amount;
    let ab = e.abilities.get(spellName);
    if (!ab) { ab = { name: spellName, guid: guid != null ? Number(guid) : null, total: 0 }; e.abilities.set(spellName, ab); }
    if (ab.guid == null && guid != null) ab.guid = Number(guid);
    ab.total += amount;
  }

  function processLine(rawLine) {
    if (!rawLine) return;
    const line = rawLine.charCodeAt(rawLine.length - 1) === 13 ? rawLine.slice(0, -1) : rawLine;

    const pre = llParsePrefix(line);
    if (!pre) return;
    const ev = pre.ev;
    const c = ev.indexOf(',');
    if (c === -1) return;
    const type = ev.slice(0, c);

    // Combat-log header: learn whether advanced logging is on (sets the damage-amount
    // field offset). Appears once, before any encounter.
    if (type === 'COMBAT_LOG_VERSION') {
      const p = llParseCSV(ev);
      const idx = p.indexOf('ADVANCED_LOG_ENABLED');
      advancedEnabled = idx !== -1 && p[idx + 1] === '1';
      advLen = advancedEnabled ? 19 : 0;
      advKnown = !advancedEnabled;
      return;
    }

    if (type === 'ENCOUNTER_START') {
      const p = llParseCSV(ev);
      cur = newFightBuckets(Number(p[1]), p[2], Number(p[3]), pre.ts);
      return;
    }
    if (type === 'ENCOUNTER_END') {
      if (cur) {
        const p = llParseCSV(ev);
        cur.endTime = pre.ts;
        cur.kill = p[5] === '1';
        // strip working Maps off the public fight object; keep buckets keyed by id
        fightData[cur.id] = cur;
        fights.push({ id: cur.id, name: cur.name, encounterID: cur.encounterID, difficulty: cur.difficulty,
          startTime: cur.startTime, endTime: cur.endTime, kill: cur.kill, fightPercentage: cur.fightPercentage });
        cur = null;
      }
      return;
    }
    if (!cur) return;            // only care about lines inside an encounter

    // COMBATANT_INFO: capture spec for the roster (guid=p[1], specID=p[25]).
    if (type === 'COMBATANT_INFO') {
      const p = llParseCSV(ev);
      const guid = p[1];
      if (llIsPlayer(guid)) {
        actorIdFor(guid, null);
        const spec = SPEC_ID_TO_NAME[Number(p[25])];
        if (spec) playersByGuid.get(guid).subType = spec;
      }
      return;
    }

    // Advanced-block length detection (for damage amount offset).
    if (type === 'SPELL_CAST_SUCCESS') {
      const p = llParseCSV(ev);
      if (advancedEnabled && !advKnown && p.length > 12) { advLen = p.length - 12; advKnown = true; }
      const src = llClassify(p[1], p[3]);
      const id = Number(p[9]);
      if (!id) return;
      if (src === 'enemy') {
        cur.ecasts.push({ type: 'cast', abilityGameID: id, timestamp: pre.ts });
      } else if (src === 'friendly' && llIsPlayer(p[1]) && defensiveIds.has(id)) {
        cur.fcasts.push({ type: 'cast', abilityGameID: id, sourceID: actorIdFor(p[1], p[2]), timestamp: pre.ts });
      }
      return;
    }

    if (LL_DMG_EVENTS.has(type)) {
      const p = llParseCSV(ev);
      const dst = p[5];
      if (!llIsPlayer(dst)) return;
      const name = actorNameFor(dst, p[6]);
      const spellName = p[10] || ('Spell ' + p[9]);
      const amt = +p[12 + advLen];
      if (Number.isFinite(amt) && amt > 0 && amt < 1e12) addDamage(name, spellName, p[9], amt);
      return;
    }
    if (type === 'SWING_DAMAGE') {
      const p = llParseCSV(ev);
      const dst = p[5];
      if (!llIsPlayer(dst)) return;
      const name = actorNameFor(dst, p[6]);
      const amt = +p[9 + advLen];
      if (Number.isFinite(amt) && amt > 0 && amt < 1e12) addDamage(name, 'Melee', 1, amt);
      return;
    }
    if (type === 'ENVIRONMENTAL_DAMAGE') {
      const p = llParseCSV(ev);
      const dst = p[5];
      if (!llIsPlayer(dst)) return;
      const name = actorNameFor(dst, p[6]);
      const envType = p[9 + advLen] || 'Environment';
      const amt = +p[10 + advLen];
      if (Number.isFinite(amt) && amt > 0 && amt < 1e12) addDamage(name, envType, null, amt);
      return;
    }

    if (type === 'UNIT_DIED') {
      const p = llParseCSV(ev);
      const dst = p[5];
      if (!llIsPlayer(dst)) return;
      cur.deaths.push({ targetID: actorIdFor(dst, p[6]), timestamp: pre.ts });
      return;
    }
    if (type === 'SPELL_RESURRECT') {
      const p = llParseCSV(ev);
      const dst = p[5];
      if (!llIsPlayer(dst)) return;
      cur.rez.push({ timestamp: pre.ts, targetID: actorIdFor(dst, p[6]) });
      return;
    }
    if (type === 'SPELL_INTERRUPT') {
      const p = llParseCSV(ev);
      const interrupter = p[1];
      if (!llIsPlayer(interrupter)) return;
      const interruptedSpell = Number(p[12]); // extraSpellId
      if (!interruptedSpell) return;
      cur.interrupts.push({ sourceID: actorIdFor(interrupter, p[2]), extraAbilityGameID: interruptedSpell, timestamp: pre.ts });
      return;
    }
  }

  const fightData = {};        // fight.id -> working buckets (with Maps)

  function finalize() {
    if (cur) {                 // unterminated encounter (log cut mid-fight): keep what we have
      fightData[cur.id] = cur;
      fights.push({ id: cur.id, name: cur.name, encounterID: cur.encounterID, difficulty: cur.difficulty,
        startTime: cur.startTime, endTime: cur.endTime, kill: cur.kill, fightPercentage: cur.fightPercentage });
      cur = null;
    }
  }

  // ---- provider interface (post-finalize) ----
  function getFights() { return fights.slice(); }
  function getActors() {
    return [...playersByGuid.values()].map(a => ({ id: a.id, name: a.name, subType: a.subType, server: a.server, role: null }));
  }
  function fetchDmgTable(fight) {
    const fd = fightData[fight.id];
    if (!fd) return { entries: [] };
    const entries = [...fd.dmg.values()].map(e => ({
      name: e.name, type: e.type, total: e.total,
      abilities: [...e.abilities.values()].map(ab => ({ name: ab.name, guid: ab.guid, total: ab.total, type: '' })),
    }));
    return { entries };
  }
  function fetchDeaths(fight) { const fd = fightData[fight.id]; return fd ? fd.deaths.slice() : []; }
  function fetchResurrects(fight) { const fd = fightData[fight.id]; return fd ? fd.rez.slice() : []; }
  function fetchInterruptEvents(fight) { const fd = fightData[fight.id]; return fd ? fd.interrupts.slice() : []; }
  function fetchCastEvents(fight, ids) {
    const fd = fightData[fight.id]; if (!fd) return [];
    const set = new Set(ids);
    return fd.fcasts.filter(c => set.has(c.abilityGameID));
  }
  function fetchEnemyCastEvents(fight, ids) {
    const fd = fightData[fight.id]; if (!fd) return [];
    const set = new Set(ids);
    return fd.ecasts.filter(c => set.has(c.abilityGameID));
  }
  // Slice 3 will implement this from retained per-hit damage-taken events. Until then the
  // deep path degrades to "no per-hit data" rather than crashing (analyze.js tolerates []).
  function fetchAvoidableEvents(/* fight, spellIds */) { return []; }

  return {
    processLine, finalize,
    getFights, getActors,
    fetchDmgTable, fetchDeaths, fetchResurrects,
    fetchInterruptEvents, fetchCastEvents, fetchEnemyCastEvents, fetchAvoidableEvents,
    _fightData: fightData,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createLocalReport, SPEC_ID_TO_NAME };
}
