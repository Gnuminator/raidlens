# Shadow Priest — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched/searched June 2026):
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-guide
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-mythic-plus-tips
> - https://www.wowhead.com/spell=589/shadow-word-pain
> - https://www.wowhead.com/spell=34914/vampiric-touch
> - https://www.wowhead.com/spell=335467/devouring-plague (titled "Shadow Word: Madness")
> - https://www.wowhead.com/spell=8092/mind-blast
> - https://www.wowhead.com/spell=32379/shadow-word-death
> - https://www.wowhead.com/spell=228266/void-bolt
> - https://www.wowhead.com/spell=10060/power-infusion
> - https://www.wowhead.com/spell=15286/vampiric-embrace
> - https://www.wowhead.com/spell=47585/dispersion
> - https://www.wowhead.com/spell=586/fade
> - https://www.wowhead.com/spell=19236/desperate-prayer
> - https://www.wowhead.com/spell=21562/power-word-fortitude
> - https://www.wowhead.com/spell=15487/silence
> - https://www.wowhead.com/spell=8122/psychic-scream
> - https://www.wowhead.com/spell=32375/mass-dispel
> - https://www.wowhead.com/spell=238558/misery
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
> - simc-guides/spell-ids-reference.json
>
> Note: Wowhead guide and spell-detail pages render via JavaScript and could not be fully fetched (403/empty body). SpellIDs below were confirmed from Wowhead spell-page URLs returned in search; prose was sourced primarily from Icy Veins (patch 12.0.5, "Lingering Shadows"). Anything not confirmed live is flagged in "Notes and Known Gaps."

---

## Overview

Shadow Priest is a ranged DPS caster built around a builder-spender loop layered on top of damage-over-time (DoT) maintenance. The core gameplay loop:

1. Apply and maintain DoTs — Vampiric Touch and Shadow Word: Pain — on every relevant target. In Midnight, Vampiric Touch applies both DoTs at once (via the Misery passive).
2. Generate Insanity with short-cooldown spells (primarily Mind Blast and the Mind Flay channel).
3. Spend Insanity on Shadow Word: Madness (the modern spender; its Wowhead spell page still uses the `devouring-plague` URL slug after a rename). Refreshing Shadow Word: Madness rolls remaining tick damage into the new application, so there is no damage loss from refreshing early.
4. Layer major cooldowns (Voidform, Power Infusion, plus the chosen Hero Talent payload — Halo for Archon or Void Torrent / Entropic Rift for Voidweaver).

Damage profile: strong sustained single-target damage with good spread/multi-target pressure thanks to DoTs and Shadowy Apparitions. Two Hero Talent trees define the burst pattern — Archon leans into sustained cooldown windows (Voidform + Halo), Voidweaver leans into burst cleave by building Entropic Rift with Void Blast / Void Torrent.

Primary weakness: mobility. The spec has no gap closer or displacement and most of its damage is cast/channel-based, so heavy-movement encounters cost a disproportionate amount of throughput. RaidLens-relevant implication: a Shadow Priest forced to move during a key window will under-perform for mechanical reasons, not necessarily player error — but unused defensives during avoidable damage are still flaggable.

## Role in Raid

- Role: ranged DPS. Not a healer or tank.
- Raid buff: Power Word: Fortitude (SpellID 21562) — raid-wide +Stamina. This is a class-wide Priest buff, not Shadow-specific.
- Damage cooldown for allies: Power Infusion (SpellID 10060) — a 2-minute haste buff that can be cast on an ally. Commonly given to a stacking-burst DPS or healer.
- Group sustain: Vampiric Embrace (SpellID 15286) — converts a portion of the Priest's single-target Shadow damage into raid healing for a short window.
- Bloodlust/Heroism equivalent: NO. Shadow Priest does not provide a Bloodlust-class haste effect.
- Battle res: NO. Priest has no combat resurrection.
- Mobility: poor. No blink/leap/charge. Movement tools are limited to Fade (threat drop, not a movement speed boost on its own) and out-of-combat utility; the spec relies on instant DoT refreshes and the Mind Flay: Insanity / instant filler to keep some uptime while moving. Tertiary Speed enchant is commonly recommended specifically because of this weakness.

## Abilities Reference

Confirmed SpellIDs are shown inline. Where no ID is shown, it was not confirmable from a fetched live source (see Known Gaps).

Core damage / DoTs:
- Shadow Word: Pain (SpellID 589) — Shadow DoT. In Midnight applied automatically alongside Vampiric Touch via Misery (SpellID 238558).
- Vampiric Touch (SpellID 34914) — primary DoT; applies both itself and Shadow Word: Pain. Self-heals for a portion of damage. If dispelled, the dispeller is horrified.
- Shadow Word: Madness (SpellID 335467 — Wowhead URL slug `devouring-plague`) — primary Insanity spender; refreshing rolls over remaining tick damage.
- Shadowy Apparitions — spectral orbs generated by various casts and procs that travel to the target and deal Shadow damage. A major passive damage source (nearly 10% of output in SimC). (SpellID not confirmed live.)
- Void Spike — a significant damage contributor in both Hero Talent builds (SimC: ~4% of output); appears to be tied to the Thing from Beyond pet/proc. (SpellID not confirmed live.)

Insanity generators / fillers:
- Mind Blast (SpellID 8092) — primary Insanity generator, on a short cooldown (multiple charges available with talents). (Exact cooldown/charge count not confirmed live — see Known Gaps.)
- Mind Flay — channeled filler that generates Insanity. A Mind Flay: Insanity instant variant becomes available with the relevant proc/talent.
- Shadow Word: Death (SpellID 32379) — execute (low-health) nuke; deals backlash self-damage if the target survives.
- Void Blast — Voidweaver Hero Talent filler/generator; replaces or supplements Mind Flay during Entropic Rift windows. SimC shows it at ~9% of Voidweaver damage output — a major rotational ability for that build. (SpellID not confirmed live.)

Major cooldowns / Hero Talent payload:
- Voidform / Void Eruption — the spec's signature cooldown window; Void Bolt (SpellID 228266) becomes available during Voidform. (Base Void Eruption/Voidform SpellID is ambiguous between 228260 and 228361 in search results — not confirmed; see Known Gaps.)
- Power Infusion (SpellID 10060) — 2-minute haste cooldown (self or ally).
- Halo — Archon Hero Talent burst tool, used on cooldown. (SpellID not confirmed live.)
- Void Torrent / Entropic Rift — Voidweaver Hero Talent; Void Torrent is a multi-second channel that creates Entropic Rift. (SpellIDs not confirmed live.)
- Tentacle Slam — AoE DoT-application tool (applies Vampiric Touch to multiple stacked targets). (SpellID not confirmed live; name and role per Icy Veins 12.0.5.)

Key passives:
- Misery (SpellID 238558) — causes Vampiric Touch to also apply Shadow Word: Pain and extends/links their durations.

## Rotation / Priority

This is logical priority ordering, NOT a DPS benchmark or a substitute for a sim. Exact ordering shifts between the Archon and Voidweaver Hero Talent builds.

Opener (single target, per Icy Veins 12.0.5):
1. Pre-cast Vampiric Touch (applies both DoTs).
2. Pre-cast Tentacle Slam.
3. Shadow Word: Pain (if not already applied by the above).
4. Roll into cooldowns: Voidform / Void Eruption, Power Infusion, Halo (Archon) or Void Torrent (Voidweaver), then spend Insanity on Shadow Word: Madness and use Void Bolt / Void Volley.

Sustained single target priority:
1. Keep Vampiric Touch and Shadow Word: Pain active; refresh inside the pandemic window (roughly 30% duration remaining) so no ticks are wasted.
2. Use major cooldowns on cooldown (Voidform, Halo / Void Torrent), aligning Power Infusion with them.
3. Spend Insanity on Shadow Word: Madness when it is missing, about to expire, or when you risk capping Insanity (cap is 100 — do not overcap).
4. Cast Mind Blast and Void Bolt to avoid losing their cooldown uptime.
5. Voidweaver only: prioritize Void Blast during Entropic Rift windows — it is a top-three damage source for that build.
6. Fill with Mind Flay (use the instant Mind Flay: Insanity variant when available, especially while moving).

AoE priority:
1. Spread Vampiric Touch / Shadow Word: Pain across targets (Tentacle Slam covers several stacked targets at once; DoTs scale out to roughly a dozen targets).
2. Use Shadow Word: Madness either spread across multiple targets for total AoE or funneled into a priority target.
3. Otherwise follow the single-target cooldown and Insanity-spend logic.

## Defensives

Each entry includes a RaidLens usage note: how to judge whether the player used the defensive correctly relative to a damage window. Cooldowns marked "approx" or "not confirmed" must not be treated as exact by the analyzer.

- Dispersion (SpellID 47585) — reduces all damage taken by 75% for 6 seconds, heals for ~25% max health over the duration, and can be cast while stunned/feared/silenced. The spec's strongest personal defensive.
  - RaidLens usage: this is the go-to for surviving a large predictable hit or a lethal damage window. If a Shadow Priest took heavy avoidable/spike damage and Dispersion was off cooldown and unused, flag it. Cooldown was not confirmed live — do not assert an exact availability window without verification.
- Desperate Prayer (SpellID 19236) — instant: increases max health and heals for that amount; short emergency heal.
  - RaidLens usage: an emergency self-heal, not a damage-reduction wall. Best judged when the player dropped low and had it available. Treat as a secondary defensive after Dispersion.
- Fade (SpellID 586) — drops threat and reduces detection; with talents it can also grant brief damage reduction.
  - RaidLens usage: baseline Fade is a threat tool, but Shadow's defensive talent builds frequently make Fade a short damage-reduction cooldown. Whether Fade counts as a real defensive depends on the player's talents — do NOT assume it reduces damage unless confirmed for that log. Flag conservatively.
- Vampiric Embrace (SpellID 15286) — converts single-target Shadow damage into raid healing for the duration.
  - RaidLens usage: a group/self sustain cooldown, useful pre-positioned before a raid-wide damage window. Judge by whether it overlapped a known incoming-damage phase rather than as a personal panic button.
- Power Word: Shield — Priest baseline absorb shield available to Shadow.
  - RaidLens usage: a small pre-emptive absorb. Low signal for flagging; absence is rarely a "mistake."
- Power Word: Fortitude (SpellID 21562) — raid-wide Stamina buff (passive raid utility rather than a reactive defensive). Flag only if missing on the raid at pull start.

## Utility

Interrupt:
- Silence (SpellID 15487) is the Shadow Priest's interrupt and its ONLY raid-usable kick. It interrupts spellcasting and locks the spell school against non-player targets; against players it also silences.
- Cooldown: in Midnight, Silence is reported to be baseline with a 30-second cooldown (changed from a 45-second talent in prior expansions). This cooldown comes from a search snippet, not a fully fetched page — treat 30s as likely-but-unconfirmed (see Known Gaps).
- RaidLens implication: when an interrupt is missed on a Shadow Priest's assignment, Silence is the ability to check. There is no backup kick.

Crowd control:
- Psychic Scream (SpellID 8122) — AoE fear, ~8 yard radius; damage can break it. Frequently used as a pseudo-stop/AoE interrupt on adds.
- Psychic Horror — situational stun/disarm utility (talent). (SpellID not confirmed live.)
- Shackle Undead / Shackle Horror — single-target CC restricted to Undead and Aberration enemy types; niche use. (SpellID not confirmed live.)
- Mind Control / Dominate Mind — takes control of an enemy. (SpellID not confirmed live.)

Dispels:
- Dispel Magic — offensive dispel: removes beneficial Magic from enemies. (SpellID not confirmed live.)
- Mass Dispel (SpellID 32375) — AoE dispel, ~2-minute cooldown, 15-yard radius; removes harmful Magic from up to 5 allies and a beneficial Magic effect from up to 5 enemies; can remove some normally-undispellable Magic.
- Purify Disease — removes Disease from friendly targets. (SpellID not confirmed live.) Note: Shadow's friendly-target magic dispel availability (Purify / Dispel Magic friendly) is talent/spec dependent — do not assume Shadow can cleanse friendly Magic without confirmation.

Externals:
- Power Infusion (SpellID 10060) can be cast on an ally (haste external). Shadow has no damage-reduction external for other players.

Raid buffs/debuffs:
- Power Word: Fortitude (SpellID 21562) — raid Stamina buff.

Movement tools:
- None offensive. Relies on instant DoT refreshes and Mind Flay: Insanity to maintain partial uptime while moving. No blink/leap.

## Consumables and Enchants

Sourced from Icy Veins (patch 12.0.5) prose. NO item IDs were confirmed from a live source — names only. Verify IDs/exact names before hardcoding any item.

- Combat potion: Draught of Rampant Abandon (highest output but spawns a void pool under the player that silences while stood in — avoid on progression); Light's Potential as the safe progression alternative (~10% lower).
- Healing potion: Silvermoon Health Potion.
- Flask: not explicitly captured in the fetched content (see Known Gaps).
- Food: Silvermoon Parade or Harandar Celebration feast.
- Weapon oil: Thalassian Phoenix Oil.
- Weapon enchant: Berserker's Rage (Haste proc) early; Arcane Mastery once Haste is high (~20-25%+).
- Ring enchants: Haste or Mastery depending on gear/content.
- Tertiary enchant: Speed is recommended due to the spec's poor mobility.
- Gems: Indecipherable Eversong Diamond (epic/unique slot); rare gems stacking Haste and/or Mastery (e.g. Flawless Masterful Peridot or Flawless Quick Amethyst).

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Archon** and **Voidweaver**.

Metrics: DPS/HPS/DTPS were not captured in the source data (metrics block is empty for both variants). No throughput ceiling figure is available from this sim run.

### Talent Import Strings

**Archon:**
```
CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAgxMMjxyMDzsNzwMsNzMmZmxGyMWMTDwMAzsZGmNDAZMWAwMQGzMzY2GzstMAzED
```

**Voidweaver:**
```
CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAgxYxMGLzMMz2MDzw2MzYmZGbIzYxMNAzMzAABY2mtFwsxAMDwYmZGz2YGMzgZwA
```

### Damage Distribution (SimC, share of total damage)

Valid damage-% rows only (rows without a "%" sign in the percent column are buff uptimes, durations, or counts and are excluded).

**Archon:**

| Ability | % of damage |
|---|---|
| Shadow Word: Madness | 14.2% |
| Mind Flay | 10.5% |
| Shadowy Apparitions | 9.8% |
| Void Apparitions | 8.2% |
| Shadow Word: Pain | 6.1% |
| Void Spike | 4.4% |
| Vampiric Touch | 3.1% |
| Void Bolt | 2.2% |
| Idol of C'Thun | 1.9% |
| Voidstalker Sting | 0.7% |
| Twilight Barrage | 0.5% |
| Shadow Weaving | 0.1% |

**Voidweaver:**

| Ability | % of damage |
|---|---|
| Shadow Word: Madness | 14.6% |
| Mind Flay | 10.0% |
| Void Blast | 9.1% |
| Shadow Word: Pain | 8.7% |
| Shadowy Apparitions | 7.3% |
| Void Apparitions | 6.2% |
| Void Spike | 4.2% |
| Vampiric Touch | 3.8% |
| Void Bolt | 2.1% |
| Idol of C'Thun | 1.9% |
| Voidstalker Sting | 0.8% |
| Twilight Barrage | 0.5% |
| Shadow Weaving | 0.4% |
| Void Flay | 0.5% |

### Action Priority List — Priest Shadow Archon

```
actions.precombat=snapshot_stats
actions.precombat+=/shadowform,if=!buff.shadowform.up
actions.precombat+=/variable,name=trinket_1_buffs,value=(trinket.1.has_buff.intellect|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit|trinket.1.is.signet_of_the_priory)&(trinket.1.cooldown.duration>=20)
actions.precombat+=/variable,name=trinket_2_buffs,value=(trinket.2.has_buff.intellect|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit|trinket.2.is.signet_of_the_priory)&(trinket.2.cooldown.duration>=20)
actions.precombat+=/variable,name=dr_force_prio,default=0,op=reset
actions.precombat+=/variable,name=me_force_prio,default=0,op=reset
actions.precombat+=/variable,name=max_vts,default=12,op=reset
actions.precombat+=/variable,name=is_vt_possible,default=0,op=reset
actions.precombat+=/arcane_torrent
actions.precombat+=/tentacle_slam

# Executed every time the actor is available.
actions=variable,name=holding_tentacle_slam,op=set,value=raid_event.adds.in<15
actions+=/call_action_list,name=aoe,if=active_enemies>2
actions+=/run_action_list,name=main

actions.aoe=call_action_list,name=aoe_variables

actions.aoe_variables=variable,name=max_vts,op=set,default=12,value=spell_targets.vampiric_touch>?12
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=0,default=1
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=1,target_if=max:(target.time_to_die*dot.vampiric_touch.refreshable),if=target.time_to_die>=18
# TODO: Revamp to fix undesired behavior with unstacked fights
actions.aoe_variables+=/variable,name=dots_up,op=set,value=(active_dot.vampiric_touch>=variable.max_vts|!variable.is_vt_possible)&(active_dot.shadow_word_pain>=active_dot.vampiric_touch)
actions.aoe_variables+=/variable,name=holding_tentacle_slam,op=set,value=(variable.max_vts-active_dot.vampiric_touch)<4&raid_event.adds.in>15|raid_event.adds.in<10&raid_event.adds.count>(variable.max_vts-active_dot.vampiric_touch),if=variable.holding_tentacle_slam&action.tentacle_slam.enabled&raid_event.adds.exists
actions.aoe_variables+=/variable,name=manual_vts_applied,op=set,value=(active_dot.vampiric_touch+6*!variable.holding_tentacle_slam)>=variable.max_vts|!variable.is_vt_possible

# TODO: Add holding condition for weird fight times to potion with execute
actions.cds=potion,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)&(fight_remains>=320|time_to_bloodlust>=320|buff.bloodlust.react)|fight_remains<=30
actions.cds+=/fireblood,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=8
actions.cds+=/berserking,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=12
actions.cds+=/blood_fury,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/ancestral_call,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/invoke_external_buff,name=power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/invoke_external_buff,name=bloodlust,if=buff.power_infusion.up&fight_remains<120|fight_remains<=40
# Use Flash Heal to proc Nexus-King's Command trinket
actions.cds+=/flash_heal,if=equipped.nexuskings_command&buff.oathbound.up&(!buff.boon_of_the_oathsworn.up|buff.boon_of_the_oathsworn.remains<3)&((talent.voidform&(buff.voidform.up|cooldown.voidform.up))|cooldown.halo.up|cooldown.void_torrent.up)
# Sync Power Infusion with Voidform or Dark Ascension
actions.cds+=/power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/halo
actions.cds+=/voidform,if=active_dot.shadow_word_pain>=active_dot.vampiric_touch
actions.cds+=/call_action_list,name=trinkets
# Use Desperate Prayer to heal up should Shadow Word: Death or other damage bring you below 75%
actions.cds+=/desperate_prayer,if=health.pct<=75

# Use Halo to acquire Twist of Fate if an ally can be healed for it and it is not currently up.
actions.heal_for_tof=holy_nova,if=talent.lightburst

actions.main=variable,name=dots_up,op=set,value=active_dot.vampiric_touch=active_enemies&active_dot.shadow_word_pain>=active_dot.vampiric_touch,if=active_enemies<3
actions.main+=/call_action_list,name=cds,if=fight_remains<30|target.time_to_die>15&(!variable.holding_tentacle_slam|active_enemies>2)&variable.dots_up
# High Priority Shadow Word: Death when Devour Matter is active (target shielded or forced)
actions.main+=/shadow_word_death,target_if=max:(target.health.pct<=20)*100+dot.shadow_word_madness.ticking,if=(priest.force_devour_matter|target.has_absorb)&talent.devour_matter
# Do not overcap on insanity
actions.main+=/shadow_word_madness,target_if=max:target.time_to_die*(dot.shadow_word_madness.remains<=gcd.max|variable.dr_force_prio|!talent.distorted_reality&variable.me_force_prio),if=active_dot.shadow_word_madness<=1&dot.shadow_word_madness.remains<=gcd.max|insanity.deficit<=35|buff.mind_devourer.react|!raid_event.adds.exists&target.time_to_die<=10|buff.entropic_rift.up&action.shadow_word_madness.cost>0
actions.main+=/void_volley
# Blast more burst :wicked:
actions.main+=/void_blast,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die)
# Use Tentacle Slam to prevent capping charges or to refresh Vampiric Touch
actions.main+=/tentacle_slam,target_if=min:dot.vampiric_touch.remains,if=dot.vampiric_touch.refreshable|cooldown.tentacle_slam.full_recharge_time<=gcd.max*2
# Use Void Torrent if it will get near full Mastery Value
actions.main+=/void_torrent,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die),if=!variable.holding_tentacle_slam&variable.dots_up
# Put out Shadow Word: Pain on enemies that will live at least 12s as a filler when talented into Invoked Nightmare.
actions.main+=/shadow_word_pain,target_if=max:(refreshable*100000+target.time_to_die+dot.vampiric_touch.ticking*10000),if=talent.invoked_nightmare&refreshable&target.time_to_die>12&dot.vampiric_touch.ticking
# Use all charges of Mind Blast if Vampiric Touch and Shadow Word: Pain are active and Mind Devourer is not active or you are prepping Void Eruption
actions.main+=/mind_blast,target_if=max:dot.shadow_word_madness.remains,if=(!buff.mind_devourer.react|!talent.mind_devourer)
# MFI is a good button
actions.main+=/mind_flay_insanity,target_if=max:dot.shadow_word_madness.remains
# Use Tentacle Slam for Void Apparitions or Maddening Tentacles value, holding for adds if needed
actions.main+=/tentacle_slam,target_if=min:dot.vampiric_touch.remains,if=(talent.void_apparitions|talent.maddening_tentacles)&(raid_event.adds.in>30|raid_event.adds.in>5&cooldown.tentacle_slam.full_recharge_time<=gcd.max*2)
# Put out Vampiric Touch on enemies that will live at least 12s and Tentacle Slam is not available soon
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die)*(dot.vampiric_touch.ticking|!variable.dots_up),if=refreshable&target.time_to_die>12&(dot.vampiric_touch.ticking|!variable.dots_up)&(variable.max_vts>0|active_enemies=1)&(action.tentacle_slam.usable_in>=dot.vampiric_touch.remains|variable.holding_tentacle_slam|!action.tentacle_slam.enabled)
# Healing spell action list for proccing Twist of Fate. Set priest.twist_of_fate_heal_rppm=<rppm> to make this be used.
actions.main+=/call_action_list,name=heal_for_tof,if=!buff.twist_of_fate.up&buff.twist_of_fate_can_trigger_on_ally_heal.up&talent.halo
# Put out Vampiric Touch on enemies that will live at least 12s as a filler action.
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die),if=refreshable&target.time_to_die>12
actions.main+=/shadow_word_death,target_if=min:target.health.pct,if=(pet.mindbender.active|pet.voidwraith.active|pet.shadowfiend.active)&talent.inescapable_torment|target.health.pct<(20+15*talent.deathspeaker)&talent.shadowfiend&talent.idol_of_yshaarj
actions.main+=/shadow_word_death,target_if=min:target.health.pct,if=(target.health.pct<(20+15*talent.deathspeaker))
actions.main+=/mind_flay,target_if=max:dot.shadow_word_madness.remains,chain=1,interrupt_immediate=1,interrupt_if=ticks>=3,interrupt_global=1
# Use Tentacle Slam while moving as a low-priority action when adds will not spawn in 20 seconds.
actions.main+=/tentacle_slam,if=raid_event.adds.in>20
# Use Shadow Word: Death while moving as a low-priority action in execute
actions.main+=/shadow_word_death,target_if=target.health.pct<20
# Use Shadow Word: Death while moving as a low-priority action
actions.main+=/shadow_word_death,target_if=max:dot.shadow_word_madness.remains
# Use Shadow Word: Pain while moving as a low-priority action
actions.main+=/shadow_word_pain,target_if=min:remains

actions.trinkets=use_item,name=galactic_gladiators_badge_of_ferocity,if=(buff.voidform.up|buff.power_infusion.remains>=10|(talent.voidform&cooldown.voidform.remains>10))|fight_remains<20
actions.trinkets+=/use_items,if=(buff.voidform.up|buff.power_infusion.remains>=10|equipped.neural_synapse_enhancer&buff.entropic_rift.up)|fight_remains<20
```

### Action Priority List — Priest Shadow Voidweaver

```
actions.precombat=snapshot_stats
actions.precombat+=/shadowform,if=!buff.shadowform.up
actions.precombat+=/variable,name=trinket_1_buffs,value=(trinket.1.has_buff.intellect|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit|trinket.1.is.signet_of_the_priory)&(trinket.1.cooldown.duration>=20)
actions.precombat+=/variable,name=trinket_2_buffs,value=(trinket.2.has_buff.intellect|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit|trinket.2.is.signet_of_the_priory)&(trinket.2.cooldown.duration>=20)
actions.precombat+=/variable,name=dr_force_prio,default=0,op=reset
actions.precombat+=/variable,name=me_force_prio,default=0,op=reset
actions.precombat+=/variable,name=max_vts,default=12,op=reset
actions.precombat+=/variable,name=is_vt_possible,default=0,op=reset
actions.precombat+=/arcane_torrent
actions.precombat+=/tentacle_slam

# Executed every time the actor is available.
actions=variable,name=holding_tentacle_slam,op=set,value=raid_event.adds.in<15
actions+=/call_action_list,name=aoe,if=active_enemies>2
actions+=/run_action_list,name=main

actions.aoe=call_action_list,name=aoe_variables

actions.aoe_variables=variable,name=max_vts,op=set,default=12,value=spell_targets.vampiric_touch>?12
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=0,default=1
actions.aoe_variables+=/variable,name=is_vt_possible,op=set,value=1,target_if=max:(target.time_to_die*dot.vampiric_touch.refreshable),if=target.time_to_die>=18
# TODO: Revamp to fix undesired behavior with unstacked fights
actions.aoe_variables+=/variable,name=dots_up,op=set,value=(active_dot.vampiric_touch>=variable.max_vts|!variable.is_vt_possible)&(active_dot.shadow_word_pain>=active_dot.vampiric_touch)
actions.aoe_variables+=/variable,name=holding_tentacle_slam,op=set,value=(variable.max_vts-active_dot.vampiric_touch)<4&raid_event.adds.in>15|raid_event.adds.in<10&raid_event.adds.count>(variable.max_vts-active_dot.vampiric_touch),if=variable.holding_tentacle_slam&action.tentacle_slam.enabled&raid_event.adds.exists
actions.aoe_variables+=/variable,name=manual_vts_applied,op=set,value=(active_dot.vampiric_touch+6*!variable.holding_tentacle_slam)>=variable.max_vts|!variable.is_vt_possible

# TODO: Add holding condition for weird fight times to potion with execute
actions.cds=potion,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)&(fight_remains>=320|time_to_bloodlust>=320|buff.bloodlust.react)|fight_remains<=30
actions.cds+=/fireblood,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=8
actions.cds+=/berserking,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=12
actions.cds+=/blood_fury,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/ancestral_call,if=((buff.voidform.up|!talent.voidform)&buff.power_infusion.up)|fight_remains<=15
actions.cds+=/invoke_external_buff,name=power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/invoke_external_buff,name=bloodlust,if=buff.power_infusion.up&fight_remains<120|fight_remains<=40
# Use Flash Heal to proc Nexus-King's Command trinket
actions.cds+=/flash_heal,if=equipped.nexuskings_command&buff.oathbound.up&(!buff.boon_of_the_oathsworn.up|buff.boon_of_the_oathsworn.remains<3)&((talent.voidform&(buff.voidform.up|cooldown.voidform.up))|cooldown.halo.up|cooldown.void_torrent.up)
# Sync Power Infusion with Voidform or Dark Ascension
actions.cds+=/power_infusion,if=(buff.voidform.up|!talent.voidform)&!buff.power_infusion.up
actions.cds+=/halo
actions.cds+=/voidform,if=active_dot.shadow_word_pain>=active_dot.vampiric_touch
actions.cds+=/call_action_list,name=trinkets
# Use Desperate Prayer to heal up should Shadow Word: Death or other damage bring you below 75%
actions.cds+=/desperate_prayer,if=health.pct<=75

# Use Halo to acquire Twist of Fate if an ally can be healed for it and it is not currently up.
actions.heal_for_tof=holy_nova,if=talent.lightburst

actions.main=variable,name=dots_up,op=set,value=active_dot.vampiric_touch=active_enemies&active_dot.shadow_word_pain>=active_dot.vampiric_touch,if=active_enemies<3
actions.main+=/call_action_list,name=cds,if=fight_remains<30|target.time_to_die>15&(!variable.holding_tentacle_slam|active_enemies>2)&variable.dots_up
# High Priority Shadow Word: Death when Devour Matter is active (target shielded or forced)
actions.main+=/shadow_word_death,target_if=max:(target.health.pct<=20)*100+dot.shadow_word_madness.ticking,if=(priest.force_devour_matter|target.has_absorb)&talent.devour_matter
# Do not overcap on insanity
actions.main+=/shadow_word_madness,target_if=max:target.time_to_die*(dot.shadow_word_madness.remains<=gcd.max|variable.dr_force_prio|!talent.distorted_reality&variable.me_force_prio),if=active_dot.shadow_word_madness<=1&dot.shadow_word_madness.remains<=gcd.max|insanity.deficit<=35|buff.mind_devourer.react|!raid_event.adds.exists&target.time_to_die<=10|buff.entropic_rift.up&action.shadow_word_madness.cost>0
actions.main+=/void_volley
# Blast more burst :wicked:
actions.main+=/void_blast,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die)
# Use Tentacle Slam to prevent capping charges or to refresh Vampiric Touch
actions.main+=/tentacle_slam,target_if=min:dot.vampiric_touch.remains,if=dot.vampiric_touch.refreshable|cooldown.tentacle_slam.full_recharge_time<=gcd.max*2
# Use Void Torrent if it will get near full Mastery Value
actions.main+=/void_torrent,target_if=max:(dot.shadow_word_madness.remains*1000+target.time_to_die),if=!variable.holding_tentacle_slam&variable.dots_up
# Put out Shadow Word: Pain on enemies that will live at least 12s as a filler when talented into Invoked Nightmare.
actions.main+=/shadow_word_pain,target_if=max:(refreshable*100000+target.time_to_die+dot.vampiric_touch.ticking*10000),if=talent.invoked_nightmare&refreshable&target.time_to_die>12&dot.vampiric_touch.ticking
# Use all charges of Mind Blast if Vampiric Touch and Shadow Word: Pain are active and Mind Devourer is not active or you are prepping Void Eruption
actions.main+=/mind_blast,target_if=max:dot.shadow_word_madness.remains,if=(!buff.mind_devourer.react|!talent.mind_devourer)
# MFI is a good button
actions.main+=/mind_flay_insanity,target_if=max:dot.shadow_word_madness.remains
# Use Tentacle Slam for Void Apparitions or Maddening Tentacles value, holding for adds if needed
actions.main+=/tentacle_slam,target_if=min:dot.vampiric_touch.remains,if=(talent.void_apparitions|talent.maddening_tentacles)&(raid_event.adds.in>30|raid_event.adds.in>5&cooldown.tentacle_slam.full_recharge_time<=gcd.max*2)
# Put out Vampiric Touch on enemies that will live at least 12s and Tentacle Slam is not available soon
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die)*(dot.vampiric_touch.ticking|!variable.dots_up),if=refreshable&target.time_to_die>12&(dot.vampiric_touch.ticking|!variable.dots_up)&(variable.max_vts>0|active_enemies=1)&(action.tentacle_slam.usable_in>=dot.vampiric_touch.remains|variable.holding_tentacle_slam|!action.tentacle_slam.enabled)
# Healing spell action list for proccing Twist of Fate. Set priest.twist_of_fate_heal_rppm=<rppm> to make this be used.
actions.main+=/call_action_list,name=heal_for_tof,if=!buff.twist_of_fate.up&buff.twist_of_fate_can_trigger_on_ally_heal.up&talent.halo
# Put out Vampiric Touch on enemies that will live at least 12s as a filler action.
actions.main+=/vampiric_touch,target_if=max:(refreshable*10000+target.time_to_die),if=refreshable&target.time_to_die>12
actions.main+=/shadow_word_death,target_if=min:target.health.pct,if=(pet.mindbender.active|pet.voidwraith.active|pet.shadowfiend.active)&talent.inescapable_torment|target.health.pct<(20+15*talent.deathspeaker)&talent.shadowfiend&talent.idol_of_yshaarj
actions.main+=/shadow_word_death,target_if=min:target.health.pct,if=(target.health.pct<(20+15*talent.deathspeaker))
actions.main+=/mind_flay,target_if=max:dot.shadow_word_madness.remains,chain=1,interrupt_immediate=1,interrupt_if=ticks>=3,interrupt_global=1
# Use Tentacle Slam while moving as a low-priority action when adds will not spawn in 20 seconds.
actions.main+=/tentacle_slam,if=raid_event.adds.in>20
# Use Shadow Word: Death while moving as a low-priority action in execute
actions.main+=/shadow_word_death,target_if=target.health.pct<20
# Use Shadow Word: Death while moving as a low-priority action
actions.main+=/shadow_word_death,target_if=max:dot.shadow_word_madness.remains
# Use Shadow Word: Pain while moving as a low-priority action
actions.main+=/shadow_word_pain,target_if=min:remains

actions.trinkets=use_item,name=galactic_gladiators_badge_of_ferocity,if=(buff.voidform.up|buff.power_infusion.remains>=10|(talent.voidform&cooldown.voidform.remains>10))|fight_remains<20
actions.trinkets+=/use_items,if=(buff.voidform.up|buff.power_infusion.remains>=10|equipped.neural_synapse_enhancer&buff.entropic_rift.up)|fight_remains<20
```

### RaidLens Interpretation

In both builds, Shadow Word: Madness and Mind Flay together account for roughly 24-25% of damage — they are the backbone of the rotation. Any log where these two fall significantly below their expected share relative to the rest of the breakdown suggests the player is failing to maintain filler uptime or is capping Insanity and delaying spender casts.

The two builds diverge sharply after the top two: Archon's next-largest contributors are the Apparition proc chains (Shadowy Apparitions 9.8%, Void Apparitions 8.2%), while Voidweaver replaces Halo with Void Blast (9.1%) — making Void Blast a top-three damage ability for Voidweaver. A Voidweaver log where Void Blast is absent or very low strongly suggests the player is not engaging Entropic Rift windows correctly. Void Spike (~4% in both builds) is a notable proc contributor that should appear consistently.

## Confirmed Spell IDs (SimulationCraft HTML)

Sourced from simc-guides/spell-ids-reference.json (SimC Midnight 12.0.5 HTML report). Exact-name matches only.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Entropic Rift | 447445 | shadow | cast |
| Halo | 390964, 390971, 120644 (multiple: base cast + variants/sub-spells) | shadow | cast |
| Idol of C'Thun | 377349 | physical | cast |
| Mind Blast | 8092 | shadow | cast |
| Mind Flay | 193473, 15407 (multiple: base cast + variants/sub-spells) | shadow | cast |
| Mind Flay: Insanity | 391403 | shadow | cast |
| Power Infusion | 10060 | holy | cast |
| Shadow Weaving | 346111 | shadow | cast |
| Shadow Word: Death | 32379 | shadow | cast |
| Shadow Word: Madness | 335467 | shadow | cast |
| Shadow Word: Pain | 589 | shadow | cast |
| Shadowy Apparitions | 341491 | physical | cast |
| Tentacle Slam | 1227280, 1227621 (multiple: base cast + variants/sub-spells) | shadow | cast |
| Twilight Barrage | 1281579 | shadowlight | other |
| Vampiric Touch | 34914 | shadow | cast |
| Void Apparitions | 1264104 | shadow | cast |
| Void Blast | 450983 | shadow | cast |
| Void Bolt | 1264177 | shadow | cast |
| Void Flay | 451435 | shadow | cast |
| Void Spike | 373279 | shadow | cast |
| Void Torrent | 263165 | shadow | cast |
| Void Volley | 1242173, 1242189 (multiple: base cast + variants/sub-spells) | shadow | cast |
| Voidform | 228260 | shadow | cast |
| Voidstalker Sting | 1271226 | shadow | other |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- Wowhead's class-guide and individual spell-detail pages are JavaScript-rendered and returned 403/empty bodies to the fetch tool. SpellIDs in this guide were confirmed from Wowhead spell-page URLs surfaced in search results; prose detail came mainly from Icy Veins (12.0.5). Re-verify against live Wowhead when possible.
- Damage/rotational spell IDs now confirmed from the SimC HTML reference for matched abilities; defensive/interrupt/utility IDs still pending live Wowhead. Remaining unconfirmed: Misery (passive talent, not a damage spell in the SimC sim), Psychic Horror, Shackle Undead/Horror, Mind Control / Dominate Mind, Dispel Magic, Purify Disease, Power Word: Shield.
- Void Bolt note: Wowhead URL confirmed 228266; SimC reference lists 1264177 — these may represent the old base cast vs. a Midnight-updated damage spell ID. Treat 1264177 as the Midnight 12.0.5 SimC ID; 228266 is the Wowhead-confirmed legacy ID. Verify against live logs before hardcoding for event filtering.
- Voidform SpellID: SimC reference confirms 228260 (resolving the prior ambiguity between 228260 and 228361). Verify against live logs.
- Silence cooldown (stated 30s baseline in Midnight, down from 45s) comes from a search snippet, not a fully fetched page. Treat as likely-but-unconfirmed.
- Dispersion cooldown not confirmed live (effect/values confirmed). Desperate Prayer, Fade, Vampiric Embrace, Power Infusion (2 min), Mass Dispel (~2 min): cooldowns are from prose/recall and only Power Infusion/Mass Dispel durations appeared in fetched text — verify exact values.
- Fade's damage-reduction behavior is talent-dependent; do not assume it is a defensive without confirming the player's build.
- Friendly-target Magic dispel availability for Shadow is talent/spec dependent and was not confirmed — do not assume Shadow can cleanse friendly Magic.
- SimC damage distribution and talent import strings added (both Archon and Voidweaver). SimC metrics (DPS/HPS) were not captured in the source data — no throughput ceiling figure is available. SimC APL now embedded (extracted from Trivial.txt).
- Consumable/enchant/gem item IDs were NOT confirmed — names only, from Icy Veins prose. Flask not captured.
- Hero Talents: both Archon and Voidweaver are viable in Midnight Season 1; specific node interactions were not deeply sourced.
- MAINTENANCE FLAG: re-verify all IDs, cooldowns, ability names, and consumables after ANY 12.x patch. This guide reflects 12.0.5 as of June 2026.
