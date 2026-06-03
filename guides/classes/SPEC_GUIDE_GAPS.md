# RaidLens Spec Guide — Gap Tracker

_Generated 2026-06-02. Lists what is missing or unconfirmed in each spec guide, and exactly how to resolve it later in a single prompt._

The 37 spec guides beyond **Havoc** and **Beast Mastery** were written by a research swarm doing **live Wowhead research under strict no-fabrication rules**: a SpellID/value was included only if confirmed against a page actually fetched; everything else was omitted and flagged. That means the guides are accurate but incomplete. This file is the punch list for finishing them.

---

## The universal gap (applies to all 37 swarm-written guides)

Havoc and Beast Mastery are richer because **you supplied their SimulationCraft profiles**. The other 37 had no profile, so every one of them is missing the same things:

1. **No SimC APL** — no verbatim Action Priority List, so rotations are written as *conceptual logical priority*, not benchmarked sequences.
2. **No talent import string** — no copy-paste build.
3. **Consumables / enchants / gems unsourced** — named conceptually at best, **no item IDs** (Wowhead's consumables pages weren't reliably fetchable).
4. **Some SpellIDs and cooldowns unconfirmed** — Wowhead's class-guide hub pages are JavaScript-rendered and several individual spell pages returned HTTP 403 (rate limiting). Where an ID or cooldown couldn't be confirmed, the ability is listed by name only and flagged. **No IDs were guessed.**

The per-spec section below lists each guide's **confirmed SpellID count**, the **abilities still missing a confirmed ID**, and any **spec-specific uncertainties** (cooldown conflicts, talent-dependent values, etc.) on top of the universal four above.

---

## ✅ SimC enrichment progress (2026-06-02)

Christian supplied parsed SimulationCraft data (`simc-guides/` + raw `Trivial.txt`). **10 DPS guides enriched** so far, each gaining: a SimC **talent import string** (per hero tree), a **damage-distribution** table (filtered to real damage-% rows), and the **full SimC APL** embedded verbatim (extracted from `Trivial.txt` into `simc-guides/apl/`). Per-spec APL files for all 49 sims are in `simc-guides/apl/`.

Enriched: **Assassination Rogue, Frost DK, Balance Druid, Marksmanship Hunter, Fire Mage, Retribution Paladin, Shadow Priest, Destruction Warlock, Fury Warrior, Elemental Shaman.** (Havoc & Beast Mastery were already SimC-complete.)

Still open even on these 10: **spell IDs** and **consumable/enchant item IDs**. The remaining ~27 guides still need the talent/APL/distribution pass.

> **Spell-ID extraction from `Trivial.txt` — INVESTIGATED, NOT VIABLE (2026-06-02).** The file has only ONE clean `Spelldata` block (id/name). Its other spell IDs live in tab-separated "Affected By" tables (~1,401 rows / 409 names) that are almost entirely talents/passives/auras, NOT abilities. The rotational/defensive/interrupt abilities we need are absent (Obliterate, Garrote, Mind Freeze, Pyroblast, Chaos Bolt, Bloodthirst… all missing) and the few present are ambiguous (Metamorphosis→3 IDs, Immolation Aura→14). Deriving IDs from it would introduce wrong/ambiguous values — rejected. **Recommended path instead:** harvest name→gameID from **live WCL report data at analysis time** — the tool already captures each ability's `guid` (`abilityGuidByName` in analyze.js, added in Step 10), which is authoritative for the exact log being analyzed — and/or a focused live-Wowhead pass per spec.

---

## ▶ How to resolve — paste this prompt later (with SimC profiles)

When you have session usage to spare, gather SimC profiles (one or more) and paste this:

```
RaidLens spec-guide enrichment. Read DECISIONS.md and guides/classes/SPEC_GUIDE_GAPS.md first.

I'm giving you one or more SimulationCraft profiles below. For EACH profile:
1. Identify the spec and open its guide at guides/classes/{role}/{class-slug}/{spec-slug}.md.
2. Add a "SimulationCraft Reference" section with the APL and talent import string embedded
   verbatim — exactly the format the Havoc and Beast Mastery guides already use.
3. Using the profile + live Wowhead, close that spec's gaps from SPEC_GUIDE_GAPS.md:
   confirm the flagged SpellIDs, resolve the cooldown conflicts, and add consumables/
   enchants/gems WITH item IDs.
4. STRICT RULE (unchanged): include a SpellID/item ID only if confirmed from a source you
   actually fetched. Anything still unverified stays flagged in Notes and Known Gaps.
   Never fabricate or recall from memory.
5. Update each guide's confirmed-ID list and remove the resolved items from its Known Gaps,
   then update this gap tracker to match.

If I paste several profiles at once, use the agent swarm — one agent per profile, in parallel.

SimC profiles:
<paste one or more profiles here, each clearly labelled with its spec>
```

**Secondary path (no SimC profile, just want IDs/cooldowns confirmed):**

```
Re-research the flagged SpellIDs and cooldown conflicts for {Spec} {Class} from live Wowhead
(individual spell pages, not the JS-rendered guide hubs) and confirm or correct them in
guides/classes/{role}/{class-slug}/{spec-slug}.md. Strict rule: confirmed-from-fetched-page
only; leave anything you can't load flagged. Then update SPEC_GUIDE_GAPS.md.
```

---

## Status at a glance

| Spec | Class | Role | Confirmed IDs | SimC profile? |
|---|---|---|---|---|
| Havoc | Demon Hunter | dps | 9 | ✅ yes (enriched) |
| Beast Mastery | Hunter | dps | 9 | ✅ yes (enriched) |
| Blood | Death Knight | tank | 17 | ❌ needs profile |
| Frost | Death Knight | dps | 12 | ❌ needs profile |
| Unholy | Death Knight | dps | 11 | ❌ needs profile |
| Vengeance | Demon Hunter | tank | 21 | ❌ needs profile |
| Balance | Druid | dps | 21 | ❌ needs profile |
| Feral | Druid | dps | 20 | ❌ needs profile |
| Guardian | Druid | tank | 9 | ❌ needs profile |
| Restoration | Druid | healer | 10 | ❌ needs profile |
| Devastation | Evoker | dps | 13 | ❌ needs profile |
| Augmentation | Evoker | dps | 15 | ❌ needs profile |
| Preservation | Evoker | healer | 9 | ❌ needs profile |
| Marksmanship | Hunter | dps | 13 | ❌ needs profile |
| Survival | Hunter | dps | 5 | ❌ needs profile |
| Arcane | Mage | dps | 24 | ❌ needs profile |
| Fire | Mage | dps | 28 | ❌ needs profile |
| Frost | Mage | dps | 9 | ❌ needs profile |
| Brewmaster | Monk | tank | 19 | ❌ needs profile |
| Mistweaver | Monk | healer | 21 | ❌ needs profile |
| Windwalker | Monk | dps | 21 | ❌ needs profile |
| Holy | Paladin | healer | 13 | ❌ needs profile |
| Protection | Paladin | tank | 13 | ❌ needs profile |
| Retribution | Paladin | dps | 13 | ❌ needs profile |
| Discipline | Priest | healer | 11 | ❌ needs profile |
| Holy | Priest | healer | 8 | ❌ needs profile |
| Shadow | Priest | dps | 12 | ❌ needs profile |
| Assassination | Rogue | dps | 1 | ❌ needs profile (worst coverage) |
| Outlaw | Rogue | dps | 18 | ❌ needs profile |
| Subtlety | Rogue | dps | 12 | ❌ needs profile |
| Elemental | Shaman | dps | 16 | ❌ needs profile |
| Enhancement | Shaman | dps | 12 | ❌ needs profile |
| Restoration | Shaman | healer | 10 | ❌ needs profile |
| Affliction | Warlock | dps | 19 | ❌ needs profile |
| Demonology | Warlock | dps | 12 | ❌ needs profile |
| Destruction | Warlock | dps | 18 | ❌ needs profile |
| Arms | Warrior | dps | 14 | ❌ needs profile |
| Fury | Warrior | dps | 5 | ❌ needs profile |
| Protection | Warrior | tank | 8 | ❌ needs profile |

> **Lowest ID coverage (prioritise if enriching):** Assassination Rogue (1), Survival Hunter (5), Fury Warrior (5), Holy Priest (8), Protection Warrior (8), Guardian Druid (9), Preservation Evoker (9), Frost Mage (9).

---

## Per-spec detail

Each entry below lists the abilities still missing a **confirmed SpellID** (name-only in the guide) and any **spec-specific uncertainties** beyond the universal four (no APL, no talent string, unsourced consumables, JS/403 fetch limits — which apply to all).

### Death Knight

**Blood (tank)** — 17 confirmed IDs.
- Unconfirmed IDs: Heart Strike, Blood Boil, Death and Decay, Death's Caress, Reaper's Mark, Raise Dead, Consumption, Purgatory, Strangulate.
- Uncertainties: Dancing Rune Weapon baseline-vs-talent cooldown unclear; Rune Tap charge structure talent-dependent; no raid buff confirmed; no targeted ally external confirmed.

**Frost (dps)** — 12 confirmed IDs.
- Unconfirmed IDs: Obliterate, Frost Strike, Howling Blast, Frostscythe, Glacial Advance, Remorseless Winter, Empower Rune Weapon, Frostwyrm's Fury, Breath of Sindragosa, Killing Machine, Rime, Razorice, Asphyxiate, Chains of Ice.
- Uncertainties: Anti-Magic Zone cooldown conflict (4 min vs 6 min); Lichborne cooldown unconfirmed; Death Strike healing formula + RP cost talent-modified; Death Grip ID was a search match, page not opened (re-verify).

**Unholy (dps)** — 11 confirmed IDs.
- Unconfirmed IDs: Festering Strike, Scourge Strike, Clawing Shadows, Death Coil, Epidemic, Outbreak, Raise Ally, Chains of Ice, Death's Advance.
- Uncertainties: some cooldowns may reflect legacy tooltips; Summon Gargoyle baseline-vs-talent unconfirmed; raid buff/debuff not confirmed.

### Demon Hunter

**Havoc (dps)** — ✅ enriched (has SimC profile). Only open items: flask source conflict (shattered sun vs magisters), food source conflict (blooming feast vs harandar), routine patch re-verification.

**Vengeance (tank)** — 21 confirmed IDs.
- Unconfirmed IDs: Vengeful Retreat, Soul Barrier, Last Resort, Reaver's Glaive, Sigil of Spite, Soul Carver.
- Uncertainties: Metamorphosis internal-vs-player-facing cooldown unverified; Fiery Brand DR % and Demon Spikes parry % approximate (guide prose); Hero Talent raid buff/debuff not confirmed; Disrupt vs Sigil of Silence interrupt distinction needs re-verification.

### Druid

**Balance (dps)** — 21 confirmed IDs.
- Unconfirmed IDs: Fury of Elune, Force of Nature.
- Uncertainties: Celestial Alignment/Incarnation base cooldown unverified; Survival Instincts charge count unconfirmed; friendly dispel access unconfirmed; roots/knockback CC IDs omitted; Mark of the Wild versatility value needs hotfix check.

**Feral (dps)** — 20 confirmed IDs.
- Unconfirmed IDs: Heart of the Wild, Bear Form, Entangling Roots, Hibernate, Prowl, Wild Charge.
- Uncertainties: Survival Instincts cooldown (~3 min est.); Incarnation cooldown conflict (3 vs 2 min); Frenzied Regeneration charges/recharge unclear; proc IDs omitted (Apex Predator's Craving, Sudden Ambush, Clearcasting); talent mechanics not deeply sourced.

**Guardian (tank)** — 9 confirmed IDs.
- Unconfirmed IDs: Maul, Raze, Ravage, Swipe, Moonfire, Growl, Bristling Fur, Lunar Beam, Wild Charge, Travel Form, Dash, Mighty Bash, Typhoon, Heart of the Wild.
- Uncertainties: Survival Instincts charges/duration/DR not numerically verified; Ironbark availability talent-dependent.

**Restoration (healer)** — 10 confirmed IDs.
- Unconfirmed IDs: Rejuvenation, Regrowth, Wild Growth, Lifebloom, Efflorescence, Mastery: Harmony, Abundance, Nature's Swiftness, Convoke the Spirits, Incarnation: Tree of Life, Survival Instincts, Bear Form, Cyclone, Soothe, Ursol's Vortex, Hibernate, Mark of the Wild.
- Uncertainties: Swiftmend/Flourish cooldowns show n/a on Wowhead; Convoke cooldown variable (45s–1min); Everbloom/Wildstalker hero tree specifics incomplete.

### Evoker

**Devastation (dps)** — 13 confirmed IDs.
- Unconfirmed IDs: Azure Strike, Deep Breath, Firestorm, Landslide, Verdant Embrace, Soar.
- Uncertainties: Shattering Star ID transient 404; Cauterizing Flame removable types unverified; cooldowns talent-driven; rotation system-dependent (hero talent / tier set).

**Augmentation (dps)** — 15 confirmed IDs.
- Unconfirmed IDs: Eruption, Fire Breath, Upheaval, Living Flame, Azure Strike, Expunge, Tail Swipe, Wing Buffet, Blistering Scales, Blessing of the Bronze, Sands of Time, Essence Burst.
- Uncertainties: Zephyr/Verdant Embrace cooldowns unconfirmed; Time Spiral cooldown from text only; Obsidian Scales two-charge state talent-dependent; Ebon Might/Prescience stat % approximate.

**Preservation (healer)** — 9 confirmed IDs.
- Unconfirmed IDs: Echo, Reversion, Dream Breath, Spiritbloom, Emerald Blossom, Temporal Anomaly, Temporal Barrier, Rewind, Stasis, Living Flame, Verdant Embrace, Rescue, Time Spiral, Sleep Walk, Expunge.
- Uncertainties: Renewing Blaze/Zephyr/Time Dilation cooldowns unconfirmed; battle resurrection not confirmed.

### Hunter

**Beast Mastery (dps)** — ✅ enriched (has SimC profile). Only open items: Duck pet family type unverified; Guardian's Hide ID.

**Marksmanship (dps)** — 13 confirmed IDs.
- Unconfirmed IDs: Rapid Fire, Exhilaration, Survival of the Fittest, Aspect of the Turtle, Disengage, Kill Shot, Tranquilizing Shot.
- Uncertainties: Rapid Fire cooldown conflict (16s vs 20s); Exhilaration cooldown conflict (2m vs 1m); Disengage cooldown shown as 1s (likely wrong); Hunter's Mark magnitude (~3%) approximate; Tranquilizing Shot dispel types not cleanly exposed.

**Survival (dps)** — 5 confirmed IDs (low coverage).
- Unconfirmed IDs: Kill Command, Wildfire Bomb, Raptor Strike, Raptor/Swipe, Takedown, Boomstick, Flamefang Pitch, Volley, Tip of the Spear, Intimidation, Binding Shot, Freezing Trap, Tar Trap, Disengage, Harpoon, Aspect of the Cheetah, Aspect of the Eagle, Misdirection, Feign Death, Tranquilizing Shot.
- Uncertainties: Aspect of the Turtle cooldown (3min vs 2.5min) and DR (may be 50% talented); Survival of the Fittest cooldown/charges talent-driven; Bloodlust depends on pet not spec.

### Mage

**Arcane (dps)** — 24 confirmed IDs.
- Unconfirmed IDs: Arcane Pulse, Supernova, Ring of Frost.
- Uncertainties: Touch of the Magi cooldown unconfirmed; Ice Block cooldown unconfirmed; Greater Invisibility DR unquantified; consumables cross-source disagreement.

**Fire (dps)** — 28 confirmed IDs (best coverage).
- Unconfirmed IDs: Frostfire Bolt, Hyperthermia, Sun King's Blessing, Pyroclasm, Heat Shimmer, Firestarter, Living Bomb.
- Uncertainties: Ice Block cooldown unconfirmed; Greater Invisibility DR % unconfirmed; Time Warp Haste % unconfirmed; Mass Barrier ally scope unclear; Combustion duration extensions + Fire Blast/Phoenix Flames charges unconfirmed.

**Frost (dps)** — 9 confirmed IDs.
- Unconfirmed IDs: Frostbolt, Flurry, Ice Lance, Frozen Orb, Glacial Spike, Ray of Frost, Comet Storm, Blizzard, Cone of Cold, Frostfire Bolt, Blink, Shimmer, Ice Floes, Frost Nova, Polymorph, Ring of Frost, Alter Time, Mirror Image, Slow Fall.
- Uncertainties: Ice Barrier cooldown conflict (Midnight change unresolved); Time Warp Haste % unconfirmed; Alter Time/Temporal Realignment auto-heal mechanics unconfirmed.

### Monk

**Brewmaster (tank)** — 19 confirmed IDs.
- Unconfirmed IDs: Tiger Palm, Spinning Crane Kick, Touch of Death, Tiger's Lust, Transcendence, Roll, Touch of Karma, Rushing Jade Wind, Chi Burst, Expel Harm, Celestial Infusion.
- Uncertainties: Fortifying Brew cooldown (7min vs 6min talent); Celestial Brew/Purifying Brew charges talent-dependent; Mystic Touch effect inferred; Detox spec restriction inferred; hero talents not researched.

**Mistweaver (healer)** — 21 confirmed IDs.
- Unconfirmed IDs: Celestial Conduit, Thunder Focus Tea, Ancient Teachings, Spiritfont, Misty Coalescence, Way of the Serpent, Amplified Rush.
- Uncertainties: Revival/Detox magic dispel unverified; Mystic Touch % unverified; Fortifying Brew cooldown ambiguous; Revival cooldown from prose; Dance of the Wind dodge-vs-immunity confusion.

**Windwalker (dps)** — 21 confirmed IDs.
- Unconfirmed IDs: Zenith, Strike of the Windlord, Whirling Dragon Punch, Celestial Conduit, Slicing Winds, Rushing Wind Kick, Flying Serpent Kick, Chi Torpedo, Crackling Jade Lightning, Disable.
- Uncertainties: Healing Elixir effect not verified for Midnight; Fortifying Brew 6 min baseline (builds reduce); Detox scope for Windwalker unverified.

### Paladin

**Holy (healer)** — 13 confirmed IDs.
- Unconfirmed IDs: Holy Shock, Hammer of Justice, Blessing of Protection, Blessing of Spellwarding, Divine Steed, Blessing of Freedom, Devotion Aura, Beacon of Light.
- Uncertainties: Holy Shock cooldown unconfirmed; Word of Glory/Light of Dawn tooltips unverified; Blessing of Protection/Spellwarding true cooldowns omitted; Devotion Aura % approximate.

**Protection (tank)** — 13 confirmed IDs.
- Unconfirmed IDs: Hand of Reckoning, Cleanse Toxins, Word of Glory, Judgment, Consecration, Blessed Hammer, Hammer of the Righteous, Hammer of Light, Hammer of Wrath, Divine Steed, Hammer of Justice, Repentance, Shining Light, Vanguard.
- Uncertainties: Blessing of Protection/Spellwarding cooldown unconfirmed; Guardian of Ancient Kings charges talent-dependent.

**Retribution (dps)** — 13 confirmed IDs.
- Unconfirmed IDs: Final Verdict, Templar's Verdict, Divine Storm, Hammer of Justice, Execution Sentence, Final Reckoning, Crusade, Eye of Tyr, Crusader Strike, Templar Strike, Templar Slash, Crusading Strikes.
- Uncertainties: Wake of Ashes / Shield of Vengeance / Blessing of Protection / Blessing of Freedom cooldowns unconfirmed; Hammer of Light secondary cast IDs unconfirmed.

### Priest

**Discipline (healer)** — 11 confirmed IDs.
- Unconfirmed IDs: Evangelism, Ultimate Penitence, Dispel Magic, Fear Ward, Shadow Word: Pain, Flash Heal, Plea.
- Uncertainties: Pain Suppression cooldown unconfirmed; Power Word: Radiance charges/cooldown unconfirmed; Leap of Faith cooldown unconfirmed.

**Holy (healer)** — 8 confirmed IDs.
- Unconfirmed IDs: Apotheosis, Power Infusion, Fade, Power Word: Fortitude, Smite, Holy Fire, Holy Nova, Shadow Word: Pain, Shackle Undead.
- Uncertainties: Apotheosis ID from web-search not a fetched page; Power Infusion ally-vs-self caveat unconfirmed; Fade DR talent-driven status unclear.

**Shadow (dps)** — 12 confirmed IDs.
- Unconfirmed IDs: Mind Flay, Mind Flay: Insanity, Halo, Void Torrent, Entropic Rift, Void Blast, Tentacle Slam, Psychic Horror, Shackle Undead/Horror, Mind Control, Dominate Mind, Dispel Magic, Purify Disease, Power Word: Shield.
- Uncertainties: Void Eruption/Voidform ID ambiguous; Silence cooldown (30s) unconfirmed; Dispersion cooldown unconfirmed; Fade DR + friendly Magic dispel talent-dependent.

### Rogue

**Assassination (dps)** — ⚠️ only 1 confirmed ID (worst coverage — prioritise).
- Unconfirmed IDs: Deathmark, Kingsbane, Garrote, Rupture, Envenom, Mutilate, Feint, Cloak of Shadows, Evasion, Crimson Vial, Vanish, Crimson Tempest, Fan of Knives, Atrophic Poison.
- Uncertainties: Kick lockout duration unconfirmed; defensive cooldowns (Cloak/Evasion/Crimson Vial/Cheat Death) unverified; Midnight AoE rework not fully confirmed; Wowhead spell pages 403'd heavily.

**Outlaw (dps)** — 18 confirmed IDs.
- Unconfirmed IDs: Broadside, Buried Treasure, Grand Melee, Ruthless Precision, Skull and Crossbones, True Bearing, Gravedigger (apex).
- Uncertainties: Roll the Bones buff IDs unconfirmed; Thistle Tea mitigation aspect unconfirmed; Feint/Grappling Hook cooldowns not cleanly confirmed; Atrophic Poison magnitude/duration unconfirmed.

**Subtlety (dps)** — 12 confirmed IDs.
- Unconfirmed IDs: Shuriken Storm, Coup de Grace, Slice and Dice, Rupture, Cheap Shot, Kidney Shot, Thistle Tea, Ancient Arts (apex/clone talents).
- Uncertainties: Atrophic Poison % magnitude + mechanic coverage unconfirmed.

### Shaman

**Elemental (dps)** — 16 confirmed IDs.
- Unconfirmed IDs: Nature's Guardian, Healing Surge, Earth Elemental, Spirit Walk, Gust of Wind, Ghost Wolf, Wind Rush Totem, Earthbind Totem, Purge, Poison Cleansing Totem, Ancestral Swiftness.
- Uncertainties: Wind Shear school-lockout duration unconfirmed; Capacitor Totem stun text not rendered; Stone Bulwark Totem not confirmed for 12.0.5; passive IDs (Lava Surge/Voltaic Blaze/Lightning Rod) missing.

**Enhancement (dps)** — 12 confirmed IDs.
- Unconfirmed IDs: Lava Lash, Crash Lightning, Lightning Bolt, Chain Lightning, Elemental Blast, Primordial Storm, Voltaic Blaze, Ice Strike, Frost Shock, Flame Shock, Doom Winds, Ascendance, Sundering, Surging Totem, Stone Bulwark Totem, Earth Elemental, Earth Shield, Earthgrab/Earthbind Totem, Purge, Poison Cleansing Totem, Wind Rush Totem, Spiritwalker's Grace, Gust of Wind, Ghost Wolf, Windfury Weapon.
- Uncertainties: Thunderstorm availability build-dependent; Tremor Totem dispel types not confirmed; rotation from secondary sources only.

**Restoration (healer)** — 10 confirmed IDs.
- Unconfirmed IDs: Unleash Life, Healing Stream Totem, Earth Shield, Healing Surge, Chain Heal, Healing Wave, Nature's Swiftness, Ancestral Swiftness, Primordial Wave, Surging Totem, Stormstream Totem, Downpour, Water Shield, Hex, Capacitor Totem, Gust of Wind, Wind Rush Totem, Poison Cleansing Totem.
- Uncertainties: Ascendance variant (generic vs Resto-specific) unverified; Wind Shear cooldown conflict (12s vs 30s); Astral Shift values contested; Spirit Link Totem cooldown shown n/a.

### Warlock

**Affliction (dps)** — 19 confirmed IDs.
- Unconfirmed IDs: Shadow Bolt, Dark Harvest, Malevolence, Soul Leech, Soul Link, Sudden Onset, Drain Life, Healthstone, Curse of Tongues, Banish.
- Uncertainties: Devour Magic friendly-dispel scope unconfirmed; raid buff/debuff package not confirmed; Phantom Singularity/Vile Taint/Wither talent IDs not confirmed.

**Demonology (dps)** — 12 confirmed IDs.
- Unconfirmed IDs: Implosion, Power Siphon, Create Healthstone, Singe Magic, Banish, Mortal Coil, Howl of Terror, Shadowfury, Summon Doomguard, Grimoire: Imp Lord, Grimoire: Fel Ravager, Infernal Bolt.
- Uncertainties: Unending Resolve talent value from text only; Dark Pact absorb amount + health sacrifice not concrete.

**Destruction (dps)** — 18 confirmed IDs.
- Unconfirmed IDs: Wither, Malevolence, Inferno, Soul Fire, Cataclysm, Channel Demonfire, Backdraft, Soul Leech, Soul Link, Banish, Burning Rush, Devour Magic, Curse of Weakness, Curse of Tongues, Create Healthstone.
- Uncertainties: Unending Resolve talented value unconfirmed; Mortal Coil healing component unconfirmed; Diabolist hero tree mechanics/IDs unconfirmed.

### Warrior

**Arms (dps)** — 14 confirmed IDs.
- Unconfirmed IDs: Execute, Overpower, Slam, Cleave, Sweeping Strikes, Rend, Deep Wounds, Whirlwind, Skullsplitter, Thunderous Roar, Ravager, Demolish, Heroic Strike, Piercing Howl, Shockwave, Intimidating Shout, Berserker Rage, Bitter Immunity, Second Wind, Sudden Death.
- Uncertainties: Mortal Wounds effect unconfirmed; Bladestorm/Spell Reflection/Charge/Heroic Leap/Intervene real cooldowns unconfirmed; Intervene damage-transfer unconfirmed.

**Fury (dps)** — 5 confirmed IDs (low coverage).
- Unconfirmed IDs: Rampage, Raging Blow, Execute, Whirlwind, Thunder Clap, Avatar, Bladestorm, Odyn's Fury, Ravager, Onslaught, Thunderous Roar, Champion's Spear, Enrage, Intimidating Shout, Shattering Throw, Hamstring, Piercing Howl, Intervene, Victory Rush, Impending Victory, Die by the Sword.
- Uncertainties: Bloodthirst ID high-confidence but needs page re-verify; Spell Reflection cooldown (25s) unverified; Rallying Cry max-HP % unreadable; Warpaint/Defensive Stance interactions unverified.

**Protection (tank)** — 8 confirmed IDs.
- Unconfirmed IDs: Ignore Pain, Thunder Clap, Thunder Blast, Revenge, Execute, Devastate, Avatar, Ravager, Demoralizing Shout, Taunt, Charge, Heroic Leap, Intervene, Intimidating Shout, Shockwave, Storm Bolt, Berserker Rage, Piercing Howl, Impending Victory, Victory Rush.
- Uncertainties: Shield Wall/Spell Reflection cooldowns unconfirmed; Shield Block charges/duration from guides not spell page; Last Stand active-vs-passive talent-dependent.

---

_Maintenance: regenerate this file (or update it spec-by-spec) whenever guides are enriched, and after any 12.x patch that changes abilities._
