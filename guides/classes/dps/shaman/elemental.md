# Elemental Shaman — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/shaman/elemental/overview-pve-dps (metadata only — body did not render)
> - https://www.icy-veins.com/wow/elemental-shaman-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/elemental-shaman-pve-dps-spell-summary
> - https://www.wowhead.com/spell=108271/astral-shift
> - https://www.wowhead.com/spell=57994/wind-shear
> - https://www.wowhead.com/spell=51505/lava-burst
> - https://www.wowhead.com/spell=188389/flame-shock
> - https://www.wowhead.com/spell=8042/earth-shock
> - https://www.wowhead.com/spell=51490/thunderstorm
> - https://www.wowhead.com/spell=2825/bloodlust
> - https://www.wowhead.com/spell=462854/skyfury
> - https://www.wowhead.com/spell=8143/tremor-totem
> - https://www.wowhead.com/spell=192058/capacitor-totem
> - https://www.wowhead.com/spell=191634/stormkeeper
> - https://www.wowhead.com/spell=114050/ascendance
> - https://www.wowhead.com/spell=51514/hex
> - https://www.wowhead.com/spell=51886/cleanse-spirit
> - https://www.wowhead.com/spell=61882/earthquake
> - https://www.wowhead.com/spell=188196/lightning-bolt
> - https://www.wowhead.com/spell=188443/chain-lightning
> - https://www.wowhead.com/spell=117014/elemental-blast
> - https://www.wowhead.com/spell=454009/tempest
> - https://www.wowhead.com/spell=79206/spiritwalkers-grace
> - https://www.wowhead.com/spell=198067/fire-elemental

## Overview

Elemental Shaman is a ranged DPS specialization that deals Fire and Nature (lightning) damage. Its core gameplay loop is a builder/spender model around the **Maelstrom** resource: cast generators and instant abilities to build Maelstrom, then dump it into hard-hitting spenders. In Midnight (12.x) the rotation was simplified — Icefury, Primordial Wave, and Liquid Magma Totem were removed, and Fire Elemental / Storm Elemental are now talent-gated cooldowns rather than baseline.

The single-target loop centers on keeping **Flame Shock** (a Fire/Nature damage-over-time debuff) on the target, casting **Lava Burst** (guaranteed-crit hit, especially on Lava Surge procs), filling with **Lightning Bolt**, and spending Maelstrom on **Earth Shock** or **Elemental Blast**. **Stormkeeper** and the **Tempest** proc empower lightning casts. AoE shifts toward **Chain Lightning** and **Earthquake**.

Damage/healing/survivability profile: pure damage dealer with strong burst windows (Stormkeeper + Ascendance + Fire Elemental aligned with cooldowns) and respectable sustained throughput. It carries off-healing via Healing Surge but is not a healer. Survivability is moderate — one strong personal damage reduction (Astral Shift) plus a passive health backstop, but no immunities.

Primary weakness: cast-time dependency. Much of its damage (Lightning Bolt, Chain Lightning, Lava Burst hardcasts) requires standing still, so heavy-movement encounters punish it unless Spiritwalker's Grace, Spirit Walk, or instant procs are used to compensate.

## Role in Raid

- **Role:** Ranged DPS.
- **Bloodlust-equivalent:** YES. Elemental Shaman provides **Bloodlust** (`2825`) — a 40-second raid-wide attack-speed/haste boost on a 5-minute cooldown (Horde-faction casters see the same effect as Heroism). This is the raid's lust/hero where no other source exists.
- **Battle res:** NO. Shaman has no combat resurrection.
- **Raid buff:** **Skyfury** (`462854`) — grants Mastery and empowers auto-attacks (per the spell page and Icy Veins glossary). This is the spec's group/raid buff contribution.
- **Group utility totems:** Tremor Totem (anti-fear/charm/sleep), Wind Rush Totem (group movement speed), Earthbind Totem (enemy slow), Capacitor Totem (AoE stun), Poison Cleansing Totem (group poison removal).
- **Externals:** NONE that protect another player directly (no Pain Suppression/Blessing-style damage transfer). Earth Elemental can off-tank/taunt briefly, which is the closest thing to a defensive contribution for the group.
- **Mobility profile:** Above-average for a caster — Spirit Walk, Gust of Wind (talent), Spiritwalker's Grace (cast-while-moving), Ghost Wolf, plus many instant rotational spells. Still fundamentally a caster that wants to plant for its biggest casts.

## Abilities Reference

Spell IDs below were each confirmed on a live Wowhead spell page (June 2026).

Core damage:
- **Lightning Bolt** (`188196`) — Nature filler / Maelstrom generator. ~2.5s cast.
- **Lava Burst** (`51505`) — Fire nuke, benefits from Lava Surge procs (instant) and Flame Shock on target. Do NOT hardcast without Flame Shock active or a Lava Surge proc.
- **Flame Shock** (`188389`) — Fire/Nature DoT, ~18s duration. Must be maintained; enables Lava Burst.
- **Earth Shock** (`8042`) — single-target Maelstrom spender.
- **Elemental Blast** (`117014`) — alternative spender (talented), also a stat buff.
- **Chain Lightning** (`188443`) — multi-target Nature filler/generator.
- **Earthquake** (`61882`) — ground-targeted AoE spender, costs 60 Maelstrom (per spell page).
- **Tempest** (`454009`) — empowered lightning proc/spell (Nature) used in the lightning rotation.

Cooldowns:
- **Stormkeeper** (`191634`) — buff, 1-minute cooldown, 15s duration; empowers lightning casts. Used roughly on cooldown.
- **Ascendance** (`114050`) — Fire-school burst cooldown, **3-minute cooldown** (per spell page); the spec's major burst window.
- **Fire Elemental** (`198067`) — summon cooldown (talent), persistent DPS pet aligned with burst.
- **Ancestral Swiftness** — haste/cast cooldown used in the opener (talent; spell ID not confirmed — see Known Gaps).

Key passives/procs (named in the rotation guide; not individually ID-confirmed here):
- **Lava Surge** — proc making the next Lava Burst instant.
- **Voltaic Blaze** — used to refresh Flame Shock and as a builder in some builds.
- **Lightning Rod** — debuff interacting with Tempest/lightning spenders in AoE.

## Rotation / Priority

This is logical/priority ordering for log analysis, NOT a DPS benchmark or sim APL. Exact talent build changes spell choices. From Icy Veins (12.0.5):

**Opener (single-target):**
1. Stormkeeper ~3s before pull.
2. Lava Burst timed to land on pull.
3. Ancestral Swiftness.
4. Ascendance with trinkets/potion.
5. Lava Burst, then Tempest, then enter sustained rotation.

**Sustained single-target priority:**
1. Keep **Flame Shock** up (refresh ~6s remaining, or via Voltaic Blaze).
2. **Stormkeeper** on cooldown (may delay up to ~10s to line up with Ascendance).
3. Use **Ascendance** / **Ancestral Swiftness** aligned with buffs.
4. **Lava Burst** only on Lava Surge procs or with Flame Shock active.
5. Spend Maelstrom: **Earth Shock** / **Elemental Blast**.
6. Lightning: **Tempest** / **Lightning Bolt** (empowered by Stormkeeper) as filler.

**AoE priority (3+ targets):**
- 3 targets: Elemental Blast on a target without Lightning Rod (under low Tempest stacks), maintain one Flame Shock (via Voltaic Blaze), Earthquake below single-target spenders.
- 4+ targets: shift to **Chain Lightning** with Stormkeeper stacks, prioritize **Earthquake**, keep Elemental Blast buff uptime.

## Defensives

Each entry includes a RaidLens usage note for judging correct use during a lethal/avoidable damage window.

- **Astral Shift** (`108271`) — **40% reduced damage of ALL schools for 12s. Base cooldown 2 minutes** (per the live spell page). Talents can lower it; Icy Veins lists 1.5 min in some builds. This is the spec's main active mitigation.
  - *RaidLens usage:* The primary thing to check. For a large predictable hit (a telegraphed boss ability or stacking raid damage), Astral Shift should be active across the hit. If a player took heavy or lethal avoidable/expected damage and Astral Shift was off cooldown (no cast in the prior ~2 min) and unused, flag it. Treat 2 min as the conservative availability window; if a recent cast exists within ~90–120s, it may legitimately have been on cooldown.

- **Nature's Guardian** (passive, talent) — heals for ~40% max health when health drops below 35%; ~45-second internal cooldown (per Icy Veins glossary). Spell ID not confirmed — see Known Gaps.
  - *RaidLens usage:* Passive — not a player decision. Do NOT flag as "unused." It can explain a survived hit. Its ~45s internal cooldown means it may not fire on rapid consecutive lethal hits.

- **Healing Surge** (off-heal) — fast direct heal usable on self or allies; costs mana. Spell ID not confirmed — see Known Gaps.
  - *RaidLens usage:* A reactive self-save. Hard to demand in logs; absence is not automatically a mistake. Presence on a near-death pull is a positive signal. Do not flag absence unless the player clearly had idle GCDs while dying to sustained damage.

- **Earth Elemental** (summon, ~1 minute) — tanky summon that can taunt and soak (per Icy Veins glossary). Spell ID not confirmed — see Known Gaps.
  - *RaidLens usage:* Situational/utility defensive, often used to off-tank an add or soak. Absence is rarely a mistake; treat as encounter-specific.

- **Stone Bulwark Totem** — an absorb-shield totem in the shaman kit historically; **not confirmed present/baseline for Elemental in 12.0.5** from the sources fetched. See Known Gaps. Do not assume it exists for this spec until confirmed.

Note: Elemental has NO immunity and NO hard damage-cap/cheat-death active. Astral Shift is the only on-demand percentage mitigation.

## Utility

**Interrupt:**
- **Wind Shear** (`57994`) — the spec's interrupt and its **ONLY** raid-usable kick. Instant, **12-second cooldown**, 30-yard range (per Icy Veins glossary; spell page confirms 12s cooldown). The exact school-lockout duration was NOT confirmed from the fetched spell page (historically 2–3s) — see Known Gaps.
  - *RaidLens usage:* Elemental DOES have a real interrupt. On encounters with assigned/required kicks, missed interrupts on this player are flaggable. With only a 12s cooldown and 30-yard range, it is one of the more available ranged kicks, so missed assigned interrupts are meaningful.

**Crowd control / stun:**
- **Capacitor Totem** (`192058`) — AoE stun (8-yard radius, ~3s) on a 1-minute cooldown. The fetched page confirmed the totem, radius, duration and cooldown; the explicit "stun" mechanic text was not shown but is the known effect (see Known Gaps for the mechanic-text caveat).
- **Hex** (`51514`) — single-target incapacitate (transforms into a frog, ~60s), breaks on damage. Not usable on most bosses.
- **Earthbind Totem** — AoE 50% slow (per glossary). Spell ID not confirmed.

**Dispels:**
- **Cleanse Spirit** (`51886`) — removes **Curse** from a friendly target, 40-yard range, 8s cooldown (confirmed on spell page). This is the spec's only friendly magic-category dispel and it is Curse-only.
- **Poison Cleansing Totem** — removes poison from group members over its duration (per glossary; talent/totem). Spell ID not confirmed.
- **Purge** — removes 1 beneficial **Magic** effect from an ENEMY (offensive dispel), costs mana (per glossary). Spell ID not confirmed.
- Elemental CANNOT dispel Magic or Disease from allies. Friendly cleansing is limited to Curse (Cleanse Spirit) and Poison (Poison Cleansing Totem, if talented).

**Anti-CC / raid utility totems:**
- **Tremor Totem** (`8143`) — removes/prevents Fear, Charm, and Sleep for the group, instant, 1-minute cooldown, 10s duration (confirmed on spell page).
- **Wind Rush Totem** — group movement-speed totem (talent; per glossary). Spell ID not confirmed.

**Raid buffs/debuffs:**
- **Skyfury** (`462854`) — raid buff (Mastery + empowered autos), confirmed on spell page.
- **Bloodlust** (`2825`) — raid-wide haste, 40s, 5-min cooldown (confirmed; the spec's lust source).

**Movement tools:**
- **Spiritwalker's Grace** (`79206`) — cast while moving for 15s plus a run-speed increase; **base cooldown 2 minutes** per the spell page (Icy Veins lists 1.5 min, likely talented).
- **Spirit Walk** — removes movement-impairing effects, +60% speed for ~8s, ~1-min cooldown (per glossary). Spell ID not confirmed.
- **Gust of Wind** — forward leap, ~20s cooldown (talent; per glossary). Spell ID not confirmed.
- **Ghost Wolf** — +30% speed travel form, cannot cast while active (per glossary). Spell ID not confirmed.
- **Thunderstorm** (`51490`) — knockback (~10-yard radius) plus a 40% slow on hit enemies (confirmed on spell page); usable as a self-peel/knockback utility.

## Consumables and Enchants

Not confirmed from the sources fetched in this session. The Wowhead overview page body did not render, and dedicated enchant/gem/consumable pages were not loaded. Standard 12.0.5 Intellect-based flasks, food, augment rune, and weapon/gear enchants apply, but specific item IDs and current best-in-slot consumables are NOT confirmed here — see Known Gaps. Do not rely on this section for item IDs; none are provided rather than risk a fabricated ID.

## Notes and Known Gaps

Unconfirmed facts (named so they are not trusted as IDs in analysis):
- **Wind Shear school-lockout duration** — cooldown (12s) and range (30y) confirmed; the lockout/silence duration was not shown on the fetched page (historically 2–3s). Re-verify.
- **Ascendance / Spiritwalker's Grace / Astral Shift cooldowns** — spell pages give Ascendance 3 min, Spiritwalker's Grace 2 min, Astral Shift 2 min as BASE values. Talents in the active build can reduce these (Icy Veins cited 1.5 min for Astral Shift and SWG). When judging "was a defensive available," allow for talented reductions.
- **Capacitor Totem stun text** — the fetched page confirmed totem/radius/duration/cooldown but did not render the explicit "stun" effect line. Stun is the known effect; treat the mechanic as confirmed-by-context, not by literal page text.
- **No-ID abilities** — the following were described by the Icy Veins glossary but their spell IDs were NOT individually confirmed on a spell page, so no IDs are given: Nature's Guardian, Healing Surge, Earth Elemental, Spirit Walk, Gust of Wind, Ghost Wolf, Wind Rush Totem, Earthbind Totem, Purge, Poison Cleansing Totem, Ancestral Swiftness, and the passives Lava Surge / Voltaic Blaze / Lightning Rod.
- **Stone Bulwark Totem** — not confirmed as a current Elemental defensive in 12.0.5 from fetched sources; do not assume it exists for this spec until verified.
- **Consumables and Enchants** — no item IDs sourced this session; section is conceptual only.
- **Talent import string / SimC APL** — not available (no user-supplied profile); intentionally omitted.
- **Wowhead overview page** — fetched but its body did not render (metadata only); rotation/utility detail here leans on the Icy Veins rotation and spell-summary pages plus individual Wowhead spell pages.

Maintenance flag: Re-verify all of the above — and every spell ID and cooldown — after any 12.x patch. Spell IDs do not change once assigned, but cooldowns, talents, baseline-vs-talent status, and which abilities exist for the spec CAN change between patches.
