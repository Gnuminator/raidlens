# Fire Mage — Raid Guide (WoW Midnight, Patch 12.0.5)

> **Sources (live, fetched June 2026):**
> - https://www.wowhead.com/guide/classes/mage/fire/overview-pve-dps
> - https://www.wowhead.com/guide/classes/mage/fire/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-guide
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-spec-builds-talents
> - Individual Wowhead spell pages (one per confirmed SpellID; URLs listed in Notes and Known Gaps)
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
>
> **SpellIDs:** Every numeric SpellID below was confirmed on a live Wowhead spell page that was actually fetched. Any ability whose ID could not be confirmed is written with no number and flagged in Notes and Known Gaps. No ID was recalled from memory or guessed.
>
> **SimC data is now available for this spec.** Talent import strings and damage distribution are in the SimulationCraft Reference section below. DPS metrics were not captured in the source data. Rotation below remains conceptual logical priority sourced from Wowhead and Icy Veins prose — the SimC APL is now embedded in the SimulationCraft Reference section.

---

## Overview

Fire Mage is a ranged spell-caster DPS spec built around chaining critical strikes to generate **Hot Streak!** (SpellID: 48108) procs and spending them on instant **Pyroblast** (SpellID: 11366). The core loop: a non-crit fire spell that crits grants **Heating Up** (SpellID: 48107); a second crit (or a guaranteed-crit **Fire Blast**, SpellID: 108853) converts Heating Up into Hot Streak, which makes the next Pyroblast instant and free.

In Midnight (12.0.5) the spec was reworked toward a **more burst-oriented profile**: **Combustion** (SpellID: 190319) is a stronger but lower-uptime window (during it, all affected spells gain a large critical-strike-chance bonus, so Hot Streaks flow continuously). Damage outside Combustion is more reliant on fishing for crits with the filler nuke.

- **Damage profile:** Strong burst inside Combustion windows; cleave/AoE via **Flamestrike** (SpellID: 2120) and Ignite spread; moderate sustained single-target between cooldowns.
- **Survivability profile:** Cloth caster with a deep kit of personal defensives (Ice Block immunity, barriers, Greater Invisibility, Alter Time). Survivability depends heavily on *timing* those cooldowns rather than passive bulk.
- **Primary weakness:** Damage is heavily front-loaded into the Combustion window; movement that interrupts a Combustion or breaks the crit-fishing cadence costs a disproportionate amount of damage. Per Icy Veins, current tuning places Fire on the weaker side of the DPS roster (do not treat this as authoritative balance data — re-verify per patch).

---

## Role in Raid

- **Primary role:** Ranged magic DPS. Not a healer, not a tank.
- **Bloodlust-equivalent:** **YES.** Mage provides **Time Warp** (SpellID: 80353), the Bloodlust/Heroism equivalent. 5-minute cooldown, raid-wide Haste burst. Affected players receive Exhaustion/Temporal Displacement and cannot benefit again until it expires.
- **Battle res:** **NONE.** Mages have no combat resurrection.
- **Raid buff:** **Arcane Intellect** (SpellID: 1459) — +3% Intellect to the raid, 1-hour duration, 100-yard radius. Provided by any Mage spec; one is sufficient.
- **Raid-wide defensive:** **Mass Barrier** (SpellID: 414660), 3-minute cooldown — applies the Mage's barrier to nearby allies. (Scope of allies affected not fully confirmed from the spell page — see Known Gaps.)
- **Externals:** **NONE.** Fire Mage cannot directly shield, heal, or damage-reduce another specific player on demand beyond Mass Barrier's group application.
- **Mobility profile:** Good *burst* mobility, weaker *sustained* movement speed. **Blink** (SpellID: 1953) / **Shimmer** (SpellID: 212653) provide a 20-yard instant teleport; Shimmer is the talented version with charges and is usable while casting/CC'd. No persistent run-speed steroid.

---

## Abilities Reference

> SpellIDs confirmed on live Wowhead spell pages. Cooldowns are listed only where the spell page or a guide confirmed them; talents commonly alter these values.

### Core damage spells

| Ability | SpellID | Notes |
|---|---|---|
| Fireball | 133 | Primary hard-cast filler nuke (single target) in **Sunfury** builds. ~1.8s cast (talent/Haste dependent). |
| Frostfire Bolt | — | Replaces Fireball as the filler in **Frostfire** hero-talent builds. SpellID not confirmed from a fetched page — see Known Gaps. |
| Pyroblast | 11366 | Hot Streak spender; instant and free when Hot Streak is active, otherwise a long hard cast. Main burst nuke. |
| Fire Blast | 108853 | Guaranteed critical strike. Instant, off the normal cast flow, charge-based (banked charges). Used to convert Heating Up → Hot Streak. The page lists a 500ms internal cooldown; effective availability is governed by charges/recharge (talent dependent). |
| Scorch | 2948 | Instant-feel movement filler / proc generator (1.5s cast on the page). Hits harder on low-health targets via execute talent; used with Heat Shimmer procs. A notable share of Sunfury damage in SimC. |
| Phoenix Flames | 257541 | Instant, charge-based fire attack that always crits the primary target; feeds Hot Streak generation and Ignite spread. |
| Flamestrike | 2120 | Ground AoE; the Hot Streak spender for AoE (4+ targets per Icy Veins). |
| Meteor | 153561 | 45s cooldown. Targeted burst nuke + ground burn; cast on cooldown and aligned into Combustion when possible. Talent. |
| Burnout | — | A Frostfire hero-tree proc; contributes ~5.3% of damage in SimC (Frostfire build). SpellID not confirmed — see Known Gaps. |
| Intensifying Flame | — | Contributes ~6.8–7.6% of damage across both hero trees in SimC. Likely a passive fire DoT amplifier. SpellID not confirmed — see Known Gaps. |

### Cooldowns and key procs

| Ability / Buff | SpellID | Notes |
|---|---|---|
| Combustion | 190319 | 2-minute cooldown, 10s duration (base). Grants a large critical-strike-chance bonus to affected Mage spells — the spec's primary burst window. Instant, off-GCD. |
| Hot Streak! | 48108 | Buff. Your next Pyroblast (or Flamestrike) is instant and costs no mana. |
| Heating Up | 48107 | Buff. Intermediate state; one more crit (or a Fire Blast) converts it to Hot Streak. |
| Hyperthermia | — | Buff window (referenced by Icy Veins and confirmed present in Sunfury SimC data) granting rapid free instant Pyroblasts, notably tied to the **Sunfury** hero tree's "Memory of Al'ar" after Combustion. SpellID not confirmed — see Known Gaps. |
| Sun King's Blessing / Pyroclasm / Heat Shimmer | — | Proc-based empowerments referenced in the rotation. Heat Shimmer appears in Sunfury SimC data. SpellIDs not confirmed from fetched pages — see Known Gaps. |
| Greater Pyroblast | — | A Sunfury hero-tree ability appearing in SimC damage data (~0.7%). SpellID not confirmed — see Known Gaps. |

### Hero talent trees

- **Sunfury:** Spawns an Arcane Phoenix during Combustion; "Memory of Al'ar" grants a Hyperthermia window when Combustion ends. Faster, more proc-dense rotation. Filler is **Fireball**; notable abilities include Arcane Barrage, Arcane Surge, Greater Pyroblast, and a Meteorite variant.
- **Frostfire:** Replaces Fireball with **Frostfire Bolt** as the filler, adds Frost-school damage, and generates Frostfire Empowerment and Burnout procs; leans more on **Meteor**. Pyroblast is a larger share of damage than in Sunfury.

(Hero tree mechanics from Icy Veins / Wowhead prose and SimC data; individual hero-talent SpellIDs not confirmed — see Known Gaps.)

---

## Rotation / Priority

> This is **logical priority order**, not a strict cast sequence and not a DPS benchmark. Execute the first applicable line, reading top to bottom. Sourced from Wowhead and Icy Veins rotation prose. Specific timings/charge counts depend on talents.

### Opener (single target, with Firestarter)

Firestarter makes spells auto-crit on targets above 90% health, so the standard plan is to **delay the first Combustion until the boss drops below 90%**:

1. Pre-cast **Pyroblast** (SpellID: 11366) before the pull.
2. Use **Fire Blast** (SpellID: 108853) to convert procs into Hot Streak while the target is still above 90% (Firestarter auto-crit).
3. As the target passes below 90%, enter **Combustion** (SpellID: 190319) and follow the Combustion priority.

### Combustion priority (burst window)

1. **Meteor** (SpellID: 153561) — ensure it lands before Combustion ends.
2. **Pyroblast** (SpellID: 11366) with **Hot Streak!** (SpellID: 48108).
3. Hard-cast **Pyroblast** with a Pyroclasm proc (only if enough Combustion time remains).
4. **Scorch** (SpellID: 2948) with a Heat Shimmer proc when no Hot Streak is up.
5. **Fire Blast** (SpellID: 108853) to convert **Heating Up** (SpellID: 48107) → Hot Streak.
6. **Frostfire Bolt** (or **Fireball**, SpellID: 133) as filler.
7. **Scorch** as movement filler / proc generator.

> **Critical Fire Blast rule (sourced):** empty the Fire Blast charge bank *before* Combustion ends. Fire Blast is a large share of damage and is what spreads Ignite, so leftover charges at the end of Combustion are wasted damage.

### Sustained single target (outside Combustion)

1. **Combustion** (SpellID: 190319) when ready — on cooldown unless deliberately holding for a damage-amp phase.
2. **Pyroblast** during a **Hyperthermia** window.
3. **Meteor** (SpellID: 153561) on cooldown.
4. **Pyroblast** (SpellID: 11366) with **Hot Streak!** (cast after a Frostfire Bolt / Fireball so they land together).
5. Hard-cast Pyroblast with a Pyroclasm proc (prefer saving for Combustion).
6. **Scorch** (SpellID: 2948) with a Heat Shimmer proc.
7. **Fire Blast** (SpellID: 108853) to generate Hot Streak.
8. **Scorch / Frostfire Bolt / Fireball** (SpellID: 133) as filler based on target health.

### AoE priority

- At **4+ targets**, replace the Hot Streak Pyroblast spender with **Flamestrike** (SpellID: 2120).
- Otherwise follow single-target priority, substituting Flamestrike for instant Hot Streak spends.
- **Phoenix Flames** (SpellID: 257541) and Fire Blast drive Ignite spread across the pack.

---

## Defensives

> **RaidLens usage:** Use this section to judge whether a player had a defensive available during a lethal/high-damage window and whether they used it correctly. Cooldowns are approximate and talent-modifiable; treat "was a defensive available and unused during a spike" as the flag, not exact second-by-second timing.

### Ice Block
- **SpellID:** 45438
- **Effect:** Full immunity to all damage and harmful effects for 10 seconds; also stuns the caster and pacifies them (cannot act). A hard "I cannot die" button.
- **Cooldown:** Not listed on the spell page (talent/baseline interactions vary; commonly on a multi-minute cooldown). See Known Gaps.
- **RaidLens usage:** The strongest survival tool. If a player died to a clearly telegraphed one-shot or a stacking debuff reaching lethal, and Ice Block was off cooldown, that is a missed-defensive flag. Note it cancels the player's own DPS for its duration, so brief use timed to the lethal instant is correct.

### Greater Invisibility
- **SpellID:** 110959
- **Effect:** Instantly become invisible (drops threat / can drop targeting) and, while the buff persists, take substantially reduced damage. 2-minute cooldown. (Exact DR % not shown on the fetched page — see Known Gaps.)
- **RaidLens usage:** Doubles as a strong damage-reduction defensive, not just a threat drop. Available roughly every 2 minutes — flag if unused across a long lethal window.

### Alter Time
- **SpellID:** 342245
- **Effect:** Records the Mage's health and position; reactivating (or after ~20s) returns the Mage to that recorded state. 1-minute cooldown.
- **RaidLens usage:** Effective if the player casts it *before* taking a big hit, then reactivates after to undo the health loss. Judge correct use as: cast at high health shortly before a damage event, then re-triggered. Frequently available (1 min), so an unused Alter Time through repeated spikes is a soft flag.

### Blazing Barrier (Fire's barrier)
- **SpellID:** 235313
- **Effect:** Absorb shield against all damage schools; Fire's version also has a melee-reflection/retaliation component. 30-second cooldown.
- **RaidLens usage:** Cheap, frequent (30s) absorb. Should be up for most predictable damage ticks. Repeatedly entering a known damage window with Blazing Barrier off cooldown and unused is a flag.

### Prismatic Barrier (talent alternative)
- **SpellID:** 235450
- **Effect:** Absorb shield against all schools that **additionally reduces damage taken by 15%** while active and shortens magic debuff durations by 25%. 30-second cooldown, 1-minute duration.
- **RaidLens usage:** If the player is talented into Prismatic over Blazing, treat it as a 30s flat-15%-DR-plus-absorb button that should be active during magic-damage windows.

### Mirror Image
- **SpellID:** 55342
- **Effect:** Summons 3 images and drops threat; also provides a damage-reduction component while images are up. 2-minute cooldown, 15s duration.
- **RaidLens usage:** Secondary defensive / threat tool. Lower priority than Ice Block or the barriers for survival, but counts as an available mitigation layer.

### Mass Barrier (group)
- **SpellID:** 414660
- **Effect:** Applies the Mage's barrier to nearby allies. 3-minute cooldown. (Ally scope not fully confirmed — see Known Gaps.)
- **RaidLens usage:** A planned raid mitigation; judge against assigned soak/AoE windows rather than the individual Mage's own survival.

---

## Utility

> **RaidLens usage:** Use this to judge whether interrupts and utility were deployed when the encounter demanded them.

### Interrupt — IMPORTANT

| Ability | SpellID | Cooldown | Notes |
|---|---|---|---|
| **Counterspell** | 2139 | **25s** | This **IS** Fire Mage's interrupt and it is its **ONLY** raid-usable interrupt. Interrupts the current cast and locks that spell school for a short duration. Ranged. Off the GCD. |

- Fire Mage **has a real, raid-usable interrupt** (Counterspell). On encounters with assigned interrupt rotations, a Fire Mage is a valid kicker. Missed-interrupt flags are appropriate for this spec.
- Note: **Dragon's Breath** (below) is a disorient, **not** an interrupt — do not treat it as a kick.

### Crowd Control

| Ability | SpellID | Type | Cooldown | Notes |
|---|---|---|---|---|
| Dragon's Breath | 31661 | Frontal AoE disorient (~4s) + fire damage | 45s | Disorient, breaks on damage. NOT an interrupt. |
| Polymorph | 118 | Single-target incapacitate (sheep) | None (cast time) | Breaks on damage; target heals while polymorphed. Humanoid/Beast/etc. |
| Frost Nova | 122 | PBAoE root (~6s) | None listed | Roots nearby enemies; breaks on damage. |
| Ring of Frost | 113724 | AoE incapacitate field | 45s | 2s cast; incapacitates enemies entering the ring. Talent. |

### Dispels

| Ability | SpellID | Removes | From whom |
|---|---|---|---|
| Remove Curse | 475 | **Curse** effects only | Self and allies (friendly target, 40 yd) |
| Spellsteal | 30449 | A beneficial **Magic** buff | From an **enemy** (steals it onto the Mage) |

- Fire Mage can **dispel Curses from allies** (Remove Curse). It **cannot** dispel Magic, Poison, or Disease from allies. Spellsteal is offensive only (enemy buffs).

### Movement

| Ability | SpellID | Notes |
|---|---|---|
| Blink | 1953 | 20-yard instant teleport; removes/immunes roots and stuns on use. Baseline. |
| Shimmer | 212653 | Talented replacement for Blink: charge-based, usable while casting and while CC'd. 20-yard teleport. |

### Raid buffs / debuffs / lust

| Ability | SpellID | Notes |
|---|---|---|
| Arcane Intellect | 1459 | +3% Intellect raid buff. One Mage suffices. |
| Time Warp | 80353 | Bloodlust/Heroism equivalent. 5-minute cooldown, raid-wide Haste. Causes Exhaustion. |

### Resurrection
- **NONE.** No battle res, no combat res.

---

## Consumables and Enchants

> **No SimC DPS metrics were captured for this spec, and the Wowhead/Icy-Veins consumable and enchant pages were not individually fetched and confirmed.** To avoid fabricating item IDs, this section intentionally omits specific consumable/enchant item IDs. See Known Gaps for exactly what still needs sourcing.

What can be stated with confidence (mechanical, not item-specific):
- **Intellect** is the primary stat; Fire wants a stat flask (Intellect) and a DPS food buff appropriate to current secondary-stat weights.
- A DPS combat potion should be pre-potted before the pull and used again inside a Combustion window.
- A weapon enchant, gem each socket, and slot enchants (the standard Midnight enchant set) apply — but the **exact current item IDs and names are not confirmed here and must be sourced from the live Wowhead "Gear and Best in Slot" / enchants pages before being trusted.**

Do not enter any consumable or enchant item ID into RaidLens from this guide until it is confirmed live — see Known Gaps.

---

## SimulationCraft Reference (Midnight 12.0.5)

> SimC Patchwerk, 7500 iterations, single-target — a theoretical ceiling, NOT a target to judge players against.
> DPS/HPS/DTPS metrics were not captured in the source data (metrics field was empty for both hero trees).

Two hero-tree variants were simulated: **Frostfire** and **Sunfury**.

---

### Frostfire — Talent Import String

```
C8DAAAAAAAAAAAAAAAAAAAAAAYGGLzMzswMDZmZGAAAmZZGzMLzCEAAwiZmx2YmZGAAAAAgNzMzMDAAGzYmZmZmZ2AmZADzYMYwA
```

### Frostfire — Damage Distribution (SimC, share of total damage)

| Ability | % of Total Damage |
|---|---|
| Ignite | 25.1% |
| Frostfire Bolt | 24.9% |
| Pyroblast | 22.7% (incl. procs/pets) |
| Intensifying Flame | 6.8% |
| Burnout | 5.3% |

**Interpretation:** In the Frostfire build, Ignite, Frostfire Bolt, and Pyroblast each contribute roughly 22–25% of damage and together account for over 70% of total output. Intensifying Flame and Burnout round out the top five. A log where Frostfire Bolt casts are low or Pyroblast has very few hot-streak spends likely indicates a rotation breakdown. Meteor appears with 0.000 effective damage in the SimC table — it may require a specific talent choice not reflected in this profile, or its damage is absorbed into Ignite entries.

### Action Priority List — Mage Fire Frostfire

```
actions.precombat=arcane_intellect
actions.precombat+=/variable,name=cast_remains_time,value=0.2
actions.precombat+=/variable,name=pooling_time,value=10*gcd.max
actions.precombat+=/variable,name=flamestriking,op=reset,default=1
# Flamestrike at 4 targets during Combustion.
actions.precombat+=/variable,name=ff_combustion_flamestrike,if=!talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Flamestrike at 8 targets.
actions.precombat+=/variable,name=ff_filler_flamestrike,if=!talent.spellfire_spheres,value=8+(999*!talent.fuel_the_fire)
# Flamestrike at 4 targets during Combustion. Do at 3 targets if you don't care about prio dmg.
actions.precombat+=/variable,name=sf_combustion_flamestrike,if=talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Flamestrike at 4 targets.
actions.precombat+=/variable,name=sf_filler_flamestrike,if=talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Delay Combustion if playing Firestarter until the target is >=90% HP unless it means losing casts of Combustion. Do not do so if fight length is short.
actions.precombat+=/variable,name=combustion_delay,value=(18*talent.firestarter)-(10*(expected_combat_length<60)+10*(expected_combat_length<30))-10*(((expected_combat_length%%60)>=25)&((expected_combat_length%%60)<=40))
actions.precombat+=/variable,name=15ssteroid_trinket_equipped,op=set,value=equipped.nevermelting_ice_crystal|equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity
actions.precombat+=/variable,name=10ssteroid_trinket_equipped,op=set,value=equipped.ever_collapsing_void_fissure
actions.precombat+=/variable,name=nonsteroid_trinket_equipped,op=set,value=equipped.mereldars_toll|equipped.perfidious_projector|equipped.chaotic_nethergate|equipped.wraps_of_cosmic_madness|equipped.astalors_anguish_agitator
actions.precombat+=/snapshot_stats
actions.precombat+=/mirror_image
# Precast one of these.
actions.precombat+=/frostfire_bolt,if=talent.frostfire_bolt
actions.precombat+=/meteor,if=!talent.firestarter&talent.sunfury_execution
actions.precombat+=/pyroblast

# Executed every time the actor is available.
actions=call_action_list,name=cds
# Combustion is delayed on pull 18 seconds for all Firestarter builds to simulate realistic timings for when a boss drops below 90% HP.
actions+=/run_action_list,name=ff_combustion,if=talent.frostfire_bolt&((time>=variable.combustion_delay)&(cooldown.combustion.remains<=variable.combustion_precast_time|buff.combustion.up|cooldown.combustion.ready))
actions+=/run_action_list,name=sf_combustion,if=!talent.frostfire_bolt&((time>=variable.combustion_delay)&(cooldown.combustion.remains<=variable.combustion_precast_time|buff.combustion.up|cooldown.combustion.ready))
actions+=/run_action_list,name=ff_filler,if=talent.frostfire_bolt
actions+=/run_action_list,name=sf_filler

actions.cds=variable,name=combustion_precast_time,value=(action.scorch.cast_time*!buff.pyroclasm.up*scorch_execute.active)+(action.fireball.cast_time*!buff.pyroclasm.up*!scorch_execute.active)+(action.pyroblast.cast_time*buff.pyroclasm.up)-variable.cast_remains_time
# Use Potion on pull. Delay by about 8 seconds if playing with Firestarter as Sunfury.
actions.cds+=/potion,if=time>=(8*(talent.firestarter&talent.spellfire_spheres))|buff.combustion.remains>6|fight_remains<35
# Force Vaelgor as highest priority on-use trinket, if potentially two on-use trinkets are equipped.
actions.cds+=/use_item,name=vaelgors_final_stare,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=emberwing_feather,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=nevermelting_ice_crystal,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=freightrunners_flask,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=astral_gladiators_badge_of_ferocity,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=galactic_gladiators_badge_of_ferocity,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=ever_collapsing_void_fissure,if=buff.combustion.remains>6|fight_remains<20
# Non-steriod trinkets are used outside cooldowns.
actions.cds+=/use_items,if=variable.nonsteroid_trinket_equipped&time>variable.combustion_delay&buff.combustion.down&buff.hyperthermia.down&cooldown.combustion.remains>20
actions.cds+=/use_items,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/ancestral_call,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/berserking,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/blood_fury,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/fireblood,if=buff.combustion.remains>6|fight_remains<10
actions.cds+=/invoke_external_buff,name=power_infusion,if=buff.power_infusion.down&(buff.combustion.remains>6|fight_remains<25)

actions.ff_combustion=combustion,use_off_gcd=1,use_while_casting=1,if=buff.combustion.down&action.fireball.executing&(action.fireball.execute_remains<variable.cast_remains_time)|action.meteor.in_flight&(action.meteor.in_flight_remains<0.3)|action.pyroblast.executing&(action.pyroblast.execute_remains<variable.cast_remains_time)|prev_gcd.1.meteor
# Precast into Combustion. Prioritize Pyroclasm if available.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&!buff.hot_streak.react&buff.combustion.down)
actions.ff_combustion+=/pyroblast,if=buff.pyroclasm.up&!buff.hot_streak.react&buff.combustion.down
actions.ff_combustion+=/fireball,if=buff.combustion.down
# Meteor is used towards the end of Combustion to maximize the Ignite bank for Burnout. If not playing Burnout, just make sure the Meteor lands during Combustion at any time.
actions.ff_combustion+=/meteor,if=(talent.burnout&buff.combustion.remains<8)|(!talent.burnout&buff.combustion.remains>2)
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.hot_streak.react)
actions.ff_combustion+=/pyroblast,if=buff.hot_streak.react
# Make sure Pyroclasm FINISHES its cast before Combustion ends.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&cast_time<buff.combustion.remains)
actions.ff_combustion+=/pyroblast,if=buff.pyroclasm.up&cast_time<buff.combustion.remains
actions.ff_combustion+=/scorch,if=buff.heat_shimmer.react|talent.scald&target.health.pct<30&buff.frostfire_empowerment.down
actions.ff_combustion+=/fireball
actions.ff_combustion+=/call_action_list,name=fireblast,if=!talent.pyroclasm|(buff.pyroclasm.stack<2|action.pyroblast.executing&action.pyroblast.execute_remains>0.2&buff.pyroclasm.stack=2|cooldown.fire_blast.charges_fractional>=2|buff.combustion.remains<action.pyroblast.cast_time)&(active_enemies<variable.sf_combustion_flamestrike&variable.flamestriking|buff.pyroclasm.down|!action.flamestrike.executing)

# Cast Meteor on CD starting from the precast of your first Combustion.
actions.ff_filler=meteor,if=time>=(variable.combustion_delay-gcd.max)
# During Firestarter, only use Pyroblast as your spender, even for AoE.
actions.ff_filler+=/pyroblast,if=buff.hot_streak.up&talent.firestarter&time<variable.combustion_delay
# Hold Hot Streak if Combustion is coming up soon. Do not hold if intentionally delaying Combustion.
actions.ff_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_filler_flamestrike&variable.flamestriking&(buff.hot_streak.react&(cooldown.combustion.remains>=5|time<variable.combustion_delay))
actions.ff_filler+=/pyroblast,if=buff.hot_streak.react&(cooldown.combustion.remains>=(5-(5*buff.pyroclasm.up))|time<variable.combustion_delay)&target.health.pct>30
# Spend Pyroclasm immediately if you have 2 stacks available. Otherwise, hold one stack if it lasts until Combustion comes up.
actions.ff_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_filler_flamestrike&variable.flamestriking&(buff.pyroclasm.up&cooldown.combustion.remains>12|buff.pyroclasm.stack=2)
actions.ff_filler+=/pyroblast,if=buff.pyroclasm.up&cooldown.combustion.remains>12|buff.pyroclasm.stack=2
actions.ff_filler+=/scorch,if=buff.heat_shimmer.react
actions.ff_filler+=/fireball
actions.ff_filler+=/call_action_list,name=fireblast

# During Combustion/Hyperthermia, spend Fire Blasts with Heating Up.
actions.fireblast=fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(buff.combustion.up|buff.hyperthermia.up)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max
# During non-execute filler, use Fire Blast with Heating Up while hardcasting Fireball/Frostfire Bolt/Pyroblast.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(action.fireball.executing&action.fireball.execute_remains>0.1|buff.pyroclasm.react&action.pyroblast.executing&action.pyroblast.execute_remains>0.1)&((target.health.pct>=30|!talent.scorch)&buff.heating_up.react)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max
# During execute, spend Fire Blasts while casting Scorch if you don't have Heating Up.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(target.health.pct<30&talent.scorch)&(hot_streak_spells_in_flight+buff.heating_up.react=0)&action.scorch.executing&buff.heat_shimmer.down&gcd.remains<gcd.max
# While delaying Combustion on pull (Firestarter or not), spend Fire Blasts with Heating Up freely. If not playing Firestarter, only do so during hardcasts.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&time<variable.combustion_delay&(talent.firestarter|action.fireball.executing&action.fireball.execute_remains>0.1|buff.pyroclasm.react&action.pyroblast.executing&action.pyroblast.execute_remains>0.1)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max&cooldown.combustion.ready
# When talented into Spontaneous Combustion, spend all Fire Blasts during the pre-cast going into Combustion regardless of Heating Up / Hot Streak status.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&(time>=variable.combustion_delay&(cooldown.combustion.remains<=variable.combustion_precast_time))&buff.combustion.down&talent.spontaneous_combustion&(action.scorch.executing|action.fireball.executing|action.pyroblast.executing|action.flamestrike.executing)
# As Frostfire in execute, since we ignore Hot Streak Pyroblast, send Fire Blasts freely.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=talent.frostfire_bolt&target.health.pct<30&buff.combustion.down&cooldown.combustion.remains>5
# Spend all available Fire Blasts if fight is ending.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=fight_remains<1

actions.sf_combustion=combustion,use_off_gcd=1,use_while_casting=1,if=action.scorch.executing&(action.scorch.execute_remains<variable.cast_remains_time)|action.fireball.executing&(action.fireball.execute_remains<variable.cast_remains_time)|action.pyroblast.executing&(action.pyroblast.execute_remains<variable.cast_remains_time)|action.flamestrike.executing&(action.flamestrike.execute_remains<variable.cast_remains_time)|action.meteor.in_flight&(action.meteor.in_flight_remains<0.3|buff.bloodlust.up)&!talent.sunfury_execution
# Precast one of these into Combustion.
actions.sf_combustion+=/meteor,if=buff.bloodlust.up&buff.combustion.down
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.combustion.down&!buff.hot_streak.react&buff.pyroclasm.up)
actions.sf_combustion+=/pyroblast,if=buff.combustion.down&!buff.hot_streak.react&buff.pyroclasm.up
actions.sf_combustion+=/scorch,if=buff.combustion.down&(target.health.pct<30|active_enemies>=4)
# If precasting Meteor into Combustion, can fit a Fireball unless Bloodlust is active.
actions.sf_combustion+=/fireball,if=buff.combustion.down&(!prev_gcd.1.meteor|buff.bloodlust.down)
# Make sure Meteor lands during Combustion.
actions.sf_combustion+=/meteor,if=buff.combustion.remains>2
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE. The Scorch condition is simply to simulate predictable guaranteed crits during Combustion.
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2)
actions.sf_combustion+=/pyroblast,if=buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2
# Make sure Pyroclasm FINISHES its cast before Combustion ends.
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&!buff.hot_streak.up&cast_time<buff.combustion.remains)
actions.sf_combustion+=/pyroblast,if=buff.pyroclasm.up&!buff.hot_streak.up&cast_time<buff.combustion.remains
actions.sf_combustion+=/scorch
actions.sf_combustion+=/fireball
# We prioritize starting to cast Pyroclasm (on 2 stacks) over Fire Blast if there's no risk of overcapping. In AoE, we also do not want to cast Fire Blast during a hardcast Flamestrike.
actions.sf_combustion+=/call_action_list,name=fireblast,if=!talent.pyroclasm|(buff.pyroclasm.stack<2|action.pyroblast.executing&action.pyroblast.execute_remains>0.2&buff.pyroclasm.stack=2|cooldown.fire_blast.charges_fractional>=2|buff.combustion.remains<action.pyroblast.cast_time)&(active_enemies<variable.sf_combustion_flamestrike&variable.flamestriking|buff.pyroclasm.down|!action.flamestrike.executing)

# In AoE, outside of Bloodlust, we can use Meteor into a Hardcast as a precast for Combustion.
actions.sf_filler=meteor,if=active_enemies>=4&time>variable.combustion_delay&cooldown.combustion.remains<=gcd.max+variable.combustion_precast_time&buff.bloodlust.down
# During Firestarter, only use Pyroblast as your spender, even for AoE
actions.sf_filler+=/pyroblast,if=buff.hot_streak.up&talent.firestarter&time<variable.combustion_delay
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE. The Scorch condition is simply to simulate predictable guaranteed crits during execute.
actions.sf_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_filler_flamestrike&variable.flamestriking&(buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2|buff.hyperthermia.up)
actions.sf_filler+=/pyroblast,if=buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2|buff.hyperthermia.up
# Spend Pyroclasm immediately if you have 2 stacks available or if Firestarter is active. Otherwise, hold one stack if it lasts until Combustion comes up.
actions.sf_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_filler_flamestrike&variable.flamestriking&buff.pyroclasm.up&((cooldown.combustion.remains>=12|time<variable.combustion_delay&(talent.firestarter|time>(variable.combustion_delay-action.flamestrike.cast_time)))|buff.pyroclasm.stack=2)
actions.sf_filler+=/pyroblast,if=buff.pyroclasm.up&(cooldown.combustion.remains>=12|time<variable.combustion_delay&(talent.firestarter|time>(variable.combustion_delay-action.pyroblast.cast_time)))|buff.pyroclasm.stack=2
# Meteor is used on CD with Blast Zone starting from the first Combustion. Without Blast Zone, it's used either purely during Combustion or within 12 seconds before if talented into Sunfury Execution.
actions.sf_filler+=/meteor,if=(!talent.blast_zone&talent.sunfury_execution&cooldown.combustion.remains<12&buff.pyroclasm.stack<2)|(talent.blast_zone&time>variable.combustion_delay)
# Cast Scorch in execute or with a Heat Shimmer proc.
actions.sf_filler+=/scorch,if=talent.scald&target.health.pct<30|buff.heat_shimmer.react&(target.health.pct>=90|prev_gcd.1.pyroblast|prev_gcd.1.flamestrike)
actions.sf_filler+=/fireball
actions.sf_filler+=/call_action_list,name=fireblast
```

---

### Sunfury — Talent Import String

```
C8DAAAAAAAAAAAAAAAAAAAAAAYGGLzMzswMDZmZGAAAGAwMz0sssMDAwmZmx2wYmBAAAAAsZmZmZAAwYGzYmZMz2AwMDxMGDmhB
```

### Sunfury — Damage Distribution (SimC, share of total damage)

| Ability | % of Total Damage |
|---|---|
| Ignite | 26.9% |
| Intensifying Flame | 7.6% |
| Scorch | 5.6% |
| Burnout | 5.3% |
| Fireball | 5.2% |
| Meteorite | 4.6% (incl. procs) |
| Pyroblast | 0.8% |
| Greater Pyroblast | 0.7% |
| Meteorite (_bug_impact) | 0.7% |
| Arcane Barrage | 0.6% |
| Arcane Surge | 0.5% |
| Meteorite (_impact) | 0.3% |

> Note: Sunfury also includes pet damage from the Arcane Phoenix; the pet row had no clean % value and is not listed above. The "Meteorite" entries are the Sunfury variant of Meteor.

**Interpretation:** The Sunfury profile is strikingly different from Frostfire: Ignite still dominates at ~27%, but Pyroblast (normally the main Hot Streak spender) is only 0.8% of total damage, with Scorch, Fireball, and Meteorite collectively more important than individual Pyroblast casts. This reflects the Sunfury kit's heavier use of the Arcane Phoenix pet, Intensifying Flame, and Meteorite as primary throughput vehicles rather than raw Hot Streak-spam. In a log review, a Sunfury player with low Scorch/Fireball cast counts and low Meteorite hits (relative to fight duration) is a stronger signal of a rotation problem than looking at Pyroblast count alone.

### Action Priority List — Mage Fire Sunfury

```
actions.precombat=arcane_intellect
actions.precombat+=/variable,name=cast_remains_time,value=0.2
actions.precombat+=/variable,name=pooling_time,value=10*gcd.max
actions.precombat+=/variable,name=flamestriking,op=reset,default=1
# Flamestrike at 4 targets during Combustion.
actions.precombat+=/variable,name=ff_combustion_flamestrike,if=!talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Flamestrike at 8 targets.
actions.precombat+=/variable,name=ff_filler_flamestrike,if=!talent.spellfire_spheres,value=8+(999*!talent.fuel_the_fire)
# Flamestrike at 4 targets during Combustion. Do at 3 targets if you don't care about prio dmg.
actions.precombat+=/variable,name=sf_combustion_flamestrike,if=talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Flamestrike at 4 targets.
actions.precombat+=/variable,name=sf_filler_flamestrike,if=talent.spellfire_spheres,value=4+(999*!talent.fuel_the_fire)
# Delay Combustion if playing Firestarter until the target is >=90% HP unless it means losing casts of Combustion. Do not do so if fight length is short.
actions.precombat+=/variable,name=combustion_delay,value=(18*talent.firestarter)-(10*(expected_combat_length<60)+10*(expected_combat_length<30))-10*(((expected_combat_length%%60)>=25)&((expected_combat_length%%60)<=40))
actions.precombat+=/variable,name=15ssteroid_trinket_equipped,op=set,value=equipped.nevermelting_ice_crystal|equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity
actions.precombat+=/variable,name=10ssteroid_trinket_equipped,op=set,value=equipped.ever_collapsing_void_fissure
actions.precombat+=/variable,name=nonsteroid_trinket_equipped,op=set,value=equipped.mereldars_toll|equipped.perfidious_projector|equipped.chaotic_nethergate|equipped.wraps_of_cosmic_madness|equipped.astalors_anguish_agitator
actions.precombat+=/snapshot_stats
actions.precombat+=/mirror_image
# Precast one of these.
actions.precombat+=/frostfire_bolt,if=talent.frostfire_bolt
actions.precombat+=/meteor,if=!talent.firestarter&talent.sunfury_execution
actions.precombat+=/pyroblast

# Executed every time the actor is available.
actions=call_action_list,name=cds
# Combustion is delayed on pull 18 seconds for all Firestarter builds to simulate realistic timings for when a boss drops below 90% HP.
actions+=/run_action_list,name=ff_combustion,if=talent.frostfire_bolt&((time>=variable.combustion_delay)&(cooldown.combustion.remains<=variable.combustion_precast_time|buff.combustion.up|cooldown.combustion.ready))
actions+=/run_action_list,name=sf_combustion,if=!talent.frostfire_bolt&((time>=variable.combustion_delay)&(cooldown.combustion.remains<=variable.combustion_precast_time|buff.combustion.up|cooldown.combustion.ready))
actions+=/run_action_list,name=ff_filler,if=talent.frostfire_bolt
actions+=/run_action_list,name=sf_filler

actions.cds=variable,name=combustion_precast_time,value=(action.scorch.cast_time*!buff.pyroclasm.up*scorch_execute.active)+(action.fireball.cast_time*!buff.pyroclasm.up*!scorch_execute.active)+(action.pyroblast.cast_time*buff.pyroclasm.up)-variable.cast_remains_time
# Use Potion on pull. Delay by about 8 seconds if playing with Firestarter as Sunfury.
actions.cds+=/potion,if=time>=(8*(talent.firestarter&talent.spellfire_spheres))|buff.combustion.remains>6|fight_remains<35
# Force Vaelgor as highest priority on-use trinket, if potentially two on-use trinkets are equipped.
actions.cds+=/use_item,name=vaelgors_final_stare,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=emberwing_feather,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=nevermelting_ice_crystal,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=freightrunners_flask,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=astral_gladiators_badge_of_ferocity,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=galactic_gladiators_badge_of_ferocity,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/use_item,name=ever_collapsing_void_fissure,if=buff.combustion.remains>6|fight_remains<20
# Non-steriod trinkets are used outside cooldowns.
actions.cds+=/use_items,if=variable.nonsteroid_trinket_equipped&time>variable.combustion_delay&buff.combustion.down&buff.hyperthermia.down&cooldown.combustion.remains>20
actions.cds+=/use_items,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/ancestral_call,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/berserking,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/blood_fury,if=buff.combustion.remains>6|fight_remains<20
actions.cds+=/fireblood,if=buff.combustion.remains>6|fight_remains<10
actions.cds+=/invoke_external_buff,name=power_infusion,if=buff.power_infusion.down&(buff.combustion.remains>6|fight_remains<25)

actions.ff_combustion=combustion,use_off_gcd=1,use_while_casting=1,if=buff.combustion.down&action.fireball.executing&(action.fireball.execute_remains<variable.cast_remains_time)|action.meteor.in_flight&(action.meteor.in_flight_remains<0.3)|action.pyroblast.executing&(action.pyroblast.execute_remains<variable.cast_remains_time)|prev_gcd.1.meteor
# Precast into Combustion. Prioritize Pyroclasm if available.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&!buff.hot_streak.react&buff.combustion.down)
actions.ff_combustion+=/pyroblast,if=buff.pyroclasm.up&!buff.hot_streak.react&buff.combustion.down
actions.ff_combustion+=/fireball,if=buff.combustion.down
# Meteor is used towards the end of Combustion to maximize the Ignite bank for Burnout. If not playing Burnout, just make sure the Meteor lands during Combustion at any time.
actions.ff_combustion+=/meteor,if=(talent.burnout&buff.combustion.remains<8)|(!talent.burnout&buff.combustion.remains>2)
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.hot_streak.react)
actions.ff_combustion+=/pyroblast,if=buff.hot_streak.react
# Make sure Pyroclasm FINISHES its cast before Combustion ends.
actions.ff_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&cast_time<buff.combustion.remains)
actions.ff_combustion+=/pyroblast,if=buff.pyroclasm.up&cast_time<buff.combustion.remains
actions.ff_combustion+=/scorch,if=buff.heat_shimmer.react|talent.scald&target.health.pct<30&buff.frostfire_empowerment.down
actions.ff_combustion+=/fireball
actions.ff_combustion+=/call_action_list,name=fireblast,if=!talent.pyroclasm|(buff.pyroclasm.stack<2|action.pyroblast.executing&action.pyroblast.execute_remains>0.2&buff.pyroclasm.stack=2|cooldown.fire_blast.charges_fractional>=2|buff.combustion.remains<action.pyroblast.cast_time)&(active_enemies<variable.sf_combustion_flamestrike&variable.flamestriking|buff.pyroclasm.down|!action.flamestrike.executing)

# Cast Meteor on CD starting from the precast of your first Combustion.
actions.ff_filler=meteor,if=time>=(variable.combustion_delay-gcd.max)
# During Firestarter, only use Pyroblast as your spender, even for AoE.
actions.ff_filler+=/pyroblast,if=buff.hot_streak.up&talent.firestarter&time<variable.combustion_delay
# Hold Hot Streak if Combustion is coming up soon. Do not hold if intentionally delaying Combustion.
actions.ff_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_filler_flamestrike&variable.flamestriking&(buff.hot_streak.react&(cooldown.combustion.remains>=5|time<variable.combustion_delay))
actions.ff_filler+=/pyroblast,if=buff.hot_streak.react&(cooldown.combustion.remains>=(5-(5*buff.pyroclasm.up))|time<variable.combustion_delay)&target.health.pct>30
# Spend Pyroclasm immediately if you have 2 stacks available. Otherwise, hold one stack if it lasts until Combustion comes up.
actions.ff_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.ff_filler_flamestrike&variable.flamestriking&(buff.pyroclasm.up&cooldown.combustion.remains>12|buff.pyroclasm.stack=2)
actions.ff_filler+=/pyroblast,if=buff.pyroclasm.up&cooldown.combustion.remains>12|buff.pyroclasm.stack=2
actions.ff_filler+=/scorch,if=buff.heat_shimmer.react
actions.ff_filler+=/fireball
actions.ff_filler+=/call_action_list,name=fireblast

# During Combustion/Hyperthermia, spend Fire Blasts with Heating Up.
actions.fireblast=fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(buff.combustion.up|buff.hyperthermia.up)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max
# During non-execute filler, use Fire Blast with Heating Up while hardcasting Fireball/Frostfire Bolt/Pyroblast.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(action.fireball.executing&action.fireball.execute_remains>0.1|buff.pyroclasm.react&action.pyroblast.executing&action.pyroblast.execute_remains>0.1)&((target.health.pct>=30|!talent.scorch)&buff.heating_up.react)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max
# During execute, spend Fire Blasts while casting Scorch if you don't have Heating Up.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&(target.health.pct<30&talent.scorch)&(hot_streak_spells_in_flight+buff.heating_up.react=0)&action.scorch.executing&buff.heat_shimmer.down&gcd.remains<gcd.max
# While delaying Combustion on pull (Firestarter or not), spend Fire Blasts with Heating Up freely. If not playing Firestarter, only do so during hardcasts.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&!buff.hot_streak.react&time<variable.combustion_delay&(talent.firestarter|action.fireball.executing&action.fireball.execute_remains>0.1|buff.pyroclasm.react&action.pyroblast.executing&action.pyroblast.execute_remains>0.1)&(hot_streak_spells_in_flight+buff.heating_up.react=1)&gcd.remains<gcd.max&cooldown.combustion.ready
# When talented into Spontaneous Combustion, spend all Fire Blasts during the pre-cast going into Combustion regardless of Heating Up / Hot Streak status.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=cooldown_react&(time>=variable.combustion_delay&(cooldown.combustion.remains<=variable.combustion_precast_time))&buff.combustion.down&talent.spontaneous_combustion&(action.scorch.executing|action.fireball.executing|action.pyroblast.executing|action.flamestrike.executing)
# As Frostfire in execute, since we ignore Hot Streak Pyroblast, send Fire Blasts freely.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=talent.frostfire_bolt&target.health.pct<30&buff.combustion.down&cooldown.combustion.remains>5
# Spend all available Fire Blasts if fight is ending.
actions.fireblast+=/fire_blast,use_off_gcd=1,use_while_casting=1,if=fight_remains<1

actions.sf_combustion=combustion,use_off_gcd=1,use_while_casting=1,if=action.scorch.executing&(action.scorch.execute_remains<variable.cast_remains_time)|action.fireball.executing&(action.fireball.execute_remains<variable.cast_remains_time)|action.pyroblast.executing&(action.pyroblast.execute_remains<variable.cast_remains_time)|action.flamestrike.executing&(action.flamestrike.execute_remains<variable.cast_remains_time)|action.meteor.in_flight&(action.meteor.in_flight_remains<0.3|buff.bloodlust.up)&!talent.sunfury_execution
# Precast one of these into Combustion.
actions.sf_combustion+=/meteor,if=buff.bloodlust.up&buff.combustion.down
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.combustion.down&!buff.hot_streak.react&buff.pyroclasm.up)
actions.sf_combustion+=/pyroblast,if=buff.combustion.down&!buff.hot_streak.react&buff.pyroclasm.up
actions.sf_combustion+=/scorch,if=buff.combustion.down&(target.health.pct<30|active_enemies>=4)
# If precasting Meteor into Combustion, can fit a Fireball unless Bloodlust is active.
actions.sf_combustion+=/fireball,if=buff.combustion.down&(!prev_gcd.1.meteor|buff.bloodlust.down)
# Make sure Meteor lands during Combustion.
actions.sf_combustion+=/meteor,if=buff.combustion.remains>2
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE. The Scorch condition is simply to simulate predictable guaranteed crits during Combustion.
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2)
actions.sf_combustion+=/pyroblast,if=buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2
# Make sure Pyroclasm FINISHES its cast before Combustion ends.
actions.sf_combustion+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_combustion_flamestrike&variable.flamestriking&(buff.pyroclasm.up&!buff.hot_streak.up&cast_time<buff.combustion.remains)
actions.sf_combustion+=/pyroblast,if=buff.pyroclasm.up&!buff.hot_streak.up&cast_time<buff.combustion.remains
actions.sf_combustion+=/scorch
actions.sf_combustion+=/fireball
# We prioritize starting to cast Pyroclasm (on 2 stacks) over Fire Blast if there's no risk of overcapping. In AoE, we also do not want to cast Fire Blast during a hardcast Flamestrike.
actions.sf_combustion+=/call_action_list,name=fireblast,if=!talent.pyroclasm|(buff.pyroclasm.stack<2|action.pyroblast.executing&action.pyroblast.execute_remains>0.2&buff.pyroclasm.stack=2|cooldown.fire_blast.charges_fractional>=2|buff.combustion.remains<action.pyroblast.cast_time)&(active_enemies<variable.sf_combustion_flamestrike&variable.flamestriking|buff.pyroclasm.down|!action.flamestrike.executing)

# In AoE, outside of Bloodlust, we can use Meteor into a Hardcast as a precast for Combustion.
actions.sf_filler=meteor,if=active_enemies>=4&time>variable.combustion_delay&cooldown.combustion.remains<=gcd.max+variable.combustion_precast_time&buff.bloodlust.down
# During Firestarter, only use Pyroblast as your spender, even for AoE
actions.sf_filler+=/pyroblast,if=buff.hot_streak.up&talent.firestarter&time<variable.combustion_delay
# Spend Hot Streaks on Pyroblast in ST or Flamestrike in AoE. The Scorch condition is simply to simulate predictable guaranteed crits during execute.
actions.sf_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_filler_flamestrike&variable.flamestriking&(buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2|buff.hyperthermia.up)
actions.sf_filler+=/pyroblast,if=buff.hot_streak.react|prev_gcd.1.scorch&buff.heating_up.react&time-action.scorch.last_used<0.2|buff.hyperthermia.up
# Spend Pyroclasm immediately if you have 2 stacks available or if Firestarter is active. Otherwise, hold one stack if it lasts until Combustion comes up.
actions.sf_filler+=/flamestrike,if=talent.fuel_the_fire&active_enemies>=variable.sf_filler_flamestrike&variable.flamestriking&buff.pyroclasm.up&((cooldown.combustion.remains>=12|time<variable.combustion_delay&(talent.firestarter|time>(variable.combustion_delay-action.flamestrike.cast_time)))|buff.pyroclasm.stack=2)
actions.sf_filler+=/pyroblast,if=buff.pyroclasm.up&(cooldown.combustion.remains>=12|time<variable.combustion_delay&(talent.firestarter|time>(variable.combustion_delay-action.pyroblast.cast_time)))|buff.pyroclasm.stack=2
# Meteor is used on CD with Blast Zone starting from the first Combustion. Without Blast Zone, it's used either purely during Combustion or within 12 seconds before if talented into Sunfury Execution.
actions.sf_filler+=/meteor,if=(!talent.blast_zone&talent.sunfury_execution&cooldown.combustion.remains<12&buff.pyroclasm.stack<2)|(talent.blast_zone&time>variable.combustion_delay)
# Cast Scorch in execute or with a Heat Shimmer proc.
actions.sf_filler+=/scorch,if=talent.scald&target.health.pct<30|buff.heat_shimmer.react&(target.health.pct>=90|prev_gcd.1.pyroblast|prev_gcd.1.flamestrike)
actions.sf_filler+=/fireball
actions.sf_filler+=/call_action_list,name=fireblast
```

---

## Notes and Known Gaps

### Confirmed live (June 2026) — SpellIDs verified on individual Wowhead spell pages
Fireball (133), Frost Nova (122), Polymorph (118), Combustion (190319), Pyroblast (11366), Fire Blast (108853), Scorch (2948), Phoenix Flames (257541), Flamestrike (2120), Meteor (153561), Hot Streak! (48108), Heating Up (48107), Ice Block (45438), Greater Invisibility (110959), Mirror Image (55342), Alter Time (342245), Blazing Barrier (235313), Prismatic Barrier (235450), Mass Barrier (414660), Counterspell (2139), Dragon's Breath (31661), Ring of Frost (113724), Remove Curse (475), Spellsteal (30449), Blink (1953), Shimmer (212653), Time Warp (80353), Arcane Intellect (1459).

### Unconfirmed facts (flagged — not included as numbers above)
- **Frostfire Bolt** SpellID — not fetched/confirmed. Named with no ID. Frostfire is a hero-talent filler replacement for Fireball.
- **Hyperthermia** SpellID — referenced by Icy Veins and confirmed present as an ability in Sunfury SimC data; SpellID not confirmed on a spell page.
- **Sun King's Blessing**, **Pyroclasm**, **Heat Shimmer**, **Firestarter** SpellIDs — these procs/talents drive the rotation but their individual IDs were not fetched. Named without IDs.
- **Burnout** SpellID — a Frostfire hero-tree proc confirmed in SimC data (~5.3% of damage); SpellID not confirmed on a spell page.
- **Intensifying Flame** SpellID — present in SimC data for both builds (6.8–7.6% of damage); likely a passive fire DoT amplifier; SpellID not confirmed on a spell page.
- **Greater Pyroblast** SpellID — a Sunfury hero-tree ability confirmed in SimC data (~0.7%); SpellID not confirmed on a spell page.
- **Living Bomb** — not confirmed present in the current Midnight Fire kit from fetched sources; omitted rather than assumed.
- **Ice Block cooldown** — the spell page showed "n/a"; the exact baseline/talented cooldown is not confirmed here.
- **Greater Invisibility damage-reduction %** — the spell page did not expose the numeric DR value; effect described qualitatively only.
- **Time Warp Haste %** — the spell page did not expose the numeric Haste value (commonly the standard Bloodlust value, but not confirmed from the fetched page).
- **Mass Barrier ally scope** — the spell page listed a 0-yard/Self range with dummy effects; whether it covers the full raid, the player's group, or only nearby allies was not definitively confirmed.
- **Combustion exact duration with talents** — base 10s confirmed; talented extensions not individually confirmed.
- **Fire Blast / Phoenix Flames charge counts and recharge** — charge-based per guides, but exact charge counts/recharge times were not confirmed from the fetched spell pages (talent dependent).
- **Meteor (Frostfire build)** — appears with 0.000% effective damage in the Frostfire SimC table, despite being listed in the rotation. May require a talent node not taken in the SimC profile, or its damage is captured under Ignite/Burnout entries.

### Sections limited by missing sources
- **Consumables and Enchants** — intentionally has NO item IDs. No SimC DPS benchmark was captured and the BiS/enchant/gem pages were not fetched. This entire section must be re-sourced live before any item ID is trusted in RaidLens.
- **Rotation** — conceptual priority only; SimC damage distribution and talent import strings added (see SimulationCraft Reference section). SimC APL now embedded (extracted from Trivial.txt). Treat rotation prose as logical ordering, not a benchmark.
- **DPS-tier / "weaker side" framing** — taken from Icy Veins prose, not authoritative balance data; do not use for ranking players.
- **SimC DPS metrics** — the metrics field was empty ({}) for both Frostfire and Sunfury profiles; no patchwerk DPS number is available from this data.

### Maintenance flag
Written against **Midnight patch 12.0.5 (current June 2026)**. Wowhead guide pages render content dynamically and were not fully extractable via fetch; rotation/utility prose was cross-sourced from Icy Veins, while every SpellID was individually confirmed on its own Wowhead spell page. **Re-verify all SpellIDs, cooldowns, the consumables/enchants section, and the unconfirmed procs after any 12.x patch or balance hotfix.**
