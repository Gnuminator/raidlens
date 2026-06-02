# Vengeance Demon Hunter — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/demon-hunter/vengeance/overview-pve-tank
> - https://www.wowhead.com/guide/classes/demon-hunter/vengeance/abilities-talents-pve-tank
> - https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-spell-summary
> - https://www.method.gg/guides/vengeance-demon-hunter/playstyle-and-rotation
> - https://maxroll.gg/wow/class-guides/vengeance-demon-hunter-mythic-plus-guide
> - Individual Wowhead spell pages (one per confirmed SpellID — see Abilities Reference)

## Overview

Vengeance Demon Hunter is the Demon Hunter tank specialization. It is a builder/spender
melee tank: it generates **Soul Fragments** and **Fury** with builder abilities (primarily
Fracture, Immolation Aura, Sigil of Flame) and spends them on Soul Cleave (single-target /
small cleave heal + damage) and Spirit Bomb (AoE damage + self-shielding). Picking up Soul
Fragments and feeding them into spenders is the core of both its damage and its active
mitigation.

Core gameplay loop:
1. Build Fury and spawn Soul Fragments (Fracture, Immolation Aura, Sigil of Flame).
2. Consume Soul Fragments via Soul Cleave (heal) or Spirit Bomb (AoE + absorb).
3. Layer active mitigation — Demon Spikes for physical, Fiery Brand for a damage window,
   Metamorphosis for a large health/armor bump.

Survivability profile: Vengeance is a strong self-sustain tank. Its effective health comes
from a 40% Metamorphosis health swing, Demon Spikes armor/parry, and Fiery Brand damage
reduction, while its healing comes from Soul Cleave, Fel Devastation, and consuming Soul
Fragments. It is described as an aggressive tank because much of its mitigation and healing
requires staying in melee on the target.

Primary weakness: mitigation is reactive and resource-gated. If the player is starved of
Fury / Soul Fragments, or is forced off the boss (out of melee), the self-healing and Demon
Spikes uptime drop sharply, leaving it spiky against sustained magic or burst that arrives
while Demon Spikes / Fiery Brand are on cooldown.

## Role in Raid

- **Role:** Tank (active mitigation melee tank). Not a healer, not a DPS.
- **Bloodlust/Heroism:** Does NOT provide a Bloodlust-equivalent.
- **Battle res:** Does NOT provide a combat resurrection.
- **Raid buffs/debuffs:** Vengeance brings no unique raid-wide stat buff. Per the sources
  it offers "no raid-wide buffs or significant group dispels." (See Known Gaps — verify
  whether any Hero Talent grants a group effect in 12.0.5.)
- **Group defensive / external:** **Darkness** is its notable raid-contribution defensive —
  a ground-targeted zone giving allies inside a chance to fully negate incoming damage. It
  has no single-target external (no hand-of-protection style ability).
- **Mobility:** High. Infernal Strike (charge leap) and Vengeful Retreat give strong
  repositioning; The Hunt is a long-range gap-closer.

## Abilities Reference

SpellIDs below were each confirmed on the corresponding live Wowhead spell page. Where a
cooldown reads "no fixed cooldown," the ability is on the global cooldown / charge system or
is talent-modified.

**Builders / core damage**
- **Fracture** — SpellID 263642. Melee strike, generates ~25 Fury and Soul Fragments. No
  fixed cooldown (charge-based). Primary Fury/fragment generator.
- **Immolation Aura** — SpellID 258920. Instant burst of Fire damage then a 6-second AoE
  damage-over-time aura; generates Fury. Short (~GCD-gated/charge) cooldown.
- **Sigil of Flame** — SpellID 204596. Ground sigil dealing Fire damage and applying a DoT;
  generates Fury. Builder and a small ranged pull tool.
- **Soul Cleave** — SpellID 228477. Spender, costs ~35 Fury. Damages up to 5 enemies in
  front, consumes available Soul Fragments, and heals the Demon Hunter. Primary single-target
  spender and self-heal.
- **Spirit Bomb** — SpellID 247454. Spender, costs ~40 Fury, consumes up to 5 Soul
  Fragments to deal AoE Fire damage and apply a damage-over-time/absorb component. Primary
  AoE spender.
- **Throw Glaive** — SpellID 204157. Ranged glaive throw, ricochets to a nearby additional
  enemy. Filler / ranged tag.

**Cooldowns (offensive + defensive)**
- **Fel Devastation** — SpellID 212084. ~40s cooldown, costs ~50 Fury. Channeled fel beam
  that deals heavy damage and heals while channeling. Both a damage cooldown and a healing
  tool. (Demon Hunter is interrupt-immune during the channel per the spell data.)
- **Metamorphosis** — SpellID 187827. ~2 min cooldown (the spell page lists the in-form
  buff). Demon form: +40% maximum health and a large armor increase for 15 seconds, plus
  increased ability damage. Major defensive + offensive cooldown.
- **The Hunt** — SpellID 370965. ~1.5 min cooldown. Long-range charge that deals damage and
  applies a damage-over-time effect; also a gap-closer.

**Active mitigation**
- **Demon Spikes** — SpellID 203720. Charge-based (recharge affected by Haste). Increases
  armor and grants parry for ~12 seconds. Primary physical active mitigation.
- **Fiery Brand** — SpellID 204021. Brands the Demon Hunter and reduces damage taken
  (sources cite ~40%) for ~12 seconds; also applies a Fire DoT to the target. Major
  scheduled mitigation window.

**Sigils / control**
- **Sigil of Silence** — SpellID 202137. Ground sigil that arms after a short delay and
  silences all enemies in the area. AoE silence (see Utility — this is a silence, not a
  single-target cast interrupt).
- **Sigil of Misery** — SpellID 207684. Ground sigil that fears/disorients enemies in the
  area. AoE crowd control.
- **Sigil of Chains** — SpellID 202138. Ground sigil that pulls grouped enemies together and
  slows them. Positioning / utility.

**Other utility**
- **Torment** — SpellID 185245. Taunt; forces the target to attack the Demon Hunter.
- **Imprison** — SpellID 217832. ~45s cooldown single-target incapacitate on Demon, Beast,
  and Humanoid enemies.
- **Chaos Nova** — SpellID 179057. ~45s cooldown, costs ~25 Fury. AoE stun around the Demon
  Hunter.
- **Consume Magic** — SpellID 278326. ~10s cooldown. Purges one beneficial Magic effect from
  an ENEMY (offensive purge — not a friendly dispel; see Utility).
- **Infernal Strike** — SpellID 189110. Charge-based leap to a target location dealing Fire
  damage on landing. Primary mobility.
- **Darkness** — SpellID 196718. 5 min cooldown. Ground zone giving allies inside a chance
  to fully negate incoming damage for the duration. Raid defensive (see Defensives).
- **Disrupt** — SpellID 183752. 15s cooldown. The spec's interrupt (see Utility).

**Key passives / mechanics**
- **Soul Fragments** — spawned by Fracture, Immolation Aura, and other abilities; consumed by
  Soul Cleave and Spirit Bomb for healing/absorb and bonus damage. The fragment economy is
  central to both throughput and survivability.
- **Last Resort** — cheat-death passive (talent). When the Demon Hunter would die, it instead
  triggers a brief Metamorphosis instead of dying, on a long internal cooldown.
- **Soul Barrier** — absorb shield tied to Spirit Bomb / Soul Fragment consumption (see Known
  Gaps for exact 12.0.5 wording — sourced from guide prose, no SpellID confirmed).

## Rotation / Priority

This is **logical priority ordering, not a DPS benchmark.** Exact ordering shifts with the
chosen Hero Talent tree (Aldrachi Reaver vs. the newer Annihilator path) and with talents.

**Opener (Aldrachi Reaver, per Method 12.0.5):**
1. Pre-cast Immolation Aura
2. Pre-place Sigil of Flame
3. Fiery Brand
4. Immolation Aura (on multiple targets)
5. Sigil of Spite (talent)
6. Reaver's Glaive (Hero Talent ability)
7. Fracture → empowered Soul Cleave

**Sustained single-target priority (conceptual):**
1. Keep Fiery Brand on cooldown for its mitigation + damage window.
2. Use Fel Devastation on cooldown for damage + healing.
3. Spend Fury before capping: Soul Cleave with 3+ Soul Fragments available.
4. Build with Fracture (charges) and Immolation Aura; refresh Sigil of Flame.
5. Fill with Throw Glaive when out of range or nothing else is available.

**AoE priority (conceptual):**
- Largely the same builders, but favor **Spirit Bomb** (consuming 4–5+ Soul Fragments) over
  Soul Cleave as the spender for AoE damage and the absorb component.
- Immolation Aura and Sigil of Flame gain extra value from multiple targets.
- Sources note the priority "stays relatively fixed regardless of target count" — the main
  change is spender choice (Spirit Bomb in AoE, Soul Cleave in single target).

## Defensives

Each entry includes a **RaidLens usage** note: how to judge from a log whether the player
used the defensive correctly relative to a damage window (a big spike of damage taken, or a
known scripted heavy-damage mechanic).

- **Demon Spikes** — SpellID 203720. Charge-based, ~12s duration, recharge scales with Haste.
  Armor + parry; the spec's primary PHYSICAL active mitigation.
  *RaidLens usage:* This should have high uptime during sustained melee/physical damage. Flag
  a player taking large *physical* hits while Demon Spikes was off and a charge was available.
  Because it is charge-based and frequent, judge by uptime over the pull rather than a single
  cast.

- **Fiery Brand** — SpellID 204021. ~12s, ~40% damage reduction (talent-modifiable).
  *RaidLens usage:* This is a scheduled, ~once-per-major-window cooldown. It should be lined
  up with a known heavy-damage moment (e.g. a tank-buster or a scripted raid hit on the
  tank). Flag a lethal/large hit landing on the tank while Fiery Brand was available and
  unused.

- **Metamorphosis** — SpellID 187827. ~2 min, 15s, +40% max health + large armor.
  *RaidLens usage:* Major personal defensive. Expect it on the heaviest tank-damage windows
  of a fight. Flag a death or near-death during a known heavy window where Metamorphosis was
  off cooldown and unused. Note it is also used offensively, so non-defensive usage is not
  automatically a mistake.

- **Fel Devastation** — SpellID 212084. ~40s, channeled, heals while channeling.
  *RaidLens usage:* Dual-purpose damage + heal. Treat as a self-heal cooldown: if the tank
  was dropping low and Fel Devastation was available and Fury permitted, expect it to be used.
  Do not treat a missing Fel Devastation as a defensive failure on its own — it is primarily
  rotational.

- **Darkness** — SpellID 196718. 5 min, ground zone, chance to fully negate damage for
  allies inside (raid defensive).
  *RaidLens usage:* This is the spec's RAID defensive. On fights with a known raid-wide burst,
  expect Darkness placed on the group for that window. Flag a raid-wide spike where Darkness
  was off cooldown and not used. Note its effect is a *chance* to negate, so it is mitigation,
  not a guaranteed immunity — judge intent (was it placed for the window), not per-hit outcome.

- **Soul Cleave self-heal** — SpellID 228477. Not a cooldown; the steady self-heal.
  *RaidLens usage:* Low Soul Cleave usage during a sustained-damage window can explain poor
  self-healing. Treat as a rotational/uptime signal, not a discrete cooldown to flag.

- **Soul Barrier** — absorb from Spirit Bomb / Soul Fragment consumption (talent; no SpellID
  confirmed live — see Known Gaps).
  *RaidLens usage:* If present in the player's build, AoE damage windows should show Spirit
  Bomb usage feeding the absorb. Treat as supporting evidence, not a hard flag.

- **Last Resort** — cheat-death passive (talent; no SpellID confirmed live).
  *RaidLens usage:* If a log shows Last Resort triggering, the tank already reached lethal
  damage — that is itself a red flag that an earlier active defensive (Demon Spikes / Fiery
  Brand / Metamorphosis) was missed or healing was insufficient.

## Utility

- **Interrupt — Disrupt (SpellID 183752, 15s cooldown).** This is the spec's interrupt and
  its ONLY single-target, cast-stopping kick. It interrupts the current cast and locks the
  target out of that magic school. **For RaidLens interrupt tracking, Disrupt is the ability
  to look for.** A missed assigned interrupt = Disrupt was available (off cooldown) and the
  enemy cast completed.
  - **Important distinction:** **Sigil of Silence (202137)** is an AoE *silence*, not a
    targeted interrupt. It prevents/stops casting for enemies caught in the sigil and can
    cover a missed kick, but it is delayed (arms after a short fuse) and area-based. Do NOT
    treat Sigil of Silence as equivalent to Disrupt when judging a single-target interrupt
    assignment, though it is legitimate backup interrupt utility.

- **Crowd control:**
  - **Chaos Nova** (179057) — AoE stun, ~45s.
  - **Imprison** (217832) — single-target incapacitate on Demon/Beast/Humanoid, ~45s.
  - **Sigil of Misery** (207684) — AoE fear/disorient.
  - **Sigil of Chains** (202138) — AoE pull-in + slow (positioning).
  - **Sigil of Silence** (202137) — AoE silence.

- **Dispels:**
  - **Consume Magic** (278326) — an OFFENSIVE purge: it removes a beneficial Magic effect from
    an ENEMY. It does NOT cleanse debuffs from allies. Vengeance has no friendly dispel — do
    not credit it with removing debuffs from teammates.

- **Externals:** None. No single-target damage-reduction or immunity to cast on an ally.
  Darkness (196718) is the only group-protective tool and is a zone, not a targeted external.

- **Raid buffs/debuffs:** No unique raid-wide stat buff (see Known Gaps re: Hero Talents).

- **Movement tools:**
  - **Infernal Strike** (189110) — charge leap to a location (primary mobility, charges).
  - **Vengeful Retreat** — backward dash (no SpellID confirmed live; see Known Gaps).
  - **The Hunt** (370965) — long-range forward charge / gap-closer, ~1.5 min.

## Consumables and Enchants

Sourced from the Maxroll 12.0.5 guide prose. Exact item names/IDs were NOT individually
confirmed on live item pages — treat as guidance and verify before relying on numeric IDs
(no item IDs are asserted here precisely because they could not be confirmed live).

- **Flask:** "Flask of the Blood Knights" (per Maxroll). Item ID not confirmed — see Known Gaps.
- **Food:** "Silvermoon Parade" food (per Maxroll). Exact name/ID not confirmed — see Known Gaps.
- **Chest enchant:** "Mark of the Worldsoul" (per Maxroll). Enchant ID not confirmed — see Known Gaps.
- **Stat priority (tanking):** Haste (damage + ability/cooldown recharge) is favored, then
  Critical Strike (which also feeds parry in melee-heavy fights). Treat as approximate — stat
  priority shifts by build and content; not a hard rule for log analysis.

No weapon/ring/other enchants or gem IDs are asserted because they could not be confirmed on
live sources during this research pass.

## Notes and Known Gaps

- **Wowhead guide pages render client-side**, so the overview / abilities / rotation guide
  *pages* could not be scraped directly for prose. Spec prose was sourced from Icy Veins,
  Method, and Maxroll; **all asserted SpellIDs were confirmed individually on live Wowhead
  spell pages** (Disrupt 183752, Demon Spikes 203720, Fiery Brand 204021, Metamorphosis
  187827, Darkness 196718, Soul Cleave 228477, Spirit Bomb 247454, Fel Devastation 212084,
  Sigil of Flame 204596, Sigil of Silence 202137, Sigil of Misery 207684, Sigil of Chains
  202138, Fracture 263642, Immolation Aura 258920, The Hunt 370965, Imprison 217832, Consume
  Magic 278326, Torment 185245, Infernal Strike 189110, Throw Glaive 204157, Chaos Nova
  179057).
- **No SpellID asserted for:** Vengeful Retreat, Soul Barrier, Last Resort, Reaver's Glaive,
  Sigil of Spite, Soul Carver — these are referenced in guide prose but were not confirmed on
  a live spell page in this pass. Names are given without IDs by design.
- **Cooldown precision:** Some cooldowns (Demon Spikes, Immolation Aura, Infernal Strike,
  Fiery Brand, Fracture) are charge-based and/or Haste-scaled; values given are approximate
  baseline. Wowhead spell pages sometimes list internal/GCD values (e.g. "1 second") rather
  than the player-facing recharge — verify recharge in-game/SimC if exact numbers matter.
- **Metamorphosis spell page listed "1 second cooldown"** (internal value); the player-facing
  ~2 minute cooldown is from guide prose. Flagged for re-verification.
- **Fiery Brand damage-reduction % (~40%) and Demon Spikes parry %** are from guide prose, not
  a confirmed spell tooltip — treat as approximate.
- **Hero Talents:** Aldrachi Reaver and a newer "Annihilator" path are referenced for 12.0.5;
  Fel-Scarred is mentioned but uncovered in fetched sources. Whether any Hero Talent grants a
  raid buff/debuff or alters defensive cooldowns was NOT confirmed — verify per build.
- **Consumables/enchants:** Names from Maxroll only; no item/enchant IDs confirmed. Do not
  rely on numeric IDs for these.
- **No user-provided SimC profile / talent import string** was available; no APL or import
  string is included.
- **Maintenance flag:** Re-verify all cooldowns, the Disrupt-vs-Sigil-of-Silence interrupt
  distinction, defensive percentages, and Hero Talent details after ANY 12.x patch. Spell IDs
  do not change, but cooldowns, percentages, and talent layouts can shift between patches.
