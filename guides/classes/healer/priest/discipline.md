# Discipline Priest — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.icy-veins.com/wow/discipline-priest-pve-healing-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/discipline-priest-pve-healing-guide
> - https://www.wowhead.com/spell=33206/pain-suppression
> - https://www.wowhead.com/spell=62618/power-word-barrier
> - https://www.wowhead.com/spell=19236/desperate-prayer
> - https://www.wowhead.com/spell=10060/power-infusion
> - https://www.wowhead.com/spell=8122/psychic-scream
> - https://www.wowhead.com/spell=586/fade
> - https://www.wowhead.com/spell=47536/rapture
> - https://www.wowhead.com/spell=47540/penance
> - https://www.wowhead.com/spell=17/power-word-shield
> - https://www.wowhead.com/spell=194509/power-word-radiance
> - https://www.wowhead.com/spell=32379/shadow-word-death
> - https://www.wowhead.com/spell=32375/mass-dispel
> - https://www.wowhead.com/spell=527/purify
> - https://www.wowhead.com/spell=73325/leap-of-faith
> - https://www.wowhead.com/spell=8092/mind-blast
> - https://www.wowhead.com/spell=585/smite
> - https://www.wowhead.com/spell=81749/atonement

## Overview

Discipline Priest is a healer spec built around the **Atonement** mechanic (spell ID 81749): the priest applies Atonement to allies (primarily via Power Word: Shield and Power Word: Radiance), then deals damage to enemies, and a portion of that damage is converted into healing on every ally carrying an active Atonement. Dealing damage is therefore an integral, non-optional part of healing as Discipline.

Core gameplay loop: apply Atonement to the raid before a known damage event ("ramping"), then funnel damage through Penance, Smite, Mind Blast, and Shadow Word: Death to spread that damage as healing. Outside of ramp windows the spec spot-heals with Penance, Power Word: Shield, and Flash Heal/Plea while keeping Shadow Word: Pain ticking.

Damage/healing profile: strong, front-loaded burst healing during ramps and excellent damage-smoothing on predictable raid-wide hits; comparatively weak reactive throughput when caught without Atonements pre-applied. The spec also contributes meaningful raid DPS.

Primary weakness: **below-average personal survivability** (Icy Veins describes its defensives as "Worse Than Average"), and a reliance on pre-ramping — if a damage event arrives without Atonement spread, Disc cannot react as efficiently as direct-healing specs.

## Role in Raid

- **Role:** Healer (with a significant offensive/Atonement-damage component).
- **Bloodlust/Heroism:** No. Priests do not provide a Bloodlust-equivalent.
- **Battle Resurrection:** No. Priests do not have a combat res.
- **External cooldowns on allies:**
  - **Pain Suppression** (33206) — 40% damage reduction on a single ally for 8 seconds. A true external (single-target).
  - **Power Word: Barrier** (62618) — ground-targeted raid damage-reduction zone (group external).
  - **Power Infusion** (10060) — 15-second haste/throughput buff; with the Twins of the Sun Priestess talent it can be cast on an ally (typically a DPS) rather than self.
  - **Leap of Faith** (73325) — pulls a targeted ally to the priest (utility/save, not a damage cooldown).
- **Raid buffs/debuffs brought:** Priest provides **Power Word: Fortitude** (raid-wide stamina buff). Disc does not bring a unique damage-amp raid debuff.
- **Mobility:** Low to moderate. No blink/teleport. Fade (586) is the only baseline movement/threat tool and is short. Power Word: Radiance, Penance, and other casts are mostly stationary; the spec is generally considered low-mobility among healers.

## Abilities Reference

Confirmed spell IDs are given inline. Where an ID could not be confirmed from a fetched live source, the ability is listed by name only and flagged in Known Gaps.

**Core / rotational**
- **Atonement** (81749) — passive healing aura applied to allies; a share of the priest's damage heals all Atonement holders. The engine of the spec.
- **Penance** (47540) — channeled bolts; healing when aimed at an ally, damage when aimed at an enemy. Primary throughput button both offensively and defensively. (Wowhead shows a 1.5s cooldown/GCD entry on the base spell; functional cooldown is modified by talents/haste — see Known Gaps.)
- **Power Word: Shield** (17) — instant absorb shield; applies Atonement. Core ramp and spot tool.
- **Power Word: Radiance** (194509) — AoE heal that applies Atonement to multiple allies at once; primary mass-Atonement application during ramps. (Charges/cooldown not confirmed from a fetched source — see Known Gaps.)
- **Smite** (585) — Holy damage filler that triggers Atonement healing.
- **Mind Blast** (8092) — Shadow damage; Atonement healing + Insanity generation.
- **Shadow Word: Death** (32379) — execute-range Shadow damage; Atonement healing.
- **Shadow Word: Pain** — damage-over-time; kept active for sustained Atonement healing. (ID not confirmed live — see Known Gaps.)
- **Flash Heal / Plea** — direct heals; Plea is the cheap Atonement-applying heal, Flash Heal the larger emergency heal. (IDs not confirmed live — see Known Gaps.)

**Cooldowns**
- **Rapture** (47536) — empowers Power Word: Shield (massively boosts shield strength / reduces cost) for 30 seconds; ~1.5 minute cooldown. Used to mass-apply strong shields during a ramp.
- **Evangelism** — instantly casts a Power Word: Radiance and makes the next 2 Radiance casts instant, allowing a full raid Atonement spread very quickly. (Spell ID 246287 was tested and does NOT resolve on live Wowhead — ID omitted, see Known Gaps.)
- **Ultimate Penitence** — 4-minute cooldown channel that throws bolts at enemies, generating large Atonement healing. Choice node opposite Power Word: Barrier. (4-minute figure from Icy Veins; spell ID not confirmed live — see Known Gaps.)

## Rotation / Priority

This is **logical priority and ramp structure, not a DPS/HPS benchmark**. Exact ordering shifts with talents (Oracle vs. Voidweaver), haste, and fight timing.

**Ramp opener (preparing for a known incoming damage event):**
1. Refresh Shadow Word: Pain on the target.
2. Penance (on an ally, to bank a Void Shield/Penance proc where applicable).
3. Power Word: Shield (apply Atonements; pair with Rapture for a mass-shield ramp).
4. Plea / Flash Heal to seed additional Atonements.
5. Evangelism — instant Radiance + 2 free instant Radiance casts to blanket the raid in Atonement.
6. Power Word: Radiance casts to top off Atonement coverage.
7. Pour damage: Mind Blast, Penance (offensive), Smite, Shadow Word: Death to convert into raid healing during the damage window.

**Sustained single-target / low-damage phase:**
- Keep Shadow Word: Pain up.
- Penance on cooldown (offensively for Atonement healing, defensively to spot-heal).
- Mind Blast on cooldown.
- Smite as filler.
- Maintain a couple of Atonements via Power Word: Shield / Plea on tanks.

**AoE / heavy raid damage:**
- Pre-ramp with Evangelism + Power Word: Radiance for wide Atonement coverage, then maximize damage casts (Mind Blast, Penance, Smite) so each lands as raid-wide healing.
- Power Word: Barrier (62618) for the heaviest sustained raid windows.

## Defensives

Disc's defensive kit is limited and short-cooldown-heavy; Icy Veins rates the spec's personal survivability "Worse Than Average," so correct, frequent use of the small mitigations matters.

- **Desperate Prayer** (19236) — instant; heals the priest for ~25% of max health and raises max health by 25% for 10 seconds; **1.5-minute cooldown**.
  - *RaidLens usage:* This is the priest's main personal panic button. If the priest took a large avoidable/lethal hit (or died) and Desperate Prayer was off cooldown and unused in the seconds before, flag it as a missed defensive. Expect it used proactively into known personal spike windows.

- **Fade** (586) — instant; reduces threat and, with the **Translucent Image** talent, grants **10% damage reduction** for 10 seconds; **30-second cooldown**.
  - *RaidLens usage:* On the Translucent Image build this is a near-constant, short-cooldown mitigation. During any raid-wide damage window the priest should be hitting Fade roughly every 30s. If the priest ate stacked raid damage with Fade available and the build runs Translucent Image, flag underuse. (If the player is not talented into Translucent Image, Fade is only threat drop — do not flag it as a defensive in that case.)

- **Protective Light** (talent) — casting **Flash Heal on yourself** grants an additional **~10% damage reduction**.
  - *RaidLens usage:* If the priest self-cast Flash Heal during a heavy personal damage window, that is correct defensive play. Absence of a self Flash Heal before a lethal hit (when talented) is a soft miss; weight it lower than Desperate Prayer because it is talent-dependent.

- **Pain Suppression** (33206) — **40% damage reduction for 8 seconds** on the target. Can be cast on **self or an ally**.
  - *RaidLens usage:* Primarily an external for tanks/soaks, but also a strong personal defensive. If a tank or soaker took a known lethal hit while the priest's Pain Suppression was available and unspent, flag a missed external. (Cooldown not confirmed from a fetched source — see Known Gaps; treat availability conservatively.)

- **Power Word: Barrier** (62618) — instant; ground-targeted 8-yard zone granting raid-wide damage reduction; buff lasts 10 seconds; **3-minute cooldown**.
  - *RaidLens usage:* The spec's main raid defensive cooldown. For scripted raid-wide damage events, check whether Barrier was dropped on the stacked raid during the hit. If multiple players took heavy raid damage in a window where Barrier was off cooldown and unused, flag it as a missed raid mitigation. (Choice node with Ultimate Penitence — a priest who talented Ultimate Penitence will NOT have Barrier; account for that before flagging.)

## Utility

- **Interrupt:** **None.** Discipline Priest has **no raid-usable interrupt** (no kick-type silence/stun on enemy casts). This matches most healer specs. **Do not flag a Disc Priest for missed interrupts** — they cannot interrupt boss casts. Psychic Scream (below) is a fear, not an interrupt, and is not a reliable boss-cast interrupt.

- **Crowd Control:**
  - **Psychic Scream** (8122) — 8-yard AoE fear for 8 seconds; **40-second cooldown**. The spec's only AoE CC. Can disrupt fearable adds but is not usable on most raid bosses.

- **Dispels:**
  - **Purify** (527) — friendly dispel; removes **Magic and Disease** from allies; **8-second cooldown**.
  - **Dispel Magic** — removes Magic from a friendly target and/or beneficial Magic from enemies. (ID not confirmed live — see Known Gaps.)
  - **Mass Dispel** (32375) — ground-targeted, 15-yard radius; AoE dispel of Magic (and a limited number of normally-undispellable effects); **2-minute cooldown**.

- **Externals / saves:**
  - **Pain Suppression** (33206) — see Defensives (40% DR on an ally).
  - **Power Word: Barrier** (62618) — raid DR zone.
  - **Power Infusion** (10060) — 15s throughput/haste buff; **2-minute cooldown**; castable on an ally with Twins of the Sun Priestess.
  - **Leap of Faith** (73325) — pulls a targeted ally to the priest (positioning save). (Listed cooldown on Wowhead appears to be a GCD/category artifact — see Known Gaps.)
  - **Fear Ward** — makes an ally immune to the next fear effect. (ID not confirmed live — see Known Gaps.)

- **Movement tools:** Fade (586) only; no blink or teleport. Generally low mobility.

## Consumables and Enchants

No consumable or enchant pages were fetched live for this guide, so specific flask/food/rune/weapon-enchant item IDs are **not included** to avoid fabricating IDs. General expectations for a healer (Intellect-based flask, a stat food, an augment rune, and standard healer enchants on gear) apply, but every specific item must be confirmed against a live source before being trusted. See Known Gaps.

## Notes and Known Gaps

- **Interrupt:** Confirmed via Icy Veins and Wowhead guide text that Disc Priest has no interrupt. RaidLens should never flag a Disc Priest for a missed interrupt.
- **Pain Suppression (33206) cooldown UNCONFIRMED:** Wowhead's spell page displayed a "1.5 second" cooldown, which is a GCD/category-cooldown artifact, not the true ability cooldown. The real cooldown (historically longer) was not confirmed from a fetched source. Treat availability conservatively.
- **Power Word: Radiance (194509) charges/cooldown UNCONFIRMED:** Wowhead listed "Cooldown: n/a" and did not show charge count. The spec clearly uses multiple Radiance casts (Evangelism grants 2 instant casts), implying a charge system, but exact charges/recharge were not confirmed.
- **Evangelism spell ID OMITTED:** The tested ID 246287 returned "doesn't exist / may have been removed" on live Wowhead. Ability is real (confirmed by Icy Veins) but its current ID is unconfirmed.
- **Ultimate Penitence:** 4-minute cooldown is from Icy Veins prose; spell ID not confirmed live. It is a choice node opposite Power Word: Barrier — a priest has one or the other, not both.
- **Leap of Faith (73325) cooldown:** Wowhead showed "1 second," which is a GCD/category artifact, not the true cooldown. Real cooldown unconfirmed.
- **Dispel Magic, Fear Ward, Shadow Word: Pain, Flash Heal, Plea spell IDs UNCONFIRMED:** Wowhead pages for Dispel Magic (528) and Fear Ward (6346) returned HTTP 403 on every attempt and could not be verified; the others were not individually fetched. Abilities are listed by name without IDs.
- **Power Word: Fortitude:** Listed as the priest raid buff from general class knowledge; its spell page was not fetched live this session.
- **Talent builds (Oracle vs. Voidweaver), import strings, and SimC APL:** Not sourced. No talent import string or SimC profile was available; only conceptual rotation/ramp structure is provided.
- **Consumables/enchants:** No live item pages fetched — no item IDs included by design.
- **Maintenance flag:** Re-verify all cooldowns, charges, choice-node relationships, and the Evangelism spell ID after ANY 12.x patch. Disc ramp tuning and talent layout change frequently between patches.
