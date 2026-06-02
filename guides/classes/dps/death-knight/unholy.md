# Unholy Death Knight — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents
> - https://www.wowhead.com/spell=47528/mind-freeze
> - https://www.wowhead.com/spell=48707/anti-magic-shell
> - https://www.wowhead.com/spell=48792/icebound-fortitude
> - https://www.wowhead.com/spell=51052/anti-magic-zone
> - https://www.wowhead.com/spell=49998/death-strike
> - https://www.wowhead.com/spell=49206/summon-gargoyle
> - https://www.wowhead.com/spell=49576/death-grip
> - https://www.wowhead.com/spell=49039/lichborne
> - https://www.wowhead.com/spell=275699/apocalypse
> - https://www.wowhead.com/spell=42650/army-of-the-dead
> - https://www.wowhead.com/spell=63560/dark-transformation
>
> The Wowhead guide *guide* pages (abilities / rotation hubs) render their tables client-side and returned no body text to the fetcher; conceptual rotation/ability detail below is sourced from the Icy Veins spec page plus individual confirmed Wowhead spell pages. See "Notes and Known Gaps."

## Overview

Unholy Death Knight is a melee DPS specialization built around **disease application, a permanent undead pet (Ghoul/Risen Ghoul), and Festering Wound management**. The core gameplay loop is:

1. Apply diseases to the target (via Outbreak; on this spec the disease is referred to as the plague/"Dread Plague" effect).
2. Build **Festering Wounds** on the target with Festering Strike.
3. **Burst (pop) those Wounds** with Scourge Strike (or its talented replacement Clawing Shadows), which deals damage and feeds the pet.
4. Spend Runic Power on **Death Coil** (single target) or **Epidemic** (AoE) to deal damage and empower the pet.
5. Layer cooldowns — **Apocalypse** (mass-bursts Wounds and summons transient ghouls), **Dark Transformation** (empowers the permanent pet), **Army of the Dead** and/or **Summon Gargoyle** — for burst windows.

Damage profile: strong, ramping sustained cleave and AoE (disease spread + Epidemic + Wound bursting scales well into multiple targets), with burst concentrated in the Apocalypse / Army / Dark Transformation window. It is a "ramp" spec — it needs a few seconds and a built target to reach full throughput.

Primary weakness: **low mobility and a ramp-up requirement.** Unholy has limited gap-closers and movement tools relative to other melee, and target-swapping resets disease/Wound state, so frequent forced movement or rapid add-swaps hurt its output disproportionately.

## Role in Raid

- **Role:** Melee DPS.
- **Raid buffs/debuffs:** Death Knights bring no unique raid-wide percentage buff in the modern design; their contribution is utility (see below) rather than a stacking damage buff. Do not assume a DK provides a raid DPS buff for analysis purposes. (Flagged — exact 12.0.5 buff/debrief list not confirmed live.)
- **Group utility — Anti-Magic Zone (51052):** A placed group defensive that reduces magic damage taken by allies standing in it. This is the DK's headline raid-utility cooldown and is frequently assigned to specific magic-damage windows.
- **Battle Resurrection — Raise Ally:** Death Knights provide a combat resurrection via Raise Ally (the class battle-rez). This counts against the shared raid battle-rez pool. (SpellID not confirmed live — omitted.)
- **Mobility:** Limited. **Death Grip (49576)** repositions an enemy (or the DK, talent-dependent) and **Death's Advance** provides passive/active movement speed, but Unholy has no leap or blink. Treat as a low-mobility melee.

## Abilities Reference

Confirmed SpellIDs are shown in parentheses. Where no ID is shown, it was not confirmed on a live page during research — see Known Gaps.

### Offensive cooldowns
- **Apocalypse (275699)** — Bursts Festering Wounds on the target and summons transient ghouls. Tooltip cooldown read **45 seconds** (Wowhead spell page; verify against current talents). Core burst tool.
- **Army of the Dead (42650)** — Summons a horde of ghouls; also grants Runic Power. Tooltip cooldown read **1.5 minutes** (Wowhead spell page; legacy tooltip — verify). Big-burst / opener cooldown.
- **Dark Transformation (63560)** — Empowers the permanent Ghoul into a stronger form for a duration, increasing its damage. (Wowhead spell page showed a passive/dummy aura entry and no clean cooldown — verify cooldown live.)
- **Summon Gargoyle (49206)** — Summons an Ebon Gargoyle that attacks for ~25 seconds (tooltip duration). May be a talent rather than baseline in current builds. (Cooldown not cleanly confirmed — omitted.)

### Core rotational abilities
- **Festering Strike** — Builds Festering Wounds on the target. (SpellID not confirmed live — omitted.)
- **Scourge Strike** / **Clawing Shadows** — Bursts Festering Wounds for damage; Clawing Shadows is the talented ranged-ish replacement. (SpellIDs not confirmed live — omitted.)
- **Death Coil** — Single-target Runic Power spender; empowers the pet. (SpellID not confirmed live — omitted.)
- **Epidemic** — AoE Runic Power spender that hits all disease-afflicted targets. (SpellID not confirmed live — omitted.)
- **Outbreak** — Applies the disease/plague to the target. (SpellID not confirmed live — omitted.)

### Key passives / procs
- **Festering Wounds** — Stacking debuff applied by Festering Strike, consumed (burst) by Scourge Strike/Clawing Shadows and en masse by Apocalypse. Central resource of the spec.
- **Sudden Doom** — Proc that makes Death Coil free/empowered (commonly present on the spec). (Mechanic from Icy Veins context; not independently ID-confirmed.)
- **Runes / Runic Power** — DK resource system; Runes power strikes, Runic Power powers Coil/Epidemic.

## Rotation / Priority

This is **logical priority ordering, not a DPS benchmark.** Exact APL ordering for 12.0.5 was not sourceable live (no SimC profile provided; Wowhead rotation hub did not render). Treat as conceptual.

**Opener (concept):**
1. Pre-pull diseases via Outbreak so the plague is up at pull.
2. Build Festering Wounds with Festering Strike.
3. Burst cooldowns: Army of the Dead / Apocalypse / Dark Transformation (+ Gargoyle if talented) layered together for the burst window.
4. Burst Wounds with Scourge Strike/Clawing Shadows; spend Runic Power on Death Coil.

**Sustained single target (priority):**
1. Keep the disease/plague active (refresh before it falls; Apocalypse/Outbreak as needed).
2. Maintain a healthy Festering Wound count — don't let it cap or bottom out.
3. Spend Runic Power with Death Coil before it caps (use Sudden Doom procs).
4. Burst Wounds with Scourge Strike/Clawing Shadows.
5. Build Wounds with Festering Strike when low.
6. Use Apocalypse on cooldown to mass-burst Wounds; align Dark Transformation with it where possible.

**AoE / cleave (priority):**
1. Spread the disease to all targets (Outbreak + cleave; Epidemic spreads/triggers on disease-afflicted targets).
2. Spend Runic Power with **Epidemic** instead of Death Coil.
3. Burst Wounds across targets (Apocalypse, Scourge Strike/Clawing Shadows cleave).
4. Maintain diseases on as many targets as feasible.

## Defensives

This is one of the two most important sections for RaidLens. Each entry includes how to judge correct use during a damage window.

- **Anti-Magic Shell (48707)** — Self magic-damage absorb shield + magic damage reduction; **~1 minute cooldown**, ~5s duration; generates Runic Power from absorbed magic. **RaidLens usage:** A magic-damage personal mitigation. Correct use = AMS active during a known magic raid hit. If a player took heavy *magic* avoidable/raid damage with AMS available and unused, that's a missed personal mitigation worth flagging.
- **Icebound Fortitude (48792)** — **30% all damage reduction** + stun immunity for ~8s; **~2 minute cooldown**. **RaidLens usage:** The primary all-purpose personal defensive. Expect it during scripted heavy-damage windows (big raid hits, tank-buster-adjacent moments, called damage events). Repeated death to a telegraphed damage event with Icebound available = flaggable.
- **Death Strike (49998)** — Runic Power-costing strike (45 RP) that **heals the caster**. **RaidLens usage:** This is a SELF-HEAL / resource spender. Its self-cast and any self-related log entries are NOT avoidable mistake damage and must never be flagged as such. Presence of Death Strike casts during a damage window is *good* (active self-healing), not a mistake.
- **Lichborne (49039)** — Undead transformation granting leech (self-healing via damage dealt) and immunity to charm/fear/sleep/horror effects; ~10s duration, **~2 minute cooldown** (tooltip may be legacy — verify). **RaidLens usage:** Doubles as a fear/charm breaker and a sustained self-heal. Useful during fear mechanics or stacking magic damage. Don't expect it on every cooldown; flag only if a fight has an obvious charm/fear window the player ate while Lichborne was up and unused.
- **Anti-Magic Zone (51052)** — see Utility; it is a *group* defensive but also protects the DK.

Note for analysis: Death Knights have no hard immunity bubble and no self-cheat-death baseline. Survival is layered mitigation (Icebound + AMS) plus self-healing (Death Strike + leech). Judge defensive use against the fight's *magic vs physical* damage profile.

## Utility

Second most important section for RaidLens. Be explicit about what IS and ISN'T an interrupt.

- **INTERRUPT — Mind Freeze (47528):** This IS the Unholy Death Knight's interrupt. **15 second cooldown**, melee range, interrupts the current cast and locks that spell school briefly. For interrupt tracking, Mind Freeze is the ability to credit. A missed interrupt on an interruptible cast, with Mind Freeze off cooldown, is flaggable.
  - **Asphyxiate / Strangulate / stuns are NOT the spec's standard interrupt** — do not count crowd-control or silence talents as the interrupt unless specifically confirmed. Mind Freeze is the kick.
- **Anti-Magic Zone (51052)** — Group magic-damage-reduction zone, ~6s, **~4 minute cooldown**, placed/30yd range. A raid utility cooldown, not an interrupt.
- **Death Grip (49576)** — Enemy reposition/pull, instant, 30yd. Utility/positioning, not an interrupt and not a defensive.
- **Chains of Ice** — Snare/slow on a target. Utility CC. (SpellID not confirmed — omitted.)
- **Death's Advance** — Movement-speed tool / snare reduction; the spec's main mobility aid. (SpellID not confirmed — omitted.)
- **Raise Ally** — Combat resurrection (battle-rez), counts against the shared raid battle-rez pool. (SpellID not confirmed — omitted.)
- **Raid buffs/debuffs:** No confirmed unique stacking raid damage buff for this spec in 12.0.5 (flagged). Treat the DK's raid contribution as utility (AMZ, battle-rez, grip, interrupt), not a percentage buff.

## Consumables and Enchants

Specific 12.0.5 consumable and enchant recommendations (best flask, food, weapon enchant, augment rune, phial) were **not sourceable live** within the research budget — the Wowhead enchants/gems guide hub did not render usable text. As Strength-based melee, Unholy uses Strength-oriented consumables and enchants in general terms, but exact item names/IDs for 12.0.5 are unconfirmed and are intentionally omitted rather than guessed. See Known Gaps.

## Notes and Known Gaps

**Confirmed SpellIDs (verified on live Wowhead spell pages):**
- Mind Freeze — 47528 (interrupt, 15s CD) ✅
- Anti-Magic Shell — 48707 (~1 min CD) ✅
- Icebound Fortitude — 48792 (30% DR, ~2 min CD) ✅
- Anti-Magic Zone — 51052 (~4 min CD) ✅
- Death Strike — 49998 (self-heal) ✅
- Lichborne — 49039 (~2 min CD, leech) ✅
- Apocalypse — 275699 (~45s CD) ✅
- Army of the Dead — 42650 (~1.5 min CD) ✅
- Dark Transformation — 63560 ✅ (name/ID confirmed; cooldown not clean on page)
- Summon Gargoyle — 49206 ✅ (name/ID confirmed; cooldown not confirmed)
- Death Grip — 49576 ✅ (name/ID confirmed)

**Unconfirmed / omitted facts (do NOT assume):**
- SpellIDs for Festering Strike, Scourge Strike, Clawing Shadows, Death Coil, Epidemic, Outbreak — not confirmed live; omitted.
- SpellIDs for Raise Ally, Chains of Ice, Death's Advance — not confirmed; omitted.
- Some Wowhead spell-page cooldown/effect values (notably Death Grip, Lichborne leech %, Dark Transformation cooldown, Army of the Dead cooldown) may reflect **legacy tooltips** rather than live 12.0.5 tuning. Treat cooldown numbers marked "verify" as approximate.
- Whether Summon Gargoyle is baseline or a talent in 12.0.5 builds is unconfirmed.
- Exact 12.0.5 talent build/import string and SimulationCraft APL — not available (no user SimC profile; rotation hub did not render). Rotation section is conceptual priority only.
- 12.0.5 consumables/enchants/gems — not sourced; omitted entirely rather than guessed.
- Any unique raid buff/debuff the spec might provide — not confirmed; assume utility-only.

**Source limitation:** Wowhead's class *guide* hub pages (abilities-talents and rotation-cooldowns) returned only navigation/header markup to the automated fetcher (client-rendered tables), so ability/rotation detail leans on the Icy Veins spec page plus individually-confirmed Wowhead spell pages.

**Maintenance flag:** Re-verify ALL SpellIDs, cooldowns, and the rotation after any 12.x patch (talent reworks and tuning are common). Specifically re-check the "verify" cooldowns and fill in the omitted rotational SpellIDs against live Wowhead before relying on them in analysis.
