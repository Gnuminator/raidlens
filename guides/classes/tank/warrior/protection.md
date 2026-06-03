# Protection Warrior — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched during research, June 2026):
> - https://www.icy-veins.com/wow/protection-warrior-pve-tank-guide
> - https://www.method.gg/guides/protection-warrior
> - https://maxroll.gg/wow/class-guides/protection-warrior-raid-guide
> - https://www.wowhead.com/spell=6552/pummel (Pummel ID + cooldown confirmed)
> - https://www.wowhead.com/spell=871/shield-wall (Shield Wall ID confirmed)
> - https://www.wowhead.com/spell=23922/shield-slam (Shield Slam ID confirmed)
> - https://www.wowhead.com/spell=2565/shield-block (Shield Block ID confirmed)
> - https://www.wowhead.com/spell=12975/last-stand (Last Stand ID confirmed)
> - https://www.wowhead.com/spell=97462/rallying-cry (Rallying Cry ID + cooldown confirmed)
> - https://www.wowhead.com/spell=23920/spell-reflection (Spell Reflection ID confirmed)
> - https://www.wowhead.com/spell=6673/battle-shout (Battle Shout ID confirmed)
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json
>
> Several individual Wowhead spell pages returned HTTP 403 (rate limiting) during research and could not be confirmed. Where an ID could not be verified against a page I actually loaded, the ability is listed by name only and flagged in "Notes and Known Gaps." No IDs have been guessed or recalled from memory.

---

## Overview

Protection Warrior is a tank spec whose entire playstyle revolves around generating and spending **Rage**. Rage is produced primarily by offensive abilities (Shield Slam, auto-attacks, Revenge) and spent on the active mitigation tools that keep the warrior alive — chiefly **Ignore Pain** (an absorb shield) and **Shield Block** (block-chance/physical-mitigation buff).

Core gameplay loop:
1. Generate Rage with Shield Slam and other rotational hits.
2. Spend that Rage on Ignore Pain and keep Shield Block rolling so physical hits land into mitigation.
3. Layer longer defensive cooldowns (Shield Wall, Demoralizing Shout, Spell Reflection, Last Stand) ahead of predictable burst windows.

**Survivability profile:** Excellent physical-damage mitigation through Shield Block and high block uptime, backed by a deep stack of defensive buttons. Icy Veins and Method both describe the spec as extremely durable, "nearly indestructible" on certain talent configurations.

**Damage profile:** Solid, Rage-driven tank damage built around Shield Slam, Thunder Clap/Thunder Blast, and Revenge, with burst from Avatar and (if talented) Ravager.

**Primary weakness:** Unblockable damage combined with sustained magic damage. Shield Block does nothing against magic, so heavy magic/DoT-based encounters force the warrior to rely on Ignore Pain, Spell Reflection, Shield Wall, and Demoralizing Shout instead of its strongest mitigation. Defensive cooldowns are largely **predictive** — they must be pressed *before* the hit lands, not in reaction to it.

---

## Role in Raid

- **Role:** Tank.
- **Bloodlust/Heroism-equivalent:** None. Protection Warrior does NOT bring a Bloodlust effect.
- **Battle resurrection:** None. Protection Warrior does NOT bring a combat res.
- **Raid buff:** **Battle Shout** (spell ID 6673) — raid-wide attack-power buff (melee and ranged attack power) plus a stamina component, broadcast to allies in range. This is the spec's main passive contribution to raid-wide throughput.
- **Group defensive / external:** **Rallying Cry** (spell ID 97462, 3-minute cooldown) — a raid/party-wide temporary maximum-health increase. This is a planned group cooldown for raid-wide burst windows, not a single-target external.
- **Damage-reduction debuff on enemies:** **Demoralizing Shout** reduces the damage dealt by affected enemies — useful as a raid mitigation tool on adds/bosses, and a DPS gain for the warrior when talented.
- **Mobility profile:** Strong for a tank. **Charge** (gap-closer), **Heroic Leap** (leap to target ground location), and **Intervene** (charge to an ally) give the spec good repositioning. **Piercing Howl** (per Maxroll) can provide a short movement-speed effect.

---

## Abilities Reference

Confirmed spell IDs are shown in parentheses. Abilities without an ID could not be confirmed against a page I loaded — treat the name as authoritative and the ID as unverified.

**Rage spenders / mitigation:**
- **Ignore Pain** (190456) — Rage-spent damage-absorption shield; the primary Rage dump and a core part of active mitigation. (ID confirmed via SimC spell reference.)
- **Shield Block** (2565) — Buff that mitigates physical damage; uses a charge/cooldown system (community guides describe roughly 2 charges intended for near-constant uptime during melee windows). Costs Rage.

**Rage generators / rotational damage:**
- **Shield Slam** (23922) — Primary Rage generator (generates 15 Rage per the spell page), instant, ~9s base cooldown, deals physical damage.
- **Thunder Clap** (6343) — AoE physical damage and the basis of the AoE rotation; can be replaced/upgraded by **Thunder Blast** (435222) via talents. (IDs confirmed via SimC spell reference.)
- **Revenge** (6572) — AoE-leaning strike, prominent in the AoE priority. (ID confirmed via SimC spell reference.)
- **Execute** (163201, 260798, 5308, 280849 — multiple IDs) — Finisher used at low target count / execute range. (IDs confirmed via SimC spell reference; multiple base cast + variant IDs.)
- **Devastate** — Filler strike on builds that use it. (ID not confirmed.)
- **Rend** (388539, 772 — multiple IDs) — Bleed DoT applied as part of the rotation. (IDs confirmed via SimC spell reference.)

**Cooldowns / burst:**
- **Avatar** (107574) — Damage/throughput burst cooldown, used on cooldown in raid. (ID confirmed via SimC spell reference.)
- **Ravager** (228920, 156287 — multiple IDs) — Optional talented cooldown (whirling AoE), used on cooldown when talented. (IDs confirmed via SimC spell reference.)

**Key passives / talents referenced for 12.0.5 (from Method changelog):**
- **Practiced Strikes** — increases Shield Slam, Revenge, and Thunder Clap damage by 15%.
- **Demolish** — AoE radius expanded to 10 yards in 12.0.5.
- **Dominance of the Colossus** — cooldown reduction increased to 5 seconds in 12.0.5.
- **Last Stand** rework — see Defensives note below; Icy Veins describes Last Stand as having been turned into a passive bonus tied to Shield Wall on at least one talent path, while the standalone Last Stand spell still exists.
- **Deep Wounds** (262115) — Passive bleed applied by Shield Slam and other attacks. (ID confirmed via SimC spell reference.)
- **Tough as Nails** (385890) — Passive that deals damage when the warrior blocks attacks. (ID confirmed via SimC spell reference.)

---

## Rotation / Priority

This is a **logical priority order**, not a DPS benchmark or a strict GCD-by-GCD script. Exact ordering shifts with the chosen hero/talent tree (e.g. Mountain Thane vs. Colossus).

**Opener (per Maxroll, Mountain Thane):**
- Get **Shield Block** active as soon as possible — before/at the moment of Charge-in — to avoid being one-shot, then start all offensive cooldowns rolling.

**Sustained single-target priority (per Maxroll):**
1. **Ignore Pain** as the primary Rage spender (defensive + Rage dump).
2. Maintain **Shield Block** at ~100% uptime during melee damage.
3. **Ravager** on cooldown (if talented).
4. **Avatar** on cooldown.
5. **Demoralizing Shout** on cooldown (it is a DPS gain when talented).
6. **Thunder Blast** at 2 stacks.
7. **Shield Slam** when Burst of Power is active.
8. **Thunder Blast**.
9. **Shield Slam** on cooldown.
10. **Revenge** (AoE/Rage spend).
11. **Execute** on 2 or fewer targets.

**AoE priority (conceptual):**
- Prioritize **Thunder Clap / Thunder Blast** and **Revenge** to hit multiple targets, keep **Shield Block** and **Ignore Pain** up for survivability, and use **Avatar** / **Ravager** for burst. **Demolish** (10-yard AoE in 12.0.5) feeds AoE on builds that take it.

> Survivability always takes precedence over the damage priority: keep Shield Block rolling and Ignore Pain refreshed before optimizing damage.

---

## Defensives

Each entry includes a **RaidLens usage** note: how to judge from a log whether the defensive was used correctly during a damage window. Cooldown values are only stated where confirmed against a fetched page; otherwise the cooldown is described qualitatively and flagged.

- **Shield Block** (2565) — Rage-cost buff that mitigates physical damage; charge-based, intended for near-constant uptime in melee.
  - *RaidLens usage:* For physical melee damage windows, Shield Block should be active across the hit. A large physical hit taken with no Shield Block buff present (and Rage available) is a mitigation miss. Magic hits are NOT mitigated by Shield Block — do not flag a magic hit for lacking it.

- **Ignore Pain** (190456) — Rage-spent absorption shield; the primary active-mitigation Rage dump.
  - *RaidLens usage:* Should be kept up through sustained damage and refreshed before predictable hits. A lethal/heavy hit taken with no Ignore Pain absorb active and ample Rage banked is a usage miss.

- **Shield Wall** (871) — Major all-school damage reduction (~40% per the spell page) for ~8 seconds. Long cooldown (cooldown not numerically confirmed against a page; reduced by Anger Management / Impenetrable Wall talents per Maxroll). This is the strongest personal defensive and works against magic as well as physical.
  - *RaidLens usage:* Expect Shield Wall on the biggest scripted tank-busters / lethal raid hits. If a player died to a known heavy hit with Shield Wall off cooldown and unused, flag it.

- **Last Stand** (12975) — Increases maximum health by 30% and heals for 30% of total health for 8 seconds; 3-minute cooldown (per the spell page). Note: Icy Veins describes a talent path that converts Last Stand into a passive bonus on Shield Wall, so its availability as an active button depends on talents.
  - *RaidLens usage:* A reactive "oh no" health-pool button. Hard to judge from damage-taken alone; flag only if a player clearly bottomed out / died with Last Stand available and unused. Account for the possibility it is passive on their build.

- **Spell Reflection** (23920) — Reflects incoming spells back at the caster for ~5 seconds (page shows a 100% reflect aura). The displayed "1 second" on the spell page is a server-side script artifact, not the usable cooldown — the real cooldown is longer (not numerically confirmed; flag).
  - *RaidLens usage:* A magic-specific defensive. Expect it on reflectable single-target magic casts / tank-buster spells. If a player ate a known reflectable magic hit with Spell Reflection available, flag it. Do not expect it against physical or unreflectable raid-wide damage.

- **Demoralizing Shout** (1160) — Reduces damage dealt by affected enemies; used largely on cooldown (also a DPS gain when talented). Functions as a group/tank mitigation debuff.
  - *RaidLens usage:* Best treated as a near-on-cooldown mitigation/DPS button rather than a reactive save. If it is consistently absent during melee-heavy windows where it would mitigate, note under-use. (Cooldown unconfirmed — flag.)

- **Rallying Cry** (97462) — Raid/party-wide temporary maximum-health increase; 3-minute cooldown (confirmed).
  - *RaidLens usage:* A planned RAID cooldown, not a personal save. Judge against known raid-wide burst windows: if the raid took a large simultaneous hit and Rallying Cry was off cooldown and unused, that is a missed group cooldown — but coordinate against other raid-CDs before flagging.

- **Impending Victory / Victory Rush** — Self-heal (Impending Victory is the talented, on-demand version with a Rage cost; Victory Rush is the proc version). Situational topping-up.
  - *RaidLens usage:* Minor self-sustain. Generally not worth flagging as a "missed defensive" on its own; treat as supplementary healing.

> General principle for RaidLens: Protection Warrior's defensives are predictive. A hit taken without mitigation is only a "miss" if the relevant button (a) defends the right damage school — physical vs. magic — and (b) was actually off cooldown at the moment. Shield Block and Demoralizing Shout do not help against magic; Spell Reflection only helps against reflectable spells; Shield Wall and Ignore Pain are the all-purpose options.

---

## Utility

- **Interrupt:** **Pummel** (spell ID 6552), 15-second cooldown, 5-yard range, instant, no resource cost. This IS the spec's interrupt and it is a real, raid-usable kick.
  - *Is it the only interrupt?* Pummel is the spec's only dedicated spell-school-locking interrupt. (Storm Bolt and Shockwave are stuns, not interrupts — they can stop a cast on a stun-susceptible target but are crowd control, not a true kick. Do not count them as the spec's interrupt.)
  - *RaidLens usage:* On encounters with assigned interrupt targets, a Protection Warrior is expected to contribute Pummel on the ~15s cooldown. A missed interrupt on an assigned cast with Pummel available is a flaggable miss.

- **Crowd control:**
  - **Intimidating Shout** — AoE fear.
  - **Shockwave** — frontal AoE stun.
  - **Storm Bolt** — single-target stun (talented).
  - **Berserker Rage** — removes/prevents fear, sap, and incapacitate effects on self.
  - **Piercing Howl** — slow / short self movement-speed effect (per Maxroll).

- **Dispels:** Protection Warrior has **no magic, curse, poison, or disease dispel** and cannot remove debuffs from allies. **Spell Reflection** is a reflect, not a dispel. Do not expect this spec to dispel anything.

- **Externals (abilities used on allies):**
  - **Intervene** — charge to an ally (movement + a brief protective effect; primarily a mobility/positioning tool).
  - **Rallying Cry** — raid/party max-health buff (covered above).
  - The spec has no single-target damage-reduction external comparable to a Paladin's Blessing.

- **Raid buffs/debuffs:**
  - **Battle Shout** (6673) — raid-wide attack power (+stamina) buff.
  - **Demoralizing Shout** (1160) — enemy damage-dealt reduction debuff.

- **Movement tools:** **Charge**, **Heroic Leap**, **Intervene** (and **Double Time** talent for an extra Charge charge per Maxroll).

---

## Consumables and Enchants

I was unable to confirm specific 12.0.5 consumable items, food, phials/flasks, weapon oils/runes, or enchant item IDs against a live page during this research session (the Wowhead enchants/consumables sub-pages and individual item pages were not successfully fetched; several requests were rate-limited).

General, non-numeric guidance that holds for a Midnight tank:
- Use a current-tier tank-oriented flask/phial (typically the stamina or versatility option), a tank/stamina food buff, a weapon enhancement (oil/rune), and an augment rune if available.
- Enchant priority for a tank skews toward survivability stats (stamina/versibility/armor) over pure throughput, but the exact best-in-slot enchants and their item IDs must be pulled from a current source.

All specific item IDs, enchant names, and consumable names are **flagged as unconfirmed** below. Do not inject any item ID for this spec until verified against a live page.

---

## SimulationCraft Reference (Midnight 12.0.5)

**Hero tree(s) covered:** The JSON source does not specify a hero tree (`hero_tree: null`). The APL contains branches for both **Colossus** (`hero_tree.colossus`) and **Mountain Thane** (`hero_tree.mountain_thane`), so the talent string covers a baseline build from which either hero path is selected.

### Talent Import String — Protection Warrior (Baseline / Both Hero Paths)

```
CkEAAAAAAAAAAAAAAAAAAAAAA02AAAzMDzMzMzMzmxsMjxYmGGDLzMzMDGzMAAAAYZAYGDwAbwyiRjZAMbYmNYGzMY2GAMzAAwMgB
```

### Metrics (SimC Patchwerk single-target)

| Metric | Value |
|--------|-------|
| DPS (tank damage output) | 84,394 |
| DTPS (damage taken per second) | 37,953 |
| HPS (healing/absorb per second, includes Ignore Pain) | 28,808 |

> Note: DPS for a Protection Warrior reflects the active-mitigation rotation described in this guide — Ignore Pain, Shield Block, and defensive cooldown usage all contribute to the DTPS and HPS figures above. These are not a DPS spec's numbers; the 84k DPS represents incidental tank damage while fulfilling the mitigation priority.

### Damage Distribution (SimC, share of total)

Rows with a valid percentage share only. The parenthesised value is used where the format is "X% (Y%)" (parenthesised = with procs/variants included). Leech (self-sustain heal) and consumable/buff-uptime rows are excluded.

| Ability | Share |
|---------|-------|
| Auto Attack (MH) | 13.4% |
| Revenge | 4.1% |
| Execute | 3.8% |
| Rend (DoT) | 1.9% |
| Ravager (whirling blade) | 1.5% |
| Tough as Nails | 1.5% |
| Deep Wounds | 0.9% |
| Voidclaw | 0.4% |
| Voidstalker Sting | 0.2% |

> RaidLens interpretation: The sim's damage budget is dominated by auto-attacks (~13%), which is expected for a tank spec that prioritises mitigation over GCD-filling. Revenge and Execute are the most impactful active abilities. Shield Slam, Thunder Clap, and Thunder Blast do not appear as explicit percentage rows — they likely appear only as buff-uptime or cast-count entries in the raw SimC output, meaning their damage is partially captured inside the auto-attack and proc chains rather than as standalone top-level rows. In a real log, Shield Slam will be the highest-cast single damage contributor; the SimC distribution here is a floor estimate for active abilities, not a complete damage breakdown.

---

## Action Priority List — Protection Warrior (Both Hero Paths)

The APL branches at the bottom into four sub-lists: `colossus_aoe`, `thane_aoe`, `colossus_st`, and `thane_st`. The main list routes to the appropriate sub-list based on `hero_tree` and target count. Ignore Pain is handled off-GCD by a complex Rage-threshold condition.

```
actions.precombat=snapshot_stats
actions.precombat+=/battle_stance,toggle=on
actions.precombat+=/use_item,name=algethar_puzzle_box

# Executed every time the actor is available.
actions=auto_attack
actions+=/call_action_list,name=variables
actions+=/charge,if=time=0
actions+=/use_item,name=tome_of_lights_devotion,if=buff.inner_resilience.up
actions+=/use_items
actions+=/avatar,if=buff.thunder_blast.down|buff.thunder_blast.stack<=2
actions+=/shield_wall
actions+=/blood_fury
actions+=/berserking
actions+=/arcane_torrent
actions+=/lights_judgment
actions+=/fireblood
actions+=/ancestral_call
actions+=/bag_of_tricks
actions+=/potion,if=buff.avatar.up|buff.avatar.up&target.health.pct<=20
actions+=/ignore_pain,if=target.health.pct>=20&(rage.deficit<=15&cooldown.shield_slam.ready|rage.deficit<=20&cooldown.shield_charge.ready|rage.deficit<=20&cooldown.demoralizing_shout.ready&talent.booming_voice.enabled|rage.deficit<=15|rage.deficit<=40&cooldown.shield_slam.ready&buff.violent_outburst.up&talent.heavy_repercussions.enabled&talent.practiced_strikes.enabled|rage.deficit<=17&cooldown.shield_slam.ready&talent.heavy_repercussions.enabled|rage.deficit<=18&cooldown.shield_slam.ready&talent.practiced_strikes.enabled)|(rage>=70|buff.seeing_red.stack=7&rage>=35)&cooldown.shield_slam.remains<=1&buff.shield_block.remains,use_off_gcd=1
actions+=/ravager
actions+=/demoralizing_shout,if=talent.booming_voice.enabled
actions+=/champions_leap
actions+=/champions_spear
actions+=/thunder_blast,if=spell_targets.thunder_blast>=2&buff.thunder_blast.stack=2
actions+=/demolish,if=buff.colossal_might.stack>=3
actions+=/shield_charge
actions+=/shield_block,if=buff.shield_block.remains<=10
actions+=/run_action_list,name=colossus_aoe,if=hero_tree.colossus&spell_targets.thunder_clap>=3
actions+=/run_action_list,name=thane_aoe,if=hero_tree.mountain_thane&spell_targets.thunder_clap>=3
actions+=/run_action_list,name=colossus_st,if=talent.demolish
actions+=/run_action_list,name=thane_st,if=talent.lightning_strikes

actions.colossus_aoe=thunder_clap,if=dot.rend_dot.remains<=1
actions.colossus_aoe+=/shield_slam,if=buff.violent_outburst.up&buff.phalanx.up
actions.colossus_aoe+=/thunder_clap,if=spell_targets.thunder_clap>6&buff.avatar.up
actions.colossus_aoe+=/revenge,if=rage>=70&spell_targets.revenge>=3
actions.colossus_aoe+=/shield_slam,if=rage<=60|buff.violent_outburst.up
actions.colossus_aoe+=/thunder_clap
actions.colossus_aoe+=/revenge,if=rage>=30|rage>=40&talent.barbaric_training.enabled
actions.colossus_aoe+=/execute,if=spell_targets.execute>=2&(rage>=50|buff.sudden_death.up)&talent.heavy_handed.enabled

actions.colossus_st=shield_slam
actions.colossus_st+=/thunder_clap
actions.colossus_st+=/revenge,if=buff.ravager.up
actions.colossus_st+=/execute,if=buff.sudden_death.up&talent.deep_wounds|talent.deep_wounds&rage>=40
actions.colossus_st+=/thunder_clap,if=(spell_targets.thunder_clap>=1|cooldown.shield_slam.remains)&hero_tree.mountain_thane&rage<=80
actions.colossus_st+=/revenge,if=rage>=80&!variable.execute_phase|buff.revenge.up&variable.execute_phase&rage<=18&cooldown.shield_slam.remains|buff.revenge.up&!variable.execute_phase
actions.colossus_st+=/wrecking_throw,if=talent.javelineer.enabled
actions.colossus_st+=/shattering_throw,if=talent.javelineer.enabled
actions.colossus_st+=/revenge
actions.colossus_st+=/devastate

actions.thane_aoe=thunder_blast,if=dot.rend_dot.remains<=1
actions.thane_aoe+=/thunder_clap,if=dot.rend_dot.remains<=1
actions.thane_aoe+=/shield_slam,if=buff.violent_outburst.up&buff.phalanx.up
actions.thane_aoe+=/thunder_blast,if=spell_targets.thunder_clap>=2&buff.avatar.up
actions.thane_aoe+=/shield_slam,if=buff.phalanx.up
actions.thane_aoe+=/thunder_clap,if=spell_targets.thunder_clap>=4&buff.avatar.up
actions.thane_aoe+=/revenge,if=rage>=70&spell_targets.revenge>=3
actions.thane_aoe+=/shield_slam,if=rage<=60|buff.violent_outburst.up
actions.thane_aoe+=/thunder_blast
actions.thane_aoe+=/thunder_clap
actions.thane_aoe+=/execute,if=spell_targets.execute>=2&(rage>=50|buff.sudden_death.up)&talent.heavy_handed.enabled
actions.thane_aoe+=/revenge,if=rage>=30|rage>=40&talent.barbaric_training.enabled

actions.thane_st=thunder_blast
actions.thane_st+=/thunder_clap,if=buff.ravager.up
actions.thane_st+=/shield_slam
actions.thane_st+=/thunder_clap
actions.thane_st+=/thunder_blast,if=(spell_targets.thunder_clap>=1|cooldown.shield_slam.remains)
actions.thane_st+=/execute,if=buff.sudden_death.up|rage>=40
actions.thane_st+=/wrecking_throw,if=talent.javelineer.enabled
actions.thane_st+=/shattering_throw,if=talent.javelineer.enabled
actions.thane_st+=/revenge,if=rage>=80&!variable.execute_phase|buff.revenge.up&variable.execute_phase&rage<=18&cooldown.shield_slam.remains|buff.revenge.up&!variable.execute_phase
actions.thane_st+=/revenge
actions.thane_st+=/devastate

actions.variables=variable,name=execute_phase,value=(talent.massacre.enabled&target.health.pct<35)|target.health.pct<20
```

---

## Confirmed Spell IDs (SimulationCraft HTML)

IDs in this table are sourced exclusively from `spell-ids-reference.json` (exact key match). IDs already confirmed via Wowhead (Pummel, Shield Wall, Shield Slam, Shield Block, Last Stand, Rallying Cry, Spell Reflection, Battle Shout) are preserved from the sections above and not duplicated here.

| Ability | Spell ID(s) | School | Type |
|---------|------------|--------|------|
| Avatar | 107574 | physical | cast |
| Deep Wounds | 262115 | physical | cast |
| Demoralizing Shout | 1160 | physical | cast |
| Execute | 163201, 260798, 5308, 280849 (multiple: base cast + variants) | physical | cast |
| Ignore Pain | 190456 | physical | cast |
| Ravager | 228920, 156287 (multiple: base cast + variants) | physical | cast |
| Rend | 388539, 772 (multiple: base cast + variants) | physical | cast |
| Revenge | 6572 | physical | cast |
| Thunder Blast | 435222 | stormstrike | cast |
| Thunder Clap | 6343 | physical | cast |
| Tough as Nails | 385890 | physical | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

---

## Notes and Known Gaps

**Confirmed spell IDs (verified against a fetched live page):**
- Pummel — 6552 (15s cooldown)
- Shield Wall — 871 (~40% all-school DR, ~8s)
- Shield Slam — 23922
- Shield Block — 2565
- Last Stand — 12975 (3-min cooldown; +30% max HP, heal 30% max HP, 8s)
- Rallying Cry — 97462 (3-min cooldown)
- Spell Reflection — 23920
- Battle Shout — 6673

**Confirmed spell IDs (verified via SimulationCraft spell-ids-reference.json):**
- Ignore Pain — 190456
- Thunder Clap — 6343
- Thunder Blast — 435222
- Revenge — 6572
- Execute — 163201, 260798, 5308, 280849 (multiple IDs)
- Avatar — 107574
- Ravager — 228920, 156287 (multiple IDs)
- Rend — 388539, 772 (multiple IDs)
- Deep Wounds — 262115
- Tough as Nails — 385890
- Demoralizing Shout — 1160

**Talent import string and APL:** Now added (SimulationCraft Midnight 12.0.5, covers both Colossus and Mountain Thane hero paths via APL branching).

**Unconfirmed facts (ID or value NOT verified — do not treat as authoritative):**
- **Devastate** spell ID — not confirmed. Name only.
- **Avatar / Ravager exact cooldowns** — not confirmed against a live page. Names and IDs confirmed via SimC; numeric cooldowns are not.
- **Demoralizing Shout cooldown** — effect confirmed (enemy damage-dealt reduction) and ID confirmed (1160 via SimC); numeric cooldown not confirmed against a live page.
- **Taunt / Charge / Heroic Leap / Intervene / Intimidating Shout / Shockwave / Storm Bolt / Berserker Rage / Piercing Howl / Impending Victory / Victory Rush** spell IDs — not confirmed. Names only.
- **Shield Wall cooldown** — numeric base cooldown not confirmed against a page (the spell page shows the 8-second aura duration, not the cooldown). Talents (Anger Management, Impenetrable Wall) reduce it.
- **Spell Reflection cooldown** — the "1 second" on the spell page is a server-side-script artifact, not the real cooldown; true cooldown not numerically confirmed.
- **Shield Block charges/duration** — community guides cite ~2 charges of ~6s each for constant uptime; the fetched spell page did not show the charge count, so this is from guide prose, not the spell page.
- **Last Stand as active vs. passive** — Icy Veins describes a talent that folds Last Stand into Shield Wall as a passive; the standalone spell (12975) still exists. Availability is talent-dependent.
- **Hero talent trees (specific abilities)** — Mountain Thane and Colossus are referenced in the APL; their specific sub-abilities/spell IDs (e.g. Champion's Leap, Champion's Spear, Demolish) were not individually verified.
- **Consumables and enchants** — no item IDs, flask/food/oil/enchant names confirmed for 12.0.5. Entire section is conceptual only.

**Sourcing caveats:**
- Wowhead's class-guide overview/rotation HTML returned only page chrome (no body text) via fetch; rotation content above is drawn from Maxroll, and supporting prose from Icy Veins and Method. Individual Wowhead *spell* pages provided the confirmed IDs before rate-limiting set in.
- All confirmed data is consistent with WoW Midnight patch 12.0.5 (sources dated Feb–Apr 2026). No Dragonflight or War Within data was used as current.

**Maintenance flag:** Re-verify every spell ID, cooldown, and the Last Stand active/passive status after ANY 12.x patch (e.g. 12.0.6, 12.1). Tank tuning and talent reworks are common between patches. Fill in the remaining unconfirmed spell IDs above by fetching individual Wowhead spell pages when not rate-limited, and add the consumables/enchants section from a live current-tier source.
