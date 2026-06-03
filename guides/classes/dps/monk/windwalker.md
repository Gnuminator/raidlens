# Windwalker Monk — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.wowhead.com/guide/classes/monk/windwalker/overview-pve-dps (page body not retrievable via fetch; used for navigation/version confirmation only)
> - https://www.wowhead.com/guide/classes/monk/windwalker/rotation-cooldowns-pve-dps (body not retrievable; version confirmation only)
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-guide
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/windwalker-monk-pve-dps-gems-enchants-consumables
> - https://www.method.gg/guides/windwalker-monk/playstyle-and-rotation
> - Individual confirmed Wowhead spell pages: spell=107428 (Rising Sun Kick), 113656 (Fists of Fury), 116705 (Spear Hand Strike), 122470 (Touch of Karma), 115203 (Fortifying Brew), 122783 (Diffuse Magic), 122278 (Dampen Harm), 322101 (Expel Harm), 322109 (Touch of Death), 123904 (Invoke Xuen), 113746 (Mystic Touch), 119381 (Leg Sweep), 115078 (Paralysis), 218164 (Detox), 116841 (Tiger's Lust), 116844 (Ring of Peace), 100780 (Tiger Palm), 100784 (Blackout Kick), 330901 (Spinning Crane Kick), 101643 (Transcendence), 109132 (Roll)
> - SimulationCraft Midnight 12.0.5 (simc-guides/Monk_Windwalker.json, simc-guides/Monk_Windwalker_Conduit.json), APL from simc-guides/apl/Monk_Windwalker.apl.txt and simc-guides/apl/Monk_Windwalker_Conduit.apl.txt, spell-ids-reference.json

## Overview

Windwalker Monk is a melee DPS specialization built around a two-resource system: it spends **Energy** (which regenerates passively) to generate **Chi**, then spends Chi on its hardest-hitting strikes. The core loop is: use **Tiger Palm** to convert Energy into Chi, then dump Chi into **Rising Sun Kick**, **Blackout Kick**, **Fists of Fury**, and **Spinning Crane Kick** with as little delay as possible.

A defining mechanic is the Windwalker mastery, **Combo Strikes**, which rewards never casting the same ability twice in a row — the player must constantly alternate abilities to maximize damage. Cooldown windows are built around **Invoke Xuen, the White Tiger** and **Zenith**, with two Hero Talent trees in Midnight (**Shado-Pan** for consistent single-target/AoE, **Conduit of the Celestials** for burst and cleave).

Damage profile: strong, mobile, well-rounded melee damage with both single-target and AoE tools. Survivability profile: relatively weak. Windwalker has good active defensives but minimal passive mitigation and limited self-healing. Its standout strength is mobility (Roll/Flying Serpent Kick/Transcendence).

Primary weakness: low passive durability and limited self-sustain — it relies on actively pressing defensives and on healer attention to survive heavy raid damage. It can also struggle relative to other specs on very large multi-target burst-AoE windows.

> Midnight changes noted by sources: "Storm, Earth, and Fire" was replaced by **Zenith**; **Invoke Xuen** is now a conduit/cooldown spell; the spec no longer needs a Tiger Palm press to trigger Flurry Strikes. Treat older (Dragonflight / The War Within) rotation writeups as outdated.

## Role in Raid

- **Role:** Pure melee DPS. Not a healer, not a tank.
- **Raid debuff it brings:** **Mystic Touch** (spell ID 113746) — causes affected targets to take **5% increased Physical damage**. This is the Monk class's raid contribution and is shared by all Monk specs. Applied automatically by attacking.
- **Bloodlust/Heroism equivalent:** None. Windwalker Monk does **not** provide a Lust effect.
- **Battle res:** None. Monks have no combat resurrection.
- **Group defensives / externals:** **Ring of Peace** (knock/displacement utility — see Utility) is the main group-affecting tool. Windwalker has **no raid-wide damage-reduction cooldown** and **no external damage-reduction or immunity it can cast on another player**. All its defensives are self-only.
- **Mobility:** Excellent. **Roll** / **Chi Torpedo**, **Flying Serpent Kick**, **Tiger's Lust** (self speed + snare break), and **Transcendence** (teleport-swap to a placed spirit) give best-in-class repositioning.

## Abilities Reference

Core builders/spenders:
- **Tiger Palm** (100780) — Energy spender that generates Chi. The primary Chi generator.
- **Blackout Kick** (100784) — Chi spender; also reduces cooldowns of other abilities.
- **Rising Sun Kick** (107428) — Heavy-hitting Chi spender on a short cooldown.
- **Fists of Fury** (113656) — Channeled Chi spender hitting the target and enemies in front; a core burst button.
- **Spinning Crane Kick** (330901) — AoE Chi spender; benefits from the Dance of Chi-Ji proc.

Major cooldowns:
- **Invoke Xuen, the White Tiger** (123904) — Summons Xuen for ~20s and increases the damage of several abilities (~5%). Cooldown ~2 min. Primary DPS cooldown.
- **Zenith** — Reduces Chi-spender cost and increases Blackout Kick's cooldown reduction; activating it resets Rising Sun Kick. Variable cooldown (~60–90s depending on talents). **Spell ID not confirmed via a fetched spell page — see Known Gaps.**
- **Touch of Death** (322109) — Single big-hit execute-style ability based on the Monk's max health. Cooldown ~3 min.
- **Celestial Conduit** — Channeled damage cooldown (Conduit of the Celestials hero tree). **Spell ID not confirmed — see Known Gaps.**
- **Strike of the Windlord** — Cone damage cooldown. **Spell ID not confirmed (Wowhead page returned 403) — see Known Gaps.**
- **Whirling Dragon Punch** — AoE cooldown ability when talented. **Spell ID not confirmed (403) — see Known Gaps.**

Newer Midnight rotational abilities named by sources (not yet ID-confirmed): **Slicing Winds**, **Rushing Wind Kick**. See Known Gaps.

Key passive: **Combo Strikes** (mastery) — repeating the same ability back-to-back loses damage; alternate abilities every global.

## Rotation / Priority

> This is **logical priority ordering**, not a DPS benchmark. Exact sequencing shifts with hero talent choice (Shado-Pan vs Conduit of the Celestials) and talent setup. RaidLens should not flag a player for deviating from this list — use it only as context.

**Opener (single target, with cooldowns; per Method, Conduit of the Celestials):**
1. Slicing Winds (precast)
2. Tiger Palm
3. (trinket / on-use, e.g. Algeth'ar Puzzle Box-style)
4. Invoke Xuen, the White Tiger
5. Zenith
6. Strike of the Windlord
7. Fists of Fury
8. Rising Sun Kick
9. Fists of Fury (on reset)
10. Whirling Dragon Punch (when available)

**Single-target sustained priority (conceptual):**
- Touch of Death on cooldown
- Whirling Dragon Punch when available
- Strike of the Windlord on cooldown
- Fists of Fury on cooldown
- Rising Sun Kick on cooldown
- Spinning Crane Kick with a Dance of Chi-Ji proc
- Blackout Kick to spend Chi and reduce cooldowns
- Tiger Palm to generate Chi / avoid Energy capping
- Respect Combo Strikes (never repeat the same ability consecutively)

**AoE priority (conceptual):**
- Largely the same buttons, but **Spinning Crane Kick** (especially with Dance of Chi-Ji) and front-cone/AoE abilities (Fists of Fury, Whirling Dragon Punch, Strike of the Windlord) are weighted higher than single-target filler.

## Defensives

Windwalker's defensives are **all self-only**. For RaidLens, the question is always: *was a defensive available and unused during a lethal or near-lethal hit?*

- **Touch of Karma** (122470) — Cooldown ~1.5 min. Places an absorb shield based on the Monk's max health (and redirects absorbed damage to a target). ~10s duration.
  - *RaidLens usage:* The signature Windwalker defensive. If a player took a large avoidable or telegraphed hit (or died to a known damage spike) with Touch of Karma off cooldown, that is a defensive-usage flag. A ~1.5 min cooldown means it should be available for most scripted raid damage events.

- **Fortifying Brew** (115203) — Base cooldown ~6 min (often reduced by talents). Reduces all damage taken and increases max health for the duration.
  - *RaidLens usage:* The strongest single mitigation button. Expect it on the biggest scripted raid-wide hits or tank-buster-adjacent moments. Because the base cooldown is long, do not flag it as "unused" on routine damage — reserve flags for major lethal windows. Note the cooldown may be shorter if talented; treat 6 min as the un-talented baseline.

- **Dampen Harm** (122278) — Cooldown ~2 min, ~10s duration. Adds damage absorption against incoming hits (scales with hit size).
  - *RaidLens usage:* A flexible ~2 min mitigation that should line up with predictable heavy hits. If a player died to a telegraphed big hit with Dampen Harm available, flag it. (Talent — may not be on every build; only flag if the player's logs show they have it.)

- **Diffuse Magic** (122783) — Cooldown ~1.5 min, ~6s duration. Reduces **magic** damage taken by ~60% (and can redirect debuffs back).
  - *RaidLens usage:* The dedicated magic-damage cooldown. For magic-school raid mechanics (most Dissonance-type / breath / nature-fire-shadow raid hits), this is the correct button. Flag if a player ate a large magic hit with Diffuse Magic available. (Talent — confirm the player has it before flagging.)

- **Expel Harm** (322101) — Cooldown ~15s, costs 15 Energy. Self-heal (scales with spell power / max health) that also deals a bit of damage.
  - *RaidLens usage:* Minor, frequent self-sustain rather than a panic button. Treat as a topping-off tool. Do **not** flag it as a "missed major defensive" — its short cooldown means it's a throughput/sustain consideration, not a survival cooldown for a single lethal hit.

- **Healing Elixir** (122281) — Talented passive/active self-heal (charges that heal a percentage of health). **Effect details not fully confirmed for the Midnight version — see Known Gaps.**
  - *RaidLens usage:* If present in the player's build, a small self-heal resource. Low priority for flagging.

> Survivability summary for the analyzer: Windwalker has **no passive raid CD and no external**. Its real "I'm about to take a big hit" buttons are **Touch of Karma**, **Dampen Harm** (if talented), **Diffuse Magic** (magic only, if talented), and **Fortifying Brew** (long CD, big hits only). Judge unused-defensive flags against availability at the timestamp of the lethal hit.

## Utility

- **Interrupt:** **Spear Hand Strike** (116705) — 15s cooldown, 5-yard range, interrupts the target's current cast and locks that school briefly. **This is Windwalker Monk's only interrupt.** Windwalker IS a raid-usable kicker — if a log shows a missed/uninterrupted cast that the assignment expected this Monk to catch, and Spear Hand Strike was off cooldown, that is a valid missed-interrupt flag.
  - Note: per RaidLens boss knowledge, group-wide missed interrupts (e.g. Fearsome Cry / Essence Bolt going off) are a group failure, not necessarily this player's individual avoidable damage.

- **Crowd control:**
  - **Leg Sweep** (119381) — AoE stun, ~3s, 1 min cooldown, 6-yard radius.
  - **Paralysis** (115078) — Single-target incapacitate, 20 Energy, ~45s cooldown, 20-yard range.
  - **Ring of Peace** (116844) — 45s cooldown; places a ring that knocks enemies out of an 8-yard area (~5s). Displacement/peel utility, not a stun.

- **Dispels:** **Detox** (218164) — removes **Poison** and **Disease** effects. For Windwalker this is effectively a **self-cleanse only** (Mistweaver gets the friendly-target dispel; Windwalker's Detox is the self version). It does **not** remove Magic or Curse. Do not expect a Windwalker to dispel other players.

- **Externals:** **None.** Windwalker cannot cast any damage reduction, absorb, or immunity on another player.

- **Raid buffs/debuffs:** **Mystic Touch** (113746) — 5% increased Physical damage taken on the target (the Monk class debuff). No raid-wide stat buff and no Lust.

- **Movement tools:** **Roll** (109132) / **Chi Torpedo** (talented variant with stacking speed), **Flying Serpent Kick** (forward dash), **Tiger's Lust** (116841) — +70% run speed ~6s, 30s cooldown, and breaks roots/snares, **Transcendence** (101643) — places a spirit you can swap places with (long duration, short reuse). Excellent overall mobility.

## Consumables and Enchants

> These come from secondary sources (Icy Veins guide + corroborating search results), not from individually fetched Wowhead item pages. Names appear to be genuine Midnight (12.0.5) items and are corroborated across two sources, but **no numeric item IDs are confirmed**, and item names should be re-verified against live Wowhead before relying on them. See Known Gaps.

- **Flask:** Flask of the Blood Knights
- **Potion (DPS):** Potion of Recklessness (Light's Potential listed as roughly equal depending on gear/talents)
- **Food:** Harandar Celebration (feast) for Agility; Royal Roast as a fallback
- **Weapon enchant:** Acuity of the Ren'dorei
- **Weapon oil:** Thalassian Phoenix Oil (single-source — treat as unconfirmed)
- **Augment rune:** Void-Touched Augment Rune (Agility)
- **Gems:** Indecipherable Eversong Diamond in the unique socket; secondary-stat "Flawless" gems (e.g. Flawless Masterful Peridot for Haste/Mastery, Flawless Quick Garnet for Crit/Haste) elsewhere

Stat priority and exact enchant-per-slot were not reliably confirmed (the Icy Veins enchant list appeared to mix in older-expansion enchant names) — see Known Gaps. For RaidLens, the safest checks are: flask present, food/feast buff present, weapon enchant present, augment rune optional.

## SimulationCraft Reference (Midnight 12.0.5)

Hero trees covered: **Shado-Pan** (base build, `Monk_Windwalker.json`) and **Conduit of the Celestials** (`Monk_Windwalker_Conduit.json`).

Metrics: metrics not captured in source (both JSON files have empty `metrics` objects).

---

### Variant 1: Shado-Pan (base build)

**Talent import string:**
```
C0QAAAAAAAAAAAAAAAAAAAAAAMzMD2mxgtZGbzAAAAAAAAAAAAsMMCzYbYAzYYmZmhZZYGmlZCAYxMbjhZmZGAAbAoZZWamZmFAMwMDAsMGwAG
```

**Damage distribution (SimC, share of total):**

Rows with `"0.0% (X%)"` format use the parenthesised value, which represents the share when Flurry Strikes procs are folded into their source ability. Rows lacking a `%` character in the percent field are buff-uptime or duration mis-parses and are excluded.

| Ability | Share of total |
|---|---|
| Fists of Fury | 30.1% |
| Rising Sun Kick | 15.9% |
| Flurry Strikes | 13.5% |
| auto_attack | 10.6% |
| Blackout Kick | 4.8% |
| Touch of Karma | 1.6% |
| Touch of Death | 0.8% |
| Expel Harm (damage component) | 0.4% |

For RaidLens: **Fists of Fury** dominates at ~30% of damage — if a player is consistently missing Fists of Fury casts during a pull, that is the single highest-impact rotational flag. Rising Sun Kick at ~16% and Flurry Strikes at ~13.5% (a passive proc chained off other abilities) round out the top three. Spinning Crane Kick, Tiger Palm, Rushing Wind Kick, Whirling Dragon Punch, and Zenith did not produce parseable damage-share values in this SimC build and are likely negligible on single-target or represent proc/buff interactions captured differently.

---

### Variant 2: Conduit of the Celestials

**Talent import string:**
```
C0QAAAAAAAAAAAAAAAAAAAAAAMzYM2GGsMzMbzAAAAAAAAAAAAsMMCzYbYAzYYmZmhZZYGmlZCAYzMbjhZmZGAALmZZWGTQAAYAMDALjBMzMLG
```

**Damage distribution (SimC, share of total):**

| Ability | Share of total |
|---|---|
| Fists of Fury | 31.8% |
| Rising Sun Kick | 18.9% |
| auto_attack | 11.3% |
| Blackout Kick | 4.4% |
| Tiger Palm | 0.9% |
| Strength of the Black Ox (celestial) | 0.7% |
| Touch of Karma | 1.8% |
| Touch of Death | 1.0% |
| Empowered Tiger Lightning | 1.5% |
| Flight of the Red Crane (celestial) | 0.3% |
| Courage of the White Tiger (celestial) | 0.3% |
| Expel Harm (damage component) | 0.3% |
| Crackling Tiger Lightning | 0.4% |

For RaidLens: The Conduit build shows a broadly similar profile to Shado-Pan — **Fists of Fury** (~32%) and **Rising Sun Kick** (~19%) remain the dominant sources. The Conduit hero tree adds several small celestial-sourced damage entries (Empowered Tiger Lightning, Flight of the Red Crane, Strength of the Black Ox, Crackling Tiger Lightning from Xuen) that collectively represent a few percent. Flurry Strikes does not appear as a named line in this build's parseable rows, consistent with the Conduit tree not taking Flurry Strikes. Spinning Crane Kick, Rushing Wind Kick, and Zenith again produced no parseable damage-share value on single-target.

---

### Action Priority List — Shado-Pan (base build)

```
actions.precombat=snapshot_stats
actions.precombat+=/use_item,name=algethar_puzzle_box,if=!talent.flurry_strikes&(trinket.1.is.algethar_puzzle_box|trinket.2.is.algethar_puzzle_box)
actions.precombat+=/variable,name=patchwerk,value=fight_style.patchwerk|fight_style.castingpatchwerk

# Executed every time the actor is available.
# Default List
actions=auto_attack,target_if=max:target.time_to_die
actions+=/touch_of_karma,target_if=max:target.time_to_die
# Move to target
actions+=/roll,if=movement.distance>5
actions+=/chi_torpedo,if=movement.distance>5
actions+=/flying_serpent_kick,if=movement.distance>5
actions+=/spear_hand_strike,if=target.debuff.casting.react
actions+=/potion,if=buff.invoke_xuen_the_white_tiger.remains>15|fight_remains<=30
actions+=/potion,if=talent.flurry_strikes&chi>2&(time<5|cooldown.zenith.up&time<5|time>300&((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)&talent.flurry_strikes|time>300&buff.zenith.up)
# Enable PI if available
actions+=/variable,name=has_external_pi,value=cooldown.invoke_power_infusion_0.duration>0
actions+=/call_action_list,name=opener,if=time<2
actions+=/call_action_list,name=trinket
actions+=/invoke_external_buff,name=power_infusion,if=buff.zenith.up&(buff.invoke_xuen_the_white_tiger.up|talent.flurry_strikes)
actions+=/call_action_list,name=big_coc,if=talent.celestial_conduit
actions+=/call_action_list,name=zenith
actions+=/call_action_list,name=racials
actions+=/call_action_list,name=default_st,if=active_enemies=1
actions+=/call_action_list,name=multitarget,if=active_enemies>1
actions+=/call_action_list,name=fallback
actions+=/arcane_torrent,if=chi<chi.max&energy<55
actions+=/thorn_bloom
actions+=/haymaker
actions+=/bag_of_tricks
actions+=/arcane_pulse
actions+=/rocket_barrage
actions+=/lights_judgment

# Celestial of the Conduit Burst Windows
actions.big_coc=invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&((cooldown.zenith.up|buff.zenith.remains>13)&!buff.heart_of_the_jade_serpent.up)&(!fight_style.dungeonslice|active_enemies>1|time<60)
actions.big_coc+=/invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)&(!fight_style.dungeonslice|active_enemies>1|time<60)
actions.big_coc+=/invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=fight_style.dungeonslice&target.time_to_die>15&active_enemies>4|fight_remains<=25
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.remains<12&buff.zenith.up&(!buff.bloodlust.up|buff.power_infusion.up)|fight_remains<4
actions.big_coc+=/whirling_dragon_punch,if=buff.power_infusion.up&(!buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_unity_within.remains<2)
actions.big_coc+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&talent.celestial_conduit&buff.zenith.remains>11&chi<=2&cooldown.rising_sun_kick.remains&!buff.rushing_wind_kick.up&talent.obsidian_spiral&buff.combo_breaker.up
actions.big_coc+=/tiger_palm,target_if=max:target.time_to_die,if=combo_strike&talent.celestial_conduit&buff.zenith.remains>11&chi<=2&cooldown.rising_sun_kick.remains&!buff.rushing_wind_kick.up&(!talent.obsidian_spiral|!buff.combo_breaker.up|prev.blackout_kick)
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&(cooldown.rising_sun_kick.remains|active_enemies>2)&cooldown.fists_of_fury.remains&(cooldown.strike_of_the_windlord.remains|talent.whirling_dragon_punch)&(cooldown.whirling_dragon_punch.remains|talent.strike_of_the_windlord)&!buff.rushing_wind_kick.up&!buff.combo_breaker.up&chi>1&(!buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent.remains<4)
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&!buff.heart_of_the_jade_serpent.up&!buff.heart_of_the_jade_serpent_yulons_avatar.up&chi>1&(cooldown.rising_sun_kick.remains|active_enemies>2)&(cooldown.strike_of_the_windlord.remains|(cooldown.whirling_dragon_punch.remains|cooldown.fists_of_fury.remains))
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&buff.heart_of_the_jade_serpent.remains<2&prev.rising_sun_kick&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains&buff.heart_of_the_jade_serpent.up&chi>1

# Single Target
actions.default_st=whirling_dragon_punch,if=!buff.heart_of_the_jade_serpent_unity_within.up&buff.whirling_dragon_punch.remains<1&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|talent.flurry_strikes|!variable.patchwerk)
actions.default_st+=/zenith_stomp,if=buff.zenith.up&(buff.zenith.remains<5&buff.zenith_stomp.stack=2|buff.zenith.remains<4)|talent.celestial_conduit&chi<5&!buff.heart_of_the_jade_serpent_unity_within.up
actions.default_st+=/whirling_dragon_punch,if=buff.power_infusion.up&(!buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_unity_within.remains<2)
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.remains<1&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.up&talent.celestial_conduit
actions.default_st+=/fists_of_fury,if=buff.heart_of_the_jade_serpent.remains<1&buff.heart_of_the_jade_serpent.up|buff.flurry_charge.stack=30&!buff.zenith.up
actions.default_st+=/whirling_dragon_punch,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/tiger_palm,if=chi<3-1*!talent.ascension+1*talent.celestial_conduit+1*(buff.tigereye_brew_1.stack<15&time>60&time<120)&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&(!buff.bloodlust.up|chi<2)&buff.combo_breaker.stack<2
actions.default_st+=/strike_of_the_windlord,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/rising_sun_kick,if=!buff.bloodlust.up&!buff.zenith.up&(chi>4|energy>50|cooldown.fists_of_fury.remains>5)|buff.zenith.up&buff.zenith.remains<2&combo_strike
actions.default_st+=/fists_of_fury,if=combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)&buff.bloodlust.up|buff.bloodlust.up&talent.flurry_strikes|!buff.zenith.up&(talent.flurry_strikes|cooldown.invoke_xuen_the_white_tiger.remains>3|!variable.patchwerk)|buff.zenith.up&(talent.flurry_strikes|!buff.bloodlust.up)&(variable.patchwerk|target.time_to_die>5)
actions.default_st+=/rushing_wind_kick
actions.default_st+=/rising_sun_kick,if=combo_strike&buff.bloodlust.up|combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.default_st+=/fists_of_fury,if=buff.bloodlust.up|combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.default_st+=/tiger_palm,if=buff.zenith.up&chi<2&talent.celestial_conduit&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)&!cooldown.fists_of_fury.remains&combo_strike
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.remains<5&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.up|combo_strike&buff.dance_of_chiji.stack=2&buff.combo_breaker.stack<2&talent.sequenced_strikes&(talent.flurry_strikes|!buff.bloodlust.up)
actions.default_st+=/rising_sun_kick,if=buff.zenith.up&talent.flurry_strikes&!cooldown.fists_of_fury.remains
actions.default_st+=/rising_sun_kick,if=combo_strike
actions.default_st+=/fists_of_fury,if=talent.flurry_strikes|!buff.zenith.up&(talent.flurry_strikes|cooldown.invoke_xuen_the_white_tiger.remains>3|!variable.patchwerk)|buff.bloodlust.up&talent.jadefire_stomp&cooldown.celestial_conduit.remains
actions.default_st+=/rising_sun_kick,if=buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up
actions.default_st+=/touch_of_death,if=!buff.zenith.up|fight_remains<5|((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)
actions.default_st+=/strike_of_the_windlord,if=buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/rising_sun_kick,if=combo_strike&(buff.flurry_charge.stack<30|chi>3|buff.zenith.up|buff.bloodlust.up|energy>50&chi>2)|combo_strike&buff.heart_of_the_jade_serpent.up
actions.default_st+=/tiger_palm,if=combo_strike&buff.zenith.up&(chi<1|chi<2&!buff.combo_breaker.up)&talent.celestial_conduit
actions.default_st+=/zenith_stomp,if=buff.zenith.up&chi<5-1*!talent.ascension&(talent.flurry_strikes|chi<3|buff.zenith.remains<5)&buff.combo_breaker.stack<2&buff.dance_of_chiji.stack<2&(!buff.combo_breaker.up|talent.echo_technique)
actions.default_st+=/blackout_kick,if=combo_strike&buff.zenith.up&chi>1&(talent.obsidian_spiral|cooldown.fists_of_fury.remains|buff.combo_breaker.up)&(chi<6|buff.combo_breaker.up|cooldown.rising_sun_kick.remains<3)
actions.default_st+=/blackout_kick,if=combo_strike&buff.combo_breaker.up
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&talent.sequenced_strikes
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.zenith.up&talent.flurry_strikes&chi>3+1*!talent.ascension
actions.default_st+=/slicing_winds
actions.default_st+=/spinning_crane_kick,if=talent.flurry_strikes&buff.zenith.up&chi>5-1*!talent.ascension&combo_strike|combo_strike&buff.bloodlust.up&buff.dance_of_chiji.up&buff.combo_breaker.stack<2
actions.default_st+=/tiger_palm,if=combo_strike&((energy>55&talent.inner_peace|energy>60&!talent.inner_peace)&chi.max-chi>=3-1*talent.celestial_conduit&(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up|(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up&!cooldown.fists_of_fury.remains&chi<3)

# Fallback
actions.fallback=blackout_kick,if=combo_strike
actions.fallback+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up
actions.fallback+=/spinning_crane_kick,if=chi>5&combo_strike&talent.flurry_strikes
actions.fallback+=/tiger_palm,if=combo_strike
actions.fallback+=/spinning_crane_kick,if=chi>5&combo_strike

# Multi Target
actions.multitarget=fists_of_fury,target_if=max:target.time_to_die,if=buff.heart_of_the_jade_serpent.remains<1&buff.heart_of_the_jade_serpent.up
actions.multitarget+=/zenith_stomp,target_if=max:target.time_to_die,if=buff.zenith.up&(buff.zenith.remains<5&buff.zenith_stomp.stack=2|buff.zenith.remains<4)|talent.celestial_conduit&chi<5&!buff.heart_of_the_jade_serpent_unity_within.up
actions.multitarget+=/whirling_dragon_punch,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/whirling_dragon_punch,target_if=max:target.time_to_die,if=!buff.heart_of_the_jade_serpent_unity_within.up&buff.whirling_dragon_punch.remains<1
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=buff.zenith.up&chi<2&talent.celestial_conduit&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)&!cooldown.fists_of_fury.remains&combo_strike
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&!buff.bloodlust.up&buff.combo_breaker.stack<2|combo_strike&chi<3-1*buff.zenith.up&!cooldown.fists_of_fury.remains&(!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith_stomp.up
actions.multitarget+=/strike_of_the_windlord,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/fists_of_fury,target_if=max:target.time_to_die,if=buff.flurry_charge.stack=30&!buff.zenith.up|buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|talent.flurry_strikes
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.remains<3
actions.multitarget+=/rushing_wind_kick,target_if=max:target.time_to_die
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=(active_enemies<5|cooldown.fists_of_fury.remains>1|buff.zenith.up)&(buff.rushing_wind_kick.up|buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up)
actions.multitarget+=/zenith_stomp,target_if=max:target.time_to_die,if=buff.zenith.up&chi<5-1*!talent.ascension&(talent.flurry_strikes|chi<3|buff.zenith.remains<5)&buff.combo_breaker.stack<2&buff.dance_of_chiji.stack<2&(!buff.combo_breaker.up|talent.echo_technique)
actions.multitarget+=/touch_of_death,target_if=min:target.time_to_die,if=!buff.zenith.up|fight_remains<5|((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)
actions.multitarget+=/strike_of_the_windlord,if=buff.zenith.up|cooldown.zenith.remains>5&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/whirling_dragon_punch,if=buff.zenith.up|cooldown.zenith.remains>5&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/fists_of_fury,target_if=max:target.time_to_die,if=talent.flurry_strikes|!buff.zenith.up|buff.bloodlust.up&talent.jadefire_stomp&cooldown.celestial_conduit.remains
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.stack=2&buff.combo_breaker.stack<2&talent.sequenced_strikes
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=(active_enemies<5|cooldown.fists_of_fury.remains>1|buff.zenith.up)&(combo_strike&(buff.flurry_charge.stack<30|chi>3|buff.zenith.up|buff.bloodlust.up|energy>50&chi>2)|combo_strike&buff.heart_of_the_jade_serpent.up)
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=talent.flurry_strikes&buff.zenith.up&chi>3&combo_strike&(!talent.shadowboxing_treads|active_enemies>3)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.zenith.up&chi>1&(talent.obsidian_spiral|buff.combo_breaker.up|cooldown.rising_sun_kick.remains<3&cooldown.rising_sun_kick.remains|talent.shadowboxing_treads&cooldown.rising_sun_kick.remains)&chi<6
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.remains<4
actions.multitarget+=/slicing_winds
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=talent.flurry_strikes&buff.zenith.up&chi>3&combo_strike
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&(buff.dance_of_chiji.up|(chi>2|energy>55))&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains&!talent.shadowboxing_treads&!buff.zenith.up
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&!buff.bloodlust.up
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.stack=2
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&buff.dance_of_chiji.stack=2
actions.multitarget+=/spinning_crane_kick,if=combo_strike&!buff.zenith.up&chi>5&buff.combo_breaker.up&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&active_enemies<3
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=combo_strike&((energy>55&talent.inner_peace|energy>60&!talent.inner_peace)&chi.max-chi>=2&(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up|(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up&!cooldown.fists_of_fury.remains&chi<3)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&talent.shadowboxing_treads
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&(chi>3|energy>55)&(!talent.shadowboxing_treads&active_enemies>2|active_enemies>5)&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=combo_strike
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&chi>2

# Opener
actions.opener=tiger_palm,if=combo_strike&chi<4
actions.opener+=/use_item,name=algethar_puzzle_box,if=target.time_to_die>25&(cooldown.invoke_xuen_the_white_tiger.remains<2|talent.flurry_strikes&cooldown.zenith.up)|fight_remains<25

# Racials (Good)
actions.racials=berserking,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/ancestral_call,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/blood_fury,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/fireblood,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20

# Use Weapon
actions.trinket=use_item,slot=main_hand
# Use Algethar
actions.trinket+=/use_item,name=algethar_puzzle_box,if=fight_remains>5&(!buff.zenith.up&!talent.flurry_strikes&(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25)&(cooldown.potion.remains>30|fight_remains<45|fight_remains>80)&(cooldown.invoke_xuen_the_white_tiger.remains<2|talent.flurry_strikes&cooldown.zenith.up)|fight_remains<25|talent.flurry_strikes&(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25)&!buff.zenith.up|fight_style.dungeonslice&(time<5&chi>3|active_enemies>3&target.time_to_die>15))
# Stat on use with passive or DMG on use
actions.trinket+=/use_item,slot=trinket1,if=trinket.1.has_use_buff&!trinket.2.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
actions.trinket+=/use_item,slot=trinket2,if=trinket.2.has_use_buff&!trinket.1.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
# Stat on use with Stat on use
actions.trinket+=/use_item,slot=trinket1,if=trinket.1.has_use_buff&trinket.2.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
actions.trinket+=/use_item,slot=trinket2,if=trinket.1.has_use_buff&trinket.2.has_use_buff&(cooldown.invoke_xuen_the_white_tiger.remains>30&(buff.zenith.up|(cooldown.strike_of_the_windlord.remains<2&talent.strike_of_the_windlord|cooldown.whirling_dragon_punch.remains<2&talent.whirling_dragon_punch))|talent.flurry_strikes&buff.zenith.remains>10)
# DMG on use with stat on use
actions.trinket+=/use_item,slot=trinket1,if=!trinket.1.has_use_buff&trinket.2.has_use_buff&trinket.2.cooldown.remains>30
actions.trinket+=/use_item,slot=trinket2,if=!trinket.2.has_use_buff&trinket.1.has_use_buff&trinket.1.cooldown.remains>30
# DMG on use without stat on use
actions.trinket+=/use_item,slot=trinket1,if=!trinket.1.has_use_buff&!trinket.2.has_use_buff
actions.trinket+=/use_item,slot=trinket2,if=!trinket.1.has_use_buff&!trinket.2.has_use_buff

# Zenith Usage
actions.zenith=zenith,target_if=max:target.time_to_die,if=buff.invoke_xuen_the_white_tiger.up&(!buff.zenith.up|talent.flurry_strikes)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=buff.bloodlust.remains>30&(active_enemies>2|cooldown.rising_sun_kick.remains)&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(buff.bloodlust.up&cooldown.celestial_conduit.remains&(cooldown.rising_sun_kick.remains|active_enemies>2)&!buff.zenith.up&talent.celestial_conduit)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(talent.flurry_strikes&(buff.bloodlust.up|cooldown.potion.remains>295))&!buff.zenith.up&(buff.bloodlust.remains>30|talent.spiritual_focus)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=time>250&cooldown.potion.remains>295&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&trinket.1.cooldown.remains>30|trinket.2.has_use_buff&trinket.2.cooldown.remains>30)&(fight_remains>120|fight_remains<50&fight_remains>cooldown.zenith.full_recharge_time)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&talent.flurry_strikes&!trinket.1.has_use_buff&!trinket.2.has_use_buff&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains<5&(cooldown.whirling_dragon_punch.remains<10|cooldown.strike_of_the_windlord.remains<10)&cooldown.zenith.full_recharge_time<40&!fight_style.dungeonslice&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(!buff.bloodlust.up&(trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)&(cooldown.rising_sun_kick.remains|active_enemies>2|talent.drinking_horn_cover&chi<2))&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(variable.patchwerk|fight_style.dungeonroute&target.time_to_die>27+5*talent.drinking_horn_cover)&talent.flurry_strikes&(buff.tigereye_brew_1.stack>19-2*talent.echo_technique|buff.tigereye_brew_1.stack>11&talent.spiritual_focus-2*talent.echo_technique)&(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(cooldown.rising_sun_kick.remains|active_enemies>1)&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&(trinket.1.cooldown.remains>40|trinket.1.cooldown.remains>30&talent.spiritual_focus)|trinket.2.has_use_buff&(trinket.2.cooldown.remains>40|trinket.2.cooldown.remains>30&talent.spiritual_focus))&(talent.strike_of_the_windlord&cooldown.strike_of_the_windlord.remains<15-5*talent.revolving_whirl&talent.drinking_horn_cover|talent.whirling_dragon_punch&cooldown.whirling_dragon_punch.remains<15-7*talent.revolving_whirl&talent.drinking_horn_cover|talent.strike_of_the_windlord&cooldown.strike_of_the_windlord.remains<10|talent.whirling_dragon_punch&cooldown.whirling_dragon_punch.remains<10)&cooldown.fists_of_fury.remains<9+4*talent.spiritual_focus
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(cooldown.rising_sun_kick.remains|active_enemies>2)&fight_style.dungeonslice&time>130&time<150&active_enemies>1&talent.flurry_strikes&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_style.dungeonslice&target.time_to_die>15&active_enemies>4&(talent.flurry_strikes|talent.celestial_conduit&talent.restore_balance&cooldown.invoke_xuen_the_white_tiger.remains<cooldown.zenith.full_recharge_time)&!variable.patchwerk&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(talent.celestial_conduit&fight_remains<cooldown.invoke_xuen_the_white_tiger.remains&(cooldown.rising_sun_kick.remains|active_enemies>2)&(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute|target.time_to_die>15&active_enemies>4)&!variable.patchwerk)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&talent.flurry_strikes&fight_style.dungeonroute&cooldown.zenith.full_recharge_time<30&target.time_to_die>25
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=variable.patchwerk&!buff.zenith.up&cooldown.fists_of_fury.remains<10&(cooldown.whirling_dragon.remains<10|cooldown.strike_of_the_windlord.remains<10)&(cooldown.rising_sun_kick.remains|chi<2&energy<50|active_enemies>1)&cooldown.zenith.full_recharge_time<30&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&trinket.1.cooldown.remains>30|trinket.2.has_use_buff&trinket.2.cooldown.remains>30)&(fight_remains>120|fight_remains<50&fight_remains>cooldown.zenith.full_recharge_time)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_remains<=24&(cooldown.rising_sun_kick.remains|active_enemies>2)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_remains<45&cooldown.zenith.full_recharge_time<5&(cooldown.rising_sun_kick.remains|active_enemies>1)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(variable.patchwerk&!trinket.1.is.algethar_puzzle_box&!trinket.2.is.algethar_puzzle_box&trinket.1.has_use_buff&(trinket.1.cooldown.ready|cooldown.zenith.full_recharge_time<5))
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(variable.patchwerk&!trinket.1.is.algethar_puzzle_box&!trinket.2.is.algethar_puzzle_box&trinket.2.has_use_buff&(trinket.2.cooldown.ready|cooldown.zenith.full_recharge_time<5))
```

---

### Action Priority List — Conduit of the Celestials

```
actions.precombat=snapshot_stats
actions.precombat+=/use_item,name=algethar_puzzle_box,if=!talent.flurry_strikes&(trinket.1.is.algethar_puzzle_box|trinket.2.is.algethar_puzzle_box)
actions.precombat+=/variable,name=patchwerk,value=fight_style.patchwerk|fight_style.castingpatchwerk

# Executed every time the actor is available.
# Default List
actions=auto_attack,target_if=max:target.time_to_die
actions+=/touch_of_karma,target_if=max:target.time_to_die
# Move to target
actions+=/roll,if=movement.distance>5
actions+=/chi_torpedo,if=movement.distance>5
actions+=/flying_serpent_kick,if=movement.distance>5
actions+=/spear_hand_strike,if=target.debuff.casting.react
actions+=/potion,if=buff.invoke_xuen_the_white_tiger.remains>15|fight_remains<=30
actions+=/potion,if=talent.flurry_strikes&chi>2&(time<5|cooldown.zenith.up&time<5|time>300&((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)&talent.flurry_strikes|time>300&buff.zenith.up)
# Enable PI if available
actions+=/variable,name=has_external_pi,value=cooldown.invoke_power_infusion_0.duration>0
actions+=/call_action_list,name=opener,if=time<2
actions+=/call_action_list,name=trinket
actions+=/invoke_external_buff,name=power_infusion,if=buff.zenith.up&(buff.invoke_xuen_the_white_tiger.up|talent.flurry_strikes)
actions+=/call_action_list,name=big_coc,if=talent.celestial_conduit
actions+=/call_action_list,name=zenith
actions+=/call_action_list,name=racials
actions+=/call_action_list,name=default_st,if=active_enemies=1
actions+=/call_action_list,name=multitarget,if=active_enemies>1
actions+=/call_action_list,name=fallback
actions+=/arcane_torrent,if=chi<chi.max&energy<55
actions+=/thorn_bloom
actions+=/haymaker
actions+=/bag_of_tricks
actions+=/arcane_pulse
actions+=/rocket_barrage
actions+=/lights_judgment

# Celestial of the Conduit Burst Windows
actions.big_coc=invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&((cooldown.zenith.up|buff.zenith.remains>13)&!buff.heart_of_the_jade_serpent.up)&(!fight_style.dungeonslice|active_enemies>1|time<60)
actions.big_coc+=/invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)&(!fight_style.dungeonslice|active_enemies>1|time<60)
actions.big_coc+=/invoke_xuen_the_white_tiger,target_if=max:target.time_to_die,if=fight_style.dungeonslice&target.time_to_die>15&active_enemies>4|fight_remains<=25
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.remains<12&buff.zenith.up&(!buff.bloodlust.up|buff.power_infusion.up)|fight_remains<4
actions.big_coc+=/whirling_dragon_punch,if=buff.power_infusion.up&(!buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_unity_within.remains<2)
actions.big_coc+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&talent.celestial_conduit&buff.zenith.remains>11&chi<=2&cooldown.rising_sun_kick.remains&!buff.rushing_wind_kick.up&talent.obsidian_spiral&buff.combo_breaker.up
actions.big_coc+=/tiger_palm,target_if=max:target.time_to_die,if=combo_strike&talent.celestial_conduit&buff.zenith.remains>11&chi<=2&cooldown.rising_sun_kick.remains&!buff.rushing_wind_kick.up&(!talent.obsidian_spiral|!buff.combo_breaker.up|prev.blackout_kick)
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&(cooldown.rising_sun_kick.remains|active_enemies>2)&cooldown.fists_of_fury.remains&(cooldown.strike_of_the_windlord.remains|talent.whirling_dragon_punch)&(cooldown.whirling_dragon_punch.remains|talent.strike_of_the_windlord)&!buff.rushing_wind_kick.up&!buff.combo_breaker.up&chi>1&(!buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent.remains<4)
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&!buff.heart_of_the_jade_serpent.up&!buff.heart_of_the_jade_serpent_yulons_avatar.up&chi>1&(cooldown.rising_sun_kick.remains|active_enemies>2)&(cooldown.strike_of_the_windlord.remains|(cooldown.whirling_dragon_punch.remains|cooldown.fists_of_fury.remains))
actions.big_coc+=/celestial_conduit,target_if=max:target.time_to_die,if=buff.zenith.up&buff.heart_of_the_jade_serpent.remains<2&prev.rising_sun_kick&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains&buff.heart_of_the_jade_serpent.up&chi>1

# Single Target
actions.default_st=whirling_dragon_punch,if=!buff.heart_of_the_jade_serpent_unity_within.up&buff.whirling_dragon_punch.remains<1&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|talent.flurry_strikes|!variable.patchwerk)
actions.default_st+=/zenith_stomp,if=buff.zenith.up&(buff.zenith.remains<5&buff.zenith_stomp.stack=2|buff.zenith.remains<4)|talent.celestial_conduit&chi<5&!buff.heart_of_the_jade_serpent_unity_within.up
actions.default_st+=/whirling_dragon_punch,if=buff.power_infusion.up&(!buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_unity_within.remains<2)
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.remains<1&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.up&talent.celestial_conduit
actions.default_st+=/fists_of_fury,if=buff.heart_of_the_jade_serpent.remains<1&buff.heart_of_the_jade_serpent.up|buff.flurry_charge.stack=30&!buff.zenith.up
actions.default_st+=/whirling_dragon_punch,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/tiger_palm,if=chi<3-1*!talent.ascension+1*talent.celestial_conduit+1*(buff.tigereye_brew_1.stack<15&time>60&time<120)&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&(!buff.bloodlust.up|chi<2)&buff.combo_breaker.stack<2
actions.default_st+=/strike_of_the_windlord,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/rising_sun_kick,if=!buff.bloodlust.up&!buff.zenith.up&(chi>4|energy>50|cooldown.fists_of_fury.remains>5)|buff.zenith.up&buff.zenith.remains<2&combo_strike
actions.default_st+=/fists_of_fury,if=combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)&buff.bloodlust.up|buff.bloodlust.up&talent.flurry_strikes|!buff.zenith.up&(talent.flurry_strikes|cooldown.invoke_xuen_the_white_tiger.remains>3|!variable.patchwerk)|buff.zenith.up&(talent.flurry_strikes|!buff.bloodlust.up)&(variable.patchwerk|target.time_to_die>5)
actions.default_st+=/rushing_wind_kick
actions.default_st+=/rising_sun_kick,if=combo_strike&buff.bloodlust.up|combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.default_st+=/fists_of_fury,if=buff.bloodlust.up|combo_strike&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.default_st+=/tiger_palm,if=buff.zenith.up&chi<2&talent.celestial_conduit&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)&!cooldown.fists_of_fury.remains&combo_strike
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.remains<5&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.up|combo_strike&buff.dance_of_chiji.stack=2&buff.combo_breaker.stack<2&talent.sequenced_strikes&(talent.flurry_strikes|!buff.bloodlust.up)
actions.default_st+=/rising_sun_kick,if=buff.zenith.up&talent.flurry_strikes&!cooldown.fists_of_fury.remains
actions.default_st+=/rising_sun_kick,if=combo_strike
actions.default_st+=/fists_of_fury,if=talent.flurry_strikes|!buff.zenith.up&(talent.flurry_strikes|cooldown.invoke_xuen_the_white_tiger.remains>3|!variable.patchwerk)|buff.bloodlust.up&talent.jadefire_stomp&cooldown.celestial_conduit.remains
actions.default_st+=/rising_sun_kick,if=buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up
actions.default_st+=/touch_of_death,if=!buff.zenith.up|fight_remains<5|((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)
actions.default_st+=/strike_of_the_windlord,if=buff.heart_of_the_jade_serpent_unity_within.remains<2&(buff.zenith.up|cooldown.invoke_xuen_the_white_tiger.remains>5|!variable.patchwerk)|talent.flurry_strikes
actions.default_st+=/rising_sun_kick,if=combo_strike&(buff.flurry_charge.stack<30|chi>3|buff.zenith.up|buff.bloodlust.up|energy>50&chi>2)|combo_strike&buff.heart_of_the_jade_serpent.up
actions.default_st+=/tiger_palm,if=combo_strike&buff.zenith.up&(chi<1|chi<2&!buff.combo_breaker.up)&talent.celestial_conduit
actions.default_st+=/zenith_stomp,if=buff.zenith.up&chi<5-1*!talent.ascension&(talent.flurry_strikes|chi<3|buff.zenith.remains<5)&buff.combo_breaker.stack<2&buff.dance_of_chiji.stack<2&(!buff.combo_breaker.up|talent.echo_technique)
actions.default_st+=/blackout_kick,if=combo_strike&buff.zenith.up&chi>1&(talent.obsidian_spiral|cooldown.fists_of_fury.remains|buff.combo_breaker.up)&(chi<6|buff.combo_breaker.up|cooldown.rising_sun_kick.remains<3)
actions.default_st+=/blackout_kick,if=combo_strike&buff.combo_breaker.up
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&talent.sequenced_strikes
actions.default_st+=/spinning_crane_kick,if=combo_strike&buff.zenith.up&talent.flurry_strikes&chi>3+1*!talent.ascension
actions.default_st+=/slicing_winds
actions.default_st+=/spinning_crane_kick,if=talent.flurry_strikes&buff.zenith.up&chi>5-1*!talent.ascension&combo_strike|combo_strike&buff.bloodlust.up&buff.dance_of_chiji.up&buff.combo_breaker.stack<2
actions.default_st+=/tiger_palm,if=combo_strike&((energy>55&talent.inner_peace|energy>60&!talent.inner_peace)&chi.max-chi>=3-1*talent.celestial_conduit&(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up|(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up&!cooldown.fists_of_fury.remains&chi<3)

# Fallback
actions.fallback=blackout_kick,if=combo_strike
actions.fallback+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up
actions.fallback+=/spinning_crane_kick,if=chi>5&combo_strike&talent.flurry_strikes
actions.fallback+=/tiger_palm,if=combo_strike
actions.fallback+=/spinning_crane_kick,if=chi>5&combo_strike

# Multi Target
actions.multitarget=fists_of_fury,target_if=max:target.time_to_die,if=buff.heart_of_the_jade_serpent.remains<1&buff.heart_of_the_jade_serpent.up
actions.multitarget+=/zenith_stomp,target_if=max:target.time_to_die,if=buff.zenith.up&(buff.zenith.remains<5&buff.zenith_stomp.stack=2|buff.zenith.remains<4)|talent.celestial_conduit&chi<5&!buff.heart_of_the_jade_serpent_unity_within.up
actions.multitarget+=/whirling_dragon_punch,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/whirling_dragon_punch,target_if=max:target.time_to_die,if=!buff.heart_of_the_jade_serpent_unity_within.up&buff.whirling_dragon_punch.remains<1
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=buff.zenith.up&chi<2&talent.celestial_conduit&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)&!cooldown.fists_of_fury.remains&combo_strike
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&!buff.bloodlust.up&buff.combo_breaker.stack<2|combo_strike&chi<3-1*buff.zenith.up&!cooldown.fists_of_fury.remains&(!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith_stomp.up
actions.multitarget+=/strike_of_the_windlord,if=talent.celestial_conduit&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/fists_of_fury,target_if=max:target.time_to_die,if=buff.flurry_charge.stack=30&!buff.zenith.up|buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up|talent.flurry_strikes
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.remains<3
actions.multitarget+=/rushing_wind_kick,target_if=max:target.time_to_die
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=(active_enemies<5|cooldown.fists_of_fury.remains>1|buff.zenith.up)&(buff.rushing_wind_kick.up|buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up|buff.heart_of_the_jade_serpent_yulons_avatar.up)
actions.multitarget+=/zenith_stomp,target_if=max:target.time_to_die,if=buff.zenith.up&chi<5-1*!talent.ascension&(talent.flurry_strikes|chi<3|buff.zenith.remains<5)&buff.combo_breaker.stack<2&buff.dance_of_chiji.stack<2&(!buff.combo_breaker.up|talent.echo_technique)
actions.multitarget+=/touch_of_death,target_if=min:target.time_to_die,if=!buff.zenith.up|fight_remains<5|((trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)|!trinket.1.has_use_buff&!trinket.2.has_use_buff)
actions.multitarget+=/strike_of_the_windlord,if=buff.zenith.up|cooldown.zenith.remains>5&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/whirling_dragon_punch,if=buff.zenith.up|cooldown.zenith.remains>5&buff.heart_of_the_jade_serpent_unity_within.remains<2
actions.multitarget+=/fists_of_fury,target_if=max:target.time_to_die,if=talent.flurry_strikes|!buff.zenith.up|buff.bloodlust.up&talent.jadefire_stomp&cooldown.celestial_conduit.remains
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.stack=2&buff.combo_breaker.stack<2&talent.sequenced_strikes
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=(active_enemies<5|cooldown.fists_of_fury.remains>1|buff.zenith.up)&(combo_strike&(buff.flurry_charge.stack<30|chi>3|buff.zenith.up|buff.bloodlust.up|energy>50&chi>2)|combo_strike&buff.heart_of_the_jade_serpent.up)
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=talent.flurry_strikes&buff.zenith.up&chi>3&combo_strike&(!talent.shadowboxing_treads|active_enemies>3)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.zenith.up&chi>1&(talent.obsidian_spiral|buff.combo_breaker.up|cooldown.rising_sun_kick.remains<3&cooldown.rising_sun_kick.remains|talent.shadowboxing_treads&cooldown.rising_sun_kick.remains)&chi<6
actions.multitarget+=/spinning_crane_kick,if=combo_strike&buff.dance_of_chiji.up&buff.combo_breaker.stack<2&talent.sequenced_strikes&buff.dance_of_chiji.remains<4
actions.multitarget+=/slicing_winds
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=talent.flurry_strikes&buff.zenith.up&chi>3&combo_strike
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&(buff.dance_of_chiji.up|(chi>2|energy>55))&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains&!talent.shadowboxing_treads&!buff.zenith.up
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up&(buff.heart_of_the_jade_serpent.up|buff.heart_of_the_jade_serpent_unity_within.up)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&!buff.bloodlust.up
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.stack=2
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&buff.dance_of_chiji.stack=2
actions.multitarget+=/spinning_crane_kick,if=combo_strike&!buff.zenith.up&chi>5&buff.combo_breaker.up&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&buff.combo_breaker.up
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=chi<5&combo_strike&energy.time_to_max<=gcd.max*3&!buff.zenith.up&active_enemies<3
actions.multitarget+=/tiger_palm,target_if=max:target.time_to_die,if=combo_strike&((energy>55&talent.inner_peace|energy>60&!talent.inner_peace)&chi.max-chi>=2&(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up|(talent.energy_burst&!buff.combo_breaker.up|!talent.energy_burst)&!buff.zenith.up&!cooldown.fists_of_fury.remains&chi<3)
actions.multitarget+=/blackout_kick,target_if=max:target.time_to_die,if=combo_strike&talent.shadowboxing_treads
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&(chi>3|energy>55)&(!talent.shadowboxing_treads&active_enemies>2|active_enemies>5)&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains
actions.multitarget+=/rising_sun_kick,target_if=max:target.time_to_die,if=combo_strike
actions.multitarget+=/spinning_crane_kick,target_if=max:target.time_to_die,if=combo_strike&chi>2

# Opener
actions.opener=tiger_palm,if=combo_strike&chi<4
actions.opener+=/use_item,name=algethar_puzzle_box,if=target.time_to_die>25&(cooldown.invoke_xuen_the_white_tiger.remains<2|talent.flurry_strikes&cooldown.zenith.up)|fight_remains<25

# Racials (Good)
actions.racials=berserking,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/ancestral_call,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/blood_fury,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20
actions.racials+=/fireblood,if=buff.invoke_xuen_the_white_tiger.remains>15|!talent.invoke_xuen_the_white_tiger&buff.zenith.remains>14|fight_remains<20

# Use Weapon
actions.trinket=use_item,slot=main_hand
# Use Algethar
actions.trinket+=/use_item,name=algethar_puzzle_box,if=fight_remains>5&(!buff.zenith.up&!talent.flurry_strikes&(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25)&(cooldown.potion.remains>30|fight_remains<45|fight_remains>80)&(cooldown.invoke_xuen_the_white_tiger.remains<2|talent.flurry_strikes&cooldown.zenith.up)|fight_remains<25|talent.flurry_strikes&(target.time_to_die>35&fight_style.dungeonroute|target.time_to_die>25)&!buff.zenith.up|fight_style.dungeonslice&(time<5&chi>3|active_enemies>3&target.time_to_die>15))
# Stat on use with passive or DMG on use
actions.trinket+=/use_item,slot=trinket1,if=trinket.1.has_use_buff&!trinket.2.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
actions.trinket+=/use_item,slot=trinket2,if=trinket.2.has_use_buff&!trinket.1.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
# Stat on use with Stat on use
actions.trinket+=/use_item,slot=trinket1,if=trinket.1.has_use_buff&trinket.2.has_use_buff&(pet.xuen_the_white_tiger.active&talent.invoke_xuen_the_white_tiger|talent.flurry_strikes&buff.zenith.remains>14)
actions.trinket+=/use_item,slot=trinket2,if=trinket.1.has_use_buff&trinket.2.has_use_buff&(cooldown.invoke_xuen_the_white_tiger.remains>30&(buff.zenith.up|(cooldown.strike_of_the_windlord.remains<2&talent.strike_of_the_windlord|cooldown.whirling_dragon_punch.remains<2&talent.whirling_dragon_punch))|talent.flurry_strikes&buff.zenith.remains>10)
# DMG on use with stat on use
actions.trinket+=/use_item,slot=trinket1,if=!trinket.1.has_use_buff&trinket.2.has_use_buff&trinket.2.cooldown.remains>30
actions.trinket+=/use_item,slot=trinket2,if=!trinket.2.has_use_buff&trinket.1.has_use_buff&trinket.1.cooldown.remains>30
# DMG on use without stat on use
actions.trinket+=/use_item,slot=trinket1,if=!trinket.1.has_use_buff&!trinket.2.has_use_buff
actions.trinket+=/use_item,slot=trinket2,if=!trinket.1.has_use_buff&!trinket.2.has_use_buff

# Zenith Usage
actions.zenith=zenith,target_if=max:target.time_to_die,if=buff.invoke_xuen_the_white_tiger.up&(!buff.zenith.up|talent.flurry_strikes)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=buff.bloodlust.remains>30&(active_enemies>2|cooldown.rising_sun_kick.remains)&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(buff.bloodlust.up&cooldown.celestial_conduit.remains&(cooldown.rising_sun_kick.remains|active_enemies>2)&!buff.zenith.up&talent.celestial_conduit)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(talent.flurry_strikes&(buff.bloodlust.up|cooldown.potion.remains>295))&!buff.zenith.up&(buff.bloodlust.remains>30|talent.spiritual_focus)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=time>250&cooldown.potion.remains>295&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&trinket.1.cooldown.remains>30|trinket.2.has_use_buff&trinket.2.cooldown.remains>30)&(fight_remains>120|fight_remains<50&fight_remains>cooldown.zenith.full_recharge_time)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&talent.flurry_strikes&!trinket.1.has_use_buff&!trinket.2.has_use_buff&cooldown.rising_sun_kick.remains&cooldown.fists_of_fury.remains<5&(cooldown.whirling_dragon_punch.remains<10|cooldown.strike_of_the_windlord.remains<10)&cooldown.zenith.full_recharge_time<40&!fight_style.dungeonslice&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(!buff.bloodlust.up&(trinket.1.is.algethar_puzzle_box&trinket.1.cooldown.remains>100|trinket.2.is.algethar_puzzle_box&trinket.2.cooldown.remains>100)&(cooldown.rising_sun_kick.remains|active_enemies>2|talent.drinking_horn_cover&chi<2))&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(variable.patchwerk|fight_style.dungeonroute&target.time_to_die>27+5*talent.drinking_horn_cover)&talent.flurry_strikes&(buff.tigereye_brew_1.stack>19-2*talent.echo_technique|buff.tigereye_brew_1.stack>11&talent.spiritual_focus-2*talent.echo_technique)&(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute)&(cooldown.rising_sun_kick.remains|active_enemies>1)&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&(trinket.1.cooldown.remains>40|trinket.1.cooldown.remains>30&talent.spiritual_focus)|trinket.2.has_use_buff&(trinket.2.cooldown.remains>40|trinket.2.cooldown.remains>30&talent.spiritual_focus))&(talent.strike_of_the_windlord&cooldown.strike_of_the_windlord.remains<15-5*talent.revolving_whirl&talent.drinking_horn_cover|talent.whirling_dragon_punch&cooldown.whirling_dragon_punch.remains<15-7*talent.revolving_whirl&talent.drinking_horn_cover|talent.strike_of_the_windlord&cooldown.strike_of_the_windlord.remains<10|talent.whirling_dragon_punch&cooldown.whirling_dragon_punch.remains<10)&cooldown.fists_of_fury.remains<9+4*talent.spiritual_focus
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=(cooldown.rising_sun_kick.remains|active_enemies>2)&fight_style.dungeonslice&time>130&time<150&active_enemies>1&talent.flurry_strikes&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_style.dungeonslice&target.time_to_die>15&active_enemies>4&(talent.flurry_strikes|talent.celestial_conduit&talent.restore_balance&cooldown.invoke_xuen_the_white_tiger.remains<cooldown.zenith.full_recharge_time)&!variable.patchwerk&!buff.zenith.up
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(talent.celestial_conduit&fight_remains<cooldown.invoke_xuen_the_white_tiger.remains&(cooldown.rising_sun_kick.remains|active_enemies>2)&(target.time_to_die>30&fight_style.dungeonroute|target.time_to_die>25&!fight_style.dungeonroute|target.time_to_die>15&active_enemies>4)&!variable.patchwerk)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&talent.flurry_strikes&fight_style.dungeonroute&cooldown.zenith.full_recharge_time<30&target.time_to_die>25
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=variable.patchwerk&!buff.zenith.up&cooldown.fists_of_fury.remains<10&(cooldown.whirling_dragon.remains<10|cooldown.strike_of_the_windlord.remains<10)&(cooldown.rising_sun_kick.remains|chi<2&energy<50|active_enemies>1)&cooldown.zenith.full_recharge_time<30&(!trinket.1.has_use_buff&!trinket.2.has_use_buff|trinket.1.has_use_buff&trinket.1.cooldown.remains>30|trinket.2.has_use_buff&trinket.2.cooldown.remains>30)&(fight_remains>120|fight_remains<50&fight_remains>cooldown.zenith.full_recharge_time)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_remains<=24&(cooldown.rising_sun_kick.remains|active_enemies>2)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=fight_remains<45&cooldown.zenith.full_recharge_time<5&(cooldown.rising_sun_kick.remains|active_enemies>1)
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(variable.patchwerk&!trinket.1.is.algethar_puzzle_box&!trinket.2.is.algethar_puzzle_box&trinket.1.has_use_buff&(trinket.1.cooldown.ready|cooldown.zenith.full_recharge_time<5))
actions.zenith+=/zenith,target_if=max:target.time_to_die,if=!buff.zenith.up&(variable.patchwerk&!trinket.1.is.algethar_puzzle_box&!trinket.2.is.algethar_puzzle_box&trinket.2.has_use_buff&(trinket.2.cooldown.ready|cooldown.zenith.full_recharge_time<5))
```

## Confirmed Spell IDs (SimulationCraft HTML)

IDs sourced from `spell-ids-reference.json` (SimulationCraft Midnight 12.0.5 HTML report). Exact key matches only — no fuzzy matching. Abilities named in this guide that appear in the reference are listed below.

| Ability | Spell ID(s) | School | Type |
|---|---|---|---|
| Tiger Palm | 100780 | physical | cast |
| Blackout Kick | 100784, 228649, 205523 (multiple: base cast + variants) | physical | cast |
| Rising Sun Kick | 107428, 185099 (multiple: base cast + variants) | physical | cast |
| Fists of Fury | 113656, 117418 (multiple: base cast + variants) | physical | cast |
| Spinning Crane Kick | 101546, 107270 (multiple: base cast + variants) | physical | cast |
| Touch of Death | 322109 | physical | cast |
| Touch of Karma | 122470 | physical | cast |
| Expel Harm | 115129, 451968, 322101 (multiple: base cast + variants) | nature | cast |
| Invoke Xuen, the White Tiger | 123904 | nature | cast |
| Zenith | 1249625 | physical | cast |
| Flurry Strikes | 450615 | nature | cast |
| Rushing Wind Kick | 467307, 468179 (multiple: base cast + variants) | nature | cast |
| Whirling Dragon Punch | 152175, 158221, 451767 (multiple: base cast + variants) | physical | cast |
| Celestial Conduit | 443028, 443038, 443039 (multiple: base cast + variants) | nature | cast |
| Crackling Tiger Lightning | 123996 | nature | cast |

> Note on IDs now confirmed: **Zenith** (1249625) and **Celestial Conduit** (443028 + variants) are confirmed via the SimC reference — see Known Gaps for the pre-SimC status of these. **Rushing Wind Kick** (467307 + variant) and **Whirling Dragon Punch** (152175 + variants) are also now confirmed. **Strike of the Windlord** and **Slicing Winds** do not appear in the spell-ids-reference.json under those exact names and remain unconfirmed.

Defensives, interrupts, and non-damaging utility are not present in this SimC source; their spell IDs (where known) remain in the sections above.

## Notes and Known Gaps

- **Wowhead guide bodies not fetchable:** The overview and rotation guide pages on Wowhead returned only navigation/header content via fetch, and several individual Wowhead spell pages began returning HTTP 403 (rate-limit) partway through research. Where a Wowhead spell page could not be loaded, the SpellID is omitted and flagged below.
- **Talent strings and APL: now added** — both Shado-Pan and Conduit of the Celestials talent import strings and full action priority lists have been added from the SimulationCraft source. Treat these as the authoritative 12.0.5 SimC reference for those builds.
- **Damage and rotational spell IDs: now confirmed for matched abilities** — Tiger Palm, Blackout Kick, Rising Sun Kick, Fists of Fury, Spinning Crane Kick, Touch of Death, Touch of Karma, Expel Harm, Invoke Xuen, Zenith, Flurry Strikes, Rushing Wind Kick, Whirling Dragon Punch, Celestial Conduit, and Crackling Tiger Lightning are all confirmed via spell-ids-reference.json. The IDs in the Confirmed Spell IDs table above supersede any earlier "unconfirmed" notes for those specific abilities.
- **Unconfirmed SpellIDs (still omitted):**
  - **Strike of the Windlord** — not found in spell-ids-reference.json under that exact name; spell page previously returned 403. ID remains omitted.
  - **Slicing Winds** — not found in spell-ids-reference.json under that exact name; named by Method as rotational but not ID-confirmed. Included as a name only.
  - **Flying Serpent Kick**, **Chi Torpedo**, **Crackling Jade Lightning**, **Disable** — referenced but spell IDs not individually confirmed; omitted.
- **Healing Elixir (122281):** ID confirmed from a prior spell page, but its exact Midnight effect/charges were not fully verified. Treat effect description as approximate.
- **Fortifying Brew cooldown:** The fetched spell page showed ~6 min (likely the un-talented base). Many builds reduce this; treat 6 min as a baseline, not a guarantee.
- **Dampen Harm / Diffuse Magic / Healing Elixir are talents:** Not every Windwalker has them. RaidLens should confirm the ability appears in the player's log before flagging it as an "unused defensive."
- **Detox scope:** Confirmed it removes Poison/Disease. The "self-only for Windwalker" distinction is based on long-standing Monk design (Mistweaver gets the friendly dispel) and general guide framing, not a freshly fetched Windwalker-specific tooltip — re-verify if a dispel assignment depends on it.
- **Consumables/enchants:** Names are from Icy Veins + search corroboration, not fetched item pages; no item IDs confirmed. The per-slot enchant list from Icy Veins looked partly stale (older-expansion names), so only flask/potion/food/weapon-enchant names are treated as reasonably reliable.
- **Maintenance flag:** Re-verify all SpellIDs, cooldowns, talent availability, and consumable names after **any 12.x patch** (e.g. 12.0.7, which appeared as a PTR option on Wowhead during research). Spell IDs do not change once assigned, but tooltips, cooldowns, talent layouts, and consumable item names can.
