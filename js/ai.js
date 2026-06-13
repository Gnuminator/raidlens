// Spec-guide sections stripped (in memory) before prompt injection. SimC APLs,
// rotation priorities, talent strings, damage-distribution tables and consumables
// are useless for a damage-taken/defensive/interrupt debrief and blow the token
// budget. Matched by `## ` heading prefix; each matched section is removed up to
// the next `## ` heading or end of file. The .md files on disk are not modified.
const SPEC_GUIDE_STRIP_HEADINGS = [
  'SimulationCraft Reference',
  'SimulationCraft APL',
  'Confirmed Spell IDs',
  'Action Priority List',
  'Rotation / Priority',
  'Talent Builds',
  'Consumables and Enchants'
];

function stripSpecGuideSections(md) {
  const out = [];
  let skipping = false;
  for (const line of md.split('\n')) {
    if (line.startsWith('## ')) {
      const heading = line.slice(3).trim();
      skipping = SPEC_GUIDE_STRIP_HEADINGS.some(h => heading.startsWith(h));
    }
    if (!skipping) out.push(line);
  }
  return out.join('\n');
}

async function runAI(players, numPulls, apiKey, isDeep = false, specGuides = {}) {
  const bossFight = allFights.find(f => f.encounterID === currentEncounterId);
  const bossName = bossFight ? bossFight.name : 'Unknown boss';
  const bossContext = BOSS_KNOWLEDGE[bossName] || null;

  // Deep-data presence is derived from the data itself, not the isDeep flag.
  const hasDeepData = players.some(p => (p.pullDetail || []).some(pd => pd.hits && pd.hits.length > 0));
  if (isDeep && !hasDeepData) console.warn('[RaidLens] Deep analysis requested but no per-hit data found in pullDetail — calledWipeHits context will be absent from the prompt.');

  const summary = players.map(p => {
    const entry = {
      name: p.name,
      spec: p.spec,
      role: p.isTank ? 'tank' : 'dps/healer',
      pullsPresent: p.pulls,
      topDamageSources: (p.isTank ? p.topAbilities : p.relevantAbilities).map(a => ({
        ability: a.name,
        totalDamage: a.total,
        appearedInNPulls: a.pulls
      }))
    };
    if (p.pulls < numPulls) entry.attendanceNote = `only present for ${p.pulls} of ${numPulls} pulls`;
    if (hasDeepData) {
      let totalHits = 0, calledWipe = 0;
      (p.pullDetail || []).forEach(pd => (pd.hits || []).forEach(h => {
        totalHits += 1;
        if (h.deadAtTime >= 3) calledWipe += 1;
      }));
      if (calledWipe > 0) entry.calledWipeHits = `${calledWipe} of ${totalHits} avoidable hits landed while 3+ players were already dead`;
    }
    return entry;
  });

  // Per-pull kill/wipe and progression stats, computed from pullDetail.
  const pullInfo = {};
  players.forEach(p => (p.pullDetail || []).forEach(pd => {
    if (!pullInfo[pd.fightId]) pullInfo[pd.fightId] = { isKill: !!pd.isKill, fightPct: pd.fightPct };
  }));
  const pullList = Object.values(pullInfo);
  const killCount = pullList.filter(pl => pl.isKill).length;
  const killLine = killCount === 0
    ? `All ${numPulls} selected pulls were wipes.`
    : killCount >= numPulls
      ? `All ${numPulls} selected pulls were kills.`
      : `${killCount} of ${numPulls} selected pulls were kills; the rest were wipes.`;
  const wipePcts = pullList.filter(pl => !pl.isKill && typeof pl.fightPct === 'number').map(pl => pl.fightPct);
  let progressionLine = '';
  if (wipePcts.length > 0) {
    const best = Math.min(...wipePcts);
    const avg = wipePcts.reduce((s, v) => s + v, 0) / wipePcts.length;
    progressionLine = `\nProgression context: best pull reached ${best.toFixed(0)}% boss HP remaining; average wipe at ${avg.toFixed(0)}%.`;
  }

  const refKillSection = refKillAbilities
    ? `\nREFERENCE KILL ABILITY INVENTORY (${refKillAbilities.size} abilities seen in a clean kill of this boss):\n${[...refKillAbilities].sort().join(', ')}\nAbilities appearing in wipe logs but NOT in this kill inventory may be worth noting as unusual.\n`
    : '';

  const bossSection = bossContext
    ? `\nBOSS KNOWLEDGE FOR THIS FIGHT (Mythic, use this to interpret the log data correctly):\n${bossContext.trim()}\n`
    : `\nNo boss knowledge available for "${bossName}". Use general WoW raid logic to interpret abilities.\n`;

  const guideEntries = Object.entries(specGuides);
  let specGuideSection = '';
  if (guideEntries.length > 0) {
    const rawChars = guideEntries.reduce((sum, [, md]) => sum + md.length, 0);
    const stripped = guideEntries.map(([spec, md]) => [spec, stripSpecGuideSections(md)]);
    const injectedChars = stripped.reduce((sum, [, md]) => sum + md.length, 0);
    console.log(`[RaidLens][SpecGuides] injected ${injectedChars.toLocaleString()} chars (raw ${rawChars.toLocaleString()} chars before stripping)`);
    if (injectedChars > 50000) console.warn(`[RaidLens] Spec guide content exceeds 50,000 characters (${injectedChars.toLocaleString()}). Proceeding anyway.`);
    specGuideSection = '\nSPEC GUIDES FOR PLAYERS IN THIS RAID:\nThe following guides describe each spec present. Use defensives and utility sections to assess whether players correctly used their toolkit. Use spec identity to understand what normal damage patterns look like for each spec.\n\n'
      + stripped.map(([spec, md]) => `--- ${spec} ---\n${md.trim()}`).join('\n\n')
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
    defensiveSection = `\nDEFENSIVE USAGE (self-cast defensives and defensive casts -- damage reduction, absorbs, immunities, and major self-heals; ally-castable spells like Pain Suppression are counted by CASTER regardless of target):\n${defLines}\n`;
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
    dissonanceSection = `\nDISSONANCE (Mythic, SOURCE-based -- proximity damage between players in opposite realms; source/target attribution is auto-derived from the log and pending verification):\n${dLines || '  No player-sourced Dissonance recorded.'}\n`;
  }

  // Block 1 — stable context. MUST stay byte-identical across runs within a session
  // for the prompt cache to hit: never interpolate per-run values (pull counts,
  // player data, reference-kill inventory) into this block.
  const stableBlock = `You are analyzing World of Warcraft Mythic raid log data for "${bossName}". This is Mythic progression raiding: the raid is learning the fight across repeated pulls.
${bossSection}${specGuideSection}
RULES FOR THE DEBRIEF:

CLASSIFICATION
- Use the boss knowledge above to classify each logged ability as an avoidable individual mistake, expected role damage, or unavoidable raid damage.
- Non-tank rows have raid-wide unavoidable abilities pre-filtered (confirmed-avoidable mechanics are kept). Tank rows are NOT pre-filtered: they include expected unavoidable tank damage such as Melee and boss hits. Judge tanks against the expected-tank-damage rules in the boss knowledge; never flag Melee or Stagger on a tank.

FLAG
- The flagging threshold: only flag a pattern that appears on 3 or more pulls. This threshold applies to avoidable-damage patterns, repeated zero-defensive deaths, and Dissonance "caused" counts. One- or two-pull occurrences are noise.
- ONLY call out abilities that are genuinely avoidable individual mistakes per the boss knowledge, with meaningful damage, meeting the threshold.
- If interrupt data is present: flag players who land zero interrupts across multiple pulls if their spec has an interrupt ability. Flag any single pull with 3 or more missed interrupts as a coordination failure. Flag consistent overlap patterns where the same two players repeatedly double-interrupt the same ability.
- If defensive usage data is present: using each spec's Defensives section, flag players who repeatedly died while casting zero self-defensives (per the threshold) -- they are likely sitting on cooldowns. Frame it as a defensive-usage issue, not a death count. Do not flag players who survived or whose zero-defensive deaths fall below the threshold. Tanks press mitigation constantly; only flag a tank if they repeatedly died with none.
- If Dissonance data is present: flag players with a high "caused" count meeting the threshold -- repeatedly being the SOURCE of Dissonance means out of position relative to the opposite realm. Frame it as positioning to investigate against realm assignments, not certainty. Do not over-index on "took" alone, and do not flag one or two hits.

NEVER FLAG
- Death counts or who died most -- everyone dies every wipe. The ONE exception is the defensive-usage rule above, framed as defensive usage.
- Expected tank mechanics, soak mechanics, or unavoidable raid damage.
- Tanks for low interrupt counts if the interruptable abilities are on adds they are tanking.
- Mistweaver Monks and Holy Paladins for zero interrupts -- neither spec has an interrupt in patch 12.x (Holy Paladin's Rebuke was replaced by the Armory of Light passive; Mistweaver has none).

DATA CAVEATS
- Defensive counts are a FLOOR: only confirmed-ID defensives are counted and the cast log can truncate on long pulls. Never assert a player used "only N defensives" as if exhaustive; focus on the died-with-zero-defensives signal.
- If a player's data includes "calledWipeHits", those avoidable hits landed after the wipe was already called (3 or more players dead); discount them when judging that player's avoidable-damage patterns.

FORMAT
- For each flagged player: name them, name the ability, how many pulls it appeared on, and one concrete fix based on the actual mechanic.
- If the avoidable damage picture is clean, say so briefly.
- Under 350 words. Plain text only, no markdown, no bullet symbols, no asterisks.`;

  // Block 2 — per-run data. Everything that changes between runs goes here.
  const dataBlock = `LOG DATA FOR THIS RUN (${numPulls} selected pulls):
${killLine}${progressionLine}
${interruptSection}${defensiveSection}${dissonanceSection}${refKillSection}
Player data (damage taken by ability across all pulls):

${JSON.stringify(summary)}

Write the Mythic raid leader debrief now, following the rules above.`;

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
      max_tokens: 800,
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: stableBlock, cache_control: { type: 'ephemeral' } },
          { type: 'text', text: dataBlock }
        ]
      }]
    })
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error ? err.error.message : `HTTP ${resp.status}`);
  }
  const data = await resp.json();
  if (data.error) throw new Error(data.error.message);
  let text = data.content && data.content[0] && data.content[0].text;
  if (text && data.stop_reason === 'max_tokens') text += '\n\n[analysis truncated — hit max_tokens]';
  document.getElementById('aiOutput').textContent = text || 'No analysis returned.';

  if (data.usage) {
    const inp = data.usage.input_tokens || 0;
    const out = data.usage.output_tokens || 0;
    const cacheRead = data.usage.cache_read_input_tokens || 0;
    const cacheWrite = data.usage.cache_creation_input_tokens || 0;
    // Sonnet 4.6: input $3/M, output $15/M, cache reads $0.30/M, cache creation $3.75/M.
    const costUsd = (inp * 0.000003) + (cacheRead * 0.0000003) + (cacheWrite * 0.00000375) + (out * 0.000015);
    const cachePart = (cacheRead || cacheWrite)
      ? ` + ${cacheRead.toLocaleString()} cache-read + ${cacheWrite.toLocaleString()} cache-write`
      : '';
    document.getElementById('tokenUsage').textContent =
      `${inp.toLocaleString()} in + ${out.toLocaleString()} out tokens${cachePart} — ~$${costUsd.toFixed(4)}`;
  }
}
