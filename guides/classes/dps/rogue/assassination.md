# Assassination Rogue — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/rogue/assassination/overview-pve-dps
> - https://www.wowhead.com/guide/classes/rogue/assassination/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-spec-builds-talents
> - https://www.icy-veins.com/wow/assassination-rogue-pve-dps-gems-enchants-consumables (via search excerpt)
> - https://dving.net/guides/midnight-rogue-guide (via search excerpt)
> - https://overgear.com/guides/wow/midnight-rogue-guide/ (via search excerpt)
> - Spell-database cross-reference for Kick spell ID: wowdb.com, wowpedia.fandom.com, wowclassicdb.com (all list 1766)
> - SimulationCraft Midnight 12.0.5 spec data (simc-guides/)
> - SimC APL from Trivial.txt
>
> Note: Wowhead individual spell/item pages and several guide pages returned HTTP 403 to automated fetching, so most numeric data below is corroborated from guide prose and search excerpts rather than from in-game tooltip pages. Spell IDs are deliberately almost entirely omitted — see "Notes and Known Gaps."

## Overview

Assassination Rogue is a melee DPS specialization built around damage-over-time effects (bleeds and poisons) layered under a hard-hitting finisher, Envenom. It is described as a slow, methodical, resource-management-focused spec: the player plans ahead and avoids wasting Energy and Combo Points. The core gameplay loop is:

1. Maintain the bleeds **Garrote** and **Rupture** on the target.
2. Generate Combo Points (primarily with **Mutilate**).
3. Spend Combo Points on **Envenom**, chaining Envenom casts to keep its damage buff active as much as possible.
4. Layer the major cooldowns **Deathmark** and **Kingsbane** on top, synced together.

**Damage profile:** Sustained, DoT-weighted single-target with burst windows every 2 minutes (Deathmark). It also has strong multi-target bleed-spread damage. In Midnight, AoE was reworked so that **Crimson Tempest** is now a Combo Point *generator* that spreads bleeds (the old Indiscriminate Carnage and Shiv were removed/changed — see Known Gaps).

**Survivability profile:** Good for a pure DPS — two pseudo-immunity buttons (Cloak of Shadows, Evasion), a strong AoE-damage reduction (Feint), self-healing (Crimson Vial), and a passive death-save (Cheat Death).

**Primary weakness:** Ramp-up time. Damage is back-loaded into DoTs and into the Deathmark window; the spec underperforms in very short fights or when forced to retarget frequently before DoTs mature. It is also melee, so it eats avoidable ground effects if positioning is poor.

## Role in Raid

- **Role:** Melee DPS. Not a healer, not a tank.
- **Bloodlust/Heroism equivalent:** **No.** Assassination Rogue does not provide a Lust effect.
- **Battle resurrection:** **No.** Rogues have no combat res.
- **Raid buff/debuff it brings:** **Atrophic Poison** — a non-lethal weapon poison with (per source) a 30% chance on hit to reduce the target's damage dealt by 3% for 10 seconds. This is the one rogue contribution that sources call genuinely valuable in raids; many groups bring at least one rogue specifically for it. Aside from Atrophic Poison, sources note that most rogue utility sees little raid use.
- **Group utility:**
  - **Tricks of the Trade** — redirects threat / grants the target a damage bonus; useful as a tank threat assist or a personal damage transfer.
  - **Shroud of Concealment** — group stealth (rogue is one of only two classes with a raid-wide stealth tool); used for skips, not in-combat.
- **Externals:** None. The spec has no targeted defensive it can cast on other players.
- **Mobility profile:** Strong. **Sprint** (movement speed burst), **Shadowstep** (gap-closer/teleport to target), and **Vanish** all aid repositioning. Shadowstep + Sprint together minimize uptime loss on movement-heavy fights.

## Abilities Reference

> SpellIDs are omitted here except where independently confirmed — see Known Gaps. Cooldown values are taken from guide prose/search excerpts, not in-game tooltip pages.

**Builders / core damage:**
- **Mutilate** — primary single-target Combo Point generator.
- **Garrote** — bleed; applied from stealth/Vanish for an empowered version (Improved Garrote). A key maintenance bleed.
- **Rupture** — bleed finisher; maintain with 5+ Combo Points.
- **Envenom** — primary finisher; chaining Envenoms to keep its buff up is central to the rotation. Spend at 5+ CP (higher with the Darkest Night/Deathstalker proc).
- **Fan of Knives** — AoE Combo Point builder.
- **Crimson Tempest** — in Midnight, reworked into a generator that spreads bleeds across multiple targets.
- **Ambush** — instant Combo Point generator when available (e.g., from stealth/procs).
- **Internal Bleeding** — a talent-driven bleed triggered by Kidney Shot; contributes meaningful sustained damage (confirmed in SimC damage distribution, ~2% of total).

**Major cooldowns:**
- **Deathmark** — ~2-minute cooldown. Main burst window; boosts bleed damage and duplicates poison effects. Energy boost on use.
- **Kingsbane** — ~1-minute (60s) cooldown. Front-loaded burst plus a DoT that scales as poisons are applied. Sync every second cast with Deathmark.
- **Vanish** — ~2-minute cooldown. In this spec used primarily to reapply an empowered Garrote (Improved Garrote) just before Deathmark. (Vanish is also a defensive/threat-drop, see Defensives/Utility.)
- **Thistle Tea** — Energy-restore button; described as a multi-charge ability (about 1 charge per minute) that can auto-trigger below 30 Energy. Sync with Kingsbane.

**Poisons (Assassination setup, raid):**
- Lethal: **Deadly Poison** + **Amplifying Poison** (lethal poison pairing per source).
- Non-lethal (raid): **Atrophic Poison** (damage-reduction debuff — see Role in Raid).
- Other non-lethal options used situationally in M+: **Crippling Poison** (slow), **Numbing Poison** (attack-speed slow).

## Rotation / Priority

> This is **logical priority order**, not a DPS benchmark or APL. Use it to judge whether a player is doing the right *kind* of thing, not to score exact throughput.

**Opener (conceptual):**
1. From stealth, apply **Garrote** (empowered) — on AoE, apply to multiple targets for pandemic value.
2. Establish **Rupture** with a 5+ CP finisher.
3. Pop **Deathmark** + **Kingsbane** (+ **Thistle Tea**) together for the burst window.
4. Use **Vanish** to refresh an empowered Garrote going into/within the Deathmark window.
5. Chain **Envenom** while maintaining bleeds.

**Single-target sustained priority:**
1. Keep **Garrote** up.
2. Keep **Rupture** up (5+ CP).
3. **Deathmark** when available.
4. **Kingsbane** on cooldown (synced to Deathmark every second use).
5. **Envenom** at 5+ CP (higher CP when the Darkest Night/Deathstalker buff is active); maintain the Envenom buff chain.
6. **Ambush** for CP when usable.
7. **Mutilate** to build CP.
8. Sync **Thistle Tea** with Kingsbane for Energy.

**AoE / multi-target priority:**
1. Apply **Garrote** to targets (twice on opener for pandemic/extra value).
2. **Crimson Tempest** to spread bleeds.
3. **Deathmark** when available.
4. **Kingsbane** on cooldown.
5. **Envenom** at 5+ CP.
6. **Fan of Knives** / **Crimson Tempest** based on current bleed coverage.
7. **Vanish** to reapply empowered Garrote on durable packs.

## Defensives

> The two most RaidLens-relevant sections. For each, "RaidLens usage" describes how to judge correct use during a lethal/heavy damage window.

- **Feint** — Active, costs ~35 Energy, ~6 second duration, very short cooldown. Reduces AoE/area damage taken by 40% (and, with the Elusiveness talent, reduces *all* damage by ~20% for the duration). This is the bread-and-butter Assassination defensive.
  - *RaidLens usage:* Feint should be active during any telegraphed raid-wide AoE or unavoidable area pulse. Because the cooldown is very short and the duration is only ~6s, the question is timing, not availability — flag a player who took a big chunk from a known AoE mechanic without Feint up at that timestamp. Repeated unmitigated AoE hits across pulls is a clear pattern.

- **Cloak of Shadows** — ~2-minute cooldown. Magic immunity: full immunity to magic damage/effects for the buff's duration (the first second is described as true magic immunity). Does not stop physical damage.
  - *RaidLens usage:* Strong answer to a specific, scheduled *magic* hit. If a player died to a known magic burst (or a magic debuff) and Cloak was off cooldown and unused, that's a flaggable miss. Do NOT flag for physical hits — Cloak does nothing against them.

- **Evasion** — ~10 second duration, +100% Dodge (effectively melee/physical avoidance). Does not help against magic.
  - *RaidLens usage:* Use against heavy *physical* / melee-range or dodgeable damage. Flag a death to a physical mechanic when Evasion was available and unused. Do NOT expect Evasion to help against magic damage.

- **Crimson Vial** — ~30 second cooldown. Self-heal over a short duration.
  - *RaidLens usage:* Short-cooldown sustain. A well-playing rogue uses it proactively when dropping below full during sustained raid damage. Hard to "miss" decisively, but a player who died at low HP with Crimson Vial off cooldown for a while can be noted.

- **Cheat Death (passive)** — Saves the player from a lethal hit once, leaving them at low HP with strong mitigation afterward; ~6-minute cooldown.
  - *RaidLens usage:* Passive, not actively pressed, so do not flag "unused." Useful as context: if a player survived a hit that would otherwise be lethal, Cheat Death may explain it. If Cheat Death was on cooldown (used in the last ~6 min), the player is more fragile to the next lethal spike.

- **Vanish** — ~2-minute cooldown. Primarily a rotational button here, but it also drops the rogue from combat/threat and can be an emergency "remove me from targeting" tool.
  - *RaidLens usage:* Not a primary damage-mitigation defensive; do not flag it as a missed defensive. Treat its absence in the rotation (failing to refresh empowered Garrote) as a throughput note, not a survivability one.

## Utility

- **Interrupt — Kick.** This is Assassination Rogue's interrupt. Spell ID **1766** (confirmed across multiple spell databases). Cooldown reported as **15 seconds** in Midnight rogue sources. It is a melee-range, instant interrupt that locks out the interrupted spell school.
  - **Is it the spec's only interrupt?** Kick is the only on-demand spell interrupt baseline to the spec. (Kidney Shot and Cheap Shot are stuns that *can* interrupt by virtue of stunning, but the dedicated, raid-usable interrupt is Kick.) For RaidLens interrupt tracking, **Kick is the interrupt** — a missed required interrupt on an Assassination Rogue means Kick was not used in time. Note its 15s cooldown when judging whether the rogue *could* have covered a given interrupt assignment.

- **Crowd control:**
  - **Kidney Shot** — finisher stun (scales with Combo Points).
  - **Blind** — disorient (single-target).
  - **Sap** — out-of-combat incapacitate.
  - **Cheap Shot** — stun from stealth (opener CC).

- **Dispels:** Assassination Rogue has **no group/raid dispel** (it cannot cleanse magic/curse/poison/disease from allies). **Cloak of Shadows** is effectively a *self* magic-effect clear/immunity, but it is not a targeted dispel of other players. Do not expect a rogue to dispel anyone.

- **Externals:** None (no defensive can be cast on another player).

- **Raid buffs/debuffs:** **Atrophic Poison** (enemy damage-reduction debuff) is the meaningful one. No Bloodlust/Heroism. No battle res. No raid-wide damage/stat buff aura.

- **Movement tools:** **Sprint** (movement speed), **Shadowstep** (teleport to target / gap close), **Vanish** (reposition + threat drop). **Shroud of Concealment** for group stealth skips.

- **Threat tool:** **Tricks of the Trade** (threat redirect / damage transfer to a target).

## Consumables and Enchants

> Sourced from Icy Veins consumables guide excerpt (12.0.5). Item IDs are NOT included — individual item pages could not be fetched/confirmed (403). Names only; verify in-game.

- **Flask:** Flask of the Shattered Sun (Critical Strike).
- **Potion:** Light's Potential (pair with major cooldowns / Bloodlust).
- **Food:** A primary-stat feast such as Silvermoon Parade; personal fallback Royal Roast.
- **Gems:** Powerful Eversong Diamond (one socket); secondary-stat gems Flawless Deadly Peridot (Crit) or Flawless Quick Garnet (Haste).
- **Weapon/gear enchants:** Cosmetic/utility ring/cloak enchant choice between Avoidance, Leech, or Speed (player preference; Speed is a noted raid-progression pick). The source did not give a single mandatory damage enchant per slot.
- **Stat priority:** Critical Strike ≥ Haste ≥ Mastery > Versatility.

## SimulationCraft Reference (Midnight 12.0.5)

**Hero tree covered:** No specific hero tree was tagged in the sim profile (hero_tree: null in source data). The talent string below represents a general Assassination build; the damage distribution includes Fatebound-style proc entries (Hand of Fate), suggesting the sim used a Fatebound talent selection.

**Talent import string:**

```
CMQAAAAAAAAAAAAAAAAAAAAAAYmZMbzgBAAAAAmlBbzAAAAAAabbmZmZmZMmZmZ2mZZmZGMmZmZMzYYAMwCMjRjZBklBsZAwMzgB
```

**Metrics:** DPS, HPS, and DTPS were not captured in the source data (metrics field was empty). No throughput ceiling figure is available from this sim run.

**Damage distribution (SimC, share of total damage):**

Rows are included only where the percent field contained a "%" sign (reliable damage-share values). Parenthesised values indicate the effective share including pet/proc contribution.

| Ability | Share of total damage |
|---|---|
| Garrote | 11.4% |
| Auto Attack | 11.0% |
| Rupture | 9.5% |
| Hand of Fate | 8.8% |
| Deadly Poison | 8.7% |
| Mutilate | 7.7% |
| Amplifying Poison | 6.4% |
| Ambush | 2.6% |
| Internal Bleeding | 1.9% |
| Deathmark | 0.9% |

**Interpretation for RaidLens:** Garrote, Rupture, and the poison procs (Deadly Poison, Amplifying Poison) together account for the majority of damage, confirming that bleed and poison maintenance is the core of the spec. Hand of Fate (a Fatebound talent proc at 8.8%) is a significant contributor — its absence from a log breakdown could indicate the player is not running a Fatebound build or is letting proc windows expire. Auto attacks at 11.0% are unusually prominent, meaning any time spent out of melee range (dodging mechanics) has a measurable cost. A log where Mutilate or Ambush contribute disproportionately to damage relative to the bleeds suggests the player is not maintaining Garrote/Rupture properly.

### Action Priority List — Rogue Assassination

```
actions.precombat=apply_poison
actions.precombat+=/snapshot_stats
# Check which trinket slots have Stat Values
actions.precombat+=/variable,name=trinket_sync_slot,value=1,if=trinket.1.has_use_buff&(!trinket.2.has_use_buff|trinket.1.cooldown.duration>=trinket.2.cooldown.duration)&!trinket.2.is.treacherous_transmitter|trinket.1.is.treacherous_transmitter|trinket.1.is.house_of_cards
actions.precombat+=/variable,name=trinket_sync_slot,value=2,if=trinket.2.has_use_buff&(!trinket.1.has_use_buff|trinket.2.cooldown.duration>trinket.1.cooldown.duration)&!trinket.1.is.treacherous_transmitter|trinket.2.is.treacherous_transmitter|trinket.2.is.house_of_cards
# Pre-cast Slice and Dice if possible
actions.precombat+=/stealth
actions.precombat+=/slice_and_dice,precombat_seconds=1

# Executed every time the actor is available.
# Restealth if possible (no vulnerable enemies in combat)
actions=stealth
# Interrupt on cooldown to allow simming interactions with that
actions+=/kick
# Helper Variable to check for single target in combat
actions+=/variable,name=single_target,value=spell_targets.fan_of_knives=1
# Edge-case check to dump thistle tea at the end of fights
actions+=/thistle_tea,if=energy.pct<50&fight_remains<10
# Special Ambush condition for the start of fights when applicable
actions+=/ambush,if=stealthed.rogue&variable.single_target&talent.blindside&talent.improved_ambush&!talent.shrouded_suffocation
# Cooldown list takes priority
actions+=/call_action_list,name=cds
# Maintain dots when possible
actions+=/call_action_list,name=core_dot
# Build combo points until 5, max with darkest night
actions+=/call_action_list,name=generate,if=!buff.darkest_night.up&combo_points<5|buff.darkest_night.up&combo_points.deficit>0
# If combo point threshold is reached, spend them
actions+=/call_action_list,name=spend,if=!buff.darkest_night.up&combo_points>=5|buff.darkest_night.up&combo_points.deficit=0

# Cooldown list Deathmark if bleeds are active, kingsbane is ready, and we have envenom
actions.cds=deathmark,if=dot.garrote.ticking&dot.rupture.ticking&cooldown.kingsbane.remains<=2&buff.envenom.remains>2&(target.time_to_die>10|fight_remains<20)
# Check for on-use trinket usage
actions.cds+=/call_action_list,name=items
# Check for Racial abilties, potions, and any other misc cooldowns
actions.cds+=/call_action_list,name=misc_cds
# Kingsbane if bleeds are active and Deathmark is either on cooldown or active.
actions.cds+=/kingsbane,if=dot.garrote.ticking&dot.rupture.ticking&(dot.deathmark.ticking|cooldown.deathmark.remains>52)&buff.envenom.up&(target.time_to_die>10|fight_remains<20)
# Vanish conditions for Improved Garrote
actions.cds+=/call_action_list,name=vanish,if=!stealthed.rogue

# DoT list Garrote for improved garrote when applicable
actions.core_dot=garrote,if=(buff.improved_garrote.up|stealthed.rogue)&(pmultiplier<=1|remains<=14+6*talent.razor_wire+4*!variable.single_target)
# Normal Garrote Maintanence
actions.core_dot+=/garrote,if=combo_points.deficit>=1&(pmultiplier<=1|!variable.single_target)&refreshable&target.time_to_die-remains>12
# Cycle
actions.core_dot+=/garrote,cycle_targets=1,if=!talent.crimson_tempest&combo_points.deficit>=1&(pmultiplier<=1|!variable.single_target)&refreshable&target.time_to_die-remains>12
# Normal Rupture Maintanence, making sure to not waste Darkest Night
actions.core_dot+=/rupture,if=combo_points>=5&refreshable&target.time_to_die-remains>12&(!buff.darkest_night.up|!dot.rupture.ticking)
actions.core_dot+=/rupture,cycle_targets=1,if=!talent.crimson_tempest&combo_points>=5&refreshable&target.time_to_die-remains>12&(!buff.darkest_night.up|!dot.rupture.ticking)

# Generator List Crimson Tempest to spread bleeds to everything in AoE
actions.generate=crimson_tempest,target_if=max:dot.rupture.remains,if=!variable.single_target&(active_dot.garrote<spell_targets.fan_of_knives|active_dot.rupture<spell_targets.fan_of_knives)&(dot.rupture.remains>5|energy.regen_combined>40)
# Special Edge Case to use Shiv for Darkest Night in low target cleave as Toxic Stiletto makes it very efficient
actions.generate+=/shiv,if=buff.darkest_night.up&combo_points.deficit=1&spell_targets.fan_of_knives<=3&talent.toxic_stiletto
# Fan of Knives in AoE
actions.generate+=/fan_of_knives,if=spell_targets.fan_of_knives>1+talent.blindside
# Ambush on low target counts when available
actions.generate+=/ambush,if=spell_targets.fan_of_knives<=1+talent.blindside&(buff.unshakeable_drive.stack>2|buff.bloodlust.up|!talent.deathstalkers_mark|talent.blindside)
# Mutilate on low target counts
actions.generate+=/mutilate,if=spell_targets.fan_of_knives<=1+talent.blindside&(buff.unshakeable_drive.stack>2|buff.bloodlust.up|!talent.deathstalkers_mark|talent.blindside)
# Fan of Knives and Shiv in ST with Deathstalker builds
actions.generate+=/fan_of_knives,if=spell_targets.fan_of_knives<=1+talent.blindside&!talent.blindside&(buff.unshakeable_drive.stack<3&!buff.bloodlust.up&talent.deathstalkers_mark)
actions.generate+=/shiv,if=spell_targets.fan_of_knives<=1&talent.toxic_stiletto&(buff.unshakeable_drive.stack<3&!buff.bloodlust.up&talent.deathstalkers_mark)

# Special Case Trinkets
actions.items=variable,name=base_trinket_condition,value=dot.rupture.ticking&cooldown.deathmark.remains<2|dot.deathmark.ticking|fight_remains<=22
actions.items+=/use_item,name=astral_gladiators_badge_of_ferocity,use_off_gcd=1,if=dot.kingsbane.ticking|dot.deathmark.ticking|(cooldown.kingsbane.remains>60|cooldown.deathmark.remains>60)
actions.items+=/use_item,name=algethar_puzzle_box,use_off_gcd=1,if=variable.base_trinket_condition&buff.envenom.up
actions.items+=/use_items,slots=trinket1,if=(variable.trinket_sync_slot=1&(debuff.deathmark.up)|(variable.trinket_sync_slot=2&!trinket.2.cooldown.ready&cooldown.deathmark.remains>20))|!variable.trinket_sync_slot|fight_remains<=20
actions.items+=/use_items,slots=trinket2,if=(variable.trinket_sync_slot=2&(debuff.deathmark.up)|(variable.trinket_sync_slot=1&!trinket.1.cooldown.ready&cooldown.deathmark.remains>20))|!variable.trinket_sync_slot|fight_remains<=20

# Miscellaneous Cooldowns Potion
actions.misc_cds=potion,if=dot.rupture.ticking&(buff.bloodlust.react|fight_remains<30|debuff.deathmark.up)
# Various special racials to be synced with cooldowns
actions.misc_cds+=/blood_fury,use_off_gcd=1,if=debuff.deathmark.up
actions.misc_cds+=/berserking,use_off_gcd=1,if=debuff.deathmark.up
actions.misc_cds+=/fireblood,use_off_gcd=1,if=debuff.deathmark.up
actions.misc_cds+=/ancestral_call,use_off_gcd=1,if=debuff.deathmark.up

# Spend List Cancelaura Envenom in situations where we can make use of the energy but don't have time to AFK
actions.spend=cancel_buff,name=envenom,if=buff.implacable_tracker.stack>4&(!talent.rapid_injection|spell_targets.fan_of_knives>=5)
# Special edgecase Cancelaura for Darkest Night handling
actions.spend+=/cancel_buff,name=envenom,if=buff.implacable_tracker.stack>3&talent.rapid_injection&debuff.deathstalkers_mark.stack=1
# Spend with envenom as per normal
actions.spend+=/envenom,if=buff.implacable_tracker.stack<4
# Envenom if we are going to overcap on energy
actions.spend+=/envenom,if=energy.pct>70|fight_remains<15

# Vanish list Single Target vanish check to line up improved garrote with Deathmark, making sure there are no adds soon. TODO Check after ImpGar fixes
actions.vanish=vanish,if=variable.single_target&talent.improved_garrote&dot.garrote.pmultiplier<=1&(dot.deathmark.ticking|cooldown.deathmark.remains>target.time_to_die-10)&!raid_event.adds.in<=30
# AoE vanish check to spread improved garrote in multitarget
actions.vanish+=/vanish,if=!variable.single_target&talent.improved_garrote&dot.garrote.pmultiplier<=1&(raid_event.adds.remains>=10|!raid_event.adds.in<=30)
```

## Notes and Known Gaps

- **Spell IDs:** Only **Kick = 1766** is included, confirmed via multiple independent spell databases (WoWDB, Wowpedia, classic DB). All other spell IDs (Deathmark, Kingsbane, Garrote, Rupture, Envenom, Mutilate, Feint, Cloak of Shadows, Evasion, Crimson Vial, Vanish, Crimson Tempest, Fan of Knives, Atrophic Poison, etc.) are **omitted** because live Wowhead spell pages returned HTTP 403 to fetching and no fetched source displayed the exact numeric IDs. Do not assume IDs from memory; re-verify on Wowhead before hardcoding into `boss-knowledge.js`/filters.
- **Kick cooldown (15s):** Sourced from Midnight rogue guide prose/search excerpts, not from a fetched in-game tooltip page. Treat as high-confidence but re-verify.
- **Kick interrupt lockout duration:** Not confirmed for 12.0.5 (older data referenced 3s school lockout). Flagged as unconfirmed.
- **Feint values (40% AoE / 6s / 35 Energy / Elusiveness ~20% all damage):** From Icy Veins prose; not cross-checked against a live tooltip page. Re-verify exact percentages.
- **Cloak of Shadows / Evasion / Crimson Vial / Cheat Death cooldowns:** Cloak ~2 min, Evasion ~10s duration/+100% dodge, Crimson Vial ~30s, Cheat Death ~6 min — all from guide prose/search excerpts, not tooltip pages. Re-verify durations.
- **Deathmark (2 min) / Kingsbane (60s) / Vanish (2 min):** From Icy Veins and Wowhead overview prose. Confident but tooltip not directly fetched.
- **Atrophic Poison numbers (30% chance / 3% damage reduction / 10s):** From a search excerpt; not confirmed on a fetched tooltip page. Re-verify exact magnitudes.
- **Talent import string:** Added from SimulationCraft Midnight 12.0.5 source data. The sim hero_tree field was null, so the exact hero-tree variant is unconfirmed — verify the string in-game before treating it as authoritative for a specific build. SimC APL now embedded (extracted from Trivial.txt).
- **Hand of Fate:** Appears in the SimC damage distribution at 8.8% — likely a Fatebound talent proc. Not present in the original guide prose. Spell ID not confirmed; verify on Wowhead.
- **Internal Bleeding:** Appears in the SimC damage distribution at 1.9%. Added to Abilities Reference. Spell ID not confirmed; verify on Wowhead.
- **Midnight AoE rework:** Sources state Indiscriminate Carnage and the old Shiv were removed/changed and Crimson Tempest became a bleed-spreading generator. The exact talent layout and any remaining Shiv functionality were not fully confirmed — flagged.
- **Consumable/gem/enchant item IDs:** Omitted (could not confirm). Names only.
- **Maintenance flag:** Re-verify ALL cooldowns, the Kick spell ID/cooldown, poison values, and consumable names after ANY 12.x patch. Wowhead spell pages were inaccessible to automated fetching during this writeup, so a manual pass against live tooltips is recommended before relying on numeric values for analysis.
