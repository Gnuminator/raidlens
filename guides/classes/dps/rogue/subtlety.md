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

## Notes and Known Gaps

Unconfirmed facts (NOT included as numeric IDs above; verify before trusting):
- **Shuriken Storm** SpellID — not confirmed. A page initially associated with 212081 was verified live to be **Thief's Bargain (212081)**, NOT Shuriken Storm, so no ID is given for Shuriken Storm.
- **Coup de Grace** SpellID — referenced by current guides as a finisher but not confirmed on a live spell page.
- **Slice and Dice** and **Rupture** SpellIDs — not confirmed live.
- **Cheap Shot / Kidney Shot** SpellIDs — not confirmed live; treated as stuns/CC, not the reliable interrupt.
- **Thistle Tea** SpellID — not confirmed (an energy/utility cooldown referenced by guides; the page at 381637 was verified to be Atrophic Poison, not Thistle Tea).
- **Apex / clone talents (e.g. "Ancient Arts")** SpellIDs — not confirmed live; described conceptually only.
- **Atrophic Poison exact magnitude (~3%, ~3.6% with Master Poisoner) and which boss mechanics it affects** — sourced from Icy Veins prose / search summary, not from the spell tooltip; treat the percentage as approximate and version-dependent.
- **Consumable/enchant/gem item IDs** — intentionally omitted. Only names were available from Icy Veins; no item IDs were confirmed from a live source.
- The Wowhead JS-rendered class guide pages (overview/abilities/rotation) could not be parsed for prose; overview and rotation prose were drawn from Icy Veins (12.0.5) and confirmed individual Wowhead spell pages.

Maintenance flag: **Re-verify this guide after any 12.x patch.** Tuning values (Atrophic Poison %, cooldown durations, tier-set effects, talent IDs) change between patches even when SpellIDs do not. SpellIDs themselves do not change once assigned.
