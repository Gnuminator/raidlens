# Beast Mastery Hunter — Raid Guide (WoW Midnight 12.x)

## Overview

Beast Mastery Hunter is a fully mobile ranged DPS spec. All damage is done while moving. Output is split between the player and their pets, with pets handling the majority of damage. The core loop revolves around Bestial Wrath (SpellID: 19574) as the primary 30-second cooldown: it triggers Pack Leader capstone summons, empowers pets, and is where the bulk of burst damage lands. Kill Command (SpellID: 34026) is the primary rotational ability, Barbed Shot (SpellID: 217200) applies a rolling DoT that stacks additively rather than resetting on reapplication, and Cobra Shot (SpellID: 193455) is the Focus dump. The Nature's Ally Apex talent elevates specific Kill Commands by amplifying their damage.

The spec's primary weakness is pet pathing dependency: if the pet cannot reach the target, a significant fraction of damage is lost.

**SimC profile:** MID1_Hunter_Beast_Mastery — Pack Leader build, no Black Arrow. 113,139 DPS at item level 288, 300s fight.

---

## Role in Raid

- **Primary role:** Ranged DPS.
- **Hunter's Mark** (SpellID: 257284) — Increases damage taken by target by 3%. Must be maintained on the priority target at all times. One mark per target — coordinate with other Hunters.
- **Primal Rage** (SpellID: 264667) — Ferocity pet ability. Group Bloodlust: 30% Haste for 40 seconds. Shares a 10-minute cooldown with Bloodlust (SpellID: 2825), Time Warp (SpellID: 80353), and Fury of the Aspects (SpellID: 390386). Only available with a Ferocity pet. Coordinate with raid.
- **No group defensive.** BM has no ability that mitigates damage for others.
- **Full movement DPS.** No cast time abilities in the base rotation.

---

## Abilities Reference

### Core Abilities

**Kill Command** (SpellID: 34026)
Directs your pet to charge and strike the target for Physical damage. 2 charges. Cooldown reduced by Haste. Cast when Nature's Ally (SpellID: 459732) is active or Howl of the Pack Leader (SpellID: 471878) is ready. Do not let charges cap.

**Barbed Shot** (SpellID: 217200)
Fires a barbed arrow that causes the target to bleed. Rolling DoT: re-casting on a bleeding target adds the new DoT's remaining damage into the existing bleed rather than resetting duration. 2 charges. Do not let charges cap.

**Bestial Wrath** (SpellID: 19574)
30-second cooldown. Empowers you and your pet, deals a direct damage hit, triggers Bloodshed (SpellID: 321530), and grants Howl of the Pack Leader via Stampede! (SpellID: 471879). Use on cooldown without delay. S1 2-piece tier set increases its direct damage by 25%. S1 4-piece summons 1 Dire Beast (SpellID: 120679) for 8 seconds on cast.

**Cobra Shot** (SpellID: 193455)
Deals Nature damage. Primary Focus dump. Cast when Focus would otherwise cap and no higher-priority ability is available.

**Wild Thrash** (SpellID: 461910)
AoE only. Commands your pet to thrash, activating Beast Cleave (SpellID: 115939) and Kill Cleave (SpellID: 378207). Not used in single target.

**Auto Shot**
Passive ranged auto attacks. Generate 2 Focus per attack via Lethal Barbs (SpellID: 472006). Never cancel.

### Cooldowns

**Bestial Wrath** (SpellID: 19574) — 30s CD. Primary DPS cooldown. Always use on cooldown.

**Bloodshed** (SpellID: 321530) — Triggered automatically when Bestial Wrath is cast, provided pet is attacking a target. Causes target to bleed for 120% AP over 12 seconds. Each tick has a 10% chance to summon a Dire Beast. If pet is not on a target at time of Bestial Wrath cast, no bleed is applied.

**Stampede!** (SpellID: 471879) — Pack Leader capstone. Bestial Wrath grants Howl of the Pack Leader and causes the next Kill Command to trigger a Stampede, dealing Physical damage to enemies in a line in front of the player over 7 seconds. Fires flat at the player's height — elevation differences cause misses.

**Howl of the Pack Leader** (SpellID: 471878) — Passive 30-second combat timer, reduced by Cobra Shot and Kill Command casts via Dire Summons (SpellID: 472002). When ready, next Kill Command summons the next Beast in a 3-step rotation: Wyvern (10% damage bonus to player and pets for 15 seconds), Bear (bleeds up to 8 nearby enemies, treated as Dire Beast by other talents), Boar (charges target, damages it and nearby enemies). Bestial Wrath also immediately grants this via Stampede!

**Dire Beast** (SpellID: 120679) — Summoned passively via Dire Beast talent, S1 4-piece, and Bloodshed procs (10% per tick). Not directly cast by the player in this build.

### Passives and Procs

**Nature's Ally** — Apex talent, 4 points across 3 ranks:
- Rank 1 (SpellID: 459730): Bestial Wrath summons an additional Animal Companion.
- Rank 2 (SpellID: 459731): Increases pet damage and improves Bestial Wrath cleave.
- Rank 3 (SpellID: 459732): Increases Barbed Shot and Cobra Shot damage while empowering Kill Command. This is the rank that makes Nature's Ally a buff to track — specific Kill Commands are amplified when this buff is active.

**Beast Cleave** (SpellID: 115939) — Pet attacks splash damage to nearby enemies for a short window after Wild Thrash.

**Kill Cleave** (SpellID: 378207) — Kill Command spreads damage to nearby enemies while Beast Cleave is active.

**Pack Mentality** (SpellID: 472001) — Howl of the Pack Leader increases Kill Command damage by 25% and reduces Barbed Shot cooldown by 4 seconds.

**Fury of the Wyvern** (SpellID: 472004) — Pet auto attacks increase the Wyvern damage bonus by 1% (stacks up to +10%). Kill Command extends Wyvern duration by 0.5 seconds (up to 5 additional seconds).

**Hogstrider** (SpellID: 472005) — When the Boar deals damage, the next Cobra Shot deals 200% additional damage and hits one additional nearby target per enemy the Boar struck, stacking up to 4 times.

**Lethal Barbs** (SpellID: 472006) — Auto attacks deal 25% increased damage and restore 2 Focus to player and pet.

**Dire Summons** (SpellID: 472002) — Cobra Shot and Kill Command each reduce the Howl of the Pack Leader cooldown by 1 second.

**Shell Cover** (SpellID: 472008) — Survival of the Fittest reduces 10% additional damage (total 40% DR with base 30%).

**Sharpened Fangs** (SpellID: 472009) — Increases Mastery by 3%.

**No Mercy** (SpellID: 472007) — Increases bleed damage by 10%.

**Better Together** (SpellID: 472003) — Increases pet damage by 2% and Barbed Shot damage by 10%.

**Mastery: Master of Beasts** — Passive. Increases damage done by all summoned pets and creatures, and increases Shot damage at half effectiveness.

### Utility

**Misdirection** (SpellID: 34477)
Transfers all threat from the player's next 8 seconds of attacks to the targeted party or raid member. For Beast Mastery, the transfer from the player character is twice as potent as other specs. 30-second cooldown. Use on tank on cooldown and at every pull.

**Counter Shot** (SpellID: 147362)
Interrupts target's spellcasting. Ranged interrupt. The only Hunter interrupt. Disruptive Rounds (SpellID: 343248) restores 30 Focus on successful interrupts.

**Intimidation** (SpellID: 19577)
Commands pet to charge and stun target for 5 seconds. 1-minute cooldown. Pet must be in melee range. Guttural Roar (SpellID: 459508) causes Intimidation to also stun nearby enemies.

**Binding Shot** (SpellID: 109248)
Shoots an arrow to a location; enemies that walk close to it become tethered, and walking too far from the arrow stuns them for 3 seconds.

**Tranquilizing Shot** (SpellID: 19801)
Removes 1 Magic and 1 Enrage effect from target. Kodo Tranquilizer (SpellID: 459534) extends this to additional nearby targets.

**Tar Trap** (SpellID: 187698)
Places a trap that, when triggered, creates a patch of tar slowing enemies by 50%.

**Freezing Trap** (SpellID: 187650)
Trap that freezes one enemy for up to 1 minute. Breaks on damage.

**Hunter's Mark** (SpellID: 257284)
3% damage taken increase on target. Apply pre-pull. One mark per target.

**Feign Death** (SpellID: 5384)
Drops all threat immediately and attempts to exit combat. Emergency Salve (SpellID: 343242) causes Feign Death and Aspect of the Turtle to remove Poison and Disease effects.

**Master's Call** (SpellID: 53271)
Cunning pet ability. Clears all snares and roots from pet and a friendly target, temporarily making both immune. Defaults to player if no target. With Masterful Call (SpellID: 1268705, active in this build): +2 second duration, +20% movement speed.

**Primal Rage** (SpellID: 264667)
Ferocity pet ability. Group Haste: 30% for 40 seconds. Shares cooldown with Bloodlust and equivalents.

**Disengage** (SpellID: 781)
Launches player backward. Short cooldown. With Posthaste (SpellID: 109215, active in this build): clears roots and grants a large movement speed increase for a few seconds.

**Aspect of the Cheetah** (SpellID: 186257)
90% movement speed for a short duration, followed by 30% for a longer duration. Long cooldown. With Improved Aspect of the Cheetah (SpellID: 344548, active in this build): cooldown reduced by 30 seconds. With Catlike Reflexes (SpellID: 378970, active in this build): initial 90% boost duration increased by 2 seconds. With Scout's Instincts (SpellID: 459518, active in this build): movement speed cannot drop below 80% while active.

**Camouflage** (SpellID: 199483)
Stealth effect for player and pet, heals for 2% max health per second while active. Only usable outside combat.

**Mend Pet** (SpellID: 136)
HoT on pet. Cast proactively. Pet death is a large DPS loss.

---

## Rotation / Priority

### Pack Leader — Opener (Single Target)

Source: Wowhead rotation guide (https://www.wowhead.com/guide/classes/hunter/beast-mastery/rotation-cooldowns-pve-dps, updated 2026/03/21), confirmed against SimC APL.

Pre-combat:
1. Hunter's Mark on priority target.
2. Misdirection on tank.
3. Algeth'ar Puzzle Box (Item ID: 193701) activated 2 seconds before pull.

At pull:
1. Barbed Shot.
2. Potion, stat-increasing trinkets, and racials.
3. Bestial Wrath — confirm pet is on target.
4. Kill Command.
5. Barbed Shot.
6. Continue sustained priority.

### Pack Leader — Sustained Priority (Single Target)

Source: Wowhead rotation guide.

1. **Barbed Shot** — if Bestial Wrath comes off cooldown within the next GCD.
2. **Bestial Wrath** — on cooldown, never delay.
3. **Kill Command** — if Howl of the Pack Leader buff is active OR Nature's Ally buff is active.
4. **Barbed Shot** — on cooldown.
5. **Cobra Shot** — Focus dump filler.

Key rules:
- Kill Command must never reach 2 charges.
- Barbed Shot must never reach 2 charges.
- Never let Focus cap.
- Pet must be attacking the correct target — Bloodshed does not apply if pet is not attacking when Bestial Wrath is pressed.
- Do not press Kill Command twice consecutively without a filler in between (Nature's Ally Apex mechanic rewards alternating).

### AoE Priority (3+ targets)

Source: Wowhead rotation guide.

1. **Barbed Shot** at priority target — if Bestial Wrath comes off cooldown imminently.
2. **Bestial Wrath** — only while Beast Cleave is active.
3. **Wild Thrash** — to activate and maintain Beast Cleave.
4. **Kill Command**.
5. **Barbed Shot** at priority target.
6. **Cobra Shot**.

Do NOT multi-dot Barbed Shot. Apply only to priority target.
Position at the same height as enemies before Bestial Wrath — Stampede! fires flat and misses on elevation differences.

---

## SimulationCraft APL

Profile: `MID1_Hunter_Beast_Mastery` — Pack Leader, no Black Arrow.
Talent string: `C0PAAAAAAAAAAAAAAAAAAAAAAAMmxwCsBzwQDbAAYG2GzsMzwMmZYYmxYmxMzYGzwMzYGzghmBAAAAAMDAAAzMzMAzshwwsA2MA`

```
# Precombat
actions.precombat=summon_pet
actions.precombat+=/snapshot_stats
actions.precombat+=/use_item,name=algethar_puzzle_box

# Default
actions=auto_shot
actions+=/call_action_list,name=cds
actions+=/call_action_list,name=trinkets
actions+=/call_action_list,name=st,if=!talent.black_arrow&(active_enemies<2|!talent.beast_cleave&active_enemies<3)
actions+=/call_action_list,name=cleave,if=!talent.black_arrow&(active_enemies>2|talent.beast_cleave&active_enemies>1)

# CDs
actions.cds=invoke_external_buff,name=power_infusion,if=buff.bestial_wrath.up|cooldown.bestial_wrath.remains<30|fight_remains<16
actions.cds+=/berserking,if=cooldown.bestial_wrath.ready|fight_remains<13
actions.cds+=/blood_fury,if=cooldown.bestial_wrath.ready|fight_remains<16
actions.cds+=/ancestral_call,if=cooldown.bestial_wrath.ready|fight_remains<16
actions.cds+=/fireblood,if=cooldown.bestial_wrath.ready|fight_remains<9
actions.cds+=/potion,if=cooldown.bestial_wrath.ready|fight_remains<31

# Single Target
actions.st=barbed_shot,target_if=min:dot.barbed_shot.remains|max_prio_damage,if=cooldown.bestial_wrath.remains<gcd
actions.st+=/bestial_wrath
actions.st+=/wild_thrash,if=active_enemies>1
actions.st+=/kill_command,if=cooldown.bestial_wrath.remains>full_recharge_time+gcd&(buff.natures_ally.up|howl_summon.ready)|!apex.3
actions.st+=/barbed_shot,if=(focus<75|full_recharge_time<gcd)&!talent.serpentine_strikes|talent.serpentine_strikes
actions.st+=/cobra_shot

# Cleave
actions.cleave=barbed_shot,target_if=min:dot.barbed_shot.remains|max_prio_damage,if=full_recharge_time<gcd
actions.cleave+=/wild_thrash,if=talent.beast_cleave
actions.cleave+=/bestial_wrath,if=!prev.wild_thrash
actions.cleave+=/wild_thrash,if=!talent.beast_cleave
actions.cleave+=/kill_command
actions.cleave+=/cobra_shot,if=cooldown.wild_thrash.remains>gcd&buff.hogstrider.up&active_enemies<4
actions.cleave+=/barbed_shot,target_if=min:dot.barbed_shot.remains|max_prio_damage
actions.cleave+=/cobra_shot,if=talent.beast_cleave&cooldown.wild_thrash.remains>gcd|!talent.beast_cleave

# Trinkets
actions.trinkets=use_item,name=algethar_puzzle_box,if=cooldown.bestial_wrath.remains<2|fight_remains<23
actions.trinkets+=/use_item,name=rangercaptains_iridescent_insignia
actions.trinkets+=/use_item,name=void_stalkers_contract
actions.trinkets+=/use_item,name=latchs_crooked_hook
```

---

## Talent Builds

### Pack Leader (SimC Default — Raid)

Talent string: `C0PAAAAAAAAAAAAAAAAAAAAAAAMmxwCsBzwQDbAAYG2GzsMzwMmZYYmxYmxMzYGzwMzYGzghmBAAAAAMDAAAzMzMAzshwwsA2MA`

#### Hunter Class Tree (active nodes)

| Talent | SpellID |
|---|---|
| Rejuvenating Wind | 385539 |
| Survival of the Fittest | 264735 |
| Posthaste | 109215 |
| Natural Mending | 270581 |
| Padded Armor | 459450 |
| Hunter's Avoidance | 384799 |
| Combat Experience | 392444 |
| Improved Aspect of the Cheetah | 344548 |
| Precision Strikes | 260285 |
| Counter Shot | 147362 |
| Serrated Tips | 260228 |
| Pathfinding | 378955 |
| Disruptive Rounds | 343248 |
| Improved Feign Death | 343244 |
| Misdirection | 34477 |
| Trigger Finger | 459507 |
| Touch of Grass | 459517 |
| Improved Aspect of the Turtle | 344553 |
| Specialized Arsenal | 459542 |
| Scout's Instincts | 459518 |
| Shell Wall | 459376 |
| Intimidation | 19577 |
| Lone Survivor | 388039 |
| Catlike Reflexes | 378970 |
| Binding Shot | 109248 |
| Born To Be Wild | 266921 |
| Keen Eyesight | 378004 |
| Guardian's Hide | 1272094 |
| Unnatural Causes | 459527 |

#### Beast Mastery Spec Tree (active nodes)

| Talent | SpellID |
|---|---|
| Kill Command | 34026 |
| Animal Companion | 267116 |
| Barbed Shot | 217200 |
| Alpha Predator | 269737 |
| Dire Beast | 120679 |
| Stomp | 199530 |
| War Orders | 393933 |
| Wild Thrash | 461910 |
| Bestial Wrath | 19574 |
| Cobra Shot | 193455 |
| Beast Cleave | 115939 |
| Scent of Blood | 193532 |
| Thundering Hooves | 459693 |
| Go for the Throat | 459734 |
| Kill Cleave | 378207 |
| The Beast Within | 344967 |
| Thrill of the Hunt | 257944 |
| Pack Tactics | 321014 |
| Barbed Scales | 469880 |
| Dire Command | 378743 |
| Jagged Wounds | 381700 |
| Serpentine Strikes | 378676 |
| Snakeskin Quiver | 469882 |
| Dire Frenzy | 385810 |
| Frenzy | 272790 |
| Huntmaster's Call | 459730 |
| Bloodshed | 321530 |
| Savagery | 424557 |
| Wildspeaker | 378913 |
| Bloody Frenzy | 407412 |
| Nature's Ally (Rank 1) | 459730 |
| Nature's Ally (Rank 2) | 459731 |
| Nature's Ally (Rank 3) | 459732 |

#### Pack Leader Tree (active nodes)

| Talent | SpellID |
|---|---|
| Howl of the Pack Leader | 471878 |
| Pack Mentality | 472001 |
| Dire Summons | 472002 |
| Better Together | 472003 |
| Masterful Call | 1268705 |
| Ursine Fury | 472476 |
| Fury of the Wyvern | 472004 |
| Hogstrider | 472005 |
| Lethal Barbs | 472006 |
| No Mercy | 472007 |
| Shell Cover | 472008 |
| Wyvern's Gaze | 1264792 |
| Sharpened Fangs | 472009 |
| Stampede! | 471879 |

---

## Defensives

RaidLens uses this section to verify whether a player correctly used their defensive toolkit during dangerous windows.

---

**Survival of the Fittest** (SpellID: 264735)
- Reduces all damage taken by you and your pet by 30% for 6 seconds.
- With Shell Cover (SpellID: 472008, active in this build): +10% damage reduction — total 40% DR.
- With Lone Survivor (SpellID: 388039, active in this build): +2 seconds to duration — total 8 seconds.
- Charges: 1 baseline. With Padded Armor (SpellID: 459450, active in this build): gains 1 additional charge — 2 total.
- Cooldown: **1.5 minutes per charge** (confirmed from Wowhead spell data).
- GCD: Special category — does not trigger the standard GCD. Instant.
- Caveats: Covers player and pet. Do not hold both charges simultaneously during high-damage windows. Flag in logs if both charges are unused at the end of a dangerous damage window.

**Aspect of the Turtle** (SpellID: 186265)
- Deflects all attacks and reduces damage taken by 30% for 8 seconds. Cannot attack for the duration.
- With Shell Wall (SpellID: 459376, active in this build): +20% damage reduction against non-deflectable damage types.
- With Improved Aspect of the Turtle (SpellID: 344553, active in this build): cooldown reduced to 2.5 minutes.
- With Born To Be Wild (SpellID: 266921, active in this build): cooldown reduced to 2.8 minutes on its own; stacked with Improved Aspect of the Turtle the effective cooldown is **2.5 minutes** (Improved Aspect of the Turtle's reduction is the larger of the two and determines the final value).
- The deflection does not apply to DoT effects already active or projectiles already in flight at cast time.
- Can be canceled early by pressing again (brief delay prevents accidental double-press).
- GCD: Does not trigger GCD. Instant.
- Caveats: Prevents all attacking. Use only for unavoidable lethal mechanics. Flag in logs if active duration is under 3 seconds.

**Exhilaration** (SpellID: 109304)
- Heals player for 30% of max health and fully heals pet. Cannot crit.
- With Rejuvenating Wind (SpellID: 385539, active in this build): additionally heals for 12% of max health over time.
- Base cooldown: **2 minutes**. With Natural Mending (SpellID: 270581, 2 ranks, active in this build): reduced by 60 seconds — effective cooldown **1 minute**.
- GCD: 0 seconds — does not trigger GCD. Instant, usable while moving.

**Hunter's Avoidance** (SpellID: 384799)
- Passive. Reduces damage taken from AoE abilities by 5%. Always active when talented.

**Guardian's Hide** (SpellID: 1272094)
- Passive. Reduces damage taken by redirecting some to your pet. Active in this build (choice node with Roar of Sacrifice, SpellID: 53480). Do not flag Roar of Sacrifice in defensive analysis for this build — it is not taken.

**Tenacity Pet Passives** (only when using a Tenacity pet):
- Endurance Training (SpellID: 264662): +5% max health for player and pet.
- Fortitude of the Bear (SpellID: 272679): damage reduction for player and pet.
- The SimC profile uses a Duck as the primary pet. Verify the Duck's pet family in live play. If not Tenacity, these passives are unavailable.

---

## Utility

**Hunter's Mark** (SpellID: 257284) — 3% damage taken increase. Apply pre-pull, maintain throughout. One per target.

**Misdirection** (SpellID: 34477) — Threat redirect to tank. 30s CD. Use pre-pull every pull. Twice as potent for BM (per Wowhead).

**Counter Shot** (SpellID: 147362) — Ranged interrupt. Only Hunter interrupt. Assign to specific casts in raid.

**Intimidation** (SpellID: 19577) — Pet stun, 5 seconds, 1-min CD. Pet must be in melee range. Guttural Roar (SpellID: 459508) extends stun to nearby enemies.

**Binding Shot** (SpellID: 109248) — AoE tether; walking too far stuns enemies for 3 seconds.

**Tranquilizing Shot** (SpellID: 19801) — Removes 1 Magic and 1 Enrage. Not in this SimC build — talent when needed.

**Tar Trap** (SpellID: 187698) — AoE slow.

**Freezing Trap** (SpellID: 187650) — Single-target CC, up to 1 minute, breaks on damage.

**Feign Death** (SpellID: 5384) — Instant threat drop. Emergency Salve (SpellID: 343242) adds Poison/Disease dispel to this and Aspect of the Turtle.

**Disengage** (SpellID: 781) — Leap backward. With Posthaste (SpellID: 109215, active): clears roots, large movement speed boost.

**Aspect of the Cheetah** (SpellID: 186257) — 90% then 30% movement speed. Long cooldown.

**Master's Call** (SpellID: 53271) — Cunning pet only. Clears snares/roots from pet and ally. With Masterful Call (SpellID: 1268705, active): +2s duration, +20% movement speed.

**Primal Rage** (SpellID: 264667) — Ferocity pet only. Group Bloodlust (30% Haste, 40 seconds). Coordinate with raid.

**Mend Pet** (SpellID: 136) — HoT on pet. Cast proactively.

---

## Consumables and Enchants

All Item IDs sourced from live Wowhead consumables guide (https://www.wowhead.com/guide/classes/hunter/beast-mastery/enchants-gems-pve-dps, updated 2026/04/19). Confirmed against SimC profile.

### Potions
- **Light's Potential** (Item ID: 241308) — Use aligned with Bestial Wrath. Must be active before Bestial Wrath's initial hit.

### Flasks
- **Flask of the Magisters** (Item ID: 241322).

### Food
- **Feasts:** Quel'dorei Medley (Item ID: 242272) or Silvermoon Parade (Item ID: 255845).
- **Personal:** Flora Frenzy (Item ID: 255848) or Royal Roast (Item ID: 242275).

### Augment Rune
- **Void-Touched Augment Rune** (Item ID: 259085).

### Gems
- **Meta:** Indecipherable Eversong Diamond (Item ID: 240983) — one only.
- **Fillers:** Flawless Quick Amethyst (Item ID: 240900), Flawless Deadly Amethyst (Item ID: 240898), or Flawless Masterful Peridot (Item ID: 240892) — choose based on sim.

### Enchants

| Slot | Enchant | Item ID |
|---|---|---|
| Weapon | Enchant Weapon - Acuity of the Ren'dorei | 244029 |
| Head | Enchant Helm - Empowered Rune of Avoidance | 244007 |
| Shoulders | Enchant Shoulders - Amirdrassil's Grace | 243991 |
| Chest | Enchant Chest - Mark of the Worldsoul | 243977 |
| Legs | Forest Hunter's Armor Kit | 244641 |
| Boots | Enchant Boots - Lynx's Dexterity | 243953 |
| Rings | Enchant Ring - Eyes of the Eagle | 243957 |

### Weapon Oil
- **Thalassian Phoenix Oil** (Item ID: 243734) — applied to ranged weapon (main hand slot).

### Pre-Pull Checklist
- [ ] Hunter's Mark on priority target
- [ ] Misdirection on tank
- [ ] Void-Touched Augment Rune active
- [ ] Thalassian Phoenix Oil on ranged weapon
- [ ] Flask of the Magisters active
- [ ] Light's Potential ready — use before Bestial Wrath
- [ ] Algeth'ar Puzzle Box activated 2 seconds pre-pull
- [ ] Pet summoned and confirmed attacking target at pull
- [ ] Pet type confirmed (Ferocity for Primal Rage / Tenacity for DR + HP passives / Cunning for Master's Call)

---

## Notes and Known Gaps

### Remaining Unverified Items
- **Duck pet family** — The SimC profile runs a Duck as the primary pet. Verify its pet family (Ferocity/Cunning/Tenacity) in live play to confirm which Command Pet ability and passive bonuses are available.

### Resolved Items
- **Exhilaration cooldown:** 2-minute base, reduced to 1 minute with Natural Mending (2 ranks). Does not trigger GCD.
- **Aspect of the Turtle cooldown:** 3-minute base. Born To Be Wild alone → 2.8 minutes. Improved Aspect of the Turtle alone → 2.5 minutes. Both active in this build — effective cooldown **2.5 minutes**.
- **Stomp SpellID:** 199530 confirmed on live Wowhead. The 321530 entry in the source document was incorrect for Stomp (321530 is Bloodshed).
- **Bloodshed SpellID:** 321530 confirmed on live Wowhead.
- **Survival of the Fittest cooldown:** 1.5 minutes per charge, confirmed.
- **Nature's Ally:** Three ranked SpellIDs (459730 / 459731 / 459732). Track 459732 as the active Rank 3 buff that makes Kill Command high priority.
- **Pack Leader SpellIDs:** Howl of the Pack Leader is 471878, Stampede! is 471879 — confirmed from user-provided data.
- **All Hunter class tree, BM spec tree, and Pack Leader tree SpellIDs** confirmed.

### Guide Metadata
- **Patch:** WoW Midnight 12.0.5
- **Written:** May 2026
- **SimC source:** MID1_Hunter_Beast_Mastery, Pack Leader build, no Black Arrow. Provided by Christian.
- **Wowhead sources (all live, www.wowhead.com only):**
  - Abilities guide: https://www.wowhead.com/guide/classes/hunter/beast-mastery/abilities-talents-pve-dps (updated 2026/02/25)
  - Rotation guide: https://www.wowhead.com/guide/classes/hunter/beast-mastery/rotation-cooldowns-pve-dps (updated 2026/03/21)
  - Consumables guide: https://www.wowhead.com/guide/classes/hunter/beast-mastery/enchants-gems-pve-dps (updated 2026/04/19)
  - Individual spell pages provided by Christian: Survival of the Fittest (264735), Misdirection (34477), Born To Be Wild (266921), Guardian's Hide (343256 — note: user also listed 1272094, verify which is live), Keen Eyesight (378004), Unnatural Causes (459527)
- **No other sources used.**
- **Re-verify after:** Any 12.x patch affecting Hunter abilities, Pack Leader tree, Nature's Ally Apex, or S1 tier set interactions.
