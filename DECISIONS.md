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
- `js/storage.js` — localStorage persistence (added Step 11, 2026-06-02)
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

---

## Deep review pass (2026-06-08)

A full multi-agent review of the whole project — every JS module, boss knowledge vs the Wipefest source, the spec/boss guides, and the docs. Changes applied this session:

### Bugs fixed (js/analyze.js)
- **Interrupt false-positives (HIGH, affected the live Chimaerus boss).** Step 9 merged defensive spell IDs into the shared per-pull cast fetch (`castFilterIds = interrupt ∪ defensive`), but the missed/overlap interrupt loop consumed *all* casts. Every player defensive cast (Ironfur, Death Strike, Shield Block, Demon Spikes…) was logged as an un-interrupted boss cast ("Spell &lt;id&gt; went uninterrupted"), inflating `totalMissed` and corrupting the interrupt section in Claude's prompt. Fixed by restricting that loop to `interruptSpellIds.includes(ev.abilityGameID)` — mirroring the defensive consumer below it, which already filtered via `defensiveMap[...]`. Per-player *landed* counts were always correct (computed from interrupt events only).
- **Death double-count (MED).** `playerStats[name].deaths` was incremented from BOTH damage-table `overkill` and Deaths events, so each death counted ~twice — inflating the UI death badges and the player-table sort key. Removed the overkill increment; Deaths events are the single source of truth (they already drive the per-pull `died` flag). Claude output was unaffected (it never sees death counts).
- **Dissonance auto-discovery survives a boss switch (MED, newly reachable via Step 12).** Dissonance's spell ID is auto-discovered from the global `abilityGuidByName`, repopulated only on a *non-cached* fast run. After analyzing boss B then returning to a *cached* Chimaerus and running Deep, the global held boss B's abilities and Dissonance silently no-op'd. The harvested guid map is now snapshotted onto the fast cache entry and read from there in `runDeepAnalysis` (with a fallback to the global).

### Boss-knowledge data corrections (js/boss-knowledge.js)
Cross-checked the 8 stub bosses' `BOSS_NON_AVOIDABLE` sets against `guides/sources/wipefest-dreamrift.txt`. Three abilities were copy/paste-misattributed between the two cosmic-themed bosses and removed from the wrong boss (verified by source line numbers):
- `Cosmic Barrier` removed from **Fallen King Salhadaar** (it is a Crown of the Cosmos ability).
- `Abyssal Pool` removed from **Crown of the Cosmos** (it is a Midnight Falls ability).
- `Null Corona` removed from **Midnight Falls** (it is a Crown of the Cosmos ability).
These never matched a real log line so behaviour was unaffected, but the data is now correct. The comment that grouped all 8 stubs under "THE DREAMRIFT" was corrected — The Dreamrift is single-boss (Chimaerus); the other 8 are 6 Voidspire + 2 March on Quel'Danas encounters.

### Boss / guide naming
- Belo'ren encounter name set to **`Belo'ren`** across all three JS maps and the guide title. Christian confirmed the WCL encounter is named "Belo'ren" — the earlier "Child of Al'ar" / "Child of Alar" subtitle was descriptive flavor, not the match string. (Verify exact casing/apostrophe against a real report when one is available.)
- Chimaerus guide (`chimaerus-mythic.md`): the P1 frontal-cone tankbuster was named "Ravenous Frontal" (fabricated — conflated with "Ravenous Dive"). Renamed to **Rending Tear** (the source name) and corrected from "random-target dodge" to "tankbuster, face away from raid".

### Boss .md guides are documentation-only
No code path fetches `guides/bosses/**`. The authoritative boss context injected into Claude's prompt is the `BOSS_KNOWLEDGE` constant in `js/boss-knowledge.js` (see `ai.js`). The boss `.md` files are human reference, maintained in parallel — keep the two in sync (the Rending Tear drift was an example). Only `SPEC_GUIDE_PATHS` (class guides) drives runtime fetches.

### Source-file duplication
The repo-root `Wipefest guide.txt` was byte-identical (same sha256) to the committed `guides/sources/wipefest-dreamrift.txt`. Deleted (Christian's call) — the `guides/sources/` copy is the single source of truth.

### Known risks flagged for live-log verification (deliberately NOT changed)
- **Missed-interrupt timing window.** Miss/overlap detection keys off the boss `cast` (completion) event within a fixed 100ms-before window. If interrupted casts emit only `begincast` (no completion event), a genuinely-interrupted cast can be invisible to the loop. Validate against a real Chimaerus log in Edge DevTools before trusting miss/overlap counts; per-player *landed* counts are unaffected.
- **Consecration (Lightblinded Vanguard)** is in `BOSS_NON_AVOIDABLE`, but the source classifies it as "move out" area denial (positionally avoidable). Left non-avoidable for now — judgement call on filter strictness, like Lingering Miasma on Chimaerus.
- **Defensive ID conflicts** (Alter Time 342245 vs 108978; Die by the Sword 118038 vs 236385) remain unreconciled per the earlier documented decision — reconcile on the next live verification pass.
- **AI model:** upgraded `ai.js` from `claude-sonnet-4-5` to **`claude-sonnet-4-6`** (Christian's call). Same `$3/$15`-per-M pricing, so the cost calc is unchanged; the `index.html` display label was updated to match.

### Doc accuracy
Corrected CLAUDE.md (step list 4/8/9/10/11/12 were marked pending but shipped; file tree was missing `storage.js` and the expanded `guides/` layout; boss name/comma) and `raidlens-showcase.html` numbers (9 JS modules, 34 defensive specs, 12/14 steps, multi-boss 50%). The showcase was committed to the repo (Christian's call).

---

## Second deep review pass (2026-06-13)

A second full multi-agent review (4 domain reviewers → 4 domain fixers → 1 adversarial verifier + a coordinator-run static verification). Verified the 2026-06-08 fixes were all still correctly in place, then went deeper. Everything below is applied unless marked otherwise.

### High-severity correctness fixes
- **Raid-wide filter was suppressing the boss's own avoidable mechanics from Claude (HIGH, `render.js`).** `buildPlayerList` classified any ability hit by ≥50% of the roster *at any point across the night* as "raid-wide unavoidable" and dropped it from non-tank `relevantAbilities` — which also feeds `ai.js` `topDamageSources`. Over a 20-pull night nearly everyone clips Alndust Essence / Corrupted Devastation once, so the two WCL-verified avoidables — the tool's whole purpose — could vanish from the cards *and the prompt*. Fixed: abilities whose names are in the boss's `BOSS_KNOWLEDGE_META.avoidableSpellIds` (plus `dissonanceAbilityNames`) are now exempt from the raid-wide filter (boss knowledge is authoritative). `[RaidLens][RaidWideFilter]` console line added to confirm behavior on a live log.
- **Missed-interrupt detection almost certainly never worked (HIGH, `wcl-api.js` + `analyze.js`).** The shared `events(dataType:Casts)` fetch uses WCL's default `hostilityType:Friendlies`, but Fearsome Cry / Essence Bolt are cast by the *enemy* Haunting Essence add — so the boss casts the miss/overlap loop scans for never arrived, and Claude was told "0 missed interrupts" as fact. Fixed: new `fetchEnemyCastEvents(fight, spellIds)` (`hostilityType:Enemies`) feeds the miss/overlap loop; the friendly cast fetch now serves *only* defensives. `[RaidLens][Interrupts]` instrumentation added. **Still needs live-log confirmation** that enemy interrupt-target casts now appear (next suspect if not: casts emitting only `begincast` — the older documented 100ms-window risk).
- **Partial-run cache poisoning (HIGH, `analyze.js`).** Per-pull WCL failures were swallowed with a `console.warn` and the cache was written unconditionally — so an all-fail run (bad/revoked token) cached an *empty* result and every later "Analyze" click returned the cached emptiness even after credentials were fixed. Both paths now collect failed fight IDs, `showError` names them as partial, and **skip the cache write** so a retry re-fetches.

### Cost / prompt-quality (the "do it better")
- **Spec-guide payload cut ~56% (`ai.js`).** SimC enrichment had grown guides to 13–74 KB each; a real roster injected ~1.27M chars of mostly DPS-rotation data useless for a damage-taken debrief. `stripSpecGuideSections()` removes the SimC/APL/Confirmed-IDs/talent/consumables `## ` sections in memory at injection time (disk files untouched), keeping Overview/Abilities/Defensives/Utility/Notes. Measured 1,270k → 560k chars across all 39 guides; handles Beast Mastery's odd `## SimulationCraft APL` heading.
- **Prompt caching (`ai.js`).** Message content split into two text blocks: block 1 = stable context (boss knowledge + stripped guides + static rules) with `cache_control:{type:'ephemeral'}`, verified byte-identical across runs of the same boss+roster; block 2 = per-run data. Repeat runs within the 5-min TTL bill ~90% cheaper. Cost calc extended for cache-read ($0.30/M) and cache-creation ($3.75/M); token display shows both.
- **Deep data now reaches Claude (`ai.js`).** The `isDeep` parameter was dead — per-hit `deadAtTime` (the documented called-wipe signal) never influenced the debrief. Now, when per-hit data is present, each player gets a `calledWipeHits` line ("N of M avoidable hits landed while 3+ players were already dead") and a DATA CAVEATS rule to discount them. Derived from data presence, not the flag.
- **Prompt correctness:** tank rows are now correctly described as *not* pre-filtered; kill/wipe count and best/avg progression % are computed from `pullDetail` instead of the old hardcoded "wipes every pull"; defensive framing softened to acknowledge ally-castable spells are counted by caster; rules regrouped under CLASSIFICATION / FLAG / NEVER FLAG / DATA CAVEATS / FORMAT with the 3-pull threshold stated once; Mistweaver/Holy Paladin explicitly exempted from the zero-interrupt flag (no interrupt in 12.x). `max_tokens` 600→800 with a `stop_reason:'max_tokens'` truncation marker.

### Medium fixes
- **`deadAtTime` now subtracts battle rezzes (`analyze.js`).** It counted cumulative death *events*, so a brezzed-and-alive player still counted (and double deaths counted twice), firing the ⚠ called-wipe flag earlier than intended. New per-pull `fetchResurrects` (graceful fallback to deaths-only); `deadAtTime = max(0, deathsBefore − rezzesBefore)`.
- **Re-entrancy guard (`globals.js` + `analyze.js` + `report.js`).** New `analysisRunning` flag + `setAnalysisButtonsDisabled()` block double-clicking Analyze, double-paid deep runs (both cached branches now disable the button before the paid await), and loading a new report mid-run.
- **Pull numbering unified (`analyze.js` + `report.js`).** `pullIndex` was the index within the *selected Set* (insertion order) while the P# tags use the encounter's fight order — so "Pull 7" in Claude's output / expanded rows could point at the wrong pull. Both paths now use the encounter ordinal (all encounter pulls sorted by `startTime`); `renderPullTags` sorts explicitly too so the invariant can't regress on WCL ordering.
- **Dissonance auto-discovery keeps all guids (`analyze.js`).** `abilityGuidByName` was first-guid-wins; same-named abilities (likely Dissonance's two realms) lost the sibling ID. Now name → array of guids; `resolveDissonanceSpellIds` unions all.
- **Self-inflicted abilities** (Burning Rush, Death Strike, Frenzied Regeneration, …) moved to `selfInflictedAbilitiesGlobal` and excluded from per-pull avoidable snapshots *and* tank `topAbilities` — a tank's own mitigation cost no longer shows as "Top non-tank dmg".
- **`wclQuery` resilience:** 401 → null the token, re-auth, retry once; 429 → distinct "rate limit hit" error (so the partial-run surface explains itself).
- **Stub-boss data aligned to guides:** Rending Tear added to Chimaerus `BOSS_NON_AVOIDABLE` + text; Death Drop / Incubation of Flames removed from Belo'ren, Dark Archangel from Midnight Falls, Light/Void Dive added to Belo'ren (matched to the guides, which classify these as avoidable); Discordant Roar + Dissonance boss-text bullets reframed to match the documented decisions. `crown-of-the-cosmos.md` lost the two misattributed Midnight Falls rows.
- **Defensive-ID gaps closed:** Frost (mage-side) gained Alter Time/Ice Cold/Greater Invis/Mirror Image; Fire gained Ice Cold; Protection gained Ignore Pain — so a Frost Mage / Prot Warrior surviving on those doesn't false-flag as "died with zero defensives". A third ID conflict (Brewmaster Fortifying Brew 243435 vs 115203) added to `interrupt-defensive-ids.json`'s reconcile list.

### Low / cosmetic
HTML-escaping helper `esc()` applied to all external strings (player/spec/ability/counterpart names) in `render.js` innerHTML sinks; deep mode now appends aggregated non-deep avoidable entries (the legend promised both); Dissonance per-event lines and the live `progressAvg` metric now render; deep absorbed damage counted (`amount + absorbed`); reference-kill refuses a wrong-encounter fight; stale `deepSection`/`selectedPulls`/`currentEncounterId` reset across report loads; "Remember credentials" opt-out now persists across reloads; spec-guide fetch only negative-caches real 404s (network blips retry); `tokenUsage` cleared between runs; ⚠Ndead marker made legible (warn color, 11px); dead CSS removed; `fmt()` M-tier rounding seam fixed; expanded rows persist open state across progressive re-render (keyed by `data-player`).

### Repo hygiene (Christian's calls)
- Removed from the repo: `Trivial.txt` (5.9 MB raw SimC dump — its useful content is preserved as the 49 `simc-guides/apl/` files + `spell-ids-reference.json`; regenerate from SimC if ever needed), `parse_simc.py` (superseded), `specs_list.txt` (empty). Moved `parse_simc_v2.py` → `simc-guides/`. Deleted the stale merged branch `claude/condescending-moser-3430fa`.
- `.gitignore` now covers `_simc_raid.html` (the 36 MB regeneration artifact) and the token comment acknowledges `.claude/settings.local.json`. `SPEC_GUIDE_GAPS.md` regenerated against measured ground truth (31/39 enriched verified programmatically, ~120 resolved entries pruned). `simc-guides/README.md` per-class counts corrected (DK 6 / DH 5 / Mage 6) and the `apl/` + builder + `interrupt-defensive-ids.json` documented. `BOSS_GUIDE_PROMPT.md` updated to the single-file-per-boss convention actually adopted.

### Verification
All 9 JS files pass `node --check`; cross-file contracts (`selfInflictedAbilitiesGlobal`, `analysisRunning`, `esc`, `fetchEnemyCastEvents`, `fetchResurrects`, `stripSpecGuideSections`, `abilityGuidByName` name→array) resolve with no stale references; `ai.js` cache block verified free of per-run interpolation; deep-path producer/consumer fields agree; boss-knowledge maps consistent across all 9 encounters with every correction present; guide-stripping validated against real guides.

### Still needs Christian's live-log DevTools verification (instrumented, not asserted)
1. `[RaidLens][Interrupts]` shows non-zero enemy interrupt-target casts and miss/overlap finally populates (else: begincast-only casts).
2. `[RaidLens][Rez]` shows plausible brez counts and Resurrect events carry a top-level `timestamp`.
3. `[RaidLens][Dissonance]` lists BOTH realm guids if the table reports two, and Dissonance events carry a *player* `sourceID` (the oldest open Step 10 assumption).
4. `[RaidLens][RaidWideFilter]` — confirm Alndust Essence / Corrupted Devastation now appear on non-tank cards.
5. Avoidable damage events carry `absorbed` separate from `amount`; the fast-path table total's absorbed handling.
6. Stub-boss ability classifications (Rending Tear spelling, Light/Void Dive as one ability vs two) when Voidspire / March on Quel'Danas logs exist.
