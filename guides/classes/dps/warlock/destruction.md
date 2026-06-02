# Destruction Warlock — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/warlock/destruction/rotation-cooldowns-pve-dps
> - https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide
> - https://www.icy-veins.com/wow/destruction-warlock-pve-dps-rotation-cooldowns-abilities
> - https://www.method.gg/guides/destruction-warlock/playstyle-and-rotation
> - Individual Wowhead spell pages (IDs cited inline below were each confirmed on their own live spell page): Chaos Bolt, Immolate, Conflagrate, Incinerate, Shadowburn, Rain of Fire, Havoc, Summon Infernal, Unending Resolve, Dark Pact, Spell Lock, Shadowfury, Mortal Coil, Fear, Soulstone, Demonic Gateway, Demonic Circle.

---

## Overview

Destruction is the ranged fire-and-chaos DPS specialization of the Warlock. Its core loop revolves around generating **Soul Shards** (tracked in fragments — 10 fragments = 1 full shard) with filler and short-cooldown spells, then dumping them into hard-hitting spenders. The signature spender is **Chaos Bolt** (a long hard-cast nuke); the spec also leans on **Shadowburn** (instant, execute-flavored) and **Rain of Fire** (AoE spender).

Core gameplay loop:
- Maintain the fire DoT (**Immolate**, or **Wither** when playing the Hellcaller hero tree) on the target(s).
- Generate shards with **Conflagrate** (on cooldown), **Incinerate** (filler), and **Soul Fire**.
- Spend shards on **Chaos Bolt** (single target / 2-target cleave via **Havoc**) or **Rain of Fire** (AoE).
- Stack offensive cooldowns: **Summon Infernal** plus the hero-tree cooldown (**Malevolence** for Hellcaller, **Diabolic Ritual / Ruination** for Diabolist).

Damage profile: high single-target burst (Chaos Bolt), strong 2-target cleave via Havoc, and competent multi-target AoE via Rain of Fire. Damage is bursty and cooldown-gated rather than perfectly even.

Healing/survivability profile: no healing output to the raid. Personal survivability is good for a ranged caster — a passive overshield (Soul Leech), a strong wall (**Unending Resolve**), and a self-shield (**Dark Pact**).

Primary weakness: **Chaos Bolt has a long cast time**, so heavy movement or frequent forced repositioning is punishing. Mobility is handled by instant casts (Conflagrate, Shadowburn) and movement tools, but sustained DPS drops sharply when the player cannot stand still to hard-cast. Burst is also cooldown-aligned, so a poorly-timed cooldown window during a mechanic costs a lot.

---

## Role in Raid

- **Role:** Ranged DPS. Does not heal or tank.
- **Battle res:** YES. **Soulstone** (ID 20707) is a combat resurrection and counts against the raid's battle-res limit. It can be pre-cast on a living player (acts as a self-res-on-death buff) or cast on a corpse in combat.
- **Bloodlust/Heroism equivalent:** NO. Warlocks do not provide a Bloodlust-type effect.
- **Raid buffs/deboffs:** Warlocks bring **Healthstones** (Create Healthstone — see Consumables) usable by the whole raid as an on-demand burst heal, and curse-based debuffs (see Utility). Destruction does not bring a unique stacking raid damage buff.
- **Group utility / externals:** **Demonic Gateway** (ID 111771) — a placed portal pair that instantly teleports group members ~40 yards, valuable for skip/movement mechanics. **Healthstone** acts as a free "potion" for the whole raid. No single-target external defensive (no Pain Suppression / Sacrifice equivalent).
- **Mobility profile:** Moderate. **Burning Rush** (passive-toggle run-speed buff that drains health over time), **Demonic Circle** (ID 48018, placed teleport anchor), and **Demonic Gateway** provide repositioning. Instant-cast spenders/generators (Conflagrate, Shadowburn) let it deal some damage while moving, but its main nuke (Chaos Bolt) is stationary.

---

## Abilities Reference

IDs below were each confirmed on their own live Wowhead spell page. Where an ID is omitted, it could not be confirmed live (see Known Gaps).

**Core damage abilities**
- **Immolate** (ID 348) — Fire DoT; baseline DoT to maintain. Generates shards over time and on crit.
- **Wither** — Hellcaller hero-tree DoT that replaces Immolate; stacks and is empowered by Malevolence. (ID not confirmed live — see Known Gaps.)
- **Conflagrate** (ID 17962) — Instant Fire hit; primary shard generator, used on cooldown; usable while moving.
- **Incinerate** (ID 29722) — Hard-cast filler; generates shards.
- **Soul Fire** — Hard-cast that generates a large chunk of shards; used to refresh the DoT and as a generator. (ID not confirmed live — see Known Gaps.)
- **Chaos Bolt** (ID 116858) — Primary single-target shard spender; long hard cast; very high direct damage.
- **Shadowburn** (ID 17877) — Instant shard spender with execute scaling at low target health; mobile spender and execute tool.
- **Rain of Fire** (ID 5740) — Ground-targeted AoE shard spender; primary spender at higher target counts.
- **Havoc** (ID 80240) — Debuff applied to a second target (30-second cooldown) that duplicates single-target spender damage onto it; the spec's core 2-target cleave tool.
- **Cataclysm** — Talent: AoE burst that applies the fire DoT to all targets hit. (ID not confirmed live — see Known Gaps.)
- **Channel Demonfire** — Talent: channeled barrage of bolts that prioritizes DoT'd targets. (ID not confirmed live — see Known Gaps.)

**Cooldowns**
- **Summon Infernal** (ID 1122) — Main offensive cooldown; summons an Infernal for area Fire damage. Baseline **2-minute** cooldown, reduced to roughly **90 seconds** with the **Inferno** talent.
- **Malevolence** — Hellcaller hero cooldown; grants Haste and empowers active Withers; ~1-minute recharge per the rotation guide. (ID not confirmed live — see Known Gaps.)
- **Diabolic Ritual / Ruination** — Diabolist hero-tree mechanic/cooldown payoff. (Details/IDs not confirmed live — see Known Gaps.)

**Key passives/procs**
- **Backdraft** — Conflagrate generates Backdraft charges that reduce the cast time/cost of the next Incinerate or Chaos Bolt. (ID not confirmed live.)
- **Soul Leech** — Passive overshield generated by spending Soul Shards; functions as a damage buffer (see Defensives). (ID not confirmed live.)
- **Conflagration of Chaos** — Talent; in 12.0.5 simplified so a Conflagrate crit empowers the next Shadowburn and vice versa.

---

## Rotation / Priority

> This is a **logical priority order**, not a DPS benchmark or a guaranteed cast sequence. Exact ordering shifts with hero tree (Diabolist vs Hellcaller), talents, target count, and cooldown timing. Use it to judge whether a player is doing the right *kinds* of things, not to grade APM.

**Single-target opener (per the Wowhead/Icy Veins rotation pages):**
1. Pre-pull cast (Soul Fire / Incinerate) into the pull
2. Apply the DoT: **Immolate** (or **Wither** for Hellcaller); **Cataclysm** if talented to apply it
3. **Conflagrate**
4. **Summon Infernal** + trinkets/racials
5. Hero cooldown (**Malevolence** for Hellcaller)
6. **Chaos Bolt** spends
7. **Conflagrate** again on cooldown

**Sustained single target (priority):**
1. Keep the DoT (Immolate / Wither) up — never let it fall off; refresh inside the pandemic window.
2. **Summon Infernal** and hero cooldown on cooldown (aligned with burst where possible).
3. **Shadowburn** when its empowerment/charges are available, and as an execute at low target HP.
4. **Soul Fire** when below ~4 shards (to refuel) and to refresh the DoT.
5. **Chaos Bolt** to spend shards, prioritized when near the shard cap (don't overcap).
6. **Cataclysm** / **Channel Demonfire** on cooldown if talented.
7. **Conflagrate** on cooldown for shards + mobility.
8. **Incinerate** as filler.

**AoE / cleave priority:**
- **2 targets:** apply **Havoc** to the second target and continue the single-target spender priority (Chaos Bolt is duplicated onto the Havoc'd target).
- **3+ / 4+ targets:** maintain the DoT on multiple targets (spread via Cataclysm / Conflagrate interactions), then spend on **Rain of Fire** instead of Chaos Bolt. Use **Channel Demonfire** and **Summon Infernal** for AoE burst.

---

## Defensives

This is one of the two most important sections for RaidLens. Cooldown values below were confirmed on live Wowhead spell pages except where noted.

- **Unending Resolve** (ID 104773)
  - Effect: reduces all damage taken (Wowhead spell page lists **-25%**, **8-second** duration; some class guides describe a higher value with talents — treat the talented value as unconfirmed).
  - Cooldown: **3 minutes**.
  - RaidLens usage: this is the warlock's main personal wall. For any large, telegraphed damage event (a known raid-wide hit, a soak, a heavy DoT phase) check whether Unending Resolve was active during the window. If a Destruction Warlock took a lethal or near-lethal avoidable hit while Unending Resolve was off cooldown and unused, flag it. With a 3-minute cooldown, expect at most one use per major damage window — do not flag failure to use it on minor incidental damage.

- **Dark Pact** (ID 108416)
  - Effect: sacrifices a portion of current health (or pet health, depending on talent) to gain a large absorb shield. Wowhead lists a **20-second** duration.
  - Cooldown: **1 minute**.
  - RaidLens usage: short-cooldown absorb meant for frequent, predictable spike damage. Because it's only 1 minute, it should be available for most repeating mechanics. If a warlock repeatedly dies to a recurring spike (e.g. a periodic raid pulse) with Dark Pact unused and off cooldown, flag it. Note Dark Pact and Unending Resolve are independent — a careful player layers them on the biggest hits.

- **Soul Leech** (passive — ID not confirmed live)
  - Effect: spending Soul Shards generates an absorb overshield that passively buffers the health pool.
  - RaidLens usage: not actively triggered, so it is not a "did they press it" check. Its presence means a warlock who is actively spending shards carries a small standing shield; absence of the shield on a death usually just means they had spent recently or were capped, not a mistake. Do not flag.

- **Soul Link** (talent — ID not confirmed live)
  - Effect: redirects a percentage of damage taken to the active pet, reducing damage the warlock personally takes (requires a living pet).
  - RaidLens usage: passive once talented and a pet is summoned. If a warlock playing a Soul Link build died with **no pet active**, that is a real avoidable error worth flagging (lost mitigation). Otherwise treat as passive.

- **Healthstone** (consumable the warlock creates — see Consumables)
  - RaidLens usage: an instant self-heal available to the warlock (and the whole raid). If a warlock died at low health during a survivable window with a Healthstone unused, flag it the same way you would a missed defensive.

- **Burning Rush** (toggle — ID not confirmed live)
  - Note: this is a *mobility* tool that *drains* health, not a defensive. Do not treat Burning Rush self-damage as avoidable boss damage, and do not credit it as a defensive.

---

## Utility

This is the second most important section for RaidLens.

### Interrupt
- **Spell Lock** (ID 19647) — this is a **pet ability** (the Felhunter's interrupt, also usable via Command Demon / Grimoire of Sacrifice depending on setup). It **interrupts** the target's current cast and locks out that school.
  - Cooldown: **24 seconds** (per the live spell page).
  - **This is the Destruction Warlock's only interrupt, and it is pet-dependent.** It is only available if the warlock has a Felhunter summoned, OR has sacrificed the Felhunter via Grimoire of Sacrifice / uses Command Demon. A warlock playing without access to the Felhunter's Spell Lock has **no interrupt at all**.
  - RaidLens usage: a Destruction Warlock *can* contribute to interrupt rotations, but only via Spell Lock and only when the pet/talent setup allows it. Before flagging a "missed interrupt," account for this — if the log shows the warlock never had a Felhunter or had sacrificed it, the interrupt was simply unavailable, not missed. When Spell Lock is available (24-second cooldown), it is fair to expect the warlock to take assigned kicks.

### Crowd Control
- **Fear** (ID 5782) — single-target (talentable to AoE) disorient/flee effect.
- **Mortal Coil** (ID 6789, talent) — horrifies the target; **45-second** cooldown. (Healing-on-cast component not confirmed on the live spell page this pass — see Known Gaps.)
- **Shadowfury** (ID 30283) — **AoE stun** (8-yard radius); **1-minute** cooldown.
- **Banish** — single-target incapacitate vs Demon/Elemental enemies. (ID not confirmed live.)

### Dispels
- **Felhunter — Devour Magic** (pet ability): removes a beneficial magic effect from an enemy and a harmful magic effect from a friendly target (an offensive purge + a friendly magic dispel), pet-dependent like Spell Lock. (ID not confirmed live.)
- The warlock has **no class-wide friendly dispel** of curses/poisons/diseases; magic-removal capability is tied to the Felhunter's Devour Magic.
- RaidLens usage: do not expect a Destruction Warlock to cover dispel assignments unless the pull shows a Felhunter present.

### Externals / raid buffs / debuffs
- **No single-target external defensive** (no damage-reduction or immunity cast on another player).
- **Healthstone** — raid-wide on-demand heal item (the closest thing to a "raid utility heal").
- **Demonic Gateway** (ID 111771) — group teleport portal; positioning/skip utility.
- Curse debuffs on enemies: **Curse of Weakness** (reduces enemy damage done) and **Curse of Tongues** (slows enemy cast speed) are available utility curses. (Exact IDs not confirmed live this pass — see Known Gaps.)

### Movement tools
- **Demonic Circle** (ID 48018) — place an anchor, then teleport back to it.
- **Demonic Gateway** (ID 111771) — see above.
- **Burning Rush** — toggle run-speed increase at the cost of health drain.

---

## Consumables and Enchants

Specifics for 12.0.5 (exact flask/food/rune/weapon-enchant item names and IDs, and the gem/enchant set) **could not be confirmed live this pass** — the Wowhead consumables/enchants sub-page body did not render through the fetch tool and individual item pages were rate-limited. Conceptually:
- **Healthstone** — Create Healthstone produces a personal/raid heal stone; the warlock should create one each pull. (Spell ID not confirmed live — see Known Gaps.)
- Standard raid prep applies (intellect flask, intellect/secondary food, weapon enchant/oil, augment rune, gems and gear enchants) but the **exact current item names/IDs for 12.0.5 are not verified here** and must not be invented. See Known Gaps.

---

## Notes and Known Gaps

Unconfirmed facts (named without an ID per sourcing rules — do not treat the missing IDs as "no ID exists," only as "not verified this session"):

- **Wither** (Hellcaller DoT) — ability is real and central to Hellcaller; spell ID NOT confirmed on a live Wowhead page (page returned HTTP 403). method.gg prose referenced an ID but it was not verified directly.
- **Malevolence** (Hellcaller cooldown) — ~1-minute recharge per the rotation guide; spell ID NOT confirmed on a live Wowhead page (403). method.gg referenced ID 430014 but this was not directly verified on Wowhead, so it is intentionally omitted above.
- **Inferno** (talent reducing Summon Infernal CD to ~90s) — method.gg referenced ID 270545; NOT directly verified on Wowhead, so omitted.
- **Soul Fire** — spell ID NOT confirmed (Wowhead page rate-limited, 403).
- **Cataclysm** and **Channel Demonfire** — spell IDs NOT confirmed (Wowhead pages rate-limited, 403).
- **Backdraft**, **Soul Leech**, **Soul Link**, **Banish**, **Burning Rush**, **Devour Magic**, **Curse of Weakness** (referenced as 702), **Curse of Tongues** (referenced as 1714), **Create Healthstone** (referenced as 6201) — IDs NOT confirmed live this pass (rate-limited). Names are correct; IDs omitted deliberately.
- **Unending Resolve** value — the live spell page showed **-25% / 8s / 3-min CD**; some class guides cite a larger reduction with a talent. The talented value is unconfirmed; the baseline value above is from the live spell page.
- **Mortal Coil** healing component — the spell page did not surface a heal-on-cast this pass; in prior expansions Mortal Coil healed the warlock. Treat the heal as unconfirmed for 12.0.5.
- **Diabolist hero tree** (Diabolic Ritual / Ruination) — only described at a high level; mechanics and IDs not confirmed live.
- **Consumables/enchants/gems for 12.0.5** — not verified; do not populate without live confirmation.

Confirmed-on-live-Wowhead-spell-page IDs used in this guide: Immolate 348, Conflagrate 17962, Incinerate 29722, Chaos Bolt 116858, Shadowburn 17877, Rain of Fire 5740, Havoc 80240, Summon Infernal 1122, Unending Resolve 104773, Dark Pact 108416, Spell Lock 19647, Shadowfury 30283, Mortal Coil 6789, Fear 5782, Soulstone 20707, Demonic Gateway 111771, Demonic Circle 48018.

**Maintenance flag:** Re-verify all abilities, cooldowns, and IDs after any 12.x patch (talent reworks and hero-tree tuning are common). Especially re-check Summon Infernal cooldown, Unending Resolve value, the Spell Lock interrupt cooldown, and the unconfirmed hero-tree IDs (Wither, Malevolence, Inferno) on live Wowhead spell pages once the rate limit clears.
