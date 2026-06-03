# Vorasius — Boss Guide
**The Voidspire | Season 1 | Boss 2 of 6**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

Vorasius is a fast-paced single-phase fight where space management is the primary challenge. The boss repeatedly seals off sections of the arena with Void Crystal Walls, then sweeps a deadly Void Breath beam across the room. If the walls are not destroyed before the beam arrives, the raid cannot dodge it and wipes.

The key mechanic loop: Shadowclaw Slam (tank soak) spawns Crystal Walls → Blisterburst adds fixate players and explode on death → kite adds into Crystal Walls to break them → dodge Void Breath in the now-open room. The boss must never be out of melee range or he casts Overpowering Pulse and instantly wipes the raid.

---

## Phase 1: Breaking the Walls

The fight is a single phase that repeats this loop until the boss dies.

### Boss Abilities

**Primordial Roar** — Vorasius channels, pulling all players toward him and dealing moderate raid damage. At the end of the channel, he deals heavier raid damage and knocks everyone back. Tanks must prevent themselves from being knocked off the platform edge.

**Shadowclaw Slam** — Marks a circle on the ground at the current tank's location. The tank must stand inside to soak it, or the entire raid wipes. Soaking applies a stacking 150% physical vulnerability debuff — after two soaks, the vulnerability is too dangerous for one tank to take again. The first two Slams spawn Void Crystal Walls across the left and right sides of the room. After a short delay, the soak circle explodes into Aftershocks — an expanding ring that deals damage in multiple waves. Dodge the ring as it expands outward.

**Blisterburst** — Spawns Blistercreep adds that fixate on random players. Also places small AoE circles on the ground. The fixated player should kite their add into a Void Crystal Wall — when the add is killed near the wall, its death explosion deals 8-yard AoE damage and can break the wall. Add deaths also deal raid-wide shadow damage to all players. Players slowed by Blisterburst can have the slow dispelled.

- **Heroic/Mythic:** Crystal Walls require 2 (Heroic) or 3 (Mythic) add explosions to break. Coordinate kiting so multiple adds die at the same wall.

**Void Breath** — Vorasius sweeps a deadly beam slowly across the entire room, dealing massive damage to anyone hit. Simultaneously pulses raid-wide damage for 15 seconds. The beam starts on a random side (left or right), so watch where it begins and move to the opposite side. **If Crystal Walls have not been broken, the entire room is trapped and this is a wipe.** Getting all walls broken before this ability is the entire fight.

**Overpowering Pulse** — Instant raid wipe if no player is in melee range of Vorasius. Tanks must never drop melee contact with the boss.

---

## Heroic Changes

- Each Void Crystal Wall requires **2 add explosions** to destroy (vs. 1 on Normal).
- Coordinate which players kite adds to which walls so each wall receives two consecutive kill-explosions.

---

## Mythic Changes

- Each Void Crystal Wall requires **3 add explosions** to destroy.
- Adds leave a **permanent puddle** when they die. Each add explosion drops a puddle at its death location — manage positioning so puddles don't block critical movement corridors.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Void Breath sweep | Move to the safe side before the beam reaches you |
| TBD | Shadowclaw Slam Aftershocks | Expanding ring from soak impact — dodge outward |
| TBD | Blisterburst ground circles | Small AoE circles placed around adds — pure dodge |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Shadowclaw Slam | Required tank soak — wipe if not soaked |
| Primordial Roar | Unavoidable raid-wide damage + knockback |
| Blisterburst slow | Dispellable but unavoidable debuff on targeted player |
| Blisterburst add death | Unavoidable raid-wide shadow damage when adds die |
| Overpowering Pulse | Tank positioning responsibility — not damage event |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Void Breath hits** — If Crystal Walls were broken, Void Breath is a clean dodge. Repeated hits on the same player across multiple pulls = not moving to the safe side in time.
- **Aftershock ring hits** — Expanding ring from Shadowclaw Slam is a predictable, outward-moving dodge. Repeated hits indicate the player is not moving away from the soak impact point.
- **Blisterburst circles** — Ground AoE circles are stationary. Repeated hits = not tracking the safe space.

---

## Key Mythic Differences Summary

| Mechanic | Normal | Heroic | Mythic |
|---|---|---|---|
| Crystal Wall explosions required | 1 | 2 | 3 |
| Add death puddles | No | No | Yes — permanent |

---

## Quick Tips

- Tank swap cadence: swap after the second Shadowclaw Slam soak each cycle to reset the vulnerability debuff before the next set of walls spawns.
- Identify which wall needs adds before Blisterburst spawns — call the target wall early so fixated players know where to kite.
- On Mythic, plan puddle placement: adds should die at wall edges, not in the center of movement lanes.
- The beam direction is random — always watch for where Void Breath begins before committing to a side.
- Never stop melee contact with Vorasius. Overpowering Pulse has no warning and kills instantly.
