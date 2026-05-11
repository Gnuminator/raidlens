# Chimaerus, the Undreamt God — Mythic

_Guide for RaidLens analysis context. Written for the Guide Writer project and used by Claude when analyzing logs._

## Avoidable abilities (WCL-verified, hardcode spell IDs with confidence)

| Spell ID | Ability Name | Notes |
|---|---|---|
| 1245919 | Alndust Essence | Ground pool — standing in it is individually avoidable |
| 1245486 | Corrupted Devastation | Phase 2 breath line — dodge the path |

## Non-avoidable / expected abilities

| Ability | Reason |
|---|---|
| Alndust Upheaval | Intentional soak — sends players to the Rift. Expected damage. |
| Rift Emergence | Unavoidable raid-wide on add spawn |
| Rift Sickness | Unavoidable raid-wide DoT |
| Caustic Phlegm | Tank-only, unavoidable |
| Consume | Energy-dump knockback at 100 energy, unavoidable |
| Ravenous Dive | End-of-phase, unavoidable |
| Rift Vulnerability | Unavoidable mechanic consequence |
| Cannibalized Essence | Unavoidable mechanic consequence |
| Rift Madness | Mythic debuff, raid coordination handles it |
| Blessing of Dawn | Holy Paladin self-buff — appears as self-damage in WCL. Ignore entirely. |
| Discordant Roar | Raid-wide physical from Colossal Horror spawning. Unavoidable, heal through. |

## Fight structure

Two-phase encounter. Goal: prevent the boss from consuming Manifestation adds.
- Each add that reaches Chimaerus: heals it 500% of add's remaining HP, +50% damage permanently (stacking)
- 2-3 stacks = trouble. 6 stacks = unkillable.

## The two realms

- **Reality** (upstairs): fight the boss
- **The Rift** (downstairs): kill Manifestation adds (requires Alnsight buff)
- Players hit by **Alndust Upheaval** enter the Rift for 40 seconds, gaining Alnsight
- Two pre-assigned soak groups alternate going down

## Add priority

1. **Colossal Horror** — tank and kill first. Discordant Roar stacks wipe raids.
2. **Haunting Essence** — interrupt Fearsome Cry and Essence Bolt strictly
3. **Swarming Shade** — slow, root, grip to prevent reaching boss

## Individual mistakes to flag (3+ pulls threshold)

- **Alndust Essence** — WCL-verified fully avoidable. Repeated hits = dodge failure.
- **Corrupted Devastation** — WCL-verified fully avoidable. Repeated hits = not moving out of breath path in Phase 2.
- **Non-tanks taking Colossal Strikes** — stay away from the Colossal Horror add.
- **Dissonance (Mythic)** — wrong realm positioning. Track as source-based damage (step 10).
- **Lingering Miasma / Consuming Miasma** — puddles from dead adds, positionally avoidable.
