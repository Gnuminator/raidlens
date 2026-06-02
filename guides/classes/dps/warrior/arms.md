# Arms Warrior — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources fetched live (June 2026):
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-guide
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/arms-warrior-pve-dps-gems-enchants-consumables
> - https://www.wowhead.com/spell=118038/die-by-the-sword
> - https://www.wowhead.com/spell=386208/defensive-stance
> - https://www.wowhead.com/spell=97462/rallying-cry
> - https://www.wowhead.com/spell=6552/pummel
> - https://www.wowhead.com/spell=12294/mortal-strike
> - https://www.wowhead.com/spell=167105/colossus-smash
> - https://www.wowhead.com/spell=107574/avatar
> - https://www.wowhead.com/spell=6673/battle-shout
> - https://www.wowhead.com/spell=100/charge
> - https://www.wowhead.com/spell=6544/heroic-leap
> - https://www.wowhead.com/spell=3411/intervene
> - https://www.wowhead.com/spell=23920/spell-reflection
> - https://www.wowhead.com/spell=107570/storm-bolt
> - https://www.wowhead.com/spell=227847/bladestorm

## Overview

Arms Warrior is a melee physical DPS specialization. It generates Rage passively through auto-attacks and spends it on a priority of strikes built around a short, frequently recurring burst window opened by **Colossus Smash** (SpellID 167105). The core loop is: keep Rage flowing, keep **Mortal Strike** (SpellID 12294) on cooldown, maintain bleeds/debuffs (Rend, Deep Wounds), and dump damage into the Colossus Smash window with cooldowns like **Avatar** (SpellID 107574) and **Bladestorm** (SpellID 227847).

Damage profile: strong single-target and excellent 2-target cleave (via Sweeping Strikes), with more modest sustained multi-target AoE than dedicated AoE specs. It is a pure physical-damage, no-pet, no-heal-output spec.

Primary weakness: mediocre self-sustain and limited burst multi-target damage; per the live Icy Veins guide it is currently considered undertuned in 12.0.5. Gameplay also punishes Rage mismanagement — becoming Rage-starved (no Mortal Strike) or overcapping Overpower charges both cost throughput.

## Role in Raid

- **Role:** Melee DPS. Not a healer, not a tank.
- **Raid buff:** **Battle Shout** (SpellID 6673) — increases melee and ranged Attack Power of the caster and nearby allies by 5%, very long duration (effectively a maintained raid buff). This is the warrior's mandatory raid-wide buff.
- **Bloodlust/Heroism equivalent:** No. Arms Warrior does NOT provide a Bloodlust/Heroism-type haste burst.
- **Battle Resurrection:** No. Arms Warrior cannot battle res.
- **Group defensive / external:** **Rallying Cry** (SpellID 97462) — raid-wide temporary max-health buff (party/raid within 40 yds), 3-minute cooldown. This is a planned raid cooldown for stacked damage windows, not a single-target external. **Intervene** (SpellID 3411) moves the warrior to an ally; see Utility for caveats.
- **Mobility:** Strong. **Charge** (SpellID 100, gap closer to a target), **Heroic Leap** (SpellID 6544, leap to a ground location), and **Intervene** (SpellID 3411, charge to a friendly target). Piercing Howl provides a self movement-speed component with an AoE slow.

## Abilities Reference

Core / confirmed (SpellIDs verified on live Wowhead spell pages):

- **Mortal Strike** — SpellID 12294. Physical strike; the spec's primary Rage spender. (Applies the Mortal Wounds healing-reduction effect by class design; the specific aura was not confirmed on the fetched page — see Known Gaps.)
- **Colossus Smash** — SpellID 167105. Physical strike that opens the main burst/damage-amp window; ~45s cooldown (Wowhead). Generates Rage.
- **Avatar** — SpellID 107574. Major offensive cooldown; 20s duration, ~1.5 min cooldown (Wowhead). Increases ability and auto-attack damage and grants 3% all-school damage reduction while active.
- **Bladestorm** — SpellID 227847. Arms' major multi-target offensive cooldown; whirling physical damage over ~6s. (Note: 227847 is the Arms/talented Bladestorm page; Fury's Bladestorm uses a different ID. Cooldown not confirmed numerically — see Known Gaps.)
- **Battle Shout** — SpellID 6673. Raid AP buff (see Role in Raid).
- **Storm Bolt** — SpellID 107570. Ranged single-target stun on a short cooldown (Wowhead shows 30s); per Icy Veins it is "a ranged single-target stun."

Other core damage abilities referenced in live rotation guides (SpellIDs NOT individually confirmed — names only): Execute, Overpower, Slam, Cleave, Sweeping Strikes, Rend, Deep Wounds, Whirlwind, Skullsplitter, Thunderous Roar, Ravager, Demolish, Heroic Strike. Hero-talent and talent layouts (e.g., Colossus vs. Slayer trees) affect which of Demolish / Ravager / Thunderous Roar are present. See Known Gaps.

Key passives/procs (names confirmed in rotation guides; mechanics summarized, not ID-confirmed): **Sudden Death** (procs free/empowered Execute usable above the normal HP threshold), **Deep Wounds** (bleed applied by certain strikes), **Overpower** (charge-based proc-enabled filler).

## Rotation / Priority

This is a logical priority order, NOT a DPS benchmark or a strict cast sequence. Actual casts depend on Rage, procs, and current talent/Hero-tree build.

**Opener (single target):** Charge into melee → Avatar → apply Rend → Ravager (just before Colossus Smash, if talented) → Colossus Smash → Bladestorm → Mortal Strike → Demolish (if talented), spending the rest of the window on Execute/Overpower/Slam as available.

**Sustained single-target priority (approximate):**
1. Maintain **Rend** (refresh when nearly expired).
2. **Avatar** on cooldown.
3. **Colossus Smash** on cooldown to open the damage window.
4. Burst abilities inside the window: **Ravager** / **Demolish** / **Bladestorm** (build-dependent).
5. **Execute** when Sudden Death procs or the target is in Execute range.
6. **Mortal Strike** on cooldown.
7. **Overpower** to consume procs / avoid charge overcap.
8. **Slam** as a Rage dump filler.

**AoE / multi-target priority (3+ targets):**
1. **Sweeping Strikes** up to cleave a second target.
2. **Cleave** on cooldown — the main multi-target contributor; can trigger follow-up strikes and reset interactions.
3. **Bladestorm** for burst AoE.
4. **Execute** (with Sudden Death), **Demolish** in the Colossus window.
5. **Mortal Strike** / **Overpower** as secondary fillers.

For 2-target situations, Sweeping Strikes makes single-target abilities hit a second target, which is Arms' standout strength.

## Defensives

For RaidLens: a defensive is "used correctly" if it was active during (or pre-cast just before) a large incoming hit or a known boss damage window, and "missed" if a player took a lethal/near-lethal hit while the cooldown was available. Cooldown values below come from the fetched Wowhead spell pages where noted.

- **Die by the Sword** — SpellID 118038. 8s duration, **2 min cooldown**. Grants 100% parry chance and reduces all-school damage taken by 30% for the duration. This is Arms' primary personal defensive. *RaidLens usage:* should be active during heavy physical melee-style hits or a scripted burst window; flag if the player took a large avoidable/expected hit while it was off cooldown.
- **Defensive Stance** — SpellID 386208. A toggled stance reducing all damage taken by 15% (at the cost of 10% damage dealt). Effectively a free, togglable mitigation; the Wowhead "3s cooldown" is just the stance-swap lockout. *RaidLens usage:* expect it toggled ON heading into predictable raid-wide damage and OFF during pure-uptime windows. Hard to judge from logs alone (it is a buff state, not a discrete cast) — treat absence cautiously.
- **Rallying Cry** — SpellID 97462. **3 min cooldown.** Grants the warrior and nearby party/raid (40 yds) temporary max health for a short duration. This is a raid cooldown. *RaidLens usage:* should be aligned with a planned raid-wide damage event; flag as misused only if a known stacked-damage event passed with Rallying Cry available and unused.
- **Spell Reflection** — SpellID 23920. 5s duration, short cooldown (Wowhead shows ~25s on the live spell page family; the page returned a 1s scalar which is the internal GCD-style value, NOT the real cooldown — see Known Gaps). Reflects incoming spells back at the caster and reduces magic damage taken. *RaidLens usage:* effective against targeted/reflectable magic casts; flag a missed reflect only when the encounter has a specifically reflectable cast and the warrior ate it with the ability available.
- **Second Wind** (talent) — passive self-healing that recovers health when out of combat / not recently damaged (per Icy Veins summary). *RaidLens usage:* passive; not an actively pressed defensive, so do not flag it.
- **Bitter Immunity** (talent, if taken) — self-heal + dispel of effects (per general warrior toolkit). NOT confirmed on a fetched spell page this patch — see Known Gaps. If present, treat as a minor self-cleanse/heal cooldown.
- **Berserker Rage** — removes/prevents Fear, Sap, and Incapacitate effects on the warrior (per Icy Veins). *RaidLens usage:* a personal anti-CC/anti-fear tool; relevant only on encounters with fear/incapacitate mechanics.

## Utility

- **Interrupt:** **Pummel** — SpellID 6552. Interrupts the current spell cast; **15 second cooldown** (Wowhead). This IS a real, raid-usable interrupt and is the spec's primary kick. *RaidLens usage:* on encounters with interruptible casts, a warrior in interrupt rotation should be landing Pummels on assignment; flag missed interrupts when Pummel was available. **Intimidating Shout** can act as a "pseudo-interrupt" by disorienting/scattering enemies but is NOT a true interrupt and should not be counted as a kick.
- **Crowd control:** **Storm Bolt** (SpellID 107570) — single-target ranged stun. **Shockwave** — frontal-cone AoE stun (talent). **Intimidating Shout** — fear/disorient (AoE). Storm Bolt and Shockwave are the usable stuns in raid add situations.
- **Dispels:** Arms Warrior has NO outward (ally) dispel. It cannot cleanse magic/curse/poison/disease from teammates. Berserker Rage / Bitter Immunity only affect the warrior itself.
- **Externals on others:** Effectively none in the healer sense. **Intervene** (SpellID 3411) moves the warrior to a friendly target and is sometimes used to reposition or to intercept; the live spell page did not confirm a damage-transfer/absorb component this patch (it showed only a dummy/server-side effect) — see Known Gaps. Do not assume it shields an ally.
- **Raid buffs/debuffs:** **Battle Shout** (SpellID 6673, +5% AP raid-wide). Bleeds (Rend / Deep Wounds) are damage, not a raid debuff buff.
- **Movement tools:** **Charge** (SpellID 100), **Heroic Leap** (SpellID 6544), **Intervene** (SpellID 3411), plus Piercing Howl's self speed component.

## Consumables and Enchants

Recommendations below are from the live Icy Veins gems/enchants/consumables page for 12.0.5. Item *names* are reproduced as written there; numeric item IDs were NOT confirmed and are intentionally omitted.

- **Flask:** Flask of the Shattered Sun (or Flask of the Blood Knights).
- **Combat potion:** Potion of Recklessness (or Light's Potential as a simpler option).
- **Healing potion:** Silvermoon Health Potion.
- **Food:** Harandar Celebration (feast) or Royal Roast (personal).
- **Augment rune:** Void-Touched Augment Rune (stated as the only Midnight option).
- **Weapon enchant:** Berserker's Rage or Jan'alai's Precision; weapon augment oil: Thalassian Phoenix Oil.
- **Other enchants (by slot, per Icy Veins):** Helm — Empowered Hex of Leeching; Shoulder — Akil'zon's Swiftness; Chest — Mark of the Worldsoul; Legs — Blood Knight's Armor Kit; Boots — Lynx's Dexterity; Rings — Eyes of the Eagle.
- **Gems:** Indecipherable Eversong Diamond (unique); secondary gems favoring Critical Strike / Haste.

All consumable/enchant names should be re-verified against the live Wowhead/Icy Veins pages before relying on them for a raid night; tunings and availability shift across 12.x hotfixes.

## Notes and Known Gaps

- **Confirmed SpellIDs (verified on the exact Wowhead spell page fetched):** Mortal Strike 12294, Colossus Smash 167105, Avatar 107574, Battle Shout 6673, Charge 100, Heroic Leap 6544, Intervene 3411, Spell Reflection 23920, Storm Bolt 107570, Bladestorm 227847, Die by the Sword 118038, Defensive Stance 386208, Rallying Cry 97462, Pummel 6552.
- **Execute SpellID NOT included** — could not confirm the current Arms Execute SpellID on a live page (Wowhead returned 403). Omitted deliberately rather than guessed.
- **Overpower, Slam, Cleave, Sweeping Strikes, Rend, Deep Wounds, Whirlwind, Skullsplitter, Thunderous Roar, Ravager, Demolish, Heroic Strike, Piercing Howl, Shockwave, Intimidating Shout, Berserker Rage, Bitter Immunity, Second Wind, Sudden Death** — referenced by name from live guides but their individual SpellIDs were NOT confirmed; no IDs given for these.
- **Mortal Strike healing-reduction (Mortal Wounds):** stated by class design but the specific aura/effect was not visible on the fetched Mortal Strike page. Unconfirmed.
- **Bladestorm cooldown:** numeric cooldown not confirmed. Also note 227847 is the Arms Bladestorm ID; a different Bladestorm ID exists for Fury — do not cross-apply.
- **Spell Reflection / Charge / Heroic Leap / Intervene "cooldown" values on Wowhead:** the spell pages returned very small scalars (1–1.5s) that are GCD/internal lockout values, NOT the real ability cooldowns. Real cooldowns (e.g., Spell Reflection's true cooldown, Heroic Leap's, Charge's) were not reliably confirmed and should be re-checked in-game or via the tooltip.
- **Intervene damage-transfer/absorb:** not confirmed on the live spell page this patch; treat as a movement/reposition tool only until verified.
- **Talent / Hero-tree specifics (Colossus vs. Slayer):** the live Wowhead guide HTML did not extract cleanly; talent build, import strings, and exact Hero-talent rotation are NOT captured here. No SimC APL was provided. Re-derive from the live Wowhead/Icy Veins talent pages if a build-specific guide is needed.
- **Consumable/enchant item IDs:** omitted (names only, from Icy Veins). Re-verify names and availability each patch.
- **Maintenance flag:** Re-verify every SpellID, cooldown, and consumable/enchant name after ANY 12.x patch or hotfix. Tuning and item availability in Midnight change frequently; treat this guide as a 12.0.5 snapshot (June 2026).
