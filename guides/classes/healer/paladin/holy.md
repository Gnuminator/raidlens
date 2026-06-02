# Holy Paladin — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages fetched during research, June 2026):
> - https://www.wowhead.com/spell=96231/rebuke
> - https://www.wowhead.com/spell=391054/intercession
> - https://www.wowhead.com/spell=642/divine-shield
> - https://www.wowhead.com/spell=498/divine-protection
> - https://www.wowhead.com/spell=6940/blessing-of-sacrifice
> - https://www.wowhead.com/spell=1022/blessing-of-protection
> - https://www.wowhead.com/spell=1044/blessing-of-freedom
> - https://www.wowhead.com/spell=31821/aura-mastery
> - https://www.wowhead.com/spell=4987/cleanse
> - https://www.wowhead.com/spell=31884/avenging-wrath
> - https://www.wowhead.com/spell=375576/divine-toll
> - https://www.wowhead.com/spell=633/lay-on-hands
> - https://www.wowhead.com/spell=190784/divine-steed
> - https://www.wowhead.com/spell=204018/blessing-of-spellwarding
> - https://www.icy-veins.com/wow/holy-paladin-pve-healing-guide
> - https://www.icy-veins.com/wow/holy-paladin-pve-healing-spell-summary
> - https://www.icy-veins.com/wow/holy-paladin-pve-healing-rotation-cooldowns-abilities
> - https://www.wowhead.com/guide/classes/paladin/holy/overview-pve-healer (guide hub; body content is JS-rendered and was not directly extractable)
>
> SpellIDs below appear only where a fetched live source showed that exact numeric ID. Unconfirmed values are omitted and listed in "Notes and Known Gaps."

## Overview

Holy Paladin is a healer specialization. Its core gameplay loop is generating Holy Power with **Holy Shock** (instant, generates Holy Power, lands as a heal on allies or damage on enemies) plus **Judgment** and **Flash of Light**, then spending 3 Holy Power on a healing finisher — **Light of Dawn** (the primary raid spender, a cone AoE heal) or **Word of Glory** / **Eternal Flame** (large single-target heal). The spec keeps casting constantly rather than holding resources, weaving filler **Flash of Light** / **Holy Light** between Holy Shock cooldowns and consuming **Infusion of Light** procs.

- **Healing profile:** Very strong, reliable single-target throughput — one of the few healers that can reliably keep a single targeted player alive through a lethal window. Moderate but improving AoE/group healing through Light of Dawn and Beacon mechanics.
- **Damage profile:** Minimal. Holy Paladin contributes little raid DPS; offensive casts exist mainly to feed Holy Power and trigger Avenging Wrath synergies.
- **Survivability profile:** Excellent. Multiple personal immunities and mitigations (Divine Shield, Divine Protection, Lay on Hands self-cast) make it one of the hardest healers to kill when defensives are used.
- **Primary weakness:** Mobility. Outside of Divine Steed, repositioning options are limited, which makes the spec vulnerable to mechanics that demand frequent movement during heavy cast windows.

## Role in Raid

- **Role:** Healer (primary single-target/spot healer with secondary group healing).
- **Raid buff / damage reduction:** Provides **Devotion Aura** (`465`) — a passive party/raid aura that reduces damage taken for allies within range. This is amplified by **Aura Mastery** (see Defensives) into a strong raid-wide cooldown.
- **Group defensives / externals:** Brings multiple targeted externals — **Blessing of Protection**, **Blessing of Sacrifice**, **Blessing of Spellwarding**, and **Blessing of Freedom** (detailed below). These are among the strongest single-target damage-prevention tools any healer offers.
- **Bloodlust-equivalent:** No. Holy Paladin does not provide a Bloodlust/Heroism-type haste buff.
- **Battle resurrection:** Yes. **Intercession** (`391054`) is a 2-second cast, in-combat resurrection that counts against the raid's combat-res limit (10-minute cooldown). This is a meaningful raid utility — confirm it on cooldown when a battle res was needed.
- **Mobility:** Below average. **Divine Steed** is the main repositioning tool (mounts the paladin and grants a movement speed burst). Blessing of Freedom can be self-cast to break snares/roots.

## Abilities Reference

Core healing:
- **Holy Shock** (`20473`) — Instant, generates 1 Holy Power; heals an ally or damages an enemy. Primary Holy Power builder. (Cooldown is haste/talent-scaled; exact current value unconfirmed — see Known Gaps.)
- **Word of Glory** (`85673`) — Holy Power finisher; large single-target heal (3 Holy Power).
- **Light of Dawn** (`85222`) — Holy Power finisher; heals up to 5 injured allies in a frontal cone (~40 yd). Primary raid spender.
- **Flash of Light** / **Holy Light** — Cast-time direct heals (filler); Flash is fast/cheaper, Holy Light is slow/large. Used to consume Infusion of Light procs and as Holy Power generation per current talents.
- **Beacon of Light** (`53563`) — Links an ally so a portion of your other direct healing also heals them. (Beacon of Virtue is a talent variant that temporarily places multiple beacons.)
- **Judgment** — Generates Holy Power and feeds the rotation; also a ranged damage cast.

Major cooldowns:
- **Avenging Wrath** (`31884`) — 2-minute cooldown, 20-second duration. Increases damage and healing by 20%, grants +20% critical strike and +30% movement speed. Main throughput cooldown.
- **Divine Toll** (`375576`) — 1-minute cooldown. Instantly casts Holy Shock on multiple targets (up to 5), filling Holy Power. Strong burst-healing cooldown.
- **Aura Mastery** (`31821`) — 3-minute cooldown, 8-second duration. See Defensives (it functions as a raid damage-reduction cooldown via Devotion Aura).
- **Lay on Hands** (`633`) — 10-minute cooldown. Heals the target to full health (equal to 100% of the paladin's max health). Causes Forbearance. Can be self-cast as an emergency defensive.

Key passives/procs:
- **Infusion of Light** — Holy Shock crits proc a faster/stronger next Flash of Light or Holy Light. Consume promptly.
- **Devotion Aura** (`465`) — Passive raid damage reduction aura (the foundation Aura Mastery amplifies).
- Hero talents: **Herald of the Sun** is the standard raid hero-talent tree (boosts Light of Dawn, Eternal Flame, and Holy Shock); **Lightsmith** is the alternative (more damage / Holy Armaments, favored more in Mythic+).

## Rotation / Priority

This is logical priority ordering for healing throughput, NOT a DPS benchmark or strict APL. Holy Paladin's overarching rule is to never stop casting and never sit at capped (5) Holy Power.

**Opener / cooldown usage:**
- Open with **Avenging Wrath** aligned to a known damage window, often paired with **Divine Toll** to instantly fill Holy Power and dump finishers.
- Pre-place **Beacon of Light** (or use Beacon of Virtue per talents) before incoming damage.

**Sustained single-target / spot-healing priority:**
1. Keep **Divine Toll** (and Holy Prism, if talented) on cooldown.
2. Cast **Holy Shock** on cooldown (primary Holy Power generation).
3. Consume **Infusion of Light** procs with **Flash of Light** (or Holy Light).
4. Spend Holy Power before capping — **Word of Glory** / **Eternal Flame** for concentrated single-target healing.
5. Fill with **Flash of Light** / **Holy Light** as needed; use Holy Light when there is no overheal risk.

**AoE / multi-target priority:**
1. **Divine Toll** for burst group healing.
2. Spend Holy Power on **Light of Dawn** when multiple allies are hurt (primary raid AoE spender).
3. Maintain **Holy Shock** on cooldown for generation.
4. Avoid overhealing with single-target finishers when raid-wide damage is going out — favor Light of Dawn.

## Defensives

For each, "RaidLens usage" describes how to judge correct use during a damage window. Cooldowns are from fetched live Wowhead spell pages except where flagged.

- **Divine Shield** (`642`) — 5-minute cooldown, 8-second duration. Full immunity to all damage and harmful effects; causes Forbearance for 30s. **RaidLens usage:** the paladin's strongest personal panic button. If the paladin died to a hit they could not heal/move out of, and Divine Shield was off cooldown and not blocked by Forbearance, that is an unused-defensive flag. Note Forbearance interaction: it cannot be used while Forbearance is active (from a prior Divine Shield / Lay on Hands / Blessing of Protection).
- **Divine Protection** (`498`) — 1-minute cooldown, 8-second duration. Reduces all damage taken by 20%; usable while stunned. **RaidLens usage:** the routine personal mitigation. Expect it used on most predictable personal damage windows. Death to a telegraphed hit with Divine Protection available (off a 1-minute cooldown) is a strong unused-defensive flag.
- **Lay on Hands** (`633`) — 10-minute cooldown. Full heal (100% of max health); can be self-cast as an emergency. Causes Forbearance. **RaidLens usage:** treat as last-resort self-save or ally-save. Because of the long cooldown, only flag as "should have used" for genuinely lethal moments, and account for the shared Forbearance with Divine Shield / Blessing of Protection.
- **Aura Mastery** (`31821`) — 3-minute cooldown, 8-second duration. Amplifies Devotion Aura into a strong raid-wide damage reduction. **RaidLens usage:** a raid cooldown, not personal. Judge against scheduled raid-wide damage events. If a known raid-wide burst killed multiple players and Aura Mastery was available (off cooldown), flag as a missed raid mitigation.

Targeted externals (cast on other players — also defensive utility):

- **Blessing of Sacrifice** (`6940`) — 2-minute cooldown, 12-second duration. Reduces the target's damage taken by 30%; the paladin absorbs that 30%. **RaidLens usage:** an external for a player taking heavy hits (often a tank). Check whether it was applied during a tank-buster or targeted lethal window.
- **Blessing of Protection** (`1022`) — 10-second duration; grants immunity to physical damage and harmful effects; causes Forbearance for 30s. **RaidLens usage:** physical-immunity external. Useful to negate a physical mechanic on a non-tank. The displayed Wowhead "cooldown" is the GCD, not the real cooldown — see Known Gaps; do not assert a numeric cooldown.
- **Blessing of Spellwarding** (`204018`) — 10-second duration; grants immunity to magic damage and harmful effects; causes Forbearance. Talent that typically replaces / shares cooldown with Blessing of Protection. **RaidLens usage:** magic-immunity external — judge against magic mechanics. Same cooldown caveat as Blessing of Protection.

## Utility

- **Interrupt:** **Rebuke** (`96231`) — 15-second cooldown. This IS a real, raid-usable interrupt (interrupts the current cast and locks that spell school). It is the spec's ONLY interrupt. For RaidLens: Holy Paladin CAN be assigned to interrupt rotations; a missed interrupt on an interruptible cast (with Rebuke off its 15s cooldown) is a legitimate flag.
- **Crowd control:**
  - **Hammer of Justice** (`853`) — single-target stun. (Duration/cooldown per current tooltip not directly confirmed — see Known Gaps.)
  - **Blinding Light** (talent) — short AoE disorient.
  - **Repentance** (talent) — incapacitate.
- **Dispels:** **Cleanse** (`4987`) — 8-second cooldown. Removes **Poison, Disease, and Magic** from a friendly target. As a Holy Paladin this is a full friendly dispel covering all three. (Cleanse Toxins is the baseline non-Holy version that removes only Poison/Disease.) Holy Paladin has no friendly Curse removal and no offensive/enemy dispel of enrage/magic from this kit.
- **Externals (recap):** Blessing of Sacrifice, Blessing of Protection, Blessing of Spellwarding, Lay on Hands (on allies), Intercession (battle res). See above sections for IDs/cooldowns.
- **Raid buff / debuff:** Devotion Aura (`465`) passive raid damage reduction; Aura Mastery (`31821`) amplification. No haste buff (no Bloodlust-equivalent).
- **Movement tools:** **Divine Steed** (`190784`) — short-cooldown mount/sprint for repositioning. **Blessing of Freedom** (`1044`) — 8-second duration; immunity to movement-impairing effects (root/snare) plus increased run speed; can be self-cast or given to an ally.

## Consumables and Enchants

Specific Midnight 12.0.5 consumable and enchant item IDs and names could not be confirmed from a live source during this research pass (the guide hub pages render their tables via JavaScript and did not return body content to the fetch tool, and no individual item pages were fetched). General, version-agnostic guidance:

- Healers stack the secondary stats their current talent build favors (commonly Haste/Crit/Mastery for Holy Paladin) via gems and enchants; intellect food and a primary-stat flask are standard.
- Combat potions for healers are typically a mana/throughput potion used on heavy windows; healthstone and personal healing potion for emergencies.

Do NOT treat any of the above as confirmed item IDs. See Known Gaps — these must be filled from a live Wowhead consumables/enchants page or a current Icy Veins gear page before relying on them.

## Notes and Known Gaps

- **Wowhead class-guide hub pages (overview / abilities-talents / rotation) are JavaScript-rendered** and did not return article body text to the fetch tool. Prose was sourced from Icy Veins (12.0.5) and individual Wowhead spell pages. Re-verify rotation/talent specifics against the rendered Wowhead guide when possible.
- **Holy Shock cooldown (`20473`):** exact current numeric cooldown not confirmed (it is haste- and talent-scaled, and the spell page did not yield a clean base value here). Omitted rather than guessed.
- **Word of Glory (`85673`) and Light of Dawn (`85222`):** IDs confirmed via Wowhead URLs/search; current Midnight tooltip values (Holy Power cost shown as 3 from rotation guidance) not individually re-fetched from the live spell page this pass.
- **Hammer of Justice (`853`):** ID confirmed via Wowhead URL; live spell page returned HTTP 403 this pass, so current stun duration and cooldown are unconfirmed.
- **Blessing of Protection (`1022`) and Blessing of Spellwarding (`204018`) cooldowns:** the live spell pages displayed "1.5 seconds," which is the global cooldown, NOT the real ability cooldown. The true cooldown (historically several minutes, modified by talents) was NOT confirmed — numeric cooldown intentionally omitted. Spellwarding sharing a cooldown with Protection is stated by Icy Veins/search summaries but was not confirmed on the fetched spell page.
- **Divine Steed (`190784`):** ID confirmed; the fetched spell page showed a "750 milliseconds" value (a charge/GCD artifact) and did not expose the real cooldown, duration, or movement-speed percentage. These specifics are unconfirmed.
- **Blessing of Freedom (`1044`):** ID and 8s duration confirmed; the page's "1.5 seconds" is the GCD, not the real cooldown — cooldown omitted.
- **Devotion Aura (`465`) and Beacon of Light (`53563`):** IDs confirmed via Wowhead URLs/search summaries; not individually deep-fetched this pass. Devotion Aura's base reduction was reported as 3% (Aura Mastery raising it to ~12%) from search summaries — treat the exact percentages as approximate pending a live spell-page confirmation.
- **Hero talents:** Herald of the Sun is reported as the standard raid build and Lightsmith as the alternative (Icy Veins / search summaries, 12.0.5). Exact talent strings/import codes were not sourced (no SimC profile or talent-tree page fetched).
- **Consumables and Enchants section is conceptual only** — no confirmed item IDs or current Midnight consumable names. Fill from a live source before use.
- **Maintenance flag:** Re-verify all cooldowns, IDs, and talent/hero-talent recommendations after ANY 12.x patch. Tuning hotfixes in Midnight have already adjusted Holy Paladin healing values (e.g., Holy Shock +10%, Word of Glory +20% per patch notes summaries), so numeric throughput and possibly cooldowns can shift between minor patches.
