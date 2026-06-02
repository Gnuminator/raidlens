# Arcane Mage — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/guide/classes/mage/arcane/overview-pve-dps
> - https://www.wowhead.com/guide/classes/mage/arcane/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-guide
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/arcane-mage-pve-dps-gems-enchants-consumables
> - Individual Wowhead spell pages (cited inline beside each confirmed SpellID)

All SpellIDs below were confirmed against the specific live Wowhead `/spell=` page named beside them. Any ability without an ID is one whose ID was not confirmed against a fetched source; see Notes and Known Gaps.

---

## Overview

Arcane Mage is a ranged-DPS caster built around burst-window damage and active mana management. The core loop:

1. Build **Arcane Charges** (max 4) with **Arcane Blast**, increasing the damage and mana cost of Arcane spells.
2. Build **Arcane Salvo** stacks (the spec's key tracked buff, replacing the old Arcane Harmony; stacks up to 20, or 25 with the Sunfury hero talent) primarily via **Arcane Missiles** waves (and **Arcane Orb** with the Orb Mastery talent).
3. Unload a maximally-buffed **Arcane Barrage** during burst windows, which consumes charges and Salvo stacks.
4. Align all of this with the two damage cooldowns: **Arcane Surge** and **Touch of the Magi**.

**Damage profile:** Strong, cooldown-gated burst on both single target and AoE, with good "funnel" (priority-target) damage. Damage drops noticeably between burst windows while cooldowns and mana recover.

**Survivability profile:** Cloth caster with a damage-school barrier (Prismatic Barrier), a full immunity (Ice Block), and talent-gated layers. Per the sourced Icy Veins overview, the spec is strong against discrete burst hits (Ice Block) but comparatively weak against sustained damage-over-time pressure.

**Primary weakness:** Mana-/cooldown-dependent — output and resource recovery are tightly coupled to cooldown timing, so being forced off-target or out-of-position during a burst window costs disproportionately.

Hero talents in 12.0.5: **Spellslinger** (the commonly used single-target and AoE choice per Wowhead/Icy Veins) and **Sunfury** (Spellfire Spheres / Arcane Phoenix).

---

## Role in Raid

- **Role:** Pure ranged DPS. No healing, no tanking.
- **Raid buff:** **Arcane Intellect** (SpellID 1459, confirmed `/spell=1459`) — raid-wide +3% Intellect, 100-yard radius. This is the Mage class buff.
- **Bloodlust-equivalent:** **YES.** **Time Warp** (SpellID 80353, confirmed `/spell=80353`) — 30% Haste to the party/raid, 40-second duration, 5-minute cooldown. It applies the same Sated/Exhaustion category as other Lust effects, so it does not stack with Bloodlust/Heroism/Primal Rage.
- **Battle res:** **NO.** Mage cannot combat-resurrect.
- **Group defensive / external:** No targeted external damage reduction for other players in the base kit. **Mass Barrier** (talent, SpellID 414660, confirmed `/spell=414660`) applies the Mage's barrier to allies and is the closest thing to a raid defensive — see Defensives.
- **Mobility:** High. **Blink** (SpellID 1953) / **Shimmer** (SpellID 212653, a talented replacement granting charges and cast-while-moving), plus instant-cast tools and Slow for kiting. Icy Veins describes Arcane as having some of the best on-demand mobility among casters.

---

## Abilities Reference

Confirmed SpellIDs in parentheses with the page they were verified on.

**Core damage / builders / spenders**
- **Arcane Blast** (30451, `/spell=30451`) — primary builder; deals Arcane damage and grants 1 Arcane Charge.
- **Arcane Barrage** (44425, `/spell=44425`) — instant spender; consumes Arcane Charges (and Arcane Salvo). The payoff button.
- **Arcane Missiles** (5143, `/spell=5143`) — channeled; primary generator of Arcane Salvo stacks. Often cast on Clearcasting procs.
- **Arcane Orb** (153626, `/spell=153626`) — instant; grants an Arcane Charge, AoE, and (with Orb Mastery) Salvo stacks.
- **Arcane Pulse** — AoE filler used on 4+ targets. (SpellID not confirmed — see Known Gaps.)

**Cooldowns**
- **Arcane Surge** (365350, `/spell=365350`) — major burst cooldown, 1.5-minute cooldown per the spell page. Deals burst Arcane damage and powers up Arcane spending.
- **Touch of the Magi** (321507, `/spell=321507`) — debuff that accumulates a share of damage dealt to the target and then detonates; grants 4 Arcane Charges on cast. Roughly a 45-second cooldown per Icy Veins (the `/spell=` page lists a 0.5s internal value, not the usable cooldown — see Known Gaps).
- **Evocation** (12051, `/spell=12051`) — channeled mana restoration (+1500% mana regen), used to refuel between burst windows.
- **Presence of Mind** (205025, `/spell=205025`) — 45-second cooldown; makes the next Arcane Blast casts instant (modifies Arcane Blast cast time).
- **Time Warp** (80353, `/spell=80353`) — raid Haste cooldown (see Role in Raid).

**Key passives / procs**
- **Arcane Charges** — resource, max 4, scales Arcane spell damage and cost.
- **Arcane Salvo** — stacking buff (to 20, or 25 Sunfury) that amplifies the next Arcane Barrage. The single most important buff to track.
- **Clearcasting** — proc enabling a free/instant cast, typically funneled into Arcane Missiles for Salvo.
- **Arcane Soul** — rotational buff that prompts Arcane Barrage usage (per Icy Veins priority).

---

## Rotation / Priority

This is **logical priority ordering**, not a DPS benchmark or simmed APL. No user-provided SimC profile was available; treat this as conceptual.

**Opener (cooldown-aligned burst), per Icy Veins/Wowhead:**
1. Pre-build to ~20 Arcane Salvo stacks.
2. Use long-duration externals/potions (15s+).
3. **Arcane Surge**.
4. Use short-duration buffs (<15s).
5. **Touch of the Magi**.
6. Spend a maximally-buffed **Arcane Barrage** into the Touch of the Magi window near the end of Surge.

**Sustained single target (priority):**
1. **Arcane Surge** on cooldown.
2. **Touch of the Magi** on cooldown.
3. **Arcane Barrage** when at 4 Arcane Charges and 20 Arcane Salvo stacks (or when Arcane Soul prompts it).
4. **Arcane Orb** if you have Clearcasting and your previous cast was Arcane Barrage.
5. Spend **Clearcasting** (into Arcane Missiles) before Arcane Surge ends.
6. **Arcane Blast** as filler to rebuild charges.

**AoE (3+ targets):**
- Cast **Arcane Barrage** whenever you can quickly regain Arcane Charges, but not when sacrificing nearly-maxed Salvo stacks — wait for max stacks when the trade favors it.
- On **4+ targets**, swap filler toward **Arcane Pulse** for sustained AoE rather than single-target filler.
- **Arcane Orb** for charge generation and AoE.

---

## Defensives

This section is critical for RaidLens. Each entry includes how to judge correct usage during a damage window.

- **Ice Block** (SpellID 45438, `/spell=45438`) — full immunity to all damage and most harmful effects; also clears many debuffs; ~10s duration. Cooldown not displayed on the spell page ("n/a"), commonly ~4 minutes in modern WoW but **not confirmed** here.
  - *RaidLens usage:* The hardest panic button. If a player took lethal/near-lethal damage from a known one-shot or stacking mechanic and was NOT in Ice Block, and it was off cooldown, that is a missed defensive. Conversely, Ice Block negates everything during its window — damage taken should drop to zero while active.

- **Prismatic Barrier** (SpellID 235450, `/spell=235450`) — absorb shield across all damage schools, plus ~15% damage reduction while active and reduced magic-debuff duration; 30-second cooldown. The Arcane Mage's maintainable barrier.
  - *RaidLens usage:* Should be up going into predictable raid-wide magic damage or a targeted hit. Because the cooldown is short (30s), there is little excuse for it being unused before a telegraphed damage event. Absence of an active barrier during repeated avoidable magic hits is a flaggable pattern.

- **Greater Invisibility** (SpellID 110959, `/spell=110959`; triggers aura 110960, `/spell=110960`) — 2-minute cooldown; drops threat and provides a strong damage reduction while invisible (the exact percentage was not shown on the fetched aura page — see Known Gaps). Effectively a defensive/threat-drop.
  - *RaidLens usage:* A legitimate emergency damage-reduction/immunity-adjacent tool. If used during a lethal window it should sharply cut damage taken; treat its availability like a major defensive when judging an avoidable death.

- **Alter Time** (SpellID 342245, `/spell=342245`; 20s buff) — records the Mage's health/position and returns them to it when reactivated (or on expiry), 1-minute cooldown. Can undo damage taken during the window by snapping health back.
  - *RaidLens usage:* If a player took a large burst but their health was restored shortly after via Alter Time, that is correct defensive play, not a survival failure. When evaluating a death, check whether Alter Time was available/used in the seconds before.

- **Mirror Image** (SpellID 55342, `/spell=55342`) — 2-minute cooldown; summons images and drops threat; provides a minor defensive benefit in some builds.
  - *RaidLens usage:* Primarily a threat tool; treat as a minor/situational defensive. Do not flag its absence as a survival failure unless a build specifically uses it defensively.

- **Ice Cold** (talent, SpellID 414658, `/spell=414658`) — converts Ice Block into a **-70% damage taken** effect (all schools) for ~6s instead of a full immunity, letting the Mage keep acting. Talent-gated; not all builds have it.
  - *RaidLens usage:* If specced, an Ice Block usage that reduced (rather than zeroed) damage taken indicates Ice Cold. A correct use is reducing damage during a big hit while continuing to DPS/move. Only judge as a missed defensive if the talent is confirmed present.

- **Mass Barrier** (talent, SpellID 414660, `/spell=414660`) — 3-minute cooldown; applies the Mage's barrier to nearby allies. Talent-gated raid utility / soft raid defensive.
  - *RaidLens usage:* If specced, this should be timed to a known raid-wide damage event. Treat as a raid cooldown when present; its absence is only flaggable if the talent is confirmed.

---

## Utility

- **Interrupt:** **Counterspell** (SpellID 2139, confirmed `/spell=2139`) — 25-second cooldown; interrupts the target's cast and locks that spell school for 7s. This is the Mage's **only** raid-usable interrupt. RaidLens should treat Arcane Mage as having a real interrupt and may flag missed interrupts on mechanics that require a kick.
- **Crowd control:**
  - **Polymorph** (SpellID 118, `/spell=118`) — incapacitate (sheep); breaks on damage.
  - **Slow** (SpellID 31589, `/spell=31589`) — single-target -50% movement speed, 15s.
  - **Supernova** (knockback/CC, per Icy Veins/Wowhead overview) — SpellID not confirmed; see Known Gaps.
  - Talented stuns/roots may exist (e.g., Ring of Frost) but were not confirmed live.
- **Dispels:**
  - **Remove Curse** (SpellID 475, `/spell=475`) — removes **Curse**-type effects. Range 40 yards, so it can be cast on allies as well as self. Mage cannot dispel Magic/Poison/Disease.
  - **Spellsteal** (SpellID 30449, `/spell=30449`) — removes (and steals) a beneficial Magic effect from an **enemy**. This is an offensive dispel, not an ally dispel.
- **Externals:** None targeted onto other players for damage reduction in the base kit. Closest is Mass Barrier (talent) which shields allies.
- **Raid buffs/debuffs:** Arcane Intellect (1459) raid-wide; Time Warp (80353) raid Haste/Lust.
- **Movement tools:** **Blink** (1953, 20-yard teleport, breaks roots/stuns on use) or its talented replacement **Shimmer** (212653, typically two charges, usable while casting); plus instant-cast spending and Slow for kiting.

---

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 gems/enchants/consumables page (fetched June 2026) and corroborated by web search. **Exact item IDs were NOT confirmed** — names only, and sources disagreed slightly on the best flask. Treat as guidance, re-verify before relying on specifics.

- **Flask/Phial:** Flask of Thalassian Resistance (Icy Veins page); search results also cited "Flask of the Magisters" as a higher-DPS alternative. Discrepancy unresolved — see Known Gaps.
- **Food:** Feasts "Quel'dorei Medley" / "Blooming Feast"; personal food "Champion's Bento" (Icy Veins). A web-search result cited "Silvermoon Parade" — unresolved.
- **Combat potion:** Light's Potential (damage); Silvermoon Health Potion (healing).
- **Augment Rune:** Void-Touched Augment Rune (listed as the only current option).
- **Weapon Oil:** Thalassian Phoenix Oil.
- **Gems:** Indecipherable Eversong Diamond (unique epic); a secondary-stat rare gem (Icy Veins listed a Versatility variant; search cited a Mastery variant — unresolved).
- **Enchants (Icy Veins):** Weapon — Acuity of the Ren'dorei; Chest — Mark of the Worldsoul; Legs — Arcanoweave Spellthread; Rings — Eyes of the Eagle.

These do not affect RaidLens mistake-detection logic and are included for completeness only.

---

## Notes and Known Gaps

- **Patch currency:** All fetched pages were labeled Patch **12.0.5** (Midnight); Icy Veins consumables page last updated 2026-05-19. No pre-Midnight (Dragonflight / War Within) data was knowingly used. Wowhead spell pages do not display patch labels but SpellIDs are stable across patches.
- **Wowhead guide bodies:** The Wowhead Arcane guide pages (overview, rotation, enchants) frequently returned only navigation/header content via fetch; rotation and consumable detail were therefore taken from Icy Veins, with SpellIDs confirmed on individual Wowhead `/spell=` pages.
- **Unconfirmed SpellIDs (omitted on purpose):**
  - **Arcane Pulse** — AoE filler; ID not confirmed.
  - **Supernova** — CC/knockback; ID not confirmed.
  - **Ring of Frost / other talented CC** — not confirmed live.
- **Cooldown caveats:**
  - **Touch of the Magi** `/spell=321507` page shows a 0.5s internal value; the usable cooldown (~45s per Icy Veins) was not confirmed on the spell page itself.
  - **Ice Block** cooldown displayed as "n/a" on `/spell=45438`; the real usable cooldown (commonly ~4 min) is **not confirmed** here. Do not assume a hard number when judging availability.
  - **Arcane Surge** cooldown taken as 1.5 min from `/spell=365350`; Icy Veins prose elsewhere referenced 90s — consistent.
- **Greater Invisibility damage reduction:** The aura page (110960) did not expose a numeric damage-reduction value; it is described qualitatively. Do not cite a specific percentage.
- **Greater Invisibility / Ice Cold / Mass Barrier are talent-gated** (Ice Cold, Mass Barrier confirmed as talents). Only flag their absence as a missed defensive when the talent is confirmed present for that player.
- **Arcane Power (SpellID 12042)** is an older (pre-Midnight) cooldown and was deliberately EXCLUDED; modern Arcane uses Arcane Surge. Do not reintroduce it.
- **Consumables/enchants** names had cross-source disagreement (flask, food, gem) and **no item IDs were confirmed**. Re-verify against a live BiS list before trusting specifics.
- **Maintenance flag:** Re-verify every SpellID, cooldown, talent name, and consumable after ANY 12.x patch. Tuning and talent trees change frequently in a live patch cycle.
