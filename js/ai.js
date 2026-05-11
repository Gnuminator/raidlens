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

  const prompt = `You are analyzing World of Warcraft Mythic raid logs for "${bossName}" across ${numPulls} pulls. This is active progression -- the raid wipes every pull, so the entire raid dies every time. Death counts are meaningless and must not be mentioned.
${bossSection}${specGuideSection}${refKillSection}
Player data (damage taken by ability across all pulls, raid-wide unavoidable abilities pre-filtered):

${JSON.stringify(summary, null, 2)}

Write a focused Mythic raid leader debrief. Rules:
- Use the boss knowledge above to correctly classify each ability as avoidable individual mistake, expected role damage, or unavoidable raid damage.
- ONLY call out abilities that are genuinely avoidable individual mistakes per the boss knowledge.
- ONLY flag patterns appearing on 3+ pulls with meaningful damage. Single or double pull occurrences are noise.
- For each flagged player: name them, name the ability, how many pulls it appeared on, and one concrete fix based on the actual mechanic.
- Do NOT mention deaths.
- Do NOT flag expected tank mechanics, soak mechanics, or unavoidable raid damage.
- If the avoidable damage picture is clean, say so briefly.
- Under 250 words. Plain text only, no markdown, no bullet symbols, no asterisks.`;

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
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
