# Mistweaver Monk — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.icy-veins.com/wow/mistweaver-monk-pve-healing-guide
> - https://www.icy-veins.com/wow/mistweaver-monk-pve-healing-spell-summary
> - https://www.method.gg/guides/mistweaver-monk
> - https://lorewoven.net/wow-midnight-mistweaver-monk-guide/
> - Wowhead spell pages: spell=116849 (Life Cocoon), spell=115310 (Revival), spell=115203 (Fortifying Brew), spell=115151 (Renewing Mist), spell=116670 (Vivify), spell=124682 (Enveloping Mist), spell=115175 (Soothing Mist), spell=399491 (Sheilun's Gift), spell=197908 (Mana Tea), spell=322118 (Invoke Yu'lon), spell=325197 (Invoke Chi-Ji), spell=122278 (Dampen Harm), spell=122783 (Diffuse Magic), spell=116844 (Ring of Peace), spell=115078 (Paralysis), spell=119381 (Leg Sweep), spell=116841 (Tiger's Lust), spell=101643 (Transcendence), spell=218164 (Detox), spell=109132 (Roll), spell=414132 (Dance of the Wind), spell=8647 (Mystic Touch), spell=116705 (Spear Hand Strike — confirmed NOT available to Mistweaver)

## Overview

Mistweaver is a mobile, melee-capable healing specialization for the Monk class. Its core gameplay loop is to keep the group blanketed in the **Renewing Mist** heal-over-time, then convert that coverage into burst healing through **Vivify** (which cascades to allies carrying Renewing Mist) while channeling **Soothing Mist** to enable instant follow-up casts. Triage and ramp healing come from **Sheilun's Gift** and **Enveloping Mist**, and major throughput windows are driven by the celestial summons **Invoke Yu'lon** and **Invoke Chi-Ji**. Mana is the binding constraint, managed with **Mana Tea**.

Healing/damage/survivability profile:
- **Healing:** Strong area-of-effect and "spread" throughput built on HoT uptime, with good targeted spot healing. The spec is throughput-heavy — it tops health bars fast but has comparatively little group-wide damage *prevention*.
- **Damage:** Passively contributes more personal damage than most healers (melee-leaning kit), though this is secondary for raid analysis.
- **Survivability:** One of the more durable healer specs, with multiple personal damage-reduction cooldowns.

**Primary weakness:** Lack of a strong raid-wide damage-reduction cooldown (no equivalent to Spirit Link Totem, Power Word: Barrier, or Aura Mastery), and high mana pressure. Its only external, Life Cocoon, is a single-target absorb that scales weakly against the largest hits at Mythic. As of Midnight it also has **no raid-usable interrupt** (see Utility).

## Role in Raid

- **Role:** Healer.
- **Raid buff / debuff:** **Mystic Touch** (spell 8647) — a passive Monk debrew applied to targets the Monk damages, increasing Physical damage taken (the standard 5% Monk physical-damage-taken debuff). Value is low in fights that are mostly magic damage.
- **Group defensives / externals:** **Life Cocoon** (spell 116849) is the only true external — a single-target absorb shield that also amplifies HoT healing on the target by 50%. There is no group-wide raid cooldown.
- **Bloodlust-equivalent:** No. Mistweaver provides no Heroism/Bloodlust effect.
- **Battle res:** No. Monk has no combat resurrection.
- **Mobility:** Excellent — among the most mobile healers. Roll (109132), Tiger's Lust (116841), and Transcendence (101643) give strong repositioning; Soothing Mist channeling permits healing while relocating.

## Abilities Reference

Core healing toolkit (all confirmed on live Wowhead spell pages):

- **Renewing Mist** (115151) — instant HoT, the spec's coverage engine; jumps to injured allies. ~1.8% base mana.
- **Vivify** (116670) — primary direct heal; cleaves/leverages Renewing Mist targets for cascade healing.
- **Soothing Mist** (115175) — channeled single-target heal that allows casting Vivify/Enveloping Mist while channeling; also a small all-school damage reduction on the channel target.
- **Enveloping Mist** (124682) — strong single-target HoT; increases healing the target receives from Vivify/Soothing Mist/Revival by 10%.
- **Sheilun's Gift** (399491) — stacking area heal that builds mist clouds over time in combat; key triage/ramp tool.
- **Mana Tea** (197908) — reduces mana costs by 30% for 10s; ~1.5 min cooldown. Mana-management cooldown.

Major cooldowns:

- **Revival** (115310) — large raid-wide instant heal that also dispels Poison and Disease (see dispel note in Utility). Cooldown approximately 3 minutes (per Icy Veins; the spell-page "cooldown" field shows only the GCD).
- **Invoke Yu'lon, the Jade Serpent** (322118) — summons Yu'lon for 25s; raid-healing throughput window; reduces Enveloping Mist mana cost by 50% during the window. 2-minute cooldown.
- **Invoke Chi-Ji, the Red Crane** (325197) — summons Chi-Ji for 25s; throughput/utility window with cheaper, faster Enveloping Mist. 2-minute cooldown.
- **Celestial Conduit** — Midnight cooldown that channels burst healing/damage and accelerates other cooldowns. (Spell ID not confirmed — see Known Gaps.)
- **Thunder Focus Tea** — short-cooldown buff (~30s) that empowers the next spell. (Spell ID not confirmed — see Known Gaps.)

Key passives/procs (named, IDs not all confirmed): **Ancient Teachings** (converts damage dealt into healing), and the Midnight Apex talent **Spiritfont**. New Midnight tools referenced by guides include Misty Coalescence, Way of the Serpent, and Amplified Rush.

## Rotation / Priority

This is a *logical* priority for raid healing, not a DPS benchmark and not a strict GCD-by-GCD rotation. Mistweaver healing is reactive to incoming damage.

Opener / ramp (before a known damage spike):
1. Pre-apply **Renewing Mist** across the group for maximum coverage.
2. Stack **Enveloping Mist** on priority targets (tanks / soak targets).
3. Line up **Invoke Yu'lon** (or **Invoke Chi-Ji**) into the spike.

Sustained priority:
1. Maintain **Renewing Mist** uptime on as many targets as possible (it is the engine for Vivify).
2. **Soothing Mist** channel on a hurt target to enable instant **Vivify** / **Enveloping Mist**.
3. **Vivify** as the primary spot/spread heal while Renewing Mist is spread.
4. **Sheilun's Gift** for triage when multiple targets are low.
5. **Mana Tea** to keep mana sustainable; do not let mana bottom out before a spike.

AoE / heavy raid damage:
1. **Invoke Yu'lon** / **Invoke Chi-Ji** windows.
2. **Revival** for an instant raid-wide top-up (and a Poison/Disease cleanse).
3. **Sheilun's Gift** + spread **Vivify** off existing Renewing Mist.

## Defensives

Each entry includes a **RaidLens usage** note for judging whether the defensive was used correctly during a damage window. Cooldowns are from live spell pages where confirmed.

- **Fortifying Brew** (115203) — personal damage reduction + health increase. Cooldown ~6 minutes per the spell page (Icy Veins prose says ~7 min; treat as a long, "big-hit only" cooldown).
  - *RaidLens usage:* Long cooldown, reserve for the largest predictable personal/raid spikes. If the Monk took a near-lethal hit during a telegraphed mechanic and Fortifying Brew shows no recent use, flag it as an unused major defensive.
- **Dampen Harm** (122278) — absorbs/reduces a portion of incoming damage for 10s; 2-minute cooldown. Best against a series of large hits.
  - *RaidLens usage:* Strong against stacking or repeated large hits within a 10s window. If the player ate a multi-hit damage window with Dampen Harm off cooldown, flag it.
- **Diffuse Magic** (122783) — reduces magic damage taken by 60% for 6s; ~1.5-minute cooldown (also returns harmful magic effects in some iterations).
  - *RaidLens usage:* The go-to for telegraphed **magic** burst. If a lethal/near-lethal hit was magic school and Diffuse Magic was available, flag non-use.
- **Life Cocoon** (116849) — single-target absorb shield + 50% increased HoT healing on the target; 2-minute cooldown.
  - *RaidLens usage:* This is an *external* (castable on others) as well as self-protection. Judge whether it was placed on the player taking a known large hit (often the tank or a soak target) during the relevant window. Unused Life Cocoon during a death from a predictable spike is worth flagging.
- **Dance of the Wind** (414132) — talent that increases dodge chance by 5% (passive/uptime mitigation, not an active immunity).
  - *RaidLens usage:* Passive — not an actively pressed cooldown. Do not flag as "unused." Note: this is a dodge increase, NOT a damage immunity (some guides describe it as an "immunity" — the spell page describes dodge).

Notes for the analyzer:
- Monk does **not** have a damage-immunity button comparable to Divine Shield. Do not expect one.
- Self-inflicted resource costs (none significant for Mistweaver in normal play) should not be read as avoidable damage.

## Utility

**Interrupt — IMPORTANT:** Mistweaver has **NO raid-usable interrupt** in Midnight (12.0.5). Spear Hand Strike (spell 116705, the Monk kick) was **removed from Mistweaver in Midnight** and is now only available to Brewmaster and Windwalker. Mistweaver monks must rely on the rest of the group to interrupt important casts.
- **Do NOT flag a Mistweaver for "missed interrupt."** Missed kicks on caster mechanics are a group/non-Monk responsibility, not a Mistweaver mistake.
- **Leg Sweep** (119381) is a 6-yard AoE **stun** (3s, 1-minute cooldown) — it is crowd control, NOT an interrupt, and is not a reliable substitute for a kick on raid bosses (most raid bosses are stun-immune).

**Crowd control:**
- **Leg Sweep** (119381) — 5/6-yard AoE stun, 3s, 1-minute cooldown.
- **Paralysis** (115078) — single-target incapacitate (~1 minute duration on the effect; 45s cooldown; breaks on damage).
- **Ring of Peace** (116844) — 8-yard knockback/displacement field, 5s duration, 45s cooldown.

**Dispels:**
- **Detox** (218164) — removes **Poison** and **Disease** (confirmed on the spell page). Mistweaver Detox is widely understood to also remove **Magic**, but the fetched spell page only listed Poison/Disease — see Known Gaps before relying on Magic dispel.
- **Revival** (115310) — group-wide cleanse on use; the spell page confirms it dispels **Poison** and **Disease** raid-wide alongside the heal.

**Externals:** **Life Cocoon** (116849) — single-target absorb (see Defensives).

**Raid buff / debuff:** **Mystic Touch** (8647) — passive Physical-damage-taken debuff on the Monk's targets.

**Movement tools:**
- **Roll** (109132) — short dash (charge-based).
- **Tiger's Lust** (116841) — +70% run speed for 6s, 30s cooldown; castable on an ally (also breaks roots).
- **Transcendence** (101643) — places a spirit (15-min duration) and lets the Monk swap places with it via Transcendence: Transfer for instant repositioning.

## Consumables and Enchants

Live sources name the following for 12.0.5 (Icy Veins). **Item IDs are NOT confirmed** — names should be re-verified before hardcoding:
- **Flask:** Flask of the Blood Knights (throughput stat); Flask of Thalassian Resistance as a Versatility/defensive alternative in some content.
- **Food:** Silvermoon Parade / Harandar Celebration feast-tier food for primary stat.
- **Weapon oil:** Thalassian Phoenix Oil (buffs the spec's two strongest secondary stats).
- **Gems:** Indecipherable Eversong Diamond (one socket) + Flawless Deadly Peridots (remaining sockets).
- **Stat priority (raid):** Haste and Crit emphasized.

No specific armor enchant slots were confirmed from a live item page in this pass — see Known Gaps.

## Notes and Known Gaps

- **Interrupt (high confidence):** Confirmed via Method, Lorewoven, and the Spear Hand Strike spell page that Mistweaver has no raid-usable interrupt in Midnight. RaidLens must not flag Mistweaver for missed interrupts.
- **Revival magic dispel:** The Revival spell page (115310) listed only Poison and Disease dispel. If the analyzer needs Revival's full dispel coverage, re-verify whether it also removes Magic.
- **Detox magic dispel:** Detox (218164) page listed only Poison/Disease. Mistweaver historically also dispels Magic; this was NOT confirmed on the fetched page — flag before relying on it.
- **Mystic Touch value:** Spell page (8647) shows only a server-side dummy effect; the 5% Physical-damage-taken figure is the long-standing class value, not a number read off the 12.0.5 page. Re-verify the exact percentage if precision is needed.
- **Fortifying Brew cooldown:** Spell page shows ~6 minutes; Icy Veins prose says ~7 minutes. Treat as a long cooldown; re-verify exact value.
- **Revival cooldown:** ~3 minutes per Icy Veins; the spell page only exposed a GCD value, so the 3-minute figure is from guide prose, not the spell page.
- **Celestial Conduit:** Referenced by guides as a Midnight Mistweaver cooldown, but the Wowhead spell page returned 403 on fetch — spell ID intentionally OMITTED. Re-verify and add the ID once confirmed.
- **Thunder Focus Tea:** Named in Icy Veins (~30s empower cooldown); spell ID not confirmed on a live page — OMITTED.
- **Passives / talents:** Ancient Teachings, Spiritfont (Apex), Misty Coalescence, Way of the Serpent, Amplified Rush were named in guide prose but their spell IDs were not confirmed on live spell pages — OMITTED.
- **Consumables/enchants:** Names from Icy Veins prose only; no item-ID pages fetched. Item IDs OMITTED; re-verify names and add IDs before hardcoding.
- **Dance of the Wind:** Spell page (414132) describes a dodge-chance increase; at least one guide called it an "immunity." Guide treated the spell page as authoritative (dodge, not immunity).
- **Maintenance flag:** Re-verify all of the above — especially spell IDs, cooldowns, and dispel schools — after ANY 12.x patch, as healer kits were actively changed in Midnight.
