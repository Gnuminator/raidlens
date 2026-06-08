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
  },

  // ── VOIDSPIRE (6) + MARCH ON QUEL'DANAS (2) — 8 later-tier bosses ────────────
  // (The Dreamrift is a single-boss raid: Chimaerus only. The 8 below are scaffolded
  // ahead of logs — 6 Voidspire encounters + 2 March on Quel'Danas encounters.)
  // PENDING WCL VERIFICATION: boss name strings below are assumed to match WCL
  // encounter names exactly. Verify against a real report for each raid.
  // avoidableSpellIds and interruptTargetSpellIds are empty — no WCL-verified
  // spell IDs yet. Add confirmed IDs here when logs are available.

  'Imperator Averzian': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Vorasius': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Vaelgor and Ezzorak': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Fallen King Salhadaar': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Lightblinded Vanguard': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Crown of the Cosmos': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  "Belo'ren": {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
  },
  'Midnight Falls': {
    avoidableSpellIds: {},
    interruptTargetSpellIds: {}
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
  ]),

  'Imperator Averzian': new Set([
    'Dark Upheaval', 'Blackening Wounds', "Imperator's Glory",
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Vorasius': new Set([
    'Primordial Roar', 'Overpowering Pulse', 'Shadowclaw Slam',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Vaelgor and Ezzorak': new Set([
    'Midnight Manifestation', 'Midnight Flames', 'Twilight Bond',
    'Rakfang', 'Vaelwing', 'Nullzone', 'Radiant Barrier', 'Nullbeam',
    'Unbound Shadow',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Fallen King Salhadaar': new Set([
    'Twisting Obscurity', 'Destabilizing Strikes',
    'Void Convergence',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Lightblinded Vanguard': new Set([
    'Light Infused', 'Sacred Toll', 'Searing Radiance',
    'Judgment', 'Exorcism', 'Execution Sentence', 'Auras',
    'Divine Shield', 'Consecration',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Crown of the Cosmos': new Set([
    'Stellar Emission', 'Dark Hand', 'Null Corona',
    'Voidstalker Sting', 'Rift Slash', 'Devouring Cosmos',
    'Silverstrike Barrage', 'Corrupting Essence',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  "Belo'ren": new Set([
    'Burning Heart', 'Eternal Burns', 'Ashen Benediction',
    'Death Drop', 'Incubation of Flames', 'Voidlight Convergence',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
  ]),
  'Midnight Falls': new Set([
    "Heaven's Lance", 'Abyssal Pool', 'Total Eclipse', 'Shattered Sky',
    'Dark Archangel', 'Disintegration', 'Dawn Crystal',
    'Melee', 'Stagger', 'Auto Attack', 'Melee Attack'
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
- Rift Madness: Mythic-only. Two Rift players are debuffed — one is ALWAYS a healer. A Reality player must stand on each debuffed player to swap realms and end the debuff. Pre-assign rescuers and a designated spot away from the raid for debuffed players to stand.
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
`,

  'Imperator Averzian': `
FIGHT OVERVIEW:
Single-phase fight. Averzian summons Abyssal Voidshapers who move to 3 random spaces and channel Void Rupture to claim them (tic-tac-toe). Only 2 of 3 can be stopped per set. If Averzian claims 3 in a row, the raid wipes. The raid must prevent three-in-a-row indefinitely.

ABILITY REFERENCE:
- Shadow's Advance: Averzian summons 3 Abyssal Voidshapers. Adds have 99% damage reduction until hit by Umbral Collapse. Pick 2 to stop — 1 will always claim a space.
- Umbral Collapse: Soak circle — move the soak onto target adds to remove their immunity. Only happens twice per set; can only stop 2 of 3 adds.
- Void Rupture: When this finishes the add claims a space. Beams shoot from the claimed location — dodge.
- Void Fall: Knockback followed by AOE circles. Dodge.
- Oblivion's Wrath: Void beams shoot outward from Averzian — dodge.
- Shadow Phalanx: Untargetable troops march across the room — find the gap.
- Imperator's Glory: Boss buff — 75% increased damage and 99% damage reduction when within 10yd of a claimed space. Tank boss away from claimed spaces.
- Dark Upheaval: Unavoidable burst of raid-wide damage followed by ticking damage.
- Blackening Wounds: Tank melee DoT (4% stacking health reduction, 20s). Swap when adds spawn — fixate on tank with most stacks.
`,

  'Vorasius': `
FIGHT OVERVIEW:
Single-phase fast-paced fight. Crystal Walls trap players and must be destroyed by exploding Blistercreep adds. The kill condition is Void Breath — a sweeping beam that wipes players if Crystal Walls are still standing. On Mythic, walls take 3 add explosions. Exploded adds leave permanent puddles.

ABILITY REFERENCE:
- Shadowclaw Slam: Tank soak — tank must stand in the circle or the raid wipes. Applies a 150% stacking physical vulnerability debuff. First two Slams spawn Crystal Walls.
- Blisterburst: Spawns Blistercreep adds that fixate random players. When killed, adds explode in 8yd AoE and leave puddles (Mythic). Kite adds to Crystal Walls to destroy them with the explosion.
- Void Breath: Sweeping beam across the room for 15s. Players must be on the safe side. AVOIDABLE — being caught in the beam is a positioning failure. If walls aren't destroyed there is no safe side.
- Primordial Roar: Channels, pulls players toward boss, then unavoidable raid-wide damage and knockback.
- Overpowering Pulse: Lethal if no tank is in melee range.
`,

  'Vaelgor and Ezzorak': `
FIGHT OVERVIEW:
Two-boss fight. Both dragons share a 10% health threshold — if one is more than 10% ahead the pair gains 100% increased damage. Kill them together. At 100 energy, dragons fly away into the Midnight Flames intermission. Stand in the Radiant Barrier and kill the Unbound Shadow add.

ABILITY REFERENCE:
- Twilight Bond: Boss buff — 100% damage amp if health differs >10% or they are <15yd apart. Tank apart and keep health even.
- Nullzone: Tethers all players to Vaelgor and pulls them in. Break tethers by running away. Each break deals raid-wide damage. On Mythic, breaking also spawns circles on the ground — dodge them.
- Dread Breath: Fear cone toward a random marked player — dodge. Dispel feared players quickly. On Mythic, feared players run 50% faster.
- Gloom: Ezzorak shoots a Gloom orb toward the tank. Soak it to reduce the final explosion size and permanent puddle. On Mythic, soaking cleaves nearby players — spread out when soaking.
- Void Howl: AoE circles on all players pop and spawn Voidorbs. Interrupt and CC Voidorbs.
- Rakfang / Vaelwing: Tankbusters on each dragon. Swap immediately.
- Midnight Manifestation: Persistent unavoidable raid-wide ticking DoT throughout the phase.
- Midnight Flames: Dragons fly away at 100 energy — unavoidable intermission damage. Stand inside Radiant Barrier.
`,

  'Fallen King Salhadaar': `
FIGHT OVERVIEW:
Single-phase fight with a damage amp at 100 energy. Kill orbs (Void Convergence) before they touch the boss or it wipes the raid. Clones (Fractured Projection) must be interrupted or CC'd — their Shadow Fracture cast is lethal. Puddles from Despotic Command are permanent — place at edges. On Mythic, clones have Nexus Shield; only the unshielded clone can be interrupted, and each interrupt removes the shield from another clone.

ABILITY REFERENCE:
- Void Convergence: Concentrated Void orbs move toward Salhadaar. If one reaches him, the raid wipes. Tanks kite boss away; DPS kill orbs one at a time (killing applies a stacking 8s DoT on Heroic+).
- Fractured Projection: Clones cast Shadow Fracture — lethal if it completes. Interrupt or CC. On Mythic, chain the interrupts in order (Nexus Shield).
- Despotic Command: Several players pulse damage in a 12s AoE and drop a permanent puddle. Move to edges to place puddles there.
- Entropic Unraveling: At 100 energy, boss stands still — pulsing raid-wide damage for 20s plus rotating beams. Dodge beams. Boss takes 25% increased damage — burn hard. Tank near edge beforehand.
- Shattering Twilight: Spikes travel outward from the marked tank's location. Dodge. On Heroic+, multiple players are marked.
- Twisting Obscurity: Unavoidable raid-wide damage followed by a 23s DoT.
- Destabilizing Strikes: Melee DoT stacking on the tank. Swap at high stacks.
`,

  'Lightblinded Vanguard': `
FIGHT OVERVIEW:
Three-boss Paladin council (Lightblood, Bellamy, Senn). Kill within 10% of each other — if one dies first, the survivors gain a stacking 30% damage buff. At 100 energy each boss channels an Aura that buffs nearby allies — move out immediately. On Mythic, a Zealous Spirit empowers one boss at a time, adding mechanic overlaps and empowered abilities.

ABILITY REFERENCE:
- Auras: At 100 energy each boss channels a powerful buff. Move out of Aura range. On Heroic+, each Aura leaves a Consecrate puddle that pacifies and increases damage taken on Mythic.
- Execution Sentence: Soak circles on several players. Help soak — can only soak 1 per set. Hammers spin outward after each soak — dodge.
- Divine Toll: Bellamy throws waves of traveling shields — dodge or be silenced for 6s.
- Sacred Shield: Senn shields himself and charges on an elekk — dodge the charge path.
- Avenger's Shield: Spreads circles on players — spread out. Applies a dispellable DoT. On Mythic when empowered by Zealous Spirit, targets all players.
- Blinding Light: Senn disorients players facing him. Turn away or interrupt.
- Judgment / Shield of the Righteous: Two-step tankbuster. Swap between the two abilities to split the 500% vulnerability debuff.
- Exorcism: Single big holy tankbuster. Use a defensive.
- Light Infused: Persistent unavoidable raid-wide ticking damage, increased 25% per Aura cast.
- Searing Radiance: 15s pulsing unavoidable raid damage. On Mythic when empowered, ramps 10% per second — major healing CD.
- Divine Shield: Bosses immune when Bloodlust is popped. Mass Dispel immediately.
`,

  'Crown of the Cosmos': `
FIGHT OVERVIEW:
Three-phase fight (Alleria) with two intermissions. Phase 1: kill 3 Undying Sentinels — they have death immunity removed by aiming Silverstrike Arrows through them. Phase 2: Alleria's void clone shares health — kill the clone. Intermissions: Alleria crashes into the platform; survive Silverstrike Barrages and gravity pulls. Phase 3: platform splits into 3 chunks — use feathers to jump between them. Boss casts Devouring Cosmos to destroy the current chunk; pick up a feather and cross before it does.

ABILITY REFERENCE:
- Silverstrike Arrow / Ricochet: White line mechanic. In P1, aim arrows through Sentinels to remove their death immunity. In P2, work together to bounce the Ricochet arrow through immune adds.
- Grasp of Emptiness: Blue beam lines from obelisks around a targeted player. Reposition to aim beams away from the raid.
- Void Expulsion: Orb spawns near ranged, explodes into a permanent puddle. Bait near old puddles.
- Interrupting Tremor (Demiar add): Pulsing silence AoE — move out of range.
- Ravenous Abyss (Vorelus add): 15yd AoE reduces player damage 70% — move out.
- Corrupting Essence (Void Droplets): Kill near Sentinels — death splash applies 30% increased damage taken to everything hit, including the Sentinels.
- Null Corona: Massive heal absorb shield — heal it off. Dispel only if the player is in danger (absorb jumps to another player).
- Dark Hand: Morium tankbuster — heavy physical + magic + knockback. Use defensives.
- Stellar Emission (Intermission): Pulsing stacking DoT and gravity pull toward the center. Fight the drag. Silverstrike arrows sweep — dodge unless clearing a DoT stack.
- Aspect of the End (P3): Tether on several players including the active tank. Run out to break. Breaking deals raid-wide damage and 300% physical vulnerability debuff. Tank swap.
- Devouring Cosmos (P3): Alleria destroys the current platform section. Pick up a feather and use it to jump to the next section.
`,

  "Belo'ren": `
FIGHT OVERVIEW:
Repeating 2-phase encounter with a 6-minute enrage. Phase 1: fight Belo'ren and add birds. Phase 2: Belo'ren retreats to their egg — the real health bar. Each P2 is a 30s damage window; it repeats until the egg dies or enrage. All players have a Light or Void color assignment (changes periodically) — most mechanics resolve by color. Ashen Benediction stacks a permanent 10% healing reduction each P2 cycle — urgency increases each loop.

ABILITY REFERENCE:
- Voidlight Convergence: Light or Void color assignment. Your color reduces same-color mechanic damage 50%. Know your color at all times.
- Light / Void Dive: Soak circle on a marked player — matching-color players help soak. Permanent puddle left behind — place at the edge.
- Guardian's Edict: Colored tank cone sequence. Only tanks soak their matching color — wrong-color soaks enrage the boss.
- Radiant Echoes: Orbs of both colors float across the room. Run through matching-color orbs to clear space. On Mythic, orbs explode if they touch Belo'ren.
- Light / Void Eruption: Belo'ren spawns a Light and a Void bird add. Each casts a lethal raid-wide — ONLY matching-color players can interrupt it. Assign color-matched interrupters.
- Rebirth: When birds die they turn into an egg. Kill within 15s or the add respawns.
- Burning Heart: Persistent unavoidable rot throughout the entire fight.
- Ashen Benediction (P2): Fire damage burst and 10% healing reduction, permanent and stacking. Urgency to kill the egg increases each cycle.
`,

  'Midnight Falls': `
FIGHT OVERVIEW:
Three-phase fight (L'ura) with an intermission after Phase 1. Phase 1: destroy 3 Safeguard Matrix adds (interrupt-chain to remove stacks) and handle Disintegration crystal spawns — kill dark crystals, heal light crystals into Dawn Crystals that are carried by players throughout the rest of the fight. Intermission (inside the Darkwell): survive gravity pulls and Silverstrike Barrages. Phase 2: aim Galvanize beams at Void Cores to destroy them. Phase 3: Dawn Crystal holders project protective light — all other players must stay near them or die in the darkness.

ABILITY REFERENCE:
- Dark Quasar: Spinning beams from the central Darkwell — dodge. Stepping into the Darkwell is instant death.
- Death's Dirge: Memory game. L'ura flashes a rune sequence. Players marked with runes must form a correct-order semicircle as her laser sweeps clockwise through them. Wrong order = massive damage.
- Safeguard Matrix adds: Three adds protect the boss (33% damage reduction each). Interrupt each multiple times to remove Safeguard stacks — when all stacks are gone the add dies. Must kill all three.
- Disintegration: Enemy Midnight Crystals and friendly Dusk Crystals spawn. Kill enemy crystals before their Cosmic Fracture cast finishes (wipe if it completes). Heal Dusk Crystals into Dawn Crystals.
- Dawn Crystal: Carried by players with their Extra Action Button. Carriers take a DoT. After 3s on the ground they pulse lethal raid damage — someone must pick them up immediately.
- Heaven's Glaives: Glaives bounce around the room throughout P1. Dodge constantly.
- Heaven's Lance: 5-hit tankbuster. Each hit stacks Impaled (50% increased damage taken from further hits, 25s). Swap after each cast.
- Galvanize (P2): Targeted line mechanic — aim at Void Cores spinning around the room to destroy them. On Heroic+, Galvanize is a group soak.
- Dark Archangel (P3): L'ura shoots a deadly blast — a Crystal holder uses their Extra Action Button to shield the raid against it. Then move out of the resulting dark zone.
- Dark Constellation (P3): Stars land on the platform and connect with damaging beams — find safe gaps.
- Light Siphon (P3): Soak circles that must be fully drained by standing inside — explode and wipe if not drained in time.
`
};
