# Preservation Evoker — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/evoker/preservation/overview-pve-healer
> - https://www.wowhead.com/spell=351338/quell
> - https://www.wowhead.com/spell=363916/obsidian-scales
> - https://www.wowhead.com/spell=357170/time-dilation
> - https://www.wowhead.com/spell=374348/renewing-blaze
> - https://www.method.gg/guides/preservation-evoker
> - https://www.icy-veins.com/wow/preservation-evoker-pve-healing-guide
> - https://www.icy-veins.com/wow/preservation-evoker-pve-healing-spell-summary
> - Spell IDs additionally surfaced via Wowhead spell-page URLs: Zephyr (374227), Renewing Blaze (374348), Cauterizing Flame (374251), Naturalize (360823), Fury of the Aspects (390386), Blessing of the Bronze (381748), Deep Breath (357210), Hover (358267)

## Overview

Preservation Evoker is a ranged healer (the healing specialization of the Dracthyr/hybrid Evoker class). It is described in current Midnight guides as a "highly mobile, HoT-focused, preparation-based healer" that excels when the group is stacked and when incoming damage is predictable.

Core gameplay loop: the spec front-loads healing ahead of known damage windows rather than reacting to spot damage. Echo is the central mechanic — it stores a healing effect on an ally that is then replicated/consumed by the Evoker's larger spells (e.g. Dream Breath, Spiritbloom), letting the player pre-stack throughput before a hit lands. Empower spells (charged by holding the cast, e.g. Dream Breath, Spiritbloom) scale their effect with empower level, giving a cast-time-vs-throughput tradeoff. Sustained healing leans on heal-over-time effects (Reversion, Dream Breath HoT, Temporal Anomaly shields) layered on top of burst windows.

Healing/damage/survivability profile: strong, efficient group healing during predictable AoE damage phases; respectable personal damage contribution between healing checks; and notably strong personal survivability and external defensive support (see Defensives / Utility). Mobility is excellent via Hover and Deep Breath.

Primary weakness: short cast range (Evoker spells have a shorter range than other healers), positioning dependence, and weaker/less-intuitive reactive spot healing. The spec is less forgiving when damage is unpredictable or when the group is spread out.

## Role in Raid

- Role: Healer (ranged).
- Bloodlust-equivalent: YES. Fury of the Aspects (SpellID 390386) grants party/raid +30% haste for 40 sec (sources Exhaustion afterward, same as Heroism/Bloodlust). Evoker is one of the classes that brings its own lust.
- Battle resurrection: NOT confirmed for Evoker in the fetched sources. Evoker has historically NOT had a combat resurrection. Treat "no battle res" as the working assumption and see Known Gaps.
- Raid buff / utility buffs:
  - Blessing of the Bronze (SpellID 381748) — raid-wide buff reducing the cooldown of a major movement ability for all party/raid members. (Persistent raid utility buff, not a throughput buff.)
  - Time Spiral — group mobility utility buff (referenced in current guides as a group movement/cast-while-moving enabler). SpellID not confirmed; see Known Gaps.
- Group defensives / externals:
  - Time Dilation (SpellID 357170) — a targeted external damage-mitigation cooldown cast on an ally.
  - Zephyr (SpellID 374227) — party-wide AoE damage reduction + movement speed.
  - These two are a meaningful part of why Preservation is valued for raid damage windows, not just raw HPS.
- Mobility profile: very high. Hover (SpellID 358267) grants move speed and lets most Evoker spells be cast while moving; Deep Breath (SpellID 357210) is a directional flight/gap-closer that also removes roots.

## Abilities Reference

Confirmed SpellIDs are shown inline. Where an ID is omitted, it was not confirmed on a fetched live source.

Core healing toolkit (talented/baseline, descriptions from current guides):
- Echo — stores a healing effect on an ally that is replicated/empowered by subsequent heals. Central spec mechanic. (ID not confirmed.)
- Reversion — heal-over-time. (ID not confirmed.)
- Dream Breath — empowered frontal/cone heal that also applies a HoT; key burst-healing button. (ID not confirmed.)
- Spiritbloom — empowered direct heal that splits/chains to injured allies. (ID not confirmed.)
- Emerald Blossom — ground-targeted burst heal on nearby allies (improved for spread scenarios in 12.0.5). (ID not confirmed.)
- Temporal Anomaly — sends a shielding orb through allies; reworked in 12.0.5 to apply Echoes baseline (Resonating Sphere node removed; Temporal Barrier added in its place). (ID not confirmed.)
- Rewind — major raid cooldown that reverts recent health loss on allies. (ID not confirmed.)
- Stasis — stores several casts and releases them later as a burst. (ID not confirmed.)
- Living Flame — filler heal/damage nuke; 12.0.5 buffed hard-cast Living Flame (Chronal Dynamo: cast time reduced 0.2s, +50% damage/healing when non-instant, replacing Energy Cycles). (ID not confirmed.)
- Verdant Embrace — single-target heal that also pulls the Evoker to the ally (mobility + heal). (ID not confirmed.)
- Rescue — targeted ally movement tool (grip-to-self / reposition). (ID not confirmed.)

Patch 12.0.5 note: Temporal Anomaly and its choice nodes changed heavily — Resonating Sphere removed, Temporal Anomaly applies Echoes baseline, and Temporal Barrier was added. A new talent Chronal Dynamo was added (Living Flame cast-time and non-instant bonus). These are talent-tree changes; exact node SpellIDs not confirmed.

## Rotation / Priority

This is a LOGICAL priority for healing, NOT a DPS benchmark or strict APL. Preservation is preparation-based, so timing relative to incoming raid damage matters more than a fixed sequence.

Pre-damage setup (before a known raid hit):
1. Pre-place Echo on allies (or via Temporal Anomaly, which now applies Echoes baseline) so the follow-up heal is amplified.
2. Empower Dream Breath / Spiritbloom into the damage window to consume Echoes for burst group healing.
3. Stasis can be pre-loaded with heals during downtime and released into a heavy damage window.

Sustained / single-target priority:
- Keep Reversion / Dream Breath HoT rolling on injured targets.
- Use Living Flame as filler healing (or to deal damage when healing is not needed); hard-cast benefits from Chronal Dynamo in 12.0.5.
- Echo + Verdant Embrace for efficient targeted topping.

AoE / heavy raid damage:
- Temporal Anomaly for proactive shielding.
- Emerald Blossom for stacked/semi-spread burst.
- Empowered Dream Breath (higher empower level) for the largest group heal.
- Rewind as the major "we took too much, undo it" raid cooldown.

Damage filler (between healing checks):
- Living Flame and other ranged damage abilities; do not sacrifice a healing window for damage.

## Defensives

This section is one of the two most important for RaidLens. Cooldowns: confirmed values are stated; unconfirmed ones are flagged.

- Obsidian Scales (SpellID 363916) — personal. Reduces all damage taken by 30% for 12 sec. Current guide prose states it has TWO charges with a ~90 sec cooldown (via the Obsidian Bulwark talent). NOTE: the Wowhead spell tooltip lists "cooldown: 1 second," which is the recharge/GCD artifact of a charge-based ability, not the real recharge — treat the effective cooldown as ~90 sec per charge, 2 charges.
  - RaidLens usage: with two charges, this should be up for nearly every significant predictable hit. If a Preservation Evoker took a large avoidable/lethal hit with both charges available and no other defensive active, that is a missed defensive. A single charge spent across two close-together hits is acceptable.
- Renewing Blaze (SpellID 374348) — personal self-heal-over-time. Heals back ~100% of the damage prevented by Obsidian Scales over time (synergy buff), and on its own restores health over a window. Often used together with Obsidian Scales. Cooldown NOT confirmed in fetched sources.
  - RaidLens usage: typically paired with Obsidian Scales. Judge it as a personal sustain cooldown — flag if the Evoker died to sustained personal damage with Renewing Blaze unused and off cooldown. Do not flag against single one-shot mechanics where it would not have mattered.
- Zephyr (SpellID 374227) — party/raid AoE mitigation. Reduces damage taken from AoE attacks by 20% (and +30% move speed) for ~8 sec for the Evoker and nearby allies (~4 nearest, ~20 yd). Cooldown NOT confirmed; commonly a multi-minute group cooldown.
  - RaidLens usage: a GROUP defensive for an AoE damage window. If many players (including the Evoker) took heavy AoE damage during a known burst and Zephyr was unused, flag as an unused raid-defensive opportunity. Only counts for AoE-tagged damage, not single-target or tank hits.
- Time Dilation (SpellID 357170) — external, cast on an ally. Converts ~50% of the damage the target would take into damage dealt over 8 sec (smooths a burst hit on a teammate). Cooldown NOT confirmed.
  - RaidLens usage: an EXTERNAL. If a teammate (often a tank or a soak target) died to a predictable large hit and the Evoker's Time Dilation was available, that is a missed external. Judge against the protected ally's death timing, not the Evoker's own.
- Stretch Time / Deep Breath as a defensive — with the Stretch Time talent, Deep Breath (SpellID 357210) staggers/spreads damage taken during the flight, letting it double as an emergency personal mitigation + reposition. Whether the player has Stretch Time talented is build-dependent.
  - RaidLens usage: only treat Deep Breath as a defensive if the build clearly uses Stretch Time; otherwise treat Deep Breath as mobility. Do not flag its absence as a missed defensive by default.

## Utility

This section is the second most important for RaidLens.

- Interrupt: Quell (SpellID 351338). Interrupts the target's current cast and locks that spell school for 6 sec. Cooldown: 20 sec (confirmed on the Wowhead spell page). This IS a real, raid-usable interrupt — Preservation Evoker DOES have a kick. It is the spec's primary/only standard interrupt ability. (The Dracthyr racial and Spatial Paradox provide situational extra stops in M+ but Quell is the interrupt for analysis purposes.)
  - RaidLens usage: a missed interrupt on an interruptible cast IS attributable to a Preservation Evoker. Treat Quell as available roughly every 20 sec.
- Dispels:
  - Cauterizing Flame (SpellID 374251) — removes Bleed, Poison, Curse, and Disease effects from a friendly target (also heals). This is the Evoker's targeted multi-type cleanse.
  - Naturalize (SpellID 360823) — Preservation's healer dispel; removes Magic and Poison effects from an ally. (Naturalize is the Preservation-spec version; Expunge is the DPS-spec poison-only variant — Expunge SpellID NOT confirmed.)
  - RaidLens usage: as a healer, Preservation is expected to handle Magic dispels (Naturalize) and Poison/Curse/Disease/Bleed (Cauterizing Flame). A repeatedly un-dispelled debuff that Naturalize or Cauterizing Flame could remove is attributable.
- Crowd control: Evoker CC (e.g. Sleep Walk and similar) exists but specific raid-relevant CC SpellIDs were NOT confirmed; do not attribute specific CC in analysis without confirmation.
- Externals: Time Dilation (357170) and Zephyr (374227) — see Defensives.
- Raid buffs: Blessing of the Bronze (381748) — movement-ability cooldown reduction for the raid; Time Spiral — group mobility buff (ID not confirmed); Fury of the Aspects (390386) — Bloodlust-equivalent +30% haste.
- Movement tools: Hover (SpellID 358267, +30% move speed and cast-while-moving for most spells, ~6 sec), Deep Breath (SpellID 357210, directional flight that also removes roots), Verdant Embrace (pull-to-ally heal), Rescue (reposition an ally).

## Consumables and Enchants

Specific Midnight 12.0.5 consumable items (flasks, potions, food, augment runes), gem IDs, and enchant IDs were NOT confirmed from the fetched sources (the guide pages loaded did not expose item IDs in the retrieved content). General expectation for a raiding healer: an Intellect flask, a healing/Intellect potion, an Intellect food buff, an augment rune, and Intellect/secondary-stat enchants/gems — but DO NOT cite specific item IDs or names until verified. See Known Gaps.

## Notes and Known Gaps

Unconfirmed facts (omit IDs/values in analysis until verified on a live source):
- Healing/utility ability SpellIDs not confirmed: Echo, Reversion, Dream Breath, Spiritbloom, Emerald Blossom, Temporal Anomaly, Temporal Barrier, Rewind, Stasis, Living Flame, Verdant Embrace, Rescue, Time Spiral, Sleep Walk / CC, Expunge.
- Cooldowns NOT confirmed: Renewing Blaze, Zephyr, Time Dilation. (Quell = 20 sec confirmed; Obsidian Scales = ~90 sec / 2 charges per guide prose, with the tooltip's "1 second" being a charge-recharge artifact.)
- Obsidian Scales charges (2) and 90s cooldown come from current guide PROSE (Icy Veins / overview), not from the spell tooltip directly. The tooltip showed "cooldown: 1 second."
- Renewing Blaze exact baseline cooldown/duration could not be cleanly read (Wowhead tooltip returned dummy-aura values; Wowpedia returned HTTP 403).
- Battle resurrection: not confirmed; working assumption is Evoker has NO battle res. Verify before relying on this in analysis.
- Consumables, enchants, gems, embellishments: no item IDs confirmed.
- Talent build / import strings and SimC APL: not sourced (no user-provided profile). Rotation above is conceptual logical priority only.
- Hover live SpellID confirmed as 358267; note a separate beta/PTR ID (357302) exists in search results — use 358267 for live 12.0.5.

Maintenance flag: RE-VERIFY all of the above after ANY 12.x patch. Talent nodes (especially Temporal Anomaly / Temporal Barrier / Chronal Dynamo) changed in 12.0.5 and may change again; spell IDs are stable once assigned, but cooldowns, charges, and talent availability are balance-patch-dependent.
