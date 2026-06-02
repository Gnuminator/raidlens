# Feral Druid — Raid Guide (WoW Midnight, Patch 12.0.5)

> Sources (live, fetched June 2026):
> - https://www.wowhead.com/guide/classes/druid/feral/rotation-cooldowns-pve-dps (nav only; content JS-rendered)
> - https://www.wowhead.com/spell=106839/skull-bash
> - https://www.wowhead.com/spell=61336/survival-instincts
> - https://www.wowhead.com/spell=22812/barkskin
> - https://www.wowhead.com/spell=108238/renewal
> - https://www.wowhead.com/spell=20484/rebirth
> - https://www.wowhead.com/spell=22842/frenzied-regeneration
> - https://www.wowhead.com/spell=106898/stampeding-roar
> - https://www.wowhead.com/spell=1126/mark-of-the-wild
> - https://www.wowhead.com/spell=1822/rake
> - https://www.wowhead.com/spell=1079/rip
> - https://www.wowhead.com/spell=5221/shred
> - https://www.wowhead.com/spell=22568/ferocious-bite
> - https://www.wowhead.com/spell=5217/tigers-fury
> - https://www.wowhead.com/spell=106951/berserk
> - https://www.wowhead.com/spell=102543/incarnation-avatar-of-ashamane
> - https://www.wowhead.com/spell=285381/primal-wrath
> - https://www.wowhead.com/spell=274837/feral-frenzy
> - https://www.wowhead.com/spell=391528/convoke-the-spirits
> - https://www.wowhead.com/spell=8921/moonfire
> - https://www.wowhead.com/spell=213764/swipe (shared Cat/Bear)
> - https://www.wowhead.com/spell=106785/swipe (Cat Form)
> - https://www.wowhead.com/spell=22570/maim
> - https://www.wowhead.com/spell=5211/mighty-bash
> - https://www.wowhead.com/spell=2908/soothe
> - https://www.wowhead.com/spell=2782/remove-corruption
> - https://www.wowhead.com/spell=8936/regrowth
> - https://www.wowhead.com/spell=1850/dash
> - https://www.wowhead.com/spell=132469/typhoon
> - https://www.icy-veins.com/wow/feral-druid-pve-dps-spell-summary
> - https://www.method.gg/guides/feral-druid/playstyle-and-rotation
> - https://www.icy-veins.com/wow/feral-druid-pve-dps-gems-enchants-consumables (consumables)

---

## Overview

Feral Druid is a melee DPS specialization that fights in Cat Form. It uses two resources: **Energy** (regenerating, spent on abilities) and **Combo Points** (built by "builder" abilities, spent by "finisher" abilities). The spec's damage is heavily **damage-over-time (bleed) based**: the core loop is to apply and maintain bleeds (Rake, Rip) at high uptime while filling with Shred, then dump combo points into finishers (Rip to extend bleeds, Ferocious Bite for burst). Procs (Apex Predator's Craving, Sudden Ambush, Clearcasting) modify the priority moment to moment.

In patch 12.0.5 the spec was simplified and made less bursty: Thrash was removed (one fewer builder), Brutal Slash was removed (leaving Shred as the only single-target filler builder), and Berserk Frenzy was removed. Claw Rampage was nerfed on AoE to proc once per cast rather than per target.

Damage profile: ramping, sustained single-target damage that relies on uninterrupted bleed uptime. Survivability is moderate — Feral has strong personal defensives (see Defensives) and can shift to Bear Form for an emergency health/armor buffer.

Primary weakness: the spec front-loads setup (it takes time to ramp bleeds and combo points) and loses significant damage when forced off the target or when bleeds fall off. Frequent target swapping or movement that breaks the builder→finisher rhythm hurts Feral more than most melee.

## Role in Raid

- **Role:** Pure melee DPS.
- **Raid buff:** Mark of the Wild (spell 1126) — raid-wide +3% Versatility buff, 1-hour duration.
- **Battle res:** Yes. Rebirth (spell 20484) is a combat resurrection on a 10-minute cooldown; it counts against the raid-wide battle-res limit.
- **Bloodlust/Heroism equivalent:** No. Feral Druid does NOT provide a Bloodlust/Heroism effect.
- **Group defensive/externals:** Stampeding Roar (spell 106898) is the main group utility — a movement-speed burst that benefits nearby allies (see Utility). Feral has no targeted damage-reduction external for other players.
- **Mobility:** High. Dash (spell 1850) and the Cat Form base speed bonus, plus a charge tool (Wild Charge, talent), Stampeding Roar, and Typhoon (spell 132469) knockback. Good at covering distance and repositioning.

## Abilities Reference

Core abilities (spell IDs confirmed on live Wowhead unless noted):

| Ability | Spell ID | Notes |
|---|---|---|
| Rake | 1822 | Builder + bleed; generates 1 combo point; 35 Energy; applies a periodic bleed |
| Rip | 1079 | Finisher; long bleed scaling with combo points; 20 Energy |
| Shred | 5221 | Single-target filler builder; 40 Energy; 1 combo point |
| Ferocious Bite | 22568 | Direct-damage finisher; 25 Energy (+ up to 25 extra Energy consumed for more damage) |
| Swipe (Cat) | 106785 | AoE builder; 35 Energy; 1 combo point; 8-yd radius |
| Swipe (shared) | 213764 | Shared Cat/Bear Swipe entry |
| Primal Wrath | 285381 | AoE finisher; applies Rip to all nearby targets; 10-yd radius |
| Moonfire | 8921 | Arcane DoT usable in Cat Form with the Lunar Inspiration talent |
| Tiger's Fury | 5217 | 30s CD; off-GCD; grants 50 Energy and a damage buff (~15%) for 10s |
| Feral Frenzy | 274837 | 45s CD; rapid strikes that generate combo points |
| Berserk | 106951 | 3-min CD; 15s window of increased damage and reduced finisher costs |
| Incarnation: Avatar of Ashamane | 102543 | Talent replacement for Berserk; 3-min CD (per spell page); 20s enhanced Berserk window |
| Convoke the Spirits | 391528 | 2-min CD; 4s channel of random Druid spells, weighted toward your active form's damage |

Key procs/passives (no standalone defensive IDs needed for RaidLens): **Apex Predator's Craving** (free/instant Ferocious Bite proc), **Sudden Ambush** (empowers next Shred/Rake — in 12.0.5 it buffs initial damage and guarantees a crit rather than snapshotting), **Clearcasting** (free builder). Other 12.0.5 talents referenced in sources: **Panther's Guile**, **Rampant Ferocity**, **Claw Rampage** — see Known Gaps for what could not be fully sourced.

## Rotation / Priority

This is **logical priority order, not a DPS benchmark**. Exact talent build changes some lines. Sourced from Method's 12.0.5 playstyle/rotation page and Icy Veins.

**Single-target opener:** Prowl → Tiger's Fury (pre-pull) → Rake → Berserk → Feral Frenzy → Rip → Convoke the Spirits → Ferocious Bite.

**Single-target priority:**
1. Tiger's Fury on cooldown.
2. Berserk (or Incarnation) on cooldown, synced with Tiger's Fury when possible.
3. Feral Frenzy on cooldown.
4. Convoke the Spirits on cooldown (with Rip up, Tiger's Fury and Berserk active).
5. Ferocious Bite immediately when Apex Predator's Craving procs.
6. Rip if missing or in pandemic (refresh) range — always at 5 combo points.
7. Ferocious Bite at 5+ combo points and 50+ Energy.
8. Shred with a Sudden Ambush proc.
9. Rake if missing or in pandemic range.
10. Moonfire (only if running Lunar Inspiration).
11. Shred as the filler builder.

**AoE opener:** Prowl → Rake/Swipe to 5 combo points → Tiger's Fury → Primal Wrath → Berserk → Ferocious Bite (with proc) → Convoke the Spirits. (Source also lists trinket usage, e.g. "Puzzle Box," which is gear-dependent.)

**AoE priority:**
1. Tiger's Fury on cooldown.
2. Berserk on cooldown.
3. Feral Frenzy / "Frantic Frenzy" on cooldown, ideally during Tiger's Fury.
4. Convoke the Spirits on cooldown.
5. Ferocious Bite with Apex Predator's Craving procs.
6. Primal Wrath if missing or <~6.5s remaining, at 5 combo points.
7. Ferocious Bite at 5+ combo points and 50+ Energy.
8. Rake on enemies lacking it.
9. Swipe with Clearcasting/Sudden Ambush procs.
10. Rake maintenance / Swipe as filler (target-count dependent on talents).

## Defensives

Feral has a strong personal defensive kit. RaidLens should treat an unused defensive during a known lethal damage window as a potential flag, accounting for cooldown availability.

- **Survival Instincts** (spell 61336) — Reduces damage taken by 50% for 6 seconds. Cooldown ~3 minutes (the spell page's "6 seconds" is the duration, not the cooldown; 3-min cooldown is the spec-guide value — see Known Gaps). The strongest single-target-window mitigation.
  - *RaidLens usage:* On a scripted heavy hit or sustained damage window, expect Survival Instincts (or Barkskin) to be active. If the player took a near-lethal/lethal hit with Survival Instincts off cooldown and unused, flag it. Allow for the short 6s duration — it must be timed onto the hit, not pre-spent.
- **Barkskin** (spell 22812) — Reduces all damage taken by 20% for ~12 seconds (school value −20% confirmed). Cooldown 1 minute.
  - *RaidLens usage:* The "rotational," frequently-available defensive. Because it is only 1-minute CD, it should be up for most recurring raid-damage events. If a player repeatedly eats a predictable raid-wide hit with Barkskin available and unused, flag it. A short duration means it should overlap the hit.
- **Renewal** (spell 108238) — Instantly heals 30% of maximum health. Cooldown ~1.5 minutes. A self-heal, not damage reduction.
  - *RaidLens usage:* Recovery tool after taking a big hit, not pre-mitigation. Judge as a missed recovery only when the player lingered low after a hit with Renewal available. Talented, so may be absent from a given build.
- **Frenzied Regeneration** (spell 22842) — Bear Form self-heal over time (heals a % of health per second). Short cooldown (the spell page lists a 1-second charge/internal value; commonly played as a charge-based ~36s recharge — see Known Gaps). Requires Bear Form.
  - *RaidLens usage:* Requires shifting to Bear Form, so it costs DPS. Expect it only in genuine emergencies or for a tank-swap/soak. Do not flag non-use during normal DPS uptime.
- **Bear Form** (spell — see Known Gaps for ID) — Emergency mitigation: large armor increase (~220%) and bonus Stamina. Shifting to Bear gives an immediate effective-health buffer.
  - *RaidLens usage:* Treat shifting to Bear during a lethal window as a valid (if DPS-negative) defensive action. Useful as context when explaining how a Feral survived a hit.
- **Heart of the Wild** (talent; ID not confirmed — see Known Gaps) — When talented, can be paired with Bear Form for a large temporary health increase and improves off-role capability for ~45s.
  - *RaidLens usage:* Build-dependent; only judge usage if the player has the talent. Can serve as a survival or off-healing cooldown.
- **Regrowth** (spell 8936) — Instant (with proc) or 1.5s-cast direct heal plus a healing-over-time component. A topping-up tool, not a true mitigation.
  - *RaidLens usage:* Minor self-sustain; generally not a flaggable defensive on its own.

## Utility

- **Interrupt — Skull Bash (spell 106839).** This is Feral Druid's ONLY interrupt. Cooldown 15 seconds, ~13-yard range (it includes a short charge to the target). Confirmed on Wowhead as an interrupt ("Interrupts Current Cast" / "Can Cause Interrupt").
  - *RaidLens usage:* When a boss/add cast must be kicked and a Feral was assigned, a missed interrupt with Skull Bash off cooldown is a flag. The 15s cooldown means it should be available for most interrupt rotations. Note Maim can also interrupt (below) but is not the primary kick.
- **Maim (spell 22570)** — Combo-point finisher; 30s cooldown. Flagged on Wowhead as "Can Cause Interrupt," so it can interrupt a casting, stunnable target, but it is a finisher (costs combo points) and is NOT the spec's reliable raid kick. Treat Skull Bash as the interrupt.
- **Crowd control / stuns:**
  - **Mighty Bash (spell 5211)** — 4-second stun, 1-minute cooldown (talent).
  - **Maim (spell 22570)** — stun finisher, 30s cooldown.
  - **Typhoon (spell 132469)** — 30s cooldown knockback + brief daze (talent).
  - **Entangling Roots**, **Hibernate** (sleep, beasts/dragonkin), **Mighty Bash** for single-target lockdown. (Root/sleep IDs not individually confirmed — see Known Gaps.)
- **Dispels:**
  - **Soothe (spell 2908)** — removes Enrage effects from enemies; 10s cooldown.
  - **Remove Corruption (spell 2782)** — removes **Curse** and **Poison** from friendly targets; 8s cooldown. (Feral cannot dispel Magic or Disease.)
- **Externals:** None targeted. No external damage reduction or external heal for other players.
- **Raid buff/debuff:** Mark of the Wild (spell 1126) — +3% Versatility, raid-wide.
- **Movement tools:** Dash (spell 1850, +60% speed, ~2-min CD), Stampeding Roar (spell 106898, +60% run speed, 15-yd radius, group-wide, ~2-min CD), Wild Charge (talent, leap/charge), and Cat Form's passive movement speed.
- **Battle res:** Rebirth (spell 20484), 10-min CD, combat res (counts against raid limit).

## Consumables and Enchants

Sourced from Icy Veins' 12.0.5 Feral gems/enchants/consumables page. These are item/enchant **names** only — item IDs were not confirmed on a fetched source, so none are given (see Known Gaps). Verify on Wowhead before hardcoding any IDs.

- **Flask:** Flask of the Magisters (Mastery).
- **Combat potion:** Light's Potential (use with major cooldowns / Bloodlust).
- **Healthstone-equivalent potion:** Silvermoon Health Potion.
- **Food:** A primary-stat (Agility) feast such as Silvermoon Parade; personal fallback Royal Roast.
- **Augment rune:** Void-Touched Augment Rune (primary stat).
- **Weapon enchant/oil:** Thalassian Phoenix Oil (Critical Strike / Haste).
- **Shoulder enchant:** Amirdrassil's Grace (alt: Silvermoon's Mending).
- **Gems:** Indecipherable Eversong Diamond (first socket); secondary-stat gems such as Flawless Masterful Peridot or Flawless Quick Amethyst elsewhere. Sim per character.

Stat priority (Icy Veins): Agility is the top stat in Midnight; among secondaries, Mastery, Critical Strike, and Haste are balanced — sim for exact ordering.

## Notes and Known Gaps

- **Survival Instincts cooldown** could not be confirmed from the spell page (the page's "6 seconds" is the buff duration). The ~3-minute cooldown comes from the Icy Veins spell summary. Re-verify the exact cooldown.
- **Incarnation: Avatar of Ashamane cooldown** — the live spell page (102543) lists **3 minutes**; the Icy Veins search snippet said "2-minute." The spell page value (3 min) is used here. Re-verify; talents may modify it.
- **Frenzied Regeneration cooldown/charges** — the spell page (22842) shows a 1-second internal value; in practice it is a charge-based ability (commonly ~36s recharge per Icy Veins). Exact charge count and recharge not confirmed from a single authoritative page.
- **Heart of the Wild** — spell ID NOT confirmed. The page at /spell=319454/ resolved to "Call of the Elder Druid" (a different talent, +20% feral/balance damage, 45s, 5-min CD), not Heart of the Wild. Heart of the Wild's effects (Bear-Form health boost / off-role buff) are described from search summaries only; ID omitted deliberately.
- **Bear Form spell ID** omitted — not fetched from a confirming page. Effects (~220% armor, +Stamina) come from the Icy Veins spell summary.
- **Entangling Roots, Hibernate, Prowl, Wild Charge** spell IDs omitted — not individually confirmed on fetched spell pages.
- **Renewal cooldown** (1.5 min) and **Regrowth** effect are from the spell pages; Renewal heal value (30% max health) confirmed.
- **Talents Panther's Guile, Rampant Ferocity, Claw Rampage, Bloodtalons** — referenced in 12.0.5 sources but not fully detailed; mechanics not deeply sourced. Apex Predator's Craving, Sudden Ambush, Clearcasting procs are described from the Method/Icy Veins rotation pages, not from individual spell pages, so no proc spell IDs are given.
- **Consumable/enchant/gem item IDs** — none confirmed; only names from Icy Veins. Do not hardcode IDs without checking Wowhead.
- **Wowhead guide pages are JS-rendered** and returned navigation-only content via fetch; rotation/talent detail was taken from Method and Icy Veins. Individual Wowhead **spell** pages render server-side and were the source of all confirmed IDs.
- **Maintenance flag:** Re-verify every spell ID, cooldown, and the consumable list after any 12.x patch. Spell IDs themselves do not change once assigned, but talents, cooldowns, durations, and percentages can be retuned between patches.
