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
> - SimulationCraft Midnight 12.0.5 (simc-guides/Monk_Brewmaster.json), APL from Monk_Brewmaster.apl.txt (attributed to "Trivial" in file header), spell-ids-reference.json

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

## SimulationCraft Reference (Midnight 12.0.5)

**Hero trees covered:** Both **Master of Harmony** and **Shado-Pan** are modelled — the SimC APL contains a full separate action list for each hero tree, selected at runtime via `hero_tree.master_of_harmony` / `hero_tree.shadopan` conditionals.

### Talent import string

The same talent string is used for both hero-tree variants (the hero tree is selected in-game or via the SimC profile option, not encoded separately in this string):

```
CwQAAAAAAAAAAAAAAAAAAAAAAAAAAgZbzYGzM2mxGmZAAAAAAAYZBjYmBmhBzYMzMzwsMmZMzywymttxMmFAAYZWmWmtZWGAAIAzwGYmBMNGAAwA
```

### Metrics (SimC Patchwerk single-target)

| Metric | Value |
|--------|-------|
| DPS | 86,194 |
| DTPS | 40,807 |
| HPS (self-healing) | 22,978 |

These figures reflect the Brewmaster's role as a **tank**: the DPS is incidental to the active-mitigation rotation; DTPS and HPS are the survival-relevant outputs. Self-healing at ~27% of DTPS reflects the Stagger-plus-Celestial-Fortune loop working as intended.

### Damage distribution (SimC, share of total)

Where the SimC report showed a parenthesised value (e.g. "27.6% (42.6%)"), the parenthesised figure is used as it represents the fuller accounting including secondary procs.

| Ability | Share |
|---------|-------|
| Tiger Palm | 42.6% |
| Aspect of Harmony (_damage) | 17.5% |
| Keg Smash | 11.7% |
| Breath of Fire | 7.8% |
| Blackout Kick | 7.7% |
| Chi Burst (_damage) | 2.6% |
| Special Delivery | 2.0% |
| Stomp (Niuzao pet) | 0.9% |
| Jan'alai's Flames | 0.7% |
| Expel Harm (_damage) | 0.1% |

**RaidLens interpretation:** Tiger Palm dominates Brewmaster's damage output because it is the primary `Blackout Combo` consumer and is pressed on nearly every Energy-surplus GCD. If a Brewmaster's Tiger Palm share is dramatically lower than expected over a pull, they may have been starving the GCD with movement or missing `Blackout Combo` windows. `Aspect of Harmony` (the Master of Harmony hero talent accumulator) accounting for ~17.5% confirms that hero-tree selection significantly shifts the damage profile — a Shado-Pan Brewmaster will show a different distribution.

## Action Priority List — Brewmaster (Master of Harmony and Shado-Pan)

The APL is attributed to **Trivial** (source file: `Monk_Brewmaster.apl.txt`). The default list dispatches to the appropriate hero-tree sub-list. Both sub-lists are reproduced verbatim below.

### Action Priority List — Master of Harmony

```
actions.precombat=snapshot_stats
actions.precombat+=/potion

actions=auto_attack
actions+=/potion
actions+=/call_action_list,name=race_actions
actions+=/call_action_list,name=item_actions
actions+=/run_action_list,name=master_of_harmony,if=hero_tree.master_of_harmony
actions+=/run_action_list,name=shado_pan,if=hero_tree.shadopan

actions.item_actions=use_items

actions.master_of_harmony=black_ox_brew,if=cooldown.celestial_brew.charges_fractional<1
actions.master_of_harmony+=/celestial_brew,if=buff.aspect_of_harmony_spender.up&!buff.empty_barrel.up
actions.master_of_harmony+=/keg_smash,if=buff.aspect_of_harmony_spender.up&buff.empty_barrel.up
actions.master_of_harmony+=/blackout_kick,if=talent.blackout_combo.enabled&!buff.blackout_combo.up
actions.master_of_harmony+=/celestial_brew,if=!(apex.3&buff.empty_barrel.up)&buff.aspect_of_harmony_accumulator.value>0.3*health.max&cooldown.celestial_brew.charges_fractional>1.9
actions.master_of_harmony+=/celestial_brew,if=!(apex.3&buff.empty_barrel.up)&target.time_to_die<15&buff.aspect_of_harmony_accumulator.value>0.2*health.max
actions.master_of_harmony+=/purifying_brew,if=!(apex.1&buff.empty_barrel.up)
actions.master_of_harmony+=/fortifying_brew,if=!(apex.3&buff.empty_barrel.up)
actions.master_of_harmony+=/chi_burst
actions.master_of_harmony+=/invoke_niuzao
actions.master_of_harmony+=/tiger_palm,if=buff.blackout_combo.up&cooldown.blackout_kick.remains<1.3
actions.master_of_harmony+=/exploding_keg,if=cooldown.keg_smash.charges_fractional<1
actions.master_of_harmony+=/empty_the_cellar,if=cooldown.celestial_brew.remains>15
actions.master_of_harmony+=/breath_of_fire,if=cooldown.blackout_kick.remains>1.5&!buff.empty_barrel.up&cooldown.keg_smash.charges<1+talent.stormstouts_last_keg.enabled
actions.master_of_harmony+=/tiger_palm,if=buff.blackout_combo.up
actions.master_of_harmony+=/keg_smash,if=talent.scalding_brew.enabled
actions.master_of_harmony+=/keg_smash,if=buff.empty_barrel.up
actions.master_of_harmony+=/keg_smash,if=cooldown.keg_smash.charges=1+talent.stormstouts_last_keg.enabled
actions.master_of_harmony+=/breath_of_fire
actions.master_of_harmony+=/empty_the_cellar
actions.master_of_harmony+=/rushing_jade_wind
actions.master_of_harmony+=/keg_smash
actions.master_of_harmony+=/blackout_kick
actions.master_of_harmony+=/tiger_palm,if=energy>50-energy.regen*2
actions.master_of_harmony+=/expel_harm

actions.race_actions=blood_fury
actions.race_actions+=/berserking
actions.race_actions+=/arcane_torrent
actions.race_actions+=/lights_judgment
actions.race_actions+=/fireblood
actions.race_actions+=/ancestral_call
actions.race_actions+=/bag_of_tricks
```

### Action Priority List — Shado-Pan

```
actions.shado_pan=black_ox_brew,if=!(apex.1&buff.empty_barrel.up)&cooldown.celestial_brew.charges_fractional<0.5
actions.shado_pan+=/breath_of_fire,if=talent.salsalabims_strength.enabled&buff.invoke_niuzao_the_black_ox.up
actions.shado_pan+=/keg_smash,if=talent.salsalabims_strength.enabled&buff.invoke_niuzao_the_black_ox.up
actions.shado_pan+=/blackout_kick,if=talent.blackout_combo.enabled&!buff.blackout_combo.up
actions.shado_pan+=/purifying_brew,if=!(apex.1&buff.empty_barrel.up)
actions.shado_pan+=/fortifying_brew,if=!(apex.3&buff.empty_barrel.up)
actions.shado_pan+=/chi_burst
actions.shado_pan+=/invoke_niuzao
actions.shado_pan+=/tiger_palm,if=buff.blackout_combo.up&cooldown.blackout_kick.remains<1.3
actions.shado_pan+=/exploding_keg,if=cooldown.keg_smash.charges_fractional<1
actions.shado_pan+=/empty_the_cellar,if=buff.empty_the_cellar.remains<1.5
actions.shado_pan+=/tiger_palm,if=buff.blackout_combo.up
actions.shado_pan+=/celestial_brew,if=!(apex.3&buff.empty_barrel.up)
actions.shado_pan+=/breath_of_fire,if=active_enemies>2
actions.shado_pan+=/keg_smash
actions.shado_pan+=/empty_the_cellar
actions.shado_pan+=/breath_of_fire
actions.shado_pan+=/rushing_jade_wind
actions.shado_pan+=/blackout_kick
actions.shado_pan+=/tiger_palm,if=energy>65-energy.regen
actions.shado_pan+=/expel_harm
```

**APL notes for RaidLens context:**
- `Purifying Brew` and `Celestial Brew` are prioritised early in both lists, confirming their role as the primary survivability GCDs. In Master of Harmony the `aspect_of_harmony_accumulator` condition gates `Celestial Brew` usage around the `Empty Barrel` buff — do not expect the sim cadence to translate directly to raid encounters with heavy movement.
- `Black Ox Brew` fires when brew charges are low (charges_fractional < 1 in MoH, < 0.5 in Shado-Pan), confirming it is a reactive refuel, not a proactive cooldown.
- `invoke_niuzao` appears as a high-priority cast in both lists, fired after defensive brews are handled and before the offensive filler rotation.
- `Fortifying Brew` appears in both APLs as a mid-priority rotation button (not a manual save), which reflects SimC's approach of spending it on cooldown in a patchwerk context. In an actual raid you should expect manual save behaviour for specific windows.

## Confirmed Spell IDs (SimulationCraft HTML)

The following table lists abilities **named in this guide** that were found by **exact key match** in the SimC spell-ids-reference.json (extracted from the Midnight 12.0.5 SimC HTML report). IDs already confirmed from Wowhead are unchanged; this section adds SimC corroboration and new IDs for abilities previously unconfirmed.

| Ability | Spell ID(s) | School | Type |
|---------|-------------|--------|------|
| Tiger Palm | 100780 | physical | cast |
| Keg Smash | 121253 | physical | cast |
| Blackout Kick | 100784, 228649, 205523 (multiple: base cast + variants) | physical | cast |
| Breath of Fire | 115181, 123725 (multiple: base cast + variants) | fire | cast |
| Exploding Keg | 325153, 388867 (multiple: base cast + variants) | fire | cast |
| Black Ox Brew | 115399 | physical | cast |
| Expel Harm | 115129, 451968, 322101 (multiple: base cast + variants) | nature | cast |
| Chi Burst | 148135, 130654 (multiple: base cast + variants) | nature | cast |
| Spinning Crane Kick | 101546, 107270 (multiple: base cast + variants) | physical | cast |
| Special Delivery | 196733 | physical | other |
| Empty the Cellar | 1263438 | physical | cast |
| Aspect of Harmony | 450763 | nature | other |
| Celestial Fortune | 216521 | nature | cast |
| Celestial Infusion | 1241059 | physical | cast |
| Touch of Death | 322109 | physical | cast |

> **Exploding Keg ID note:** The guide's existing Wowhead-confirmed ID is 214326. The SimC report shows 325153 and 388867. These may represent a renamed or re-tooled version of the ability in Midnight patch 12.x. **Do not replace 214326 in WCL filter logic until verified against live WCL logs** — treat 325153/388867 as candidate IDs for the Midnight version.

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

**Confirmed SpellIDs (each from a live Wowhead page actually loaded — either via direct fetch or via the canonical spell-page URL surfaced in search):**
Spear Hand Strike 116705, Mystic Touch 8647, Fortifying Brew 243435, Celestial Brew 322507, Purifying Brew 119582, Dampen Harm 122278, Diffuse Magic 122783, Paralysis 115078, Ring of Peace 116844, Leg Sweep 119381, Detox 218164, Invoke Niuzao 132578, Keg Smash 121253, Breath of Fire 115181, Blackout Kick 205523, Provoke 115546, Black Ox Brew 115399, Exploding Keg 214326, Blackout Combo (passive) 196736.

**SimC-confirmed / newly added (Midnight 12.0.5, spell-ids-reference.json):**
Tiger Palm 100780, Spinning Crane Kick 101546/107270 (multipleIds), Expel Harm 115129/451968/322101 (multipleIds), Chi Burst 148135/130654 (multipleIds), Special Delivery 196733, Empty the Cellar 1263438, Aspect of Harmony 450763, Celestial Fortune 216521, Celestial Infusion 1241059, Touch of Death 322109, Blackout Kick additional IDs 100784/228649 (multipleIds), Breath of Fire additional ID 123725 (multipleIds), Exploding Keg SimC IDs 325153/388867 (see note above re: discrepancy with Wowhead 214326). **Talent string added. APL added (Master of Harmony and Shado-Pan variants).**

**Unconfirmed / flagged facts:**
- **Direct-fetch limitation:** Wowhead guide pages and several spell pages returned no body (JS-rendered) or HTTP 403 on direct fetch. Keg Smash (121253), Breath of Fire (115181), Blackout Kick (205523), Provoke (115546), Black Ox Brew (115399), and Exploding Keg (214326) IDs come from the canonical Wowhead spell-page URLs returned by live search plus matching descriptions, not a fully rendered page body. Re-verify on the live spell pages if precision is critical.
- **`Blackout Combo` passive (196736)** — Wowhead-confirmed; NOT present in SimC spell-ids-reference.json (non-damaging passive, expected absence).
- **`Rushing Jade Wind`** — referenced in the APL and Abilities Reference but its SpellID is NOT in the SimC spell-ids-reference.json (likely a maintenance buff rather than a damaging cast in the Patchwerk sim context). ID intentionally omitted.
- **`Tiger's Lust`, `Transcendence`, `Roll`, `Touch of Karma`, `Celestial Brew` (322507), `Purifying Brew` (119582)** — SpellIDs from Wowhead; not present in SimC source (non-damaging utility/defensives — expected absence).
- **`Fortifying Brew` cooldown** — the live spell page shows **7 minutes** base; a secondary search summary stated 6 minutes (likely a talented value). Treat 7 min as base and assume talents may reduce it. Note: `Fortifying Brew` appears in the SimC APL as a rotation button (spent on cooldown in patchwerk); its SimC abilities table entry showed a spell ID of 243435 in the "#1 ranked" row — that is a buff-uptime row, not a damage row, and was correctly excluded from the damage distribution table.
- **Energy costs and exact cooldowns** for builders (Keg Smash ~40, Blackout Kick ~30/free, etc.) come from Icy Veins, not from confirmed per-spell pages; treat as approximate.
- **`Celestial Brew` / `Purifying Brew` charges and recharge times** (2 charges, ~12s / ~20s) come from Icy Veins, not the spell pages directly; the spell pages list internal cooldowns of ~1s. Treat charge/recharge values as approximate and talent-dependent.
- **`Mystic Touch` (8647)** — the spell page shows a server-side dummy aura; the "+Physical damage taken" effect is confirmed by Icy Veins and search summaries, not by the spell page text itself.
- **`Detox` (218164)** — confirmed to remove Poison and Disease and shown as a no-cooldown / 10 Energy ability. The Brewmaster-vs-Mistweaver spec restriction is inferred (Mistweaver uses 115450); the loaded page did not explicitly list spec restrictions.
- **Hero talents** — Master of Harmony and Shado-Pan are now confirmed as the two hero tree variants from the SimC APL and JSON. Specific hero-talent node IDs and the exact Celestial Infusion mechanic (1241059) are now SimC-sourced. Cooldown values and interaction details remain unconfirmed from a live guide page.
- **Consumables and enchants** — not sourced; no item IDs provided.
- **`Invoke Niuzao, the Black Ox` (132578)** — Wowhead-confirmed; NOT found in the SimC spell-ids-reference.json by exact key match. The SimC abilities table has a `pet - invoke_niuzao_the_black_ox` entry (no valid % share) and a `Stomp` entry (0.9%) which represents Niuzao's stomp damage; the cooldown/trigger spell itself is absent from the SimC source as expected for a non-damaging summon cast.

**Maintenance flag:** Re-verify all SpellIDs, cooldowns, and percentages after **any 12.x patch** (next checkpoint: any patch after 12.0.5). Brewmaster received Midnight reworks/simplification, so older Dragonflight/War Within data must not be trusted as current.
