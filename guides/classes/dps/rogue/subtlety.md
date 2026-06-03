# Subtlety Rogue — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/spell=31224/cloak-of-shadows
> - https://www.wowhead.com/spell=5277/evasion
> - https://www.wowhead.com/spell=185311/crimson-vial
> - https://www.wowhead.com/spell=1966/feint
> - https://www.wowhead.com/spell=31230/cheat-death
> - https://www.wowhead.com/spell=1766/kick
> - https://www.wowhead.com/spell=185313/shadow-dance
> - https://www.wowhead.com/spell=121471/shadow-blades
> - https://www.wowhead.com/spell=212283/symbols-of-death
> - https://www.wowhead.com/spell=114018/shroud-of-concealment
> - https://www.wowhead.com/spell=57934/tricks-of-the-trade
> - https://www.wowhead.com/spell=53/backstab
> - https://www.wowhead.com/spell=185438/shadowstrike
> - https://www.wowhead.com/spell=196819/eviscerate
> - https://www.wowhead.com/spell=280719/secret-technique
> - https://www.wowhead.com/spell=319175/black-powder
> - https://www.wowhead.com/spell=36554/shadowstep
> - https://www.wowhead.com/spell=2983/sprint
> - https://www.wowhead.com/spell=1856/vanish
> - https://www.wowhead.com/spell=2094/blind
> - https://www.wowhead.com/spell=6770/sap
> - https://www.wowhead.com/spell=381637/atrophic-poison
> - https://www.icy-veins.com/wow/subtlety-rogue-pve-dps-guide
> - https://www.icy-veins.com/wow/subtlety-rogue-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/subtlety-rogue-pve-dps-gems-enchants-consumables
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Subtlety is the burst-window melee DPS specialization of the Rogue class. Its core gameplay loop runs on a roughly 90-second cadence: the player builds toward a large burst window driven by **Shadow Dance** (185313) and **Shadow Blades** (121471), uses stealth-empowered builders and finishers to compress damage into that window, then plays a weaker filler rotation between windows until cooldowns return.

Damage profile: very high on-demand burst (both single-target and AoE) concentrated in the cooldown windows, with comparatively weak sustained damage during the downtime between windows. This makes the spec strong at killing priority targets and meeting timed damage checks, but its throughput is uneven across a fight.

Survivability profile: pure DPS with a deep, layered personal-defensive kit (Cloak of Shadows, Evasion, Feint, Crimson Vial, Cheat Death). It has no healing output for the raid and no group survivability cooldown beyond threat tools.

Primary weakness: low sustained damage outside burst windows, and a dependence on landing the burst window cleanly — if forced to move, reposition, or stop attacking during Shadow Dance / Shadow Blades, a large fraction of the spec's damage is lost.

## Role in Raid

- **Role:** Melee DPS. Not a healer, not a tank.
- **Raid buff / debuff:** Brings **Atrophic Poison** (381637), a Rogue poison that, when applied to a target, reduces the direct damage that target deals (commonly cited as roughly 3% damage reduction, slightly higher with the Master Poisoner talent). On a boss this functions as a raid-wide damage-reduction debuff, though it does not reduce every boss mechanic. This is the main reason a raid brings at least one Rogue. (See Known Gaps: exact percentage and which mechanics it affects are version-dependent.)
- **Bloodlust / Heroism equivalent:** No. Rogues do not provide a Bloodlust-type haste effect.
- **Battle res:** No. Rogues cannot combat-resurrect.
- **Externals:** **Tricks of the Trade** (57934) transfers the Rogue's threat to a targeted ally. In Midnight it is a threat tool only — it does not grant the target a damage buff (confirmed on the live spell page). The Rogue brings no damage external and no defensive external for allies.
- **Mobility:** Strong. **Shadowstep** (36554) is a short-cooldown gap-closer to a target. **Sprint** (2983) is a movement-speed burst. **Shadow Dance** and stealth tools also support repositioning.

## Abilities Reference

Confirmed SpellIDs are from live Wowhead spell pages. Where an ID is not listed, it was not confirmed from a fetched live source (see Known Gaps).

**Builders (combo point generators):**
- **Backstab** (53) — single-target physical builder, used outside Shadow Dance.
- **Shadowstrike** (185438) — stealth/Shadow Dance builder, the spec's big single-target builder; usable from stealth or during Shadow Dance.
- **Shuriken Storm** — AoE builder (no confirmed SpellID, see Known Gaps).

**Finishers:**
- **Eviscerate** (196819) — primary single-target finisher.
- **Secret Technique** (280719) — burst finisher used inside Shadow Dance windows.
- **Black Powder** (319175) — AoE finisher (10-yard radius), used on multiple targets.
- (Coup de Grace and Slice and Dice are referenced in current guides but their SpellIDs were not confirmed live — see Known Gaps.)

**Core cooldowns:**
- **Shadow Dance** (185313) — the signature cooldown; grants access to stealth-only abilities (notably Shadowstrike) without being stealthed, and amplifies damage. Several charges/uses are cycled per Shadow Blades window.
- **Shadow Blades** (121471) — major damage cooldown (~1.5 min cooldown) that empowers builders and finishers for its duration; defines the ~90s burst cadence together with Shadow Dance.
- **Symbols of Death** (212283) — damage-amplification buff feeding the burst window.

**Key passives / procs (talent-dependent, names only where ID unconfirmed):**
- Apex/clone effects (e.g. "Ancient Arts") give generated combo points a chance to spawn a shadow clone repeating the attack for partial shadow damage. SpellIDs not confirmed live — see Known Gaps.

## Rotation / Priority

This is a *logical priority*, not a DPS benchmark or simulation result. Actual optimal play depends on talents, tier set, and target count.

**Opener (conceptual):**
1. Open from stealth with a Shadowstrike (185438) builder.
2. Line up Symbols of Death (212283), Shadow Blades (121471), and Shadow Dance (185313) to stack the burst window.
3. Spend combo points on the highest-priority finisher available (Secret Technique inside Dance).

**Sustained single-target priority (conceptual):**
1. Maintain damage/finisher buffs and any required bleed/Slice-and-Dice uptime.
2. Inside Shadow Dance: use Shadowstrike (185438) to build, spend 6+ combo points on Secret Technique (280719) > Eviscerate (196819).
3. Outside Shadow Dance: use Backstab (53) to build, spend on Eviscerate (196819).
4. Pool resources ahead of the next Shadow Dance / Shadow Blades window.

**AoE priority (conceptual):**
1. Build with Shuriken Storm.
2. Spend combo points on Black Powder (319175).
3. Use the same Shadow Dance / Shadow Blades / Symbols of Death stacking to burst the pack.

## Defensives

Every personal defensive below should be judged by RaidLens as "was this available and could it have mitigated the lethal/large hit?" Rogue cooldowns are deep but mostly short, so an unused defensive during a known damage window is a meaningful flag.

- **Cloak of Shadows** (31224) — 2 min cooldown, 5 sec duration. Major magic/spell defensive: heavily reduces chance to be hit by spells and reduces physical damage taken; effectively a near-immunity to many magical effects for the duration.
  - *RaidLens usage:* If a player took heavy **magic / spell-school** avoidable damage (or died to a magic mechanic) and Cloak was off cooldown, flag it. Cloak is the correct answer to a telegraphed magic hit. Do not expect it against pure physical mechanics.
- **Evasion** (5277) — 2 min cooldown, 10 sec duration. Greatly increases dodge against attacks and reduces damage taken (including from magical schools in the current version). Strongest against physical/melee damage.
  - *RaidLens usage:* If a player took a large *physical* / dodgeable hit, or had to soak/tank a melee mechanic, and Evasion was available, flag the unused defensive. Less reliable against non-dodgeable mechanics.
- **Feint** (1966) — ~1 sec cooldown, 6 sec duration, 35 energy. Reduces AoE damage taken by ~40% and reduces overall damage taken for the duration.
  - *RaidLens usage:* This is the bread-and-butter "press before a raid-wide AoE" button. Because it is almost always off cooldown, a player taking large *avoidable raid-wide AoE* damage without Feint coverage is a strong, fair flag. Treat repeated unmitigated raid-AoE hits as a Feint-usage problem.
- **Crimson Vial** (185311) — 30 sec cooldown, 20 energy, 4 sec duration. Self-heal over time (~5% max health per second over the duration).
  - *RaidLens usage:* Self-sustain, not a big mitigation cooldown. Useful to note if a player was sitting at low health through a damage window with Crimson Vial available, but do not flag it as the cause of a one-shot.
- **Cheat Death** (31230) — passive talent (when chosen). Absorbs what would be a killing blow, leaving the player alive with a brief damage-reduction window instead of dying.
  - *RaidLens usage:* This is passive, not a pressed cooldown. If a player survived a hit that should have killed them, Cheat Death may explain it. It has an internal cooldown, so it cannot save the player on back-to-back lethal hits — a second death shortly after a Cheat Death proc is not necessarily a mistake.

## Utility

- **Interrupt:** **Kick** (1766) — 15 sec cooldown. This is the spec's interrupt and, in practice, the **only** raid-usable interrupt the Subtlety Rogue has. It is a hard interrupt that stops an enemy cast and locks that school briefly.
  - *RaidLens usage:* Subtlety **has** a real, short-cooldown interrupt. Missed/assigned interrupts on this player are a fair flag. (Note: Cheap Shot / Kidney Shot stuns can technically interrupt some casts but are not the reliable raid kick — judge interrupt duty on Kick.)
- **Crowd control:**
  - **Blind** (2094) — 2 min cooldown, disorient.
  - **Sap** (6770) — incapacitate, usable from stealth, out-of-combat opener CC.
  - Cheap Shot / Kidney Shot — stuns (SpellIDs not confirmed live; see Known Gaps).
- **Dispels:** Subtlety has **no friendly dispel** (cannot remove debuffs from allies) and no offensive dispel. **Cloak of Shadows** (31224) is effectively a *self*-dispel: it removes harmful magic effects from the Rogue when used. It cannot be used on anyone else.
- **Externals for allies:** None offensive or defensive. Only **Tricks of the Trade** (57934), a threat transfer, not a buff.
- **Raid buff / debuff:** **Atrophic Poison** (381637) damage-reduction debrief on the target (see Role in Raid).
- **Movement tools:** **Shadowstep** (36554, gap closer to target), **Sprint** (2983, 2 min, movement speed), **Shadow Dance** (185313) and **Vanish** (1856) for repositioning/threat drop, **Shroud of Concealment** (114018, 6 min, group stealth — out-of-combat utility, not a combat defensive).

## Consumables and Enchants

Sourced from Icy Veins (patch 12.0.5). Names only — no item IDs were confirmed from a live source, so none are given here. Verify in-game before relying on exact items.

- **Flask:** Flask of the Blood Knights, or Flask of the Magisters (depending on stat breakpoints).
- **Food:** Harandar Celebration or Royal Roast.
- **Augment Rune:** Void-Touched Augment Rune.
- **Potions:** Light's Potential (damage potion); Silvermoon Health Potion (emergency heal).
- **Weapon enchant / oil:** Acuity of the Ren'dorei (weapon enchant) plus Thalassian Phoenix Oil (weapon oil), on both main and off hand.
- **Armor enchants (by slot):** Empowered Rune of Avoidance (helm), Amirdrassil's Grace (shoulders), Mark of the Worldsoul (chest), Forest Hunter's Armor Kit (legs), Lynx's Dexterity (boots), Eyes of the Eagle (rings).
- **Gems:** Indecipherable Eversong Diamond (meta); Flawless Deadly Peridot (Haste), Flawless Masterful Peridot, Flawless Masterful Garnet, Flawless Deadly Amethyst as secondary-stat gems.

Stat priority and exact gem/enchant choices vary with gear and should be confirmed by simulating the individual character.

## SimulationCraft Reference (Midnight 12.0.5)

Hero tree(s) covered: none specified in source data (`hero_tree` is null in the JSON). The APL and talent string cover a general Subtlety build; hero-tree-specific variants are not differentiated in this source.

### Talent Import String

```
CUQAAAAAAAAAAAAAAAAAAAAAAAgx2MAAAAAwsMGLTMbbjxMjZwMzMzYMbDzYbbmZmZmZMYMz2AAAAwgxAGzmhBGYW0CtYDzAmZwMGA
```

### Metrics

Metrics not captured in source.

### Damage Distribution (SimC, share of total)

The parenthesised values are used where the SimC output shows both a non-Dance and a Dance-empowered share (the parenthesised figure reflects the higher-activity or empowered breakdown). Rows whose percent field contained no "%" (buff uptimes, durations, plain numerics) are excluded, as are consumables, Bloodlust, and resource-tracking rows.

| Ability | Share of Total |
|---|---|
| Eviscerate | 28.1% |
| Secret Technique | 17.9% |
| Coup de Grace | 12.3% |
| Shadowstrike | 10.1% |
| Auto Attack | 6.6% |
| Lashe Macabre | 6.1% |
| Unseen Blade | 3.8% |
| Backstab | 2.2% |
| Instant Poison | 0.6% |
| Voidstalker Sting | 0.6% |
| Twilight Barrage | 0.5% |
| Shuriken Storm | 0.1% |

**RaidLens interpretation:** Eviscerate, Secret Technique, and Coup de Grace together account for roughly 58% of total damage, confirming that finisher usage inside burst windows dominates the spec's output; players who die or stop attacking during Shadow Dance / Shadow Blades windows will show a disproportionate drop in these three categories.

### Action Priority List — Subtlety (General)

```
actions.precombat=apply_poison
actions.precombat+=/snapshot_stats
actions.precombat+=/variable,name=priority_rotation,value=priority_rotation
# Check for on-use stat trinkets and which slot has the most powerful effect (ie longest cooldown).
actions.precombat+=/variable,name=trinket_sync_slot,value=1,if=trinket.1.has_use_buff&(!trinket.2.has_use_buff|trinket.1.cooldown.duration>=trinket.2.cooldown.duration)
actions.precombat+=/variable,name=trinket_sync_slot,value=2,if=trinket.2.has_use_buff&(!trinket.1.has_use_buff|trinket.2.cooldown.duration>trinket.1.cooldown.duration)
actions.precombat+=/stealth

# Executed every time the actor is available.
actions=variable,name=stealth,value=buff.shadow_dance.up|buff.stealth.up|buff.vanish.up
actions+=/variable,name=targets,value=spell_targets.shuriken_storm
actions+=/variable,name=racial_sync,value=(buff.shadow_blades.up&buff.shadow_dance.up)|fight_remains<20
actions+=/variable,name=shd_cp,value=buff.slice_and_dice.up&combo_points<=2&talent.deathstalkers_mark|combo_points>=6&(!talent.deathstalkers_mark|variable.targets>=5)
actions+=/stealth
actions+=/call_action_list,name=race
actions+=/call_action_list,name=item
actions+=/call_action_list,name=cds
actions+=/shadowstrike,if=talent.ancient_arts_3&variable.targets<=2&(buff.darkest_night.up|(talent.unseen_blade&buff.supercharge_1.up))&buff.shadow_techniques.stack>=5&!buff.ancient_arts.up
actions+=/shuriken_storm,if=talent.ancient_arts_3&variable.targets>=3&(buff.supercharge_1.up)&buff.shadow_techniques.stack>=5&!buff.ancient_arts.up&!cooldown.secret_technique.ready
actions+=/call_action_list,name=finish,if=combo_points>=cp_max_spend-!buff.darkest_night.up
actions+=/call_action_list,name=build,if=variable.stealth|energy>60
actions+=/call_action_list,name=fill,if=!variable.stealth

actions.build=shuriken_storm,if=prev.shadow_dance&buff.premeditation.up&talent.danse_macabre
actions.build+=/shadowstrike,if=!debuff.deathstalkers_mark.up&talent.deathstalkers_mark&!buff.darkest_night.up|variable.targets<=3|variable.priority_rotation
actions.build+=/shuriken_storm,if=variable.targets>1
actions.build+=/goremaws_bite,if=combo_points.deficit>=3
actions.build+=/gloomblade,if=variable.targets<2&!variable.stealth
actions.build+=/backstab,if=variable.targets<2&!variable.stealth

# Cooldowns Delay the last Shadow Blades to line up with puzzle box if its equipped.
actions.cds=shadow_blades,if=variable.shd_cp&cooldown.shadow_dance.charges_fractional>=1+0.8*talent.deathstalkers_mark&cooldown.secret_technique.ready&(fight_remains>90|!equipped.algethar_puzzle_box|trinket.1.proc.mastery.up|trinket.2.proc.mastery.up)|(fight_remains<=20|target.time_to_die.remains<=20)
actions.cds+=/shadow_dance,if=!variable.stealth&variable.shd_cp&energy>=30&((cooldown.secret_technique.ready|buff.darkest_night.up)&(cooldown.shadow_blades.remains>=30-cooldown.secret_technique.duration)|(buff.shadow_blades.up&cooldown.secret_technique.duration>=18))|(fight_remains<=10|target.time_to_die-remains<=9)
# Have the second Shadow Dance in Shadow Blades line up with the end of Shadow Blades instead of back-to-back for trickster.
actions.cds+=/shadow_dance,if=buff.shadow_blades.up&talent.unseen_blade&buff.shadow_blades.remains<=buff.shadow_dance.duration+1
# Used for when Shadow Blades is ready but holding for Algethar Puzzlebox trinket at the end of pull
actions.cds+=/shadow_dance,if=equipped.algethar_puzzle_box&talent.unseen_blade&!variable.stealth&variable.shd_cp&energy>=30&((cooldown.secret_technique.ready|buff.darkest_night.up)&(trinket.algethar_puzzle_box.cooldown.remains>=39-30*cooldown.shadow_blades.up))
actions.cds+=/vanish,if=!variable.stealth&energy>=50&!buff.subterfuge.up&combo_points<=2
actions.cds+=/shadowmeld,if=energy>=50&!variable.stealth&combo_points.deficit>=2

# This list usually contains Cooldowns with negligible impact that causes global cooldowns
actions.fill=arcane_torrent,if=energy.deficit>=15+energy.regen
actions.fill+=/arcane_pulse
actions.fill+=/lights_judgment
actions.fill+=/bag_of_tricks

actions.finish=eviscerate,if=buff.darkest_night.up
actions.finish+=/secret_technique,if=buff.shadow_dance.up|(cooldown.secret_technique.duration<18|cooldown.shadow_dance.remains>=10)&!cooldown.shadow_dance.ready
actions.finish+=/coup_de_grace,if=cooldown.secret_technique.remains>=3|buff.shadow_dance.up
actions.finish+=/black_powder,if=variable.targets>=3
# Pool some Shadow Technique Stacks before entering Shadow Dance by not finishing right before.
actions.finish+=/eviscerate,if=cooldown.secret_technique.remains>=3&talent.unseen_blade|buff.shadow_dance.up|buff.shadow_blades.up|debuff.deathstalkers_mark.stack>1|debuff.deathstalkers_mark.stack=1&buff.shadow_techniques.stack>=5

# Trinket and Items
actions.item=potion,if=buff.shadow_blades.up|fight_remains<30
actions.item+=/use_item,name=algethar_puzzle_box,if=cooldown.shadow_blades.ready&cooldown.secret_technique.remains<=2&combo_points>=6
actions.item+=/use_items,slots=trinket1,if=(variable.trinket_sync_slot=1&(buff.shadow_blades.up|fight_remains<=20)|(variable.trinket_sync_slot=2&(!trinket.2.cooldown.ready&cooldown.shadow_blades.remains>20))|!variable.trinket_sync_slot)
actions.item+=/use_items,slots=trinket2,if=(variable.trinket_sync_slot=2&(buff.shadow_blades.up|fight_remains<=20)|(variable.trinket_sync_slot=1&(!trinket.1.cooldown.ready&cooldown.shadow_blades.remains>20))|!variable.trinket_sync_slot)

# Race Cooldowns
actions.race=blood_fury,if=variable.racial_sync
actions.race+=/berserking,if=variable.racial_sync
actions.race+=/fireblood,if=variable.racial_sync
actions.race+=/ancestral_call,if=variable.racial_sync
actions.race+=/invoke_external_buff,name=power_infusion,if=variable.racial_sync
```

## Confirmed Spell IDs (SimulationCraft HTML)

IDs sourced from the SimulationCraft Midnight 12.0.5 spell-ids-reference.json by exact key match.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Backstab | 53, 1269209 (multiple: base cast + variants) | physical, shadow | cast |
| Shadowstrike | 185438, 1269336 (multiple: base cast + variants) | physical, shadow | cast |
| Eviscerate | 1269205, 196819, 328082 (multiple: base cast + variants) | shadow, physical, shadow | cast |
| Secret Technique | 280719, 280720, 282449, 1269560 (multiple: base cast + variants) | physical, physical, shadow, shadow | cast |
| Coup de Grace | 441776 | physical | cast |
| Shadow Dance | 185313 | physical | cast |
| Shadow Blades | 121471, 279043 (multiple: base cast + variants) | physical, shadow | cast |
| Shuriken Storm | 197835 | physical | cast |
| Instant Poison | 315585 | nature | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

Unconfirmed facts (NOT included as numeric IDs above; verify before trusting):
- **Shuriken Storm** SpellID — the Wowhead-unconfirmed ID (212081) was previously noted as possibly being Thief's Bargain. The SimC reference now confirms **197835** as Shuriken Storm's SimC-sourced ID; this is SimC-confirmed but not yet verified against a live Wowhead spell page.
- **Coup de Grace** SpellID — SimC reference confirms **441776** (physical cast). Guide prose gap is now resolved for rotational purposes; Wowhead verification still pending.
- **Talent string and APL** — now added (SimulationCraft Midnight 12.0.5, general build; no hero tree differentiated).
- **Damage and rotational spell IDs** — now confirmed for: Backstab, Shadowstrike, Eviscerate, Secret Technique, Coup de Grace, Shadow Dance, Shadow Blades, Shuriken Storm, Instant Poison. These are SimC-sourced IDs; existing Wowhead-confirmed IDs (53, 185438, 196819, 280719, 185313, 121471) are consistent with the SimC data.
- **Slice and Dice** SpellID — still not confirmed live. APL references it as a condition (`buff.slice_and_dice.up`) but its SpellID is not in the SimC damage-ability reference.
- **Cheap Shot / Kidney Shot** SpellIDs — not confirmed live; treated as stuns/CC, not the reliable interrupt.
- **Thistle Tea** SpellID — not confirmed (an energy/utility cooldown referenced by guides; the page at 381637 was verified to be Atrophic Poison, not Thistle Tea).
- **Apex / clone talents (e.g. "Ancient Arts")** SpellIDs — not confirmed live; described conceptually only. Appears in APL as `talent.ancient_arts_3` and `buff.ancient_arts.up`.
- **Atrophic Poison exact magnitude (~3%, ~3.6% with Master Poisoner) and which boss mechanics it affects** — sourced from Icy Veins prose / search summary, not from the spell tooltip; treat the percentage as approximate and version-dependent.
- **Consumable/enchant/gem item IDs** — intentionally omitted. Only names were available from Icy Veins; no item IDs were confirmed from a live source. Defensive and interrupt spell IDs (Kick, Cloak of Shadows, Evasion, Feint, Crimson Vial, Cheat Death, Blind, Sap) are not present in the SimC damage source and their IDs come solely from Wowhead-confirmed pages already listed above.
- The Wowhead JS-rendered class guide pages (overview/abilities/rotation) could not be parsed for prose; overview and rotation prose were drawn from Icy Veins (12.0.5) and confirmed individual Wowhead spell pages.

Maintenance flag: **Re-verify this guide after any 12.x patch.** Tuning values (Atrophic Poison %, cooldown durations, tier-set effects, talent IDs) change between patches even when SpellIDs do not. SpellIDs themselves do not change once assigned.
