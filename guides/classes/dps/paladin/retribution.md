# Retribution Paladin — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (fetched live, June 2026):
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-guide
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-gems-enchants-consumables
> - https://www.icy-veins.com/wow/retribution-paladin-pve-dps-spec-builds-talents
> - https://www.wowhead.com/spell=96231/rebuke
> - https://www.wowhead.com/spell=642/divine-shield
> - https://www.wowhead.com/spell=498/divine-protection
> - https://www.wowhead.com/spell=184662/shield-of-vengeance
> - https://www.wowhead.com/spell=633/lay-on-hands
> - https://www.wowhead.com/spell=1022/blessing-of-protection
> - https://www.wowhead.com/spell=1044/blessing-of-freedom
> - https://www.wowhead.com/spell=6940/blessing-of-sacrifice
> - https://www.wowhead.com/spell=465/devotion-aura
> - https://www.wowhead.com/spell=31884/avenging-wrath
> - https://www.wowhead.com/spell=255937/wake-of-ashes
> - https://www.wowhead.com/spell=375576/divine-toll
> - https://www.wowhead.com/spell=190784/divine-steed
> - https://www.wowhead.com/spell=85673/word-of-glory
> - https://www.wowhead.com/spell=184575/blade-of-justice
> - https://www.wowhead.com/spell=20271/judgment
> - https://www.wowhead.com/spell=24275/hammer-of-wrath
> - https://www.wowhead.com/spell=427441/hammer-of-light
> - https://www.wowhead.com/spell=213644/cleanse-toxins

## Overview

Retribution Paladin is the melee strength DPS specialization for Paladins. It is a Holy-Power-based melee spec: builders generate Holy Power, and spenders consume it for burst damage. The core gameplay loop is to generate Holy Power with abilities like Blade of Justice, Judgment, and Hammer of Wrath, then spend it with Final Verdict (single target / low target count) or Divine Storm (3+ targets), while pressing major cooldowns (Wake of Ashes, Divine Toll, Avenging Wrath, and — with the Templar hero tree — Hammer of Light) on cooldown.

Damage profile: largely burst-on-cooldown. Retribution has comparatively short burst cooldowns (Avenging Wrath is a 2-minute cooldown; Wake of Ashes is a short recurring cooldown — see Known Gaps for the exact value), so a meaningful share of the spec's damage lands in the opening seconds of each cooldown window, with solid passive cleave during those windows. Between cooldowns the spec maintains a steady builder/spender priority. The spec maintains target debuffs (Judgment, Expurgation) that increase spender damage.

Primary weakness: mobility. Outside of Divine Steed, Retribution has limited gap-closing and repositioning tools, and it cannot reliably handle repeated knockbacks without external help. Its passive self-sustain and passive damage reduction are also relatively modest compared to dedicated survivable specs — it leans on active defensive cooldowns rather than passive mitigation.

## Role in Raid

Pure melee DPS. Retribution brings the Paladin support toolkit but is generally considered to bring less raid-valued utility than Holy or Protection Paladins.

Raid buffs / auras it provides:
- **Devotion Aura** (SpellID 465) — raid-wide area aura reducing damage taken (small percentage, party/raid passive).

Group defensives / externals it can cast on allies:
- **Blessing of Protection** (SpellID 1022) — physical immunity on a friendly target.
- **Blessing of Freedom** (SpellID 1044) — removes and grants immunity to movement-impairing effects (roots/snares) on a friendly target.
- **Blessing of Sacrifice** (SpellID 6940) — redirects a portion of a friendly target's incoming damage to the Paladin.
- **Lay on Hands** (SpellID 633) — full-health emergency heal on any target (very long cooldown).

Bloodlust-equivalent: NO. Retribution provides no Bloodlust/Heroism-equivalent haste effect.

Battle resurrection: NO. Paladin has no combat resurrection of any kind; this is not specific to Retribution.

Mobility profile: limited. **Divine Steed** (SpellID 190784) is the only baseline movement tool — a short speed burst. **Blessing of Freedom** can be self-cast to ignore snares/roots. There is no blink, leap, or teleport.

## Abilities Reference

Confirmed SpellIDs (each verified against a live Wowhead spell page or its canonical Wowhead URL):

Builders / core damage:
- **Blade of Justice** (SpellID 184575) — strength builder, generates Holy Power, two-handed-weapon ability.
- **Judgment** (SpellID 20271) — ranged Holy attack; applies a debuff increasing the target's damage taken from the next Holy Power ability.
- **Hammer of Wrath** (SpellID 24275) — Holy attack usable on low-health targets (≈20% or below) or while Avenging Wrath is active; generates Holy Power.
- **Wake of Ashes** (SpellID 255937) — short-cooldown burst ability dealing Holy/Fire damage in a cone and granting Holy Power (key Templar enabler — see Hammer of Light). Exact cooldown not confirmed from the spell page; see Known Gaps.

Spenders:
- **Hammer of Light** (SpellID 427441) — Templar hero-tree Holy Power spender granting strong AoE; becomes available after Wake of Ashes. (Note: in-game this surfaces under related cast/free-cast IDs as well; see Known Gaps.)
- Final Verdict / Templar's Verdict (single-target spender) and Divine Storm (AoE spender) — SpellIDs NOT confirmed live; see Known Gaps.
- **Word of Glory** (SpellID 85673) — Holy Power spender that heals; usable defensively/for self-sustain.

Major cooldowns:
- **Avenging Wrath** (SpellID 31884) — 2 min cooldown, 20 sec duration; +20% damage/healing and +20% crit, plus run speed.
- **Divine Toll** (SpellID 375576) — 1 min cooldown; generates Holy Power and triggers a burst of attacks.

Key passives / procs (names confirmed via Icy Veins; mechanics summarized):
- **Art of War** — proc that resets/empowers builders (notably Blade of Justice).
- **Righteous Cause** — proc tied to the Apex talent path.
- **Empyrean Power** — proc enabling a free/empowered Divine Storm.
- **Expurgation** — a damage-over-time debuff the spec maintains on the target.
- **Light Within** (Apex talent) — empowers Art of War / Righteous Cause procs and increases Holy Power spender damage during Avenging Wrath.

## Rotation / Priority

This is a logical priority list (the order in which to consider abilities), NOT a DPS benchmark or guaranteed throughput ordering. Retribution plays from a mental priority list rather than a fixed rotation. Overall principle: use builders before overcapping Holy Power, keep Judgment and Expurgation debuffs up, and press major cooldowns on cooldown.

Opener (per Icy Veins, Templar-leaning):
1. Blade of Justice (pre-Holy Power)
2. Avenging Wrath
3. On-use trinkets / Light's Potential potion
4. Execution Sentence (if talented)
5. Wake of Ashes
6. Hammer of Light
7. Final Verdict (twice)
8. Divine Toll
9. Fall into the sustained priority below

Sustained single-target priority (high to low):
1. Avenging Wrath (on cooldown)
2. Execution Sentence (if talented)
3. Hammer of Light (when enabled by Wake of Ashes / Light's Deliverance procs)
4. Final Verdict at maximum Holy Power
5. Wake of Ashes
6. Divine Toll
7. Hammer of Wrath with an Art of War proc
8. Blade of Justice with an Art of War proc
9. Divine Storm with an Empyrean Power proc
10. Final Verdict (spend Holy Power)
11. Hammer of Wrath
12. Blade of Justice
13. Judgment
14. Filler builder (Templar Strike/Slash or Crusader Strike)

AoE priority (3+ targets): same general structure, except spend with **Divine Storm** at maximum Holy Power instead of Final Verdict, and favor Hammer of Light's AoE.

Builder choice is a talent decision: **Crusading Strikes** (passive Holy Power generation, more downtime) vs **Templar Strikes** (active builder, more GCD usage, more control). Both are competitive; the choice tracks the hero tree.

## Defensives

Each entry below includes a RaidLens usage note for judging whether the player used the cooldown correctly during a damage window. Approximate cooldowns are from the live Wowhead spell pages; where a tooltip showed only a GCD-style value, that is flagged.

- **Divine Shield** (SpellID 642) — full immunity to all damage and harmful effects for 8 sec. Cooldown 5 minutes. Causes Forbearance.
  - RaidLens usage: the strongest personal save. If a Retribution player took lethal/near-lethal damage from a known one-shot or stacking mechanic and Divine Shield was off cooldown (no use in the prior ~5 min), that is a clear missed defensive. Conversely, a Divine Shield used to fully negate a big hit is correct play.

- **Divine Protection** (SpellID 498) — reduces all damage taken by 20% for 8 sec. Cooldown 1 minute. Usable while stunned.
  - RaidLens usage: the bread-and-butter rotational defensive. With a 1-minute cooldown it should be available for most scripted raid-damage windows. Flag damage spikes where the player ate a telegraphed hit with Divine Protection available.

- **Shield of Vengeance** (SpellID 184662) — absorb shield for 10 sec that bursts for damage when it expires. (Wowhead spell page lists no cooldown on the base spell; treat the in-game cooldown as roughly 1–1.5 min — see Known Gaps.)
  - RaidLens usage: doubles as an offensive and defensive button. Expect it pressed on cooldown during burst, but it also provides a sizeable absorb during a damage window. If a player died to a hit roughly equal to or smaller than a Shield of Vengeance absorb while it was available, flag it.

- **Word of Glory** (SpellID 85673) — Holy Power spender that delivers a sizeable instant self-heal (can target allies).
  - RaidLens usage: self-sustain, not a true cooldown — gated by Holy Power, not a timer. Use it to judge whether a player topped themselves between hits when they had Holy Power banked. Less of a "was it on cooldown" check and more of a "did they spend a builder's worth of resources to survive" signal.

- **Lay on Hands** (SpellID 633) — heals the target to full health. Cooldown 10 minutes.
  - RaidLens usage: ultimate emergency button. Because of the 10-minute cooldown, only flag its absence on a death where the player was clearly at critical health for a sustained moment and nothing else was available. A single use per fight (or per several pulls) is normal and correct.

- **Blessing of Sacrifice** (SpellID 6940) — cast on an ally; redirects 30% of their incoming damage to the Paladin for 12 sec. Cooldown 2 minutes.
  - RaidLens usage: an external for the raid, but also relevant to the Paladin's own death log (the redirected damage shows on the Paladin). Treat damage taken via Blessing of Sacrifice as intended, not avoidable — it is the spec doing its job.

- **Blessing of Protection** (SpellID 1022) — physical immunity on a friendly target for 10 sec. (Wowhead lists 1.5 sec, which is the GCD/cast-side value, not the real recharge — see Known Gaps; the real cooldown is on the order of several minutes.)
  - RaidLens usage: an external save against physical mechanics. Cannot be used on a target with Forbearance. Judge as an ally-protection tool, not a personal defensive.

- **Blessing of Freedom** (SpellID 1044) — removes/immunizes movement impairment for 8 sec; can be self-cast. (Wowhead lists 1.5 sec recharge, a GCD value; real cooldown is longer — see Known Gaps.)
  - RaidLens usage: mobility/anti-snare utility rather than a damage defensive. Relevant only when a mechanic snares or roots.

- **Devotion Aura** (SpellID 465) — passive raid-wide damage-taken reduction.
  - RaidLens usage: passive; no activation to judge. Note its presence as a small constant mitigation for the group.

## Utility

**Interrupt:** **Rebuke** (SpellID 96231). Cooldown 15 seconds. Off the global cooldown. This IS a real, raid-usable interrupt that locks the target's spell school. It is the spec's ONLY interrupt — Retribution has no second kick. For RaidLens, a missed interrupt on an interruptible cast where Rebuke was off cooldown (no use in the prior 15 sec) is a flaggable individual mistake.

**Crowd control:** Paladin baseline CC includes Hammer of Justice (stun) and, depending on talents, blinding/incapacitate effects. Specific SpellIDs not confirmed live — see Known Gaps. These are situational and rarely the basis for raid mistake-flagging.

**Dispels:**
- **Cleanse Toxins** (SpellID 213644) — removes all Poison and Disease effects from a friendly target. Available to Retribution (and Protection). It does NOT remove Magic (only Holy Paladins can cleanse Magic). For RaidLens: a Retribution Paladin can be expected to dispel Poison/Disease on allies when a fight calls for it, but cannot remove Magic, Curse, or Bleed.

**Externals:** Blessing of Protection, Blessing of Freedom, Blessing of Sacrifice, and Lay on Hands (all listed above) are the spec's externals for allies.

**Raid buffs/debuffs:** Devotion Aura (raid mitigation aura). Judgment applies an offensive debuff to the boss. No Bloodlust-equivalent, no battle res.

**Movement tools:** Divine Steed (SpellID 190784) speed burst; Blessing of Freedom (self-cast) for snare/root immunity. No teleport or leap.

## Consumables and Enchants

Item names below are from the live Icy Veins gems/enchants/consumables page for patch 12.0.5. Numeric item IDs were NOT confirmed against live item pages and are intentionally omitted (see Known Gaps). Treat these as current-as-of-fetch recommendations that should be re-verified after any patch.

- **Flask:** Flask of the Magisters
- **Combat potion:** Light's Potential (primary); Draught of Rampant Abandon (alternative)
- **Health potion:** Silvermoon Health Potion
- **Food:** Strength-based food (e.g., Royal Roast) or a raid feast
- **Augment rune:** Void-Touched Augment Rune
- **Weapon oil:** Thalassian Phoenix Oil

Gems:
- First socket: Indecipherable Eversong Diamond
- Other sockets: Flawless Deadly Amethyst

Enchants (slot → enchant name):
- Weapon: Acuity of the Ren'dorei
- Head: Empowered Rune of Avoidance
- Shoulder: Amirdrassil's Grace
- Chest: Mark of the Worldsoul
- Legs: Forest Hunter's Armor Kit
- Boots: Lynx's Dexterity
- Rings: Eyes of the Eagle

Primary stat is Strength. Detailed secondary-stat weighting was not captured from a live source and should be confirmed separately.

## Notes and Known Gaps

Unconfirmed facts (named explicitly, included WITHOUT invented IDs):
- **Final Verdict / Templar's Verdict SpellID** — not confirmed live. The single-target spender is referenced by name only.
- **Divine Storm SpellID** — not confirmed live. The AoE spender is referenced by name only.
- **Wake of Ashes cooldown** — the Wowhead spell page (255937) showed no base cooldown (it is talent-modified). Icy Veins describes it as a short recurring cooldown (commonly cited as ~30 sec) but the exact 12.0.5 value was not confirmed from a primary source. SpellID 255937 is confirmed.
- **Shield of Vengeance cooldown** — the Wowhead spell page (184662) lists no cooldown on the base spell. The real in-game recharge (commonly ~1–1.5 min) was not confirmed; SpellID and 10-sec duration are confirmed.
- **Blessing of Protection / Blessing of Freedom cooldowns** — Wowhead listed "1.5 sec," which is a GCD/cast-side value, not the true recharge (both have multi-minute real cooldowns). SpellIDs (1022, 1044) and durations (10 sec, 8 sec) are confirmed; the true cooldowns are NOT confirmed and should be re-verified.
- **Hammer of Light SpellID** — base/canonical Wowhead page is 427441 (confirmed). Search results also referenced a cast-version ID (427453) and a free Light's-Deliverance version (429826); these secondary IDs were NOT individually fetched and confirmed, so only 427441 is asserted here.
- **Execution Sentence, Final Reckoning, Crusade, Eye of Tyr, Crusader Strike, Templar Strike/Slash, Crusading Strikes SpellIDs** — referenced by name from rotation/talent sources; individual spell pages not fetched, so no IDs are given.
- **Hammer of Justice and other CC SpellIDs** — not confirmed live.
- **Consumable, gem, and enchant item IDs** — names captured from Icy Veins; no numeric item IDs were confirmed against live item pages, so all are omitted.
- **Secondary stat priority / talent import strings / SimC APL** — no user-provided SimC profile was available and no live import string was confirmed; only conceptual rotation/talent prose is provided.

Source caveats:
- Wowhead guide pages (overview/rotation/abilities) did not render usable body text through the fetch tool; rotation and ability descriptions were sourced from Icy Veins (patch 12.0.5) and individual Wowhead spell pages. Some later Wowhead spell-page fetches returned HTTP 403 (rate limiting); those IDs (Judgment 20271, Hammer of Wrath 24275, Word of Glory 85673, Blade of Justice 184575, Hammer of Light 427441, Cleanse Toxins 213644) were instead confirmed via their canonical Wowhead URLs returned in search, where the URL slug embeds the name and ID.

Maintenance flag: **Re-verify this guide after any 12.x patch.** SpellIDs are stable across patches in WoW, but cooldowns, talent layouts, hero-tree balance, and all consumable/enchant recommendations can change. The unconfirmed cooldowns and the spender SpellIDs above should be the first items confirmed on the next pass.
