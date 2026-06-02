# Fury Warrior — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/warrior/fury/rotation-cooldowns-pve-dps
> - https://www.wowhead.com/guide/classes/warrior/fury/overview-pve-dps
> - https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide
> - https://www.icy-veins.com/wow/fury-warrior-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/fury-warrior-pve-dps-spell-summary
> - https://www.wowhead.com/spell=6552/pummel
> - https://www.wowhead.com/spell=184364/enraged-regeneration
> - https://www.wowhead.com/spell=97462/rallying-cry
> - https://www.wowhead.com/spell=1719/recklessness
> - https://www.wowhead.com/spell=23920/spell-reflection
> - https://www.wowhead.com/spell=18499/berserker-rage
> - https://www.wowhead.com/spell=107570/storm-bolt
> - https://www.wowhead.com/spell=6673/battle-shout
> - https://www.wowhead.com/spell=100/charge
> - https://www.wowhead.com/spell=6544/heroic-leap
> - https://www.wowhead.com/spell=23881/bloodthirst
> - https://www.wowhead.com/spell=386208/defensive-stance

## Overview

Fury Warrior is a melee physical DPS specialization built around a tight, GCD-locked rage feedback loop. The core gameplay loop is: generate Rage with basic attacks (Bloodthirst, Raging Blow), spend it on **Rampage** to trigger and maintain **Enrage**, and let Enrage's damage and haste bonus accelerate the next cycle. Maintaining high Enrage uptime is described across sources as the single most important aspect of playing the spec well; Enrage is frequently in the 30–50% damage range, so dropping it is a large DPS loss.

Damage profile: strong, fairly *flat* sustained single-target damage that cleaves effectively, plus several multi-target cooldowns (Whirlwind/Thunder Clap cleave enablement, Bladestorm). Because of the heavy reliance on Anger Management-style cooldown reduction, Fury's cooldowns come up often (roughly every ~45 seconds for the major ones) rather than being saved for long windows.

Survivability profile: above-average for a pure DPS. Fury has multiple layered short defensive cooldowns (Defensive Stance, Spell Reflection, Enraged Regeneration) plus self-healing baked into Bloodthirst.

Primary weakness: a flat damage profile with limited burst — it performs comparatively poorly in very short damage windows / burst-check phases. It is also melee, so it eats melee-range mechanics, and it has no immunity or cheat-death button.

## Role in Raid

- **Role:** DPS (melee, physical). Not a healer, not a tank.
- **Raid buff brought:** **Battle Shout** (SpellID 6673) — increases melee and ranged attack power of the group/raid by 5%. This is Fury's signature raid buff.
- **Bloodlust / Heroism equivalent:** None. Warriors do **not** provide a Bloodlust-type haste burst.
- **Battle res:** None. Warriors cannot combat-resurrect.
- **Group defensive / external:** **Rallying Cry** (SpellID 97462) — a raid-wide temporary maximum-health buff on roughly a 3-minute cooldown. This is the spec's one true external/raid cooldown; it is a percentage max-HP increase (effective-health buffer), not a flat damage-reduction shield. It is the only ability Fury has that protects allies rather than only itself.
- **Mobility:** Good. Charge (gap closer, generates Rage), Heroic Leap (AoE-radius leap to a targeted ground location), and Intervene (talent/baseline movement to an ally). Piercing Howl in current builds can also grant allies a short movement-speed boost.

## Abilities Reference

Confirmed SpellIDs are from live Wowhead spell pages fetched during research. Where an ID is not listed, it was not confirmable from a fetched source — see Notes and Known Gaps.

**Core rotational abilities**
- **Rampage** — primary Rage spender; triggers and maintains Enrage. (SpellID not confirmed — see gaps.)
- **Bloodthirst** (SpellID 23881) — basic attack; deals physical damage, restores a small % of health, generates Rage, and has a chance to grant Enrage.
- **Raging Blow** — basic attack making up the bulk of the filler rotation. (SpellID not confirmed.)
- **Execute** — high-damage, Rage-generating finisher, prioritized in execute range. (SpellID not confirmed.)
- **Whirlwind** — primary multi-target attack; enables cleave on the single-target rotation. (SpellID not confirmed.)
- **Thunder Clap** — AoE damage / cleave enabler in multi-target. (SpellID not confirmed.)

**Major cooldowns**
- **Recklessness** (SpellID 1719) — major offensive cooldown; 1.5 min cooldown, 12 s duration; +50% Rage generation and a large crit bonus. Per guidance, avoid holding it more than ~10 s.
- **Avatar** — offensive cooldown; important for enabling Mountain Thane hero-talent builds. (SpellID not confirmed.)
- **Bladestorm** — bursty AoE cooldown that aligns with Recklessness/Avatar. (SpellID not confirmed.)
- **Odyn's Fury**, **Ravager**, **Onslaught**, **Thunderous Roar**, **Champion's Spear** — talented offensive abilities appearing depending on hero-talent tree and build. (SpellIDs not confirmed.)

**Key passives / procs**
- **Enrage** — the central buff; damage + haste while active. (SpellID not confirmed; Wowhead search surfaced spell=184361/enrage but this was not directly fetched, so it is treated as unconfirmed.)
- **Anger Management** (talent) — spending Rage reduces cooldowns, which is why Fury cooldowns recur frequently.

## Rotation / Priority

This is **logical priority order, not a DPS benchmark** — exact APL ordering shifts by hero talent (Mountain Thane vs Slayer) and gear, and no SimC profile was supplied for this guide.

**Opener (conceptual):**
1. Charge into melee on pull (generates Rage).
2. Battle Shout active before combat (raid buff).
3. Recklessness (+ Avatar if talented/aligned) once in range and Enrage can be sustained.
4. Rampage to establish Enrage, then cycle basic attacks.

**Sustained single target (priority):**
1. Keep **Enrage** up at all times — never let Rampage's window lapse if avoidable.
2. **Rampage** when Rage allows (also the Enrage trigger).
3. **Bloodthirst** (Rage gen + Enrage chance + heal).
4. **Execute** in execute range.
5. **Raging Blow** as filler / Rage generation.
6. Use major cooldowns (Recklessness, Avatar, talented abilities) on cooldown rather than hoarding, due to Anger Management.

**AoE / multi-target (priority):**
1. Activate **Whirlwind** to apply cleave to single-target abilities.
2. **Thunder Clap** for AoE and cleave enablement.
3. **Bladestorm** as the burst AoE cooldown, aligned with offensive cooldowns.
4. Maintain Enrage and Rampage uptime as in single target.

## Defensives

Each entry includes a **RaidLens usage** note for judging whether the defensive was used appropriately during a damage window.

- **Enraged Regeneration** (SpellID 184364) — 2-minute cooldown, 8 s duration. ~30% damage reduction *and* greatly increased healing from Bloodthirst during the window.
  - *RaidLens usage:* Fury's strongest single defensive. For a large predictable hit or a sustained damage window, expect this to be active. If a Fury took heavy/lethal avoidable damage and Enraged Regeneration was off cooldown and unused, flag it. Cooldown is long enough that it should be matched to specific lethal mechanics, not pressed randomly.

- **Spell Reflection** (SpellID 23920) — ~20% damage reduction for 5 s and reflects a targeted spell back at the caster. (Note: the live spell page lists an internal cooldown value of "1 second," which is a client/GCD artifact; the practical, guide-documented cooldown is ~25 s. Treat ~25 s as the usable cooldown — see gaps.)
  - *RaidLens usage:* Best for magic damage and reflectable boss casts. Because the practical cooldown is short (~25 s), a Fury can reasonably cover most magic-damage windows. If a Fury died to a large *magic* hit with Spell Reflection available, flag it. Do not flag it as "missed" for purely physical hits where it provides only the flat DR.

- **Defensive Stance** (SpellID 386208) — toggled stance granting 15% damage reduction (at the cost of 10% reduced damage dealt).
  - *RaidLens usage:* A sustained, toggleable mitigation rather than a burst cooldown. Useful during prolonged raid-damage phases. Hard to verify precisely from logs (it is a stance toggle, not a discrete cast), so judge it loosely — its absence is not automatically a mistake, but its presence during a heavy phase is good play.

- **Rallying Cry** (SpellID 97462) — ~3-minute cooldown; raid-wide temporary max-HP increase (see Role in Raid). Counts as both a personal and raid defensive.
  - *RaidLens usage:* This is a **raid cooldown**, so judge it at the raid-assignment level, not as a personal panic button. If the raid took a large simultaneous spike and a Fury's Rallying Cry was available and unused (and not assigned to another window), flag it as a missed raid mitigation opportunity.

- **Bloodthirst self-heal** (part of SpellID 23881) — passive sustain; restores a small % of health on each cast, amplified under Enraged Regeneration.
  - *RaidLens usage:* Not a cooldown; do not flag. Relevant only as context for why a Fury self-sustains through chip damage.

- **Berserker Rage** (SpellID 18499) — 1-minute cooldown; grants immunity to fear, incapacitate, sap, and "turn" (charm) effects and can break those effects.
  - *RaidLens usage:* This is a **CC-break / anti-fear** tool, **not** a damage-reduction defensive. Judge it against fear/incapacitate mechanics, not against raw damage. Flag a missed use only when a fear/CC mechanic caused a problem and Berserker Rage was available.

- **Die by the Sword** — Arms-flavored parry/defensive often available via talents; *not confirmed as a current Fury baseline ability from a fetched source.* See gaps; do not assume Fury has it.

## Utility

- **Interrupt: Pummel** (SpellID 6552) — **15-second cooldown**, instant, 5-yard range, interrupts the target's cast. This is Fury Warrior's interrupt.
  - **This IS a raid-usable interrupt, and it is the spec's only interrupt.** Storm Bolt (a stun) can stop *some* casts via stun but is **not** a true spell-school-locking interrupt and should not be counted as one. For RaidLens: missed interrupts on assigned casts should be measured against Pummel's 15 s cooldown.

- **Storm Bolt** (SpellID 107570) — 30-second cooldown; throws a weapon dealing physical damage and (via its talent effect) stunning the target. Usable as a stun on stun-susceptible adds/mechanics. **Not an interrupt.**

- **Intimidating Shout** — fear / disorient crowd control on a multi-target cone. (SpellID not confirmed — see gaps.)

- **Crowd control summary:** Storm Bolt (single-target stun), Intimidating Shout (fear/disorient), Piercing Howl (slow + brief ally speed boost in current builds), Hamstring (single-target slow). Warriors have **no dispel of any kind** — they cannot remove magic, curse, poison, disease, or enrage effects from anyone.

- **Dispels:** None. Fury cannot dispel.

- **Externals for allies:** Rallying Cry (raid max-HP, see Defensives) and Intervene (movement/damage-redirect to an ally, talent-dependent). No single-target absorb or immunity for allies.

- **Raid buff:** Battle Shout (SpellID 6673), 5% attack power to the group/raid.

- **Raid debuff / misc:** Shattering Throw — removes/reduces certain immunities and absorb shields on a target; situational raid utility. (SpellID not confirmed — see gaps.)

- **Movement tools:** Charge (SpellID 100, 8–25 yd gap closer that generates Rage), Heroic Leap (SpellID 6544, 8–40 yd leap to a ground location), Intervene (talent), Piercing Howl (brief group speed).

## Consumables and Enchants

No consumable, enchant, gem, or talent-import data could be confirmed from a live source during this research pass (the fetched ability/rotation pages did not enumerate current 12.0.5 flasks, food, weapon enchants, or augment runes, and no SimC profile was provided). Fury is a Strength-based physical melee spec, so Strength-oriented consumables/enchants are the conceptual expectation, but **specific item names and IDs are intentionally omitted** rather than guessed. See Notes and Known Gaps and re-source from a dedicated consumables/enchants page before relying on this section.

## Notes and Known Gaps

Unconfirmed facts (named, per sourcing rules — IDs omitted rather than guessed):
- **SpellIDs not confirmed from a fetched page:** Rampage, Raging Blow, Execute, Whirlwind, Thunder Clap, Avatar, Bladestorm, Odyn's Fury, Ravager, Onslaught, Thunderous Roar, Champion's Spear, Enrage (passive), Intimidating Shout, Shattering Throw, Hamstring, Piercing Howl, Intervene, Victory Rush / Impending Victory, Die by the Sword. Several Wowhead spell pages returned HTTP 403 (rate-limiting) during this pass and could not be confirmed.
- **Bloodthirst (23881)** confirmed via Wowhead search result content + classic/wotlk cross-reference; the live retail spell page was 403-blocked on direct fetch. Treat as high-confidence but re-verify on the live retail page.
- **Spell Reflection cooldown:** live spell page (23920) showed an internal cooldown value of "1 second" which is a client artifact; the practical cooldown (~25 s) comes from the Icy Veins guide text, not the spell page. Re-verify the real cooldown.
- **Recklessness duration/cooldown** (1.5 min / 12 s) and **Recklessness +50% Rage / crit** taken from the live spell page (1719) — confirmed.
- **Rallying Cry** effect magnitude: the spell page (97462) lists server-side dummy effects (value 10 / value 50) rather than a clean readable "X% max HP." The 3-minute cooldown is confirmed; the exact max-HP percentage was not cleanly readable and is described conceptually.
- **Die by the Sword** and **Warpaint/Defensive Stance interactions:** "Warpaint" was referenced in the Icy Veins overview as a layered defensive but was not separately spell-confirmed; treat as a talent passive, not verified.
- **Consumables / enchants / gems / talent import strings / SimC APL:** entirely unsourced this pass — no live consumables page was fetched and no SimC profile was provided. Do not populate without re-sourcing.
- **Hero talent trees:** Mountain Thane and Slayer are referenced as current build options; their individual ability lists/IDs were not fully sourced.

Maintenance flag: **Re-verify every SpellID, cooldown, and the consumables/enchants section after any 12.x patch.** Spell IDs do not change once assigned, but cooldowns, durations, percentages, talent layouts, and consumable items can change between patches.
