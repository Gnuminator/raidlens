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

### Brewmaster Stagger: never flag
Stagger is core mitigation for Brewmaster Monks. Always appears as high damage taken. Ignore entirely.

### Blessing of Dawn: ignore
Holy Paladin self-buff. Appears as self-damage in WCL logs. Not boss damage.

### Discordant Roar: unavoidable, added to BOSS_NON_AVOIDABLE
Raid-wide physical from Colossal Horror spawning. Unavoidable, heal through. Added 2026-05-11.
