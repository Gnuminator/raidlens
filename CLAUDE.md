# RaidLens — Claude Code Instructions

## What this project is

RaidLens is a private World of Warcraft Mythic raid log analyzer. It fetches data from the WarcraftLogs (WCL) API, aggregates player performance across multiple pulls, and uses Claude via the Anthropic API to generate a plain-English raid leader debrief focused on identifying players who repeatedly make the same mistakes across an entire raid night.

The user is Christian (Gnuminator on GitHub). He is the raid leader and tester. He is tech-literate but not a software developer. All code is written by Claude. He tests and gives feedback.

**Current game version:** WoW Midnight, patch 12.x (currently 12.0.5)
**Current difficulty:** Mythic only
**Current raid:** The Dreamrift
**Current boss implemented:** Chimaerus the Undreamt God

---

## Repository

GitHub repo: https://github.com/Gnuminator/raidlens
GitHub personal access token: stored in your Claude Project instructions (not committed to the repo)

---

## At the start of every session

1. Read `DECISIONS.md` -- always, every session, before anything else
2. Read only the files relevant to the current work:
   - `js/boss-knowledge.js` -- boss knowledge, ability filters, spell IDs
   - `js/analyze.js` -- data fetching, fast path, deep path, caching
   - `js/render.js` -- UI display, player cards, expanded rows
   - `js/ai.js` -- Claude prompt, analysis output
   - `js/report.js` -- report loading, pull selection, reference kill
   - `index.html` -- layout, credentials UI, section structure
   - `css/main.css` -- styling
3. Confirm to Christian which files were read
4. Only then proceed

Do not read all files by default. If scope is unclear, read `DECISIONS.md` and ask Christian what he wants to work on.

---

## At the end of every session where code changed

1. Run `git status` to check for untracked files -- new files under `guides/` or elsewhere may exist locally but not yet be staged. Add and commit them if they belong in the repo.
2. Push all changed files to GitHub using the token above
3. Update `DECISIONS.md` if anything new was learned
4. Confirm which files were pushed

---

## File structure

```
raidlens/
├── index.html          ← HTML shell, script/link tags only
├── CLAUDE.md           ← this file
├── DECISIONS.md        ← architectural decisions log
├── css/
│   └── main.css
├── js/
│   ├── boss-knowledge.js   ← loaded first (const not hoisted)
│   ├── globals.js
│   ├── wcl-api.js
│   ├── ui.js
│   ├── report.js
│   ├── render.js
│   ├── analyze.js
│   └── ai.js
└── guides/
    └── bosses/
        └── dreamrift/
            └── chimaerus-mythic.md
```

Script load order in `index.html` is intentional -- `boss-knowledge.js` loads first because `BOSS_KNOWLEDGE_META`, `BOSS_NON_AVOIDABLE`, and `BOSS_KNOWLEDGE` are `const` and JavaScript does not hoist `const`.

---

## Current architecture

**Data flow:**

Fast path (triggered by "Analyze selected pulls"):
- Per pull: damage table (player totals + ability breakdown) + death events
- Builds `playerStats` progressively, renders after each pull
- Results cached in `analysisCache` keyed by `reportCode-encounterId-pullIds`

Deep path (triggered by "Deep analysis" button):
- Per pull: fetches all damage taken events paginated, filters client-side to avoidable spell IDs from `BOSS_KNOWLEDGE_META`
- Cross-references death event timestamps to count dead players at moment of each hit (`deadAtTime`)
- Cached separately in `analysisCache[key].deep`

**Key data structures:**

```js
playerStats[name] = {
  deaths, pulls, totalDmgTaken,
  abilityDmg: { abilityName: { total, pulls } },
  pullDetail: [{
    pullIndex, fightId, isKill, fightPct, durationMs,
    totalDmgTaken,
    avoidable: [{ name, total }],
    hits: [{ timestamp, ability, spellId, amount, deadAtTime }]
  }]
}
```

---

## Step list

Completed:
1. ✅ Deaths tracking via masterData actors
2. ✅ Ability filter validated on Chimaerus
3. ✅ Reference kill URL as ability inventory
5. ✅ Expandable per-pull rows with avoidable damage
6. ✅ Fast path / deep path split with session caching
7. ✅ Progressive rendering
14. ✅ Repo file split into proper folder structure

Pending:
4. ⬜ Class/spec knowledge fed into Claude prompt
8. ⬜ Interrupt tracking per pull per player
9. ⬜ Defensive/consumable usage tracking
10. ⬜ Dissonance source tracking
11. ⬜ localStorage persistence (after local server setup)
12. ⬜ Multi-boss support
13. ⬜ Self-updating GitHub commit from within the tool

---

## Knowledge base: WCL API behavior

**Fetching:**
- `playerDetails` requires `fightIDs` scoped -- cannot query bare on a report
- `masterData { actors(type:"Player") }` does not require fightIDs -- reliable source for player roster with spec (`subType`) and server
- `table` returns a JSON scalar -- no sub-selection allowed. `table { data }` throws an error.
- `events` returns a `ReportEventPaginator` object -- requires `{ data }` sub-selection. Use `{ data, nextPageTimestamp }` for pagination.
- Always pass `startTime`, `endTime`, AND `fightIDs` when querying table or events for a specific fight
- `fightPercentage` = boss HP remaining. A value of 19 means 19% HP left -- a good pull. NOT damage dealt.

**Parsing:**
- `table` response: parse with `typeof raw === 'string' ? JSON.parse(raw) : raw`, then access `.data`
- `masterData.actors` returns `subType` = spec name (e.g. "Brewmaster", "Havoc", "Holy")
- Tank specs by `subType`: Brewmaster, Protection, Blood, Vengeance, Guardian -- never infer from ability names
- `BOSS_KNOWLEDGE_META`, `BOSS_NON_AVOIDABLE`, `BOSS_KNOWLEDGE` must be declared as `const` BEFORE any function referencing them

**Pagination:**
- Events paginate at 300 per request via `nextPageTimestamp`
- Cap at 10 pages per fight
- Stop when `nextPageTimestamp` is null or >= `fight.endTime`

**Rate limits:**
- Fast path (~42 requests for 21 pulls) is safe
- Deep path (~60-80 requests) is safe
- Beyond ~300-400 requests risks 429s -- warn Christian before attempting

---

## Knowledge base: Game domain

**Chimaerus the Undreamt God -- Mythic**

Avoidable spell IDs (WCL-verified):
- `1245919` = Alndust Essence (ground pool)
- `1245486` = Corrupted Devastation (Phase 2 breath line)

Non-avoidable / expected abilities (BOSS_NON_AVOIDABLE):
- Alndust Upheaval -- intentional soak mechanic
- Rift Emergence, Rift Sickness -- unavoidable raid-wide
- Caustic Phlegm, Consume, Ravenous Dive -- unavoidable or tank-specific
- Rift Vulnerability, Cannibalized Essence -- unavoidable mechanic consequences
- Rift Madness -- Mythic debuff
- Blessing of Dawn -- Holy Paladin self-buff appearing as self-damage in logs. Not boss damage. Ignore entirely.
- Discordant Roar -- unavoidable raid-wide physical from Colossal Horror spawning

Class/spec notes:
- All tanks: use `BOSS_NON_AVOIDABLE` to filter expected damage. Never hardcode specific ability names as the only expected tank damage -- different specs handle damage differently.
- Self-inflicted ability costs are not mistakes: Burning Rush (Warlock), Death Strike (Death Knight), Frenzied Regeneration (Guardian Druid), etc.
- Fearsome Cry and Essence Bolt -- missed interrupts show as raid damage. Group failure, not individual avoidable damage.
- Dissonance (Mythic only) -- has a source and a target. Track separately as source-based damage. Step 10.

**General WoW / Midnight rules:**
- Spell IDs never change once assigned. Hardcode with confidence.
- Mythic only for now.
- Current expansion: Midnight patch 12.x. Do not use War Within, Dragonflight, or earlier data.

---

## Knowledge base: Presentation decisions

- Deaths not surfaced in Claude analysis -- everyone dies every wipe on progression
- 3+ pull threshold for flagging avoidable damage patterns
- Called wipe detection: do NOT use average pull duration -- tried and rejected. Use `deadAtTime >= 3` instead.
- Tank cards: show "Top non-tank dmg" using `BOSS_NON_AVOIDABLE` filter
- Deep mode: gold color, ⏱ prefix for timestamped hits. Aggregated: red. Legend in column header.
- Avg pull length replaces Total Deaths in summary cards
- Progressive rendering: update player table after each pull

---

## Design principles

- One step at a time. Test before adding the next thing.
- Never over-engineer. Christian tests, Claude codes.
- When uncertain about WCL API behavior, add a console.log and ask Christian to check Edge DevTools.
- Boss knowledge is authoritative. WCL's "Avoidable" classification is ground truth.
- Spell IDs never change in WoW. Hardcode with confidence.
- `const` is not hoisted -- declare before any function that uses it.
- Always read the relevant file section before each edit -- previous edits invalidate earlier reads.
