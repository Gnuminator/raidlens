# RaidLens Spec Guide — Gap Tracker

_Generated 2026-06-02. Regenerated 2026-06-12 after the SimC enrichment pass — every count and per-spec list below was re-measured against the actual guide files (exact-name match against each guide's "Confirmed Spell IDs" table), not carried over._

The 37 spec guides beyond **Havoc** and **Beast Mastery** were originally written by a research swarm doing **live Wowhead research under strict no-fabrication rules**: a SpellID/value was included only if confirmed against a page actually fetched; everything else was omitted and flagged. The SimC enrichment pass (2026-06-02) then closed most of the damage/rotational gaps. This file is the punch list for what is STILL open.

---

## Where things stand (verified 2026-06-12)

**31 of 39 guides are SimC-enriched** — measured: 30 guides contain a `## SimulationCraft Reference` section, plus Beast Mastery whose equivalent section is headed `## SimulationCraft APL`. Havoc and Beast Mastery were built from their original SimC profiles with IDs confirmed inline, so they carry no separate SimC ID table; the other 29 each gained:

- a SimC **talent import string** (per hero tree),
- a **damage-distribution** table (filtered to real damage-% rows),
- the **full SimC APL** embedded verbatim (from `simc-guides/apl/`, 49 files — all 29 pass the APL-verbatim audit),
- a **Confirmed Spell IDs (SimulationCraft HTML)** table — exact-name match to `simc-guides/spell-ids-reference.json` (632 ability names from the SimC HTML report; regenerate with `node simc-guides/build-spell-ids-reference.js`).

**8 guides CANNOT be SimC-enriched — no SimC data exists for them** (the report has no healer or Augmentation profiles): the 7 healers (Restoration Druid, Preservation Evoker, Mistweaver Monk, Holy Paladin, Discipline Priest, Holy Priest, Restoration Shaman) + Augmentation Evoker. They keep their live-researched guides and ALL of their original gaps (no APL, no talent string, unsourced consumables, unconfirmed IDs).

---

## What is still open

1. **Defensive / interrupt / utility / CC spell IDs in the guide bodies.** The SimC report only contains spells the Patchwerk sim *used*, so non-damaging defensives, interrupts, and utility are absent from the enriched tables (Mind Freeze, Kick, Cloak of Shadows, Ice Block, Blur, Astral Shift, Dispersion, …). **A documentation reference now exists** — `simc-guides/interrupt-defensive-ids.json` (live-researched interrupts per class + personal defensives per spec, confirmed IDs) — but the guides have NOT yet been updated from it, and two values conflict with the functional `DEFENSIVE_SPELL_IDS` map (Alter Time 108978/342245, Die by the Sword 236385/118038 — flagged in that file's `_meta`, verify before reconciling).
2. **Consumable / enchant / gem item IDs** — still missing from all 39 guides (names only; Wowhead's consumables pages weren't reliably fetchable). Havoc and Beast Mastery have item IDs but with flagged source conflicts.
3. **The 8 unenrichable specs** (7 healers + Augmentation) — every original gap still applies.
4. **SimC-vs-Wowhead ID discrepancies — FLAGGED, not overwritten** (verify live before using in filters): Dark Transformation (Wowhead 63560 / SimC 1233448), Avenging Wrath (31884 / 454351), Exploding Keg (214326 / 325153, 388867), Shattering Star (SimC 1265804), Bear Form (SimC 5487).
5. **Per-spec uncertainties** (cooldown conflicts, talent-dependent values) — listed per spec below; the SimC data did not address cooldowns/values, so these carry over from the original research.

Some still-open names below are damage abilities that simply weren't in that spec's simmed build (AoE/talent variants like Blizzard, Crimson Tempest, Cataclysm) — they may appear in a future sim, or need a live Wowhead page. Names marked **(in spell-ids-reference.json — verify against guide)** already have an ID in the reference (matched via another spec's sim); they can be lifted into the guide after a sanity check.

---

## ▶ How to resolve — paste this prompt later

```
RaidLens spec-guide gap closure. Read DECISIONS.md and guides/classes/SPEC_GUIDE_GAPS.md first.
The damage/rotational spell IDs are DONE (SimC enrichment) — do not redo them. Work the
remaining gaps only:

1. DEFENSIVE / INTERRUPT / UTILITY IDs: for each enriched guide, fill in the still-unconfirmed
   ability IDs listed in SPEC_GUIDE_GAPS.md. Check simc-guides/interrupt-defensive-ids.json
   FIRST (interrupts + personal defensives are already live-confirmed there); for anything not
   in it, confirm on an individually fetched Wowhead spell page. Also reconcile the two flagged
   conflicts (Alter Time, Die by the Sword) against live pages and update DEFENSIVE_SPELL_IDS
   in js/boss-knowledge.js only after confirmation.
2. LIFTABLE IDs: names marked "(in spell-ids-reference.json — verify against guide)" already
   have an ID in simc-guides/spell-ids-reference.json — verify the entry fits the spec's use
   (watch multi-id variants) and add it to that guide's Confirmed Spell IDs table.
3. CONSUMABLES / ENCHANTS / GEMS: add item IDs to each guide, confirmed from fetched pages only.
4. THE 8 UNENRICHABLE SPECS (7 healers + Augmentation Evoker): no SimC data exists for them —
   resolve their unconfirmed IDs and uncertainties via live Wowhead only, same strict rules.
5. STRICT RULE (unchanged): include a SpellID/item ID only if confirmed from a source you
   actually fetched. Anything still unverified stays flagged in Notes and Known Gaps.
   Never fabricate or recall from memory.
6. Update each guide's confirmed-ID list, remove resolved items from its Known Gaps, then
   update this gap tracker to match.

Use the agent swarm — split by class, in parallel, under the strict rules above.
```

**Secondary path (single spec, just want IDs/cooldowns confirmed):**

```
Re-research the flagged SpellIDs and cooldown conflicts for {Spec} {Class} from live Wowhead
(individual spell pages, not the JS-rendered guide hubs) and confirm or correct them in
guides/classes/{role}/{class-slug}/{spec-slug}.md. Strict rule: confirmed-from-fetched-page
only; leave anything you can't load flagged. Then update SPEC_GUIDE_GAPS.md.
```

---

## Status at a glance

"Wowhead IDs" = live-confirmed IDs from the original research pass (2026-06-02 counts). "SimC ID rows" = rows in the guide's Confirmed Spell IDs table (measured 2026-06-12). "Open IDs" = abilities still lacking a confirmed ID in that guide (per-spec lists below).

| Spec | Class | Role | Wowhead IDs | SimC enriched? | SimC ID rows | Open IDs |
|---|---|---|---|---|---|---|
| Havoc | Demon Hunter | dps | 9 | ✅ (original profile, IDs inline) | — | 0 |
| Beast Mastery | Hunter | dps | 9 | ✅ (original profile, IDs inline) | — | 0 |
| Blood | Death Knight | tank | 17 | ✅ | 13 | 4 |
| Frost | Death Knight | dps | 12 | ✅ | 14 | 6 |
| Unholy | Death Knight | dps | 11 | ✅ | 15 | 4 |
| Vengeance | Demon Hunter | tank | 21 | ✅ | 18 | 2 |
| Balance | Druid | dps | 21 | ✅ | 13 | 1 |
| Feral | Druid | dps | 20 | ✅ | 16 | 6 |
| Guardian | Druid | tank | 9 | ✅ | 18 | 7 |
| Restoration | Druid | healer | 10 | ❌ no SimC data | — | 17 |
| Devastation | Evoker | dps | 13 | ✅ | 12 | 4 |
| Augmentation | Evoker | dps | 15 | ❌ no SimC data | — | 12 |
| Preservation | Evoker | healer | 9 | ❌ no SimC data | — | 15 |
| Marksmanship | Hunter | dps | 13 | ✅ | 10 | 6 |
| Survival | Hunter | dps | 5 | ✅ | 6 | 15 |
| Arcane | Mage | dps | 24 | ✅ | 13 | 3 |
| Fire | Mage | dps | 28 | ✅ | 31 | 6 |
| Frost | Mage | dps | 9 | ✅ | 9 | 11 |
| Brewmaster | Monk | tank | 19 | ✅ | 15 | 5 |
| Mistweaver | Monk | healer | 21 | ❌ no SimC data | — | 7 |
| Windwalker | Monk | dps | 21 | ✅ | 15 | 6 |
| Holy | Paladin | healer | 13 | ❌ no SimC data | — | 8 |
| Protection | Paladin | tank | 13 | ✅ | 12 | 8 |
| Retribution | Paladin | dps | 13 | ✅ | 21 | 6 |
| Discipline | Priest | healer | 11 | ❌ no SimC data | — | 7 |
| Holy | Priest | healer | 8 | ❌ no SimC data | — | 9 |
| Shadow | Priest | dps | 12 | ✅ | 24 | 7 |
| Assassination | Rogue | dps | 1 | ✅ | 13 | 7 |
| Outlaw | Rogue | dps | 18 | ✅ | 15 | 7 |
| Subtlety | Rogue | dps | 12 | ✅ | 9 | 6 |
| Elemental | Shaman | dps | 16 | ✅ | 12 | 11 |
| Enhancement | Shaman | dps | 12 | ✅ | 26 | 12 |
| Restoration | Shaman | healer | 10 | ❌ no SimC data | — | 18 |
| Affliction | Warlock | dps | 19 | ✅ | 20 | 7 |
| Demonology | Warlock | dps | 12 | ✅ | 27 | 9 |
| Destruction | Warlock | dps | 18 | ✅ | 18 | 12 |
| Arms | Warrior | dps | 14 | ✅ | 15 | 12 |
| Fury | Warrior | dps | 5 | ✅ | 17 | 13 |
| Protection | Warrior | tank | 8 | ✅ | 11 | 12 |

> **Prioritise:** the 8 unenrichable specs (Restoration Shaman 18 open, Restoration Druid 17, Preservation Evoker 15, Augmentation Evoker 12, …) get nothing from SimC and need a full live pass. Among enriched specs the largest remaining lists are Survival Hunter (15), Fury Warrior (13), and the 12-open group (Arms/Prot Warrior, Destruction, Enhancement) — almost all defensives/utility/CC.

---

## Per-spec detail

For **enriched** specs, the lists below contain ONLY the abilities still lacking a confirmed ID after enrichment (damage/rotational IDs resolved by the SimC table were pruned 2026-06-12 after verifying each guide's Confirmed Spell IDs section). The remaining names are mostly defensives, interrupt-adjacent utility, CC, and movement — exactly the category absent from the SimC source. "Uncertainties" (cooldown conflicts, talent-dependent values) carry over from the original research unless the enrichment demonstrably resolved them.

For the **8 unenrichable** specs, the original full lists are retained unchanged.

### Death Knight

**Blood (tank)** — enriched, 13 SimC ID rows.
- Still unconfirmed: Reaper's Mark (in spell-ids-reference.json — verify against guide), Consumption, Purgatory, Strangulate.
- Uncertainties: Dancing Rune Weapon baseline-vs-talent cooldown unclear; Rune Tap charge structure talent-dependent; no raid buff confirmed; no targeted ally external confirmed.

**Frost (dps)** — enriched, 14 SimC ID rows.
- Still unconfirmed: Frostscythe, Killing Machine, Rime, Razorice, Asphyxiate, Chains of Ice (in spell-ids-reference.json — verify against guide).
- Uncertainties: Anti-Magic Zone cooldown conflict (4 min vs 6 min); Lichborne cooldown unconfirmed; Death Strike healing formula + RP cost talent-modified; Death Grip ID was a search match, page not opened (re-verify).

**Unholy (dps)** — enriched, 15 SimC ID rows.
- Still unconfirmed: Clawing Shadows, Epidemic, Raise Ally, Death's Advance.
- Uncertainties: some cooldowns may reflect legacy tooltips; Summon Gargoyle baseline-vs-talent unconfirmed; raid buff/debuff not confirmed; Dark Transformation ID discrepancy (Wowhead 63560 kept in body, SimC 1233448 flagged).

### Demon Hunter

**Havoc (dps)** — ✅ enriched (original SimC profile). Only open items: flask source conflict (shattered sun vs magisters), food source conflict (blooming feast vs harandar), routine patch re-verification.

**Vengeance (tank)** — enriched, 18 SimC ID rows.
- Still unconfirmed: Soul Barrier, Last Resort.
- Uncertainties: Metamorphosis internal-vs-player-facing cooldown unverified; Fiery Brand DR % and Demon Spikes parry % approximate (guide prose); Hero Talent raid buff/debuff not confirmed; Disrupt vs Sigil of Silence interrupt distinction needs re-verification.

### Druid

**Balance (dps)** — enriched, 13 SimC ID rows.
- Still unconfirmed: Force of Nature.
- Uncertainties: Celestial Alignment/Incarnation base cooldown unverified; Survival Instincts charge count unconfirmed; friendly dispel access unconfirmed; roots/knockback CC IDs omitted; Mark of the Wild versatility value needs hotfix check.

**Feral (dps)** — enriched, 16 SimC ID rows.
- Still unconfirmed: Heart of the Wild (in spell-ids-reference.json — verify against guide), Bear Form (in spell-ids-reference.json — verify against guide; SimC 5487 flagged), Entangling Roots, Hibernate, Prowl (in spell-ids-reference.json — verify against guide), Wild Charge.
- Uncertainties: Survival Instincts cooldown (~3 min est.); Incarnation cooldown conflict (3 vs 2 min); Frenzied Regeneration charges/recharge unclear; proc IDs omitted (Apex Predator's Craving, Sudden Ambush, Clearcasting); talent mechanics not deeply sourced.

**Guardian (tank)** — enriched, 18 SimC ID rows.
- Still unconfirmed: Raze, Growl, Wild Charge, Travel Form, Dash, Mighty Bash, Typhoon.
- Uncertainties: Survival Instincts charges/duration/DR not numerically verified; Ironbark availability talent-dependent.

**Restoration (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Rejuvenation (in spell-ids-reference.json — verify against guide), Regrowth (in spell-ids-reference.json — verify against guide), Wild Growth, Lifebloom, Efflorescence, Mastery: Harmony, Abundance, Nature's Swiftness (in spell-ids-reference.json — verify against guide), Convoke the Spirits (in spell-ids-reference.json — verify against guide), Incarnation: Tree of Life, Survival Instincts, Bear Form (in spell-ids-reference.json — verify against guide), Cyclone, Soothe, Ursol's Vortex, Hibernate, Mark of the Wild.
- Uncertainties: Swiftmend/Flourish cooldowns show n/a on Wowhead; Convoke cooldown variable (45s–1min); Everbloom/Wildstalker hero tree specifics incomplete.

### Evoker

**Devastation (dps)** — enriched, 12 SimC ID rows.
- Still unconfirmed: Firestorm, Landslide, Verdant Embrace (in spell-ids-reference.json — verify against guide), Soar.
- Uncertainties: Shattering Star — SimC gives 1265804 (flagged; original Wowhead fetch 404'd — verify live); Cauterizing Flame removable types unverified; cooldowns talent-driven; rotation system-dependent (hero talent / tier set).

**Augmentation (dps)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Eruption, Fire Breath (in spell-ids-reference.json — verify against guide), Upheaval, Living Flame (in spell-ids-reference.json — verify against guide), Azure Strike (in spell-ids-reference.json — verify against guide), Expunge, Tail Swipe, Wing Buffet, Blistering Scales, Blessing of the Bronze, Sands of Time, Essence Burst.
- Uncertainties: Zephyr/Verdant Embrace cooldowns unconfirmed; Time Spiral cooldown from text only; Obsidian Scales two-charge state talent-dependent; Ebon Might/Prescience stat % approximate.

**Preservation (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Echo, Reversion, Dream Breath, Spiritbloom, Emerald Blossom, Temporal Anomaly, Temporal Barrier, Rewind, Stasis, Living Flame (in spell-ids-reference.json — verify against guide), Verdant Embrace (in spell-ids-reference.json — verify against guide), Rescue, Time Spiral, Sleep Walk, Expunge.
- Uncertainties: Renewing Blaze/Zephyr/Time Dilation cooldowns unconfirmed; battle resurrection not confirmed.

### Hunter

**Beast Mastery (dps)** — ✅ enriched (original SimC profile). Only open items: Duck pet family type unverified; Guardian's Hide ID.

**Marksmanship (dps)** — enriched, 10 SimC ID rows.
- Still unconfirmed: Exhilaration, Survival of the Fittest, Aspect of the Turtle, Disengage, Kill Shot, Tranquilizing Shot.
- Uncertainties: Rapid Fire cooldown conflict (16s vs 20s); Exhilaration cooldown conflict (2m vs 1m); Disengage cooldown shown as 1s (likely wrong); Hunter's Mark magnitude (~3%) approximate; Tranquilizing Shot dispel types not cleanly exposed.

**Survival (dps)** — enriched, 6 SimC ID rows (smallest enriched table — sim build was narrow).
- Still unconfirmed: Raptor/Swipe, Flamefang Pitch, Volley, Tip of the Spear, Intimidation, Binding Shot, Freezing Trap, Tar Trap, Disengage, Harpoon, Aspect of the Cheetah, Aspect of the Eagle, Misdirection, Feign Death, Tranquilizing Shot.
- Uncertainties: Aspect of the Turtle cooldown (3min vs 2.5min) and DR (may be 50% talented); Survival of the Fittest cooldown/charges talent-driven; Bloodlust depends on pet not spec.

### Mage

**Arcane (dps)** — enriched, 13 SimC ID rows.
- Still unconfirmed: Arcane Pulse, Supernova, Ring of Frost.
- Uncertainties: Touch of the Magi cooldown unconfirmed; Ice Block cooldown unconfirmed; Greater Invisibility DR unquantified; consumables cross-source disagreement.

**Fire (dps)** — enriched, 31 SimC ID rows (largest table).
- Still unconfirmed: Hyperthermia, Sun King's Blessing, Pyroclasm, Heat Shimmer, Firestarter, Living Bomb.
- Uncertainties: Ice Block cooldown unconfirmed; Greater Invisibility DR % unconfirmed; Time Warp Haste % unconfirmed; Mass Barrier ally scope unclear; Combustion duration extensions + Fire Blast/Phoenix Flames charges unconfirmed.

**Frost (dps)** — enriched, 9 SimC ID rows.
- Still unconfirmed: Blizzard, Cone of Cold, Blink, Shimmer, Ice Floes, Frost Nova, Polymorph, Ring of Frost, Alter Time (ID conflict 108978/342245 — see interrupt-defensive-ids.json `_meta`), Mirror Image (in spell-ids-reference.json — verify against guide), Slow Fall.
- Uncertainties: Ice Barrier cooldown conflict (Midnight change unresolved); Time Warp Haste % unconfirmed; Alter Time/Temporal Realignment auto-heal mechanics unconfirmed.

### Monk

**Brewmaster (tank)** — enriched, 15 SimC ID rows.
- Still unconfirmed: Tiger's Lust, Transcendence, Roll, Touch of Karma (in spell-ids-reference.json — verify against guide), Rushing Jade Wind.
- Uncertainties: Fortifying Brew cooldown (7min vs 6min talent); Celestial Brew/Purifying Brew charges talent-dependent; Mystic Touch effect inferred; Detox spec restriction inferred; hero talents not researched; Exploding Keg ID discrepancy (Wowhead 214326 / SimC 325153, 388867 — flagged).

**Mistweaver (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Celestial Conduit (in spell-ids-reference.json — verify against guide), Thunder Focus Tea, Ancient Teachings, Spiritfont, Misty Coalescence, Way of the Serpent, Amplified Rush.
- Uncertainties: Revival/Detox magic dispel unverified; Mystic Touch % unverified; Fortifying Brew cooldown ambiguous; Revival cooldown from prose; Dance of the Wind dodge-vs-immunity confusion.

**Windwalker (dps)** — enriched, 15 SimC ID rows.
- Still unconfirmed: Strike of the Windlord, Slicing Winds, Flying Serpent Kick, Chi Torpedo, Crackling Jade Lightning, Disable.
- Uncertainties: Healing Elixir effect not verified for Midnight; Fortifying Brew 6 min baseline (builds reduce); Detox scope for Windwalker unverified.

### Paladin

**Holy (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Holy Shock, Hammer of Justice, Blessing of Protection, Blessing of Spellwarding, Divine Steed, Blessing of Freedom, Devotion Aura (in spell-ids-reference.json — verify against guide), Beacon of Light.
- Uncertainties: Holy Shock cooldown unconfirmed; Word of Glory/Light of Dawn tooltips unverified; Blessing of Protection/Spellwarding true cooldowns omitted; Devotion Aura % approximate.

**Protection (tank)** — enriched, 12 SimC ID rows.
- Still unconfirmed: Hand of Reckoning, Cleanse Toxins, Blessed Hammer, Divine Steed, Hammer of Justice, Repentance, Shining Light, Vanguard.
- Uncertainties: Blessing of Protection/Spellwarding cooldown unconfirmed; Guardian of Ancient Kings charges talent-dependent; Avenging Wrath ID discrepancy (Wowhead 31884 / SimC 454351 — flagged).

**Retribution (dps)** — enriched, 21 SimC ID rows.
- Still unconfirmed: Templar's Verdict, Hammer of Justice, Final Reckoning, Crusade, Eye of Tyr, Crusader Strike.
- Uncertainties: Wake of Ashes / Shield of Vengeance / Blessing of Protection / Blessing of Freedom cooldowns unconfirmed; Hammer of Light secondary cast IDs unconfirmed.

### Priest

**Discipline (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Evangelism, Ultimate Penitence, Dispel Magic, Fear Ward, Shadow Word: Pain (in spell-ids-reference.json — verify against guide), Flash Heal, Plea.
- Uncertainties: Pain Suppression cooldown unconfirmed; Power Word: Radiance charges/cooldown unconfirmed; Leap of Faith cooldown unconfirmed.

**Holy (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Apotheosis, Power Infusion (in spell-ids-reference.json — verify against guide), Fade, Power Word: Fortitude, Smite, Holy Fire, Holy Nova, Shadow Word: Pain (in spell-ids-reference.json — verify against guide), Shackle Undead.
- Uncertainties: Apotheosis ID from web-search not a fetched page; Power Infusion ally-vs-self caveat unconfirmed; Fade DR talent-driven status unclear.

**Shadow (dps)** — enriched, 24 SimC ID rows.
- Still unconfirmed: Psychic Horror, Shackle Undead/Horror, Mind Control, Dominate Mind, Dispel Magic, Purify Disease, Power Word: Shield.
- Uncertainties: Void Eruption/Voidform ID ambiguous; Silence cooldown (30s) unconfirmed; Dispersion cooldown unconfirmed; Fade DR + friendly Magic dispel talent-dependent.

### Rogue

**Assassination (dps)** — enriched, 13 SimC ID rows (was the worst-covered guide at 1 Wowhead ID — core rotation now resolved).
- Still unconfirmed: Feint, Cloak of Shadows, Evasion, Crimson Vial, Crimson Tempest, Fan of Knives, Atrophic Poison.
- Uncertainties: Kick lockout duration unconfirmed; defensive cooldowns (Cloak/Evasion/Crimson Vial/Cheat Death) unverified; Midnight AoE rework not fully confirmed; Wowhead spell pages 403'd heavily.

**Outlaw (dps)** — enriched, 15 SimC ID rows.
- Still unconfirmed (mostly Roll the Bones buff IDs — buffs are barely present in the SimC reference): Broadside, Buried Treasure, Grand Melee, Ruthless Precision, Skull and Crossbones, True Bearing, Gravedigger (apex).
- Uncertainties: Thistle Tea mitigation aspect unconfirmed; Feint/Grappling Hook cooldowns not cleanly confirmed; Atrophic Poison magnitude/duration unconfirmed.

**Subtlety (dps)** — enriched, 9 SimC ID rows.
- Still unconfirmed: Slice and Dice (in spell-ids-reference.json — verify against guide), Rupture (in spell-ids-reference.json — verify against guide), Cheap Shot, Kidney Shot, Thistle Tea (in spell-ids-reference.json — verify against guide), Ancient Arts (apex/clone talents).
- Uncertainties: Atrophic Poison % magnitude + mechanic coverage unconfirmed.

### Shaman

**Elemental (dps)** — enriched, 12 SimC ID rows.
- Still unconfirmed: Nature's Guardian (in spell-ids-reference.json — verify against guide), Healing Surge, Earth Elemental, Spirit Walk, Gust of Wind, Ghost Wolf, Wind Rush Totem, Earthbind Totem, Purge, Poison Cleansing Totem, Ancestral Swiftness.
- Uncertainties: Wind Shear school-lockout duration unconfirmed; Capacitor Totem stun text not rendered; Stone Bulwark Totem not confirmed for 12.0.5; passive IDs (Lava Surge/Voltaic Blaze/Lightning Rod) missing.

**Enhancement (dps)** — enriched, 26 SimC ID rows.
- Still unconfirmed: Ice Strike, Frost Shock, Stone Bulwark Totem, Earth Elemental, Earth Shield, Earthgrab/Earthbind Totem, Purge, Poison Cleansing Totem, Wind Rush Totem, Spiritwalker's Grace, Gust of Wind, Ghost Wolf.
- Uncertainties: Thunderstorm availability build-dependent; Tremor Totem dispel types not confirmed; rotation from secondary sources only.

**Restoration (healer)** — ❌ no SimC data. Full original gap list applies.
- Unconfirmed IDs: Unleash Life, Healing Stream Totem, Earth Shield, Healing Surge, Chain Heal, Healing Wave, Nature's Swiftness (in spell-ids-reference.json — verify against guide), Ancestral Swiftness, Primordial Wave, Surging Totem (in spell-ids-reference.json — verify against guide), Stormstream Totem, Downpour, Water Shield, Hex, Capacitor Totem, Gust of Wind, Wind Rush Totem, Poison Cleansing Totem.
- Uncertainties: Ascendance variant (generic vs Resto-specific) unverified; Wind Shear cooldown conflict (12s vs 30s); Astral Shift values contested; Spirit Link Totem cooldown shown n/a.

### Warlock

**Affliction (dps)** — enriched, 20 SimC ID rows.
- Still unconfirmed: Soul Leech, Soul Link, Sudden Onset, Drain Life, Healthstone, Curse of Tongues, Banish.
- Uncertainties: Devour Magic friendly-dispel scope unconfirmed; raid buff/debuff package not confirmed; Phantom Singularity/Vile Taint talent IDs not confirmed.

**Demonology (dps)** — enriched, 27 SimC ID rows.
- Still unconfirmed: Power Siphon, Create Healthstone, Singe Magic, Banish, Mortal Coil, Howl of Terror, Shadowfury, Summon Doomguard, Grimoire: Fel Ravager.
- Uncertainties: Unending Resolve talent value from text only; Dark Pact absorb amount + health sacrifice not concrete.

**Destruction (dps)** — enriched, 18 SimC ID rows.
- Still unconfirmed: Inferno, Cataclysm, Channel Demonfire, Backdraft, Soul Leech, Soul Link, Banish, Burning Rush, Devour Magic, Curse of Weakness, Curse of Tongues, Create Healthstone.
- Uncertainties: Unending Resolve talented value unconfirmed; Mortal Coil healing component unconfirmed; Diabolist hero tree mechanics/IDs unconfirmed.

### Warrior

**Arms (dps)** — enriched, 15 SimC ID rows.
- Still unconfirmed: Cleave, Sweeping Strikes, Skullsplitter, Thunderous Roar, Demolish, Piercing Howl, Shockwave, Intimidating Shout, Berserker Rage, Bitter Immunity, Second Wind, Sudden Death.
- Uncertainties: Mortal Wounds effect unconfirmed; Bladestorm/Spell Reflection/Charge/Heroic Leap/Intervene real cooldowns unconfirmed; Intervene damage-transfer unconfirmed.

**Fury (dps)** — enriched, 17 SimC ID rows (Bloodthirst now SimC-confirmed 23881).
- Still unconfirmed: Ravager (in spell-ids-reference.json — verify against guide), Onslaught, Thunderous Roar, Champion's Spear, Enrage, Intimidating Shout, Shattering Throw, Hamstring, Piercing Howl, Intervene, Victory Rush, Impending Victory, Die by the Sword (ID conflict 236385/118038 — see interrupt-defensive-ids.json `_meta`).
- Uncertainties: Spell Reflection cooldown (25s) unverified; Rallying Cry max-HP % unreadable; Warpaint/Defensive Stance interactions unverified.

**Protection (tank)** — enriched, 11 SimC ID rows.
- Still unconfirmed: Devastate, Taunt, Charge (in spell-ids-reference.json — verify against guide), Heroic Leap, Intervene, Intimidating Shout, Shockwave, Storm Bolt (in spell-ids-reference.json — verify against guide), Berserker Rage, Piercing Howl, Impending Victory, Victory Rush.
- Uncertainties: Shield Wall/Spell Reflection cooldowns unconfirmed; Shield Block charges/duration from guides not spell page; Last Stand active-vs-passive talent-dependent.

---

_Maintenance: regenerate this file (or update it spec-by-spec) whenever guides are enriched or gap items are closed, and after any 12.x patch that changes abilities. Last full re-measure: 2026-06-12 (script-verified against every guide's Confirmed Spell IDs table + spell-ids-reference.json)._
