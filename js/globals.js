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
const selfInflictedAbilitiesGlobal = new Set(['Burning Rush', 'Life Tap', 'Demon Skin', 'Blood Barrier', 'Crimson Scourge', 'Death Strike', 'Frenzied Regeneration']);

let analysisRunning = false;

// Keyed by `${reportCode}-${encounterId}-${pullIds.join(',')}`
const analysisCache = {};

function getCacheKey(pullIds) {
  return `${reportCode}-${currentEncounterId}-${[...pullIds].sort().join(',')}`;
}
