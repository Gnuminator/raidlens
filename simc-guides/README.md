# SimulationCraft Midnight 12.0.5 Spec Data

Extracted from `Trivial.txt` - complete SimulationCraft simulation output for WoW Midnight patch 12.0.5.

## Contents

**49 specs** covering all 13 classes with hero tree variations:
- Death Knight (5 specs: Blood x2, Frost x2, Unholy x1)
- Demon Hunter (4 specs: Devourer x2, Havoc x1, Vengeance x2)
- Druid (3 specs: Balance, Feral, Guardian)
- Evoker (2 specs: Devastation x2)
- Hunter (3 specs: Beast Mastery, Marksmanship, Survival)
- Mage (5 specs: Arcane x2, Fire x2, Frost x2)
- Monk (3 specs: Brewmaster, Windwalker x2)
- Paladin (4 specs: Protection x2, Retribution x2)
- Priest (2 specs: Shadow x2)
- Rogue (4 specs: Assassination, Outlaw x2, Subtlety)
- Shaman (3 specs: Elemental, Enhancement x2)
- Warlock (5 specs: Affliction x2, Demonology, Destruction x2)
- Warrior (3 specs: Arms, Fury, Protection)

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

- **Abilities**: 85-100+ per spec (includes buffs, items, talents in addition to primary rotation abilities)
- **Metrics**: From 7500 iterations, Patchwerk fight (5-6 min)
- **Talents**: Full build as encoded by Simc (decode via WoW talent system)
- **Spell IDs**: Partial - main ability IDs extracted where available

## Next Steps

1. Use ability lists to populate `js/boss-knowledge.js` ability filters
2. Build spell ID cross-reference file (manual or via WCL API)
3. Create spec-specific performance baselines for analysis
4. Build class/spec knowledge for Claude prompts

## Files

- `spell-ids-reference.json` - Extracted spell IDs by ability name (when created)
- Individual spec files - See list above
