# Arcane Mage — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/guide/classes/mage/arcane/overview-pve-dps
> - https://www.wowhead.com/guide/classes/mage/arcane/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-guide
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-gems-enchants-consumables
> - Individual Wowhead spell pages (cited inline beside each confirmed SpellID)
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

All SpellIDs below were confirmed against the specific live Wowhead `/spell=` page named beside them. Any ability without an ID is one whose ID was not confirmed against a fetched source; see Notes and Known Gaps.

---

## Overview

Arcane Mage is a ranged-DPS caster built around burst-window damage and active mana management. The core loop:

1. Build **Arcane Charges** (max 4) with **Arcane Blast**, increasing the damage and mana cost of Arcane spells.
2. Build **Arcane Salvo** stacks (the spec's key tracked buff, replacing the old Arcane Harmony; stacks up to 20, or 25 with the Sunfury hero talent) primarily via **Arcane Missiles** waves (and **Arcane Orb** with the Orb Mastery talent).
3. Unload a maximally-buffed **Arcane Barrage** during burst windows, which consumes charges and Salvo stacks.
4. Align all of this with the two damage cooldowns: **Arcane Surge** and **Touch of the Magi**.

**Damage profile:** Strong, cooldown-gated burst on both single target and AoE, with good "funnel" (priority-target) damage. Damage drops noticeably between burst windows while cooldowns and mana recover.

**Survivability profile:** Cloth caster with a damage-school barrier (Prismatic Barrier), a full immunity (Ice Block), and talent-gated layers. Per the sourced Icy Veins overview, the spec is strong against discrete burst hits (Ice Block) but comparatively weak against sustained damage-over-time pressure.

**Primary weakness:** Mana-/cooldown-dependent — output and resource recovery are tightly coupled to cooldown timing, so being forced off-target or out-of-position during a burst window costs disproportionately.

Hero talents in 12.0.5: **Spellslinger** (the commonly used single-target and AoE choice per Wowhead/Icy Veins) and **Sunfury** (Spellfire Spheres / Arcane Phoenix).

---

## Role in Raid

- **Role:** Pure ranged DPS. No healing, no tanking.
- **Raid buff:** **Arcane Intellect** (SpellID 1459, confirmed `/spell=1459`) — raid-wide +3% Intellect, 100-yard radius. This is the Mage class buff.
- **Bloodlust-equivalent:** **YES.** **Time Warp** (SpellID 80353, confirmed `/spell=80353`) — 30% Haste to the party/raid, 40-second duration, 5-minute cooldown. It applies the same Sated/Exhaustion category as other Lust effects, so it does not stack with Bloodlust/Heroism/Primal Rage.
- **Battle res:** **NO.** Mage cannot combat-resurrect.
- **Group defensive / external:** No targeted external damage reduction for other players in the base kit. **Mass Barrier** (talent, SpellID 414660, confirmed `/spell=414660`) applies the Mage's barrier to allies and is the closest thing to a raid defensive — see Defensives.
- **Mobility:** High. **Blink** (SpellID 1953) / **Shimmer** (SpellID 212653, a talented replacement granting charges and cast-while-moving), plus instant-cast tools and Slow for kiting. Icy Veins describes Arcane as having some of the best on-demand mobility among casters.

---

## Abilities Reference

Confirmed SpellIDs in parentheses with the page they were verified on.

**Core damage / builders / spenders**
- **Arcane Blast** (30451, `/spell=30451`) — primary builder; deals Arcane damage and grants 1 Arcane Charge.
- **Arcane Barrage** (44425, `/spell=44425`) — instant spender; consumes Arcane Charges (and Arcane Salvo). The payoff button.
- **Arcane Missiles** (5143, `/spell=5143`) — channeled; primary generator of Arcane Salvo stacks. Often cast on Clearcasting procs.
- **Arcane Orb** (153626, `/spell=153626`) — instant; grants an Arcane Charge, AoE, and (with Orb Mastery) Salvo stacks.
- **Arcane Pulse** — AoE filler used on 4+ targets. (SpellID not confirmed — see Known Gaps.)

**Cooldowns**
- **Arcane Surge** (365350, `/spell=365350`) — major burst cooldown, 1.5-minute cooldown per the spell page. Deals burst Arcane damage and powers up Arcane spending.
- **Touch of the Magi** (321507, `/spell=321507`) — debuff that accumulates a share of damage dealt to the target and then detonates; grants 4 Arcane Charges on cast. Roughly a 45-second cooldown per Icy Veins (the `/spell=` page lists a 0.5s internal value, not the usable cooldown — see Known Gaps).
- **Evocation** (12051, `/spell=12051`) — channeled mana restoration (+1500% mana regen), used to refuel between burst windows.
- **Presence of Mind** (205025, `/spell=205025`) — 45-second cooldown; makes the next Arcane Blast casts instant (modifies Arcane Blast cast time).
- **Time Warp** (80353, `/spell=80353`) — raid Haste cooldown (see Role in Raid).

**Key passives / procs**
- **Arcane Charges** — resource, max 4, scales Arcane spell damage and cost.
- **Arcane Salvo** — stacking buff (to 20, or 25 Sunfury) that amplifies the next Arcane Barrage. The single most important buff to track.
- **Clearcasting** — proc enabling a free/instant cast, typically funneled into Arcane Missiles for Salvo.
- **Arcane Soul** — rotational buff that prompts Arcane Barrage usage (per Icy Veins priority).

---

## Rotation / Priority

This is **logical priority ordering**, not a DPS benchmark or simmed APL. No user-provided SimC profile was available; treat this as conceptual.

**Opener (cooldown-aligned burst), per Icy Veins/Wowhead:**
1. Pre-build to ~20 Arcane Salvo stacks.
2. Use long-duration externals/potions (15s+).
3. **Arcane Surge**.
4. Use short-duration buffs (<15s).
5. **Touch of the Magi**.
6. Spend a maximally-buffed **Arcane Barrage** into the Touch of the Magi window near the end of Surge.

**Sustained single target (priority):**
1. **Arcane Surge** on cooldown.
2. **Touch of the Magi** on cooldown.
3. **Arcane Barrage** when at 4 Arcane Charges and 20 Arcane Salvo stacks (or when Arcane Soul prompts it).
4. **Arcane Orb** if you have Clearcasting and your previous cast was Arcane Barrage.
5. Spend **Clearcasting** (into Arcane Missiles) before Arcane Surge ends.
6. **Arcane Blast** as filler to rebuild charges.

**AoE (3+ targets):**
- Cast **Arcane Barrage** whenever you can quickly regain Arcane Charges, but not when sacrificing nearly-maxed Salvo stacks — wait for max stacks when the trade favors it.
- On **4+ targets**, swap filler toward **Arcane Pulse** for sustained AoE rather than single-target filler.
- **Arcane Orb** for charge generation and AoE.

---

## Defensives

This section is critical for RaidLens. Each entry includes how to judge correct usage during a damage window.

- **Ice Block** (SpellID 45438, `/spell=45438`) — full immunity to all damage and most harmful effects; also clears many debuffs; ~10s duration. Cooldown not displayed on the spell page ("n/a"), commonly ~4 minutes in modern WoW but **not confirmed** here.
  - *RaidLens usage:* The hardest panic button. If a player took lethal/near-lethal damage from a known one-shot or stacking mechanic and was NOT in Ice Block, and it was off cooldown, that is a missed defensive. Conversely, Ice Block negates everything during its window — damage taken should drop to zero while active.

- **Prismatic Barrier** (SpellID 235450, `/spell=235450`) — absorb shield across all damage schools, plus ~15% damage reduction while active and reduced magic-debuff duration; 30-second cooldown. The Arcane Mage's maintainable barrier.
  - *RaidLens usage:* Should be up going into predictable raid-wide magic damage or a targeted hit. Because the cooldown is short (30s), there is little excuse for it being unused before a telegraphed damage event. Absence of an active barrier during repeated avoidable magic hits is a flaggable pattern.

- **Greater Invisibility** (SpellID 110959, `/spell=110959`; triggers aura 110960, `/spell=110960`) — 2-minute cooldown; drops threat and provides a strong damage reduction while invisible (the exact percentage was not shown on the fetched aura page — see Known Gaps). Effectively a defensive/threat-drop.
  - *RaidLens usage:* A legitimate emergency damage-reduction/immunity-adjacent tool. If used during a lethal window it should sharply cut damage taken; treat its availability like a major defensive when judging an avoidable death.

- **Alter Time** (SpellID 342245, `/spell=342245`; 20s buff) — records the Mage's health/position and returns them to it when reactivated (or on expiry), 1-minute cooldown. Can undo damage taken during the window by snapping health back.
  - *RaidLens usage:* If a player took a large burst but their health was restored shortly after via Alter Time, that is correct defensive play, not a survival failure. When evaluating a death, check whether Alter Time was available/used in the seconds before.

- **Mirror Image** (SpellID 55342, `/spell=55342`) — 2-minute cooldown; summons images and drops threat; provides a minor defensive benefit in some builds.
  - *RaidLens usage:* Primarily a threat tool; treat as a minor/situational defensive. Do not flag its absence as a survival failure unless a build specifically uses it defensively.

- **Ice Cold** (talent, SpellID 414658, `/spell=414658`) — converts Ice Block into a **-70% damage taken** effect (all schools) for ~6s instead of a full immunity, letting the Mage keep acting. Talent-gated; not all builds have it.
  - *RaidLens usage:* If specced, an Ice Block usage that reduced (rather than zeroed) damage taken indicates Ice Cold. A correct use is reducing damage during a big hit while continuing to DPS/move. Only judge as a missed defensive if the talent is confirmed present.

- **Mass Barrier** (talent, SpellID 414660, `/spell=414660`) — 3-minute cooldown; applies the Mage's barrier to nearby allies. Talent-gated raid utility / soft raid defensive.
  - *RaidLens usage:* If specced, this should be timed to a known raid-wide damage event. Treat as a raid cooldown when present; its absence is only flaggable if the talent is confirmed.

---

## Utility

- **Interrupt:** **Counterspell** (SpellID 2139, confirmed `/spell=2139`) — 25-second cooldown; interrupts the target's cast and locks that spell school for 7s. This is the Mage's **only** raid-usable interrupt. RaidLens should treat Arcane Mage as having a real interrupt and may flag missed interrupts on mechanics that require a kick.
- **Crowd control:**
  - **Polymorph** (SpellID 118, `/spell=118`) — incapacitate (sheep); breaks on damage.
  - **Slow** (SpellID 31589, `/spell=31589`) — single-target -50% movement speed, 15s.
  - **Supernova** (knockback/CC, per Icy Veins/Wowhead overview) — SpellID not confirmed; see Known Gaps.
  - Talented stuns/roots may exist (e.g., Ring of Frost) but were not confirmed live.
- **Dispels:**
  - **Remove Curse** (SpellID 475, `/spell=475`) — removes **Curse**-type effects. Range 40 yards, so it can be cast on allies as well as self. Mage cannot dispel Magic/Poison/Disease.
  - **Spellsteal** (SpellID 30449, `/spell=30449`) — removes (and steals) a beneficial Magic effect from an **enemy**. This is an offensive dispel, not an ally dispel.
- **Externals:** None targeted onto other players for damage reduction in the base kit. Closest is Mass Barrier (talent) which shields allies.
- **Raid buffs/debuffs:** Arcane Intellect (1459) raid-wide; Time Warp (80353) raid Haste/Lust.
- **Movement tools:** **Blink** (1953, 20-yard teleport, breaks roots/stuns on use) or its talented replacement **Shimmer** (212653, typically two charges, usable while casting); plus instant-cast spending and Slow for kiting.

---

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 gems/enchants/consumables page (fetched June 2026) and corroborated by web search. **Exact item IDs were NOT confirmed** — names only, and sources disagreed slightly on the best flask. Treat as guidance, re-verify before relying on specifics.

- **Flask/Phial:** Flask of Thalassian Resistance (Icy Veins page); search results also cited "Flask of the Magisters" as a higher-DPS alternative. Discrepancy unresolved — see Known Gaps.
- **Food:** Feasts "Quel'dorei Medley" / "Blooming Feast"; personal food "Champion's Bento" (Icy Veins). A web-search result cited "Silvermoon Parade" — unresolved.
- **Combat potion:** Light's Potential (damage); Silvermoon Health Potion (healing).
- **Augment Rune:** Void-Touched Augment Rune (listed as the only current option).
- **Weapon Oil:** Thalassian Phoenix Oil.
- **Gems:** Indecipherable Eversong Diamond (unique epic); a secondary-stat rare gem (Icy Veins listed a Versatility variant; search cited a Mastery variant — unresolved).
- **Enchants (Icy Veins):** Weapon — Acuity of the Ren'dorei; Chest — Mark of the Worldsoul; Legs — Arcanoweave Spellthread; Rings — Eyes of the Eagle.

These do not affect RaidLens mistake-detection logic and are included for completeness only.

---

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Spellslinger** and **Sunfury**.

### Talent Import Strings

**Spellslinger:**
```
C4DAAAAAAAAAAAAAAAAAAAAAAYGGLzMzswMzQzMzAAAwAAgAmZmZZZmZYBAgtxMzMmtFLzMzYmxYMzMGLMzMjZAAGAAAzsAAmBADD
```

**Sunfury:**
```
C4DAAAAAAAAAAAAAAAAAAAAAAYGmZZmZmFmZGamxAAAwAAmZmmlltZAgYDAgNmZmxYzyMzMLzMGjZmxYhZmZMDAwAAAMAzMgZAwwA
```

### Metrics

Metrics not captured in source.

### Damage Distribution (SimC, share of total)

**Spellslinger** (single-target Patchwerk):

| Ability | Share |
|---|---|
| Arcane Barrage | 28.9% |
| Arcane Blast | 26.3% |
| Arcane Splinter | 16.5% |
| Arcane Assault | 0.7% |
| Arcane Missiles | 0.6% |

Note: Arcane Barrage uses the parenthesized value (28.9%) from the SimC output, which represents the direct-hit share after removing cleave variance. Arcane Splinter (16.5%) is a notable contributor — it is a Spellslinger-specific passive that fires bonus arcane splinters during Arcane Barrage and Surge windows. In RaidLens terms, if a Spellslinger Arcane Mage is not generating Arcane Splinter damage, that is a strong signal they are not spending Arcane Barrage correctly during their burst window.

**Sunfury** (single-target Patchwerk):

| Ability | Share |
|---|---|
| Arcane Missiles | 24.9% |
| Arcane Blast | 24.7% |
| Meteorite | 4.5% |
| Pyroblast | 0.9% |
| Greater Pyroblast | 0.8% |
| Arcane Barrage | 0.7% |
| Arcane Assault | 0.7% |
| Meteorite (_bug_impact) | 0.4% |
| Meteorite (_impact) | 0.3% |

Note: Sunfury's damage profile is fundamentally different from Spellslinger's — Arcane Missiles and Arcane Blast contribute roughly equally as the top two sources (~25% each), while Arcane Barrage drops sharply (0.7% vs 28.9% in Spellslinger) because Sunfury Barrages in increments to trigger Meteorite generation from the Arcane Phoenix rather than holding for a single massive Barrage. Meteorite and fire-school spells (Pyroblast, Greater Pyroblast) represent Sunfury-specific output that is entirely absent in Spellslinger.

### Action Priority List — Spellslinger

```
actions.precombat=arcane_intellect
actions.precombat+=/variable,name=opener,op=set,value=1
actions.precombat+=/variable,name=pulse_aoe_count,op=set,value=2+talent.orb_mastery
actions.precombat+=/variable,name=funnel,op=reset,default=0
actions.precombat+=/variable,name=sf_touch_surge,op=reset,default=0
actions.precombat+=/variable,name=pooling,op=reset,default=1
actions.precombat+=/variable,name=time_for_pooling,op=set,value=(((fight_remains%%95)<(7+(2*talent.arcane_pulse)))|((fight_remains%%95)>(20+(2*talent.arcane_pulse))))&variable.pooling
actions.precombat+=/variable,name=did_not_pool,op=set,value=((fight_remains%%95)<(7+(2*talent.arcane_pulse)))|((fight_remains%%95)>(20+(2*talent.arcane_pulse)))&variable.pooling
actions.precombat+=/variable,name=20ssteroid_trinket_equipped,op=set,value=equipped.signet_of_the_priory|equipped.incorporeal_essencegorger|equipped.sealed_chaos_urn
actions.precombat+=/variable,name=15ssteroid_trinket_equipped,op=set,value=equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity
actions.precombat+=/variable,name=12ssteroid_trinket_equipped,op=set,value=equipped.nevermelting_ice_crystal|equipped.ever_collapsing_void_fissure
actions.precombat+=/variable,name=steroid_trinket_equipped,op=set,value=equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity|equipped.nevermelting_ice_crystal|equipped.ever_collapsing_void_fissure|equipped.signet_of_the_priory|equipped.incorporeal_essencegorger|equipped.sealed_chaos_urn
actions.precombat+=/variable,name=nonsteroid_trinket_equipped,op=set,value=equipped.mereldars_toll|equipped.perfidious_projector|equipped.chaotic_nethergate|equipped.wraps_of_cosmic_madness|equipped.astalors_anguish_agitator
actions.precombat+=/snapshot_stats
actions.precombat+=/mirror_image
actions.precombat+=/potion,if=talent.spellfire_spheres&!variable.sf_touch_surge
actions.precombat+=/arcane_surge,if=(talent.spellfire_spheres&!variable.sf_touch_surge)|(!variable.time_for_pooling&talent.splintering_sorcery)
actions.precombat+=/arcane_pulse,if=(talent.splintering_sorcery|variable.sf_touch_surge)&talent.arcane_pulse&(active_enemies>=variable.pulse_aoe_count)
actions.precombat+=/arcane_blast

# Executed every time the actor is available.
actions=counterspell
# Steroid racials and potions are used with cds basically based on cooldown and overlap with the most effects. Non-steroid racials are not worth using under any conditions currently and would need substantial buffs to become useable over our baseline spells and abilities.
actions+=/invoke_external_buff,name=power_infusion,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
actions+=/potion,if=(cooldown.arcane_surge.ready&buff.arcane_salvo.react=20+(5*talent.spellfire_spheres))|(buff.arcane_surge.up&(prev_gcd.1.arcane_surge|fight_remains<90))|fight_remains<30|(fight_remains>320&fight_remains<330)
actions+=/berserking,if=(buff.arcane_surge.up&debuff.touch_of_the_magi.up)|fight_remains<13
actions+=/blood_fury,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
actions+=/fireblood,if=(buff.arcane_surge.up&((debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge))|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(2+gcd.remains))))|fight_remains<9
actions+=/ancestral_call,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
# Use trinkets condition essentially favors using steroid trinkets during cds, avoids using non-steroids in ways that would conflict with using steroids in cds, otherwise just sends if you don't have a steroid trinket. TODO: Recheck after all trinkets are implemented
actions+=/use_items,if=((talent.splintering_sorcery|variable.sf_touch_surge)&((buff.arcane_surge.up&((variable.12ssteroid_trinket_equipped&debuff.touch_of_the_magi.up)|variable.15ssteroid_trinket_equipped))|(cooldown.arcane_surge.ready&variable.20ssteroid_trinket_equipped)))|(talent.spellfire_spheres&buff.arcane_surge.up&((variable.12ssteroid_trinket_equipped&debuff.touch_of_the_magi.up)|(variable.15ssteroid_trinket_equipped&buff.arcane_surge.remains<(9+gcd.remains)))|(buff.arcane_surge.remains<(14+gcd.remains)&variable.20ssteroid_trinket_equipped))|(fight_remains<13&variable.12ssteroid_trinket_equipped)|(fight_remains<16&variable.15ssteroid_trinket_equipped)|(fight_remains<21&variable.20ssteroid_trinket_equipped)|(variable.nonsteroid_trinket_equipped&((buff.arcane_surge.down&cooldown.arcane_surge.remains>20)|!variable.steroid_trinket_equipped))
# End of fight conditions for spending your last bit of resources.
actions+=/arcane_barrage,if=fight_remains<gcd.max*2
actions+=/arcane_missiles,if=fight_remains<execute_time*(1+buff.clearcasting.react)&buff.clearcasting.react&buff.arcane_salvo.stack>=13+(5*talent.spellfire_salvo)&!talent.orb_mastery,chain=1
actions+=/arcane_orb,if=fight_remains<execute_time*(1+buff.clearcasting.react)&buff.clearcasting.react&buff.arcane_salvo.stack>=13+(5*talent.spellfire_salvo)&talent.orb_mastery
actions+=/variable,name=opener,op=set,if=debuff.touch_of_the_magi.up&variable.opener,value=0
actions+=/variable,name=time_for_pooling,op=set,if=!variable.opener,value=1
# This line dictates pooling logic around Touch, Surge, and Soul, the line is daunting but the basic idea is that you don't spend Barrage near your cooldowns unless you have a reliable way to get them back; in AOE this is a little more relaxed. TODO: look into simplifying as well as a similar conditional for Spellslinger if it would help.
actions+=/variable,name=sunfury_hold_for_cds,op=set,value=((buff.arcane_surge.down&cooldown.touch_of_the_magi.remains>gcd.max*(4-(active_enemies>=3)-((2*(buff.overpowered_missiles.react&buff.clearcasting.react))<?((cooldown.arcane_orb.charges_fractional>0.95|buff.clearcasting.react)&active_enemies>=3)))&cooldown.arcane_surge.remains>gcd.max*(4-(active_enemies>=3)-((2*(buff.overpowered_missiles.react&buff.clearcasting.react))<?((cooldown.arcane_orb.charges_fractional>0.95|buff.clearcasting.react)&active_enemies>=3))))|((buff.clearcasting.react|((buff.arcane_salvo.react=25|cooldown.arcane_orb.charges_fractional>0.95)&active_enemies>=3))&buff.arcane_surge.remains>gcd.max*(6-(2*(buff.overpowered_missiles.react<?(active_enemies>=3))))))
# cooldowns section dictates actions that only happen around cooldowns, spellslinger_orbm is for Orb Mastery builds, spellslinger is for non-Orb Mastery builds, sunfury supports only missile builds. TODO: Add Orb Mastery support for Sunfury, much of Sunfury likely needs some reassessment. Look into Charged Missiles tailored sequences for both hero trees.
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=spellslinger_orbm,if=talent.splintering_sorcery&talent.orb_mastery
actions+=/call_action_list,name=spellslinger,if=talent.splintering_sorcery&!talent.orb_mastery
actions+=/call_action_list,name=sunfury,if=!talent.splintering_sorcery
actions+=/arcane_barrage,if=(time>5&!prev_gcd.1.arcane_surge)|(prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=(20+(5*talent.spellfire_salvo)))

# Orb Mastery Slinger builds throw an Orb right after Blasting on pull, other Spellslinger builds will just go for Touch, and Sunfury opens by spending the Clearcasting from Surge on pull.
actions.cooldowns=arcane_orb,if=(talent.splintering_sorcery|variable.sf_touch_surge)&variable.opener&variable.time_for_pooling,line_cd=30
actions.cooldowns+=/arcane_orb,if=talent.splintering_sorcery&prev_off_gcd.touch_of_the_magi&time<5&buff.arcane_salvo.react<=14,line_cd=999
actions.cooldowns+=/arcane_orb,if=!variable.did_not_pool,line_cd=999
actions.cooldowns+=/arcane_missiles,if=talent.spellfire_spheres&!variable.sf_touch_surge&variable.opener,line_cd=30
# Spellslinger builds Salvo before going into cds the first time.
actions.cooldowns+=/arcane_pulse,if=(talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_salvo.react<20&(variable.opener|(talent.orb_mastery&cooldown.arcane_surge.remains<(gcd.max*(mana.pct%(8+(8*(active_enemies>variable.pulse_aoe_count)))))))&(active_enemies>=variable.pulse_aoe_count)
actions.cooldowns+=/arcane_blast,if=(talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_salvo.react<20&((variable.opener&variable.time_for_pooling)|(!variable.opener&talent.orb_mastery&cooldown.arcane_surge.remains<(gcd.max*(mana.pct%(8+(8*(active_enemies>=2)))))))
actions.cooldowns+=/wait,sec=0.05,if=(prev_gcd.1.arcane_surge&gcd.remains=0)|(prev_off_gcd.touch_of_the_magi&gcd.remains=0)|(prev_off_gcd.presence_of_mind&gcd.remains=0),line_cd=1
# Spellslinger uses Touch after Surge, Sunfury holds touch for the end of Surge to capture Soul and the run-off of resources after Soul.
actions.cooldowns+=/touch_of_the_magi,use_off_gcd=1,if=((talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_surge.up)|(talent.spellfire_spheres&!variable.sf_touch_surge&buff.arcane_surge.up&buff.arcane_surge.remains<(5+gcd.remains))|(cooldown.touch_of_the_magi.ready&cooldown.arcane_surge.remains>30&buff.arcane_surge.down)
actions.cooldowns+=/arcane_surge
actions.cooldowns+=/cancel_action,if=action.evocation.channeling&mana.pct>=95
actions.cooldowns+=/evocation,if=mana.pct<10&buff.arcane_surge.down&debuff.touch_of_the_magi.down&cooldown.arcane_surge.remains>10

# Orb when you need charges, if you have Clearcasting skip this and get your Charges from Missiles.
actions.spellslinger=arcane_orb,if=buff.arcane_charge.stack<(3+(active_enemies>=2))&(((buff.clearcasting.react=0&talent.high_voltage)|(buff.clearcasting.react&buff.arcane_salvo.react>=12))|(active_enemies>=2))&cooldown.touch_of_the_magi.remains>gcd.max*4
# Barrage at 20 Salvo or 18+ with Orb Barrage, Charges are also optional with Orb Barrage. Hold for CDs if near.
actions.spellslinger+=/arcane_barrage,if=buff.arcane_salvo.react>=20&(buff.arcane_charge.stack=4|talent.orb_barrage)&cooldown.touch_of_the_magi.remains>gcd.max*(4-(2*(active_enemies>=2)))
# Barrage in AOE when you can recoup Charges with Missiles or Orb.
actions.spellslinger+=/arcane_barrage,if=active_enemies>=2&buff.arcane_charge.stack=4&buff.clearcasting.react&buff.overpowered_missiles.react&talent.high_voltage&buff.arcane_salvo.react>5&buff.arcane_salvo.react<14&cooldown.touch_of_the_magi.remains>gcd.max*4
# Missiles for Charges with HV and Salvo stacks.
actions.spellslinger+=/arcane_missiles,if=buff.clearcasting.react&((buff.arcane_salvo.stack<(10+(5*(buff.overpowered_missiles.react=0))))|(buff.arcane_charge.stack<2&talent.high_voltage&active_enemies>=2)),chain=1
actions.spellslinger+=/presence_of_mind,use_off_gcd=1,if=buff.arcane_charge.stack<2&(buff.clearcasting.react=0|!talent.high_voltage&cooldown.arcane_orb.charges_fractional<0.95)&!prev_gcd.1.arcane_orb&!prev_gcd.1.arcane_missiles
actions.spellslinger+=/arcane_blast,if=buff.presence_of_mind.up
actions.spellslinger+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.spellslinger+=/arcane_blast
actions.spellslinger+=/arcane_barrage,if=!prev_gcd.1.arcane_surge|prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=20

# Orb after Barraging with Clearcasting to recoup Charges and Salvo, in AOE just send as long as you won't overcap Salvo. If you don't have CC, only Orb if you'll overcap Orb and need Charges.
actions.spellslinger_orbm=arcane_orb,if=(prev_gcd.1.arcane_barrage|active_enemies>=4)&((buff.clearcasting.react&buff.arcane_salvo.react<=14)|(buff.clearcasting.react=0&(cooldown.arcane_orb.charges_fractional>1.9)&buff.arcane_salvo.react<=18))
# Barrage at 20 stacks, save for Touch, Barrage the end of Touch or Surge for Splinters.
actions.spellslinger_orbm+=/arcane_barrage,if=(buff.arcane_charge.stack=4|talent.orb_barrage)&buff.arcane_salvo.react>=20&cooldown.touch_of_the_magi.remains>gcd.max*(4-(2*(active_enemies>=2)))|(((buff.arcane_surge.remains<gcd.max&buff.arcane_surge.up)|(debuff.touch_of_the_magi.remains<gcd.max&debuff.touch_of_the_magi.up))&buff.arcane_salvo.react>=15)
# Missiles only if you have HV or OPM specced and in minimal situations.
actions.spellslinger_orbm+=/arcane_missiles,if=(talent.high_voltage|talent.overpowered_missiles|(buff.clearcasting.react=3))&buff.clearcasting.react&buff.arcane_salvo.react<=(10+(5*(buff.overpowered_missiles.react=0)))&!prev_gcd.1.arcane_orb&(buff.arcane_surge.down|(talent.high_voltage&active_enemies=1))&(active_enemies<2|talent.overpowered_missiles),chain=1
# Small benefit when playing with Pulse, due to its mana consumption, its a gain for most profiles to Barrage a little bit more often outside of cds when you lack Orbs.
actions.spellslinger_orbm+=/arcane_barrage,if=buff.arcane_salvo.react<7&buff.arcane_surge.down&buff.touch_of_the_magi.down&buff.arcane_charge.stack=4&talent.resonance&talent.arcane_pulse
actions.spellslinger_orbm+=/presence_of_mind,use_off_gcd=1,if=buff.arcane_charge.stack<2&(buff.clearcasting.react=0|!talent.high_voltage&cooldown.arcane_orb.charges_fractional<0.95)&!prev_gcd.1.arcane_orb&!prev_gcd.1.arcane_missiles
actions.spellslinger_orbm+=/arcane_blast,if=buff.presence_of_mind.up
actions.spellslinger_orbm+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.spellslinger_orbm+=/arcane_blast
actions.spellslinger_orbm+=/arcane_barrage,if=(time>5&!prev_gcd.1.arcane_surge)|(prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=20)

# Basic idea is simple, Barrage to spend Salvo in increments of 6 to optimize around Meteorite generation when possible with Clearcasting when you run High Voltage, or Orb CD is up in AOE, until you get to the point where 25 isn't far away, for a little more dps you can pool for Touch, Surge, and Soul, pooling logic is above. Extra conditions beyond that are to Barrage at the start and end of Touch and during Soul.
actions.sunfury=arcane_barrage,if=(buff.arcane_charge.stack=4&variable.sunfury_hold_for_cds&((((buff.clearcasting.react&talent.high_voltage)|(cooldown.arcane_orb.charges_fractional>0.95&active_enemies>=3))&((buff.arcane_salvo.react>=6&buff.arcane_salvo.react<7)|(buff.arcane_salvo.react>=12&buff.arcane_salvo.react<13)|(buff.arcane_salvo.react>=18&buff.arcane_salvo.react<19)|((buff.arcane_salvo.react<19)&!talent.resonance&active_enemies>=3)))|buff.arcane_salvo.stack=25))|prev_off_gcd.touch_of_the_magi|(debuff.touch_of_the_magi.remains<gcd.max&debuff.touch_of_the_magi.up&buff.arcane_charge.stack=4)|buff.arcane_soul.up
# Missile if you have less than 15 Salvo or 10 with OPM proc except when Surge is up; send Missiles if you have both Surge and Touch going.
actions.sunfury+=/arcane_missiles,if=buff.clearcasting.react&((((cooldown.touch_of_the_magi.remains>gcd.max*(8-(4*variable.sf_touch_surge))&buff.overpowered_missiles.react=0)|buff.arcane_surge.up|buff.arcane_charge.stack<3|buff.clearcasting.react>1)&buff.arcane_salvo.react<(15-(5*(buff.overpowered_missiles.react&buff.arcane_surge.down))))|(debuff.touch_of_the_magi.up&buff.arcane_surge.up)),chain=1
actions.sunfury+=/arcane_orb,if=buff.arcane_charge.stack<2
actions.sunfury+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.sunfury+=/arcane_explosion,if=active_enemies>3&buff.arcane_charge.stack<2&!talent.impetus
# Barrage can be used if you didn't have any of the charge generators above to get over 1 stacks. This is also not default behavior but is interestingly neutral. actions.sunfury+=/arcane_barrage,if=buff.arcane_charge.stack<2
actions.sunfury+=/arcane_blast
actions.sunfury+=/arcane_barrage,if=(variable.sf_touch_surge&(!prev_gcd.1.arcane_surge|prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=25))|!variable.sf_touch_surge
```

### Action Priority List — Sunfury

```
actions.precombat=arcane_intellect
actions.precombat+=/variable,name=opener,op=set,value=1
actions.precombat+=/variable,name=pulse_aoe_count,op=set,value=2+talent.orb_mastery
actions.precombat+=/variable,name=funnel,op=reset,default=0
actions.precombat+=/variable,name=sf_touch_surge,op=reset,default=0
actions.precombat+=/variable,name=pooling,op=reset,default=1
actions.precombat+=/variable,name=time_for_pooling,op=set,value=(((fight_remains%%95)<(7+(2*talent.arcane_pulse)))|((fight_remains%%95)>(20+(2*talent.arcane_pulse))))&variable.pooling
actions.precombat+=/variable,name=did_not_pool,op=set,value=((fight_remains%%95)<(7+(2*talent.arcane_pulse)))|((fight_remains%%95)>(20+(2*talent.arcane_pulse)))&variable.pooling
actions.precombat+=/variable,name=20ssteroid_trinket_equipped,op=set,value=equipped.signet_of_the_priory|equipped.incorporeal_essencegorger|equipped.sealed_chaos_urn
actions.precombat+=/variable,name=15ssteroid_trinket_equipped,op=set,value=equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity
actions.precombat+=/variable,name=12ssteroid_trinket_equipped,op=set,value=equipped.nevermelting_ice_crystal|equipped.ever_collapsing_void_fissure
actions.precombat+=/variable,name=steroid_trinket_equipped,op=set,value=equipped.lily_of_the_eternal_weave|equipped.sunblood_amethyst|equipped.astral_gladiators_badge_of_ferocity|equipped.arazs_ritual_forge|equipped.freightrunners_flask|equipped.emberwing_feather|equipped.vaelgors_final_stare|equipped.galactic_gladiators_badge_of_ferocity|equipped.nevermelting_ice_crystal|equipped.ever_collapsing_void_fissure|equipped.signet_of_the_priory|equipped.incorporeal_essencegorger|equipped.sealed_chaos_urn
actions.precombat+=/variable,name=nonsteroid_trinket_equipped,op=set,value=equipped.mereldars_toll|equipped.perfidious_projector|equipped.chaotic_nethergate|equipped.wraps_of_cosmic_madness|equipped.astalors_anguish_agitator
actions.precombat+=/snapshot_stats
actions.precombat+=/mirror_image
actions.precombat+=/potion,if=talent.spellfire_spheres&!variable.sf_touch_surge
actions.precombat+=/arcane_surge,if=(talent.spellfire_spheres&!variable.sf_touch_surge)|(!variable.time_for_pooling&talent.splintering_sorcery)
actions.precombat+=/arcane_pulse,if=(talent.splintering_sorcery|variable.sf_touch_surge)&talent.arcane_pulse&(active_enemies>=variable.pulse_aoe_count)
actions.precombat+=/arcane_blast

# Executed every time the actor is available.
actions=counterspell
# Steroid racials and potions are used with cds basically based on cooldown and overlap with the most effects. Non-steroid racials are not worth using under any conditions currently and would need substantial buffs to become useable over our baseline spells and abilities.
actions+=/invoke_external_buff,name=power_infusion,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
actions+=/potion,if=(cooldown.arcane_surge.ready&buff.arcane_salvo.react=20+(5*talent.spellfire_spheres))|(buff.arcane_surge.up&(prev_gcd.1.arcane_surge|fight_remains<90))|fight_remains<30|(fight_remains>320&fight_remains<330)
actions+=/berserking,if=(buff.arcane_surge.up&debuff.touch_of_the_magi.up)|fight_remains<13
actions+=/blood_fury,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
actions+=/fireblood,if=(buff.arcane_surge.up&((debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge))|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(2+gcd.remains))))|fight_remains<9
actions+=/ancestral_call,if=(buff.arcane_surge.up&(debuff.touch_of_the_magi.up&(talent.splintering_sorcery|variable.sf_touch_surge)|(talent.spellfire_spheres&buff.arcane_surge.up&buff.arcane_surge.remains<(9+gcd.remains))))|fight_remains<16
# Use trinkets condition essentially favors using steroid trinkets during cds, avoids using non-steroids in ways that would conflict with using steroids in cds, otherwise just sends if you don't have a steroid trinket. TODO: Recheck after all trinkets are implemented
actions+=/use_items,if=((talent.splintering_sorcery|variable.sf_touch_surge)&((buff.arcane_surge.up&((variable.12ssteroid_trinket_equipped&debuff.touch_of_the_magi.up)|variable.15ssteroid_trinket_equipped))|(cooldown.arcane_surge.ready&variable.20ssteroid_trinket_equipped)))|(talent.spellfire_spheres&buff.arcane_surge.up&((variable.12ssteroid_trinket_equipped&debuff.touch_of_the_magi.up)|(variable.15ssteroid_trinket_equipped&buff.arcane_surge.remains<(9+gcd.remains)))|(buff.arcane_surge.remains<(14+gcd.remains)&variable.20ssteroid_trinket_equipped))|(fight_remains<13&variable.12ssteroid_trinket_equipped)|(fight_remains<16&variable.15ssteroid_trinket_equipped)|(fight_remains<21&variable.20ssteroid_trinket_equipped)|(variable.nonsteroid_trinket_equipped&((buff.arcane_surge.down&cooldown.arcane_surge.remains>20)|!variable.steroid_trinket_equipped))
# End of fight conditions for spending your last bit of resources.
actions+=/arcane_barrage,if=fight_remains<gcd.max*2
actions+=/arcane_missiles,if=fight_remains<execute_time*(1+buff.clearcasting.react)&buff.clearcasting.react&buff.arcane_salvo.stack>=13+(5*talent.spellfire_salvo)&!talent.orb_mastery,chain=1
actions+=/arcane_orb,if=fight_remains<execute_time*(1+buff.clearcasting.react)&buff.clearcasting.react&buff.arcane_salvo.stack>=13+(5*talent.spellfire_salvo)&talent.orb_mastery
actions+=/variable,name=opener,op=set,if=debuff.touch_of_the_magi.up&variable.opener,value=0
actions+=/variable,name=time_for_pooling,op=set,if=!variable.opener,value=1
# This line dictates pooling logic around Touch, Surge, and Soul, the line is daunting but the basic idea is that you don't spend Barrage near your cooldowns unless you have a reliable way to get them back; in AOE this is a little more relaxed. TODO: look into simplifying as well as a similar conditional for Spellslinger if it would help.
actions+=/variable,name=sunfury_hold_for_cds,op=set,value=((buff.arcane_surge.down&cooldown.touch_of_the_magi.remains>gcd.max*(4-(active_enemies>=3)-((2*(buff.overpowered_missiles.react&buff.clearcasting.react))<?((cooldown.arcane_orb.charges_fractional>0.95|buff.clearcasting.react)&active_enemies>=3)))&cooldown.arcane_surge.remains>gcd.max*(4-(active_enemies>=3)-((2*(buff.overpowered_missiles.react&buff.clearcasting.react))<?((cooldown.arcane_orb.charges_fractional>0.95|buff.clearcasting.react)&active_enemies>=3))))|((buff.clearcasting.react|((buff.arcane_salvo.react=25|cooldown.arcane_orb.charges_fractional>0.95)&active_enemies>=3))&buff.arcane_surge.remains>gcd.max*(6-(2*(buff.overpowered_missiles.react<?(active_enemies>=3))))))
# cooldowns section dictates actions that only happen around cooldowns, spellslinger_orbm is for Orb Mastery builds, spellslinger is for non-Orb Mastery builds, sunfury supports only missile builds. TODO: Add Orb Mastery support for Sunfury, much of Sunfury likely needs some reassessment. Look into Charged Missiles tailored sequences for both hero trees.
actions+=/call_action_list,name=cooldowns
actions+=/call_action_list,name=spellslinger_orbm,if=talent.splintering_sorcery&talent.orb_mastery
actions+=/call_action_list,name=spellslinger,if=talent.splintering_sorcery&!talent.orb_mastery
actions+=/call_action_list,name=sunfury,if=!talent.splintering_sorcery
actions+=/arcane_barrage,if=(time>5&!prev_gcd.1.arcane_surge)|(prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=(20+(5*talent.spellfire_salvo)))

# Orb Mastery Slinger builds throw an Orb right after Blasting on pull, other Spellslinger builds will just go for Touch, and Sunfury opens by spending the Clearcasting from Surge on pull.
actions.cooldowns=arcane_orb,if=(talent.splintering_sorcery|variable.sf_touch_surge)&variable.opener&variable.time_for_pooling,line_cd=30
actions.cooldowns+=/arcane_orb,if=talent.splintering_sorcery&prev_off_gcd.touch_of_the_magi&time<5&buff.arcane_salvo.react<=14,line_cd=999
actions.cooldowns+=/arcane_orb,if=!variable.did_not_pool,line_cd=999
actions.cooldowns+=/arcane_missiles,if=talent.spellfire_spheres&!variable.sf_touch_surge&variable.opener,line_cd=30
# Spellslinger builds Salvo before going into cds the first time.
actions.cooldowns+=/arcane_pulse,if=(talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_salvo.react<20&(variable.opener|(talent.orb_mastery&cooldown.arcane_surge.remains<(gcd.max*(mana.pct%(8+(8*(active_enemies>variable.pulse_aoe_count)))))))&(active_enemies>=variable.pulse_aoe_count)
actions.cooldowns+=/arcane_blast,if=(talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_salvo.react<20&((variable.opener&variable.time_for_pooling)|(!variable.opener&talent.orb_mastery&cooldown.arcane_surge.remains<(gcd.max*(mana.pct%(8+(8*(active_enemies>=2)))))))
actions.cooldowns+=/wait,sec=0.05,if=(prev_gcd.1.arcane_surge&gcd.remains=0)|(prev_off_gcd.touch_of_the_magi&gcd.remains=0)|(prev_off_gcd.presence_of_mind&gcd.remains=0),line_cd=1
# Spellslinger uses Touch after Surge, Sunfury holds touch for the end of Surge to capture Soul and the run-off of resources after Soul.
actions.cooldowns+=/touch_of_the_magi,use_off_gcd=1,if=((talent.splintering_sorcery|variable.sf_touch_surge)&buff.arcane_surge.up)|(talent.spellfire_spheres&!variable.sf_touch_surge&buff.arcane_surge.up&buff.arcane_surge.remains<(5+gcd.remains))|(cooldown.touch_of_the_magi.ready&cooldown.arcane_surge.remains>30&buff.arcane_surge.down)
actions.cooldowns+=/arcane_surge
actions.cooldowns+=/cancel_action,if=action.evocation.channeling&mana.pct>=95
actions.cooldowns+=/evocation,if=mana.pct<10&buff.arcane_surge.down&debuff.touch_of_the_magi.down&cooldown.arcane_surge.remains>10

# Orb when you need charges, if you have Clearcasting skip this and get your Charges from Missiles.
actions.spellslinger=arcane_orb,if=buff.arcane_charge.stack<(3+(active_enemies>=2))&(((buff.clearcasting.react=0&talent.high_voltage)|(buff.clearcasting.react&buff.arcane_salvo.react>=12))|(active_enemies>=2))&cooldown.touch_of_the_magi.remains>gcd.max*4
# Barrage at 20 Salvo or 18+ with Orb Barrage, Charges are also optional with Orb Barrage. Hold for CDs if near.
actions.spellslinger+=/arcane_barrage,if=buff.arcane_salvo.react>=20&(buff.arcane_charge.stack=4|talent.orb_barrage)&cooldown.touch_of_the_magi.remains>gcd.max*(4-(2*(active_enemies>=2)))
# Barrage in AOE when you can recoup Charges with Missiles or Orb.
actions.spellslinger+=/arcane_barrage,if=active_enemies>=2&buff.arcane_charge.stack=4&buff.clearcasting.react&buff.overpowered_missiles.react&talent.high_voltage&buff.arcane_salvo.react>5&buff.arcane_salvo.react<14&cooldown.touch_of_the_magi.remains>gcd.max*4
# Missiles for Charges with HV and Salvo stacks.
actions.spellslinger+=/arcane_missiles,if=buff.clearcasting.react&((buff.arcane_salvo.stack<(10+(5*(buff.overpowered_missiles.react=0))))|(buff.arcane_charge.stack<2&talent.high_voltage&active_enemies>=2)),chain=1
actions.spellslinger+=/presence_of_mind,use_off_gcd=1,if=buff.arcane_charge.stack<2&(buff.clearcasting.react=0|!talent.high_voltage&cooldown.arcane_orb.charges_fractional<0.95)&!prev_gcd.1.arcane_orb&!prev_gcd.1.arcane_missiles
actions.spellslinger+=/arcane_blast,if=buff.presence_of_mind.up
actions.spellslinger+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.spellslinger+=/arcane_blast
actions.spellslinger+=/arcane_barrage,if=!prev_gcd.1.arcane_surge|prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=20

# Orb after Barraging with Clearcasting to recoup Charges and Salvo, in AOE just send as long as you won't overcap Salvo. If you don't have CC, only Orb if you'll overcap Orb and need Charges.
actions.spellslinger_orbm=arcane_orb,if=(prev_gcd.1.arcane_barrage|active_enemies>=4)&((buff.clearcasting.react&buff.arcane_salvo.react<=14)|(buff.clearcasting.react=0&(cooldown.arcane_orb.charges_fractional>1.9)&buff.arcane_salvo.react<=18))
# Barrage at 20 stacks, save for Touch, Barrage the end of Touch or Surge for Splinters.
actions.spellslinger_orbm+=/arcane_barrage,if=(buff.arcane_charge.stack=4|talent.orb_barrage)&buff.arcane_salvo.react>=20&cooldown.touch_of_the_magi.remains>gcd.max*(4-(2*(active_enemies>=2)))|(((buff.arcane_surge.remains<gcd.max&buff.arcane_surge.up)|(debuff.touch_of_the_magi.remains<gcd.max&debuff.touch_of_the_magi.up))&buff.arcane_salvo.react>=15)
# Missiles only if you have HV or OPM specced and in minimal situations.
actions.spellslinger_orbm+=/arcane_missiles,if=(talent.high_voltage|talent.overpowered_missiles|(buff.clearcasting.react=3))&buff.clearcasting.react&buff.arcane_salvo.react<=(10+(5*(buff.overpowered_missiles.react=0)))&!prev_gcd.1.arcane_orb&(buff.arcane_surge.down|(talent.high_voltage&active_enemies=1))&(active_enemies<2|talent.overpowered_missiles),chain=1
# Small benefit when playing with Pulse, due to its mana consumption, its a gain for most profiles to Barrage a little bit more often outside of cds when you lack Orbs.
actions.spellslinger_orbm+=/arcane_barrage,if=buff.arcane_salvo.react<7&buff.arcane_surge.down&buff.touch_of_the_magi.down&buff.arcane_charge.stack=4&talent.resonance&talent.arcane_pulse
actions.spellslinger_orbm+=/presence_of_mind,use_off_gcd=1,if=buff.arcane_charge.stack<2&(buff.clearcasting.react=0|!talent.high_voltage&cooldown.arcane_orb.charges_fractional<0.95)&!prev_gcd.1.arcane_orb&!prev_gcd.1.arcane_missiles
actions.spellslinger_orbm+=/arcane_blast,if=buff.presence_of_mind.up
actions.spellslinger_orbm+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.spellslinger_orbm+=/arcane_blast
actions.spellslinger_orbm+=/arcane_barrage,if=(time>5&!prev_gcd.1.arcane_surge)|(prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=20)

# Basic idea is simple, Barrage to spend Salvo in increments of 6 to optimize around Meteorite generation when possible with Clearcasting when you run High Voltage, or Orb CD is up in AOE, until you get to the point where 25 isn't far away, for a little more dps you can pool for Touch, Surge, and Soul, pooling logic is above. Extra conditions beyond that are to Barrage at the start and end of Touch and during Soul.
actions.sunfury=arcane_barrage,if=(buff.arcane_charge.stack=4&variable.sunfury_hold_for_cds&((((buff.clearcasting.react&talent.high_voltage)|(cooldown.arcane_orb.charges_fractional>0.95&active_enemies>=3))&((buff.arcane_salvo.react>=6&buff.arcane_salvo.react<7)|(buff.arcane_salvo.react>=12&buff.arcane_salvo.react<13)|(buff.arcane_salvo.react>=18&buff.arcane_salvo.react<19)|((buff.arcane_salvo.react<19)&!talent.resonance&active_enemies>=3)))|buff.arcane_salvo.stack=25))|prev_off_gcd.touch_of_the_magi|(debuff.touch_of_the_magi.remains<gcd.max&debuff.touch_of_the_magi.up&buff.arcane_charge.stack=4)|buff.arcane_soul.up
# Missile if you have less than 15 Salvo or 10 with OPM proc except when Surge is up; send Missiles if you have both Surge and Touch going.
actions.sunfury+=/arcane_missiles,if=buff.clearcasting.react&((((cooldown.touch_of_the_magi.remains>gcd.max*(8-(4*variable.sf_touch_surge))&buff.overpowered_missiles.react=0)|buff.arcane_surge.up|buff.arcane_charge.stack<3|buff.clearcasting.react>1)&buff.arcane_salvo.react<(15-(5*(buff.overpowered_missiles.react&buff.arcane_surge.down))))|(debuff.touch_of_the_magi.up&buff.arcane_surge.up)),chain=1
actions.sunfury+=/arcane_orb,if=buff.arcane_charge.stack<2
actions.sunfury+=/arcane_pulse,if=((active_enemies>=variable.pulse_aoe_count)&!variable.funnel)|((buff.arcane_charge.stack<3)&mana.pct>30)
actions.sunfury+=/arcane_explosion,if=active_enemies>3&buff.arcane_charge.stack<2&!talent.impetus
# Barrage can be used if you didn't have any of the charge generators above to get over 1 stacks. This is also not default behavior but is interestingly neutral. actions.sunfury+=/arcane_barrage,if=buff.arcane_charge.stack<2
actions.sunfury+=/arcane_blast
actions.sunfury+=/arcane_barrage,if=(variable.sf_touch_surge&(!prev_gcd.1.arcane_surge|prev_off_gcd.touch_of_the_magi&buff.arcane_salvo.react=25))|!variable.sf_touch_surge
```

---

## Confirmed Spell IDs (SimulationCraft HTML)

IDs sourced from spell-ids-reference.json (extracted from the SimulationCraft Midnight 12.0.5 HTML report). Only abilities named in this guide are listed; IDs already confirmed via Wowhead above are unchanged.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Arcane Assault | 225119 | arcane | cast |
| Arcane Barrage | 44425, 450499 (multiple: base cast + variants) | arcane | cast |
| Arcane Blast | 30451 | arcane | cast |
| Arcane Missiles | 5143, 7268 (multiple: base cast + variants) | arcane | cast |
| Arcane Orb | 153626, 153640 (multiple: base cast + variants) | arcane | cast |
| Arcane Splinter | 443763 | arcane | cast |
| Arcane Surge | 365350, 453326 (multiple: base cast + variants) | arcane | cast |
| Touch of the Magi | 321507, 210833 (multiple: base cast + variants) | arcane | cast / other |
| Arcane Intellect | 1459 | arcane | other |
| Mirror Image | 55342 | arcane | cast |
| Presence of Mind | 205025 | arcane | cast |
| Greater Pyroblast | 450421 | fire | cast |
| Meteorite | 449559, 449569, 456139 (multiple: base cast + variants) | fire | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

---

## Notes and Known Gaps

- **Patch currency:** All fetched pages were labeled Patch **12.0.5** (Midnight); Icy Veins consumables page last updated 2026-05-19. No pre-Midnight (Dragonflight / War Within) data was knowingly used. Wowhead spell pages do not display patch labels but SpellIDs are stable across patches.
- **Wowhead guide bodies:** The Wowhead Arcane guide pages (overview, rotation, enchants) frequently returned only navigation/header content via fetch; rotation and consumable detail were therefore taken from Icy Veins, with SpellIDs confirmed on individual Wowhead `/spell=` pages.
- **SimulationCraft data added (June 2026):** Talent import strings for both Spellslinger and Sunfury builds are now confirmed from simc-guides/. APL action lists are included verbatim. Damage/rotational spell IDs for Arcane Blast, Arcane Barrage, Arcane Missiles, Arcane Orb, Arcane Splinter, Arcane Surge, Arcane Assault, Touch of the Magi, Mirror Image, Presence of Mind, Greater Pyroblast, and Meteorite are now confirmed from spell-ids-reference.json. Defensive, interrupt, and consumable spell IDs are not present in the SimC source and remain unconfirmed or sourced from Wowhead only.
- **Unconfirmed SpellIDs (omitted on purpose):**
  - **Arcane Pulse** — AoE filler; ID not confirmed (not present in SimC single-target reference).
  - **Supernova** — CC/knockback; ID not confirmed.
  - **Ring of Frost / other talented CC** — not confirmed live.
  - **Evocation** — mana recovery channel; ID 12051 appears in guide text from Wowhead but was not present in the SimC spell-ids-reference.json (not a damaging ability).
- **Cooldown caveats:**
  - **Touch of the Magi** `/spell=321507` page shows a 0.5s internal value; the usable cooldown (~45s per Icy Veins) was not confirmed on the spell page itself.
  - **Ice Block** cooldown displayed as "n/a" on `/spell=45438`; the real usable cooldown (commonly ~4 min) is **not confirmed** here. Do not assume a hard number when judging availability.
  - **Arcane Surge** cooldown taken as 1.5 min from `/spell=365350`; Icy Veins prose elsewhere referenced 90s — consistent.
- **Greater Invisibility damage reduction:** The aura page (110960) did not expose a numeric damage-reduction value; it is described qualitatively. Do not cite a specific percentage.
- **Greater Invisibility / Ice Cold / Mass Barrier are talent-gated** (Ice Cold, Mass Barrier confirmed as talents). Only flag their absence as a missed defensive when the talent is confirmed present for that player.
- **Arcane Power (SpellID 12042)** is an older (pre-Midnight) cooldown and was deliberately EXCLUDED; modern Arcane uses Arcane Surge. Do not reintroduce it.
- **Consumables/enchants** names had cross-source disagreement (flask, food, gem) and **no item IDs were confirmed**. Re-verify against a live BiS list before trusting specifics.
- **Maintenance flag:** Re-verify every SpellID, cooldown, talent name, and consumable after ANY 12.x patch. Tuning and talent trees change frequently in a live patch cycle.
