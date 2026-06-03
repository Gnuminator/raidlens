# Balance Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/druid/balance/overview-pve-dps
> - https://www.wowhead.com/guide/classes/druid/balance/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/balance-druid-pve-dps-guide
> - https://www.icy-veins.com/wow/balance-druid-pve-dps-rotation-cooldowns-abilities
> - https://www.method.gg/guides/balance-druid
> - Individual Wowhead spell pages for each confirmed SpellID below (spell=78675, 22812, 61336, 108238, 29166, 20484, 106898, 1126, 2908, 194223, 391528, 190984, 194153, 78674, 191034, 8921, 93402, 5487, 102560, 22842, 33786)
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt

## Overview

Balance Druid is a ranged caster DPS spec (the "Moonkin"/Boomkin) built on a dual-resource model: it cycles between **Solar** and **Lunar Eclipse** states while generating and spending **Astral Power**. In Midnight the Eclipse mechanic is an actively pressed state determined by your last builder cast — casting Wrath moves you toward Solar, casting Starfire toward Lunar.

Core gameplay loop:
- Keep the two damage-over-time effects **Moonfire** and **Sunfire** applied to all relevant targets.
- Build Astral Power with **Wrath** (single-target / Solar) and **Starfire** (AoE / Lunar).
- Spend Astral Power on **Starsurge** (single-target) or **Starfall** (AoE).
- Align major cooldowns (Celestial Alignment / Incarnation, Convoke the Spirits, Fury of Elune, Force of Nature) into burst windows.

Damage profile: strong, flexible damage on both single-target and multi-target, with uncapped AoE. Healing/survivability profile: this is a pure DPS spec with moderate self-sustain and no immunity or cheat-death.

Primary weakness: **moderate survivability** (limited passive mitigation, no immunity, no cheat-death) and a **movement/ramp penalty** — much of the kit is hard-cast, so heavy movement and target-swapping degrade output and DoT/Eclipse uptime.

## Role in Raid

- **Role:** Ranged DPS.
- **Raid buff:** Mark of the Wild (SpellID 1126) — raid-wide Versatility buff (sourced as +3% Versatility). Note: Mark of the Wild is a general Druid buff, not Balance-exclusive.
- **Damage debuff on targets:** none confirmed as a core Balance-provided raid debuff.
- **Battle resurrection:** Yes — Rebirth (SpellID 20484), 10-minute cooldown, 2s cast, contributes to the raid's shared combat-res pool.
- **Bloodlust/Heroism equivalent:** No. Balance Druid does NOT provide a Bloodlust-equivalent.
- **External mana/utility:** Innervate (SpellID 29166) — castable on an ally to reduce their mana cost; primarily a healer aid.
- **Group movement:** Stampeding Roar (SpellID 106898) — +60% run speed to nearby allies for 8s, 2-minute cooldown. Raid-wide movement tool.
- **Mobility (self):** Strong. Baseline Dash, Stampeding Roar, and movement talents; can cast some spells while moving during certain windows (e.g. Starfall grants cast-while-moving for several spells). Still suffers when forced to hard-cast on the move.

## Abilities Reference

Builders / fillers:
- **Wrath** (SpellID 190984) — Nature damage, Astral Power generator, pushes toward Solar Eclipse. ~1.5s cast.
- **Starfire** (SpellID 194153) — Arcane damage with AoE splash, larger Astral Power generator, pushes toward Lunar Eclipse. ~2.25s cast.

Spenders:
- **Starsurge** (SpellID 78674) — single-target Astral Power spender, instant.
- **Starfall** (SpellID 191034) — AoE Astral Power spender, instant, ground-targeted persistent effect (~8s). Also grants cast-while-moving for several spells while active.

Damage-over-time:
- **Moonfire** (SpellID 8921) — Arcane DoT, also generates Astral Power.
- **Sunfire** (SpellID 93402) — Nature DoT (AoE application), also generates Astral Power.

Major cooldowns:
- **Celestial Alignment** (SpellID 194223) — burst cooldown; grants both Eclipse benefits during its window. Duration 15s (reduced from 20s in Midnight). Base cooldown approximately 3 minutes (see Known Gaps — exact base CD not directly confirmed on the spell page).
- **Incarnation: Chosen of Elune** (SpellID 102560) — talented upgrade to Celestial Alignment. Duration 20s (reduced from 30s in Midnight). Replaces Celestial Alignment when talented. Base cooldown approximately 3 minutes.
- **Convoke the Spirits** (SpellID 391528) — 4s channel firing many random Druid spells; 2-minute cooldown. Best overlapped with Celestial Alignment / Incarnation.
- **Fury of Elune** — channeled burst-window cooldown, used before entering Eclipse / before major cooldowns. (SpellID not confirmed — see Known Gaps.)
- **Force of Nature** — summons Treants and applies Moonfire to multiple targets (up to ~6 in AoE); used before Eclipse phases. (SpellID not confirmed — see Known Gaps.)

Eclipse: a state system (Solar / Lunar), entered based on your last builder. Not a single static SpellID for the purposes of this guide.

Note: The Whirling Stars talent reduces the Celestial Alignment / Incarnation cooldown and grants it 2 charges.

Notable procs and passive damage sources (SimC-confirmed prominent):
- **Shooting Stars** — a passive proc that fires extra damage when your DoTs (Moonfire/Sunfire) deal damage during Eclipse. A significant background damage contributor; keeping DoTs applied is what generates these procs.
- **Astral Smolder** — a talent that causes Starsurge/Starfall hits to leave a short damage-over-time effect. Prominent in SimC damage; confirms Starsurge spam during Eclipse windows matters beyond the direct hit.

## Rotation / Priority

This is the logical cast priority described by the sources, NOT a DPS benchmark or a hard rotation. Eclipse state and Astral Power thresholds drive moment-to-moment choices.

Single-target opener (per Icy Veins / Wowhead):
1. Precast two Wrath ~4s before the pull.
2. Apply Moonfire and Sunfire.
3. Cast Fury of Elune and Force of Nature.
4. Activate trinkets/potion and use Celestial Alignment.
5. Use Incarnation: Chosen of Elune (if talented) with trinkets/potion.
6. Spend Astral Power with Starsurge down toward <40.
7. Cast Convoke the Spirits.
8. Continue the sustained priority.

Sustained single-target priority (conceptual):
- Keep Moonfire and Sunfire applied.
- Use major cooldowns on cooldown, aligned together.
- Spend Astral Power with Starsurge (avoid capping).
- Fill with Wrath / Starfire to manage Eclipse state and build Astral Power.

AoE priority (conceptual):
- Maintain Moonfire/Sunfire across targets as they are collected (Sunfire spreads).
- Cast Fury of Elune before entering Eclipse.
- Use Force of Nature before Eclipse phases.
- Activate Celestial Alignment, then Incarnation.
- Spend Astral Power with Starfall (favored in Lunar Eclipse).
- Build with Starfire.

## Defensives

Balance Druid has no immunity and no cheat-death. Its defensive kit is the following. "RaidLens usage" describes how to judge whether the player used the defensive correctly relative to a damage window.

- **Barkskin** (SpellID 22812) — -20% damage taken (all schools), 8s duration, 1-minute cooldown. The spec's primary and most spammable defensive.
  - RaidLens usage: With a 1-minute cooldown this should be available for nearly every scheduled raid-damage event. If a Balance Druid took a large avoidable or scheduled hit and Barkskin was off cooldown and unused in the seconds before/at the hit, flag it. Conversely, do not flag if it was on cooldown from a recent prior event.

- **Survival Instincts** (SpellID 61336) — major damage reduction (sourced as 50%), 6s duration. Strong cooldown for the heaviest hits.
  - RaidLens usage: Reserve for the largest predictable spikes. If a near-lethal hit landed and Survival Instincts was available (off cooldown) and unused, that is a strong "unused defensive" flag. Note the cooldown/charge count is not fully confirmed (see Known Gaps); treat availability conservatively.

- **Renewal** (SpellID 108238) — instant heal for 30% of maximum health, 1.5-minute cooldown. A talent-based self-heal, not damage reduction.
  - RaidLens usage: This is a recovery tool, not pre-mitigation. Judge it by whether the player topped themselves after a big hit while low, rather than as a mitigation for the hit itself. Unused Renewal while sitting low for an extended period before death is flaggable.

- **Bear Form** (SpellID 5487) — shapeshift granting greatly increased armor and a flat damage-taken reduction (sourced as roughly -3% most schools, -6% Arcane, plus large physical mitigation from armor) and increased effective health. An emergency survivability swap.
  - RaidLens usage: Hard to confirm from damage tables alone. If logs show the player entered Bear Form during a heavy physical window, treat as correct defensive play, not as a mistake. Note that being in Bear Form blocks the normal caster rotation, so persistent Bear Form uptime outside survival windows would instead be a damage-loss signal, not a defensive credit.

- **Frenzied Regeneration** (SpellID 22842) — heal-over-time (sourced as ~8% of health per second), requires Bear Form. Pairs with Bear Form as an emergency self-heal.
  - RaidLens usage: Only usable in Bear Form. Evaluate together with Bear Form usage during a survival window; do not expect it during normal caster uptime.

General defensive note for RaidLens: Barkskin (1-min CD) is the workhorse and should be matched against essentially every scheduled raid-wide damage event. Survival Instincts is the "big" button for the worst spikes. Bear Form + Frenzied Regeneration is the emergency package. None of these prevent death from standing in avoidable ground effects indefinitely.

## Utility

- **Interrupt:** Balance Druid does NOT have a single-target kick like Skull Bash (that is Feral/Guardian). Its only interrupt-capable tool is **Solar Beam** (SpellID 78675): a ground-targeted AoE silence, 1-minute cooldown, that silences enemies in its area AND interrupts a cast in progress when applied. Treat Solar Beam as the spec's interrupt for RaidLens purposes, but understand it is an area silence, not an instant targeted kick — its placement and timing matter, and it is on a 1-minute cooldown (longer than a typical 15s kick). If a raid mechanic requires a fast, reliable single-target interrupt, Balance Druid is a poor primary kicker.
  - RaidLens usage: Only flag a "missed interrupt" against a Balance Druid if Solar Beam was available (off its ~1-minute cooldown) and the interruptible cast occurred within Solar Beam's placed area / window. Do not expect Balance Druid to cover frequent, short-cycle interrupt rotations.

- **Crowd control:**
  - Cyclone (SpellID 33786) — banishes a single target (untargetable, immune, cannot be healed) for ~5s. Single-target CC / disable.
  - Solar Beam (SpellID 78675) — AoE silence (see Interrupt above).
  - Roots and a knockback are also part of the Druid kit (e.g. Mass Entanglement / Typhoon style tools via talents). Specific SpellIDs not confirmed here.

- **Dispels / soothe:**
  - Soothe (SpellID 2908) — removes Enrage effects from an enemy. This is an offensive dispel (enrage removal), not a friendly cleanse.
  - Note: Balance Druid's access to friendly dispels (e.g. Nature's Cure / curse/poison removal) depends on talents/spec design; not confirmed live here — see Known Gaps. Do not assume Balance can cleanse friendly debuffs without confirmation.

- **Externals:** None that hard-mitigate or are cast on allies for damage reduction. Innervate (SpellID 29166) is a mana external for healers; Rebirth (SpellID 20484) is a combat resurrection.

- **Raid buffs/debuffs:** Mark of the Wild (SpellID 1126, raid Versatility buff). Stampeding Roar (SpellID 106898) as a raid movement tool.

- **Movement tools:** Dash (baseline), Stampeding Roar (raid), plus talented mobility. Travel Form for out-of-combat/road movement.

## Consumables and Enchants

Not confirmed from a live source in this research pass. Balance Druid is an Intellect caster, so its gems/enchants/food/flasks/potions follow the standard caster-Intellect pattern for Midnight (Intellect-based flask, Intellect/secondary-stat food, an Intellect/damage potion, weapon oil), but the specific Midnight 12.0.5 consumable and enchant item names and item IDs were NOT fetched and are therefore omitted here intentionally. See Known Gaps.

## SimulationCraft Reference (Midnight 12.0.5)

**Hero tree:** None specified in the SimC source file (hero_tree: null — the sim covers the baseline Balance spec without a pinned hero tree variant).

**Metrics:** Not captured in this SimC run (metrics field is empty). DPS/HPS figures are not available from this source.

### Talent import string

```
CYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoMbNjxMDwsYmZmZhBjZZmlZYmZswyMLzMGzshhBYstMzgxsNCMBAAAYxMzMzgNDjxAAwMDMA
```

### Damage distribution (SimC, share of total damage)

The SimC abilities table for Balance Druid is heavily noisy: most core spells (Wrath, Starfire, Moonfire, Sunfire, Shooting Stars) appear with raw numbers or rank-only values in the percent column rather than a clean "%" figure, meaning they could not be reliably extracted. Only the rows below carry a confirmed "%" value and represent real damage share:

| Ability | SimC % of total damage |
|---|---|
| Starsurge (including Cascade procs) | 29.1% |
| Astral Smolder | 10.0% |
| Starsurge (Cascade) | 7.9% |
| Ascendant Eclipses | 3.1% |
| Sunseeker Mushroom | 1.2% |
| Twilight Barrage | 0.5% |

Note: The six rows above account for roughly 52% of simulated damage. The remaining ~48% comes from Wrath, Starfire, Moonfire/Sunfire DoTs, and Shooting Stars procs — all confirmed present in the sim but whose exact percentage values were not extractable due to mis-parsed rows in the source data.

**RaidLens interpretation:** Starsurge dominates the extractable share, which is consistent with the spec's design around spending Astral Power efficiently during Eclipse windows. Astral Smolder (a Starsurge-triggered DoT talent) being the second-largest extractable contributor reinforces that Starsurge uptime during cooldown windows is the primary lever. A log where Starsurge casts are sparse relative to filler (Wrath/Starfire) outside of forced movement windows is a strong rotation-quality signal. DoT maintenance (Moonfire/Sunfire) is what drives Shooting Stars procs; logs where DoTs frequently drop off will show depressed background proc damage.

### Action Priority List — Druid Balance

```
actions.precombat=snapshot_stats
# Executed before combat begins. Accepts non-harmful actions only.
actions.precombat+=/variable,name=no_cd_talent,value=!talent.celestial_alignment&!talent.incarnation_chosen_of_elune|druid.no_cds
actions.precombat+=/variable,name=opener,op=set,value=1
actions.precombat+=/variable,name=ec,op=set,value=1,if=talent.boundless_moonlight
actions.precombat+=/variable,name=on_use_trinket,value=0
actions.precombat+=/variable,name=on_use_trinket,op=add,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=on_use_trinket,op=add,value=(trinket.2.has_use_buff)*2
actions.precombat+=/variable,name=prio,op=set,value=0
actions.precombat+=/variable,name=inc_charge,op=set,value=0
actions.precombat+=/moonkin_form
actions.precombat+=/wrath
actions.precombat+=/wrath
actions.precombat+=/wrath,if=talent.dream_surge&enemies=1
actions.precombat+=/starfire,if=hero_tree.elunes_chosen|enemies>2

# Executed every time the actor is available.
# Executed every time the actor is available.
actions=use_items,if=(!trinket.1.is.wraps_of_cosmic_madness|!trinket.2.is.wraps_of_cosmic_madness)&buff.ca_inc.up&(buff.harmony_of_the_grove.up|variable.ec)|fight_remains<20
actions+=/use_item,name=wraps_of_cosmic_madness,if=!buff.eclipse.up
actions+=/potion,if=buff.harmony_of_the_grove.up&buff.ca_inc.up&!variable.ec|buff.ca_inc.up&variable.ec|variable.opener&prev_gcd.1.solar_eclipse|fight_remains<=30
actions+=/berserking,if=buff.ca_inc.up&(buff.harmony_of_the_grove.up|!talent.dream_surge)|fight_remains<cooldown.ca_inc.remains
actions+=/invoke_external_buff,name=power_infusion,if=buff.ca_inc.up
actions+=/variable,name=passive_asp,value=(2+2*set_bonus.mid1_2pc*buff.eclipse.down)*(dot.moonfire.ticking+dot.sunfire.ticking+buff.solstice.up*((active_dots.moonfire>4)+(active_dots.moonfire>16)+(active_dots.sunfire>4)+(active_dots.sunfire>16)))%spell_haste+talent.natures_balance+buff.fury_of_elune.up*((floor(buff.fury_of_elune.remains%0.5)>?4)*2.5+talent.the_eternal_moon*(buff.fury_of_elune.remains<2)*6)+buff.sundered_firmament.up*((floor(buff.sundered_firmament.remains%0.5)>?4)*0.6+talent.the_eternal_moon*(buff.sundered_firmament.remains<2)*6)
actions+=/variable,name=inc_charge,op=set,value=1,if=cooldown.ca_inc.charges_fractional<1
actions+=/variable,name=opener,op=set,value=0,if=buff.ca_inc.up
actions+=/variable,name=eclipse_down,value=!buff.eclipse_lunar.up&!buff.eclipse_solar.up
actions+=/variable,name=cd_window,value=cooldown.force_of_nature.remains>15|cooldown.ca_inc.remains<44
actions+=/variable,name=cd_window_narrow,value=cooldown.force_of_nature.remains>30|cooldown.ca_inc.remains>10&cooldown.ca_inc.remains<20
actions+=/variable,name=no_weaver_procs,value=!buff.touch_the_cosmos.react&!buff.starweavers_warp.react
actions+=/variable,name=ca_soon,value=cooldown.ca_inc.remains<3|cooldown.ca_inc.charges_fractional>1
actions+=/run_action_list,name=opener_aoe,if=variable.opener&spell_targets>1
actions+=/run_action_list,name=opener_kotg,if=variable.opener&spell_targets=1&talent.dream_surge
actions+=/run_action_list,name=opener_ec,if=variable.opener&spell_targets=1
actions+=/run_action_list,name=ec_st,if=hero_tree.elunes_chosen&spell_targets=1
actions+=/run_action_list,name=kotg_st,if=spell_targets=1
actions+=/run_action_list,name=aoe,if=spell_targets>1

actions.aoe=celestial_alignment,if=(prev_gcd.1.force_of_nature&!variable.ec|variable.ec&buff.eclipse.down&(cooldown.eclipse.charges_fractional<1.5|(fight_style.dungeonroute|fight_style.dungeonslice))&(variable.on_use_trinket=0|trinket.1.cooldown.remains>60|trinket.1.cooldown.ready|fight_remains<trinket.1.cooldown.remains|trinket.2.cooldown.remains>60|trinket.2.cooldown.ready|fight_remains<trinket.2.cooldown.remains))&target.time_to_die>(20*talent.incarnation+15*!talent.incarnation)|fight_remains<20
actions.aoe+=/eclipse,if=cooldown.eclipse.full_recharge_time<gcd.max
actions.aoe+=/moonfire,target_if=refreshable&(target.time_to_die-remains)>6&active_dots.moonfire<10&(!talent.treants_of_the_moon|spell_targets-active_dots.moonfire>6|cooldown.force_of_nature.remains>3&!buff.harmony_of_the_grove.up)
actions.aoe+=/sunfire,target_if=(remains<2|refreshable&variable.eclipse_down)&target.time_to_die>5
actions.aoe+=/fury_of_elune,if=variable.ec|!variable.ec&(buff.harmony_of_the_grove.up|cooldown.force_of_nature.remains<gcd.max|talent.radiant_moonlight&cooldown.force_of_nature.remains>20)
actions.aoe+=/force_of_nature,if=((buff.eclipse.down&!talent.early_spring|talent.early_spring)&(cooldown.eclipse.remains<gcd.max|cooldown.ca_inc.ready&(!talent.convoke_the_spirits|cooldown.convoke_the_spirits.remains<gcd.max*5)))|fight_remains<21
actions.aoe+=/wrath,if=eclipse.lunar&spell_targets<=2&talent.dream_surge&buff.eclipse.down
actions.aoe+=/starfire,if=eclipse.solar&spell_targets>2&talent.dream_surge&buff.eclipse.down
actions.aoe+=/solar_eclipse,if=spell_targets<=2&(cooldown.solar_eclipse.charges_fractional>1.5&variable.cd_window|cooldown.solar_eclipse.ready&variable.cd_window_narrow)&target.time_to_die>5|fight_remains<15
actions.aoe+=/lunar_eclipse,if=(!variable.prio&spell_targets>2&!variable.ec&(cooldown.lunar_eclipse.charges_fractional>1.5&variable.cd_window|cooldown.lunar_eclipse.ready&variable.cd_window_narrow)|variable.ec&(cooldown.ca_inc.full_recharge_time>15))&target.time_to_die>5|fight_remains<15
actions.aoe+=/convoke_the_spirits,if=buff.ca_inc.up&astral_power<40|cooldown.ca_inc.remains>50&buff.harmony_of_the_grove.up&buff.ca_inc.down
actions.aoe+=/sunfire,target_if=!talent.aetherial_kindling&dot.sunfire.remains<10&variable.ca_soon&cooldown.eclipse.charges<1.5&buff.eclipse.remains<1&(cooldown.force_of_nature.remains<3|variable.ec),line_cd=10
actions.aoe+=/starsurge,if=buff.starweavers_weft.react
actions.aoe+=/starfall,if=(astral_power>80-79*variable.ec|buff.eclipse.up&action.starfall.cost>1|buff.touch_the_cosmos.react|buff.starweavers_warp.react)&target.time_to_die>5
actions.aoe+=/starfire,if=buff.ascendant_fires.up&buff.eclipse_lunar.up
actions.aoe+=/new_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.aoe+=/half_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.aoe+=/full_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.aoe+=/wild_mushroom,if=buff.eclipse_solar.up|cooldown.wild_mushroom.full_recharge_time<cooldown.ca_inc.remains
actions.aoe+=/starfire,if=variable.ec|variable.eclipse_down&spell_targets.starfire>2|buff.eclipse_lunar.up&(spell_targets.starfire>2&buff.ca_inc.up|!buff.ca_inc.up)
actions.aoe+=/wrath

actions.ec_st=celestial_alignment,if=buff.ca_inc.down&buff.eclipse.down&(cooldown.convoke_the_spirits.remains<5&talent.convoke_the_spirits|cooldown.eclipse.charges_fractional<1.5&!talent.convoke_the_spirits|!talent.elunes_guidance&talent.convoke_the_spirits)&(target.time_to_die>(20*talent.incarnation+15*!talent.incarnation))|fight_remains<20
actions.ec_st+=/moonfire,target_if=remains<2|refreshable&buff.eclipse.down&target.time_to_die>10
actions.ec_st+=/sunfire,target_if=remains<2|refreshable&buff.eclipse.down&target.time_to_die>10
actions.ec_st+=/convoke_the_spirits,if=buff.ca_inc.up&astral_power<40|cooldown.ca_inc.remains>30&buff.ca_inc.down|fight_remains<cooldown.ca_inc.remains
actions.ec_st+=/lunar_eclipse,if=target.time_to_die>5
actions.ec_st+=/starfall,if=buff.starweavers_warp.react
actions.ec_st+=/starfall,if=(talent.starweaver&(buff.ca_inc.down&talent.meteorites&talent.stellar_amplification&(talent.aetherial_kindling|!talent.power_of_goldrinn)|buff.eclipse.down&(talent.meteorites|talent.aetherial_kindling|talent.stellar_amplification&!talent.power_of_goldrinn))|buff.ca_inc.down&talent.incarnation_chosen_of_elune&talent.meteorites&talent.stellar_amplification&talent.aetherial_kindling&!talent.power_of_goldrinn|buff.eclipse.down&(talent.meteorites|talent.incarnation_chosen_of_elune&talent.aetherial_kindling))&buff.touch_the_cosmos.react&!buff.starweavers_weft.react
actions.ec_st+=/starsurge,if=astral_power>80|buff.eclipse.up&action.starsurge.cost>1|buff.starweavers_weft.react|buff.touch_the_cosmos.react
actions.ec_st+=/fury_of_elune,if=!talent.sundered_firmament|debuff.atmospheric_exposure.remains<2&buff.eclipse.remains>5|!talent.convoke_the_spirits|fight_remains<20
actions.ec_st+=/force_of_nature
actions.ec_st+=/new_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.ec_st+=/half_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.ec_st+=/full_moon,if=astral_power.deficit>energize_amount&debuff.atmospheric_exposure.remains<execute_time+0.5
actions.ec_st+=/wild_mushroom,if=buff.eclipse_solar.up|cooldown.wild_mushroom.full_recharge_time<cooldown.ca_inc.remains
actions.ec_st+=/starfire,if=action.starfire.execute_time<buff.eclipse.remains
actions.ec_st+=/wrath

actions.kotg_st=celestial_alignment,if=prev_gcd.1.force_of_nature&buff.ca_inc.down&(target.time_to_die>(20*talent.incarnation+15*!talent.incarnation+20*(in_boss_encounter&(fight_style.dungeonroute|fight_style.dungeonslice))))|fight_remains<20
actions.kotg_st+=/moonfire,target_if=buff.harmony_of_the_grove.down&(remains<2|refreshable&!buff.eclipse.up&!cooldown.force_of_nature.remains<dot.moonfire.remains)&target.time_to_die>10
actions.kotg_st+=/sunfire,target_if=remains<2|refreshable&buff.eclipse.down&target.time_to_die>10
actions.kotg_st+=/fury_of_elune,if=(buff.harmony_of_the_grove.up|cooldown.force_of_nature.remains<gcd.max|talent.radiant_moonlight&cooldown.force_of_nature.remains>20)&target.time_to_die>10
actions.kotg_st+=/solar_eclipse,if=(cooldown.solar_eclipse.charges_fractional>1.5&variable.cd_window|cooldown.solar_eclipse.ready&variable.cd_window_narrow)|fight_remains<20+(20*cooldown.ca_inc.ready)
actions.kotg_st+=/force_of_nature,if=((buff.eclipse.down&!talent.early_spring|talent.early_spring)&(cooldown.eclipse.remains<gcd.max|cooldown.ca_inc.ready&(!talent.convoke_the_spirits|cooldown.convoke_the_spirits.remains<gcd.max*5)))&(target.time_to_die>10)|fight_remains<21
actions.kotg_st+=/convoke_the_spirits,if=(buff.ca_inc.up&astral_power<40|cooldown.ca_inc.remains>50&buff.harmony_of_the_grove.up&buff.ca_inc.down&astral_power<50)&target.time_to_die>5|fight_remains<action.convoke_the_spirits.execute_time+1
actions.kotg_st+=/sunfire,target_if=dot.sunfire.remains<10&variable.ca_soon&cooldown.force_of_nature.remains<3&target.time_to_die>10,line_cd=10
actions.kotg_st+=/starfall,if=buff.starweavers_warp.react
actions.kotg_st+=/starfall,if=(talent.starweaver&(talent.meteorites&(talent.incarnation_chosen_of_elune&talent.meteor_storm&!talent.power_of_goldrinn|buff.ca_inc.down&(talent.incarnation_chosen_of_elune|talent.stellar_amplification|!talent.power_of_goldrinn))|buff.eclipse.down&(talent.meteorites|talent.aetherial_kindling|talent.stellar_amplification&!talent.power_of_goldrinn))|buff.ca_inc.down&talent.meteorites&talent.aetherial_kindling&talent.stellar_amplification&!talent.power_of_goldrinn|buff.eclipse.down&talent.meteorites&(talent.aetherial_kindling|talent.stellar_amplification|!talent.power_of_goldrinn))&buff.touch_the_cosmos.react&!buff.starweavers_weft.react
actions.kotg_st+=/starsurge,if=buff.eclipse.down&astral_power.deficit<20|buff.eclipse.up&action.starsurge.cost>1&(astral_power.deficit<10|cooldown.force_of_nature.remains>20|buff.ascendant_stars.up)|buff.touch_the_cosmos.react|buff.starweavers_weft.react
actions.kotg_st+=/starfire,if=buff.ascendant_fires.up&buff.eclipse_lunar.up
actions.kotg_st+=/new_moon,if=astral_power.deficit>energize_amount
actions.kotg_st+=/half_moon,if=astral_power.deficit>energize_amount
actions.kotg_st+=/full_moon,if=astral_power.deficit>energize_amount
actions.kotg_st+=/wild_mushroom,if=buff.eclipse.up|cooldown.wild_mushroom.full_recharge_time<cooldown.ca_inc.remains
actions.kotg_st+=/wrath

actions.opener_aoe=moonfire,target_if=refreshable
actions.opener_aoe+=/sunfire,target_if=refreshable
actions.opener_aoe+=/potion
actions.opener_aoe+=/eclipse,if=cooldown.eclipse.charges=2
actions.opener_aoe+=/starsurge,if=buff.starweavers_weft.react&buff.ascendant_stars.up&target.time_to_die>cooldown.ca_inc.duration+10
actions.opener_aoe+=/starfall,if=(action.starfall.cost>1|buff.touch_the_cosmos.react|buff.starweavers_warp.react)&buff.ascendant_stars.up&target.time_to_die>cooldown.ca_inc.duration+10
actions.opener_aoe+=/starfire,if=(buff.ascendant_stars.up&astral_power.deficit>40-(20*talent.fury_of_elune+20*talent.force_of_nature))&buff.eclipse_lunar.up
actions.opener_aoe+=/wrath,if=buff.ascendant_stars.up&astral_power.deficit>40-(20*talent.fury_of_elune+20*talent.force_of_nature)
actions.opener_aoe+=/sunfire,line_cd=10,target_if=!talent.aetherial_kindling|remains<5
actions.opener_aoe+=/fury_of_elune
actions.opener_aoe+=/force_of_nature
actions.opener_aoe+=/use_items,check_existing=0
actions.opener_aoe+=/celestial_alignment,add_queue_lag=1

actions.opener_ec=moonfire,target_if=remains<2|refreshable&variable.eclipse_down
actions.opener_ec+=/sunfire,target_if=remains<2|refreshable&variable.eclipse_down
actions.opener_ec+=/eclipse
actions.opener_ec+=/starfall,if=buff.starweavers_warp.react
actions.opener_ec+=/starsurge,if=(action.starsurge.cost>1|buff.touch_the_cosmos.react)&talent.convoke_the_spirits
actions.opener_ec+=/starfire,if=astral_power<80&!talent.convoke_the_spirits
actions.opener_ec+=/fury_of_elune
actions.opener_ec+=/celestial_alignment

actions.opener_kotg=sunfire,target_if=refreshable
actions.opener_kotg+=/moonfire,target_if=refreshable&!talent.natures_balance&!talent.convoke_the_spirits
actions.opener_kotg+=/eclipse,if=!talent.natures_balance&!talent.convoke_the_spirits
actions.opener_kotg+=/wrath,if=astral_power<100-20*talent.fury_of_elune&!talent.natures_balance&!talent.convoke_the_spirits
actions.opener_kotg+=/fury_of_elune
actions.opener_kotg+=/force_of_nature
actions.opener_kotg+=/celestial_alignment
```

## Notes and Known Gaps

Unconfirmed facts (omitted IDs / values rather than guessed):
- **Fury of Elune** — SpellID not fetched/confirmed; named only.
- **Force of Nature** — SpellID not fetched/confirmed; named only.
- **Celestial Alignment / Incarnation base cooldown** — Stated as approximately 3 minutes based on a web search referencing the Midnight cooldown change and the Whirling Stars talent (which reduces it and grants 2 charges). The exact base cooldown number was NOT directly confirmed on a fetched spell page. Durations (CA 15s, Incarnation 20s) are confirmed by search but the spell pages returned a "1 second" field that is the internal GCD/cooldown field, not the usable cooldown — do not trust that value.
- **Survival Instincts** — Damage reduction sourced as 50% and duration 6s from the spell page; charge count NOT confirmed (this spec historically may have 1 charge rather than the 2 charges tanks get). Treat charge availability conservatively.
- **Friendly dispel access** (curse/poison removal for Balance specifically) — NOT confirmed live. Do not assume Balance can cleanse allies without verification.
- **Roots / knockback CC SpellIDs** — Named conceptually; specific IDs not fetched.
- **Consumables and enchants** — No live item IDs or names fetched for Midnight 12.0.5; section is deliberately conceptual only.
- **SimC APL now embedded (extracted from Trivial.txt).** A talent import string and partial damage distribution are also available from SimC (see SimulationCraft Reference section above). DPS metrics were not captured in this SimC run.
- **SimC damage rows partially mis-parsed** — Core abilities (Wrath, Starfire, Moonfire, Sunfire, Shooting Stars) appear in the SimC source with raw numbers or rank values rather than "%" damage share, so they could not be included in the damage distribution table. If a cleaner SimC export becomes available, re-run the enrichment pass.
- **Mark of the Wild value** — Sourced as +3% Versatility from the spell page; confirm if a later 12.x hotfix changes the value.

Confirmed SpellIDs (each verified on its individual live Wowhead spell page during this research): 78675 (Solar Beam), 22812 (Barkskin), 61336 (Survival Instincts), 108238 (Renewal), 29166 (Innervate), 20484 (Rebirth), 106898 (Stampeding Roar), 1126 (Mark of the Wild), 2908 (Soothe), 194223 (Celestial Alignment), 391528 (Convoke the Spirits), 190984 (Wrath), 194153 (Starfire), 78674 (Starsurge), 191034 (Starfall), 8921 (Moonfire), 93402 (Sunfire), 5487 (Bear Form), 102560 (Incarnation: Chosen of Elune), 22842 (Frenzied Regeneration), 33786 (Cyclone).

Maintenance flag: Re-verify all cooldowns, durations, the Meteorites/Starfall AoE behavior, and any talent-driven cooldown reductions after ANY 12.x patch. The 12.0.5 patch already changed the Meteorites talent (now hits 2 targets at -30% damage) and Midnight reduced Celestial Alignment / Incarnation durations — values in this spec drift between patches.
