# Belo'ren, Child of Al'ar — Boss Guide
**March on Quel'Danas | Season 1 | Boss 1 of 2**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

Belo'ren is the Light-Void Bird Boss — a repeating two-phase encounter. The fight is built around a color assignment system: every player is designated either **Light** or **Void** at the start and periodically throughout the fight. Players with a matching color take 50% reduced damage from that color's mechanics. Every major mechanic requires players to act according to their color — wrong-color players taking mechanics they shouldn't will consistently cause avoidable deaths.

The real health bar is Belo'ren's **egg** in Phase 2, not the bird form. You must kill the bird in Phase 1 to force the transition, then burn the egg during a 30-second window before the boss resets to Phase 1. This cycle repeats until the egg dies. The fight has a 6-minute enrage (Ashen Benediction: permanent 10% healing reduction stacking per cycle — too many cycles and the raid becomes unhealable).

---

## Phase 1: The Bird

Phase 1 continues until Belo'ren's bird form HP reaches zero.

### Color Mechanic

**Voidlight Convergence** — At the start of Phase 1 and periodically during the fight, all players are assigned a Light or Void feather. Your color determines how you handle every subsequent mechanic. Know your color at all times.

### Phase 1 Abilities

**Light/Void Dive** — A player is targeted with a soak circle. Players sharing the target's color should stack inside the circle to split the damage. The dive knocks players back and leaves a **permanent puddle**. Aim the dive near walls to preserve arena space. Soaking the wrong-color dive does not reduce its damage.

**Guardian's Edict** — A series of colored frontal cones originating from Belo'ren, targeting tanks. Only tanks of the matching color should soak their color's cone. If no correct-color tank soaks a cone, or if an opposite-color player is hit, the boss **enrages**. This is a strict tank-swap mechanic — tanks must communicate their color and cover each cone. The final strike at the end of the combo splits the frontal in two; one per color.

**Radiant Echoes** — Rows of both light and void orbs float across the arena. Orbs explode if they reach the other side. Players can intercept orbs matching their color to destroy them and preserve space. Players must not touch orbs of the opposite color — they deal massive damage and are not reduced by your color buff.

- **Mythic:** Orbs explode for massive damage if they touch Belo'ren directly. The raid must ensure matching-color players intercept all orbs before they reach the boss.

**Light/Void Eruption** — Belo'ren spawns two bird adds: one light and one void. Each add begins casting its respective Eruption — a lethal channel that kills the entire raid if it completes. Only a player of the **matching** color can interrupt each add's cast. Color-sorted interrupt assignments are mandatory. After the Eruption cast, the adds also occasionally throw light/void blasts at random players — anyone can interrupt these secondary casts.

**Rebirth** — When a bird add dies, it transforms into an egg. Kill the egg within 15 seconds or the add fully respawns from the egg.

**Infused Quill** (Heroic+) — Targets a player with a quill of the **opposite** color. The quill deals damage to the first player hit — ideally a player of the **matching** color should intercept the quill before it reaches the target.

- **Mythic:** Infused Quills deal splash AoE damage to nearby players when the quill hits. Soaking players should spread from their nearby allies before interception.

**Burning Heart** — Permanent raid-wide pulsing damage that intensifies during Phase 2.

**Eternal Burns** — Several players receive a healing absorb shield and a DoT. The DoT persists until the absorb is healed off. Healers prioritize these.

**Death Drop** — When Belo'ren's bird form HP reaches zero, it slams into the center of the arena dealing damage (reduced by distance). Move away from the center as health drops to zero.

---

## Phase 2: The Egg (Intermission)

Belo'ren retreats to an egg form and begins dealing escalating pulsing damage. The egg has its own health bar — this is the real boss health. The raid has **30 seconds** to damage the egg before Phase 2 ends and Phase 1 begins again. Repeat until the egg dies.

**Incubation of Flames** — The arena splits into colored pie-slice sections of light and void that erupt with damage. Each player must move to the slice matching their current color to take reduced damage. The pattern rotates throughout the 30-second window — track your color's safe sections.

**Ashen Benediction** — When Phase 2 ends, all players take a burst of fire damage and permanently gain a 10% healing reduction debuff for the rest of the fight. This stacks every cycle. After 3–4 cycles, healing throughput becomes critically limited. Kill the egg quickly.

---

## Heroic Changes

- **Infused Quills** are introduced. Players must pre-position to intercept opposite-color quills targeting their teammates.

---

## Mythic Changes

- **Radiant Echoes:** Orbs explode for massive damage if they contact Belo'ren — cannot let any orb reach the boss.
- **Infused Quills:** Quills deal splash AoE on contact — soaking players must spread from nearby allies before soaking.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Radiant Echoes (wrong-color orb) | Touching an orb of the opposite color — pure discipline |
| TBD | Guardian's Edict cone (non-tank) | Non-tank caught in a color cone |
| TBD | Death Drop | Being too close to center when bird HP hits zero |
| TBD | Incubation of Flames wrong section | Standing in wrong-color section during Phase 2 |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Voidlight Convergence | Color assignment — passive mechanic |
| Light/Void Dive | Required soak for matching-color players |
| Burning Heart | Unavoidable permanent raid rot |
| Eternal Burns | Unavoidable assignment — must be healed off |
| Ashen Benediction | Unavoidable phase-end debuff |
| Infused Quill (targeted player) | The targeted player cannot avoid being targeted |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Radiant Echoes wrong-color hits** — Player repeatedly contacted orbs of the opposite color. Purely avoidable — requires tracking which orbs match your current color.
- **Guardian's Edict cone (non-tank)** — Non-tank player repeatedly struck by a frontal cone = standing in front of Belo'ren.
- **Incubation of Flames wrong section** — Player repeatedly taking heavy damage in Phase 2 = not moving to their color section.
- **Death Drop proximity** — Repeatedly taking heavy Death Drop damage = not retreating from center as bird reaches zero.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Infused Quills | Yes | Yes — splash AoE on contact |
| Radiant Echoes boss contact | No | Yes — explode for massive damage |

---

## Quick Tips

- Call color assignments clearly at the start and any time Voidlight Convergence reapplies — players need to know their color before the next mechanic, not after.
- Guardian's Edict is the most punishing mechanic if mishandled — tanks must know each other's colors and call the swap before the cone series begins.
- Place Light/Void Dive puddles consistently against the arena walls — one side per color keeps the center clean.
- During Phase 2 Incubation of Flames, track the section rotation and pre-move rather than reacting. The sections shift and correct positioning requires anticipation.
- Assign one player per color to call incoming Radiant Echoes orbs — visual noise from both colors simultaneously is the main reason players touch wrong-color orbs.
- Use Bloodlust during Phase 2 — the egg is stationary and vulnerable, and the Ashen Benediction timer means fewer cycles is always better.
