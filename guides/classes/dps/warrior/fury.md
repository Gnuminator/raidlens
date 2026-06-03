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
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
> - simc-guides/spell-ids-reference.json

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
- **Rend** — bleed DoT appearing in the SimC damage distribution; likely applied via talent or proc. (SpellID not confirmed.)
- **Bloodbath** — bleed DoT appearing in the SimC damage distribution. (SpellID not confirmed.)

**Major cooldowns**
- **Recklessness** (SpellID 1719) — major offensive cooldown; 1.5 min cooldown, 12 s duration; +50% Rage generation and a large crit bonus. Per guidance, avoid holding it more than ~10 s.
- **Avatar** — offensive cooldown; important for enabling Mountain Thane hero-talent builds. (SpellID not confirmed.)
- **Bladestorm** — bursty AoE cooldown that aligns with Recklessness/Avatar. (SpellID not confirmed.)
- **Odyn's Fury**, **Ravager**, **Onslaught**, **Thunderous Roar**, **Champion's Spear** — talented offensive abilities appearing depending on hero-talent tree and build. (SpellIDs not confirmed.)

**Slayer hero-talent abilities**
- **Slayer's Strike** — Slayer hero-talent offensive ability; appears as the second-largest single damage contributor in the SimC profile (9.6% of total damage). (SpellID not confirmed.)

**Key passives / procs**
- **Enrage** — the central buff; damage + haste while active. (SpellID not confirmed; Wowhead search surfaced spell=184361/enrage but this was not directly fetched, so it is treated as unconfirmed.)
- **Anger Management** (talent) — spending Rage reduces cooldowns, which is why Fury cooldowns recur frequently.
- **Deep Wounds** — bleed DoT, appears as a consistent contributor to the damage distribution. (SpellID not confirmed.)
- **Gushing Wound** — bleed/wound proc appearing in SimC distribution. (SpellID not confirmed.)

## Rotation / Priority

This is **logical priority order, not a DPS benchmark** — exact APL ordering shifts by hero talent (Mountain Thane vs Slayer) and gear. SimC damage distribution and full APL action-lists are available in the SimulationCraft Reference section below.

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
7. In Slayer builds: **Slayer's Strike** is a high-priority ability (see SimC breakdown).

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

## SimulationCraft Reference (Midnight 12.0.5)

**Hero tree covered:** The SimC JSON does not explicitly name a hero tree (field is null), but the presence of **Slayer's Strike** as the second-highest damage ability (9.6%) strongly identifies this as a **Slayer** build. Mountain Thane abilities (Avatar-empowered) are absent from the distribution, confirming this is not a Mountain Thane profile.

**Talent import string (Slayer build):**

```
CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDjxMsMzMzMDjZmZGzMzsMzMGzMbDzMAAQMWWGYBMBzwEYG2AmZ2Y2GAAMzYYMzMMYA
```

**DPS / HPS metrics:** Metrics were not captured in this SimC export (the metrics field is empty). No Patchwerk DPS figure is available from this data.

**Damage distribution (SimC, share of total damage):**

Rows filtered to those with a "%" in the percent field; parenthesised values used where present (effective share including procs/pets); resource tracking rows (Rage Cap) and consumables discarded.

| Ability | % of Damage |
|---|---|
| Rampage | 18.6% |
| Slayer's Strike | 9.6% |
| Auto Attack (MH + OH combined) | 8.6% |
| Deep Wounds | 3.0% |
| Gushing Wound | 1.7% |
| Rend (DoT) | 1.6% |
| Bloodbath (DoT) | 1.2% |
| Voidclaw | 0.3% |
| Whirlwind | 0.1% |

**Interpretation for RaidLens:** Rampage (18.6%) and Slayer's Strike (9.6%) together account for roughly 28% of damage in this build, making them the clear priority anchors — a log where these two abilities have very low cast counts relative to filler attacks (Raging Blow, auto attacks) suggests a rotation or Rage-management problem. The high proportion of bleed damage (Deep Wounds 3.0%, Gushing Wound 1.7%, Rend DoT 1.6%, Bloodbath DoT 1.2%) indicates that sustaining bleed uptime is a meaningful, if secondary, output consideration — excessive target-switching or movement that drops bleeds early may show up as underperformance. Auto attacks at 8.6% are a reminder that staying in melee range and not dropping swings matters.

### Action Priority List — Warrior Fury

```
actions.precombat=snapshot_stats
actions.precombat+=/berserker_stance,toggle=on
actions.precombat+=/variable,name=trinket_1_exclude,value=trinket.1.is.algethar_puzzle_box
actions.precombat+=/variable,name=trinket_2_exclude,value=trinket.2.is.algethar_puzzle_box
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_duration,op=setif,value=0,value_else=trinket.1.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_2_duration,op=setif,value=0,value_else=trinket.2.proc.any_dps.duration,condition=0
actions.precombat+=/variable,name=trinket_1_high_value,op=setif,value=2,value_else=1,condition=trinket.1.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_2_high_value,op=setif,value=2,value_else=1,condition=trinket.2.is.treacherous_transmitter
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&talent.recklessness&trinket.1.cooldown.duration%%cooldown.recklessness.duration=0
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&talent.recklessness&trinket.2.cooldown.duration%%cooldown.recklessness.duration=0
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs&(trinket.2.has_cooldown|!trinket.1.has_cooldown)|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync)*(variable.trinket_2_high_value)*(1+((trinket.2.ilvl-trinket.1.ilvl)%100)))>((trinket.1.cooldown.duration%variable.trinket_1_duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync)*(variable.trinket_1_high_value)*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/variable,name=trinket_1_manual,value=trinket.1.is.algethar_puzzle_box
actions.precombat+=/variable,name=trinket_1_manual,value=trinket.2.is.algethar_puzzle_box

# Executed every time the actor is available.
actions=auto_attack
actions+=/charge,if=time<=0.5|movement.distance>5
actions+=/heroic_leap,if=(raid_event.movement.distance>25&raid_event.movement.in>45)
actions+=/potion,if=target.time_to_die>300|buff.recklessness.up|target.time_to_die<25
actions+=/pummel,if=target.debuff.casting.react
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=variables
actions+=/lights_judgment,if=variable.on_gcd_racials
actions+=/bag_of_tricks,if=variable.on_gcd_racials
actions+=/berserking,if=buff.recklessness.up
actions+=/blood_fury
actions+=/fireblood
actions+=/ancestral_call
actions+=/invoke_external_buff,name=power_infusion,if=buff.recklessness.remains>15&fight_remains>=135|variable.execute_phase&buff.recklessness.up|fight_remains<=25
actions+=/run_action_list,name=slayer,if=talent.slayers_dominance&active_enemies=1
actions+=/run_action_list,name=slayer_aoe,if=talent.slayers_dominance&active_enemies>1
actions+=/run_action_list,name=thane,if=talent.lightning_strikes&active_enemies=1
actions+=/run_action_list,name=thane_aoe,if=talent.lightning_strikes&active_enemies>1

actions.slayer=recklessness
actions.slayer+=/avatar
actions.slayer+=/rampage,if=buff.enrage.remains<gcd|rage>=100
actions.slayer+=/bladestorm,if=(buff.enrage.up&talent.deft_experience|buff.enrage.remains>1)&(buff.recklessness.up|cooldown.recklessness.remains>30)
actions.slayer+=/odyns_fury
actions.slayer+=/execute
actions.slayer+=/bloodbath
actions.slayer+=/rampage,if=buff.recklessness.up
actions.slayer+=/crushing_blow
actions.slayer+=/bloodthirst
actions.slayer+=/rampage
actions.slayer+=/wrecking_throw
actions.slayer+=/rend,if=dot.rend.duration<6
actions.slayer+=/raging_blow
actions.slayer+=/whirlwind
actions.slayer+=/storm_bolt,if=buff.bladestorm.up

actions.slayer_aoe=whirlwind,if=talent.improved_whirlwind&buff.whirlwind.stack=0
actions.slayer_aoe+=/recklessness
actions.slayer_aoe+=/avatar
actions.slayer_aoe+=/rampage,if=buff.enrage.remains<gcd|rage>=110
actions.slayer_aoe+=/bladestorm,if=(buff.enrage.up&talent.deft_experience|buff.enrage.remains>1)&(buff.recklessness.up|cooldown.recklessness.remains>30)
actions.slayer_aoe+=/odyns_fury
actions.slayer_aoe+=/execute,if=buff.sudden_death.up
actions.slayer_aoe+=/rampage,if=buff.recklessness.up
actions.slayer_aoe+=/bloodbath
actions.slayer_aoe+=/whirlwind,if=talent.improved_whirlwind&buff.recklessness.up
actions.slayer_aoe+=/crushing_blow
actions.slayer_aoe+=/execute
actions.slayer_aoe+=/rampage
actions.slayer_aoe+=/rend,if=dot.rend_dot.duration<6&!talent.improved_whirlwind
actions.slayer_aoe+=/bloodthirst
actions.slayer_aoe+=/whirlwind,if=talent.improved_whirlwind
actions.slayer_aoe+=/raging_blow
actions.slayer_aoe+=/storm_bolt,if=buff.bladestorm.up

actions.thane=odyns_fury
actions.thane+=/recklessness
actions.thane+=/avatar
actions.thane+=/rampage,if=buff.enrage.remains<gcd|rage>=100
actions.thane+=/thunder_blast,if=buff.thunder_blast.stack=2
actions.thane+=/bloodbath
actions.thane+=/rampage,if=buff.recklessness.up
actions.thane+=/thunder_blast,if=buff.avatar.up
actions.thane+=/bloodthirst
actions.thane+=/execute
actions.thane+=/crushing_blow
actions.thane+=/thunder_blast
actions.thane+=/rampage
actions.thane+=/thunder_clap,if=buff.avatar.up&!talent.wrath_and_fury
actions.thane+=/raging_blow
actions.thane+=/thunder_clap
actions.thane+=/whirlwind

actions.thane_aoe=odyns_fury
actions.thane_aoe+=/recklessness
actions.thane_aoe+=/avatar
actions.thane_aoe+=/thunder_blast,if=buff.thunder_blast.stack=2
actions.thane_aoe+=/thunder_blast,if=buff.avatar.up
actions.thane_aoe+=/thunder_clap,if=talent.improved_whirlwind&buff.whirlwind.stack=0|(buff.avatar.up&active_enemies>6)
actions.thane_aoe+=/rampage,if=buff.enrage.remains<gcd|rage>=100
actions.thane_aoe+=/bloodbath
actions.thane_aoe+=/rampage,if=buff.recklessness.up
actions.thane_aoe+=/thunder_clap,if=buff.avatar.up
actions.thane_aoe+=/bloodthirst
actions.thane_aoe+=/thunder_blast
actions.thane_aoe+=/execute
actions.thane_aoe+=/thunder_clap
actions.thane_aoe+=/crushing_blow
actions.thane_aoe+=/rampage
actions.thane_aoe+=/raging_blow
actions.thane_aoe+=/whirlwind

actions.trinkets=use_item,name=algethar_puzzle_box,if=cooldown.recklessness.remains<2
# Trinkets
actions.trinkets+=/use_item,slot=trinket1,if=variable.trinket_1_buffs&(variable.trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)&(buff.recklessness.up)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&(variable.trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)&(buff.recklessness.up)
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|!variable.trinket_2_buffs|!trinket.2.has_cooldown)
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|!variable.trinket_1_buffs|!trinket.1.has_cooldown)

# Variables
actions.variables=variable,name=st_planning,value=active_enemies=1&(raid_event.adds.in>15|!raid_event.adds.exists)
actions.variables+=/variable,name=adds_remain,value=active_enemies>=2&(!raid_event.adds.exists|raid_event.adds.exists&raid_event.adds.remains>5)
actions.variables+=/variable,name=execute_phase,value=(talent.massacre.enabled&target.health.pct<35)|target.health.pct<20
actions.variables+=/variable,name=on_gcd_racials,value=buff.recklessness.down&buff.recklessness.down&rage<80&buff.sudden_death.down&!cooldown.bladestorm.ready&(!cooldown.execute.ready|!variable.execute_phase)
```

## Confirmed Spell IDs (SimulationCraft HTML)

Source: simc-guides/spell-ids-reference.json (extracted from the Midnight 12.0.5 SimC HTML report). Exact key matches only — no fuzzy matching.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Rampage | 184367, 184707, 184709, 201364, 201363 (multiple: base cast + variants/sub-spells) | physical | cast |
| Raging Blow | 85288, 85384, 96103 (multiple: base cast + variants/sub-spells) | physical | cast |
| Execute | 163201, 260798, 5308, 280849 (multiple: base cast + variants/sub-spells) | physical | cast |
| Whirlwind | 190411, 199667, 199852 (multiple: base cast + variants/sub-spells) | physical | cast |
| Thunder Clap | 6343 | physical | cast |
| Rend | 388539, 772 (multiple: base cast + variants/sub-spells) | physical | cast |
| Bloodbath | 335096, 113344 (multiple: base cast + variants/sub-spells) | physical | cast |
| Avatar | 107574 | physical | cast |
| Bladestorm | 446035, 50622 (multiple: base cast + variants/sub-spells) | physical | cast |
| Recklessness | 1719 | physical | cast |
| Bloodthirst | 23881 | physical | cast |
| Odyn's Fury | 385059, 385060 (multiple: base cast + variants/sub-spells) | physical | cast |
| Slayer's Strike | 445579 | physical | cast |
| Deep Wounds | 262115 | physical | cast |
| Gushing Wound | 385042 | physical | cast |
| Voidclaw | 253797 | shadow | other |
| Crushing Blow | 335097, 335100, 335098 (multiple: base cast + variants/sub-spells) | physical | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

Unconfirmed facts (named, per sourcing rules — IDs omitted rather than guessed):
- **Damage/rotational spell IDs now confirmed from the SimC HTML reference** for matched abilities (Rampage, Raging Blow, Execute, Whirlwind, Thunder Clap, Rend, Bloodbath, Avatar, Bladestorm, Recklessness, Bloodthirst, Odyn's Fury, Slayer's Strike, Deep Wounds, Gushing Wound, Voidclaw, Crushing Blow); **defensive/interrupt/utility IDs still pending live Wowhead** (Ravager, Onslaught, Thunderous Roar, Champion's Spear, Enrage passive, Intimidating Shout, Shattering Throw, Hamstring, Piercing Howl, Intervene, Victory Rush / Impending Victory, Die by the Sword).
- **Bloodthirst (23881)** confirmed via Wowhead search result content + classic/wotlk cross-reference; the live retail spell page was 403-blocked on direct fetch. Treat as high-confidence but re-verify on the live retail page.
- **Spell Reflection cooldown:** live spell page (23920) showed an internal cooldown value of "1 second" which is a client artifact; the practical cooldown (~25 s) comes from the Icy Veins guide text, not the spell page. Re-verify the real cooldown.
- **Recklessness duration/cooldown** (1.5 min / 12 s) and **Recklessness +50% Rage / crit** taken from the live spell page (1719) — confirmed.
- **Rallying Cry** effect magnitude: the spell page (97462) lists server-side dummy effects (value 10 / value 50) rather than a clean readable "X% max HP." The 3-minute cooldown is confirmed; the exact max-HP percentage was not cleanly readable and is described conceptually.
- **Die by the Sword** and **Warpaint/Defensive Stance interactions:** "Warpaint" was referenced in the Icy Veins overview as a layered defensive but was not separately spell-confirmed; treat as a talent passive, not verified.
- **Consumables / enchants / gems:** entirely unsourced this pass — no live consumables page was fetched. Do not populate without re-sourcing.
- **Talent import string:** added from SimulationCraft Midnight 12.0.5 data (Slayer build). A Mountain Thane variant string is not yet available.
- **SimC APL:** SimC APL now embedded (extracted from Trivial.txt). The APL covers both Slayer and Mountain Thane hero-talent branches (single-target and AoE sub-lists for each). A Mountain Thane-specific talent string is not yet available.
- **Hero talent trees:** Mountain Thane and Slayer are referenced as current build options. The SimC profile covers Slayer; Mountain Thane ability lists/IDs were not fully sourced and no Mountain Thane talent string is available.

Maintenance flag: **Re-verify every SpellID, cooldown, and the consumables/enchants section after any 12.x patch.** Spell IDs do not change once assigned, but cooldowns, durations, percentages, talent layouts, and consumable items can change between patches.
