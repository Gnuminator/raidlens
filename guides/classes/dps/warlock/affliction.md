# Affliction Warlock — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.icy-veins.com/wow/affliction-warlock-pve-dps-guide
> - https://www.method.gg/guides/affliction-warlock/playstyle-and-rotation
> - https://www.wowhead.com/spell=980/agony
> - https://www.wowhead.com/spell=146739/corruption
> - https://www.wowhead.com/spell=316099/unstable-affliction
> - https://www.wowhead.com/spell=27243/seed-of-corruption
> - https://www.wowhead.com/spell=205180/summon-darkglare
> - https://www.wowhead.com/spell=386997/soul-rot
> - https://www.wowhead.com/spell=104773/unending-resolve
> - https://www.wowhead.com/spell=108416/dark-pact
> - https://www.wowhead.com/spell=108503/grimoire-of-sacrifice
> - https://www.wowhead.com/spell=19647/spell-lock
> - https://www.wowhead.com/spell=19505/devour-magic
> - https://www.wowhead.com/spell=20707/soulstone
> - https://www.wowhead.com/spell=48020/demonic-circle-teleport
> - https://www.wowhead.com/spell=111771/demonic-gateway
> - https://www.wowhead.com/spell=5484/howl-of-terror
> - https://www.wowhead.com/spell=30283/shadowfury
> - https://www.wowhead.com/spell=6789/mortal-coil
> - https://www.wowhead.com/spell=5782/fear
> - https://www.wowhead.com/spell=5697/unending-breath

## Overview

Affliction Warlock is a ranged DPS specialization built around maintaining a suite of damage-over-time effects and then amplifying them with cooldowns. The core gameplay loop is: apply and maintain **Agony** (SpellID 980) and **Corruption** (SpellID 146739) on the target(s), spend Soul Shards (generated primarily by Agony ticks) on **Unstable Affliction** (SpellID 316099) for single target or **Seed of Corruption** (SpellID 27243) for AoE, and burst with **Summon Darkglare** (SpellID 205180) and other cooldowns lined up while DoTs are at maximum strength. Shadow Bolt (or Drain Soul / Malefic Grasp depending on build) is the filler cast.

Damage profile: primarily sustained, ramping Shadow damage from DoTs, with strong multi-target/cleave through Seed of Corruption and curse spreading. Burst is "windowed" — the spec wants DoTs already applied before pressing cooldowns, so its damage is front-loaded after a ramp rather than instant.

Primary weakness: ramp dependency. When targets die quickly, when the warlock is forced to re-apply DoTs after target swaps, or when heavy movement interrupts hardcast spenders, throughput drops. It is not a strong instant-burst spec for sudden priority targets.

Survivability is a notable strength: a stacked shield/absorb kit (Soul Leech overshield, Dark Pact absorb, Unending Resolve damage reduction) lets the spec self-buffer through raid damage windows.

## Role in Raid

- **Role:** Ranged DPS. Not a healer, not a tank.
- **Battle resurrection:** YES. **Soulstone** (SpellID 20707) is an in-combat resurrection and counts against the raid's combat-res limit. This is a meaningful raid utility — the warlock can pre-cast a Soulstone on a player before a pull or battle-res a dead player in combat.
- **Bloodlust/Heroism equivalent:** NO. Warlocks do not provide a Bloodlust-class raid haste cooldown.
- **Raid buffs/debuffs:** Affliction's group contribution is primarily utility (Healthstones, Demonic Gateway, curses) and its battle res, rather than a unique percentage raid damage buff. See Known Gaps — the exact current raid-wide buff/debuff package for 12.0.5 could not be fully confirmed from a live source and should be verified.
- **Group defensives / externals:** Provides **Healthstones** (raid-wide self-heal items the warlock creates for the group) and **Demonic Gateway** (SpellID 111771) for group repositioning. It does NOT provide a targeted damage-reduction external onto another player (no Pain Suppression / Blessing-style external).
- **Mobility profile:** Moderate. DoTs can be maintained while moving and several procs/instants are usable on the move, but the spec still wants to stand still for hardcast spenders and filler. Movement tools are **Demonic Circle: Teleport** (SpellID 48020) and **Demonic Gateway** (SpellID 111771). No blink/leap-style gap closer.

## Abilities Reference

Core DoTs and spenders:
- **Agony** — SpellID 980. Stacking Shadow DoT, primary Soul Shard generator. Maintain at all times.
- **Corruption** — SpellID 146739. Baseline Shadow DoT. Maintain at all times.
- **Unstable Affliction** — SpellID 316099. Single-target Soul Shard spender; also amplifies the warlock's other affliction DoTs.
- **Seed of Corruption** — SpellID 27243. AoE Soul Shard spender; detonates for area Shadow damage and spreads Corruption.

Cooldowns:
- **Summon Darkglare** — SpellID 205180. ~2-minute cooldown. Summons Darkglare for 20 seconds; primary damage burst cooldown, lined up with full DoTs and dumped shards.
- **Soul Rot** — SpellID 386997. ~1-minute cooldown. Channeled/leeching Shadow damage over 8 seconds across nearby targets; also provides self-healing via the leech aura.

Filler / supporting:
- **Shadow Bolt** — filler cast during downtime (SpellID not confirmed from a live source; see Known Gaps).
- **Dark Harvest** — talent, roughly 1-minute cooldown per Icy Veins; deals damage to all targets carrying the warlock's baseline DoTs (SpellID not confirmed; see Known Gaps).
- **Malevolence** — Hellcaller hero-talent cooldown referenced by Method (SpellID not confirmed from a Wowhead spell page; see Known Gaps).
- Talent-dependent additions such as Phantom Singularity, Vile Taint, and Wither appear in Unstable Affliction's amplification list and in build discussions; their selection depends on the chosen talent tree.

Key passives/procs (build-dependent): Soul Leech (overshield from damage dealt), Soul Link (damage mitigation), Sudden Onset (reduced Agony ramp). Exact passive SpellIDs not confirmed live — see Known Gaps.

## Rotation / Priority

This is logical/conceptual priority ordering, NOT a DPS benchmark or simulation result. No SimC profile was provided for this guide.

**Single-target opener (per Method):** precast Haunt → apply Agony → apply Corruption → Summon Darkglare plus on-use trinkets/racials → Malevolence (if Hellcaller) → spend all shards on Unstable Affliction → Dark Harvest (if specced) → spend remaining shards on Unstable Affliction → resume filler (Malefic Grasp / Shadow Bolt).

**Sustained single target:**
1. Keep Agony and Corruption (or Wither, if talented) active 100% of the time — never let them fall off.
2. Use Dark Harvest on cooldown (or hold briefly for priority adds coming up).
3. Pool Soul Shards to dump during the Summon Darkglare window.
4. Spend shards on Unstable Affliction.
5. Fill with Shadow Bolt / Malefic Grasp / Drain Soul (per build).

**AoE / multi-target:**
1. Apply Agony to as many targets as practical (typically 4–6 priority targets).
2. Spread Corruption and use curse-spreading effects if talented.
3. Cast Seed of Corruption as the primary shard spender, refreshing on new packs.
4. Use Soul Rot and Summon Darkglare to amplify the DoT spread.

## Defensives

Every personal/raid defensive the spec has access to. "RaidLens usage" describes how to judge correct use during a damage window.

- **Unending Resolve** — SpellID 104773. ~3-minute cooldown, 8-second duration. Reduces damage taken by 25% (all schools); also grants immunity to interrupt/silence during its duration.
  - *RaidLens usage:* This is the main planned-mitigation cooldown. For a large predictable raid hit, check whether Unending Resolve was active in the 8-second window covering the hit. If the warlock took heavy avoidable or scripted damage with this off cooldown and unused, flag it. Note the long ~3-min cooldown — only expect it on the biggest windows.

- **Dark Pact** — SpellID 108416. 1-minute cooldown, 20-second buff. Absorbs a large amount of damage (all schools) and heals slightly each second over its duration.
  - *RaidLens usage:* Short cooldown, so it should be used freely on recurring damage windows. If the warlock died to a hit (or chunk of sustained raid damage) while Dark Pact was available and unused, that is a strong flag. Because it is only ~1 min, expect frequent uptime across a pull.

- **Soul Leech** (passive) — overshield generated from damage dealt. Build-dependent passive; SpellID not confirmed live.
  - *RaidLens usage:* Passive, not actively pressed — do not flag as "unused." Treat as background mitigation. A warlock doing low damage will have a thinner Soul Leech shield, which can compound deaths.

- **Soul Link** (passive/talent) — damage mitigation tied to the pet. SpellID not confirmed live.
  - *RaidLens usage:* Passive. Do not flag as unused. Note that losing the pet (or Grimoire of Sacrifice builds) changes this; do not assume it is always present.

- **Mortal Coil** — SpellID 6789. 45-second cooldown. Fears the target for 3 seconds AND heals the warlock for a percentage of health. Talent choice node with Howl of Terror / Shadowfury.
  - *RaidLens usage:* Doubles as a small self-heal. Only present if talented (mutually exclusive with other CC in that node), so do not assume availability. If talented and the warlock died at low health with Mortal Coil up, it could be a minor flag, but it is primarily CC.

- **Healthstone** — consumable created by the warlock (instant self-heal item). SpellID not confirmed live (page 403'd).
  - *RaidLens usage:* Every player can use their own Healthstone. If a warlock (or any raider) died at low health with a Healthstone still available, that is a flag — but Healthstone usage is a personal/raid-wide consumable, not unique tracking for this spec.

- **Drain Life** — leech filler that heals the warlock; talent/situational. SpellID not confirmed live.
  - *RaidLens usage:* Self-sustain filler. Not a true cooldown; do not flag as an unused defensive.

## Utility

**Interrupt:**
- **Spell Lock** — SpellID 19647. This is the Felhunter (Felguard pet does not provide it) pet ability: instant, 40-yard range, 24-second cooldown, interrupts the current cast and locks that spell school for ~7 seconds. **This is the spec's ONLY interrupt, and it is pet-based.**
  - IMPORTANT for RaidLens: Affliction has NO personal/baseline interrupt on the warlock itself. The interrupt requires the Felhunter pet (or the talent that grants Spell Lock to other pets / via Command Demon). Builds running **Grimoire of Sacrifice** (SpellID 108503) sacrifice the pet entirely and therefore have NO interrupt available at all. When judging a missed interrupt, do not assume an Affliction warlock could kick unless a Felhunter was present. If the log shows no pet / a sacrificed pet, the warlock has no interrupt to miss.

**Dispel:**
- **Devour Magic** — SpellID 19505. Felhunter pet ability. Dispels Magic. It can remove a beneficial Magic effect from an enemy and (build-dependent) a harmful Magic effect; exact friendly-target dispel scope for 12.0.5 not fully confirmed live — see Known Gaps. Like the interrupt, it requires the Felhunter pet and is unavailable under Grimoire of Sacrifice.
  - Note: Affliction is NOT a primary raid dispel class. Treat Devour Magic as situational pet utility, not reliable raid dispel coverage.

**Crowd control:**
- **Fear** — SpellID 5782. Single-target fear (causes target to flee).
- **Howl of Terror** — SpellID 5484. 40-second cooldown. AoE fear, up to 5 targets within 10 yards, ~20 seconds.
- **Shadowfury** — SpellID 30283. 1-minute cooldown. AoE stun, 3 seconds, 8-yard radius. (Talent node shared with Howl of Terror / Mortal Coil — only one is typically chosen.)
- **Mortal Coil** — SpellID 6789. Single-target fear + self-heal (see Defensives).
- **Banish** — single-target incapacitate vs. Demon/Elemental enemies. SpellID not confirmed live (page 403'd).

**Externals:** None. Affliction cannot place a damage-reduction or immunity buff on another raider. (Soulstone battle-res is its only "save another player" tool, and only after death.)

**Raid buffs/debuffs & group utility:**
- **Soulstone** — SpellID 20707. Battle resurrection (counts against the raid combat-res limit).
- **Demonic Gateway** — SpellID 111771. Two-portal group teleport for repositioning, ~10-second cooldown to recast.
- **Healthstones** — created for the raid; group self-heal consumables.
- **Curse of Tongues** and other curses — utility debuffs (slow enemy casting, etc.). Curse of Tongues SpellID not confirmed live (page 403'd).
- **Unending Breath** — SpellID 5697. Underwater breathing / swim speed utility buff (non-combat).

**Movement tools:**
- **Demonic Circle: Teleport** — SpellID 48020. 30-second cooldown, teleport up to 40 yards back to a placed circle; also breaks snares.
- **Demonic Gateway** — SpellID 111771 (see above).

## Consumables and Enchants

The exact current-patch (12.0.5) consumable, gem, and enchant recommendations could not be confirmed from a live source during this research pass (the relevant Wowhead enchant/gear sub-pages rendered only navigation, and item pages were not individually fetched). General profile only:

- Stat priority and best-in-slot enchants/gems should be re-pulled from a live source before relying on them. See Known Gaps.
- Healthstone (created by the warlock) is the spec's signature consumable contribution to the raid.

No specific consumable, gem, flask, food, or enchant item IDs are included because none were confirmed live. Do not infer them.

## Notes and Known Gaps

Unconfirmed facts (numeric IDs intentionally OMITTED rather than guessed):
- **Shadow Bolt** SpellID — not confirmed from a live spell page.
- **Dark Harvest** SpellID and exact cooldown — Icy Veins describes a ~1-minute cooldown; Method shows a parenthetical ID, but the Wowhead spell page was not fetched, so the ID is omitted.
- **Malevolence** (Hellcaller hero talent) SpellID — Method shows a parenthetical ID, but it was not confirmed on a Wowhead spell page; omitted.
- **Soul Leech**, **Soul Link**, **Sudden Onset**, **Drain Life** SpellIDs — passive/talent IDs not confirmed live.
- **Healthstone** use SpellID — Wowhead page returned HTTP 403; omitted.
- **Curse of Tongues** SpellID — Wowhead page returned HTTP 403; omitted.
- **Banish** SpellID — Wowhead page returned HTTP 403; omitted.
- **Devour Magic** friendly-target dispel scope (whether it can remove harmful Magic from allies in 12.0.5) — not confirmed; the spell page only listed "Dispel (Magic)" without target scope.
- **Raid buff/debuff package** — the unique raid-wide buff/debuff (if any) Affliction provides in 12.0.5 was not confirmed from a live source. Verify before relying on it.
- **Phantom Singularity / Vile Taint / Wither** — appear in Unstable Affliction's amplification list and in build talk, but their selection and IDs are talent-dependent and were not individually confirmed; treat as build-conditional.
- **Consumables / enchants / gems / stat priority** — not confirmed live; re-pull before use.

Confirmed-live SpellIDs used in this guide: 980 (Agony), 146739 (Corruption), 316099 (Unstable Affliction), 27243 (Seed of Corruption), 205180 (Summon Darkglare), 386997 (Soul Rot), 104773 (Unending Resolve), 108416 (Dark Pact), 108503 (Grimoire of Sacrifice), 19647 (Spell Lock), 19505 (Devour Magic), 20707 (Soulstone), 48020 (Demonic Circle: Teleport), 111771 (Demonic Gateway), 5484 (Howl of Terror), 30283 (Shadowfury), 6789 (Mortal Coil), 5782 (Fear), 5697 (Unending Breath).

**Maintenance flag:** Re-verify every SpellID, cooldown, talent name, and the interrupt/dispel availability after ANY 12.x patch. Pet-based interrupt/dispel availability in particular can shift with talent reworks. The Grimoire of Sacrifice "no pet = no interrupt/dispel" interaction is the single most important thing for RaidLens to re-check each patch.
