# Survival Hunter — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched June 2026):
> - https://www.icy-veins.com/wow/survival-hunter-pve-dps-guide
> - https://www.icy-veins.com/wow/survival-hunter-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/survival-hunter-pve-dps-spell-summary
> - https://www.wowhead.com/spell=187707/muzzle
> - https://www.wowhead.com/spell=186265/aspect-of-the-turtle
> - https://www.wowhead.com/spell=264735/survival-of-the-fittest
> - https://www.wowhead.com/spell=109304/exhilaration
> - https://www.wowhead.com/spell=257284/hunters-mark
> - Web search aggregations of wowhead.com and icy-veins.com 12.0.5 Survival Hunter pages

## Overview

Survival is the Hunter's melee DPS specialization. It is a focus-based melee spec built around a builder/spender loop and the **Tip of the Spear** mechanic: casting **Kill Command** grants Tip of the Spear stacks that empower the spec's hardest-hitting abilities (Wildfire Bomb, Raptor Strike, etc.). The gameplay loop is to spend focus without overcapping, keep Kill Command on cooldown to fuel Tip of the Spear, and pool the empowerment into the biggest hits and burst windows.

Damage profile: a "jack-of-all-trades" melee with strong single-target and AoE in the same build. It deals a mix of physical and fire/bomb damage and relies on its periodic bombs plus the **Takedown** burst window. In patch 12.0.5 the spec plays the **Pack Leader** hero talent tree (a dual-wield-leaning build was buffed into the standard playstyle).

Survivability profile: strong **active** defensives, weak passive mitigation. The spec has good personal cooldowns (Aspect of the Turtle, Survival of the Fittest, Exhilaration) but takes consistent damage poorly if those are unavailable — it must actively press buttons to survive damage windows. Being melee, it is also more exposed to floor/cleave mechanics than ranged specs.

Primary weakness: as a melee with limited passive mitigation, it is vulnerable in sustained-damage encounters and to mechanics that punish melee uptime; it brings no raid cooldown, no Bloodlust, and no battle res.

## Role in Raid

- **Role:** Melee DPS.
- **Raid buff/debuff it brings:** **Hunter's Mark** (SpellID 257284) — applies a debuff to one target increasing its damage taken by **3%**. This is the spec's main raid contribution and effectively guarantees a Hunter slot. Only one target can carry Hunter's Mark at a time.
- **Bloodlust-equivalent:** None. Survival Hunter does **not** provide Bloodlust/Heroism. (Hunters can provide it only via a pet that has the relevant ability — verify in-log per the actual pet; this is not a spec guarantee. See Known Gaps.)
- **Battle res:** None.
- **Group defensives / externals:** None. Survival has no raid-wide damage reduction and no external defensive it can cast on allies. **Misdirection** redirects threat to a target (utility/threat tool, not a defensive).
- **Mobility:** Strong. No stationary casts. Tools include **Disengage** (backward leap), **Harpoon** (gap-closer to target), **Aspect of the Cheetah** (movement speed), and **Aspect of the Eagle** (lets melee abilities be used at range for a window). **Takedown** can also close distance.

## Abilities Reference

Confirmed SpellIDs are noted. Where an ID was not confirmable on a fetched live source, the ability is listed by name only (see Known Gaps).

Core / rotational:
- **Kill Command** — short-cooldown focus spender that grants **Tip of the Spear** stacks; the engine of the rotation. (~6s cooldown per Icy Veins; ID unconfirmed.)
- **Wildfire Bomb** — periodic bomb, charge-based (~18s recharge, 2 charges per Icy Veins); core AoE/single-target damage. (ID unconfirmed.)
- **Raptor Strike** — primary melee focus spender (~30 focus). With the Raptor Swipe apex talent it can convert into a cleaving **Raptor Swipe**. (ID unconfirmed.)
- **Takedown** — primary offensive cooldown. Deals heavy damage, then increases all damage by 20% for 10s and doubles auto-attack speed. ~90s cooldown, reducible to ~60s with the Savagery talent. (ID unconfirmed.)
- **Boomstick** — rotational damage ability used in the opener/burst. (ID unconfirmed.)
- **Flamefang Pitch** — ~1 min cooldown damage ability (per Icy Veins). (ID unconfirmed.)
- **Hunter's Mark** — debuff, +3% damage taken on the target. **SpellID 257284.**

Key passives/procs:
- **Tip of the Spear** — buff granted by Kill Command (2 stacks per Icy Veins) that empowers the next abilities. Central to the priority. (ID unconfirmed.)

> Note: Several Survival ability SpellIDs (Kill Command, Wildfire Bomb, Raptor Strike, Takedown, Boomstick) were described on fetched pages but their exact numeric IDs were not shown on the sources loaded, so they are intentionally omitted rather than guessed.

## Rotation / Priority

This is the **logical priority** of the spec, not a DPS benchmark or a strict GCD-by-GCD script. Exact ordering shifts with talents, Tip of the Spear stacks, and focus level.

**Opener (single-target, per Icy Veins):**
1. Pre-apply **Hunter's Mark** and pre-cast **Wildfire Bomb**.
2. **Kill Command** (build Tip of the Spear).
3. **Takedown** (burst window: +20% damage, 10s).
4. **Wildfire Bomb** → **Kill Command** → **Boomstick** → **Kill Command**, spending Tip of the Spear into empowered hits.

**Sustained single-target priority (conceptual):**
- Keep **Hunter's Mark** up on the target.
- Use **Kill Command** on cooldown to keep generating Tip of the Spear; avoid wasting its charges.
- Use **Takedown** on cooldown (align with burst/lust where possible).
- Keep **Wildfire Bomb** charges rolling; do not overcap charges.
- Spend Tip of the Spear into your hardest hits (empowered Wildfire Bomb / Raptor Strike).
- Spend focus with **Raptor Strike** to avoid focus overcap; do not overcap focus.

**AoE priority (conceptual):**
- **Wildfire Bomb** is a primary AoE source — keep it on cooldown across the pack.
- **Volley** (when talented) for sustained AoE.
- **Kill Command** to maintain Tip of the Spear.
- **Raptor Swipe** (via the Raptor Swipe apex talent) cleaves to nearby targets.
- Maintain Tip of the Spear empowerment on AoE hits and avoid focus overcap.

## Defensives

Each entry includes a **RaidLens usage** note: how to judge from a log whether the defensive was used appropriately during a damage window.

- **Aspect of the Turtle** — **SpellID 186265.** Cooldown **3 minutes** (base; Icy Veins lists ~2.5 min, likely talent-reduced — see Known Gaps). Duration **8s**. Reduces all damage taken by **30%** (base) and makes the Hunter immune to most attacks/interrupts/silences, but the Hunter **cannot attack** while it is active.
  - **RaidLens usage:** This is the spec's strongest panic button. For a lethal/heavy raid-wide hit, check whether Turtle was up (or available on cooldown) at the hit timestamp. Because it stops the Hunter attacking, expect it on big scary windows, not minor ticks. If the Hunter died to a telegraphed mechanic with Turtle off cooldown and unused, flag it.

- **Survival of the Fittest** — **SpellID 264735.** Duration **6s**. Reduces all damage taken (Hunter and pet) by **30%**. Icy Veins lists it as ~1.5 min cooldown with 2 charges (talent-dependent); the Wowhead spell page shows no base cooldown on the spell itself — treat the cooldown/charges as talent-driven (see Known Gaps).
  - **RaidLens usage:** The bread-and-butter rotational defensive. It does not stop attacking, so a competent Survival Hunter should cover most predictable damage windows with it. If a player ate a known periodic raid hit with Survival of the Fittest available, flag it.

- **Exhilaration** — **SpellID 109304.** Cooldown **2 minutes** (base; talents can lower it). Heals the Hunter for **30%** of max health (and pet for a large amount).
  - **RaidLens usage:** This is a self-heal, not damage reduction. Judge it as recovery after taking heavy damage — if the player dropped low and died slowly (e.g. over several seconds) with Exhilaration available, that is a missed self-save. It will not prevent a one-shot, so do not flag it against burst lethal hits.

- **Aspect of the Cheetah** — movement speed cooldown (~3 min per Icy Veins; ID unconfirmed). Primarily mobility, but can be used to escape a bad spot.
  - **RaidLens usage:** Treat as mobility, not a true defensive. Only relevant if escaping a ground effect was the survival play.

- **Pet / Mend Pet / Feign Death** — Hunters have **Feign Death** (drops threat / can clear some mechanics) and pet sustain. These are utility-survival tools rather than personal mitigation.
  - **RaidLens usage:** Feign Death does not reduce a hit's damage but can drop the Hunter from a threat/target mechanic. Only relevant on encounters with such mechanics. (Feign Death SpellID unconfirmed — see Known Gaps.)

## Utility

- **Interrupt:** **Muzzle** — **SpellID 187707.** Cooldown **15 seconds.** Range **5 yards** (melee). This is the Survival Hunter's interrupt and is **specific to Survival** (Beast Mastery and Marksmanship use **Counter Shot** in the same node instead — those are ranged kicks and are NOT what Survival has). Muzzle is a usable raid interrupt. On a successful interrupt in 12.0.5 it also grants focus. **For RaidLens: Survival's only interrupt is Muzzle (187707), 15s CD, 5yd range. A missed kick on an interruptible cast where Muzzle was off cooldown is a flaggable miss.** Note the 5-yard range — a Survival Hunter out of melee (e.g. using Aspect of the Eagle at range, or kited away) physically cannot Muzzle, which can excuse a missed interrupt.

- **Crowd control:**
  - **Intimidation** — pet stun, ~1 min cooldown (reducible to ~40s via talent per the overview page).
  - **Binding Shot** — area root/stun on a tethered zone (cooldown not confirmed on fetched sources).
  - **Freezing Trap** — ranged incapacitate, ~30s cooldown (Icy Veins).
  - **Tar Trap** — ground slow, ~30s cooldown (Icy Veins).

- **Dispels:** Survival Hunter has **no friendly dispel** of magic/curse/poison/disease. (Hunters can use **Tranquilizing Shot** to remove Enrage/Magic effects from **enemies** — i.e. an offensive/enemy dispel, not an ally cleanse. Verify presence/ID per log — see Known Gaps.) The spec cannot cleanse allies.

- **Externals:** None that benefit allies' survivability. **Misdirection** (~30s cooldown per Icy Veins) redirects the Hunter's threat to a chosen target — a threat tool, not a defensive external.

- **Raid buffs/debuffs:** **Hunter's Mark** (257284), +3% damage taken on one target. No raid-wide buff, no Bloodlust, no battle res.

- **Movement tools:** **Disengage** (~20s CD, backward leap), **Harpoon** (~20s CD, gap-closer), **Aspect of the Cheetah** (speed), **Aspect of the Eagle** (melee abilities usable at range for a window).

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 gems/enchants/consumables page (via search aggregation). Names only — item IDs were not confirmed on a fetched page and are intentionally omitted.

- **Flask:** Flask of the Magisters (treated as a swappable secondary-stat choice; any of the 4 secondary-stat flasks can be optimal depending on gear).
- **Potions:** Light's Potential (safe primary-stat potion) or Draught of Rampant Abandon (higher output, but spawns void zones forcing movement).
- **Food:** Feast food from a Harandar Celebration / Silvermoon Parade feast; best non-feast is Hearty Royal Roast (the "Hearty" prefix makes it persist through death).
- **Gems:** Indecipherable Eversong Diamond in one socket, Flawless Deadly Amethyst in the rest.
- **Augment rune:** Void-Touched Augment Rune.
- **Enchants:** Specific weapon/armor enchant names were **not** confirmed on a fetched page — omitted. See Known Gaps.

## Notes and Known Gaps

Unconfirmed facts (flag for re-verification):
- **SpellIDs not confirmed** on a fetched live source, intentionally omitted: Kill Command, Wildfire Bomb, Raptor Strike / Raptor Swipe, Takedown, Boomstick, Flamefang Pitch, Volley, Tip of the Spear (buff), Intimidation, Binding Shot, Freezing Trap, Tar Trap, Disengage, Harpoon, Aspect of the Cheetah, Aspect of the Eagle, Misdirection, Feign Death, Tranquilizing Shot. Only confirmed IDs are: Hunter's Mark (257284), Muzzle (187707), Aspect of the Turtle (186265), Survival of the Fittest (264735), Exhilaration (109304).
- **Aspect of the Turtle cooldown discrepancy:** Wowhead spell page shows **3 minutes**; Icy Veins 12.0.5 lists **~2.5 minutes**. The difference is almost certainly a talent/Improved Aspect of the Turtle reduction. RaidLens should treat ~2.5–3 min as the availability window.
- **Survival of the Fittest cooldown/charges:** Wowhead spell page (264735) shows the base aura (6s, 30% DR) with no listed base cooldown; Icy Veins lists **~1.5 min, 2 charges**. The charges/cooldown appear talent-driven. Verify against the live talent build in use.
- **Aspect of the Turtle damage reduction:** base is **30%** (Wowhead). The overview page mentioned a **50%** value "with talents" (Improved Aspect of the Turtle, SpellID 1258485 referenced in search but not fetched/confirmed). Treat 30% as baseline; higher if talented.
- **Bloodlust:** Survival does not provide it as a spec. A Hunter pet (e.g. a pet family with a Lust ability) can, but that depends on the equipped pet, not the spec — confirm per log, do not assume.
- **Tranquilizing Shot:** Hunters historically have an enemy Enrage/Magic dispel. Presence and SpellID in 12.0.5 were not confirmed on a fetched page — verify before relying on it. It is an **enemy** dispel, never an ally cleanse.
- **Enchants:** Specific 12.0.5 enchant names/item IDs were not confirmed (the dedicated Icy Veins gear-enchants URL 404'd); only gems, flask, food, potions, and augment rune were sourced via search.
- **Talents / hero talents:** Survival runs the **Pack Leader** hero tree in 12.0.5 (per search). No talent import string or SimC APL was provided or sourced — none is included here by design.
- **Maintenance flag:** Re-verify all of the above (especially cooldowns, the 3% Hunter's Mark value, defensive percentages, and which hero tree is current) after **any 12.x patch**, as tuning and talent nodes change between patches.
