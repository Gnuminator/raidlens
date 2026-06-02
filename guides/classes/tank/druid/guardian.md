# Guardian Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/druid/guardian/rotation-cooldowns-pve-tank (JS-rendered; primary content extracted via Icy Veins mirror below)
> - https://www.icy-veins.com/wow/guardian-druid-pve-tank-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide
> - https://www.wowhead.com/spell=106839/skull-bash
> - https://www.wowhead.com/spell=22812/barkskin
> - https://www.wowhead.com/spell=61336/survival-instincts
> - https://www.wowhead.com/spell=102558/incarnation-guardian-of-ursoc
> - https://www.wowhead.com/spell=1126/mark-of-the-wild
> - https://www.wowhead.com/spell=20484/rebirth
> - https://www.wowhead.com/spell=102342/ironbark
> - https://www.wowhead.com/spell=22842/frenzied-regeneration
> - https://www.wowhead.com/spell=192081/ironfur
> - https://www.wowhead.com/spell=106898/stampeding-roar
> - https://www.wowhead.com/spell=99/incapacitating-roar
> - https://www.wowhead.com/spell=33917/mangle
> - https://www.wowhead.com/spell=77758/thrash
> - https://www.wowhead.com/spell=2908/soothe
> - https://www.wowhead.com/spell=200851/rage-of-the-sleeper

## Overview

Guardian Druid is the bear-form tank specialization of the Druid class. It is a Rage-based, armor-stacking tank with strong, consistent passive damage reduction and a stackable active mitigation button (Ironfur). Its survivability profile leans on layered, frequent mitigation rather than a single big cooldown wall: it has high effective health through armor, strong self-healing scaling (Mastery improves Frenzied Regeneration and related healing), and excellent uptime on short-cooldown defensives.

Core gameplay loop: build Rage with short-cooldown generators (Mangle and Thrash on cooldown), then spend Rage defensively on Ironfur (armor) and Frenzied Regeneration (self-heal), or offensively on Rage spenders. The Midnight rework pushed Guardian toward more active decision-making — pressing Ironfur when it is not needed is now a meaningful damage loss, so the spec wants Rage spent thoughtfully rather than dumped blindly.

Primary weakness: relatively low burst damage / slow damage ramp compared to some tanks, and the kit is most efficient against physical/melee damage; spiky magic damage must be pre-mitigated with cooldowns rather than absorbed reactively by armor.

## Role in Raid

- **Role:** Tank.
- **Raid buff:** Mark of the Wild (SpellID 1126) — raid-wide +3% Versatility, 100-yard radius, 1-hour duration. Every Druid spec provides this.
- **Battle resurrection:** Rebirth (SpellID 20484) — in-combat resurrection (counts against the raid's shared battle-res limit). Guardian provides a combat res.
- **Bloodlust/Heroism equivalent:** None. Guardian Druid does NOT bring a Bloodlust-type haste cooldown.
- **External defensive for allies:** Ironbark (SpellID 102342) — ally-targeted ~20% damage reduction, ~40-yard range, ~1.5-min cooldown. NOTE: Ironbark is primarily a Restoration Druid ability/talent; whether Guardian can access it in 12.0.5 depends on the talent tree. Treat its availability as talent-dependent — see Known Gaps.
- **Group defensive / utility:** Stampeding Roar (group movement-speed burst, below). Incapacitating Roar (AoE crowd control, below).
- **Mobility profile:** Good. Stampeding Roar gives the group a movement burst; Wild Charge (talent) is a gap-closer/repositioning tool; Travel Form / Dash give the Druid personal mobility. Useful for raid movement assignments.

## Abilities Reference

Core abilities (Bear Form unless noted). SpellIDs listed only where confirmed on a fetched Wowhead spell page.

- **Mangle** (SpellID 33917) — primary single-target threat/Rage generator; generates Rage on use. Used on cooldown.
- **Thrash** (SpellID 77758) — AoE bleed and threat; ~6s cooldown; generates 5 Rage; applies a bleed in an 8-yard radius. Used on cooldown for both single-target and AoE.
- **Ironfur** (SpellID 192081) — primary active mitigation. Costs 40 Rage, ~7s duration, increases Armor substantially (Agility-scaled). Stackable (multiple casts extend/refresh armor). Defensive Rage spender.
- **Frenzied Regeneration** (SpellID 22842) — Rage-cost self-heal over a few seconds; also increases healing taken. Short cooldown / chargeable (see Defensives).
- **Maul** — Rage spender for direct damage (offensive Rage dump). SpellID not confirmed this session.
- **Raze / Ravage** — Rage spenders for damage (talent/build dependent). SpellIDs not confirmed this session.
- **Swipe** — AoE filler. SpellID not confirmed this session.
- **Moonfire** — ranged/DoT filler, used in AoE builds (and single-target via talents like Red Moon / Twin Moonfire). SpellID not confirmed this session.
- **Growl** — single-target taunt. SpellID not confirmed this session.
- **Bristling Fur** — talent; generates Rage from damage taken. SpellID not confirmed this session.
- **Lunar Beam** — cooldown ability used in the rotation (damage + self-healing). SpellID not confirmed this session.

Key passive/proc references: Gore (Mangle Rage proc), Soul of the Forest (extra Mangle Rage), Mastery (improves armor/self-healing scaling). Talent names vary by build; see Known Gaps.

## Rotation / Priority

This is a logical priority order, NOT a DPS benchmark or a strict GCD-by-GCD list. Defensive Rage spending (Ironfur / Frenzied Regeneration) always takes precedence over offensive Rage spending when incoming damage warrants it.

**Opener (conceptual):** Pull with Mangle / Thrash to establish threat and start Rage generation; apply Thrash for the bleed; use Incarnation: Guardian of Ursoc on cooldown if the pull benefits; begin spending Rage as it accumulates (Ironfur if taking damage, otherwise offensive spender to avoid Rage capping).

**Sustained single-target priority:**
1. Thrash on cooldown
2. Mangle on cooldown
3. Lunar Beam on cooldown (if talented)
4. Red Moon / Moonfire upkeep (if talented)
5. Heart of the Wild window (if talented; see below)
6. Incarnation: Guardian of Ursoc on cooldown
7. Spend Rage — Ironfur defensively, or an offensive Rage spender (Raze/Maul) when survivability is fine, to avoid capping Rage
8. Swipe as filler

**AoE priority:** Same as above, but favor Twin Moonfire over Red Moon and use Moonfire as the filler instead of Swipe. Thrash's AoE bleed and Swipe handle multi-target threat.

Core principle: keep generators (Mangle/Thrash) on cooldown, never sit at capped Rage, and bias Rage toward Ironfur during damage and toward offensive spenders during downtime. In Midnight, over-pressing Ironfur with no incoming damage is a damage loss, not a free dump.

## Defensives

For each: the RaidLens usage note explains how to judge whether the cooldown was used well relative to a damage window.

- **Ironfur** (SpellID 192081) — 40 Rage, ~7s, large Armor increase; stackable. Primary active mitigation against physical damage.
  - RaidLens usage: For a physical-damage spike or active tanking window, Ironfur should be up (ideally stacked). A lethal physical hit taken with no Ironfur buff active and Rage available is a misuse. Because it is Rage-funded and short, expect very high uptime while actively tanking; near-zero uptime during a heavy tank-damage window is a flag. Less effective vs magic damage.

- **Frenzied Regeneration** (SpellID 22842) — Rage-cost self-heal over a few seconds, also boosts healing taken; short cooldown / charge-based. Reactive self-heal after taking a hit.
  - RaidLens usage: Should be pressed shortly after a large hit / during a health dip, especially when external healing is stretched. Dying with charges/Rage available and no recent Frenzied Regeneration cast is a flag.

- **Barkskin** (SpellID 22812) — 20% damage reduction (all schools), 8s duration, 1-minute cooldown, instant, no resource cost, usable in any form.
  - RaidLens usage: The most spammable major personal cooldown (1 min). It should cover predictable raid-damage or tank-damage windows. A lethal hit during a known, telegraphed damage event with Barkskin off cooldown and unused is a clear flag. Works against magic, so it is the go-to for magic spikes that armor doesn't help with.

- **Survival Instincts** (SpellID 61336) — large damage reduction over its duration; Guardian's biggest personal defensive; commonly has 2 charges (charge/recharge values not reliably confirmed this session — see Known Gaps).
  - RaidLens usage: Reserve for the largest tank-damage windows or unavoidable lethal hits. With (typically) 2 charges, the analyzer should expect it used on the biggest spikes. A near-death event or death during a major telegraphed hit with a charge available is a strong flag. Avoid judging overlap with other CDs as "good" — best practice is to spread defensives, not stack them.

- **Rage of the Sleeper** (SpellID 200851) — talent; 8s duration, 1-minute cooldown; all-school damage absorption plus 20% leech and 15% damage increase; a blended offensive/defensive cooldown.
  - RaidLens usage: Talent-dependent. If the player is running it, it should see frequent use (1-min CD) and ideally line up with damage windows for the absorb + leech. Long stretches of a tank-damage-heavy fight with Rage of the Sleeper unused (when talented) is a flag.

- **Incarnation: Guardian of Ursoc** (SpellID 102558) — 3-minute cooldown, ~30s duration; +30% max health, reduced Mangle/Thrash cooldowns, Mangle cleaves up to 3 targets, +25% damage, 15% leech, plus CC immunity.
  - RaidLens usage: Primarily a throughput/Rage-throughput cooldown, but the +30% max health and 15% leech are meaningful survivability. Should be used roughly on cooldown over a fight; check that big use windows align with phases needing extra threat/EHP. Very low usage count relative to fight length is a flag.

- **Heart of the Wild** (talent) — reworked in Midnight into a ~2-minute cooldown burst window (gives all Druid specs brief weaving). For Guardian it is mainly offensive but contributes leech/throughput.
  - RaidLens usage: Talent-dependent and primarily a damage/throughput button. Judge by usage frequency vs its cooldown if talented, not as a survival defensive. SpellID NOT confirmed — see Known Gaps.

External / group defensives:
- **Ironbark** (SpellID 102342) — ally-targeted ~20% DR, ~1.5-min CD (Restoration ability; Guardian access is talent-dependent — see Role in Raid and Known Gaps).
  - RaidLens usage: If available and talented, an unused Ironbark while a co-tank or key player takes a lethal hit can be a flag — but only treat this as Guardian-relevant if logs confirm the Guardian actually has the ability.

## Utility

- **Interrupt: Skull Bash (SpellID 106839)** — 15-second cooldown. This IS a true interrupt ("Interrupts Current Cast"). It is the Druid's only baseline raid-usable interrupt. RaidLens: a missed/required interrupt assigned to a Guardian should be checked against Skull Bash on a 15s cooldown. (Guardian has no second kick.)

- **Crowd control:**
  - Incapacitating Roar (SpellID 99) — AoE disorient ("Confuse") in a 10-yard radius, ~3s, 30-second cooldown. Breaks on damage (disorient).
  - Growl — single-target taunt (threat/taunt utility; SpellID not confirmed this session).
  - Mighty Bash / Typhoon and similar are talent-dependent and were not confirmed this session.

- **Dispels:**
  - Soothe (SpellID 2908) — removes Enrage effects from an enemy (offensive dispel), 10s cooldown, 40-yard range. Cannot be used while shapeshifted (must drop bear form to cast). Enrage-only; it does NOT cleanse magic/curse/poison from allies.
  - Guardian has no friendly Magic/Curse/Poison dispel by default (those are Restoration-side). Do not expect Guardian to dispel debuffs off raiders.

- **Battle resurrection:** Rebirth (SpellID 20484) — combat res, counts against the raid battle-res limit.

- **Raid buff:** Mark of the Wild (SpellID 1126) — +3% Versatility raid-wide.

- **Movement tools:**
  - Stampeding Roar (SpellID 106898) — +60% run speed to allies within 15 yards, 8s, 2-minute cooldown. Group movement burst.
  - Wild Charge (talent) — gap closer / repositioning (SpellID not confirmed this session).
  - Travel Form / Dash — personal mobility (SpellIDs not confirmed this session).

## Consumables and Enchants

The following come from live search summaries of Icy Veins / Method / Wowhead 12.0.5 Guardian pages. Item NAMES are reported as current; item IDs are NOT included because individual item pages were not fetched to confirm numeric IDs.

- **Flask:** Flask of the Blood Knights.
- **Combat/stat potion:** Draught of Rampant Abandon (noted to spawn void zones at the player's feet — positioning caution).
- **Health potion:** Silvermoon Health Potion (plus Warlock Healthstones when available).
- **Food:** Silvermoon Parade or Harandar Celebration feast (provide primary/secondary stats plus Stamina).
- **Gems:** Indecipherable Eversong Diamond (one socket) + Flawless Versatile Peridot (remaining sockets).
- **Enchants:** Not confirmed this session — see Known Gaps.

All item IDs unconfirmed; treat the above as names only.

## Notes and Known Gaps

- **Wowhead guide HTML did not render** through the fetch tool (JS-driven). Rotation/utility prose was sourced from Icy Veins 12.0.5 pages; all SpellIDs were independently confirmed on individual live Wowhead spell pages.
- **Survival Instincts (61336):** confirmed name + ID, but the spell-page parser returned dummy effect values rather than a clean damage-reduction % and recharge time. The 2-charge / large-DR / recharge figures are from general spec knowledge and the Icy Veins guide ("our biggest defensive… 2 baseline charges"), NOT confirmed numerically this session. Re-verify exact DR %, duration, and recharge.
- **Heart of the Wild SpellID NOT confirmed.** The page at spell=319454 resolved to "Call of the Elder Druid," not Heart of the Wild, so that ID was deliberately omitted. Re-verify the correct Midnight Heart of the Wild SpellID and cooldown.
- **Ironbark (102342) is a Restoration ability.** Its availability to Guardian in 12.0.5 is talent-dependent and was not confirmed for Guardian specifically. Do not assume a Guardian has Ironbark without log confirmation.
- **Unconfirmed SpellIDs (omitted intentionally):** Maul, Raze/Ravage, Swipe, Moonfire, Growl, Bristling Fur, Lunar Beam, Wild Charge, Travel Form, Dash, Mighty Bash, Typhoon. Names are correct to spec knowledge; numeric IDs were not fetched this session.
- **Talent build / import string / SimC APL:** Not sourced. No user-provided SimC profile exists for this spec. Specific talent loadouts and exact rotational tuning (e.g., Red Moon vs Twin Moonfire conditions, hero tree choices like Druid of the Claw vs Wildstalker) were not fully captured.
- **Consumable/enchant item IDs:** Names from live search summaries; numeric item IDs unconfirmed (individual item pages not fetched). Enchant recommendations specifically not captured.
- **Midnight rework caveat:** Guardian received a rework and talent shuffle in Midnight; Heart of the Wild is now a ~2-min burst CD. Some interactions are still settling across 12.x.
- **Maintenance flag:** Re-verify all of the above (especially Survival Instincts numbers, Heart of the Wild ID, and Ironbark availability) after ANY 12.x patch. SpellIDs of confirmed abilities should remain stable; cooldowns, charges, and talent availability can change between patches.
