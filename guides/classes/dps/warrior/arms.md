# Arms Warrior — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources fetched live (June 2026):
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-guide
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-gems-enchants-consumables
> - https://www.wowhead.com/spell=118038/die-by-the-sword
> - https://www.wowhead.com/spell=386208/defensive-stance
> - https://www.wowhead.com/spell=97462/rallying-cry
> - https://www.wowhead.com/spell=6552/pummel
> - https://www.wowhead.com/spell=12294/mortal-strike
> - https://www.wowhead.com/spell=167105/colossus-smash
> - https://www.wowhead.com/spell=107574/avatar
> - https://www.wowhead.com/spell=6673/battle-shout
> - https://www.wowhead.com/spell=100/charge
> - https://www.wowhead.com/spell=6544/heroic-leap
> - https://www.wowhead.com/spell=3411/intervene
> - https://www.wowhead.com/spell=23920/spell-reflection
> - https://www.wowhead.com/spell=107570/storm-bolt
> - https://www.wowhead.com/spell=227847/bladestorm
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Arms Warrior is a melee physical DPS specialization. It generates Rage passively through auto-attacks and spends it on a priority of strikes built around a short, frequently recurring burst window opened by **Colossus Smash** (SpellID 167105). The core loop is: keep Rage flowing, keep **Mortal Strike** (SpellID 12294) on cooldown, maintain bleeds/debuffs (Rend, Deep Wounds), and dump damage into the Colossus Smash window with cooldowns like **Avatar** (SpellID 107574) and **Bladestorm** (SpellID 227847).

Damage profile: strong single-target and excellent 2-target cleave (via Sweeping Strikes), with more modest sustained multi-target AoE than dedicated AoE specs. It is a pure physical-damage, no-pet, no-heal-output spec.

Primary weakness: mediocre self-sustain and limited burst multi-target damage; per the live Icy Veins guide it is currently considered undertuned in 12.0.5. Gameplay also punishes Rage mismanagement — becoming Rage-starved (no Mortal Strike) or overcapping Overpower charges both cost throughput.

## Role in Raid

- **Role:** Melee DPS. Not a healer, not a tank.
- **Raid buff:** **Battle Shout** (SpellID 6673) — increases melee and ranged Attack Power of the caster and nearby allies by 5%, very long duration (effectively a maintained raid buff). This is the warrior's mandatory raid-wide buff.
- **Bloodlust/Heroism equivalent:** No. Arms Warrior does NOT provide a Bloodlust/Heroism-type haste burst.
- **Battle Resurrection:** No. Arms Warrior cannot battle res.
- **Group defensive / external:** **Rallying Cry** (SpellID 97462) — raid-wide temporary max-health buff (party/raid within 40 yds), 3-minute cooldown. This is a planned raid cooldown for stacked damage windows, not a single-target external. **Intervene** (SpellID 3411) moves the warrior to an ally; see Utility for caveats.
- **Mobility:** Strong. **Charge** (SpellID 100, gap closer to a target), **Heroic Leap** (SpellID 6544, leap to a ground location), and **Intervene** (SpellID 3411, charge to a friendly target). Piercing Howl provides a self movement-speed component with an AoE slow.

## Abilities Reference

Core / confirmed (SpellIDs verified on live Wowhead spell pages):

- **Mortal Strike** — SpellID 12294. Physical strike; the spec's primary Rage spender. (Applies the Mortal Wounds healing-reduction effect by class design; the specific aura was not confirmed on the fetched page — see Known Gaps.)
- **Colossus Smash** — SpellID 167105. Physical strike that opens the main burst/damage-amp window; ~45s cooldown (Wowhead). Generates Rage.
- **Avatar** — SpellID 107574. Major offensive cooldown; 20s duration, ~1.5 min cooldown (Wowhead). Increases ability and auto-attack damage and grants 3% all-school damage reduction while active.
- **Bladestorm** — SpellID 227847. Arms' major multi-target offensive cooldown; whirling physical damage over ~6s. (Note: 227847 is the Arms/talented Bladestorm page; Fury's Bladestorm uses a different ID. Cooldown not confirmed numerically — see Known Gaps.)
- **Battle Shout** — SpellID 6673. Raid AP buff (see Role in Raid).
- **Storm Bolt** — SpellID 107570. Ranged single-target stun on a short cooldown (Wowhead shows 30s); per Icy Veins it is "a ranged single-target stun."

Other core damage abilities referenced in live rotation guides (SpellIDs NOT individually confirmed — names only): Execute, Overpower, Slam, Cleave, Sweeping Strikes, Rend, Deep Wounds, Whirlwind, Skullsplitter, Thunderous Roar, Ravager, Demolish, Heroic Strike. Hero-talent and talent layouts (e.g., Colossus vs. Slayer trees) affect which of Demolish / Ravager / Thunderous Roar are present. See Known Gaps.

Key passives/procs (names confirmed in rotation guides; mechanics summarized, not ID-confirmed): **Sudden Death** (procs free/empowered Execute usable above the normal HP threshold), **Deep Wounds** (bleed applied by certain strikes), **Overpower** (charge-based proc-enabled filler).

## Rotation / Priority

This is a logical priority order, NOT a DPS benchmark or a strict cast sequence. Actual casts depend on Rage, procs, and current talent/Hero-tree build.

**Opener (single target):** Charge into melee → Avatar → apply Rend → Ravager (just before Colossus Smash, if talented) → Colossus Smash → Bladestorm → Mortal Strike → Demolish (if talented), spending the rest of the window on Execute/Overpower/Slam as available.

**Sustained single-target priority (approximate):**
1. Maintain **Rend** (refresh when nearly expired).
2. **Avatar** on cooldown.
3. **Colossus Smash** on cooldown to open the damage window.
4. Burst abilities inside the window: **Ravager** / **Demolish** / **Bladestorm** (build-dependent).
5. **Execute** when Sudden Death procs or the target is in Execute range.
6. **Mortal Strike** on cooldown.
7. **Overpower** to consume procs / avoid charge overcap.
8. **Slam** as a Rage dump filler.

**AoE / multi-target priority (3+ targets):**
1. **Sweeping Strikes** up to cleave a second target.
2. **Cleave** on cooldown — the main multi-target contributor; can trigger follow-up strikes and reset interactions.
3. **Bladestorm** for burst AoE.
4. **Execute** (with Sudden Death), **Demolish** in the Colossus window.
5. **Mortal Strike** / **Overpower** as secondary fillers.

For 2-target situations, Sweeping Strikes makes single-target abilities hit a second target, which is Arms' standout strength.

## Defensives

For RaidLens: a defensive is "used correctly" if it was active during (or pre-cast just before) a large incoming hit or a known boss damage window, and "missed" if a player took a lethal/near-lethal hit while the cooldown was available. Cooldown values below come from the fetched Wowhead spell pages where noted.

- **Die by the Sword** — SpellID 118038. 8s duration, **2 min cooldown**. Grants 100% parry chance and reduces all-school damage taken by 30% for the duration. This is Arms' primary personal defensive. *RaidLens usage:* should be active during heavy physical melee-style hits or a scripted burst window; flag if the player took a large avoidable/expected hit while it was off cooldown.
- **Defensive Stance** — SpellID 386208. A toggled stance reducing all damage taken by 15% (at the cost of 10% damage dealt). Effectively a free, togglable mitigation; the Wowhead "3s cooldown" is just the stance-swap lockout. *RaidLens usage:* expect it toggled ON heading into predictable raid-wide damage and OFF during pure-uptime windows. Hard to judge from logs alone (it is a buff state, not a discrete cast) — treat absence cautiously.
- **Rallying Cry** — SpellID 97462. **3 min cooldown.** Grants the warrior and nearby party/raid (40 yds) temporary max health for a short duration. This is a raid cooldown. *RaidLens usage:* should be aligned with a planned raid-wide damage event; flag as misused only if a known stacked-damage event passed with Rallying Cry available and unused.
- **Spell Reflection** — SpellID 23920. 5s duration, short cooldown (Wowhead shows ~25s on the live spell page family; the page returned a 1s scalar which is the internal GCD-style value, NOT the real cooldown — see Known Gaps). Reflects incoming spells back at the caster and reduces magic damage taken. *RaidLens usage:* effective against targeted/reflectable magic casts; flag a missed reflect only when the encounter has a specifically reflectable cast and the warrior ate it with the ability available.
- **Second Wind** (talent) — passive self-healing that recovers health when out of combat / not recently damaged (per Icy Veins summary). *RaidLens usage:* passive; not an actively pressed defensive, so do not flag it.
- **Bitter Immunity** (talent, if taken) — self-heal + dispel of effects (per general warrior toolkit). NOT confirmed on a fetched spell page this patch — see Known Gaps. If present, treat as a minor self-cleanse/heal cooldown.
- **Berserker Rage** — removes/prevents Fear, Sap, and Incapacitate effects on the warrior (per Icy Veins). *RaidLens usage:* a personal anti-CC/anti-fear tool; relevant only on encounters with fear/incapacitate mechanics.

## Utility

- **Interrupt:** **Pummel** — SpellID 6552. Interrupts the current spell cast; **15 second cooldown** (Wowhead). This IS a real, raid-usable interrupt and is the spec's primary kick. *RaidLens usage:* on encounters with interruptible casts, a warrior in interrupt rotation should be landing Pummels on assignment; flag missed interrupts when Pummel was available. **Intimidating Shout** can act as a "pseudo-interrupt" by disorienting/scattering enemies but is NOT a true interrupt and should not be counted as a kick.
- **Crowd control:** **Storm Bolt** (SpellID 107570) — single-target ranged stun. **Shockwave** — frontal-cone AoE stun (talent). **Intimidating Shout** — fear/disorient (AoE). Storm Bolt and Shockwave are the usable stuns in raid add situations.
- **Dispels:** Arms Warrior has NO outward (ally) dispel. It cannot cleanse magic/curse/poison/disease from teammates. Berserker Rage / Bitter Immunity only affect the warrior itself.
- **Externals on others:** Effectively none in the healer sense. **Intervene** (SpellID 3411) moves the warrior to a friendly target and is sometimes used to reposition or to intercept; the live spell page did not confirm a damage-transfer/absorb component this patch (it showed only a dummy/server-side effect) — see Known Gaps. Do not assume it shields an ally.
- **Raid buffs/debuffs:** **Battle Shout** (SpellID 6673, +5% AP raid-wide). Bleeds (Rend / Deep Wounds) are damage, not a raid debuff buff.
- **Movement tools:** **Charge** (SpellID 100), **Heroic Leap** (SpellID 6544), **Intervene** (SpellID 3411), plus Piercing Howl's self speed component.

## Consumables and Enchants

Recommendations below are from the live Icy Veins gems/enchants/consumables page for 12.0.5. Item *names* are reproduced as written there; numeric item IDs were NOT confirmed and are intentionally omitted.

- **Flask:** Flask of the Shattered Sun (or Flask of the Blood Knights).
- **Combat potion:** Potion of Recklessness (or Light's Potential as a simpler option).
- **Healing potion:** Silvermoon Health Potion.
- **Food:** Harandar Celebration (feast) or Royal Roast (personal).
- **Augment rune:** Void-Touched Augment Rune (stated as the only Midnight option).
- **Weapon enchant:** Berserker's Rage or Jan'alai's Precision; weapon augment oil: Thalassian Phoenix Oil.
- **Other enchants (by slot, per Icy Veins):** Helm — Empowered Hex of Leeching; Shoulder — Akil'zon's Swiftness; Chest — Mark of the Worldsoul; Legs — Blood Knight's Armor Kit; Boots — Lynx's Dexterity; Rings — Eyes of the Eagle.
- **Gems:** Indecipherable Eversong Diamond (unique); secondary gems favoring Critical Strike / Haste.

All consumable/enchant names should be re-verified against the live Wowhead/Icy Veins pages before relying on them for a raid night; tunings and availability shift across 12.x hotfixes.

## SimulationCraft Reference (Midnight 12.0.5)

Hero tree(s) covered: The JSON `hero_tree` field is null; the APL covers both **Colossus** (actions.colossus_*) and **Slayer** (actions.slayer_*) hero-tree branches as separate action lists within a single profile. The talent string below applies to both branches — the active hero tree is selected by the `talent.demolish` / `talent.slayers_dominance` conditions in the main action list.

### Talent import string

```
CcEAAAAAAAAAAAAAAAAAAAAAAAzMzsMzMzMDAAAghphxYmxyMzMzgxMDAAAAgZWmZAZMWWGYBMgZYCZGsBMjNz2YwMGgZGAmxwA
```

### Metrics

Metrics not captured in source.

### Damage distribution (SimC, share of total)

Only rows whose `percent` field contained a literal `%` character and survived exclusion filters are shown. For entries with a parenthesised value (e.g. `"0.0% (19.1%)"`) the parenthesised figure is the real share; the outer value is the direct-hit component before Execute/Slam sub-ability accounting.

| Ability | Share of total |
|---|---|
| Execute | 19.1% |
| Slam | 9.2% |
| Deep Wounds | 9.0% |
| Slayer's Strike | 8.1% |
| Rend (DoT) | 2.0% |
| Fatal Mark (fatality) | 2.0% |

**RaidLens interpretation:** Execute and Slam together account for nearly 30% of simulated damage, confirming that Execute-phase mismanagement (Rage dumped into Slam when Execute is available, or Sudden Death procs missed) is the single highest-value mistake to flag. Deep Wounds and Slayer's Strike are passive/proc outputs — low in logs relative to sim share suggests low Mortal Strike / Colossus Smash uptime upstream. Rend DoT and Fatal Mark are bleed contributions; their absence in a pull is a maintenance-failure signal.

Note: many abilities in the raw JSON (Bladestorm, Colossus Smash, Mortal Strike, Overpower, Avatar, Rend base, Storm Bolt, Wrecking Throw) had numeric-only or sub-1 `percent` values with no `%` suffix — these are buff-uptime/proc-count/duration mis-parses from the SimC HTML scrape, not damage shares, and are excluded from this table.

### Action Priority List — Colossus / Slayer (combined profile)

```
actions.precombat=snapshot_stats
actions.precombat+=/variable,name=trinket_1_exclude,value=trinket.1.is.algethar_puzzle_box
actions.precombat+=/variable,name=trinket_2_exclude,value=trinket.2.is.algethar_puzzle_box
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_duration,op=setif,value=0,value_else=trinket.1.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_2_duration,op=setif,value=0,value_else=trinket.2.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_1_high_value,op=setif,value=2,value_else=1,condition=trinket.1.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_2_high_value,op=setif,value=2,value_else=1,condition=trinket.2.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&talent.avatar&trinket.1.cooldown.duration%%cooldown.avatar.duration=0
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&talent.avatar&trinket.2.cooldown.duration%%cooldown.avatar.duration=0
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(variable.trinket_2_high_value)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(variable.trinket_1_high_value)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/battle_stance,toggle=on

actions=charge,if=time<=0.5|movement.distance>5
actions+=/auto_attack
actions+=/potion,if=gcd.remains=0&debuff.colossus_smash.remains>8|target.time_to_die<25
actions+=/pummel,if=target.debuff.casting.react
actions+=/call_action_list,name=variables
actions+=/call_action_list,name=trinkets
actions+=/arcane_torrent,if=cooldown.mortal_strike.remains>1.5&rage<50
actions+=/lights_judgment,if=debuff.colossus_smash.down&cooldown.mortal_strike.remains
actions+=/bag_of_tricks,if=debuff.colossus_smash.down&cooldown.mortal_strike.remains
actions+=/berserking,if=target.time_to_die>180&debuff.colossus_smash.up|target.time_to_die<180&variable.execute_phase&debuff.colossus_smash.up|target.time_to_die<20
actions+=/blood_fury,if=debuff.colossus_smash.up
actions+=/fireblood,if=debuff.colossus_smash.up
actions+=/ancestral_call,if=debuff.colossus_smash.up
actions+=/invoke_external_buff,name=power_infusion,if=debuff.colossus_smash.up&fight_remains>=135|variable.execute_phase&buff.avatar.up|fight_remains<=25
actions+=/run_action_list,name=colossus_aoe,if=talent.demolish&active_enemies>2
actions+=/run_action_list,name=colossus_execute,target_if=min:target.health.pct,if=talent.demolish&variable.execute_phase
actions+=/run_action_list,name=colossus_st,if=talent.demolish
actions+=/run_action_list,name=slayer_aoe,if=talent.slayers_dominance&active_enemies>2
actions+=/run_action_list,name=slayer_execute,target_if=min:target.health.pct,if=talent.slayers_dominance&variable.execute_phase
actions+=/run_action_list,name=slayer_st,if=talent.slayers_dominance

actions.colossus_aoe=thunder_clap,if=!dot.rend_dot.remains
actions.colossus_aoe+=/rend,if=!dot.rend_dot.remains
actions.colossus_aoe+=/sweeping_strikes,if=cooldown.colossus_smash.remains>10&buff.sweeping_strikes.down|!talent.broad_strokes
actions.colossus_aoe+=/ravager,if=cooldown.colossus_smash.remains<2
actions.colossus_aoe+=/avatar
actions.colossus_aoe+=/colossus_smash
actions.colossus_aoe+=/champions_spear
actions.colossus_aoe+=/cleave,if=buff.collateral_damage.stack>=2
actions.colossus_aoe+=/demolish,if=buff.colossal_might.stack=10&(debuff.colossus_smash.remains>2|cooldown.colossus_smash.remains>10)
actions.colossus_aoe+=/cleave
actions.colossus_aoe+=/demolish,if=debuff.colossus_smash.remains>=2
actions.colossus_aoe+=/whirlwind,if=talent.fervor_of_battle&buff.collateral_damage.stack=3
actions.colossus_aoe+=/rend,if=dot.rend_dot.remains<3
actions.colossus_aoe+=/mortal_strike
actions.colossus_aoe+=/overpower
actions.colossus_aoe+=/execute,if=buff.sweeping_strikes.up&buff.sudden_death.up
actions.colossus_aoe+=/heroic_strike
actions.colossus_aoe+=/rend
actions.colossus_aoe+=/execute
actions.colossus_aoe+=/slam
actions.colossus_aoe+=/bladestorm
actions.colossus_aoe+=/wrecking_throw
actions.colossus_aoe+=/whirlwind

actions.colossus_execute=sweeping_strikes,if=active_enemies=2&(cooldown.colossus_smash.remains&buff.sweeping_strikes.down|!talent.broad_strokes)
actions.colossus_execute+=/rend,if=dot.rend_dot.remains<=gcd&!talent.bloodletting
actions.colossus_execute+=/champions_spear
actions.colossus_execute+=/ravager,if=cooldown.colossus_smash.remains<=gcd&talent.cleave
actions.colossus_execute+=/avatar
actions.colossus_execute+=/colossus_smash
actions.colossus_execute+=/demolish,if=buff.colossal_might.stack=10&debuff.colossus_smash.up
actions.colossus_execute+=/heroic_strike
actions.colossus_execute+=/mortal_strike,if=buff.executioners_precision.stack=2|!talent.executioners_precision|talent.battlelord
actions.colossus_execute+=/execute,if=talent.deep_wounds&rage>75|buff.sudden_death.up
actions.colossus_execute+=/cleave,if=active_enemies=2&talent.mass_execution&(buff.ravager.remains|buff.collateral_damage.stack=3)
actions.colossus_execute+=/overpower
actions.colossus_execute+=/execute,if=rage>75
actions.colossus_execute+=/cleave,if=active_enemies=2&!talent.mass_execution&(buff.ravager.remains|talent.mass_execution|buff.collateral_damage.stack=3)
actions.colossus_execute+=/slam,if=!talent.deep_wounds
actions.colossus_execute+=/execute
actions.colossus_execute+=/bladestorm,if=active_enemies=2
actions.colossus_execute+=/wrecking_throw

actions.colossus_st=rend,if=dot.rend_dot.remains<=gcd|cooldown.colossus_smash.remains<2&dot.rend_dot.remains<=10
actions.colossus_st+=/sweeping_strikes,if=active_enemies=2&(cooldown.colossus_smash.remains&buff.sweeping_strikes.down|!talent.broad_strokes)
actions.colossus_st+=/ravager,if=cooldown.colossus_smash.remains<=gcd&talent.cleave
actions.colossus_st+=/avatar
actions.colossus_st+=/colossus_smash
actions.colossus_st+=/champions_spear
actions.colossus_st+=/demolish,if=debuff.colossus_smash.up&buff.colossal_might.stack>0
actions.colossus_st+=/heroic_strike
actions.colossus_st+=/mortal_strike
actions.colossus_st+=/cleave,if=active_enemies=2&buff.ravager.remains&buff.collateral_damage.stack=3
actions.colossus_st+=/overpower
actions.colossus_st+=/cleave,if=active_enemies=2&buff.ravager.remains|buff.collateral_damage.stack=3
actions.colossus_st+=/execute
actions.colossus_st+=/whirlwind,if=active_enemies=2&buff.collateral_damage.stack=3
actions.colossus_st+=/cleave,if=buff.ravager.remains|buff.collateral_damage.stack=3
actions.colossus_st+=/rend,if=dot.rend_dot.remains<=gcd*5
actions.colossus_st+=/bladestorm,if=active_enemies=2
actions.colossus_st+=/slam
actions.colossus_st+=/wrecking_throw

actions.slayer_aoe=rend,if=!dot.rend_dot.remains&talent.rend
actions.slayer_aoe+=/sweeping_strikes,if=!buff.sweeping_strikes.up&cooldown.colossus_smash.remains>10|!talent.broad_strokes
actions.slayer_aoe+=/avatar
actions.slayer_aoe+=/champions_spear
actions.slayer_aoe+=/ravager,if=debuff.colossus_smash.up
actions.slayer_aoe+=/colossus_smash
actions.slayer_aoe+=/cleave,if=buff.collateral_damage.stack=3
actions.slayer_aoe+=/bladestorm,if=debuff.colossus_smash.up
actions.slayer_aoe+=/cleave
actions.slayer_aoe+=/whirlwind,if=talent.fervor_of_battle&buff.collateral_damage.stack=3
actions.slayer_aoe+=/execute,if=buff.sudden_death.up
actions.slayer_aoe+=/mortal_strike,if=buff.battlelord.up
actions.slayer_aoe+=/overpower,if=talent.dreadnaught
actions.slayer_aoe+=/mortal_strike,if=talent.fierce_followthrough|debuff.colossus_smash.up
actions.slayer_aoe+=/thunder_clap,if=dot.rend_dot.remains<8&talent.rend
actions.slayer_aoe+=/whirlwind,if=talent.fervor_of_battle
actions.slayer_aoe+=/overpower
actions.slayer_aoe+=/mortal_strike
actions.slayer_aoe+=/rend,if=dot.rend_dot.remains
actions.slayer_aoe+=/execute
actions.slayer_aoe+=/whirlwind
actions.slayer_aoe+=/slam
actions.slayer_aoe+=/wrecking_throw
actions.slayer_aoe+=/storm_bolt,if=buff.bladestorm.up

actions.slayer_execute=sweeping_strikes,if=active_enemies=2&(cooldown.colossus_smash.remains&buff.sweeping_strikes.down|!talent.broad_strokes)
actions.slayer_execute+=/rend,if=dot.rend_dot.remains<2&!talent.bloodletting
actions.slayer_execute+=/avatar
actions.slayer_execute+=/colossus_smash
actions.slayer_execute+=/heroic_strike
actions.slayer_execute+=/bladestorm,if=debuff.colossus_smash.up
actions.slayer_execute+=/mortal_strike,if=buff.executioners_precision.stack=2&(talent.martial_prowess|!talent.martial_prowess&debuff.colossus_smash.up)|debuff.colossus_smash.up&talent.battlelord
actions.slayer_execute+=/overpower,if=buff.opportunist.up&talent.opportunist
actions.slayer_execute+=/overpower,if=talent.fierce_followthrough&!buff.battlelord.up&rage<80
actions.slayer_execute+=/execute,if=rage>40|buff.sudden_death.up
actions.slayer_execute+=/overpower
actions.slayer_execute+=/execute,if=talent.improved_execute
actions.slayer_execute+=/cleave,if=talent.mass_execution
actions.slayer_execute+=/slam,if=!talent.critical_thinking
actions.slayer_execute+=/execute
actions.slayer_execute+=/wrecking_throw
actions.slayer_execute+=/storm_bolt,if=buff.bladestorm.up

actions.slayer_st=sweeping_strikes,if=active_enemies=2&(cooldown.colossus_smash.remains&buff.sweeping_strikes.down|!talent.broad_strokes)
actions.slayer_st+=/avatar
actions.slayer_st+=/champions_spear,if=debuff.colossus_smash.up|buff.avatar.up
actions.slayer_st+=/ravager,if=cooldown.colossus_smash.remains<=gcd
actions.slayer_st+=/colossus_smash
actions.slayer_st+=/bladestorm,if=debuff.colossus_smash.up
actions.slayer_st+=/heroic_strike
actions.slayer_st+=/mortal_strike
actions.slayer_st+=/execute,if=buff.sudden_death.up
actions.slayer_st+=/cleave,if=active_enemies=2&buff.collateral_damage.stack=3
actions.slayer_st+=/overpower
actions.slayer_st+=/cleave,if=talent.mass_execution&target.health.pct<35
actions.slayer_st+=/whirlwind,if=active_enemies=2&buff.collateral_damage.stack=3
actions.slayer_st+=/rend,if=dot.rend_dot.remains<=5
actions.slayer_st+=/slam
actions.slayer_st+=/wrecking_throw,if=active_enemies=1
actions.slayer_st+=/storm_bolt,if=buff.bladestorm.up

actions.trinkets=use_item,slot=trinket1,if=variable.trinket_1_buffs&(variable.trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)&(buff.avatar.up)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&(variable.trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)&(buff.avatar.up)
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)
actions.trinkets+=/use_item,name=algethar_puzzle_box,if=cooldown.avatar.remains<2|cooldown.colossus_smash.remains<2

actions.variables=variable,name=st_planning,value=active_enemies=1&(raid_event.adds.in>15|!raid_event.adds.exists)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&(!raid_event.adds.exists|raid_event.adds.exists&raid_event.adds.remains>5)
actions.variables+=/variable,name=execute_phase,value=(talent.massacre.enabled&target.health.pct<35)|target.health.pct<20
```

## Confirmed Spell IDs (SimulationCraft HTML)

IDs below are from exact-key matches in `spell-ids-reference.json` (Midnight 12.0.5 SimC source). IDs already present in this guide from Wowhead are preserved above unchanged; this section adds or cross-confirms IDs for damage abilities the SimC HTML spelldata covered.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Avatar | 107574 | physical | cast |
| Bladestorm | 446035, 50622 (multiple: base cast + variants) | physical | cast |
| Colossus Smash | 167105 | physical | cast |
| Deep Wounds | 262115 | physical | cast |
| Execute | 163201, 260798, 5308, 280849 (multiple: base cast + variants) | physical | cast |
| Fatal Mark | 383706 | physical | cast |
| Heroic Strike | 1269383 | physical | cast |
| Mortal Strike | 12294 | physical | cast |
| Overpower | 7384 | physical | cast |
| Ravager | 228920, 156287 (multiple: base cast + variants) | physical | cast |
| Rend | 388539, 772 (multiple: base cast + variants) | physical | cast |
| Slam | 1464 | physical | cast |
| Slayer's Strike | 445579 | physical | cast |
| Storm Bolt | 107570 | physical | cast |
| Whirlwind | 190411, 199667, 199852 (multiple: base cast + variants) | physical | cast |

Abilities named in the guide with no exact key match in the SimC reference (non-damaging utility, not simmed, or named differently in spelldata): Battle Shout, Charge, Cleave, Sweeping Strikes, Demolish, Skullsplitter, Thunderous Roar, Pummel, Die by the Sword, Defensive Stance, Rallying Cry, Spell Reflection, Intervene, Heroic Leap, Berserker Rage, Bitter Immunity, Shockwave, Intimidating Shout, Sudden Death.

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Confirmed SpellIDs (verified on the exact Wowhead spell page fetched):** Mortal Strike 12294, Colossus Smash 167105, Avatar 107574, Battle Shout 6673, Charge 100, Heroic Leap 6544, Intervene 3411, Spell Reflection 23920, Storm Bolt 107570, Bladestorm 227847, Die by the Sword 118038, Defensive Stance 386208, Rallying Cry 97462, Pummel 6552.
- **Damage and rotational spell IDs confirmed via SimC spelldata** for: Avatar (107574), Bladestorm (446035/50622), Colossus Smash (167105), Deep Wounds (262115), Execute (163201/260798/5308/280849), Fatal Mark (383706), Heroic Strike (1269383), Mortal Strike (12294), Overpower (7384), Ravager (228920/156287), Rend (388539/772), Slam (1464), Slayer's Strike (445579), Storm Bolt (107570), Whirlwind (190411/199667/199852). These cross-confirm or extend the Wowhead-sourced IDs above.
- **Talent string and APL:** Now added (SimC Midnight 12.0.5 profile, covering both Colossus and Slayer hero-tree branches in a single combined APL). See SimulationCraft Reference section above.
- **Execute SpellID:** Multiple IDs present in SimC reference (163201, 260798, 5308, 280849); 5308 is the classic Arms Execute ID. Use all four for WCL log matching until confirmed which fires in Midnight logs.
- **Bladestorm ID note:** The guide previously cited 227847 (from Wowhead). SimC reference lists 446035 and 50622 as the active IDs. 227847 may be a talent-page or redirect ID; prefer 446035/50622 for WCL event filtering until verified in live logs.
- **Cleave, Sweeping Strikes, Demolish, Skullsplitter, Thunderous Roar** — still no confirmed SpellIDs; not present in SimC spelldata reference under those exact names.
- **Mortal Strike healing-reduction (Mortal Wounds):** stated by class design but the specific aura/effect was not visible on the fetched Mortal Strike page. Unconfirmed.
- **Bladestorm cooldown:** numeric cooldown not confirmed from live pages.
- **Spell Reflection / Charge / Heroic Leap / Intervene "cooldown" values on Wowhead:** the spell pages returned very small scalars (1–1.5s) that are GCD/internal lockout values, NOT the real ability cooldowns. Real cooldowns were not reliably confirmed and should be re-checked in-game or via the tooltip.
- **Intervene damage-transfer/absorb:** not confirmed on the live spell page this patch; treat as a movement/reposition tool only until verified.
- **Talent / Hero-tree specifics:** talent import string now provided from SimC. The profile covers both Colossus and Slayer branches. Exact per-build tuning differences (Demolish vs. Slayer's Strike weighting) are reflected in the APL conditions but not numerically benchmarked (metrics not captured).
- **Defensive/interrupt/consumable spell IDs:** Die by the Sword, Defensive Stance, Rallying Cry, Spell Reflection, Pummel, Heroic Leap, Intervene, Berserker Rage, Bitter Immunity — IDs from Wowhead only (see Confirmed SpellIDs bullet above); SimC source has no non-damaging defensives or interrupts, as expected.
- **Consumable/enchant item IDs:** omitted (names only, from Icy Veins). Re-verify names and availability each patch.
- **Maintenance flag:** Re-verify every SpellID, cooldown, and consumable/enchant name after ANY 12.x patch or hotfix. Tuning and item availability in Midnight change frequently; treat this guide as a 12.0.5 snapshot (June 2026).
