// Must be loaded before any function that references these constants.
// JavaScript does not hoist `const`.

const BOSS_KNOWLEDGE_META = {
  'Chimaerus, the Undreamt God': {
    avoidableSpellIds: {
      1245919: 'Alndust Essence',
      1245486: 'Corrupted Devastation'
    },
    interruptTargetSpellIds: {
      // Step 8 -- to be added
    }
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

// Maps WCL subType (spec name) to the guide path in the repo.
// Only specs listed here will have guides fetched. Missing specs are silently skipped.
const SPEC_GUIDE_PATHS = {
  'Havoc':      'guides/classes/dps/demon-hunter/havoc.md',
  'Vengeance':  'guides/classes/tank/demon-hunter/vengeance.md',
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
