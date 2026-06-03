// Must be loaded before any function that references these constants.
// JavaScript does not hoist `const`.

const BOSS_KNOWLEDGE_META = {
  'Chimaerus, the Undreamt God': {
    avoidableSpellIds: {
      1245919: 'Alndust Essence',
      1245486: 'Corrupted Devastation'
    },
    interruptTargetSpellIds: {
      1249017: 'Fearsome Cry',
      1261997: 'Essence Bolt'
    },
    // Mythic-only (Step 10). Source-based attribution. The spell ID is auto-discovered from
    // the damage table's ability guid at analysis time (no hardcoded/unverified ID). If a
    // confirmed ID is ever known it can be pinned here via `dissonanceSpellIds: { id: 'Dissonance' }`.
    dissonanceAbilityNames: ['Dissonance']
  }
};

// Abilities known to be non-avoidable or expected for this boss (by encounter name).
// Used to suppress misleading "top avoidable" labels in the player card UI.
const BOSS_NON_AVOIDABLE = {
  'Chimaerus, the Undreamt God': new Set([
    'Alndust Upheaval',
    'Rift Emergence', 'Rift Sickness',
    'Rift Vulnerability', 'Consume', 'Ravenous Dive',
    'Cannibalized Essence', 'Blessing of Dawn',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack',
    'Caustic Phlegm', 'Rift Madness',
    'Discordant Roar'
  ])
};

// Maps WCL subType (spec name) to the guide path(s) in the repo.
// Only specs listed here will have guides fetched. Missing specs are silently skipped.
//
// WCL's masterData.actors only exposes the bare spec name as `subType` (e.g. "Frost"),
// not the class. Four spec names are shared across two classes. For those, the value is
// an ARRAY of candidate paths and loadSpecGuides() fetches BOTH (labelled by class), so
// the correct guide is always present even though we can't disambiguate from subType alone:
//   Frost       -> Death Knight (dps) + Mage (dps)
//   Holy        -> Paladin (healer) + Priest (healer)
//   Protection  -> Paladin (tank) + Warrior (tank)
//   Restoration -> Druid (healer) + Shaman (healer)
// All other spec names are unique and map to a single string path.
const SPEC_GUIDE_PATHS = {
  // Death Knight
  'Blood':         'guides/classes/tank/death-knight/blood.md',
  'Unholy':        'guides/classes/dps/death-knight/unholy.md',
  // Demon Hunter
  'Havoc':         'guides/classes/dps/demon-hunter/havoc.md',
  'Vengeance':     'guides/classes/tank/demon-hunter/vengeance.md',
  // Druid
  'Balance':       'guides/classes/dps/druid/balance.md',
  'Feral':         'guides/classes/dps/druid/feral.md',
  'Guardian':      'guides/classes/tank/druid/guardian.md',
  // Evoker
  'Devastation':   'guides/classes/dps/evoker/devastation.md',
  'Augmentation':  'guides/classes/dps/evoker/augmentation.md',
  'Preservation':  'guides/classes/healer/evoker/preservation.md',
  // Hunter
  'Beast Mastery': 'guides/classes/dps/hunter/beast-mastery.md',
  'Marksmanship':  'guides/classes/dps/hunter/marksmanship.md',
  'Survival':      'guides/classes/dps/hunter/survival.md',
  // Mage
  'Arcane':        'guides/classes/dps/mage/arcane.md',
  'Fire':          'guides/classes/dps/mage/fire.md',
  // Monk
  'Brewmaster':    'guides/classes/tank/monk/brewmaster.md',
  'Mistweaver':    'guides/classes/healer/monk/mistweaver.md',
  'Windwalker':    'guides/classes/dps/monk/windwalker.md',
  // Paladin
  'Retribution':   'guides/classes/dps/paladin/retribution.md',
  // Priest
  'Discipline':    'guides/classes/healer/priest/discipline.md',
  'Shadow':        'guides/classes/dps/priest/shadow.md',
  // Rogue
  'Assassination': 'guides/classes/dps/rogue/assassination.md',
  'Outlaw':        'guides/classes/dps/rogue/outlaw.md',
  'Subtlety':      'guides/classes/dps/rogue/subtlety.md',
  // Shaman
  'Elemental':     'guides/classes/dps/shaman/elemental.md',
  'Enhancement':   'guides/classes/dps/shaman/enhancement.md',
  // Warlock
  'Affliction':    'guides/classes/dps/warlock/affliction.md',
  'Demonology':    'guides/classes/dps/warlock/demonology.md',
  'Destruction':   'guides/classes/dps/warlock/destruction.md',
  // Warrior
  'Arms':          'guides/classes/dps/warrior/arms.md',
  'Fury':          'guides/classes/dps/warrior/fury.md',
  // Shared spec names (class ambiguous from WCL subType) — fetch both candidates
  'Frost':         ['guides/classes/dps/death-knight/frost.md', 'guides/classes/dps/mage/frost.md'],
  'Holy':          ['guides/classes/healer/paladin/holy.md', 'guides/classes/healer/priest/holy.md'],
  'Protection':    ['guides/classes/tank/paladin/protection.md', 'guides/classes/tank/warrior/protection.md'],
  'Restoration':   ['guides/classes/healer/druid/restoration.md', 'guides/classes/healer/shaman/restoration.md'],
};

// Confirmed SELF-defensive cooldown spell IDs, keyed by WCL subType (spec name).
// Sourced from each spec guide's Defensives section — confirmed IDs only (Step 9).
// Shared spec names (Frost/Holy/Protection/Restoration) merge both classes' defensives;
// spell IDs are unique per ability so per-player attribution stays correct.
// Counts derived from this are a FLOOR, not exhaustive — specs with unconfirmed defensive
// IDs (see guides/classes/SPEC_GUIDE_GAPS.md) contribute fewer or no entries.
const DEFENSIVE_SPELL_IDS = {
  // Death Knight
  'Blood':         { 49998:'Death Strike', 55233:'Vampiric Blood', 48792:'Icebound Fortitude', 48707:'Anti-Magic Shell', 194679:'Rune Tap', 219809:'Tombstone', 49039:'Lichborne', 49028:'Dancing Rune Weapon' },
  'Unholy':        { 48707:'Anti-Magic Shell', 48792:'Icebound Fortitude', 49998:'Death Strike', 49039:'Lichborne' },
  // Demon Hunter
  'Havoc':         { 198589:'Blur', 427901:'Deflecting Dance' },
  'Vengeance':     { 203720:'Demon Spikes', 204021:'Fiery Brand', 187827:'Metamorphosis', 212084:'Fel Devastation', 228477:'Soul Cleave' },
  // Druid
  'Balance':       { 22812:'Barkskin', 61336:'Survival Instincts', 108238:'Renewal', 5487:'Bear Form', 22842:'Frenzied Regeneration' },
  'Feral':         { 61336:'Survival Instincts', 22812:'Barkskin', 108238:'Renewal', 22842:'Frenzied Regeneration', 8936:'Regrowth' },
  'Guardian':      { 192081:'Ironfur', 22842:'Frenzied Regeneration', 22812:'Barkskin', 61336:'Survival Instincts', 200851:'Rage of the Sleeper', 102558:'Incarnation: Guardian of Ursoc' },
  // Evoker
  'Devastation':   { 363916:'Obsidian Scales', 374348:'Renewing Blaze' },
  'Augmentation':  { 363916:'Obsidian Scales', 374227:'Zephyr', 361195:'Verdant Embrace' },
  'Preservation':  { 363916:'Obsidian Scales', 374348:'Renewing Blaze' },
  // Hunter
  'Beast Mastery': { 264735:'Survival of the Fittest', 186265:'Aspect of the Turtle', 109304:'Exhilaration' },
  'Marksmanship':  { 109304:'Exhilaration', 264735:'Survival of the Fittest', 186265:'Aspect of the Turtle' },
  'Survival':      { 186265:'Aspect of the Turtle', 264735:'Survival of the Fittest', 109304:'Exhilaration' },
  // Mage
  'Arcane':        { 45438:'Ice Block', 235450:'Prismatic Barrier', 110959:'Greater Invisibility', 342245:'Alter Time', 55342:'Mirror Image', 414658:'Ice Cold' },
  'Fire':          { 45438:'Ice Block', 110959:'Greater Invisibility', 342245:'Alter Time', 235313:'Blazing Barrier', 235450:'Prismatic Barrier', 55342:'Mirror Image' },
  // Monk
  'Brewmaster':    { 119582:'Purifying Brew', 322507:'Celestial Brew', 243435:'Fortifying Brew', 122278:'Dampen Harm', 122783:'Diffuse Magic', 132578:'Invoke Niuzao, the Black Ox', 214326:'Exploding Keg' },
  'Mistweaver':    { 115203:'Fortifying Brew', 122278:'Dampen Harm', 122783:'Diffuse Magic' },
  'Windwalker':    { 122470:'Touch of Karma', 115203:'Fortifying Brew', 122278:'Dampen Harm', 122783:'Diffuse Magic', 322101:'Expel Harm', 122281:'Healing Elixir' },
  // Paladin
  'Retribution':   { 642:'Divine Shield', 498:'Divine Protection', 184662:'Shield of Vengeance', 85673:'Word of Glory', 633:'Lay on Hands' },
  // Priest
  'Discipline':    { 19236:'Desperate Prayer', 586:'Fade', 33206:'Pain Suppression' },
  'Shadow':        { 47585:'Dispersion', 19236:'Desperate Prayer', 586:'Fade' },
  // Rogue (Assassination omitted — no defensive IDs confirmed in its guide)
  'Outlaw':        { 185311:'Crimson Vial', 1966:'Feint', 5277:'Evasion', 31224:'Cloak of Shadows' },
  'Subtlety':      { 31224:'Cloak of Shadows', 5277:'Evasion', 1966:'Feint', 185311:'Crimson Vial' },
  // Shaman
  'Elemental':     { 108271:'Astral Shift' },
  'Enhancement':   { 108271:'Astral Shift' },
  // Warlock
  'Affliction':    { 104773:'Unending Resolve', 108416:'Dark Pact', 6789:'Mortal Coil' },
  'Demonology':    { 104773:'Unending Resolve', 108416:'Dark Pact' },
  'Destruction':   { 104773:'Unending Resolve', 108416:'Dark Pact' },
  // Warrior
  'Arms':          { 118038:'Die by the Sword', 386208:'Defensive Stance', 23920:'Spell Reflection' },
  'Fury':          { 184364:'Enraged Regeneration', 23920:'Spell Reflection', 386208:'Defensive Stance' },
  // Shared spec names (class-ambiguous from WCL subType) — both classes' defensives merged
  'Frost':         { 48792:'Icebound Fortitude', 48707:'Anti-Magic Shell', 49039:'Lichborne', 49998:'Death Strike', 45438:'Ice Block', 11426:'Ice Barrier' },
  'Holy':          { 642:'Divine Shield', 498:'Divine Protection', 633:'Lay on Hands', 17:'Power Word: Shield', 19236:'Desperate Prayer', 586:'Fade' },
  'Protection':    { 53600:'Shield of the Righteous', 31850:'Ardent Defender', 86659:'Guardian of Ancient Kings', 642:'Divine Shield', 1022:'Blessing of Protection', 204018:'Blessing of Spellwarding', 633:'Lay on Hands', 465:'Devotion Aura', 2565:'Shield Block', 871:'Shield Wall', 12975:'Last Stand', 23920:'Spell Reflection' },
  'Restoration':   { 22812:'Barkskin', 108271:'Astral Shift' },
};

const BOSS_KNOWLEDGE = {
  'Chimaerus, the Undreamt God': `
FIGHT STRUCTURE:
This is a two-phase encounter built around preventing the boss from consuming its spawned Manifestation adds. Every add that reaches Chimaerus heals it for 500% of the add's remaining HP and permanently increases its damage by 50% (stacking). Two or three stacks is trouble; six is unkillable.

THE TWO REALMS (Core mechanic):
The fight is split between Reality (upstairs, fighting the boss) and the Rift (downstairs, killing adds). Players hit by Alndust Upheaval are knocked airborne and sent into the Rift dimension for 40 seconds, gaining Alnsight. Only players with Alnsight can see and attack Manifestations. The raid is intentionally split into two pre-assigned soak groups who alternate going into the Rift.

ABILITY REFERENCE (what each logged ability actually means):
- Alndust Upheaval: The intentional soak mechanic. Players soak this on purpose to enter the Rift. Damage from this is EXPECTED and not a mistake for assigned soakers.
- Alndust Essence: WCL classifies this as FULLY AVOIDABLE. It is separate from Alndust Upheaval. Players taking repeated Alndust Essence damage are failing to dodge it. Flag this as an individual mistake if it appears consistently across multiple pulls on the same player.
- Corrupted Devastation: Phase 2 breath-style mechanic. WCL classifies this as FULLY AVOIDABLE. The boss flies in a line -- players must dodge the path. Repeated hits on the same player are a clear positioning mistake.
- Rift Emergence: Raid-wide nature damage when Manifestations spawn. Unavoidable.
- Rift Sickness: Raid-wide damage over time. Unavoidable.
- Lingering Miasma / Consuming Miasma: Puddles left behind when adds die. Standing in these is avoidable -- move out immediately. Not classified as fully avoidable by WCL but positionally avoidable.
- Discordant Roar: Add ability. Not fully avoidable per WCL but high uptimes on specific players may indicate positioning issues near the add.
- Dissonance: Mythic-only. Damage from standing near players in the opposite realm. Positionally avoidable with correct realm assignment -- repeated hits suggest a player is out of position.
- Ravenous Dive: End-of-phase mechanic, unavoidable.
- Colossal Strikes: Tank ability from the Colossal Horror add. ONLY tanks should take this. Non-tanks taking Colossal Strikes were standing too close to the add.
- Caustic Phlegm: Tank mechanic from the boss. Expected on tanks. Not avoidable.
- Consume: Energy-dump knockback at 100 energy. Unavoidable.
- Rift Madness: Mythic-only mechanic. Not fully avoidable.
- Blessing of Dawn: Holy Paladin self-buff. Any damage shown is a self-interaction of their own toolkit. Ignore entirely.
- Fearsome Cry / Essence Bolt: Add abilities (Haunting Essence). Should be interrupted. Heavy damage here is a group interrupt failure, not individual avoidable damage.
- Melee / Auto Attack / Stagger: Tank mechanics. Expected on tanks only.

ADD PRIORITY (for context on add-related damage):
1. Colossal Horror -- tank it, kill it first. Discordant Roar stacks wipe raids.
2. Haunting Essence -- interrupt Fearsome Cry and Essence Bolt strictly
3. Swarming Shade -- slow, root, grip to prevent reaching boss

SOAK ROTATION:
Two pre-assigned groups alternate soaking Alndust Upheaval. Damage from the soak itself is intentional and expected.

WHAT COUNTS AS AN INDIVIDUAL MISTAKE ON THIS FIGHT (flag these if appearing on 3+ pulls):
- Alndust Essence -- WCL-verified fully avoidable. Repeated hits = individual dodge failure.
- Corrupted Devastation -- WCL-verified fully avoidable. Repeated hits = not moving out of breath path in Phase 2.
- Non-tanks taking Colossal Strikes -- stay away from the Colossal Horror add.
- Dissonance -- wrong realm positioning, repeated hits are a pattern worth flagging.
- Standing in Lingering Miasma / Consuming Miasma puddles repeatedly.

WHAT IS NOT AN INDIVIDUAL MISTAKE (never flag these):
- Alndust Upheaval -- intentional soak
- Rift Emergence / Rift Sickness -- unavoidable raid damage
- Caustic Phlegm / Consume / Ravenous Dive -- unavoidable or tank-only
- Blessing of Dawn -- Paladin self-buff, ignore
- High tank damage from Melee, Stagger, Caustic Phlegm, Colossal Strikes, Consume -- all expected
`
};
