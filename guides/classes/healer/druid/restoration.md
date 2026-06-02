# Restoration Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched, June 2026):
> - https://www.wowhead.com/guide/classes/druid/restoration/overview-pve-healer (confirmed patch 12.0.5; JS-rendered, content limited)
> - https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide (updated for 12.0.5)
> - https://www.icy-veins.com/wow/restoration-druid-pve-healing-rotation-cooldowns-abilities (updated May 19, 2026 for 12.0.5)
> - https://www.wowhead.com/spell=22812/barkskin
> - https://www.wowhead.com/spell=88423/natures-cure
> - https://www.wowhead.com/spell=106839/skull-bash
> - https://www.wowhead.com/spell=20484/rebirth
> - https://www.wowhead.com/spell=102342/ironbark
> - https://www.wowhead.com/spell=740/tranquility
> - https://www.wowhead.com/spell=18562/swiftmend
> - https://www.wowhead.com/spell=197721/flourish
> - https://www.wowhead.com/spell=106898/stampeding-roar
> - https://www.wowhead.com/spell=29166/innervate

---

## Overview

Restoration Druid is a HoT-centric (heal-over-time) "ramp" healer. Instead of reacting to incoming damage with large direct heals, the Resto Druid pre-applies a blanket of heal-over-time effects (primarily Rejuvenation) before a known damage window, then amplifies and extends those HoTs with cooldowns so they tick through the spike.

**Core healing loop:**
- Maintain Lifebloom on a target (self by default; cleaves with the Everbloom talent), keep Efflorescence (ground heal) placed under the group, and keep Wild Growth and Swiftmend on cooldown.
- Blanket the raid with Rejuvenation ahead of incoming damage. Each active HoT on a target increases healing on that target via Mastery: Harmony.
- During the damage event, extend/boost the HoT blanket with Tranquility / Flourish / cooldowns, and weave Regrowth for spike healing.

**Throughput / ramp profile:** Strong sustained, rolling raid healing; healing is highest when damage is *predictable* and the druid has time to ramp HoTs in advance. Reactive, unprepared burst healing is the spec's relative weakness — a Resto Druid landing into an unexpected spike has fewer instant "panic" buttons than a beacon/shield healer, leaning on Swiftmend, Regrowth, and Nature's Swiftness.

**Primary weakness:** Ramp-dependent. If the druid is caught flat-footed (no Rejuvenations pre-applied), effective healing on a sudden spike is materially lower. Also contributes relatively low raid DPS compared to some other healers.

---

## Role in Raid

- **Healer.** Sustained rolling raid healing plus a strong group damage-reduction cooldown.
- **Raid buff:** Mark of the Wild — raid-wide stat buff, cast before pulls.
- **Group healing cooldown:** Tranquility (SpellID 740) — channeled raid heal + 20% damage reduction component.
- **HoT extension cooldown:** Flourish (SpellID 197721) — extends active HoTs (see Abilities).
- **External defensive cooldown:** Ironbark (SpellID 102342) — castable on another player; 20% damage reduction for 12s. This is the druid's "external" for soaking a hit on a tank or a targeted player.
- **Battle res:** Rebirth (SpellID 20484) — combat resurrection, 10-minute cooldown, subject to the raid-wide combat-res charge limit.
- **Mobility (group):** Stampeding Roar (SpellID 106898) — +60% run speed to caster and nearby allies (15 yd) for 8s, 2-minute cooldown.
- **Mobility (self):** Druids are highly mobile — most core HoTs are instant-cast and can be applied while moving.

---

## Abilities Reference

SpellIDs below are included ONLY where confirmed on a live Wowhead spell page during research. Where no ID is listed, treat the name as authoritative and the ID as unconfirmed (see Known Gaps).

**Core heals**
- **Rejuvenation** — single-target HoT. The backbone of the ramp; counts toward Mastery stacking. (ID unconfirmed — see gaps.)
- **Regrowth** — instant heal + short HoT; used for spike/spot healing. Benefits from Abundance (cheaper/higher crit after stacking Rejuvenations). (ID unconfirmed.)
- **Wild Growth** — AoE smart HoT, heals up to ~6 targets, used on cooldown. (ID unconfirmed.)
- **Lifebloom** — maintained HoT that blooms when it expires/refreshes. With the Everbloom apex talent it stacks up to 3 and cleaves its bloom healing to nearby allies. (ID unconfirmed.)
- **Swiftmend** — `18562`. Instant heal. Tooltip lists no base cooldown ("n/a" on Wowhead — modified by talents/charges in practice). Often consumes/interacts with a HoT and seeds Efflorescence; with Power of the Archdruid it can apply Rejuvenation to additional targets.
- **Efflorescence** — stationary ground AoE heal placed under the group; can follow the Lifebloom target with the Lifetreading talent. (ID unconfirmed.)

**Cooldowns**
- **Tranquility** — `740`. Channeled raid-wide heal over its duration, plus a 20% damage-reduction area aura and CC immunity component. 3-minute cooldown. Primary raid healing cooldown; best used during peak damage after the Rejuvenation ramp.
- **Flourish** — `197721`. Extends the duration of active heal-over-time effects (Wowhead tooltip shows a dummy aura; HoT-extension behavior described in the Icy Veins guide). No base cooldown shown on the tooltip ("n/a"). Used to stretch a ramped HoT blanket through a damage window.
- **Convoke the Spirits** — channels a rapid burst of random Druid spells (often Wild Growth, Swiftmend, Regrowth, Rejuvenation) and frequently extends HoTs. Cooldown reported around 45s–1min in current guides (talent-dependent). (ID unconfirmed; cooldown unconfirmed — see gaps.)
- **Incarnation: Tree of Life** — alternative throughput cooldown to Convoke: healing increase, instant Regrowth, and mana-free casting while active. (ID unconfirmed.)
- **Innervate** — `29166`. For 8s, spells cost no mana. 3-minute cooldown. Mana cooldown, not a heal — cast on self (or historically an ally) around the 80% mana mark.
- **Nature's Swiftness** — makes the next Regrowth (or similar) instant with bonus healing; emergency single-target tool. (ID unconfirmed.)

**Key passives / procs**
- **Mastery: Harmony** — increases healing done to a target for each of your active heal-over-time effects on that target. This is *why* the spec ramps: more HoTs on a target = more healing per HoT. (ID unconfirmed.)
- **Abundance** (talent) — Rejuvenations make Regrowth cheaper and higher-crit; central to the ramp payoff. (ID unconfirmed.)
- **Pandemic** (HoT refresh mechanic) — refreshing certain HoTs (Lifebloom, Regrowth) can carry over up to ~30% of remaining duration. Per the Icy Veins 12.0.5 rotation page, Rejuvenation no longer benefits from pandemic extension in this patch.

---

## Rotation / Priority

This is logical/priority ordering for analysis purposes, NOT a throughput benchmark.

**Pre-pull / opener:**
- Mark of the Wild on the raid.
- Apply Lifebloom (self or Everbloom target), place Efflorescence under the melee/stack point.

**Ramp (before a known damage window):**
1. Blanket Rejuvenation across the players who will take damage.
2. Pre-cast additional HoTs (Wild Growth) so multiple HoTs are live before the hit (maximizes Mastery: Harmony).
3. As the damage lands, use Tranquility and/or Flourish to extend and amplify the HoT blanket; weave Regrowth (cheap/high-crit from Abundance) for spike topping.
4. Convoke the Spirits or Incarnation: Tree of Life on the largest sustained windows.

**Sustained healing priority (between big windows):**
1. Keep Lifebloom and Efflorescence active.
2. Swiftmend on cooldown.
3. Wild Growth on cooldown.
4. Rejuvenation to maintain the rolling blanket / feed Abundance.
5. Regrowth for spot healing as needed.

**AoE / raid healing priority:**
- Wild Growth + Efflorescence as the AoE base, layered over a Rejuvenation blanket, with Tranquility for the largest raid-wide hits and Flourish to stretch everything.

---

## Defensives

One of the two most important sections for RaidLens. These are the personal/external mitigation buttons whose *use* during a damage window can be judged.

- **Barkskin** — `22812`. -20% damage taken from ALL damage schools (Arcane/Fire/Frost/Holy/Nature/Physical/Shadow) for its duration. **1-minute cooldown.** Self-only personal defensive, instant, usable while CC'd/moving.
  - *RaidLens usage:* This is the druid's frequently-available personal mitigation. During any meaningful personal damage window (a targeted mechanic, standing in a soak, a raid-wide burst), a competent Resto Druid should have Barkskin up. On a 1-minute cooldown it should see heavy use across a pull. Repeated large hits taken with Barkskin available and unused is a flaggable pattern.

- **Survival Instincts** (talented) — large personal damage reduction (historically -50%). **Only available if talented for this spec.** Do NOT assume a Resto Druid has it; check talents/logs before flagging its absence.
  - *RaidLens usage:* If present in the player's spellbook/casts, treat as the "big" personal defensive for the heaviest personal hits. If it never appears in logs, assume untalented rather than misused. (Exact SpellID/cooldown/value unconfirmed for 12.0.5 — see gaps.)

- **Ironbark** — `102342`. -20% damage taken for **12 seconds**, **1.5-minute cooldown.** Cast on **another player** (or self). This is both a personal and an external defensive.
  - *RaidLens usage:* Primarily judged as an external — was it used to cover a tank tankbuster or a targeted player during a known damage event? On a 1.5-min cooldown it should be spent on most major windows. Frequent damage events with Ironbark idle is flaggable.

- **Bear Form** (shapeshift) — shifting to Bear Form grants a large armor/health increase and is a common emergency mitigation for any Druid. Whether it is "correct" depends on whether the druid can afford to stop healing. (ID unconfirmed.)
  - *RaidLens usage:* Treat as situational; do not flag absence. Presence during a lethal personal spike is generally good play.

- **Talent-based passive self-healing/mitigation** — the 12.0.5 guides reference passive survivability talents (e.g. Well-Honed Instincts, Symbiotic Relationship). These are passive, not active buttons, so they are not "usage" decisions to flag.

> Note: Tranquility (740) also carries a 20% damage-reduction aura for the group, but it is primarily a healing cooldown — judge its use as throughput, not as a personal defensive.

---

## Utility

Second most important section for RaidLens. Be exact about what IS and ISN'T an interrupt.

**Interrupt — important nuance:**
- The Druid interrupt is **Skull Bash** (`106839`), 15-second cooldown, flagged on Wowhead as interrupting the current cast.
- **CRITICAL:** Skull Bash requires **Cat Form or Bear Form** (confirmed on the spell page). It is a melee-range, shapeshift-gated charge/interrupt designed for Feral/Guardian play.
- **For a Restoration Druid, Skull Bash is effectively NOT a usable raid interrupt.** A healer is in caster form at range; using Skull Bash means shifting out of healing form, charging to melee range, and stopping healing. In practice, Resto Druids are NOT assigned to interrupt rotations and should generally **not** be expected to interrupt.
- **RaidLens guidance:** Do not flag a Restoration Druid for "missed interrupts." Treat Resto Druid as having **no practically usable raid interrupt.** Missed casts of an interruptible ability are a raid/assignment failure, not a Resto Druid individual failure.

**Dispel:**
- **Nature's Cure** — `88423`. Removes **Magic, Curse, and Poison** effects. Does **NOT** remove Disease.
  - *RaidLens usage:* If a fight has dispellable Magic/Curse/Poison debuffs assigned to healers, a Resto Druid is a valid dispeller. Disease-type debuffs are NOT something this spec can remove — do not flag a Resto Druid for failing to cleanse a Disease.

**External defensive:**
- **Ironbark** (`102342`) — see Defensives. The druid's external damage-reduction cooldown for tanks/targeted players.

**Battle res:**
- **Rebirth** (`20484`) — combat resurrection, 2s cast, 40 yd range, 10-minute cooldown, subject to the shared raid combat-res limit.

**Crowd control / misc utility (largely not flaggable for healing analysis):**
- **Cyclone** — single-target banish/CC. (ID unconfirmed.)
- **Soothe** — removes an enrage effect from an enemy. (ID unconfirmed.)
- **Ursol's Vortex** — area pull/slow utility. (ID unconfirmed.)
- **Hibernate** — CC vs beasts/dragonkin. (ID unconfirmed.)

**Movement:**
- **Stampeding Roar** (`106898`) — +60% group movement speed (15 yd) for 8s, 2-min cooldown. Useful for spread/reposition mechanics.
- Self-mobility: most core HoTs are instant and castable while moving, plus Travel/Cat Form for repositioning.

**Raid buff:**
- **Mark of the Wild** — raid-wide stat buff, maintained out of combat. (ID unconfirmed.)

---

## Consumables and Enchants

Not sourced in this research pass. The specific 12.0.5 phials/potions, food, weapon/gear enchants, and stat priorities for Restoration Druid were not loaded from a live source and are intentionally omitted rather than guessed.

- Stat priority, BiS enchants, phial/potion choices, and food: **UNCONFIRMED — flagged below.**

---

## Notes and Known Gaps

**Confirmed SpellIDs (from live Wowhead spell pages):**
- Barkskin `22812`, Nature's Cure `88423`, Skull Bash `106839`, Rebirth `20484`, Ironbark `102342`, Tranquility `740`, Swiftmend `18562`, Flourish `197721`, Stampeding Roar `106898`, Innervate `29166`.

**Unconfirmed SpellIDs (name authoritative, ID intentionally omitted — do NOT assume):**
- Rejuvenation, Regrowth, Wild Growth, Lifebloom, Efflorescence, Mastery: Harmony, Abundance, Nature's Swiftness, Convoke the Spirits, Incarnation: Tree of Life, Survival Instincts, Bear Form, Cyclone, Soothe, Ursol's Vortex, Hibernate, Mark of the Wild.

**Other gaps / uncertainties:**
- **Cooldowns shown as "n/a" on Wowhead tooltips** for Swiftmend (18562) and Flourish (197721) — base values are modified by talents/charges; exact effective cooldowns for the current 12.0.5 build are unconfirmed.
- **Convoke the Spirits cooldown** — guides report ~45s to ~1min depending on talents; not pinned to a single confirmed value.
- **Survival Instincts** — whether it is available to Restoration (talent) and its exact value/cooldown/SpellID in 12.0.5 is unconfirmed. Verify against the player's actual talents before flagging.
- **Wowhead guide pages** (overview/abilities) are JavaScript-rendered; only the patch version (12.0.5) and high-level framing could be extracted directly. Ability detail in this guide leans on the Icy Veins 12.0.5 rotation/overview pages plus individual confirmed Wowhead spell pages.
- **Consumables, enchants, stat priority, talent build/import string, and SimC APL** — not sourced; intentionally omitted. No user-provided SimC profile was available.
- **Everbloom apex / Wildstalker hero tree specifics** — mentioned at a high level (Lifebloom stacking to 3, bloom cleave; Wildstalker used in all content per current guides) but mechanics not fully detailed or ID-confirmed.

**Maintenance flag:** Re-verify all SpellIDs, cooldowns, talent availability (especially Survival Instincts), and the Skull Bash form requirement after ANY 12.x patch. SpellIDs are stable across patches, but cooldowns, talent trees, mastery values, and which spells exist for the spec can change. Last verified June 2026 against patch 12.0.5.
