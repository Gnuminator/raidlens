# Enhancement Shaman — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/shaman/enhancement/overview-pve-dps
> - https://www.wowhead.com/spell=254410/wind-shear
> - https://www.wowhead.com/spell=108271/astral-shift
> - https://www.wowhead.com/spell=51533/feral-spirit
> - https://www.wowhead.com/spell=51490/thunderstorm
> - https://www.wowhead.com/spell=192058/capacitor-totem
> - https://www.wowhead.com/spell=51514/hex
> - https://www.wowhead.com/spell=17364/stormstrike
> - https://www.wowhead.com/spell=2008/ancestral-spirit
> - https://www.wowhead.com/spell=8143/tremor-totem
> - https://www.wowhead.com/spell=51886/cleanse-spirit
> - https://www.wowhead.com/spell=2825/bloodlust
> - https://www.wowhead.com/spell=462854/skyfury
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-guide
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-gems-enchants-consumables
> - SimulationCraft Midnight 12.0.5 (simc-guides/), APL from Trivial.txt, spell-ids-reference.json
>
> Spell IDs below are included ONLY where the live Wowhead spell page was fetched and explicitly showed that exact numeric ID, or where confirmed via the SimulationCraft spell-ids-reference.json. Abilities without a confirmed ID are named with no number; see Notes and Known Gaps.

---

## Overview

Enhancement Shaman is a melee DPS specialization. Its core gameplay loop is proc-driven: melee strikes (Stormstrike, Lava Lash, Crash Lightning, and others) generate stacks of **Maelstrom Weapon**, a resource that reduces the cast time and increases the damage of the Shaman's nature/spender spells. At sufficient stacks, spenders (Lightning Bolt, Chain Lightning, Elemental Blast, and in Midnight the **Primordial Storm** spender) become instant-cast, letting a melee player weave ranged spell damage without standing still.

Per the live Wowhead Midnight overview, the spec is described as a dynamic, reactive, proc-based melee spec that rewards quick reaction to random resource generation. Maelstrom Weapon has a chance to be generated from melee hits, stacks up to a cap (5 baseline; 10 with the Overflowing Maelstrom talent — and in patch 12.0.5 the **Overflowing Maelstrom stack cap was raised to 20**, allowing the player to bank up to two free instant Healing Surge casts). Each stack reduces a spender's cast time and increases its damage; spenders should generally not be hard-cast below the instant-cast threshold.

**Damage profile:** Bursty, cooldown-and-proc dependent, with strong cleave/AoE via Crash Lightning splash and Chain Lightning. Sustained throughput leans on cooldown windows (Doom Winds, Ascendance, Feral Spirit) lining up with banked Maelstrom Weapon.

**Healing/survivability profile:** Enhancement is not a healer, but it is unusually self-sufficient for a melee DPS: it can spend Maelstrom Weapon on instant **Healing Surge** (self or ally) and **Chain Heal**, and it carries strong personal mitigation (Astral Shift). It is a leather-... (mail-wearing) melee with moderate survivability.

**Primary weakness:** Proc/RNG dependence and ramp. Damage is front-loaded into cooldown windows and requires Maelstrom Weapon to be banked and spent at the right moment; poor proc luck or being forced off the boss during a cooldown window costs a disproportionate amount of damage. As a melee it is also exposed to melee-range mechanics.

---

## Role in Raid

- **Role:** Melee DPS (no tank or healer responsibility), though it can off-heal opportunistically with instant Healing Surge / Chain Heal when not spending Maelstrom on damage.
- **Bloodlust/Heroism:** YES. Enhancement Shaman provides **Bloodlust** (spell ID 2825), a raid-wide 30% attack/casting haste burst for 40 seconds on a 5-minute cooldown (the Horde version; the Alliance-side equivalent is Heroism). This is the canonical raid haste cooldown and is a major reason to bring a Shaman of any spec. (Subject to the per-player "Exhaustion/Sated" lockout shared with other lust effects.)
- **Battle resurrection:** NO. The Shaman resurrect, **Ancestral Spirit** (spell ID 2008), is a 10-second cast and is flagged "cannot be used in combat" on its live Wowhead page. Enhancement Shaman does **not** bring a combat/battle res.
- **Raid buff:** **Skyfury** (spell ID 462854) — a raid-wide buff granting Mastery (the live page shows +2% Mastery, 1-hour duration, group-wide). This is the Shaman's passive-style raid buff to maintain.
- **Windfury Weapon:** An Enhancement-specific weapon imbue (self/personal throughput, not a raid-wide buff in the same sense as Skyfury). Drives a large share of Enhancement's auto-attack damage; Doom Winds amplifies its trigger chance.
- **Mobility:** Strong. Ghost Wolf (movement form that suppresses slows while active), **Wind Rush Totem** (group movement-speed totem), Spiritwalker's Grace (cast while moving — primarily an Elemental tool but available via talent/baseline depending on build), and Gust of Wind / Feral Lunge-style gap closers depending on talents. As melee it must still physically reach targets.

---

## Abilities Reference

Confirmed spell IDs are listed where the Wowhead spell page was fetched and showed the exact ID, or where confirmed via SimulationCraft spell-ids-reference.json. Others are named without IDs (see Known Gaps).

**Core builders / strikes**
- **Stormstrike** (spell ID 17364) — primary melee strike, no cooldown listed (governed by GCD / proc economy); triggers off-hand and additional Stormstrike damage effects.
- **Lava Lash** (spell ID 60103) — secondary melee strike; interacts with Hot Hand (free/empowered Lava Lash procs).
- **Crash Lightning** (spell IDs 187874, 195592 — multiple: base cast + variants) — AoE/cleave strike that applies a buff and splash damage; "cast on cooldown." Buff window ~12 seconds per the rotation guide.
- **Ice Strike / Frost Shock / Flame Shock** (Flame Shock spell ID 188389) — situational builders/DoT maintenance depending on talents; Flame Shock is the DoT often applied via Voltaic Blaze. Ice Strike and Frost Shock IDs not confirmed live.
- **Voltaic Blaze** (spell ID 470057) — in Midnight this is an active button (was a proc); used to apply/maintain Flame Shock and as filler.

**Maelstrom Weapon spenders**
- **Lightning Bolt** (spell ID 188196) — primary single-target spender.
- **Chain Lightning** (spell ID 211094) — multi-target spender (2+ targets).
- **Elemental Blast** (spell ID 117014) — alternative spender.
- **Primordial Storm** (spell ID 1218090) — Midnight spender, spent around 10 stacks.

**Cooldowns**
- **Feral Spirit** (spell ID 51533) — summons spirit wolves; 1.5-minute cooldown per live page. Throughput cooldown.
- **Doom Winds** (spell IDs 469270, 384352 — multiple: base cast + variants) — ~60-second cooldown; greatly increases Windfury Weapon trigger chance for ~8 seconds; off the GCD.
- **Ascendance** (spell IDs 1219480, 114051, 344548 — multiple: base cast + variants) — ~120-second cooldown; converts Stormstrike into Windstrike and (via Thorim's Invocation) auto-spends Maelstrom Weapon.
- **Sundering** (spell IDs 197214, 467283 — multiple: base cast + variants) — strike that hits all targets in front and triggers weapon/elemental effects; synced with Surging Totem.
- **Surging Totem** (spell ID 444995) — totem deployed in the opener and on cooldown (Totemic hero talent path emphasizes it).
- **Tempest** (spell ID 452201) — Stormbringer hero talent proc/ability; consumed at 10 Maelstrom Weapon stacks.
- **Thunderstorm** (spell ID 51490) — 30-second cooldown; Nature damage in a 10-yard radius around the caster, knockback, and a 40% snare. Historically an Elemental tool; available to Enhancement via talent in some builds. Treat as a knockback/utility/AoE button, not a core single-target ability.

**Key passives / procs**
- **Maelstrom Weapon** — the central resource (see Overview). **Overflowing Maelstrom** raises the cap (20 in 12.0.5).
- **Hot Hand** — empowers/resets Lava Lash.
- **Flametongue Attack** (spell IDs 10444, 467386 — multiple: base cast + variants) — passive weapon attack proc from Flametongue Weapon imbue.
- **Windfury Attack** (spell ID 25504) — passive proc from Windfury Weapon imbue.
- **Windstrike** (spell IDs 115356, 115357 — multiple: base cast + variants) — Ascendance-empowered version of Stormstrike.
- **Hero talent trees:** **Stormbringer** (aggressive Maelstrom cycling toward Tempest procs) and **Totemic** (Surging Totem / Hot Hand window focused).

---

## Rotation / Priority

> This is a logical priority order for correct play, NOT a DPS benchmark or a guarantee of ranking. RaidLens should not infer a player is "bad" purely from priority deviations; the value here is understanding what abilities a competent Enhancement player is pressing and when.

**Opener (per the live rotation guide):**
1. Voltaic Blaze to apply Flame Shock.
2. Deploy Surging Totem (use potion/on-use trinkets/burst consumables here).
3. Sundering, then Lava Lash to trigger Hot Hand.
4. Doom Winds into Primordial Storm.
5. Enter Ascendance, filling GCDs with Windstrike.

**Sustained single target (priority):**
- Maintain Flame Shock (via Voltaic Blaze) and keep Surging Totem / Sundering active.
- Lava Lash on Hot Hand procs (high priority).
- Doom Winds and Ascendance on cooldown / on burst windows.
- Crash Lightning on cooldown (buff + damage even on one target).
- Spend Maelstrom Weapon: Primordial Storm near cap; otherwise Lightning Bolt at/above the instant-cast threshold.
- Fillers: Stormstrike (Windstrike during Ascendance), Voltaic Blaze.

**AoE (priority):**
- Use Chain Lightning instead of Lightning Bolt at 2+ targets.
- Keep Crash Lightning up on cooldown (splash damage hits multiple targets, splits among up to ~5).
- Sundering hits all targets in front.
- Otherwise mirror the single-target priority, biased toward multi-target spenders.

**Maelstrom Weapon rule of thumb:** do not hard-cast spenders below the instant-cast threshold (wastes a global and resets swing timers). Bank stacks into cooldown windows where possible.

---

## Defensives

Enhancement's defensives are how RaidLens should judge survivability decisions. For each, the question for analysis is: *was this defensive off cooldown and available during the lethal/heavy-damage window, and did the player press it?*

- **Astral Shift** (spell ID 108271) — **2-minute cooldown**, reduces all damage taken by **40% for 12 seconds**, instant, no cost. This is the primary personal mitigation. **RaidLens usage:** For any large avoidable or scripted hit that killed or heavily damaged the Shaman, check whether Astral Shift was available (≥2 min since last use). If it was off cooldown and unused going into a known damage event, that is a missed defensive. If it was on cooldown, do not flag it.
  - *Note: Icy Veins text described Astral Shift as a ~1m30s cooldown; the live Wowhead spell page shows 2 minutes. Treat 2 minutes as authoritative for availability checks. See Known Gaps.*
- **Stone Bulwark Totem** — talented absorb totem (provides a personal absorb shield that regenerates). **RaidLens usage:** Treat as a secondary mitigation/absorb cooldown when talented; check availability against a heavy-damage window. *Cooldown/ID not confirmed live — see Known Gaps.*
- **Earth Elemental** — summons an Earth Elemental; per Icy Veins ~3-minute cooldown, ~30-second duration. Primarily a threat/aggro and incidental survivability tool; can be talented to provide the Shaman a damage-reduction effect. **RaidLens usage:** Low priority as a personal defensive; do not flag its absence on most raid damage. *ID/cooldown not confirmed on live spell page — see Known Gaps.*
- **Healing Surge (instant via Maelstrom Weapon)** — instant self/ally heal when Maelstrom Weapon is banked; 12.0.5 lets the Shaman bank up to two free instant Healing Surge casts via Overflowing Maelstrom. **RaidLens usage:** A self-sustain tool, not a cooldown. Unused Maelstrom-funded self-healing is hard to flag reliably; treat as informational, not a defensive miss.
- **Chain Heal (instant via Maelstrom Weapon)** — instant group heal when stacks are banked. Off-healing utility, not a personal defensive.
- **Earth Shield** — in Midnight made effectively permanent on the Shaman via the Therazane's Resilience talent (per Icy Veins); provides a self heal-on-hit / damage-reduction shield. **RaidLens usage:** Passive when talented; not a press-on-demand defensive. *ID not confirmed live.*

---

## Utility

**Interrupt — the most important fact for RaidLens:**
- **Wind Shear** (spell ID 254410) is Enhancement Shaman's interrupt. Live Wowhead page: instant, 30-yard range, **12-second cooldown**, "cannot miss," interrupts the current cast and locks that spell school for 3 seconds.
- This is the spec's **ONLY** raid-usable interrupt. Enhancement has a real, short-cooldown kick — RaidLens SHOULD hold Enhancement Shamans accountable for assigned interrupts on a 12-second cadence.
- *(A forum post from October 2025 referenced a possible 30-second cooldown. The live 12.0.5 Wowhead spell page shows 12 seconds; treat 12 seconds as authoritative. See Known Gaps.)*

**Crowd control:**
- **Hex** (spell ID 51514) — 30-second cooldown; transforms target into a frog, incapacitating (pacify + silence) for up to 1 minute (breaks on damage). Single-target soft CC.
- **Capacitor Totem** (spell ID 192058) — 1-minute cooldown; totem charges up and stuns enemies in an 8-yard radius (AoE stun on a delay).
- **Earthgrab Totem** — root/slow totem. *ID not confirmed live.*
- **Thunderstorm** (spell ID 51490) — knockback + 40% snare around the caster (talent-dependent for Enhancement).
- **Earthbind Totem** — area slow totem. *ID not confirmed live.*

**Dispels:**
- **Cleanse Spirit** (spell ID 51886) — 8-second cooldown; removes **Curse** effects from a friendly target. This is the Shaman's friendly-target dispel for Enhancement.
- **Purge** — offensive dispel; removes a Magic effect from an **enemy**. *ID not confirmed live.*
- **Poison Cleansing Totem** — talented totem that removes Poison effects from allies in its area. *ID not confirmed live.*
- **Tremor Totem** (spell ID 8143) — 1-minute cooldown, 10-second duration; removes/prevents Fear, Charm, and Sleep effects on allies in its radius (the live spell page does not enumerate the removed types in its dispel field; effect summarized from the totem's standard function — see Known Gaps).

**Externals:** Enhancement provides **no targeted external defensive** (no damage-reduction cast on another player). Its "support" is group-wide via totems, Skyfury, Bloodlust, and opportunistic Chain Heal/Healing Surge.

**Raid buffs/debuffs:**
- **Bloodlust** (spell ID 2825) — raid haste cooldown (see Role in Raid).
- **Skyfury** (spell ID 462854) — raid-wide Mastery buff (see Role in Raid).
- **Windfury Weapon** (spell ID 33757) — personal/Enhancement weapon imbue throughput.

**Movement tools:**
- **Ghost Wolf** — travel form; suppresses slows while active.
- **Wind Rush Totem** — group movement-speed totem. *ID not confirmed live.*
- **Spiritwalker's Grace** / **Gust of Wind** — cast-while-moving / self-displacement utility, talent/build dependent. *IDs not confirmed live.*

---

## Consumables and Enchants

Sourced from the Icy Veins 12.0.5 Enhancement consumables/enchants page. Item NAMES are reproduced from that single source; **no item IDs were available/confirmed**, so none are given. Treat the specific item names as needing re-verification (they vary by hero talent build and patch).

- **Weapon enchant (MH + OH):** "Acuity of the Ren'dorei."
- **Armor enchants:** Helm "Empowered Rune of Avoidance"; Shoulders "Amirdrassil's Grace"; Chest "Mark of the Worldsoul"; Legs "Forest Hunter's Armor Kit" (leg armor kit); Boots "Lynx's Dexterity"; Rings "Eyes of the Eagle."
- **Gems:** Primary "Indecipherable Eversong Diamond"; secondary "Flawless Quick Amethyst" or "Flawless Masterful Peridot" by stat balance.
- **Flask/Phial:** Hero-talent dependent — "Flask of the Magisters" (Mastery, Totemic) or "Flask of the Blood Knights" (Haste, Stormbringer).
- **Potion:** "Light's Potential" (use with major cooldowns + Bloodlust).
- **Food:** "Silvermoon Parade" feast (primary stat) or "Royal Roast."
- **Augment Rune:** "Void-Touched Augment Runes."

These choices are throughput/stat optimizations and are NOT something RaidLens should flag as mistakes; they are informational only.

---

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Stormbringer** and **Totemic**.

Metrics were not captured in source (both JSON files have empty `metrics` objects).

### Talent Import Strings

**Stormbringer:**
```
CcQAAAAAAAAAAAAAAAAAAAAAAMzMzwMzMzMzMzMzMzAAAAAAAAAsBYzMG2ILwMM0gFAmlZMzMWWmBmZ2YZmZmhhxMAAzwwwMTgZGMYcBA
```

**Totemic:**
```
CcQAAAAAAAAAAAAAAAAAAAAAAMzMjZmZmZmZmZmZmZGAAAAAAAAAYB2gZsox2AYmgNAsMjZMWWmBmZ2GLzMzMMWGzAAYAGzMxMDAMGA
```

### Damage Distribution (SimC, share of total)

**Stormbringer — single-target Patchwerk:**

| Ability | Share |
|---|---|
| Lightning Bolt | 29.16% |
| Tempest | 15.66% |
| Primordial Storm | 11.64% |
| Ride the Lightning | 7.2% |
| Doom Winds | 3.4% |
| Lightning Rod | 2.8% |
| Flame Shock | 2.5% |
| Flametongue Attack | 2.5% |
| Fire Nova | 0.1% |
| melee | 0.2% |

*Note: Lightning Bolt (_ti) at 33.92% and Tempest (_ti) at 9.62% are Thorim's Invocation sub-breakdowns of the LB and Tempest rows above; they share the same damage and are not additive. The dominant source of single-target damage is Lightning Bolt (and its Thorim's Invocation-empowered variant), confirming that not capping and spending Maelstrom Weapon promptly is the primary DPS mistake to watch for in RaidLens.*

**Totemic — single-target Patchwerk:**

| Ability | Share |
|---|---|
| Lightning Bolt | 50.77% |
| Primordial Storm | 16.06% |
| Surging Bolt (Surging Totem) | 6.9% |
| Flametongue Attack | 4.4% |
| Ride the Lightning | 4.6% |
| Tremor (_es) | 4.5% |
| Flame Shock | 3.3% |
| Searing Volley (Searing Totem) | 3.2% |
| Thorim's Invocation | 3.0% |
| Doom Winds | 2.9% |
| Tremor | 2.7% |
| Searing Bolt (Searing Totem) | 2.3% |
| Flametongue Attack (_imbuement_mastery) | 1.4% |
| melee | 0.1% |

*Totemic's damage is even more concentrated in Lightning Bolt (50.77%) than Stormbringer's, with Surging Totem's pet abilities (Surging Bolt, Tremor, Searing Volley, Searing Bolt) contributing ~15% collectively; a Totemic player who lets Surging Totem drop or fails to deploy it is losing a significant chunk of throughput, which RaidLens can watch for via cast-event absence.*

### Action Priority List — Stormbringer

```
actions.precombat=windfury_weapon
actions.precombat+=/flametongue_weapon
actions.precombat+=/lightning_shield
actions.precombat+=/variable,name=trinket1_is_weird,value=trinket.1.is.algethar_puzzle_box|trinket.1.is.unyielding_netherprism
actions.precombat+=/variable,name=trinket2_is_weird,value=trinket.2.is.algethar_puzzle_box|trinket.2.is.unyielding_netherprism
# Snapshot raid buffed stats before combat begins and pre-potting is done.
actions.precombat+=/snapshot_stats
actions.precombat+=/use_item,name=algethar_puzzle_box

# Executed every time the actor is available.
actions=variable,name=target_nature_mod,value=(1+debuff.chaos_brand.up*debuff.chaos_brand.value)*(1+(debuff.hunters_mark.up*target.health.pct>=80)*debuff.hunters_mark.value)
actions+=/variable,name=expected_lb_funnel,value=action.lightning_bolt.damage*(1+debuff.lightning_rod.up*variable.target_nature_mod*(1+active_dot.flame_shock)*debuff.lightning_rod.value)
actions+=/variable,name=expected_cl_funnel,value=action.chain_lightning.damage*(1+debuff.lightning_rod.up*variable.target_nature_mod*active_enemies*debuff.lightning_rod.value)
actions+=/variable,name=flame_shock_saturated,value=((active_dot.flame_shock=active_enemies)|(active_dot.flame_shock=6))
actions+=/bloodlust,line_cd=600
actions+=/auto_attack
actions+=/call_action_list,name=single_sb,if=active_enemies=1&!talent.surging_totem.enabled
actions+=/call_action_list,name=single_totemic,if=active_enemies=1&talent.surging_totem.enabled
actions+=/call_action_list,name=aoe,if=active_enemies>1

actions.aoe=voltaic_blaze,if=talent.surging_totem.enabled&dot.flame_shock.remains=0
actions.aoe+=/flame_shock,if=!ticking
actions.aoe+=/surging_totem
actions.aoe+=/ascendance,if=ti_chain_lightning
actions.aoe+=/call_action_list,name=buffs
actions.aoe+=/sundering,if=talent.surging_elements.enabled|buff.whirling_earth.up
actions.aoe+=/lava_lash,if=buff.whirling_fire.up
actions.aoe+=/doom_winds
actions.aoe+=/crash_lightning,if=talent.thorims_invocation.enabled&buff.whirling_air.up&(buff.doom_winds.up|buff.ascendance.up)
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled&buff.whirling_air.up
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up&buff.whirling_air.up
actions.aoe+=/lava_lash,if=talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/tempest,if=buff.maelstrom_weapon.stack>=10&(!buff.ascendance.up|!buff.doom_winds.up)
actions.aoe+=/primordial_storm,if=buff.maelstrom_weapon.stack>=10
actions.aoe+=/crash_lightning,if=talent.thorims_invocation.enabled&(buff.doom_winds.up|buff.ascendance.up)&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=(9+1*talent.surging_totem.enabled)&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/voltaic_blaze,if=talent.fire_nova.enabled
actions.aoe+=/crash_lightning
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=(9+1*talent.surging_totem.enabled)
actions.aoe+=/sundering,if=talent.feral_spirit.enabled
actions.aoe+=/voltaic_blaze
actions.aoe+=/lava_lash,if=pet.searing_totem.active
actions.aoe+=/windstrike
actions.aoe+=/stormstrike,if=charges_fractional>=1.8|buff.converging_storms.stack=buff.converging_storms.max_stack
actions.aoe+=/sundering,if=cooldown.surging_totem.remains>25
actions.aoe+=/stormstrike,if=!talent.surging_totem.enabled
actions.aoe+=/lava_lash
actions.aoe+=/stormstrike
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=5
actions.aoe+=/flame_shock

actions.buffs=use_item,name=algethar_puzzle_box,if=(talent.ascendance.enabled&(cooldown.ascendance.remains<2*gcd.max))|(talent.doom_winds.enabled&!talent.ascendance.enabled&(cooldown.doom_winds.remains<2*gcd.max))|(fight_remains%%120<=20)
actions.buffs+=/use_item,name=unyielding_netherprism,if=(talent.ascendance.enabled&(cooldown.ascendance.remains<2*gcd.max))|(talent.doom_winds.enabled&!talent.ascendance.enabled&(cooldown.doom_winds.remains<2*gcd.max))|fight_remains<=20
actions.buffs+=/use_item,slot=trinket1,if=!variable.trinket1_is_weird&((buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled)))|!trinket.1.has_use_buff
actions.buffs+=/use_item,slot=trinket2,if=!variable.trinket2_is_weird&((buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled)))|!trinket.2.has_use_buff
actions.buffs+=/potion,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%300<=30)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/blood_fury,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.blood_fury.cooldown<=action.blood_fury.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/berserking,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.berserking.cooldown<=action.berserking.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/fireblood,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.fireblood.cooldown<=action.fireblood.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/ancestral_call,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.ancestral_call.cooldown<=action.ancestral_call.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/invoke_external_buff,name=power_infusion,if=((talent.deeply_rooted_elements.enabled&buff.ascendance.remains>7.5)|(!talent.deeply_rooted_elements.enabled&(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active))|(fight_remains%%120<=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))

actions.single_sb=primordial_storm,if=(buff.maelstrom_weapon.stack>=9|buff.primordial_storm.remains<=4&buff.maelstrom_weapon.stack>=5)
actions.single_sb+=/voltaic_blaze,if=dot.flame_shock.remains=0&time<5
actions.single_sb+=/flame_shock,if=!ticking
actions.single_sb+=/lava_lash,if=!debuff.lashing_flames.up&time<5
actions.single_sb+=/call_action_list,name=buffs
actions.single_sb+=/sundering,if=talent.surging_elements.enabled|talent.feral_spirit.enabled
actions.single_sb+=/doom_winds
actions.single_sb+=/crash_lightning,if=!buff.crash_lightning.up|talent.storm_unleashed.enabled
actions.single_sb+=/voltaic_blaze,if=(buff.doom_winds.up&buff.maelstrom_weapon.stack>=10-(1+2*talent.fire_nova.enabled)&!buff.maelstrom_weapon.stack=10)&talent.thorims_invocation.enabled
actions.single_sb+=/windstrike,if=buff.maelstrom_weapon.stack>0&talent.thorims_invocation.enabled
actions.single_sb+=/ascendance
actions.single_sb+=/stormstrike,if=buff.doom_winds.up&talent.thorims_invocation.enabled
actions.single_sb+=/crash_lightning,if=buff.doom_winds.up&talent.thorims_invocation.enabled
actions.single_sb+=/tempest,if=buff.maelstrom_weapon.stack=10
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack=10
actions.single_sb+=/stormstrike,if=charges_fractional>=1.8
actions.single_sb+=/lava_lash
actions.single_sb+=/stormstrike
actions.single_sb+=/voltaic_blaze
actions.single_sb+=/sundering
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=8
actions.single_sb+=/crash_lightning
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=5
actions.single_sb+=/flame_shock

actions.single_totemic=voltaic_blaze,if=dot.flame_shock.remains=0
actions.single_totemic+=/flame_shock,if=!ticking
actions.single_totemic+=/surging_totem
actions.single_totemic+=/call_action_list,name=buffs
actions.single_totemic+=/sundering,if=talent.surging_elements.enabled|buff.whirling_earth.up|talent.feral_spirit.enabled
actions.single_totemic+=/lava_lash,if=buff.whirling_fire.up|buff.hot_hand.up
actions.single_totemic+=/doom_winds
actions.single_totemic+=/crash_lightning,if=!buff.crash_lightning.up|talent.storm_unleashed.enabled
actions.single_totemic+=/primordial_storm,if=(buff.maelstrom_weapon.stack>=10|buff.primordial_storm.remains<3.5&buff.maelstrom_weapon.stack>=5)
actions.single_totemic+=/windstrike,if=talent.thorims_invocation.enabled&buff.ascendance.up
actions.single_totemic+=/ascendance,if=ti_lightning_bolt
actions.single_totemic+=/crash_lightning,if=talent.thorims_invocation.enabled&buff.doom_winds.up|buff.ascendance.up
actions.single_totemic+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up
actions.single_totemic+=/lightning_bolt,if=talent.elemental_tempo.enabled&(buff.maelstrom_weapon.stack>=5&(cooldown.lava_lash.remains>gcd.max)&(cooldown.lava_lash.remains<=buff.maelstrom_weapon.stack*0.3)|buff.maelstrom_weapon.stack>=10)
actions.single_totemic+=/crash_lightning,if=!buff.crash_lightning.up
actions.single_totemic+=/lava_lash
actions.single_totemic+=/sundering,if=cooldown.surging_totem.remains>25
actions.single_totemic+=/stormstrike
actions.single_totemic+=/voltaic_blaze
actions.single_totemic+=/crash_lightning
actions.single_totemic+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=5
actions.single_totemic+=/flame_shock
```

### Action Priority List — Totemic

```
actions.precombat=windfury_weapon
actions.precombat+=/flametongue_weapon
actions.precombat+=/lightning_shield
actions.precombat+=/variable,name=trinket1_is_weird,value=trinket.1.is.algethar_puzzle_box|trinket.1.is.unyielding_netherprism
actions.precombat+=/variable,name=trinket2_is_weird,value=trinket.2.is.algethar_puzzle_box|trinket.2.is.unyielding_netherprism
# Snapshot raid buffed stats before combat begins and pre-potting is done.
actions.precombat+=/snapshot_stats
actions.precombat+=/use_item,name=algethar_puzzle_box

# Executed every time the actor is available.
actions=variable,name=target_nature_mod,value=(1+debuff.chaos_brand.up*debuff.chaos_brand.value)*(1+(debuff.hunters_mark.up*target.health.pct>=80)*debuff.hunters_mark.value)
actions+=/variable,name=expected_lb_funnel,value=action.lightning_bolt.damage*(1+debuff.lightning_rod.up*variable.target_nature_mod*(1+active_dot.flame_shock)*debuff.lightning_rod.value)
actions+=/variable,name=expected_cl_funnel,value=action.chain_lightning.damage*(1+debuff.lightning_rod.up*variable.target_nature_mod*active_enemies*debuff.lightning_rod.value)
actions+=/variable,name=flame_shock_saturated,value=((active_dot.flame_shock=active_enemies)|(active_dot.flame_shock=6))
actions+=/bloodlust,line_cd=600
actions+=/auto_attack
actions+=/call_action_list,name=single_sb,if=active_enemies=1&!talent.surging_totem.enabled
actions+=/call_action_list,name=single_totemic,if=active_enemies=1&talent.surging_totem.enabled
actions+=/call_action_list,name=aoe,if=active_enemies>1

actions.aoe=voltaic_blaze,if=talent.surging_totem.enabled&dot.flame_shock.remains=0
actions.aoe+=/flame_shock,if=!ticking
actions.aoe+=/surging_totem
actions.aoe+=/ascendance,if=ti_chain_lightning
actions.aoe+=/call_action_list,name=buffs
actions.aoe+=/sundering,if=talent.surging_elements.enabled|buff.whirling_earth.up
actions.aoe+=/lava_lash,if=buff.whirling_fire.up
actions.aoe+=/doom_winds
actions.aoe+=/crash_lightning,if=talent.thorims_invocation.enabled&buff.whirling_air.up&(buff.doom_winds.up|buff.ascendance.up)
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled&buff.whirling_air.up
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up&buff.whirling_air.up
actions.aoe+=/lava_lash,if=talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/tempest,if=buff.maelstrom_weapon.stack>=10&(!buff.ascendance.up|!buff.doom_winds.up)
actions.aoe+=/primordial_storm,if=buff.maelstrom_weapon.stack>=10
actions.aoe+=/crash_lightning,if=talent.thorims_invocation.enabled&(buff.doom_winds.up|buff.ascendance.up)&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=(9+1*talent.surging_totem.enabled)&talent.splitstream.enabled&buff.hot_hand.up
actions.aoe+=/voltaic_blaze,if=talent.fire_nova.enabled
actions.aoe+=/crash_lightning
actions.aoe+=/windstrike,if=talent.thorims_invocation.enabled
actions.aoe+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=(9+1*talent.surging_totem.enabled)
actions.aoe+=/sundering,if=talent.feral_spirit.enabled
actions.aoe+=/voltaic_blaze
actions.aoe+=/lava_lash,if=pet.searing_totem.active
actions.aoe+=/windstrike
actions.aoe+=/stormstrike,if=charges_fractional>=1.8|buff.converging_storms.stack=buff.converging_storms.max_stack
actions.aoe+=/sundering,if=cooldown.surging_totem.remains>25
actions.aoe+=/stormstrike,if=!talent.surging_totem.enabled
actions.aoe+=/lava_lash
actions.aoe+=/stormstrike
actions.aoe+=/chain_lightning,if=buff.maelstrom_weapon.stack>=5
actions.aoe+=/flame_shock

actions.buffs=use_item,name=algethar_puzzle_box,if=(talent.ascendance.enabled&(cooldown.ascendance.remains<2*gcd.max))|(talent.doom_winds.enabled&!talent.ascendance.enabled&(cooldown.doom_winds.remains<2*gcd.max))|(fight_remains%%120<=20)
actions.buffs+=/use_item,name=unyielding_netherprism,if=(talent.ascendance.enabled&(cooldown.ascendance.remains<2*gcd.max))|(talent.doom_winds.enabled&!talent.ascendance.enabled&(cooldown.doom_winds.remains<2*gcd.max))|fight_remains<=20
actions.buffs+=/use_item,slot=trinket1,if=!variable.trinket1_is_weird&((buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled)))|!trinket.1.has_use_buff
actions.buffs+=/use_item,slot=trinket2,if=!variable.trinket2_is_weird&((buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled)))|!trinket.2.has_use_buff
actions.buffs+=/potion,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%300<=30)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/blood_fury,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.blood_fury.cooldown<=action.blood_fury.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/berserking,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.berserking.cooldown<=action.berserking.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/fireblood,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.fireblood.cooldown<=action.fireblood.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/ancestral_call,if=(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active|(fight_remains%%action.ancestral_call.cooldown<=action.ancestral_call.duration)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))
actions.buffs+=/invoke_external_buff,name=power_infusion,if=((talent.deeply_rooted_elements.enabled&buff.ascendance.remains>7.5)|(!talent.deeply_rooted_elements.enabled&(buff.ascendance.up|buff.doom_winds.up|pet.surging_totem.active))|(fight_remains%%120<=20)|(!talent.ascendance.enabled&!talent.doom_winds.enabled&!talent.surging_totem.enabled))

actions.single_sb=primordial_storm,if=(buff.maelstrom_weapon.stack>=9|buff.primordial_storm.remains<=4&buff.maelstrom_weapon.stack>=5)
actions.single_sb+=/voltaic_blaze,if=dot.flame_shock.remains=0&time<5
actions.single_sb+=/flame_shock,if=!ticking
actions.single_sb+=/lava_lash,if=!debuff.lashing_flames.up&time<5
actions.single_sb+=/call_action_list,name=buffs
actions.single_sb+=/sundering,if=talent.surging_elements.enabled|talent.feral_spirit.enabled
actions.single_sb+=/doom_winds
actions.single_sb+=/crash_lightning,if=!buff.crash_lightning.up|talent.storm_unleashed.enabled
actions.single_sb+=/voltaic_blaze,if=(buff.doom_winds.up&buff.maelstrom_weapon.stack>=10-(1+2*talent.fire_nova.enabled)&!buff.maelstrom_weapon.stack=10)&talent.thorims_invocation.enabled
actions.single_sb+=/windstrike,if=buff.maelstrom_weapon.stack>0&talent.thorims_invocation.enabled
actions.single_sb+=/ascendance
actions.single_sb+=/stormstrike,if=buff.doom_winds.up&talent.thorims_invocation.enabled
actions.single_sb+=/crash_lightning,if=buff.doom_winds.up&talent.thorims_invocation.enabled
actions.single_sb+=/tempest,if=buff.maelstrom_weapon.stack=10
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack=10
actions.single_sb+=/stormstrike,if=charges_fractional>=1.8
actions.single_sb+=/lava_lash
actions.single_sb+=/stormstrike
actions.single_sb+=/voltaic_blaze
actions.single_sb+=/sundering
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=8
actions.single_sb+=/crash_lightning
actions.single_sb+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=5
actions.single_sb+=/flame_shock

actions.single_totemic=voltaic_blaze,if=dot.flame_shock.remains=0
actions.single_totemic+=/flame_shock,if=!ticking
actions.single_totemic+=/surging_totem
actions.single_totemic+=/call_action_list,name=buffs
actions.single_totemic+=/sundering,if=talent.surging_elements.enabled|buff.whirling_earth.up|talent.feral_spirit.enabled
actions.single_totemic+=/lava_lash,if=buff.whirling_fire.up|buff.hot_hand.up
actions.single_totemic+=/doom_winds
actions.single_totemic+=/crash_lightning,if=!buff.crash_lightning.up|talent.storm_unleashed.enabled
actions.single_totemic+=/primordial_storm,if=(buff.maelstrom_weapon.stack>=10|buff.primordial_storm.remains<3.5&buff.maelstrom_weapon.stack>=5)
actions.single_totemic+=/windstrike,if=talent.thorims_invocation.enabled&buff.ascendance.up
actions.single_totemic+=/ascendance,if=ti_lightning_bolt
actions.single_totemic+=/crash_lightning,if=talent.thorims_invocation.enabled&buff.doom_winds.up|buff.ascendance.up
actions.single_totemic+=/stormstrike,if=talent.thorims_invocation.enabled&buff.doom_winds.up
actions.single_totemic+=/lightning_bolt,if=talent.elemental_tempo.enabled&(buff.maelstrom_weapon.stack>=5&(cooldown.lava_lash.remains>gcd.max)&(cooldown.lava_lash.remains<=buff.maelstrom_weapon.stack*0.3)|buff.maelstrom_weapon.stack>=10)
actions.single_totemic+=/crash_lightning,if=!buff.crash_lightning.up
actions.single_totemic+=/lava_lash
actions.single_totemic+=/sundering,if=cooldown.surging_totem.remains>25
actions.single_totemic+=/stormstrike
actions.single_totemic+=/voltaic_blaze
actions.single_totemic+=/crash_lightning
actions.single_totemic+=/lightning_bolt,if=buff.maelstrom_weapon.stack>=5
actions.single_totemic+=/flame_shock
```

---

## Confirmed Spell IDs (SimulationCraft HTML)

The following table lists abilities named in this guide that have an exact key match in the SimulationCraft spell-ids-reference.json (Midnight 12.0.5). IDs already present in the guide from live Wowhead fetches are retained unchanged.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Arc Discharge | 455096 | nature | cast |
| Ascendance | 1219480, 114051, 344548 (multiple: base cast + variants) | fire / nature / nature | cast |
| Bloodlust | 2825 | nature | cast |
| Chain Lightning | 211094 | nature | cast |
| Crash Lightning | 187874, 195592 (multiple: base cast + variants) | nature | cast |
| Doom Winds | 469270, 384352 (multiple: base cast + variants) | stormstrike / physical | cast |
| Elemental Blast | 117014 | elemental | cast |
| Fire Nova | 333974, 333977 (multiple: base cast + variants) | firestorm | cast |
| Flame Shock | 188389 | firestorm | cast |
| Flametongue Attack | 10444, 467386 (multiple: base cast + variants) | fire | cast |
| Lava Lash | 60103 | fire | cast |
| Lightning Bolt | 188196 | nature | cast |
| Lightning Rod | 197568 | nature | cast |
| Primordial Storm | 1218090 | physical | cast |
| Ride the Lightning | 289874 | physical | cast |
| Stormblast | 390287, 319930 (multiple: base cast + variants) | nature | cast |
| Stormstrike | 17364, 32175 (multiple: base cast + variants) | physical | cast |
| Sundering | 197214, 467283 (multiple: base cast + variants) | flamestrike | cast |
| Surging Bolt | 458267 | nature | cast |
| Surging Totem | 444995 | nature | cast |
| Tempest | 452201 | nature | cast |
| Voltaic Blaze | 470057 | firestorm | cast |
| Windfury Attack | 25504 | physical | cast |
| Windfury Weapon | 33757 | nature | buff |
| Windlash | 114089 | physical | cast |
| Windstrike | 115356, 115357 (multiple: base cast + variants) | physical | cast |

Defensives, interrupts and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

---

## Notes and Known Gaps

- **Maintenance flag:** Re-verify this entire guide after any 12.x patch. Enhancement tuning (Maelstrom caps, Wind Shear cooldown, talent layout, hero talent balance) has changed within Midnight already (e.g., Overflowing Maelstrom cap raised to 20 in 12.0.5).
- **SimC talent strings and APL:** Now added (Stormbringer and Totemic variants, Midnight 12.0.5). See SimulationCraft Reference section.
- **Damage/rotational spell IDs:** Now confirmed for all abilities that appeared in the SimulationCraft spell-ids-reference.json (exact key matches only). See Confirmed Spell IDs section. This includes: Lava Lash, Crash Lightning, Lightning Bolt, Chain Lightning, Elemental Blast, Primordial Storm, Voltaic Blaze, Flame Shock, Doom Winds, Ascendance, Sundering, Surging Totem, Tempest, Flametongue Attack, Windfury Attack, Windstrike, Stormblast, Lightning Rod, Ride the Lightning, Arc Discharge, Fire Nova, Surging Bolt, Windlash.
- **Still unconfirmed (not in SimC source — omitted on purpose, NOT guessed):** Ice Strike, Frost Shock, Stone Bulwark Totem, Earth Elemental, Earth Shield, Earthgrab Totem, Earthbind Totem, Purge, Poison Cleansing Totem, Wind Rush Totem, Spiritwalker's Grace, Gust of Wind, Ghost Wolf. Defensive/interrupt/consumable spell IDs remain absent from the SimC source by design (SimC Patchwerk sim only covers damaging abilities).
- **Confirmed spell IDs (fetched live on Wowhead):** Wind Shear 254410, Astral Shift 108271, Feral Spirit 51533, Thunderstorm 51490, Capacitor Totem 192058, Hex 51514, Stormstrike 17364, Ancestral Spirit 2008, Tremor Totem 8143, Cleanse Spirit 51886, Bloodlust 2825, Skyfury 462854. Do not alter these Wowhead-confirmed values.
- **Astral Shift cooldown discrepancy:** Icy Veins text said ~1m30s; live Wowhead spell page shows 2 minutes. This guide uses **2 minutes** (live spell page authoritative). Re-verify if RaidLens availability checks misfire.
- **Wind Shear cooldown discrepancy:** A Blizzard-forum post (Oct 2025) referenced a 30-second cooldown; the live 12.0.5 Wowhead spell page shows **12 seconds**, which this guide uses. If interrupt-cadence analysis seems off, re-check the live value.
- **Tremor Totem dispel detail:** The live Wowhead page's dispel-type field showed "n/a"; the Fear/Charm/Sleep removal described here is the totem's standard documented function, not a value read off that page. Re-verify.
- **Thunderstorm for Enhancement:** Confirmed as a live Shaman spell (51490) but it is historically Elemental's; its availability to Enhancement is talent-dependent and was not confirmed in the Enhancement talent tree on a live fetch. Treat as build-dependent.
- **Rotation specifics** (opener order, Primordial Storm stack thresholds, hero-talent nuances) come from the Icy Veins live rotation page, the Wowhead overview, and the SimulationCraft APL (Midnight 12.0.5).
- **Consumables/enchants:** Item names from a single source (Icy Veins), no item IDs confirmed. Re-verify names against current Wowhead before relying on them.
- **Wowhead main guide body extraction:** The Wowhead overview/abilities/rotation guide pages returned mostly navigation chrome via the fetch tool; substantive ability and rotation detail in this guide came primarily from Icy Veins plus the individual Wowhead spell pages that were fetched successfully.
