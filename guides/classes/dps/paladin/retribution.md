# Retribution Paladin — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-guide
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-gems-enchants-consumables
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-spec-builds-talents
> - https://www.wowhead.com/spell=96231/rebuke
> - https://www.wowhead.com/spell=642/divine-shield
> - https://www.wowhead.com/spell=498/divine-protection
> - https://www.wowhead.com/spell=184662/shield-of-vengeance
> - https://www.wowhead.com/spell=633/lay-on-hands
> - https://www.wowhead.com/spell=1022/blessing-of-protection
> - https://www.wowhead.com/spell=1044/blessing-of-freedom
> - https://www.wowhead.com/spell=6940/blessing-of-sacrifice
> - https://www.wowhead.com/spell=465/devotion-aura
> - https://www.wowhead.com/spell=31884/avenging-wrath
> - https://www.wowhead.com/spell=255937/wake-of-ashes
> - https://www.wowhead.com/spell=375576/divine-toll
> - https://www.wowhead.com/spell=190784/divine-steed
> - https://www.wowhead.com/spell=85673/word-of-glory
> - https://www.wowhead.com/spell=184575/blade-of-justice
> - https://www.wowhead.com/spell=20271/judgment
> - https://www.wowhead.com/spell=24275/hammer-of-wrath
> - https://www.wowhead.com/spell=427441/hammer-of-light
> - https://www.wowhead.com/spell=213644/cleanse-toxins
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
> - simc-guides/spell-ids-reference.json

## Overview

Retribution Paladin is the melee strength DPS specialization for Paladins. It is a Holy-Power-based melee spec: builders generate Holy Power, and spenders consume it for burst damage. The core gameplay loop is to generate Holy Power with abilities like Blade of Justice, Judgment, and Hammer of Wrath, then spend it with Final Verdict (single target / low target count) or Divine Storm (3+ targets), while pressing major cooldowns (Wake of Ashes, Divine Toll, Avenging Wrath, and — with the Templar hero tree — Hammer of Light) on cooldown.

Damage profile: largely burst-on-cooldown. Retribution has comparatively short burst cooldowns (Avenging Wrath is a 2-minute cooldown; Wake of Ashes is a short recurring cooldown — see Known Gaps for the exact value), so a meaningful share of the spec's damage lands in the opening seconds of each cooldown window, with solid passive cleave during those windows. Between cooldowns the spec maintains a steady builder/spender priority. The spec maintains target debuffs (Judgment, Expurgation) that increase spender damage.

Primary weakness: mobility. Outside of Divine Steed, Retribution has limited gap-closing and repositioning tools, and it cannot reliably handle repeated knockbacks without external help. Its passive self-sustain and passive damage reduction are also relatively modest compared to dedicated survivable specs — it leans on active defensive cooldowns rather than passive mitigation.

## Role in Raid

Pure melee DPS. Retribution brings the Paladin support toolkit but is generally considered to bring less raid-valued utility than Holy or Protection Paladins.

Raid buffs / auras it provides:
- **Devotion Aura** (SpellID 465) — raid-wide area aura reducing damage taken (small percentage, party/raid passive).

Group defensives / externals it can cast on allies:
- **Blessing of Protection** (SpellID 1022) — physical immunity on a friendly target.
- **Blessing of Freedom** (SpellID 1044) — removes and grants immunity to movement-impairing effects (roots/snares) on a friendly target.
- **Blessing of Sacrifice** (SpellID 6940) — redirects a portion of a friendly target's incoming damage to the Paladin.
- **Lay on Hands** (SpellID 633) — full-health emergency heal on any target (very long cooldown).

Bloodlust-equivalent: NO. Retribution provides no Bloodlust/Heroism-equivalent haste effect.

Battle resurrection: NO. Paladin has no combat resurrection of any kind; this is not specific to Retribution.

Mobility profile: limited. **Divine Steed** (SpellID 190784) is the only baseline movement tool — a short speed burst. **Blessing of Freedom** can be self-cast to ignore snares/roots. There is no blink, leap, or teleport.

## Abilities Reference

Confirmed SpellIDs (each verified against a live Wowhead spell page or its canonical Wowhead URL):

Builders / core damage:
- **Blade of Justice** (SpellID 184575) — strength builder, generates Holy Power, two-handed-weapon ability.
- **Judgment** (SpellID 20271) — ranged Holy attack; applies a debuff increasing the target's damage taken from the next Holy Power ability.
- **Hammer of Wrath** (SpellID 24275) — Holy attack usable on low-health targets (≈20% or below) or while Avenging Wrath is active; generates Holy Power.
- **Wake of Ashes** (SpellID 255937) — short-cooldown burst ability dealing Holy/Fire damage in a cone and granting Holy Power (key Templar enabler — see Hammer of Light). Exact cooldown not confirmed from the spell page; see Known Gaps.

Spenders:
- **Hammer of Light** (SpellID 427441) — Templar hero-tree Holy Power spender granting strong AoE; becomes available after Wake of Ashes. (Note: in-game this surfaces under related cast/free-cast IDs as well; see Known Gaps.)
- Final Verdict / Templar's Verdict (single-target spender) and Divine Storm (AoE spender) — SpellIDs NOT confirmed live; see Known Gaps.
- **Word of Glory** (SpellID 85673) — Holy Power spender that heals; usable defensively/for self-sustain.

Major cooldowns:
- **Avenging Wrath** (SpellID 31884) — 2 min cooldown, 20 sec duration; +20% damage/healing and +20% crit, plus run speed.
- **Divine Toll** (SpellID 375576) — 1 min cooldown; generates Holy Power and triggers a burst of attacks.

Key passives / procs (names confirmed via Icy Veins; mechanics summarized):
- **Art of War** — proc that resets/empowers builders (notably Blade of Justice).
- **Righteous Cause** — proc tied to the Apex talent path.
- **Empyrean Power** — proc enabling a free/empowered Divine Storm.
- **Expurgation** — a damage-over-time debuff the spec maintains on the target.
- **Light Within** (Apex talent) — empowers Art of War / Righteous Cause procs and increases Holy Power spender damage during Avenging Wrath.
- **Empyrean Hammer** — Templar hero-tree proc/ability that appears as a significant independent source of damage (SimC: ~10.7% of total damage in the Templar variant). SpellID not confirmed live; see Known Gaps.
- **Highlord's Judgment** — a Judgment-linked proc or talent effect present in both Templar and Herald variants (SimC: 4.7% and 3.5% respectively). SpellID not confirmed live; see Known Gaps.

Herald of the Sun hero-tree abilities (Herald variant only):
- **Sun's Avatar** — Herald-specific proc/cooldown contributing ~3.3% of total damage in SimC.
- **Sun Sear** — Herald-specific ability contributing ~0.9% of total damage in SimC. SpellIDs not confirmed live; see Known Gaps.

## Rotation / Priority

This is a logical priority list (the order in which to consider abilities), NOT a DPS benchmark or guaranteed throughput ordering. Retribution plays from a mental priority list rather than a fixed rotation. Overall principle: use builders before overcapping Holy Power, keep Judgment and Expurgation debuffs up, and press major cooldowns on cooldown.

Opener (per Icy Veins, Templar-leaning):
1. Blade of Justice (pre-Holy Power)
2. Avenging Wrath
3. On-use trinkets / Light's Potential potion
4. Execution Sentence (if talented)
5. Wake of Ashes
6. Hammer of Light
7. Final Verdict (twice)
8. Divine Toll
9. Fall into the sustained priority below

Sustained single-target priority (high to low):
1. Avenging Wrath (on cooldown)
2. Execution Sentence (if talented)
3. Hammer of Light (when enabled by Wake of Ashes / Light's Deliverance procs)
4. Final Verdict at maximum Holy Power
5. Wake of Ashes
6. Divine Toll
7. Hammer of Wrath with an Art of War proc
8. Blade of Justice with an Art of War proc
9. Divine Storm with an Empyrean Power proc
10. Final Verdict (spend Holy Power)
11. Hammer of Wrath
12. Blade of Justice
13. Judgment
14. Filler builder (Templar Strike/Slash or Crusader Strike)

AoE priority (3+ targets): same general structure, except spend with **Divine Storm** at maximum Holy Power instead of Final Verdict, and favor Hammer of Light's AoE.

Builder choice is a talent decision: **Crusading Strikes** (passive Holy Power generation, more downtime) vs **Templar Strikes** (active builder, more GCD usage, more control). Both are competitive; the choice tracks the hero tree.

## Defensives

Each entry below includes a RaidLens usage note for judging whether the player used the cooldown correctly during a damage window. Approximate cooldowns are from the live Wowhead spell pages; where a tooltip showed only a GCD-style value, that is flagged.

- **Divine Shield** (SpellID 642) — full immunity to all damage and harmful effects for 8 sec. Cooldown 5 minutes. Causes Forbearance.
  - RaidLens usage: the strongest personal save. If a Retribution player took lethal/near-lethal damage from a known one-shot or stacking mechanic and Divine Shield was off cooldown (no use in the prior ~5 min), that is a clear missed defensive. Conversely, a Divine Shield used to fully negate a big hit is correct play.

- **Divine Protection** (SpellID 498) — reduces all damage taken by 20% for 8 sec. Cooldown 1 minute. Usable while stunned.
  - RaidLens usage: the bread-and-butter rotational defensive. With a 1-minute cooldown it should be available for most scripted raid-damage windows. Flag damage spikes where the player ate a telegraphed hit with Divine Protection available.

- **Shield of Vengeance** (SpellID 184662) — absorb shield for 10 sec that bursts for damage when it expires. (Wowhead spell page lists no cooldown on the base spell; treat the in-game cooldown as roughly 1–1.5 min — see Known Gaps.)
  - RaidLens usage: doubles as an offensive and defensive button. Expect it pressed on cooldown during burst, but it also provides a sizeable absorb during a damage window. If a player died to a hit roughly equal to or smaller than a Shield of Vengeance absorb while it was available, flag it.

- **Word of Glory** (SpellID 85673) — Holy Power spender that delivers a sizeable instant self-heal (can target allies).
  - RaidLens usage: self-sustain, not a true cooldown — gated by Holy Power, not a timer. Use it to judge whether a player topped themselves between hits when they had Holy Power banked. Less of a "was it on cooldown" check and more of a "did they spend a builder's worth of resources to survive" signal.

- **Lay on Hands** (SpellID 633) — heals the target to full health. Cooldown 10 minutes.
  - RaidLens usage: ultimate emergency button. Because of the 10-minute cooldown, only flag its absence on a death where the player was clearly at critical health for a sustained moment and nothing else was available. A single use per fight (or per several pulls) is normal and correct.

- **Blessing of Sacrifice** (SpellID 6940) — cast on an ally; redirects 30% of their incoming damage to the Paladin for 12 sec. Cooldown 2 minutes.
  - RaidLens usage: an external for the raid, but also relevant to the Paladin's own death log (the redirected damage shows on the Paladin). Treat damage taken via Blessing of Sacrifice as intended, not avoidable — it is the spec doing its job.

- **Blessing of Protection** (SpellID 1022) — physical immunity on a friendly target for 10 sec. (Wowhead lists 1.5 sec, which is the GCD/cast-side value, not the real recharge — see Known Gaps; the real cooldown is on the order of several minutes.)
  - RaidLens usage: an external save against physical mechanics. Cannot be used on a target with Forbearance. Judge as an ally-protection tool, not a personal defensive.

- **Blessing of Freedom** (SpellID 1044) — removes/immunizes movement impairment for 8 sec; can be self-cast. (Wowhead lists 1.5 sec recharge, a GCD value; real cooldown is longer — see Known Gaps.)
  - RaidLens usage: mobility/anti-snare utility rather than a damage defensive. Relevant only when a mechanic snares or roots.

- **Devotion Aura** (SpellID 465) — passive raid-wide damage-taken reduction.
  - RaidLens usage: passive; no activation to judge. Note its presence as a small constant mitigation for the group.

## Utility

**Interrupt:** **Rebuke** (SpellID 96231). Cooldown 15 seconds. Off the global cooldown. This IS a real, raid-usable interrupt that locks the target's spell school. It is the spec's ONLY interrupt — Retribution has no second kick. For RaidLens, a missed interrupt on an interruptible cast where Rebuke was off cooldown (no use in the prior 15 sec) is a flaggable individual mistake.

**Crowd control:** Paladin baseline CC includes Hammer of Justice (stun) and, depending on talents, blinding/incapacitate effects. Specific SpellIDs not confirmed live — see Known Gaps. These are situational and rarely the basis for raid mistake-flagging.

**Dispels:**
- **Cleanse Toxins** (SpellID 213644) — removes all Poison and Disease effects from a friendly target. Available to Retribution (and Protection). It does NOT remove Magic (only Holy Paladins can cleanse Magic). For RaidLens: a Retribution Paladin can be expected to dispel Poison/Disease on allies when a fight calls for it, but cannot remove Magic, Curse, or Bleed.

**Externals:** Blessing of Protection, Blessing of Freedom, Blessing of Sacrifice, and Lay on Hands (all listed above) are the spec's externals for allies.

**Raid buffs/debuffs:** Devotion Aura (raid mitigation aura). Judgment applies an offensive debuff to the boss. No Bloodlust-equivalent, no battle res.

**Movement tools:** Divine Steed (SpellID 190784) speed burst; Blessing of Freedom (self-cast) for snare/root immunity. No teleport or leap.

## Consumables and Enchants

Item names below are from the live Icy Veins gems/enchants/consumables page for patch 12.0.5. Numeric item IDs were NOT confirmed against live item pages and are intentionally omitted (see Known Gaps). Treat these as current-as-of-fetch recommendations that should be re-verified after any patch.

- **Flask:** Flask of the Magisters
- **Combat potion:** Light's Potential (primary); Draught of Rampant Abandon (alternative)
- **Health potion:** Silvermoon Health Potion
- **Food:** Strength-based food (e.g., Royal Roast) or a raid feast
- **Augment rune:** Void-Touched Augment Rune
- **Weapon oil:** Thalassian Phoenix Oil

Gems:
- First socket: Indecipherable Eversong Diamond
- Other sockets: Flawless Deadly Amethyst

Enchants (slot → enchant name):
- Weapon: Acuity of the Ren'dorei
- Head: Empowered Rune of Avoidance
- Shoulder: Amirdrassil's Grace
- Chest: Mark of the Worldsoul
- Legs: Forest Hunter's Armor Kit
- Boots: Lynx's Dexterity
- Rings: Eyes of the Eagle

Primary stat is Strength. Detailed secondary-stat weighting was not captured from a live source and should be confirmed separately.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Templar** (no hero tree tag in source — abilities confirm Templar path) and **Herald of the Sun**.

Metrics: DPS/HPS/DTPS were not captured in the SimC source data (metrics field is empty for both variants).

SimC Patchwerk, 7500 iterations, single-target — a theoretical ceiling, NOT a target to judge players against.

---

### Talent import strings

**Templar (default / no explicit hero-tree tag):**
```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MzsMMzAAAAAAwoMmhZGbDz2wMbzYMmZYGbsNMAAkZm2mZ2mBAsBYAwYGmBzYMbYZGMMmxgB
```

**Herald of the Sun:**
```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQzy2MzsMMzAAAAAAwoMmhZGbDz2wMbzYMmZYGLsNMgZZ2mZmtGEAAwCgBAjZYGMjxsAMzMMmxgB
```

---

### Damage distribution (SimC, share of total damage)

**Templar variant:**

| Ability | % of total damage |
|---|---|
| Final Verdict | 19.6% |
| Hammer of Light | 11.0% |
| Empyrean Hammer | 10.7% |
| Melee (auto attack) | 7.4% |
| Expurgation | 7.5% |
| Highlord's Judgment | 4.7% |
| Execution Sentence | 1.0% |
| Divine Storm | 0.7% |
| Consecration (proc via Blade of Justice) | 0.9% |
| Voidclaw | 0.3% |

**Herald of the Sun variant:**

| Ability | % of total damage |
|---|---|
| Final Verdict | 21.2% |
| Melee (auto attack) | 10.7% |
| Expurgation | 8.5% |
| Blade of Justice (Walk into Light proc) | 7.2% |
| Highlord's Judgment | 3.5% |
| Sun's Avatar | 3.3% |
| Templar Slash | 1.7% |
| Execution Sentence | 0.9% |
| Sun Sear | 0.9% |
| Divine Storm | 0.7% |
| Consecration (proc via Blade of Justice) | 0.8% |
| Voidclaw | 0.3% |

---

### Action Priority List — Paladin Retribution

```
actions.precombat=snapshot_stats
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_buff.strength|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_buff.strength|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.avenging_wrath.duration=0|cooldown.avenging_wrath.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.avenging_wrath.duration=0|cooldown.avenging_wrath.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%trinket.2.proc.any_dps.duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%trinket.1.proc.any_dps.duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync))
actions.precombat+=/use_item,name=algethar_puzzle_box,if=(trinket.1.is.algethar_puzzle_box|trinket.2.is.algethar_puzzle_box)

# Executed every time the actor is available.
actions=auto_attack
actions+=/rebuke
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=generators

actions.cooldowns=use_item,name=algethar_puzzle_box,if=(cooldown.avenging_wrath.remains=0&!talent.radiant_glory|(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|cooldown.execution_sentence.remains=0)&talent.radiant_glory)
actions.cooldowns+=/use_item,slot=trinket1,if=((buff.avenging_wrath.up&cooldown.avenging_wrath.remains>40)&!talent.radiant_glory|talent.radiant_glory&(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|debuff.execution_sentence_debuff.up))&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)|trinket.1.proc.any_dps.duration>=fight_remains
actions.cooldowns+=/use_item,slot=trinket2,if=((buff.avenging_wrath.up&cooldown.avenging_wrath.remains>40)&!talent.radiant_glory|talent.radiant_glory&(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|debuff.execution_sentence_debuff.up))&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)|trinket.2.proc.any_dps.duration>=fight_remains
actions.cooldowns+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs|!buff.avenging_wrath.up&cooldown.avenging_wrath.remains>20)
actions.cooldowns+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs|!buff.avenging_wrath.up&cooldown.avenging_wrath.remains>20)
actions.cooldowns+=/potion,if=buff.avenging_wrath.up|fight_remains<30|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/invoke_external_buff,name=power_infusion,if=buff.avenging_wrath.up|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/lights_judgment,if=!raid_event.adds.exists|raid_event.adds.in>75|raid_event.adds.up
actions.cooldowns+=/fireblood,if=buff.avenging_wrath.up|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/execution_sentence,if=(cooldown.avenging_wrath.remains>15|talent.radiant_glory)&(target.time_to_die>10)&cooldown.wake_of_ashes.remains<gcd&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/avenging_wrath,if=(!raid_event.adds.up|target.time_to_die>10)&(!talent.holy_flames|dot.expurgation.ticking)&(!equipped.algethar_puzzle_box|trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>5|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>5)

actions.finishers=variable,name=ds_castable,value=(active_enemies>=3-(talent.tempest_of_the_lightbringer&!talent.jurisdiction)|buff.empyrean_power.up)&!buff.empyrean_legacy.up
actions.finishers+=/hammer_of_light,if=!buff.hammer_of_light_free.up|buff.hammer_of_light_free.up&(buff.undisputed_ruling.remains<gcd*1.5&(talent.radiant_glory|cooldown.avenging_wrath.remains>4)|buff.avenging_wrath.up&(buff.avenging_wrath.remains<gcd*2|cooldown.wake_of_ashes.remains=0)|buff.hammer_of_light_free.remains<gcd*2|target.time_to_die<gcd*2)
actions.finishers+=/divine_storm,if=variable.ds_castable&(!buff.hammer_of_light_ready.up|buff.hammer_of_light_free.up)
actions.finishers+=/templars_verdict,if=(!buff.hammer_of_light_ready.up|buff.hammer_of_light_free.up)

actions.generators=call_action_list,name=finishers,if=holy_power=5&cooldown.wake_of_ashes.remains|buff.hammer_of_light_free.remains<gcd*2
actions.generators+=/blade_of_justice,if=talent.holy_flames&!dot.expurgation.ticking&time<5
actions.generators+=/wake_of_ashes,if=(cooldown.avenging_wrath.remains>6|talent.radiant_glory)&(!talent.execution_sentence|cooldown.execution_sentence.remains>4|target.time_to_die<10)&(!raid_event.adds.exists|raid_event.adds.in>10|raid_event.adds.up)
actions.generators+=/divine_toll,if=(!raid_event.adds.exists|raid_event.adds.in>10|raid_event.adds.up)&(cooldown.avenging_wrath.remains>15|talent.radiant_glory|fight_remains<8)
actions.generators+=/blade_of_justice,if=(buff.art_of_war.up|buff.righteous_cause.up)&(!talent.walk_into_light|!buff.avenging_wrath.up)
actions.generators+=/call_action_list,name=finishers
actions.generators+=/hammer_of_wrath,if=talent.walk_into_light
actions.generators+=/blade_of_justice
actions.generators+=/hammer_of_wrath
actions.generators+=/judgment
actions.generators+=/templar_strike
actions.generators+=/templar_slash
actions.generators+=/crusader_strike
actions.generators+=/arcane_torrent
```

---

### Action Priority List — Paladin Retribution Herald

```
actions.precombat=snapshot_stats
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_buff.strength|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_buff.strength|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.avenging_wrath.duration=0|cooldown.avenging_wrath.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.avenging_wrath.duration=0|cooldown.avenging_wrath.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%trinket.2.proc.any_dps.duration)*(1.5+trinket.2.has_buff.strength)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%trinket.1.proc.any_dps.duration)*(1.5+trinket.1.has_buff.strength)*(variable.trinket_1_sync))
actions.precombat+=/use_item,name=algethar_puzzle_box,if=(trinket.1.is.algethar_puzzle_box|trinket.2.is.algethar_puzzle_box)

# Executed every time the actor is available.
actions=auto_attack
actions+=/rebuke
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=generators

actions.cooldowns=use_item,name=algethar_puzzle_box,if=(cooldown.avenging_wrath.remains=0&!talent.radiant_glory|(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|cooldown.execution_sentence.remains=0)&talent.radiant_glory)
actions.cooldowns+=/use_item,slot=trinket1,if=((buff.avenging_wrath.up&cooldown.avenging_wrath.remains>40)&!talent.radiant_glory|talent.radiant_glory&(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|debuff.execution_sentence_debuff.up))&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)|trinket.1.proc.any_dps.duration>=fight_remains
actions.cooldowns+=/use_item,slot=trinket2,if=((buff.avenging_wrath.up&cooldown.avenging_wrath.remains>40)&!talent.radiant_glory|talent.radiant_glory&(!talent.execution_sentence&cooldown.wake_of_ashes.remains=0|debuff.execution_sentence_debuff.up))&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)|trinket.2.proc.any_dps.duration>=fight_remains
actions.cooldowns+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs|!buff.avenging_wrath.up&cooldown.avenging_wrath.remains>20)
actions.cooldowns+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs|!buff.avenging_wrath.up&cooldown.avenging_wrath.remains>20)
actions.cooldowns+=/potion,if=buff.avenging_wrath.up|fight_remains<30|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/invoke_external_buff,name=power_infusion,if=buff.avenging_wrath.up|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/lights_judgment,if=!raid_event.adds.exists|raid_event.adds.in>75|raid_event.adds.up
actions.cooldowns+=/fireblood,if=buff.avenging_wrath.up|talent.radiant_glory&cooldown.wake_of_ashes.remains=0&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/execution_sentence,if=(cooldown.avenging_wrath.remains>15|talent.radiant_glory)&(target.time_to_die>10)&cooldown.wake_of_ashes.remains<gcd&(!talent.holy_flames|dot.expurgation.ticking)
actions.cooldowns+=/avenging_wrath,if=(!raid_event.adds.up|target.time_to_die>10)&(!talent.holy_flames|dot.expurgation.ticking)&(!equipped.algethar_puzzle_box|trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>5|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>5)

actions.finishers=variable,name=ds_castable,value=(active_enemies>=3-(talent.tempest_of_the_lightbringer&!talent.jurisdiction)|buff.empyrean_power.up)&!buff.empyrean_legacy.up
actions.finishers+=/hammer_of_light,if=!buff.hammer_of_light_free.up|buff.hammer_of_light_free.up&(buff.undisputed_ruling.remains<gcd*1.5&(talent.radiant_glory|cooldown.avenging_wrath.remains>4)|buff.avenging_wrath.up&(buff.avenging_wrath.remains<gcd*2|cooldown.wake_of_ashes.remains=0)|buff.hammer_of_light_free.remains<gcd*2|target.time_to_die<gcd*2)
actions.finishers+=/divine_storm,if=variable.ds_castable&(!buff.hammer_of_light_ready.up|buff.hammer_of_light_free.up)
actions.finishers+=/templars_verdict,if=(!buff.hammer_of_light_ready.up|buff.hammer_of_light_free.up)

actions.generators=call_action_list,name=finishers,if=holy_power=5&cooldown.wake_of_ashes.remains|buff.hammer_of_light_free.remains<gcd*2
actions.generators+=/blade_of_justice,if=talent.holy_flames&!dot.expurgation.ticking&time<5
actions.generators+=/wake_of_ashes,if=(cooldown.avenging_wrath.remains>6|talent.radiant_glory)&(!talent.execution_sentence|cooldown.execution_sentence.remains>4|target.time_to_die<10)&(!raid_event.adds.exists|raid_event.adds.in>10|raid_event.adds.up)
actions.generators+=/divine_toll,if=(!raid_event.adds.exists|raid_event.adds.in>10|raid_event.adds.up)&(cooldown.avenging_wrath.remains>15|talent.radiant_glory|fight_remains<8)
actions.generators+=/blade_of_justice,if=(buff.art_of_war.up|buff.righteous_cause.up)&(!talent.walk_into_light|!buff.avenging_wrath.up)
actions.generators+=/call_action_list,name=finishers
actions.generators+=/hammer_of_wrath,if=talent.walk_into_light
actions.generators+=/blade_of_justice
actions.generators+=/hammer_of_wrath
actions.generators+=/judgment
actions.generators+=/templar_strike
actions.generators+=/templar_slash
actions.generators+=/crusader_strike
actions.generators+=/arcane_torrent
```

---

### RaidLens interpretation

For the Templar variant, **Final Verdict, Hammer of Light, and Empyrean Hammer** together account for over 40% of total damage — if a log shows those three abilities contributing a much smaller combined share, the player is likely not pressing their Templar cooldown window correctly. Expurgation (the maintenance DoT) at ~7.5% confirms it must be kept up continuously; a log where Expurgation barely appears suggests the player is not applying or refreshing it.

For the Herald of the Sun variant, **Final Verdict and the Blade of Justice / Walk into Light proc** dominate single-target; a log where melee auto-attacks significantly outweigh every active ability is a sign of a player sitting idle rather than pressing builders. Sun's Avatar at ~3.3% is a notable Herald-exclusive contributor — its absence from a log suggests the Herald cooldown is being missed or delayed.

---

## Confirmed Spell IDs (SimulationCraft HTML)

Source: simc-guides/spell-ids-reference.json (extracted from the Midnight 12.0.5 SimC HTML report). Exact key matches only.

Note on Avenging Wrath: the Wowhead-confirmed base spell ID is 31884 (retained in the Abilities Reference section above). The SimC reference contains a separate ID 454351 (holy, cast) — this is a different entry in the SimC spelldata, likely a variant or proc sub-spell. Both are recorded here for completeness; treat 31884 as the canonical cast ID.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Avenging Wrath | 454351 | holy | cast |
| Blade of Justice | 184575 | holy | cast |
| Consecration | 81297, 26573 (multiple: base cast + variants/sub-spells) | holy | cast |
| Crusading Strikes | 408385 | physical | cast |
| Devotion Aura | 465 | holy | other |
| Divine Storm | 53385 | holy | cast |
| Divine Toll | 375576 | holy | cast |
| Empyrean Hammer | 431398 | holy | cast |
| Execution Sentence | 387113, 1260251 (multiple: base cast + variants/sub-spells) | holy | cast |
| Expurgation | 383346 | holyfire | cast |
| Final Verdict | 383328 | holy | cast |
| Hammer of Light | 427453 | holy | cast |
| Hammer of Wrath | 24275, 1279408, 1241413 (multiple: base cast + variants/sub-spells) | holy | cast |
| Highlord's Judgment | 383921 | holy | cast |
| Judgment | 275779, 406957, 20271 (multiple: base cast + variants/sub-spells) | holy | cast |
| Sun Sear | 431414 | holyfire | cast |
| Sun's Avatar | 431911 | holyfire | cast |
| Templar Slash | 406647 | holyfire | cast |
| Templar Strike | 407480 | holyfire | cast |
| Voidclaw | 253797 | shadow | other |
| Wake of Ashes | 255937, 405345, 405350 (multiple: base cast + variants/sub-spells) | holyfire | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

---

## Notes and Known Gaps

Unconfirmed facts (named explicitly, included WITHOUT invented IDs):
- **Final Verdict / Templar's Verdict SpellID** — damage/rotational spell ID now confirmed from the SimC HTML reference (383328); live Wowhead verification still pending for completeness.
- **Divine Storm SpellID** — damage/rotational spell ID now confirmed from the SimC HTML reference (53385); live Wowhead verification still pending for completeness.
- **Wake of Ashes cooldown** — the Wowhead spell page (255937) showed no base cooldown (it is talent-modified). Icy Veins describes it as a short recurring cooldown (commonly cited as ~30 sec) but the exact 12.0.5 value was not confirmed from a primary source. SpellID 255937 is confirmed.
- **Shield of Vengeance cooldown** — the Wowhead spell page (184662) lists no cooldown on the base spell. The real in-game recharge (commonly ~1–1.5 min) was not confirmed; SpellID and 10-sec duration are confirmed.
- **Blessing of Protection / Blessing of Freedom cooldowns** — Wowhead listed "1.5 sec," which is a GCD/cast-side value, not the true recharge (both have multi-minute real cooldowns). SpellIDs (1022, 1044) and durations (10 sec, 8 sec) are confirmed; the true cooldowns are NOT confirmed and should be re-verified.
- **Hammer of Light SpellID** — base/canonical Wowhead page is 427441 (confirmed). Search results also referenced a cast-version ID (427453) and a free Light's-Deliverance version (429826); these secondary IDs were NOT individually fetched and confirmed, so only 427441 is asserted here.
- **Execution Sentence, Final Reckoning, Crusade, Eye of Tyr, Crusader Strike, Templar Strike/Slash, Crusading Strikes SpellIDs** — referenced by name from rotation/talent sources; individual spell pages not fetched, so no IDs are given.
- **Hammer of Justice and other CC SpellIDs** — not confirmed live.
- **Consumable, gem, and enchant item IDs** — names captured from Icy Veins; no numeric item IDs were confirmed against live item pages, so all are omitted.
- **Empyrean Hammer, Highlord's Judgment SpellIDs** — damage/rotational spell IDs now confirmed from the SimC HTML reference (431398 and 383921 respectively); defensive/interrupt/utility IDs still pending live Wowhead.
- **Sun's Avatar, Sun Sear SpellIDs** — damage/rotational spell IDs now confirmed from the SimC HTML reference (431911 and 431414 respectively); defensive/interrupt/utility IDs still pending live Wowhead.
- **Secondary stat priority** — no live source confirmed; only conceptual rotation/talent prose is provided.
- **SimC damage distribution and talent strings added** (Templar and Herald variants, Midnight 12.0.5); SimC APL now embedded (extracted from Trivial.txt). Damage/rotational spell IDs now confirmed from the SimC HTML reference for matched abilities; defensive/interrupt/utility IDs still pending live Wowhead.

Source caveats:
- Wowhead guide pages (overview/rotation/abilities) did not render usable body text through the fetch tool; rotation and ability descriptions were sourced from Icy Veins (patch 12.0.5) and individual Wowhead spell pages. Some later Wowhead spell-page fetches returned HTTP 403 (rate limiting); those IDs (Judgment 20271, Hammer of Wrath 24275, Word of Glory 85673, Blade of Justice 184575, Hammer of Light 427441, Cleanse Toxins 213644) were instead confirmed via their canonical Wowhead URLs returned in search, where the URL slug embeds the name and ID.

Maintenance flag: **Re-verify this guide after any 12.x patch.** SpellIDs are stable across patches in WoW, but cooldowns, talent layouts, hero-tree balance, and all consumable/enchant recommendations can change. The unconfirmed cooldowns and the spender SpellIDs above should be the first items confirmed on the next pass.
