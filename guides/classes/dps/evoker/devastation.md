# Devastation Evoker — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/guide/classes/evoker/devastation/overview-pve-dps
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-gems-enchants-consumables
> - https://www.wowhead.com/spell=351338/quell
> - https://www.wowhead.com/spell=363916/obsidian-scales
> - https://www.wowhead.com/spell=374348/renewing-blaze
> - https://www.wowhead.com/spell=374227/zephyr
> - https://www.wowhead.com/spell=370553/tip-the-scales
> - https://www.wowhead.com/spell=358267/hover
> - https://www.wowhead.com/spell=375087/dragonrage
> - https://www.wowhead.com/spell=357208/fire-breath
> - https://www.wowhead.com/spell=359073/eternity-surge
> - https://www.wowhead.com/spell=356995/disintegrate
> - https://www.wowhead.com/spell=357211/pyre
> - https://www.wowhead.com/spell=361469/living-flame
> - https://www.wowhead.com/spell=364342/blessing-of-the-bronze
> - https://www.wowhead.com/spell=369459/source-of-magic
> - https://www.wowhead.com/spell=360806/sleep-walk
> - https://www.wowhead.com/spell=370665/rescue
> - https://www.wowhead.com/spell=374251/cauterizing-flame
> - https://www.wowhead.com/spell=365585/expunge
> - https://www.wowhead.com/spell=406732/spatial-paradox
> - https://www.wowhead.com/spell=390386/fury-of-the-aspects
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Devastation is the ranged-DPS specialization of the Evoker class (Dracthyr race). It is a mid-range caster: most abilities have a 25-yard range, which is shorter than a typical mage or warlock, so positioning matters more than for other casters. Its core resource is **Essence** (a small recharging pool), spent on its main damage spells.

The core gameplay loop is built around two **Empower** spells — **Fire Breath** and **Eternity Surge** — which are channeled and "charge up" through empower levels before releasing. These are cast on cooldown, with **Disintegrate** as the primary Essence spender between them and **Living Flame** as the no-cost filler. The major throughput cooldown is **Dragonrage**, a 2-minute burst window. In single target the priority is Empower spells on cooldown plus Disintegrate; in AoE it shifts toward **Pyre** and Dragonrage-fueled cleave.

Damage profile: strong, bursty AoE/cleave during Dragonrage and steady single-target the rest of the time. Survivability is good for a caster — it has a strong stacking damage reduction (Obsidian Scales), a self heal-over-time (Renewing Blaze), and a raid-wide AoE-damage-reduction cooldown (Zephyr). Healing contribution to the raid is minor (Living Flame, Verdant Embrace) and incidental, not a healing role.

**Primary weakness:** the short (~25 yard) range and the fact that Empower spells lock the caster in place / in a channel. The spec is heavily reliant on **Hover** to keep casting while moving; misusing or wasting Hover during heavy-movement phases is the most common cause of lost uptime. (Sources: Wowhead Devastation overview; Icy Veins spell summary & rotation pages.)

## Role in Raid

- **Role:** Ranged DPS. Not a healer, not a tank.
- **Bloodlust-equivalent:** YES. Evoker provides **Fury of the Aspects** (Spell ID `390386`) — a raid-wide 30% Haste buff for 40 seconds that applies the **Exhaustion** debuff (the Evoker equivalent of Sated/Bloodlust lockout) afterward. This can be brought by a Devastation Evoker, so the raid does not separately need a Shaman/Mage/Hunter for Lust. (Confirmed via Wowhead spell page 390386 and corroborating live search.)
- **Battle resurrection:** NO. Evoker has no in-combat battle res. Its resurrection spell (Return) is out-of-combat only. Do not expect a combat rez from this spec.
- **Raid buffs/debuffs brought:**
  - **Blessing of the Bronze** (Spell ID `364342`) — a long-duration raid utility buff (movement-speed style buff; one of the standard Evoker raid buffs).
  - **Source of Magic** (Spell ID `369459`) — a single-target buff placed on an ally (typically a healer) that grants a damage/effect bonus; excludes the caster. Mana-return style support utility.
  - **Shattering Star** — applies a target damage-amplification debuff (the target takes increased damage), useful on priority/burst targets. See Abilities note about its ID.
- **Group defensives / externals:**
  - **Zephyr** (Spell ID `374227`) — raid AoE damage reduction (see Defensives).
  - **Rescue** (Spell ID `370665`) — grabs an ally and pulls them to the Evoker; a positioning/save tool, not a damage-reduction external.
  - **Spatial Paradox** (Spell ID `406732`) — utility cooldown granted to self or an ally (see Utility).
- **Mobility:** Above average. **Hover** (Spell ID `358267`) allows casting while moving; the class also has Deep Breath (a directional flight/dash) and Soar as travel tools. (Sources: Wowhead spell pages; Wowhead overview; Icy Veins spell summary.)

## Abilities Reference

Core damage:
- **Disintegrate** (Spell ID `356995`) — channeled Essence spender (3 Essence), main single-target damage. Frost/Arcane. Channels over ~3 seconds dealing periodic damage.
- **Pyre** (Spell ID `357211`) — instant Essence spender (3 Essence), Fire AoE. Used when fighting multiple targets.
- **Living Flame** (Spell ID `361469`) — no-Essence filler; deals damage to enemies (or heals a friendly target). Generates resources/procs in the rotation.
- **Azure Strike** — instant cleave hitting up to 2 targets; used for movement filler when Hover isn't available. (Name confirmed in Icy Veins spell summary; spell ID not separately confirmed — see Known Gaps.)
- **Fire Breath** (Spell ID `357208`) — Empower spell. Frontal cone Fire damage plus a damage-over-time. Cast on cooldown, usually at empower level 1 in raid single-target.
- **Eternity Surge** (Spell ID `359073`) — Empower spell, ~30-second cooldown. High direct Spellfrost/Arcane damage; higher empower levels hit more nearby targets.
- **Shattering Star** — ~15-second cooldown; deals damage and applies a debuff increasing damage the target takes (commonly cited as +20%). Live search resolves this to Wowhead spell `370452`, but a direct fetch of that page failed to render — treat the ID as likely-but-not-fully-confirmed (see Known Gaps).
- **Deep Breath** — directional flight that damages everything in the path. A core Scalecommander hero-talent spell. (Spell ID not confirmed — see Known Gaps.)

Cooldowns / utility throughput:
- **Dragonrage** (Spell ID `375087`) — major DPS cooldown, 2-minute cooldown, 18-second duration. Burst window; line up Empowers and Essence spenders inside it.
- **Tip the Scales** (Spell ID `370553`) — 2-minute cooldown; makes the next Empower spell cast instantly at max rank. Used to weave a full-power Empower while moving or under time pressure.
- **Firestorm** — ~20-second cooldown AoE ground effect (talent). (Spell ID not confirmed — see Known Gaps.)

Hero talent trees (Midnight Season 1): **Scalecommander** (most-played; built around Mass Disintegrate and Deep Breath) and **Flameshaper** (red/Fire-focused, extra Fire Breath charge). Both are viable; Scalecommander is the more common raid pick. (Source: Wowhead/Method/Icy Veins talent pages via search.)

## Rotation / Priority

The following is **logical priority order, not a DPS benchmark or a strict GCD-by-GCD script.** Exact ordering shifts with hero talents, set bonuses, and target count.

**Opener (general):** Pre-cast Living Flame into pull → **Dragonrage** → **Fire Breath** (empower 1) → **Eternity Surge** → spend **Disintegrate** → refresh Fire Breath when available → continue Disintegrate while Essence allows → filler. If the raid uses **Fury of the Aspects** on pull, fire Dragonrage immediately to ride the Haste.

**Sustained single target (priority):**
1. **Fire Breath** on cooldown (usually empower level 1).
2. **Eternity Surge** on cooldown.
3. **Shattering Star** on cooldown (also amplifies your following hits on that target).
4. **Disintegrate** as the Essence spender.
5. **Living Flame** as filler / to consume procs.
6. Movement filler (Living Flame / Azure Strike) only when you cannot stand and channel and Hover is unavailable.

**AoE (3+ targets):**
1. **Dragonrage** on cooldown.
2. **Fire Breath** (empower 1).
3. **Pyre** at 3+ targets (drop back to Disintegrate at 1–2 targets).
4. **Living Flame** to consume procs.
5. **Eternity Surge** when nothing higher priority is available.

Cast **Disintegrate / Living Flame while moving by using Hover**; do not stand still through avoidable damage just to finish a channel. (Source: Icy Veins rotation/cooldowns page.)

## Defensives

For each: **RaidLens usage** explains how to judge correct use against a damage window. Approximate cooldowns are given where a source confirmed them.

- **Obsidian Scales** (Spell ID `363916`) — reduces all damage taken by **30% for 12 seconds**. Cooldown **~1.5 minutes** (per Icy Veins; the raw Wowhead cooldown field rendered ambiguously — treat 1.5 min as the gameplay value). Strongest personal mitigation.
  - **RaidLens usage:** This is the primary "did they press a defensive" check. For a large avoidable or scripted hit that killed or nearly killed the Evoker, Obsidian Scales should have been active or available. If the player took a lethal/near-lethal hit and Obsidian Scales had been off cooldown for the prior ~90 seconds with no use, flag it as an unused defensive.

- **Renewing Blaze** (Spell ID `374348`) — converts damage taken over the next 8 seconds into a heal-over-time on the Evoker for the same amount over 8 seconds. Cooldown **~90 seconds** (per Icy Veins; the Wowhead page lists the base node cooldown as n/a because the value comes from the talent). Effectively a delayed self-heal / sustain tool.
  - **RaidLens usage:** Best judged during sustained raid damage or repeated tickly damage, not a single one-shot. If an Evoker is dying slowly to stacking/periodic damage and never pressed Renewing Blaze while it was available, flag it. Less relevant for instant one-shots (the HoT pays out too slowly).

- **Zephyr** (Spell ID `374227`) — raid-wide: nearby allies (within 20 yards) take **20% reduced AoE damage** and gain 30% movement speed for **8 seconds**. Cooldown **2 minutes**. This is a group AoE-damage cooldown, not just personal.
  - **RaidLens usage:** Treat as a minor raid cooldown. During a known raid-wide AoE burst (e.g., a scripted breath/explosion that hits the group), check whether Zephyr was used. Because the radius is only 20 yards, value depends on the raid being grouped. Flag unused Zephyr only when a clear raid-wide AoE window occurred and it was off cooldown.

Note: **Tip the Scales** and **Hover** are not defensives but are sometimes used to keep casting while dodging — do not count them as mitigation.

## Utility

- **Interrupt — Quell** (Spell ID `351338`): YES, Devastation HAS a raid-usable interrupt. Quell is an instant interrupt, **20-second cooldown**, ~25-yard range, no resource cost. This is the spec's interrupt. There is no second kick — Quell is the only interrupt.
  - **RaidLens usage:** When a boss/add cast must be interrupted and a Devastation Evoker was assigned or in range, a missed interrupt is attributable to this spec on a 20-second cadence. With a 20s cooldown, an Evoker can cover frequent interrupt rotations.
- **Crowd control:**
  - **Sleep Walk** (Spell ID `360806`) — a cast-time incapacitate/"Asleep" effect (~20-second duration on the target; breaks on damage). Usable on adds in raid.
  - **Landslide** — a root/ensnare utility talent (CC). (Spell ID not confirmed — see Known Gaps.)
- **Dispels:**
  - **Cauterizing Flame** (Spell ID `374251`) — ~1-minute cooldown; heals the target and removes **Bleed, Poison, Disease, or Curse** effects (a broad single-target dispel) and provides a small heal. (Wowhead lists Poison/Disease/Curse on the effect breakdown; commonly described as also removing Bleed — see Known Gaps for the exact removable set.)
  - **Expunge** (Spell ID `365585`) — removes **Poison** effects from a friendly target; ~8-second cooldown (talent).
- **Externals / support:**
  - **Rescue** (Spell ID `370665`) — instantly pulls a targeted ally to the Evoker; ~30-yard range, ~1-minute cooldown. Positioning save (e.g., pull someone out of a bad spot), not a damage-reduction external.
  - **Spatial Paradox** (Spell ID `406732`) — ~3-minute cooldown utility buff cast on self or an ally; grants cast-while-moving and dispel resistance for ~10 seconds. It is **NOT** a Bloodlust/Haste-burst external — do not treat it as Lust.
  - **Source of Magic** (Spell ID `369459`) — single-ally buff (typically on a healer) providing a sustained bonus; excludes the caster.
- **Raid buffs/debuffs:**
  - **Fury of the Aspects** (Spell ID `390386`) — raid-wide 30% Haste for 40s; the Bloodlust-equivalent (causes Exhaustion afterward).
  - **Blessing of the Bronze** (Spell ID `364342`) — standard Evoker raid buff.
  - **Shattering Star** — single-target damage-taken increase debuff on the boss/priority target (see Abilities ID note).
- **Movement tools:**
  - **Hover** (Spell ID `358267`) — allows casting while moving and grants movement speed for ~6 seconds; the spec's signature mobility tool.
  - **Deep Breath** — long directional flight/dash that also deals damage.
  - **Soar** — out-of-combat flight (Dracthyr racial-style travel).

## Consumables and Enchants

From Icy Veins' Devastation 12.0.5 gems/enchants/consumables page (item names as written; item IDs were not confirmed on a fetched page, so none are given):

- **Flask:** "Flask of the Blood Knights" (Haste-leaning) or "Flask of the Shattered Sun" (if very low Crit).
- **Combat potion:** "Potion of Recklessness".
- **Food:** "Silvermoon Parade" feast (preferred) or "Royal Roast" (personal-food alternative).
- **Augment rune:** "Void-Touched Augment Rune".
- **Weapon oil:** "Thalassian Phoenix Oil".
- **Enchants (named on the page):** Weapon — "Acuity of the Ren'dorei"; Helm — "Empowered Blessing of Speed"; Rings — "Silvermoon's Alacrity"; Chest — "Mark of the Worldsoul"; Shoulders — "Akil'zon's Swiftness".
- **Gems:** "Powerful Eversong Diamond" in one socket; fill remaining sockets with "Flawless Quick Garnet"; include one each of the other colors to enable the gem set/movement effect.

These are throughput recommendations and may shift with tuning. No numeric item IDs are included because none were confirmed on a fetched item page.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Flameshaper (FS)** and **Scalecommander (SC)**. Both variants share the same APL file structure (the SC action list is invoked when `talent.mass_disintegrate` is active; otherwise Flameshaper ST/AoE lists are used).

### Talent Import Strings

**Flameshaper (FS):**
```
CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgZmZwMDGMgBjZamZmJjxyMzMzwMzMzAmxMzYmZbmZwMwMmB2ALgZYCsFsMMAmZGG
```

**Scalecommander (SC):**
```
CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMDMDzgBmZGjZaYmpZMWmxMzMz8AzMzAmxMGzMLzMDMwYwCsMGN2GQmBBbYGMzghB
```

### Metrics

Metrics not captured in source.

### Damage Distribution (SimC, share of total)

**Flameshaper (FS) — single target:**

| Ability | Share of Total |
|---------|---------------|
| Disintegrate | 40.5% |
| Consume Flame | 27.8% |
| Eternity Surge | 6.0% |
| Twin Flame | 4.3% |
| Living Flame | 2.2% |

Flameshaper's damage is strongly concentrated in Disintegrate (~40%) and the Consume Flame talent (~28%), making sustained channel uptime the dominant factor — any movement or interruption that breaks Disintegrate channels represents a disproportionate DPS loss in this build.

**Scalecommander (SC) — single target:**

| Ability | Share of Total |
|---------|---------------|
| Disintegrate | 54.0% |
| Bombardments | 11.8% |
| Deep Breath | 9.6% |
| Fire Breath | 5.9% |
| Eternity Surge | 5.2% |
| Pyre | 2.2% |
| Living Flame | 0.9% |
| Azure Strike | 0.1% |

Scalecommander is even more Disintegrate-centric (~54%), with Bombardments (the Scalecommander debuff proc) and Deep Breath providing significant secondary contributions — this means tracking Disintegrate uptime and Deep Breath usage cadence are the primary levers for identifying underperformance in WCL logs.

### Action Priority List — Flameshaper (FS)

```
actions.precombat=snapshot_stats
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_buff.intellect|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_buff.intellect|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit
actions.precombat+=/variable,name=weapon_buffs,value=0
actions.precombat+=/variable,name=weapon_sync,op=setif,value=1,value_else=0.5,condition=0
actions.precombat+=/variable,name=weapon_stat_value,value=0
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.dragonrage.duration=0|cooldown.dragonrage.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.dragonrage.duration=0|cooldown.dragonrage.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_manual,value=0
actions.precombat+=/variable,name=trinket_2_manual,value=0
actions.precombat+=/variable,name=trinket_1_ogcd_cast,value=0
actions.precombat+=/variable,name=trinket_2_ogcd_cast,value=0
actions.precombat+=/variable,name=trinket_1_exclude,value=trinket.1.is.ruby_whelp_shell|trinket.1.is.whispering_incarnate_icon
actions.precombat+=/variable,name=trinket_2_exclude,value=trinket.2.is.ruby_whelp_shell|trinket.2.is.whispering_incarnate_icon
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.proc.any_dps.duration)*(variable.trinket_2_sync)*trinket.2.proc.any_dps.default_value)>((trinket.1.proc.any_dps.duration)*(variable.trinket_1_sync)*trinket.1.proc.any_dps.default_value)
actions.precombat+=/variable,name=trinket_priority,op=setif,if=variable.weapon_buffs,value=3,value_else=variable.trinket_priority,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs|variable.weapon_stat_value*variable.weapon_sync>(((trinket.2.proc.any_dps.duration)*(variable.trinket_2_sync)*trinket.2.proc.any_dps.default_value)<?((trinket.1.proc.any_dps.duration)*(variable.trinket_1_sync)*trinket.1.proc.any_dps.default_value))
actions.precombat+=/variable,name=trinket_priority,op=set,value=trinket.1.is.signet_of_the_priory+2*trinket.2.is.signet_of_the_priory,if=equipped.signet_of_the_priory&variable.trinket_priority=3
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/variable,name=r1_cast_time,value=1.0*spell_haste
actions.precombat+=/variable,name=dr_prep_time,default=6,op=reset
actions.precombat+=/variable,name=dr_prep_time_aoe,default=4,op=reset
actions.precombat+=/variable,name=can_use_empower,value=1,default=1,if=!talent.animosity|!talent.dragonrage
actions.precombat+=/verdant_embrace,if=talent.scarlet_adaptation
actions.precombat+=/hover,if=talent.slipstream
actions.precombat+=/hover,if=talent.slipstream
actions.precombat+=/living_flame

# Executed every time the actor is available.
actions=potion,if=(!talent.dragonrage|buff.dragonrage.up)|fight_remains<35
actions+=/variable,name=next_dragonrage,value=cooldown.dragonrage.remains<?((cooldown.eternity_surge.remains-8)>?(cooldown.fire_breath.remains-8))
actions+=/invoke_external_buff,name=power_infusion,if=buff.dragonrage.up|fight_remains<35
actions+=/variable,name=can_use_empower,op=set,value=cooldown.dragonrage.remains>=gcd.max*variable.dr_prep_time,if=talent.animosity&talent.dragonrage
actions+=/variable,name=use_pyre,op=set,value=(active_enemies>=4|active_enemies>=3&(talent.volatility.rank=2|talent.feed_the_flames))
actions+=/quell,use_off_gcd=1,if=target.debuff.casting.react
actions+=/call_action_list,name=trinkets
actions+=/run_action_list,name=sc,if=talent.mass_disintegrate
actions+=/run_action_list,name=aoe_fs,if=active_enemies>=3
actions+=/run_action_list,name=st_fs

# Flameshaper 3+ Target List
actions.aoe_fs=hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5&active_enemies<=4
actions.aoe_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=cooldown.dragonrage.remains<gcd.max*2&active_dot.fire_breath_damage=0&(target.time_to_die>=15|!raid_event.adds.exists)
actions.aoe_fs+=/tip_the_scales,use_off_gcd=1,if=buff.dragonrage.up&cooldown.eternity_surge.remains<=action.fire_breath.usable_in
actions.aoe_fs+=/call_action_list,name=es,if=buff.tip_the_scales.up
actions.aoe_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=talent.consume_flame&variable.can_use_empower&dot.fire_breath_damage.refreshable
actions.aoe_fs+=/dragonrage,target_if=max:target.time_to_die,if=target.time_to_die>=15|!raid_event.adds.exists
actions.aoe_fs+=/call_action_list,name=es,if=(buff.dragonrage.up|cooldown.dragonrage.remains>variable.dr_prep_time_aoe)&(buff.dragonrage.up|talent.azure_sweep&!buff.azure_sweep.up)&(active_dot.fire_breath_damage=0|active_enemies<=3)
actions.aoe_fs+=/pyre,target_if=max:target.health.pct,if=(cooldown.dragonrage.remains>gcd.max*4)&(buff.charged_blast.stack>=12|active_enemies>=4|active_enemies>=3&(talent.feed_the_flames|talent.volatility))
actions.aoe_fs+=/pyre,target_if=max:target.health.pct,if=active_enemies=3&!talent.feed_the_flames&!talent.volatility
actions.aoe_fs+=/deep_breath,if=talent.imminent_destruction&active_dot.fire_breath_damage=0,cancel_if=gcd.remains=0,interrupt_if=gcd.remains=0
actions.aoe_fs+=/azure_sweep,target_if=max:target.health.pct
actions.aoe_fs+=/living_flame,target_if=max:target.health.pct,if=buff.leaping_flames.up&(!talent.burnout|buff.burnout.up|active_dot.fire_breath_damage=0|buff.scarlet_adaptation.up|buff.ancient_flame.up)&(!buff.essence_burst.up&essence.deficit>1|cooldown.fire_breath.remains<=gcd.max*3&buff.essence_burst.stack<buff.essence_burst.max_stack)
actions.aoe_fs+=/call_action_list,name=es,if=(buff.dragonrage.up|cooldown.dragonrage.remains>variable.dr_prep_time_aoe)&(talent.azure_sweep&!buff.azure_sweep.up)
actions.aoe_fs+=/living_flame,target_if=max:target.health.pct,if=talent.engulfing_blaze&(buff.leaping_flames.up|buff.burnout.up|buff.scarlet_adaptation.up|buff.ancient_flame.up)
actions.aoe_fs+=/azure_strike,target_if=max:target.health.pct

# Pick optimal Eternity Surge Rank
actions.es=eternity_surge,empower_to=1,target_if=max:target.health.pct,if=active_enemies<=1+talent.eternitys_span|active_enemies>4+4*talent.eternitys_span|talent.mass_disintegrate|buff.dragonrage.up
actions.es+=/eternity_surge,empower_to=2,target_if=max:target.health.pct,if=active_enemies<=2+2*talent.eternitys_span
actions.es+=/eternity_surge,empower_to=3,target_if=max:target.health.pct,if=active_enemies<=3+3*talent.eternitys_span
actions.es+=/eternity_surge,empower_to=4,target_if=max:target.health.pct,if=active_enemies<=4+4*talent.eternitys_span

# Green Spells for Ancient Flame
actions.green=emerald_blossom
actions.green+=/verdant_embrace

# SC Action List. Use Deep Breath to optimise for Strafing Run
actions.sc=deep_breath,if=buff.strafing_run.remains<=gcd.max*2,cancel_if=gcd.remains=0
actions.sc+=/dragonrage,if=target.time_to_die>=30&raid_event.adds.in>=60|!raid_event.adds.exists|raid_event.adds.in=0
actions.sc+=/hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5|talent.slipstream&gcd.remains>=0.5
# Use Azure Sweep if Eternity Surge is reasonably Soon. This is not a magic number, it's just simpler than writing out the expansion to account for azure sweep stacks.
actions.sc+=/azure_sweep,if=(buff.essence_burst.down|!buff.essence_burst.at_max_stacks)&set_bonus.mid1_2pc&cooldown.eternity_surge.remains<=6
actions.sc+=/eternity_surge,empower_to=1
actions.sc+=/tip_the_scales,use_off_gcd=1,if=action.fire_breath.ready
actions.sc+=/fire_breath,empower_to=1
# On AOE Deep Breath kinda pipes. Just let it rip to maximise our bomba time.
actions.sc+=/deep_breath,if=variable.use_pyre&talent.imminent_destruction,cancel_if=gcd.remains=0
actions.sc+=/disintegrate,target_if=min:debuff.bombardments.remains,early_chain_if=ticks_remain<=1&buff.mass_disintegrate_stacks.up,if=(raid_event.movement.in>2|buff.hover.up)&buff.mass_disintegrate_stacks.up&talent.mass_disintegrate,interrupt_if=talent.volatility&active_enemies>=8
actions.sc+=/pyre,target_if=max:target.health.pct,if=!buff.mass_disintegrate_stacks.up&variable.use_pyre
actions.sc+=/disintegrate,target_if=max:dot.fire_breath_damage.remains,if=(raid_event.movement.in>2|buff.hover.up),early_chain_if=ticks_remain<=1
actions.sc+=/azure_sweep
actions.sc+=/living_flame,if=buff.burnout.up|(buff.leaping_flames.up|buff.ancient_flame.up|talent.engulfing_blaze)&raid_event.movement.in>execute_time
actions.sc+=/call_action_list,name=green,if=talent.ancient_flame&!buff.ancient_flame.up&talent.scarlet_adaptation&!buff.dragonrage.up
actions.sc+=/azure_strike

# Flameshaper 1 / 2 Target List
actions.st_fs=dragonrage,if=target.time_to_die>=30&raid_event.adds.in>=60|!raid_event.adds.exists|raid_event.adds.in=0
actions.st_fs+=/hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5|talent.slipstream&gcd.remains>=0.5
actions.st_fs+=/tip_the_scales,use_off_gcd=1,if=buff.dragonrage.up&action.eternity_surge.usable_in<=action.fire_breath.usable_in
actions.st_fs+=/eternity_surge,target_if=max:target.health.pct,empower_to=2,if=active_enemies=2&!talent.eternitys_span&variable.can_use_empower
actions.st_fs+=/eternity_surge,target_if=max:target.health.pct,empower_to=1,if=variable.can_use_empower|set_bonus.mid1_2pc&talent.azure_sweep
actions.st_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=variable.can_use_empower&!buff.tip_the_scales.up&dot.fire_breath_damage.refreshable&(cooldown.dragonrage.remains>full_recharge_time|buff.dragonrage.up|full_recharge_time<gcd.max*5)
actions.st_fs+=/pyre,target_if=min:dot.fire_breath_damage.remains-100*dot.fire_breath_damage.ticking,if=active_enemies>1&dot.fire_breath_damage.remains<=8&talent.feed_the_flames&talent.volatility
actions.st_fs+=/disintegrate,target_if=max:dot.fire_breath_damage.remains,chain=1,if=(raid_event.movement.in>2|buff.hover.up),early_chain_if=ticks_remain<=1,interrupt_if=ticks_remain<=1
actions.st_fs+=/azure_sweep
actions.st_fs+=/living_flame,if=buff.burnout.up|(buff.leaping_flames.up|buff.ancient_flame.up)&raid_event.movement.in>execute_time
actions.st_fs+=/azure_strike,if=active_enemies>1
actions.st_fs+=/living_flame,if=raid_event.movement.in>execute_time
actions.st_fs+=/call_action_list,name=green,if=talent.ancient_flame&!buff.ancient_flame.up&talent.scarlet_adaptation&!buff.dragonrage.up
actions.st_fs+=/azure_strike

# Trinket Spaghetti
actions.trinkets=use_item,slot=trinket1,if=buff.dragonrage.up&(buff.rising_fury.stack>=4|talent.legacy_of_the_lifebinder)&((variable.trinket_2_buffs&!cooldown.fire_breath.up&trinket.2.cooldown.remains)|buff.tip_the_scales.up&variable.trinket_priority=1|(!cooldown.fire_breath.up)|active_enemies>=3)&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1|variable.trinket_2_exclude)&!variable.trinket_1_manual|trinket.1.proc.any_dps.duration>=fight_remains|trinket.1.cooldown.duration<=60&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=1)&!variable.trinket_1_manual
# other spagetti is so complicated. Just Trinket in AoE without a delay.
actions.trinkets+=/use_item,slot=trinket2,if=trinket.2.is.vaelgors_final_stare&buff.dragonrage.up&active_enemies>=3
actions.trinkets+=/use_item,slot=trinket2,if=buff.dragonrage.up&(buff.rising_fury.stack>=4|talent.legacy_of_the_lifebinder)&((variable.trinket_1_buffs&!cooldown.fire_breath.up&trinket.1.cooldown.remains)|buff.tip_the_scales.up&variable.trinket_priority=2|(!cooldown.fire_breath.up)|active_enemies>=3)&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2|variable.trinket_1_exclude)&!variable.trinket_2_manual|trinket.2.proc.any_dps.duration>=fight_remains|trinket.2.cooldown.duration<=60&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=2)&!variable.trinket_2_manual
actions.trinkets+=/use_item,slot=main_hand,if=variable.weapon_buffs&((variable.trinket_2_buffs&(trinket.2.cooldown.remains|trinket.2.cooldown.duration<=20)|!variable.trinket_2_buffs|variable.trinket_2_exclude|variable.trinket_priority=3)&(variable.trinket_1_buffs&(trinket.1.cooldown.remains|trinket.1.cooldown.duration<=20)|!variable.trinket_1_buffs|variable.trinket_1_exclude|variable.trinket_priority=3)&(!cooldown.fire_breath.up|(!cooldown.fire_breath.up)|active_enemies>=3))&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=3|variable.trinket_priority=1&trinket.1.cooldown.remains|variable.trinket_priority=2&trinket.2.cooldown.remains)
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.is.spymasters_web|trinket.2.cooldown.duration=0)&(gcd.remains>0.1&!prev_gcd.1.deep_breath)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_2_buffs|trinket.2.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.is.spymasters_web|trinket.1.cooldown.duration=0)&(gcd.remains>0.1&!prev_gcd.1.deep_breath)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_1_buffs|trinket.1.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.is.spymasters_web|trinket.2.cooldown.duration=0)&(!variable.trinket_1_ogcd_cast)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_2_buffs|trinket.2.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.is.spymasters_web|trinket.1.cooldown.duration=0)&(!variable.trinket_2_ogcd_cast)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_1_buffs|trinket.1.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
```

### Action Priority List — Scalecommander (SC)

```
actions.precombat=snapshot_stats
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_buff.intellect|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_buff.intellect|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit
actions.precombat+=/variable,name=weapon_buffs,value=0
actions.precombat+=/variable,name=weapon_sync,op=setif,value=1,value_else=0.5,condition=0
actions.precombat+=/variable,name=weapon_stat_value,value=0
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.dragonrage.duration=0|cooldown.dragonrage.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.dragonrage.duration=0|cooldown.dragonrage.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_manual,value=0
actions.precombat+=/variable,name=trinket_2_manual,value=0
actions.precombat+=/variable,name=trinket_1_ogcd_cast,value=0
actions.precombat+=/variable,name=trinket_2_ogcd_cast,value=0
actions.precombat+=/variable,name=trinket_1_exclude,value=trinket.1.is.ruby_whelp_shell|trinket.1.is.whispering_incarnate_icon
actions.precombat+=/variable,name=trinket_2_exclude,value=trinket.2.is.ruby_whelp_shell|trinket.2.is.whispering_incarnate_icon
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.proc.any_dps.duration)*(variable.trinket_2_sync)*trinket.2.proc.any_dps.default_value)>((trinket.1.proc.any_dps.duration)*(variable.trinket_1_sync)*trinket.1.proc.any_dps.default_value)
actions.precombat+=/variable,name=trinket_priority,op=setif,if=variable.weapon_buffs,value=3,value_else=variable.trinket_priority,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs|variable.weapon_stat_value*variable.weapon_sync>(((trinket.2.proc.any_dps.duration)*(variable.trinket_2_sync)*trinket.2.proc.any_dps.default_value)<?((trinket.1.proc.any_dps.duration)*(variable.trinket_1_sync)*trinket.1.proc.any_dps.default_value))
actions.precombat+=/variable,name=trinket_priority,op=set,value=trinket.1.is.signet_of_the_priory+2*trinket.2.is.signet_of_the_priory,if=equipped.signet_of_the_priory&variable.trinket_priority=3
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions.precombat+=/variable,name=r1_cast_time,value=1.0*spell_haste
actions.precombat+=/variable,name=dr_prep_time,default=6,op=reset
actions.precombat+=/variable,name=dr_prep_time_aoe,default=4,op=reset
actions.precombat+=/variable,name=can_use_empower,value=1,default=1,if=!talent.animosity|!talent.dragonrage
actions.precombat+=/verdant_embrace,if=talent.scarlet_adaptation
actions.precombat+=/hover,if=talent.slipstream
actions.precombat+=/hover,if=talent.slipstream
actions.precombat+=/living_flame

# Executed every time the actor is available.
actions=potion,if=(!talent.dragonrage|buff.dragonrage.up)|fight_remains<35
actions+=/variable,name=next_dragonrage,value=cooldown.dragonrage.remains<?((cooldown.eternity_surge.remains-8)>?(cooldown.fire_breath.remains-8))
actions+=/invoke_external_buff,name=power_infusion,if=buff.dragonrage.up|fight_remains<35
actions+=/variable,name=can_use_empower,op=set,value=cooldown.dragonrage.remains>=gcd.max*variable.dr_prep_time,if=talent.animosity&talent.dragonrage
actions+=/variable,name=use_pyre,op=set,value=(active_enemies>=4|active_enemies>=3&(talent.volatility.rank=2|talent.feed_the_flames))
actions+=/quell,use_off_gcd=1,if=target.debuff.casting.react
actions+=/call_action_list,name=trinkets
actions+=/run_action_list,name=sc,if=talent.mass_disintegrate
actions+=/run_action_list,name=aoe_fs,if=active_enemies>=3
actions+=/run_action_list,name=st_fs

# Flameshaper 3+ Target List
actions.aoe_fs=hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5&active_enemies<=4
actions.aoe_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=cooldown.dragonrage.remains<gcd.max*2&active_dot.fire_breath_damage=0&(target.time_to_die>=15|!raid_event.adds.exists)
actions.aoe_fs+=/tip_the_scales,use_off_gcd=1,if=buff.dragonrage.up&cooldown.eternity_surge.remains<=action.fire_breath.usable_in
actions.aoe_fs+=/call_action_list,name=es,if=buff.tip_the_scales.up
actions.aoe_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=talent.consume_flame&variable.can_use_empower&dot.fire_breath_damage.refreshable
actions.aoe_fs+=/dragonrage,target_if=max:target.time_to_die,if=target.time_to_die>=15|!raid_event.adds.exists
actions.aoe_fs+=/call_action_list,name=es,if=(buff.dragonrage.up|cooldown.dragonrage.remains>variable.dr_prep_time_aoe)&(buff.dragonrage.up|talent.azure_sweep&!buff.azure_sweep.up)&(active_dot.fire_breath_damage=0|active_enemies<=3)
actions.aoe_fs+=/pyre,target_if=max:target.health.pct,if=(cooldown.dragonrage.remains>gcd.max*4)&(buff.charged_blast.stack>=12|active_enemies>=4|active_enemies>=3&(talent.feed_the_flames|talent.volatility))
actions.aoe_fs+=/pyre,target_if=max:target.health.pct,if=active_enemies=3&!talent.feed_the_flames&!talent.volatility
actions.aoe_fs+=/deep_breath,if=talent.imminent_destruction&active_dot.fire_breath_damage=0,cancel_if=gcd.remains=0,interrupt_if=gcd.remains=0
actions.aoe_fs+=/azure_sweep,target_if=max:target.health.pct
actions.aoe_fs+=/living_flame,target_if=max:target.health.pct,if=buff.leaping_flames.up&(!talent.burnout|buff.burnout.up|active_dot.fire_breath_damage=0|buff.scarlet_adaptation.up|buff.ancient_flame.up)&(!buff.essence_burst.up&essence.deficit>1|cooldown.fire_breath.remains<=gcd.max*3&buff.essence_burst.stack<buff.essence_burst.max_stack)
actions.aoe_fs+=/call_action_list,name=es,if=(buff.dragonrage.up|cooldown.dragonrage.remains>variable.dr_prep_time_aoe)&(talent.azure_sweep&!buff.azure_sweep.up)
actions.aoe_fs+=/living_flame,target_if=max:target.health.pct,if=talent.engulfing_blaze&(buff.leaping_flames.up|buff.burnout.up|buff.scarlet_adaptation.up|buff.ancient_flame.up)
actions.aoe_fs+=/azure_strike,target_if=max:target.health.pct

# Pick optimal Eternity Surge Rank
actions.es=eternity_surge,empower_to=1,target_if=max:target.health.pct,if=active_enemies<=1+talent.eternitys_span|active_enemies>4+4*talent.eternitys_span|talent.mass_disintegrate|buff.dragonrage.up
actions.es+=/eternity_surge,empower_to=2,target_if=max:target.health.pct,if=active_enemies<=2+2*talent.eternitys_span
actions.es+=/eternity_surge,empower_to=3,target_if=max:target.health.pct,if=active_enemies<=3+3*talent.eternitys_span
actions.es+=/eternity_surge,empower_to=4,target_if=max:target.health.pct,if=active_enemies<=4+4*talent.eternitys_span

# Green Spells for Ancient Flame
actions.green=emerald_blossom
actions.green+=/verdant_embrace

# SC Action List. Use Deep Breath to optimise for Strafing Run
actions.sc=deep_breath,if=buff.strafing_run.remains<=gcd.max*2,cancel_if=gcd.remains=0
actions.sc+=/dragonrage,if=target.time_to_die>=30&raid_event.adds.in>=60|!raid_event.adds.exists|raid_event.adds.in=0
actions.sc+=/hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5|talent.slipstream&gcd.remains>=0.5
# Use Azure Sweep if Eternity Surge is reasonably Soon. This is not a magic number, it's just simpler than writing out the expansion to account for azure sweep stacks.
actions.sc+=/azure_sweep,if=(buff.essence_burst.down|!buff.essence_burst.at_max_stacks)&set_bonus.mid1_2pc&cooldown.eternity_surge.remains<=6
actions.sc+=/eternity_surge,empower_to=1
actions.sc+=/tip_the_scales,use_off_gcd=1,if=action.fire_breath.ready
actions.sc+=/fire_breath,empower_to=1
# On AOE Deep Breath kinda pipes. Just let it rip to maximise our bomba time.
actions.sc+=/deep_breath,if=variable.use_pyre&talent.imminent_destruction,cancel_if=gcd.remains=0
actions.sc+=/disintegrate,target_if=min:debuff.bombardments.remains,early_chain_if=ticks_remain<=1&buff.mass_disintegrate_stacks.up,if=(raid_event.movement.in>2|buff.hover.up)&buff.mass_disintegrate_stacks.up&talent.mass_disintegrate,interrupt_if=talent.volatility&active_enemies>=8
actions.sc+=/pyre,target_if=max:target.health.pct,if=!buff.mass_disintegrate_stacks.up&variable.use_pyre
actions.sc+=/disintegrate,target_if=max:dot.fire_breath_damage.remains,if=(raid_event.movement.in>2|buff.hover.up),early_chain_if=ticks_remain<=1
actions.sc+=/azure_sweep
actions.sc+=/living_flame,if=buff.burnout.up|(buff.leaping_flames.up|buff.ancient_flame.up|talent.engulfing_blaze)&raid_event.movement.in>execute_time
actions.sc+=/call_action_list,name=green,if=talent.ancient_flame&!buff.ancient_flame.up&talent.scarlet_adaptation&!buff.dragonrage.up
actions.sc+=/azure_strike

# Flameshaper 1 / 2 Target List
actions.st_fs=dragonrage,if=target.time_to_die>=30&raid_event.adds.in>=60|!raid_event.adds.exists|raid_event.adds.in=0
actions.st_fs+=/hover,use_off_gcd=1,if=raid_event.movement.in<6&!buff.hover.up&gcd.remains>=0.5|talent.slipstream&gcd.remains>=0.5
actions.st_fs+=/tip_the_scales,use_off_gcd=1,if=buff.dragonrage.up&action.eternity_surge.usable_in<=action.fire_breath.usable_in
actions.st_fs+=/eternity_surge,target_if=max:target.health.pct,empower_to=2,if=active_enemies=2&!talent.eternitys_span&variable.can_use_empower
actions.st_fs+=/eternity_surge,target_if=max:target.health.pct,empower_to=1,if=variable.can_use_empower|set_bonus.mid1_2pc&talent.azure_sweep
actions.st_fs+=/fire_breath,target_if=max:target.health.pct,empower_to=1,if=variable.can_use_empower&!buff.tip_the_scales.up&dot.fire_breath_damage.refreshable&(cooldown.dragonrage.remains>full_recharge_time|buff.dragonrage.up|full_recharge_time<gcd.max*5)
actions.st_fs+=/pyre,target_if=min:dot.fire_breath_damage.remains-100*dot.fire_breath_damage.ticking,if=active_enemies>1&dot.fire_breath_damage.remains<=8&talent.feed_the_flames&talent.volatility
actions.st_fs+=/disintegrate,target_if=max:dot.fire_breath_damage.remains,chain=1,if=(raid_event.movement.in>2|buff.hover.up),early_chain_if=ticks_remain<=1,interrupt_if=ticks_remain<=1
actions.st_fs+=/azure_sweep
actions.st_fs+=/living_flame,if=buff.burnout.up|(buff.leaping_flames.up|buff.ancient_flame.up)&raid_event.movement.in>execute_time
actions.st_fs+=/azure_strike,if=active_enemies>1
actions.st_fs+=/living_flame,if=raid_event.movement.in>execute_time
actions.st_fs+=/call_action_list,name=green,if=talent.ancient_flame&!buff.ancient_flame.up&talent.scarlet_adaptation&!buff.dragonrage.up
actions.st_fs+=/azure_strike

# Trinket Spaghetti
actions.trinkets=use_item,slot=trinket1,if=buff.dragonrage.up&(buff.rising_fury.stack>=4|talent.legacy_of_the_lifebinder)&((variable.trinket_2_buffs&!cooldown.fire_breath.up&trinket.2.cooldown.remains)|buff.tip_the_scales.up&variable.trinket_priority=1|(!cooldown.fire_breath.up)|active_enemies>=3)&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1|variable.trinket_2_exclude)&!variable.trinket_1_manual|trinket.1.proc.any_dps.duration>=fight_remains|trinket.1.cooldown.duration<=60&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=1)&!variable.trinket_1_manual
# other spagetti is so complicated. Just Trinket in AoE without a delay.
actions.trinkets+=/use_item,slot=trinket2,if=trinket.2.is.vaelgors_final_stare&buff.dragonrage.up&active_enemies>=3
actions.trinkets+=/use_item,slot=trinket2,if=buff.dragonrage.up&(buff.rising_fury.stack>=4|talent.legacy_of_the_lifebinder)&((variable.trinket_1_buffs&!cooldown.fire_breath.up&trinket.1.cooldown.remains)|buff.tip_the_scales.up&variable.trinket_priority=2|(!cooldown.fire_breath.up)|active_enemies>=3)&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2|variable.trinket_1_exclude)&!variable.trinket_2_manual|trinket.2.proc.any_dps.duration>=fight_remains|trinket.2.cooldown.duration<=60&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=2)&!variable.trinket_2_manual
actions.trinkets+=/use_item,slot=main_hand,if=variable.weapon_buffs&((variable.trinket_2_buffs&(trinket.2.cooldown.remains|trinket.2.cooldown.duration<=20)|!variable.trinket_2_buffs|variable.trinket_2_exclude|variable.trinket_priority=3)&(variable.trinket_1_buffs&(trinket.1.cooldown.remains|trinket.1.cooldown.duration<=20)|!variable.trinket_1_buffs|variable.trinket_1_exclude|variable.trinket_priority=3)&(!cooldown.fire_breath.up|(!cooldown.fire_breath.up)|active_enemies>=3))&(variable.next_dragonrage>20|!talent.dragonrage)&(!buff.dragonrage.up|variable.trinket_priority=3|variable.trinket_priority=1&trinket.1.cooldown.remains|variable.trinket_priority=2&trinket.2.cooldown.remains)
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.is.spymasters_web|trinket.2.cooldown.duration=0)&(gcd.remains>0.1&!prev_gcd.1.deep_breath)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_2_buffs|trinket.2.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.is.spymasters_web|trinket.1.cooldown.duration=0)&(gcd.remains>0.1&!prev_gcd.1.deep_breath)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_1_buffs|trinket.1.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&!variable.trinket_1_manual&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.is.spymasters_web|trinket.2.cooldown.duration=0)&(!variable.trinket_1_ogcd_cast)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_2_buffs|trinket.2.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
actions.trinkets+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&!variable.trinket_2_manual&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.is.spymasters_web|trinket.1.cooldown.duration=0)&(!variable.trinket_2_ogcd_cast)&(variable.next_dragonrage>20|!talent.dragonrage|!variable.trinket_1_buffs|trinket.1.is.spymasters_web&(buff.spymasters_report.stack<5|fight_remains>=130+variable.next_dragonrage))
```

## Confirmed Spell IDs (SimulationCraft HTML)

| Ability | Spell ID(s) | School | Type |
|---------|-------------|--------|------|
| Azure Strike | 362969 | spellfrost | cast |
| Bombardments | 434481 | firestorm | cast |
| Consume Flame | 444089 | fire | cast |
| Deep Breath | 433874, 357210 (multiple: base cast + variants) | firestorm | cast |
| Disintegrate | 356995 | spellfrost | cast |
| Dragonrage | 375087, 375088 (multiple: base cast + variants) | physical/fire | cast |
| Eternity Surge | 359077, 382411, 359073 (multiple: base cast + variants) | spellfrost | cast |
| Fire Breath | 382266, 357208 (multiple: base cast + variants) | fire | cast |
| Living Flame | 361469 | fire | cast |
| Pyre | 1236970 | fire | cast |
| Shattering Star | 1265804 | spellfrost | cast |
| Tip the Scales | 370553 | arcane | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Obsidian Scales cooldown:** Icy Veins states ~1.5 minutes; the raw Wowhead spell field rendered as "1 second," which is a parse artifact, not the real cooldown. 1.5 minutes is used here. Re-verify if precision matters.
- **Renewing Blaze cooldown:** Wowhead base spell (374348) shows cooldown n/a (cooldown lives on the talent node); Icy Veins states ~90 seconds. Used 90s.
- **Shattering Star spell ID:** Live web search maps it to Wowhead `370452`, but a direct WebFetch of `spell=370452` returned a "doesn't exist" page (likely transient). The ID is given as likely-correct but not double-confirmed by a clean page render. The +20% damage-taken figure is from search summary, not a confirmed page read. Note: SimC spell-ids-reference.json confirms `1265804` for Shattering Star — this is the SimC-authoritative ID; the Wowhead ID may differ or `370452` may be a redirect.
- **Cauterizing Flame removable types:** The fetched effect breakdown listed Poison/Disease/Curse and the ability is commonly described as also removing Bleed. The exact authoritative set should be re-verified on the live spell page.
- **Unconfirmed spell IDs (omitted intentionally):** Firestorm, Landslide, Verdant Embrace, Soar, and Tip the Scales-adjacent talent IDs were not confirmed on a fetched live page and are written by name only. Azure Strike, Deep Breath, Disintegrate, Dragonrage, Eternity Surge, Fire Breath, Living Flame, Pyre, Shattering Star, and Tip the Scales spell IDs are now confirmed via SimC spell-ids-reference.json.
- **Fire Breath / Eternity Surge / Dragonrage durations:** Fire Breath base spell (357208) showed cooldown n/a (cooldown is talent/empower-driven); Eternity Surge confirmed ~30s; Dragonrage confirmed 2-min / 18s.
- **Talent string and APL:** Now added — see SimulationCraft Reference section above. Both Flameshaper and Scalecommander variants are covered.
- **Damage and rotational spell IDs:** Confirmed for all abilities matched in spell-ids-reference.json (see Confirmed Spell IDs section). Defensive, interrupt, and consumable IDs remain unconfirmed from the SimC source (expected — SimC only covers damage actions).
- **Rotation:** The priority lists are logical ordering from Icy Veins, NOT a DPS benchmark. Exact lines depend on hero talent choice (Scalecommander vs Flameshaper), tier set bonuses, and target count. The SimC APL provides the authoritative machine-optimized sequence for each build.
- **Item IDs for consumables/enchants/gems:** none confirmed on a fetched item page; names only.
- **Maintenance flag:** Re-verify all spell IDs, cooldowns, talent/hero-tree behavior, and consumable/enchant names after ANY 12.x patch. This guide reflects patch 12.0.5 as of June 2026; Blizzard frequently retunes Evoker mid-season.
