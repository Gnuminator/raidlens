# Destruction Warlock — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/warlock/destruction/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide
> - https://www.icy-veins.com/wow/destruction-warlock-pve-dps-rotation-cooldowns-abilities
> - https://www.method.gg/guides/destruction-warlock/playstyle-and-rotation
> - Individual Wowhead spell pages (IDs cited inline below were each confirmed on their own live spell page): Chaos Bolt, Immolate, Conflagrate, Incinerate, Shadowburn, Rain of Fire, Havoc, Summon Infernal, Unending Resolve, Dark Pact, Spell Lock, Shadowfury, Mortal Coil, Fear, Soulstone, Demonic Gateway, Demonic Circle.
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt

---

## Overview

Destruction is the ranged fire-and-chaos DPS specialization of the Warlock. Its core loop revolves around generating **Soul Shards** (tracked in fragments — 10 fragments = 1 full shard) with filler and short-cooldown spells, then dumping them into hard-hitting spenders. The signature spender is **Chaos Bolt** (a long hard-cast nuke); the spec also leans on **Shadowburn** (instant, execute-flavored) and **Rain of Fire** (AoE spender).

Core gameplay loop:
- Maintain the fire DoT (**Immolate**, or **Wither** when playing the Hellcaller hero tree) on the target(s).
- Generate shards with **Conflagrate** (on cooldown), **Incinerate** (filler), and **Soul Fire**.
- Spend shards on **Chaos Bolt** (single target / 2-target cleave via **Havoc**) or **Rain of Fire** (AoE).
- Stack offensive cooldowns: **Summon Infernal** plus the hero-tree cooldown (**Malevolence** for Hellcaller, **Diabolic Ritual / Ruination** for Diabolist).

Damage profile: high single-target burst (Chaos Bolt), strong 2-target cleave via Havoc, and competent multi-target AoE via Rain of Fire. Damage is bursty and cooldown-gated rather than perfectly even.

Healing/survivability profile: no healing output to the raid. Personal survivability is good for a ranged caster — a passive overshield (Soul Leech), a strong wall (**Unending Resolve**), and a self-shield (**Dark Pact**).

Primary weakness: **Chaos Bolt has a long cast time**, so heavy movement or frequent forced repositioning is punishing. Mobility is handled by instant casts (Conflagrate, Shadowburn) and movement tools, but sustained DPS drops sharply when the player cannot stand still to hard-cast. Burst is also cooldown-aligned, so a poorly-timed cooldown window during a mechanic costs a lot.

---

## Role in Raid

- **Role:** Ranged DPS. Does not heal or tank.
- **Battle res:** YES. **Soulstone** (ID 20707) is a combat resurrection and counts against the raid's battle-res limit. It can be pre-cast on a living player (acts as a self-res-on-death buff) or cast on a corpse in combat.
- **Bloodlust/Heroism equivalent:** NO. Warlocks do not provide a Bloodlust-type effect.
- **Raid buffs/deboffs:** Warlocks bring **Healthstones** (Create Healthstone — see Consumables) usable by the whole raid as an on-demand burst heal, and curse-based debuffs (see Utility). Destruction does not bring a unique stacking raid damage buff.
- **Group utility / externals:** **Demonic Gateway** (ID 111771) — a placed portal pair that instantly teleports group members ~40 yards, valuable for skip/movement mechanics. **Healthstone** acts as a free "potion" for the whole raid. No single-target external defensive (no Pain Suppression / Sacrifice equivalent).
- **Mobility profile:** Moderate. **Burning Rush** (passive-toggle run-speed buff that drains health over time), **Demonic Circle** (ID 48018, placed teleport anchor), and **Demonic Gateway** provide repositioning. Instant-cast spenders/generators (Conflagrate, Shadowburn) let it deal some damage while moving, but its main nuke (Chaos Bolt) is stationary.

---

## Abilities Reference

IDs below were each confirmed on their own live Wowhead spell page. Where an ID is omitted, it could not be confirmed live (see Known Gaps).

**Core damage abilities**
- **Immolate** (ID 348) — Fire DoT; baseline DoT to maintain. Generates shards over time and on crit.
- **Wither** — Hellcaller hero-tree DoT that replaces Immolate; stacks and is empowered by Malevolence. (ID not confirmed live — see Known Gaps.)
- **Conflagrate** (ID 17962) — Instant Fire hit; primary shard generator, used on cooldown; usable while moving.
- **Incinerate** (ID 29722) — Hard-cast filler; generates shards.
- **Soul Fire** — Hard-cast that generates a large chunk of shards; used to refresh the DoT and as a generator. (ID not confirmed live — see Known Gaps.)
- **Chaos Bolt** (ID 116858) — Primary single-target shard spender; long hard cast; very high direct damage.
- **Shadowburn** (ID 17877) — Instant shard spender with execute scaling at low target health; mobile spender and execute tool.
- **Rain of Fire** (ID 5740) — Ground-targeted AoE shard spender; primary spender at higher target counts.
- **Havoc** (ID 80240) — Debuff applied to a second target (30-second cooldown) that duplicates single-target spender damage onto it; the spec's core 2-target cleave tool.
- **Cataclysm** — Talent: AoE burst that applies the fire DoT to all targets hit. (ID not confirmed live — see Known Gaps.)
- **Channel Demonfire** — Talent: channeled barrage of bolts that prioritizes DoT'd targets. (ID not confirmed live — see Known Gaps.)
- **Embers of Nihilam** — Talent/proc: contributes ~4.7% of total damage in SimC (both hero trees). Not confirmed on a live Wowhead page — treat as a real rotational contributor whose ID needs verification.

**Cooldowns**
- **Summon Infernal** (ID 1122) — Main offensive cooldown; summons an Infernal for area Fire damage. Baseline **2-minute** cooldown, reduced to roughly **90 seconds** with the **Inferno** talent.
- **Malevolence** — Hellcaller hero cooldown; grants Haste and empowers active Withers; ~1-minute recharge per the rotation guide. (ID not confirmed live — see Known Gaps.)
- **Diabolic Ritual / Ruination** — Diabolist hero-tree mechanic/cooldown payoff. Each Diabolic Ritual cycle summons one of three demons: an Overlord (Wicked Cleave), a Mother of Chaos (Chaos Salvo), or a Pit Lord (Felseeker). These summoned demons each contribute ~2% of total damage in SimC. The Diabolist-specific **Diabolic Oculi** proc contributes ~8.7% of total damage and is the spec's largest single source after core spenders. (Details/IDs not confirmed live — see Known Gaps.)

**Key passives/procs**
- **Backdraft** — Conflagrate generates Backdraft charges that reduce the cast time/cost of the next Incinerate or Chaos Bolt. (ID not confirmed live.)
- **Soul Leech** — Passive overshield generated by spending Soul Shards; functions as a damage buffer (see Defensives). (ID not confirmed live.)
- **Conflagration of Chaos** — Talent; in 12.0.5 simplified so a Conflagrate crit empowers the next Shadowburn and vice versa.

---

## Rotation / Priority

> This is a **logical priority order**, not a DPS benchmark or a guaranteed cast sequence. Exact ordering shifts with hero tree (Diabolist vs Hellcaller), talents, target count, and cooldown timing. Use it to judge whether a player is doing the right *kinds* of things, not to grade APM.

**Single-target opener (per the Wowhead/Icy Veins rotation pages):**
1. Pre-pull cast (Soul Fire / Incinerate) into the pull
2. Apply the DoT: **Immolate** (or **Wither** for Hellcaller); **Cataclysm** if talented to apply it
3. **Conflagrate**
4. **Summon Infernal** + trinkets/racials
5. Hero cooldown (**Malevolence** for Hellcaller)
6. **Chaos Bolt** spends
7. **Conflagrate** again on cooldown

**Sustained single target (priority):**
1. Keep the DoT (Immolate / Wither) up — never let it fall off; refresh inside the pandemic window.
2. **Summon Infernal** and hero cooldown on cooldown (aligned with burst where possible).
3. **Shadowburn** when its empowerment/charges are available, and as an execute at low target HP.
4. **Soul Fire** when below ~4 shards (to refuel) and to refresh the DoT.
5. **Chaos Bolt** to spend shards, prioritized when near the shard cap (don't overcap).
6. **Cataclysm** / **Channel Demonfire** on cooldown if talented.
7. **Conflagrate** on cooldown for shards + mobility.
8. **Incinerate** as filler.

**AoE / cleave priority:**
- **2 targets:** apply **Havoc** to the second target and continue the single-target spender priority (Chaos Bolt is duplicated onto the Havoc'd target).
- **3+ / 4+ targets:** maintain the DoT on multiple targets (spread via Cataclysm / Conflagrate interactions), then spend on **Rain of Fire** instead of Chaos Bolt. Use **Channel Demonfire** and **Summon Infernal** for AoE burst.

---

## Defensives

This is one of the two most important sections for RaidLens. Cooldown values below were confirmed on live Wowhead spell pages except where noted.

- **Unending Resolve** (ID 104773)
  - Effect: reduces all damage taken (Wowhead spell page lists **-25%**, **8-second** duration; some class guides describe a higher value with talents — treat the talented value as unconfirmed).
  - Cooldown: **3 minutes**.
  - RaidLens usage: this is the warlock's main personal wall. For any large, telegraphed damage event (a known raid-wide hit, a soak, a heavy DoT phase) check whether Unending Resolve was active during the window. If a Destruction Warlock took a lethal or near-lethal avoidable hit while Unending Resolve was off cooldown and unused, flag it. With a 3-minute cooldown, expect at most one use per major damage window — do not flag failure to use it on minor incidental damage.

- **Dark Pact** (ID 108416)
  - Effect: sacrifices a portion of current health (or pet health, depending on talent) to gain a large absorb shield. Wowhead lists a **20-second** duration.
  - Cooldown: **1 minute**.
  - RaidLens usage: short-cooldown absorb meant for frequent, predictable spike damage. Because it's only 1 minute, it should be available for most repeating mechanics. If a warlock repeatedly dies to a recurring spike (e.g. a periodic raid pulse) with Dark Pact unused and off cooldown, flag it. Note Dark Pact and Unending Resolve are independent — a careful player layers them on the biggest hits.

- **Soul Leech** (passive — ID not confirmed live)
  - Effect: spending Soul Shards generates an absorb overshield that passively buffers the health pool.
  - RaidLens usage: not actively triggered, so it is not a "did they press it" check. Its presence means a warlock who is actively spending shards carries a small standing shield; absence of the shield on a death usually just means they had spent recently or were capped, not a mistake. Do not flag.

- **Soul Link** (talent — ID not confirmed live)
  - Effect: redirects a percentage of damage taken to the active pet, reducing damage the warlock personally takes (requires a living pet).
  - RaidLens usage: passive once talented and a pet is summoned. If a warlock playing a Soul Link build died with **no pet active**, that is a real avoidable error worth flagging (lost mitigation). Otherwise treat as passive.

- **Healthstone** (consumable the warlock creates — see Consumables)
  - RaidLens usage: an instant self-heal available to the warlock (and the whole raid). If a warlock died at low health during a survivable window with a Healthstone unused, flag it the same way you would a missed defensive.

- **Burning Rush** (toggle — ID not confirmed live)
  - Note: this is a *mobility* tool that *drains* health, not a defensive. Do not treat Burning Rush self-damage as avoidable boss damage, and do not credit it as a defensive.

---

## Utility

This is the second most important section for RaidLens.

### Interrupt
- **Spell Lock** (ID 19647) — this is a **pet ability** (the Felhunter's interrupt, also usable via Command Demon / Grimoire of Sacrifice depending on setup). It **interrupts** the target's current cast and locks out that school.
  - Cooldown: **24 seconds** (per the live spell page).
  - **This is the Destruction Warlock's only interrupt, and it is pet-dependent.** It is only available if the warlock has a Felhunter summoned, OR has sacrificed the Felhunter via Grimoire of Sacrifice / uses Command Demon. A warlock playing without access to the Felhunter's Spell Lock has **no interrupt at all**.
  - RaidLens usage: a Destruction Warlock *can* contribute to interrupt rotations, but only via Spell Lock and only when the pet/talent setup allows it. Before flagging a "missed interrupt," account for this — if the log shows the warlock never had a Felhunter or had sacrificed it, the interrupt was simply unavailable, not missed. When Spell Lock is available (24-second cooldown), it is fair to expect the warlock to take assigned kicks.

### Crowd Control
- **Fear** (ID 5782) — single-target (talentable to AoE) disorient/flee effect.
- **Mortal Coil** (ID 6789, talent) — horrifies the target; **45-second** cooldown. (Healing-on-cast component not confirmed on the live spell page this pass — see Known Gaps.)
- **Shadowfury** (ID 30283) — **AoE stun** (8-yard radius); **1-minute** cooldown.
- **Banish** — single-target incapacitate vs Demon/Elemental enemies. (ID not confirmed live.)

### Dispels
- **Felhunter — Devour Magic** (pet ability): removes a beneficial magic effect from an enemy and a harmful magic effect from a friendly target (an offensive purge + a friendly magic dispel), pet-dependent like Spell Lock. (ID not confirmed live.)
- The warlock has **no class-wide friendly dispel** of curses/poisons/diseases; magic-removal capability is tied to the Felhunter's Devour Magic.
- RaidLens usage: do not expect a Destruction Warlock to cover dispel assignments unless the pull shows a Felhunter present.

### Externals / raid buffs / debuffs
- **No single-target external defensive** (no damage-reduction or immunity cast on another player).
- **Healthstone** — raid-wide on-demand heal item (the closest thing to a "raid utility heal").
- **Demonic Gateway** (ID 111771) — group teleport portal; positioning/skip utility.
- Curse debuffs on enemies: **Curse of Weakness** (reduces enemy damage done) and **Curse of Tongues** (slows enemy cast speed) are available utility curses. (Exact IDs not confirmed live this pass — see Known Gaps.)

### Movement tools
- **Demonic Circle** (ID 48018) — place an anchor, then teleport back to it.
- **Demonic Gateway** (ID 111771) — see above.
- **Burning Rush** — toggle run-speed increase at the cost of health drain.

---

## Consumables and Enchants

Specifics for 12.0.5 (exact flask/food/rune/weapon-enchant item names and IDs, and the gem/enchant set) **could not be confirmed live this pass** — the Wowhead consumables/enchants sub-page body did not render through the fetch tool and individual item pages were rate-limited. Conceptually:
- **Healthstone** — Create Healthstone produces a personal/raid heal stone; the warlock should create one each pull. (Spell ID not confirmed live — see Known Gaps.)
- Standard raid prep applies (intellect flask, intellect/secondary food, weapon enchant/oil, augment rune, gems and gear enchants) but the **exact current item names/IDs for 12.0.5 are not verified here** and must not be invented. See Known Gaps.

---

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Diabolist**, **Hellcaller**.

Metrics were not captured in the source data (metrics field is empty for both variants); DPS/HPS figures are unavailable from this SimC run.

### Talent Import Strings

**Diabolist:**
```
CsQAAAAAAAAAAAAAAAAAAAAAAwMzMzoZjhZmZmlZxMzMLGjFzAAgZmxMzsYBzMjZWWGNzMsNsNbNWYAAgxAjNAMzMzAzMGDAAAzMzMAAGDD
```

**Hellcaller:**
```
CsQAAAAAAAAAAAAAAAAAAAAAAwMzMzoZjhZmZmlZxMzMLGjFzAAgZmxMzsYBGYWMaMDgZL2YAAgxAjNAgZGYmxYAAAYmZmBAwYYA
```

### Damage Distribution (SimC, share of total damage)

Rows with a real "%" value only; parenthesised values used where the direct column shows 0 (proc/pet damage routed through the ability). Sorted high to low.

**Diabolist variant:**

| Ability | % of damage |
|---|---|
| Shadowburn | 12.6% |
| Incinerate | 11.7% |
| Conflagrate | 10.0% |
| Diabolic Oculi (Diabolist proc) | 8.7% |
| Embers of Nihilam | 4.7% |
| Soul Fire | 4.5% |
| Immolate (direct + DoT) | 3.1% |
| Chaos Bolt | 3.0% |
| Wicked Cleave (Overlord pet) | 2.1% |
| Chaos Salvo (Mother of Chaos pet) | 2.0% |
| Felseeker (Pit Lord pet) | 2.0% |
| Voidstalker Sting | 0.9% |
| Twilight Barrage | 0.6% |

**Hellcaller variant:**

| Ability | % of damage |
|---|---|
| Incinerate | 14.2% |
| Shadowburn | 12.7% |
| Conflagrate | 10.7% |
| Wither (direct + DoT) | 6.1% |
| Soul Fire | 4.8% |
| Embers of Nihilam | 4.7% |
| Chaos Bolt | 3.6% |
| Infernal Immolation (pet) | 2.3% |
| Malevolence proc | 1.1% |
| Voidstalker Sting | 1.1% |

### Action Priority List — Warlock Destruction Diabolist

```
actions.precombat=summon_pet
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.summon_infernal.duration=0|cooldown.summon_infernal.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.summon_infernal.duration=0|cooldown.summon_infernal.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_buff_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_buff_duration,value=trinket.2.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_buff_duration)*(1+0.5*trinket.2.has_buff.intellect)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%variable.trinket_1_buff_duration)*(1+0.5*trinket.1.has_buff.intellect)*(variable.trinket_1_sync))
actions.precombat+=/grimoire_of_sacrifice,if=talent.grimoire_of_sacrifice.enabled
actions.precombat+=/snapshot_stats
actions.precombat+=/cataclysm,if=active_enemies>=2&raid_event.adds.in>15
actions.precombat+=/soul_fire
actions.precombat+=/cataclysm
actions.precombat+=/immolate,if=active_enemies>=2&talent.roaring_blaze
actions.precombat+=/incinerate

# Executed every time the actor is available.
actions=call_action_list,name=variables
actions+=/call_action_list,name=ogcd
actions+=/call_action_list,name=items
actions+=/call_action_list,name=aoe_hc,if=active_enemies>=2&talent.wither
actions+=/call_action_list,name=aoe_dia,if=active_enemies>=2&talent.diabolic_ritual
actions+=/soul_fire,if=soul_shard<=4
actions+=/chaos_bolt,if=talent.diabolic_ritual&(demonic_art|(variable.ritual_length<action.chaos_bolt.execute_time))&target.health.pct>20
actions+=/conflagrate,if=soul_shard<=4.2&buff.backdraft.stack<1
actions+=/summon_infernal
actions+=/malevolence
actions+=/incinerate,if=buff.chaotic_inferno_buff.up&soul_shard<=4.6
actions+=/shadowburn,if=((!demonic_art&(variable.ritual_length>2|talent.wither))|target.health.pct<=20)&(buff.fiendish_cruelty.up|talent.conflagration_of_chaos)&(!talent.wither|soul_shard>=4|buff.malevolence.up|pet.infernal.active|fight_remains<=15)
actions+=/wither,if=(((dot.wither.remains-5*(action.chaos_bolt.in_flight&talent.internal_combustion))<dot.wither.duration*0.3)|refreshable|(dot.wither.remains-action.chaos_bolt.execute_time)<5&talent.internal_combustion&action.chaos_bolt.usable)&(!talent.soul_fire|cooldown.soul_fire.remains+action.soul_fire.cast_time>(dot.wither.remains-5*talent.internal_combustion))&(!talent.cataclysm|(cooldown.cataclysm.remains+action.cataclysm.cast_time)>dot.wither.remains)&target.time_to_die>8
actions+=/immolate,if=(((dot.immolate.remains-5*(action.chaos_bolt.in_flight&talent.internal_combustion))<dot.immolate.duration*0.3)|refreshable|(dot.immolate.remains-action.chaos_bolt.execute_time)<5&talent.internal_combustion&action.chaos_bolt.usable)&(!talent.soul_fire|cooldown.soul_fire.remains+action.soul_fire.cast_time>(dot.immolate.remains-5*talent.internal_combustion))&(!talent.cataclysm|cooldown.cataclysm.remains>dot.immolate.remains)&target.time_to_die>8
actions+=/ruination
actions+=/cataclysm,if=talent.lake_of_fire
actions+=/chaos_bolt,if=(talent.wither&(soul_shard>=4|buff.malevolence.up|pet.infernal.active|fight_remains<=15))|(talent.diabolic_ritual&variable.ritual_length>4)
actions+=/infernal_bolt,if=soul_shard<=3
actions+=/incinerate

actions.aoe_dia=summon_infernal
actions.aoe_dia+=/chaos_bolt,if=talent.diabolic_ritual&(demonic_art|(variable.ritual_length<action.chaos_bolt.execute_time))&target.health.pct>20&active_enemies<=4
actions.aoe_dia+=/rain_of_fire,if=((soul_shard>=(3.5-0.1*(active_dot.immolate)))|buff.alythesss_ire.up)&active_enemies>=4
actions.aoe_dia+=/conflagrate,target_if=max:(dot.immolate.remains-99*debuff.havoc.remains),if=dot_refreshable_count.immolate>0&!dot.immolate.refreshable
actions.aoe_dia+=/shadowburn,target_if=min:(time_to_die+999*debuff.havoc.remains),if=(active_enemies<=(3+buff.fiendish_cruelty.up))|(talent.conflagration_of_chaos&active_enemies<=(6-talent.destructive_rapidity+buff.fiendish_cruelty.up))
actions.aoe_dia+=/ruination
actions.aoe_dia+=/cataclysm,if=raid_event.adds.in>15|talent.lake_of_fire
actions.aoe_dia+=/havoc,target_if=min:((-target.time_to_die)<?-15)+dot.immolate.remains+99*(self.target=target),if=(!cooldown.summon_infernal.up|!talent.summon_infernal)&target.time_to_die>8|time<5
actions.aoe_dia+=/infernal_bolt,if=soul_shard<3
actions.aoe_dia+=/chaos_bolt,if=active_enemies<=3&variable.ritual_length>4
actions.aoe_dia+=/soul_fire,target_if=min:(dot.immolate.remains+100*debuff.havoc.remains),if=soul_shard<4&(talent.avatar_of_destruction&active_enemies<=10|active_enemies<=5)
actions.aoe_dia+=/immolate,target_if=min:dot.immolate.remains+99*debuff.havoc.remains,if=dot.immolate.refreshable&(!talent.cataclysm.enabled|cooldown.cataclysm.remains>dot.immolate.remains)&active_dot.immolate<=5&!talent.cataclysm&target.time_to_die>18
actions.aoe_dia+=/conflagrate,target_if=max:(dot.immolate.remains-99*debuff.havoc.remains),if=buff.backdraft.stack<2|!talent.backdraft
actions.aoe_dia+=/incinerate

actions.aoe_hc=summon_infernal
actions.aoe_hc+=/malevolence
actions.aoe_hc+=/rain_of_fire,if=(soul_shard>=(4.0-0.1*(active_dot.wither)))&active_enemies>=(5-talent.destructive_rapidity)
actions.aoe_hc+=/conflagrate,target_if=max:(dot.wither.remains-99*debuff.havoc.remains),if=dot_refreshable_count.wither>0&!dot.wither.refreshable
actions.aoe_hc+=/shadowburn,target_if=min:(time_to_die+999*debuff.havoc.remains),if=buff.fiendish_cruelty.up|(talent.conflagration_of_chaos&((active_enemies<=5&talent.destructive_rapidity)|(active_enemies<=6&!talent.destructive_rapidity)))
actions.aoe_hc+=/cataclysm,if=raid_event.adds.in>15
actions.aoe_hc+=/havoc,target_if=min:((-target.time_to_die)<?-15)+dot.wither.remains+99*(self.target=target),if=(!cooldown.summon_infernal.up|!talent.summon_infernal)&target.time_to_die>8&(cooldown.malevolence.remains>15|!talent.malevolence)|time<5
actions.aoe_hc+=/rain_of_fire,if=active_enemies>=(5-talent.destructive_rapidity)
actions.aoe_hc+=/chaos_bolt,if=active_enemies<=(4-talent.destructive_rapidity)
actions.aoe_hc+=/soul_fire,target_if=min:(dot.wither.remains+100*debuff.havoc.remains),if=soul_shard<4&(active_enemies<=8|talent.avatar_of_destruction)
actions.aoe_hc+=/wither,target_if=min:dot.wither.remains+99*debuff.havoc.remains,if=dot.wither.refreshable&(!talent.cataclysm.enabled|cooldown.cataclysm.remains>dot.wither.remains)&active_dot.wither<=active_enemies&target.time_to_die>8
actions.aoe_hc+=/incinerate,if=talent.fire_and_brimstone&buff.backdraft.up
actions.aoe_hc+=/conflagrate,target_if=max:(dot.wither.remains-99*debuff.havoc.remains),if=buff.backdraft.stack<2|!talent.backdraft
actions.aoe_hc+=/incinerate

actions.items=use_item,slot=trinket1,if=(variable.infernal_active|!talent.summon_infernal|variable.trinket_1_will_lose_cast)&(variable.trinket_priority=1|!trinket.2.has_cooldown|(trinket.2.cooldown.remains|variable.trinket_priority=2&cooldown.summon_infernal.remains>20&!variable.infernal_active&trinket.2.cooldown.remains<cooldown.summon_infernal.remains))&variable.trinket_1_buffs|(variable.trinket_1_buff_duration+1>=fight_remains)
actions.items+=/use_item,slot=trinket2,if=(variable.infernal_active|!talent.summon_infernal|variable.trinket_2_will_lose_cast)&(variable.trinket_priority=2|!trinket.1.has_cooldown|(trinket.1.cooldown.remains|variable.trinket_priority=1&cooldown.summon_infernal.remains>20&!variable.infernal_active&trinket.1.cooldown.remains<cooldown.summon_infernal.remains))&variable.trinket_2_buffs|(variable.trinket_2_buff_duration+1>=fight_remains)
actions.items+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs)|talent.summon_infernal&cooldown.summon_infernal.remains_expected>20&!prev_gcd.1.summon_infernal|!talent.summon_infernal)
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs)|talent.summon_infernal&cooldown.summon_infernal.remains_expected>20&!prev_gcd.1.summon_infernal|!talent.summon_infernal)
actions.items+=/use_item,use_off_gcd=1,slot=main_hand

actions.ogcd=potion,if=variable.infernal_active|!talent.summon_infernal
actions.ogcd+=/invoke_external_buff,name=power_infusion,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.invoke_power_infusion_0.duration&fight_remains>cooldown.invoke_power_infusion_0.duration)|fight_remains<cooldown.summon_infernal.remains_expected+15
actions.ogcd+=/berserking,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<(cooldown.summon_infernal.remains_expected+cooldown.berserking.duration)&(fight_remains>cooldown.berserking.duration))|fight_remains<cooldown.summon_infernal.remains_expected
actions.ogcd+=/blood_fury,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.blood_fury.duration&fight_remains>cooldown.blood_fury.duration)|fight_remains<cooldown.summon_infernal.remains
actions.ogcd+=/fireblood,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.fireblood.duration&fight_remains>cooldown.fireblood.duration)|fight_remains<cooldown.summon_infernal.remains_expected
actions.ogcd+=/ancestral_call,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<(cooldown.summon_infernal.remains_expected+cooldown.berserking.duration)&(fight_remains>cooldown.berserking.duration))|fight_remains<cooldown.summon_infernal.remains_expected

actions.variables=variable,name=infernal_active,op=set,value=pet.infernal.active|(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains)<20
actions.variables+=/variable,name=ritual_length,value=buff.diabolic_ritual_mother_of_chaos.remains+buff.diabolic_ritual_overlord.remains+buff.diabolic_ritual_pit_lord.remains,default=0,op=set
actions.variables+=/variable,name=trinket_1_will_lose_cast,value=((floor((fight_remains%trinket.1.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(floor((fight_remains%trinket.1.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_infernal.remains)%trinket.1.cooldown.duration)+1))|((floor((fight_remains%trinket.1.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(((fight_remains-cooldown.summon_infernal.remains%%trinket.1.cooldown.duration)-cooldown.summon_infernal.remains-variable.trinket_1_buff_duration)>0)))&cooldown.summon_infernal.remains>20
actions.variables+=/variable,name=trinket_2_will_lose_cast,value=((floor((fight_remains%trinket.2.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(floor((fight_remains%trinket.2.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_infernal.remains)%trinket.2.cooldown.duration)+1))|((floor((fight_remains%trinket.2.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(((fight_remains-cooldown.summon_infernal.remains%%trinket.2.cooldown.duration)-cooldown.summon_infernal.remains-variable.trinket_2_buff_duration)>0)))&cooldown.summon_infernal.remains>20
```

### Action Priority List — Warlock Destruction Hellcaller

```
actions.precombat=summon_pet
actions.precombat+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff
actions.precombat+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff
actions.precombat+=/variable,name=trinket_1_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_1_buffs&(trinket.1.cooldown.duration%%cooldown.summon_infernal.duration=0|cooldown.summon_infernal.duration%%trinket.1.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_2_sync,op=setif,value=1,value_else=0.5,condition=variable.trinket_2_buffs&(trinket.2.cooldown.duration%%cooldown.summon_infernal.duration=0|cooldown.summon_infernal.duration%%trinket.2.cooldown.duration=0)
actions.precombat+=/variable,name=trinket_1_buff_duration,value=trinket.1.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_2_buff_duration,value=trinket.2.proc.any_dps.duration
actions.precombat+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.cooldown.duration%variable.trinket_2_buff_duration)*(1+0.5*trinket.2.has_buff.intellect)*(variable.trinket_2_sync))>((trinket.1.cooldown.duration%variable.trinket_1_buff_duration)*(1+0.5*trinket.1.has_buff.intellect)*(variable.trinket_1_sync))
actions.precombat+=/grimoire_of_sacrifice,if=talent.grimoire_of_sacrifice.enabled
actions.precombat+=/snapshot_stats
actions.precombat+=/cataclysm,if=active_enemies>=2&raid_event.adds.in>15
actions.precombat+=/soul_fire
actions.precombat+=/cataclysm
actions.precombat+=/immolate,if=active_enemies>=2&talent.roaring_blaze
actions.precombat+=/incinerate

# Executed every time the actor is available.
actions=call_action_list,name=variables
actions+=/call_action_list,name=ogcd
actions+=/call_action_list,name=items
actions+=/call_action_list,name=aoe_hc,if=active_enemies>=2&talent.wither
actions+=/call_action_list,name=aoe_dia,if=active_enemies>=2&talent.diabolic_ritual
actions+=/soul_fire,if=soul_shard<=4
actions+=/chaos_bolt,if=talent.diabolic_ritual&(demonic_art|(variable.ritual_length<action.chaos_bolt.execute_time))&target.health.pct>20
actions+=/conflagrate,if=soul_shard<=4.2&buff.backdraft.stack<1
actions+=/summon_infernal
actions+=/malevolence
actions+=/incinerate,if=buff.chaotic_inferno_buff.up&soul_shard<=4.6
actions+=/shadowburn,if=((!demonic_art&(variable.ritual_length>2|talent.wither))|target.health.pct<=20)&(buff.fiendish_cruelty.up|talent.conflagration_of_chaos)&(!talent.wither|soul_shard>=4|buff.malevolence.up|pet.infernal.active|fight_remains<=15)
actions+=/wither,if=(((dot.wither.remains-5*(action.chaos_bolt.in_flight&talent.internal_combustion))<dot.wither.duration*0.3)|refreshable|(dot.wither.remains-action.chaos_bolt.execute_time)<5&talent.internal_combustion&action.chaos_bolt.usable)&(!talent.soul_fire|cooldown.soul_fire.remains+action.soul_fire.cast_time>(dot.wither.remains-5*talent.internal_combustion))&(!talent.cataclysm|(cooldown.cataclysm.remains+action.cataclysm.cast_time)>dot.wither.remains)&target.time_to_die>8
actions+=/immolate,if=(((dot.immolate.remains-5*(action.chaos_bolt.in_flight&talent.internal_combustion))<dot.immolate.duration*0.3)|refreshable|(dot.immolate.remains-action.chaos_bolt.execute_time)<5&talent.internal_combustion&action.chaos_bolt.usable)&(!talent.soul_fire|cooldown.soul_fire.remains+action.soul_fire.cast_time>(dot.immolate.remains-5*talent.internal_combustion))&(!talent.cataclysm|cooldown.cataclysm.remains>dot.immolate.remains)&target.time_to_die>8
actions+=/ruination
actions+=/cataclysm,if=talent.lake_of_fire
actions+=/chaos_bolt,if=(talent.wither&(soul_shard>=4|buff.malevolence.up|pet.infernal.active|fight_remains<=15))|(talent.diabolic_ritual&variable.ritual_length>4)
actions+=/infernal_bolt,if=soul_shard<=3
actions+=/incinerate

actions.aoe_dia=summon_infernal
actions.aoe_dia+=/chaos_bolt,if=talent.diabolic_ritual&(demonic_art|(variable.ritual_length<action.chaos_bolt.execute_time))&target.health.pct>20&active_enemies<=4
actions.aoe_dia+=/rain_of_fire,if=((soul_shard>=(3.5-0.1*(active_dot.immolate)))|buff.alythesss_ire.up)&active_enemies>=4
actions.aoe_dia+=/conflagrate,target_if=max:(dot.immolate.remains-99*debuff.havoc.remains),if=dot_refreshable_count.immolate>0&!dot.immolate.refreshable
actions.aoe_dia+=/shadowburn,target_if=min:(time_to_die+999*debuff.havoc.remains),if=(active_enemies<=(3+buff.fiendish_cruelty.up))|(talent.conflagration_of_chaos&active_enemies<=(6-talent.destructive_rapidity+buff.fiendish_cruelty.up))
actions.aoe_dia+=/ruination
actions.aoe_dia+=/cataclysm,if=raid_event.adds.in>15|talent.lake_of_fire
actions.aoe_dia+=/havoc,target_if=min:((-target.time_to_die)<?-15)+dot.immolate.remains+99*(self.target=target),if=(!cooldown.summon_infernal.up|!talent.summon_infernal)&target.time_to_die>8|time<5
actions.aoe_dia+=/infernal_bolt,if=soul_shard<3
actions.aoe_dia+=/chaos_bolt,if=active_enemies<=3&variable.ritual_length>4
actions.aoe_dia+=/soul_fire,target_if=min:(dot.immolate.remains+100*debuff.havoc.remains),if=soul_shard<4&(talent.avatar_of_destruction&active_enemies<=10|active_enemies<=5)
actions.aoe_dia+=/immolate,target_if=min:dot.immolate.remains+99*debuff.havoc.remains,if=dot.immolate.refreshable&(!talent.cataclysm.enabled|cooldown.cataclysm.remains>dot.immolate.remains)&active_dot.immolate<=5&!talent.cataclysm&target.time_to_die>18
actions.aoe_dia+=/conflagrate,target_if=max:(dot.immolate.remains-99*debuff.havoc.remains),if=buff.backdraft.stack<2|!talent.backdraft
actions.aoe_dia+=/incinerate

actions.aoe_hc=summon_infernal
actions.aoe_hc+=/malevolence
actions.aoe_hc+=/rain_of_fire,if=(soul_shard>=(4.0-0.1*(active_dot.wither)))&active_enemies>=(5-talent.destructive_rapidity)
actions.aoe_hc+=/conflagrate,target_if=max:(dot.wither.remains-99*debuff.havoc.remains),if=dot_refreshable_count.wither>0&!dot.wither.refreshable
actions.aoe_hc+=/shadowburn,target_if=min:(time_to_die+999*debuff.havoc.remains),if=buff.fiendish_cruelty.up|(talent.conflagration_of_chaos&((active_enemies<=5&talent.destructive_rapidity)|(active_enemies<=6&!talent.destructive_rapidity)))
actions.aoe_hc+=/cataclysm,if=raid_event.adds.in>15
actions.aoe_hc+=/havoc,target_if=min:((-target.time_to_die)<?-15)+dot.wither.remains+99*(self.target=target),if=(!cooldown.summon_infernal.up|!talent.summon_infernal)&target.time_to_die>8&(cooldown.malevolence.remains>15|!talent.malevolence)|time<5
actions.aoe_hc+=/rain_of_fire,if=active_enemies>=(5-talent.destructive_rapidity)
actions.aoe_hc+=/chaos_bolt,if=active_enemies<=(4-talent.destructive_rapidity)
actions.aoe_hc+=/soul_fire,target_if=min:(dot.wither.remains+100*debuff.havoc.remains),if=soul_shard<4&(active_enemies<=8|talent.avatar_of_destruction)
actions.aoe_hc+=/wither,target_if=min:dot.wither.remains+99*debuff.havoc.remains,if=dot.wither.refreshable&(!talent.cataclysm.enabled|cooldown.cataclysm.remains>dot.wither.remains)&active_dot.wither<=active_enemies&target.time_to_die>8
actions.aoe_hc+=/incinerate,if=talent.fire_and_brimstone&buff.backdraft.up
actions.aoe_hc+=/conflagrate,target_if=max:(dot.wither.remains-99*debuff.havoc.remains),if=buff.backdraft.stack<2|!talent.backdraft
actions.aoe_hc+=/incinerate

actions.items=use_item,slot=trinket1,if=(variable.infernal_active|!talent.summon_infernal|variable.trinket_1_will_lose_cast)&(variable.trinket_priority=1|!trinket.2.has_cooldown|(trinket.2.cooldown.remains|variable.trinket_priority=2&cooldown.summon_infernal.remains>20&!variable.infernal_active&trinket.2.cooldown.remains<cooldown.summon_infernal.remains))&variable.trinket_1_buffs|(variable.trinket_1_buff_duration+1>=fight_remains)
actions.items+=/use_item,slot=trinket2,if=(variable.infernal_active|!talent.summon_infernal|variable.trinket_2_will_lose_cast)&(variable.trinket_priority=2|!trinket.1.has_cooldown|(trinket.1.cooldown.remains|variable.trinket_priority=1&cooldown.summon_infernal.remains>20&!variable.infernal_active&trinket.1.cooldown.remains<cooldown.summon_infernal.remains))&variable.trinket_2_buffs|(variable.trinket_2_buff_duration+1>=fight_remains)
actions.items+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(!variable.trinket_1_buffs&(trinket.2.cooldown.remains|!variable.trinket_2_buffs)|talent.summon_infernal&cooldown.summon_infernal.remains_expected>20&!prev_gcd.1.summon_infernal|!talent.summon_infernal)
actions.items+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(!variable.trinket_2_buffs&(trinket.1.cooldown.remains|!variable.trinket_1_buffs)|talent.summon_infernal&cooldown.summon_infernal.remains_expected>20&!prev_gcd.1.summon_infernal|!talent.summon_infernal)
actions.items+=/use_item,use_off_gcd=1,slot=main_hand

actions.ogcd=potion,if=variable.infernal_active|!talent.summon_infernal
actions.ogcd+=/invoke_external_buff,name=power_infusion,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.invoke_power_infusion_0.duration&fight_remains>cooldown.invoke_power_infusion_0.duration)|fight_remains<cooldown.summon_infernal.remains_expected+15
actions.ogcd+=/berserking,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<(cooldown.summon_infernal.remains_expected+cooldown.berserking.duration)&(fight_remains>cooldown.berserking.duration))|fight_remains<cooldown.summon_infernal.remains_expected
actions.ogcd+=/blood_fury,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.blood_fury.duration&fight_remains>cooldown.blood_fury.duration)|fight_remains<cooldown.summon_infernal.remains
actions.ogcd+=/fireblood,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<cooldown.summon_infernal.remains_expected+10+cooldown.fireblood.duration&fight_remains>cooldown.fireblood.duration)|fight_remains<cooldown.summon_infernal.remains_expected
actions.ogcd+=/ancestral_call,if=variable.infernal_active|!talent.summon_infernal|(fight_remains<(cooldown.summon_infernal.remains_expected+cooldown.berserking.duration)&(fight_remains>cooldown.berserking.duration))|fight_remains<cooldown.summon_infernal.remains_expected

actions.variables=variable,name=infernal_active,op=set,value=pet.infernal.active|(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains)<20
actions.variables+=/variable,name=ritual_length,value=buff.diabolic_ritual_mother_of_chaos.remains+buff.diabolic_ritual_overlord.remains+buff.diabolic_ritual_pit_lord.remains,default=0,op=set
actions.variables+=/variable,name=trinket_1_will_lose_cast,value=((floor((fight_remains%trinket.1.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(floor((fight_remains%trinket.1.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_infernal.remains)%trinket.1.cooldown.duration)+1))|((floor((fight_remains%trinket.1.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(((fight_remains-cooldown.summon_infernal.remains%%trinket.1.cooldown.duration)-cooldown.summon_infernal.remains-variable.trinket_1_buff_duration)>0)))&cooldown.summon_infernal.remains>20
actions.variables+=/variable,name=trinket_2_will_lose_cast,value=((floor((fight_remains%trinket.2.cooldown.duration)+1)!=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(floor((fight_remains%trinket.2.cooldown.duration)+1))!=(floor(((fight_remains-cooldown.summon_infernal.remains)%trinket.2.cooldown.duration)+1))|((floor((fight_remains%trinket.2.cooldown.duration)+1)=floor((fight_remains+(cooldown.summon_infernal.duration-cooldown.summon_infernal.remains))%cooldown.summon_infernal.duration))&(((fight_remains-cooldown.summon_infernal.remains%%trinket.2.cooldown.duration)-cooldown.summon_infernal.remains-variable.trinket_2_buff_duration)>0)))&cooldown.summon_infernal.remains>20
```

### RaidLens Interpretation

For both variants, **Shadowburn, Incinerate, and Conflagrate** together account for roughly 35-38% of total damage — they are the spine of the rotation. In a log, if these three collectively read low while Incinerate filler dominates, it likely signals that the player is not banking Shadowburn procs or is wasting shard spenders.

For Diabolist, **Diabolic Oculi** at ~8.7% is the single largest non-core source; if that is absent or very low, it suggests Diabolic Ritual is not being triggered consistently. The three Diabolist demon summons (Overlord/Mother of Chaos/Pit Lord) each contribute ~2% — all three should appear.

For Hellcaller, **Wither at ~6.1%** (vs Immolate's ~3.1% for Diabolist) reflects that Hellcaller's DoT is empowered and stacks; a Hellcaller log where the DoT contribution is very low suggests poor Wither/Malevolence alignment. **Embers of Nihilam** (~4.7% in both trees) is a meaningful proc source that should appear in every log — its absence may indicate a talent is not selected.

---

## Notes and Known Gaps

Unconfirmed facts (named without an ID per sourcing rules — do not treat the missing IDs as "no ID exists," only as "not verified this session"):

- **Wither** (Hellcaller DoT) — ability is real and central to Hellcaller; spell ID NOT confirmed on a live Wowhead page (page returned HTTP 403). method.gg prose referenced an ID but it was not verified directly.
- **Malevolence** (Hellcaller cooldown) — ~1-minute recharge per the rotation guide; spell ID NOT confirmed on a live Wowhead page (403). method.gg referenced ID 430014 but this was not directly verified on Wowhead, so it is intentionally omitted above.
- **Inferno** (talent reducing Summon Infernal CD to ~90s) — method.gg referenced ID 270545; NOT directly verified on Wowhead, so omitted.
- **Soul Fire** — spell ID NOT confirmed (Wowhead page rate-limited, 403).
- **Cataclysm** and **Channel Demonfire** — spell IDs NOT confirmed (Wowhead pages rate-limited, 403).
- **Embers of Nihilam** — present in SimC data for both hero trees at ~4.7%; spell ID NOT confirmed on a live Wowhead page. Treat as a real rotational ability.
- **Backdraft**, **Soul Leech**, **Soul Link**, **Banish**, **Burning Rush**, **Devour Magic**, **Curse of Weakness** (referenced as 702), **Curse of Tongues** (referenced as 1714), **Create Healthstone** (referenced as 6201) — IDs NOT confirmed live this pass (rate-limited). Names are correct; IDs omitted deliberately.
- **Unending Resolve** value — the live spell page showed **-25% / 8s / 3-min CD**; some class guides cite a larger reduction with a talent. The talented value is unconfirmed; the baseline value above is from the live spell page.
- **Mortal Coil** healing component — the spell page did not surface a heal-on-cast this pass; in prior expansions Mortal Coil healed the warlock. Treat the heal as unconfirmed for 12.0.5.
- **Diabolist hero tree** (Diabolic Ritual / Ruination / Diabolic Oculi / demon summons) — mechanics described at a high level from SimC data; spell IDs for all Diabolist abilities not confirmed live.
- **Voidstalker Sting** — appears in SimC data for both variants (~0.9–1.1%); spell ID not confirmed on a live Wowhead page. May be a talent or proc tied to a specific build.
- **Twilight Barrage** — appears in Diabolist SimC data (0.6%); spell ID not confirmed. Likely a Diabolist-specific proc.
- **Consumables/enchants/gems for 12.0.5** — not verified; do not populate without live confirmation.
- **SimC APL** — SimC APL now embedded (extracted from Trivial.txt).

Confirmed-on-live-Wowhead-spell-page IDs used in this guide: Immolate 348, Conflagrate 17962, Incinerate 29722, Chaos Bolt 116858, Shadowburn 17877, Rain of Fire 5740, Havoc 80240, Summon Infernal 1122, Unending Resolve 104773, Dark Pact 108416, Spell Lock 19647, Shadowfury 30283, Mortal Coil 6789, Fear 5782, Soulstone 20707, Demonic Gateway 111771, Demonic Circle 48018.

**Maintenance flag:** Re-verify all abilities, cooldowns, and IDs after any 12.x patch (talent reworks and hero-tree tuning are common). Especially re-check Summon Infernal cooldown, Unending Resolve value, the Spell Lock interrupt cooldown, and the unconfirmed hero-tree IDs (Wither, Malevolence, Inferno, Embers of Nihilam, Voidstalker Sting, Twilight Barrage) on live Wowhead spell pages once the rate limit clears.
