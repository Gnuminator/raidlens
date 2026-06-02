# Augmentation Evoker — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/spell=351338/quell
> - https://www.wowhead.com/spell=363916/obsidian-scales
> - https://www.wowhead.com/spell=395152/ebon-might
> - https://www.wowhead.com/spell=409311/prescience
> - https://www.wowhead.com/spell=403631/breath-of-eons
> - https://www.icy-veins.com/wow/augmentation-evoker-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/augmentation-evoker-pve-dps-rotation-cooldowns-abilities
> - Search-confirmed Wowhead spell pages: Renewing Blaze (374348), Zephyr (374227), Fury of the Aspects (390386), Cauterizing Flame (374251), Verdant Embrace (361195), Sleep Walk (360806), Source of Magic (369459), Rescue (370665), Hover (358267), Time Spiral (374968)

---

## Overview

Augmentation Evoker is a ranged caster DPS specialization built around **support**: instead of contributing most of its damage through its own abilities, it amplifies the damage of its allies through buffs and a stored-damage cooldown. Augmentation wears mail, uses Intellect, and operates at mid-range (its empowered spells and Living Flame have range; it is not a melee spec).

Core gameplay loop:
- Maintain **Ebon Might** (a primary-stat amplifier) on the group as close to 100% uptime as possible.
- Keep **Prescience** (a critical strike buff) rolling on allies, prioritizing those with their own cooldowns active.
- Use empowered spells (**Fire Breath**, **Upheaval**) and the Essence spender **Eruption** both to do personal damage and to extend Ebon Might via the Sands of Time mechanic.
- Press **Breath of Eons** roughly every 2 minutes, ideally lined up with allied burst windows, since it stores and then detonates a portion of ally damage.

In Midnight, a major change is that **Ebon Might is now raid/group-wide for all DPS** rather than targeting up to 4 players. This made the spec considerably easier to play and far less dependent on micro-managing specific allied cooldown timings.

Damage/survivability profile: Augmentation has strong personal survivability for a DPS (notably a two-charge 30% damage reduction). Its primary weakness is that a large fraction of its raid value is **conditional on allies performing** — if its buffs land on low-output players, or if Breath of Eons is poorly timed, the spec's contribution collapses even when the Evoker plays its own buttons correctly. It is also globals-hungry: dropping Ebon Might or Prescience uptime is the most common failure mode.

---

## Role in Raid

- **Role:** Ranged DPS (support DPS). Not a healer, not a tank.
- **Bloodlust-equivalent:** YES — **Fury of the Aspects** (spell 390386) grants 30% Haste to all party and raid members for 40 seconds; affected allies become Exhausted and cannot benefit again for 10 minutes. This is a true Bloodlust/Heroism/Time Warp-class effect.
- **Battle res:** NO. Evoker has no combat resurrection.
- **Raid buffs/debuffs it brings:**
  - **Ebon Might** (395152) — shares a percentage of the Evoker's primary stat with allied DPS and increases the Evoker's own damage. Group-wide in Midnight.
  - **Prescience** (409311) — grants an ally increased critical strike chance.
  - **Breath of Eons** (403631) — debuffs enemies, storing a portion of allied damage and then detonating it.
  - **Blessing of the Bronze** — reduces the cooldown of each class's designated movement ability (group utility).
  - **Blistering Scales** — single-target armor buff applied to a tank (~20% of the Evoker's armor) with explosive damage returns.
  - **Source of Magic** (369459) — applied to a healer; returns mana when the Evoker casts empowered spells.
- **Group defensives / externals:**
  - **Zephyr** (374227) — raid-adjacent AoE damage reduction (see Defensives).
  - **Rescue** (370665) — repositioning external for an endangered ally.
  - **Time Spiral** (374968) — grants the group an extra movement-ability cast.
- **Mobility:** Good. **Hover** (358267) allows casting while moving; **Deep Breath** and the talented Breath of Eons provide a directional dash; Rescue and Time Spiral add group mobility.

---

## Abilities Reference

Confirmed spell IDs are shown in parentheses. Where an ID is not listed, it could not be confirmed against a live source and is intentionally omitted (see Known Gaps).

**Buffs / support:**
- **Ebon Might** (395152) — Shares primary stat with allied DPS and buffs own damage. Base duration ~10 seconds; extended by empowered/Essence spends (Sands of Time). Maintain near-100% uptime.
- **Prescience** (409311) — Grants an ally increased critical strike chance (3%, raised to 4% with the Nozdormu Adept talent) for ~18 seconds. Up to two charges; prefers DPS allies with cooldowns active.
- **Blistering Scales** — Single-target tank armor buff (~20% of Evoker's armor) with explosive melee returns.
- **Source of Magic** (369459) — Long-duration healer buff; restores healer mana per empower level when the Evoker casts empowered spells.
- **Blessing of the Bronze** — Group movement-ability cooldown reduction.

**Major cooldown:**
- **Breath of Eons** (403631) — 2-minute cooldown. Replaces/augments Deep Breath. Applies a debuff to enemies storing ~15% of damage dealt by allies affected by Ebon Might (stored amount scales down as Ebon Might hits more allies), detonating when the debuff expires. Press roughly on cooldown, ideally with ally burst.

**Offensive abilities (IDs unconfirmed — omitted):**
- **Eruption** — Primary Essence spender; main personal damage button. Casting it during Ebon Might extends Ebon Might.
- **Fire Breath** — Empowered cone; applies a damage-over-time effect.
- **Upheaval** — Empowered burst with a knock-up and AoE scaling per empower stage.
- **Living Flame** — Filler; damages an enemy or heals an ally.
- **Azure Strike** — Instant cleave filler (hits 2 targets, more with talents).

**Key passives / mechanics:**
- **Sands of Time** — Empowered and Essence-spending casts extend Ebon Might's duration.
- **Essence Burst** — Proc that makes the next Essence spender free.

---

## Rotation / Priority

> This is a **logical priority list**, not a DPS benchmark or a frame-perfect APL. RaidLens should treat it as "what good play looks like," not a scoring rubric.

**Opener (conceptual):**
1. Pre-pull: **Blistering Scales** on the main tank; pre-cast a filler at ~1.5s before pull.
2. **Ebon Might** → two **Prescience** casts.
3. **Breath of Eons** (with Deep Breath if talented) lined up with potion/trinkets.
4. Empowered **Fire Breath** (max rank) → **Upheaval** → cooldown-acceleration talents (Time Skip) → additional Prescience/Fire Breath/Upheaval → **Eruption** spends, then settle into sustained priority.

**Sustained single-target priority:**
1. Refresh **Ebon Might** if it has ~4 seconds or less remaining (never let it drop).
2. **Breath of Eons** on cooldown (aligned with ally burst where possible).
3. **Prescience** on cooldown, managing 2 charges to avoid overcapping.
4. Empowered **Fire Breath** and **Upheaval** at their highest ranks.
5. **Eruption** when Ebon Might is active / when Essence Burst is available.
6. **Azure Strike** (single-target) / **Living Flame** as filler.

**AoE priority:** Mirrors single-target. Cooldown order is identical; fillers shift toward **Living Flame** and **Azure Strike**, and empowered spells gain value from their AoE scaling. Ebon Might and Prescience uptime remain the top priority.

The single most important thing to judge in a log: **Ebon Might uptime**. A well-played Augmentation maintains it near 100%; large gaps indicate a problem.

---

## Defensives

Use the "RaidLens usage" note on each to judge whether a defensive was available and should have been used during a lethal or heavy-damage window.

- **Obsidian Scales** (363916) — 30% damage reduction for 12 seconds. **2 charges** on a **90-second** cooldown (two charges come from the Obsidian Bulwark talent; without it, treat as a single 90s charge — flag if talent state is unknown).
  - *RaidLens usage:* This is the primary personal defensive. For any large avoidable or scripted hit the player took lethal/near-lethal damage from, check whether an Obsidian Scales charge was available (it almost always is, given two charges on a short cooldown). An unused charge during a death is a strong signal of a missed defensive.

- **Renewing Blaze** (374348) — In Midnight this is a **talent that upgrades Obsidian Scales**: it causes Obsidian Scales to heal the Evoker over 8 seconds equal to the damage it prevented. It is not a separate button in this design.
  - *RaidLens usage:* Treat as a property of Obsidian Scales rather than an independent cooldown. Do not flag a separate "Renewing Blaze unused."

- **Zephyr** (374227) — Lifts the Evoker and up to 4 nearest allies, reducing AoE damage taken by 20% and increasing movement speed by 30% for 8 seconds.
  - *RaidLens usage:* A short-range group defensive. For a known raid-wide AoE pulse where the Evoker and nearby allies took heavy damage, check if Zephyr was used. Note its cooldown was not confirmed from a live source — do not assert availability with certainty (see Known Gaps).

- **Verdant Embrace** (361195) — Strong single-target heal that leaps the Evoker to the target (or self-heals). Primarily a healing/utility tool but usable as emergency self-sustain.
  - *RaidLens usage:* Minor self-defensive. Only relevant if the Evoker died with it available during a survivable-with-a-heal moment; do not weight heavily.

> Cooldown values not stated above (Zephyr, Verdant Embrace) were not confirmed from a live source this session — see Known Gaps before treating them as hard availability windows.

---

## Utility

**Interrupt:**
- **Quell** (351338) — **20-second cooldown**, 6-second school lockout. This is the Evoker's interrupt and Augmentation's **only** raid-usable kick. There is no second interrupt button.
  - *RaidLens usage:* Augmentation HAS a real, frequently-available interrupt (20s CD). A missed interrupt on an interruptible cast is legitimately flaggable for this spec — unlike many healers/some DPS that lack a kick entirely. Do not excuse missed interrupts on the basis of "no interrupt available."

**Crowd control:**
- **Sleep Walk** (360806) — Disorients an enemy for ~20s, pulling it toward the Evoker; damage can break it. Single-target CC.
- **Tail Swipe** / **Wing Buffet** — Knockback CC (cone behind / cone in front). IDs unconfirmed.

**Dispels:**
- **Cauterizing Flame** (374251) — Targets an ally; removes **Bleed, Poison, Curse, and Disease** effects and heals on a successful removal. This is a broad single-target dispel usable on allies.
- **Expunge** — Removes **Poison** effects from an ally. ID unconfirmed.
- Note: Augmentation does **not** dispel Magic on allies (no offensive/defensive Magic dispel confirmed for the DPS spec). Treat enrage/magic dispel duties as not belonging to this spec.

**Externals / group utility:**
- **Rescue** (370665) — Flies to an ally and carries them to a target location; clears movement-impairing effects from both. Positioning external.
- **Time Spiral** (374968) — Grants the Evoker and nearby allies one bonus cast of their major movement ability within 10 seconds. Cooldown reported as ~2 minutes by guides (not confirmed on a live spell page — see Known Gaps).
- **Source of Magic** (369459) — Healer mana-return buff.
- **Blistering Scales** — Tank armor external.

**Raid buffs/debuffs:** Ebon Might (395152), Prescience (409311), Breath of Eons (403631), Blessing of the Bronze, Fury of the Aspects (390386, Bloodlust-equivalent).

**Movement tools:**
- **Hover** (358267) — Cast-while-moving + 30% movement speed for ~6s (does not affect empowered spells).
- **Deep Breath / Breath of Eons** — Directional dash that also deals damage.
- **Rescue**, **Time Spiral** — see above.

---

## Consumables and Enchants

Augmentation uses **Intellect** as its primary stat (Intellect flasks, Intellect food, Intellect-scaling gems/enchants), consistent with all caster specs. Specific Midnight 12.0.5 consumable item names, enchant names, and item IDs were **not** confirmed from a live source this session and are intentionally omitted rather than guessed. The Wowhead enchants/gems/consumables sub-page and BiS page should be consulted for exact current items before relying on this section.

See Known Gaps.

---

## Notes and Known Gaps

Unconfirmed facts (omitted IDs / values rather than guessed):
- **Offensive ability spell IDs** — Eruption, Fire Breath, Upheaval, Living Flame, Azure Strike: names confirmed from Icy Veins, but exact spell IDs were not confirmed on a live Wowhead spell page; IDs omitted.
- **Expunge** spell ID — not confirmed; omitted.
- **Tail Swipe / Wing Buffet** spell IDs — not confirmed; omitted.
- **Blistering Scales**, **Blessing of the Bronze**, **Sands of Time**, **Essence Burst** spell IDs — not confirmed; omitted.
- **Zephyr cooldown** — effect/spell ID (374227) confirmed, but cooldown not confirmed from a live source. Do not treat as a hard availability window.
- **Verdant Embrace cooldown** — spell ID (361195) confirmed; cooldown not confirmed.
- **Time Spiral cooldown** — spell ID (374968) confirmed; ~2 min cooldown is from guide text, not a live spell page.
- **Obsidian Scales two-charge state** — the 2-charge / 90s value depends on the Obsidian Bulwark talent being taken (standard in raid builds per guides). If a log shows only one charge behavior, the talent may be untaken.
- **Renewing Blaze design** — confirmed as a talent that upgrades Obsidian Scales in Midnight (not a standalone button). Spell ID 374348 confirmed.
- **Ebon Might / Prescience exact stat percentages** — values cited (16% primary, 20% own-damage; 3%/4% crit) come from guide text; treat as approximate and re-verify on patch.
- **Consumables and Enchants** — no live source for specific 12.0.5 item names/IDs was fetched; section is conceptual only (Intellect-based).

Confirmed spell IDs (each verified on a live Wowhead spell page title/URL or fetched directly):
Quell 351338, Obsidian Scales 363916, Ebon Might 395152, Prescience 409311, Breath of Eons 403631, Renewing Blaze 374348, Zephyr 374227, Fury of the Aspects 390386, Cauterizing Flame 374251, Verdant Embrace 361195, Sleep Walk 360806, Source of Magic 369459, Rescue 370665, Hover 358267, Time Spiral 374968.

**Maintenance flag:** Re-verify all spell IDs, cooldowns, and the Ebon Might / Breath of Eons mechanics after ANY 12.x patch. Midnight-era support tuning (Ebon Might scaling, Breath of Eons stored-damage percentage) is frequently adjusted in hotfixes.
