# Balance Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/druid/balance/overview-pve-dps
> - https://www.wowhead.com/guide/classes/druid/balance/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/balance-druid-pve-dps-guide
> - https://www.icy-veins.com/wow/balance-druid-pve-dps-rotation-cooldowns-abilities
> - https://www.method.gg/guides/balance-druid
> - Individual Wowhead spell pages for each confirmed SpellID below (spell=78675, 22812, 61336, 108238, 29166, 20484, 106898, 1126, 2908, 194223, 391528, 190984, 194153, 78674, 191034, 8921, 93402, 5487, 102560, 22842, 33786)

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

## Notes and Known Gaps

Unconfirmed facts (omitted IDs / values rather than guessed):
- **Fury of Elune** — SpellID not fetched/confirmed; named only.
- **Force of Nature** — SpellID not fetched/confirmed; named only.
- **Celestial Alignment / Incarnation base cooldown** — Stated as approximately 3 minutes based on a web search referencing the Midnight cooldown change and the Whirling Stars talent (which reduces it and grants 2 charges). The exact base cooldown number was NOT directly confirmed on a fetched spell page. Durations (CA 15s, Incarnation 20s) are confirmed by search but the spell pages returned a "1 second" field that is the internal GCD/cooldown field, not the usable cooldown — do not trust that value.
- **Survival Instincts** — Damage reduction sourced as 50% and duration 6s from the spell page; charge count NOT confirmed (this spec historically may have 1 charge rather than the 2 charges tanks get). Treat charge availability conservatively.
- **Friendly dispel access** (curse/poison removal for Balance specifically) — NOT confirmed live. Do not assume Balance can cleanse allies without verification.
- **Roots / knockback CC SpellIDs** — Named conceptually; specific IDs not fetched.
- **Consumables and enchants** — No live item IDs or names fetched for Midnight 12.0.5; section is deliberately conceptual only.
- **Talent import string / SimC APL** — Not available; no user SimC profile provided and none fetched. Rotation here is logical priority, not a simmed APL.
- **Mark of the Wild value** — Sourced as +3% Versatility from the spell page; confirm if a later 12.x hotfix changes the value.

Confirmed SpellIDs (each verified on its individual live Wowhead spell page during this research): 78675 (Solar Beam), 22812 (Barkskin), 61336 (Survival Instincts), 108238 (Renewal), 29166 (Innervate), 20484 (Rebirth), 106898 (Stampeding Roar), 1126 (Mark of the Wild), 2908 (Soothe), 194223 (Celestial Alignment), 391528 (Convoke the Spirits), 190984 (Wrath), 194153 (Starfire), 78674 (Starsurge), 191034 (Starfall), 8921 (Moonfire), 93402 (Sunfire), 5487 (Bear Form), 102560 (Incarnation: Chosen of Elune), 22842 (Frenzied Regeneration), 33786 (Cyclone).

Maintenance flag: Re-verify all cooldowns, durations, the Meteorites/Starfall AoE behavior, and any talent-driven cooldown reductions after ANY 12.x patch. The 12.0.5 patch already changed the Meteorites talent (now hits 2 targets at -30% damage) and Midnight reduced Celestial Alignment / Incarnation durations — values in this spec drift between patches.
