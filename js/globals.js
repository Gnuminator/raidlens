let accessToken = null;
let allFights = [];
let actors = [];
let selectedPulls = new Set();
let currentEncounterId = null;
let reportCode = null;
let refKillAbilities = null;

const tankOnlyAbilitiesGlobal = new Set(['Melee', 'Stagger', 'Auto Attack', 'Melee Attack']);

// Keyed by `${reportCode}-${encounterId}-${pullIds.join(',')}`
const analysisCache = {};

function getCacheKey(pullIds) {
  return `${reportCode}-${currentEncounterId}-${[...pullIds].sort().join(',')}`;
}
