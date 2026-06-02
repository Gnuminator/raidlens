# Protection Warrior — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched during research, June 2026):
> - https://www.icy-veins.com/wow/protection-warrior-pve-tank-guide
> - https://www.method.gg/guides/protection-warrior
> - https://maxroll.gg/wow/class-guides/protection-warrior-raid-guide
> - https://www.wowhead.com/spell=6552/pummel (Pummel ID + cooldown confirmed)
> - https://www.wowhead.com/spell=871/shield-wall (Shield Wall ID confirmed)
> - https://www.wowhead.com/spell=23922/shield-slam (Shield Slam ID confirmed)
> - https://www.wowhead.com/spell=2565/shield-block (Shield Block ID confirmed)
> - https://www.wowhead.com/spell=12975/last-stand (Last Stand ID confirmed)
> - https://www.wowhead.com/spell=97462/rallying-cry (Rallying Cry ID + cooldown confirmed)
> - https://www.wowhead.com/spell=23920/spell-reflection (Spell Reflection ID confirmed)
> - https://www.wowhead.com/spell=6673/battle-shout (Battle Shout ID confirmed)
>
> Several individual Wowhead spell pages returned HTTP 403 (rate limiting) during research and could not be confirmed. Where an ID could not be verified against a page I actually loaded, the ability is listed by name only and flagged in "Notes and Known Gaps." No IDs have been guessed or recalled from memory.

---

## Overview

Protection Warrior is a tank spec whose entire playstyle revolves around generating and spending **Rage**. Rage is produced primarily by offensive abilities (Shield Slam, auto-attacks, Revenge) and spent on the active mitigation tools that keep the warrior alive — chiefly **Ignore Pain** (an absorb shield) and **Shield Block** (block-chance/physical-mitigation buff).

Core gameplay loop:
1. Generate Rage with Shield Slam and other rotational hits.
2. Spend that Rage on Ignore Pain and keep Shield Block rolling so physical hits land into mitigation.
3. Layer longer defensive cooldowns (Shield Wall, Demoralizing Shout, Spell Reflection, Last Stand) ahead of predictable burst windows.

**Survivability profile:** Excellent physical-damage mitigation through Shield Block and high block uptime, backed by a deep stack of defensive buttons. Icy Veins and Method both describe the spec as extremely durable, "nearly indestructible" on certain talent configurations.

**Damage profile:** Solid, Rage-driven tank damage built around Shield Slam, Thunder Clap/Thunder Blast, and Revenge, with burst from Avatar and (if talented) Ravager.

**Primary weakness:** Unblockable damage combined with sustained magic damage. Shield Block does nothing against magic, so heavy magic/DoT-based encounters force the warrior to rely on Ignore Pain, Spell Reflection, Shield Wall, and Demoralizing Shout instead of its strongest mitigation. Defensive cooldowns are largely **predictive** — they must be pressed *before* the hit lands, not in reaction to it.

---

## Role in Raid

- **Role:** Tank.
- **Bloodlust/Heroism-equivalent:** None. Protection Warrior does NOT bring a Bloodlust effect.
- **Battle resurrection:** None. Protection Warrior does NOT bring a combat res.
- **Raid buff:** **Battle Shout** (spell ID 6673) — raid-wide attack-power buff (melee and ranged attack power) plus a stamina component, broadcast to allies in range. This is the spec's main passive contribution to raid-wide throughput.
- **Group defensive / external:** **Rallying Cry** (spell ID 97462, 3-minute cooldown) — a raid/party-wide temporary maximum-health increase. This is a planned group cooldown for raid-wide burst windows, not a single-target external.
- **Damage-reduction debuff on enemies:** **Demoralizing Shout** reduces the damage dealt by affected enemies — useful as a raid mitigation tool on adds/bosses, and a DPS gain for the warrior when talented.
- **Mobility profile:** Strong for a tank. **Charge** (gap-closer), **Heroic Leap** (leap to target ground location), and **Intervene** (charge to an ally) give the spec good repositioning. **Piercing Howl** (per Maxroll) can provide a short movement-speed effect.

---

## Abilities Reference

Confirmed spell IDs are shown in parentheses. Abilities without an ID could not be confirmed against a page I loaded — treat the name as authoritative and the ID as unverified.

**Rage spenders / mitigation:**
- **Ignore Pain** — Rage-spent damage-absorption shield; the primary Rage dump and a core part of active mitigation. (ID not confirmed — page returned 403.)
- **Shield Block** (2565) — Buff that mitigates physical damage; uses a charge/cooldown system (community guides describe roughly 2 charges intended for near-constant uptime during melee windows). Costs Rage.

**Rage generators / rotational damage:**
- **Shield Slam** (23922) — Primary Rage generator (generates 15 Rage per the spell page), instant, ~9s base cooldown, deals physical damage.
- **Thunder Clap** — AoE physical damage and the basis of the AoE rotation; can be replaced/upgraded by **Thunder Blast** via talents. (IDs not confirmed.)
- **Revenge** — AoE-leaning strike, prominent in the AoE priority. (ID not confirmed.)
- **Execute** — Finisher used at low target count / execute range. (ID not confirmed.)
- **Devastate** — Filler strike on builds that use it. (ID not confirmed.)

**Cooldowns / burst:**
- **Avatar** — Damage/throughput burst cooldown, used on cooldown in raid. (ID not confirmed.)
- **Ravager** — Optional talented cooldown (whirling AoE), used on cooldown when talented. (ID not confirmed.)

**Key passives / talents referenced for 12.0.5 (from Method changelog):**
- **Practiced Strikes** — increases Shield Slam, Revenge, and Thunder Clap damage by 15%.
- **Demolish** — AoE radius expanded to 10 yards in 12.0.5.
- **Dominance of the Colossus** — cooldown reduction increased to 5 seconds in 12.0.5.
- **Last Stand** rework — see Defensives note below; Icy Veins describes Last Stand as having been turned into a passive bonus tied to Shield Wall on at least one talent path, while the standalone Last Stand spell still exists.

---

## Rotation / Priority

This is a **logical priority order**, not a DPS benchmark or a strict GCD-by-GCD script. Exact ordering shifts with the chosen hero/talent tree (e.g. Mountain Thane vs. Colossus).

**Opener (per Maxroll, Mountain Thane):**
- Get **Shield Block** active as soon as possible — before/at the moment of Charge-in — to avoid being one-shot, then start all offensive cooldowns rolling.

**Sustained single-target priority (per Maxroll):**
1. **Ignore Pain** as the primary Rage spender (defensive + Rage dump).
2. Maintain **Shield Block** at ~100% uptime during melee damage.
3. **Ravager** on cooldown (if talented).
4. **Avatar** on cooldown.
5. **Demoralizing Shout** on cooldown (it is a DPS gain when talented).
6. **Thunder Blast** at 2 stacks.
7. **Shield Slam** when Burst of Power is active.
8. **Thunder Blast**.
9. **Shield Slam** on cooldown.
10. **Revenge** (AoE/Rage spend).
11. **Execute** on 2 or fewer targets.

**AoE priority (conceptual):**
- Prioritize **Thunder Clap / Thunder Blast** and **Revenge** to hit multiple targets, keep **Shield Block** and **Ignore Pain** up for survivability, and use **Avatar** / **Ravager** for burst. **Demolish** (10-yard AoE in 12.0.5) feeds AoE on builds that take it.

> Survivability always takes precedence over the damage priority: keep Shield Block rolling and Ignore Pain refreshed before optimizing damage.

---

## Defensives

Each entry includes a **RaidLens usage** note: how to judge from a log whether the defensive was used correctly during a damage window. Cooldown values are only stated where confirmed against a fetched page; otherwise the cooldown is described qualitatively and flagged.

- **Shield Block** (2565) — Rage-cost buff that mitigates physical damage; charge-based, intended for near-constant uptime in melee.
  - *RaidLens usage:* For physical melee damage windows, Shield Block should be active across the hit. A large physical hit taken with no Shield Block buff present (and Rage available) is a mitigation miss. Magic hits are NOT mitigated by Shield Block — do not flag a magic hit for lacking it.

- **Ignore Pain** — Rage-spent absorption shield; the primary active-mitigation Rage dump.
  - *RaidLens usage:* Should be kept up through sustained damage and refreshed before predictable hits. A lethal/heavy hit taken with no Ignore Pain absorb active and ample Rage banked is a usage miss. (Spell ID unconfirmed — see Known Gaps.)

- **Shield Wall** (871) — Major all-school damage reduction (~40% per the spell page) for ~8 seconds. Long cooldown (cooldown not numerically confirmed against a page; reduced by Anger Management / Impenetrable Wall talents per Maxroll). This is the strongest personal defensive and works against magic as well as physical.
  - *RaidLens usage:* Expect Shield Wall on the biggest scripted tank-busters / lethal raid hits. If a player died to a known heavy hit with Shield Wall off cooldown and unused, flag it.

- **Last Stand** (12975) — Increases maximum health by 30% and heals for 30% of total health for 8 seconds; 3-minute cooldown (per the spell page). Note: Icy Veins describes a talent path that converts Last Stand into a passive bonus on Shield Wall, so its availability as an active button depends on talents.
  - *RaidLens usage:* A reactive "oh no" health-pool button. Hard to judge from damage-taken alone; flag only if a player clearly bottomed out / died with Last Stand available and unused. Account for the possibility it is passive on their build.

- **Spell Reflection** (23920) — Reflects incoming spells back at the caster for ~5 seconds (page shows a 100% reflect aura). The displayed "1 second" on the spell page is a server-side script artifact, not the usable cooldown — the real cooldown is longer (not numerically confirmed; flag).
  - *RaidLens usage:* A magic-specific defensive. Expect it on reflectable single-target magic casts / tank-buster spells. If a player ate a known reflectable magic hit with Spell Reflection available, flag it. Do not expect it against physical or unreflectable raid-wide damage.

- **Demoralizing Shout** — Reduces damage dealt by affected enemies; used largely on cooldown (also a DPS gain when talented). Functions as a group/tank mitigation debuff.
  - *RaidLens usage:* Best treated as a near-on-cooldown mitigation/DPS button rather than a reactive save. If it is consistently absent during melee-heavy windows where it would mitigate, note under-use. (Cooldown unconfirmed — flag.)

- **Rallying Cry** (97462) — Raid/party-wide temporary maximum-health increase; 3-minute cooldown (confirmed).
  - *RaidLens usage:* A planned RAID cooldown, not a personal save. Judge against known raid-wide burst windows: if the raid took a large simultaneous hit and Rallying Cry was off cooldown and unused, that is a missed group cooldown — but coordinate against other raid-CDs before flagging.

- **Impending Victory / Victory Rush** — Self-heal (Impending Victory is the talented, on-demand version with a Rage cost; Victory Rush is the proc version). Situational topping-up.
  - *RaidLens usage:* Minor self-sustain. Generally not worth flagging as a "missed defensive" on its own; treat as supplementary healing.

> General principle for RaidLens: Protection Warrior's defensives are predictive. A hit taken without mitigation is only a "miss" if the relevant button (a) defends the right damage school — physical vs. magic — and (b) was actually off cooldown at the moment. Shield Block and Demoralizing Shout do not help against magic; Spell Reflection only helps against reflectable spells; Shield Wall and Ignore Pain are the all-purpose options.

---

## Utility

- **Interrupt:** **Pummel** (spell ID 6552), 15-second cooldown, 5-yard range, instant, no resource cost. This IS the spec's interrupt and it is a real, raid-usable kick.
  - *Is it the only interrupt?* Pummel is the spec's only dedicated spell-school-locking interrupt. (Storm Bolt and Shockwave are stuns, not interrupts — they can stop a cast on a stun-susceptible target but are crowd control, not a true kick. Do not count them as the spec's interrupt.)
  - *RaidLens usage:* On encounters with assigned interrupt targets, a Protection Warrior is expected to contribute Pummel on the ~15s cooldown. A missed interrupt on an assigned cast with Pummel available is a flaggable miss.

- **Crowd control:**
  - **Intimidating Shout** — AoE fear.
  - **Shockwave** — frontal AoE stun.
  - **Storm Bolt** — single-target stun (talented).
  - **Berserker Rage** — removes/prevents fear, sap, and incapacitate effects on self.
  - **Piercing Howl** — slow / short self movement-speed effect (per Maxroll).

- **Dispels:** Protection Warrior has **no magic, curse, poison, or disease dispel** and cannot remove debuffs from allies. **Spell Reflection** is a reflect, not a dispel. Do not expect this spec to dispel anything.

- **Externals (abilities used on allies):**
  - **Intervene** — charge to an ally (movement + a brief protective effect; primarily a mobility/positioning tool).
  - **Rallying Cry** — raid/party max-health buff (covered above).
  - The spec has no single-target damage-reduction external comparable to a Paladin's Blessing.

- **Raid buffs/debuffs:**
  - **Battle Shout** (6673) — raid-wide attack power (+stamina) buff.
  - **Demoralizing Shout** — enemy damage-dealt reduction debuff.

- **Movement tools:** **Charge**, **Heroic Leap**, **Intervene** (and **Double Time** talent for an extra Charge charge per Maxroll).

---

## Consumables and Enchants

I was unable to confirm specific 12.0.5 consumable items, food, phials/flasks, weapon oils/runes, or enchant item IDs against a live page during this research session (the Wowhead enchants/consumables sub-pages and individual item pages were not successfully fetched; several requests were rate-limited).

General, non-numeric guidance that holds for a Midnight tank:
- Use a current-tier tank-oriented flask/phial (typically the stamina or versatility option), a tank/stamina food buff, a weapon enhancement (oil/rune), and an augment rune if available.
- Enchant priority for a tank skews toward survivability stats (stamina/versibility/armor) over pure throughput, but the exact best-in-slot enchants and their item IDs must be pulled from a current source.

All specific item IDs, enchant names, and consumable names are **flagged as unconfirmed** below. Do not inject any item ID for this spec until verified against a live page.

---

## Notes and Known Gaps

**Confirmed spell IDs (verified against a fetched live page):**
- Pummel — 6552 (15s cooldown)
- Shield Wall — 871 (~40% all-school DR, ~8s)
- Shield Slam — 23922
- Shield Block — 2565
- Last Stand — 12975 (3-min cooldown; +30% max HP, heal 30% max HP, 8s)
- Rallying Cry — 97462 (3-min cooldown)
- Spell Reflection — 23920
- Battle Shout — 6673

**Unconfirmed facts (ID or value NOT verified — do not treat as authoritative):**
- **Ignore Pain** spell ID — not confirmed (Wowhead page returned HTTP 403). Listed by name only.
- **Thunder Clap / Thunder Blast / Revenge / Execute / Devastate** spell IDs — not confirmed (rate-limited). Names only.
- **Avatar / Ravager** spell IDs and exact cooldowns — not confirmed. Names only.
- **Demoralizing Shout** spell ID and cooldown — not confirmed (HTTP 403). Effect (enemy damage-dealt reduction) is from Maxroll/Method prose.
- **Taunt / Charge / Heroic Leap / Intervene / Intimidating Shout / Shockwave / Storm Bolt / Berserker Rage / Piercing Howl / Impending Victory / Victory Rush** spell IDs — not confirmed. Names only.
- **Shield Wall cooldown** — numeric base cooldown not confirmed against a page (the spell page shows the 8-second aura duration, not the cooldown). Talents (Anger Management, Impenetrable Wall) reduce it.
- **Spell Reflection cooldown** — the "1 second" on the spell page is a server-side-script artifact, not the real cooldown; true cooldown not numerically confirmed.
- **Shield Block charges/duration** — community guides cite ~2 charges of ~6s each for constant uptime; the fetched spell page did not show the charge count, so this is from guide prose, not the spell page.
- **Last Stand as active vs. passive** — Icy Veins describes a talent that folds Last Stand into Shield Wall as a passive; the standalone spell (12975) still exists. Availability is talent-dependent.
- **Hero talent trees** — Mountain Thane and Colossus are referenced indirectly (Maxroll opener is Mountain Thane); their specific abilities/spell IDs were not individually verified.
- **Consumables and enchants** — no item IDs, flask/food/oil/enchant names confirmed for 12.0.5. Entire section is conceptual only.
- **No talent import string or SimC APL** was sourced; none is provided here by design.

**Sourcing caveats:**
- Wowhead's class-guide overview/rotation HTML returned only page chrome (no body text) via fetch; rotation content above is drawn from Maxroll, and supporting prose from Icy Veins and Method. Individual Wowhead *spell* pages provided the confirmed IDs before rate-limiting set in.
- All confirmed data is consistent with WoW Midnight patch 12.0.5 (sources dated Feb–Apr 2026). No Dragonflight or War Within data was used as current.

**Maintenance flag:** Re-verify every spell ID, cooldown, and the Last Stand active/passive status after ANY 12.x patch (e.g. 12.0.6, 12.1). Tank tuning and talent reworks are common between patches. Fill in the unconfirmed spell IDs above by fetching the individual Wowhead spell pages when not rate-limited, and add the consumables/enchants section from a live current-tier source.
