# Vengeance Demon Hunter — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/demon-hunter/vengeance/overview-pve-tank
> - https://www.wowhead.com/guide/classes/demon-hunter/vengeance/abilities-talents-pve-tank
> - https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-spell-summary
> - https://www.method.gg/guides/vengeance-demon-hunter/playstyle-and-rotation
> - https://maxroll.gg/wow/class-guides/vengeance-demon-hunter-mythic-plus-guide
> - Individual Wowhead spell pages (one per confirmed SpellID — see Abilities Reference)
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Vengeance Demon Hunter is the Demon Hunter tank specialization. It is a builder/spender
melee tank: it generates **Soul Fragments** and **Fury** with builder abilities (primarily
Fracture, Immolation Aura, Sigil of Flame) and spends them on Soul Cleave (single-target /
small cleave heal + damage) and Spirit Bomb (AoE damage + self-shielding). Picking up Soul
Fragments and feeding them into spenders is the core of both its damage and its active
mitigation.

Core gameplay loop:
1. Build Fury and spawn Soul Fragments (Fracture, Immolation Aura, Sigil of Flame).
2. Consume Soul Fragments via Soul Cleave (heal) or Spirit Bomb (AoE + absorb).
3. Layer active mitigation — Demon Spikes for physical, Fiery Brand for a damage window,
   Metamorphosis for a large health/armor bump.

Survivability profile: Vengeance is a strong self-sustain tank. Its effective health comes
from a 40% Metamorphosis health swing, Demon Spikes armor/parry, and Fiery Brand damage
reduction, while its healing comes from Soul Cleave, Fel Devastation, and consuming Soul
Fragments. It is described as an aggressive tank because much of its mitigation and healing
requires staying in melee on the target.

Primary weakness: mitigation is reactive and resource-gated. If the player is starved of
Fury / Soul Fragments, or is forced off the boss (out of melee), the self-healing and Demon
Spikes uptime drop sharply, leaving it spiky against sustained magic or burst that arrives
while Demon Spikes / Fiery Brand are on cooldown.

## Role in Raid

- **Role:** Tank (active mitigation melee tank). Not a healer, not a DPS.
- **Bloodlust/Heroism:** Does NOT provide a Bloodlust-equivalent.
- **Battle res:** Does NOT provide a combat resurrection.
- **Raid buffs/debuffs:** Vengeance brings no unique raid-wide stat buff. Per the sources
  it offers "no raid-wide buffs or significant group dispels." (See Known Gaps — verify
  whether any Hero Talent grants a group effect in 12.0.5.)
- **Group defensive / external:** **Darkness** is its notable raid-contribution defensive —
  a ground-targeted zone giving allies inside a chance to fully negate incoming damage. It
  has no single-target external (no hand-of-protection style ability).
- **Mobility:** High. Infernal Strike (charge leap) and Vengeful Retreat give strong
  repositioning; The Hunt is a long-range gap-closer.

## Abilities Reference

SpellIDs below were each confirmed on the corresponding live Wowhead spell page. Where a
cooldown reads "no fixed cooldown," the ability is on the global cooldown / charge system or
is talent-modified.

**Builders / core damage**
- **Fracture** — SpellID 263642. Melee strike, generates ~25 Fury and Soul Fragments. No
  fixed cooldown (charge-based). Primary Fury/fragment generator.
- **Immolation Aura** — SpellID 258920. Instant burst of Fire damage then a 6-second AoE
  damage-over-time aura; generates Fury. Short (~GCD-gated/charge) cooldown.
- **Sigil of Flame** — SpellID 204596. Ground sigil dealing Fire damage and applying a DoT;
  generates Fury. Builder and a small ranged pull tool.
- **Soul Cleave** — SpellID 228477. Spender, costs ~35 Fury. Damages up to 5 enemies in
  front, consumes available Soul Fragments, and heals the Demon Hunter. Primary single-target
  spender and self-heal.
- **Spirit Bomb** — SpellID 247454. Spender, costs ~40 Fury, consumes up to 5 Soul
  Fragments to deal AoE Fire damage and apply a damage-over-time/absorb component. Primary
  AoE spender.
- **Throw Glaive** — SpellID 204157. Ranged glaive throw, ricochets to a nearby additional
  enemy. Filler / ranged tag.

**Cooldowns (offensive + defensive)**
- **Fel Devastation** — SpellID 212084. ~40s cooldown, costs ~50 Fury. Channeled fel beam
  that deals heavy damage and heals while channeling. Both a damage cooldown and a healing
  tool. (Demon Hunter is interrupt-immune during the channel per the spell data.)
- **Metamorphosis** — SpellID 187827. ~2 min cooldown (the spell page lists the in-form
  buff). Demon form: +40% maximum health and a large armor increase for 15 seconds, plus
  increased ability damage. Major defensive + offensive cooldown.
- **The Hunt** — SpellID 370965. ~1.5 min cooldown. Long-range charge that deals damage and
  applies a damage-over-time effect; also a gap-closer.

**Active mitigation**
- **Demon Spikes** — SpellID 203720. Charge-based (recharge affected by Haste). Increases
  armor and grants parry for ~12 seconds. Primary physical active mitigation.
- **Fiery Brand** — SpellID 204021. Brands the Demon Hunter and reduces damage taken
  (sources cite ~40%) for ~12 seconds; also applies a Fire DoT to the target. Major
  scheduled mitigation window.

**Sigils / control**
- **Sigil of Silence** — SpellID 202137. Ground sigil that arms after a short delay and
  silences all enemies in the area. AoE silence (see Utility — this is a silence, not a
  single-target cast interrupt).
- **Sigil of Misery** — SpellID 207684. Ground sigil that fears/disorients enemies in the
  area. AoE crowd control.
- **Sigil of Chains** — SpellID 202138. Ground sigil that pulls grouped enemies together and
  slows them. Positioning / utility.

**Other utility**
- **Torment** — SpellID 185245. Taunt; forces the target to attack the Demon Hunter.
- **Imprison** — SpellID 217832. ~45s cooldown single-target incapacitate on Demon, Beast,
  and Humanoid enemies.
- **Chaos Nova** — SpellID 179057. ~45s cooldown, costs ~25 Fury. AoE stun around the Demon
  Hunter.
- **Consume Magic** — SpellID 278326. ~10s cooldown. Purges one beneficial Magic effect from
  an ENEMY (offensive purge — not a friendly dispel; see Utility).
- **Infernal Strike** — SpellID 189110. Charge-based leap to a target location dealing Fire
  damage on landing. Primary mobility.
- **Darkness** — SpellID 196718. 5 min cooldown. Ground zone giving allies inside a chance
  to fully negate incoming damage for the duration. Raid defensive (see Defensives).
- **Disrupt** — SpellID 183752. 15s cooldown. The spec's interrupt (see Utility).

**Key passives / mechanics**
- **Soul Fragments** — spawned by Fracture, Immolation Aura, and other abilities; consumed by
  Soul Cleave and Spirit Bomb for healing/absorb and bonus damage. The fragment economy is
  central to both throughput and survivability.
- **Last Resort** — cheat-death passive (talent). When the Demon Hunter would die, it instead
  triggers a brief Metamorphosis instead of dying, on a long internal cooldown.
- **Soul Barrier** — absorb shield tied to Spirit Bomb / Soul Fragment consumption (see Known
  Gaps for exact 12.0.5 wording — sourced from guide prose, no SpellID confirmed).

## Rotation / Priority

This is **logical priority ordering, not a DPS benchmark.** Exact ordering shifts with the
chosen Hero Talent tree (Aldrachi Reaver vs. the newer Annihilator path) and with talents.

**Opener (Aldrachi Reaver, per Method 12.0.5):**
1. Pre-cast Immolation Aura
2. Pre-place Sigil of Flame
3. Fiery Brand
4. Immolation Aura (on multiple targets)
5. Sigil of Spite (talent)
6. Reaver's Glaive (Hero Talent ability)
7. Fracture → empowered Soul Cleave

**Sustained single-target priority (conceptual):**
1. Keep Fiery Brand on cooldown for its mitigation + damage window.
2. Use Fel Devastation on cooldown for damage + healing.
3. Spend Fury before capping: Soul Cleave with 3+ Soul Fragments available.
4. Build with Fracture (charges) and Immolation Aura; refresh Sigil of Flame.
5. Fill with Throw Glaive when out of range or nothing else is available.

**AoE priority (conceptual):**
- Largely the same builders, but favor **Spirit Bomb** (consuming 4–5+ Soul Fragments) over
  Soul Cleave as the spender for AoE damage and the absorb component.
- Immolation Aura and Sigil of Flame gain extra value from multiple targets.
- Sources note the priority "stays relatively fixed regardless of target count" — the main
  change is spender choice (Spirit Bomb in AoE, Soul Cleave in single target).

## Defensives

Each entry includes a **RaidLens usage** note: how to judge from a log whether the player
used the defensive correctly relative to a damage window (a big spike of damage taken, or a
known scripted heavy-damage mechanic).

- **Demon Spikes** — SpellID 203720. Charge-based, ~12s duration, recharge scales with Haste.
  Armor + parry; the spec's primary PHYSICAL active mitigation.
  *RaidLens usage:* This should have high uptime during sustained melee/physical damage. Flag
  a player taking large *physical* hits while Demon Spikes was off and a charge was available.
  Because it is charge-based and frequent, judge by uptime over the pull rather than a single
  cast.

- **Fiery Brand** — SpellID 204021. ~12s, ~40% damage reduction (talent-modifiable).
  *RaidLens usage:* This is a scheduled, ~once-per-major-window cooldown. It should be lined
  up with a known heavy-damage moment (e.g. a tank-buster or a scripted raid hit on the
  tank). Flag a lethal/large hit landing on the tank while Fiery Brand was available and
  unused.

- **Metamorphosis** — SpellID 187827. ~2 min, 15s, +40% max health + large armor.
  *RaidLens usage:* Major personal defensive. Expect it on the heaviest tank-damage windows
  of a fight. Flag a death or near-death during a known heavy window where Metamorphosis was
  off cooldown and unused. Note it is also used offensively, so non-defensive usage is not
  automatically a mistake.

- **Fel Devastation** — SpellID 212084. ~40s, channeled, heals while channeling.
  *RaidLens usage:* Dual-purpose damage + heal. Treat as a self-heal cooldown: if the tank
  was dropping low and Fel Devastation was available and Fury permitted, expect it to be used.
  Do not treat a missing Fel Devastation as a defensive failure on its own — it is primarily
  rotational.

- **Darkness** — SpellID 196718. 5 min, ground zone, chance to fully negate damage for
  allies inside (raid defensive).
  *RaidLens usage:* This is the spec's RAID defensive. On fights with a known raid-wide burst,
  expect Darkness placed on the group for that window. Flag a raid-wide spike where Darkness
  was off cooldown and not used. Note its effect is a *chance* to negate, so it is mitigation,
  not a guaranteed immunity — judge intent (was it placed for the window), not per-hit outcome.

- **Soul Cleave self-heal** — SpellID 228477. Not a cooldown; the steady self-heal.
  *RaidLens usage:* Low Soul Cleave usage during a sustained-damage window can explain poor
  self-healing. Treat as a rotational/uptime signal, not a discrete cooldown to flag.

- **Soul Barrier** — absorb from Spirit Bomb / Soul Fragment consumption (talent; no SpellID
  confirmed live — see Known Gaps).
  *RaidLens usage:* If present in the player's build, AoE damage windows should show Spirit
  Bomb usage feeding the absorb. Treat as supporting evidence, not a hard flag.

- **Last Resort** — cheat-death passive (talent; no SpellID confirmed live).
  *RaidLens usage:* If a log shows Last Resort triggering, the tank already reached lethal
  damage — that is itself a red flag that an earlier active defensive (Demon Spikes / Fiery
  Brand / Metamorphosis) was missed or healing was insufficient.

## Utility

- **Interrupt — Disrupt (SpellID 183752, 15s cooldown).** This is the spec's interrupt and
  its ONLY single-target, cast-stopping kick. It interrupts the current cast and locks the
  target out of that magic school. **For RaidLens interrupt tracking, Disrupt is the ability
  to look for.** A missed assigned interrupt = Disrupt was available (off cooldown) and the
  enemy cast completed.
  - **Important distinction:** **Sigil of Silence (202137)** is an AoE *silence*, not a
    targeted interrupt. It prevents/stops casting for enemies caught in the sigil and can
    cover a missed kick, but it is delayed (arms after a short fuse) and area-based. Do NOT
    treat Sigil of Silence as equivalent to Disrupt when judging a single-target interrupt
    assignment, though it is legitimate backup interrupt utility.

- **Crowd control:**
  - **Chaos Nova** (179057) — AoE stun, ~45s.
  - **Imprison** (217832) — single-target incapacitate on Demon/Beast/Humanoid, ~45s.
  - **Sigil of Misery** (207684) — AoE fear/disorient.
  - **Sigil of Chains** (202138) — AoE pull-in + slow (positioning).
  - **Sigil of Silence** (202137) — AoE silence.

- **Dispels:**
  - **Consume Magic** (278326) — an OFFENSIVE purge: it removes a beneficial Magic effect from
    an ENEMY. It does NOT cleanse debuffs from allies. Vengeance has no friendly dispel — do
    not credit it with removing debuffs from teammates.

- **Externals:** None. No single-target damage-reduction or immunity to cast on an ally.
  Darkness (196718) is the only group-protective tool and is a zone, not a targeted external.

- **Raid buffs/debuffs:** No unique raid-wide stat buff (see Known Gaps re: Hero Talents).

- **Movement tools:**
  - **Infernal Strike** (189110) — charge leap to a location (primary mobility, charges).
  - **Vengeful Retreat** — backward dash (SpellID 198793 confirmed in SimC reference).
  - **The Hunt** (370965) — long-range forward charge / gap-closer, ~1.5 min.

## Consumables and Enchants

Sourced from the Maxroll 12.0.5 guide prose. Exact item names/IDs were NOT individually
confirmed on live item pages — treat as guidance and verify before relying on numeric IDs
(no item IDs are asserted here precisely because they could not be confirmed live).

- **Flask:** "Flask of the Blood Knights" (per Maxroll). Item ID not confirmed — see Known Gaps.
- **Food:** "Silvermoon Parade" food (per Maxroll). Exact name/ID not confirmed — see Known Gaps.
- **Chest enchant:** "Mark of the Worldsoul" (per Maxroll). Enchant ID not confirmed — see Known Gaps.
- **Stat priority (tanking):** Haste (damage + ability/cooldown recharge) is favored, then
  Critical Strike (which also feeds parry in melee-heavy fights). Treat as approximate — stat
  priority shifts by build and content; not a hard rule for log analysis.

No weapon/ring/other enchants or gem IDs are asserted because they could not be confirmed on
live sources during this research pass.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Aldrachi Reaver** and **Annihilator**.

### Talent Strings

**Aldrachi Reaver:**
```
CUkAAAAAAAAAAAAAAAAAAAAAAAAYMzMjhZkZmZGDzMzMDGzMmxMmZwMmZsMmZZMmBAAAgZZGMMW2YCDzMjFAAAAMwAAgZGgBAAAwA
```

**Annihilator:**
```
CUkAAAAAAAAAAAAAAAAAAAAAAAAYMzMjhZkZmZGDzMzMDGzMmxMmhxMmZsMmZZMmBAAAAAAAgZmxGAAAAGYmZmZ2abmZGAYAAAAMA
```

### Metrics

| Build | DPS | DTPS | HPS |
|-------|-----|------|-----|
| Aldrachi Reaver | 79,591 | 73,610 | 53,099 |
| Annihilator | 75,352 | 72,632 | 45,646 |

Note: these are single-target Patchwerk simulation values. This is a **tank** — DPS is
secondary. DTPS (damage taken per second) and HPS (healing per second, mostly self-healing)
are the more raid-relevant metrics for this spec.

### Damage Distribution (SimC, share of total)

These rows are the SimC-tracked damage output percentages for each build. Because this is
a tank, many core abilities (Fracture, Soul Cleave, Spirit Bomb, Sigil of Flame) appear
with non-percentage values in the SimC output — they are tracked as resource/fragment
mechanics rather than standalone damage percent contributors in the patchwerk report.
Abilities whose simC percent column contained no "%" were excluded (these are rank, uptime,
or duration values). Consumables, Bloodlust, Skyfury, and out-of-range rows are excluded.

**Aldrachi Reaver — damage output rows with valid percentages:**

| Ability | Share |
|---------|-------|
| Auto Attack (MH) | 7.9% |
| Auto Attack (OH) | 3.8% |
| Prismatic Focusing Iris | 2.5% |
| Infernal Strike | 1.7% |
| Voidstalker Sting | 0.9% |
| Demon Spikes (retaliation) | 0.4% |

**Annihilator — damage output rows with valid percentages:**

| Ability | Share |
|---------|-------|
| Voidfall Meteor | 26.2% |
| Catastrophe | 10.2% |
| Auto Attack (MH) | 5.7% |
| Auto Attack (OH) | 2.8% |
| Prismatic Focusing Iris | 2.4% |
| Infernal Strike | 1.3% |
| Voidstalker Sting | 0.7% |
| Demon Spikes (retaliation) | 0.3% |

**RaidLens interpretation:** The very limited percent-formatted rows are expected for a
tank spec — Vengeance's primary throughput abilities (Fracture, Soul Cleave, Spirit Bomb,
Fel Devastation, Sigil of Flame, Reaver's Glaive) appear in the SimC output with rank/
internal tracking values rather than damage share percentages, meaning the sim does not
surface them as clean percent-of-total rows in this extract. The Annihilator build is
notably structured around Voidfall Meteor (the Annihilator Hero Tree burst) and Catastrophe
as its highest damage contributors, whereas the Aldrachi Reaver build's damage is more
distributed through the glaive cycle (tracked internally). For RaidLens purposes, do not
use this distribution to assess rotational correctness — instead use the APL below and the
healing/DTPS metrics.

### Action Priority List — Aldrachi Reaver

```
actions.precombat=snapshot_stats
actions.precombat+=/sigil_of_flame
# AR always. Anni only with Soul Carver (non-SC builds lose DPS from pre-pull frag misalignment)
actions.precombat+=/sigil_of_spite,if=hero_tree.aldrachi_reaver|talent.soul_carver
actions.precombat+=/immolation_aura

# Executed every time the actor is available.
actions=variable,name=single_target,value=spell_targets.spirit_bomb=1
actions+=/variable,name=aoe,value=spell_targets.spirit_bomb>=3
actions+=/variable,name=execute,value=fight_remains<20
# Dungeon Route
actions+=/variable,name=is_dungeon,value=fight_style.dungeonroute|fight_style.dungeonslice
actions+=/cycling_variable,name=dung_pull_ttd,op=reset
actions+=/cycling_variable,name=dung_pull_ttd,op=max,value=target.time_to_die
actions+=/variable,name=dung_next_pull,value=variable.is_dungeon&raid_event.adds.exists&raid_event.pull.remains<12&(raid_event.adds.has_boss|raid_event.adds.count>=3)
# Safe to use 40-60s CDs (SC, SoS, FD, buff trinkets)
actions+=/variable,name=dung_cd_ok,value=variable.execute|!variable.is_dungeon|(variable.dung_pull_ttd>12&!variable.dung_next_pull)
# Stricter guard for Meta (2min CD) - Anni gets lower bar for UR proc windows
actions+=/variable,name=dung_meta_ok,value=variable.execute|!variable.is_dungeon|(variable.dung_pull_ttd>(15-5*hero_tree.annihilator)&!variable.dung_next_pull)
actions+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff|(trinket.1.has_buff.agility|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit|trinket.1.has_buff.attack_power)
actions+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff|(trinket.2.has_buff.agility|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit|trinket.2.has_buff.attack_power)
# Rank buff trinkets by total stat value (duration * proc value)
actions+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.proc.any_dps.duration)*trinket.2.proc.any_dps.default_value)>((trinket.1.proc.any_dps.duration)*trinket.1.proc.any_dps.default_value)
# Non-buff damage trinkets: which slot has higher ilvl
actions+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions+=/variable,name=fiery_demise_active,value=talent.fiery_demise&dot.fiery_brand.ticking
actions+=/variable,name=fire_cd_soon,value=cooldown.soul_carver.remains>?cooldown.fel_devastation.remains>?cooldown.sigil_of_spite.remains<(8+talent.charred_flesh.rank)
# Fragment target: AR uses AotG scaling; Anni uses 3 during Brand, 4 in Meta, 5 baseline
actions+=/variable,name=fragment_target,op=setif,value=5+apex.2,value_else=variable.fiery_demise_active*3+!variable.fiery_demise_active*(5-buff.metamorphosis.up),condition=hero_tree.aldrachi_reaver
actions+=/auto_attack
actions+=/retarget_auto_attack,target_if=min:debuff.reavers_mark.remains,if=hero_tree.aldrachi_reaver
actions+=/disrupt,if=target.debuff.casting.react
actions+=/infernal_strike,use_off_gcd=1
actions+=/demon_spikes,use_off_gcd=1,if=!buff.demon_spikes.up&in_combat
actions+=/run_action_list,name=ar,if=hero_tree.aldrachi_reaver
actions+=/run_action_list,name=anni,if=hero_tree.annihilator

# TTNG MODEL: GCDs until next glaive, accounting for SC, SoS, and passive frags
actions.ar=variable,name=frac_souls,value=2+buff.metamorphosis.up
actions.ar+=/variable,name=base_deficit,value=(20-buff.art_of_the_glaive.stack-soul_fragments.total)<?0
actions.ar+=/variable,name=eff_recharge,value=cooldown.fracture.remains+(cooldown.fracture.charges>=2)*cooldown.fracture.duration
actions.ar+=/variable,name=passive_per_sec,value=0.30+(talent.fallout&buff.immolation_aura.up)*0.30*spell_targets.spirit_bomb
actions.ar+=/variable,name=fracs_base,value=variable.base_deficit%variable.frac_souls
actions.ar+=/variable,name=fracs_base,op=ceil
actions.ar+=/variable,name=base_gen_time,value=(variable.fracs_base>0)*((variable.fracs_base<=cooldown.fracture.charges)*variable.fracs_base*(1+apex.3)*gcd.max+(variable.fracs_base>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_base-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# Pass 1: subtract SC (6 frags) and SoS (3 frags) if they arrive within the gen window
actions.ar+=/variable,name=sc1,value=talent.soul_carver&cooldown.soul_carver.remains<variable.base_gen_time
actions.ar+=/variable,name=net1,value=(variable.base_deficit-variable.sc1*6)<?0
actions.ar+=/variable,name=fracs1,value=variable.net1%variable.frac_souls
actions.ar+=/variable,name=fracs1,op=ceil
actions.ar+=/variable,name=gt1,value=(variable.fracs1>0)*((variable.fracs1<=cooldown.fracture.charges)*variable.fracs1*(1+apex.3)*gcd.max+(variable.fracs1>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs1-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=sos1,value=talent.sigil_of_spite&cooldown.sigil_of_spite.remains<variable.gt1
actions.ar+=/variable,name=N1,value=(variable.net1-variable.sos1*3)<?0
actions.ar+=/variable,name=fracs_np,value=variable.N1%variable.frac_souls
actions.ar+=/variable,name=fracs_np,op=ceil
actions.ar+=/variable,name=gt_np,value=(variable.fracs_np>0)*((variable.fracs_np<=cooldown.fracture.charges)*variable.fracs_np*(1+apex.3)*gcd.max+(variable.fracs_np>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_np-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# T1: no-passive reference time (overhead GCD + fracture gen + SC/SoS cast GCDs)
actions.ar+=/variable,name=T1,value=gcd.max+variable.gt_np+variable.sc1*gcd.max+variable.sos1*gcd.max
# Pass 2: proportional SC credit (scales by how early SC arrives relative to T1)
actions.ar+=/variable,name=sc_prop,value=(talent.soul_carver&cooldown.soul_carver.remains<variable.T1)*((1-cooldown.soul_carver.remains%variable.T1)<?0)
actions.ar+=/variable,name=net_p,value=(variable.base_deficit-6*variable.sc_prop)<?0
actions.ar+=/variable,name=fracs_p,value=variable.net_p%variable.frac_souls
actions.ar+=/variable,name=fracs_p,op=ceil
actions.ar+=/variable,name=gt_p,value=(variable.fracs_p>0)*((variable.fracs_p<=cooldown.fracture.charges)*variable.fracs_p*(1+apex.3)*gcd.max+(variable.fracs_p>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_p-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=sos_p,value=talent.sigil_of_spite&cooldown.sigil_of_spite.remains<variable.gt_p
actions.ar+=/variable,name=N_p,value=(variable.net_p-variable.sos_p*3)<?0
actions.ar+=/variable,name=adj2,value=(variable.N_p-variable.passive_per_sec*variable.T1)<?0
actions.ar+=/variable,name=fracs_p2,value=variable.adj2%variable.frac_souls
actions.ar+=/variable,name=fracs_p2,op=ceil
actions.ar+=/variable,name=gt_p2,value=(variable.fracs_p2>0)*((variable.fracs_p2<=cooldown.fracture.charges)*variable.fracs_p2*(1+apex.3)*gcd.max+(variable.fracs_p2>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_p2-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# T2: passive-adjusted estimate, averaged with T1 to tame oscillation
actions.ar+=/variable,name=T2,value=gcd.max+variable.gt_p2+(variable.sc_prop>0)*gcd.max+variable.sos_p*gcd.max
actions.ar+=/variable,name=T_avg,value=(variable.T1+variable.T2)%2
# Final pass: use T_avg as the passive window for the definitive fracture count
actions.ar+=/variable,name=adj_f,value=(variable.N_p-variable.passive_per_sec*variable.T_avg)<?0
actions.ar+=/variable,name=fracs_f,value=variable.adj_f%variable.frac_souls
actions.ar+=/variable,name=fracs_f,op=ceil
actions.ar+=/variable,name=gt_f,value=(variable.fracs_f>0)*((variable.fracs_f<=cooldown.fracture.charges)*variable.fracs_f*(1+apex.3)*gcd.max+(variable.fracs_f>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_f-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=time_to_next_glaive,value=gcd.max+variable.gt_f+(variable.sc_prop>0)*gcd.max+variable.sos_p*gcd.max
# When passives alone cover the deficit, round up to GCD boundaries
actions.ar+=/variable,name=passive_floor,value=variable.N_p%(variable.passive_per_sec*gcd.max)
actions.ar+=/variable,name=passive_floor,op=ceil
actions.ar+=/variable,name=passive_floor,value=variable.passive_floor*gcd.max
actions.ar+=/variable,name=time_to_next_glaive,value=variable.time_to_next_glaive<?(variable.fracs_f=0&variable.N_p>0)*variable.passive_floor
# RM application happens 2 GCDs into the cycle (RG -> SC -> Frac applies mark)
actions.ar+=/variable,name=time_to_next_rm_application,value=variable.time_to_next_glaive+2*gcd.max
# Manual RM tracking (debuff.remains unreliable with async stacks)
actions.ar+=/variable,name=rm_remains,value=(variable.last_rm_applied>0)*(20-(time-variable.last_rm_applied))<?0
# Alternate slash and refresh cycles
actions.ar+=/variable,name=prio_slashes,value=variable.aoe|variable.execute|(variable.rm_remains>0&variable.last_refresh_at>variable.last_slash_at)
# Record cycle type once when RG first stored (resets when RG buff drops)
actions.ar+=/variable,name=last_slash_at,op=setif,value=time,value_else=variable.last_slash_at,condition=buff.reavers_glaive.up&!variable.cycle_recorded&variable.prio_slashes
actions.ar+=/variable,name=last_refresh_at,op=setif,value=time,value_else=variable.last_refresh_at,condition=buff.reavers_glaive.up&!variable.cycle_recorded&!variable.prio_slashes
actions.ar+=/variable,name=cycle_recorded,value=buff.reavers_glaive.up
# RG imminent: stored and ready to fire, at AotG cap, or one consume from overflow
actions.ar+=/variable,name=rg_imminent,value=(buff.reavers_glaive.up&(variable.execute|variable.rm_remains<=variable.time_to_next_rm_application|buff.art_of_the_glaive.stack+soul_fragments>=(20-variable.frac_souls)))|(buff.art_of_the_glaive.stack+soul_fragments>=20)|(soul_fragments>=6&buff.art_of_the_glaive.stack>=(20-variable.frac_souls)&cooldown.fracture.charges>=1)
actions.ar+=/felblade,if=prev_gcd.1.vengeful_retreat|prev_off_gcd.vengeful_retreat
# UR proc meta fires unconditionally; hardcast gates on dungeon TTD
actions.ar+=/metamorphosis,use_off_gcd=1,if=buff.untethered_rage.up|(!buff.metamorphosis.up&variable.dung_meta_ok)
# Stat buff trinkets before RG so the buff covers the glaive cycle
actions.ar+=/call_action_list,name=trinkets
# Fire stored RG: execute, mark expired or aging, or about to overflow AotG
actions.ar+=/reavers_glaive,if=buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up&(variable.execute|variable.prio_slashes|variable.rm_remains<=0|variable.rm_remains<10|buff.art_of_the_glaive.stack+soul_fragments>=(20-variable.frac_souls))
actions.ar+=/call_action_list,name=ar_glaive_cycle,if=buff.rending_strike.up|buff.glaive_flurry.up|prev_gcd.1.reavers_glaive
# Fiery brand: overcapped charges, or setup for fiery demise window
actions.ar+=/fiery_brand,if=charges>=2|!variable.fiery_demise_active|variable.execute
# SoS for frags, skip during glaive cycle
actions.ar+=/sigil_of_spite,if=variable.dung_cd_ok&!buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up
# Emergency consume: AotG overflow or frag cap in aoe
actions.ar+=/call_action_list,name=ar_quick_consume,if=!buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up&(buff.art_of_the_glaive.stack+soul_fragments>=20|(variable.aoe&soul_fragments>=6))
actions.ar+=/immolation_aura,if=in_combat
# FD: high fury, in-flight frags, not near RG. aoe skips the RG check
actions.ar+=/fel_devastation,if=variable.dung_cd_ok&fury>85&(soul_fragments.inactive>1|variable.aoe)&(!variable.rg_imminent|variable.aoe)
actions.ar+=/sigil_of_flame
# SC: 6 frags, prefer fiery demise. OK when mark is aging or in execute
actions.ar+=/soul_carver,if=variable.dung_cd_ok&(variable.fiery_demise_active|(variable.rm_remains<7&buff.art_of_the_glaive.stack+soul_fragments<20)|variable.execute)
actions.ar+=/call_action_list,name=ar_fillers

# Fillers outside glaive cycles. aoe lowers SpB threshold by 1
actions.ar_fillers=spirit_bomb,if=soul_fragments>=(variable.fragment_target-variable.aoe)
actions.ar_fillers+=/immolation_aura,if=variable.time_to_next_glaive>3*gcd.max
actions.ar_fillers+=/felblade,if=cooldown.spirit_bomb.remains<gcd.max&soul_fragments.total>=variable.fragment_target&fury<40
actions.ar_fillers+=/vengeful_retreat,use_off_gcd=1,if=!cooldown.felblade.up&talent.unhindered_assault&cooldown.spirit_bomb.remains<gcd.max&soul_fragments.total>=variable.fragment_target&fury<40
# SC: aoe skips frag>=5 trigger to save frags for SpB
actions.ar_fillers+=/soul_cleave,if=((soul_fragments>=5&!variable.aoe)|soul_fragments<=1|fury.deficit<30)&(fury>=2*action.soul_cleave.cost|cooldown.fracture.charges>=1|cooldown.fracture.remains<=gcd.max)&(!buff.rending_strike.up|!buff.glaive_flurry.up|!variable.prio_slashes)
actions.ar_fillers+=/sigil_of_flame,if=variable.aoe
actions.ar_fillers+=/fracture,if=buff.metamorphosis.up|full_recharge_time<gcd.max|buff.warblades_hunger.stack>=4
actions.ar_fillers+=/immolation_aura,if=!variable.is_dungeon|in_combat
actions.ar_fillers+=/sigil_of_flame
# Unconditional SC fallback with same guards
actions.ar_fillers+=/soul_cleave,if=(fury>=2*action.soul_cleave.cost|cooldown.fracture.charges>=1|cooldown.fracture.remains<=gcd.max)&(!buff.rending_strike.up|!buff.glaive_flurry.up|!variable.prio_slashes)
actions.ar_fillers+=/fracture
actions.ar_fillers+=/felblade
actions.ar_fillers+=/vengeful_retreat,use_off_gcd=1,if=talent.unhindered_assault&!cooldown.felblade.up
actions.ar_fillers+=/soul_carver
actions.ar_fillers+=/fel_devastation
actions.ar_fillers+=/throw_glaive

# GLAIVE CYCLE: alternate RS+GF buffs after RG. Slash = frac first, refresh = SC first
actions.ar_glaive_cycle=use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.cooldown.duration=0)&gcd.remains>0.1
actions.ar_glaive_cycle+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.cooldown.duration=0)&gcd.remains>0.1
# Fill GCD when waiting for fracture charge (slash) or fury (refresh)
actions.ar_glaive_cycle+=/call_action_list,name=ar_glaive_cycle_filler,if=(variable.prio_slashes&((cooldown.fracture.charges<1&buff.rending_strike.up&buff.glaive_flurry.up)|fury<10))|(!variable.prio_slashes&((buff.rending_strike.up&buff.glaive_flurry.up&fury<35)|(buff.rending_strike.up&!buff.glaive_flurry.up&cooldown.fracture.charges<1)))
actions.ar_glaive_cycle+=/potion,use_off_gcd=1
actions.ar_glaive_cycle+=/invoke_external_buff,name=power_infusion
# Record RM application time when fracture is about to consume RS
actions.ar_glaive_cycle+=/variable,name=last_rm_applied,value=time,if=buff.rending_strike.up
# Slash: fracture first when both buffs up (applies 1-stack RM + triggers slash damage)
actions.ar_glaive_cycle+=/fracture,if=buff.rending_strike.up&buff.glaive_flurry.up&variable.prio_slashes
# Refresh: SC first when both buffs up (subsequent fracture gets 3-stack RM)
actions.ar_glaive_cycle+=/soul_cleave,if=buff.rending_strike.up&buff.glaive_flurry.up&!variable.prio_slashes
# Single-buff continuation
actions.ar_glaive_cycle+=/fracture,if=buff.rending_strike.up&!buff.glaive_flurry.up
actions.ar_glaive_cycle+=/soul_cleave,if=buff.glaive_flurry.up&!buff.rending_strike.up
actions.ar_glaive_cycle+=/call_action_list,name=ar_glaive_cycle_filler

# Glaive cycle filler: non-consuming actions while waiting for resources
actions.ar_glaive_cycle_filler=spirit_bomb,if=fury>75&soul_fragments>=variable.fragment_target
actions.ar_glaive_cycle_filler+=/immolation_aura
actions.ar_glaive_cycle_filler+=/fel_devastation,if=fury>=85
actions.ar_glaive_cycle_filler+=/sigil_of_flame
actions.ar_glaive_cycle_filler+=/felblade
actions.ar_glaive_cycle_filler+=/soul_carver
actions.ar_glaive_cycle_filler+=/vengeful_retreat,use_off_gcd=1,if=talent.unhindered_assault&!cooldown.felblade.up
# SC only when GF already consumed (safe during slash cycles)
actions.ar_glaive_cycle_filler+=/soul_cleave,if=!buff.glaive_flurry.up
actions.ar_glaive_cycle_filler+=/throw_glaive

# Quick consume: rush to AotG 20. aoe uses lower SpB threshold
actions.ar_quick_consume=soul_cleave,if=soul_fragments<(3-variable.aoe)
actions.ar_quick_consume+=/spirit_bomb,if=soul_fragments>=(3-variable.aoe)
actions.ar_quick_consume+=/soul_cleave,if=!variable.aoe

actions.trinkets=use_item,slot=trinket1,if=variable.trinket_1_buffs&variable.dung_cd_ok&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&variable.dung_cd_ok&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)
# Non-buff on-use trinkets (direct damage): fire on cooldown, off-GCD
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.cooldown.duration=0)&gcd.remains>0.1
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.cooldown.duration=0)&gcd.remains>0.1
# End of fight: dump everything
actions.trinkets+=/use_item,slot=trinket1,if=variable.execute
actions.trinkets+=/use_item,slot=trinket2,if=variable.execute
```

### Action Priority List — Annihilator

```
actions.precombat=snapshot_stats
actions.precombat+=/sigil_of_flame
# AR always. Anni only with Soul Carver (non-SC builds lose DPS from pre-pull frag misalignment)
actions.precombat+=/sigil_of_spite,if=hero_tree.aldrachi_reaver|talent.soul_carver
actions.precombat+=/immolation_aura

# Executed every time the actor is available.
actions=variable,name=single_target,value=spell_targets.spirit_bomb=1
actions+=/variable,name=aoe,value=spell_targets.spirit_bomb>=3
actions+=/variable,name=execute,value=fight_remains<20
# Dungeon Route
actions+=/variable,name=is_dungeon,value=fight_style.dungeonroute|fight_style.dungeonslice
actions+=/cycling_variable,name=dung_pull_ttd,op=reset
actions+=/cycling_variable,name=dung_pull_ttd,op=max,value=target.time_to_die
actions+=/variable,name=dung_next_pull,value=variable.is_dungeon&raid_event.adds.exists&raid_event.pull.remains<12&(raid_event.adds.has_boss|raid_event.adds.count>=3)
# Safe to use 40-60s CDs (SC, SoS, FD, buff trinkets)
actions+=/variable,name=dung_cd_ok,value=variable.execute|!variable.is_dungeon|(variable.dung_pull_ttd>12&!variable.dung_next_pull)
# Stricter guard for Meta (2min CD) - Anni gets lower bar for UR proc windows
actions+=/variable,name=dung_meta_ok,value=variable.execute|!variable.is_dungeon|(variable.dung_pull_ttd>(15-5*hero_tree.annihilator)&!variable.dung_next_pull)
actions+=/variable,name=trinket_1_buffs,value=trinket.1.has_use_buff|(trinket.1.has_buff.agility|trinket.1.has_buff.mastery|trinket.1.has_buff.versatility|trinket.1.has_buff.haste|trinket.1.has_buff.crit|trinket.1.has_buff.attack_power)
actions+=/variable,name=trinket_2_buffs,value=trinket.2.has_use_buff|(trinket.2.has_buff.agility|trinket.2.has_buff.mastery|trinket.2.has_buff.versatility|trinket.2.has_buff.haste|trinket.2.has_buff.crit|trinket.2.has_buff.attack_power)
# Rank buff trinkets by total stat value (duration * proc value)
actions+=/variable,name=trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&variable.trinket_2_buffs|variable.trinket_2_buffs&((trinket.2.proc.any_dps.duration)*trinket.2.proc.any_dps.default_value)>((trinket.1.proc.any_dps.duration)*trinket.1.proc.any_dps.default_value)
# Non-buff damage trinkets: which slot has higher ilvl
actions+=/variable,name=damage_trinket_priority,op=setif,value=2,value_else=1,condition=!variable.trinket_1_buffs&!variable.trinket_2_buffs&trinket.2.ilvl>=trinket.1.ilvl
actions+=/variable,name=fiery_demise_active,value=talent.fiery_demise&dot.fiery_brand.ticking
actions+=/variable,name=fire_cd_soon,value=cooldown.soul_carver.remains>?cooldown.fel_devastation.remains>?cooldown.sigil_of_spite.remains<(8+talent.charred_flesh.rank)
# Fragment target: AR uses AotG scaling; Anni uses 3 during Brand, 4 in Meta, 5 baseline
actions+=/variable,name=fragment_target,op=setif,value=5+apex.2,value_else=variable.fiery_demise_active*3+!variable.fiery_demise_active*(5-buff.metamorphosis.up),condition=hero_tree.aldrachi_reaver
actions+=/auto_attack
actions+=/retarget_auto_attack,target_if=min:debuff.reavers_mark.remains,if=hero_tree.aldrachi_reaver
actions+=/disrupt,if=target.debuff.casting.react
actions+=/infernal_strike,use_off_gcd=1
actions+=/demon_spikes,use_off_gcd=1,if=!buff.demon_spikes.up&in_combat
actions+=/run_action_list,name=ar,if=hero_tree.aldrachi_reaver
actions+=/run_action_list,name=anni,if=hero_tree.annihilator

# Pre-meta setup window, typically ~3 GCDs
actions.anni=variable,name=anni_meta_entry_time,value=3*gcd.max
actions.anni+=/potion,use_off_gcd=1,if=variable.execute&(!variable.is_dungeon|in_boss_encounter)
actions.anni+=/invoke_external_buff,name=power_infusion,if=buff.voidfall_spending.stack=3|variable.execute
actions.anni+=/call_action_list,name=anni_voidfall_spending,if=buff.voidfall_spending.up
actions.anni+=/call_action_list,name=anni_voidfall_fishing,if=buff.voidfall_building.stack>=2&!buff.voidfall_spending.up
# Prepare to enter hardcast meta (UR procs enter unconditionally)
actions.anni+=/call_action_list,name=anni_meta_entry,if=buff.untethered_rage.up|(variable.dung_meta_ok&cooldown.metamorphosis.remains<variable.anni_meta_entry_time)
# Use cooldowns, reserving at least one for the next meta
actions.anni+=/call_action_list,name=anni_cooldowns,if=variable.dung_cd_ok&(!talent.fiery_demise|variable.fiery_demise_active|cooldown.fiery_brand.remains>20|variable.execute)
actions.anni+=/fiery_brand,if=charges>=2|(!variable.fiery_demise_active&(!talent.fiery_demise|variable.fire_cd_soon|variable.execute))
actions.anni+=/fracture,if=full_recharge_time<gcd.max
# Priority IA: Fallout generates frags in aoe, Charred Flesh extends brand
actions.anni+=/immolation_aura,if=(talent.fallout&variable.aoe)|(talent.charred_flesh&variable.fiery_demise_active)
actions.anni+=/spirit_bomb,if=soul_fragments>=variable.fragment_target
actions.anni+=/immolation_aura
actions.anni+=/sigil_of_flame
actions.anni+=/fracture,if=soul_fragments.total<=4|fury<40
actions.anni+=/soul_cleave,if=soul_fragments<=1|fury.deficit<=15
actions.anni+=/soul_cleave,if=!(apex.3&!buff.untethered_rage.up&buff.seething_anger.stack>=10)&!cooldown.metamorphosis.up
actions.anni+=/fracture
actions.anni+=/felblade
actions.anni+=/throw_glaive

actions.anni_cooldowns=spirit_bomb,if=soul_fragments>=variable.fragment_target
actions.anni_cooldowns+=/soul_carver,if=soul_fragments<=3
actions.anni_cooldowns+=/sigil_of_spite,if=soul_fragments<=2+talent.soul_sigils
actions.anni_cooldowns+=/fel_devastation
actions.anni_cooldowns+=/call_action_list,name=anni_generate_fury,if=cooldown.fel_devastation.up&fury<50

actions.anni_filler_no_spend=soul_cleave,if=soul_fragments=0&!action.sigil_of_flame.placed&(!talent.sigil_of_spite|(talent.sigil_of_spite&!action.sigil_of_spite.placed))&!prev_gcd.2.soul_carver
actions.anni_filler_no_spend+=/immolation_aura
actions.anni_filler_no_spend+=/sigil_of_flame
actions.anni_filler_no_spend+=/felblade
actions.anni_filler_no_spend+=/fracture,if=!buff.voidfall_spending.up
actions.anni_filler_no_spend+=/soul_carver,if=(!talent.sigil_of_spite|(talent.sigil_of_spite&!action.sigil_of_spite.placed))
actions.anni_filler_no_spend+=/fel_devastation,if=(!talent.sigil_of_spite|(talent.sigil_of_spite&!action.sigil_of_spite.placed))
actions.anni_filler_no_spend+=/sigil_of_spite
actions.anni_filler_no_spend+=/fracture
actions.anni_filler_no_spend+=/throw_glaive

actions.anni_generate_fury=immolation_aura
actions.anni_generate_fury+=/sigil_of_flame
actions.anni_generate_fury+=/felblade
actions.anni_generate_fury+=/fracture

actions.anni_meta_entry=potion,use_off_gcd=1,if=(variable.fiery_demise_active|variable.execute)&(!variable.is_dungeon|in_boss_encounter)
actions.anni_meta_entry+=/call_action_list,name=trinkets
actions.anni_meta_entry+=/invoke_external_buff,name=power_infusion
actions.anni_meta_entry+=/metamorphosis,use_off_gcd=1,if=gcd.remains=0&buff.untethered_rage.up&!buff.voidfall_spending.up
actions.anni_meta_entry+=/call_action_list,name=anni_pre_meta_spb,if=cooldown.spirit_bomb.remains<variable.anni_meta_entry_time&soul_fragments.total<variable.fragment_target
actions.anni_meta_entry+=/fiery_brand,if=charges>=2|!variable.fiery_demise_active
actions.anni_meta_entry+=/sigil_of_spite,if=soul_fragments>=variable.fragment_target&cooldown.spirit_bomb.up&cooldown.metamorphosis.up
actions.anni_meta_entry+=/spirit_bomb,if=soul_fragments>=variable.fragment_target&fury>=60
actions.anni_meta_entry+=/sigil_of_spite,if=soul_fragments.total<variable.fragment_target
# Pool to 75 fury for SB+SC voidfall combo after meta entry
actions.anni_meta_entry+=/call_action_list,name=anni_generate_fury,if=fury<75&cooldown.metamorphosis.up&cooldown.spirit_bomb.remains>gcd.max*3
actions.anni_meta_entry+=/metamorphosis,use_off_gcd=1,if=variable.dung_meta_ok&gcd.remains=0&cooldown.spirit_bomb.remains>gcd.max*3&(soul_fragments.total>=variable.fragment_target|(talent.sigil_of_spite&action.sigil_of_spite.placed))
actions.anni_meta_entry+=/call_action_list,name=anni_filler_no_spend

actions.anni_pre_meta_spb=fracture
actions.anni_pre_meta_spb+=/immolation_aura,if=variable.aoe
actions.anni_pre_meta_spb+=/fiery_brand,if=charges>=2|!variable.fiery_demise_active
actions.anni_pre_meta_spb+=/soul_carver,if=(cooldown.soul_carver.up+cooldown.sigil_of_spite.up+cooldown.fel_devastation.up)>=2
actions.anni_pre_meta_spb+=/fel_devastation,if=(cooldown.soul_carver.up+cooldown.sigil_of_spite.up+cooldown.fel_devastation.up)>=2
actions.anni_pre_meta_spb+=/felblade
actions.anni_pre_meta_spb+=/call_action_list,name=anni_filler_no_spend

actions.anni_voidfall_fishing=fracture
actions.anni_voidfall_fishing+=/call_action_list,name=anni_generate_fury,if=cooldown.fracture.charges_fractional>=0.75

actions.anni_voidfall_spending=fiery_brand,if=charges>=2|!variable.fiery_demise_active
# Felblade to bridge fury into fracture bridge range (30+15=45)
actions.anni_voidfall_spending+=/felblade,if=buff.voidfall_spending.stack=buff.voidfall_spending.max_stack&cooldown.spirit_bomb.ready&soul_fragments.total>=variable.fragment_target&fury>=30&fury<45&cooldown.fracture.charges>=1
# Fracture to bridge fury for SB+SC combo when 1 fracture away (45+30=75)
actions.anni_voidfall_spending+=/fracture,if=buff.voidfall_spending.stack=buff.voidfall_spending.max_stack&cooldown.spirit_bomb.ready&soul_fragments.total>=variable.fragment_target&fury>=45&fury<75
actions.anni_voidfall_spending+=/soul_cleave,if=cooldown.spirit_bomb.remains>gcd.max*4
actions.anni_voidfall_spending+=/spirit_bomb,if=soul_fragments>=variable.fragment_target
actions.anni_voidfall_spending+=/felblade,if=(fury<40&cooldown.spirit_bomb.remains<=gcd.max)|(fury<25&cooldown.spirit_bomb.remains>gcd.max)
actions.anni_voidfall_spending+=/immolation_aura,if=(fury<40&cooldown.spirit_bomb.remains<=gcd.max)|(fury<25&cooldown.spirit_bomb.remains>gcd.max)
actions.anni_voidfall_spending+=/soul_carver,if=(cooldown.spirit_bomb.remains<=gcd.max)&soul_fragments.total<variable.fragment_target&(!talent.sigil_of_spite|!action.sigil_of_spite.placed)
actions.anni_voidfall_spending+=/fel_devastation,if=(cooldown.spirit_bomb.remains<=gcd.max)&soul_fragments.total<variable.fragment_target&(!talent.sigil_of_spite|!action.sigil_of_spite.placed)
actions.anni_voidfall_spending+=/immolation_aura,if=variable.aoe&(cooldown.spirit_bomb.remains<=gcd.max)&soul_fragments.total<variable.fragment_target&(!talent.sigil_of_spite|!action.sigil_of_spite.placed)
actions.anni_voidfall_spending+=/sigil_of_spite,if=(cooldown.spirit_bomb.remains<=gcd.max)&soul_fragments.total<variable.fragment_target
actions.anni_voidfall_spending+=/call_action_list,name=anni_filler_no_spend

# TTNG MODEL: GCDs until next glaive, accounting for SC, SoS, and passive frags
actions.ar=variable,name=frac_souls,value=2+buff.metamorphosis.up
actions.ar+=/variable,name=base_deficit,value=(20-buff.art_of_the_glaive.stack-soul_fragments.total)<?0
actions.ar+=/variable,name=eff_recharge,value=cooldown.fracture.remains+(cooldown.fracture.charges>=2)*cooldown.fracture.duration
actions.ar+=/variable,name=passive_per_sec,value=0.30+(talent.fallout&buff.immolation_aura.up)*0.30*spell_targets.spirit_bomb
actions.ar+=/variable,name=fracs_base,value=variable.base_deficit%variable.frac_souls
actions.ar+=/variable,name=fracs_base,op=ceil
actions.ar+=/variable,name=base_gen_time,value=(variable.fracs_base>0)*((variable.fracs_base<=cooldown.fracture.charges)*variable.fracs_base*(1+apex.3)*gcd.max+(variable.fracs_base>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_base-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# Pass 1: subtract SC (6 frags) and SoS (3 frags) if they arrive within the gen window
actions.ar+=/variable,name=sc1,value=talent.soul_carver&cooldown.soul_carver.remains<variable.base_gen_time
actions.ar+=/variable,name=net1,value=(variable.base_deficit-variable.sc1*6)<?0
actions.ar+=/variable,name=fracs1,value=variable.net1%variable.frac_souls
actions.ar+=/variable,name=fracs1,op=ceil
actions.ar+=/variable,name=gt1,value=(variable.fracs1>0)*((variable.fracs1<=cooldown.fracture.charges)*variable.fracs1*(1+apex.3)*gcd.max+(variable.fracs1>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs1-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=sos1,value=talent.sigil_of_spite&cooldown.sigil_of_spite.remains<variable.gt1
actions.ar+=/variable,name=N1,value=(variable.net1-variable.sos1*3)<?0
actions.ar+=/variable,name=fracs_np,value=variable.N1%variable.frac_souls
actions.ar+=/variable,name=fracs_np,op=ceil
actions.ar+=/variable,name=gt_np,value=(variable.fracs_np>0)*((variable.fracs_np<=cooldown.fracture.charges)*variable.fracs_np*(1+apex.3)*gcd.max+(variable.fracs_np>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_np-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# T1: no-passive reference time (overhead GCD + fracture gen + SC/SoS cast GCDs)
actions.ar+=/variable,name=T1,value=gcd.max+variable.gt_np+variable.sc1*gcd.max+variable.sos1*gcd.max
# Pass 2: proportional SC credit (scales by how early SC arrives relative to T1)
actions.ar+=/variable,name=sc_prop,value=(talent.soul_carver&cooldown.soul_carver.remains<variable.T1)*((1-cooldown.soul_carver.remains%variable.T1)<?0)
actions.ar+=/variable,name=net_p,value=(variable.base_deficit-6*variable.sc_prop)<?0
actions.ar+=/variable,name=fracs_p,value=variable.net_p%variable.frac_souls
actions.ar+=/variable,name=fracs_p,op=ceil
actions.ar+=/variable,name=gt_p,value=(variable.fracs_p>0)*((variable.fracs_p<=cooldown.fracture.charges)*variable.fracs_p*(1+apex.3)*gcd.max+(variable.fracs_p>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_p-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=sos_p,value=talent.sigil_of_spite&cooldown.sigil_of_spite.remains<variable.gt_p
actions.ar+=/variable,name=N_p,value=(variable.net_p-variable.sos_p*3)<?0
actions.ar+=/variable,name=adj2,value=(variable.N_p-variable.passive_per_sec*variable.T1)<?0
actions.ar+=/variable,name=fracs_p2,value=variable.adj2%variable.frac_souls
actions.ar+=/variable,name=fracs_p2,op=ceil
actions.ar+=/variable,name=gt_p2,value=(variable.fracs_p2>0)*((variable.fracs_p2<=cooldown.fracture.charges)*variable.fracs_p2*(1+apex.3)*gcd.max+(variable.fracs_p2>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_p2-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
# T2: passive-adjusted estimate, averaged with T1 to tame oscillation
actions.ar+=/variable,name=T2,value=gcd.max+variable.gt_p2+(variable.sc_prop>0)*gcd.max+variable.sos_p*gcd.max
actions.ar+=/variable,name=T_avg,value=(variable.T1+variable.T2)%2
# Final pass: use T_avg as the passive window for the definitive fracture count
actions.ar+=/variable,name=adj_f,value=(variable.N_p-variable.passive_per_sec*variable.T_avg)<?0
actions.ar+=/variable,name=fracs_f,value=variable.adj_f%variable.frac_souls
actions.ar+=/variable,name=fracs_f,op=ceil
actions.ar+=/variable,name=gt_f,value=(variable.fracs_f>0)*((variable.fracs_f<=cooldown.fracture.charges)*variable.fracs_f*(1+apex.3)*gcd.max+(variable.fracs_f>cooldown.fracture.charges)*((cooldown.fracture.charges*(1+apex.3)*gcd.max<?variable.eff_recharge)+((variable.fracs_f-cooldown.fracture.charges-1)<?0)*cooldown.fracture.duration+gcd.max))
actions.ar+=/variable,name=time_to_next_glaive,value=gcd.max+variable.gt_f+(variable.sc_prop>0)*gcd.max+variable.sos_p*gcd.max
# When passives alone cover the deficit, round up to GCD boundaries
actions.ar+=/variable,name=passive_floor,value=variable.N_p%(variable.passive_per_sec*gcd.max)
actions.ar+=/variable,name=passive_floor,op=ceil
actions.ar+=/variable,name=passive_floor,value=variable.passive_floor*gcd.max
actions.ar+=/variable,name=time_to_next_glaive,value=variable.time_to_next_glaive<?(variable.fracs_f=0&variable.N_p>0)*variable.passive_floor
# RM application happens 2 GCDs into the cycle (RG -> SC -> Frac applies mark)
actions.ar+=/variable,name=time_to_next_rm_application,value=variable.time_to_next_glaive+2*gcd.max
# Manual RM tracking (debuff.remains unreliable with async stacks)
actions.ar+=/variable,name=rm_remains,value=(variable.last_rm_applied>0)*(20-(time-variable.last_rm_applied))<?0
# Alternate slash and refresh cycles
actions.ar+=/variable,name=prio_slashes,value=variable.aoe|variable.execute|(variable.rm_remains>0&variable.last_refresh_at>variable.last_slash_at)
# Record cycle type once when RG first stored (resets when RG buff drops)
actions.ar+=/variable,name=last_slash_at,op=setif,value=time,value_else=variable.last_slash_at,condition=buff.reavers_glaive.up&!variable.cycle_recorded&variable.prio_slashes
actions.ar+=/variable,name=last_refresh_at,op=setif,value=time,value_else=variable.last_refresh_at,condition=buff.reavers_glaive.up&!variable.cycle_recorded&!variable.prio_slashes
actions.ar+=/variable,name=cycle_recorded,value=buff.reavers_glaive.up
# RG imminent: stored and ready to fire, at AotG cap, or one consume from overflow
actions.ar+=/variable,name=rg_imminent,value=(buff.reavers_glaive.up&(variable.execute|variable.rm_remains<=variable.time_to_next_rm_application|buff.art_of_the_glaive.stack+soul_fragments>=(20-variable.frac_souls)))|(buff.art_of_the_glaive.stack+soul_fragments>=20)|(soul_fragments>=6&buff.art_of_the_glaive.stack>=(20-variable.frac_souls)&cooldown.fracture.charges>=1)
actions.ar+=/felblade,if=prev_gcd.1.vengeful_retreat|prev_off_gcd.vengeful_retreat
# UR proc meta fires unconditionally; hardcast gates on dungeon TTD
actions.ar+=/metamorphosis,use_off_gcd=1,if=buff.untethered_rage.up|(!buff.metamorphosis.up&variable.dung_meta_ok)
# Stat buff trinkets before RG so the buff covers the glaive cycle
actions.ar+=/call_action_list,name=trinkets
# Fire stored RG: execute, mark expired or aging, or about to overflow AotG
actions.ar+=/reavers_glaive,if=buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up&(variable.execute|variable.prio_slashes|variable.rm_remains<=0|variable.rm_remains<10|buff.art_of_the_glaive.stack+soul_fragments>=(20-variable.frac_souls))
actions.ar+=/call_action_list,name=ar_glaive_cycle,if=buff.rending_strike.up|buff.glaive_flurry.up|prev_gcd.1.reavers_glaive
# Fiery brand: overcapped charges, or setup for fiery demise window
actions.ar+=/fiery_brand,if=charges>=2|!variable.fiery_demise_active|variable.execute
# SoS for frags, skip during glaive cycle
actions.ar+=/sigil_of_spite,if=variable.dung_cd_ok&!buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up
# Emergency consume: AotG overflow or frag cap in aoe
actions.ar+=/call_action_list,name=ar_quick_consume,if=!buff.reavers_glaive.up&!buff.rending_strike.up&!buff.glaive_flurry.up&(buff.art_of_the_glaive.stack+soul_fragments>=20|(variable.aoe&soul_fragments>=6))
actions.ar+=/immolation_aura,if=in_combat
# FD: high fury, in-flight frags, not near RG. aoe skips the RG check
actions.ar+=/fel_devastation,if=variable.dung_cd_ok&fury>85&(soul_fragments.inactive>1|variable.aoe)&(!variable.rg_imminent|variable.aoe)
actions.ar+=/sigil_of_flame
# SC: 6 frags, prefer fiery demise. OK when mark is aging or in execute
actions.ar+=/soul_carver,if=variable.dung_cd_ok&(variable.fiery_demise_active|(variable.rm_remains<7&buff.art_of_the_glaive.stack+soul_fragments<20)|variable.execute)
actions.ar+=/call_action_list,name=ar_fillers

# Fillers outside glaive cycles. aoe lowers SpB threshold by 1
actions.ar_fillers=spirit_bomb,if=soul_fragments>=(variable.fragment_target-variable.aoe)
actions.ar_fillers+=/immolation_aura,if=variable.time_to_next_glaive>3*gcd.max
actions.ar_fillers+=/felblade,if=cooldown.spirit_bomb.remains<gcd.max&soul_fragments.total>=variable.fragment_target&fury<40
actions.ar_fillers+=/vengeful_retreat,use_off_gcd=1,if=!cooldown.felblade.up&talent.unhindered_assault&cooldown.spirit_bomb.remains<gcd.max&soul_fragments.total>=variable.fragment_target&fury<40
# SC: aoe skips frag>=5 trigger to save frags for SpB
actions.ar_fillers+=/soul_cleave,if=((soul_fragments>=5&!variable.aoe)|soul_fragments<=1|fury.deficit<30)&(fury>=2*action.soul_cleave.cost|cooldown.fracture.charges>=1|cooldown.fracture.remains<=gcd.max)&(!buff.rending_strike.up|!buff.glaive_flurry.up|!variable.prio_slashes)
actions.ar_fillers+=/sigil_of_flame,if=variable.aoe
actions.ar_fillers+=/fracture,if=buff.metamorphosis.up|full_recharge_time<gcd.max|buff.warblades_hunger.stack>=4
actions.ar_fillers+=/immolation_aura,if=!variable.is_dungeon|in_combat
actions.ar_fillers+=/sigil_of_flame
# Unconditional SC fallback with same guards
actions.ar_fillers+=/soul_cleave,if=(fury>=2*action.soul_cleave.cost|cooldown.fracture.charges>=1|cooldown.fracture.remains<=gcd.max)&(!buff.rending_strike.up|!buff.glaive_flurry.up|!variable.prio_slashes)
actions.ar_fillers+=/fracture
actions.ar_fillers+=/felblade
actions.ar_fillers+=/vengeful_retreat,use_off_gcd=1,if=talent.unhindered_assault&!cooldown.felblade.up
actions.ar_fillers+=/soul_carver
actions.ar_fillers+=/fel_devastation
actions.ar_fillers+=/throw_glaive

# GLAIVE CYCLE: alternate RS+GF buffs after RG. Slash = frac first, refresh = SC first
actions.ar_glaive_cycle=use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.2.cooldown.duration=0)&gcd.remains>0.1
actions.ar_glaive_cycle+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.1.cooldown.duration=0)&gcd.remains>0.1
# Fill GCD when waiting for fracture charge (slash) or fury (refresh)
actions.ar_glaive_cycle+=/call_action_list,name=ar_glaive_cycle_filler,if=(variable.prio_slashes&((cooldown.fracture.charges<1&buff.rending_strike.up&buff.glaive_flurry.up)|fury<10))|(!variable.prio_slashes&((buff.rending_strike.up&buff.glaive_flurry.up&fury<35)|(buff.rending_strike.up&!buff.glaive_flurry.up&cooldown.fracture.charges<1)))
actions.ar_glaive_cycle+=/potion,use_off_gcd=1
actions.ar_glaive_cycle+=/invoke_external_buff,name=power_infusion
# Record RM application time when fracture is about to consume RS
actions.ar_glaive_cycle+=/variable,name=last_rm_applied,value=time,if=buff.rending_strike.up
# Slash: fracture first when both buffs up (applies 1-stack RM + triggers slash damage)
actions.ar_glaive_cycle+=/fracture,if=buff.rending_strike.up&buff.glaive_flurry.up&variable.prio_slashes
# Refresh: SC first when both buffs up (subsequent fracture gets 3-stack RM)
actions.ar_glaive_cycle+=/soul_cleave,if=buff.rending_strike.up&buff.glaive_flurry.up&!variable.prio_slashes
# Single-buff continuation
actions.ar_glaive_cycle+=/fracture,if=buff.rending_strike.up&!buff.glaive_flurry.up
actions.ar_glaive_cycle+=/soul_cleave,if=buff.glaive_flurry.up&!buff.rending_strike.up
actions.ar_glaive_cycle+=/call_action_list,name=ar_glaive_cycle_filler

# Glaive cycle filler: non-consuming actions while waiting for resources
actions.ar_glaive_cycle_filler=spirit_bomb,if=fury>75&soul_fragments>=variable.fragment_target
actions.ar_glaive_cycle_filler+=/immolation_aura
actions.ar_glaive_cycle_filler+=/fel_devastation,if=fury>=85
actions.ar_glaive_cycle_filler+=/sigil_of_flame
actions.ar_glaive_cycle_filler+=/felblade
actions.ar_glaive_cycle_filler+=/soul_carver
actions.ar_glaive_cycle_filler+=/vengeful_retreat,use_off_gcd=1,if=talent.unhindered_assault&!cooldown.felblade.up
# SC only when GF already consumed (safe during slash cycles)
actions.ar_glaive_cycle_filler+=/soul_cleave,if=!buff.glaive_flurry.up
actions.ar_glaive_cycle_filler+=/throw_glaive

# Quick consume: rush to AotG 20. aoe uses lower SpB threshold
actions.ar_quick_consume=soul_cleave,if=soul_fragments<(3-variable.aoe)
actions.ar_quick_consume+=/spirit_bomb,if=soul_fragments>=(3-variable.aoe)
actions.ar_quick_consume+=/soul_cleave,if=!variable.aoe

actions.trinkets=use_item,slot=trinket1,if=variable.trinket_1_buffs&variable.dung_cd_ok&(!trinket.2.has_cooldown|trinket.2.cooldown.remains|variable.trinket_priority=1)
actions.trinkets+=/use_item,slot=trinket2,if=variable.trinket_2_buffs&variable.dung_cd_ok&(!trinket.1.has_cooldown|trinket.1.cooldown.remains|variable.trinket_priority=2)
# Non-buff on-use trinkets (direct damage): fire on cooldown, off-GCD
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket1,if=!variable.trinket_1_buffs&(variable.damage_trinket_priority=1|trinket.2.cooldown.remains|trinket.1.cooldown.duration=0)&gcd.remains>0.1
actions.trinkets+=/use_item,use_off_gcd=1,slot=trinket2,if=!variable.trinket_2_buffs&(variable.damage_trinket_priority=2|trinket.1.cooldown.remains|trinket.2.cooldown.duration=0)&gcd.remains>0.1
# End of fight: dump everything
actions.trinkets+=/use_item,slot=trinket1,if=variable.execute
actions.trinkets+=/use_item,slot=trinket2,if=variable.execute
```

Note: the APL is shared between both builds — the `run_action_list` dispatcher at the top
branches to `ar` or `anni` sub-lists based on the active hero tree. The precombat and
global variable setup is identical; both APL files contained the same text.

## Confirmed Spell IDs (SimulationCraft HTML)

IDs from spell-ids-reference.json (Midnight 12.0.5 SimC source), matched by exact key only.

| Ability | Spell ID(s) | School | Type |
|---------|-------------|--------|------|
| Fracture | 263642, 225919, 225921 | physical | cast (multiple: base cast + variants) |
| Immolation Aura | 258920, 258922, 258921 | fire / chaos | cast (multiple: base cast + variants) |
| Sigil of Flame | 204598, 204596 | fire / physical | cast (multiple: base cast + variants) |
| Sigil of Spite | 390163, 389860 | chromatic | cast (multiple: base cast + variants) |
| Soul Cleave | 228477, 228478 | physical | cast (multiple: base cast + variants) |
| Spirit Bomb | 247454, 247455 | fire | cast (multiple: base cast + variants) |
| Throw Glaive | 185123, 337819, 393035, 204157, 346665 | physical | cast (multiple: base cast + variants) |
| Fel Devastation | 212084, 212105, 212106 | fire | cast (multiple: base cast + variants) |
| Felblade | 232893, 213243 | physical / fire | cast (multiple: base cast + variants) |
| Soul Carver | 207407, 214743 | fire | cast (multiple: base cast + variants) |
| Infernal Strike | 189110, 189112 | physical / fire | cast (multiple: base cast + variants) |
| The Hunt | 1246169, 1246168, 370965, 370966 | cosmic / chromatic | cast (multiple: base cast + variants) |
| Reaver's Glaive | 1283344 | physical | cast |
| Art of the Glaive | 444810 | physical | cast |
| Catastrophe | 1256667, 1256676 | shadowflame / cosmic | cast (multiple: base cast + variants) |
| Vengeful Retreat | 198793, 198813 | physical | cast (multiple: base cast + variants) |
| Disrupt | 183752 | chromatic | cast |
| Demon Spikes | 391159, 203720 | physical | cast (multiple: base cast + variants) |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their
spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Wowhead guide pages render client-side**, so the overview / abilities / rotation guide
  *pages* could not be scraped directly for prose. Spec prose was sourced from Icy Veins,
  Method, and Maxroll; **all asserted SpellIDs were confirmed individually on live Wowhead
  spell pages** (Disrupt 183752, Demon Spikes 203720, Fiery Brand 204021, Metamorphosis
  187827, Darkness 196718, Soul Cleave 228477, Spirit Bomb 247454, Fel Devastation 212084,
  Sigil of Flame 204596, Sigil of Silence 202137, Sigil of Misery 207684, Sigil of Chains
  202138, Fracture 263642, Immolation Aura 258920, The Hunt 370965, Imprison 217832, Consume
  Magic 278326, Torment 185245, Infernal Strike 189110, Throw Glaive 204157, Chaos Nova
  179057).
- **SimC talent strings and APL now added** for both Aldrachi Reaver and Annihilator builds
  (see SimulationCraft Reference section above).
- **Damage and rotational spell IDs confirmed** via spell-ids-reference.json for all
  abilities with exact key matches: Fracture, Immolation Aura, Sigil of Flame, Sigil of
  Spite, Soul Cleave, Spirit Bomb, Throw Glaive, Fel Devastation, Felblade, Soul Carver,
  Infernal Strike, The Hunt, Reaver's Glaive, Art of the Glaive, Catastrophe, Vengeful
  Retreat, Disrupt, Demon Spikes. IDs that have multiple variants (base cast + sub-spells)
  are flagged as such in the Confirmed Spell IDs table.
- **Vengeful Retreat SpellID now confirmed** from SimC reference (198793 / 198813); the
  Wowhead-unconfirmed flag above is superseded by the SimC source.
- **No SpellID confirmed for:** Soul Barrier, Last Resort, Sigil of Chains damage component,
  Sigil of Misery, Chaos Nova, Imprison, Torment, Consume Magic, Darkness — these are
  defensive/crowd-control/utility abilities not present in the SimC damage source.
- **Glaive Flurry and Rending Strike** (AR Hero Talent cycle buffs referenced in the APL)
  have no entry in spell-ids-reference.json — not present as standalone damage abilities in
  this SimC extract.
- **Cooldown precision:** Some cooldowns (Demon Spikes, Immolation Aura, Infernal Strike,
  Fiery Brand, Fracture) are charge-based and/or Haste-scaled; values given are approximate
  baseline. Wowhead spell pages sometimes list internal/GCD values (e.g. "1 second") rather
  than the player-facing recharge — verify recharge in-game/SimC if exact numbers matter.
- **Metamorphosis spell page listed "1 second cooldown"** (internal value); the player-facing
  ~2 minute cooldown is from guide prose. Flagged for re-verification.
- **Fiery Brand damage-reduction % (~40%) and Demon Spikes parry %** are from guide prose, not
  a confirmed spell tooltip — treat as approximate.
- **Hero Talents:** Aldrachi Reaver and Annihilator talent strings and APLs are now
  confirmed from SimC. Fel-Scarred is mentioned in some sources but not covered in the SimC
  data. Whether any Hero Talent grants a raid buff/debuff or alters defensive cooldowns in a
  way not captured by the APL was NOT confirmed — verify per build.
- **Consumables/enchants:** Names from Maxroll only; no item/enchant IDs confirmed. Do not
  rely on numeric IDs for these.
- **Maintenance flag:** Re-verify all cooldowns, the Disrupt-vs-Sigil-of-Silence interrupt
  distinction, defensive percentages, and Hero Talent details after ANY 12.x patch. Spell IDs
  do not change, but cooldowns, percentages, and talent layouts can shift between patches.
