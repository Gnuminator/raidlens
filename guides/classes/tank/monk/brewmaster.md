# Brewmaster Monk — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched during research, June 2026):
> - https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide
> - https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-rotation-cooldowns-abilities
> - https://www.wowhead.com/spell=116705/spear-hand-strike
> - https://www.wowhead.com/spell=8647/mystic-touch
> - https://www.wowhead.com/spell=243435/fortifying-brew
> - https://www.wowhead.com/spell=322507/celestial-brew
> - https://www.wowhead.com/spell=119582/purifying-brew
> - https://www.wowhead.com/spell=122278/dampen-harm
> - https://www.wowhead.com/spell=122783/diffuse-magic
> - https://www.wowhead.com/spell=115078/paralysis
> - https://www.wowhead.com/spell=116844/ring-of-peace
> - https://www.wowhead.com/spell=119381/leg-sweep
> - https://www.wowhead.com/spell=218164/detox
> - https://www.wowhead.com/spell=132578/invoke-niuzao-the-black-ox
> - Wowhead spell pages confirmed via search result URLs (page body 403'd on direct fetch): spell=121253 (Keg Smash), spell=115181 (Breath of Fire), spell=205523 (Blackout Kick), spell=115546 (Provoke), spell=115399 (Black Ox Brew), spell=214326 (Exploding Keg)

---

## Overview

Brewmaster Monk is the Monk tank specialization. Its survivability identity is **damage smoothing** rather than raw mitigation: instead of taking large discrete hits, the Brewmaster converts a portion of incoming damage into a slow damage-over-time effect called **Stagger**, then actively clears that pooled damage before it kills them.

Core gameplay loop:
- Spend **Energy** on `Keg Smash` (121253), `Tiger Palm`, `Spinning Crane Kick`, and `Breath of Fire` (115181) to deal damage and feed defensive resources.
- Weave in cost-free `Blackout Kick` (205523) to maintain the **Shuffle** buff, which increases the percentage of damage routed into Stagger.
- Periodically spend brew charges (`Purifying Brew`, 119582) to remove accumulated Stagger before it spikes.
- Casting offensive/brew abilities reduces the cooldown of the defensive brews, so offense and defense are tightly coupled.

**Stagger** (mechanic): a portion of every hit is delayed and dealt as a DoT ticking roughly every 0.5s over about 10s. **Shuffle** (buff) raises the staggered percentage and is refreshed by `Keg Smash` (~5s), `Blackout Kick` (~3s), and `Spinning Crane Kick` (~4s, capped). Mastery (**Elusive Brawler**) adds a stacking dodge chance.

**Survivability/damage profile:** Brewmaster is regarded as one of the steadiest raid tanks because it turns burst damage into predictable, healable DoT damage. It deals moderate tank-level DPS, weighted toward AoE and sustained single-target through `Keg Smash` and `Breath of Fire`.

**Primary weakness:** Because so much of its effective health relies on Stagger being healed off (via Celestial Fortune-amplified healing) and on actively purifying, Brewmaster suffers disproportionately whenever an encounter applies **healing reduction** or deals **damage that bypasses mitigation/Stagger**. A Brewmaster caught with no brew charges during a magic spike is far more fragile than its average smoothness suggests.

## Role in Raid

- **Role:** Tank (one of two tank slots on Mythic).
- **Raid debuff:** `Mystic Touch` (8647) — a passive that causes the Monk's damage to increase the target's Physical damage taken (the standard "+Physical damage taken" raid debuff). This is a mandatory raid utility slot; if no Monk or comparable provider is present, the raid loses this multiplier.
- **Bloodlust / Heroism:** **No.** Brewmaster does not provide a Bloodlust-equivalent haste burst.
- **Battle res:** **No.** Brewmaster cannot combat-resurrect.
- **Group defensives / externals:** Brewmaster has **no external damage-reduction or shield it can cast on another player** in its tank kit; its strong defensives are self-only. `Ring of Peace` (116844) can be cast on a friendly target as a control/peel tool but is not a damage-reduction external.
- **Mobility:** Strong. `Roll` (off-GCD dash, multiple charges), `Tiger's Lust` (movement-speed boost / snare break), `Transcendence` + `Transcendence: Transfer` (drop a spirit, then teleport back to it). This makes Brewmaster one of the more mobile tanks for soaks and positional mechanics.

## Abilities Reference

Core builders / damage (Energy spenders unless noted):
- `Keg Smash` (121253) — primary Energy ability (~40 Energy). Grants Shuffle and reduces brew cooldowns. Often the highest-priority button.
- `Blackout Kick` (205523) — free; ~2s static cooldown (fires roughly every 2s regardless of Haste). Maintains Shuffle and enables `Blackout Combo`.
- `Tiger Palm` — Energy filler; consumes `Blackout Combo`, reduces brew cooldowns.
- `Breath of Fire` (115181) — short-cooldown fire DoT/cone; applies a mitigation/ignite component, builds `Charred Passions`.
- `Spinning Crane Kick` — AoE Energy spender; also refreshes Shuffle.
- `Exploding Keg` (214326) — fire AoE that also causes affected enemies to miss melee attacks for a few seconds (a defensive use against physical melee).
- `Black Ox Brew` (115399) — off-GCD resource reset: refills Energy and Purifying Brew charges and grants a Celestial Brew charge (talent).
- `Touch of Death` — execute-style ability when talented/enabled.

Key passives/procs: **Elusive Brawler** (Mastery, stacking dodge), **Blackout Combo** (196736 is the *Blackout Combo* passive/buff — see Known Gaps; the buff modifies the next ability after `Blackout Kick`), **Charred Passions**, **Shuffle**, **Stagger**.

> Note: `Blackout Combo` is spell 196736 — this is the passive/buff, NOT `Blackout Kick`. Do not conflate them. `Blackout Kick` itself is 205523.

## Rotation / Priority

This is a **logical priority list, not a DPS benchmark.** Brewmaster plays as a priority system around the ~2s `Blackout Kick` cadence; actual button order shifts with Energy, brew charges, and incoming damage.

**Opener (single-target and AoE are similar):**
1. Pre-pull `Breath of Fire` (and pre-activate maintenance abilities like Rushing Jade Wind if talented) to enter combat with `Charred Passions`.
2. `Keg Smash` on pull.
3. `Blackout Kick`.
4. `Breath of Fire`.
5. `Tiger Palm`.
6. `Exploding Keg` / `Invoke Niuzao` as the burst window opens.

**Sustained single-target priority (conceptual):**
1. `Black Ox Brew` (off-GCD) when Energy and brew charges are depleted.
2. `Touch of Death` if enabled.
3. `Blackout Kick` (keep Shuffle up; enable Blackout Combo).
4. `Tiger Palm` to consume `Blackout Combo`.
5. `Keg Smash` (highest-value Energy spend; keep on cooldown).
6. `Breath of Fire` (maintain `Charred Passions`).
7. `Exploding Keg`.
8. `Spinning Crane Kick` / `Tiger Palm` as Energy fillers (don't starve `Keg Smash`).

**AoE priority:** As above but `Keg Smash` and `Spinning Crane Kick` rise in value, and `Breath of Fire` is maintained on the full pack. `Exploding Keg` is high value on stacked targets.

Throughout: **keep Shuffle up** (via `Blackout Kick` / `Keg Smash`) and **spend `Purifying Brew` charges** to clear large Stagger ticks — this is the actual survivability rotation, separate from the damage rotation.

## Defensives

Each defensive below includes a **RaidLens usage** note for judging correct use during a damage window.

- **Stagger (passive)** — splits incoming damage into an instant portion and a DoT portion. *RaidLens usage:* Not an activated cooldown, but if a Brewmaster died to a single recorded hit with no Stagger DoT smoothing, Shuffle was likely down — check whether `Blackout Kick`/`Keg Smash` had lapsed before the hit.

- **Shuffle (buff)** — increases the staggered percentage; maintained by `Blackout Kick` (205523), `Keg Smash` (121253), `Spinning Crane Kick`. *RaidLens usage:* This is the baseline defensive. If a lethal physical/melee window landed while Shuffle was not active, that is a play error even if no brew was "saved."

- **`Purifying Brew` (119582)** — ~20s recharge, 2 charges; clears ~50% of currently staggered damage (minimum ~8% max HP). *RaidLens usage:* The brew that prevents Stagger spikes. During a heavy melee/tankbuster window, expect at least one purify near the Stagger peak. Charges sitting unused while Stagger ticks lethally is a misuse.

- **`Celestial Brew` (322507)** — ~12s recharge, 2 charges (talent-dependent); applies a sizable damage-absorb shield. *RaidLens usage:* Primary on-demand shield. Should be active just before a known tankbuster/spike; an unused charge across a lethal hit is a flag.

- **`Fortifying Brew` (243435)** — base cooldown shown as **7 minutes** on the live spell page; 15s duration; +15% max HP and 15% damage reduction (talents commonly reduce the cooldown — see Known Gaps). *RaidLens usage:* Major personal cooldown. Reserve for the biggest scripted tank-damage windows; if a Brewmaster died to a telegraphed big hit with Fortifying Brew available, that is a clear unused-defensive flag.

- **`Dampen Harm` (122278)** — 2 min cooldown, 10s duration; reduces damage taken (scales larger against bigger hits). *RaidLens usage:* All-rounder against physical/heavy hits. Available-but-unused across a lethal spike is a flag, but allow that it may be intentionally held for a specific later window.

- **`Diffuse Magic` (122783)** — 1.5 min cooldown, 6s duration; reduces magic damage taken by 60% and can return harmful magic effects to caster. *RaidLens usage:* The dedicated **magic** defensive — most relevant against Brewmaster's main weakness. For a lethal *magic* damage window, check whether `Diffuse Magic` was up; unused availability here is a strong flag.

- **`Invoke Niuzao, the Black Ox` (132578)** — 2 min cooldown, 25s duration; summons Niuzao and provides a physical-damage absorb component while active. *RaidLens usage:* Both a throughput and a sustained-mitigation cooldown. Expect it lined up with extended damage phases; idle through a long tank-damage window is a soft flag.

- **`Exploding Keg` (214326)** — short cooldown; causes affected enemies to **miss melee attacks** for ~3s. *RaidLens usage:* A situational melee-mitigation tool against rapid physical autos/adds. Hard to judge from logs alone; treat as supplementary, not a primary save.

- **`Black Ox Brew` (115399)** — off-GCD; refills Energy and Purifying Brew charges (and grants Celestial Brew charge via talent). *RaidLens usage:* Not a damage reduction itself, but it *restocks* the brews used for survival. A Brewmaster who spike-died with empty brews and an unused `Black Ox Brew` failed to refuel mitigation.

## Utility

- **Interrupt:** `Spear Hand Strike` (116705) — **15 second cooldown.** This is Brewmaster's **only** raid-usable interrupt (a single, baseline kick). It interrupts the cast and locks that spell school for ~5s. *RaidLens:* For any missed-interrupt analysis, this is the ability to attribute to a Brewmaster. It is melee-range and on a 15s cooldown, so a Brewmaster can only reliably cover one interrupt assignment on that cadence.

- **Crowd control:**
  - `Paralysis` (115078) — single-target incapacitate, 1 min duration, ~45s cooldown, 20yd range; also dispels enrage.
  - `Leg Sweep` (119381) — AoE stun, ~1 min cooldown, 6yd radius, ~3s stun.
  - `Ring of Peace` (116844) — ~45s cooldown; AoE knock/peel zone (silence + disarm field), can be placed on a friendly target. Useful for peeling adds, not a hard interrupt.

- **Dispel:** `Detox` (218164) — removes **Poison and Disease** from a friendly target. This is the Brewmaster/Windwalker version (the Mistweaver Detox is a different spell ID, 115450). Brewmaster cannot dispel Magic or Curse. *RaidLens:* If poison/disease cleanse was needed and missed, a Brewmaster is a valid dispeller to consider — but only for those two debuff types.

- **Externals:** **None.** Brewmaster has no castable-on-ally damage-reduction or shield. Do not expect it to cover a raid member's defensive.

- **Raid buffs/debuffs:** `Mystic Touch` (8647) — passive Physical-damage-taken debuff (see Role in Raid). No haste/Bloodlust, no battle res.

- **Movement:** `Roll` (off-GCD dash), `Tiger's Lust` (speed boost / snare removal — can be cast on an ally for the snare break), `Transcendence` / `Transcendence: Transfer` (drop spirit, teleport back). High mobility for soaks and repositioning.

## Consumables and Enchants

Not sourced in this pass. The general Midnight tank consumable framework (a primary/Stamina-or-Versatility flask, an Agility/Versatility food, a combat potion, an augment rune, weapon oil/sharpening, and gear enchants) applies, but **no specific Patch 12.0.5 consumable names, item IDs, or enchant IDs were confirmed from a live source here.** See Known Gaps — do not inject specific consumable/enchant item IDs into analysis from this guide.

## Notes and Known Gaps

**Confirmed SpellIDs (each from a live Wowhead page actually loaded — either via direct fetch or via the canonical spell-page URL surfaced in search):**
Spear Hand Strike 116705, Mystic Touch 8647, Fortifying Brew 243435, Celestial Brew 322507, Purifying Brew 119582, Dampen Harm 122278, Diffuse Magic 122783, Paralysis 115078, Ring of Peace 116844, Leg Sweep 119381, Detox 218164, Invoke Niuzao 132578, Keg Smash 121253, Breath of Fire 115181, Blackout Kick 205523, Provoke 115546, Black Ox Brew 115399, Exploding Keg 214326, Blackout Combo (passive) 196736.

**Unconfirmed / flagged facts:**
- **Direct-fetch limitation:** Wowhead guide pages and several spell pages returned no body (JS-rendered) or HTTP 403 on direct fetch. Keg Smash (121253), Breath of Fire (115181), Blackout Kick (205523), Provoke (115546), Black Ox Brew (115399), and Exploding Keg (214326) IDs come from the canonical Wowhead spell-page URLs returned by live search plus matching descriptions, not a fully rendered page body. Re-verify on the live spell pages if precision is critical.
- **`Tiger Palm`, `Spinning Crane Kick`, `Touch of Death`, `Tiger's Lust`, `Transcendence`, `Roll`, `Touch of Karma`, `Rushing Jade Wind`, `Chi Burst`, `Expel Harm`, `Celestial Infusion`** — referenced by name from Icy Veins but their SpellIDs were NOT individually confirmed from a live spell page. IDs intentionally omitted.
- **`Fortifying Brew` cooldown** — the live spell page shows **7 minutes** base; a secondary search summary stated 6 minutes (likely a talented value). Treat 7 min as base and assume talents may reduce it.
- **Energy costs and exact cooldowns** for builders (Keg Smash ~40, Blackout Kick ~30/free, etc.) come from Icy Veins, not from confirmed per-spell pages; treat as approximate.
- **`Celestial Brew` / `Purifying Brew` charges and recharge times** (2 charges, ~12s / ~20s) come from Icy Veins, not the spell pages directly; the spell pages list internal cooldowns of ~1s. Treat charge/recharge values as approximate and talent-dependent.
- **`Mystic Touch` (8647)** — the spell page shows a server-side dummy aura; the "+Physical damage taken" effect is confirmed by Icy Veins and search summaries, not by the spell page text itself.
- **`Detox` (218164)** — confirmed to remove Poison and Disease and shown as a no-cooldown / 10 Energy ability. The Brewmaster-vs-Mistweaver spec restriction is inferred (Mistweaver uses 115450); the loaded page did not explicitly list spec restrictions.
- **Hero talents** (e.g., Master of Harmony, Shado-Pan / Celestial Conduit-style trees) are referenced in passing in sources but were NOT researched here; any hero-talent-specific defensive (e.g. Celestial Infusion as a Celestial Brew replacement) is only loosely characterized. Do not rely on this guide for hero-talent specifics.
- **Consumables and enchants** — not sourced; no item IDs provided.
- **No SimC profile / talent import string** was available; talent loadouts are described conceptually only.

**Maintenance flag:** Re-verify all SpellIDs, cooldowns, and percentages after **any 12.x patch** (next checkpoint: any patch after 12.0.5). Brewmaster received Midnight reworks/simplification, so older Dragonflight/War Within data must not be trusted as current.
