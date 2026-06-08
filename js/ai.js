async function runAI(players, numPulls, apiKey, isDeep = false, specGuides = {}) {
  const bossFight = allFights.find(f => f.encounterID === currentEncounterId);
  const bossName = bossFight ? bossFight.name : 'Unknown boss';
  const bossContext = BOSS_KNOWLEDGE[bossName] || null;

  const summary = players.map(p => ({
    name: p.name,
    spec: p.spec,
    role: p.isTank ? 'tank' : 'dps/healer',
    pullsPresent: p.pulls,
    attendanceNote: p.pulls < numPulls ? `only present for ${p.pulls} of ${numPulls} pulls` : null,
    topDamageSources: (p.isTank ? p.topAbilities : p.relevantAbilities).map(a => ({
      ability: a.name,
      totalDamage: a.total,
      appearedInNPulls: a.pulls
    }))
  }));

  const refKillSection = refKillAbilities
    ? `\nREFERENCE KILL ABILITY INVENTORY (${refKillAbilities.size} abilities seen in a clean kill of this boss):\n${[...refKillAbilities].sort().join(', ')}\nAbilities appearing in wipe logs but NOT in this kill inventory may be worth noting as unusual.\n`
    : '';

  const bossSection = bossContext
    ? `\nBOSS KNOWLEDGE FOR THIS FIGHT (Mythic, use this to interpret the log data correctly):\n${bossContext.trim()}\n`
    : `\nNo boss knowledge available for "${bossName}". Use general WoW raid logic to interpret abilities.\n`;

  const guideEntries = Object.entries(specGuides);
  let specGuideSection = '';
  if (guideEntries.length > 0) {
    const totalChars = guideEntries.reduce((sum, [, md]) => sum + md.length, 0);
    console.log(`[RaidLens] Injecting ${guideEntries.length} spec guide(s) into prompt — ${totalChars.toLocaleString()} chars total`);
    if (totalChars > 50000) console.warn(`[RaidLens] Spec guide content exceeds 50,000 characters (${totalChars.toLocaleString()}). Proceeding anyway.`);
    specGuideSection = '\nSPEC GUIDES FOR PLAYERS IN THIS RAID:\nThe following guides describe each spec present. Use defensives and utility sections to assess whether players correctly used their toolkit. Use spec identity to understand what normal damage patterns look like for each spec.\n\n'
      + guideEntries.map(([spec, md]) => `--- ${spec} ---\n${md.trim()}`).join('\n\n')
      + '\n';
  }

  const interruptSpellNames = Object.values((BOSS_KNOWLEDGE_META[bossName] || {}).interruptTargetSpellIds || {});
  let interruptSection = '';
  if (interruptSpellNames.length > 0) {
    const pullInterruptMap = {};
    players.forEach(p => {
      (p.pullDetail || []).forEach(pd => {
        if (pd.interrupts && !pullInterruptMap[pd.pullIndex]) pullInterruptMap[pd.pullIndex] = pd.interrupts;
      });
    });
    let totalMissed = 0, totalOverlaps = 0;
    const missedLines = [], overlapLines = [];
    Object.entries(pullInterruptMap).forEach(([pullIdx, pi]) => {
      totalMissed += (pi.missed || []).length;
      totalOverlaps += (pi.overlaps || []).length;
      (pi.missed || []).forEach(m => missedLines.push(`  Pull ${pullIdx}: ${m.ability} went uninterrupted at ${fmtTs(m.timestamp)}`));
      (pi.overlaps || []).forEach(o => overlapLines.push(`  Pull ${pullIdx}: ${o.ability} double-interrupted at ${fmtTs(o.timestamp)} by ${o.interrupters.join(' + ')}`));
    });
    const perPlayerLines = players.map(p => {
      const landed = (p.interruptStats || {}).totalLanded || 0;
      return `  ${p.name} (${p.spec}): ${landed} interrupt${landed !== 1 ? 's' : ''} landed across ${p.pulls} pull${p.pulls !== 1 ? 's' : ''} present`;
    }).join('\n');
    interruptSection = `\nINTERRUPT ANALYSIS:\nInterruptable abilities this fight: ${interruptSpellNames.join(', ')}\nTotal missed interrupts across all pulls: ${totalMissed}\nTotal interrupt overlaps: ${totalOverlaps}\n\nPer-player interrupt summary:\n${perPlayerLines}${missedLines.length > 0 ? '\n\nMissed interrupt details:\n' + missedLines.join('\n') : ''}${overlapLines.length > 0 ? '\n\nOverlap details:\n' + overlapLines.join('\n') : ''}\n`;
  }

  let defensiveSection = '';
  const anyDefensive = players.some(p => p.defensiveStats);
  if (anyDefensive) {
    const defLines = players.map(p => {
      const tracked = typeof DEFENSIVE_SPELL_IDS !== 'undefined' && DEFENSIVE_SPELL_IDS[p.spec] && Object.keys(DEFENSIVE_SPELL_IDS[p.spec]).length > 0;
      if (!tracked) return `  ${p.name} (${p.spec}): defensives not tracked for this spec -- do not flag`;
      const pulls = p.pullDetail || [];
      const deathsNoDef = pulls.filter(pd => pd.died && (!pd.defensives || pd.defensives.length === 0)).length;
      const totalDef = (p.defensiveStats || {}).totalCast || 0;
      const flag = deathsNoDef >= 3 ? '  <-- died on 3+ pulls with no defensive cast' : '';
      return `  ${p.name} (${p.spec}): ${totalDef} self-defensive cast${totalDef !== 1 ? 's' : ''} across ${p.pulls} pull${p.pulls !== 1 ? 's' : ''}; died with zero defensives on ${deathsNoDef} pull${deathsNoDef !== 1 ? 's' : ''}${flag}`;
    }).join('\n');
    defensiveSection = `\nDEFENSIVE USAGE (self-defensives only -- damage reduction, absorbs, immunities, and major self-heals the player cast ON THEMSELVES):\nUse each player's spec guide Defensives section to judge appropriate use. IMPORTANT: tracked counts are a FLOOR -- only confirmed-ID defensives are counted and the cast log can truncate on long pulls -- so never claim a player used "only N" as if exhaustive. Focus on the died-with-zero-defensives signal.\n${defLines}\n`;
  }

  let dissonanceSection = '';
  const anyDissonance = players.some(p => p.dissonanceStats);
  if (anyDissonance) {
    const dLines = players
      .map(p => ({ name: p.name, spec: p.spec, s: (p.dissonanceStats || {}).sourced || 0, t: (p.dissonanceStats || {}).taken || 0 }))
      .filter(x => x.s > 0 || x.t > 0)
      .sort((a, b) => b.s - a.s)
      .map(x => `  ${x.name} (${x.spec}): caused ${x.s} Dissonance hit${x.s !== 1 ? 's' : ''} to others, took ${x.t}`)
      .join('\n');
    dissonanceSection = `\nDISSONANCE (Mythic, SOURCE-based -- proximity damage between players in opposite realms):\nA high "caused" count means the player was repeatedly the SOURCE of Dissonance, i.e. out of position relative to the other realm. This is positional and judged against realm assignments you may not have here, so treat a high "caused" count as a lead to investigate, not proof. Source/target attribution is auto-derived from the log and pending verification.\n${dLines || '  No player-sourced Dissonance recorded.'}\n`;
  }

  const prompt = `You are analyzing World of Warcraft Mythic raid logs for "${bossName}" across ${numPulls} pulls. This is active progression -- the raid wipes every pull, so the entire raid dies every time. Death counts are meaningless and must not be mentioned.
${bossSection}${specGuideSection}${interruptSection}${defensiveSection}${dissonanceSection}${refKillSection}
Player data (damage taken by ability across all pulls, raid-wide unavoidable abilities pre-filtered):

${JSON.stringify(summary, null, 2)}

Write a focused Mythic raid leader debrief. Rules:
- Use the boss knowledge above to correctly classify each ability as avoidable individual mistake, expected role damage, or unavoidable raid damage.
- ONLY call out abilities that are genuinely avoidable individual mistakes per the boss knowledge.
- ONLY flag patterns appearing on 3+ pulls with meaningful damage. Single or double pull occurrences are noise.
- For each flagged player: name them, name the ability, how many pulls it appeared on, and one concrete fix based on the actual mechanic.
- Do NOT mention death counts or who died most -- everyone dies every wipe. The ONE exception is the defensive rule below: repeatedly dying with no defensive cast is a valid defensive-usage callout.
- Do NOT flag expected tank mechanics, soak mechanics, or unavoidable raid damage.
- If the avoidable damage picture is clean, say so briefly.
- If interrupt data is present: flag players who land zero interrupts across multiple pulls if their spec has an interrupt ability. Flag pulls with 3+ missed interrupts as a coordination failure. Flag consistent overlap patterns where the same two players repeatedly double-interrupt the same ability.
- Do NOT flag tanks for low interrupt counts if the interruptable abilities are on adds they are tanking.
- If defensive usage data is present: using each spec's Defensives section, flag players who died on 3+ pulls while casting zero self-defensives -- they are likely sitting on cooldowns. Frame it as a defensive-usage issue, not a death count. Do not flag players who survived or who died only once or twice. Tanks press mitigation constantly; only flag a tank if they repeatedly died with none.
- Defensive counts are a floor (only confirmed-ID abilities are tracked, and long pulls can truncate the cast log); never assert a player "only used N defensives" as if complete.
- If Dissonance data is present: flag players with a high "caused" count across pulls -- repeatedly being the SOURCE of Dissonance means out of position relative to the opposite realm. Frame it as positioning to investigate against realm assignments, not certainty. Do not over-index on "took" alone, and do not flag one or two hits.
- Under 350 words. Plain text only, no markdown, no bullet symbols, no asterisks.`;

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error ? err.error.message : `HTTP ${resp.status}`);
  }
  const data = await resp.json();
  if (data.error) throw new Error(data.error.message);
  const text = data.content && data.content[0] && data.content[0].text;
  document.getElementById('aiOutput').textContent = text || 'No analysis returned.';

  if (data.usage) {
    const inp = data.usage.input_tokens || 0;
    const out = data.usage.output_tokens || 0;
    const costUsd = (inp * 0.000003) + (out * 0.000015);
    document.getElementById('tokenUsage').textContent =
      `${inp.toLocaleString()} in + ${out.toLocaleString()} out tokens — ~$${costUsd.toFixed(4)}`;
  }
}
