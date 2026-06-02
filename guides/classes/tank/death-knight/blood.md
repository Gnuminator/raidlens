# Blood Death Knight — Raid Guide (WoW Midnight, Patch 12.0.5)
> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/death-knight/blood/rotation-cooldowns-pve-tank
> - https://www.wowhead.com/spell=47528/mind-freeze
> - https://www.wowhead.com/spell=49028/dancing-rune-weapon
> - https://www.wowhead.com/spell=55233/vampiric-blood
> - https://www.wowhead.com/spell=48792/icebound-fortitude
> - https://www.wowhead.com/spell=48707/anti-magic-shell
> - https://www.wowhead.com/spell=51052/anti-magic-zone
> - https://www.wowhead.com/spell=49998/death-strike
> - https://www.wowhead.com/spell=49576/death-grip
> - https://www.wowhead.com/spell=108199/gorefiends-grasp
> - https://www.wowhead.com/spell=61999/raise-ally
> - https://www.wowhead.com/spell=49039/lichborne
> - https://www.wowhead.com/spell=195182/marrowrend
> - https://www.wowhead.com/spell=195181/bone-shield
> - https://www.wowhead.com/spell=194679/rune-tap
> - https://www.wowhead.com/spell=219809/tombstone
> - https://www.wowhead.com/spell=48265/deaths-advance
> - https://www.wowhead.com/spell=221562/asphyxiate
> - https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide
> - https://www.icy-veins.com/wow/blood-death-knight-pve-tank-rotation-cooldowns-abilities

## Overview

Blood Death Knight is a melee tank built around **active, reactive self-healing** rather than passive damage avoidance. Its core loop:

- Spend Runes (Marrowrend, Heart Strike, Blood Boil, Death's Caress) to maintain **Bone Shield** and generate **Runic Power**.
- Spend Runic Power on **Death Strike**, which heals based on damage taken in the preceding window. This is the spec's primary survival lever — its self-healing is *reactive*, so a Blood DK that is not pressing Death Strike during a damage spike is throwing away its main mitigation.
- Maintain **Bone Shield** stacks at all times; while at least one stack is active the DK gains a large armor bonus (180% of Strength as armor in Midnight) and, with the relevant talent, increased Haste for Rune regeneration.

Damage/healing/survivability profile: low-to-middling personal DPS on a strict ~90-second to 2-minute burst cycle; very high self-sustain through Death Strike and a deep stack of short-cooldown defensive buttons; strong magic mitigation via Anti-Magic Shell/Zone.

Primary weakness: survivability is **active and resource-gated** — if the player runs out of Runic Power, lets Bone Shield drop, or fails to press Death Strike into a damage window, the spec is fragile. Sources note Death Strike healing and several defensives were nerfed going into Midnight, sharpening this weakness. Personal damage is also low relative to other tanks.

## Role in Raid

- **Role:** Tank.
- **Battle resurrection:** YES — **Raise Ally** (spell ID 61999, 10 min cooldown) is a combat resurrection that counts against the raid's shared battle-res limit. This is notable; many tanks lack a battle res, but Death Knight has one.
- **Bloodlust/Heroism equivalent:** NO. Blood Death Knight does not provide any Bloodlust/Heroism/Time Warp effect.
- **Raid buffs/debuffs brought:** Not confirmed from a live source in this research pass. Historically Death Knights contributed little in the way of a unique raid-wide percentage buff. Flagged in Known Gaps — do not assume a buff is present.
- **Group utility / control:** **Death Grip** (single-target pull/taunt-adjacent reposition), **Gorefiend's Grasp** (mass grip, pulls nearby enemies to a target), **Anti-Magic Zone** (raid-wide magic damage reduction bubble — a true group defensive). See Utility and Defensives.
- **Externals:** No single-target damage-reduction external on another player confirmed. Anti-Magic Zone is the group-protection tool. Flagged in Known Gaps if a targeted external exists.
- **Mobility:** Below average. **Death's Advance** (movement speed + forced-movement/snare immunity) plus optional talented mobility (e.g. Wraith Walk / March of Darkness per source). No blink or leap baseline.

## Abilities Reference

Confirmed spell IDs are from individual live Wowhead spell pages fetched this session.

Core builders / spenders:
- **Death Strike** (49998) — no cooldown; costs 45 Runic Power. Primary spender; heals based on recent damage taken (mastery-scaled blood shield). The survival button.
- **Marrowrend** (195182) — no cooldown; costs 2 Runes. Applies 3 stacks of Bone Shield (Death's Caress applies 2). Used to keep Bone Shield up.
- **Heart Strike** — Rune-spending filler; target-capped cleave. Used to keep Runes recharging. (Spell ID not confirmed this session — see Known Gaps.)
- **Blood Boil** — charge-based AoE that applies disease (Blood Plague); cast on Boiling Point procs. (Spell ID not confirmed this session — see Known Gaps.)
- **Death and Decay** — ground AoE / rotational buff window; cast notably on Crimson Scourge procs. (Spell ID not confirmed this session — see Known Gaps.)
- **Death's Caress** — applies 2 Bone Shield stacks at range and applies disease. (Spell ID not confirmed this session — see Known Gaps.)

Key passive/buff:
- **Bone Shield** (195181) — stacking buff (up to 10 stacks). While ≥1 stack is active, grants armor equal to 180% of Strength (Midnight value) and, with Improved Bone Shield, increased Haste. Maintaining this is mandatory; a Blood DK with Bone Shield dropped is significantly more vulnerable.

Cooldowns (offensive/utility):
- **Dancing Rune Weapon** (49028) — baseline **2 min** cooldown (the spell page shows 2 minutes; talents may reduce it — Icy Veins references ~90s, treat as talent-reduced). Summons a mirroring rune weapon for 8s, boosts parry and resource generation; also a strong defensive due to parry/avoidance.
- **Reaper's Mark** — ~90s cooldown burst tool (Deathbringer hero talent). (Spell ID not confirmed — see Known Gaps.)
- **Raise Dead** — summons a ghoul pet. (Spell ID not confirmed — see Known Gaps.)

Hero talents (per sources): **Deathbringer** is the favored raid tree in Midnight Season 1 over San'layn.

## Rotation / Priority

> The following is **logical priority ordering**, not a DPS benchmark and not a substitute for a sim. RaidLens should treat it as "what a competent Blood DK is doing," not as a scored rotation.

Opener (from Icy Veins, Deathbringer-flavored):
1. Pre-place Death and Decay (untargeted) before the pull.
2. Death's Caress on the target (applies disease + Bone Shield).
3. Reaper's Mark + Raise Dead.
4. Marrowrend (consume Exterminate charge).
5. Dancing Rune Weapon.
6. Blood Boil to apply/maintain disease.
7. Continue standard priority.

Sustained single-target priority:
1. **Death Strike** — when low health, when above ~70 Runic Power (avoid capping), or to refresh Coagulopathy.
2. **Marrowrend** — to keep Bone Shield up / consume Exterminate procs.
3. **Reaper's Mark** — on cooldown.
4. **Dancing Rune Weapon** — on cooldown.
5. **Blood Boil** — on Boiling Point procs.
6. **Death and Decay** — on Crimson Scourge procs / for uptime.
7. **Heart Strike** — filler; keep ~3 Runes recharging, never overcap Runic Power.

AoE priority (multiple targets):
1. Death Strike (survival / RP management).
2. Marrowrend (Bone Shield).
3. Dancing Rune Weapon.
4. Blood Boil (maintain charges / Boiling Point).
5. Death and Decay.
6. Heart Strike filler.

Resource principle stressed by every source: never overcap Runic Power, keep ~3 Runes recharging, keep Bone Shield up.

## Defensives

This is a primary RaidLens section. Each entry: what it does, approximate cooldown, and how to judge correct use against a damage window.

- **Death Strike** (49998) — no cooldown, 45 Runic Power. Reactive heal scaling with recent damage taken.
  - *RaidLens usage:* The signature judgment. After a large avoidable or scripted hit, a competent Blood DK should press Death Strike within the next ~1–2 GCDs while RP is available. Repeatedly taking large hits while sitting at high Runic Power without a Death Strike is a mistake. Capping Runic Power is wasted mitigation.

- **Vampiric Blood** (55233) — **~1.5 min** cooldown, 10s duration. +max health, +30% healing received, -30% absorb damage taken, +leech. Sources call it the most frequently available and highest-value defensive — the default cooldown to plan around.
  - *RaidLens usage:* Should be active during predictable heavy-damage windows (tank busters, scripted raid spikes). It comes up roughly every other 90s mechanic cycle. A lethal hit taken with Vampiric Blood available (off cooldown) and unused is a flag.

- **Icebound Fortitude** (48792) — **2 min** cooldown, 8s. -30% all damage taken + stun immunity; also boosts Death Strike healing.
  - *RaidLens usage:* The big 30% button for the heaviest hits or when Vampiric Blood is down. Dying to a telegraphed buster with Icebound off cooldown is a clear miss. Also usable to ignore a stun mechanic.

- **Anti-Magic Shell** (48707) — **1 min** cooldown, 5s. Absorbs magic damage (cap ~30% of health), reduces magic damage, prevents many harmful magic auras/debuffs, generates RP from absorbed damage.
  - *RaidLens usage:* Should be used into magic-damage windows and to avoid/limit magic debuffs. With a 1-minute cooldown it is expected to be used often. Eating a large magic hit or a preventable magic debuff with AMS available is a flag.

- **Anti-Magic Zone** (51052) — **4 min** cooldown, 6s, 8yd area. Group-wide magic damage reduction bubble.
  - *RaidLens usage:* Raid defensive; should land on scripted raid-wide magic damage. Judge against whether a known magic raid event occurred while AMZ was off cooldown and the raid was stacked.

- **Rune Tap** (194679) — short cooldown (1.5s between casts; charge-based via talent), 4s. -20% all damage taken; costs 1 Rune.
  - *RaidLens usage:* Cheap, frequent micro-defensive for filling gaps between bigger cooldowns. Hard to flag per-cast, but total absence across a fight where the player has the talent is worth noting.

- **Tombstone** (219809) — **1 min** cooldown, 8s. Consumes Bone Shield stacks to grant a damage-absorb shield and Runic Power. (Talent.)
  - *RaidLens usage:* An absorb cooldown; expect use into a damage window when Bone Shield stacks are high. Sources note it was nerfed in Midnight.

- **Lichborne** (49039) — **2 min** cooldown, 10s. +leech and immunity to charm/fear/sleep; becomes undead.
  - *RaidLens usage:* Primarily an anti-CC / self-cleanse-of-fear tool, secondarily minor sustain. Judge against fear/charm mechanics, not raw damage.

- **Dancing Rune Weapon** (49028) — **2 min** baseline (talent-reduced). While active, large parry increase = effective physical avoidance, plus resource generation.
  - *RaidLens usage:* Doubles as a physical-damage defensive. Good practice is lining it up with melee/physical buster windows. Both offensive and defensive value.

- **Purgatory** (cheat death, talent) — converts a lethal blow into a heal-over-time debt instead of death. (Spell ID not confirmed — see Known Gaps.)
  - *RaidLens usage:* If talented, a Blood DK can survive a hit that would kill another tank; a death immediately after a Purgatory proc (failing to out-heal the debt) is the relevant failure pattern.

## Utility

- **Interrupt:** **Mind Freeze** (spell ID **47528**, **15s** cooldown, 15yd range). Interrupts the current cast and locks that spell school for 5s. This is the spec's **only** true raid-usable interrupt — Blood Death Knight HAS a kick.
  - Note for RaidLens: **Death Grip is NOT an interrupt.** It is a single-target pull. **Asphyxiate** (stun) and **Strangulate** (silence, if talented) can stop casts on stun/silence-susceptible targets but are not the baseline kick; do not count them as the spec's interrupt. On raid bosses (immune to stun/silence) Mind Freeze is the interrupt that matters.

- **Crowd control:**
  - **Asphyxiate** (221562) — 45s cooldown, 5s **stun** (not a silence), 20yd. Talent.
  - **Death Grip** (49576) — single-target grip/pull (effectively ~no cooldown / very short, page shows 1s). Repositioning, not an interrupt.
  - **Gorefiend's Grasp** (108199) — 1.5 min cooldown; mass-grips nearby enemies to a target. Add-grouping utility.
  - **Strangulate** — silence (talent). Spell ID not confirmed — see Known Gaps.

- **Dispels:** Death Knight has no friendly magic/curse/poison/disease dispel. It can remove harmful magic from itself indirectly via Anti-Magic Shell (prevents/absorbs) but cannot dispel allies. Treat as: **no raid dispel**. (Self-cleanse of charm/fear/sleep via Lichborne is anti-CC, not a dispel.)

- **Externals:** No confirmed single-target external on allies. Group protection is Anti-Magic Zone.

- **Battle res:** Raise Ally (61999), 10 min, counts against raid battle-res charges.

- **Movement tools:** Death's Advance (48265) — movement speed + immunity to snares/roots/forced movement, 10s. Plus optional talented mobility. No blink/leap baseline; mobility is a relative weakness.

## Consumables and Enchants

Sourced from Icy Veins / Wowhead Midnight 12.0.5 consumables guidance. **Item names below are confirmed from live text; numeric item IDs were NOT shown and are deliberately omitted** (see Known Gaps).

- **Augment rune:** Void-Touched Augment Rune (the single Midnight-wide augment rune).
- **Flask/Phial:** Not individually confirmed by name in this pass — flagged in Known Gaps.
- **Food:** Feasts are the only Midnight food granting Stamina alongside a stat — **Harandar Celebration** (primary stat) or **Blooming Feast** (secondary stats). Personal-food equivalents: **Royal Roast** (primary) or **Champion's Bento** (secondary), slightly worse due to no Stamina.
- **Gems:** Unique Thalassian Diamond — **Indecipherable Eversong Diamond** (few alternatives in Midnight). Rare gem — **Flawless Masterful Garnet** (Deathbringer default) or **Flawless Quick Garnet** (San'layn).
- **Weapon enchant / oils:** Sources state Midnight expanded oils/weapon enchants but most are "middling"; a specific recommended enchant by name was not pinned down this pass — flagged in Known Gaps.
- **Stat priority:** Critical Strike has added value because Dance of Midnight procs off parries during Dancing Rune Weapon. Full ordered stat priority not captured this pass — flagged in Known Gaps.

## Notes and Known Gaps

Unconfirmed facts (names used, numeric IDs deliberately omitted to avoid fabrication):
- Spell IDs NOT confirmed live this session (ability used by name only): Heart Strike, Blood Boil, Death and Decay, Death's Caress, Reaper's Mark, Raise Dead, Consumption, Purgatory, Strangulate.
- Dancing Rune Weapon cooldown: live spell page (49028) shows **2 minutes**; Icy Veins references ~90s. The ~90s figure is treated as a talent-reduced value, not baseline. Re-verify which is the played value.
- Rune Tap charges/cooldown structure is talent-dependent; the spell page shows a 1.5s inter-cast cooldown and 20% DR for 4s, but charge count was not shown.
- Raid buffs/debuffs the spec brings: NOT confirmed. Do not assume a unique raid-wide percentage buff exists.
- Targeted ally external: none confirmed; do not assume one exists.
- Consumables: all item IDs omitted (none shown on fetched pages). Flask/phial name, specific weapon-enchant/oil name, and full ordered stat priority were not pinned down — re-fetch the Wowhead "enchants-gems-pve-tank" guide and Icy Veins gems/enchants/consumables page (the Icy Veins ".../gems-enchants-flasks" URL 404'd; correct slug is ".../gems-enchants-consumables").
- Hero talent: Deathbringer favored over San'layn for raid in Midnight S1 per sources (not a hard mechanical fact — meta-dependent).

Wowhead's main JS-rendered guide pages did not return body text via fetch; ability/rotation prose came from Icy Veins (12.0.5) and individual Wowhead spell pages, which DID return data and were used for all confirmed IDs.

**Maintenance flag:** Re-verify all cooldowns, the Dancing Rune Weapon baseline-vs-talented cooldown, Death Strike scaling, and consumable names/IDs after any 12.x patch (tuning hotfixes frequently change Blood defensive values).
