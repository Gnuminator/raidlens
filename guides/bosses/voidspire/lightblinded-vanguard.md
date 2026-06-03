# Lightblinded Vanguard — Boss Guide
**The Voidspire | Season 1 | Boss 5 of 6**

_Guide for RaidLens analysis context. Covers all difficulties; Mythic differences called out explicitly._

---

## Overview

The Lightblinded Vanguard is a three-boss council fight against Commander Venel Lightblood, General Amias Bellamy, and War Chaplain Senn — three Paladin NPCs. All three must be killed at approximately the same time: when the first one dies, the surviving bosses gain a **Retribution** buff that increases their damage by 5% per stack every 2 seconds until the remaining bosses die. The practical limit is a kill window of roughly 2–3 seconds.

Each boss has its own ability set, their own tankbuster sequence, and a unique **Aura** they channel at 100 energy that buffs all enemies nearby. The overarching loop is: deal with individual boss mechanics, rotate out of Auras, mass-dispel Divine Shields, and watch for dangerous overlaps.

---

## Phase 1: The Council

The fight is a single phase. Kill the bosses as close together in time as possible.

### Commander Venel Lightblood

**Aura (100 energy)** — Lightblood channels a stationary Aura buff that increases all allied damage by 100% for 15 seconds within 40 yards. Move all three bosses and the raid away from the Aura zone when it's active.

**Execution Sentence** — Marks several players with large soak circles. Multiple players must stack inside each circle to split the damage — each player can only soak one circle per set of soaks. After each soak, three hammers spiral outward from the impact point. Dodge the hammers as they spin.

**Divine Storm** (Heroic+) — A small 8-yard AoE around Lightblood. Don't stand within 8 yards when he casts this.

- **Mythic:** When empowered by Zealous Spirit, Divine Storm also spawns tornadoes at range that slowly drift toward the boss. These tornadoes slow and damage players hit.

**Sacred Toll** — Unavoidable hit of raid-wide damage.

### General Amias Bellamy

**Aura (100 energy)** — Bellamy channels a stationary Aura that reduces all allied damage taken by 75% for 15 seconds within 40 yards. Significantly reduces raid DPS on any boss inside the zone.

**Judgement** — Two-step tankbuster. Step 1: deals holy damage and applies a debuff that increases damage taken from Shield of the Righteous by 500%. Step 2: immediately casts **Shield of the Righteous**, which deals heavy holy damage. The active tank should taunt-swap **between** the two casts — the first tank takes the Judgement debuff, swaps out, and the second tank takes Shield of the Righteous without the vulnerability.

**Divine Toll** — Bellamy hurls waves of traveling shields across the arena for 18 seconds. Each shield silences any player hit for 6 seconds. Dodge the shields throughout the channel.

**Avenger's Shield** — Marks several players with circles and throws a shield at each. The shields explode and apply a dispellable DoT to any player within 5 yards of the target when the shield lands. Marked players should spread out before impact so the DoT doesn't chain to the rest of the raid. Healers dispel the DoT promptly.

- **Mythic:** When empowered by Zealous Spirit, Avenger's Shield targets every player simultaneously.

### War Chaplain Senn

**Aura (100 energy)** — Senn channels a stationary Aura of Peace within 40 yards. While the Aura is active, any player who deals damage to a Vanguard while inside the Aura zone is pacified for 5 seconds. Move all DPS outside the Aura boundary.

**Tyr's Wrath** — Applies a healing absorb to the 3 nearest players. Unavoidable for whoever is closest.

**Searing Radiance** — 15-second channel dealing pulsing raid-wide damage. Major healing cooldown required.

- **Mythic:** When empowered by Zealous Spirit, Searing Radiance damage increases by 10% every second during the channel.

**Blinding Light** — Disorients all players facing Senn. Turn your character away from him before the cast lands, or interrupt it.

**Sacred Shield** — Senn applies a shield to himself, then charges forward on an elekk, dealing damage to any players in the direct path. Dodge the charge line.

### Shared Mechanics

**Divine Shield** — All three bosses cast Divine Shield (giving them immunity) whenever the raid uses Bloodlust/Heroism. Mass Dispel removes it quickly. Always have a Mass Dispel rotation assigned.

**Light Infused** — Persistent raid-wide ticking damage. Increases by 25% every time any Vanguard channels their Aura.

**Exorcism** — A large burst of holy damage on the current tank for whichever boss casts it. Use a personal defensive.

**Consecration** (Heroic+) — After each Aura channel ends, a large permanent puddle drops under the channeling boss. Deal damage and take increased damage while standing in Consecration. On Mythic, Consecration also pacifies players inside it and increases damage taken by 100%.

---

## Heroic Changes

- Bosses drop large **Consecration** puddles after each Aura channel. Space fills up over the fight.
- **Divine Storm** appears in Heroic (Lightblood).

---

## Mythic Changes

- **Zealous Spirit** — A spirit buffs one Vanguard at a time, increasing their damage by 30%, empowering one of their abilities, and pairing a new mechanic overlap:
  - **Buffing Lightblood:** Divine Storm spawns tornadoes. Tyr's Wrath is cast alongside Execution Sentence.
  - **Buffing Bellamy:** Avenger's Shield targets all players. Divine Toll is cast alongside Execution Sentence.
  - **Buffing Senn:** Searing Radiance damage ramps faster. Execution Sentence is cast alongside Tyr's Wrath.
- **Consecration** now pacifies players inside it and increases their damage taken by 100%.

---

## Avoidable Abilities (Spell IDs TBD — to be confirmed from WCL)

| Spell ID | Ability Name | Notes |
|---|---|---|
| TBD | Aura zones | Stand outside 40-yard range during Aura channels |
| TBD | Divine Storm | Stay out of Lightblood's 8yd melee range during cast |
| TBD | Execution Sentence spiraling hammers | Dodge hammers after each soak impact |
| TBD | Divine Toll shields | Dodge traveling shields — 18s channel |
| TBD | Sacred Shield charge (elekk) | Dodge Senn's charge line |
| TBD | Avenger's Shield blast | Spread before shield lands to avoid DoT chain |
| TBD | Consecration puddles | Standing in dropped puddles post-Aura |
| TBD | Blinding Light | Turn away or interrupt |

---

## Non-Avoidable / Expected Abilities

| Ability | Reason |
|---|---|
| Sacred Toll | Unavoidable raid-wide damage |
| Searing Radiance | Unavoidable raid-wide channel damage |
| Tyr's Wrath | Unavoidable for the 3 nearest players |
| Light Infused | Unavoidable persistent raid damage |
| Exorcism | Tank ability — unavoidable for active tank |
| Avenger's Shield DoT (self) | Unavoidable for targeted player (only spread for nearby allies) |
| Retribution | Enrage on boss death — unavoidable, manage by killing together |

---

## Individual Mistakes to Flag (3+ Pulls Threshold)

- **Aura zone stays** — Player repeatedly taking increased damage inside Lightblood's or Bellamy's Aura = not moving out during the channel.
- **Consecration puddles** — Standing in puddles after they're placed. Fully avoidable positional discipline.
- **Divine Toll shields** — Repeated silence hits from Bellamy's shield waves = not dodging during the 18-second channel.
- **Sacred Shield charge** — Repeated hits from Senn's elekk charge = not tracking the charge line.
- **Blinding Light** — Repeated disorientation from Senn = not turning away or missing the interrupt.
- **Execution Sentence hammers** — Spiraling hammers are predictable. Repeated hits = not tracking the hammer rotation.

---

## Key Mythic Differences Summary

| Mechanic | Heroic | Mythic |
|---|---|---|
| Zealous Spirit empowerment | No | Yes — one boss empowered at a time with overlaps |
| Consecration pacifies | No | Yes — +100% damage taken inside |
| Divine Storm tornadoes | No | Yes (when Lightblood empowered) |
| Avenger's Shield all-player | No | Yes (when Bellamy empowered) |
| Searing Radiance ramp | No | Yes (when Senn empowered) |

---

## Quick Tips

- Never use Bloodlust without a Mass Dispel assigned and ready — Divine Shield triggers immediately.
- Call the empowered boss on Mythic pull by pull so the raid knows which overlap is coming.
- Kill timing is critical: slow down DPS on any boss that's pulling ahead of the others by more than 10%. Communicate HP percentages.
- Tanks: the Judgement → Shield of the Righteous swap must happen between the two casts. If you miss the swap, the second tank takes near-lethal damage through the 500% vulnerability.
- On Mythic, never stand in Consecration even briefly — the pacify + 100% damage amp is a death sentence during a dangerous overlap.
