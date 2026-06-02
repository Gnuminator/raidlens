# Assassination Rogue — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/rogue/assassination/overview-pve-dps
> - https://www.wowhead.com/guide/classes/rogue/assassination/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-spec-builds-talents
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-gems-enchants-consumables (via search excerpt)
> - https://dving.net/guides/midnight-rogue-guide (via search excerpt)
> - https://overgear.com/guides/wow/midnight-rogue-guide/ (via search excerpt)
> - Spell-database cross-reference for Kick spell ID: wowdb.com, wowpedia.fandom.com, wowclassicdb.com (all list 1766)
>
> Note: Wowhead individual spell/item pages and several guide pages returned HTTP 403 to automated fetching, so most numeric data below is corroborated from guide prose and search excerpts rather than from in-game tooltip pages. Spell IDs are deliberately almost entirely omitted — see "Notes and Known Gaps."

## Overview

Assassination Rogue is a melee DPS specialization built around damage-over-time effects (bleeds and poisons) layered under a hard-hitting finisher, Envenom. It is described as a slow, methodical, resource-management-focused spec: the player plans ahead and avoids wasting Energy and Combo Points. The core gameplay loop is:

1. Maintain the bleeds **Garrote** and **Rupture** on the target.
2. Generate Combo Points (primarily with **Mutilate**).
3. Spend Combo Points on **Envenom**, chaining Envenom casts to keep its damage buff active as much as possible.
4. Layer the major cooldowns **Deathmark** and **Kingsbane** on top, synced together.

**Damage profile:** Sustained, DoT-weighted single-target with burst windows every 2 minutes (Deathmark). It also has strong multi-target bleed-spread damage. In Midnight, AoE was reworked so that **Crimson Tempest** is now a Combo Point *generator* that spreads bleeds (the old Indiscriminate Carnage and Shiv were removed/changed — see Known Gaps).

**Survivability profile:** Good for a pure DPS — two pseudo-immunity buttons (Cloak of Shadows, Evasion), a strong AoE-damage reduction (Feint), self-healing (Crimson Vial), and a passive death-save (Cheat Death).

**Primary weakness:** Ramp-up time. Damage is back-loaded into DoTs and into the Deathmark window; the spec underperforms in very short fights or when forced to retarget frequently before DoTs mature. It is also melee, so it eats avoidable ground effects if positioning is poor.

## Role in Raid

- **Role:** Melee DPS. Not a healer, not a tank.
- **Bloodlust/Heroism equivalent:** **No.** Assassination Rogue does not provide a Lust effect.
- **Battle resurrection:** **No.** Rogues have no combat res.
- **Raid buff/debuff it brings:** **Atrophic Poison** — a non-lethal weapon poison with (per source) a 30% chance on hit to reduce the target's damage dealt by 3% for 10 seconds. This is the one rogue contribution that sources call genuinely valuable in raids; many groups bring at least one rogue specifically for it. Aside from Atrophic Poison, sources note that most rogue utility sees little raid use.
- **Group utility:**
  - **Tricks of the Trade** — redirects threat / grants the target a damage bonus; useful as a tank threat assist or a personal damage transfer.
  - **Shroud of Concealment** — group stealth (rogue is one of only two classes with a raid-wide stealth tool); used for skips, not in-combat.
- **Externals:** None. The spec has no targeted defensive it can cast on other players.
- **Mobility profile:** Strong. **Sprint** (movement speed burst), **Shadowstep** (gap-closer/teleport to target), and **Vanish** all aid repositioning. Shadowstep + Sprint together minimize uptime loss on movement-heavy fights.

## Abilities Reference

> SpellIDs are omitted here except where independently confirmed — see Known Gaps. Cooldown values are taken from guide prose/search excerpts, not in-game tooltip pages.

**Builders / core damage:**
- **Mutilate** — primary single-target Combo Point generator.
- **Garrote** — bleed; applied from stealth/Vanish for an empowered version (Improved Garrote). A key maintenance bleed.
- **Rupture** — bleed finisher; maintain with 5+ Combo Points.
- **Envenom** — primary finisher; chaining Envenoms to keep its buff up is central to the rotation. Spend at 5+ CP (higher with the Darkest Night/Deathstalker proc).
- **Fan of Knives** — AoE Combo Point builder.
- **Crimson Tempest** — in Midnight, reworked into a generator that spreads bleeds across multiple targets.
- **Ambush** — instant Combo Point generator when available (e.g., from stealth/procs).

**Major cooldowns:**
- **Deathmark** — ~2-minute cooldown. Main burst window; boosts bleed damage and duplicates poison effects. Energy boost on use.
- **Kingsbane** — ~1-minute (60s) cooldown. Front-loaded burst plus a DoT that scales as poisons are applied. Sync every second cast with Deathmark.
- **Vanish** — ~2-minute cooldown. In this spec used primarily to reapply an empowered Garrote (Improved Garrote) just before Deathmark. (Vanish is also a defensive/threat-drop, see Defensives/Utility.)
- **Thistle Tea** — Energy-restore button; described as a multi-charge ability (about 1 charge per minute) that can auto-trigger below 30 Energy. Sync with Kingsbane.

**Poisons (Assassination setup, raid):**
- Lethal: **Deadly Poison** + **Amplifying Poison** (lethal poison pairing per source).
- Non-lethal (raid): **Atrophic Poison** (damage-reduction debuff — see Role in Raid).
- Other non-lethal options used situationally in M+: **Crippling Poison** (slow), **Numbing Poison** (attack-speed slow).

## Rotation / Priority

> This is **logical priority order**, not a DPS benchmark or APL. Use it to judge whether a player is doing the right *kind* of thing, not to score exact throughput.

**Opener (conceptual):**
1. From stealth, apply **Garrote** (empowered) — on AoE, apply to multiple targets for pandemic value.
2. Establish **Rupture** with a 5+ CP finisher.
3. Pop **Deathmark** + **Kingsbane** (+ **Thistle Tea**) together for the burst window.
4. Use **Vanish** to refresh an empowered Garrote going into/within the Deathmark window.
5. Chain **Envenom** while maintaining bleeds.

**Single-target sustained priority:**
1. Keep **Garrote** up.
2. Keep **Rupture** up (5+ CP).
3. **Deathmark** when available.
4. **Kingsbane** on cooldown (synced to Deathmark every second use).
5. **Envenom** at 5+ CP (higher CP when the Darkest Night/Deathstalker buff is active); maintain the Envenom buff chain.
6. **Ambush** for CP when usable.
7. **Mutilate** to build CP.
8. Sync **Thistle Tea** with Kingsbane for Energy.

**AoE / multi-target priority:**
1. Apply **Garrote** to targets (twice on opener for pandemic/extra value).
2. **Crimson Tempest** to spread bleeds.
3. **Deathmark** when available.
4. **Kingsbane** on cooldown.
5. **Envenom** at 5+ CP.
6. **Fan of Knives** / **Crimson Tempest** based on current bleed coverage.
7. **Vanish** to reapply empowered Garrote on durable packs.

## Defensives

> The two most RaidLens-relevant sections. For each, "RaidLens usage" describes how to judge correct use during a lethal/heavy damage window.

- **Feint** — Active, costs ~35 Energy, ~6 second duration, very short cooldown. Reduces AoE/area damage taken by 40% (and, with the Elusiveness talent, reduces *all* damage by ~20% for the duration). This is the bread-and-butter Assassination defensive.
  - *RaidLens usage:* Feint should be active during any telegraphed raid-wide AoE or unavoidable area pulse. Because the cooldown is very short and the duration is only ~6s, the question is timing, not availability — flag a player who took a big chunk from a known AoE mechanic without Feint up at that timestamp. Repeated unmitigated AoE hits across pulls is a clear pattern.

- **Cloak of Shadows** — ~2-minute cooldown. Magic immunity: full immunity to magic damage/effects for the buff's duration (the first second is described as true magic immunity). Does not stop physical damage.
  - *RaidLens usage:* Strong answer to a specific, scheduled *magic* hit. If a player died to a known magic burst (or a magic debuff) and Cloak was off cooldown and unused, that's a flaggable miss. Do NOT flag for physical hits — Cloak does nothing against them.

- **Evasion** — ~10 second duration, +100% Dodge (effectively melee/physical avoidance). Does not help against magic.
  - *RaidLens usage:* Use against heavy *physical* / melee-range or dodgeable damage. Flag a death to a physical mechanic when Evasion was available and unused. Do NOT expect Evasion to help against magic damage.

- **Crimson Vial** — ~30 second cooldown. Self-heal over a short duration.
  - *RaidLens usage:* Short-cooldown sustain. A well-playing rogue uses it proactively when dropping below full during sustained raid damage. Hard to "miss" decisively, but a player who died at low HP with Crimson Vial off cooldown for a while can be noted.

- **Cheat Death (passive)** — Saves the player from a lethal hit once, leaving them at low HP with strong mitigation afterward; ~6-minute cooldown.
  - *RaidLens usage:* Passive, not actively pressed, so do not flag "unused." Useful as context: if a player survived a hit that would otherwise be lethal, Cheat Death may explain it. If Cheat Death was on cooldown (used in the last ~6 min), the player is more fragile to the next lethal spike.

- **Vanish** — ~2-minute cooldown. Primarily a rotational button here, but it also drops the rogue from combat/threat and can be an emergency "remove me from targeting" tool.
  - *RaidLens usage:* Not a primary damage-mitigation defensive; do not flag it as a missed defensive. Treat its absence in the rotation (failing to refresh empowered Garrote) as a throughput note, not a survivability one.

## Utility

- **Interrupt — Kick.** This is Assassination Rogue's interrupt. Spell ID **1766** (confirmed across multiple spell databases). Cooldown reported as **15 seconds** in Midnight rogue sources. It is a melee-range, instant interrupt that locks out the interrupted spell school.
  - **Is it the spec's only interrupt?** Kick is the only on-demand spell interrupt baseline to the spec. (Kidney Shot and Cheap Shot are stuns that *can* interrupt by virtue of stunning, but the dedicated, raid-usable interrupt is Kick.) For RaidLens interrupt tracking, **Kick is the interrupt** — a missed required interrupt on an Assassination Rogue means Kick was not used in time. Note its 15s cooldown when judging whether the rogue *could* have covered a given interrupt assignment.

- **Crowd control:**
  - **Kidney Shot** — finisher stun (scales with Combo Points).
  - **Blind** — disorient (single-target).
  - **Sap** — out-of-combat incapacitate.
  - **Cheap Shot** — stun from stealth (opener CC).

- **Dispels:** Assassination Rogue has **no group/raid dispel** (it cannot cleanse magic/curse/poison/disease from allies). **Cloak of Shadows** is effectively a *self* magic-effect clear/immunity, but it is not a targeted dispel of other players. Do not expect a rogue to dispel anyone.

- **Externals:** None (no defensive can be cast on another player).

- **Raid buffs/debuffs:** **Atrophic Poison** (enemy damage-reduction debuff) is the meaningful one. No Bloodlust/Heroism. No battle res. No raid-wide damage/stat buff aura.

- **Movement tools:** **Sprint** (movement speed), **Shadowstep** (teleport to target / gap close), **Vanish** (reposition + threat drop). **Shroud of Concealment** for group stealth skips.

- **Threat tool:** **Tricks of the Trade** (threat redirect / damage transfer to a target).

## Consumables and Enchants

> Sourced from Icy Veins consumables guide excerpt (12.0.5). Item IDs are NOT included — individual item pages could not be fetched/confirmed (403). Names only; verify in-game.

- **Flask:** Flask of the Shattered Sun (Critical Strike).
- **Potion:** Light's Potential (pair with major cooldowns / Bloodlust).
- **Food:** A primary-stat feast such as Silvermoon Parade; personal fallback Royal Roast.
- **Gems:** Powerful Eversong Diamond (one socket); secondary-stat gems Flawless Deadly Peridot (Crit) or Flawless Quick Garnet (Haste).
- **Weapon/gear enchants:** Cosmetic/utility ring/cloak enchant choice between Avoidance, Leech, or Speed (player preference; Speed is a noted raid-progression pick). The source did not give a single mandatory damage enchant per slot.
- **Stat priority:** Critical Strike ≥ Haste ≥ Mastery > Versatility.

## Notes and Known Gaps

- **Spell IDs:** Only **Kick = 1766** is included, confirmed via multiple independent spell databases (WoWDB, Wowpedia, classic DB). All other spell IDs (Deathmark, Kingsbane, Garrote, Rupture, Envenom, Mutilate, Feint, Cloak of Shadows, Evasion, Crimson Vial, Vanish, Crimson Tempest, Fan of Knives, Atrophic Poison, etc.) are **omitted** because live Wowhead spell pages returned HTTP 403 to fetching and no fetched source displayed the exact numeric IDs. Do not assume IDs from memory; re-verify on Wowhead before hardcoding into `boss-knowledge.js`/filters.
- **Kick cooldown (15s):** Sourced from Midnight rogue guide prose/search excerpts, not from a fetched in-game tooltip page. Treat as high-confidence but re-verify.
- **Kick interrupt lockout duration:** Not confirmed for 12.0.5 (older data referenced 3s school lockout). Flagged as unconfirmed.
- **Feint values (40% AoE / 6s / 35 Energy / Elusiveness ~20% all damage):** From Icy Veins prose; not cross-checked against a live tooltip page. Re-verify exact percentages.
- **Cloak of Shadows / Evasion / Crimson Vial / Cheat Death cooldowns:** Cloak ~2 min, Evasion ~10s duration/+100% dodge, Crimson Vial ~30s, Cheat Death ~6 min — all from guide prose/search excerpts, not tooltip pages. Re-verify durations.
- **Deathmark (2 min) / Kingsbane (60s) / Vanish (2 min):** From Icy Veins and Wowhead overview prose. Confident but tooltip not directly fetched.
- **Atrophic Poison numbers (30% chance / 3% damage reduction / 10s):** From a search excerpt; not confirmed on a fetched tooltip page. Re-verify exact magnitudes.
- **Talent import string / SimC APL:** Not available — no user-provided SimC profile and no string could be sourced. Rotation above is conceptual priority only.
- **Midnight AoE rework:** Sources state Indiscriminate Carnage and the old Shiv were removed/changed and Crimson Tempest became a bleed-spreading generator. The exact talent layout and any remaining Shiv functionality were not fully confirmed — flagged.
- **Consumable/gem/enchant item IDs:** Omitted (could not confirm). Names only.
- **Maintenance flag:** Re-verify ALL cooldowns, the Kick spell ID/cooldown, poison values, and consumable names after ANY 12.x patch. Wowhead spell pages were inaccessible to automated fetching during this writeup, so a manual pass against live tooltips is recommended before relying on numeric values for analysis.
