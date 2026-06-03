let accessToken = null;
let allFights = [];
let actors = [];
let selectedPulls = new Set();
let currentEncounterId = null;
let reportCode = null;
let refKillAbilities = null;
// Ability name -> spell ID (guid), harvested from the damage table during the fast path.
// Used to auto-discover spell IDs (e.g. Dissonance) without hardcoding unverified numbers.
let abilityGuidByName = {};

const tankOnlyAbilitiesGlobal = new Set(['Melee', 'Stagger', 'Auto Attack', 'Melee Attack']);

// Keyed by `${reportCode}-${encounterId}-${pullIds.join(',')}`
const analysisCache = {};

function getCacheKey(pullIds) {
  return `${reportCode}-${currentEncounterId}-${[...pullIds].sort().join(',')}`;
}
