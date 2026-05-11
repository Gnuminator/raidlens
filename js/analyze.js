async function analyze() {
  clearError();
  document.getElementById('resultsSection').classList.add('hidden');
  const apiKey = document.getElementById('anthropicKey').value.trim();
  if (!apiKey) { showError('Enter your Anthropic API key.'); return; }
  if (selectedPulls.size === 0) { showError('Select at least one pull to analyze.'); return; }

  const pullIds = [...selectedPulls];
  const cacheKey = getCacheKey(pullIds);

  if (analysisCache[cacheKey] && analysisCache[cacheKey].fast) {
    const cached = analysisCache[cacheKey].fast;
    renderResults(cached.playerList, pullIds.length, cached.playerList);
    showStatus('Sending to Claude for analysis...');
    const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
    const specGuides = await loadSpecGuides(specsPresent);
    try { await runAI(cached.playerList, pullIds.length, apiKey, false, specGuides); } catch(e) {
      document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
    }
    hideStatus();
    return;
  }

  const playerStats = {};
  const bossFightForFilter = allFights.find(f => f.encounterID === currentEncounterId);
  const bossNameForFilter = bossFightForFilter ? bossFightForFilter.name : '';
  const nonAvoidableForFilter = BOSS_NON_AVOIDABLE[bossNameForFilter] || new Set();

  const init = (name) => {
    if (!playerStats[name]) playerStats[name] = { deaths: 0, pulls: 0, totalDmgTaken: 0, abilityDmg: {}, pullDetail: [] };
  };

  document.getElementById('resultsSection').classList.remove('hidden');
  document.getElementById('summaryCards').innerHTML = `
    <div class="metric-card"><div class="metric-label">Pulls analyzed</div><div class="metric-value" id="progressPulls">0/${pullIds.length}</div></div>
    <div class="metric-card"><div class="metric-label">Players tracked</div><div class="metric-value" id="progressPlayers">—</div></div>
    <div class="metric-card"><div class="metric-label">Avg pull length</div><div class="metric-value" id="progressAvg" style="font-size:18px;">—</div></div>
  `;
  document.getElementById('playerTableCard').innerHTML = `<div style="color:var(--muted);font-size:13px;padding:1rem 0;">Fetching pulls...</div>`;

  for (let i = 0; i < pullIds.length; i++) {
    const fid = pullIds[i];
    const fight = allFights.find(f => f.id === fid);
    if (!fight) continue;
    showStatus(`Fetching pull ${i+1} of ${pullIds.length}...`);
    try {
      const [dmgData, deaths] = await Promise.all([fetchDmgTable(fight), fetchDeaths(fight)]);
      const playersInPull = new Set();
      const pullSnapshot = {};

      if (dmgData && dmgData.entries) {
        dmgData.entries.forEach(entry => {
          const name = entry.name;
          if (!name || entry.type === 'NPC' || entry.type === 'Pet' || entry.type === 'Unknown') return;
          init(name);
          playersInPull.add(name);
          playerStats[name].totalDmgTaken += (entry.total || 0);
          if (entry.overkill && entry.overkill > 0) playerStats[name].deaths += 1;
          if (!pullSnapshot[name]) pullSnapshot[name] = { totalDmgTaken: entry.total || 0, avoidable: [] };
          if (entry.abilities) {
            entry.abilities.forEach(ab => {
              const dmg = ab.total || 0;
              if (dmg <= 0) return;
              if (!playerStats[name].abilityDmg[ab.name]) playerStats[name].abilityDmg[ab.name] = { total: 0, pulls: 0 };
              playerStats[name].abilityDmg[ab.name].total += dmg;
              playerStats[name].abilityDmg[ab.name].pulls += 1;
              if (!nonAvoidableForFilter.has(ab.name) && !tankOnlyAbilitiesGlobal.has(ab.name)) {
                pullSnapshot[name].avoidable.push({ name: ab.name, total: dmg });
              }
            });
          }
        });
      }

      deaths.forEach(ev => {
        const actor = actors.find(a => a.id === ev.targetID);
        if (actor) { init(actor.name); playersInPull.add(actor.name); playerStats[actor.name].deaths += 1; }
      });

      playersInPull.forEach(name => {
        playerStats[name].pulls += 1;
        const snap = pullSnapshot[name] || { totalDmgTaken: 0, avoidable: [] };
        playerStats[name].pullDetail.push({
          pullIndex: i + 1, fightId: fid,
          isKill: fight.kill || false, fightPct: fight.fightPercentage,
          durationMs: fight.endTime - fight.startTime,
          totalDmgTaken: snap.totalDmgTaken,
          avoidable: snap.avoidable.sort((a,b) => b.total - a.total),
          hits: []
        });
      });

      const partialList = buildPlayerList(playerStats);
      document.getElementById('progressPulls').textContent = `${i+1}/${pullIds.length}`;
      document.getElementById('progressPlayers').textContent = partialList.length;
      renderPlayerTable(partialList, pullIds.length);

    } catch(e) { console.warn(`Pull ${fid} failed:`, e.message); }
  }

  hideStatus();

  const playerList = buildPlayerList(playerStats);
  analysisCache[cacheKey] = { fast: { playerList, pullIds } };

  renderResults(playerList, pullIds.length);
  showStatus('Sending to Claude for analysis...');
  const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
  const specGuides = await loadSpecGuides(specsPresent);
  try { await runAI(playerList, pullIds.length, apiKey, false, specGuides); } catch(e) {
    document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
  }
  hideStatus();
}

async function runDeepAnalysis() {
  const apiKey = document.getElementById('anthropicKey').value.trim();
  if (!apiKey) { showError('Enter your Anthropic API key.'); return; }
  const pullIds = [...selectedPulls];
  const cacheKey = getCacheKey(pullIds);
  if (!analysisCache[cacheKey] || !analysisCache[cacheKey].fast) {
    showError('Run fast analysis first before deep analysis.'); return;
  }

  const bossFight = allFights.find(f => f.encounterID === currentEncounterId);
  const bossName = bossFight ? bossFight.name : '';
  const bossKnowledge = BOSS_KNOWLEDGE_META[bossName] || {};
  const avoidableSpellIds = bossKnowledge.avoidableSpellIds || {};

  if (Object.keys(avoidableSpellIds).length === 0) {
    showError(`No avoidable spell IDs defined for "${bossName}". Add them to BOSS_KNOWLEDGE_META to enable deep analysis.`);
    return;
  }

  if (analysisCache[cacheKey].deep) {
    renderResults(analysisCache[cacheKey].deep.playerList, pullIds.length, true);
    showStatus('Sending to Claude for analysis...');
    const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
    const specGuides = await loadSpecGuides(specsPresent);
    try { await runAI(analysisCache[cacheKey].deep.playerList, pullIds.length, apiKey, true, specGuides); } catch(e) {
      document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
    }
    hideStatus();
    return;
  }

  const playerList = JSON.parse(JSON.stringify(analysisCache[cacheKey].fast.playerList));

  const fightMap = {};
  allFights.forEach(f => { fightMap[f.id] = f; });

  const deathTimelines = {};
  for (const p of playerList) {
    for (const pd of p.pullDetail) {
      if (!deathTimelines[pd.fightId]) deathTimelines[pd.fightId] = [];
    }
  }

  const uniqueFightIds = [...new Set(pullIds)];
  document.getElementById('deepBtn').disabled = true;
  document.getElementById('deepBtn').textContent = 'Running deep analysis...';

  for (let i = 0; i < uniqueFightIds.length; i++) {
    const fid = uniqueFightIds[i];
    const fight = fightMap[fid];
    if (!fight) continue;
    showStatus(`Deep fetch pull ${i+1} of ${uniqueFightIds.length}...`);

    try {
      const deaths = await fetchDeaths(fight);
      deathTimelines[fid] = deaths
        .map(ev => ev.timestamp)
        .filter(Boolean)
        .sort((a,b) => a - b);

      const events = await fetchAvoidableEvents(fight, avoidableSpellIds);

      events.forEach(ev => {
        const actor = actors.find(a => a.id === ev.targetID);
        if (!actor) return;
        const player = playerList.find(p => p.name === actor.name);
        if (!player) return;
        const pd = player.pullDetail.find(d => d.fightId === fid);
        if (!pd) return;

        const relativeTs = ev.timestamp - fight.startTime;
        const deadAtTime = deathTimelines[fid].filter(t => t < ev.timestamp).length;
        const abilityName = avoidableSpellIds[ev.abilityGameID] || `Spell ${ev.abilityGameID}`;

        if (!pd.hits) pd.hits = [];
        pd.hits.push({
          timestamp: relativeTs,
          ability: abilityName,
          spellId: ev.abilityGameID,
          amount: ev.amount || 0,
          deadAtTime
        });
      });

      playerList.forEach(p => {
        const pd = p.pullDetail.find(d => d.fightId === fid);
        if (pd && pd.hits) pd.hits.sort((a,b) => a.timestamp - b.timestamp);
      });

      renderPlayerTable(playerList, pullIds.length, true);

    } catch(e) { console.warn(`Deep fetch pull ${fid} failed:`, e.message); }
  }

  analysisCache[cacheKey].deep = { playerList, pullIds };

  hideStatus();
  renderResults(playerList, pullIds.length, true);
  document.getElementById('deepBtn').disabled = false;
  document.getElementById('deepBtn').textContent = 'Deep analysis ↓';

  showStatus('Sending to Claude for deep analysis...');
  const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
  const specGuides = await loadSpecGuides(specsPresent);
  try { await runAI(playerList, pullIds.length, apiKey, true, specGuides); } catch(e) {
    document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
  }
  hideStatus();
}
