// The analyze button has no id — it is the lone button inside #analyzeSection.
function setAnalysisButtonsDisabled(disabled) {
  const analyzeBtn = document.querySelector('#analyzeSection button');
  if (analyzeBtn) analyzeBtn.disabled = disabled;
  const deepBtn = document.getElementById('deepBtn');
  if (deepBtn) deepBtn.disabled = disabled;
}

async function analyze() {
  if (analysisRunning) { showError('Analysis already in progress.'); return; }
  clearError();
  document.getElementById('resultsSection').classList.add('hidden');
  const apiKey = document.getElementById('anthropicKey').value.trim();
  if (!apiKey) { showError('Enter your Anthropic API key.'); return; }
  if (selectedPulls.size === 0) { showError('Select at least one pull to analyze.'); return; }

  // Chronological order — selectedPulls is a Set in toggle/insertion order, but the
  // P# pull tags are ordinals over the encounter's pulls in fight order.
  const pullIds = [...selectedPulls]
    .map(id => allFights.find(f => f.id === id))
    .filter(Boolean)
    .sort((a, b) => a.startTime - b.startTime)
    .map(f => f.id);
  const cacheKey = getCacheKey(pullIds);

  if (analysisCache[cacheKey] && analysisCache[cacheKey].fast) {
    const cached = analysisCache[cacheKey].fast;
    renderResults(cached.playerList, pullIds.length, false);
    showStatus('Sending to Claude for analysis...');
    setAnalysisButtonsDisabled(true);
    try {
      const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
      const specGuides = await loadSpecGuides(specsPresent);
      try { await runAI(cached.playerList, pullIds.length, apiKey, false, specGuides); } catch(e) {
        document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
      }
    } finally {
      setAnalysisButtonsDisabled(false);
    }
    hideStatus();
    return;
  }

  analysisRunning = true;
  setAnalysisButtonsDisabled(true);
  try {
    const playerStats = {};
    abilityGuidByName = {};
    const failedPulls = [];
    const analyzedDurationsMs = [];
    // pullIndex must be the ordinal over ALL of this encounter's pulls (what the P# tags
    // show), not the position within the selected subset.
    const encPulls = allFights.filter(f => f.encounterID === currentEncounterId).sort((a, b) => a.startTime - b.startTime);
    const bossFightForFilter = allFights.find(f => f.encounterID === currentEncounterId);
    const bossNameForFilter = bossFightForFilter ? bossFightForFilter.name : '';
    const nonAvoidableForFilter = BOSS_NON_AVOIDABLE[bossNameForFilter] || new Set();
    const bossKnowledge = BOSS_KNOWLEDGE_META[bossNameForFilter] || {};
    const interruptSpellIds = Object.keys(bossKnowledge.interruptTargetSpellIds || {}).map(Number);

    // Step 9: self-defensive usage tracking. Union of confirmed defensive spell IDs for the
    // specs present in this raid (DEFENSIVE_SPELL_IDS keyed by WCL subType). Spell IDs are
    // unique per ability, so per-player attribution stays correct without knowing class.
    const defensiveMap = {}; // spellId(string) -> ability name
    new Set(actors.map(a => a.subType).filter(Boolean)).forEach(spec => {
      const d = (typeof DEFENSIVE_SPELL_IDS !== 'undefined') ? DEFENSIVE_SPELL_IDS[spec] : null;
      if (d) Object.entries(d).forEach(([id, nm]) => { defensiveMap[id] = nm; });
    });
    const defensiveSpellIds = Object.keys(defensiveMap).map(Number);

    const init = (name) => {
      if (!playerStats[name]) playerStats[name] = { deaths: 0, pulls: 0, totalDmgTaken: 0, abilityDmg: {}, pullDetail: [], interruptStats: { totalLanded: 0 }, defensiveStats: { totalCast: 0 } };
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
        // Friendly casts (default hostilityType) are fetched solely for Step 9 defensive
        // tracking. Boss/add casts only appear with hostilityType:Enemies — fetched
        // separately for missed/overlap interrupt detection.
        const [dmgData, deaths, interruptData, castData, enemyCastData] = await Promise.all([
          dataProvider.fetchDmgTable(fight),
          dataProvider.fetchDeaths(fight),
          interruptSpellIds.length > 0 ? dataProvider.fetchInterruptEvents(fight) : Promise.resolve([]),
          defensiveSpellIds.length > 0 ? dataProvider.fetchCastEvents(fight, defensiveSpellIds) : Promise.resolve([]),
          interruptSpellIds.length > 0 ? dataProvider.fetchEnemyCastEvents(fight, interruptSpellIds) : Promise.resolve([])
        ]);
        const playersInPull = new Set();
        const pullSnapshot = {};

        if (dmgData && dmgData.entries) {
          dmgData.entries.forEach(entry => {
            const name = entry.name;
            if (!name || entry.type === 'NPC' || entry.type === 'Pet' || entry.type === 'Unknown') return;
            init(name);
            playersInPull.add(name);
            playerStats[name].totalDmgTaken += (entry.total || 0);
            // Deaths come from Deaths events only (handled below). Counting table overkill
            // here as well would double-count every death.
            if (!pullSnapshot[name]) pullSnapshot[name] = { totalDmgTaken: entry.total || 0, avoidable: [] };
            if (entry.abilities) {
              entry.abilities.forEach(ab => {
                if (ab.guid != null) {
                  if (!abilityGuidByName[ab.name]) abilityGuidByName[ab.name] = [];
                  if (!abilityGuidByName[ab.name].includes(ab.guid)) abilityGuidByName[ab.name].push(ab.guid);
                }
                const dmg = ab.total || 0;
                if (dmg <= 0) return;
                if (!playerStats[name].abilityDmg[ab.name]) playerStats[name].abilityDmg[ab.name] = { total: 0, pulls: 0 };
                playerStats[name].abilityDmg[ab.name].total += dmg;
                playerStats[name].abilityDmg[ab.name].pulls += 1;
                if (!nonAvoidableForFilter.has(ab.name) && !tankOnlyAbilitiesGlobal.has(ab.name) && !selfInflictedAbilitiesGlobal.has(ab.name)) {
                  pullSnapshot[name].avoidable.push({ name: ab.name, total: dmg });
                }
              });
            }
          });
        }

        const diedThisPull = new Set();
        deaths.forEach(ev => {
          const actor = actors.find(a => a.id === ev.targetID);
          if (actor) { init(actor.name); playersInPull.add(actor.name); playerStats[actor.name].deaths += 1; diedThisPull.add(actor.name); }
        });

        // Build interrupt data for this pull
        const pullInterrupts = { missed: [], overlaps: [], perPlayer: {} };
        if (interruptSpellIds.length > 0) {
          const interruptNames = bossKnowledge.interruptTargetSpellIds || {};
          interruptData.forEach(ev => {
            const actor = actors.find(a => a.id === ev.sourceID);
            if (!actor) return;
            if (!pullInterrupts.perPlayer[actor.name]) pullInterrupts.perPlayer[actor.name] = { landed: 0, events: [] };
            pullInterrupts.perPlayer[actor.name].landed += 1;
            const abilityName = interruptNames[ev.extraAbilityGameID] || `Spell ${ev.extraAbilityGameID}`;
            pullInterrupts.perPlayer[actor.name].events.push({ timestamp: ev.timestamp - fight.startTime, ability: abilityName });
          });
          // Missed/overlap detection runs against ENEMY casts only — the friendly castData
          // (defensive tracking) never contains boss/add casts.
          const enemyInterruptCasts = enemyCastData.filter(ev => ev.type === 'cast' && interruptSpellIds.includes(ev.abilityGameID));
          console.log('[RaidLens][Interrupts] pull', fid, 'enemy interrupt-target casts:', enemyInterruptCasts.length);
          enemyInterruptCasts.forEach(cast => {
            const matching = interruptData.filter(iv =>
              iv.extraAbilityGameID === cast.abilityGameID &&
              iv.timestamp <= cast.timestamp &&
              iv.timestamp >= cast.timestamp - 100
            );
            const abilityName = interruptNames[cast.abilityGameID] || `Spell ${cast.abilityGameID}`;
            if (matching.length === 0) {
              pullInterrupts.missed.push({ ability: abilityName, timestamp: cast.timestamp - fight.startTime });
            } else if (matching.length > 1) {
              const interrupters = matching.map(iv => { const a = actors.find(a => a.id === iv.sourceID); return a ? a.name : 'Unknown'; });
              pullInterrupts.overlaps.push({ ability: abilityName, timestamp: cast.timestamp - fight.startTime, interrupters });
            }
          });
        }

        // Build self-defensive usage for this pull (which defensives each player cast)
        const pullDefensives = {}; // playerName -> [{ name, timestamp }]
        if (defensiveSpellIds.length > 0) {
          castData.filter(ev => ev.type === 'cast' && defensiveMap[ev.abilityGameID]).forEach(cast => {
            const actor = actors.find(a => a.id === cast.sourceID);
            if (!actor) return;
            if (!pullDefensives[actor.name]) pullDefensives[actor.name] = [];
            pullDefensives[actor.name].push({ name: defensiveMap[cast.abilityGameID], timestamp: cast.timestamp - fight.startTime });
          });
        }

        playersInPull.forEach(name => {
          playerStats[name].pulls += 1;
          const snap = pullSnapshot[name] || { totalDmgTaken: 0, avoidable: [] };
          const myPI = pullInterrupts.perPlayer[name];
          if (myPI) playerStats[name].interruptStats.totalLanded += myPI.landed;
          const myDef = (pullDefensives[name] || []).sort((a,b) => a.timestamp - b.timestamp);
          playerStats[name].defensiveStats.totalCast += myDef.length;
          playerStats[name].pullDetail.push({
            pullIndex: encPulls.findIndex(f => f.id === fid) + 1, fightId: fid,
            isKill: fight.kill || false, fightPct: fight.fightPercentage,
            durationMs: fight.endTime - fight.startTime,
            totalDmgTaken: snap.totalDmgTaken,
            avoidable: snap.avoidable.sort((a,b) => b.total - a.total),
            hits: [],
            interrupts: pullInterrupts,
            defensives: myDef,
            died: diedThisPull.has(name)
          });
        });

        const partialList = buildPlayerList(playerStats);
        document.getElementById('progressPulls').textContent = `${i+1}/${pullIds.length}`;
        document.getElementById('progressPlayers').textContent = partialList.length;
        analyzedDurationsMs.push(fight.endTime - fight.startTime);
        document.getElementById('progressAvg').textContent = fmtTs(analyzedDurationsMs.reduce((a, b) => a + b, 0) / analyzedDurationsMs.length);
        renderPlayerTable(partialList, pullIds.length);

      } catch(e) { failedPulls.push(fid); console.warn(`Pull ${fid} failed:`, e.message); }
    }

    hideStatus();

    const playerList = buildPlayerList(playerStats);
    if (failedPulls.length > 0) {
      showError(`Failed to fetch pull data for fight ID${failedPulls.length > 1 ? 's' : ''} ${failedPulls.join(', ')}. Results below are PARTIAL and were not cached — click "Analyze selected pulls" again to retry.`);
    } else {
      // Snapshot the harvested ability->guid map onto the cache entry so deep analysis can
      // still auto-discover Dissonance even after a boss switch has repopulated the global
      // abilityGuidByName with a different boss's abilities (Step 10 + Step 12 interaction).
      analysisCache[cacheKey] = { fast: { playerList, pullIds, abilityGuidByName: { ...abilityGuidByName } } };
    }

    renderResults(playerList, pullIds.length);
    showStatus('Sending to Claude for analysis...');
    const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
    const specGuides = await loadSpecGuides(specsPresent);
    try { await runAI(playerList, pullIds.length, apiKey, false, specGuides); } catch(e) {
      document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
    }
    hideStatus();
  } finally {
    analysisRunning = false;
    setAnalysisButtonsDisabled(false);
  }
}

// Step 10: resolve the Dissonance spell ID(s) for a boss. Prefers a pinned
// dissonanceSpellIds map; otherwise auto-discovers from the damage table ability guids
// captured during the fast path (abilityGuidByName, name -> array — same-named abilities
// can carry multiple guids, e.g. Dissonance's two realms). Returns [] if none available.
function resolveDissonanceSpellIds(bossName, guidMap) {
  const guids = guidMap || abilityGuidByName;
  const meta = BOSS_KNOWLEDGE_META[bossName] || {};
  const ids = new Set(Object.keys(meta.dissonanceSpellIds || {}).map(Number));
  (meta.dissonanceAbilityNames || []).forEach(nm => {
    (guids[nm] || []).forEach(g => { if (g != null) ids.add(Number(g)); });
  });
  return [...ids].filter(n => !Number.isNaN(n));
}

async function runDeepAnalysis() {
  if (analysisRunning) { showError('Analysis already in progress.'); return; }
  const apiKey = document.getElementById('anthropicKey').value.trim();
  if (!apiKey) { showError('Enter your Anthropic API key.'); return; }
  // Chronological order — must match the fast path so pullIndex values agree.
  const pullIds = [...selectedPulls]
    .map(id => allFights.find(f => f.id === id))
    .filter(Boolean)
    .sort((a, b) => a.startTime - b.startTime)
    .map(f => f.id);
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
    setAnalysisButtonsDisabled(true);
    try {
      const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
      const specGuides = await loadSpecGuides(specsPresent);
      try { await runAI(analysisCache[cacheKey].deep.playerList, pullIds.length, apiKey, true, specGuides); } catch(e) {
        document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
      }
    } finally {
      setAnalysisButtonsDisabled(false);
    }
    hideStatus();
    return;
  }

  analysisRunning = true;
  setAnalysisButtonsDisabled(true);
  document.getElementById('deepBtn').textContent = 'Running deep analysis...';
  try {
    const playerList = JSON.parse(JSON.stringify(analysisCache[cacheKey].fast.playerList));

    // Step 10: Dissonance source tracking (Mythic). Spell ID auto-discovered from the table guid,
    // read from the fast cache snapshot so a prior boss switch can't blank the global (Step 12).
    const cachedGuidMap = (analysisCache[cacheKey].fast && analysisCache[cacheKey].fast.abilityGuidByName) || abilityGuidByName;
    const dissonanceSpellIds = resolveDissonanceSpellIds(bossName, cachedGuidMap);
    const dissonanceIdSet = new Set(dissonanceSpellIds);
    const trackDissonance = dissonanceSpellIds.length > 0;
    if (trackDissonance) {
      console.log('[RaidLens][Dissonance] tracking spell IDs (auto-discovered from table guid unless pinned):', dissonanceSpellIds);
      playerList.forEach(p => { p.dissonanceStats = { sourced: 0, taken: 0 }; });
    } else {
      console.log('[RaidLens][Dissonance] not tracking — no "Dissonance" ability guid was captured from the damage table for this boss.');
    }

    const fightMap = {};
    allFights.forEach(f => { fightMap[f.id] = f; });

    const deathTimelines = {};
    for (const p of playerList) {
      for (const pd of p.pullDetail) {
        if (!deathTimelines[pd.fightId]) deathTimelines[pd.fightId] = [];
      }
    }

    const uniqueFightIds = [...new Set(pullIds)];
    const failedPulls = [];

    for (let i = 0; i < uniqueFightIds.length; i++) {
      const fid = uniqueFightIds[i];
      const fight = fightMap[fid];
      if (!fight) continue;
      showStatus(`Deep fetch pull ${i+1} of ${uniqueFightIds.length}...`);

      try {
        const deaths = await dataProvider.fetchDeaths(fight);
        deathTimelines[fid] = deaths
          .map(ev => ev.timestamp)
          .filter(t => t != null)
          .sort((a,b) => a - b);

        // Battle rezzes: a brezzed player is alive again, so deadAtTime must subtract
        // resurrects before the hit. A failed fetch falls back to deaths-only counting.
        let rezTimeline = [];
        try {
          const rezzes = await dataProvider.fetchResurrects(fight);
          rezTimeline = rezzes.map(ev => ev.timestamp).filter(t => t != null).sort((a,b) => a - b);
          console.log('[RaidLens][Rez] pull', fid, 'resurrect events:', rezzes.length);
        } catch(e) {
          console.warn(`[RaidLens][Rez] pull ${fid} resurrect fetch failed — deadAtTime falls back to deaths only:`, e.message);
        }

        // Fetch avoidable + Dissonance damage events in one paginated pass.
        const fetchSpellIds = { ...avoidableSpellIds };
        dissonanceSpellIds.forEach(id => { if (!fetchSpellIds[id]) fetchSpellIds[id] = 'Dissonance'; });
        const events = await dataProvider.fetchAvoidableEvents(fight, fetchSpellIds);

        const dissonanceLog = [];
        events.forEach(ev => {
          const relativeTs = ev.timestamp - fight.startTime;
          // A fully-absorbed hit still positionally happened.
          const hitAmount = (ev.amount || 0) + (ev.absorbed || 0);

          // Dissonance: source-based attribution (Step 10). Credit BOTH the source (the player
          // causing it — wrong realm / too close) and the target who took it.
          if (trackDissonance && dissonanceIdSet.has(ev.abilityGameID)) {
            const srcActor = actors.find(a => a.id === ev.sourceID);
            const tgtActor = actors.find(a => a.id === ev.targetID);
            if (dissonanceLog.length < 10) dissonanceLog.push({ ts: fmtTs(relativeTs), source: srcActor ? srcActor.name : `id#${ev.sourceID}`, target: tgtActor ? tgtActor.name : `id#${ev.targetID}`, amount: hitAmount });
            if (srcActor) {
              const sp = playerList.find(p => p.name === srcActor.name);
              if (sp) {
                sp.dissonanceStats = sp.dissonanceStats || { sourced: 0, taken: 0 };
                sp.dissonanceStats.sourced += 1;
                const pdS = sp.pullDetail.find(d => d.fightId === fid);
                if (pdS) { pdS.dissonance = pdS.dissonance || { sourced: 0, taken: 0, events: [] }; pdS.dissonance.sourced += 1; pdS.dissonance.events.push({ role: 'source', timestamp: relativeTs, other: tgtActor ? tgtActor.name : 'Unknown', amount: hitAmount }); }
              }
            }
            if (tgtActor) {
              const tp = playerList.find(p => p.name === tgtActor.name);
              if (tp) {
                tp.dissonanceStats = tp.dissonanceStats || { sourced: 0, taken: 0 };
                tp.dissonanceStats.taken += 1;
                const pdT = tp.pullDetail.find(d => d.fightId === fid);
                if (pdT) { pdT.dissonance = pdT.dissonance || { sourced: 0, taken: 0, events: [] }; pdT.dissonance.taken += 1; pdT.dissonance.events.push({ role: 'target', timestamp: relativeTs, other: srcActor ? srcActor.name : 'Unknown', amount: hitAmount }); }
              }
            }
            return;
          }

          // Avoidable damage hit (existing logic)
          const actor = actors.find(a => a.id === ev.targetID);
          if (!actor) return;
          const player = playerList.find(p => p.name === actor.name);
          if (!player) return;
          const pd = player.pullDetail.find(d => d.fightId === fid);
          if (!pd) return;

          const deadAtTime = Math.max(0,
            deathTimelines[fid].filter(t => t < ev.timestamp).length -
            rezTimeline.filter(t => t < ev.timestamp).length
          );
          const abilityName = avoidableSpellIds[ev.abilityGameID] || `Spell ${ev.abilityGameID}`;

          if (!pd.hits) pd.hits = [];
          pd.hits.push({
            timestamp: relativeTs,
            ability: abilityName,
            spellId: ev.abilityGameID,
            amount: hitAmount,
            deadAtTime
          });
        });
        if (trackDissonance && dissonanceLog.length > 0) {
          console.log(`[RaidLens][Dissonance] fight ${fid} sample events (CONFIRM source & target are players):`, dissonanceLog);
        }

        playerList.forEach(p => {
          const pd = p.pullDetail.find(d => d.fightId === fid);
          if (pd && pd.hits) pd.hits.sort((a,b) => a.timestamp - b.timestamp);
        });

        renderPlayerTable(playerList, pullIds.length, true);

      } catch(e) { failedPulls.push(fid); console.warn(`Deep fetch pull ${fid} failed:`, e.message); }
    }

    if (failedPulls.length > 0) {
      showError(`Deep fetch failed for fight ID${failedPulls.length > 1 ? 's' : ''} ${failedPulls.join(', ')}. Deep results below are PARTIAL and were not cached — click "Deep analysis" again to retry.`);
    } else {
      analysisCache[cacheKey].deep = { playerList, pullIds };
    }

    hideStatus();
    renderResults(playerList, pullIds.length, true);

    showStatus('Sending to Claude for deep analysis...');
    const specsPresent = new Set(actors.map(a => a.subType).filter(Boolean));
    const specGuides = await loadSpecGuides(specsPresent);
    try { await runAI(playerList, pullIds.length, apiKey, true, specGuides); } catch(e) {
      document.getElementById('aiOutput').textContent = 'Claude analysis failed: ' + e.message;
    }
    hideStatus();
  } finally {
    analysisRunning = false;
    setAnalysisButtonsDisabled(false);
    document.getElementById('deepBtn').textContent = 'Deep analysis ↓';
  }
}
