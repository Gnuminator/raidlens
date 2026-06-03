# Fallen-King Salhadaar — Boss Guide
**The Voidspire | Season 1 | Boss 3 of 6**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

Salhadaar is the Orb Boss — a single-phase fight with a damage amplification window at 100 energy. His primary wipe mechanic is **Void Convergence**: Concentrated Void orbs spawn repeatedly and slowly drift toward him. If any orb touches him, the raid wipes. The fight is a constant prioritization war between killing orbs, handling clones that need to be interrupted, managing permanent puddles that fill the room, and preparing for the rotating-beam damage amp window.

Space management is the second critical challenge: Despotic Command puddles are permanent and accumulate every cycle, steadily shrinking the safe area. Drop them at room edges.

---

## Phase 1: The Orb Fight

The fight is a single repeating phase.

### Boss Abilities

**Void Convergence** — Several Concentrated Void orbs spawn from 2-3 portals around the room and slowly move toward Salhadaar. If any orb reaches him, it triggers **Void Infusion** — massive raid-wide damage that wipes the raid. Orbs deal pulsing damage to anyone standing too close (small radius — melee range is still safe). DPS kill orbs while tanks kite Salhadaar away from the incoming orbs.

- Touching an orb applies **Void Exposure** — damage to the player. Avoid contact.
- **Heroic/Mythic:** Killing an orb applies **Dark Radiation** — a stacking 8-second raid-wide DoT. Kill orbs one at a time to prevent stacking this debuff.
- **Mythic:** Dead orbs respawn as **Enduring Void** orbs in each subsequent wave, meaning every new wave contains more orbs than the last.

**Fractured Projection** — Salhadaar spawns several clones that attempt to cast **Shadow Fracture**. If any Shadow Fracture cast completes, it deals massive raid-wide damage. Clones can be interrupted or crowd-controlled — any stop destroys the clone. Prioritize stoppable clones and coordinate interrupts.

- **Mythic:** Clones spawn with **Nexus Shield**, which prevents interrupts and CC. All clones are immune except one (the clone without a Nexus Shield). Interrupting and destroying the unshielded clone causes Nexus Shield to drop from a random other clone, which then becomes the next interruptible target. Work through them one at a time in sequence — pay attention to which clone just lost its shield.

**Despotic Command** — Several players are marked with a pulsing damage circle for 12 seconds. When the debuff expires, they drop a **permanent puddle** at their location and are left with a healing absorb. These puddles deal damage to players who stand in them and persist for the entire fight. **Drop them against walls or in already-compromised space** — never in the middle of the arena.

**Entropic Unraveling** — At 100 energy, Salhadaar stands in place for 20 seconds and deals pulsing raid-wide damage. Several beams rotate around him, dealing massive damage to anyone hit. During this window, he takes **25% increased damage** — this is the DPS window; burn hard. When the ability ends, a permanent puddle drops where he stood. **Position him near the room edge before he hits 100 energy** so the puddle doesn't eat usable space.

**Shattering Twilight** — The current tank is marked, takes a hit of physical damage, and several spike lines erupt from their location, traveling outward and dealing damage to any players in their path. Marked players should aim the spikes away from the raid. Non-tanks must watch for the spike lines and dodge.

- **Heroic/Mythic:** Multiple additional players are also marked and erupt their own spike lines simultaneously.

**Twisting Obscurity** — Raid-wide damage burst followed by a 23-second DoT on the entire raid. Healers must manage this throughout the fight.

**Destabilizing Strikes** — Salhadaar's melee attacks apply a stacking shadow DoT to the current tank. Tank swap at high stacks.

---

## Heroic Changes

- **Void Convergence:** Killing any orb applies an 8-second stacking DoT (Dark Radiation) to the entire raid. Kill orbs sequentially — never burst two at the same time.
- **Shattering Twilight:** Multiple players simultaneously marked, generating multiple spike lines. Spread out to avoid overlapping lines.

---

## Mythic Changes

- **Void Convergence:** Dead orbs respawn as Enduring Void orbs in each new wave — the orb count escalates as the fight goes on. The raid must handle an ever-growing number of orbs while also managing puddles, clones, and the damage amp window.
- **Fractured Projection (Nexus Shield):** Clones can only be stopped one at a time in sequence. Destroying the exposed clone reveals the next target. Track which clone just lost its shield.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Void Exposure | Touching an orb not assigned to you — pure positional dodge |
| TBD | Shattering Twilight spike lines | Lines travel from marked players outward — dodge the paths |
| TBD | Entropic Unraveling beams | Rotating beams during 100-energy window — dodge and keep moving |
| TBD | Despotic Command puddles | Standing in dropped puddles — permanent ground zones, fully avoidable |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Twisting Obscurity | Unavoidable raid-wide damage + DoT |
| Destabilizing Strikes | Tank melee DoT — unavoidable for active tank |
| Dark Radiation | Unavoidable raid-wide DoT triggered by orb kills (Heroic+) |
| Despotic Command pulses | Unavoidable for marked players during the debuff |
| Entropic Unraveling raid pulse | Unavoidable pulsing damage during the window |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Void Exposure** — Player repeatedly contacting orbs that aren't their assigned kill target. Pure positional discipline.
- **Shattering Twilight spikes** — Repeated hits on the same player across multiple pulls indicate they are not tracking spike lines from marked players.
- **Entropic Unraveling beams** — Rotating beams have a predictable rotation. Repeated hits = not moving to maintain safe position during the DPS window.
- **Despotic Command puddles** — Standing in puddles after they've been dropped. Fully avoidable at all times once placed.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Orb kill DoT (Dark Radiation) | Yes | Yes |
| Dead orbs respawn | No | Yes — escalating wave size |
| Clone interrupts | Any clone stoppable | One at a time via Nexus Shield sequence |
| Shattering Twilight (multi-mark) | Yes | Yes |

---

## Quick Tips

- Call which orb to kill next — two DPS accidentally killing different orbs simultaneously stacks Dark Radiation and can wipe the raid on Heroic+.
- Move Salhadaar to a room edge **before** he reaches 100 energy so the Entropic Unraveling puddle drops somewhere usable space was already compromised.
- On Mythic, track the orb count: each wave brings back everything the raid didn't kill. Falling behind on orbs becomes unrecoverable quickly.
- Drop Despotic Command puddles in a consistent pattern — back wall or corners — and never walk through them.
- Assign one player to watch for the Nexus Shield drop on Mythic so the next clone is called immediately.
