# Windwalker Monk — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/monk/windwalker/overview-pve-dps (page body not retrievable via fetch; used for navigation/version confirmation only)
> - https://www.wowhead.com/guide/classes/monk/windwalker/rotation-cooldowns-pve-dps (body not retrievable; version confirmation only)
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-guide
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-gems-enchants-consumables
> - https://www.method.gg/guides/windwalker-monk/playstyle-and-rotation
> - Individual confirmed Wowhead spell pages: spell=107428 (Rising Sun Kick), 113656 (Fists of Fury), 116705 (Spear Hand Strike), 122470 (Touch of Karma), 115203 (Fortifying Brew), 122783 (Diffuse Magic), 122278 (Dampen Harm), 322101 (Expel Harm), 322109 (Touch of Death), 123904 (Invoke Xuen), 113746 (Mystic Touch), 119381 (Leg Sweep), 115078 (Paralysis), 218164 (Detox), 116841 (Tiger's Lust), 116844 (Ring of Peace), 100780 (Tiger Palm), 100784 (Blackout Kick), 330901 (Spinning Crane Kick), 101643 (Transcendence), 109132 (Roll)

## Overview

Windwalker Monk is a melee DPS specialization built around a two-resource system: it spends **Energy** (which regenerates passively) to generate **Chi**, then spends Chi on its hardest-hitting strikes. The core loop is: use **Tiger Palm** to convert Energy into Chi, then dump Chi into **Rising Sun Kick**, **Blackout Kick**, **Fists of Fury**, and **Spinning Crane Kick** with as little delay as possible.

A defining mechanic is the Windwalker mastery, **Combo Strikes**, which rewards never casting the same ability twice in a row — the player must constantly alternate abilities to maximize damage. Cooldown windows are built around **Invoke Xuen, the White Tiger** and **Zenith**, with two Hero Talent trees in Midnight (**Shado-Pan** for consistent single-target/AoE, **Conduit of the Celestials** for burst and cleave).

Damage profile: strong, mobile, well-rounded melee damage with both single-target and AoE tools. Survivability profile: relatively weak. Windwalker has good active defensives but minimal passive mitigation and limited self-healing. Its standout strength is mobility (Roll/Flying Serpent Kick/Transcendence).

Primary weakness: low passive durability and limited self-sustain — it relies on actively pressing defensives and on healer attention to survive heavy raid damage. It can also struggle relative to other specs on very large multi-target burst-AoE windows.

> Midnight changes noted by sources: "Storm, Earth, and Fire" was replaced by **Zenith**; **Invoke Xuen** is now a conduit/cooldown spell; the spec no longer needs a Tiger Palm press to trigger Flurry Strikes. Treat older (Dragonflight / The War Within) rotation writeups as outdated.

## Role in Raid

- **Role:** Pure melee DPS. Not a healer, not a tank.
- **Raid debuff it brings:** **Mystic Touch** (spell ID 113746) — causes affected targets to take **5% increased Physical damage**. This is the Monk class's raid contribution and is shared by all Monk specs. Applied automatically by attacking.
- **Bloodlust/Heroism equivalent:** None. Windwalker Monk does **not** provide a Lust effect.
- **Battle res:** None. Monks have no combat resurrection.
- **Group defensives / externals:** **Ring of Peace** (knock/displacement utility — see Utility) is the main group-affecting tool. Windwalker has **no raid-wide damage-reduction cooldown** and **no external damage-reduction or immunity it can cast on another player**. All its defensives are self-only.
- **Mobility:** Excellent. **Roll** / **Chi Torpedo**, **Flying Serpent Kick**, **Tiger's Lust** (self speed + snare break), and **Transcendence** (teleport-swap to a placed spirit) give best-in-class repositioning.

## Abilities Reference

Core builders/spenders:
- **Tiger Palm** (100780) — Energy spender that generates Chi. The primary Chi generator.
- **Blackout Kick** (100784) — Chi spender; also reduces cooldowns of other abilities.
- **Rising Sun Kick** (107428) — Heavy-hitting Chi spender on a short cooldown.
- **Fists of Fury** (113656) — Channeled Chi spender hitting the target and enemies in front; a core burst button.
- **Spinning Crane Kick** (330901) — AoE Chi spender; benefits from the Dance of Chi-Ji proc.

Major cooldowns:
- **Invoke Xuen, the White Tiger** (123904) — Summons Xuen for ~20s and increases the damage of several abilities (~5%). Cooldown ~2 min. Primary DPS cooldown.
- **Zenith** — Reduces Chi-spender cost and increases Blackout Kick's cooldown reduction; activating it resets Rising Sun Kick. Variable cooldown (~60–90s depending on talents). **Spell ID not confirmed via a fetched spell page — see Known Gaps.**
- **Touch of Death** (322109) — Single big-hit execute-style ability based on the Monk's max health. Cooldown ~3 min.
- **Celestial Conduit** — Channeled damage cooldown (Conduit of the Celestials hero tree). **Spell ID not confirmed — see Known Gaps.**
- **Strike of the Windlord** — Cone damage cooldown. **Spell ID not confirmed (Wowhead page returned 403) — see Known Gaps.**
- **Whirling Dragon Punch** — AoE cooldown ability when talented. **Spell ID not confirmed (403) — see Known Gaps.**

Newer Midnight rotational abilities named by sources (not yet ID-confirmed): **Slicing Winds**, **Rushing Wind Kick**. See Known Gaps.

Key passive: **Combo Strikes** (mastery) — repeating the same ability back-to-back loses damage; alternate abilities every global.

## Rotation / Priority

> This is **logical priority ordering**, not a DPS benchmark. Exact sequencing shifts with hero talent choice (Shado-Pan vs Conduit of the Celestials) and talent setup. RaidLens should not flag a player for deviating from this list — use it only as context.

**Opener (single target, with cooldowns; per Method, Conduit of the Celestials):**
1. Slicing Winds (precast)
2. Tiger Palm
3. (trinket / on-use, e.g. Algeth'ar Puzzle Box-style)
4. Invoke Xuen, the White Tiger
5. Zenith
6. Strike of the Windlord
7. Fists of Fury
8. Rising Sun Kick
9. Fists of Fury (on reset)
10. Whirling Dragon Punch (when available)

**Single-target sustained priority (conceptual):**
- Touch of Death on cooldown
- Whirling Dragon Punch when available
- Strike of the Windlord on cooldown
- Fists of Fury on cooldown
- Rising Sun Kick on cooldown
- Spinning Crane Kick with a Dance of Chi-Ji proc
- Blackout Kick to spend Chi and reduce cooldowns
- Tiger Palm to generate Chi / avoid Energy capping
- Respect Combo Strikes (never repeat the same ability consecutively)

**AoE priority (conceptual):**
- Largely the same buttons, but **Spinning Crane Kick** (especially with Dance of Chi-Ji) and front-cone/AoE abilities (Fists of Fury, Whirling Dragon Punch, Strike of the Windlord) are weighted higher than single-target filler.

## Defensives

Windwalker's defensives are **all self-only**. For RaidLens, the question is always: *was a defensive available and unused during a lethal or near-lethal hit?*

- **Touch of Karma** (122470) — Cooldown ~1.5 min. Places an absorb shield based on the Monk's max health (and redirects absorbed damage to a target). ~10s duration.
  - *RaidLens usage:* The signature Windwalker defensive. If a player took a large avoidable or telegraphed hit (or died to a known damage spike) with Touch of Karma off cooldown, that is a defensive-usage flag. A ~1.5 min cooldown means it should be available for most scripted raid damage events.

- **Fortifying Brew** (115203) — Base cooldown ~6 min (often reduced by talents). Reduces all damage taken and increases max health for the duration.
  - *RaidLens usage:* The strongest single mitigation button. Expect it on the biggest scripted raid-wide hits or tank-buster-adjacent moments. Because the base cooldown is long, do not flag it as "unused" on routine damage — reserve flags for major lethal windows. Note the cooldown may be shorter if talented; treat 6 min as the un-talented baseline.

- **Dampen Harm** (122278) — Cooldown ~2 min, ~10s duration. Adds damage absorption against incoming hits (scales with hit size).
  - *RaidLens usage:* A flexible ~2 min mitigation that should line up with predictable heavy hits. If a player died to a telegraphed big hit with Dampen Harm available, flag it. (Talent — may not be on every build; only flag if the player's logs show they have it.)

- **Diffuse Magic** (122783) — Cooldown ~1.5 min, ~6s duration. Reduces **magic** damage taken by ~60% (and can redirect debuffs back).
  - *RaidLens usage:* The dedicated magic-damage cooldown. For magic-school raid mechanics (most Dissonance-type / breath / nature-fire-shadow raid hits), this is the correct button. Flag if a player ate a large magic hit with Diffuse Magic available. (Talent — confirm the player has it before flagging.)

- **Expel Harm** (322101) — Cooldown ~15s, costs 15 Energy. Self-heal (scales with spell power / max health) that also deals a bit of damage.
  - *RaidLens usage:* Minor, frequent self-sustain rather than a panic button. Treat as a topping-off tool. Do **not** flag it as a "missed major defensive" — its short cooldown means it's a throughput/sustain consideration, not a survival cooldown for a single lethal hit.

- **Healing Elixir** (122281) — Talented passive/active self-heal (charges that heal a percentage of health). **Effect details not fully confirmed for the Midnight version — see Known Gaps.**
  - *RaidLens usage:* If present in the player's build, a small self-heal resource. Low priority for flagging.

> Survivability summary for the analyzer: Windwalker has **no passive raid CD and no external**. Its real "I'm about to take a big hit" buttons are **Touch of Karma**, **Dampen Harm** (if talented), **Diffuse Magic** (magic only, if talented), and **Fortifying Brew** (long CD, big hits only). Judge unused-defensive flags against availability at the timestamp of the lethal hit.

## Utility

- **Interrupt:** **Spear Hand Strike** (116705) — 15s cooldown, 5-yard range, interrupts the target's current cast and locks that school briefly. **This is Windwalker Monk's only interrupt.** Windwalker IS a raid-usable kicker — if a log shows a missed/uninterrupted cast that the assignment expected this Monk to catch, and Spear Hand Strike was off cooldown, that is a valid missed-interrupt flag.
  - Note: per RaidLens boss knowledge, group-wide missed interrupts (e.g. Fearsome Cry / Essence Bolt going off) are a group failure, not necessarily this player's individual avoidable damage.

- **Crowd control:**
  - **Leg Sweep** (119381) — AoE stun, ~3s, 1 min cooldown, 6-yard radius.
  - **Paralysis** (115078) — Single-target incapacitate, 20 Energy, ~45s cooldown, 20-yard range.
  - **Ring of Peace** (116844) — 45s cooldown; places a ring that knocks enemies out of an 8-yard area (~5s). Displacement/peel utility, not a stun.

- **Dispels:** **Detox** (218164) — removes **Poison** and **Disease** effects. For Windwalker this is effectively a **self-cleanse only** (Mistweaver gets the friendly-target dispel; Windwalker's Detox is the self version). It does **not** remove Magic or Curse. Do not expect a Windwalker to dispel other players.

- **Externals:** **None.** Windwalker cannot cast any damage reduction, absorb, or immunity on another player.

- **Raid buffs/debuffs:** **Mystic Touch** (113746) — 5% increased Physical damage taken on the target (the Monk class debuff). No raid-wide stat buff and no Lust.

- **Movement tools:** **Roll** (109132) / **Chi Torpedo** (talented variant with stacking speed), **Flying Serpent Kick** (forward dash), **Tiger's Lust** (116841) — +70% run speed ~6s, 30s cooldown, and breaks roots/snares, **Transcendence** (101643) — places a spirit you can swap places with (long duration, short reuse). Excellent overall mobility.

## Consumables and Enchants

> These come from secondary sources (Icy Veins guide + corroborating search results), not from individually fetched Wowhead item pages. Names appear to be genuine Midnight (12.0.5) items and are corroborated across two sources, but **no numeric item IDs are confirmed**, and item names should be re-verified against live Wowhead before relying on them. See Known Gaps.

- **Flask:** Flask of the Blood Knights
- **Potion (DPS):** Potion of Recklessness (Light's Potential listed as roughly equal depending on gear/talents)
- **Food:** Harandar Celebration (feast) for Agility; Royal Roast as a fallback
- **Weapon enchant:** Acuity of the Ren'dorei
- **Weapon oil:** Thalassian Phoenix Oil (single-source — treat as unconfirmed)
- **Augment rune:** Void-Touched Augment Rune (Agility)
- **Gems:** Indecipherable Eversong Diamond in the unique socket; secondary-stat "Flawless" gems (e.g. Flawless Masterful Peridot for Haste/Mastery, Flawless Quick Garnet for Crit/Haste) elsewhere

Stat priority and exact enchant-per-slot were not reliably confirmed (the Icy Veins enchant list appeared to mix in older-expansion enchant names) — see Known Gaps. For RaidLens, the safest checks are: flask present, food/feast buff present, weapon enchant present, augment rune optional.

## Notes and Known Gaps

- **Wowhead guide bodies not fetchable:** The overview and rotation guide pages on Wowhead returned only navigation/header content via fetch, and several individual Wowhead spell pages began returning HTTP 403 (rate-limit) partway through research. Where a Wowhead spell page could not be loaded, the SpellID is omitted and flagged below.
- **Unconfirmed SpellIDs (omitted from the body):**
  - **Zenith** — a search snippet showed 1249625, but the spell page itself was not fetched/confirmed, so the ID is intentionally omitted.
  - **Strike of the Windlord** — spell page returned 403; ID omitted.
  - **Whirling Dragon Punch** — spell page returned 403; ID omitted.
  - **Celestial Conduit** — ID not located on a fetched page; omitted.
  - **Slicing Winds** and **Rushing Wind Kick** — named by Method as current rotational abilities but not ID-confirmed; included as names only.
  - **Flying Serpent Kick**, **Chi Torpedo**, **Crackling Jade Lightning**, **Disable** — referenced but spell IDs not individually confirmed; omitted.
- **Healing Elixir (122281):** ID confirmed from the spell page, but its exact Midnight effect/charges were not fully verified. Treat effect description as approximate.
- **Fortifying Brew cooldown:** The fetched spell page showed ~6 min (likely the un-talented base). Many builds reduce this; treat 6 min as a baseline, not a guarantee.
- **Dampen Harm / Diffuse Magic / Healing Elixir are talents:** Not every Windwalker has them. RaidLens should confirm the ability appears in the player's log before flagging it as an "unused defensive."
- **Detox scope:** Confirmed it removes Poison/Disease. The "self-only for Windwalker" distinction is based on long-standing Monk design (Mistweaver gets the friendly dispel) and general guide framing, not a freshly fetched Windwalker-specific tooltip — re-verify if a dispel assignment depends on it.
- **Consumables/enchants:** Names are from Icy Veins + search corroboration, not fetched item pages; no item IDs confirmed. The per-slot enchant list from Icy Veins looked partly stale (older-expansion names), so only flask/potion/food/weapon-enchant names are treated as reasonably reliable.
- **Maintenance flag:** Re-verify all SpellIDs, cooldowns, talent availability, and consumable names after **any 12.x patch** (e.g. 12.0.7, which appeared as a PTR option on Wowhead during research). Spell IDs do not change once assigned, but tooltips, cooldowns, talent layouts, and consumable item names can.
