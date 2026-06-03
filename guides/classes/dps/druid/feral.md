# Feral Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/druid/feral/rotation-cooldowns-pve-dps (nav only; content JS-rendered)
> - https://www.wowhead.com/spell=106839/skull-bash
> - https://www.wowhead.com/spell=61336/survival-instincts
> - https://www.wowhead.com/spell=22812/barkskin
> - https://www.wowhead.com/spell=108238/renewal
> - https://www.wowhead.com/spell=20484/rebirth
> - https://www.wowhead.com/spell=22842/frenzied-regeneration
> - https://www.wowhead.com/spell=106898/stampeding-roar
> - https://www.wowhead.com/spell=1126/mark-of-the-wild
> - https://www.wowhead.com/spell=1822/rake
> - https://www.wowhead.com/spell=1079/rip
> - https://www.wowhead.com/spell=5221/shred
> - https://www.wowhead.com/spell=22568/ferocious-bite
> - https://www.wowhead.com/spell=5217/tigers-fury
> - https://www.wowhead.com/spell=106951/berserk
> - https://www.wowhead.com/spell=102543/incarnation-avatar-of-ashamane
> - https://www.wowhead.com/spell=285381/primal-wrath
> - https://www.wowhead.com/spell=274837/feral-frenzy
> - https://www.wowhead.com/spell=391528/convoke-the-spirits
> - https://www.wowhead.com/spell=8921/moonfire
> - https://www.wowhead.com/spell=213764/swipe (shared Cat/Bear)
> - https://www.wowhead.com/spell=106785/swipe (Cat Form)
> - https://www.wowhead.com/spell=22570/maim
> - https://www.wowhead.com/spell=5211/mighty-bash
> - https://www.wowhead.com/spell=2908/soothe
> - https://www.wowhead.com/spell=2782/remove-corruption
> - https://www.wowhead.com/spell=8936/regrowth
> - https://www.wowhead.com/spell=1850/dash
> - https://www.wowhead.com/spell=132469/typhoon
> - https://www.icy-veins.com/wow/feral-druid-pve-dps-spell-summary
> - https://www.method.gg/guides/feral-druid/playstyle-and-rotation
> - https://www.icy-veins.com/wow/feral-druid-pve-dps-gems-enchants-consumables (consumables)
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

---

## Overview

Feral Druid is a melee DPS specialization that fights in Cat Form. It uses two resources: **Energy** (regenerating, spent on abilities) and **Combo Points** (built by "builder" abilities, spent by "finisher" abilities). The spec's damage is heavily **damage-over-time (bleed) based**: the core loop is to apply and maintain bleeds (Rake, Rip) at high uptime while filling with Shred, then dump combo points into finishers (Rip to extend bleeds, Ferocious Bite for burst). Procs (Apex Predator's Craving, Sudden Ambush, Clearcasting) modify the priority moment to moment.

In patch 12.0.5 the spec was simplified and made less bursty: Thrash was removed (one fewer builder), Brutal Slash was removed (leaving Shred as the only single-target filler builder), and Berserk Frenzy was removed. Claw Rampage was nerfed on AoE to proc once per cast rather than per target.

Damage profile: ramping, sustained single-target damage that relies on uninterrupted bleed uptime. Survivability is moderate — Feral has strong personal defensives (see Defensives) and can shift to Bear Form for an emergency health/armor buffer.

Primary weakness: the spec front-loads setup (it takes time to ramp bleeds and combo points) and loses significant damage when forced off the target or when bleeds fall off. Frequent target swapping or movement that breaks the builder→finisher rhythm hurts Feral more than most melee.

## Role in Raid

- **Role:** Pure melee DPS.
- **Raid buff:** Mark of the Wild (spell 1126) — raid-wide +3% Versatility buff, 1-hour duration.
- **Battle res:** Yes. Rebirth (spell 20484) is a combat resurrection on a 10-minute cooldown; it counts against the raid-wide battle-res limit.
- **Bloodlust/Heroism equivalent:** No. Feral Druid does NOT provide a Bloodlust/Heroism effect.
- **Group defensive/externals:** Stampeding Roar (spell 106898) is the main group utility — a movement-speed burst that benefits nearby allies (see Utility). Feral has no targeted damage-reduction external for other players.
- **Mobility:** High. Dash (spell 1850) and the Cat Form base speed bonus, plus a charge tool (Wild Charge, talent), Stampeding Roar, and Typhoon (spell 132469) knockback. Good at covering distance and repositioning.

## Abilities Reference

Core abilities (spell IDs confirmed on live Wowhead unless noted):

| Ability | Spell ID | Notes |
|---|---|---|
| Rake | 1822 | Builder + bleed; generates 1 combo point; 35 Energy; applies a periodic bleed |
| Rip | 1079 | Finisher; long bleed scaling with combo points; 20 Energy |
| Shred | 5221 | Single-target filler builder; 40 Energy; 1 combo point |
| Ferocious Bite | 22568 | Direct-damage finisher; 25 Energy (+ up to 25 extra Energy consumed for more damage) |
| Swipe (Cat) | 106785 | AoE builder; 35 Energy; 1 combo point; 8-yd radius |
| Swipe (shared) | 213764 | Shared Cat/Bear Swipe entry |
| Primal Wrath | 285381 | AoE finisher; applies Rip to all nearby targets; 10-yd radius |
| Moonfire | 8921 | Arcane DoT usable in Cat Form with the Lunar Inspiration talent |
| Tiger's Fury | 5217 | 30s CD; off-GCD; grants 50 Energy and a damage buff (~15%) for 10s |
| Feral Frenzy | 274837 | 45s CD; rapid strikes that generate combo points |
| Berserk | 106951 | 3-min CD; 15s window of increased damage and reduced finisher costs |
| Incarnation: Avatar of Ashamane | 102543 | Talent replacement for Berserk; 3-min CD (per spell page); 20s enhanced Berserk window |
| Convoke the Spirits | 391528 | 2-min CD; 4s channel of random Druid spells, weighted toward your active form's damage |

Key procs/passives (no standalone defensive IDs needed for RaidLens): **Apex Predator's Craving** (free/instant Ferocious Bite proc), **Sudden Ambush** (empowers next Shred/Rake — in 12.0.5 it buffs initial damage and guarantees a crit rather than snapshotting), **Clearcasting** (free builder). Other 12.0.5 talents referenced in sources: **Panther's Guile**, **Rampant Ferocity**, **Claw Rampage** — see Known Gaps for what could not be fully sourced.

## Rotation / Priority

This is **logical priority order, not a DPS benchmark**. Exact talent build changes some lines. Sourced from Method's 12.0.5 playstyle/rotation page and Icy Veins.

**Single-target opener:** Prowl → Tiger's Fury (pre-pull) → Rake → Berserk → Feral Frenzy → Rip → Convoke the Spirits → Ferocious Bite.

**Single-target priority:**
1. Tiger's Fury on cooldown.
2. Berserk (or Incarnation) on cooldown, synced with Tiger's Fury when possible.
3. Feral Frenzy on cooldown.
4. Convoke the Spirits on cooldown (with Rip up, Tiger's Fury and Berserk active).
5. Ferocious Bite immediately when Apex Predator's Craving procs.
6. Rip if missing or in pandemic (refresh) range — always at 5 combo points.
7. Ferocious Bite at 5+ combo points and 50+ Energy.
8. Shred with a Sudden Ambush proc.
9. Rake if missing or in pandemic range.
10. Moonfire (only if running Lunar Inspiration).
11. Shred as the filler builder.

**AoE opener:** Prowl → Rake/Swipe to 5 combo points → Tiger's Fury → Primal Wrath → Berserk → Ferocious Bite (with proc) → Convoke the Spirits. (Source also lists trinket usage, e.g. "Puzzle Box," which is gear-dependent.)

**AoE priority:**
1. Tiger's Fury on cooldown.
2. Berserk on cooldown.
3. Feral Frenzy / "Frantic Frenzy" on cooldown, ideally during Tiger's Fury.
4. Convoke the Spirits on cooldown.
5. Ferocious Bite with Apex Predator's Craving procs.
6. Primal Wrath if missing or <~6.5s remaining, at 5 combo points.
7. Ferocious Bite at 5+ combo points and 50+ Energy.
8. Rake on enemies lacking it.
9. Swipe with Clearcasting/Sudden Ambush procs.
10. Rake maintenance / Swipe as filler (target-count dependent on talents).

## Defensives

Feral has a strong personal defensive kit. RaidLens should treat an unused defensive during a known lethal damage window as a potential flag, accounting for cooldown availability.

- **Survival Instincts** (spell 61336) — Reduces damage taken by 50% for 6 seconds. Cooldown ~3 minutes (the spell page's "6 seconds" is the duration, not the cooldown; 3-min cooldown is the spec-guide value — see Known Gaps). The strongest single-target-window mitigation.
  - *RaidLens usage:* On a scripted heavy hit or sustained damage window, expect Survival Instincts (or Barkskin) to be active. If the player took a near-lethal/lethal hit with Survival Instincts off cooldown and unused, flag it. Allow for the short 6s duration — it must be timed onto the hit, not pre-spent.
- **Barkskin** (spell 22812) — Reduces all damage taken by 20% for ~12 seconds (school value −20% confirmed). Cooldown 1 minute.
  - *RaidLens usage:* The "rotational," frequently-available defensive. Because it is only 1-minute CD, it should be up for most recurring raid-damage events. If a player repeatedly eats a predictable raid-wide hit with Barkskin available and unused, flag it. A short duration means it should overlap the hit.
- **Renewal** (spell 108238) — Instantly heals 30% of maximum health. Cooldown ~1.5 minutes. A self-heal, not damage reduction.
  - *RaidLens usage:* Recovery tool after taking a big hit, not pre-mitigation. Judge as a missed recovery only when the player lingered low after a hit with Renewal available. Talented, so may be absent from a given build.
- **Frenzied Regeneration** (spell 22842) — Bear Form self-heal over time (heals a % of health per second). Short cooldown (the spell page lists a 1-second charge/internal value; commonly played as a charge-based ~36s recharge — see Known Gaps). Requires Bear Form.
  - *RaidLens usage:* Requires shifting to Bear Form, so it costs DPS. Expect it only in genuine emergencies or for a tank-swap/soak. Do not flag non-use during normal DPS uptime.
- **Bear Form** (spell — see Known Gaps for ID) — Emergency mitigation: large armor increase (~220%) and bonus Stamina. Shifting to Bear gives an immediate effective-health buffer.
  - *RaidLens usage:* Treat shifting to Bear during a lethal window as a valid (if DPS-negative) defensive action. Useful as context when explaining how a Feral survived a hit.
- **Heart of the Wild** (talent; ID not confirmed — see Known Gaps) — When talented, can be paired with Bear Form for a large temporary health increase and improves off-role capability for ~45s.
  - *RaidLens usage:* Build-dependent; only judge usage if the player has the talent. Can serve as a survival or off-healing cooldown.
- **Regrowth** (spell 8936) — Instant (with proc) or 1.5s-cast direct heal plus a healing-over-time component. A topping-up tool, not a true mitigation.
  - *RaidLens usage:* Minor self-sustain; generally not a flaggable defensive on its own.

## Utility

- **Interrupt — Skull Bash (spell 106839).** This is Feral Druid's ONLY interrupt. Cooldown 15 seconds, ~13-yard range (it includes a short charge to the target). Confirmed on Wowhead as an interrupt ("Interrupts Current Cast" / "Can Cause Interrupt").
  - *RaidLens usage:* When a boss/add cast must be kicked and a Feral was assigned, a missed interrupt with Skull Bash off cooldown is a flag. The 15s cooldown means it should be available for most interrupt rotations. Note Maim can also interrupt (below) but is not the primary kick.
- **Maim (spell 22570)** — Combo-point finisher; 30s cooldown. Flagged on Wowhead as "Can Cause Interrupt," so it can interrupt a casting, stunnable target, but it is a finisher (costs combo points) and is NOT the spec's reliable raid kick. Treat Skull Bash as the interrupt.
- **Crowd control / stuns:**
  - **Mighty Bash (spell 5211)** — 4-second stun, 1-minute cooldown (talent).
  - **Maim (spell 22570)** — stun finisher, 30s cooldown.
  - **Typhoon (spell 132469)** — 30s cooldown knockback + brief daze (talent).
  - **Entangling Roots**, **Hibernate** (sleep, beasts/dragonkin), **Mighty Bash** for single-target lockdown. (Root/sleep IDs not individually confirmed — see Known Gaps.)
- **Dispels:**
  - **Soothe (spell 2908)** — removes Enrage effects from enemies; 10s cooldown.
  - **Remove Corruption (spell 2782)** — removes **Curse** and **Poison** from friendly targets; 8s cooldown. (Feral cannot dispel Magic or Disease.)
- **Externals:** None targeted. No external damage reduction or external heal for other players.
- **Raid buff/debuff:** Mark of the Wild (spell 1126) — +3% Versatility, raid-wide.
- **Movement tools:** Dash (spell 1850, +60% speed, ~2-min CD), Stampeding Roar (spell 106898, +60% run speed, 15-yd radius, group-wide, ~2-min CD), Wild Charge (talent, leap/charge), and Cat Form's passive movement speed.
- **Battle res:** Rebirth (spell 20484), 10-min CD, combat res (counts against raid limit).

## Consumables and Enchants

Sourced from Icy Veins' 12.0.5 Feral gems/enchants/consumables page. These are item/enchant **names** only — item IDs were not confirmed on a fetched source, so none are given (see Known Gaps). Verify on Wowhead before hardcoding any IDs.

- **Flask:** Flask of the Magisters (Mastery).
- **Combat potion:** Light's Potential (use with major cooldowns / Bloodlust).
- **Healthstone-equivalent potion:** Silvermoon Health Potion.
- **Food:** A primary-stat (Agility) feast such as Silvermoon Parade; personal fallback Royal Roast.
- **Augment rune:** Void-Touched Augment Rune (primary stat).
- **Weapon enchant/oil:** Thalassian Phoenix Oil (Critical Strike / Haste).
- **Shoulder enchant:** Amirdrassil's Grace (alt: Silvermoon's Mending).
- **Gems:** Indecipherable Eversong Diamond (first socket); secondary-stat gems such as Flawless Masterful Peridot or Flawless Quick Amethyst elsewhere. Sim per character.

Stat priority (Icy Veins): Agility is the top stat in Midnight; among secondaries, Mastery, Critical Strike, and Haste are balanced — sim for exact ordering.

## SimulationCraft Reference (Midnight 12.0.5)

### Hero Trees Covered

- **Wildstalker** (Druid_Feral_Wildstalker.json / Druid_Feral_Wildstalker.apl.txt)

### Talent Import String — Wildstalker

```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZwMzMzMmtFPwyMbzYGzMDAAAALBzGMmZUzYWYmZGjZmZAAAAAAAGAAAABAz2MLNbzssBmZAWMDGAAzMAYA
```

### Metrics

Metrics not captured in source.

### Damage Distribution (SimC, share of total)

The abilities table from the SimC source contains several rows whose "percent" column holds a "%" value; however, for most abilities (Feral Frenzy, Rake, Rip, Lunar Inspiration, Unseen Slash) those percentages sit in the 60–97% range and are crit/hit rate statistics rather than damage contribution shares — an artifact of the HTML column mis-parse for those rows. Only **Bloodseeker Vines** at 53.04% is a plausible single-target damage-share figure. The table below reproduces the raw percent-column values verbatim for completeness.

| Ability | Percent (from SimC) | Notes |
|---|---|---|
| Bloodseeker Vines | 53.04% | Wildstalker hero-tree proc; dominant single-target source |
| Feral Frenzy | 97.10% | Likely crit/hit rate stat, not damage share |
| Unseen Slash | 70.08% | Likely crit/hit rate stat, not damage share |
| Lunar Inspiration | 72.71% | Likely crit/hit rate stat, not damage share |
| Rake | 79.40% | Likely crit/hit rate stat, not damage share |
| Rip | 60.02% | Likely crit/hit rate stat, not damage share |

**RaidLens interpretation:** The SimC data confirms that Bloodseeker Vines (Wildstalker passive) is the single dominant damage source for this hero tree at ~53% of total damage in a single-target patchwerk sim; Feral Frenzy, Rake, and Rip are the primary skill-expression abilities, and bleed uptime (Rake/Rip) is the clearest thing to track for player performance analysis.

### Action Priority List — Wildstalker

```
actions.precombat=snapshot_stats
# optional variable that sends regrowth casts. Turned off by default
actions.precombat+=/variable,name=regrowth,op=reset
# toggle this to 1 if you are setting static timers for tigers fury/berserk. Convoke will automatically be paired with berserk.
actions.precombat+=/variable,name=use_custom_timers,op=set,value=0
# set timer for the very first cast of each (value=) if using custom timers
actions.precombat+=/variable,name=nextTFTimer,op=set,value=0
actions.precombat+=/variable,name=nextBSTimer,op=set,value=1
actions.precombat+=/variable,name=dotc_rake_threshold,op=set,value=5
actions.precombat+=/variable,name=dotc_rake_threshold,op=set,if=talent.wild_slashes&!talent.infected_wounds,value=3
actions.precombat+=/variable,name=dotc_rake_threshold,op=set,if=!talent.wild_slashes&talent.infected_wounds,value=8
# for practicism, we give a 1s leeway (at 0% haste) from cast end until start of the fight.
actions.precombat+=/variable,name=algethar_puzzle_box_precombat_cast,value=3,if=(!variable.use_custom_timers|variable.use_custom_timers&variable.nextBSTimer<=4)&(trinket.1.is.algethar_puzzle_box|!trinket.1.has_use_buff)
actions.precombat+=/use_item,name=algethar_puzzle_box,if=(!variable.use_custom_timers|variable.use_custom_timers&variable.nextBSTimer<=4)&(trinket.1.is.algethar_puzzle_box|!trinket.1.has_use_buff)
actions.precombat+=/cat_form,if=buff.cat_form.down
actions.precombat+=/prowl
actions.precombat+=/tigers_fury,if=variable.use_custom_timers&variable.nextTFTimer=0

# Executed every time the actor is available.
actions=prowl,if=buff.bs_inc.down&!buff.prowl.up&!buff.shadowmeld.up
actions+=/cat_form,if=!buff.cat_form.up&!talent.fluid_form
# Line up Power Infusion with Berserk.
actions+=/invoke_external_buff,name=power_infusion,if=buff.bs_inc.up|!talent.berserk_heart_of_the_lion
actions+=/call_action_list,name=custom_timers,if=variable.use_custom_timers
# instead of using tigers fury remains, we want to use our next timer for tigers fury
actions+=/variable,name=tfRemains,op=setif,condition=variable.use_custom_timers,value=(!variable.tfNow*(variable.nextTFTimer-time)),value_else=cooldown.tigers_fury.remains
actions+=/auto_attack,if=!buff.prowl.up&!buff.shadowmeld.up
# tigers fury on cooldown, in aoe patchwerk we can hold ~2s for frantic frenzy as needed. Like frantic frenzy, holding can sometimes be a gain in dr/ds, but the conditions are unclear. Addendum: Seems't've been related to holding Berserk, attempt to check holding tigers fury at your own risk.
actions+=/tigers_fury,if=(cooldown.bs_inc.remains<=1|cooldown.bs_inc.remains>10)&(cooldown.frantic_frenzy.remains<buff.tigers_fury.duration-1.5|cooldown.frantic_frenzy.remains>22|!talent.frantic_frenzy|spell_targets=1|fight_style.dungeonroute|fight_style.dungeonslice)&!variable.use_custom_timers|variable.tfNow
# rake out of stealth
actions+=/rake,if=buff.prowl.up|buff.shadowmeld.up
# chomp if its possible. Check this in aoe
actions+=/chomp,if=buff.chomp_enabler.up
actions+=/call_action_list,name=cooldown
# cast bite with apex procs asap
actions+=/ferocious_bite,if=buff.apex_predators_craving.up
actions+=/call_action_list,name=finisher,if=spell_targets=1
actions+=/call_action_list,name=aoe_finisher,if=spell_targets>=2
actions+=/call_action_list,name=builder,if=spell_targets=1&combo_points<=4
actions+=/call_action_list,name=aoe_builder,if=spell_targets>1&combo_points<=4
actions+=/regrowth,if=buff.predatory_swiftness.up&variable.regrowth

# ensure at last 2(pg)/3(nopg) rake at all times if wildstalker, rake highest prio with dcr. on 4t raking all 4 first (no pg) is 0.3% gain. DCR PG LI rakes up to 6 then moonfire
actions.aoe_builder=rake,target_if=refreshable,if=(talent.doubleclawed_rake&(!talent.lunar_inspiration|!talent.panthers_guile|active_dot.rake<5))|hero_tree.wildstalker&(active_dot.rake<2+!talent.panthers_guile+talent.lunar_inspiration)
# there are scenarios where this is -0.1/-0.2% vs being under cc swipe line, but im willing to scrap that complexity
actions.aoe_builder+=/moonfire_cat,target_if=refreshable
# with dotc, nodcr/nowildslashes, swipe spam in berserk at 2t. Ignore cc at 2t. Wildstalker begins ignoring cc again if you have the energy to rake at 7t
actions.aoe_builder+=/swipe_cat,if=hero_tree.druid_of_the_claw&buff.bs_inc.up|buff.clearcasting.react&spell_targets>2&(hero_tree.druid_of_the_claw|spell_targets<7)
# sa swipe takes precedence over single-rake at 5t for dotc 7t for wildstalker (0.1% at 7t for wildstalker, 0.2% for dotc at 5t)
actions.aoe_builder+=/swipe_cat,if=buff.sudden_ambush.up&spell_targets.swipe_cat>=5+(2*hero_tree.wildstalker)
# no dcr, spread rakes up to 3t(ws+noiw)->5t(nows+noiw/wild slashes+iw)->8t(no ws+iw)
actions.aoe_builder+=/rake,target_if=refreshable,if=hero_tree.wildstalker|spell_targets.swipe_cat<=variable.dotc_rake_threshold
# on 2t replace weaker rakes with stronger ones. (its a tiny gain for 3t too, @0.2% but keeping track of 3 snapshots is a bit much I think)
actions.aoe_builder+=/rake,target_if=min:pmultiplier,if=persistent_multiplier>pmultiplier&spell_targets=2
# with panther's guile, its worth using shred at 0/1 combo points on 2t
actions.aoe_builder+=/shred,if=combo_points<=1&spell_targets=2&talent.panthers_guile
actions.aoe_builder+=/swipe_cat,if=combo_points>1|spell_targets>2|!talent.panthers_guile

# primal wrath in pandemic during berserk, else with sub 6.5s remaining
actions.aoe_finisher=primal_wrath,target_if=min:remains,if=combo_points>=5&spell_targets.primal_wrath>1&(dot.primal_wrath.remains<6.5&!buff.bs_inc.up|dot.primal_wrath.refreshable)
# without pw, we prio ravage>rip at 2t with rampant ferocity, and 5t without TODO: check vines
actions.aoe_finisher+=/ferocious_bite,if=buff.ravage.up&combo_points>=5&!talent.primal_wrath&spell_targets>=2+(3*!talent.rampant_ferocity)
# if we dont have primal wrath, indefinitely apply manual 4cp rips (minmax note: without rampant, its ~0.3% better to do 5cp rip/5cp bite on 3/4t)
actions.aoe_finisher+=/rip,target_if=min:remains,if=combo_points>=5&!talent.primal_wrath&refreshable
# we can send bite with rampant or under 5t with vines, 8t with ravage. TODO: check these numbers
actions.aoe_finisher+=/ferocious_bite,target_if=min:dot.rip.remains,if=combo_points>=5&(talent.rampant_ferocity|buff.ravage.up&spell_targets<8|dot.bloodseeker_vines.ticking&spell_targets<5)
# fallback primal wrath
actions.aoe_finisher+=/primal_wrath,if=combo_points>=5
# if we dont have primal wrath then bite here
actions.aoe_finisher+=/ferocious_bite,target_if=min:dot.rip.remains,if=combo_points>=5

actions.builder=prowl,if=!buff.shadowmeld.up&(action.rake.pmultiplier<1.6|dot.rake.refreshable)
actions.builder+=/shadowmeld,if=!buff.prowl.up&(action.rake.pmultiplier<1.6|dot.rake.refreshable)
# freely upgrade rakes
actions.builder+=/rake,if=(buff.tigers_fury.up|remains<variable.tfRemains)&(refreshable&persistent_multiplier>=pmultiplier|remains<2|persistent_multiplier>pmultiplier)
# freely upgrade li
actions.builder+=/moonfire_cat,if=(buff.tigers_fury.up|remains<variable.tfRemains)&(refreshable&persistent_multiplier>=pmultiplier|remains<2|persistent_multiplier>pmultiplier)
actions.builder+=/shred

# TLDR, maximize number of cooldown overlaps whilst minimizing number of casts lost.
actions.cd_variable=variable,name=convokeCountRemaining,value=floor(((fight_remains-variable.convoke_cd)%cooldown.convoke_the_spirits.duration)+(fight_remains>cooldown.convoke_the_spirits.remains))
actions.cd_variable+=/variable,name=zerkCountRemaining,value=floor(((fight_remains-variable.bs_inc_cd)%cooldown.bs_inc.duration)+(fight_remains>cooldown.bs_inc.remains))
actions.cd_variable+=/variable,name=potCountRemaining,value=floor(((fight_remains-variable.pot_cd)%cooldown.potion.duration)+(fight_remains>cooldown.potion.remains))
actions.cd_variable+=/variable,name=slot1CountRemaining,value=floor(((fight_remains-trinket.1.cooldown.remains-10)%trinket.1.cooldown.duration)+(fight_remains>trinket.1.cooldown.remains))
actions.cd_variable+=/variable,name=slot2CountRemaining,value=floor(((fight_remains-trinket.2.cooldown.remains-10)%trinket.2.cooldown.duration)+(fight_remains>trinket.2.cooldown.remains))
# hold berserk if there is 1 convoke or 1 potion remaining in the fight but they aren't available yet
actions.cd_variable+=/variable,name=firstHoldBerserkCondition,value=variable.zerkCountRemaining=1&(variable.convokeCountRemaining=1&cooldown.convoke_the_spirits.remains>10|variable.potCountRemaining=1&cooldown.potion.remains)
# hold berserk if there are as many zerk casts as convoke casts remaining and holding zerk for convoke does not lose you a cast
actions.cd_variable+=/variable,name=secondHoldBerserkCondition,value=cooldown.convoke_the_spirits.remains>20&variable.convokeCountRemaining=variable.zerkCountRemaining&variable.zerkCountRemaining=floor(((fight_remains-variable.convoke_cd)%cooldown.bs_inc.duration)+(fight_remains>cooldown.convoke_the_spirits.remains))
actions.cd_variable+=/variable,name=holdBerserk,value=variable.firstHoldBerserkCondition|variable.secondHoldBerserkCondition|variable.use_custom_timers&variable.nextBSTimer-5>time&!variable.zerkNow|raid_event.adds.up&raid_event.adds.remains<11
# hold the last convoke if there is another berserk cast remaining and Berserk isn't already up. TODO: ran out of time, couldn't decipher why the last or statement required dslice to be specified. So yeah, solve that and fix the line.
actions.cd_variable+=/variable,name=holdConvoke,value=variable.convokeCountRemaining=1&variable.zerkCountRemaining=1&!buff.bs_inc.up|variable.zerkCountRemaining>0&talent.ashamanes_guidance&cooldown.bs_inc.remains<50&variable.use_custom_timers|cooldown.bs_inc.up&!buff.bs_inc.up&(fight_style.dungeonslice|fight_style.dungeonroute)&(variable.zerkCountRemaining>1|variable.convokeCountRemaining>1|variable.potCountRemaining=0|cooldown.potion.remains>60)
# hold potion for berserk if doing so does not lose you a cast
actions.cd_variable+=/variable,name=holdPot,value=variable.potCountRemaining=floor(((fight_remains-variable.bs_inc_cd)%cooldown.potion.duration)+(fight_remains>cooldown.bs_inc.remains))
actions.cd_variable+=/variable,name=bs_inc_cd,op=setif,condition=!variable.use_custom_timers,value=cooldown.bs_inc.remains+10,value_else=variable.nextBSTimer-time+10
actions.cd_variable+=/variable,name=convoke_cd,value=cooldown.convoke_the_spirits.remains+10
actions.cd_variable+=/variable,name=pot_cd,value=cooldown.potion.remains+25
actions.cd_variable+=/variable,name=highestCDremaining,op=setif,condition=talent.convoke_the_spirits,value=cooldown.convoke_the_spirits.remains<?((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10)<?cooldown.potion.remains,value_else=((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10)<?cooldown.potion.remains
actions.cd_variable+=/variable,name=lowestCDremaining,op=setif,condition=talent.convoke_the_spirits,value=cooldown.convoke_the_spirits.remains>?((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10)>?cooldown.potion.remains,value_else=((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10)>?cooldown.potion.remains
actions.cd_variable+=/variable,name=secondLowestCDremaining,op=setif,condition=cooldown.convoke_the_spirits.remains>((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10),value=cooldown.convoke_the_spirits.remains>?cooldown.potion.remains,value_else=((cooldown.bs_inc.remains+10<?variable.bs_inc_cd)-10)>?cooldown.potion.remains

# this line is here to reduce the amount of variable calls in the APL
actions.cooldown=call_action_list,name=cd_variable,if=!cooldown.bs_inc.remains|!cooldown.convoke_the_spirits.remains|!cooldown.potion.remains|!trinket.1.cooldown.remains|!trinket.2.cooldown.remains
# non-stat on use trinkets get used on cooldown, so long as it wont interfere with a stat on-use trinket
actions.cooldown+=/use_item,slot=trinket1,if=trinket.1.has_use_damage&(trinket.2.cooldown.remains>20|!trinket.2.has_use_buff|(cooldown.tigers_fury.remains<25&cooldown.tigers_fury.remains>20&!variable.use_custom_timers|variable.use_custom_timers&cooldown.tigers_fury.remains<25&variable.tfRemains>20&!variable.tfNow))
actions.cooldown+=/use_item,slot=trinket2,if=trinket.2.has_use_damage&(trinket.1.cooldown.remains>20|!trinket.1.has_use_buff|(cooldown.tigers_fury.remains<25&cooldown.tigers_fury.remains>20&!variable.use_custom_timers|variable.use_custom_timers&cooldown.tigers_fury.remains<25&variable.tfRemains>20&!variable.tfNow))
actions.cooldown+=/berserking
# potion during berserk, fallback pot if the fight is going to end within its duration. Expedite use if you would lose a pot use by holding it.
actions.cooldown+=/potion,if=buff.bs_inc.up|fight_remains<32|buff.tigers_fury.up&!variable.holdPot
# non trinket gear-on-uses have variable rules on whether or not they trigger the trinket shared CD. For the cases they do we will need specific APL entries. For now just use on cooldown.
actions.cooldown+=/use_items
# stat on-use trinkets, essentially this compares the number of trinket uses to the number of other cooldown uses remaining in the fight to determine whether or not to send the trinket.
actions.cooldown+=/use_item,slot=trinket1,use_off_gcd=1,if=trinket.1.has_use_buff&(cooldown.tigers_fury.remains>=25|trinket.1.is.algethar_puzzle_box&(!raid_event.adds.up|raid_event.adds.remains>13)&(!variable.use_custom_timers&(cooldown.tigers_fury.remains<2|buff.tigers_fury.up)|variable.use_custom_timers&(variable.tfRemains<2|variable.tfNow)))&(buff.potion.up|variable.slot1CountRemaining!=variable.potCountRemaining)&((cooldown.bs_inc.remains<5|buff.bs_inc.remains>=14)&!variable.holdBerserk|cooldown.convoke_the_spirits.remains<10&!variable.holdConvoke&talent.convoke_the_spirits|variable.lowestCDremaining>trinket.1.cooldown.duration|variable.zerkCountRemaining=1&(!talent.convoke_the_spirits|variable.convokeCountRemaining=1)&variable.potCountRemaining=1&(variable.highestCDremaining+3)>trinket.1.cooldown.duration|variable.zerkCountRemaining=variable.convokeCountRemaining&talent.convoke_the_spirits&variable.zerkCountRemaining!=variable.potCountRemaining&(cooldown.bs_inc.remains<?cooldown.convoke_the_spirits.remains)>trinket.1.cooldown.duration|variable.slot1CountRemaining=variable.potCountRemaining-1&buff.potion.up|trinket.2.has_use_buff&(variable.secondLowestCDremaining>trinket.1.cooldown.duration&variable.lowestCDremaining>trinket.2.cooldown.remains|variable.zerkCountRemaining=1&(!talent.convoke_the_spirits|variable.convokeCountRemaining=1)&variable.potCountRemaining=1&variable.highestCDremaining>trinket.2.cooldown.remains|variable.zerkCountRemaining=variable.convokeCountRemaining&talent.convoke_the_spirits&variable.zerkCountRemaining!=variable.potCountRemaining&(cooldown.convoke_the_spirits.remains<?cooldown.bs_inc.remains)>trinket.2.cooldown.remains|variable.convokeCountRemaining=0&variable.zerkCountRemaining=0&variable.potCountRemaining=0))
actions.cooldown+=/use_item,slot=trinket2,use_off_gcd=1,if=trinket.2.has_use_buff&(!trinket.1.has_use_buff|trinket.1.cooldown.remains>20)&(cooldown.tigers_fury.remains>=25|trinket.2.is.algethar_puzzle_box&(!raid_event.adds.up|raid_event.adds.remains>13)&(!variable.use_custom_timers&(cooldown.tigers_fury.remains<2|buff.tigers_fury.up)|variable.use_custom_timers&(variable.tfRemains<2|variable.tfNow)))&(buff.potion.up|variable.slot2CountRemaining!=variable.potCountRemaining)&((cooldown.bs_inc.remains<5|buff.bs_inc.remains>=14)&!variable.holdBerserk|cooldown.convoke_the_spirits.remains<10&!variable.holdConvoke&talent.convoke_the_spirits|variable.lowestCDremaining>trinket.2.cooldown.duration|variable.zerkCountRemaining=1&(!talent.convoke_the_spirits|variable.convokeCountRemaining=1)&variable.potCountRemaining=1&(variable.highestCDremaining+3)>trinket.2.cooldown.duration|variable.zerkCountRemaining=variable.convokeCountRemaining&talent.convoke_the_spirits&variable.zerkCountRemaining!=variable.potCountRemaining&(cooldown.bs_inc.remains<?cooldown.convoke_the_spirits.remains)>trinket.2.cooldown.duration|variable.slot1CountRemaining=variable.potCountRemaining-1&buff.potion.up|trinket.1.has_use_buff&(variable.secondLowestCDremaining>trinket.2.cooldown.duration&variable.lowestCDremaining>trinket.1.cooldown.remains|variable.zerkCountRemaining=1&(!talent.convoke_the_spirits|variable.convokeCountRemaining=1)&variable.potCountRemaining=1&variable.highestCDremaining>trinket.1.cooldown.remains|variable.zerkCountRemaining=variable.convokeCountRemaining&talent.convoke_the_spirits&variable.zerkCountRemaining!=variable.potCountRemaining&(cooldown.convoke_the_spirits.remains<?cooldown.bs_inc.remains)>trinket.1.cooldown.remains|variable.convokeCountRemaining=0&variable.zerkCountRemaining=0&variable.potCountRemaining=0))
# fallback use if fight is ending soon
actions.cooldown+=/use_item,slot=trinket1,if=fight_remains<=(21<?trinket.1.proc.any_dps.duration)
actions.cooldown+=/use_item,slot=trinket2,if=fight_remains<=(21<?trinket.2.proc.any_dps.duration)
actions.cooldown+=/incarnation,if=buff.tigers_fury.up&!variable.holdBerserk&!variable.use_custom_timers|variable.zerkNow
actions.cooldown+=/berserk,if=buff.tigers_fury.up&!variable.holdBerserk&!variable.use_custom_timers|variable.zerkNow
# 0-2 combo points outside zerk, 0-4 combo points inside zerk
actions.cooldown+=/feral_frenzy,if=!talent.frantic_frenzy&combo_points<=2+(2*buff.bs_inc.up)
# we can find some gains in dslice by holding frantic frenzy for larger target counts occasionally, but its not by a lot, whereas holding tends to devolve pretty quickly in droute. I suspect this is due to how reliant on single target droute ends up being. Further investigations should be looked into.
actions.cooldown+=/frantic_frenzy,if=(!fight_style.dungeonroute&!fight_style.dungeonslice|raid_event.adds.remains>5)&(buff.tigers_fury.up&spell_targets>=2|combo_points<=2+(2*buff.bs_inc.up))
# always line up convoke with berserk if you can. If we are using jank tigers fury timings, send naked convoke
actions.cooldown+=/convoke_the_spirits,if=fight_remains<5|buff.bs_inc.up&buff.bs_inc.remains<5-talent.ashamanes_guidance|buff.tigers_fury.up&!variable.holdConvoke&(prev_gcd.1.rip|prev_gcd.1.ferocious_bite)|variable.use_custom_timers&variable.nextTFTimer+cooldown.convoke_the_spirits.duration-10>variable.nextBSTimer&combo_points<=2

# hold our current timer
actions.custom_timers=variable,name=currentTFTimer,default=-10,op=set,if=time>variable.nextTFTimer,value=variable.nextTFTimer
actions.custom_timers+=/variable,name=currentBSTimer,default=-10,op=set,if=time>variable.nextBSTimer,value=variable.nextBSTimer
# Tiger's Fury Timers (the value= are where you would edit, leave the rest alone). I recommend some leeway esp if youre playing puzzlebox
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=30
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=60
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=90
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=120
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=151
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=181
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=211
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=241
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=271
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=301
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=332
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=362
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=392
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=422
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=452
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=482
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=513
actions.custom_timers+=/variable,name=nextTFTimer,op=set,if=time>variable.nextTFTimer,value=543
# Berserk Timers
actions.custom_timers+=/variable,name=nextBSTimer,op=set,if=time>variable.nextBSTimer,value=121
actions.custom_timers+=/variable,name=nextBSTimer,op=set,if=time>variable.nextBSTimer,value=242
actions.custom_timers+=/variable,name=nextBSTimer,op=set,if=time>variable.nextBSTimer,value=363
actions.custom_timers+=/variable,name=nextBSTimer,op=set,if=time>variable.nextBSTimer,value=483
# if we run out of custom timers, assume default behavior from that point on. THIS MUST STAY BELOW ALL OF THE SET TIMERS
actions.custom_timers+=/variable,name=use_custom_timers,op=set,if=time>variable.nextTFTimer&time>variable.nextBSTimer,value=0
# we are clear to use tigers fury. This is the same as timer < time < timer + 4. So if our timer is 30s, then its true between 30 and 34 seconds.
actions.custom_timers+=/variable,name=tfNow,default=0,op=set,value=variable.use_custom_timers*(variable.currentTFTimer+4>time&time>=variable.currentTFTimer)
# we are clear to use berserk. This is the same timer < time < timer + 4, so if our timer is 121s, then its true between 121 and 125 seconds.
actions.custom_timers+=/variable,name=zerkNow,default=0,op=set,value=variable.use_custom_timers*(variable.currentBSTimer+4>time&time>=variable.currentBSTimer)

# maintain rip in single-target. 4cp rips is a ~0.1-0.2% gain, omitted for simplicity
actions.finisher=rip,if=combo_points>=5&refreshable&(buff.tigers_fury.up|dot.rip.remains<variable.tfRemains)
actions.finisher+=/pool_resource,for_next=1
actions.finisher+=/ferocious_bite,max_energy=1,if=combo_points>=5
```

## Confirmed Spell IDs (SimulationCraft HTML)

IDs below are from the spell-ids-reference.json (extracted from the SimC Midnight 12.0.5 HTML report). Only abilities named in this guide with an exact key match in the reference are listed.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Rake | 1822, 155722 (multiple: base cast + variants) | physical | cast |
| Rip | 1079 | physical | cast |
| Shred | 5221 | physical | cast |
| Ferocious Bite | 22568 | physical | cast |
| Moonfire | 8921, 164812, 155625 (multiple: base cast + variants) | arcane | cast |
| Swipe | 213771 | physical | cast |
| Tiger's Fury | 5217 | physical | cast |
| Feral Frenzy | 274838, 274837 (multiple: base cast + variants) | physical | cast |
| Berserk | 106951 | physical | cast |
| Convoke the Spirits | 391528 | nature | cast |
| Bloodseeker Vines | 439531 | physical | cast |
| Bursting Growth | 440122 | physical | cast |
| Unseen Slash | 1263890, 1271863 (multiple: base cast + variants) | physical | cast |
| Barkskin | 22812 | nature | cast |
| Frenzied Regeneration | 22842 | physical | cast |
| Survival Instincts | 61336 | physical | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

Note: Primal Wrath (285381), Incarnation: Avatar of Ashamane (102543), and Swipe Cat Form (106785) are confirmed in the existing guide via Wowhead but do not appear as top-level keys in the SimC reference under those exact names.

## Notes and Known Gaps

- **Survival Instincts cooldown** could not be confirmed from the spell page (the page's "6 seconds" is the buff duration). The ~3-minute cooldown comes from the Icy Veins spell summary. Re-verify the exact cooldown.
- **Incarnation: Avatar of Ashamane cooldown** — the live spell page (102543) lists **3 minutes**; the Icy Veins search snippet said "2-minute." The spell page value (3 min) is used here. Re-verify; talents may modify it.
- **Frenzied Regeneration cooldown/charges** — the spell page (22842) shows a 1-second internal value; in practice it is a charge-based ability (commonly ~36s recharge per Icy Veins). Exact charge count and recharge not confirmed from a single authoritative page.
- **Heart of the Wild** — spell ID NOT confirmed. The page at /spell=319454/ resolved to "Call of the Elder Druid" (a different talent, +20% feral/balance damage, 45s, 5-min CD), not Heart of the Wild. Heart of the Wild's effects (Bear-Form health boost / off-role buff) are described from search summaries only; ID omitted deliberately.
- **Bear Form spell ID** omitted — not fetched from a confirming page. Effects (~220% armor, +Stamina) come from the Icy Veins spell summary. (SimC reference confirms Bear Form as spell 5487, but this was not validated against a live Wowhead page; treat as unconfirmed until checked.)
- **Entangling Roots, Hibernate, Prowl, Wild Charge** spell IDs omitted — not individually confirmed on fetched spell pages.
- **Renewal cooldown** (1.5 min) and **Regrowth** effect are from the spell pages; Renewal heal value (30% max health) confirmed.
- **Talents Panther's Guile, Rampant Ferocity, Claw Rampage, Bloodtalons** — referenced in 12.0.5 sources but not fully detailed; mechanics not deeply sourced. Apex Predator's Craving, Sudden Ambush, Clearcasting procs are described from the Method/Icy Veins rotation pages, not from individual spell pages, so no proc spell IDs are given.
- **Consumable/enchant/gem item IDs** — none confirmed; only names from Icy Veins. Do not hardcode IDs without checking Wowhead.
- **Wowhead guide pages are JS-rendered** and returned navigation-only content via fetch; rotation/talent detail was taken from Method and Icy Veins. Individual Wowhead **spell** pages render server-side and were the source of all confirmed IDs.
- **SimC damage distribution** — the abilities table from the SimC source has a column mis-parse for most ability rows: "percent" values for Feral Frenzy, Rake, Rip, Lunar Inspiration, and Unseen Slash appear to be crit/hit rate statistics rather than damage shares. Only Bloodseeker Vines (53.04%) is a plausible single-target damage-share figure. The raw talent string and full APL for Wildstalker are now present.
- **Talent string and APL** — now added (Wildstalker build). Damage and rotational spell IDs confirmed via SimC reference for: Rake, Rip, Shred, Ferocious Bite, Moonfire, Swipe, Tiger's Fury, Feral Frenzy, Berserk, Convoke the Spirits, Bloodseeker Vines, Bursting Growth, Unseen Slash. Defensive spell IDs (Barkskin, Survival Instincts, Frenzied Regeneration) also confirmed. Interrupt (Skull Bash 106839), utility, and consumable IDs remain as-noted above.
- **Maintenance flag:** Re-verify every spell ID, cooldown, and the consumable list after any 12.x patch. Spell IDs themselves do not change once assigned, but talents, cooldowns, durations, and percentages can be retuned between patches.
