# Frost Death Knight — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/spell=47528/mind-freeze
> - https://www.wowhead.com/spell=51271/pillar-of-frost
> - https://www.wowhead.com/spell=48792/icebound-fortitude
> - https://www.wowhead.com/spell=48707/anti-magic-shell
> - https://www.wowhead.com/spell=51052/anti-magic-zone
> - https://www.wowhead.com/spell=61999/raise-ally
> - https://www.wowhead.com/spell=49998/death-strike
> - https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide
> - https://www.icy-veins.com/wow/frost-death-knight-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/frost-death-knight-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/frost-death-knight-pve-dps-gems-enchants-consumables
> - https://www.method.gg/guides/frost-death-knight/playstyle-and-rotation
>
> Spell IDs below are included ONLY where a fetched live spell page confirmed the exact ID. Anything unconfirmed is named without a number and listed in "Notes and Known Gaps."

## Overview

Frost Death Knight is a melee strength DPS specialization. It uses a dual-resource system: Runes (which passively recharge) are spent on rune-spenders such as Obliterate, which in turn generate Runic Power that is spent on Frost Strike. Two key procs drive the loop: Killing Machine (makes the next Obliterate/Frostscythe a guaranteed critical) and Rime (makes the next Howling Blast free and stronger).

Core gameplay loop: spend Killing Machine procs on Obliterate (single target) or Frostscythe (AoE), generate procs with Empower Rune Weapon to avoid casting Obliterate without Killing Machine, and dump Runic Power with Frost Strike (single target) or Glacial Advance (AoE). Major damage is funneled into cooldown windows built around Pillar of Frost.

Damage profile: strong, front-loaded burst single-target damage. Per the Icy Veins overview, the spec has "a burst window every 45 seconds and stronger ones every 1.5 minutes," with most of the damage arriving in the first ~15 seconds of each window. It target-swaps well because Razorice stacks build quickly.

Survivability: very high for a DPS spec — Icy Veins describes it as "arguably the best defensive DPS spec in the game," owing to multiple passive defensive talents plus active Death Strike self-healing.

Primary weakness: low mobility and limited raid utility. Its AoE/cleave is weak unless the player talents specifically into it, at a meaningful single-target cost.

## Role in Raid

- **Role:** Melee DPS. Not a healer or tank.
- **Bloodlust/Heroism equivalent:** No. Frost DK does NOT provide a Bloodlust-type haste effect.
- **Battle resurrection:** Yes. Raise Ally (spell ID 61999) is a combat resurrection that counts against the raid's in-combat resurrection limit. 10-minute cooldown (confirmed on the spell page).
- **Raid buff:** None meaningful. Icy Veins explicitly states the spec "lacks a proper raid buff." Do not expect a raid-wide stat buff from this spec.
- **Raid debuff:** No notable damage-amplification debuff brought uniquely by this spec.
- **Group defensive / external:** Anti-Magic Zone (spell ID 51052) — a ground-placed zone that reduces magic damage taken by allies standing in it (see Defensives). This is the spec's one true raid-cooldown contribution.
- **Mobility profile:** Poor. Tools are Death's Advance (movement speed + knockback immunity, spell ID 48265), Wraith Walk (spell ID 212552, channeled speed burst broken by other actions), and Death Grip (spell ID 311977, pulls a target to the DK — primarily a tool for repositioning adds, not personal movement). The spec has no gap-closer charge and no blink.

## Abilities Reference

Confirmed spell IDs are shown in parentheses. Abilities without an ID were not confirmed on a fetched spell page — treat the name as authoritative, not a number.

**Builders / spenders (core rotation):**
- Obliterate — main single-target rune spender; consumes Killing Machine. (ID not separately confirmed.)
- Frost Strike — main single-target Runic Power spender. (ID not confirmed.)
- Howling Blast — used on Rime procs; primary Frost disease applicator. (ID not confirmed.)
- Frostscythe — AoE rune spender, replaces Obliterate at 3+ targets. (ID not confirmed.)
- Glacial Advance — AoE Runic Power spender. (ID not confirmed.)
- Remorseless Winter — short-cooldown AoE damage/slow around the DK; amplified heavily while Pillar of Frost is active. (ID not confirmed.)

**Cooldowns:**
- Pillar of Frost (51271) — 45-second cooldown, 12-second duration. +30% Strength; also greatly empowers Remorseless Winter. This is the central DPS cooldown the rotation is built around.
- Empower Rune Weapon — off-GCD; instantly refills Runes/Runic Power and generates Killing Machine procs. (ID not confirmed.)
- Frostwyrm's Fury — burst cooldown (channeled frost breath). (ID not confirmed.)
- Breath of Sindragosa — channeled Runic-Power-draining sustained-damage cooldown used in certain builds. (ID not confirmed.)

**Key procs / passives:**
- Killing Machine — makes the next Obliterate/Frostscythe a guaranteed crit. (ID not confirmed.)
- Rime — makes the next Howling Blast free and stronger. (ID not confirmed.)
- Razorice — stacking frost vulnerability applied to the target, ramps quickly on swap. (ID not confirmed.)

## Rotation / Priority

This is a logical priority list, NOT a DPS benchmark. Exact ordering varies by talent build (notably "Riders of the Apocalypse" vs "Deathbringer"). Use it to judge whether a player is broadly playing the spec correctly, not to grade their parse.

**Opener (general shape, per Method):**
1. Obliterate / Raise Dead pre-pull setup
2. Empower Rune Weapon
3. Pillar of Frost
4. Frostwyrm's Fury (and Breath of Sindragosa in builds that use it)
5. Trinkets aligned to the burst window
   - Deathbringer build inserts Reaper's Mark into this sequence.

**Sustained single target (priority):**
1. Keep Pillar of Frost on cooldown.
2. Use Frostwyrm's Fury within Pillar windows.
3. Spend Killing Machine procs on Obliterate (do not overcap; up to ~2 stacks).
4. Cast Howling Blast only on Rime procs.
5. Spend Runic Power with Frost Strike to avoid capping (e.g. at 75+ RP, or while Pillar is active), and to maintain Razorice.
6. Manage Empower Rune Weapon charges to avoid casting Obliterate without Killing Machine.

**AoE (3+ targets):**
1. Use Frostscythe instead of Obliterate to spend Runes.
2. Use Glacial Advance instead of Frost Strike to spend Runic Power.
3. Maintain Remorseless Winter (empowered by Pillar of Frost).
4. Keep Gathering Storm / Razorice ramping where talented.

## Defensives

Each entry includes a RaidLens usage note: how to judge from a log whether the defensive was used appropriately during a damage window.

- **Icebound Fortitude (48792)** — 30% reduction to ALL damage for 8 seconds; also grants stun immunity. Cooldown: 2 minutes. The primary personal defensive cooldown.
  - RaidLens usage: For a lethal or near-lethal hit, check whether Icebound Fortitude was off cooldown (2 min) and unused in the seconds before death. An available-but-unused IBF on a magic or physical spike is the clearest "missed defensive" flag for this spec.

- **Anti-Magic Shell (48707)** — absorbs Magic damage (up to ~30% of max health) for 5 seconds, prevents magic debuffs during the absorb, and generates Runic Power from absorbed damage. Cooldown: 1 minute.
  - RaidLens usage: Because the cooldown is short (1 min), expect this used on essentially every significant incoming MAGIC hit. An unused AMS before death to a magic ability — especially a telegraphed one — is a strong flag. It does nothing against physical damage, so do not flag its absence on a physical hit.

- **Anti-Magic Zone (51052)** — ground-placed raid zone reducing MAGIC damage taken by allies inside it (~15% reduction per Icy Veins), 6-second duration. Cooldown: the spell page lists 4 minutes; Icy Veins describes a 6-minute base reduced to 3 minutes with the Assimilation talent. (See Known Gaps — treat the exact cooldown as uncertain.)
  - RaidLens usage: This is a raid cooldown, not a personal one. Judge it against scheduled raid-wide magic damage events: was AMZ dropped on the group for the magic burst, or wasted/unused? Only meaningful for magic damage windows.

- **Lichborne (49039)** — turns the DK Undead for 10 seconds, granting immunity to Charm, Fear, and Sleep and increased Leech. Cooldown not confirmed numerically (see Known Gaps).
  - RaidLens usage: Primarily an anti-CC / fear-immunity tool and a minor sustain (Leech) cooldown. Flag a missed Lichborne only around a known Charm/Fear/Sleep mechanic the player was caught by, not generic damage.

- **Death Strike (49998)** — Runic Power spender (~45 Runic Power) that heals the DK based on damage taken in the last 5 seconds. The spec's active self-sustain. Not a flat cooldown — it is spammable as long as Runic Power is available.
  - RaidLens usage: This is sustain, not a cooldown gate. Judge it by behavior during a damage window: did the player convert excess Runic Power into Death Strike healing while taking heavy damage, or keep dumping into Frost Strike and die with Runic Power banked? Repeated deaths with high Runic Power unspent on Death Strike is a flag.

- **Death Pact (talent)** — heals the DK for a large chunk of max health (~50%) but applies a healing-absorption debuff afterward, so net healing is smaller. A talent, not baseline.
  - RaidLens usage: Only flag if the player is confirmed to have it talented. If present, it is an emergency button — an unused Death Pact before a survivable-with-it death is a flag.

Passive defensive talents commonly taken (Will of the Necropolis, Veteran of the Third War, Gloom Ward, Null Magic) contribute to the spec's high baseline survivability but are passive — there is nothing for RaidLens to flag as "used/unused."

## Utility

- **Interrupt:** **Mind Freeze (47528)** is the spec's interrupt. Cooldown 15 seconds, range 15 yards. It is the ONLY raid-usable interrupt Frost DK has. (Note: some third-party text loosely calls Asphyxiate or Blinding Sleet "an interrupt" — Asphyxiate is a stun and Blinding Sleet is a disorient/CC; against raid bosses, which are immune to stun/disorient, Mind Freeze is the only ability that actually stops a cast. For RaidLens interrupt tracking, count Mind Freeze only.)

- **Crowd control:**
  - Blinding Sleet (207167) — cone disorient for 5 seconds, then a slow; trash/add control only, not usable on bosses.
  - Chains of Ice — strong single-target slow (root if talented into Ice Prison).
  - Asphyxiate (talent) — single-target stun; trash/add control, not usable on bosses.

- **Dispels:** Frost DK has no friendly magic/curse/poison/disease dispel. Anti-Magic Shell self-prevents incoming magic debuffs during its window but is a prevention, not a cleanse, and only affects the DK. Do not expect this spec to dispel allies.

- **Externals:** None that target another player's health/damage taken directly. Anti-Magic Zone is the only group-protecting tool (magic damage only). There is no single-target damage-reduction external like a Pain Suppression.

- **Battle resurrection:** Raise Ally (61999), 10-minute cooldown, counts against the raid combat-res limit.

- **Raid buffs/debuffs:** None of note (see Role in Raid).

- **Movement tools:** Death's Advance (48265, +35% speed and knockback/forced-movement immunity for 10 sec), Wraith Walk (212552, channeled speed burst broken on other actions), Death Grip (311977, pulls a target to the DK — repositions adds rather than moving the DK).

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 gems/enchants/consumables page (prose names only — no item IDs were confirmed on a live item page, so none are given):

- **Weapon runeforges (in place of normal weapon enchants):** Rune of the Fallen Crusader and Rune of Razorice are the standard choices depending on build; Rune of the Stoneskin Gargoyle appears in a Breath of Sindragosa dual-wield setup. Weapon oil: Thalassian Phoenix Oil.
- **Flask:** Flask of the Shattered Sun or Flask of the Magisters (choice depends on Mastery vs Crit weighting).
- **Potion:** Light's Potential (general use); Draught of Rampant Abandon listed as a higher-DPS option with a drawback.
- **Food:** Hearty Harandar Celebration / Harandar Celebration feast, or Silvermoon Parade feast.
- **Augment rune:** Void-Touched Augment Rune.
- **Gems:** Indecipherable Eversong Diamond (epic), with Flawless Deadly Amethyst or Flawless Masterful Garnet as rare options.
- **Gear enchants (per Icy Veins):** Empowered Rune of Avoidance (head), Amirdrassil's Grace (shoulders), Mark of the Worldsoul (chest), Forest Hunter's Armor Kit (legs), Lynx's Dexterity (boots), Eyes of the Eagle (rings).

These names reflect the current Icy Veins recommendation at time of writing and can shift with tuning; re-verify each patch. No item IDs are asserted.

## Notes and Known Gaps

- **Unconfirmed spell IDs:** Obliterate, Frost Strike, Howling Blast, Frostscythe, Glacial Advance, Remorseless Winter, Empower Rune Weapon, Frostwyrm's Fury, Breath of Sindragosa, Killing Machine, Rime, Razorice, Asphyxiate, Chains of Ice — names are authoritative but exact numeric IDs were NOT verified on a fetched live spell page and are intentionally omitted. Confirm on individual Wowhead spell pages before hardcoding any of these.
- **Confirmed spell IDs (verified on live Wowhead spell pages):** Mind Freeze 47528, Pillar of Frost 51271, Icebound Fortitude 48792, Anti-Magic Shell 48707, Anti-Magic Zone 51052, Raise Ally 61999, Death Strike 49998, Lichborne 49039, Death Grip 311977, Death's Advance 48265, Wraith Walk 212552, Blinding Sleet 207167. (Death Grip 311977 is the current-retail entry returned by search; ID matched the spell name but the page itself was not separately opened — re-verify if used.)
- **Anti-Magic Zone cooldown conflict:** The Wowhead spell page (51052) lists a 4-minute cooldown; Icy Veins describes a 6-minute base reduced to 3 minutes via the Assimilation talent. These do not agree. Treat AMZ cooldown as uncertain and re-verify before using it for "available/unused" judgments.
- **Lichborne cooldown:** Not confirmed numerically from a fetched page (search referenced an unverified 2-minute value and a talent that reduces it by 30 sec). Omitted; verify on the spell page.
- **Death Strike healing:** The fetched spell page (49998) surfaced the damage/cost data but did not clearly expose the heal value in the excerpt. The self-heal behavior is well-established for the ability and is described conceptually here; the exact heal formula was not pulled from a live source.
- **Death Strike Runic Power cost:** Spell page showed 45; Icy Veins prose said "35-45." Cost can be talent-modified — treat ~45 as baseline.
- **Wowhead guide pages via fetch:** The main Wowhead class-guide pages (overview/abilities/rotation) returned only navigation chrome through the fetch tool, so rotation/overview prose was sourced from Icy Veins and Method instead. Wowhead was used successfully for individual spell-page ID confirmation.
- **Consumables/enchants:** Names only, from Icy Veins prose; no item IDs confirmed. These are the most patch-volatile facts in this guide.
- **Maintenance flag:** Re-verify all of the above — especially ability IDs, AMZ/Lichborne cooldowns, and the entire Consumables/Enchants section — after ANY 12.x patch, as tuning and item names change between patches.
