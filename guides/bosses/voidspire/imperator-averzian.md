# Imperator Averzian — Boss Guide
**The Voidspire | Season 1 | Boss 1 of 6**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

Averzian is a single-phase fight built around a tic-tac-toe board mechanic. Throughout the fight, he summons Abyssal Voidshapers that move to three random spaces on the ground and attempt to "claim" them by channeling Void Rupture. If three adjacent spaces are ever claimed simultaneously, the raid wipes. Because each wave provides only two soak opportunities (Umbral Collapse), one space will always be claimed per wave — the raid must pick the two most dangerous Voidshapers and stop them.

The secondary wipe condition is the boss positioning: Averzian gains a 75% damage buff and 99% damage reduction (Imperator's Glory) while within 10 yards of any claimed space. Tanks must constantly move him away from the growing grid of claimed ground.

---

## Phase 1: The Tic-Tac-Toe Board

The entire fight is a single repeating pattern: wave of Voidshapers → claim two soaks → dodge aftermath → deal with secondary adds.

### Boss Abilities

**Shadow's Advance** — Averzian summons 3 Abyssal Voidshapers that each move to a random space and channel Void Rupture. All three have 99% damage reduction until hit by Umbral Collapse. The raid can only stop 2 per wave. Plan which two to prioritize based on the grid state.

**Umbral Collapse** — A large soak circle appears on a random player. The entire raid should help soak it. Moving the soak onto a Voidshaper removes their damage reduction, allowing them to be killed. Only 2 soaks happen per wave, so you get exactly 2 chances to stop Voidshapers.

**Void Rupture** — When a Voidshaper finishes its channel, the space is claimed. The area explodes in a 12-yard burst and shoots several beams outward for a few seconds. Dodge the explosion and the beams after.

**Void Fall** — Knockback followed by AoE circles on the ground. Dodge the circles.

**Oblivion's Wrath** — Several void spear beams shoot outward from Averzian, knocking back anyone hit. Dodge the beams.

**Shadow Phalanx** — Untargetable troops march from one end of the arena to the other, dealing massive damage to any player walked over. Find the gap in the formation and move through it.

**Imperator's Glory** — While within 10 yards of a claimed space, Averzian deals 75% increased damage and takes 99% reduced damage. Tanks must move him away from claimed spaces at all times.

**Dark Upheaval** — Burst of raid-wide damage followed by ticking damage. Healers manage it.

**Blackening Wounds** — Averzian's melee attacks apply a stacking 4% health reduction debuff for 20 seconds. When secondary adds spawn (after a space is claimed), those adds fixate on whichever tank has the most Blackening Wound stacks. Use this to control add fixation — tank swap before adds spawn to direct them.

### Secondary Adds (After Space Claimed)
When a space is successfully claimed, additional adds spawn nearby with a set of interruptible cast mechanics. These are crowd-controllable and should be AoE'd down quickly while continuing to handle the main wave.

---

## Heroic Changes

- **Imperator's Glory** now also buffs Averzian if he is within 10 yards of any active add, not just claimed spaces. Keep him away from both.
- At 35% health, **Voidmaws** begin running toward claimed spaces to heal them. Kill or interrupt these immediately.

---

## Mythic Changes

- **Cosmic Shell** — Abyssal Voidshapers now spawn with 2 stacks each of Cosmic Shell, making them immune to Umbral Collapse. Several players receive a dispellable debuff. When a debuffed player is near a Voidshaper and their debuff is dispelled, one Cosmic Shell stack is removed. Assign 2 debuffed players to each target Voidshaper and dispel them to strip both stacks before the soak arrives.
- **Umbral Collapse** — On Mythic, Void Marked players receive a 10-second DoT after their debuff is dispelled.
- A new add with an interrupt mechanic spawns alongside the secondary add wave.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Void Rupture explosion + beams | Beams from claimed spaces — purely positional dodge |
| TBD | Void Fall circles | Ground AoE circles after knockback |
| TBD | Oblivion's Wrath | Spear beams shooting outward from boss |
| TBD | Shadow Phalanx | Marching troops — find the gap |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Umbral Collapse | Required raid soak — not avoidable for participating players |
| Dark Upheaval | Unavoidable raid-wide burst + DoT |
| Blackening Wounds | Tank melee debuff — unavoidable for active tank |
| Cosmic Shell debuff (Mythic) | Dispellable mechanic assignment — unavoidable |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Void Fall / Oblivion's Wrath / Shadow Phalanx** — Repeated hits on the same player across multiple pulls indicate they are not tracking and dodging the predictable damage patterns.
- **Void Rupture beams** — Standing in beam paths after a space is claimed. Purely positional and avoidable.
- **Shadow Phalanx** — Player consistently failing to find the safe gap in the troop march.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Voidshapers immune to soaks | No | Yes — strip Cosmic Shell via dispels first |
| Umbral Collapse aftermath | Nothing | DoT on dispelled players |
| New add with interrupt | No | Yes |
| Imperator's Glory (adds) | No | Yes — boss buffs near adds too |
| Voidmaws at 35% HP | Yes | Yes |

---

## Quick Tips

- Before each wave, identify which 2 Voidshaper positions are most dangerous given the current grid state. Communicate the call clearly.
- On Mythic, assign dispel positions ahead of time — 2 debuffed players per priority Voidshaper.
- Keep Averzian moving constantly. A boss parked near claimed spaces heals itself to unkillable.
- Stagger DPS on the Voidshapers — kill only after their immunity is stripped.
- Interrupt and AoE secondary adds immediately; don't let them free-cast.
