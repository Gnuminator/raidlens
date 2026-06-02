# Frost Mage — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched June 2026):
> - https://www.wowhead.com/spell=2139/counterspell
> - https://www.wowhead.com/spell=45438/ice-block
> - https://www.wowhead.com/spell=11426/ice-barrier
> - https://www.wowhead.com/spell=110959/greater-invisibility
> - https://www.wowhead.com/spell=80353/time-warp
> - https://www.icy-veins.com/wow/frost-mage-pve-dps-guide
> - https://www.icy-veins.com/wow/frost-mage-pve-dps-rotation-cooldowns-abilities
> - https://www.method.gg/guides/frost-mage/playstyle-and-rotation
> - WebSearch result pages confirming spell IDs 30449 (Spellsteal), 475 (Remove Curse), 235450 (Prismatic Barrier), 235313 (Blazing Barrier)

## Overview

Frost Mage is a ranged spellcasting DPS specialization. Its core gameplay loop revolves around building and spending a stacking debuff and consuming proc-based instant casts:

- **Freezing** — a stacking mechanic (max 20 stacks per Icy Veins) that Frost spends with Ice Lance. This is a Midnight-era replacement for how the old Shatter/Winter's Chill model worked. Spend stacks with Ice Lance at the appropriate threshold, then rebuild with generators.
- **Brain Freeze** — a proc that makes the next Flurry instant and applies its empowering effect to follow-up Ice Lances.
- **Fingers of Frost** — a proc that makes Ice Lance hit as if the target were frozen (a guaranteed-shatter style hit).

The spec layers hard-hitting cooldown spells (Frozen Orb, Glacial Spike, Comet Storm / Ray of Frost) on top of a generator/spender filler loop. Damage profile is bursty around cooldown windows with a steady filler baseline. Survivability is built around shields and immunities rather than passive mitigation.

**Major Midnight (12.x) changes confirmed in sources:**
- The old **Icy Veins** offensive cooldown was removed and replaced in the kit by **Ray of Frost**, which now operates with up to 2 charges and acts as a Freezing builder (per the Wowhead/Method overview).
- Shatter reworked around the new **Freezing** debuff.
- Defensive pruning hit Mage hard (see Defensives / Utility): Greater Invisibility no longer reduces damage taken, Mirror Image no longer grants damage reduction, Mass Barrier was removed.

**Primary weakness:** Frost is cast/channel dependent for its highest-value spells (Frostbolt, Ray of Frost channel, Glacial Spike cast) and loses significant throughput when forced to move heavily. Its survivability leans on a small number of cooldowns that, if wasted, leave it exposed.

## Role in Raid

- **Role:** Ranged DPS.
- **Bloodlust-equivalent:** YES. Mage provides **Time Warp** (spell ID 80353) — raid-wide 30% haste for 40 seconds (haste value per general Time Warp tooltip knowledge; the live spell page confirmed ID, school, 40s duration, and a 5-minute personal cooldown but did not render the exact haste %). It shares the Bloodlust/Heroism exhaustion ("Sated") lockout. This is the standard Lust class.
- **Battle res:** NO. Mage cannot battle-res.
- **Raid buffs/debuffs brought:** Mage's signature raid utility is Time Warp. (Other passive raid buffs/debuffs are not confirmed from the sources fetched — see Known Gaps.)
- **Group defensives / externals:** Frost Mage does **not** provide a meaningful external defensive to other players in Midnight. Mass Barrier (the old raid-wide shield) was **removed**. Its defensives are personal-only.
- **Mobility profile:** Strong burst mobility via **Blink** and the **Shimmer** talent (instant blink), plus **Ice Floes** (cast-while-moving) and **Slow Fall**. Note Midnight increased Blink's inherent cooldown to ~15s and made Shimmer a single charge on a ~30s cooldown (per Icy Veins overview), so sustained kiting is more limited than in prior expansions.

## Abilities Reference

SpellIDs are included ONLY where a fetched live source explicitly showed the exact ID. Where omitted, the ID was not confirmed — treat the name as authoritative, not the number.

**Core damage abilities (IDs not individually confirmed — omitted intentionally):**
- **Frostbolt** — primary filler / Freezing builder.
- **Flurry** — instant when empowered by Brain Freeze; applies the empowering effect that boosts follow-up Ice Lance.
- **Ice Lance** — Freezing spender; benefits hugely from Fingers of Frost / frozen targets.
- **Frozen Orb** — rolling AoE cooldown; also generates Fingers of Frost.
- **Glacial Spike** — hard-hitting cast, available when talented.
- **Ray of Frost** — channeled cooldown, now with up to 2 charges and acting as a Freezing builder (Midnight change). Replaces the removed Icy Veins cooldown.
- **Comet Storm** — burst AoE cooldown, top priority in the Frostfire build.
- **Blizzard** — primary AoE ground effect (AoE only).
- **Cone of Cold** — short-range frontal AoE / control.

**Key procs / passives:**
- **Freezing** — stacking debuff (max 20), spent by Ice Lance.
- **Brain Freeze** — makes next Flurry instant + empowering.
- **Fingers of Frost** — makes Ice Lance act as a shatter hit.

**Confirmed-ID abilities** are listed under Defensives and Utility below.

## Rotation / Priority

This is a **logical priority order**, not a DPS benchmark or a sim APL. No user SimC profile was provided, so exact conditional thresholds may vary by talent build and patch tuning.

**Opener (both Spellslinger and Frostfire builds, per Method):**
1. Precast Frostbolt (or Frostfire Bolt for the Frostfire build).
2. Activate potion / trinkets / on-use cooldowns.
3. Ray of Frost.
4. Continue into the sustained priority below.

**Sustained single-target priority (Spellslinger, per Method):**
1. Flurry — when Brain Freeze is active AND Thermal Void is inactive.
2. Ice Lance — with 2x Fingers of Frost.
3. Frozen Orb — off cooldown.
4. Glacial Spike — off cooldown.
5. Ice Lance — when target has 6+ Freezing stacks OR Fingers of Frost is active.
6. Flurry — as filler.
7. Ray of Frost — as a Freezing builder.
8. Frostbolt — filler.

(Frostfire build differs: Comet Storm is the top priority, Frostfire Bolt replaces Frostbolt as filler, and Ice Lance is spent at 10+ Freezing stacks instead of 6+.)

**AoE priority (Spellslinger, per Method):**
- Blizzard when Freezing Rain is active (top priority).
- Flurry when Brain Freeze is up and Thermal Void is down.
- Use cooldown abilities (Frozen Orb, Comet Storm, Glacial Spike) on cooldown.
- Spend Freezing with Ice Lance, rebuild with generators.

Conceptually: keep hard cooldowns rolling, spend Freezing/procs at the right thresholds, and fill with Frostbolt/Frostfire Bolt or Ray of Frost.

## Defensives

This is one of the two most important sections for RaidLens. Each defensive includes how to judge correct use during a damage window.

- **Ice Block** (spell ID 45438) — full immunity to all damage and harmful effects for 10 seconds; stuns/incapacitates the mage (cannot act). Live spell page showed no fixed cooldown field but the spell applies **Hypothermia** preventing recast for ~30 seconds. **RaidLens usage:** The strongest panic button. If a Frost Mage took lethal or near-lethal avoidable damage and Ice Block was off cooldown (no Hypothermia debuff active in the seconds prior), it should have been used. Conversely, Ice Block used during a heavy raid-wide window is correct play. Cannot be used to also DPS, so unnecessary use mid-burst is a throughput loss but not a survival mistake.

- **Ice Barrier** (spell ID 11426) — absorption shield (absorbs Arcane/Fire/Frost/Holy/Nature/Physical/Shadow). Live spell page showed **no cooldown** (global-cooldown gated only). Note: the Icy Veins overview described Ice Barrier's "cooldown increased" in Midnight — this conflicts with the live spell page showing n/a, so treat the exact cooldown as unconfirmed (see Known Gaps). **RaidLens usage:** This is the spammable baseline shield and should essentially always be active going into a known damage event. If a Frost Mage ate a predictable hit with no Ice Barrier absorb up, that is a preventable mistake.

- **Greater Invisibility** (spell ID 110959) — 2-minute cooldown; makes the mage invisible and untargetable, dropping threat, for the duration. **IMPORTANT Midnight change:** it **no longer reduces damage taken** (the old 60% DR was removed). **RaidLens usage:** In Midnight this is primarily a threat/aggro drop and a "remove me from targeting" tool rather than a flat damage-reduction defensive. Do NOT flag a Frost Mage for failing to use Greater Invisibility as damage mitigation — its mitigation value was pruned. It can still avoid a targeted mechanic by becoming untargetable.

- **Alter Time** — recalls the mage to their position/health from a few seconds prior. In Midnight it is tied to the **Temporal Realignment** talent, which can trigger automatic healing when health drops to ~24% (per Icy Veins; this is talent-gated and partially automatic, not always a manual defensive). **RaidLens usage:** Treat as a soft self-heal/reset. Only judge it as "available but unused" if the build is known to have manual Alter Time and it was off cooldown during a survivable spike. SpellID not confirmed — omitted.

- **Mirror Image** — summons copies; in Midnight the duration was cut to ~15s and it **no longer provides damage reduction** (per Icy Veins overview). **RaidLens usage:** No longer a personal damage-reduction defensive in Midnight. Do not flag failure to use Mirror Image as a survival mistake. SpellID not confirmed — omitted.

- **Mass Barrier** — **REMOVED in Midnight** (per Icy Veins overview). Do not expect or flag this ability. It is no longer a raid external.

- **Prismatic Barrier** (spell ID 235450) — arcane absorb shield that also reduces magic damage taken by 15% and shortens harmful magic durations. **NOTE: this is an Arcane Mage barrier**, not the Frost barrier. A Frost Mage uses **Ice Barrier**, not Prismatic Barrier. Listed only to prevent misattribution.

- **Blazing Barrier** (spell ID 235313) — Fire Mage's barrier. **Not used by Frost** — listed only to prevent misattribution.

## Utility

This is the second most important section for RaidLens. Be exact about the interrupt.

- **Interrupt — Counterspell** (spell ID 2139): This is the Frost Mage's **only** raid-usable interrupt. Confirmed live: **25-second cooldown**, 40-yard range, instant, off the GCD, locks out the interrupted spell school for several seconds. **RaidLens usage:** Frost Mage DOES have a real, ranged, off-GCD kick on a 25s cooldown. Missed-interrupt analysis applies fully to this spec. If a kickable cast went through and the mage's Counterspell was available (no recent use within ~25s), that is a missed interrupt.

- **Crowd control:**
  - **Frost Nova** — roots all nearby enemies (AoE root) and deals minor damage. SpellID not confirmed — omitted.
  - **Cone of Cold** — frontal AoE that slows/freezes.
  - **Polymorph** — single-target incapacitate (sheep). SpellID not confirmed — omitted.
  - **Ring of Frost** — AoE incapacitate (talent). SpellID not confirmed — omitted.

- **Dispels:**
  - **Remove Curse** (spell ID 475) — removes **Curse** effects from a **friendly** target. This is the only friendly dispel type Frost Mage has.
  - **Spellsteal** (spell ID 30449) — steals one beneficial **Magic** effect from an **enemy** (offensive utility, not a friendly dispel).
  - Frost Mage cannot dispel Poison, Disease, or Magic from allies.

- **Externals:** None. Frost Mage has no external defensive or external dispel-others-debuff tool beyond Remove Curse (curse only). It cannot shield or damage-reduce other players in Midnight (Mass Barrier removed).

- **Raid buff / Lust:** **Time Warp** (spell ID 80353) — raid-wide haste for 40s, shares the Bloodlust exhaustion lockout. 5-minute personal cooldown (per live spell page). This is the spec's signature raid utility.

- **Movement tools:**
  - **Blink** — short instant teleport (~15s cooldown in Midnight per Icy Veins). SpellID not confirmed — omitted.
  - **Shimmer** (talent) — instant blink usable while casting; ~30s cooldown, single charge in Midnight (per Icy Veins). Replaces Blink when talented. SpellID not confirmed — omitted.
  - **Ice Floes** (talent) — allows casting while moving for a few casts. SpellID not confirmed — omitted.
  - **Slow Fall** — removes fall damage on a friendly target. SpellID not confirmed — omitted.

## Consumables and Enchants

Could not be sourced with specific, verified item IDs from the pages fetched. No SimC profile was provided. Frost Mage uses Intellect as its primary stat and standard ranged-caster consumables (Intellect flask, an Intellect/secondary-stat food, an Intellect or DPS potion, and an augment rune of the current expansion), but exact Midnight 12.0.5 item names and IDs were NOT confirmed live and are therefore omitted. See Known Gaps — re-verify against the live Wowhead "enchants and consumables" sub-page before relying on this section.

## Notes and Known Gaps

**Confirmed spell IDs (from fetched live sources):**
- Counterspell — 2139 (25s cooldown, confirmed live)
- Ice Block — 45438 (confirmed live; ~30s Hypothermia recast lock)
- Ice Barrier — 11426 (confirmed live)
- Greater Invisibility — 110959 (2 min cooldown, confirmed live; no longer reduces damage)
- Time Warp — 80353 (40s duration, 5 min cooldown, confirmed live)
- Spellsteal — 30449 (confirmed via Wowhead URL)
- Remove Curse — 475 (confirmed via Wowhead URL)
- Prismatic Barrier — 235450 (Arcane barrier; confirmed; NOT a Frost ability)
- Blazing Barrier — 235313 (Fire barrier; confirmed; NOT a Frost ability)

**Unconfirmed facts / gaps:**
- SpellIDs for core Frost abilities (Frostbolt, Flurry, Ice Lance, Frozen Orb, Glacial Spike, Ray of Frost, Comet Storm, Blizzard, Cone of Cold, Frostfire Bolt) were NOT confirmed on a fetched spell page and are intentionally omitted.
- SpellIDs for Blink, Shimmer, Ice Floes, Frost Nova, Polymorph, Ring of Frost, Alter Time, Mirror Image, and Slow Fall were NOT individually confirmed and are omitted.
- **Ice Barrier cooldown conflict:** the live Wowhead spell page shows no cooldown (GCD-gated), while the Icy Veins overview text said the cooldown was "increased" in Midnight. Exact cooldown unverified — do not assert a specific Ice Barrier cooldown.
- **Time Warp haste %:** the live spell page confirmed ID/duration/cooldown but did not render the exact haste percentage; 30% is from general tooltip knowledge, not confirmed on the fetched page.
- **Alter Time / Temporal Realignment** behavior (auto-heal at ~24% HP) is from the Icy Veins overview prose; the exact talent mechanics and whether Alter Time remains a manual defensive in the raiding build are not fully confirmed.
- **Consumables and enchants:** no verified Midnight 12.0.5 item names/IDs — section is conceptual only.
- **Other raid buffs/debuffs:** beyond Time Warp, no additional Mage raid buff/debuff was confirmed from the fetched sources.
- Wowhead guide body pages (overview/rotation) returned only headers via fetch; rotation detail above is sourced from Method.gg and Icy Veins, which are current 12.0.5 guides but third-party.

**Maintenance flag:** Re-verify every spell ID, cooldown, and the Freezing/Ray of Frost mechanic after ANY 12.x patch. Midnight has actively pruned and reworked Mage defensives and cooldowns; values in this guide reflect patch 12.0.5 as of June 2026 and may change.
