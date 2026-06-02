# Enhancement Shaman — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/shaman/enhancement/overview-pve-dps
> - https://www.wowhead.com/spell=254410/wind-shear
> - https://www.wowhead.com/spell=108271/astral-shift
> - https://www.wowhead.com/spell=51533/feral-spirit
> - https://www.wowhead.com/spell=51490/thunderstorm
> - https://www.wowhead.com/spell=192058/capacitor-totem
> - https://www.wowhead.com/spell=51514/hex
> - https://www.wowhead.com/spell=17364/stormstrike
> - https://www.wowhead.com/spell=2008/ancestral-spirit
> - https://www.wowhead.com/spell=8143/tremor-totem
> - https://www.wowhead.com/spell=51886/cleanse-spirit
> - https://www.wowhead.com/spell=2825/bloodlust
> - https://www.wowhead.com/spell=462854/skyfury
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-guide
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-gems-enchants-consumables
>
> Spell IDs below are included ONLY where the live Wowhead spell page was fetched and explicitly showed that exact numeric ID. Abilities without a confirmed ID are named with no number; see Notes and Known Gaps.

---

## Overview

Enhancement Shaman is a melee DPS specialization. Its core gameplay loop is proc-driven: melee strikes (Stormstrike, Lava Lash, Crash Lightning, and others) generate stacks of **Maelstrom Weapon**, a resource that reduces the cast time and increases the damage of the Shaman's nature/spender spells. At sufficient stacks, spenders (Lightning Bolt, Chain Lightning, Elemental Blast, and in Midnight the **Primordial Storm** spender) become instant-cast, letting a melee player weave ranged spell damage without standing still.

Per the live Wowhead Midnight overview, the spec is described as a dynamic, reactive, proc-based melee spec that rewards quick reaction to random resource generation. Maelstrom Weapon has a chance to be generated from melee hits, stacks up to a cap (5 baseline; 10 with the Overflowing Maelstrom talent — and in patch 12.0.5 the **Overflowing Maelstrom stack cap was raised to 20**, allowing the player to bank up to two free instant Healing Surge casts). Each stack reduces a spender's cast time and increases its damage; spenders should generally not be hard-cast below the instant-cast threshold.

**Damage profile:** Bursty, cooldown-and-proc dependent, with strong cleave/AoE via Crash Lightning splash and Chain Lightning. Sustained throughput leans on cooldown windows (Doom Winds, Ascendance, Feral Spirit) lining up with banked Maelstrom Weapon.

**Healing/survivability profile:** Enhancement is not a healer, but it is unusually self-sufficient for a melee DPS: it can spend Maelstrom Weapon on instant **Healing Surge** (self or ally) and **Chain Heal**, and it carries strong personal mitigation (Astral Shift). It is a leather-... (mail-wearing) melee with moderate survivability.

**Primary weakness:** Proc/RNG dependence and ramp. Damage is front-loaded into cooldown windows and requires Maelstrom Weapon to be banked and spent at the right moment; poor proc luck or being forced off the boss during a cooldown window costs a disproportionate amount of damage. As a melee it is also exposed to melee-range mechanics.

---

## Role in Raid

- **Role:** Melee DPS (no tank or healer responsibility), though it can off-heal opportunistically with instant Healing Surge / Chain Heal when not spending Maelstrom on damage.
- **Bloodlust/Heroism:** YES. Enhancement Shaman provides **Bloodlust** (spell ID 2825), a raid-wide 30% attack/casting haste burst for 40 seconds on a 5-minute cooldown (the Horde version; the Alliance-side equivalent is Heroism). This is the canonical raid haste cooldown and is a major reason to bring a Shaman of any spec. (Subject to the per-player "Exhaustion/Sated" lockout shared with other lust effects.)
- **Battle resurrection:** NO. The Shaman resurrect, **Ancestral Spirit** (spell ID 2008), is a 10-second cast and is flagged "cannot be used in combat" on its live Wowhead page. Enhancement Shaman does **not** bring a combat/battle res.
- **Raid buff:** **Skyfury** (spell ID 462854) — a raid-wide buff granting Mastery (the live page shows +2% Mastery, 1-hour duration, group-wide). This is the Shaman's passive-style raid buff to maintain.
- **Windfury Weapon:** An Enhancement-specific weapon imbue (self/personal throughput, not a raid-wide buff in the same sense as Skyfury). Drives a large share of Enhancement's auto-attack damage; Doom Winds amplifies its trigger chance.
- **Mobility:** Strong. Ghost Wolf (movement form that suppresses slows while active), **Wind Rush Totem** (group movement-speed totem), Spiritwalker's Grace (cast while moving — primarily an Elemental tool but available via talent/baseline depending on build), and Gust of Wind / Feral Lunge-style gap closers depending on talents. As melee it must still physically reach targets.

---

## Abilities Reference

Confirmed spell IDs are listed where the Wowhead spell page was fetched and showed the exact ID. Others are named without IDs (see Known Gaps).

**Core builders / strikes**
- **Stormstrike** (spell ID 17364) — primary melee strike, no cooldown listed (governed by GCD / proc economy); triggers off-hand and additional Stormstrike damage effects.
- **Lava Lash** — secondary melee strike; interacts with Hot Hand (free/empowered Lava Lash procs). *ID not confirmed live.*
- **Crash Lightning** — AoE/cleave strike that applies a buff and splash damage; "cast on cooldown." Buff window ~12 seconds per the rotation guide. *ID not confirmed live.*
- **Ice Strike / Frost Shock / Flame Shock** — situational builders/DoT maintenance depending on talents; Flame Shock is the DoT often applied via Voltaic Blaze. *IDs not confirmed live.*
- **Voltaic Blaze** — in Midnight this is an active button (was a proc); used to apply/maintain Flame Shock and as filler. *ID not confirmed live.*

**Maelstrom Weapon spenders**
- **Lightning Bolt** (single target), **Chain Lightning** (2+ targets), **Elemental Blast**, and **Primordial Storm** (Midnight spender, spent around 10 stacks). *IDs not confirmed live.*

**Cooldowns**
- **Feral Spirit** (spell ID 51533) — summons spirit wolves; 1.5-minute cooldown per live page. Throughput cooldown.
- **Doom Winds** — ~60-second cooldown; greatly increases Windfury Weapon trigger chance for ~8 seconds; off the GCD. *ID not confirmed live.*
- **Ascendance** — ~120-second cooldown; converts Stormstrike into Windstrike and (via Thorim's Invocation) auto-spends Maelstrom Weapon. *ID not confirmed live.*
- **Sundering** — strike that hits all targets in front and triggers weapon/elemental effects; synced with Surging Totem. *ID not confirmed live.*
- **Surging Totem** — totem deployed in the opener and on cooldown (Totemic hero talent path emphasizes it). *ID not confirmed live.*
- **Thunderstorm** (spell ID 51490) — 30-second cooldown; Nature damage in a 10-yard radius around the caster, knockback, and a 40% snare. Historically an Elemental tool; available to Enhancement via talent in some builds. Treat as a knockback/utility/AoE button, not a core single-target ability.

**Key passives / procs**
- **Maelstrom Weapon** — the central resource (see Overview). **Overflowing Maelstrom** raises the cap (20 in 12.0.5).
- **Hot Hand** — empowers/resets Lava Lash.
- **Hero talent trees:** **Stormbringer** (aggressive Maelstrom cycling toward Tempest procs) and **Totemic** (Surging Totem / Hot Hand window focused). *Talent spell IDs not confirmed live.*

---

## Rotation / Priority

> This is a logical priority order for correct play, NOT a DPS benchmark or a guarantee of ranking. RaidLens should not infer a player is "bad" purely from priority deviations; the value here is understanding what abilities a competent Enhancement player is pressing and when.

**Opener (per the live rotation guide):**
1. Voltaic Blaze to apply Flame Shock.
2. Deploy Surging Totem (use potion/on-use trinkets/burst consumables here).
3. Sundering, then Lava Lash to trigger Hot Hand.
4. Doom Winds into Primordial Storm.
5. Enter Ascendance, filling GCDs with Windstrike.

**Sustained single target (priority):**
- Maintain Flame Shock (via Voltaic Blaze) and keep Surging Totem / Sundering active.
- Lava Lash on Hot Hand procs (high priority).
- Doom Winds and Ascendance on cooldown / on burst windows.
- Crash Lightning on cooldown (buff + damage even on one target).
- Spend Maelstrom Weapon: Primordial Storm near cap; otherwise Lightning Bolt at/above the instant-cast threshold.
- Fillers: Stormstrike (Windstrike during Ascendance), Voltaic Blaze.

**AoE (priority):**
- Use Chain Lightning instead of Lightning Bolt at 2+ targets.
- Keep Crash Lightning up on cooldown (splash damage hits multiple targets, splits among up to ~5).
- Sundering hits all targets in front.
- Otherwise mirror the single-target priority, biased toward multi-target spenders.

**Maelstrom Weapon rule of thumb:** do not hard-cast spenders below the instant-cast threshold (wastes a global and resets swing timers). Bank stacks into cooldown windows where possible.

---

## Defensives

Enhancement's defensives are how RaidLens should judge survivability decisions. For each, the question for analysis is: *was this defensive off cooldown and available during the lethal/heavy-damage window, and did the player press it?*

- **Astral Shift** (spell ID 108271) — **2-minute cooldown**, reduces all damage taken by **40% for 12 seconds**, instant, no cost. This is the primary personal mitigation. **RaidLens usage:** For any large avoidable or scripted hit that killed or heavily damaged the Shaman, check whether Astral Shift was available (≥2 min since last use). If it was off cooldown and unused going into a known damage event, that is a missed defensive. If it was on cooldown, do not flag it.
  - *Note: Icy Veins text described Astral Shift as a ~1m30s cooldown; the live Wowhead spell page shows 2 minutes. Treat 2 minutes as authoritative for availability checks. See Known Gaps.*
- **Stone Bulwark Totem** — talented absorb totem (provides a personal absorb shield that regenerates). **RaidLens usage:** Treat as a secondary mitigation/absorb cooldown when talented; check availability against a heavy-damage window. *Cooldown/ID not confirmed live — see Known Gaps.*
- **Earth Elemental** — summons an Earth Elemental; per Icy Veins ~3-minute cooldown, ~30-second duration. Primarily a threat/aggro and incidental survivability tool; can be talented to provide the Shaman a damage-reduction effect. **RaidLens usage:** Low priority as a personal defensive; do not flag its absence on most raid damage. *ID/cooldown not confirmed on live spell page — see Known Gaps.*
- **Healing Surge (instant via Maelstrom Weapon)** — instant self/ally heal when Maelstrom Weapon is banked; 12.0.5 lets the Shaman bank up to two free instant Healing Surge casts via Overflowing Maelstrom. **RaidLens usage:** A self-sustain tool, not a cooldown. Unused Maelstrom-funded self-healing is hard to flag reliably; treat as informational, not a defensive miss.
- **Chain Heal (instant via Maelstrom Weapon)** — instant group heal when stacks are banked. Off-healing utility, not a personal defensive.
- **Earth Shield** — in Midnight made effectively permanent on the Shaman via the Therazane's Resilience talent (per Icy Veins); provides a self heal-on-hit / damage-reduction shield. **RaidLens usage:** Passive when talented; not a press-on-demand defensive. *ID not confirmed live.*

---

## Utility

**Interrupt — the most important fact for RaidLens:**
- **Wind Shear** (spell ID 254410) is Enhancement Shaman's interrupt. Live Wowhead page: instant, 30-yard range, **12-second cooldown**, "cannot miss," interrupts the current cast and locks that spell school for 3 seconds.
- This is the spec's **ONLY** raid-usable interrupt. Enhancement has a real, short-cooldown kick — RaidLens SHOULD hold Enhancement Shamans accountable for assigned interrupts on a 12-second cadence.
- *(A forum post from October 2025 referenced a possible 30-second cooldown. The live 12.0.5 Wowhead spell page shows 12 seconds; treat 12 seconds as authoritative. See Known Gaps.)*

**Crowd control:**
- **Hex** (spell ID 51514) — 30-second cooldown; transforms target into a frog, incapacitating (pacify + silence) for up to 1 minute (breaks on damage). Single-target soft CC.
- **Capacitor Totem** (spell ID 192058) — 1-minute cooldown; totem charges up and stuns enemies in an 8-yard radius (AoE stun on a delay).
- **Earthgrab Totem** — root/slow totem. *ID not confirmed live.*
- **Thunderstorm** (spell ID 51490) — knockback + 40% snare around the caster (talent-dependent for Enhancement).
- **Earthbind Totem** — area slow totem. *ID not confirmed live.*

**Dispels:**
- **Cleanse Spirit** (spell ID 51886) — 8-second cooldown; removes **Curse** effects from a friendly target. This is the Shaman's friendly-target dispel for Enhancement.
- **Purge** — offensive dispel; removes a Magic effect from an **enemy**. *ID not confirmed live.*
- **Poison Cleansing Totem** — talented totem that removes Poison effects from allies in its area. *ID not confirmed live.*
- **Tremor Totem** (spell ID 8143) — 1-minute cooldown, 10-second duration; removes/prevents Fear, Charm, and Sleep effects on allies in its radius (the live spell page does not enumerate the removed types in its dispel field; effect summarized from the totem's standard function — see Known Gaps).

**Externals:** Enhancement provides **no targeted external defensive** (no damage-reduction cast on another player). Its "support" is group-wide via totems, Skyfury, Bloodlust, and opportunistic Chain Heal/Healing Surge.

**Raid buffs/debuffs:**
- **Bloodlust** (spell ID 2825) — raid haste cooldown (see Role in Raid).
- **Skyfury** (spell ID 462854) — raid-wide Mastery buff (see Role in Raid).
- **Windfury Weapon** — personal/Enhancement weapon imbue throughput.

**Movement tools:**
- **Ghost Wolf** — travel form; suppresses slows while active.
- **Wind Rush Totem** — group movement-speed totem. *ID not confirmed live.*
- **Spiritwalker's Grace** / **Gust of Wind** — cast-while-moving / self-displacement utility, talent/build dependent. *IDs not confirmed live.*

---

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 Enhancement consumables/enchants page. Item NAMES are reproduced from that single source; **no item IDs were available/confirmed**, so none are given. Treat the specific item names as needing re-verification (they vary by hero talent build and patch).

- **Weapon enchant (MH + OH):** "Acuity of the Ren'dorei."
- **Armor enchants:** Helm "Empowered Rune of Avoidance"; Shoulders "Amirdrassil's Grace"; Chest "Mark of the Worldsoul"; Legs "Forest Hunter's Armor Kit" (leg armor kit); Boots "Lynx's Dexterity"; Rings "Eyes of the Eagle."
- **Gems:** Primary "Indecipherable Eversong Diamond"; secondary "Flawless Quick Amethyst" or "Flawless Masterful Peridot" by stat balance.
- **Flask/Phial:** Hero-talent dependent — "Flask of the Magisters" (Mastery, Totemic) or "Flask of the Blood Knights" (Haste, Stormbringer).
- **Potion:** "Light's Potential" (use with major cooldowns + Bloodlust).
- **Food:** "Silvermoon Parade" feast (primary stat) or "Royal Roast."
- **Augment Rune:** "Void-Touched Augment Runes."

These choices are throughput/stat optimizations and are NOT something RaidLens should flag as mistakes; they are informational only.

---

## Notes and Known Gaps

- **Maintenance flag:** Re-verify this entire guide after any 12.x patch. Enhancement tuning (Maelstrom caps, Wind Shear cooldown, talent layout, hero talent balance) has changed within Midnight already (e.g., Overflowing Maelstrom cap raised to 20 in 12.0.5).
- **Confirmed spell IDs (fetched live on Wowhead):** Wind Shear 254410, Astral Shift 108271, Feral Spirit 51533, Thunderstorm 51490, Capacitor Totem 192058, Hex 51514, Stormstrike 17364, Ancestral Spirit 2008, Tremor Totem 8143, Cleanse Spirit 51886, Bloodlust 2825, Skyfury 462854.
- **Unconfirmed IDs (omitted on purpose, NOT guessed):** Lava Lash, Crash Lightning, Lightning Bolt, Chain Lightning, Elemental Blast, Primordial Storm, Voltaic Blaze, Ice Strike, Frost Shock, Flame Shock, Doom Winds, Ascendance, Sundering, Surging Totem, Stone Bulwark Totem, Earth Elemental, Earth Shield, Earthgrab Totem, Earthbind Totem, Purge, Poison Cleansing Totem, Wind Rush Totem, Spiritwalker's Grace, Gust of Wind, Ghost Wolf, Windfury Weapon, and the Stormbringer/Totemic hero-talent abilities. Wowhead began returning HTTP 403 (rate limiting) before these individual spell pages could be fetched. Confirm IDs on live Wowhead before adding numbers.
- **Astral Shift cooldown discrepancy:** Icy Veins text said ~1m30s; live Wowhead spell page shows 2 minutes. This guide uses **2 minutes** (live spell page authoritative). Re-verify if RaidLens availability checks misfire.
- **Wind Shear cooldown discrepancy:** A Blizzard-forum post (Oct 2025) referenced a 30-second cooldown; the live 12.0.5 Wowhead spell page shows **12 seconds**, which this guide uses. If interrupt-cadence analysis seems off, re-check the live value.
- **Tremor Totem dispel detail:** The live Wowhead page's dispel-type field showed "n/a"; the Fear/Charm/Sleep removal described here is the totem's standard documented function, not a value read off that page. Re-verify.
- **Thunderstorm for Enhancement:** Confirmed as a live Shaman spell (51490) but it is historically Elemental's; its availability to Enhancement is talent-dependent and was not confirmed in the Enhancement talent tree on a live fetch. Treat as build-dependent.
- **Rotation specifics** (opener order, Primordial Storm stack thresholds, hero-talent nuances) come from the Icy Veins live rotation page and the Wowhead overview, not from a parsed in-game tooltip or a user-provided SimC profile. No SimC APL or talent import string was available; none was invented.
- **Consumables/enchants:** Item names from a single source (Icy Veins), no item IDs confirmed. Re-verify names against current Wowhead before relying on them.
- **Wowhead main guide body extraction:** The Wowhead overview/abilities/rotation guide pages returned mostly navigation chrome via the fetch tool; substantive ability and rotation detail in this guide came primarily from Icy Veins plus the individual Wowhead spell pages that were fetched successfully.
