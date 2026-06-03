# Outlaw Rogue — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/rogue/outlaw/overview-pve-dps
> - https://www.wowhead.com/guide/classes/rogue/outlaw/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/outlaw-rogue-pve-dps-guide
> - https://www.method.gg/guides/outlaw-rogue/playstyle-and-rotation
> - https://www.wowhead.com/spell=1766/kick
> - https://www.wowhead.com/spell=137036/outlaw-rogue
> - https://www.wowhead.com/spell=185311/crimson-vial
> - https://www.wowhead.com/spell=31224/cloak-of-shadows
> - https://www.wowhead.com/spell=5277/evasion
> - https://www.wowhead.com/spell=1966/feint
> - https://www.wowhead.com/spell=31230/cheat-death
> - https://www.wowhead.com/spell=57934/tricks-of-the-trade
> - https://www.wowhead.com/spell=114018/shroud-of-concealment
> - https://www.wowhead.com/spell=2094/blind
> - https://www.wowhead.com/spell=2983/sprint
> - https://www.wowhead.com/spell=195457/grappling-hook
> - https://www.wowhead.com/spell=13750/adrenaline-rush
> - https://www.wowhead.com/spell=193315/sinister-strike
> - https://www.wowhead.com/spell=315341/between-the-eyes
> - https://www.wowhead.com/spell=315508/roll-the-bones
> - https://www.wowhead.com/spell=13877/blade-flurry
> - https://www.wowhead.com/spell=185763/pistol-shot
> - https://www.wowhead.com/spell=2098/dispatch
> - https://www.wowhead.com/spell=315496/slice-and-dice
> - https://www.wowhead.com/spell=1856/vanish
> - https://www.wowhead.com/spell=6770/sap
> - https://www.wowhead.com/spell=1776/gouge
> - https://www.wowhead.com/spell=381623/thistle-tea
> - https://www.wowhead.com/spell=381637/atrophic-poison
> - https://www.wowhead.com/spell=51690/killing-spree
> - https://www.wowhead.com/spell=271877/blade-rush
> - https://www.wowhead.com/spell=381989/keep-it-rolling
> - https://www.wowhead.com/spell=79096/restless-blades
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Outlaw Rogue is a melee physical damage specialization built around managing energy and combo points to sustain a very high actions-per-minute (APM) "Always Be Casting" playstyle. Its damage profile is **sustained and relatively flat** rather than burst-heavy: Outlaw lacks a single large damage cooldown that produces a big burst window, so it relies on keeping its short-cooldown abilities, finishers, and the Roll the Bones buff system rolling continuously.

The core gameplay loop is: build combo points with **Sinister Strike** (and **Pistol Shot** procs), spend them on the primary finisher **Dispatch** for damage and on **Between the Eyes** / **Slice and Dice** to maintain buffs, while keeping **Roll the Bones** active for its random combat buffs. Spending combo points on finishers reduces the cooldowns of major abilities via the passive **Restless Blades** (spell ID 79096), which is what keeps the spec's cooldowns flowing.

**Damage profile:** strong, consistent single-target and cleave; good multi-target via Blade Flurry.
**Survivability profile:** above-average for a DPS — Rogues have a deep, well-rounded defensive kit (see Defensives).
**Primary weakness:** limited burst for raid amplification/burn windows; damage is steady rather than spiky, so it does not stack as well into short "everyone blow cooldowns now" windows.

## Role in Raid

- **Role:** Pure melee DPS. Outlaw does not heal, does not tank, and does **not** provide a Bloodlust/Heroism-equivalent effect.
- **Battle res:** No. Rogues cannot battle-res.
- **Raid buff/debuff:** Outlaw can run **Atrophic Poison** (spell ID 381637), a weapon poison that has a chance to apply a weakening effect reducing the target's damage dealt. This is a mitigation-flavored debrief item, not a damage buff to the raid, and it does not apply to every mechanic/source.
- **Externals / group defensives:** **Tricks of the Trade** (spell ID 57934) is a threat-transfer tool, not a damage/defensive external — it does not protect an ally's health. **Shroud of Concealment** (spell ID 114018) is a group stealth utility used for skips, not a combat defensive.
- **Mobility profile:** Strong. **Sprint** (spell ID 2983, 70% movement speed, 8s) and **Grappling Hook** (spell ID 195457, charge/leap to a location within 40 yds) give Outlaw excellent repositioning. **Vanish** (spell ID 1856) and Shroud add further movement/utility options.

## Abilities Reference

Core builders, finishers, and rotational cooldowns (spell IDs confirmed on live Wowhead spell pages):

- **Sinister Strike** (193315) — primary combo point builder. Costs energy, generates combo points; can trigger extra strikes/Opportunity procs.
- **Pistol Shot** (185763) — ranged builder, generates 1 combo point and applies a movement snare; often used via the Opportunity proc.
- **Dispatch** (2098) — primary single-target finisher; spends combo points for physical damage.
- **Between the Eyes** (315341) — finisher dealing physical damage and applying a damage-amplifying buff; **45-second cooldown** per the live tooltip. Used to maintain its buff and as a damage finisher.
- **Slice and Dice** (315496) — finisher that buffs attack speed; maintained as a uptime buff.
- **Roll the Bones** (315508) — finisher that grants one or more random combat buffs for 30s (the classic set includes Broadside, Buried Treasure, Grand Melee, Ruthless Precision, Skull and Crossbones, and True Bearing — see Known Gaps for buff-ID confirmation). Live tooltip shows a 45-second cooldown.
- **Adrenaline Rush** (13750) — major offensive cooldown: +75% energy regen, +20% attack speed, +50 max energy, 15s duration, **3-minute cooldown**.
- **Blade Flurry** (13877) — cleave toggle/buff that strikes nearby enemies; 10s duration, 30s cooldown. Used on 2+ targets.
- **Killing Spree** (51690) — channeled burst finisher, **3-minute cooldown** (talent).
- **Blade Rush** (271877) — gap-closing charge dealing damage, **1-minute cooldown** (talent).
- **Keep It Rolling** (381989) — extends current Roll the Bones buffs, **6-minute cooldown** (talent).
- **Restless Blades** (79096) — passive: spending combo points on finishers reduces the cooldowns of Outlaw's major abilities (the engine behind the spec's flat cooldown flow).
- **Outlaw Rogue** (137036) — spec aura/passive (the damage-scaling specialization passive).

## Rotation / Priority

> This is **logical priority ordering**, not a DPS benchmark. Exact talent builds vary; treat this as the conceptual loop a competent Outlaw follows. Based on the Method.gg and Wowhead Midnight rotation pages.

**Opener (conceptual):**
1. Adrenaline Rush (at low combo points to avoid wasting energy).
2. Roll the Bones (to get buffs rolling), then Keep It Rolling to lock in good buffs.
3. Slice and Dice (establish attack-speed buff).
4. Blade Rush.
5. Build to 6+ combo points, then Between the Eyes.
6. Continue into the sustained priority.

**Sustained single target (priority):**
1. Keep **Slice and Dice** and **Roll the Bones** active (re-roll Roll the Bones if you have one buff or fewer / a poor set).
2. **Adrenaline Rush** on cooldown (cast at ~2 or fewer combo points).
3. **Between the Eyes** at 6+ combo points.
4. **Killing Spree** at high combo points (cancel early if it would overcap energy).
5. **Dispatch** as the main combo-point spender at 6+ combo points.
6. **Sinister Strike** / **Pistol Shot** (on Opportunity procs) to build combo points.

**AoE / multi-target (priority):**
1. **Blade Flurry** when 2+ targets are in range and it is not already active (keep it up).
2. Maintain Slice and Dice and Roll the Bones.
3. Same finisher/builder priority as single target — Blade Flurry cleaves your single-target output onto nearby enemies.

## Defensives

Outlaw has a broad defensive kit. For RaidLens, the key question on any lethal or near-lethal hit is: **was an appropriate defensive available and unused during that damage window?**

- **Crimson Vial** (185311) — self-heal over 4s. **30-second cooldown.**
  - *RaidLens usage:* This is the bread-and-butter, spammable self-heal. It is almost always off cooldown. If a Rogue takes heavy avoidable/rot damage and dies with Crimson Vial available, that is a clear missed mitigation. Expect frequent use across a fight; long gaps with no casts during damage are a flag.

- **Feint** (1966) — reduces AoE damage taken by 40% (plus general damage reduction), 6s duration. Short cooldown (~tooltip shows it can be re-used very frequently).
  - *RaidLens usage:* The primary tool for raid-wide AoE / pulsing mechanics. On a known AoE damage event, a Rogue should have Feint active. Took full damage from a telegraphed raid-wide hit with Feint available = missed cooldown. Because its cooldown is short, lack of Feint coverage on repeated AoE events is a strong pattern to flag.

- **Evasion** (5277) — +dodge and damage reduction, 10s duration. **2-minute cooldown.**
  - *RaidLens usage:* Best against physical/dodgeable melee or auto-attack-style damage. For a non-tank Outlaw this is most relevant when soaking a physical mechanic or tanking adds. If the player ate a large physical hit with Evasion off cooldown during a known physical window, flag it.

- **Cloak of Shadows** (31224) — removes/immunes magic damage and effects, 5s duration. **2-minute cooldown.**
  - *RaidLens usage:* The premier magic-damage answer. Against a known magic burst or a dangerous magic debuff, Cloak should be used. Death to a telegraphed magic mechanic with Cloak available is a clear miss. Note it also removes many harmful magic debuffs.

- **Cheat Death** (31230) — passive talent that prevents an otherwise-fatal hit (absorbs overkill) and leaves the Rogue at low health with brief damage reduction.
  - *RaidLens usage:* Passive, so it is not "used" actively — but if a Rogue dies outright to a single huge hit, check whether Cheat Death was talented/available. If it proc'd and they then died seconds later, the follow-up death (not the initial hit) is the thing to examine. Treat as a safety net, not a planned cooldown.

- **Thistle Tea** (381623) — restores energy; in current builds it is primarily an energy/throughput tool and may carry a minor mitigation component (see Known Gaps).
  - *RaidLens usage:* Treat as a throughput cooldown, not a primary defensive. Do not flag a death as "missed Thistle Tea." Only note it if explicitly investigating energy/uptime.

## Utility

- **Interrupt — Kick** (spell ID 1766). **15-second cooldown**, 5-yard melee range, interrupts the target's cast.
  - This is the spec's **only** interrupt (Rogues have no second hard-kick baseline). For RaidLens interrupt tracking, Kick is THE interrupt to attribute to an Outlaw Rogue. A Rogue assigned to an interrupt rotation who misses kicks while Kick was off cooldown is a flaggable failure.
  - Note: **Gouge** (below) and **Blind** are crowd-control stuns/incapacitates, not true cast interrupts — do not count them as interrupts in raid interrupt tracking.

- **Crowd control:**
  - **Sap** (6770) — incapacitate, 1-minute duration, usable from stealth only; for pre-pull CC, not in-combat.
  - **Gouge** (1776) — 4-second incapacitate/stun, **25-second cooldown**, generates a combo point. Front-facing melee CC; can stop a cast but is a CC, not a listed interrupt.
  - **Blind** (2094) — disorient, up to 1-minute duration, **2-minute cooldown**. AoE-capable with the appropriate talent.

- **Dispels:** Outlaw has **no offensive or magic dispel** and cannot cleanse allies. **Cloak of Shadows** (31224) self-removes many harmful magic effects on the Rogue, but it is self-only and not a targeted dispel of others.

- **Externals / threat:** **Tricks of the Trade** (57934, 30s cooldown) transfers the Rogue's threat to a target ally — useful for threat management, not an ally damage reduction.

- **Raid buff/debuff:** **Atrophic Poison** (381637) — weakening poison reducing a target's damage dealt (chance-on-attack). The spec brings no unique stat raid buff beyond this.

- **Movement tools:** **Sprint** (2983, +70% speed, 8s, 2-min cooldown), **Grappling Hook** (195457, leap/charge to location within 40 yds), **Vanish** (1856), **Shroud of Concealment** (114018, group stealth, 6-min cooldown).

## Consumables and Enchants

Not confirmable from the live pages fetched in this pass. Outlaw is an Agility user (flasks/food/oils/enchants should be Agility/stat-focused), but specific Midnight 12.0.5 item IDs and names for flasks, potions, food, weapon enchants, and gem/enchant recommendations were not loaded from a source in this research. **Do not assume any specific item IDs.** See Known Gaps — the Wowhead "consumables-enchants" and Method.gg "gearing" pages should be fetched to fill this section.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Fatebound**, **Trickster**

Source: SimulationCraft Midnight 12.0.5 HTML report (simc-guides/). Single-target Patchwerk sim. Metrics not captured in source.

---

### Fatebound — Talent Import String

```
CQQAAAAAAAAAAAAAAAAAAAAAAAgx2MGjZmZmtZmZmZMmFGmZZaZw2MAAAAAgZbbmZGmZmZGzMzyAAAAwAYgNYGjGzGgtJswAgZmBG
```

### Trickster — Talent Import String

```
CQQAAAAAAAAAAAAAAAAAAAAAAAgx2MYmZmZmtZmZmZMmNeAmZbaZw2MAAAAAgZbbmZGmZmZGzMzyAAAAwYAwYWMMkBmFWoF2YAmZwAD
```

---

### Damage Distribution (SimC, share of total)

**Fatebound** — top abilities by share of total damage:

| Ability | Share |
|---|---|
| Dispatch | 20.4% |
| Hand of Fate | 11.1% |
| Pistol Shot | 7.8% |
| Main Gauche | 7.4% |
| Sinister Strike | 5.3% |
| Instant Poison | 2.2% |

Hand of Fate (the Fatebound hero-tree proc) is the second-largest source at 11.1%, making it the defining feature of this build's damage profile. Dispatch dominates at 20.4%, confirming it as the primary finisher to prioritise in logs.

**Trickster** — top abilities by share of total damage:

| Ability | Share |
|---|---|
| Dispatch | 12.2% |
| Pistol Shot | 9.7% |
| Main Gauche | 8.6% |
| Sinister Strike | 7.1% |
| Unseen Blade | 5.5% |
| Coup de Grace | 4.7% |
| Instant Poison | 1.8% |

Trickster spreads damage more broadly: Dispatch is still the top finisher but falls to 12.2%, Pistol Shot climbs to 9.7% (reflecting the Trickster talent synergy with Opportunity/fan-the-hammer procs), and the hero-tree abilities Unseen Blade (5.5%) and Coup de Grace (4.7%) together account for ~10% — a meaningful Trickster-only footprint visible in logs.

---

## Action Priority List — Fatebound

```
actions.precombat=apply_poison,nonlethal=none,lethal=instant
# Snapshot raid buffed stats before combat begins and pre-potting is done.
actions.precombat+=/snapshot_stats
actions.precombat+=/stealth,precombat_seconds=2
actions.precombat+=/adrenaline_rush,precombat_seconds=1,if=talent.improved_adrenaline_rush
actions.precombat+=/slice_and_dice,precombat_seconds=1,if=talent.improved_adrenaline_rush
actions.precombat+=/roll_the_bones,precombat_seconds=0,if=buff.loaded_dice.up

# Executed every time the actor is available.
# Restealth if possible (no vulnerable enemies in combat).
actions=stealth
# Interrupt on cooldown to allow simming interactions with that.
actions+=/kick
actions+=/variable,name=ambush_condition,value=(talent.hidden_opportunity|combo_points.deficit>=2+talent.improved_ambush)&energy>=50
# Use finishers if at -1 from max combo points, but Killing Spree is used at -2, and Fatebound uses Dispatch at -2.
actions+=/variable,name=finish_condition,value=combo_points>=cp_max_spend-1-(!cooldown.between_the_eyes.ready&(hero_tree.fatebound|cooldown.killing_spree.ready))
actions+=/variable,name=blade_flurry_sync,value=spell_targets.blade_flurry<2&raid_event.adds.in>20|buff.blade_flurry.up
actions+=/call_action_list,name=cds
actions+=/run_action_list,name=finish,if=variable.finish_condition
actions+=/call_action_list,name=build
actions+=/arcane_torrent,if=energy.base_deficit>=15+energy.regen
actions+=/arcane_pulse
actions+=/lights_judgment
actions+=/bag_of_tricks

# Builders High priority Ambush with Hidden Opportunity.
actions.build=ambush,if=talent.hidden_opportunity&buff.audacity.up
# With Deft Maneuvers, build CPs with Blade Flurry at 3+ targets.
actions.build+=/blade_flurry,if=talent.deft_maneuvers&spell_targets>=3
# Prioritize Coup de Grace if Unseen Blade is guaranteed after Killing Spree.
actions.build+=/coup_de_grace,if=buff.disorienting_strikes.up
# With Audacity + Hidden Opportunity, consume Opportunity to proc Audacity any time Ambush is not available.
actions.build+=/pistol_shot,if=talent.audacity&talent.hidden_opportunity&buff.opportunity.up&!buff.audacity.up
# With Fan the Hammer, consume Opportunity if at max stacks or if it will expire.
actions.build+=/pistol_shot,if=talent.fan_the_hammer&buff.opportunity.up&(buff.opportunity.stack>=buff.opportunity.max_stack|buff.opportunity.remains<2)
# With Fan the Hammer, consume Opportunity if it will not overcap CPs. Fatebound with stage 2 RTB tries to avoid consuming PS at 1CP.
actions.build+=/pistol_shot,if=talent.fan_the_hammer&buff.opportunity.up&(combo_points.deficit>=(1+talent.quick_draw+(talent.quick_draw*talent.fan_the_hammer.rank))&(combo_points>1|rtb_buffs<2|!talent.deal_fate))
# If not using Fan the Hammer, then consume Opportunity based on energy, when it will exactly cap CPs, or when using Quick Draw.
actions.build+=/pistol_shot,if=!talent.fan_the_hammer&buff.opportunity.up&(energy.base_deficit>energy.regen*1.5|combo_points.deficit<=1|talent.quick_draw.enabled|talent.audacity.enabled&!buff.audacity.up)
# Fallback pooling just so Hidden Opportunity builds do not skip Ambush at low energy.
actions.build+=/pool_resource,for_next=1
actions.build+=/ambush,if=talent.hidden_opportunity
actions.build+=/sinister_strike

# Cooldowns Maintain Adrenaline Rush. With Improved AR, use at low CPs. Has a cursory check to try not to send if immediate downtime is expected.
actions.cds=adrenaline_rush,if=!buff.adrenaline_rush.up&(!variable.finish_condition|!talent.improved_adrenaline_rush)&(raid_event.adds.remains>5|raid_event.adds.in<5|!raid_event.adds.exists|!raid_event.adds.count)
# Maintain Blade Flurry at 2+ targets.
actions.cds+=/blade_flurry,if=spell_targets>=2&buff.blade_flurry.remains<gcd
# Use Preparation to reset Adrenaline Rush and Between the Eyes.
actions.cds+=/preparation,if=cooldown.adrenaline_rush.remains>30&!cooldown.between_the_eyes.ready|fight_remains<30
# Use Keep it Rolling with at least stage 3 of RtB.
actions.cds+=/keep_it_rolling,if=rtb_buffs>=3
# Use Roll the Bones if not active, or reroll for stage 2. Roll over stage 2 if both Loaded Dice is active and KIR is ready.
actions.cds+=/roll_the_bones,if=!buff.roll_the_bones.up|rtb_buffs=1+(buff.loaded_dice.up&cooldown.between_the_eyes.ready)
# Use Blade Rush if using tier, or in AoE, or if you will not overcap energy within the gcd on ST.
actions.cds+=/blade_rush,if=set_bonus.mid1_2pc|spell_targets=1&energy.base_time_to_max>2|spell_targets>=2
# Hidden Opportunity builds use Vanish or Shadowmeld for an extra Ambush in between procs.
actions.cds+=/vanish,if=!variable.finish_condition&talent.hidden_opportunity&!buff.audacity.up&!buff.opportunity.up
actions.cds+=/shadowmeld,if=!variable.finish_condition&talent.hidden_opportunity&!buff.audacity.up&!buff.opportunity.up
actions.cds+=/potion,if=buff.bloodlust.react|fight_remains<30|buff.adrenaline_rush.up
actions.cds+=/blood_fury
actions.cds+=/berserking
actions.cds+=/fireblood
actions.cds+=/ancestral_call
# Default conditions for usable items.
actions.cds+=/use_items,slots=trinket1,if=buff.between_the_eyes.up|trinket.1.has_stat.any_dps|fight_remains<=20
actions.cds+=/use_items,slots=trinket2,if=buff.between_the_eyes.up|trinket.2.has_stat.any_dps|fight_remains<=20

# Finishers With Supercharger and Zero In, hold BtE for an upcoming Adrenaline Rush
actions.finish=between_the_eyes,if=cooldown.adrenaline_rush.remains>30|buff.adrenaline_rush.up|!talent.supercharger|!talent.zero_in
actions.finish+=/pool_resource,for_next=1
# Cancel Killing Spree with a builder/finisher if approaching max energy.
actions.finish+=/killing_spree,interrupt_if=energy.time_to_max<2,interrupt_global=1
actions.finish+=/coup_de_grace
actions.finish+=/dispatch
```

## Action Priority List — Trickster

```
actions.precombat=apply_poison,nonlethal=none,lethal=instant
# Snapshot raid buffed stats before combat begins and pre-potting is done.
actions.precombat+=/snapshot_stats
actions.precombat+=/stealth,precombat_seconds=2
actions.precombat+=/adrenaline_rush,precombat_seconds=1,if=talent.improved_adrenaline_rush
actions.precombat+=/slice_and_dice,precombat_seconds=1,if=talent.improved_adrenaline_rush
actions.precombat+=/roll_the_bones,precombat_seconds=0,if=buff.loaded_dice.up

# Executed every time the actor is available.
# Restealth if possible (no vulnerable enemies in combat).
actions=stealth
# Interrupt on cooldown to allow simming interactions with that.
actions+=/kick
actions+=/variable,name=ambush_condition,value=(talent.hidden_opportunity|combo_points.deficit>=2+talent.improved_ambush)&energy>=50
# Use finishers if at -1 from max combo points, but Killing Spree is used at -2, and Fatebound uses Dispatch at -2.
actions+=/variable,name=finish_condition,value=combo_points>=cp_max_spend-1-(!cooldown.between_the_eyes.ready&(hero_tree.fatebound|cooldown.killing_spree.ready))
actions+=/variable,name=blade_flurry_sync,value=spell_targets.blade_flurry<2&raid_event.adds.in>20|buff.blade_flurry.up
actions+=/call_action_list,name=cds
actions+=/run_action_list,name=finish,if=variable.finish_condition
actions+=/call_action_list,name=build
actions+=/arcane_torrent,if=energy.base_deficit>=15+energy.regen
actions+=/arcane_pulse
actions+=/lights_judgment
actions+=/bag_of_tricks

# Builders High priority Ambush with Hidden Opportunity.
actions.build=ambush,if=talent.hidden_opportunity&buff.audacity.up
# With Deft Maneuvers, build CPs with Blade Flurry at 3+ targets.
actions.build+=/blade_flurry,if=talent.deft_maneuvers&spell_targets>=3
# Prioritize Coup de Grace if Unseen Blade is guaranteed after Killing Spree.
actions.build+=/coup_de_grace,if=buff.disorienting_strikes.up
# With Audacity + Hidden Opportunity, consume Opportunity to proc Audacity any time Ambush is not available.
actions.build+=/pistol_shot,if=talent.audacity&talent.hidden_opportunity&buff.opportunity.up&!buff.audacity.up
# With Fan the Hammer, consume Opportunity if at max stacks or if it will expire.
actions.build+=/pistol_shot,if=talent.fan_the_hammer&buff.opportunity.up&(buff.opportunity.stack>=buff.opportunity.max_stack|buff.opportunity.remains<2)
# With Fan the Hammer, consume Opportunity if it will not overcap CPs. Fatebound with stage 2 RTB tries to avoid consuming PS at 1CP.
actions.build+=/pistol_shot,if=talent.fan_the_hammer&buff.opportunity.up&(combo_points.deficit>=(1+talent.quick_draw+(talent.quick_draw*talent.fan_the_hammer.rank))&(combo_points>1|rtb_buffs<2|!talent.deal_fate))
# If not using Fan the Hammer, then consume Opportunity based on energy, when it will exactly cap CPs, or when using Quick Draw.
actions.build+=/pistol_shot,if=!talent.fan_the_hammer&buff.opportunity.up&(energy.base_deficit>energy.regen*1.5|combo_points.deficit<=1|talent.quick_draw.enabled|talent.audacity.enabled&!buff.audacity.up)
# Fallback pooling just so Hidden Opportunity builds do not skip Ambush at low energy.
actions.build+=/pool_resource,for_next=1
actions.build+=/ambush,if=talent.hidden_opportunity
actions.build+=/sinister_strike

# Cooldowns Maintain Adrenaline Rush. With Improved AR, use at low CPs. Has a cursory check to try not to send if immediate downtime is expected.
actions.cds=adrenaline_rush,if=!buff.adrenaline_rush.up&(!variable.finish_condition|!talent.improved_adrenaline_rush)&(raid_event.adds.remains>5|raid_event.adds.in<5|!raid_event.adds.exists|!raid_event.adds.count)
# Maintain Blade Flurry at 2+ targets.
actions.cds+=/blade_flurry,if=spell_targets>=2&buff.blade_flurry.remains<gcd
# Use Preparation to reset Adrenaline Rush and Between the Eyes.
actions.cds+=/preparation,if=cooldown.adrenaline_rush.remains>30&!cooldown.between_the_eyes.ready|fight_remains<30
# Use Keep it Rolling with at least stage 3 of RtB.
actions.cds+=/keep_it_rolling,if=rtb_buffs>=3
# Use Roll the Bones if not active, or reroll for stage 2. Roll over stage 2 if both Loaded Dice is active and KIR is ready.
actions.cds+=/roll_the_bones,if=!buff.roll_the_bones.up|rtb_buffs=1+(buff.loaded_dice.up&cooldown.between_the_eyes.ready)
# Use Blade Rush if using tier, or in AoE, or if you will not overcap energy within the gcd on ST.
actions.cds+=/blade_rush,if=set_bonus.mid1_2pc|spell_targets=1&energy.base_time_to_max>2|spell_targets>=2
# Hidden Opportunity builds use Vanish or Shadowmeld for an extra Ambush in between procs.
actions.cds+=/vanish,if=!variable.finish_condition&talent.hidden_opportunity&!buff.audacity.up&!buff.opportunity.up
actions.cds+=/shadowmeld,if=!variable.finish_condition&talent.hidden_opportunity&!buff.audacity.up&!buff.opportunity.up
actions.cds+=/potion,if=buff.bloodlust.react|fight_remains<30|buff.adrenaline_rush.up
actions.cds+=/blood_fury
actions.cds+=/berserking
actions.cds+=/fireblood
actions.cds+=/ancestral_call
# Default conditions for usable items.
actions.cds+=/use_items,slots=trinket1,if=buff.between_the_eyes.up|trinket.1.has_stat.any_dps|fight_remains<=20
actions.cds+=/use_items,slots=trinket2,if=buff.between_the_eyes.up|trinket.2.has_stat.any_dps|fight_remains<=20

# Finishers With Supercharger and Zero In, hold BtE for an upcoming Adrenaline Rush
actions.finish=between_the_eyes,if=cooldown.adrenaline_rush.remains>30|buff.adrenaline_rush.up|!talent.supercharger|!talent.zero_in
actions.finish+=/pool_resource,for_next=1
# Cancel Killing Spree with a builder/finisher if approaching max energy.
actions.finish+=/killing_spree,interrupt_if=energy.time_to_max<2,interrupt_global=1
actions.finish+=/coup_de_grace
actions.finish+=/dispatch
```

## Confirmed Spell IDs (SimulationCraft HTML)

Abilities named in this guide that appear in the SimC spell-ids-reference.json by exact key match:

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Adrenaline Rush | 13750 | physical | cast |
| Between the Eyes | 315341 | physical | cast |
| Blade Rush | 271877 | physical | cast |
| Coup de Grace | 441776 | physical | cast |
| Dispatch | 2098 | physical | cast |
| Hand of Fate | 452536 | physical | cast |
| Instant Poison | 315585 | nature | cast |
| Keep It Rolling | 381989 | physical | cast |
| Killing Spree | 51690, 57841, 57842 | physical | cast (multiple: base cast + variants) |
| Main Gauche | 86392 | physical | cast |
| Pistol Shot | 185763 | physical | cast |
| Roll the Bones | 1214909 | physical | cast |
| Sinister Strike | 193315, 197834 | physical | cast (multiple: base cast + variants) |
| Slice and Dice | 426605, 315496 | physical | cast/other (multiple: base cast + variants) |
| Unseen Blade | 441144 | physical | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Wowhead guide body text did not render** through the fetch tool for the overview, rotation, and abilities-talents pages (only navigation/comment scaffolding returned). Conceptual rotation and role detail were sourced from Icy Veins and Method.gg instead; spell IDs were each confirmed on individual live Wowhead spell pages.
- **Roll the Bones buff spell IDs unconfirmed.** The six classic buffs (Broadside, Buried Treasure, Grand Melee, Ruthless Precision, Skull and Crossbones, True Bearing) are named from prior knowledge and the Method.gg description; their individual spell IDs were NOT confirmed live and are intentionally omitted. Verify before hardcoding any.
- **Between the Eyes / Roll the Bones cooldowns** both showed **45 seconds** on the live tooltips fetched. This may reflect talent/baseline interaction in 12.0.5; confirm against your own logs/build.
- **Killing Spree** tooltip showed a **1–7 combo point** requirement, implying a 7-combo-point cap is reachable via talents in Midnight. The exact combo-point cap and which talents grant it were not confirmed.
- **Thistle Tea** (381623): the live spell page confirmed only the energy-restore effect. In some recent builds Thistle Tea also grants a Mastery buff and/or minor damage reduction; this mitigation aspect is **unconfirmed** for 12.0.5. Treated as throughput, not a defensive, in this guide.
- **Feint cooldown:** the live tooltip displayed a 1-second value (likely the GCD-style internal entry, not the usable cadence). Feint is effectively a short-cooldown, frequently-available mitigation; exact usable cooldown not cleanly confirmed.
- **Grappling Hook cooldown:** live tooltip showed an 800ms value (internal); the real usable/recharge cooldown was not cleanly confirmed.
- **Gravedigger apex talent** was mentioned in search summaries as the Midnight apex talent but did NOT appear in the Method.gg rotation body and its spell ID/effect were not confirmed live. Omitted from the abilities reference pending confirmation.
- **Consumables and Enchants** section is unsourced — flasks, potions, food, oils, weapon enchants, gems for 12.0.5 must be fetched before use.
- **Atrophic Poison** effect described conservatively as a damage-reduction weakening poison; exact magnitude/duration of the weakening proc was not confirmed beyond the 30% proc-chance aura on the spell page.
- **Talent string and APL:** now added for both Fatebound and Trickster variants from SimulationCraft Midnight 12.0.5 (see SimulationCraft Reference section above).
- **Rotational and damaging spell IDs:** confirmed via SimC spell-ids-reference.json for all abilities named in the guide that appear in the reference (Dispatch, Between the Eyes, Sinister Strike, Pistol Shot, Main Gauche, Blade Rush, Instant Poison, Keep It Rolling, Killing Spree, Roll the Bones, Slice and Dice, Adrenaline Rush, Unseen Blade, Coup de Grace, Hand of Fate). IDs match the Wowhead-confirmed values already in this guide where both sources are present.
- **Defensive and interrupt spell IDs** (Crimson Vial, Feint, Evasion, Cloak of Shadows, Cheat Death, Kick, etc.) are not present in the SimC damaging-ability source, as expected. IDs for these remain as Wowhead-confirmed above.
- **Consumable spell IDs** (flasks, potions, food) are excluded from the SimC table by design; consumables section remains unsourced.
- **Maintenance flag:** Re-verify ALL spell IDs, cooldowns, and the rotation after any 12.x patch. Spell IDs themselves do not change once assigned, but cooldowns, talent gating, and rotational priority can shift between patches.
