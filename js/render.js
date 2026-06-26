function buildPlayerList(playerStats) {
  const numPlayers = Object.keys(playerStats).length;
  const abilityPlayerCount = {};
  Object.values(playerStats).forEach(s => {
    Object.keys(s.abilityDmg).forEach(ab => { abilityPlayerCount[ab] = (abilityPlayerCount[ab] || 0) + 1; });
  });
  const raidWideAbilities = new Set(
    Object.entries(abilityPlayerCount).filter(([, count]) => count >= numPlayers * 0.5).map(([ab]) => ab)
  );
  console.log('[RaidLens][RaidWideFilter] classified raid-wide:', [...raidWideAbilities]);
  // Confirmed avoidable mechanics from boss knowledge are exempt from the raid-wide
  // heuristic — across a long night nearly everyone gets clipped once, which would
  // otherwise hide the exact abilities this tool exists to surface.
  const bossFightBK = allFights.find(f => f.encounterID === currentEncounterId);
  const bossMetaBK = BOSS_KNOWLEDGE_META[resolveBossKey(currentEncounterId, bossFightBK ? bossFightBK.name : '')] || {};
  const confirmedAvoidable = new Set(Object.values(bossMetaBK.avoidableSpellIds || {}));
  (bossMetaBK.dissonanceAbilityNames || []).forEach(nm => confirmedAvoidable.add(nm));
  const tankSpecs = new Set(['Brewmaster', 'Protection', 'Blood', 'Vengeance', 'Guardian']);
  const tankOnlyAbilities = new Set(['Melee', 'Stagger', 'Auto Attack', 'Melee Attack']);
  const tankNames = new Set(actors.filter(a => tankSpecs.has(a.subType)).map(a => a.name));
  if (tankNames.size === 0) {
    Object.entries(playerStats).forEach(([name, s]) => {
      const top = Object.entries(s.abilityDmg).sort((a,b) => b[1].total - a[1].total)[0];
      if (top && tankOnlyAbilities.has(top[0])) tankNames.add(name);
    });
  }
  const playerSpecMap = {};
  actors.forEach(a => { if (a.name) playerSpecMap[a.name] = a.subType || 'Unknown'; });

  return Object.entries(playerStats)
    .filter(([,s]) => s.pulls > 0)
    .map(([name, s]) => {
      const isTank = tankNames.has(name);
      const spec = playerSpecMap[name] || 'Unknown';
      const relevantAbilities = Object.entries(s.abilityDmg)
        .filter(([ab]) => isTank || ((!raidWideAbilities.has(ab) || confirmedAvoidable.has(ab)) && !tankOnlyAbilities.has(ab) && !selfInflictedAbilitiesGlobal.has(ab)))
        .sort((a,b) => b[1].total - a[1].total).slice(0, 6)
        .map(([ab, d]) => ({ name: ab, total: d.total, pulls: d.pulls }));
      const topAbilities = Object.entries(s.abilityDmg)
        .filter(([ab]) => !selfInflictedAbilitiesGlobal.has(ab))
        .sort((a,b) => b[1].total - a[1].total).slice(0, 6)
        .map(([ab, d]) => ({ name: ab, total: d.total, pulls: d.pulls }));
      return { name, spec, isTank, ...s, topAbilities, relevantAbilities, pullDetail: s.pullDetail || [] };
    })
    .sort((a,b) => b.deaths - a.deaths || b.totalDmgTaken - a.totalDmgTaken);
}

function renderResults(players, numPulls, isDeep = false) {
  const fights = allFights.filter(f => f.encounterID === currentEncounterId && selectedPulls.has(f.id));
  const avg = fights.reduce((s,f) => s + (f.endTime - f.startTime), 0) / (fights.length || 1);
  document.getElementById('summaryCards').innerHTML = `
    <div class="metric-card"><div class="metric-label">Pulls analyzed</div><div class="metric-value">${numPulls}</div></div>
    <div class="metric-card"><div class="metric-label">Players tracked</div><div class="metric-value">${players.length}</div></div>
    <div class="metric-card"><div class="metric-label">Avg pull length</div><div class="metric-value" style="font-size:18px;">${fmtTs(avg)}</div></div>
  `;
  renderPlayerTable(players, numPulls, isDeep);
  document.getElementById('resultsSection').classList.remove('hidden');
  document.getElementById('aiOutput').textContent = 'Waiting for Claude analysis...';
  document.getElementById('tokenUsage').textContent = '';

  const deepSection = document.getElementById('deepSection');
  if (deepSection) {
    deepSection.style.display = isDeep ? 'none' : 'block';
  }
}

function renderPlayerTable(players, numPulls, isDeep = false) {
  const colors = [
    ['#4a9eda','#0d2a40'],['#c89b3c','#2a1f08'],['#e05252','#3a0f0f'],
    ['#52b788','#0d2a1d'],['#a07828','#1f150a'],['#9a6dd7','#1e0d35'],
    ['#e09c40','#2a1a05'],['#5bc4c4','#0a2828'],['#d4537e','#2a0d1a'],['#7aab5a','#152009']
  ];

  const bossFlForInt = allFights.find(f => f.encounterID === currentEncounterId);
  const bossNmForInt = resolveBossKey(currentEncounterId, bossFlForInt ? bossFlForInt.name : '');
  const hasInterruptTracking = Object.keys((BOSS_KNOWLEDGE_META[bossNmForInt] || {}).interruptTargetSpellIds || {}).length > 0;
  const nonAvoidable = BOSS_NON_AVOIDABLE[bossNmForInt] || new Set();
  const hasDefensiveTracking = players.some(p => (p.pullDetail || []).some(pd => Array.isArray(pd.defensives)));
  const colDefs = ['44px', '80px', '68px', '1fr'];
  if (hasInterruptTracking) colDefs.push('90px');
  if (hasDefensiveTracking) colDefs.push('104px');
  const gridCols = colDefs.join(' ');

  const rows = players.map((p, i) => {
    const [fg, bg] = colors[i % colors.length];
    const initials = esc(p.name.slice(0,2).toUpperCase());
    const deathBadge = p.deaths === 0 ? '' :
      p.deaths >= 5 ? `<span class="badge badge-danger">${p.deaths}x death</span>` :
      p.deaths >= 2 ? `<span class="badge badge-warn">${p.deaths}x death</span>` :
      `<span class="badge">${p.deaths}x death</span>`;
    const tankBadge = p.isTank ? `<span class="badge" style="background:rgba(74,158,218,0.15);color:#4a9eda;border:1px solid rgba(74,158,218,0.3);">Tank</span>` : '';
    const specLabel = p.spec && p.spec !== 'Unknown' ? `<span style="font-size:11px;color:var(--muted);margin-left:4px;">${esc(p.spec)}</span>` : '';
    const displayAb = p.isTank
      ? p.topAbilities.find(a => !nonAvoidable.has(a.name)) || null
      : p.relevantAbilities.find(a => !nonAvoidable.has(a.name)) || null;
    const topAb = p.isTank
      ? (displayAb ? `Top non-tank dmg: ${esc(displayAb.name)} — ${fmt(displayAb.total)} over ${displayAb.pulls} pull${displayAb.pulls !== 1 ? 's' : ''}` : 'Tank damage profile normal')
      : (displayAb ? `Top avoidable: ${esc(displayAb.name)} — ${fmt(displayAb.total)} over ${displayAb.pulls} pull${displayAb.pulls !== 1 ? 's' : ''}` : 'No notable avoidable damage');
    const attendance = p.pulls < numPulls ? `<span style="color:var(--warn);">${p.pulls}/${numPulls} pulls</span>` : `${p.pulls}/${numPulls} pulls`;
    const interruptLine = hasInterruptTracking && p.interruptStats
      ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">Interrupts: <span style="color:var(--ok);">${p.interruptStats.totalLanded}</span> landed across ${p.pulls} pull${p.pulls !== 1 ? 's' : ''}</div>`
      : '';
    const defTracked = hasDefensiveTracking && typeof DEFENSIVE_SPELL_IDS !== 'undefined'
      && DEFENSIVE_SPELL_IDS[p.spec] && Object.keys(DEFENSIVE_SPELL_IDS[p.spec]).length > 0;
    const deathsNoDef = defTracked
      ? (p.pullDetail || []).filter(pd => pd.died && (!pd.defensives || pd.defensives.length === 0)).length
      : 0;
    const defensiveLine = !hasDefensiveTracking ? ''
      : defTracked
        ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">🛡 Defensives: <span style="color:${(p.defensiveStats || {}).totalCast > 0 ? 'var(--ok)' : 'var(--warn)'};">${(p.defensiveStats || {}).totalCast || 0}</span> cast across ${p.pulls} pull${p.pulls !== 1 ? 's' : ''}${deathsNoDef >= 3 ? ` <span style="color:var(--danger);">· died ${deathsNoDef}x with none</span>` : ''}</div>`
        : `<div style="font-size:11px;color:var(--muted);margin-top:2px;">🛡 Defensives: <span style="color:var(--muted);">not tracked for this spec</span></div>`;
    const dissonanceLine = p.dissonanceStats
      ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">🔊 Dissonance: caused <span style="color:${p.dissonanceStats.sourced > 0 ? 'var(--danger)' : 'var(--ok)'};">${p.dissonanceStats.sourced}</span> · took <span style="color:${p.dissonanceStats.taken > 0 ? 'var(--warn)' : 'var(--ok)'};">${p.dissonanceStats.taken}</span></div>`
      : '';
    const rowId = `expand-${i}`;

    const pullRows = (p.pullDetail || []).map(pd => {
      const avoidableFiltered = (pd.avoidable || []).filter(a => !nonAvoidable.has(a.name) && !tankOnlyAbilitiesGlobal.has(a.name));

      let avoidableContent = '';
      if (isDeep && pd.hits && pd.hits.length > 0) {
        const hitsByAbility = {};
        pd.hits.forEach(h => {
          if (!hitsByAbility[h.ability]) hitsByAbility[h.ability] = [];
          hitsByAbility[h.ability].push(h);
        });
        avoidableContent = Object.entries(hitsByAbility).map(([ab, hits]) => {
          const hitList = hits.map(h => {
            const deadNote = h.deadAtTime >= 3
              ? `<span style="color:var(--warn);font-size:11px;margin-left:2px;" title="${h.deadAtTime} players already dead at this point">⚠${h.deadAtTime}dead</span>`
              : '';
            return `<span style="margin-right:8px;white-space:nowrap;font-size:11px;background:rgba(200,155,60,0.08);border-radius:3px;padding:1px 4px;">${fmtTs(h.timestamp)} <span style="color:var(--text);font-weight:500;">${fmt(h.amount)}</span>${deadNote}</span>`;
          }).join('');
          return `<div style="margin-bottom:5px;"><span style="color:var(--accent);font-size:11px;font-weight:500;">⏱ ${esc(ab)}</span> <span style="color:var(--muted);font-size:11px;">→</span> ${hitList}</div>`;
        }).join('');
        // Aggregated avoidable entries (fast-path data) not covered by the deep-tracked
        // spell IDs — per the column legend, no-⏱ entries are aggregated totals.
        const hitAbilityNames = new Set(pd.hits.map(h => h.ability));
        avoidableContent += avoidableFiltered.filter(a => !hitAbilityNames.has(a.name)).map(a =>
          `<span style="display:inline-flex;gap:5px;margin-right:16px;white-space:nowrap;margin-bottom:2px;">` +
          `<span style="color:var(--danger);">${esc(a.name)}</span>` +
          `<span style="color:var(--text);font-weight:500;">${fmt(a.total)}</span>` +
          `</span>`).join('');
        if (!avoidableContent) avoidableContent = `<span style="color:var(--muted);font-style:italic;">Clean</span>`;
      } else {
        avoidableContent = avoidableFiltered.length > 0
          ? avoidableFiltered.map(a =>
              `<span style="display:inline-flex;gap:5px;margin-right:16px;white-space:nowrap;margin-bottom:2px;">` +
              `<span style="color:var(--danger);">${esc(a.name)}</span>` +
              `<span style="color:var(--text);font-weight:500;">${fmt(a.total)}</span>` +
              `</span>`).join('')
          : `<span style="color:var(--muted);font-style:italic;">Clean</span>`;
      }
      if (isDeep && pd.dissonance && pd.dissonance.events && pd.dissonance.events.length > 0) {
        avoidableContent += pd.dissonance.events.map(ev =>
          `<span style="display:block;font-size:11px;white-space:nowrap;color:${ev.role === 'source' ? 'var(--danger)' : 'var(--warn)'};">🔊 ${fmtTs(ev.timestamp)} ${ev.role === 'source' ? 'caused' : 'took'} ${fmt(ev.amount)} ${ev.role === 'source' ? 'to' : 'from'} ${esc(ev.other)}</span>`
        ).join('');
      }

      const phaseLabel = pd.isKill
        ? `<span style="color:var(--ok);">Kill</span>`
        : (pd.fightPct != null ? `${pd.fightPct.toFixed(0)}% left` : '?');

      let interruptCell = '';
      if (hasInterruptTracking) {
        const myPI = pd.interrupts && pd.interrupts.perPlayer && pd.interrupts.perPlayer[p.name];
        if (isDeep && myPI && myPI.events && myPI.events.length > 0) {
          interruptCell = myPI.events.map(ev =>
            `<span style="display:block;font-size:11px;white-space:nowrap;color:var(--ok);">⚡${fmtTs(ev.timestamp)} ${esc(ev.ability)}</span>`
          ).join('');
        } else {
          const count = myPI ? myPI.landed : 0;
          interruptCell = `<span style="font-size:11px;color:${count > 0 ? 'var(--ok)' : 'var(--muted)'};">${count > 0 ? count : '—'}</span>`;
        }
      }

      let defensiveCell = '';
      if (hasDefensiveTracking) {
        if (!defTracked) {
          defensiveCell = `<span style="font-size:11px;color:var(--muted);">—</span>`;
        } else {
          const myDef = pd.defensives || [];
          const diedNoDef = pd.died && myDef.length === 0;
          if (isDeep && myDef.length > 0) {
            defensiveCell = myDef.map(d =>
              `<span style="display:block;font-size:11px;white-space:nowrap;color:var(--ok);">🛡${fmtTs(d.timestamp)} ${esc(d.name)}</span>`
            ).join('');
          } else {
            const dc = myDef.length;
            defensiveCell = `<span style="font-size:11px;color:${dc > 0 ? 'var(--ok)' : (diedNoDef ? 'var(--danger)' : 'var(--muted)')};"${diedNoDef ? ' title="Died this pull with no defensive cast"' : ''}>${dc > 0 ? dc : (diedNoDef ? '✗ died' : '—')}</span>`;
          }
        }
      }

      return `
        <div style="display:grid;grid-template-columns:${gridCols};gap:0;align-items:start;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px;">
          <span style="color:var(--muted);">P${pd.pullIndex}</span>
          <span style="color:var(--muted);font-size:11px;">${phaseLabel}</span>
          <span style="color:var(--muted);text-align:right;padding-right:16px;">${fmt(pd.totalDmgTaken)}</span>
          <span style="min-width:0;">${avoidableContent}</span>
          ${hasInterruptTracking ? `<span style="padding-left:12px;">${interruptCell}</span>` : ''}
          ${hasDefensiveTracking ? `<span style="padding-left:12px;">${defensiveCell}</span>` : ''}
        </div>`;
    }).join('');

    return `
      <div class="player-row" style="cursor:pointer;user-select:none;" onclick="toggleExpand('${rowId}')">
        <div class="avatar" style="background:${bg};color:${fg};">${initials}</div>
        <div class="player-info">
          <div class="player-name">${esc(p.name)}${tankBadge}${specLabel}${deathBadge}</div>
          <div class="player-detail">${topAb}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${attendance}</div>
          ${interruptLine}
          ${defensiveLine}
          ${dissonanceLine}
        </div>
        <div class="stat">
          <div class="stat-num">${fmt(p.totalDmgTaken)}</div>
          <div class="stat-label">dmg taken</div>
        </div>
        <div style="margin-left:10px;color:var(--muted);font-size:11px;flex-shrink:0;" id="${rowId}-chevron">▶</div>
      </div>
      <div id="${rowId}" data-player="${esc(p.name)}" style="display:none;padding:8px 12px 6px 52px;background:var(--surface2);border-radius:var(--radius);margin:-4px 0 6px;">
        <div style="display:grid;grid-template-columns:${gridCols};gap:0;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--muted);padding-bottom:6px;border-bottom:1px solid var(--border);margin-bottom:2px;">
          <span>Pull</span><span>Phase</span><span style="text-align:right;padding-right:16px;">Total</span>
          <span>Avoidable${isDeep ? ` <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0;margin-left:6px;color:var(--accent);">⏱ = timestamped hits &nbsp;·&nbsp; no ⏱ = aggregated total</span>` : ''}</span>
          ${hasInterruptTracking ? '<span style="padding-left:12px;">Interrupts</span>' : ''}
          ${hasDefensiveTracking ? '<span style="padding-left:12px;">🛡 Defensives</span>' : ''}
        </div>
        ${pullRows || '<div style="color:var(--muted);font-size:12px;padding:8px 0;">No data</div>'}
      </div>`;
  }).join('');

  // Preserve expanded rows across rebuilds (progressive fast renders + deep re-render).
  // Keyed by player name, not row index — sort order can shift between rebuilds.
  const card = document.getElementById('playerTableCard');
  const openPlayers = new Set();
  card.querySelectorAll('[data-player]').forEach(el => {
    if (el.style.display !== 'none') openPlayers.add(el.dataset.player);
  });

  card.innerHTML = `
    <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;">
      Click a player to expand &mdash; ${isDeep ? 'Deep mode: per-hit timestamps shown' : 'Fast mode: aggregated per pull'}
    </div>${rows}`;

  card.querySelectorAll('[data-player]').forEach(el => {
    if (!openPlayers.has(el.dataset.player)) return;
    el.style.display = 'block';
    const chevron = document.getElementById(el.id + '-chevron');
    if (chevron) chevron.textContent = '▼';
  });
}
