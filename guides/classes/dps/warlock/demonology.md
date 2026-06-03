# Demonology Warlock — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.icy-veins.com/wow/demonology-warlock-pve-dps-guide
> - https://www.icy-veins.com/wow/demonology-warlock-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/demonology-warlock-pve-dps-spell-summary
> - https://www.wowhead.com/spell=89766/axe-toss
> - https://www.wowhead.com/spell=104773/unending-resolve
> - https://www.wowhead.com/spell=108416/dark-pact
> - https://www.wowhead.com/spell=104316/call-dreadstalkers
> - https://www.wowhead.com/spell=105174/hand-of-guldan
> - https://www.wowhead.com/spell=265187/summon-demonic-tyrant
> - https://www.wowhead.com/spell=264178/demonbolt
> - https://www.wowhead.com/spell=686/shadow-bolt
> - https://www.wowhead.com/spell=111771/demonic-gateway
> - https://www.wowhead.com/spell=48018/demonic-circle
> - https://www.wowhead.com/spell=20707/soulstone
> - https://www.wowhead.com/spell=5782/fear
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

This guide is written for RaidLens Mythic log analysis. It prioritizes correctness about the
spec's interrupt, defensives, and utility so the analyzer can judge whether an ability was
available during a damage window. SpellIDs are included ONLY where a fetched live source showed
the exact numeric ID. Where an ID could not be confirmed live (Wowhead rate-limited several spell
pages during research), the ability name is given without a number and the gap is listed in
"Notes and Known Gaps."

---

## Overview

Demonology Warlock is a ranged spell-caster DPS spec built around continuously summoning temporary
demons. The core gameplay loop is: generate Soul Shards with filler casts (Shadow Bolt and
Demonbolt), spend those shards on demon-summoning spenders (Call Dreadstalkers and Hand of Gul'dan,
which spawns Wild Imps), and periodically slam a major cooldown (Summon Demonic Tyrant) that
empowers and extends all of your active demons. Demonbolt is empowered by Demonic Core procs, which
turn it into an instant or fast hard-hitting cast and the spec's main shard-refund engine.

Damage profile: strong sustained single-target and strong cleave (multiple pets plus Hand of
Gul'dan / Implosion). Its weaknesses are limited target-swapping and funnel, no true spread cleave,
and a heavy reliance on a setup-then-burst cadence around Summon Demonic Tyrant — losing pets or
mistiming the Tyrant window is a large damage loss. It is one of the strongest "always be casting"
specs but is pet-management intensive.

Survivability profile: very high for a ranged DPS. Warlocks stack a passive absorb (Soul Leech
overshield), a flat damage-reduction layer, a short-cooldown active absorb (Dark Pact), a major
defensive cooldown (Unending Resolve), and self-healing tools. See Defensives.

Mobility profile: moderate. The spec is fairly mobile outside of its burst window because Demonic
Core procs let Demonbolt and other instants be cast while moving, but the Summon Demonic Tyrant
setup is largely stationary (multiple hard-cast spells). Demonic Circle and Demonic Gateway provide
strong positional/utility movement rather than raw speed.

---

## Role in Raid

- **Role:** Pure ranged DPS. No healing or tanking responsibility.
- **Battle res:** YES — **Soulstone** (SpellID 20707) is a combat resurrection. It can be applied
  pre-combat to a target so they self-resurrect on death, or cast on a corpse in combat. Counts
  against the raid's shared combat-res limit. 10-minute cooldown per the spell page.
- **Bloodlust/Heroism equivalent:** NO. Warlocks do not provide a Bloodlust-type effect.
- **Raid movement utility:** **Demonic Gateway** (SpellID 111771) places a two-point portal players
  can use to instantly cross distance (10–40 yard range per the spell page). This is a genuine raid
  utility cooldown for mechanics that require quick repositioning.
- **Group survivability:** **Healthstone** — the Warlock provides Healthstones that any raider can
  consume for a large instant self-heal. The Warlock also brings **Soulstone** (battle res, above).
- **Raid debuffs / curses:** Curse of Weakness (attack-speed slow), Curse of Tongues (cast-speed
  slow), Curse of Exhaustion (movement slow). These are situational utility, not a flat raid damage
  buff/debuff.
- **Externals:** None. Warlock has no ability to shield or damage-reduce another player on demand
  (Soulstone is a res, not a damage external).

---

## Abilities Reference

Confirmed SpellIDs (verified on live Wowhead spell pages):

- **Shadow Bolt** (SpellID 686) — filler/shard generator, Shadow damage hard cast.
- **Demonbolt** (SpellID 264178) — harder-hitting filler, consumes Demonic Core procs, refunds
  shards. Fire/Shadow damage.
- **Hand of Gul'dan** (SpellID 105174) — spends up to 3 Soul Shards to summon Wild Imps (more shards
  = more imps). 8-yard radius, ~1.5s cast.
- **Call Dreadstalkers** (SpellID 104316) — 20s cooldown, costs 2 Soul Shards; summons two
  Dreadstalker pets.
- **Summon Demonic Tyrant** (SpellID 265187) — 1-minute cooldown, 15-second duration; the major
  damage cooldown that empowers and extends active demons.
- **Implosion** — converts active Wild Imps into AoE damage (primary AoE spender). *ID not confirmed
  live; see Known Gaps.*
- **Power Siphon** — sacrifices Wild Imps to generate Demonic Core stacks. *ID not confirmed live;
  see Known Gaps.*

Midnight-era cooldowns named by the rotation sources (treat IDs as unconfirmed):

- **Summon Doomguard** — a major summon cooldown in the current build.
- **Grimoire: Imp Lord** — a cooldown that (per sources) replaces/augments the older
  Grimoire: Felguard role and grants an extra Spell Lock / Singe Magic use.
- **Grimoire: Fel Ravager** — summons a temporary Fel Ravager that attempts an interrupt
  (Spell Lock) on summon; used as a *supplementary* interrupt, not the primary one.
- **Infernal Bolt** — a shard-related cast referenced in the priority list.

Key resource mechanics: **Soul Shards** (spent on summons), **Demonic Core** (proc that empowers
Demonbolt and is the main shard-refund loop), **Wild Imps** (spawned by Hand of Gul'dan, consumed by
Implosion or Power Siphon).

> All "Midnight-era" ability names above were taken from current 12.0.5 rotation sources. Exact
> talent layout and which of these are baseline vs. talented can shift between 12.x patches — see
> Known Gaps.

---

## Rotation / Priority

This is **logical priority ordering, not a DPS benchmark.** RaidLens should not treat deviation from
this list as a mistake on its own; it is context for understanding what a Demonology player is doing.

**Opener (per Icy Veins 12.0.5):**
1. Pre-cast Demonbolt x2, then Power Siphon with ~2 Wild Imps, then Shadow Bolt (pre-pull setup).
2. Shadow Bolt → Summon Doomguard → Grimoire: Imp Lord → Grimoire: Fel Ravager.
3. Shadow Bolt x3 → Call Dreadstalkers → Summon Demonic Tyrant.
4. Hand of Gul'dan spam during the Tyrant window.
5. Implosion when at ~6 Wild Imps and 1-or-fewer Demonic Core (AoE/cleave situations).

**Sustained single-target priority:**
1. Major cooldowns on cooldown and aligned: Grimoire: Imp Lord, Grimoire: Fel Ravager,
   Summon Demonic Tyrant, Summon Doomguard.
2. Power Siphon at low Demonic Core with Wild Imps available.
3. Call Dreadstalkers when off cooldown.
4. Hand of Gul'dan at 4–5 Soul Shards.
5. Demonbolt with 2+ Demonic Core stacks.
6. Infernal Bolt at low shards (shard generation).
7. Shadow Bolt as filler / shard generation.

**AoE priority:** Largely the same engine as single-target, with Implosion added as the Wild-Imp
spender for burst AoE and Hand of Gul'dan used to keep imps flowing. Sources describe the AoE
sequence as essentially the single-target sequence with Implosion folded in.

---

## Defensives

Each entry includes a **RaidLens usage** note for judging correct use during a damage window.

- **Unending Resolve** (SpellID 104773) — Major defensive cooldown. The spell page lists 25% damage
  reduction for 8 seconds with immunity to interrupts/silences, on a 3-minute cooldown. Talents
  commonly raise this to ~40% reduction (and a talent can shorten the cooldown at lower reduction).
  *RaidLens usage:* This is the spec's primary "oh no" button. If a player took heavy avoidable or
  scripted raid damage and Unending Resolve was off cooldown (3 min baseline) and unused, flag it.
  Strongest when pressed just BEFORE a known big hit, not reactively after.

- **Dark Pact** (SpellID 108416) — Short-cooldown active absorb shield (1-minute cooldown per the
  spell page). Sacrifices a portion of current health to create a large absorb across all schools
  for ~8 seconds. Often talent-enhanced to be one of the strongest short-CD defensives in the game.
  *RaidLens usage:* Because it is only a 1-minute cooldown, it should be up for most repeating raid
  damage events. If a player repeatedly ate a predictable hit with Dark Pact available, that is a
  defensive-usage miss. Note it must be pressed BEFORE the hit to absorb it.

- **Soul Leech** (passive) — Builds an absorb overshield from damage dealt. Always-on mitigation
  layer; not actively pressed. *RaidLens usage:* Not a button to flag; it is background mitigation.
  Mention only as context for why Warlock effective health is high.

- **Soul Link** (talent, passive/toggle) — Redirects a percentage of damage taken to the active pet,
  reducing damage to the Warlock. *RaidLens usage:* Passive once talented; flag only if the player
  is pet-less for extended periods (no pet = no Soul Link mitigation), which is unusual for Demo.

- **Healthstone** — Instant large self-heal (sources cite ~25% max health), multiple charges per
  combat with the relevant talent. *RaidLens usage:* A near-instant self-recovery. If a player
  dropped very low and then died without using a Healthstone that was available, flag it. *ID not
  confirmed live; see Known Gaps.*

- **Mortal Coil** (talent) — Horrifies the target for ~3 seconds AND heals the Warlock for ~20% of
  maximum health. Doubles as CC (see Utility). *RaidLens usage:* On bosses (immune to the fear
  component) it is still a meaningful self-heal on a cooldown. Treat as a minor defensive/heal, not a
  major cooldown. *ID/cooldown not confirmed live; see Known Gaps.*

- **Drain Life** (talent-enhanced) — Channeled self-heal; sources note improved Drain Life talents in
  Midnight. *RaidLens usage:* A sustained self-heal option during downtime; rarely the deciding
  factor in a death, but its absence during a long unavoidable damage stretch can be context.

- **Fel Armor / Demonic Skin (passive)** — Flat passive damage reduction (~3% cited) plus Soul Leech
  shield maintenance. *RaidLens usage:* Passive; do not flag.

> Demonology does NOT have an immunity (no Ice Block / Divine Shield equivalent) and no personal
> hard damage-immunity. Its survivability is layered mitigation + absorbs + self-heal, not negation.

---

## Utility

### Interrupt — IMPORTANT for RaidLens

- **Primary interrupt: Axe Toss** (SpellID 89766) — cast via the Felguard pet (Command Demon).
  Confirmed on the live spell page: **30-second cooldown**, applies a **4-second stun that also
  interrupts** the target. This is the spec's standard, raid-usable kick and the one RaidLens should
  treat as "the Demonology interrupt." It requires the Felguard to be the active pet (the baseline
  Demonology pet), and the pet must be in range of the target.
- **Supplementary interrupt: Grimoire: Fel Ravager** — when used, the summoned Fel Ravager attempts
  a Spell Lock interrupt on summon. This is an *extra* interrupt tied to a longer cooldown summon,
  not a reliable on-demand kick. Treat Axe Toss as the dependable interrupt.

> Bottom line for RaidLens: Demonology **DOES** have a raid-usable interrupt — Axe Toss, 30s
> cooldown, via the Felguard. A missed interrupt on an interruptible cast is a legitimate flag if
> Axe Toss was off cooldown and the Felguard was up and in range. Because it is pet-delivered, range
> and pet uptime are caveats: a missed kick is less clear-cut than for a melee with a self-cast
> interrupt.

### Crowd control

- **Fear** (SpellID 5782) — single-target disorient/flee, no cooldown, ~1.7s cast, 30-yard range.
  Breaks on sufficient damage. Single target only.
- **Howl of Terror** — instant AoE disorient, sources cite up to 5 targets in 10 yards (talents can
  raise target cap and lower cooldown). Choice node with Shadowfury.
- **Shadowfury** — AoE stun (the only AoE stun Warlocks have). Choice node with Howl of Terror.
- **Mortal Coil** — horrify/incapacitate ~3s on one target (also a self-heal; see Defensives).
- **Banish** — phases out a single Demon or Aberration target, preventing it acting. Situational
  control of specific add types.

### Dispels

- **Singe Magic** — provided by the Imp pet (and an extra use via Grimoire: Imp Lord). Per sources it
  can **remove a single magical effect / dispel a shield**. This is the Warlock's only dispel-type
  tool and it is pet-delivered. *RaidLens usage:* Treat Warlock dispel coverage as limited and
  pet-dependent; do not assume the Warlock can cover a dedicated dispel role. *ID/cooldown and exact
  dispel-type targeting (self vs. ally, which schools) not fully confirmed live; see Known Gaps.*

### Mobility / positioning

- **Demonic Gateway** (SpellID 111771) — two-point portal, 10–40 yard range, 10s cooldown per the
  spell page; group-usable repositioning.
- **Demonic Circle** (SpellID 48018) — place a rune (long duration) and teleport back to it. Drops a
  trap-style anchor. Personal repositioning/escape.

### Raid buffs/debuffs

- No flat raid-wide damage buff. Curses (Weakness / Tongues / Exhaustion) are situational debuffs.
- Provides Healthstones (group consumable heal) and Soulstone (battle res) — see Role in Raid.

---

## Consumables and Enchants

Not confirmed from a live source during this research pass. The Wowhead Demonology
enchants/consumables sub-pages and the spell pages for specific food/flask/rune items were not
fetched (Wowhead rate-limited several requests). Standard Midnight ranged-caster consumable
categories (Intellect flask, Intellect/Haste food, weapon/gear enchants, augment rune, combat
potion) apply conceptually, but **exact item names, item IDs, and the current BiS enchant choices
are NOT confirmed here.** See Known Gaps — do not inject specific consumable/enchant IDs into
analysis until verified.

---

## SimulationCraft Reference (Midnight 12.0.5)

**Hero tree(s) covered:** Diabolist

### Diabolist — Talent Import String

```
CoQAAAAAAAAAAAAAAAAAAAAAAYmxMzoZjZ2mZGzyAAAAAAAAGzYYBGYb0CNsYMGLzyMzMmBAmZMzMzMDgZGzAAAYMzMjhhlZMgB
```

### Metrics

Metrics not captured in source.

### Damage distribution (SimC, share of total)

The percent column uses the parenthesised value where the primary value is 0.0% (buffered/indirect
damage that SimC assigns to the summoning cast rather than the pet action). Rows without a "%"
character in their percent field are buff-uptime, duration, or rank entries and are excluded.

| Ability | Share | Notes |
|---|---|---|
| Fel Firebolt (Wild Imps) | 20.0% | Wild Imp spam is the largest single source |
| Burning Cleave (Demonic Tyrant) | 12.1% | Tyrant pet cleave during buff window |
| Greater Felbolt (Grimoire: Imp Lord) | 5.2% | Diabolist hero-tree Imp Lord pet |
| Diabolic Oculi | 5.4% | Diabolist hero-tree proc |
| Hand of Gul'dan | 4.2% | Direct damage component of shard spender |
| Shadow Nova (Lady Sacrolash) | 3.9% | Dominion of Argus summon |
| Blaze (Grand Warlock Alythess) | 3.8% | Dominion of Argus summon |
| Dreadbite (Dreadstalkers) | 3.7% | Dreadstalker bite attack |
| Soul Barrage (Antoran Jailer) | 3.5% | Dominion of Argus summon |
| Demonbolt | 3.5% | Player cast (Demonic Core consumer) |
| Mind Sear (Antoran Inquisitor) | 3.3% | Dominion of Argus summon |
| Gloom Slash (Vilefiend) | 3.0% | Vilefiend pet |

**RaidLens interpretation:** Demonology's damage is overwhelmingly pet-delivered — Wild Imps,
Demonic Tyrant, and the Diabolist hero-tree summons (Dominion of Argus demons) collectively
dominate the distribution. Player-cast buttons (Demonbolt, Shadow Bolt, Hand of Gul'dan) account
for only a modest share directly; their value is in generating the shards and procs that fuel pet
summoning. A player with low overall damage is most likely losing uptime on Tyrant windows, Wild
Imp generation, or Diabolist proc usage, not misusing filler casts.

---

### Action Priority List — Diabolist

```
actions.precombat=summon_pet
actions.precombat+=/snapshot_stats
actions.precombat+=/variable,name=in_opener,op=set,value=1
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_buff_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_buff_duration,value=trinket.2.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.summon_demonic_tyrant.duration=0|cooldown.summon_demonic_tyrant.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.summon_demonic_tyrant.duration=0|cooldown.summon_demonic_tyrant.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>trinket.1.ilvl
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_buff_duration)*(1.5+trinket.2.has_buff.intellect)*(variable.trinket_2_sync))>(((trinket.1.cooldown.duration%variable.trinket_1_buff_duration)*(1.5+trinket.1.has_buff.intellect)*(variable.trinket_1_sync))*(1+((trinket.1.ilvl-trinket.2.ilvl)%100)))
actions.precombat+=/power_siphon
actions.precombat+=/demonbolt,if=!buff.power_siphon.up&(talent.ruination&!talent.grimoire_imp_lord|talent.ruination&!talent.summon_doomguard)
actions.precombat+=/shadow_bolt

# Executed every time the actor is available.
actions=potion,if=pet.demonic_tyrant.active|fight_remains<=30
actions+=/invoke_external_buff,name=power_infusion,if=pet.demonic_tyrant.active
actions+=/call_action_list,name=racials,if=pet.demonic_tyrant.active|fight_remains<22,use_off_gcd=1
actions+=/call_action_list,name=items,use_off_gcd=1
actions+=/call_action_list,name=diabolist,if=talent.diabolic_ritual
actions+=/call_action_list,name=soulharvest,if=talent.demonic_soul

actions.diabolist=power_siphon,if=buff.demonic_core.stack<=1|fight_remains<10
actions.diabolist+=/hand_of_guldan,if=buff.dominion_of_argus.up
actions.diabolist+=/grimoire_imp_lord
actions.diabolist+=/grimoire_fel_ravager
actions.diabolist+=/summon_doomguard
actions.diabolist+=/call_dreadstalkers,if=talent.reign_of_tyranny&(cooldown.summon_demonic_tyrant.remains>=20+gcd.max|cooldown.summon_demonic_tyrant.remains<=12-gcd.max)
actions.diabolist+=/call_dreadstalkers,if=!talent.reign_of_tyranny
actions.diabolist+=/summon_demonic_tyrant,if=soul_shard=5
actions.diabolist+=/implosion,if=buff.wild_imps.stack>=6&(active_enemies>2|talent.to_hell_and_back.enabled)
actions.diabolist+=/ruination
actions.diabolist+=/hand_of_guldan,if=soul_shard>=3&cooldown.summon_demonic_tyrant.remains>5|soul_shard=5
actions.diabolist+=/infernal_bolt,if=soul_shard<3
actions.diabolist+=/demonbolt,target_if=(!debuff.doom.up),if=soul_shard<4&buff.demonic_core.react&talent.doom
actions.diabolist+=/demonbolt,if=soul_shard<4&buff.demonic_core.react
actions.diabolist+=/shadow_bolt
actions.diabolist+=/infernal_bolt

actions.items=use_item,use_off_gcd=1,slot=trinket1,if=variable.trinket_1_buffs&(!pet.demonic_tyrant.active&trinket.1.cast_time>0|!trinket.1.cast_time>0)&(pet.demonic_tyrant.active|!talent.summon_demonic_tyrant|variable.trinket_priority=2&cooldown.summon_demonic_tyrant.remains>20&!pet.demonic_tyrant.active&trinket.2.cooldown.remains<cooldown.summon_demonic_tyrant.remains+5)&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)|variable.trinket_1_buff_duration>=fight_remains
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=variable.trinket_2_buffs&(!pet.demonic_tyrant.active&trinket.2.cast_time>0|!trinket.2.cast_time>0)&(pet.demonic_tyrant.active|!talent.summon_demonic_tyrant|variable.trinket_priority=1&cooldown.summon_demonic_tyrant.remains>20&!pet.demonic_tyrant.active&trinket.1.cooldown.remains<cooldown.summon_demonic_tyrant.remains+5)&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)|variable.trinket_2_buff_duration>=fight_remains
actions.items+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&((variable.damage_trinket_priority=1|trinket.2.cooldown.remains)&(trinket.1.cast_time>0&!pet.demonic_tyrant.active|!trinket.1.cast_time>0)|(time<20&variable.trinket_2_buffs)|cooldown.summon_demonic_tyrant.remains_expected>20)
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&((variable.damage_trinket_priority=2|trinket.1.cooldown.remains)&(trinket.2.cast_time>0&!pet.demonic_tyrant.active|!trinket.2.cast_time>0)|(time<20&variable.trinket_1_buffs)|cooldown.summon_demonic_tyrant.remains_expected>20)
actions.items+=/use_item,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains)
actions.items+=/use_item,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains)
actions.items+=/use_item,use_off_gcd=1,slot=main_hand

actions.racials=berserking,use_off_gcd=1
actions.racials+=/blood_fury
actions.racials+=/fireblood
actions.racials+=/ancestral_call

actions.soulharvest=power_siphon,if=buff.demonic_core.stack<=1|fight_remains<10
actions.soulharvest+=/hand_of_guldan,if=buff.dominion_of_argus.up
actions.soulharvest+=/grimoire_imp_lord
actions.soulharvest+=/grimoire_fel_ravager
actions.soulharvest+=/summon_doomguard
actions.soulharvest+=/call_dreadstalkers
actions.soulharvest+=/summon_demonic_tyrant
actions.soulharvest+=/implosion,if=buff.wild_imps.stack>=6&(active_enemies>2|talent.to_hell_and_back.enabled)
actions.soulharvest+=/hand_of_guldan
actions.soulharvest+=/infernal_bolt,if=soul_shard<3
actions.soulharvest+=/demonbolt,target_if=(!debuff.doom.up),if=soul_shard<4&buff.demonic_core.stack>=1&talent.doom
actions.soulharvest+=/demonbolt,if=soul_shard<4&buff.demonic_core.stack>=2&!talent.doom
actions.soulharvest+=/demonbolt,if=soul_shard<4&buff.demonic_core.react
actions.soulharvest+=/shadow_bolt
```

---

## Confirmed Spell IDs (SimulationCraft HTML)

The following table lists abilities named in this guide that have an exact key match in
spell-ids-reference.json (extracted from the Midnight 12.0.5 SimC HTML report). IDs are taken
verbatim from that source and must not be modified.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Shadow Bolt | 317791, 686 (multiple: base cast + variants) | shadow | cast |
| Demonbolt | 264178 | shadowflame | cast |
| Hand of Gul'dan | 105174, 86040 (multiple: base cast + variants) | shadowflame | cast |
| Call Dreadstalkers | 104316, 193331, 193332 (multiple: base cast + variants) | shadow / shadowflame | cast |
| Summon Demonic Tyrant | 265187 | shadow | cast |
| Implosion | 196277, 196278 (multiple: base cast + variants) | shadowflame | cast |
| Infernal Bolt | 434506 | fire | cast |
| Grimoire: Imp Lord | 1276452 | shadow | cast |
| Fel Firebolt (Wild Imp) | 104318 | fire | cast |
| Felstorm (Felguard) | 89751, 89753 (multiple: base cast + variants) | physical | cast |
| Legion Strike (Felguard) | 30213 | physical | cast |
| Dreadbite (Dreadstalker) | 271971 | shadow | cast |
| Bile Spit (Vilefiend) | 267997 | nature | cast |
| Gloom Slash (Vilefiend) | 455491 | shadow | cast |
| Headbutt (Vilefiend) | 267999 | physical | cast |
| Greater Felbolt (Grimoire: Imp Lord) | 1277116 | fire | cast |
| Blighted Maw | 1276960 | shadowstorm | cast |
| Burning Cleave (Demonic Tyrant) | 1264093 | shadowflame | cast |
| Diabolic Oculi | 1268709 | physical | cast |
| Twilight Barrage | 1281579 | shadowlight | other |
| Voidstalker Sting | 1271226 | shadow | other |
| Wicked Cleave (Overlord) | 432120 | shadowflame | cast |
| Chaos Salvo (Mother of Chaos) | 432569, 432596 (multiple: base cast + variants) | fire | cast |
| Felseeker (Pit Lord) | 438973, 434404 (multiple: base cast + variants) | chaos | cast |
| Shadow Nova (Lady Sacrolash) | 1282507 | shadow | other |
| Soul Barrage (Antoran Jailer) | 1292384, 1292391 (multiple: base cast + variants) | magic / chaos | other / cast |
| Mind Sear (Antoran Inquisitor) | 1280457, 1280460 (multiple: base cast + variants) | shadow | other |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell
IDs (where known) remain in the sections above.

---

## Notes and Known Gaps

Unconfirmed facts (omitted IDs / values rather than guessing):

- **Implosion** — SpellID not confirmed live (Wowhead spell page returned 403 during research).
  Name and role (AoE Wild-Imp spender) are well-sourced; the numeric ID is omitted from the live
  section. SimC source confirms IDs 196277 / 196278 — treat as high-confidence but not
  Wowhead-verified.
- **Power Siphon** — SpellID and cooldown not confirmed live (403). Role (sacrifice Wild Imps for
  Demonic Core) is well-sourced. SimC reference does not contain an exact match for "Power Siphon"
  as a damaging action — ID remains unconfirmed.
- **Healthstone / Create Healthstone** — SpellID not confirmed live (403). ~25% heal and multi-charge
  behavior cited from a guide, not a verified spell page.
- **Singe Magic** — SpellID, cooldown, and exact dispel targeting (which schools, self vs. ally) not
  confirmed live (403). Described from guide text only.
- **Banish** — SpellID and duration not confirmed live (403).
- **Mortal Coil, Howl of Terror, Shadowfury** — SpellIDs and exact cooldowns not confirmed live;
  effects taken from the Icy Veins spell-summary page, not individual spell pages.
- **Summon Doomguard, Grimoire: Fel Ravager** — these are Midnight-era ability names taken from
  12.0.5 rotation guides; individual spell pages and IDs were not fetched. SimC reference does not
  contain exact key matches for these — IDs remain unconfirmed. The APL confirms both are used
  (grimoire_fel_ravager, summon_doomguard actions).
- **Infernal Bolt** — SimC source confirms SpellID 434506 (fire, cast). This supersedes the prior
  "unconfirmed" status for the ID; Wowhead page was not fetched but SimC is authoritative for IDs.
- **Grimoire: Imp Lord** — SimC source confirms SpellID 1276452 (shadow, cast). Supersedes prior
  unconfirmed status.
- **Unending Resolve talent value** — spell page shows 25%/8s/3-min baseline; the common ~40%
  talented value is from guide text, not the base spell page. Both are noted.
- **Dark Pact** — 1-minute cooldown confirmed on the spell page; exact absorb amount and health
  sacrifice were not shown as concrete numbers on the page.
- **Consumables and Enchants** — entire section unverified; no item IDs included.
- **Talent import string** — NOW ADDED: Diabolist build string in SimulationCraft Reference section.
- **SimC APL** — NOW ADDED: Full Diabolist action priority list in SimulationCraft Reference section.
- **Rotational and pet damage spell IDs** — NOW CONFIRMED for abilities matched in
  spell-ids-reference.json. See Confirmed Spell IDs table above. Defensive, interrupt, and
  consumable IDs remain unconfirmed from SimC (non-damaging utility is absent from the SimC source
  by design).

Confirmed-live SpellIDs in this guide (Wowhead-sourced): 686 (Shadow Bolt), 264178 (Demonbolt),
105174 (Hand of Gul'dan), 104316 (Call Dreadstalkers), 265187 (Summon Demonic Tyrant),
104773 (Unending Resolve), 108416 (Dark Pact), 89766 (Axe Toss / interrupt), 111771 (Demonic
Gateway), 48018 (Demonic Circle), 20707 (Soulstone), 5782 (Fear).

Additional SpellIDs confirmed via SimulationCraft HTML (spell-ids-reference.json): see Confirmed
Spell IDs table above for the full list including pet abilities (Fel Firebolt, Felstorm, Dreadbite,
Gloom Slash, Burning Cleave, Diabolic Oculi, etc.) and Diabolist hero-tree abilities (Greater
Felbolt, Twilight Barrage, Voidstalker Sting, Wicked Cleave, Chaos Salvo, Felseeker, Shadow Nova,
Soul Barrage, Mind Sear, Blighted Maw).

**Maintenance flag:** Re-verify every ID, cooldown, and ability name after ANY 12.x patch. Midnight
notably reworked several Warlock abilities (Grimoire line, Summon Doomguard, Infernal Bolt) and
merged/removed older spells, so the kit is in active flux. In particular, re-confirm that Axe Toss
remains the baseline Demonology interrupt and that its 30s cooldown / 4s effect are unchanged.
