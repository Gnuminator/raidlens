# Chimaerus the Undreamt God — Mythic Guide
**The Dreamrift | Season 1 | Single-Boss Raid**

_Guide for RaidLens analysis context. Written for the Guide Writer project and used by Claude when analyzing logs._

---

## Overview

Chimaerus is a two-phase encounter. The entire fight is structured around stopping the boss from eating the Manifestations it spawns — each one it consumes permanently buffs it.

The core wipe condition is **Cannibalized Essence**: each Manifestation Chimaerus consumes heals it for 500% of the add's remaining HP (Mythic) and increases its damage by 50% (stacking). Two or three stacks and healers are struggling. Six stacks and Chimaerus becomes unkillable.

---

## Core Mechanic: The Two Realms

The core mechanic is **Alnsight**. Players hit by Alndust Upheaval are knocked airborne and wrenched into the Rift dimension for 40 seconds. While there, they can see and attack Manifestations that exist in the Aln. Players without Alnsight cannot see or interact with them.

This dual-realm structure is the spine of the entire fight. Your raid is always split: some players in Reality dealing with the boss, some in the Rift killing adds.

---

## Pre-Pull Setup

Before you pull, split the raid into two evenly split groups, each with 1 Tank, half your healers, and enough DPS. One group soaks Alndust Upheaval and goes downstairs. The other stays upstairs and deals with Chimaerus.

**Mythic-specific positioning:** The raid plays on one side of the room each. This prevents deaths from Dissonance. Two Warlock gateways are recommended — the tank soaks on top of the marker and the group can instantly gateway to avoid being knocked into the air, gaining around 2 seconds of additional DPS time.

---

## Phase 1: Insatiable Hunger

### Boss Abilities

**Alndust Upheaval (Soak)**
Chimaerus tears a hole in Reality, dealing Physical damage to its current tank and a large amount of Nature damage split evenly between players within 10 yards of the impact. Victims are knocked into the air and gain Alnsight. Alternate between your two soak groups — soaking gives players Rift Vulnerability that increases damage taken from soaking by 600%, so players cannot soak twice in a row.

**Rift Emergence**
Chimaerus unleashes an unearthly roar, dealing Nature damage to all players and causing Manifestations to emerge throughout the Rift. Raid-wide damage event — healers need to be ready.

**Rift Sickness**
A raid-wide damage over time effect lasting 12 seconds. Healers need to pay attention here, especially during overlaps.

**Ravenous Frontal**
A frontal cone targeted at a random player, dealing heavy damage and applying a bleed to anyone hit. This should be dodged.

### Add Management (Rift Team)

Three add types spawn:

- **Colossal Horror** — tank add; hits harder over time with each strike (Discordant Roar stacks wipe raids)
- **Haunting Essence** — casts Fearsome Cry (fears several players; dispellable and interruptible) and Essence Bolt (also interruptible)
- **Swarming Shade** — no abilities; exists only to reach the boss and ruin your night

Each add that dies leaves behind a puddle that slows players by 50% and deals damage over time.

The boss eats any Manifestation that reaches him. Stacks. If multiple adds reach the boss, you are usually wiping immediately.

**Mythic add priority:**
1. Kill Colossal Horror first — Discordant Roar stacks wipe raids
2. Assign a strict kick rotation for Haunting Essence (Fearsome Cry and Essence Bolt)
3. Use slows, roots, and Death Grip to prevent Swarming Shades from reaching Chimaerus

**Mythic interrupt note:** Fearsome Cry casts are very fast and need to be interrupted. Any missed interrupts will result in a wipe. Warlocks should use Curse of the Satyr to make it easier to interrupt. Death Knights should Death Grip the casts into their team immediately.

### Dissonance (Mythic Only)

This mechanic prevents players from standing near others who are in a different realm. The room is divided in two with each group playing within their half. If you get swapped by Rift Madness, play with the other group until your team has returned.

**Rift Madness (Mythic Only):** If players are afflicted, their teammates must quickly swap realms to rescue them.

---

## Phase Transition: Consume (100 Energy)

At 100 energy, the boss consumes any remaining Manifestations, even if they are not at the boss yet. This knocks everyone away and starts the intermission.

You can let the adds get quite close to the boss just before the Consume cast starts at 100 Energy. Once the cast has started, the adds will be stunned and cannot be auto-consumed. Use this window to finish off any stragglers.

**Mythic transition:** Chimaerus casts one final Alndust Upheaval before ascending, ensuring fresh Rift-displaced players enter Phase 2. This is intentional — it guarantees your Rift team is fresh and ready.

---

## Phase 2: To the Skies

Once airborne, Chimaerus begins Corrupted Devastation: continuous heavy raid damage from above while Manifestations continue to spawn below and need to be handled on the ground.

**Corrupted Devastation** is a breath-style mechanic where the boss flies through the area in a line, dealing massive damage and stunning anyone hit. It also spawns Manifestations and leaves behind a puddle. Bait these lines carefully to preserve usable space.

**Mythic Phase 2:** Chimaerus coalesces additional Manifestations within the Rift during Corrupted Devastation — more add pressure than lower difficulties.

**Mythic intermission:** Team 1 goes back into the downstairs phase for the intermission. They need to soak on their tank. Stand either side of the Cross marker to bait the breath in the center, then move to your sides. Do not run over the other group.

This phase is where you burn your major raid-wide defensive cooldowns.

---

## Ravenous Dive (Phase 2 End)

The phase ends with Ravenous Dive: Chimaerus descends and instantly devours every living Manifestation in the arena. Each add consumed is another stack of Cannibalized Essence. If your Rift team spent Phase 2 failing to clear adds, this Dive ends the pull.

The boss crashes into the ground, knocks everyone up, consumes any remaining Manifestations, then Phase 1 begins again.

---

## Avoidable Abilities (WCL-verified spell IDs)

| Spell ID | Ability Name | Notes |
|---|---|---|
| 1245919 | Alndust Essence | Ground pool — standing in it is individually avoidable |
| 1245486 | Corrupted Devastation | Phase 2 breath line — dodge the path |

---

## Non-Avoidable / Expected Abilities

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

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Alndust Essence** — WCL-verified fully avoidable. Repeated hits = dodge failure.
- **Corrupted Devastation** — WCL-verified fully avoidable. Repeated hits = not moving out of breath path in Phase 2.
- **Non-tanks taking Colossal Strikes** — stay away from the Colossal Horror add.
- **Dissonance (Mythic)** — wrong realm positioning. Track as source-based damage (step 10).
- **Lingering Miasma / Consuming Miasma** — puddles from dead adds, positionally avoidable.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Alndust Upheaval before Phase 2 | No | Yes |
| Cannibalized Essence healing | 200% | 500% |
| Corrupted Devastation adds | Normal amount | Additional Manifestations |
| Dissonance | No | Yes — forces strict positioning |
| Rift Madness | No | Yes — requires active rescue |
| Intermission Rift team | Stays up | Team 1 goes back down to soak |

---

## Quick Tips

- **Lust on pull** to maximize Phase 1 add clearing before the first Consume
- **Never tunnel Chimaerus** — adds kill the raid, not the boss's health pool
- Position essence pools away from the boss to keep room clean for movement
- Rotate tank soaks — Rift Vulnerability stacks are lethal
- Make sure all adds are dead before Ravenous Dive — this is the most common wipe point on Mythic
