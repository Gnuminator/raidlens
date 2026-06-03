# Unholy Death Knight — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents
> - https://www.wowhead.com/spell=47528/mind-freeze
> - https://www.wowhead.com/spell=48707/anti-magic-shell
> - https://www.wowhead.com/spell=48792/icebound-fortitude
> - https://www.wowhead.com/spell=51052/anti-magic-zone
> - https://www.wowhead.com/spell=49998/death-strike
> - https://www.wowhead.com/spell=49206/summon-gargoyle
> - https://www.wowhead.com/spell=49576/death-grip
> - https://www.wowhead.com/spell=49039/lichborne
> - https://www.wowhead.com/spell=275699/apocalypse
> - https://www.wowhead.com/spell=42650/army-of-the-dead
> - https://www.wowhead.com/spell=63560/dark-transformation
> - SimulationCraft Midnight 12.0.5 (simc-guides/Death_Knight_Unholy_Rider.json, Death_Knight_Unholy_Sanlayn.json)
> - APL from simc-guides/apl/Death_Knight_Unholy_Rider.apl.txt and Death_Knight_Unholy_Sanlayn.apl.txt (Trivial.txt origin)
> - spell-ids-reference.json (simc-guides/)
>
> The Wowhead guide *guide* pages (abilities / rotation hubs) render their tables client-side and returned no body text to the fetcher; conceptual rotation/ability detail below is sourced from the Icy Veins spec page plus individual confirmed Wowhead spell pages. See "Notes and Known Gaps."

## Overview

Unholy Death Knight is a melee DPS specialization built around **disease application, a permanent undead pet (Ghoul/Risen Ghoul), and Festering Wound management**. The core gameplay loop is:

1. Apply diseases to the target (via Outbreak; on this spec the disease is referred to as the plague/"Dread Plague" effect).
2. Build **Festering Wounds** on the target with Festering Strike.
3. **Burst (pop) those Wounds** with Scourge Strike (or its talented replacement Clawing Shadows), which deals damage and feeds the pet.
4. Spend Runic Power on **Death Coil** (single target) or **Epidemic** (AoE) to deal damage and empower the pet.
5. Layer cooldowns — **Apocalypse** (mass-bursts Wounds and summons transient ghouls), **Dark Transformation** (empowers the permanent pet), **Army of the Dead** and/or **Summon Gargoyle** — for burst windows.

Damage profile: strong, ramping sustained cleave and AoE (disease spread + Epidemic + Wound bursting scales well into multiple targets), with burst concentrated in the Apocalypse / Army / Dark Transformation window. It is a "ramp" spec — it needs a few seconds and a built target to reach full throughput.

Primary weakness: **low mobility and a ramp-up requirement.** Unholy has limited gap-closers and movement tools relative to other melee, and target-swapping resets disease/Wound state, so frequent forced movement or rapid add-swaps hurt its output disproportionately.

## Role in Raid

- **Role:** Melee DPS.
- **Raid buffs/debuffs:** Death Knights bring no unique raid-wide percentage buff in the modern design; their contribution is utility (see below) rather than a stacking damage buff. Do not assume a DK provides a raid DPS buff for analysis purposes. (Flagged — exact 12.0.5 buff/debrief list not confirmed live.)
- **Group utility — Anti-Magic Zone (51052):** A placed group defensive that reduces magic damage taken by allies standing in it. This is the DK's headline raid-utility cooldown and is frequently assigned to specific magic-damage windows.
- **Battle Resurrection — Raise Ally:** Death Knights provide a combat resurrection via Raise Ally (the class battle-rez). This counts against the shared raid battle-rez pool. (SpellID not confirmed live — omitted.)
- **Mobility:** Limited. **Death Grip (49576)** repositions an enemy (or the DK, talent-dependent) and **Death's Advance** provides passive/active movement speed, but Unholy has no leap or blink. Treat as a low-mobility melee.

## Abilities Reference

Confirmed SpellIDs are shown in parentheses. Where no ID is shown, it was not confirmed on a live page during research — see Known Gaps.

### Offensive cooldowns
- **Apocalypse (275699)** — Bursts Festering Wounds on the target and summons transient ghouls. Tooltip cooldown read **45 seconds** (Wowhead spell page; verify against current talents). Core burst tool.
- **Army of the Dead (42650)** — Summons a horde of ghouls; also grants Runic Power. Tooltip cooldown read **1.5 minutes** (Wowhead spell page; legacy tooltip — verify). Big-burst / opener cooldown.
- **Dark Transformation (63560)** — Empowers the permanent Ghoul into a stronger form for a duration, increasing its damage. SpellID **63560** is the Wowhead-confirmed value; the SimC reference records **1233448** (possible Midnight variant / aura). Discrepancy flagged — do NOT replace 63560 in filter logic until verified live. Cooldown not clean on the Wowhead page — verify live.
- **Summon Gargoyle (49206)** — Summons an Ebon Gargoyle that attacks for ~25 seconds (tooltip duration). May be a talent rather than baseline in current builds. (Cooldown not cleanly confirmed — omitted.)

### Core rotational abilities
- **Festering Strike (85948)** — Builds Festering Wounds on the target. SpellID confirmed via SimC reference.
- **Scourge Strike (445508, 445509, 55090)** — Bursts Festering Wounds for damage; Clawing Shadows is the talented ranged-ish replacement. SpellID confirmed via SimC reference (multiple: physical + shadow components). Clawing Shadows SpellID not separately present in this SimC reference — see Known Gaps.
- **Death Coil (445513, 47541, 47632)** — Single-target Runic Power spender; empowers the pet. SpellID confirmed via SimC reference (multiple IDs: base cast + variants).
- **Epidemic** — AoE Runic Power spender that hits all disease-afflicted targets. (SpellID not present in this SimC reference — omitted.)
- **Outbreak (77575, 196780)** — Applies the disease/plague to the target. SpellID confirmed via SimC reference (multiple IDs).
- **Dread Plague (1240996)** — The disease DoT applied by Outbreak and maintained on targets. SpellID confirmed via SimC reference.
- **Virulent Plague (191587)** — Secondary plague DoT. SpellID confirmed via SimC reference.
- **Soul Reaper (343294)** — Execute-phase talent ability; applies a debuff that detonates for massive damage when the target falls below 35% HP. SpellID confirmed via SimC reference (shadowfrost school).
- **Death and Decay (43265, 52212, 1251951)** — Ground AoE zone used in Rider of the Apocalypse builds (Desecrate talent). SpellID confirmed via SimC reference (multiple IDs).

### Key passives / procs
- **Festering Wounds** — Stacking debuff applied by Festering Strike, consumed (burst) by Scourge Strike/Clawing Shadows and en masse by Apocalypse. Central resource of the spec.
- **Sudden Doom** — Proc that makes Death Coil free/empowered (commonly present on the spec). (Mechanic from Icy Veins context; not independently ID-confirmed.)
- **Army of the Damned (317776, 1242294)** — Talent node for the Rider build; spawns a Magus of the Dead on Army/Apocalypse. SpellID confirmed via SimC reference.
- **Runes / Runic Power** — DK resource system; Runes power strikes, Runic Power powers Coil/Epidemic.

## Rotation / Priority

This is **logical priority ordering, not a DPS benchmark.** See the SimC APLs below for the definitive machine-generated ordering.

**Opener (concept):**
1. Pre-pull diseases via Outbreak so the plague is up at pull.
2. Build Festering Wounds with Festering Strike.
3. Burst cooldowns: Army of the Dead / Apocalypse / Dark Transformation (+ Gargoyle if talented) layered together for the burst window.
4. Burst Wounds with Scourge Strike/Clawing Shadows; spend Runic Power on Death Coil.

**Sustained single target (priority):**
1. Keep the disease/plague active (refresh before it falls; Apocalypse/Outbreak as needed).
2. Maintain a healthy Festering Wound count — don't let it cap or bottom out.
3. Spend Runic Power with Death Coil before it caps (use Sudden Doom procs).
4. Burst Wounds with Scourge Strike/Clawing Shadows.
5. Build Wounds with Festering Strike when low.
6. Use Apocalypse on cooldown to mass-burst Wounds; align Dark Transformation with it where possible.

**AoE / cleave (priority):**
1. Spread the disease to all targets (Outbreak + cleave; Epidemic spreads/triggers on disease-afflicted targets).
2. Spend Runic Power with **Epidemic** instead of Death Coil.
3. Burst Wounds across targets (Apocalypse, Scourge Strike/Clawing Shadows cleave).
4. Maintain diseases on as many targets as feasible.

## Defensives

This is one of the two most important sections for RaidLens. Each entry includes how to judge correct use during a damage window.

- **Anti-Magic Shell (48707)** — Self magic-damage absorb shield + magic damage reduction; **~1 minute cooldown**, ~5s duration; generates Runic Power from absorbed magic. **RaidLens usage:** A magic-damage personal mitigation. Correct use = AMS active during a known magic raid hit. If a player took heavy *magic* avoidable/raid damage with AMS available and unused, that's a missed personal mitigation worth flagging.
- **Icebound Fortitude (48792)** — **30% all damage reduction** + stun immunity for ~8s; **~2 minute cooldown**. **RaidLens usage:** The primary all-purpose personal defensive. Expect it during scripted heavy-damage windows (big raid hits, tank-buster-adjacent moments, called damage events). Repeated death to a telegraphed damage event with Icebound available = flaggable.
- **Death Strike (49998)** — Runic Power-costing strike (45 RP) that **heals the caster**. **RaidLens usage:** This is a SELF-HEAL / resource spender. Its self-cast and any self-related log entries are NOT avoidable mistake damage and must never be flagged as such. Presence of Death Strike casts during a damage window is *good* (active self-healing), not a mistake.
- **Lichborne (49039)** — Undead transformation granting leech (self-healing via damage dealt) and immunity to charm/fear/sleep/horror effects; ~10s duration, **~2 minute cooldown** (tooltip may be legacy — verify). **RaidLens usage:** Doubles as a fear/charm breaker and a sustained self-heal. Useful during fear mechanics or stacking magic damage. Don't expect it on every cooldown; flag only if a fight has an obvious charm/fear window the player ate while Lichborne was up and unused.
- **Anti-Magic Zone (51052)** — see Utility; it is a *group* defensive but also protects the DK.

Note for analysis: Death Knights have no hard immunity bubble and no self-cheat-death baseline. Survival is layered mitigation (Icebound + AMS) plus self-healing (Death Strike + leech). Judge defensive use against the fight's *magic vs physical* damage profile.

## Utility

Second most important section for RaidLens. Be explicit about what IS and ISN'T an interrupt.

- **INTERRUPT — Mind Freeze (47528):** This IS the Unholy Death Knight's interrupt. **15 second cooldown**, melee range, interrupts the current cast and locks that spell school briefly. For interrupt tracking, Mind Freeze is the ability to credit. A missed interrupt on an interruptible cast, with Mind Freeze off cooldown, is flaggable.
  - **Asphyxiate / Strangulate / stuns are NOT the spec's standard interrupt** — do not count crowd-control or silence talents as the interrupt unless specifically confirmed. Mind Freeze is the kick.
- **Anti-Magic Zone (51052)** — Group magic-damage-reduction zone, ~6s, **~4 minute cooldown**, placed/30yd range. A raid utility cooldown, not an interrupt.
- **Death Grip (49576)** — Enemy reposition/pull, instant, 30yd. Utility/positioning, not an interrupt and not a defensive.
- **Chains of Ice (444826)** — Snare/slow on a target. Utility CC. SpellID confirmed via SimC reference.
- **Death's Advance** — Movement-speed tool / snare reduction; the spec's main mobility aid. (SpellID not confirmed — omitted.)
- **Raise Ally** — Combat resurrection (battle-rez), counts against the shared raid battle-rez pool. (SpellID not confirmed — omitted.)
- **Raid buffs/debuffs:** No confirmed unique stacking raid damage buff for this spec in 12.0.5 (flagged). Treat the DK's raid contribution as utility (AMZ, battle-rez, grip, interrupt), not a percentage buff.

## Consumables and Enchants

Specific 12.0.5 consumable and enchant recommendations (best flask, food, weapon enchant, augment rune, phial) were **not sourceable live** within the research budget — the Wowhead enchants/gems guide hub did not render usable text. As Strength-based melee, Unholy uses Strength-oriented consumables and enchants in general terms, but exact item names/IDs for 12.0.5 are unconfirmed and are intentionally omitted rather than guessed. See Known Gaps.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Rider of the Apocalypse** and **San'layn**.

Metrics: metrics not captured in source (both JSON files have empty `metrics` objects).

---

### Rider of the Apocalypse — Talent Import

```
CwPAAAAAAAAAAAAAAAAAAAAAAAwMjZMDDz2MzMTzmZmZMjBAAAAAAAgZGmZAw2MmZ2mZGjZAbmFDDZgZjhGLAYGAGzMjZAmZmxYA
```

**Damage distribution (SimC, share of total) — Rider of the Apocalypse:**

| Ability | Share of Total |
|---|---|
| Rider's Champion | 13.1% |
| Putrefy | 10.1% |
| Army of the Damned | 9.3% |
| Scourge Strike | 6.7% |
| Necrotic Coil | 6.5% |
| Death Coil | 7.0% |
| Summon Gargoyle | 4.2% |
| Festering Strike | 0.3% |

Rider leans heavily on its hero-tree proc (Rider's Champion at 13.1%) and the Putrefy/Necrotic Coil sustain loop, with Army of the Damned providing a significant burst share; for RaidLens, the dominant damage sources are spread across pet/proc abilities rather than a single player-cast nuke, so avoidable damage stands out clearly against this wide baseline.

---

### San'layn — Talent Import

```
CwPAAAAAAAAAAAAAAAAAAAAAAAwMjZMDDz2MzMTzmZmZMjBAAAAAAAgZGmZAw2MmZ2mZGjZMwAzYRjlFAbTsBgZAYMzMmBzMYGjB
```

**Damage distribution (SimC, share of total) — San'layn:**

| Ability | Share of Total |
|---|---|
| Army of the Damned | 10.5% |
| Death Coil | 9.2% |
| Necrotic Coil | 8.3% |
| Scourge Strike | 8.7% |
| Putrefy | 9.1% |
| Summon Gargoyle | 4.5% |
| Festering Strike | 0.3% |

San'layn spreads damage more evenly across Scourge Strike, Death Coil, Putrefy, Army of the Damned, and Necrotic Coil with no single proc dominating; Vampiric Strike procs (San'layn hero-tree mechanic) feed into the Death Coil and Scourge Strike entries rather than appearing as a separate top-line source.

---

### Action Priority List — Rider of the Apocalypse

```
actions.precombat=snapshot_stats
actions.precombat+=/raise_dead
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_duration,op=setif,value=0,value_else=trinket.1.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_2_duration,op=setif,value=0,value_else=trinket.2.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_1_high_value,op=setif,value=2,value_else=1,condition=trinket.1.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_2_high_value,op=setif,value=2,value_else=1,condition=trinket.2.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&talent.dark_transformation&trinket.1.cooldown.duration%%cooldown.dark_transformation.duration=0
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&talent.dark_transformation&trinket.2.cooldown.duration%%cooldown.dark_transformation.duration=0
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(variable.trinket_2_high_value)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(variable.trinket_1_high_value)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl

# Executed every time the actor is available.
actions=auto_attack
# Choose Action list to run
actions+=/call_action_list,name=variables
actions+=/call_action_list,name=racials
actions+=/potion,if=(variable.st_planning|variable.adds_remain)&variable.cds_active&(variable.trinket_priority=1&trinket.1.has_use_buff&!trinket.1.proc.mastery.duration>0|variable.trinket_priority=2&trinket.2.has_use_buff&!trinket.2.proc.mastery.duration>0)
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=aoe,if=active_enemies>=3
actions+=/call_action_list,name=single_target,if=active_enemies<3

# Aoe Rotation
actions.aoe=death_and_decay,if=!death_and_decay.ticking&talent.desecrate|talent.cycle_of_death&cooldown.putrefy.charges<cooldown.putrefy.max_charges&(raid_event.adds.exists&raid_event.adds.remains>duration%2|!raid_event.adds.exists&fight_remains>duration%2)&(raid_event.adds.exists&raid_event.adds.count<active_enemies|!raid_event.adds.exists|charges=max_charges|raid_event.adds.remains>cooldown.any_dnd.duration)
actions.aoe+=/festering_strike,target_if=min:health.pct,if=talent.festering_scythe&(fight_remains>3|raid_event.adds.exists&raid_event.adds.remains>3)&(buff.festering_scythe.up&(buff.festering_scythe.remains<=3|buff.festering_scythe_tt.remains<3)|!buff.festering_scythe.up&buff.festering_scythe_tt.remains<3)
actions.aoe+=/epidemic,if=variable.spending_rp&variable.epidemic_prio
actions.aoe+=/death_coil,target_if=min:health.pct,if=variable.spending_rp&!variable.epidemic_prio
actions.aoe+=/festering_strike,target_if=min:health.pct,if=buff.lesser_ghoul_ready.stack=0
actions.aoe+=/scourge_strike,target_if=min:health.pct,if=buff.lesser_ghoul_ready.stack>=1
actions.aoe+=/epidemic,if=variable.epidemic_prio
actions.aoe+=/death_coil,target_if=min:health.pct,if=!variable.epidemic_prio

# Cooldowns
actions.cooldowns=potion,if=(variable.st_planning|variable.adds_remain)&variable.cds_active
# Use<a href = 'https://www.wowhead.com/spell=10060/power-infusion'> Power Infusion</ a> while<a href = 'https://www.wowhead.com/spell=1233448/dark-transformation'> Dark Transformation</ a> is up
actions.cooldowns+=/invoke_external_buff,name=power_infusion,if=pet.lesser_ghoul_army.active|buff.forbidden_knowledge.up|buff.dark_transformation.up
actions.cooldowns+=/outbreak,if=(!talent.blightburst|talent.blightburst&(cooldown.putrefy.remains>gcd.max*2|time<5))&(dot.dread_plague.active_dots=0|dot.virulent_plague.active_dots=0)&(fight_remains>gcd.max*2&!raid_event.adds.exists|raid_event.adds.exists&raid_event.adds.remains>gcd.max*2)
actions.cooldowns+=/army_of_the_dead,if=(variable.st_planning|variable.adds_remain)&(buff.festering_scythe_tt.up|!talent.festering_scythe)
actions.cooldowns+=/soul_reaper,target_if=min:health.pct,if=!talent.blightfall&(!debuff.soul_reaper_debuff.up|!variable.cds_active&cooldown.dark_transformation.remains>cooldown.soul_reaper.duration-1|cooldown.dark_transformation.remains<gcd.max&talent.reaping)|talent.blightfall&talent.infliction_of_sorrow&(buff.dark_transformation.remains<5|buff.reaping.remains<=gcd.max)
actions.cooldowns+=/putrefy,if=(variable.st_planning|variable.adds_remain)*(target.health.pct>35|!talent.soul_reaper)&(charges=max_charges&!buff.sudden_doom.react&(cooldown.dark_transformation.remains>9|!talent.reaping|!talent.soul_reaper)|buff.dark_transformation.up)|fight_remains<cooldown.soul_reaper.remains|raid_event.adds.exists&raid_event.adds.remains<3
actions.cooldowns+=/dark_transformation,if=(variable.st_planning|variable.adds_remain)&!buff.blightfall.up&(pet.lesser_ghoul_army.active|cooldown.army_of_the_dead.remains>30|!talent.army_of_the_dead)|buff.blightfall.up&buff.dark_transformation.remains<4

# Racials
actions.racials=ancestral_call,if=variable.cds_active
actions.racials+=/arcane_pulse,if=runic_power<20&rune<2
actions.racials+=/arcane_torrent,if=runic_power<20&rune<2
actions.racials+=/bag_of_tricks,if=runic_power<20&rune<2
actions.racials+=/blood_fury,if=buff.dark_transformation.up
actions.racials+=/berserking,if=variable.cds_active
actions.racials+=/fireblood,if=variable.cds_active
actions.racials+=/lights_judgment,if=runic_power<20&rune<2

# Single Target Rotation
actions.single_target=festering_strike,if=talent.festering_scythe&fight_remains>3&(buff.festering_scythe.up&(buff.festering_scythe.remains<=3|buff.festering_scythe_tt.remains<3)|!buff.festering_scythe.up&buff.festering_scythe_tt.remains<3)
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1&talent.gift_of_the_sanlayn&buff.essence_of_the_blood_queen.stack<5&buff.vampiric_strike.up
actions.single_target+=/death_coil,if=buff.sudden_doom.react
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1&buff.blighted.up
actions.single_target+=/death_coil,if=variable.spending_rp
actions.single_target+=/putrefy,if=(target.health.pct>35|!talent.soul_reaper)&(buff.commander_of_the_dead.remains>9|!talent.commander_of_the_dead)
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1
actions.single_target+=/festering_strike
actions.single_target+=/death_coil

# Trinkets
actions.trinkets=use_item,slot=trinket1,if=variable.trinket_1_buffs&(variable.trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)&(trinket.1.cast_time>0&trinket.1.cast_time>cooldown.army_of_the_dead.remains&(!talent.festering_scythe|buff.festering_scythe_tt.up)|trinket.1.cast_time=0&variable.cds_active)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&(variable.trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)&(trinket.2.cast_time>0&trinket.2.cast_time>cooldown.army_of_the_dead.remains&(!talent.festering_scythe|buff.festering_scythe_tt.up)|trinket.2.cast_time=0&variable.cds_active)
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)

# Variables
actions.variables=variable,name=spending_rp,value=rune<2|buff.forbidden_knowledge.up&(rune<4|pet.gargoyle.active)|buff.sudden_doom.react|active_enemies>=3
actions.variables+=/variable,name=st_planning,op=setif,value=1,value_else=0,condition=active_enemies=1&(!raid_event.adds.exists|!raid_event.adds.in|raid_event.adds.in>15|!raid_event.pull.exists|raid_event.pull.exists&raid_event.pull.in>15)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&((!raid_event.adds.exists|!raid_event.pull.exists)|raid_event.adds.remains>5|raid_event.pull.remains>5)
actions.variables+=/variable,name=cds_active,value=pet.lesser_ghoul_army.active|buff.forbidden_knowledge.up|buff.dark_transformation.up&buff.dark_transformation.remains>5
actions.variables+=/variable,name=epidemic_prio,value=active_enemies>=4&!buff.forbidden_knowledge.up|active_enemies>=6&buff.forbidden_knowledge.up
```

### Action Priority List — San'layn

```
actions.precombat=snapshot_stats
actions.precombat+=/raise_dead
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_duration,op=setif,value=0,value_else=trinket.1.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_2_duration,op=setif,value=0,value_else=trinket.2.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_1_high_value,op=setif,value=2,value_else=1,condition=trinket.1.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_2_high_value,op=setif,value=2,value_else=1,condition=trinket.2.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&talent.dark_transformation&trinket.1.cooldown.duration%%cooldown.dark_transformation.duration=0
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&talent.dark_transformation&trinket.2.cooldown.duration%%cooldown.dark_transformation.duration=0
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(variable.trinket_2_high_value)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(variable.trinket_1_high_value)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl

# Executed every time the actor is available.
actions=auto_attack
# Choose Action list to run
actions+=/call_action_list,name=variables
actions+=/call_action_list,name=racials
actions+=/potion,if=(variable.st_planning|variable.adds_remain)&variable.cds_active&(variable.trinket_priority=1&trinket.1.has_use_buff&!trinket.1.proc.mastery.duration>0|variable.trinket_priority=2&trinket.2.has_use_buff&!trinket.2.proc.mastery.duration>0)
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=aoe,if=active_enemies>=3
actions+=/call_action_list,name=single_target,if=active_enemies<3

# Aoe Rotation
actions.aoe=death_and_decay,if=!death_and_decay.ticking&talent.desecrate|talent.cycle_of_death&cooldown.putrefy.charges<cooldown.putrefy.max_charges&(raid_event.adds.exists&raid_event.adds.remains>duration%2|!raid_event.adds.exists&fight_remains>duration%2)&(raid_event.adds.exists&raid_event.adds.count<active_enemies|!raid_event.adds.exists|charges=max_charges|raid_event.adds.remains>cooldown.any_dnd.duration)
actions.aoe+=/festering_strike,target_if=min:health.pct,if=talent.festering_scythe&(fight_remains>3|raid_event.adds.exists&raid_event.adds.remains>3)&(buff.festering_scythe.up&(buff.festering_scythe.remains<=3|buff.festering_scythe_tt.remains<3)|!buff.festering_scythe.up&buff.festering_scythe_tt.remains<3)
actions.aoe+=/epidemic,if=variable.spending_rp&variable.epidemic_prio
actions.aoe+=/death_coil,target_if=min:health.pct,if=variable.spending_rp&!variable.epidemic_prio
actions.aoe+=/festering_strike,target_if=min:health.pct,if=buff.lesser_ghoul_ready.stack=0
actions.aoe+=/scourge_strike,target_if=min:health.pct,if=buff.lesser_ghoul_ready.stack>=1
actions.aoe+=/epidemic,if=variable.epidemic_prio
actions.aoe+=/death_coil,target_if=min:health.pct,if=!variable.epidemic_prio

# Cooldowns
actions.cooldowns=potion,if=(variable.st_planning|variable.adds_remain)&variable.cds_active
# Use<a href = 'https://www.wowhead.com/spell=10060/power-infusion'> Power Infusion</ a> while<a href = 'https://www.wowhead.com/spell=1233448/dark-transformation'> Dark Transformation</ a> is up
actions.cooldowns+=/invoke_external_buff,name=power_infusion,if=pet.lesser_ghoul_army.active|buff.forbidden_knowledge.up|buff.dark_transformation.up
actions.cooldowns+=/outbreak,if=(!talent.blightburst|talent.blightburst&(cooldown.putrefy.remains>gcd.max*2|time<5))&(dot.dread_plague.active_dots=0|dot.virulent_plague.active_dots=0)&(fight_remains>gcd.max*2&!raid_event.adds.exists|raid_event.adds.exists&raid_event.adds.remains>gcd.max*2)
actions.cooldowns+=/army_of_the_dead,if=(variable.st_planning|variable.adds_remain)&(buff.festering_scythe_tt.up|!talent.festering_scythe)
actions.cooldowns+=/soul_reaper,target_if=min:health.pct,if=!talent.blightfall&(!debuff.soul_reaper_debuff.up|!variable.cds_active&cooldown.dark_transformation.remains>cooldown.soul_reaper.duration-1|cooldown.dark_transformation.remains<gcd.max&talent.reaping)|talent.blightfall&talent.infliction_of_sorrow&(buff.dark_transformation.remains<5|buff.reaping.remains<=gcd.max)
actions.cooldowns+=/putrefy,if=(variable.st_planning|variable.adds_remain)*(target.health.pct>35|!talent.soul_reaper)&(charges=max_charges&!buff.sudden_doom.react&(cooldown.dark_transformation.remains>9|!talent.reaping|!talent.soul_reaper)|buff.dark_transformation.up)|fight_remains<cooldown.soul_reaper.remains|raid_event.adds.exists&raid_event.adds.remains<3
actions.cooldowns+=/dark_transformation,if=(variable.st_planning|variable.adds_remain)&!buff.blightfall.up&(pet.lesser_ghoul_army.active|cooldown.army_of_the_dead.remains>30|!talent.army_of_the_dead)|buff.blightfall.up&buff.dark_transformation.remains<4

# Racials
actions.racials=ancestral_call,if=variable.cds_active
actions.racials+=/arcane_pulse,if=runic_power<20&rune<2
actions.racials+=/arcane_torrent,if=runic_power<20&rune<2
actions.racials+=/bag_of_tricks,if=runic_power<20&rune<2
actions.racials+=/blood_fury,if=buff.dark_transformation.up
actions.racials+=/berserking,if=variable.cds_active
actions.racials+=/fireblood,if=variable.cds_active
actions.racials+=/lights_judgment,if=runic_power<20&rune<2

# Single Target Rotation
actions.single_target=festering_strike,if=talent.festering_scythe&fight_remains>3&(buff.festering_scythe.up&(buff.festering_scythe.remains<=3|buff.festering_scythe_tt.remains<3)|!buff.festering_scythe.up&buff.festering_scythe_tt.remains<3)
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1&talent.gift_of_the_sanlayn&buff.essence_of_the_blood_queen.stack<5&buff.vampiric_strike.up
actions.single_target+=/death_coil,if=buff.sudden_doom.react
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1&buff.blighted.up
actions.single_target+=/death_coil,if=variable.spending_rp
actions.single_target+=/putrefy,if=(target.health.pct>35|!talent.soul_reaper)&(buff.commander_of_the_dead.remains>9|!talent.commander_of_the_dead)
actions.single_target+=/scourge_strike,if=buff.lesser_ghoul_ready.stack>=1
actions.single_target+=/festering_strike
actions.single_target+=/death_coil

# Trinkets
actions.trinkets=use_item,slot=trinket1,if=variable.trinket_1_buffs&(variable.trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)&(trinket.1.cast_time>0&trinket.1.cast_time>cooldown.army_of_the_dead.remains&(!talent.festering_scythe|buff.festering_scythe_tt.up)|trinket.1.cast_time=0&variable.cds_active)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&(variable.trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)&(trinket.2.cast_time>0&trinket.2.cast_time>cooldown.army_of_the_dead.remains&(!talent.festering_scythe|buff.festering_scythe_tt.up)|trinket.2.cast_time=0&variable.cds_active)
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)

# Variables
actions.variables=variable,name=spending_rp,value=rune<2|buff.forbidden_knowledge.up&(rune<4|pet.gargoyle.active)|buff.sudden_doom.react|active_enemies>=3
actions.variables+=/variable,name=st_planning,op=setif,value=1,value_else=0,condition=active_enemies=1&(!raid_event.adds.exists|!raid_event.adds.in|raid_event.adds.in>15|!raid_event.pull.exists|raid_event.pull.exists&raid_event.pull.in>15)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&((!raid_event.adds.exists|!raid_event.pull.exists)|raid_event.adds.remains>5|raid_event.pull.remains>5)
actions.variables+=/variable,name=cds_active,value=pet.lesser_ghoul_army.active|buff.forbidden_knowledge.up|buff.dark_transformation.up&buff.dark_transformation.remains>5
actions.variables+=/variable,name=epidemic_prio,value=active_enemies>=4&!buff.forbidden_knowledge.up|active_enemies>=6&buff.forbidden_knowledge.up
```

## Confirmed Spell IDs (SimulationCraft HTML)

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Army of the Dead | 42650 | shadow | cast |
| Army of the Damned | 317776, 1242294 (multiple: base cast + variants) | shadow | cast / other |
| Chains of Ice | 444826 | frost | cast |
| Dark Transformation | 1233448 | shadow | cast |
| Death and Decay | 43265, 52212, 1251951 (multiple: base cast + variants) | shadow | cast |
| Death Coil | 445513, 47541, 47632 (multiple: base cast + variants) | shadow | cast |
| Death Strike | 49998, 45470 (multiple: base cast + variants) | physical | cast |
| Dread Plague | 1240996 | shadow | cast |
| Festering Scythe | 458128 | shadow | cast |
| Festering Strike | 85948 | physical | cast |
| Outbreak | 77575, 196780 (multiple: base cast + variants) | shadow | cast |
| Scourge Strike | 445508, 445509, 55090 (multiple: base cast + variants) | physical / shadow | cast |
| Soul Reaper | 343294 | shadowfrost | cast |
| Summon Gargoyle | 49206 | shadow | other |
| Virulent Plague | 191587 | shadow | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

**Confirmed SpellIDs (verified on live Wowhead spell pages):**
- Mind Freeze — 47528 (interrupt, 15s CD) ✅
- Anti-Magic Shell — 48707 (~1 min CD) ✅
- Icebound Fortitude — 48792 (30% DR, ~2 min CD) ✅
- Anti-Magic Zone — 51052 (~4 min CD) ✅
- Death Strike — 49998 (self-heal) ✅
- Lichborne — 49039 (~2 min CD, leech) ✅
- Apocalypse — 275699 (~45s CD) ✅
- Army of the Dead — 42650 (~1.5 min CD) ✅
- Dark Transformation — 63560 (Wowhead-confirmed) ✅; SimC reference shows 1233448 — discrepancy flagged, verify live before using 1233448 in filters; cooldown not clean on Wowhead page
- Summon Gargoyle — 49206 ✅ (name/ID confirmed; cooldown not confirmed)
- Death Grip — 49576 ✅ (name/ID confirmed)

**Confirmed SpellIDs (SimulationCraft reference, Midnight 12.0.5):** ✅
- Festering Strike — 85948
- Scourge Strike — 445508, 445509, 55090 (multiple: physical + shadow components)
- Death Coil — 445513, 47541, 47632 (multiple IDs)
- Outbreak — 77575, 196780 (multiple IDs)
- Dread Plague — 1240996
- Virulent Plague — 191587
- Soul Reaper — 343294
- Death and Decay — 43265, 52212, 1251951 (multiple IDs)
- Army of the Damned — 317776, 1242294
- Festering Scythe — 458128
- Chains of Ice — 444826
- Death Strike (SimC) — 49998, 45470 (consistent with Wowhead; secondary ID added)

**Talent string and APL:** ✅ Added in SimulationCraft Reference section above. Two builds: Rider of the Apocalypse and San'layn. APL sourced from Trivial.txt.

**Unconfirmed / omitted facts (do NOT assume):**
- SpellID for Clawing Shadows — not present in this SimC reference (key is absent); still omitted.
- SpellIDs for Epidemic, Raise Ally, Death's Advance — not present in this SimC reference; still omitted.
- Some Wowhead spell-page cooldown/effect values (notably Death Grip, Lichborne leech %, Dark Transformation cooldown, Army of the Dead cooldown) may reflect **legacy tooltips** rather than live 12.0.5 tuning. Treat cooldown numbers marked "verify" as approximate.
- Whether Summon Gargoyle is baseline or a talent in 12.0.5 builds is unconfirmed (APL references it as a pet check, suggesting it is present in both simmed builds).
- 12.0.5 consumables/enchants/gems — not sourced; omitted entirely rather than guessed.
- Any unique raid buff/debuff the spec might provide — not confirmed; assume utility-only.
- DPS/HPS/DTPS metrics — not captured in the SimC source files (empty metrics objects in both JSONs).

**Source limitation:** Wowhead's class *guide* hub pages (abilities-talents and rotation-cooldowns) returned only navigation/header markup to the automated fetcher (client-rendered tables), so ability/rotation detail leans on the Icy Veins spec page plus individually-confirmed Wowhead spell pages.

**Maintenance flag:** Re-verify ALL SpellIDs, cooldowns, and the rotation after any 12.x patch (talent reworks and tuning are common). Specifically re-check the "verify" cooldowns and fill in the omitted rotational SpellIDs against live Wowhead before relying on them in analysis.
