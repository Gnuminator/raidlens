# Protection Paladin — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched during research, June 2026):
> - https://www.icy-veins.com/wow/protection-paladin-pve-tank-guide
> - https://www.icy-veins.com/wow/protection-paladin-pve-tank-rotation-cooldowns-abilities
> - https://www.method.gg/guides/protection-paladin/playstyle-and-rotation
> - https://www.wowhead.com/spell=96231/rebuke
> - https://www.wowhead.com/spell=31850/ardent-defender
> - https://www.wowhead.com/spell=86659/guardian-of-ancient-kings
> - https://www.wowhead.com/spell=642/divine-shield
> - https://www.wowhead.com/spell=1022/blessing-of-protection
> - https://www.wowhead.com/spell=204018/blessing-of-spellwarding
> - https://www.wowhead.com/spell=6940/blessing-of-sacrifice
> - https://www.wowhead.com/spell=53600/shield-of-the-righteous
> - https://www.wowhead.com/spell=31935/avengers-shield
> - https://www.wowhead.com/spell=633/lay-on-hands
> - https://www.wowhead.com/spell=1044/blessing-of-freedom
> - https://www.wowhead.com/spell=31884/avenging-wrath
> - https://www.wowhead.com/spell=375576/divine-toll
> - https://www.wowhead.com/spell=465/devotion-aura
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json

## Overview

Protection Paladin is the Holy-magic tank specialization of the Paladin class. Its core gameplay loop is generating **Holy Power** from short-cooldown abilities (Judgment, Blessed Hammer / Hammer of the Righteous, Avenger's Shield, Divine Toll) and spending it in sets of 3 on **Shield of the Righteous** (SpellID 53600), the spec's primary active-mitigation button, or on **Word of Glory** as a self/ally heal. Maintaining **Consecration** under the boss and keeping Shield of the Righteous near-permanent uptime is the heart of the rotation.

Survivability profile: relatively low raw health pool compared to other tanks, offset by frequent, reliable active mitigation and an unusually deep toolkit of immunities and externals. The spec deals respectable Holy/Physical damage while tanking. Its primary weakness is that it is **heavily reliant on good cooldown planning** — it does not have the passive bulk of some other tanks, so misusing or sitting on defensives is punished harder. Mobility is also limited: burst movement comes from Divine Steed, but sustained kiting is weak.

Midnight (12.x) note: Consecration lost much of its passive defensive power this expansion; that mitigation was shifted onto armor from Shield of the Righteous / Aegis of Light, and both Ardent Defender and Guardian of Ancient Kings had their base cooldowns reduced.

## Role in Raid

- **Role:** Tank. Not a healer, not a DPS.
- **Battle res:** None. Paladins do not provide a combat resurrection.
- **Bloodlust/Heroism equivalent:** None. Protection Paladin does not bring a Lust effect.
- **Raid buff / aura:** Provides a Paladin Aura. **Devotion Aura** (SpellID 465) gives a 40-yard, party/raid-wide **3% reduction to all damage taken**. (Paladins choose one aura; Devotion is the standard raid choice. Concentration Aura and Crusader Aura are alternatives.)
- **Group externals / defensives for others:**
  - **Blessing of Sacrifice** (SpellID 6940) — redirects 30% of an ally's incoming damage to the Paladin for 12s, 2-min cooldown.
  - **Blessing of Protection** (SpellID 1022) — grants an ally full **Physical** damage immunity.
  - **Blessing of Spellwarding** (SpellID 204018) — grants an ally **magical** damage immunity (talented; shares design space with Blessing of Protection).
  - **Lay on Hands** (SpellID 633) — full-health emergency heal on self or ally, 10-min cooldown.
  - **Word of Glory** — Holy Power heal usable on allies.
  - **Blessing of Freedom** (SpellID 1044) — removes/immunizes an ally against roots and snares, 8s.
- **Mobility:** Divine Steed (burst speed/charges) and the 30% movement speed from Avenging Wrath. No blink/leap; sustained mobility is a weakness.

## Abilities Reference

Confirmed SpellIDs are shown; abilities without a confirmed ID are listed by name only (see Known Gaps).

Core builders / spenders:
- **Shield of the Righteous** (SpellID 53600) — off-GCD active mitigation; costs 3 Holy Power; grants armor and a damage-reduction buff. Primary survivability button.
- **Word of Glory** — off-GCD; costs 3 Holy Power; self/ally heal scaling with missing health. Often free/empowered via the Shining Light proc.
- **Judgment** — Holy Power builder; ranged.
- **Blessed Hammer** / **Hammer of the Righteous** — Holy Power builders (talent choice).
- **Hammer of Light** — Holy Power spender / burst (talented).

Cooldowns / actives:
- **Avenging Wrath** (SpellID 31884) — major offensive cooldown; +20% damage and healing, +20% crit, +30% move speed; 20s duration, 2-min cooldown (can be reduced/shortened by talents such as Righteous Protector). While active, Judgment is replaced by Hammer of Wrath.
- **Divine Toll** (SpellID 375576) — instant, 30-yard, generates Holy Power across targets; 1-min cooldown.
- **Avenger's Shield** (SpellID 31935) — ranged shield throw; **Silences** for 3s and interrupts a cast; 15-second cooldown. (See Utility — this is a silence-on-throw, not a generic spammable kick.)
- **Consecration** — ground AoE that must be maintained for damage and rotational triggers.
- **Hand of Reckoning** — single-target taunt (forces the target to attack the Paladin). This is a TAUNT, not an interrupt. (ID unconfirmed — see Known Gaps.)

Key passives/procs:
- **Shining Light** — periodic proc that makes Word of Glory free/empowered.
- **Vanguard** — buff (from Judgment) that empowers/resets Avenger's Shield in the priority.

## Rotation / Priority

This is a **logical priority list, not a DPS benchmark**. Exact ordering shifts with the talent build (Lightsmith vs. Templar/Herald of the Sun). The goal is constant Shield of the Righteous uptime and Consecration maintenance while not Holy-Power-capping.

Opener (representative):
1. Pre-place Consecration; open with a builder (Blessed Hammer) or pull with Hand of Reckoning.
2. Avenging Wrath
3. Divine Toll
4. Hammer of Light
5. Shield of the Righteous
6. Avenger's Shield
7. Shield of the Righteous (keep spending to avoid capping)
8. Hammer of Wrath / builders, weaving Shield of the Righteous on every 3 Holy Power

Sustained single-target priority:
1. Avenging Wrath (on cooldown, planned for damage windows)
2. Divine Toll
3. Hammer of Light
4. Consecration (if you are not standing in an active one)
5. Avenger's Shield (especially with Vanguard active)
6. Shield of the Righteous (at 3+ Holy Power — keep it near-permanent)
7. Hammer of Wrath / Judgment
8. Blessed Hammer / Hammer of the Righteous (builders)
9. Word of Glory (with Shining Light, or proactively below ~50% HP)
10. Refresh Consecration as it expires

AoE priority: essentially identical, but **Avenger's Shield** rises in priority (it hits multiple targets) ahead of single-target filler.

## Defensives

Protection Paladin has an unusually large defensive toolkit. Every personal and ally defensive is listed with a RaidLens usage note. **Approximate cooldowns are from live spell pages where confirmed; talents can reduce several of these.**

- **Shield of the Righteous** (SpellID 53600) — off-GCD, 3 Holy Power, short internal cooldown (~1s). Primary active mitigation: armor + damage-reduction window.
  - *RaidLens usage:* This should be active across essentially all incoming melee/auto windows and tank busters. A tank taking a large physical hit with no Shield of the Righteous buff active, while holding 3+ Holy Power, is a misuse. Judge by whether the buff was up during the lethal/large hit, not by total casts.

- **Ardent Defender** (SpellID 31850) — 20% reduction to all damage taken, 8s duration, **1.5-minute cooldown**; also prevents a killing blow (cheats death, healing the Paladin) if it would otherwise be lethal.
  - *RaidLens usage:* The bread-and-butter mitigation cooldown. With a 90s cooldown it should be available for most scheduled tank busters. If a Paladin died to a known, telegraphed hit and Ardent Defender had been off cooldown for >90s before the hit, that is an unused-defensive flag.

- **Guardian of Ancient Kings** (SpellID 86659) — **50% damage reduction**, 8s duration. Base cooldown reduced to 3 minutes this expansion; talents (Empyrean Authority) can grant a second charge.
  - *RaidLens usage:* The big personal cooldown. Reserve for the heaviest hits / overlapping mechanics. Flag if the player ate a known massive hit with GoAK available and unused. Confirm charge count from the player's talents before assuming a single charge.

- **Divine Shield** (SpellID 642) — full immunity to all damage and most effects, 8s duration, **5-minute cooldown**.
  - *RaidLens usage:* An emergency "I will not die / I will not take this mechanic" button. Because it drops threat and can be talented (Final Stand) to keep threat, treat it as a panic/mechanic-skip tool. If a tank died to an unavoidable spike while Divine Shield was up and unused for a long time, flag it — but weigh that Divine Shield is also used offensively/for mechanics.

- **Blessing of Protection** (SpellID 1022) — full **Physical** immunity on self or an ally; removes some physical effects. (Tooltip shows the GCD, not the true cooldown — real cooldown is on the order of minutes; see Known Gaps.)
  - *RaidLens usage:* Strong against physical-only damage windows on a non-tank, or to bail out a player stacking physical bleeds. Flag thoughtful non-use only when a clearly physical lethal hit landed on an ally the Paladin could have covered.

- **Blessing of Spellwarding** (SpellID 204018) — **magical** damage immunity (talent, replaces Blessing of Protection's school). Buff window ~10s.
  - *RaidLens usage:* Mirror of Blessing of Protection for magic damage. Note that a given Paladin usually has EITHER Protection OR Spellwarding talented, not both — check talents before assuming both are available.

- **Blessing of Sacrifice** (SpellID 6940) — redirects 30% of an ally's damage to the Paladin for 12s, 2-min cooldown.
  - *RaidLens usage:* A raid external. Useful to judge whether the Paladin supported the co-tank during a tank swap or a soak. Hard to flag as "unused" without target context, but available for support-window analysis.

- **Lay on Hands** (SpellID 633) — heals self or ally to full, **10-minute cooldown**.
  - *RaidLens usage:* Last-resort save. Because of the 10-minute cooldown, only flag non-use when a player (the Paladin or a critical ally) clearly died with Lay on Hands available and no other save existed.

- **Devotion Aura** (SpellID 465) — passive 3% raid-wide damage reduction (also a defensive contribution to the raid).
  - *RaidLens usage:* Should simply be the active aura; if a Paladin is running a different aura during a heavy magic-damage fight, that is a minor optimization note, not a death cause.

## Utility

- **Interrupt:** **Rebuke** (SpellID 96231) is the Paladin's dedicated interrupt — 15-second cooldown, 4–5s school lockout. This is the kick RaidLens should track for missed interrupts. **It is the spec's only true on-demand, low-cooldown interrupt.**
  - Secondary "interrupt": **Avenger's Shield** (SpellID 31935) applies a 3s **silence** and interrupts on impact, on a 15s cooldown. It is ranged and AoE but is a silence/throw, not a precise spammable kick, and competes with the rotation. For RaidLens interrupt accounting, treat **Rebuke** as the primary assignable interrupt and Avenger's Shield as a situational backup/silence.

- **Crowd control:** Hammer of Justice (single-target stun), Repentance (talent, incapacitate), Turn Evil (vs. undead/demons). Blinding Light (talent, AoE disorient) on some builds.

- **Dispels:** **Cleanse Toxins** removes **Poison and Disease** from a friendly target (ID unconfirmed — see Known Gaps). Protection does NOT have a Magic dispel by default (Magic dispel is a Holy Paladin capability). **Blessing of Protection** can clear certain physical effects/bleeds. **Divine Shield / Blessing of Freedom** can clear or immunize movement-impairing effects.

- **Externals for allies:** Blessing of Sacrifice, Blessing of Protection, Blessing of Spellwarding, Lay on Hands, Word of Glory, Blessing of Freedom (all listed above).

- **Raid buff/debuff:** Devotion Aura (3% raid DR). Avenger's Shield/Judgment may apply target debuffs per talents. No unique single-target damage-amp raid buff comparable to other classes.

- **Movement tools:** Divine Steed (burst speed / charges), +30% move speed during Avenging Wrath, Blessing of Freedom for anti-snare/root.

## Consumables and Enchants

Not confirmed from a live source during this research pass. Tank consumable/enchant choices in 12.0.5 (versatility/armor flasks, stamina/armor food, weapon/gear enchants) were not loaded from a fetchable page, so no specific item IDs or product names are asserted here. **Do not infer pre-Midnight consumables as current.** See Known Gaps; re-verify against the live Wowhead Protection Paladin gearing/consumables sub-page before relying on this section.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **base (no hero tree)** and **Lightsmith**.

> These are tank simulations. DPS/DTPS/HPS reflect the Protection Paladin's combined damage output, damage taken per second, and self-healing per second while tanking — not the spec's purpose, but useful as relative indicators of rotational activity.

---

### Variant 1 — Base (no hero tree)

**Talent import string:**
```
CIEAAAAAAAAAAAAAAAAAAAAAAsMzAzyMLmZMDLLDzYmFbzYAAAAAAAAg0MziZMmxYmt2AgBADsNAAwMTbzMbzAEYzADWMzMAzMAALzAMzAG
```

**Metrics:**
| Metric | Value |
|--------|-------|
| DPS | 73,839 |
| DTPS | 95,567 |
| HPS | 40,507 |

**Damage distribution (SimC, share of total):**

| Ability | Share |
|---------|-------|
| Empyrean Hammer | 19.4% |
| Hammer of Light | 16.7% |
| Refining Fire | 10.8% |
| melee (auto-attack) | 7.5% |
| Judgment | 4.7% |
| Twilight Barrage | 0.9% |
| Voidclaw | 0.5% |
| Voidstalker Sting | 0.3% |

For RaidLens: Empyrean Hammer and Hammer of Light together account for ~36% of the base build's damage output, confirming that Hammer of Light usage (gated on maintaining the Judgment debuff and Light's Deliverance stacks) is the dominant rotational damage priority.

**Healing/absorb distribution (SimC, share of total healing):**

| Source | Share |
|--------|-------|
| Word of Glory | 75.1% |
| Bulwark of Order (absorb) | 11.9% |
| Sacrosanct Crusade (heal) | 11.9% |
| Sacrosanct Crusade (absorb) | 1.1% |

---

### Variant 2 — Lightsmith

**Talent import string:**
```
CIEAAAAAAAAAAAAAAAAAAAAAAsMzAzyMLmZMDLLDzYmFbzYAAAAAAAAg0MziZMmxYmt2AgBADsNAAACwMzyySbzMWMwgFzMDwMDAmZAwMDyA
```

**Metrics:**
| Metric | Value |
|--------|-------|
| DPS | 57,055 |
| DTPS | 90,898 |
| HPS | 42,138 |

**Damage distribution (SimC, share of total):**

| Ability | Share |
|---------|-------|
| Refining Fire | 9.5% |
| melee (auto-attack) | 9.4% |
| Sacred Weapon (proc damage) | 6.7% |
| Judgment | 7.0% |
| Lesser Weapon (proc damage) | 6.4% |
| Twilight Barrage | 1.2% |
| Voidclaw | 0.6% |
| Voidstalker Sting | 0.4% |

For RaidLens: the Lightsmith build trades Empyrean Hammer and Hammer of Light (Templar-tree abilities) for Sacred Weapon and Lesser Weapon procs from Holy Armaments, spreading damage more evenly across builders and weapon procs. Notably, overall DPS is ~22% lower than the base Templar-oriented profile, reflecting Lightsmith's emphasis on defensive/healing throughput over damage.

**Healing/absorb distribution (SimC, share of total healing):**

| Source | Share |
|--------|-------|
| Word of Glory | 77.6% |
| Holy Bulwark (absorb) | 9.4% |
| Bulwark of Order (absorb) | 7.8% |
| Sacred Weapon (proc heal) | 3.9% |
| Lesser Weapon (proc heal) | 0.7% |

---

### Action Priority List — Base (no hero tree)

```
actions.precombat=rite_of_sanctification
actions.precombat+=/rite_of_adjuration
actions.precombat+=/snapshot_stats
actions.precombat+=/devotion_aura
actions.precombat+=/lights_judgment
actions.precombat+=/consecration

# Executed every time the actor is available.
actions=auto_attack
actions+=/use_item,name=algethar_puzzle_box
actions+=/use_items
actions+=/potion,if=buff.avenging_wrath.up
actions+=/avenging_wrath,if=cooldown.divine_toll.remains<=10
actions+=/fireblood,if=buff.avenging_wrath.up
actions+=/divine_toll,if=buff.avenging_wrath.up|(!talent.righteous_protector.enabled&cooldown.avenging_wrath.remains<30)
actions+=/hammer_of_light,if=(!buff.undisputed_ruling.up|buff.hammer_of_light_ready.remains<5)&debuff.judgment.up
actions+=/shield_of_the_righteous,if=!buff.hammer_of_light_ready.up|(!buff.hammer_of_light_ready.remains<5&buff.undisputed_ruling.up)|buff.hammer_of_light_free.up|prev_gcd.1.divine_toll
actions+=/holy_armaments,if=next_armament=sacred_weapon&(buff.sacred_weapon.remains<6|!buff.sacred_weapon.up)
actions+=/hammer_of_wrath,if=buff.hammer_of_light_ready.up&!debuff.judgment.up
actions+=/judgment,if=buff.hammer_of_light_ready.up&!debuff.judgment.up
actions+=/avengers_shield,if=buff.vanguard.up|(buff.avenging_wrath.up&apex.3)
actions+=/holy_armaments,if=next_armament=holy_bulwark&cooldown.avenging_wrath.remains<5
actions+=/consecration,if=buff.divine_guidance.stack>=5
actions+=/hammer_of_wrath
actions+=/judgment,if=full_recharge_time<=gcd*2
actions+=/avengers_shield
actions+=/hammer_of_the_righteous,if=buff.blessed_assurance.up
actions+=/blessed_hammer,if=buff.blessed_assurance.up
actions+=/judgment
actions+=/holy_armaments,if=next_armament=holy_bulwark&charges=2
actions+=/consecration,if=!consecration.up
actions+=/blessed_hammer
actions+=/hammer_of_the_righteous
actions+=/arcane_torrent
actions+=/word_of_glory,if=buff.shining_light_free.up
actions+=/consecration
```

### Action Priority List — Lightsmith

```
actions.precombat=rite_of_sanctification
actions.precombat+=/rite_of_adjuration
actions.precombat+=/snapshot_stats
actions.precombat+=/devotion_aura
actions.precombat+=/lights_judgment
actions.precombat+=/consecration

# Executed every time the actor is available.
actions=auto_attack
actions+=/use_item,name=algethar_puzzle_box
actions+=/use_items
actions+=/potion,if=buff.avenging_wrath.up
actions+=/avenging_wrath,if=cooldown.divine_toll.remains<=10
actions+=/fireblood,if=buff.avenging_wrath.up
actions+=/divine_toll,if=buff.avenging_wrath.up|(!talent.righteous_protector.enabled&cooldown.avenging_wrath.remains<30)
actions+=/hammer_of_light,if=(!buff.undisputed_ruling.up|buff.hammer_of_light_ready.remains<5)&debuff.judgment.up
actions+=/shield_of_the_righteous,if=!buff.hammer_of_light_ready.up|(!buff.hammer_of_light_ready.remains<5&buff.undisputed_ruling.up)|buff.hammer_of_light_free.up|prev_gcd.1.divine_toll
actions+=/holy_armaments,if=next_armament=sacred_weapon&(buff.sacred_weapon.remains<6|!buff.sacred_weapon.up)
actions+=/hammer_of_wrath,if=buff.hammer_of_light_ready.up&!debuff.judgment.up
actions+=/judgment,if=buff.hammer_of_light_ready.up&!debuff.judgment.up
actions+=/avengers_shield,if=buff.vanguard.up|(buff.avenging_wrath.up&apex.3)
actions+=/holy_armaments,if=next_armament=holy_bulwark&cooldown.avenging_wrath.remains<5
actions+=/consecration,if=buff.divine_guidance.stack>=5
actions+=/hammer_of_wrath
actions+=/judgment,if=full_recharge_time<=gcd*2
actions+=/avengers_shield
actions+=/hammer_of_the_righteous,if=buff.blessed_assurance.up
actions+=/blessed_hammer,if=buff.blessed_assurance.up
actions+=/judgment
actions+=/holy_armaments,if=next_armament=holy_bulwark&charges=2
actions+=/consecration,if=!consecration.up
actions+=/blessed_hammer
actions+=/hammer_of_the_righteous
actions+=/arcane_torrent
actions+=/word_of_glory,if=buff.shining_light_free.up
actions+=/consecration
```

## Confirmed Spell IDs (SimulationCraft HTML)

Spell IDs below are sourced from the SimulationCraft Midnight 12.0.5 Spelldata blocks (spell-ids-reference.json), matched by exact ability name. Abilities named in this guide but absent from the SimC source (non-damaging defensives, interrupts, utility) are not listed here — their IDs (where confirmed) remain in the sections above.

| Ability | Spell ID(s) | School | Type |
|---------|-------------|--------|------|
| Avenger's Shield | 31935 | holy | cast |
| Avenging Wrath | 454351 | holy | cast |
| Consecration | 81297, 26573 (multiple: base cast + variants) | holy | cast |
| Divine Toll | 375576 | holy | cast |
| Empyrean Hammer | 431398 | holy | cast |
| Hammer of Light | 427453 | holy | cast |
| Hammer of the Righteous | 53595, 88263 (multiple: base cast + variants) | physical / holy | cast |
| Hammer of Wrath | 24275, 1279408, 1241413 (multiple: base cast + variants) | holy | cast |
| Judgment | 275779, 406957, 20271 (multiple: base cast + variants) | holy | cast |
| Refining Fire | 469882 | holyfire | cast |
| Shield of the Righteous | 53600 | holy | cast |
| Word of Glory | 85673 | holy | cast |

Note on Avenging Wrath: the guide references SpellID 31884 (from Wowhead); the SimC source records 454351. These may correspond to different variants of the same spell (e.g., the buff aura vs. the activating cast). Both IDs are noted here; treat 31884 as the Wowhead-confirmed buff aura and 454351 as the SimC cast event.

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Unconfirmed SpellIDs (omitted on purpose):**
  - **Hand of Reckoning** (taunt) — could not load its spell page (Wowhead returned 403 during this session). Listed by name only.
  - **Cleanse Toxins** (Poison/Disease dispel) — could not load its spell page (403). Listed by name only; dispel scope (Poison + Disease, not Magic for Protection) is stated from class-design knowledge, not a fetched page this session — re-verify.
  - **Blessed Hammer**, **Divine Steed**, **Hammer of Justice**, **Repentance**, the auras other than Devotion, and all talent/proc IDs (Shining Light, Vanguard) — not individually present in the SimC source and not fetched from Wowhead this session. Names are reliable; numeric IDs are intentionally omitted.
  - **Rebuke** (SpellID 96231), **Ardent Defender** (SpellID 31850), **Guardian of Ancient Kings** (SpellID 86659), **Divine Shield** (SpellID 642), **Blessing of Protection** (SpellID 1022), **Blessing of Spellwarding** (SpellID 204018), **Blessing of Sacrifice** (SpellID 6940), **Lay on Hands** (SpellID 633), **Devotion Aura** (SpellID 465), **Blessing of Freedom** (SpellID 1044) — IDs confirmed from Wowhead live pages (see Sources above); these are NOT in the SimC source as expected (non-damaging utility absent from SimC).
- **Rotational spell IDs confirmed via SimC:** Avenger's Shield (31935), Consecration (81297/26573), Divine Toll (375576), Empyrean Hammer (431398), Hammer of Light (427453), Hammer of the Righteous (53595/88263), Hammer of Wrath (24275/1279408/1241413), Judgment (275779/406957/20271), Refining Fire (469882), Shield of the Righteous (53600), Word of Glory (85673).
- **Talent import strings:** now added (see SimulationCraft Reference section) for both base and Lightsmith builds.
- **APL:** now added verbatim for both builds. Both builds share identical action list logic; the only difference is the talent string and the resulting proc/buff availability.
- **Cooldown caveats:**
  - Blessing of Protection (1022) and Blessing of Spellwarding (204018): the Wowhead tooltip readout of "1.5 seconds" is the **global cooldown**, not the real ability cooldown (which is on the order of minutes). Exact current 12.0.5 cooldown not confirmed from a fetched page — flagged.
  - Guardian of Ancient Kings charge count (1 vs. 2) and Avenging Wrath duration/cooldown reduction depend on the player's talents (Empyrean Authority, Righteous Protector). Always check talents before judging availability.
- **Rotation ordering** is a logical priority synthesized from Icy Veins / Method and is NOT a DPS benchmark; it varies by talent hero spec (Lightsmith vs. Templar/Herald of the Sun). The SimC APL confirms Avenging Wrath → Divine Toll → Hammer of Light as the opener sequence.
- **Consumables and Enchants** section is unsourced this pass — must be filled from a live gearing page before use.
- **Maintenance flag:** Re-verify all values, especially defensive cooldowns and Guardian of Ancient Kings charges, after any 12.x patch (12.0.7 PTR data already exists as of this writing). Patch baseline for this guide: **12.0.5**.
