# Fire Mage — Raid Guide (WoW Midnight, Patch 12.0.5)

> **Sources (live, fetched June 2026):**
> - https://www.wowhead.com/guide/classes/mage/fire/overview-pve-dps
> - https://www.wowhead.com/guide/classes/mage/fire/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-guide
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/fire-mage-pve-dps-spec-builds-talents
> - Individual Wowhead spell pages (one per confirmed SpellID; URLs listed in Notes and Known Gaps)
>
> **SpellIDs:** Every numeric SpellID below was confirmed on a live Wowhead spell page that was actually fetched. Any ability whose ID could not be confirmed is written with no number and flagged in Notes and Known Gaps. No ID was recalled from memory or guessed.
>
> **No SimC profile was provided for this spec** (unlike the Havoc/Beast Mastery guides). There is therefore no embedded APL or import string. Rotation below is conceptual logical priority sourced from Wowhead and Icy Veins prose — not a DPS benchmark.

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
| Fireball | 133 | Primary hard-cast filler nuke (single target). ~1.8s cast (talent/Haste dependent). |
| Frostfire Bolt | — | Replaces Fireball as the filler in **Frostfire** hero-talent builds. SpellID not confirmed from a fetched page — see Known Gaps. |
| Pyroblast | 11366 | Hot Streak spender; instant and free when Hot Streak is active, otherwise a long hard cast. Main burst nuke. |
| Fire Blast | 108853 | Guaranteed critical strike. Instant, off the normal cast flow, charge-based (banked charges). Used to convert Heating Up → Hot Streak. The page lists a 500ms internal cooldown; effective availability is governed by charges/recharge (talent dependent). |
| Scorch | 2948 | Instant-feel movement filler / proc generator (1.5s cast on the page). Hits harder on low-health targets via execute talent; used with Heat Shimmer procs. |
| Phoenix Flames | 257541 | Instant, charge-based fire attack that always crits the primary target; feeds Hot Streak generation and Ignite spread. |
| Flamestrike | 2120 | Ground AoE; the Hot Streak spender for AoE (4+ targets per Icy Veins). |
| Meteor | 153561 | 45s cooldown. Targeted burst nuke + ground burn; cast on cooldown and aligned into Combustion when possible. Talent. |

### Cooldowns and key procs

| Ability / Buff | SpellID | Notes |
|---|---|---|
| Combustion | 190319 | 2-minute cooldown, 10s duration (base). Grants a large critical-strike-chance bonus to affected Mage spells — the spec's primary burst window. Instant, off-GCD. |
| Hot Streak! | 48108 | Buff. Your next Pyroblast (or Flamestrike) is instant and costs no mana. |
| Heating Up | 48107 | Buff. Intermediate state; one more crit (or a Fire Blast) converts it to Hot Streak. |
| Hyperthermia | — | Buff window (referenced by Icy Veins) granting rapid free instant Pyroblasts, notably tied to the **Sunfury** hero tree's "Memory of Al'ar" after Combustion. SpellID not confirmed — see Known Gaps. |
| Sun King's Blessing / Pyroclasm / Heat Shimmer | — | Proc-based empowerments referenced in the rotation. SpellIDs not confirmed from fetched pages — see Known Gaps. |

### Hero talent trees

- **Sunfury:** Spawns an Arcane Phoenix during Combustion; "Memory of Al'ar" grants a Hyperthermia window when Combustion ends. Faster, more proc-dense rotation.
- **Frostfire:** Replaces Fireball with **Frostfire Bolt** as the filler, adds Frost-school damage, and generates Frostfire Empowerment procs; leans more on **Meteor**.

(Hero tree mechanics from Icy Veins / Wowhead prose; individual hero-talent SpellIDs not confirmed — see Known Gaps.)

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

> **No SimC profile was provided for this spec, and the Wowhead/Icy-Veins consumable and enchant pages were not individually fetched and confirmed.** To avoid fabricating item IDs, this section intentionally omits specific consumable/enchant item IDs. See Known Gaps for exactly what still needs sourcing.

What can be stated with confidence (mechanical, not item-specific):
- **Intellect** is the primary stat; Fire wants a stat flask (Intellect) and a DPS food buff appropriate to current secondary-stat weights.
- A DPS combat potion should be pre-potted before the pull and used again inside a Combustion window.
- A weapon enchant, gem each socket, and slot enchants (the standard Midnight enchant set) apply — but the **exact current item IDs and names are not confirmed here and must be sourced from the live Wowhead "Gear and Best in Slot" / enchants pages before being trusted.**

Do not enter any consumable or enchant item ID into RaidLens from this guide until it is confirmed live — see Known Gaps.

---

## Notes and Known Gaps

### Confirmed live (June 2026) — SpellIDs verified on individual Wowhead spell pages
Fireball (133), Frost Nova (122), Polymorph (118), Combustion (190319), Pyroblast (11366), Fire Blast (108853), Scorch (2948), Phoenix Flames (257541), Flamestrike (2120), Meteor (153561), Hot Streak! (48108), Heating Up (48107), Ice Block (45438), Greater Invisibility (110959), Mirror Image (55342), Alter Time (342245), Blazing Barrier (235313), Prismatic Barrier (235450), Mass Barrier (414660), Counterspell (2139), Dragon's Breath (31661), Ring of Frost (113724), Remove Curse (475), Spellsteal (30449), Blink (1953), Shimmer (212653), Time Warp (80353), Arcane Intellect (1459).

### Unconfirmed facts (flagged — not included as numbers above)
- **Frostfire Bolt** SpellID — not fetched/confirmed. Named with no ID. Frostfire is a hero-talent filler replacement for Fireball.
- **Hyperthermia** SpellID — referenced by Icy Veins as a post-Combustion window (Sunfury "Memory of Al'ar"); not confirmed on a spell page.
- **Sun King's Blessing**, **Pyroclasm**, **Heat Shimmer**, **Firestarter** SpellIDs — these procs/talents drive the rotation but their individual IDs were not fetched. Named without IDs.
- **Living Bomb** — not confirmed present in the current Midnight Fire kit from fetched sources; omitted rather than assumed.
- **Ice Block cooldown** — the spell page showed "n/a"; the exact baseline/talented cooldown is not confirmed here.
- **Greater Invisibility damage-reduction %** — the spell page did not expose the numeric DR value; effect described qualitatively only.
- **Time Warp Haste %** — the spell page did not expose the numeric Haste value (commonly the standard Bloodlust value, but not confirmed from the fetched page).
- **Mass Barrier ally scope** — the spell page listed a 0-yard/Self range with dummy effects; whether it covers the full raid, the player's group, or only nearby allies was not definitively confirmed.
- **Combustion exact duration with talents** — base 10s confirmed; talented extensions not individually confirmed.
- **Fire Blast / Phoenix Flames charge counts and recharge** — charge-based per guides, but exact charge counts/recharge times were not confirmed from the fetched spell pages (talent dependent).

### Sections limited by missing sources
- **Consumables and Enchants** — intentionally has NO item IDs. No SimC profile was provided and the BiS/enchant/gem pages were not fetched. This entire section must be re-sourced live before any item ID is trusted in RaidLens.
- **Rotation** — conceptual priority only; no SimC APL or talent import string (none provided/confirmed). Treat as logical ordering, not a benchmark.
- **DPS-tier / "weaker side" framing** — taken from Icy Veins prose, not authoritative balance data; do not use for ranking players.

### Maintenance flag
Written against **Midnight patch 12.0.5 (current June 2026)**. Wowhead guide pages render content dynamically and were not fully extractable via fetch; rotation/utility prose was cross-sourced from Icy Veins, while every SpellID was individually confirmed on its own Wowhead spell page. **Re-verify all SpellIDs, cooldowns, the consumables/enchants section, and the unconfirmed procs after any 12.x patch or balance hotfix.**
