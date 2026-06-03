# RaidLens — Decisions Log

Key architectural and design decisions for the project. Updated as decisions are made or reversed.

---

## Architecture

### Single HTML → folder split (2026-05-11)
Restructured from a single `wow_raid_analyzer.html` into:
- `index.html` — slim shell, just HTML structure + script/link tags
- `css/main.css` — all styles
- `js/boss-knowledge.js` — BOSS_KNOWLEDGE_META, BOSS_NON_AVOIDABLE, BOSS_KNOWLEDGE constants (loaded first — `const` is not hoisted)
- `js/globals.js` — global state variables and getCacheKey
- `js/wcl-api.js` — WCL OAuth + GraphQL query functions
- `js/ui.js` — status/error helpers, fmt, fmtTs, toggleExpand
- `js/report.js` — loadReport, onFightChange, pull tag rendering, loadRefKill
- `js/render.js` — buildPlayerList, renderResults, renderPlayerTable
- `js/analyze.js` — analyze() fast path, runDeepAnalysis() deep path
- `js/ai.js` — runAI() Claude prompt + display

Script load order in index.html is intentional. Constants must come before any function that references them.

The tool still runs as a local file opened in Edge — no build step, no server required.

---

### Spec guides fetched from GitHub raw URLs at analysis time (2026-05-11)
`SPEC_GUIDE_PATHS` in `js/boss-knowledge.js` maps WCL `subType` strings to guide paths in the repo. At the start of each `runAI()` call, `loadSpecGuides()` fetches only the guides for specs present in the current raid, in parallel, from `https://raw.githubusercontent.com/Gnuminator/raidlens/main/`. Results are cached in `specGuideCache` for the session — guides are only fetched once per session per spec. 404s are silently skipped (guide not yet written). Guide content is injected into the Claude prompt after boss knowledge. Total character count is logged to the console; a warning is logged if it exceeds 50,000 characters.

### Full spec guide roster + shared-name collision handling (2026-06-02)
All 39 specs now have guide entries in `SPEC_GUIDE_PATHS`. Files live under `guides/classes/{role}/{class-slug}/{spec-slug}.md` (role = dps/tank/healer). The 37 guides beyond the original Havoc/Beast Mastery were produced by a research swarm doing live Wowhead research under strict no-fabrication rules (confirmed SpellIDs only; unconfirmed facts omitted and flagged in each guide's "Notes and Known Gaps").

WCL's `masterData.actors` only returns the bare spec name as `subType` ("Frost", "Holy", etc.) — never the class. Four spec names are shared by two classes (Frost: DK/Mage; Holy: Paladin/Priest; Protection: Paladin/Warrior; Restoration: Druid/Shaman). These map to an **array** of candidate paths; `loadSpecGuides()` fetches BOTH and labels each by class (e.g. "Frost (Death Knight)", "Frost (Mage)") so the correct guide is always present in the prompt. This over-fetches one extra guide for those four names when present — accepted as the safe choice. `specGuideCache` is keyed by repo **path** (not spec name) to avoid collisions. Full per-actor class disambiguation would require `playerDetails` (which exposes class as `type`, scoped by fightID) — deferred as a future refinement.

### SimC enrichment of spec guides (2026-06-02)
Christian supplied parsed SimulationCraft data in `simc-guides/` (per-spec `.md`/`.json`, 49 specs incl. hero-tree variants) plus the raw `Trivial.txt` SimC report. Enrichment is being applied in passes via swarms:
- **Pass 1 (talent + distribution):** the `.json` is authoritative for talent strings, but its abilities table is NOISY — a row is a real damage share ONLY if its `percent` contains a "%". Rows like `Envenom 13.1 / 66.5` or `Thistle Tea / 5.67s` are buff-uptime/duration mis-parses and must be discarded. `spelldata`/`buffs` are empty in the json → NO clean spell IDs there.
- **Pass 2 (APL):** the parsed json lacks the APL. `Trivial.txt` contains each spec's raw SimC profile headed by `<class>="MID1_<Class>_<Spec>_<HeroTree>"` → `talents=` → `actions...`. A splitter extracted each profile's action block into `simc-guides/apl/<name>.apl.txt` (49 files), embedded verbatim into the guides' "SimulationCraft Reference" section.
- **Strict rule held:** no spell IDs harvested from this data (json empty; `.md`/APL numbers are noisy). Spell-ID confirmation stays a separate task.
- **Spell IDs — text `Trivial.txt` NOT viable, but the SimC HTML report IS (2026-06-02):** the text dump had only ONE clean `Spelldata` block (rest were modifier-table noise — rejected). The **HTML** report (simulationcraft.org/reports/MID1_Raid.html, 36 MB, fetched via curl since WebFetch caps at 10 MB) has ~1,688 clean `<h4>Spelldata>` blocks. `simc-guides/build-spell-ids-reference.js` parses them into `simc-guides/spell-ids-reference.json`: 632 names → authoritative id(s) + school + cast/buff type, all variants kept, multi-id flagged. **Coverage limit:** only spells the Patchwerk sim used (damage/rotational + simmed buffs); non-damaging defensives/interrupts/utility (Mind Freeze, Kick, Cloak, Ice Block, Blur, Astral Shift, Dispersion…) are ABSENT — those still come from the guides' Wowhead IDs / `DEFENSIVE_SPELL_IDS` / a live pass. The 36 MB HTML is NOT committed (regenerate via the builder); only the derived json + builder are.
- First 10 DPS guides enriched; then 19 more (31/39 total). 8 unenrichable (no SimC data: 7 healers + Augmentation).

### Enrichment verification + defensive/interrupt ID reference (2026-06-02)
After the batch-2 enrichment, a review swarm (19 guides) + a deterministic APL-verbatim script audited the work:
- **Zero ID-overwrite conflicts** except Unholy (it replaced Wowhead's Dark Transformation 63560 with SimC 1233448) — fixed: 63560 restored in the body, 1233448 flagged. Other discrepancies were correctly flagged not overwritten (Avenging Wrath, Exploding Keg, Shattering Star, Bear Form).
- **Fury Warrior APL was incomplete** (16 source lines dropped, incl. precombat) — re-embedded the full APL; all 29 enriched guides now pass verbatim (every source `actions` line present).
- **Leaked HTML anchor tags** in 5 APL files + 3 guides (Frost DK, Unholy, Feral) — SimC embeds wowhead `<a>` tags in some APL comments; stripped to plain text in both the `apl/` files and the guides.
- **`simc-guides/interrupt-defensive-ids.json`** (new): live-researched authoritative interrupt + personal-defensive spell IDs per class/spec — fills the gap the SimC report can't (non-damaging utility). Documentation only; `DEFENSIVE_SPELL_IDS` (functional, Step 9) is unchanged. Two value conflicts flagged for review (Alter Time, Die by the Sword).

---

### Interrupt tracking (2026-05-11)
Interrupt tracking runs in the fast path alongside damage and deaths. Two WCL queries are added per pull when `interruptTargetSpellIds` is defined: `dataType:Interrupts` for successful interrupts, and `dataType:Casts` filtered client-side to interruptable spell IDs.

- Fearsome Cry SpellID: 1249017 (confirmed Wowhead live)
- Essence Bolt SpellID: 1261997 (confirmed Wowhead live)
- `type:'cast'` = completed cast (spell fired). `type:'begincast'` = cast started. Only completed casts matter for missed interrupt detection.
- Match interrupts to completed casts by `extraAbilityGameID === abilityGameID` and `interrupt.timestamp` within 100ms before cast completion.
- 0 matching interrupts on a completed cast = missed. 2+ matching = overlap (both fired too late).
- Per-player interrupt events stored with timestamps for deep mode display.
- `interruptStats.totalLanded` accumulated per player across all pulls.
- Tanks are not flagged for low interrupts if the interruptable adds are ones they're tanking.

---

### localStorage persistence — Step 11 (2026-06-02)
`js/storage.js` (loaded right after `globals.js`) persists the credential and common input fields to `localStorage` under key `raidlens.settings.v1`: `clientId`, `clientSecret`, `anthropicKey`, `reportUrl`, `refReportUrl`, `refFightId`. Loaded on `DOMContentLoaded`, auto-saved on each field's `input` event. A "Remember credentials & inputs on this device" checkbox (default on) gates saving; unchecking it calls `clearSettings()`, which also wipes the stored blob and the two secret fields from the form. All access is wrapped in try/catch with an `rlStorageAvailable()` probe so the tool degrades gracefully where `localStorage` is blocked (some `file://` contexts). Values — including API keys and the WCL secret — are stored UNENCRYPTED; acceptable for a private single-user local tool, and surfaced to the user via an inline note. Step 11's "after local server setup" caveat is moot: the try/catch probe makes it safe under both `file://` and `npx serve`.

### Defensive usage tracking — Step 9 (2026-06-02)
Mirrors interrupt tracking. `DEFENSIVE_SPELL_IDS` in `boss-knowledge.js` maps WCL subType → `{ spellId: 'Ability' }` of confirmed SELF-defensive cooldowns, sourced from the spec guides' Defensives sections (confirmed IDs only; extracted by a haiku swarm). Key decisions:
- **Tracked by spell ID, not class.** Spell IDs are unique per ability, so `analyze()` builds the union of defensive IDs for the specs present and attributes casts by `sourceID` — no class disambiguation needed. The 4 shared spec names merge both classes' defensives under the one subType key.
- **Reuses the interrupt cast fetch.** Casts are fetched once per pull (`castFilterIds = interrupt ∪ defensive IDs`) and filtered for both. Zero extra API requests on bosses that already track interrupts (e.g. Chimaerus). On bosses without interrupt tracking, defensives will newly trigger the (paginated) cast fetch — watch request volume when adding such bosses.
- **Counts are a FLOOR.** Only confirmed-ID defensives count, and the 10-page cast cap can truncate long pulls. The UI label and the Claude prompt both say so; never assert "only used N defensives" as exhaustive.
- **No false flags for untracked specs.** Specs with no confirmed defensive IDs (e.g. Assassination Rogue, `Unknown`) are shown as "not tracked for this spec" and explicitly excluded from the died-with-no-defensive flag — otherwise every death would look like a missed defensive.
- **The actionable signal is "died on 3+ pulls with zero self-defensives cast"**, computed from per-pull `died` (from death events) + per-pull `defensives`. This is the one allowed exception to the "never mention deaths" rule, framed as defensive usage, not a death count.
- High-frequency active mitigation (Ironfur, Shield Block, Death Strike, Demon Spikes, etc.) is intentionally included — it makes the died-with-zero flag conservative (fewer false accusations).

### Dissonance source tracking — Step 10 (2026-06-02)
Dissonance (Mythic, Chimaerus) is proximity damage between players in opposite realms — it has a source and a target, so the player taking it isn't necessarily at fault. Step 10 attributes it source-side. Lives in the **deep path** (needs damage events, not the table).
- **No hardcoded/unverified spell ID.** The Dissonance spell ID is **auto-discovered** from the damage table: the fast path harvests every ability's `guid` into the global `abilityGuidByName` (name → guid), and `resolveDissonanceSpellIds()` looks up the names in `BOSS_KNOWLEDGE_META[boss].dissonanceAbilityNames` (`['Dissonance']` for Chimaerus). A confirmed ID can be pinned via `dissonanceSpellIds` if ever known. If no guid is captured, tracking silently no-ops.
- **Reuses the deep path's event fetch** — the Dissonance ID is merged into the `fetchAvoidableEvents` ID set, then events are partitioned (Dissonance vs avoidable) so no extra requests.
- Each Dissonance event credits BOTH the **source** (`sourceID` → player, the likely out-of-position one) and the **target** (`targetID`). Stored as `dissonanceStats { sourced, taken }` per player + per-pull `dissonance`.
- UI: a "🔊 Dissonance: caused N · took M" card line (deep mode only). Claude: a SOURCE-based section + rule to flag high "caused" counts as positioning to investigate (not proof), since realm assignments aren't in the data.
- **UNVERIFIED ASSUMPTIONS — pending Christian's DevTools check** (per the project's "instrument, don't guess WCL" rule): (1) the damage table provides `guid` per ability; (2) Dissonance damage events carry a **player** `sourceID` (not the boss). `analyze()` console-logs the discovered IDs and a sample of Dissonance events (`[RaidLens][Dissonance] ...`) with source/target names so these can be confirmed in Edge DevTools. If sources turn out to be the boss, only "took" will populate and the source feature needs revisiting.

---

## Analysis

### Deaths not surfaced in Claude analysis
Everyone dies every wipe on progression. Death count is noise. Not passed to Claude.

### 3+ pull threshold for flagging patterns
Single-pull occurrences are noise. Only flag avoidable damage appearing on 3+ pulls.

### Called wipe detection: deadAtTime, not avg pull duration
Avg pull duration rejected as a proxy — a short pull can be from a real mistake.
Use `deadAtTime >= 3` (players already dead at moment of hit) as the context flag instead.

### Fast path / deep path split
- Fast path: damage table + deaths per pull. ~2 requests per pull. Progressive rendering.
- Deep path: paginated damage events filtered to avoidable spell IDs + death timestamps. Triggered manually after fast path.
- Both paths cached in `analysisCache` keyed by `reportCode-encounterId-pullIds`.

### Progressive rendering
Player table updates after each pull completes. Don't wait for all pulls to finish.

---

## UI

### Avg pull length replaces Total Deaths in summary cards
Deaths are meaningless noise on progression. Avg pull length is actionable context.

### Deep mode: gold timestamps, red aggregated
- Gold color + ⏱ prefix for timestamped per-hit entries (deep mode)
- Red for aggregated totals (fast mode)
- Legend shown in column header

### Tank cards: "Top non-tank dmg" not "Top avoidable"
Use BOSS_NON_AVOIDABLE filter. Never show Melee/Stagger as "top avoidable" for tanks.

---

## WCL API

### masterData actors for player roster
`masterData { actors(type:"Player") }` does not require fightIDs. Reliable source for player names + spec (subType).

### table returns JSON scalar
`table` returns a JSON scalar — no sub-selection. Parse with `typeof raw === 'string' ? JSON.parse(raw) : raw`.

### events requires `{ data }` sub-selection
`events` returns a ReportEventPaginator. Always use `{ data, nextPageTimestamp }`.

### Always pass startTime, endTime, fightIDs for table/events
Required for scoping queries to a specific fight.

### Pagination cap: 10 pages per fight
Safety limit. Stop when nextPageTimestamp is null or >= fight.endTime.

---

## Boss knowledge

### Spell IDs are permanent in WoW
Once assigned, spell IDs never change. Hardcode with confidence.

### BOSS_KNOWLEDGE_META declared before all functions
JavaScript does not hoist `const`. All boss constants must be declared before any function body that references them.

### Boss knowledge migration direction (2026-05-11)
Spell IDs stay hardcoded in JS (`BOSS_KNOWLEDGE_META`, `BOSS_NON_AVOIDABLE`) — they are permanent identifiers needed for client-side filtering and will never be fetched at runtime. Rich descriptive context (fight overview, mechanic explanations, avoidable ability notes, quick tips) moves to markdown files under `guides/bosses/` fetched at analysis time, same pattern as spec guides. The boss guide markdown is injected into the Claude prompt; the JS constants handle filtering logic. These are complementary, not competing.

---

### Brewmaster Stagger: never flag
Stagger is core mitigation for Brewmaster Monks. Always appears as high damage taken. Ignore entirely.

### Blessing of Dawn: ignore
Holy Paladin self-buff. Appears as self-damage in WCL logs. Not boss damage.

### Discordant Roar: unavoidable, added to BOSS_NON_AVOIDABLE
Raid-wide physical from Colossal Horror spawning. Unavoidable, heal through. Added 2026-05-11.
