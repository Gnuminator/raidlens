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
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
> - simc-guides/spell-ids-reference.json
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

**Talent procs (appear prominently in SimC damage breakdowns):**
- Frostreaper — a proc-based ability that appears as a meaningful share of total damage in SimC (~2.9-3.2%); talent-dependent. (ID not confirmed.)
- Hyperpyrexia — a proc or DoT effect appearing in SimC (~1.8-2.0%); appears talent-gated. (ID not confirmed.)
- Icy Death Torrent — appears in SimC single-target breakdowns (~2.5-2.7%); talent-gated proc. (ID not confirmed.)
- Rider's Champion — Riders of the Apocalypse hero tree exclusive; a pet/summon attack contributing ~12% of total damage in that build. (ID not confirmed.)

**Cooldowns:**
- Pillar of Frost (51271) — 45-second cooldown, 12-second duration. +30% Strength; also greatly empowers Remorseless Winter. This is the central DPS cooldown the rotation is built around.
- Empower Rune Weapon — off-GCD; instantly refills Runes/Runic Power and generates Killing Machine procs. (ID not confirmed.)
- Frostwyrm's Fury — burst cooldown (channeled frost breath). (ID not confirmed.)
- Breath of Sindragosa — channeled Runic-Power-draining sustained-damage cooldown used in certain builds. (ID not confirmed.)

**Key procs / passives:**
- Killing Machine — makes the next Obliterate/Frostscythe a guaranteed crit. (ID not confirmed.)
- Rime — makes the next Howling Blast free and stronger. (ID not confirmed.)
- Razorice — stacking frost vulnerability applied to the target, ramps quickly on swap. (ID not confirmed.)
- Frost Fever — disease applied by Howling Blast; contributes ~1.5-2.6% of damage as a DoT depending on build. (ID not confirmed.)

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

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Deathbringer** (base/no hero tree label in SimC) and **Riders of the Apocalypse**.

Metrics were not captured in the SimC source data (metrics field is empty for both variants). DPS/HPS figures are not available from this run.

### Talent import strings

**Deathbringer build:**
```
CsPAAAAAAAAAAAAAAAAAAAAAAMDwMjZMDY2mZmZmZZmZkZMmZYGGPgZGMzMzMDAAAAAAAAAjZbgBsAWGmQGLYmxMzAzAYYmBYmBD
```

**Riders of the Apocalypse build:**
```
CsPAAAAAAAAAAAAAAAAAAAAAAMDYmZMzMDY2mZmZmZxMjMjxMDzw4BMzgZmZmZAAAAAAAAAAsZ2MMwAzmGaYDzMmZGYGADAzMzAD
```

### Damage distribution (SimC, share of total damage)

Rows with a "%" in the percent column are real damage contributions. Parenthesised values include pet/proc share and are used where present. Consumables, buff uptimes, resource-cap stats, and rows without "%" are excluded.

**Deathbringer build:**

| Ability | % of total damage |
|---|---|
| Obliterate (incl. procs) | 37.0% |
| Auto Attack (MH) | 8.4% |
| Frost Strike | 6.3% |
| Howling Blast (incl. procs) | 5.9% |
| Frostreaper | 2.9% |
| Frost Fever | 2.6% |
| Icy Death Torrent | 2.5% |
| Hyperpyrexia | 1.8% |
| Remorseless Winter (Frozen Dominion) | 1.5% |

**Riders of the Apocalypse build:**

| Ability | % of total damage |
|---|---|
| Obliterate (incl. procs) | 40.8% |
| Rider's Champion (hero tree proc) | 12.3% |
| Auto Attack (MH) | 8.3% |
| Frost Strike | 7.4% |
| Howling Blast (incl. procs) | 5.0% |
| Frostreaper | 3.2% |
| Icy Death Torrent | 2.7% |
| Hyperpyrexia | 2.0% |
| Frost Fever | 1.5% |
| Remorseless Winter (Frozen Dominion) | 1.4% |

### Interpretation for RaidLens

In both builds, Obliterate dominates — it should account for 37-41% of a player's total damage. If a log shows Obliterate well below that share with filler abilities (Frost Strike, Howling Blast) disproportionately high, the player may be over-capping Runic Power or missing Killing Machine procs rather than spending them on Obliterate. In the Riders build, Rider's Champion accounts for roughly 12% of damage and is entirely passive from the hero tree; its absence from a log would indicate the player took a different hero tree. Frostreaper, Hyperpyrexia, and Icy Death Torrent are talent-gated procs contributing collectively ~7-8% in both builds — their presence or absence in a log reflects talent choices, not rotation errors.

### Action Priority List — Death Knight Frost

```
actions.precombat=snapshot_stats
# Evaluates a trinkets cooldown, divided by pillar of frost, empower rune weapon, or breath of sindragosa's cooldown. If it's value has no remainder return 1, else return 0.5.
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=trinket.1.has_use_buff&(talent.pillar_of_frost&!talent.breath_of_sindragosa&(trinket.1.cooldown.duration%%cooldown.pillar_of_frost.duration=0)|talent.breath_of_sindragosa&(cooldown.breath_of_sindragosa.duration%%trinket.1.cooldown.duration=0))
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=trinket.2.has_use_buff&(talent.pillar_of_frost&!talent.breath_of_sindragosa&(trinket.2.cooldown.duration%%cooldown.pillar_of_frost.duration=0)|talent.breath_of_sindragosa&(cooldown.breath_of_sindragosa.duration%%trinket.2.cooldown.duration=0))
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_cooldown&!trinket.1.is.improvised_seaforium_pacemaker&(trinket.1.has_use_buff|trinket.1.has_buff.strength|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit)
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_cooldown&!trinket.2.is.improvised_seaforium_pacemaker&(trinket.2.has_use_buff|trinket.2.has_buff.strength|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit)
actions.precombat+=/variable,name=trinket_1_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_duration,value=trinket.2.proc.any_dps.duration,
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/variable,name=trinket_1_manual,value=trinket.1.is.unyielding_netherprism
actions.precombat+=/variable,name=trinket_2_manual,value=trinket.2.is.unyielding_netherprism

# Executed every time the actor is available.
actions=auto_attack
# Choose Action list to run
actions+=/call_action_list,name=variables
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=high_prio_actions
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=racials
actions+=/run_action_list,name=aoe,if=active_enemies>=3
actions+=/run_action_list,name=single_target

# Aoe Rotation
actions.aoe=frostscythe,if=buff.killing_machine.react=2&active_enemies>=variable.frostscythe_priority
actions.aoe+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&buff.frostbane.react
actions.aoe+=/frostscythe,if=buff.killing_machine.react&rune>=3&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=buff.killing_machine.react=2|(buff.killing_machine.react&rune>=3)
actions.aoe+=/howling_blast,if=buff.rime.react&talent.frostbound_will|!dot.frost_fever.ticking
actions.aoe+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&talent.shattering_blade&active_enemies<5&!variable.rp_pooling&!talent.frostbane
actions.aoe+=/frostscythe,if=buff.killing_machine.react&!variable.rune_pooling&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=buff.killing_machine.react&!variable.rune_pooling
actions.aoe+=/howling_blast,if=buff.rime.react
actions.aoe+=/glacial_advance,if=!variable.rp_pooling
actions.aoe+=/frostscythe,if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)
actions.aoe+=/howling_blast,if=!buff.killing_machine.react&(talent.obliteration&buff.pillar_of_frost.up)

# Cooldowns
actions.cooldowns=remorseless_winter,if=variable.sending_cds&(active_enemies>1|talent.gathering_storm)|(buff.gathering_storm.stack=10&buff.remorseless_winter.remains<gcd.max)&fight_remains>10
actions.cooldowns+=/reapers_mark,target_if=first:debuff.reapers_mark_debuff.down,if=cooldown.pillar_of_frost.remains<=gcd.max&(!talent.breath_of_sindragosa|cooldown.breath_of_sindragosa.remains>20|cooldown.breath_of_sindragosa.remains<gcd.max&runic_power>=40)|fight_remains<20
actions.cooldowns+=/pillar_of_frost,if=variable.sending_cds&(!hero_tree.deathbringer|cooldown.reapers_mark.remains>10)&(!talent.breath_of_sindragosa|cooldown.breath_of_sindragosa.remains>20|cooldown.breath_of_sindragosa.up&runic_power>=60)|fight_remains<20
actions.cooldowns+=/breath_of_sindragosa,use_off_gcd=1,if=!buff.breath_of_sindragosa.up&(buff.pillar_of_frost.up|fight_remains<20)
actions.cooldowns+=/frostwyrms_fury,if=((talent.apocalypse_now|talent.chosen_of_frostbrood)&!buff.chosen_of_frostbrood_fwf.up)&variable.sending_cds&(!talent.breath_of_sindragosa&buff.pillar_of_frost.up|buff.breath_of_sindragosa.up)&!debuff.reapers_mark_debuff.up&!buff.exterminate.up|(fight_remains<20&!buff.chosen_of_frostbrood_haste.up)
actions.cooldowns+=/frostwyrms_fury,if=buff.chosen_of_frostbrood_fwf.up&variable.fwf_buffs
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&active_enemies=1&(talent.pillar_of_frost&buff.pillar_of_frost.up&!talent.obliteration|!talent.pillar_of_frost)&(!raid_event.adds.exists|raid_event.adds.in>cooldown.frostwyrms_fury.duration+raid_event.adds.duration)&variable.fwf_buffs|fight_remains<3
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&active_enemies>=2&(talent.pillar_of_frost&buff.pillar_of_frost.up|raid_event.adds.exists&raid_event.adds.up&raid_event.adds.in<cooldown.pillar_of_frost.remains-raid_event.adds.in-raid_event.adds.duration)&variable.fwf_buffs
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&talent.obliteration&(talent.pillar_of_frost&buff.pillar_of_frost.up&!main_hand.2h|!buff.pillar_of_frost.up&main_hand.2h&cooldown.pillar_of_frost.remains|!talent.pillar_of_frost)&variable.fwf_buffs&(!raid_event.adds.exists|raid_event.adds.in>cooldown.frostwyrms_fury.duration+raid_event.adds.duration)
actions.cooldowns+=/raise_dead,use_off_gcd=1
actions.cooldowns+=/empower_rune_weapon,if=(rune<2|!buff.killing_machine.react)&runic_power<35+(talent.icy_onslaught*buff.icy_onslaught.stack*5)
actions.cooldowns+=/empower_rune_weapon,if=cooldown.empower_rune_weapon.full_recharge_time<=6&buff.killing_machine.react<2-(talent.killing_streak)
actions.cooldowns+=/empower_rune_weapon,if=talent.breath_of_sindragosa&(cooldown.empower_rune_weapon.full_recharge_time-30<=cooldown.breath_of_sindragosa.remains+6)&(cooldown.breath_of_sindragosa.remains<=6)&(buff.killing_machine.react<2-(talent.killing_streak))
actions.cooldowns+=/empower_rune_weapon,if=talent.obliteration&buff.pillar_of_frost.remains>4*gcd.max&rune<=2&buff.killing_machine.react=1

# High Priority Actions
actions.high_prio_actions=mind_freeze,if=target.debuff.casting.react
# Use <a href='https://www.wowhead.com/spell=10060/power-infusion'>Power Infusion</a> while <a href='https://www.wowhead.com/spell=51271/pillar-of-frost'>Pillar of Frost</a> is up
actions.high_prio_actions+=/invoke_external_buff,name=power_infusion,if=variable.cooldown_check
actions.high_prio_actions+=/antimagic_shell,if=runic_power.deficit>40&death_knight.first_ams_cast<time

# Obliteration Active Rotation Racial Abilities
actions.racials=blood_fury,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/berserking,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/arcane_pulse,if=variable.cooldown_check
actions.racials+=/lights_judgment,if=variable.cooldown_check
actions.racials+=/ancestral_call,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/fireblood,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/bag_of_tricks,if=talent.obliteration&!buff.pillar_of_frost.up&buff.unholy_strength.up
actions.racials+=/bag_of_tricks,if=!talent.obliteration&buff.pillar_of_frost.up&(buff.unholy_strength.up&buff.unholy_strength.remains<gcd*3|buff.pillar_of_frost.remains<gcd*3)

# Single Target Rotation
actions.single_target=obliterate,if=buff.killing_machine.react=2|(buff.killing_machine.react&rune>=3)
actions.single_target+=/howling_blast,if=buff.rime.react&talent.frostbound_will
actions.single_target+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&talent.shattering_blade&!variable.rp_pooling
actions.single_target+=/howling_blast,if=buff.rime.react
actions.single_target+=/frost_strike,if=!talent.shattering_blade&!variable.rp_pooling&runic_power.deficit<30
actions.single_target+=/obliterate,if=buff.killing_machine.react&!variable.rune_pooling
actions.single_target+=/frost_strike,if=!variable.rp_pooling
actions.single_target+=/obliterate,if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)
actions.single_target+=/howling_blast,if=!buff.killing_machine.react&(talent.obliteration&buff.pillar_of_frost.up)

# Trinkets Trinkets The trinket with the highest estimated value, will be used first and paired with Pillar of Frost.
actions.trinkets=potion,use_off_gcd=1,if=variable.cooldown_check|fight_remains<25
actions.trinkets+=/use_item,slot=trinket1,if=!trinket.1.cast_time>0&variable.trinket_1_buffs&!variable.trinket_1_manual&buff.pillar_of_frost.remains&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)
actions.trinkets+=/use_item,slot=trinket2,if=!trinket.2.cast_time>0&variable.trinket_2_buffs&!variable.trinket_2_manual&buff.pillar_of_frost.remains&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)
# Channeled buff trinkets will be used before cooldowns
actions.trinkets+=/use_item,slot=trinket1,if=trinket.1.cast_time>0&(!hero_tree.rider_of_the_apocalypse|cooldown.frostwyrms_fury.remains)&variable.trinket_1_buffs&!variable.trinket_1_manual&cooldown.pillar_of_frost.remains<trinket.1.cast_time&(!talent.breath_of_sindragosa|variable.breath_of_sindragosa_check)&variable.sending_cds&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)|variable.trinket_1_duration>=fight_remains
actions.trinkets+=/use_item,slot=trinket2,if=trinket.2.cast_time>0&(!hero_tree.rider_of_the_apocalypse|cooldown.frostwyrms_fury.remains)&variable.trinket_2_buffs&!variable.trinket_2_manual&cooldown.pillar_of_frost.remains<trinket.2.cast_time&(!talent.breath_of_sindragosa|variable.breath_of_sindragosa_check)&variable.sending_cds&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)|variable.trinket_2_duration>=fight_remains
# If only one on use trinket provides a buff, use the other on cooldown. Or if neither trinket provides a buff, use both on cooldown.
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|(!trinket.2.has_cooldown|trinket.2.cooldown.remains))&((trinket.1.cast_time>0&(!talent.breath_of_sindragosa|!buff.breath_of_sindragosa.up)&!buff.pillar_of_frost.up|!trinket.1.cast_time>0)&(!variable.trinket_2_buffs|cooldown.pillar_of_frost.remains>20)|!talent.pillar_of_frost)|fight_remains<15
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|(!trinket.1.has_cooldown|trinket.1.cooldown.remains))&((trinket.2.cast_time>0&(!talent.breath_of_sindragosa|!buff.breath_of_sindragosa.up)&!buff.pillar_of_frost.up|!trinket.2.cast_time>0)&(!variable.trinket_1_buffs|cooldown.pillar_of_frost.remains>20)|!talent.pillar_of_frost)|fight_remains<15
actions.trinkets+=/use_item,slot=main_hand,if=buff.pillar_of_frost.up|(buff.breath_of_sindragosa.up&cooldown.pillar_of_frost.remains)|(variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.1.cooldown.remains<cooldown.pillar_of_frost.remains|trinket.2.cooldown.remains<cooldown.pillar_of_frost.remains)&cooldown.pillar_of_frost.remains>20)|fight_remains<15

# Variables
actions.variables=variable,name=st_planning,op=setif,value=1,value_else=0,condition=active_enemies=1&(!raid_event.adds.exists|!raid_event.adds.in|raid_event.adds.in>15)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&(!raid_event.adds.exists|!raid_event.pull.exists&raid_event.adds.remains>5|raid_event.pull.exists&raid_event.adds.in>20)
actions.variables+=/variable,name=sending_cds,value=(variable.st_planning|variable.adds_remain)
actions.variables+=/variable,name=cooldown_check,value=(talent.pillar_of_frost&buff.pillar_of_frost.up)|!talent.pillar_of_frost|fight_remains<20
actions.variables+=/variable,name=fwf_buffs,value=(buff.pillar_of_frost.remains<gcd.max|(buff.unholy_strength.up&buff.unholy_strength.remains<gcd.max)|(talent.bonegrinder.rank=2&buff.bonegrinder_frost.up&buff.bonegrinder_frost.remains<gcd.max))&(active_enemies>1|debuff.razorice.stack=5|talent.shattering_blade)
actions.variables+=/variable,name=rune_pooling,value=hero_tree.deathbringer&cooldown.reapers_mark.remains<6&rune<3&variable.sending_cds
actions.variables+=/variable,name=rp_pooling,value=talent.breath_of_sindragosa&cooldown.breath_of_sindragosa.remains<4*gcd.max&runic_power<60+(35+5*buff.icy_onslaught.up)-(10*rune)&variable.sending_cds
# Frostscythe is equal at 3 targets
actions.variables+=/variable,name=frostscythe_priority,value=3
actions.variables+=/variable,name=breath_of_sindragosa_check,value=!talent.breath_of_sindragosa|(cooldown.breath_of_sindragosa.remains>20|(cooldown.breath_of_sindragosa.remains<1*gcd.max&runic_power>=(60-20*hero_tree.deathbringer)))
```

### Action Priority List — Death Knight Frost Rider

```
actions.precombat=snapshot_stats
# Evaluates a trinkets cooldown, divided by pillar of frost, empower rune weapon, or breath of sindragosa's cooldown. If it's value has no remainder return 1, else return 0.5.
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=trinket.1.has_use_buff&(talent.pillar_of_frost&!talent.breath_of_sindragosa&(trinket.1.cooldown.duration%%cooldown.pillar_of_frost.duration=0)|talent.breath_of_sindragosa&(cooldown.breath_of_sindragosa.duration%%trinket.1.cooldown.duration=0))
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=trinket.2.has_use_buff&(talent.pillar_of_frost&!talent.breath_of_sindragosa&(trinket.2.cooldown.duration%%cooldown.pillar_of_frost.duration=0)|talent.breath_of_sindragosa&(cooldown.breath_of_sindragosa.duration%%trinket.2.cooldown.duration=0))
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_cooldown&!trinket.1.is.improvised_seaforium_pacemaker&(trinket.1.has_use_buff|trinket.1.has_buff.strength|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit)
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_cooldown&!trinket.2.is.improvised_seaforium_pacemaker&(trinket.2.has_use_buff|trinket.2.has_buff.strength|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit)
actions.precombat+=/variable,name=trinket_1_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_duration,value=trinket.2.proc.any_dps.duration,
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/variable,name=trinket_1_manual,value=trinket.1.is.unyielding_netherprism
actions.precombat+=/variable,name=trinket_2_manual,value=trinket.2.is.unyielding_netherprism

# Executed every time the actor is available.
actions=auto_attack
# Choose Action list to run
actions+=/call_action_list,name=variables
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=high_prio_actions
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=racials
actions+=/run_action_list,name=aoe,if=active_enemies>=3
actions+=/run_action_list,name=single_target

# Aoe Rotation
actions.aoe=frostscythe,if=buff.killing_machine.react=2&active_enemies>=variable.frostscythe_priority
actions.aoe+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&buff.frostbane.react
actions.aoe+=/frostscythe,if=buff.killing_machine.react&rune>=3&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=buff.killing_machine.react=2|(buff.killing_machine.react&rune>=3)
actions.aoe+=/howling_blast,if=buff.rime.react&talent.frostbound_will|!dot.frost_fever.ticking
actions.aoe+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&talent.shattering_blade&active_enemies<5&!variable.rp_pooling&!talent.frostbane
actions.aoe+=/frostscythe,if=buff.killing_machine.react&!variable.rune_pooling&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=buff.killing_machine.react&!variable.rune_pooling
actions.aoe+=/howling_blast,if=buff.rime.react
actions.aoe+=/glacial_advance,if=!variable.rp_pooling
actions.aoe+=/frostscythe,if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)&active_enemies>=variable.frostscythe_priority
actions.aoe+=/obliterate,target_if=max:(hero_tree.rider_of_the_apocalypse&debuff.chains_of_ice_trollbane_slow.react),if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)
actions.aoe+=/howling_blast,if=!buff.killing_machine.react&(talent.obliteration&buff.pillar_of_frost.up)

# Cooldowns
actions.cooldowns=remorseless_winter,if=variable.sending_cds&(active_enemies>1|talent.gathering_storm)|(buff.gathering_storm.stack=10&buff.remorseless_winter.remains<gcd.max)&fight_remains>10
actions.cooldowns+=/reapers_mark,target_if=first:debuff.reapers_mark_debuff.down,if=cooldown.pillar_of_frost.remains<=gcd.max&(!talent.breath_of_sindragosa|cooldown.breath_of_sindragosa.remains>20|cooldown.breath_of_sindragosa.remains<gcd.max&runic_power>=40)|fight_remains<20
actions.cooldowns+=/pillar_of_frost,if=variable.sending_cds&(!hero_tree.deathbringer|cooldown.reapers_mark.remains>10)&(!talent.breath_of_sindragosa|cooldown.breath_of_sindragosa.remains>20|cooldown.breath_of_sindragosa.up&runic_power>=60)|fight_remains<20
actions.cooldowns+=/breath_of_sindragosa,use_off_gcd=1,if=!buff.breath_of_sindragosa.up&(buff.pillar_of_frost.up|fight_remains<20)
actions.cooldowns+=/frostwyrms_fury,if=((talent.apocalypse_now|talent.chosen_of_frostbrood)&!buff.chosen_of_frostbrood_fwf.up)&variable.sending_cds&(!talent.breath_of_sindragosa&buff.pillar_of_frost.up|buff.breath_of_sindragosa.up)&!debuff.reapers_mark_debuff.up&!buff.exterminate.up|(fight_remains<20&!buff.chosen_of_frostbrood_haste.up)
actions.cooldowns+=/frostwyrms_fury,if=buff.chosen_of_frostbrood_fwf.up&variable.fwf_buffs
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&active_enemies=1&(talent.pillar_of_frost&buff.pillar_of_frost.up&!talent.obliteration|!talent.pillar_of_frost)&(!raid_event.adds.exists|raid_event.adds.in>cooldown.frostwyrms_fury.duration+raid_event.adds.duration)&variable.fwf_buffs|fight_remains<3
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&active_enemies>=2&(talent.pillar_of_frost&buff.pillar_of_frost.up|raid_event.adds.exists&raid_event.adds.up&raid_event.adds.in<cooldown.pillar_of_frost.remains-raid_event.adds.in-raid_event.adds.duration)&variable.fwf_buffs
actions.cooldowns+=/frostwyrms_fury,if=!(talent.apocalypse_now|talent.chosen_of_frostbrood)&talent.obliteration&(talent.pillar_of_frost&buff.pillar_of_frost.up&!main_hand.2h|!buff.pillar_of_frost.up&main_hand.2h&cooldown.pillar_of_frost.remains|!talent.pillar_of_frost)&variable.fwf_buffs&(!raid_event.adds.exists|raid_event.adds.in>cooldown.frostwyrms_fury.duration+raid_event.adds.duration)
actions.cooldowns+=/raise_dead,use_off_gcd=1
actions.cooldowns+=/empower_rune_weapon,if=(rune<2|!buff.killing_machine.react)&runic_power<35+(talent.icy_onslaught*buff.icy_onslaught.stack*5)
actions.cooldowns+=/empower_rune_weapon,if=cooldown.empower_rune_weapon.full_recharge_time<=6&buff.killing_machine.react<2-(talent.killing_streak)
actions.cooldowns+=/empower_rune_weapon,if=talent.breath_of_sindragosa&(cooldown.empower_rune_weapon.full_recharge_time-30<=cooldown.breath_of_sindragosa.remains+6)&(cooldown.breath_of_sindragosa.remains<=6)&(buff.killing_machine.react<2-(talent.killing_streak))
actions.cooldowns+=/empower_rune_weapon,if=talent.obliteration&buff.pillar_of_frost.remains>4*gcd.max&rune<=2&buff.killing_machine.react=1

# High Priority Actions
actions.high_prio_actions=mind_freeze,if=target.debuff.casting.react
# Use <a href='https://www.wowhead.com/spell=10060/power-infusion'>Power Infusion</a> while <a href='https://www.wowhead.com/spell=51271/pillar-of-frost'>Pillar of Frost</a> is up
actions.high_prio_actions+=/invoke_external_buff,name=power_infusion,if=variable.cooldown_check
actions.high_prio_actions+=/antimagic_shell,if=runic_power.deficit>40&death_knight.first_ams_cast<time

# Obliteration Active Rotation Racial Abilities
actions.racials=blood_fury,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/berserking,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/arcane_pulse,if=variable.cooldown_check
actions.racials+=/lights_judgment,if=variable.cooldown_check
actions.racials+=/ancestral_call,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/fireblood,use_off_gcd=1,if=variable.cooldown_check
actions.racials+=/bag_of_tricks,if=talent.obliteration&!buff.pillar_of_frost.up&buff.unholy_strength.up
actions.racials+=/bag_of_tricks,if=!talent.obliteration&buff.pillar_of_frost.up&(buff.unholy_strength.up&buff.unholy_strength.remains<gcd*3|buff.pillar_of_frost.remains<gcd*3)

# Single Target Rotation
actions.single_target=obliterate,if=buff.killing_machine.react=2|(buff.killing_machine.react&rune>=3)
actions.single_target+=/howling_blast,if=buff.rime.react&talent.frostbound_will
actions.single_target+=/frost_strike,target_if=max:(talent.shattering_blade&debuff.razorice.react=5),if=debuff.razorice.react=5&talent.shattering_blade&!variable.rp_pooling
actions.single_target+=/howling_blast,if=buff.rime.react
actions.single_target+=/frost_strike,if=!talent.shattering_blade&!variable.rp_pooling&runic_power.deficit<30
actions.single_target+=/obliterate,if=buff.killing_machine.react&!variable.rune_pooling
actions.single_target+=/frost_strike,if=!variable.rp_pooling
actions.single_target+=/obliterate,if=!variable.rune_pooling&!(talent.obliteration&buff.pillar_of_frost.up)
actions.single_target+=/howling_blast,if=!buff.killing_machine.react&(talent.obliteration&buff.pillar_of_frost.up)

# Trinkets Trinkets The trinket with the highest estimated value, will be used first and paired with Pillar of Frost.
actions.trinkets=potion,use_off_gcd=1,if=variable.cooldown_check|fight_remains<25
actions.trinkets+=/use_item,slot=trinket1,if=!trinket.1.cast_time>0&variable.trinket_1_buffs&!variable.trinket_1_manual&buff.pillar_of_frost.remains&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)
actions.trinkets+=/use_item,slot=trinket2,if=!trinket.2.cast_time>0&variable.trinket_2_buffs&!variable.trinket_2_manual&buff.pillar_of_frost.remains&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)
# Channeled buff trinkets will be used before cooldowns
actions.trinkets+=/use_item,slot=trinket1,if=trinket.1.cast_time>0&(!hero_tree.rider_of_the_apocalypse|cooldown.frostwyrms_fury.remains)&variable.trinket_1_buffs&!variable.trinket_1_manual&cooldown.pillar_of_frost.remains<trinket.1.cast_time&(!talent.breath_of_sindragosa|variable.breath_of_sindragosa_check)&variable.sending_cds&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)|variable.trinket_1_duration>=fight_remains
actions.trinkets+=/use_item,slot=trinket2,if=trinket.2.cast_time>0&(!hero_tree.rider_of_the_apocalypse|cooldown.frostwyrms_fury.remains)&variable.trinket_2_buffs&!variable.trinket_2_manual&cooldown.pillar_of_frost.remains<trinket.2.cast_time&(!talent.breath_of_sindragosa|variable.breath_of_sindragosa_check)&variable.sending_cds&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)|variable.trinket_2_duration>=fight_remains
# If only one on use trinket provides a buff, use the other on cooldown. Or if neither trinket provides a buff, use both on cooldown.
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|(!trinket.2.has_cooldown|trinket.2.cooldown.remains))&((trinket.1.cast_time>0&(!talent.breath_of_sindragosa|!buff.breath_of_sindragosa.up)&!buff.pillar_of_frost.up|!trinket.1.cast_time>0)&(!variable.trinket_2_buffs|cooldown.pillar_of_frost.remains>20)|!talent.pillar_of_frost)|fight_remains<15
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|(!trinket.1.has_cooldown|trinket.1.cooldown.remains))&((trinket.2.cast_time>0&(!talent.breath_of_sindragosa|!buff.breath_of_sindragosa.up)&!buff.pillar_of_frost.up|!trinket.2.cast_time>0)&(!variable.trinket_1_buffs|cooldown.pillar_of_frost.remains>20)|!talent.pillar_of_frost)|fight_remains<15
actions.trinkets+=/use_item,slot=main_hand,if=buff.pillar_of_frost.up|(buff.breath_of_sindragosa.up&cooldown.pillar_of_frost.remains)|(variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.1.cooldown.remains<cooldown.pillar_of_frost.remains|trinket.2.cooldown.remains<cooldown.pillar_of_frost.remains)&cooldown.pillar_of_frost.remains>20)|fight_remains<15

# Variables
actions.variables=variable,name=st_planning,op=setif,value=1,value_else=0,condition=active_enemies=1&(!raid_event.adds.exists|!raid_event.adds.in|raid_event.adds.in>15)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&(!raid_event.adds.exists|!raid_event.pull.exists&raid_event.adds.remains>5|raid_event.pull.exists&raid_event.adds.in>20)
actions.variables+=/variable,name=sending_cds,value=(variable.st_planning|variable.adds_remain)
actions.variables+=/variable,name=cooldown_check,value=(talent.pillar_of_frost&buff.pillar_of_frost.up)|!talent.pillar_of_frost|fight_remains<20
actions.variables+=/variable,name=fwf_buffs,value=(buff.pillar_of_frost.remains<gcd.max|(buff.unholy_strength.up&buff.unholy_strength.remains<gcd.max)|(talent.bonegrinder.rank=2&buff.bonegrinder_frost.up&buff.bonegrinder_frost.remains<gcd.max))&(active_enemies>1|debuff.razorice.stack=5|talent.shattering_blade)
actions.variables+=/variable,name=rune_pooling,value=hero_tree.deathbringer&cooldown.reapers_mark.remains<6&rune<3&variable.sending_cds
actions.variables+=/variable,name=rp_pooling,value=talent.breath_of_sindragosa&cooldown.breath_of_sindragosa.remains<4*gcd.max&runic_power<60+(35+5*buff.icy_onslaught.up)-(10*rune)&variable.sending_cds
# Frostscythe is equal at 3 targets
actions.variables+=/variable,name=frostscythe_priority,value=3
actions.variables+=/variable,name=breath_of_sindragosa_check,value=!talent.breath_of_sindragosa|(cooldown.breath_of_sindragosa.remains>20|(cooldown.breath_of_sindragosa.remains<1*gcd.max&runic_power>=(60-20*hero_tree.deathbringer)))
```

## Confirmed Spell IDs (SimulationCraft HTML)

IDs sourced from simc-guides/spell-ids-reference.json (SimulationCraft Midnight 12.0.5 HTML report). Exact key match only — no fuzzy matching was performed.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Obliterate | 445507, 49020, 325461, 1264084 (multiple: base cast + variants/sub-spells) | physical (mixed) | cast |
| Frost Strike | 49143, 325464 (multiple: base cast + variants/sub-spells) | frost | cast |
| Howling Blast | 49184 | frost | cast |
| Glacial Advance | 195975 | frost | cast |
| Remorseless Winter | 1233152, 196771 (multiple: base cast + variants/sub-spells) | frost | cast |
| Frostreaper | 1233619 | shadowfrost | cast |
| Hyperpyrexia | 458169 | frost | cast |
| Icy Death Torrent | 439539 | frost | cast |
| Rider's Champion | 444005 | physical | other |
| Pillar of Frost | 51271 | physical | cast |
| Empower Rune Weapon | 47568 | shadowfrost | cast |
| Frostwyrm's Fury | 279303, 279302, 1265384 (multiple: base cast + variants/sub-spells) | frost | cast |
| Breath of Sindragosa | 1249658, 155166 (multiple: base cast + variants/sub-spells) | frost | cast |
| Frost Fever | 55095 | frost | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Spell IDs — damage/rotational abilities:** Damage and rotational spell IDs are now confirmed from the SimC HTML reference (simc-guides/spell-ids-reference.json) for matched abilities: Obliterate, Frost Strike, Howling Blast, Glacial Advance, Remorseless Winter, Frostreaper, Hyperpyrexia, Icy Death Torrent, Rider's Champion, Pillar of Frost, Empower Rune Weapon, Frostwyrm's Fury, Breath of Sindragosa, Frost Fever. See "Confirmed Spell IDs (SimulationCraft HTML)" section above. Defensive, interrupt, and utility IDs (Mind Freeze, Icebound Fortitude, Anti-Magic Shell, Anti-Magic Zone, Raise Ally, Death Strike, Lichborne, etc.) are still sourced from live Wowhead spell pages only.
- **Unconfirmed spell IDs (no SimC match, no Wowhead page confirmed):** Frostscythe, Killing Machine, Rime, Razorice, Asphyxiate, Chains of Ice — names are authoritative but exact numeric IDs were NOT found in the SimC reference and were NOT verified on a fetched live spell page. Confirm on individual Wowhead spell pages before hardcoding any of these.
- **Confirmed spell IDs (verified on live Wowhead spell pages):** Mind Freeze 47528, Pillar of Frost 51271, Icebound Fortitude 48792, Anti-Magic Shell 48707, Anti-Magic Zone 51052, Raise Ally 61999, Death Strike 49998, Lichborne 49039, Death Grip 311977, Death's Advance 48265, Wraith Walk 212552, Blinding Sleet 207167. (Death Grip 311977 is the current-retail entry returned by search; ID matched the spell name but the page itself was not separately opened — re-verify if used.)
- **Anti-Magic Zone cooldown conflict:** The Wowhead spell page (51052) lists a 4-minute cooldown; Icy Veins describes a 6-minute base reduced to 3 minutes via the Assimilation talent. These do not agree. Treat AMZ cooldown as uncertain and re-verify before using it for "available/unused" judgments.
- **Lichborne cooldown:** Not confirmed numerically from a fetched page (search referenced an unverified 2-minute value and a talent that reduces it by 30 sec). Omitted; verify on the spell page.
- **Death Strike healing:** The fetched spell page (49998) surfaced the damage/cost data but did not clearly expose the heal value in the excerpt. The self-heal behavior is well-established for the ability and is described conceptually here; the exact heal formula was not pulled from a live source.
- **Death Strike Runic Power cost:** Spell page showed 45; Icy Veins prose said "35-45." Cost can be talent-modified — treat ~45 as baseline.
- **Wowhead guide pages via fetch:** The main Wowhead class-guide pages (overview/abilities/rotation) returned only navigation chrome through the fetch tool, so rotation/overview prose was sourced from Icy Veins and Method instead. Wowhead was used successfully for individual spell-page ID confirmation.
- **Consumables/enchants:** Names only, from Icy Veins prose; no item IDs confirmed. These are the most patch-volatile facts in this guide.
- **SimC APL now embedded (extracted from Trivial.txt).** Two APL builds are included: Death Knight Frost (Deathbringer) and Death Knight Frost Rider (Riders of the Apocalypse). DPS/HPS metrics were not captured in this SimC run (metrics field empty).
- **Frostreaper, Hyperpyrexia, Icy Death Torrent spell IDs:** These abilities appear in the SimC damage table (~7-8% combined) and their IDs are now confirmed from the SimC HTML reference (Frostreaper 1233619, Hyperpyrexia 458169, Icy Death Torrent 439539). They have not been separately verified on a Wowhead spell page; re-verify if using for production filtering.
- **Maintenance flag:** Re-verify all of the above — especially ability IDs, AMZ/Lichborne cooldowns, and the entire Consumables/Enchants section — after ANY 12.x patch, as tuning and item names change between patches.
