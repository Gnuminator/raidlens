# Vaelgor & Ezzorak — Boss Guide
**The Voidspire | Season 1 | Boss 4 of 6**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

The Twin Dragons is a two-boss council fight with a single phase and a recurring intermission at 100 energy. Vaelgor is the flying dragon (immobile) and Ezzorak is the grounded dragon (mobile). They alternate between flying and grounded states, changing which dragon is repositionable.

The defining constraint is **Twilight Bond**: both dragons must be kept within 10% health of each other at all times. If their HP diverges by more than 10%, or if a dragon dies before the other, they gain a 100% (or stacking 30%) damage buff that ends the raid. Health balancing is the raid's primary responsibility at all times.

Tanks must keep the dragons at least 15 yards apart to avoid their Tail Lash and to prevent their cleave abilities from overlapping.

---

## Phase 1: The Tethered Dragons

### Vaelgor Abilities

**Nullbeam** — Vaelgor channels a large cone-shaped beam directly at the tank for 4 seconds. Standing in the beam applies a stacking DoT and — critically — reduces the strength of the upcoming Nullzone pull. Players who are slower classes can intentionally "dip" into the beam briefly to gain stacks of the reducing debuff, making Nullzone easier to escape. At the end of the channel, a **Nullzone** forms.

**Nullzone** — Tethers all players to Vaelgor and pulls them toward him with increasing force. Players take escalating damage while tethered. Each player who breaks their tether by running out of range deals raid-wide damage to the entire group. The goal is to break tethers cleanly and quickly, taking as little total raid damage as possible.

- **Heroic:** When all tethers have been broken, the Nullzone itself explodes for a burst of raid-wide damage + DoT. Avoid stacking this with other major damage events.
- **Mythic:** Nullzone creates ground circles after the first tether breaks. Players must dodge the circles while also running out to break their own tether.

**Dread Breath** — Vaelgor targets a random marked player with a cone-shaped blast. The cone deals damage and fears any player caught in it for 15 seconds. Feared players are dispellable. Everyone should track the marked player and step out of the cone's path.

- **Mythic:** Feared players move 50% faster during the fear, making them harder to corral and more dangerous to nearby players. Healers must dispel immediately.

**Vaelwing** — Tankbuster. Physical and shadow damage on the current tank with a knockback. Stacks melee damage on Vaelgor until Vaelwing hits a new tank. Tank swap after each cast.

**Tail Lash** — Players caught behind Vaelgor are hit by a tail swipe, applying a knockback and a short bleed DoT. Don't stand behind either dragon.

### Ezzorak Abilities

**Gloom** — Ezzorak shoots a Gloom orb at the current tank. As the orb travels across the arena toward the edge, players can intercept (soak) it — each soak shrinks the orb and reduces the eventual explosion size and damage. The orb explodes when it hits the arena edge, dealing raid-wide damage and leaving a **massive permanent puddle**. Unshrunk orbs leave room-ruining puddles. Coordinate a rotation of soakers to soak each pass.

Players who soak the Gloom orb take the **Gloomtouched** DoT for 12 seconds. On Heroic+, soakers also receive a 1-minute vulnerability debuff that prevents them from soaking again.

- **Normal:** Up to 3 soaks per orb.
- **Heroic:** Up to 4 soaks. Gloomtouched DoT can stack.
- **Mythic:** Up to 7 soaks. Players touching the orb create an AoE cleave around themselves — spread out when soaking to avoid splashing Gloomtouched onto nearby players.

**Void Howl** — Every player is simultaneously marked with a small AoE circle. After a short delay, the circles pop for damage and each spawns a **Voidorb** add at the player's location. Players should spread out before the circles pop to avoid overlapping explosions. Voidorbs cast Voidbolt at targets — interrupt them and CC them. Grip them together and AoE down quickly.

**Rakfang** — Tankbuster on Ezzorak's current target. Massive physical + shadow damage. Ezzorak's melee attacks then apply a healing absorb to the target until Rakfang hits a new tank. Tank swap promptly.

**Midnight Manifestation** — Several random players periodically receive a stacking DoT. This is constant throughout the fight and simply requires healer throughput.

### Intermission: Midnight Flames (100 Energy)

When the dragons reach 100 energy, they fly out of reach and deal pulsing raid-wide damage for 25 seconds. A **Radiant Barrier** safe zone forms — stand inside it to take reduced damage.

When the Barrier forms, a **Manifestation of Midnight** add spawns inside it. Kill it quickly. Several players are simultaneously marked with explosion circles — these players must move to the edge of the Barrier and explode away from the group.

**Unbound Shadow** — Every 30 seconds, the Manifestation of Midnight add buffs itself with 75% attack speed and 50% slow resistance. Kill it before the first buff, or refocus DPS to kill it before the second.

After intermission ends, the Manifestation's lingering DoTs are removed from all players and Phase 1 resumes — with the previously flying dragon now grounded and vice versa.

---

## Heroic Changes

- **Nullzone:** Full explosion + DoT when all tethers are broken. Don't overlap with Gloom or Dread Breath.
- **Gloom:** Players get a 1-minute soaking vulnerability after their Gloomtouched expires. Build a rotation — never send the same player twice within the window.

---

## Mythic Changes

- **Nullzone:** Ground circles spawn during tether breaks, complicating the escape.
- **Dread Breath:** Feared players run 50% faster — dispel priority.
- **Gloom:** Players soaking create an AoE cleave on nearby allies — spread when soaking. Up to 7 soaks possible per orb.
- **Cosmosis (Mythic only):** Dragon clones spawn throughout the phase and replicate boss abilities. Monitor which clone is casting and which mechanic it's replicating.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Dread Breath | Cone fear at marked player — step out of the cone path |
| TBD | Tail Lash | Don't stand behind either dragon |
| TBD | Gloomtouched (Gloom orb) | Players not assigned to soak should not touch the orb |
| TBD | Void Howl circles | Spread to avoid overlapping explosions |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Nullzone tether | Required mechanic — all players must break their tether |
| Midnight Manifestation | Unavoidable random DoT on players |
| Rakfang | Tank ability — unavoidable for active Ezzorak tank |
| Vaelwing | Tank ability — unavoidable for active Vaelgor tank |
| Midnight Flames | Unavoidable intermission damage |
| Nullzone tether-break raid damage | Unavoidable consequence of required mechanic |
| Gloomtouched DoT | Expected for players assigned to soak |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Dread Breath** — Repeated hits on the same player = not tracking the marked target and stepping out of the cone path.
- **Tail Lash** — Player repeatedly hit behind the dragons = positioning failure.
- **Void Howl overlap damage** — Repeated high AoE damage = not spreading before circles pop.
- **Gloomtouched (off-soak)** — A player repeatedly taking Gloomtouched when not in their assigned soak rotation = touching the orb unintentionally.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Nullzone ground circles | No | Yes — dodge while breaking tether |
| Dread Breath fear speed | Normal | +50% — dispel urgently |
| Gloom cleave on soak | No | Yes — spread when soaking |
| Gloom max soaks | 4 | 7 |
| Dragon clones | No | Yes — Cosmosis |

---

## Quick Tips

- Announce HP call regularly — Twilight Bond is the most common wipe source. DPS should slow if one dragon is pulling ahead.
- Assign a Gloom soak rotation before the pull and call your soaker early — the orb travels fast.
- On Mythic, spread for Gloom soaks before touching the orb. The AoE cleave from each soaker will catch any player within a few yards.
- Position Vaelgor (the immobile flying dragon) in a location where his Nullzone pull doesn't drag the raid into Ezzorak's Tail Lash range.
- Use Bloodlust during intermission on the add to guarantee it dies before the first Unbound Shadow buff.
