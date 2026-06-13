# SimulationCraft Midnight 12.0.5 Spec Data

Extracted from `Trivial.txt` - complete SimulationCraft simulation output for WoW Midnight patch 12.0.5.

## Contents

**49 profiles** (spec + hero-tree variants) covering all 13 classes:
- Death Knight (6 profiles: Blood x2, Frost x2, Unholy x2)
- Demon Hunter (5 profiles: Devourer x2, Havoc x1, Vengeance x2)
- Druid (3 profiles: Balance, Feral, Guardian)
- Evoker (2 profiles: Devastation x2)
- Hunter (3 profiles: Beast Mastery, Marksmanship, Survival)
- Mage (6 profiles: Arcane x2, Fire x2, Frost x2)
- Monk (3 profiles: Brewmaster, Windwalker x2)
- Paladin (4 profiles: Protection x2, Retribution x2)
- Priest (2 profiles: Shadow x2)
- Rogue (4 profiles: Assassination, Outlaw x2, Subtlety)
- Shaman (3 profiles: Elemental, Enhancement x2)
- Warlock (5 profiles: Affliction x2, Demonology, Destruction x2)
- Warrior (3 profiles: Arms, Fury, Protection)

(No healer or Augmentation profiles exist in the sim — those 8 specs cannot be enriched from this data.)

## File Organization

Each spec has two files:

### Markdown (`.md`)
Human-readable format with:
- Class, Spec, Hero Tree
- **Metrics**: DPS, DTPS, HPS from simulation
- **Abilities**: Table of all abilities with damage and percentage of total damage
- **Talents**: Talent build string (encoded in Simc format)

### JSON (`.json`)
Machine-readable format with structured data:
```json
{
  "class": "Death_Knight",
  "spec": "Blood",
  "hero_tree": "Deathbringer",
  "metrics": {
    "dps": "58389",
    "dtps": "87788",
    "hps": "76607"
  },
  "abilities": {
    "Blood Boil": { "damage": "4,417", "percent": "7.6%" },
    ...
  },
  "talents": "CoPAAAAAA..."
}
```

## Usage

### For Building Guides
Reference the markdown files for each spec to understand ability distribution and performance metrics.

### For Programmatic Access
Use the JSON files to:
- Extract ability lists per spec
- Filter by damage threshold
- Build performance benchmarks
- Cross-reference with WCL data

### For Manual Spell ID Binding
The abilities are extracted from Simc output but without complete spell IDs. Spell IDs can be:
1. Added manually from WoW game data
2. Cross-referenced from WarcraftLogs API when analyzing reports
3. Built into spec-knowledge.js for boss-specific filtering

## Data Quality

- **Abilities**: 85-100+ per spec (includes buffs, items, talents in addition to primary rotation abilities). The abilities tables are NOISY — a row is a real damage share only if its `percent` contains a "%" (see DECISIONS.md).
- **Metrics**: From 7500 iterations, Patchwerk fight (5-6 min)
- **Talents**: Full build as encoded by Simc (decode via WoW talent system)
- **Spell IDs**: NOT in the per-spec `.md`/`.json` files (their spelldata/buffs fields are empty). Damage/rotational IDs live in `spell-ids-reference.json` (632 ability names); interrupts + personal defensives live in `interrupt-defensive-ids.json`.

## Next Steps

1. Use ability lists to populate `js/boss-knowledge.js` ability filters
2. ~~Build spell ID cross-reference file~~ ✅ DONE — `spell-ids-reference.json` (632 names, from the SimC HTML report via `build-spell-ids-reference.js`)
3. Create spec-specific performance baselines for analysis
4. ~~Build class/spec knowledge for Claude prompts~~ ✅ DONE — 39 spec guides under `guides/classes/`, 31 SimC-enriched from this data, fetched at analysis time

## Files

- `spell-ids-reference.json` - Authoritative damage/rotational spell IDs by ability name (632 names, multi-id variants flagged), parsed from the SimC HTML report. Coverage limit: only spells the Patchwerk sim used — defensives/interrupts/utility are absent.
- `build-spell-ids-reference.js` - Node script that regenerates `spell-ids-reference.json` from the 36 MB SimC HTML report (`_simc_raid.html`, fetched via curl to the repo root; the HTML itself is gitignored and never committed).
- `interrupt-defensive-ids.json` - Live-researched interrupt + personal-defensive spell IDs per class/spec — fills the gap the SimC report can't. Documentation only; the functional `DEFENSIVE_SPELL_IDS` map in `js/boss-knowledge.js` is separate.
- `apl/` - 49 extracted APL files (`<profile>.apl.txt`), one per profile, split out of the raw `Trivial.txt` SimC report; embedded verbatim into the spec guides' SimulationCraft sections.
- Individual spec files - See list above
