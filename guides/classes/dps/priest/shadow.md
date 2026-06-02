# Shadow Priest — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live pages actually fetched/searched June 2026):
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-guide
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-rotation-cooldowns-abilities
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-spell-summary
> - https://www.icy-veins.com/wow/shadow-priest-pve-dps-mythic-plus-tips
> - https://www.wowhead.com/spell=589/shadow-word-pain
> - https://www.wowhead.com/spell=34914/vampiric-touch
> - https://www.wowhead.com/spell=335467/devouring-plague (titled "Shadow Word: Madness")
> - https://www.wowhead.com/spell=8092/mind-blast
> - https://www.wowhead.com/spell=32379/shadow-word-death
> - https://www.wowhead.com/spell=228266/void-bolt
> - https://www.wowhead.com/spell=10060/power-infusion
> - https://www.wowhead.com/spell=15286/vampiric-embrace
> - https://www.wowhead.com/spell=47585/dispersion
> - https://www.wowhead.com/spell=586/fade
> - https://www.wowhead.com/spell=19236/desperate-prayer
> - https://www.wowhead.com/spell=21562/power-word-fortitude
> - https://www.wowhead.com/spell=15487/silence
> - https://www.wowhead.com/spell=8122/psychic-scream
> - https://www.wowhead.com/spell=32375/mass-dispel
> - https://www.wowhead.com/spell=238558/misery
>
> Note: Wowhead guide and spell-detail pages render via JavaScript and could not be fully fetched (403/empty body). SpellIDs below were confirmed from Wowhead spell-page URLs returned in search; prose was sourced primarily from Icy Veins (patch 12.0.5, "Lingering Shadows"). Anything not confirmed live is flagged in "Notes and Known Gaps."

---

## Overview

Shadow Priest is a ranged DPS caster built around a builder-spender loop layered on top of damage-over-time (DoT) maintenance. The core gameplay loop:

1. Apply and maintain DoTs — Vampiric Touch and Shadow Word: Pain — on every relevant target. In Midnight, Vampiric Touch applies both DoTs at once (via the Misery passive).
2. Generate Insanity with short-cooldown spells (primarily Mind Blast and the Mind Flay channel).
3. Spend Insanity on Shadow Word: Madness (the modern spender; its Wowhead spell page still uses the `devouring-plague` URL slug after a rename). Refreshing Shadow Word: Madness rolls remaining tick damage into the new application, so there is no damage loss from refreshing early.
4. Layer major cooldowns (Voidform, Power Infusion, plus the chosen Hero Talent payload — Halo for Archon or Void Torrent / Entropic Rift for Voidweaver).

Damage profile: strong sustained single-target damage with good spread/multi-target pressure thanks to DoTs and Shadowy Apparitions. Two Hero Talent trees define the burst pattern — Archon leans into sustained cooldown windows (Voidform + Halo), Voidweaver leans into burst cleave by building Entropic Rift with Void Blast / Void Torrent.

Primary weakness: mobility. The spec has no gap closer or displacement and most of its damage is cast/channel-based, so heavy-movement encounters cost a disproportionate amount of throughput. RaidLens-relevant implication: a Shadow Priest forced to move during a key window will under-perform for mechanical reasons, not necessarily player error — but unused defensives during avoidable damage are still flaggable.

## Role in Raid

- Role: ranged DPS. Not a healer or tank.
- Raid buff: Power Word: Fortitude (SpellID 21562) — raid-wide +Stamina. This is a class-wide Priest buff, not Shadow-specific.
- Damage cooldown for allies: Power Infusion (SpellID 10060) — a 2-minute haste buff that can be cast on an ally. Commonly given to a stacking-burst DPS or healer.
- Group sustain: Vampiric Embrace (SpellID 15286) — converts a portion of the Priest's single-target Shadow damage into raid healing for a short window.
- Bloodlust/Heroism equivalent: NO. Shadow Priest does not provide a Bloodlust-class haste effect.
- Battle res: NO. Priest has no combat resurrection.
- Mobility: poor. No blink/leap/charge. Movement tools are limited to Fade (threat drop, not a movement speed boost on its own) and out-of-combat utility; the spec relies on instant DoT refreshes and the Mind Flay: Insanity / instant filler to keep some uptime while moving. Tertiary Speed enchant is commonly recommended specifically because of this weakness.

## Abilities Reference

Confirmed SpellIDs are shown inline. Where no ID is shown, it was not confirmable from a fetched live source (see Known Gaps).

Core damage / DoTs:
- Shadow Word: Pain (SpellID 589) — Shadow DoT. In Midnight applied automatically alongside Vampiric Touch via Misery (SpellID 238558).
- Vampiric Touch (SpellID 34914) — primary DoT; applies both itself and Shadow Word: Pain. Self-heals for a portion of damage. If dispelled, the dispeller is horrified.
- Shadow Word: Madness (SpellID 335467 — Wowhead URL slug `devouring-plague`) — primary Insanity spender; refreshing rolls over remaining tick damage.

Insanity generators / fillers:
- Mind Blast (SpellID 8092) — primary Insanity generator, on a short cooldown (multiple charges available with talents). (Exact cooldown/charge count not confirmed live — see Known Gaps.)
- Mind Flay — channeled filler that generates Insanity. A Mind Flay: Insanity instant variant becomes available with the relevant proc/talent.
- Shadow Word: Death (SpellID 32379) — execute (low-health) nuke; deals backlash self-damage if the target survives.

Major cooldowns / Hero Talent payload:
- Voidform / Void Eruption — the spec's signature cooldown window; Void Bolt (SpellID 228266) becomes available during Voidform. (Base Void Eruption/Voidform SpellID is ambiguous between 228260 and 228361 in search results — not confirmed; see Known Gaps.)
- Power Infusion (SpellID 10060) — 2-minute haste cooldown (self or ally).
- Halo — Archon Hero Talent burst tool, used on cooldown. (SpellID not confirmed live.)
- Void Torrent / Entropic Rift — Voidweaver Hero Talent; Void Torrent is a multi-second channel that creates Entropic Rift. (SpellIDs not confirmed live.)
- Tentacle Slam — AoE DoT-application tool (applies Vampiric Touch to multiple stacked targets). (SpellID not confirmed live; name and role per Icy Veins 12.0.5.)

Key passives:
- Misery (SpellID 238558) — causes Vampiric Touch to also apply Shadow Word: Pain and extends/links their durations.

## Rotation / Priority

This is logical priority ordering, NOT a DPS benchmark or a substitute for a sim. Exact ordering shifts between the Archon and Voidweaver Hero Talent builds.

Opener (single target, per Icy Veins 12.0.5):
1. Pre-cast Vampiric Touch (applies both DoTs).
2. Pre-cast Tentacle Slam.
3. Shadow Word: Pain (if not already applied by the above).
4. Roll into cooldowns: Voidform / Void Eruption, Power Infusion, Halo (Archon) or Void Torrent (Voidweaver), then spend Insanity on Shadow Word: Madness and use Void Bolt / Void Volley.

Sustained single target priority:
1. Keep Vampiric Touch and Shadow Word: Pain active; refresh inside the pandemic window (roughly 30% duration remaining) so no ticks are wasted.
2. Use major cooldowns on cooldown (Voidform, Halo / Void Torrent), aligning Power Infusion with them.
3. Spend Insanity on Shadow Word: Madness when it is missing, about to expire, or when you risk capping Insanity (cap is 100 — do not overcap).
4. Cast Mind Blast and Void Bolt to avoid losing their cooldown uptime.
5. Fill with Mind Flay (use the instant Mind Flay: Insanity variant when available, especially while moving).

AoE priority:
1. Spread Vampiric Touch / Shadow Word: Pain across targets (Tentacle Slam covers several stacked targets at once; DoTs scale out to roughly a dozen targets).
2. Use Shadow Word: Madness either spread across multiple targets for total AoE or funneled into a priority target.
3. Otherwise follow the single-target cooldown and Insanity-spend logic.

## Defensives

Each entry includes a RaidLens usage note: how to judge whether the player used the defensive correctly relative to a damage window. Cooldowns marked "approx" or "not confirmed" must not be treated as exact by the analyzer.

- Dispersion (SpellID 47585) — reduces all damage taken by 75% for 6 seconds, heals for ~25% max health over the duration, and can be cast while stunned/feared/silenced. The spec's strongest personal defensive.
  - RaidLens usage: this is the go-to for surviving a large predictable hit or a lethal damage window. If a Shadow Priest took heavy avoidable/spike damage and Dispersion was off cooldown and unused, flag it. Cooldown was not confirmed live — do not assert an exact availability window without verification.
- Desperate Prayer (SpellID 19236) — instant: increases max health and heals for that amount; short emergency heal.
  - RaidLens usage: an emergency self-heal, not a damage-reduction wall. Best judged when the player dropped low and had it available. Treat as a secondary defensive after Dispersion.
- Fade (SpellID 586) — drops threat and reduces detection; with talents it can also grant brief damage reduction.
  - RaidLens usage: baseline Fade is a threat tool, but Shadow's defensive talent builds frequently make Fade a short damage-reduction cooldown. Whether Fade counts as a real defensive depends on the player's talents — do NOT assume it reduces damage unless confirmed for that log. Flag conservatively.
- Vampiric Embrace (SpellID 15286) — converts single-target Shadow damage into raid healing for the duration.
  - RaidLens usage: a group/self sustain cooldown, useful pre-positioned before a raid-wide damage window. Judge by whether it overlapped a known incoming-damage phase rather than as a personal panic button.
- Power Word: Shield — Priest baseline absorb shield available to Shadow.
  - RaidLens usage: a small pre-emptive absorb. Low signal for flagging; absence is rarely a "mistake."
- Power Word: Fortitude (SpellID 21562) — raid-wide Stamina buff (passive raid utility rather than a reactive defensive). Flag only if missing on the raid at pull start.

## Utility

Interrupt:
- Silence (SpellID 15487) is the Shadow Priest's interrupt and its ONLY raid-usable kick. It interrupts spellcasting and locks the spell school against non-player targets; against players it also silences.
- Cooldown: in Midnight, Silence is reported to be baseline with a 30-second cooldown (changed from a 45-second talent in prior expansions). This cooldown comes from a search snippet, not a fully fetched page — treat 30s as likely-but-unconfirmed (see Known Gaps).
- RaidLens implication: when an interrupt is missed on a Shadow Priest's assignment, Silence is the ability to check. There is no backup kick.

Crowd control:
- Psychic Scream (SpellID 8122) — AoE fear, ~8 yard radius; damage can break it. Frequently used as a pseudo-stop/AoE interrupt on adds.
- Psychic Horror — situational stun/disarm utility (talent). (SpellID not confirmed live.)
- Shackle Undead / Shackle Horror — single-target CC restricted to Undead and Aberration enemy types; niche use. (SpellID not confirmed live.)
- Mind Control / Dominate Mind — takes control of an enemy. (SpellID not confirmed live.)

Dispels:
- Dispel Magic — offensive dispel: removes beneficial Magic from enemies. (SpellID not confirmed live.)
- Mass Dispel (SpellID 32375) — AoE dispel, ~2-minute cooldown, 15-yard radius; removes harmful Magic from up to 5 allies and a beneficial Magic effect from up to 5 enemies; can remove some normally-undispellable Magic.
- Purify Disease — removes Disease from friendly targets. (SpellID not confirmed live.) Note: Shadow's friendly-target magic dispel availability (Purify / Dispel Magic friendly) is talent/spec dependent — do not assume Shadow can cleanse friendly Magic without confirmation.

Externals:
- Power Infusion (SpellID 10060) can be cast on an ally (haste external). Shadow has no damage-reduction external for other players.

Raid buffs/debuffs:
- Power Word: Fortitude (SpellID 21562) — raid Stamina buff.

Movement tools:
- None offensive. Relies on instant DoT refreshes and Mind Flay: Insanity to maintain partial uptime while moving. No blink/leap.

## Consumables and Enchants

Sourced from Icy Veins (patch 12.0.5) prose. NO item IDs were confirmed from a live source — names only. Verify IDs/exact names before hardcoding any item.

- Combat potion: Draught of Rampant Abandon (highest output but spawns a void pool under the player that silences while stood in — avoid on progression); Light's Potential as the safe progression alternative (~10% lower).
- Healing potion: Silvermoon Health Potion.
- Flask: not explicitly captured in the fetched content (see Known Gaps).
- Food: Silvermoon Parade or Harandar Celebration feast.
- Weapon oil: Thalassian Phoenix Oil.
- Weapon enchant: Berserker's Rage (Haste proc) early; Arcane Mastery once Haste is high (~20-25%+).
- Ring enchants: Haste or Mastery depending on gear/content.
- Tertiary enchant: Speed is recommended due to the spec's poor mobility.
- Gems: Indecipherable Eversong Diamond (epic/unique slot); rare gems stacking Haste and/or Mastery (e.g. Flawless Masterful Peridot or Flawless Quick Amethyst).

## Notes and Known Gaps

- Wowhead's class-guide and individual spell-detail pages are JavaScript-rendered and returned 403/empty bodies to the fetch tool. SpellIDs in this guide were confirmed from Wowhead spell-page URLs surfaced in search results; prose detail came mainly from Icy Veins (12.0.5). Re-verify against live Wowhead when possible.
- Unconfirmed SpellIDs (name included, ID intentionally omitted): Mind Flay, Mind Flay: Insanity, Halo, Void Torrent, Entropic Rift / Void Blast, Tentacle Slam, Psychic Horror, Shackle Undead/Horror, Mind Control / Dominate Mind, Dispel Magic, Purify Disease, Power Word: Shield.
- Void Eruption / Voidform base SpellID is ambiguous in sources (228260 vs 228361) — omitted as a confirmed ID. Void Bolt (228266) IS confirmed. Verify the Voidform/Void Eruption ID before hardcoding.
- Silence cooldown (stated 30s baseline in Midnight, down from 45s) comes from a search snippet, not a fully fetched page. Treat as likely-but-unconfirmed.
- Dispersion cooldown not confirmed live (effect/values confirmed). Desperate Prayer, Fade, Vampiric Embrace, Power Infusion (2 min), Mass Dispel (~2 min): cooldowns are from prose/recall and only Power Infusion/Mass Dispel durations appeared in fetched text — verify exact values.
- Fade's damage-reduction behavior is talent-dependent; do not assume it is a defensive without confirming the player's build.
- Friendly-target Magic dispel availability for Shadow is talent/spec dependent and was not confirmed — do not assume Shadow can cleanse friendly Magic.
- No SimC APL or talent import string was available (no user-provided profile). Rotation is logical priority only, not a sim-validated APL.
- Consumable/enchant/gem item IDs were NOT confirmed — names only, from Icy Veins prose. Flask not captured.
- Hero Talents: both Archon and Voidweaver are viable in Midnight Season 1; specific node interactions were not deeply sourced.
- MAINTENANCE FLAG: re-verify all IDs, cooldowns, ability names, and consumables after ANY 12.x patch. This guide reflects 12.0.5 as of June 2026.
