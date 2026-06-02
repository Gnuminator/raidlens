# Holy Priest — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched during research, June 2026):
> - https://www.icy-veins.com/wow/holy-priest-pve-healing-spell-summary
> - https://www.icy-veins.com/wow/holy-priest-pve-healing-guide
> - https://www.icy-veins.com/wow/holy-priest-pve-healing-gems-enchants-consumables
> - https://www.method.gg/guides/holy-priest/playstyle-and-rotation
> - https://www.wowhead.com/spell=2050/holy-word-serenity
> - https://www.wowhead.com/spell=34861/holy-word-sanctify
> - https://www.wowhead.com/spell=64843/divine-hymn
> - https://www.wowhead.com/spell=47788/guardian-spirit
> - https://www.wowhead.com/spell=10060/power-infusion
> - https://www.wowhead.com/spell=19236/desperate-prayer
> - https://www.wowhead.com/spell=586/fade
> - https://www.wowhead.com/spell=17/power-word-shield
> - https://warcraft.wiki.gg/wiki/Prayer_of_Mending (corroborated by https://www.wowdb.com/spells/33076-prayer-of-mending)
> - https://warcraft.wiki.gg/wiki/Power_Word:_Fortitude
> - https://warcraft.wiki.gg/wiki/Mass_Dispel
> - https://warcraft.wiki.gg/wiki/Purify
> - https://warcraft.wiki.gg/wiki/Leap_of_Faith
> - https://warcraft.wiki.gg/wiki/Psychic_Scream
> - https://warcraft.wiki.gg/wiki/Symbol_of_Hope
> - https://warcraft.wiki.gg/wiki/Angelic_Feather
> - https://warcraft.wiki.gg/wiki/Dispel_Magic
> - https://dotesports.com/wow/news/all-classes-with-a-battle-resurrection-ability-in-world-of-warcraft (battle res classes)

---

## Overview

Holy Priest is a reactive healer built around sustained, reliable throughput and strong spot healing. Its core gameplay loop revolves around two short-cooldown signature heals — **Holy Word: Serenity** (single-target) and **Holy Word: Sanctify** (AoE) — whose cooldowns are actively reduced by casting filler heals (Flash Heal, Heal, Prayer of Healing) and, via talents, by Prayer of Mending and Halo. The priest's job is to keep those Holy Words coming off cooldown as often as possible while layering Prayer of Mending and Renew for steady background healing.

- **Profile:** High and consistent healing across an entire fight, with good single-target and AoE coverage. It does modest damage (Smite, Holy Fire, Shadow Word: Pain, Holy Nova) when healing is light, but damage is not a meaningful part of its raid contribution.
- **Survivability:** Layered but individually modest. It has several small damage-reduction and self-heal tools rather than one large personal immunity.
- **Primary weakness:** **Burst healing and mobility.** It lacks an instant "oh-no" burst heal compared to some healers, and it has no gap-closer or movement burst — Angelic Feather is the only real movement tool. Healing while moving is its hardest constraint.

## Role in Raid

- **Role:** Healer.
- **Raid buff:** **Power Word: Fortitude** — raid-wide +5% Stamina for 1 hour. This is a class buff, not Holy-specific.
- **External cooldowns:**
  - **Guardian Spirit** — a strong single-target external: large healing-received increase plus a cheat-death that prevents a killing blow. Commonly used on tanks during heavy tank windows or on any player about to take lethal damage.
  - **Power Infusion** — a personal/ally haste-style buff. Note: in current builds this is primarily a self/throughput cooldown and is NOT a raid-wide Bloodlust/Heroism. See Known Gaps for the targeting caveat.
- **Bloodlust / Heroism equivalent:** **None.** Holy Priest does not provide a Bloodlust-class raid haste burst.
- **Battle resurrection:** **None.** Priests cannot combat-res. Only Death Knight, Druid, Warlock, and Shaman bring a battle res. (Priest's Resurrection is out-of-combat only.)
- **Mobility:** Poor. No gap-closer. Angelic Feather provides a placed movement-speed buff; Fade provides threat drop and damage reduction but not movement.

## Abilities Reference

Spell IDs are included only where confirmed against a live source that was actually fetched.

| Ability | Spell ID | Cooldown | Notes |
|---|---|---|---|
| Holy Word: Serenity | 2050 | ~60s baseline (reduced by Flash Heal/Heal casts) | Strong instant single-target heal. The Wowhead spell page lists cooldown as "n/a" because the cooldown is applied via talents/effects rather than the base spell. |
| Holy Word: Sanctify | 34861 | ~60s baseline (reduced by Prayer of Healing/Flash Heal) | Instant ground-targeted AoE heal, ~10 yd radius, up to 6 allies. |
| Prayer of Mending | 33076 | — | Ward that heals on damage and bounces between allies (up to several jumps). Casting it also feeds Holy Word cooldown reduction via Voice of Harmony. |
| Divine Hymn | 64843 | 3 min | Channeled raid-wide heal that also increases healing received by affected allies. Major raid healing cooldown. |
| Apotheosis | 200183 | ~2 min | Resets/empowers Holy Word cooldowns and greatly increases their cooldown reduction for a window. Throughput cooldown — spam Holy Words while active. (ID corroborated by web search of the Wowhead spell page; see Known Gaps.) |
| Smite / Holy Fire / Holy Nova / Shadow Word: Pain | (omitted) | — | Damage filler used when healing is light. IDs not confirmed live; omitted intentionally. |

Hero talent trees in Midnight for Holy Priest are **Oracle** and **Archon** (per Method's rotation guide). Archon routes Holy Word cooldown reduction through Halo.

## Rotation / Priority

This is a logical healing priority, NOT a DPS rotation or throughput benchmark. Holy healing is reactive — adapt to incoming damage.

**Opener / general:** There is no fixed opener. Pre-place Prayer of Mending, keep Renew rolling on likely-damaged targets, and begin building Holy Word charges.

**Sustained single-target priority (approx.):**
1. Keep **Prayer of Mending** active (refresh near max stacks/charges).
2. Use **Holy Word: Serenity** when off cooldown for spot healing.
3. Cast Flash Heal / Heal as filler to reduce Holy Word cooldowns and (with talents like Benediction/Surge of Light) trigger empowered/free casts.

**AoE priority (approx.):**
1. **Prayer of Healing** for grouped raid damage (also reduces Holy Word: Sanctify cooldown).
2. **Holy Word: Sanctify** on cooldown for instant grouped healing.
3. **Holy Nova** when many targets are clustered (4+).
4. **Divine Hymn** / **Apotheosis** for scripted heavy-damage windows.

## Defensives

Holy Priest's survivability is a stack of small layers. Each entry below includes how RaidLens should judge correct usage. Note that several of these are **talent-gated** — absence in a log may mean the talent wasn't taken, not that it was misused (see Known Gaps).

- **Power Word: Shield** — Spell ID 17, ~7.5s cooldown. Absorb shield (all schools), ~15s duration. *RaidLens usage:* On self before a known hit, an absorb buff should appear shortly before the damage event. Cheap and frequently available; expect it up for predictable personal spikes.
- **Desperate Prayer** — Spell ID 19236, ~1.5 min cooldown. Instant self-heal for ~25% of health AND increases max health by ~25% for ~10s. *RaidLens usage:* This is the main personal "I'm about to die" button. If a Holy Priest took a large avoidable/lethal hit and Desperate Prayer was off cooldown (no use in the prior ~90s) and unused, flag it.
- **Fade** — Spell ID 586, 30s cooldown, ~10s duration. Drops threat AND (in current data) reduces damage taken by ~10% across all schools. *RaidLens usage:* With its short cooldown it should be used proactively into raid-wide damage windows. A lethal raid hit with Fade available and unused is worth flagging, but treat as low-severity (small mitigation, short cooldown, easy to forget).
- **Flash Heal (Protective Light)** — talented. Casting Flash Heal can grant a brief damage-reduction buff. *RaidLens usage:* Only relevant if the talent is taken; do not flag its absence without confirming the build.
- **Angelic Bulwark** — talented passive. Triggers an absorb when the priest drops below a health threshold. *RaidLens usage:* Passive/automatic — judge as "did it proc," not "did they press it." Do not flag as an unused active.

## Utility

### Interrupt — IMPORTANT
**Holy Priest has NO raid-usable interrupt.** It does not have access to Silence (a Shadow-spec ability). Psychic Scream is a fear, not an interrupt (though incidental fear-based stops can happen, RaidLens should NOT count Holy Priest toward interrupt assignments or flag it for "missed kicks"). **Do not expect or assign interrupts to a Holy Priest.**

### Crowd control
- **Psychic Scream** — Spell ID 8122, 40s cooldown. AoE fear, 8 yd, ~8s; breaks on damage. Now a class talent (redesigned in 12.0.0). Emergency CC / self-peel, not an interrupt.
- **Shackle Undead** — single-target incapacitate vs. Undead (situational). ID not confirmed live; omitted.

### Dispels
- **Purify** — Spell ID 527, ~8s cooldown. Removes **Magic** from a friendly target. **Disease** removal is gated behind the **Improved Purify** talent. *RaidLens usage:* Friendly defensive dispel; judge against mechanics that apply dispellable Magic/Disease debuffs.
- **Mass Dispel** — Spell ID 32375, ~2 min cooldown. Removes harmful Magic from up to 5 friendly targets in an area (and can strip certain normally-undispellable effects). AoE friendly dispel cooldown.
- **Dispel Magic** — Spell ID 528, no cooldown (GCD only). **Offensive** dispel — removes 1 beneficial Magic effect from an enemy.

### Externals (repeat from Role, for the analyzer)
- **Guardian Spirit** — Spell ID 47788, 3 min cooldown. Single-target healing-received increase + cheat-death. *RaidLens usage:* High-value tank/raid external; if a player died to a known lethal hit and a Holy Priest had Guardian Spirit available, that is a notable (group-level) finding — but assignment depends on raid strategy, so treat as informational.
- **Power Infusion** — Spell ID 10060, ~2 min cooldown, ~15s buff.

### Raid buffs/debuffs
- **Power Word: Fortitude** — raid-wide +5% Stamina (ID omitted; see Known Gaps).

### Movement
- **Angelic Feather** — Spell ID 121536, 3 charges, ~20s recharge. Places a feather; first ally through it gains ~40% move speed for ~5s. The spec's only real mobility tool.
- **Leap of Faith** ("Life Grip") — Spell ID 73325, ~1.5 min cooldown. Pulls a friendly target to the priest. Save mechanic, not self-mobility.
- **Fade** — see Defensives (threat drop, no movement).

## Consumables and Enchants

From the live Icy Veins 12.0.5 gems/enchants/consumables page. **Item IDs are NOT included because the page did not show numeric IDs** — names are transcribed as written and should be re-verified in-game before relying on exact spelling.

- **Flask:** Flask of the Shattered Sun (Critical Strike) — Flask of Thalassian Resistance listed as a defensive/Versatility alternative.
- **Combat potion:** Light's Potential.
- **Healing potion:** Silvermoon Health Potion.
- **Food:** Harandar Celebration or Silvermoon Parade (Intellect feasts); any Feast / Master-level food otherwise.
- **Weapon oil:** Thalassian Phoenix Oil.
- **Augment rune:** Void-Touched Augment Rune.
- **Enchants (by slot):** Helm — Empowered Hex of Leeching; Shoulders — Silvermoon's Mending; Chest — Mark of the Worldsoul; Legs — Arcanoweave Spellthread; Boots — Shaladrassil's Roots; Rings — Eyes of the Eagle; Weapon — Acuity of the Ren'dorei.
- **Gems:** Epic — Indecipherable Eversong Diamond; Rare — Flawless Versatile Garnet (primary), with Flawless Deadly Peridot/Amethyst/Lapis for socket-color requirements.
- **Stat priority:** Intellect, then secondaries roughly even with a slight lean toward Critical Strike; do not neglect Versatility/Mastery. Tertiary: Leech preferred, Speed a reasonable choice given the spec's mobility problems.

## Notes and Known Gaps

- **Wowhead guide bodies could not be fetched** (JS-rendered; returned only navigation, then rate-limited with HTTP 403). Spell IDs were instead confirmed against individual Wowhead spell pages (where fetchable), warcraft.wiki.gg, and wowdb.com. Class-mechanic prose leans on Icy Veins (12.0.5) and Method (12.0.5) pages.
- **Apotheosis (200183):** ID came from a Wowhead web-search result that returned the spell page metadata, not a direct successful page fetch. High confidence (also matches WoWDB), but flagged as not directly fetched.
- **Power Infusion (10060):** The fetched spell page showed Shadow-spec damage modifiers in its effect list, indicating the tooltip is shared/spec-modified. Confirm in-game whether Holy can cast Power Infusion on an ally vs. self-only in 12.0.5. Cooldown shown as ~2 min, ~15s duration.
- **Fade (586):** Current spell data shows a ~10% all-school damage-reduction component baked in. Verify whether this is baseline or talent-driven (e.g., Translucent Image) in 12.0.5.
- **Power Word: Fortitude:** Effect confirmed (+5% Stamina, raid-wide) but the warcraft.wiki.gg page did not surface a numeric spell ID, so the ID is intentionally OMITTED.
- **Damage spells (Smite, Holy Fire, Holy Nova, Shadow Word: Pain) and Shackle Undead:** IDs not confirmed live — names included, IDs omitted by design.
- **REMOVED abilities — do NOT treat as current:**
  - **Holy Word: Salvation** (was 265202) — removed in patch 11.1.0.
  - **Symbol of Hope** (was 64901) — removed in patch 12.0.0.
  These are explicitly excluded from the live ability set; if they appear in any older guide, ignore them.
- **Talent-gated defensives:** Protective Light and Angelic Bulwark depend on talent choices; their absence in a log is not necessarily a mistake.
- **Enchant/gem/consumable item IDs:** not shown on the source page — names only, re-verify before hardcoding.
- **Maintenance flag:** Re-verify all of the above after any 12.x patch. Holy Priest's Holy Word cooldown-reduction values, talent layout, and the Oracle/Archon hero trees are the most likely things to change between minor patches.
