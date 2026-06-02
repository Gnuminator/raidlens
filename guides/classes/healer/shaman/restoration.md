# Restoration Shaman — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/guide/classes/shaman/restoration/overview-pve-healer (metadata only; body did not render)
> - https://www.icy-veins.com/wow/restoration-shaman-pve-healing-guide
> - https://www.icy-veins.com/wow/restoration-shaman-pve-healing-rotation-cooldowns-abilities
> - https://www.method.gg/guides/restoration-shaman/playstyle-and-rotation
> - https://www.wowhead.com/spell=57994/wind-shear
> - https://www.wowhead.com/spell=98008/spirit-link-totem
> - https://www.wowhead.com/spell=108280/healing-tide-totem
> - https://www.wowhead.com/spell=108271/astral-shift
> - https://www.wowhead.com/spell=61295/riptide
> - https://www.wowhead.com/spell=73920/healing-rain
> - https://www.wowhead.com/spell=79206/spiritwalkers-grace
> - https://www.wowhead.com/spell=2825/bloodlust
> - https://www.wowhead.com/spell=32182/heroism
> - https://www.wowhead.com/spell=462854/skyfury
> - https://www.wowhead.com/spell=51886/cleanse-spirit
> - https://www.wowhead.com/spell=77130/purify-spirit
> - https://www.wowhead.com/spell=20608/reincarnation
> - https://www.wowhead.com/spell=8143/tremor-totem
> - https://www.wowhead.com/spell=114049/ascendance
> - https://www.wowhead.com/spell=58875/spirit-walk
> - https://www.wowhead.com/spell=51490/thunderstorm

## Overview

Restoration Shaman is a flexible raid healer that excels at healing clumped or stacked groups. Its core gameplay loop revolves around keeping efficient cooldown-based spells rolling (Riptide, Healing Rain, Unleash Life, Healing Stream Totem) and filling with cast-time spells (Healing Wave for single target, Chain Heal for grouped targets) when needed. The spec layers totem-based healing and damage-redistribution effects on top of standard heals.

The Midnight (12.0.5) redesign deliberately reduced healer burst healing and rotational complexity, and Restoration Shaman was hit hardest by this simplification — several former buttons were removed (Cloudburst Totem, Earthen Wall Totem, Ancestral Protection Totem, and Wellspring per Icy Veins). The result is described by multiple guide authors as one of the simplest healers to play in Midnight.

- Healing/DPS/survivability profile: strong, consistent group healing and good spot healing; modest personal DPS; good personal survivability via passives plus a strong personal damage-reduction cooldown.
- Primary weakness: relatively low sustained AoE healing throughput compared to Restoration Druid (per Icy Veins), and meaningful reliance on Spiritwalker's Grace for casting during movement-heavy phases.

## Role in Raid

- Role: dedicated healer.
- Lust/Hero: YES. Restoration Shaman provides the Bloodlust (Horde-flavored) / Heroism (Alliance-flavored) raid haste effect — 30% haste to the party/raid for 40 seconds, 5-minute cooldown, applies the Exhausted/Sated lockout. This is a major reason to bring a Shaman of any spec.
- Raid buff: Skyfury — a 100-yard raid-wide aura granting +2% Mastery (per the spell page). This is one of the spec's headline group-utility tools.
- Battle resurrection: NO. Restoration Shaman does not bring a battle res. It does have Reincarnation — a self-only resurrection that triggers while dead (30-minute cooldown). This revives the Shaman, not allies.
- Group defensives / externals: Spirit Link Totem is a powerful raid-wide cooldown (damage reduction + health redistribution). The Shaman has no single-target external "damage transfer/absorb on another player" comparable to Pain Suppression; its raid mitigation is the totem.
- Mobility: above-average. Ghost Wolf (sustained movement form), Spirit Walk (run speed + frees from movement-impairing effects), Spiritwalker's Grace (cast while moving), and Gust of Wind (burst leap). Wind Rush Totem provides a group movement-speed boost.

## Abilities Reference

Confirmed SpellIDs are shown in parentheses. Where an ID could not be confirmed on a live source, the name is given with no number and the gap is recorded in "Notes and Known Gaps."

Core healing:
- Riptide (61295) — instant HoT with an up-front heal; cast on cooldown, prioritizing targets that lack it. Core maintenance spell.
- Healing Rain (73920) — placed AoE ground heal; high value when the group stays stacked in it.
- Chain Heal — smart AoE heal that bounces between injured allies; favored when multiple players are hurt and grouped.
- Healing Wave — efficient single-target cast heal (the "fill" heal).
- Healing Surge — fast, expensive single-target emergency cast (named in guides; ID not confirmed live this session).
- Unleash Life (73685; not confirmed live this session — see gaps) — short-cooldown buff to the next healing spell; used on cooldown.
- Healing Stream Totem (5394; not confirmed live this session — see gaps) — low-cost passive healing totem; kept on cooldown / at max charges.
- Earth Shield (974; not confirmed live this session — see gaps) — maintained shield on the tank (and optionally self) that heals on melee hits.

Major healing cooldowns:
- Healing Tide Totem (108280) — raid-wide pulsing heal totem; 10-second duration, 3-minute cooldown. On a choice node with Ascendance.
- Ascendance (114049) — instantly heals injured allies within 20 yards and enhances Healing Wave/Chain Heal during the window; 3-minute cooldown. NOTE: 114049 is the generic Ascendance spell ID; the live spell page did not explicitly confirm it as the Restoration healing variant — treat with mild caution.
- Spirit Link Totem (98008) — see Defensives; doubles as a major mitigation/triage cooldown. 6-second duration.

Other notable buttons / talents seen in 12.0.5 guides (IDs not confirmed live this session): Nature's Swiftness, Ancestral Swiftness, Primordial Wave, Surging Totem, Stormstream Totem, Downpour, Wind Rush Totem, Water Shield. Hero talent trees: Farseer and Totemic.

## Rotation / Priority

This is a logical healing priority, NOT a DPS benchmark or strict GCD-by-GCD rotation. Healing is reactive; the list describes what to keep up and what to weight first.

Pre-pull:
- Water Shield on self.
- Earth Shield on the tank (and optionally self).
- Optionally pre-cast Healing Rain and seed Riptides before the pull.

Sustained priority (synthesized from Icy Veins and Method, which differ slightly by talent build):
1. Keep totems active: Healing Stream Totem (or Stormstream Totem) on cooldown / at max charges; keep Surging Totem up if talented.
2. Use Unleash Life on cooldown (and Nature's Swiftness / Ancestral Swiftness per build) to buff the following heal and trigger procs.
3. Maintain Healing Rain when the group is stacked in it.
4. Riptide on cooldown, prioritizing injured targets that do not already have it.
5. Chain Heal on grouped injured allies (extra value on Riptide'd targets).
6. Healing Wave for single-target healing.
7. Cast-weave DPS (e.g., Lightning Bolt / Flame Shock per build) only when no healing is needed.

AoE / heavy-damage windows: layer Healing Rain + Chain Heal, then deploy a major cooldown (Healing Tide Totem or Ascendance) and/or Spirit Link Totem to cover spike damage.

## Defensives

For RaidLens: each defensive below includes a usage note for judging whether it was used correctly relative to a damage window or a lethal hit.

- Astral Shift (108271) — personal damage reduction. The live spell page shows -40% damage taken for 12 seconds on a 2-minute cooldown. (Some guide text references an 8s/1.5-min variant; treat the spell-page values as the confirmed baseline and the guide values as possible talent modifications.)
  - RaidLens usage: this is the Shaman's primary personal mitigation. If the player took heavy avoidable or unavoidable burst and Astral Shift was off cooldown at the hit timestamp, that is a missed defensive. With a ~2-minute cooldown, expect roughly one use per major raid-damage event.
- Spirit Link Totem (98008) — raid-wide totem: reduces damage taken by allies within 10 yards by 10% AND redistributes the health of affected players every second, for 6 seconds. The live spell page does not print the cooldown (shows n/a); guides treat it as a multi-minute raid cooldown.
  - RaidLens usage: this is a raid mitigation/triage tool, not a personal one. Judge it against known raid-wide burst windows — if a scripted AoE spike killed multiple players and Spirit Link was available and unused, flag it. Because it equalizes health, it is also the correct answer to "one player is about to die while others are healthy."
- Earth Elemental (with Primordial Bond talent) — summons an Earth Elemental that provides a personal damage-reduction benefit while active.
  - RaidLens usage: a secondary personal cooldown when talented. Treat as available mitigation during sustained heavy personal damage; less precise to judge because availability depends on the talent build (cooldown not confirmed live this session).
- Passive survivability: Ancestral Vigor (max-health increase from casting certain heals), plus passives referenced as Brimming with Life and Windveil (Windveil reduces magic damage taken by 15% briefly after a successful Wind Shear interrupt, per Icy Veins).
  - RaidLens usage: these are passive/automatic, not buttons — do not flag a player for "not using" them. Windveil is a side effect of interrupting and is only relevant when judging interrupt timing.

## Utility

Interrupt:
- Wind Shear (57994) — Restoration Shaman's ONLY interrupt, and it is the only interrupt available to ANY healer in Midnight (per Icy Veins and the Wowhead overview). Effect: interrupts the current cast and locks that spell school for 4 seconds. Cooldown: the live spell page lists a 12-second base cooldown; however multiple 12.0.5 guides state the Restoration cooldown was increased to 30 seconds in Midnight (the longer school lock of 4s, up from 2s, was the trade-off). For RaidLens, treat the practical Resto cooldown as ~30 seconds and the base spell-page value (12s) as the un-modified tooltip.
  - RaidLens usage: because Resto is often the only kicker in the group, missed interrupts on a kickable cast are significant. With a ~30s cooldown, do not expect chain-interrupting; judge against whether Wind Shear was off cooldown at the time of an uninterrupted dangerous cast.

Crowd control:
- Tremor Totem (8143) — 1-minute cooldown, 10-second duration; breaks and provides protection against fear/sleep/charm effects for the group (the live spell page confirms ID and cooldown/duration but did not print the fear-break text — that effect is reported by guides).
- NOTE: Thunderstorm (51490) — confirmed as a real spell ID, but multiple 12.0.5 guides state Restoration LOST Thunderstorm as a usable CC/knockback in Midnight. Do not assume Resto has a knockback this patch.
- Hex (single-target CC) and Capacitor Totem (AoE stun) are class-standard Shaman tools but were not confirmed live this session — see gaps.

Dispels:
- Purify Spirit (77130) — Restoration's healer dispel: removes Magic AND Curse effects from friendly targets (live spell page confirms both dispel types, 40-yard range). This is the spec's defining dispel.
- Cleanse Spirit (51886) — removes Curse only. This is the baseline (non-Restoration) Shaman curse dispel; Restoration upgrades it to Purify Spirit. For log analysis, expect Resto to be dispelling Magic and Curse via Purify Spirit.
- Poison Cleansing Totem — totem-based poison removal referenced in guides (ID not confirmed live this session).

Externals: none in the single-target "cast on another player to mitigate" sense. Raid mitigation comes from Spirit Link Totem.

Raid buffs/debuffs:
- Skyfury (462854) — +2% Mastery raid aura, 100-yard radius.
- Bloodlust (2825) / Heroism (32182) — 30% haste to the raid for 40 seconds, 5-minute cooldown, applies Exhausted/Sated. Bloodlust and Heroism are the same effect with faction-flavored names.

Movement tools:
- Ghost Wolf — travel form for sustained movement.
- Spirit Walk (58875) — +60% run speed and removes movement-impairing effects; 1-minute cooldown.
- Spiritwalker's Grace (79206) — allows casting while moving for 15 seconds; 2-minute cooldown. Heavily relied on for movement-heavy fights.
- Gust of Wind — burst leap / vertical mobility (ID not confirmed live this session).
- Wind Rush Totem — group movement-speed totem (ID not confirmed live this session).

## Consumables and Enchants

Could not be sourced live this session — the Icy Veins gems/enchants/consumables page returned 404 and no other consumables page was successfully fetched. Do NOT assume specific flask, potion, food, rune, gem, or enchant names/IDs for 12.0.5 without verification. In general terms, Restoration Shaman is an Intellect-based healer, so Intellect-oriented consumables and enchants are expected, but the exact 12.0.5 items must be confirmed before use. See gaps.

## Notes and Known Gaps

Unconfirmed facts (named but NOT given a SpellID because a live source page was not successfully fetched this session):
- Unleash Life SpellID (commonly 73685) — not confirmed live (Wowhead spell page returned HTTP 403).
- Healing Stream Totem SpellID (commonly 5394) — not confirmed live (HTTP 403).
- Earth Shield SpellID (commonly 974) — not confirmed live (HTTP 403).
- Healing Surge, Chain Heal, Healing Wave SpellIDs — not confirmed live this session (named only).
- Nature's Swiftness, Ancestral Swiftness, Primordial Wave, Surging Totem, Stormstream Totem, Downpour, Water Shield SpellIDs — not confirmed live this session.
- Hex, Capacitor Totem, Gust of Wind, Wind Rush Totem, Poison Cleansing Totem SpellIDs — not confirmed live this session.

Caveats on confirmed items:
- Ascendance (114049): the live spell page confirms the ID and a 3-minute cooldown but did NOT explicitly confirm it as the Restoration healing variant (the generic spell could resolve to another spec's version). Verify before treating 114049 as Resto-specific in log filters.
- Wind Shear cooldown discrepancy: live spell page shows 12s base; 12.0.5 guide text states Restoration's effective cooldown is 30s in Midnight. The 4-second spell-lock is the Midnight value (up from 2s). Re-verify which value the in-game Restoration tooltip shows.
- Astral Shift values: spell page shows 40% / 12s / 2-min; some guide text shows 8s / 1.5-min. Likely a talent or page-version difference. Re-verify the live Restoration tooltip.
- Spirit Link Totem cooldown: live spell page lists n/a; the real cooldown (multi-minute) was not printed. Re-verify.
- The primary Wowhead Restoration guide overview page rendered only metadata (author Harreks, updated 2026/05/26), not body text; rotation/ability detail was sourced from Icy Veins and Method instead.

Sections limited by missing sources:
- Consumables and Enchants — entirely unsourced (404). Must be verified separately.
- Full talent/hero-talent loadout and import strings — not researched (no user-provided SimC profile; out of scope for this guide).

Maintenance flag: re-verify ALL of the above (especially SpellIDs, Wind Shear cooldown, Astral Shift values, and Ascendance variant) after any 12.x patch. Spell IDs do not change once assigned, but cooldowns, durations, talent gating, and which spells exist for the spec DO change between patches.
