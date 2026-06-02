# Devastation Evoker — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/guide/classes/evoker/devastation/overview-pve-dps
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/devastation-evoker-pve-dps-gems-enchants-consumables
> - https://www.wowhead.com/spell=351338/quell
> - https://www.wowhead.com/spell=363916/obsidian-scales
> - https://www.wowhead.com/spell=374348/renewing-blaze
> - https://www.wowhead.com/spell=374227/zephyr
> - https://www.wowhead.com/spell=370553/tip-the-scales
> - https://www.wowhead.com/spell=358267/hover
> - https://www.wowhead.com/spell=375087/dragonrage
> - https://www.wowhead.com/spell=357208/fire-breath
> - https://www.wowhead.com/spell=359073/eternity-surge
> - https://www.wowhead.com/spell=356995/disintegrate
> - https://www.wowhead.com/spell=357211/pyre
> - https://www.wowhead.com/spell=361469/living-flame
> - https://www.wowhead.com/spell=364342/blessing-of-the-bronze
> - https://www.wowhead.com/spell=369459/source-of-magic
> - https://www.wowhead.com/spell=360806/sleep-walk
> - https://www.wowhead.com/spell=370665/rescue
> - https://www.wowhead.com/spell=374251/cauterizing-flame
> - https://www.wowhead.com/spell=365585/expunge
> - https://www.wowhead.com/spell=406732/spatial-paradox
> - https://www.wowhead.com/spell=390386/fury-of-the-aspects

## Overview

Devastation is the ranged-DPS specialization of the Evoker class (Dracthyr race). It is a mid-range caster: most abilities have a 25-yard range, which is shorter than a typical mage or warlock, so positioning matters more than for other casters. Its core resource is **Essence** (a small recharging pool), spent on its main damage spells.

The core gameplay loop is built around two **Empower** spells — **Fire Breath** and **Eternity Surge** — which are channeled and "charge up" through empower levels before releasing. These are cast on cooldown, with **Disintegrate** as the primary Essence spender between them and **Living Flame** as the no-cost filler. The major throughput cooldown is **Dragonrage**, a 2-minute burst window. In single target the priority is Empower spells on cooldown plus Disintegrate; in AoE it shifts toward **Pyre** and Dragonrage-fueled cleave.

Damage profile: strong, bursty AoE/cleave during Dragonrage and steady single-target the rest of the time. Survivability is good for a caster — it has a strong stacking damage reduction (Obsidian Scales), a self heal-over-time (Renewing Blaze), and a raid-wide AoE-damage-reduction cooldown (Zephyr). Healing contribution to the raid is minor (Living Flame, Verdant Embrace) and incidental, not a healing role.

**Primary weakness:** the short (~25 yard) range and the fact that Empower spells lock the caster in place / in a channel. The spec is heavily reliant on **Hover** to keep casting while moving; misusing or wasting Hover during heavy-movement phases is the most common cause of lost uptime. (Sources: Wowhead Devastation overview; Icy Veins spell summary & rotation pages.)

## Role in Raid

- **Role:** Ranged DPS. Not a healer, not a tank.
- **Bloodlust-equivalent:** YES. Evoker provides **Fury of the Aspects** (Spell ID `390386`) — a raid-wide 30% Haste buff for 40 seconds that applies the **Exhaustion** debuff (the Evoker equivalent of Sated/Bloodlust lockout) afterward. This can be brought by a Devastation Evoker, so the raid does not separately need a Shaman/Mage/Hunter for Lust. (Confirmed via Wowhead spell page 390386 and corroborating live search.)
- **Battle resurrection:** NO. Evoker has no in-combat battle res. Its resurrection spell (Return) is out-of-combat only. Do not expect a combat rez from this spec.
- **Raid buffs/debuffs brought:**
  - **Blessing of the Bronze** (Spell ID `364342`) — a long-duration raid utility buff (movement-speed style buff; one of the standard Evoker raid buffs).
  - **Source of Magic** (Spell ID `369459`) — a single-target buff placed on an ally (typically a healer) that grants a damage/effect bonus; excludes the caster. Mana-return style support utility.
  - **Shattering Star** — applies a target damage-amplification debuff (the target takes increased damage), useful on priority/burst targets. See Abilities note about its ID.
- **Group defensives / externals:**
  - **Zephyr** (Spell ID `374227`) — raid AoE damage reduction (see Defensives).
  - **Rescue** (Spell ID `370665`) — grabs an ally and pulls them to the Evoker; a positioning/save tool, not a damage-reduction external.
  - **Spatial Paradox** (Spell ID `406732`) — utility cooldown granted to self or an ally (see Utility).
- **Mobility:** Above average. **Hover** (Spell ID `358267`) allows casting while moving; the class also has Deep Breath (a directional flight/dash) and Soar as travel tools. (Sources: Wowhead spell pages; Wowhead overview; Icy Veins spell summary.)

## Abilities Reference

Core damage:
- **Disintegrate** (Spell ID `356995`) — channeled Essence spender (3 Essence), main single-target damage. Frost/Arcane. Channels over ~3 seconds dealing periodic damage.
- **Pyre** (Spell ID `357211`) — instant Essence spender (3 Essence), Fire AoE. Used when fighting multiple targets.
- **Living Flame** (Spell ID `361469`) — no-Essence filler; deals damage to enemies (or heals a friendly target). Generates resources/procs in the rotation.
- **Azure Strike** — instant cleave hitting up to 2 targets; used for movement filler when Hover isn't available. (Name confirmed in Icy Veins spell summary; spell ID not separately confirmed — see Known Gaps.)
- **Fire Breath** (Spell ID `357208`) — Empower spell. Frontal cone Fire damage plus a damage-over-time. Cast on cooldown, usually at empower level 1 in raid single-target.
- **Eternity Surge** (Spell ID `359073`) — Empower spell, ~30-second cooldown. High direct Spellfrost/Arcane damage; higher empower levels hit more nearby targets.
- **Shattering Star** — ~15-second cooldown; deals damage and applies a debuff increasing damage the target takes (commonly cited as +20%). Live search resolves this to Wowhead spell `370452`, but a direct fetch of that page failed to render — treat the ID as likely-but-not-fully-confirmed (see Known Gaps).
- **Deep Breath** — directional flight that damages everything in the path. A core Scalecommander hero-talent spell. (Spell ID not confirmed — see Known Gaps.)

Cooldowns / utility throughput:
- **Dragonrage** (Spell ID `375087`) — major DPS cooldown, 2-minute cooldown, 18-second duration. Burst window; line up Empowers and Essence spenders inside it.
- **Tip the Scales** (Spell ID `370553`) — 2-minute cooldown; makes the next Empower spell cast instantly at max rank. Used to weave a full-power Empower while moving or under time pressure.
- **Firestorm** — ~20-second cooldown AoE ground effect (talent). (Spell ID not confirmed — see Known Gaps.)

Hero talent trees (Midnight Season 1): **Scalecommander** (most-played; built around Mass Disintegrate and Deep Breath) and **Flameshaper** (red/Fire-focused, extra Fire Breath charge). Both are viable; Scalecommander is the more common raid pick. (Source: Wowhead/Method/Icy Veins talent pages via search.)

## Rotation / Priority

The following is **logical priority order, not a DPS benchmark or a strict GCD-by-GCD script.** Exact ordering shifts with hero talents, set bonuses, and target count.

**Opener (general):** Pre-cast Living Flame into pull → **Dragonrage** → **Fire Breath** (empower 1) → **Eternity Surge** → spend **Disintegrate** → refresh Fire Breath when available → continue Disintegrate while Essence allows → filler. If the raid uses **Fury of the Aspects** on pull, fire Dragonrage immediately to ride the Haste.

**Sustained single target (priority):**
1. **Fire Breath** on cooldown (usually empower level 1).
2. **Eternity Surge** on cooldown.
3. **Shattering Star** on cooldown (also amplifies your following hits on that target).
4. **Disintegrate** as the Essence spender.
5. **Living Flame** as filler / to consume procs.
6. Movement filler (Living Flame / Azure Strike) only when you cannot stand and channel and Hover is unavailable.

**AoE (3+ targets):**
1. **Dragonrage** on cooldown.
2. **Fire Breath** (empower 1).
3. **Pyre** at 3+ targets (drop back to Disintegrate at 1–2 targets).
4. **Living Flame** to consume procs.
5. **Eternity Surge** when nothing higher priority is available.

Cast **Disintegrate / Living Flame while moving by using Hover**; do not stand still through avoidable damage just to finish a channel. (Source: Icy Veins rotation/cooldowns page.)

## Defensives

For each: **RaidLens usage** explains how to judge correct use against a damage window. Approximate cooldowns are given where a source confirmed them.

- **Obsidian Scales** (Spell ID `363916`) — reduces all damage taken by **30% for 12 seconds**. Cooldown **~1.5 minutes** (per Icy Veins; the raw Wowhead cooldown field rendered ambiguously — treat 1.5 min as the gameplay value). Strongest personal mitigation.
  - **RaidLens usage:** This is the primary "did they press a defensive" check. For a large avoidable or scripted hit that killed or nearly killed the Evoker, Obsidian Scales should have been active or available. If the player took a lethal/near-lethal hit and Obsidian Scales had been off cooldown for the prior ~90 seconds with no use, flag it as an unused defensive.

- **Renewing Blaze** (Spell ID `374348`) — converts damage taken over the next 8 seconds into a heal-over-time on the Evoker for the same amount over 8 seconds. Cooldown **~90 seconds** (per Icy Veins; the Wowhead page lists the base node cooldown as n/a because the value comes from the talent). Effectively a delayed self-heal / sustain tool.
  - **RaidLens usage:** Best judged during sustained raid damage or repeated tickly damage, not a single one-shot. If an Evoker is dying slowly to stacking/periodic damage and never pressed Renewing Blaze while it was available, flag it. Less relevant for instant one-shots (the HoT pays out too slowly).

- **Zephyr** (Spell ID `374227`) — raid-wide: nearby allies (within 20 yards) take **20% reduced AoE damage** and gain 30% movement speed for **8 seconds**. Cooldown **2 minutes**. This is a group AoE-damage cooldown, not just personal.
  - **RaidLens usage:** Treat as a minor raid cooldown. During a known raid-wide AoE burst (e.g., a scripted breath/explosion that hits the group), check whether Zephyr was used. Because the radius is only 20 yards, value depends on the raid being grouped. Flag unused Zephyr only when a clear raid-wide AoE window occurred and it was off cooldown.

Note: **Tip the Scales** and **Hover** are not defensives but are sometimes used to keep casting while dodging — do not count them as mitigation.

## Utility

- **Interrupt — Quell** (Spell ID `351338`): YES, Devastation HAS a raid-usable interrupt. Quell is an instant interrupt, **20-second cooldown**, ~25-yard range, no resource cost. This is the spec's interrupt. There is no second kick — Quell is the only interrupt.
  - **RaidLens usage:** When a boss/add cast must be interrupted and a Devastation Evoker was assigned or in range, a missed interrupt is attributable to this spec on a 20-second cadence. With a 20s cooldown, an Evoker can cover frequent interrupt rotations.
- **Crowd control:**
  - **Sleep Walk** (Spell ID `360806`) — a cast-time incapacitate/"Asleep" effect (~20-second duration on the target; breaks on damage). Usable on adds in raid.
  - **Landslide** — a root/ensnare utility talent (CC). (Spell ID not confirmed — see Known Gaps.)
- **Dispels:**
  - **Cauterizing Flame** (Spell ID `374251`) — ~1-minute cooldown; heals the target and removes **Bleed, Poison, Disease, or Curse** effects (a broad single-target dispel) and provides a small heal. (Wowhead lists Poison/Disease/Curse on the effect breakdown; commonly described as also removing Bleed — see Known Gaps for the exact removable set.)
  - **Expunge** (Spell ID `365585`) — removes **Poison** effects from a friendly target; ~8-second cooldown (talent).
- **Externals / support:**
  - **Rescue** (Spell ID `370665`) — instantly pulls a targeted ally to the Evoker; ~30-yard range, ~1-minute cooldown. Positioning save (e.g., pull someone out of a bad spot), not a damage-reduction external.
  - **Spatial Paradox** (Spell ID `406732`) — ~3-minute cooldown utility buff cast on self or an ally; grants cast-while-moving and dispel resistance for ~10 seconds. It is **NOT** a Bloodlust/Haste-burst external — do not treat it as Lust.
  - **Source of Magic** (Spell ID `369459`) — single-ally buff (typically on a healer) providing a sustained bonus; excludes the caster.
- **Raid buffs/debuffs:**
  - **Fury of the Aspects** (Spell ID `390386`) — raid-wide 30% Haste for 40s; the Bloodlust-equivalent (causes Exhaustion afterward).
  - **Blessing of the Bronze** (Spell ID `364342`) — standard Evoker raid buff.
  - **Shattering Star** — single-target damage-taken increase debuff on the boss/priority target (see Abilities ID note).
- **Movement tools:**
  - **Hover** (Spell ID `358267`) — allows casting while moving and grants movement speed for ~6 seconds; the spec's signature mobility tool.
  - **Deep Breath** — long directional flight/dash that also deals damage.
  - **Soar** — out-of-combat flight (Dracthyr racial-style travel).

## Consumables and Enchants

From Icy Veins' Devastation 12.0.5 gems/enchants/consumables page (item names as written; item IDs were not confirmed on a fetched page, so none are given):

- **Flask:** "Flask of the Blood Knights" (Haste-leaning) or "Flask of the Shattered Sun" (if very low Crit).
- **Combat potion:** "Potion of Recklessness".
- **Food:** "Silvermoon Parade" feast (preferred) or "Royal Roast" (personal-food alternative).
- **Augment rune:** "Void-Touched Augment Rune".
- **Weapon oil:** "Thalassian Phoenix Oil".
- **Enchants (named on the page):** Weapon — "Acuity of the Ren'dorei"; Helm — "Empowered Blessing of Speed"; Rings — "Silvermoon's Alacrity"; Chest — "Mark of the Worldsoul"; Shoulders — "Akil'zon's Swiftness".
- **Gems:** "Powerful Eversong Diamond" in one socket; fill remaining sockets with "Flawless Quick Garnet"; include one each of the other colors to enable the gem set/movement effect.

These are throughput recommendations and may shift with tuning. No numeric item IDs are included because none were confirmed on a fetched item page.

## Notes and Known Gaps

- **Obsidian Scales cooldown:** Icy Veins states ~1.5 minutes; the raw Wowhead spell field rendered as "1 second," which is a parse artifact, not the real cooldown. 1.5 minutes is used here. Re-verify if precision matters.
- **Renewing Blaze cooldown:** Wowhead base spell (374348) shows cooldown n/a (cooldown lives on the talent node); Icy Veins states ~90 seconds. Used 90s.
- **Shattering Star spell ID:** Live web search maps it to Wowhead `370452`, but a direct WebFetch of `spell=370452` returned a "doesn't exist" page (likely transient). The ID is given as likely-correct but not double-confirmed by a clean page render. The +20% damage-taken figure is from search summary, not a confirmed page read.
- **Cauterizing Flame removable types:** The fetched effect breakdown listed Poison/Disease/Curse and the ability is commonly described as also removing Bleed. The exact authoritative set should be re-verified on the live spell page.
- **Unconfirmed spell IDs (omitted intentionally):** Azure Strike, Deep Breath, Firestorm, Landslide, Verdant Embrace, Soar, and Tip the Scales-adjacent talent IDs were not confirmed on a fetched live page and are written by name only.
- **Fire Breath / Eternity Surge / Dragonrage durations:** Fire Breath base spell (357208) showed cooldown n/a (cooldown is talent/empower-driven); Eternity Surge confirmed ~30s; Dragonrage confirmed 2-min / 18s.
- **Rotation:** The priority lists are logical ordering from Icy Veins, NOT a DPS benchmark. Exact lines depend on hero talent choice (Scalecommander vs Flameshaper), tier set bonuses, and target count.
- **Item IDs for consumables/enchants/gems:** none confirmed on a fetched item page; names only.
- **Maintenance flag:** Re-verify all spell IDs, cooldowns, talent/hero-tree behavior, and consumable/enchant names after ANY 12.x patch. This guide reflects patch 12.0.5 as of June 2026; Blizzard frequently retunes Evoker mid-season.
