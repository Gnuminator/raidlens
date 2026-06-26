let accessToken = null;
let allFights = [];
let actors = [];
let selectedPulls = new Set();
let currentEncounterId = null;
let reportCode = null;
let refKillAbilities = null;
// Ability name -> ARRAY of spell IDs (guids), harvested from the damage table during the
// fast path. Same-named abilities can carry multiple guids (e.g. Dissonance's two realms).
// Used to auto-discover spell IDs without hardcoding unverified numbers.
let abilityGuidByName = {};

const tankOnlyAbilitiesGlobal = new Set(['Melee', 'Stagger', 'Auto Attack', 'Melee Attack']);
// Abilities that surface in a damage-taken table but are a player's own / a friendly's effect,
// never a boss mechanic — excluded from avoidable detection on every boss. Shadow Word: Death
// (priest self-recoil, logs with a nil source) and Spirit Link (Resto Shaman totem
// redistribution) were confirmed mislabelled as boss damage by the v2 log parse.
const selfInflictedAbilitiesGlobal = new Set(['Burning Rush', 'Life Tap', 'Demon Skin', 'Blood Barrier', 'Crimson Scourge', 'Death Strike', 'Frenzied Regeneration', 'Shadow Word: Death', 'Spirit Link']);

let analysisRunning = false;

// Data-source abstraction. analyze.js / runDeepAnalysis call dataProvider.fetchX(...)
// instead of the bare WCL functions, so a parsed local combat log can stand in for the
// WCL API with no downstream changes. WCL_PROVIDER is assigned in wcl-api.js (default);
// loadLocalLog() in report.js swaps in the local-log provider.
let dataProvider = null;
let dataSource = 'wcl';   // 'wcl' | 'local'
let localReport = null;   // the createLocalReport() instance when dataSource === 'local'

// Keyed by `${reportCode}-${encounterId}-${pullIds.join(',')}`
const analysisCache = {};

function getCacheKey(pullIds) {
  return `${reportCode}-${currentEncounterId}-${[...pullIds].sort().join(',')}`;
}
