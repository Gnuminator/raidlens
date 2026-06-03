# Affliction Warlock — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.icy-veins.com/wow/affliction-warlock-pve-dps-guide
> - https://www.method.gg/guides/affliction-warlock/playstyle-and-rotation
> - https://www.wowhead.com/spell=980/agony
> - https://www.wowhead.com/spell=146739/corruption
> - https://www.wowhead.com/spell=316099/unstable-affliction
> - https://www.wowhead.com/spell=27243/seed-of-corruption
> - https://www.wowhead.com/spell=205180/summon-darkglare
> - https://www.wowhead.com/spell=386997/soul-rot
> - https://www.wowhead.com/spell=104773/unending-resolve
> - https://www.wowhead.com/spell=108416/dark-pact
> - https://www.wowhead.com/spell=108503/grimoire-of-sacrifice
> - https://www.wowhead.com/spell=19647/spell-lock
> - https://www.wowhead.com/spell=19505/devour-magic
> - https://www.wowhead.com/spell=20707/soulstone
> - https://www.wowhead.com/spell=48020/demonic-circle-teleport
> - https://www.wowhead.com/spell=111771/demonic-gateway
> - https://www.wowhead.com/spell=5484/howl-of-terror
> - https://www.wowhead.com/spell=30283/shadowfury
> - https://www.wowhead.com/spell=6789/mortal-coil
> - https://www.wowhead.com/spell=5782/fear
> - https://www.wowhead.com/spell=5697/unending-breath
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Affliction Warlock is a ranged DPS specialization built around maintaining a suite of damage-over-time effects and then amplifying them with cooldowns. The core gameplay loop is: apply and maintain **Agony** (SpellID 980) and **Corruption** (SpellID 146739) on the target(s), spend Soul Shards (generated primarily by Agony ticks) on **Unstable Affliction** (SpellID 316099) for single target or **Seed of Corruption** (SpellID 27243) for AoE, and burst with **Summon Darkglare** (SpellID 205180) and other cooldowns lined up while DoTs are at maximum strength. Shadow Bolt (or Drain Soul / Malefic Grasp depending on build) is the filler cast.

Damage profile: primarily sustained, ramping Shadow damage from DoTs, with strong multi-target/cleave through Seed of Corruption and curse spreading. Burst is "windowed" — the spec wants DoTs already applied before pressing cooldowns, so its damage is front-loaded after a ramp rather than instant.

Primary weakness: ramp dependency. When targets die quickly, when the warlock is forced to re-apply DoTs after target swaps, or when heavy movement interrupts hardcast spenders, throughput drops. It is not a strong instant-burst spec for sudden priority targets.

Survivability is a notable strength: a stacked shield/absorb kit (Soul Leech overshield, Dark Pact absorb, Unending Resolve damage reduction) lets the spec self-buffer through raid damage windows.

## Role in Raid

- **Role:** Ranged DPS. Not a healer, not a tank.
- **Battle resurrection:** YES. **Soulstone** (SpellID 20707) is an in-combat resurrection and counts against the raid's combat-res limit. This is a meaningful raid utility — the warlock can pre-cast a Soulstone on a player before a pull or battle-res a dead player in combat.
- **Bloodlust/Heroism equivalent:** NO. Warlocks do not provide a Bloodlust-class raid haste cooldown.
- **Raid buffs/debuffs:** Affliction's group contribution is primarily utility (Healthstones, Demonic Gateway, curses) and its battle res, rather than a unique percentage raid damage buff. See Known Gaps — the exact current raid-wide buff/debuff package for 12.0.5 could not be fully confirmed from a live source and should be verified.
- **Group defensives / externals:** Provides **Healthstones** (raid-wide self-heal items the warlock creates for the group) and **Demonic Gateway** (SpellID 111771) for group repositioning. It does NOT provide a targeted damage-reduction external onto another player (no Pain Suppression / Blessing-style external).
- **Mobility profile:** Moderate. DoTs can be maintained while moving and several procs/instants are usable on the move, but the spec still wants to stand still for hardcast spenders and filler. Movement tools are **Demonic Circle: Teleport** (SpellID 48020) and **Demonic Gateway** (SpellID 111771). No blink/leap-style gap closer.

## Abilities Reference

Core DoTs and spenders:
- **Agony** — SpellID 980. Stacking Shadow DoT, primary Soul Shard generator. Maintain at all times.
- **Corruption** — SpellID 146739. Baseline Shadow DoT. Maintain at all times.
- **Unstable Affliction** — SpellID 316099. Single-target Soul Shard spender; also amplifies the warlock's other affliction DoTs.
- **Seed of Corruption** — SpellID 27243. AoE Soul Shard spender; detonates for area Shadow damage and spreads Corruption.

Cooldowns:
- **Summon Darkglare** — SpellID 205180. ~2-minute cooldown. Summons Darkglare for 20 seconds; primary damage burst cooldown, lined up with full DoTs and dumped shards.
- **Soul Rot** — SpellID 386997. ~1-minute cooldown. Channeled/leeching Shadow damage over 8 seconds across nearby targets; also provides self-healing via the leech aura.

Filler / supporting:
- **Shadow Bolt** — filler cast during downtime (SpellID 317791 / 686; see Confirmed Spell IDs section).
- **Dark Harvest** — talent, roughly 1-minute cooldown per Icy Veins; deals damage to all targets carrying the warlock's baseline DoTs (SpellID 1257052 / 1257065; see Confirmed Spell IDs section).
- **Malevolence** — Hellcaller hero talent cooldown (SpellID 446285 / 430014; see Confirmed Spell IDs section).
- **Haunt** — Shadow DoT amplifier cast on cooldown in both hero-tree builds (SpellID 48181).
- **Malefic Grasp** — Hellcaller filler channel, amplifies active DoTs (SpellID 1261153).
- **Drain Soul** — Soul Harvester filler channel, executes enemies below 20% (SpellID 198590).
- **Wither** — Hellcaller DoT replacing Corruption in that build (SpellID 445468 / 445474 / 1279686; multiple IDs).
- Talent-dependent additions such as Phantom Singularity, Vile Taint, and Wither appear in Unstable Affliction's amplification list and in build discussions; their selection depends on the chosen talent tree.

Key passives/procs (build-dependent): Soul Leech (overshield from damage dealt), Soul Link (damage mitigation), Sudden Onset (reduced Agony ramp). Exact passive SpellIDs not confirmed live — see Known Gaps.

## Rotation / Priority

This is logical/conceptual priority ordering, NOT a DPS benchmark or simulation result. See the SimulationCraft Reference section below for verified APLs.

**Single-target opener (per Method):** precast Haunt → apply Agony → apply Corruption → Summon Darkglare plus on-use trinkets/racials → Malevolence (if Hellcaller) → spend all shards on Unstable Affliction → Dark Harvest (if specced) → spend remaining shards on Unstable Affliction → resume filler (Malefic Grasp / Shadow Bolt).

**Sustained single target:**
1. Keep Agony and Corruption (or Wither, if talented) active 100% of the time — never let them fall off.
2. Use Dark Harvest on cooldown (or hold briefly for priority adds coming up).
3. Pool Soul Shards to dump during the Summon Darkglare window.
4. Spend shards on Unstable Affliction.
5. Fill with Shadow Bolt / Malefic Grasp / Drain Soul (per build).

**AoE / multi-target:**
1. Apply Agony to as many targets as practical (typically 4–6 priority targets).
2. Spread Corruption and use curse-spreading effects if talented.
3. Cast Seed of Corruption as the primary shard spender, refreshing on new packs.
4. Use Soul Rot and Summon Darkglare to amplify the DoT spread.

## Defensives

Every personal/raid defensive the spec has access to. "RaidLens usage" describes how to judge correct use during a damage window.

- **Unending Resolve** — SpellID 104773. ~3-minute cooldown, 8-second duration. Reduces damage taken by 25% (all schools); also grants immunity to interrupt/silence during its duration.
  - *RaidLens usage:* This is the main planned-mitigation cooldown. For a large predictable raid hit, check whether Unending Resolve was active in the 8-second window covering the hit. If the warlock took heavy avoidable or scripted damage with this off cooldown and unused, flag it. Note the long ~3-min cooldown — only expect it on the biggest windows.

- **Dark Pact** — SpellID 108416. 1-minute cooldown, 20-second buff. Absorbs a large amount of damage (all schools) and heals slightly each second over its duration.
  - *RaidLens usage:* Short cooldown, so it should be used freely on recurring damage windows. If the warlock died to a hit (or chunk of sustained raid damage) while Dark Pact was available and unused, that is a strong flag. Because it is only ~1 min, expect frequent uptime across a pull.

- **Soul Leech** (passive) — overshield generated from damage dealt. Build-dependent passive; SpellID not confirmed live.
  - *RaidLens usage:* Passive, not actively pressed — do not flag as "unused." Treat as background mitigation. A warlock doing low damage will have a thinner Soul Leech shield, which can compound deaths.

- **Soul Link** (passive/talent) — damage mitigation tied to the pet. SpellID not confirmed live.
  - *RaidLens usage:* Passive. Do not flag as unused. Note that losing the pet (or Grimoire of Sacrifice builds) changes this; do not assume it is always present.

- **Mortal Coil** — SpellID 6789. 45-second cooldown. Fears the target for 3 seconds AND heals the warlock for a percentage of health. Talent choice node with Howl of Terror / Shadowfury.
  - *RaidLens usage:* Doubles as a small self-heal. Only present if talented (mutually exclusive with other CC in that node), so do not assume availability. If talented and the warlock died at low health with Mortal Coil up, it could be a minor flag, but it is primarily CC.

- **Healthstone** — consumable created by the warlock (instant self-heal item). SpellID not confirmed live (page 403'd).
  - *RaidLens usage:* Every player can use their own Healthstone. If a warlock (or any raider) died at low health with a Healthstone still available, that is a flag — but Healthstone usage is a personal/raid-wide consumable, not unique tracking for this spec.

- **Drain Life** — leech filler that heals the warlock; talent/situational. SpellID not confirmed live.
  - *RaidLens usage:* Self-sustain filler. Not a true cooldown; do not flag as an unused defensive.

## Utility

**Interrupt:**
- **Spell Lock** — SpellID 19647. This is the Felhunter (Felguard pet does not provide it) pet ability: instant, 40-yard range, 24-second cooldown, interrupts the current cast and locks that spell school for ~7 seconds. **This is the spec's ONLY interrupt, and it is pet-based.**
  - IMPORTANT for RaidLens: Affliction has NO personal/baseline interrupt on the warlock itself. The interrupt requires the Felhunter pet (or the talent that grants Spell Lock to other pets / via Command Demon). Builds running **Grimoire of Sacrifice** (SpellID 108503) sacrifice the pet entirely and therefore have NO interrupt available at all. When judging a missed interrupt, do not assume an Affliction warlock could kick unless a Felhunter was present. If the log shows no pet / a sacrificed pet, the warlock has no interrupt to miss.

**Dispel:**
- **Devour Magic** — SpellID 19505. Felhunter pet ability. Dispels Magic. It can remove a beneficial Magic effect from an enemy and (build-dependent) a harmful Magic effect; exact friendly-target dispel scope for 12.0.5 not fully confirmed live — see Known Gaps. Like the interrupt, it requires the Felhunter pet and is unavailable under Grimoire of Sacrifice.
  - Note: Affliction is NOT a primary raid dispel class. Treat Devour Magic as situational pet utility, not reliable raid dispel coverage.

**Crowd control:**
- **Fear** — SpellID 5782. Single-target fear (causes target to flee).
- **Howl of Terror** — SpellID 5484. 40-second cooldown. AoE fear, up to 5 targets within 10 yards, ~20 seconds.
- **Shadowfury** — SpellID 30283. 1-minute cooldown. AoE stun, 3 seconds, 8-yard radius. (Talent node shared with Howl of Terror / Mortal Coil — only one is typically chosen.)
- **Mortal Coil** — SpellID 6789. Single-target fear + self-heal (see Defensives).
- **Banish** — single-target incapacitate vs. Demon/Elemental enemies. SpellID not confirmed live (page 403'd).

**Externals:** None. Affliction cannot place a damage-reduction or immunity buff on another raider. (Soulstone battle-res is its only "save another player" tool, and only after death.)

**Raid buffs/debuffs & group utility:**
- **Soulstone** — SpellID 20707. Battle resurrection (counts against the raid combat-res limit).
- **Demonic Gateway** — SpellID 111771. Two-portal group teleport for repositioning, ~10-second cooldown to recast.
- **Healthstones** — created for the raid; group self-heal consumables.
- **Curse of Tongues** and other curses — utility debuffs (slow enemy casting, etc.). Curse of Tongues SpellID not confirmed live (page 403'd).
- **Unending Breath** — SpellID 5697. Underwater breathing / swim speed utility buff (non-combat).

**Movement tools:**
- **Demonic Circle: Teleport** — SpellID 48020. 30-second cooldown, teleport up to 40 yards back to a placed circle; also breaks snares.
- **Demonic Gateway** — SpellID 111771 (see above).

## Consumables and Enchants

The exact current-patch (12.0.5) consumable, gem, and enchant recommendations could not be confirmed from a live source during this research pass (the relevant Wowhead enchant/gear sub-pages rendered only navigation, and item pages were not individually fetched). General profile only:

- Stat priority and best-in-slot enchants/gems should be re-pulled from a live source before relying on them. See Known Gaps.
- Healthstone (created by the warlock) is the spec's signature consumable contribution to the raid.

No specific consumable, gem, flask, food, or enchant item IDs are included because none were confirmed live. Do not infer them.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Hellcaller**, **Soul Harvester**

### Hellcaller — Talent String

```
CkQAAAAAAAAAAAAAAAAAAAAAAwMzMzoZhhZmZmlBAAYmZZWmZmlxAAWgBmFjGzAysBWGAAAmBAAmZAzMjxwwMjZmZGMzMzAAmBG
```

### Soul Harvester — Talent String

```
CkQAAAAAAAAAAAAAAAAAAAAAAwMzMzoZhhZmZmlBAAYmZZ2MzsMzAAjllBGwEMDbBG2GAAAmBAAwMDzMjxwwMmZmxgZmZGAwMwA
```

### Metrics

Metrics not captured in source.

### Damage Distribution (SimC, share of total)

**Hellcaller (single-target Patchwerk)**

Unstable Affliction is nearly 30% of damage on its own; the two largest sources after it are pet/filler casts (Malefic Grasp channel amplification and the Darkglare Eye Beam), confirming that maintaining full DoTs before the Darkglare window is the most impactful thing to track in logs.

| Ability | Share |
|---|---|
| Unstable Affliction | 29.4% |
| Malefic Grasp (amplified) | 7.9% |
| Eye Beam (Darkglare pet) | 6.6% |
| Shadow Bolt | 6.6% |
| Haunt | 6.4% |
| Wrath of Nathreza | 5.2% |
| Shadow of Nathreza | 4.9% |
| Wither (direct) | 4.3% |
| Dark Harvest | 3.3% |
| Malevolence (_proc) | 1.1% |
| Voidstalker Sting | 1.1% |
| Lash of Pain (pet) | 0.4% |

**Soul Harvester (single-target Patchwerk)**

Soul Harvester replaces the Malefic Grasp channel with Drain Soul as primary filler, bringing Demonic Soul and Wicked Reaping (Soul Harvester hero-tree abilities) as significant contributors; Unstable Affliction remains the #1 ability but drops to ~21% as more sources split the damage.

| Ability | Share |
|---|---|
| Unstable Affliction | 20.7% |
| Drain Soul | 15.5% |
| Demonic Soul | 7.4% |
| Wicked Reaping | 7.3% |
| Haunt | 5.8% |
| Eye Beam (Darkglare pet) | 5.6% |
| Soul Swipe (Demonic Soul pet) | 4.4% |
| Shadow of Nathreza | 4.4% |
| Corruption (direct) | 4.3% |
| Dark Harvest | 4.1% |
| Wrath of Nathreza | 4.1% |
| Soul Anathema | 3.9% |
| Shared Fate | 1.3% |

### Action Priority List — Hellcaller

```
actions.precombat=summon_pet
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.summon_darkglare.duration=0|cooldown.summon_darkglare.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.summon_darkglare.duration=0|cooldown.summon_darkglare.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_buff_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_buff_duration,value=trinket.2.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_buff_duration)*(1+0.5*trinket.2.has_buff.intellect)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%variable.trinket_1_buff_duration)*(1+0.5*trinket.1.has_buff.intellect)*(variable.trinket_1_sync))
actions.precombat+=/grimoire_of_sacrifice,if=talent.grimoire_of_sacrifice
actions.precombat+=/seed_of_corruption,if=(hero_tree.soul_harvester&active_enemies>1)|active_enemies>2
actions.precombat+=/haunt,if=active_enemies<2|(hero_tree.hellcaller&active_enemies<3)

# Executed every time the actor is available.
actions=call_action_list,name=variables
actions+=/call_action_list,name=end_of_fight
actions+=/call_action_list,name=ogcd
actions+=/call_action_list,name=items
actions+=/call_action_list,name=soul_harvester,if=hero_tree.soul_harvester
actions+=/call_action_list,name=hellcaller,if=hero_tree.hellcaller
actions+=/seed_of_corruption,if=talent.nocturnal_yield&active_enemies>1&buff.nightfall.react&(buff.nightfall.react=buff.nightfall.max_stack|buff.nightfall.remains<execute_time*buff.nightfall.max_stack)
actions+=/malefic_grasp,chain=1,early_chain_if=buff.nightfall.react,if=pet.darkglare.active
actions+=/drain_soul,chain=1,early_chain_if=buff.nightfall.react,interrupt_if=tick_time>0.5
actions+=/shadow_bolt

actions.HC_aoe=haunt
actions.HC_aoe+=/seed_of_corruption,if=(!dot.wither.ticking|dot.wither.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.HC_aoe+=/dark_harvest
actions.HC_aoe+=/agony,target_if=min:remains,if=active_dot.agony<(10+(8*!talent.sow_the_seeds))&remains<5
actions.HC_aoe+=/summon_darkglare
actions.HC_aoe+=/malevolence
actions.HC_aoe+=/seed_of_corruption,if=talent.sow_the_seeds|(!pet.darkglare.active&active_enemies>(5+talent.cull_the_weak))
actions.HC_aoe+=/unstable_affliction,if=!talent.sow_the_seeds|buff.shard_instability.react
actions.HC_aoe+=/agony,target_if=min:remains,if=remains<duration*0.5
actions.HC_aoe+=/malefic_grasp,if=pet.darkglare.remains<gcd

actions.HC_cleave=haunt
actions.HC_cleave+=/seed_of_corruption,if=talent.sow_the_seeds&!dot.wither.ticking&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.HC_cleave+=/wither,target_if=min:remains,if=remains<5&!(action.seed_of_corruption.in_flight|dot.seed_of_corruption.remains>0)&fight_remains>remains+5
actions.HC_cleave+=/agony,target_if=refreshable
actions.HC_cleave+=/dark_harvest
actions.HC_cleave+=/summon_darkglare
actions.HC_cleave+=/malevolence
actions.HC_cleave+=/malefic_grasp,if=pet.darkglare.remains<gcd
actions.HC_cleave+=/unstable_affliction,if=!talent.sow_the_seeds&!talent.patient_zero&(pet.darkglare.remains|buff.malevolence.remains|soul_shard>4|buff.shard_instability.react|(talent.cascading_calamity&buff.cascading_calamity.remains<gcd.max))
actions.HC_cleave+=/seed_of_corruption,if=talent.patient_zero&talent.sow_the_seeds

# Haunt on CD for apex
actions.HC_st=haunt
actions.HC_st+=/agony,if=refreshable
actions.HC_st+=/wither,if=refreshable
# Dark Harvest on CD regardless of Darkglare
actions.HC_st+=/dark_harvest,if=execute_time<(dot.agony.remains<?dot.corruption.remains)
# Refresh agony right before Darkglare so it lasts the entire duration
actions.HC_st+=/agony,if=dot.agony.remains<20&cooldown.summon_darkglare.remains<gcd
actions.HC_st+=/summon_darkglare
actions.HC_st+=/malevolence
actions.HC_st+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.HC_st+=/drain_soul,if=buff.nightfall.react>1
actions.HC_st+=/shadow_bolt,if=buff.nightfall.react>1
# Always maintain Cascading Calamity, only dump inside Malevolence
actions.HC_st+=/unstable_affliction,if=pet.darkglare.remains|buff.malevolence.remains|soul_shard>4|buff.shard_instability.react|buff.cascading_calamity.remains<gcd.max

actions.SH_aoe=haunt
actions.SH_aoe+=/seed_of_corruption,if=(!dot.corruption.ticking|dot.corruption.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
# Do not care about losing shards in 2+ targets
actions.SH_aoe+=/dark_harvest
# Maintain ~5 agonies (will be 6 with Shared Agony)
actions.SH_aoe+=/agony,target_if=min:remains,if=active_dot.agony<5&remains<5
actions.SH_aoe+=/summon_darkglare
actions.SH_aoe+=/seed_of_corruption,if=talent.sow_the_seeds|(!pet.darkglare.active&active_enemies>9)
actions.SH_aoe+=/unstable_affliction,if=!talent.sow_the_seeds|buff.shard_instability.react
actions.SH_aoe+=/agony,target_if=min:remains,if=remains<duration*0.5
actions.SH_aoe+=/malefic_grasp,if=pet.darkglare.remains<gcd

actions.SH_cleave=haunt
actions.SH_cleave+=/seed_of_corruption,if=(!dot.corruption.ticking|dot.corruption.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.SH_cleave+=/unstable_affliction,cycle_targets=1,if=!ticking&cooldown.dark_harvest.remains<gcd.max
# Do not care about losing shards in 2+ targets
actions.SH_cleave+=/dark_harvest
actions.SH_cleave+=/agony,target_if=refreshable
actions.SH_cleave+=/summon_darkglare
actions.SH_cleave+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.SH_cleave+=/drain_soul,if=buff.nightfall.react>1
actions.SH_cleave+=/shadow_bolt,if=buff.nightfall.react>1
actions.SH_cleave+=/unstable_affliction,if=!talent.patient_zero&!talent.sow_the_seeds&(soul_shard|buff.shard_instability.react)
actions.SH_cleave+=/seed_of_corruption,if=talent.patient_zero&talent.sow_the_seeds

# Haunt on CD for apex, regardless of Nightfall stacks
actions.SH_st=haunt
actions.SH_st+=/agony,if=remains<3
actions.SH_st+=/corruption,if=remains<3
# Do not overcap shards
actions.SH_st+=/dark_harvest,if=soul_shard<3&execute_time<(dot.agony.remains<?dot.corruption.remains)
# use Dark Harvest only outside Darkglare
actions.SH_st+=/summon_darkglare,if=cooldown.dark_harvest.remains
actions.SH_st+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.SH_st+=/drain_soul,if=buff.nightfall.react>1
actions.SH_st+=/shadow_bolt,if=buff.nightfall.react>1
# SH does not care about saving shards in pure patchwerk. In reality it's good to save 1 shard for cascading calamity
actions.SH_st+=/unstable_affliction,if=soul_shard|buff.shard_instability.react

actions.end_of_fight=unstable_affliction,if=soul_shard&fight_remains<8&(!talent.patient_zero&!talent.sow_the_seeds)
actions.end_of_fight+=/seed_of_corruption,if=soul_shard&fight_remains<8&(talent.patient_zero&talent.sow_the_seeds)
actions.end_of_fight+=/drain_soul,if=buff.nightfall.react&fight_remains<5
actions.end_of_fight+=/shadow_bolt,if=buff.nightfall.react&fight_remains<5

actions.hellcaller=call_action_list,name=HC_st,if=active_enemies=1
actions.hellcaller+=/call_action_list,name=HC_cleave,if=active_enemies=2
actions.hellcaller+=/call_action_list,name=HC_aoe,if=active_enemies>2

actions.items=use_item,use_off_gcd=1,slot=trinket1,if=(variable.darkglare_active|!talent.summon_darkglare|variable.trinket_1_will_lose_cast)&(variable.trinket_priority=1|!trinket.2.has_cooldown|(trinket.2.cooldown.remains|variable.trinket_priority=2&cooldown.summon_darkglare.remains>20&!variable.darkglare_active&trinket.2.cooldown.remains<cooldown.summon_darkglare.remains))&variable.trinket_1_buffs|(variable.trinket_1_buff_duration+1>=fight_remains)
actions.items+=/use_item,slot=trinket2,if=(variable.darkglare_active|!talent.summon_darkglare|variable.trinket_2_will_lose_cast)&(variable.trinket_priority=2|!trinket.1.has_cooldown|(trinket.1.cooldown.remains|variable.trinket_priority=1&cooldown.summon_darkglare.remains>20&!variable.darkglare_active&trinket.1.cooldown.remains<cooldown.summon_darkglare.remains))&variable.trinket_2_buffs|(variable.trinket_2_buff_duration+1>=fight_remains)
actions.items+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs)|talent.summon_darkglare&cooldown.summon_darkglare.remains_expected>20&!prev_gcd.1.summon_darkglare|!talent.summon_darkglare)
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs)|talent.summon_darkglare&cooldown.summon_darkglare.remains_expected>20&!prev_gcd.1.summon_darkglare|!talent.summon_darkglare)
actions.items+=/use_item,use_off_gcd=1,slot=main_hand

actions.ogcd=potion,use_off_gcd=1,if=variable.cds_active|fight_remains<32
actions.ogcd+=/berserking,use_off_gcd=1,if=variable.cds_active|fight_remains<14
actions.ogcd+=/blood_fury,use_off_gcd=1,if=variable.cds_active|fight_remains<17
actions.ogcd+=/fireblood,use_off_gcd=1,if=variable.cds_active|fight_remains<10
actions.ogcd+=/ancestral_call,use_off_gcd=1,if=variable.cds_active|fight_remains<17

actions.soul_harvester=call_action_list,name=SH_st,if=active_enemies=1
actions.soul_harvester+=/call_action_list,name=SH_cleave,if=active_enemies=2
actions.soul_harvester+=/call_action_list,name=SH_aoe,if=active_enemies>2

actions.variables=variable,name=cds_active,op=set,value=!talent.summon_darkglare|pet.darkglare.remains
actions.variables+=/variable,name=darkglare_active,op=set,value=pet.darkglare.active|(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains)<20
actions.variables+=/cycling_variable,name=min_agony,op=min,value=dot.agony.remains+(99*!dot.agony.remains)
actions.variables+=/variable,name=trinket_1_will_lose_cast,value=((floor((fight_remains%trinket.1.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(floor((fight_remains%trinket.1.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_darkglare.remains)%trinket.1.cooldown.duration)+1))|((floor((fight_remains%trinket.1.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(((fight_remains-cooldown.summon_darkglare.remains%%trinket.1.cooldown.duration)-cooldown.summon_darkglare.remains-variable.trinket_1_buff_duration)>0)))&cooldown.summon_darkglare.remains>20
actions.variables+=/variable,name=trinket_2_will_lose_cast,value=((floor((fight_remains%trinket.2.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(floor((fight_remains%trinket.2.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_darkglare.remains)%trinket.2.cooldown.duration)+1))|((floor((fight_remains%trinket.2.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(((fight_remains-cooldown.summon_darkglare.remains%%trinket.2.cooldown.duration)-cooldown.summon_darkglare.remains-variable.trinket_2_buff_duration)>0)))&cooldown.summon_darkglare.remains>20
```

### Action Priority List — Soul Harvester

```
actions.precombat=summon_pet
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.summon_darkglare.duration=0|cooldown.summon_darkglare.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.summon_darkglare.duration=0|cooldown.summon_darkglare.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_buff_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_buff_duration,value=trinket.2.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_buff_duration)*(1+0.5*trinket.2.has_buff.intellect)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%variable.trinket_1_buff_duration)*(1+0.5*trinket.1.has_buff.intellect)*(variable.trinket_1_sync))
actions.precombat+=/grimoire_of_sacrifice,if=talent.grimoire_of_sacrifice
actions.precombat+=/seed_of_corruption,if=(hero_tree.soul_harvester&active_enemies>1)|active_enemies>2
actions.precombat+=/haunt,if=active_enemies<2|(hero_tree.hellcaller&active_enemies<3)

# Executed every time the actor is available.
actions=call_action_list,name=variables
actions+=/call_action_list,name=end_of_fight
actions+=/call_action_list,name=ogcd
actions+=/call_action_list,name=items
actions+=/call_action_list,name=soul_harvester,if=hero_tree.soul_harvester
actions+=/call_action_list,name=hellcaller,if=hero_tree.hellcaller
actions+=/seed_of_corruption,if=talent.nocturnal_yield&active_enemies>1&buff.nightfall.react&(buff.nightfall.react=buff.nightfall.max_stack|buff.nightfall.remains<execute_time*buff.nightfall.max_stack)
actions+=/malefic_grasp,chain=1,early_chain_if=buff.nightfall.react,if=pet.darkglare.active
actions+=/drain_soul,chain=1,early_chain_if=buff.nightfall.react,interrupt_if=tick_time>0.5
actions+=/shadow_bolt

actions.HC_aoe=haunt
actions.HC_aoe+=/seed_of_corruption,if=(!dot.wither.ticking|dot.wither.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.HC_aoe+=/dark_harvest
actions.HC_aoe+=/agony,target_if=min:remains,if=active_dot.agony<(10+(8*!talent.sow_the_seeds))&remains<5
actions.HC_aoe+=/summon_darkglare
actions.HC_aoe+=/malevolence
actions.HC_aoe+=/seed_of_corruption,if=talent.sow_the_seeds|(!pet.darkglare.active&active_enemies>(5+talent.cull_the_weak))
actions.HC_aoe+=/unstable_affliction,if=!talent.sow_the_seeds|buff.shard_instability.react
actions.HC_aoe+=/agony,target_if=min:remains,if=remains<duration*0.5
actions.HC_aoe+=/malefic_grasp,if=pet.darkglare.remains<gcd

actions.HC_cleave=haunt
actions.HC_cleave+=/seed_of_corruption,if=talent.sow_the_seeds&!dot.wither.ticking&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.HC_cleave+=/wither,target_if=min:remains,if=remains<5&!(action.seed_of_corruption.in_flight|dot.seed_of_corruption.remains>0)&fight_remains>remains+5
actions.HC_cleave+=/agony,target_if=refreshable
actions.HC_cleave+=/dark_harvest
actions.HC_cleave+=/summon_darkglare
actions.HC_cleave+=/malevolence
actions.HC_cleave+=/malefic_grasp,if=pet.darkglare.remains<gcd
actions.HC_cleave+=/unstable_affliction,if=!talent.sow_the_seeds&!talent.patient_zero&(pet.darkglare.remains|buff.malevolence.remains|soul_shard>4|buff.shard_instability.react|(talent.cascading_calamity&buff.cascading_calamity.remains<gcd.max))
actions.HC_cleave+=/seed_of_corruption,if=talent.patient_zero&talent.sow_the_seeds

# Haunt on CD for apex
actions.HC_st=haunt
actions.HC_st+=/agony,if=refreshable
actions.HC_st+=/wither,if=refreshable
# Dark Harvest on CD regardless of Darkglare
actions.HC_st+=/dark_harvest,if=execute_time<(dot.agony.remains<?dot.corruption.remains)
# Refresh agony right before Darkglare so it lasts the entire duration
actions.HC_st+=/agony,if=dot.agony.remains<20&cooldown.summon_darkglare.remains<gcd
actions.HC_st+=/summon_darkglare
actions.HC_st+=/malevolence
actions.HC_st+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.HC_st+=/drain_soul,if=buff.nightfall.react>1
actions.HC_st+=/shadow_bolt,if=buff.nightfall.react>1
# Always maintain Cascading Calamity, only dump inside Malevolence
actions.HC_st+=/unstable_affliction,if=pet.darkglare.remains|buff.malevolence.remains|soul_shard>4|buff.shard_instability.react|buff.cascading_calamity.remains<gcd.max

actions.SH_aoe=haunt
actions.SH_aoe+=/seed_of_corruption,if=(!dot.corruption.ticking|dot.corruption.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
# Do not care about losing shards in 2+ targets
actions.SH_aoe+=/dark_harvest
# Maintain ~5 agonies (will be 6 with Shared Agony)
actions.SH_aoe+=/agony,target_if=min:remains,if=active_dot.agony<5&remains<5
actions.SH_aoe+=/summon_darkglare
actions.SH_aoe+=/seed_of_corruption,if=talent.sow_the_seeds|(!pet.darkglare.active&active_enemies>9)
actions.SH_aoe+=/unstable_affliction,if=!talent.sow_the_seeds|buff.shard_instability.react
actions.SH_aoe+=/agony,target_if=min:remains,if=remains<duration*0.5
actions.SH_aoe+=/malefic_grasp,if=pet.darkglare.remains<gcd

actions.SH_cleave=haunt
actions.SH_cleave+=/seed_of_corruption,if=(!dot.corruption.ticking|dot.corruption.refreshable)&!dot.seed_of_corruption.ticking&!prev.seed_of_corruption&!action.seed_of_corruption.in_flight
actions.SH_cleave+=/unstable_affliction,cycle_targets=1,if=!ticking&cooldown.dark_harvest.remains<gcd.max
# Do not care about losing shards in 2+ targets
actions.SH_cleave+=/dark_harvest
actions.SH_cleave+=/agony,target_if=refreshable
actions.SH_cleave+=/summon_darkglare
actions.SH_cleave+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.SH_cleave+=/drain_soul,if=buff.nightfall.react>1
actions.SH_cleave+=/shadow_bolt,if=buff.nightfall.react>1
actions.SH_cleave+=/unstable_affliction,if=!talent.patient_zero&!talent.sow_the_seeds&(soul_shard|buff.shard_instability.react)
actions.SH_cleave+=/seed_of_corruption,if=talent.patient_zero&talent.sow_the_seeds

# Haunt on CD for apex, regardless of Nightfall stacks
actions.SH_st=haunt
actions.SH_st+=/agony,if=remains<3
actions.SH_st+=/corruption,if=remains<3
# Do not overcap shards
actions.SH_st+=/dark_harvest,if=soul_shard<3&execute_time<(dot.agony.remains<?dot.corruption.remains)
# use Dark Harvest only outside Darkglare
actions.SH_st+=/summon_darkglare,if=cooldown.dark_harvest.remains
actions.SH_st+=/malefic_grasp,if=buff.nightfall.react>1|pet.darkglare.remains<gcd
actions.SH_st+=/drain_soul,if=buff.nightfall.react>1
actions.SH_st+=/shadow_bolt,if=buff.nightfall.react>1
# SH does not care about saving shards in pure patchwerk. In reality it's good to save 1 shard for cascading calamity
actions.SH_st+=/unstable_affliction,if=soul_shard|buff.shard_instability.react

actions.end_of_fight=unstable_affliction,if=soul_shard&fight_remains<8&(!talent.patient_zero&!talent.sow_the_seeds)
actions.end_of_fight+=/seed_of_corruption,if=soul_shard&fight_remains<8&(talent.patient_zero&talent.sow_the_seeds)
actions.end_of_fight+=/drain_soul,if=buff.nightfall.react&fight_remains<5
actions.end_of_fight+=/shadow_bolt,if=buff.nightfall.react&fight_remains<5

actions.hellcaller=call_action_list,name=HC_st,if=active_enemies=1
actions.hellcaller+=/call_action_list,name=HC_cleave,if=active_enemies=2
actions.hellcaller+=/call_action_list,name=HC_aoe,if=active_enemies>2

actions.items=use_item,use_off_gcd=1,slot=trinket1,if=(variable.darkglare_active|!talent.summon_darkglare|variable.trinket_1_will_lose_cast)&(variable.trinket_priority=1|!trinket.2.has_cooldown|(trinket.2.cooldown.remains|variable.trinket_priority=2&cooldown.summon_darkglare.remains>20&!variable.darkglare_active&trinket.2.cooldown.remains<cooldown.summon_darkglare.remains))&variable.trinket_1_buffs|(variable.trinket_1_buff_duration+1>=fight_remains)
actions.items+=/use_item,slot=trinket2,if=(variable.darkglare_active|!talent.summon_darkglare|variable.trinket_2_will_lose_cast)&(variable.trinket_priority=2|!trinket.1.has_cooldown|(trinket.1.cooldown.remains|variable.trinket_priority=1&cooldown.summon_darkglare.remains>20&!variable.darkglare_active&trinket.1.cooldown.remains<cooldown.summon_darkglare.remains))&variable.trinket_2_buffs|(variable.trinket_2_buff_duration+1>=fight_remains)
actions.items+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs)|talent.summon_darkglare&cooldown.summon_darkglare.remains_expected>20&!prev_gcd.1.summon_darkglare|!talent.summon_darkglare)
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs)|talent.summon_darkglare&cooldown.summon_darkglare.remains_expected>20&!prev_gcd.1.summon_darkglare|!talent.summon_darkglare)
actions.items+=/use_item,use_off_gcd=1,slot=main_hand

actions.ogcd=potion,use_off_gcd=1,if=variable.cds_active|fight_remains<32
actions.ogcd+=/berserking,use_off_gcd=1,if=variable.cds_active|fight_remains<14
actions.ogcd+=/blood_fury,use_off_gcd=1,if=variable.cds_active|fight_remains<17
actions.ogcd+=/fireblood,use_off_gcd=1,if=variable.cds_active|fight_remains<10
actions.ogcd+=/ancestral_call,use_off_gcd=1,if=variable.cds_active|fight_remains<17

actions.soul_harvester=call_action_list,name=SH_st,if=active_enemies=1
actions.soul_harvester+=/call_action_list,name=SH_cleave,if=active_enemies=2
actions.soul_harvester+=/call_action_list,name=SH_aoe,if=active_enemies>2

actions.variables=variable,name=cds_active,op=set,value=!talent.summon_darkglare|pet.darkglare.remains
actions.variables+=/variable,name=darkglare_active,op=set,value=pet.darkglare.active|(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains)<20
actions.variables+=/cycling_variable,name=min_agony,op=min,value=dot.agony.remains+(99*!dot.agony.remains)
actions.variables+=/variable,name=trinket_1_will_lose_cast,value=((floor((fight_remains%trinket.1.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(floor((fight_remains%trinket.1.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_darkglare.remains)%trinket.1.cooldown.duration)+1))|((floor((fight_remains%trinket.1.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(((fight_remains-cooldown.summon_darkglare.remains%%trinket.2.cooldown.duration)-cooldown.summon_darkglare.remains-variable.trinket_1_buff_duration)>0)))&cooldown.summon_darkglare.remains>20
actions.variables+=/variable,name=trinket_2_will_lose_cast,value=((floor((fight_remains%trinket.2.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(floor((fight_remains%trinket.2.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_darkglare.remains)%trinket.2.cooldown.duration)+1))|((floor((fight_remains%trinket.2.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_darkglare.duration-cooldown.summon_darkglare.remains))%cooldown.summon_darkglare.duration))&(((fight_remains-cooldown.summon_darkglare.remains%%trinket.2.cooldown.duration)-cooldown.summon_darkglare.remains-variable.trinket_2_buff_duration)>0)))&cooldown.summon_darkglare.remains>20
```

## Confirmed Spell IDs (SimulationCraft HTML)

Spell IDs matched by exact name from spell-ids-reference.json (SimulationCraft Midnight 12.0.5 source). Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Agony | 980, 1261166 (multiple: base cast + variants) | shadow | cast |
| Corruption | 172, 146739 (multiple: base cast + variants) | shadow | cast |
| Unstable Affliction | 1259790, 1261176 (multiple: base cast + variants) | shadow | cast |
| Dark Harvest | 1257052, 1257065 (multiple: base cast + variants) | shadowflame | cast |
| Haunt | 48181 | shadow | cast |
| Malefic Grasp | 1261153 | shadow | cast |
| Malevolence | 446285, 430014 (multiple: base cast + variants) | shadowflame | cast |
| Shadow Bolt | 317791, 686 (multiple: base cast + variants) | shadow | cast |
| Drain Soul | 198590 | shadow | cast |
| Wither | 445468, 445474, 1279686 (multiple: base cast + variants) | shadowflame | cast |
| Demonic Soul | 449801 | shadow | cast |
| Summon Darkglare | 205180 | shadow | cast |
| Shadow of Nathreza | 1262710 | shadow | cast |
| Shadowbolt Volley | 453176 | shadow | cast |
| Shared Fate | 450591 | shadow | cast |
| Soul Anathema | 450538 | shadow | cast |
| Wicked Reaping | 449826 | shadow | cast |
| Wrath of Nathreza | 1278047 | shadow | cast |
| Blackened Soul | 445736 | shadowflame | cast |
| Voidstalker Sting | 1271226 | shadow | other |

Abilities in the guide with no exact match in the SimC reference (therefore no SimC-sourced ID): Seed of Corruption, Soul Rot.

## Notes and Known Gaps

Unconfirmed facts (numeric IDs intentionally OMITTED rather than guessed):
- **Shadow Bolt** SpellID — now confirmed from SimC reference: 317791 / 686 (multiple IDs). Updated above.
- **Dark Harvest** SpellID — now confirmed from SimC reference: 1257052 / 1257065 (multiple IDs). Updated above.
- **Malevolence** (Hellcaller hero talent) SpellID — now confirmed from SimC reference: 446285 / 430014 (multiple IDs). Updated above.
- **Soul Leech**, **Soul Link**, **Sudden Onset**, **Drain Life** SpellIDs — passive/talent IDs not present in SimC source (non-damaging). Still unconfirmed.
- **Healthstone** use SpellID — Wowhead page returned HTTP 403; still omitted.
- **Curse of Tongues** SpellID — Wowhead page returned HTTP 403; still omitted.
- **Banish** SpellID — Wowhead page returned HTTP 403; still omitted.
- **Seed of Corruption** SpellID — not found in SimC reference (may be pre-combat only / excluded from Patchwerk sim). Wowhead ID 27243 is in the guide above but was confirmed from Wowhead, not from SimC.
- **Soul Rot** SpellID — not found in SimC reference. Wowhead ID 386997 is in the guide above but was confirmed from Wowhead, not from SimC.
- **Devour Magic** friendly-target dispel scope (whether it can remove harmful Magic from allies in 12.0.5) — not confirmed; the spell page only listed "Dispel (Magic)" without target scope.
- **Raid buff/debuff package** — the unique raid-wide buff/debuff (if any) Affliction provides in 12.0.5 was not confirmed from a live source. Verify before relying on it.
- **Phantom Singularity / Vile Taint** — appear in Unstable Affliction's amplification list and in build talk, but their selection and IDs are talent-dependent and were not individually confirmed; treat as build-conditional.
- **Consumables / enchants / gems / stat priority** — not confirmed live; re-pull before use.

**Now added:** Talent strings for both hero-tree variants (Hellcaller and Soul Harvester), full APL from SimC source (Trivial.txt), and damage distribution tables for both builds. Rotational spell IDs confirmed from SimC reference for all abilities listed in the damage tables plus core rotation abilities.

Confirmed-live SpellIDs used in this guide: 980 (Agony), 146739 (Corruption), 316099 (Unstable Affliction), 27243 (Seed of Corruption), 205180 (Summon Darkglare), 386997 (Soul Rot), 104773 (Unending Resolve), 108416 (Dark Pact), 108503 (Grimoire of Sacrifice), 19647 (Spell Lock), 19505 (Devour Magic), 20707 (Soulstone), 48020 (Demonic Circle: Teleport), 111771 (Demonic Gateway), 5484 (Howl of Terror), 30283 (Shadowfury), 6789 (Mortal Coil), 5782 (Fear), 5697 (Unending Breath).

Confirmed-SimC SpellIDs added by this pass: 980 / 1261166 (Agony), 172 / 146739 (Corruption), 1259790 / 1261176 (Unstable Affliction), 1257052 / 1257065 (Dark Harvest), 48181 (Haunt), 1261153 (Malefic Grasp), 446285 / 430014 (Malevolence), 317791 / 686 (Shadow Bolt), 198590 (Drain Soul), 445468 / 445474 / 1279686 (Wither), 449801 (Demonic Soul), 1262710 (Shadow of Nathreza), 453176 (Shadowbolt Volley), 450591 (Shared Fate), 450538 (Soul Anathema), 449826 (Wicked Reaping), 1278047 (Wrath of Nathreza), 445736 (Blackened Soul), 1271226 (Voidstalker Sting).

**Maintenance flag:** Re-verify every SpellID, cooldown, talent name, and the interrupt/dispel availability after ANY 12.x patch. Pet-based interrupt/dispel availability in particular can shift with talent reworks. The Grimoire of Sacrifice "no pet = no interrupt/dispel" interaction is the single most important thing for RaidLens to re-check each patch.
