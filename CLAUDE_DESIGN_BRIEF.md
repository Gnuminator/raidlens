# RaidLens — Claude Design Brief

> **How to use this file:** Copy everything below the line into Claude Design as one message.
> When the design comes back, save the HTML it produces and bring it into the RaidLens
> Claude Code project — section 7 of this brief contains the exact ID/class/function
> contract Claude Code needs to wire the new design to the existing JavaScript.

---

# THE PROMPT

Design a complete, single-page, dark-themed desktop web UI for **RaidLens**, a private World of Warcraft Mythic raid log analyzer. The tool fetches combat-log data from the WarcraftLogs API, aggregates each player's mistakes across an entire raid night (often 15–25 pulls on one boss), and asks Claude to write a plain-English raid-leader debrief identifying who keeps making the same mistake.

The current UI works but looks like a long vertical form. I want a design that feels like a **professional esports analytics dashboard with subtle WoW flavor** — think WarcraftLogs meets a Bloomberg terminal, not a fantasy game menu. Dark, dense where it matters, calm where it doesn't, with restrained gold as the signature accent.

Produce a polished, pixel-complete mockup as a single HTML file with embedded CSS, desktop-first at 1200–1440px, using the **exact sample data in section 5** so every component is shown populated. Show all the states listed in section 4 (a small state-toggle bar at the top of the mockup for switching between them is welcome). Everything must be expressible in plain HTML/CSS — the final app is vanilla JS with no build step, run as a local file in Microsoft Edge on Windows.

Read all sections below before designing. Sections 7 (technical contract) and 8 (non-negotiable UX rules) are hard requirements; section 9 lists where you have creative freedom.

---

## 1. What RaidLens is

- A **private, single-user tool** for one raid leader. Not a product, no marketing page, no onboarding funnel. It opens straight into the workspace.
- Workflow: paste a WarcraftLogs report URL → pick the boss → pick which pulls to include → **Analyze** (fast pass, ~30s, results stream in pull-by-pull) → optionally **Deep Analysis** (1–3 min, adds per-hit timestamps) → read **Claude's AI debrief**.
- The core question it answers: *"Who took the same avoidable damage on 3 or more pulls tonight, and who died without pressing a defensive?"*
- Current raid: **The Dreamrift — Chimaerus, the Undreamt God (Mythic)**. 20-player roster.

## 2. The user

Christian — raid leader, tech-literate but not a developer. Uses the tool on a desktop monitor in Edge, usually right after a raid night or during a break between pulls. He scans for red flags fast, expands a flagged player to see the per-pull evidence, then reads the AI debrief to decide what to say to the raid. Speed of scanning matters more than visual spectacle.

## 3. Page structure and flow

One page, eight functional regions. They reveal progressively as the workflow advances — region visibility is toggled by JS, so each region must work as an independent block:

1. **Header** — app identity bar. Always visible, sticky.
2. **API credentials** — three secret inputs (WCL client ID, WCL client secret, Anthropic API key) + "remember on this device" checkbox + "clear saved data" button + a one-line unencrypted-storage disclaimer. Always present, but *used once and then ignored* — see section 9 for the redesign opportunity here.
3. **Report** — one URL input + "Load report" button. The real entry point of every session.
4. **Status / error bars** — transient feedback ("Authenticating with WarcraftLogs…", "Analyzing pull 7/21…") and error messages. Appear between the setup regions and results.
5. **Boss select** — a dropdown of encounters found in the report. Hidden until a report loads.
6. **Reference kill (optional)** — collapsed-importance region: URL + fight-ID inputs + load button + inline status text. Used to build an ability inventory for smarter filtering. Hidden until a boss is chosen.
7. **Pull selection** — a wrap of small toggle tags, one per pull ("P1 78% left", "P14 Kill"), plus Select all / Clear / Wipes only buttons. Kills get green styling; selected tags get gold. Hidden until a boss is chosen. Below it, the full-width primary **"Analyze selected pulls →"** button.
8. **Results** — three stacked sections, hidden until analysis runs:
   - **Summary cards** (3 metrics: Pulls analyzed, Players tracked, Avg pull length)
   - **Players table** — the heart of the tool; see 4.3
   - **Claude's analysis** — AI-debrief panel with model label and token/cost readout
   - Between summary and results sits the **Deep Analysis** offer card (description + button), which disappears after deep mode runs.

## 4. Component spec — every state to show

### 4.1 Status & errors
- Status bar: spinner + text, e.g. "Analyzing pull 7/21 — fetching damage table…". Shown during load/analyze.
- Error bar: red tinted, e.g. "Failed to load report: report not found". 
- Reference-kill inline status has its own three colors: muted ("Fetching kill data…"), green ("Loaded. 38 abilities found in kill log."), red/amber for failures ("Fight 12 is not a kill. Please use a kill.").

### 4.2 Pull tags
- Unselected wipe: muted chip "P3 71% left"
- Selected wipe: gold-tinted chip
- Kill (always green-tinted border; green fill when selected): "P21 Kill"
- The percentage is **boss HP remaining** — lower is better. 21 tags must fit comfortably in the region (wrapping is fine).

### 4.3 Players table — the most important component
A vertically stacked list of player rows (not a spreadsheet grid). Sorted by deaths, then damage taken. Each **collapsed row** contains:
- Avatar circle with 2-letter initials, colored per player (see class colors in section 6)
- Player name + optional badges on one line: **Tank** badge (blue), death-count badge ("6x death" — red at 5+, amber at 2–4, neutral at 1), spec label in muted small text ("Havoc")
- A one-line damage headline:
  - DPS/healers: "Top avoidable: Alndust Essence — 1.2M over 7 pulls" or "No notable avoidable damage"
  - Tanks: "Top non-tank dmg: …" or "Tank damage profile normal"
- Attendance line: "19/21 pulls" (amber when below the total)
- Optional stat lines (each only when tracked):
  - "Interrupts: **14** landed across 21 pulls" (count in green)
  - "🛡 Defensives: **23** cast across 21 pulls" (green; amber 0) — with the red suffix "· died 3x with none" when that flag fires; or "🛡 Defensives: not tracked for this spec" (muted)
  - "🔊 Dissonance: caused **5** · took **12**" (caused in red when >0, took in amber when >0, green zeros)
- Right-aligned big number: total damage taken ("48.2M") with label "dmg taken"
- Expand chevron. Whole row is clickable.

**Expanded row** (one per player, shown beneath their row): a per-pull breakdown table with column headers **Pull | Phase | Total | Avoidable | Interrupts | 🛡 Defensives** (the last two columns only exist when that tracking is active for the boss). Per pull:
- Pull: "P7". Phase: "34% left" muted, or "Kill" in green. Total: damage taken that pull, right-aligned.
- Avoidable cell, **two visual modes that must stay distinguishable**:
  - **Fast mode (aggregated)**: ability name in red + total, e.g. "Alndust Essence 845k"; multiple abilities flow inline. Empty = italic muted "Clean".
  - **Deep mode (timestamped)**: gold ability label with ⏱ prefix, then a row of small timestamp chips: "⏱ Alndust Essence → 2:13 412k · 4:40 433k". A chip can carry the called-wipe marker "⚠4dead" (amber, tooltip "4 players already dead at this point"). Aggregated red entries can still appear in deep mode for abilities without per-hit data — the column header carries the legend "⏱ = timestamped hits · no ⏱ = aggregated total".
  - Deep mode may also append Dissonance event lines: "🔊 3:01 caused 156k to Sylquen" (red when caused, amber when taken).
- Interrupts cell: a green count, "—" when zero; deep mode lists events "⚡2:44 Fearsome Cry".
- Defensives cell: green count; "—" if none and survived; red "✗ died" if died that pull with zero defensives; deep mode lists "🛡 1:58 Shield Wall".
- A mode caption sits above the player list: "Fast mode: aggregated per pull" vs "Deep mode: per-hit timestamps shown".

**Progressive rendering state**: during fast analysis the table is alive and partially populated — show a state where the status bar reads "Analyzing pull 9/21…" and the table already shows data (with smaller numbers). Design should make this feel intentional, not broken.

### 4.4 Summary cards
Three metric cards: "Pulls analyzed: 21", "Players tracked: 20", "Avg pull length: 4:32". (Avg pull length deliberately replaced a death-count card — deaths are noise on progression.)

### 4.5 Deep Analysis offer card
Title "Deep Analysis", body "Fetches per-hit timestamps for avoidable abilities and cross-references with death events. Takes 1–3 minutes for 21 pulls. Results are cached for this session.", primary button "Deep analysis ↓". Hidden after deep mode completes.

### 4.6 Claude's analysis panel
- Header row: "AI Report" badge (gold tint) + model label "claude-sonnet-4-6" (muted) + right-aligned token/cost readout "12,431 in · 1,892 out · $0.07".
- Body: multi-paragraph plain text (preserve line breaks), the actual debrief. Idle state text: "Waiting for Claude analysis…".

## 5. Sample data — use verbatim in the mockup

**Encounter:** Chimaerus, the Undreamt God — Mythic · 21 pulls · best 8% → P21 Kill
**Pull tags (21):** P1 78% left · P2 64% left · P3 71% left · P4 55% left · P5 89% left · P6 47% left · P7 34% left · P8 51% left · P9 42% left · P10 38% left · P11 61% left · P12 29% left · P13 33% left · P14 24% left · P15 41% left · P16 19% left · P17 27% left · P18 15% left · P19 22% left · P20 8% left · P21 Kill

**Summary:** Pulls analyzed 21 · Players tracked 20 · Avg pull length 4:32

**Players (top 8 — pad the list to 20 with quieter rows):**

| Name | Spec (class) | Role | Deaths | Dmg taken | Headline | Pulls | Interrupts | Defensives | Dissonance |
|---|---|---|---|---|---|---|---|---|---|
| Zalindra | Havoc (Demon Hunter) | DPS | 7 | 61.4M | Top avoidable: Alndust Essence — 4.8M over 9 pulls | 21/21 | 11 | 6 cast · died 4x with none | caused 5 · took 2 |
| Vexmourn | Unholy (Death Knight) | DPS | 6 | 48.2M | Top avoidable: Corrupted Devastation — 3.1M over 5 pulls | 21/21 | 3 | 14 cast | caused 0 · took 7 |
| Kaelthorn | Frost (Mage) | DPS | 5 | 44.9M | Top avoidable: Alndust Essence — 2.2M over 6 pulls | 19/21 | 9 | 21 cast | caused 1 · took 3 |
| Thorgrim | Protection (Warrior) | Tank | 4 | 112.6M | Tank damage profile normal | 21/21 | 16 | 88 cast | caused 0 · took 1 |
| Mistveil | Brewmaster (Monk) | Tank | 4 | 98.3M | Top non-tank dmg: Alndust Essence — 1.1M over 3 pulls | 21/21 | 12 | 102 cast | caused 0 · took 0 |
| Gnuminator | Beast Mastery (Hunter) | DPS | 3 | 31.7M | No notable avoidable damage | 21/21 | 14 | 19 cast | caused 0 · took 4 |
| Liorah | Holy (Paladin) | Healer | 3 | 38.5M | Top avoidable: Alndust Essence — 1.6M over 4 pulls | 20/21 | 0 | 11 cast | caused 3 · took 6 |
| Sylquen | Restoration (Druid) | Healer | 2 | 35.1M | No notable avoidable damage | 21/21 | 0 | not tracked for this spec | caused 0 · took 5 |

**Expanded-row sample (Zalindra, deep mode, first 6 pulls):**

| Pull | Phase | Total | Avoidable | Interrupts | Defensives |
|---|---|---|---|---|---|
| P1 | 78% left | 2.1M | ⏱ Alndust Essence → 1:02 412k · 2:48 391k | — | ✗ died |
| P2 | 64% left | 3.4M | ⏱ Alndust Essence → 2:13 845k ⚠4dead | ⚡1:44 Fearsome Cry | 🛡 0:58 Blur |
| P3 | 71% left | 1.8M | Clean | — | 🛡 1:12 Blur |
| P4 | 55% left | 4.2M | ⏱ Corrupted Devastation → 3:55 1.2M · 🔊 3:01 caused 156k to Sylquen | ⚡2:44 Fearsome Cry | ✗ died |
| P5 | 89% left | 0.9M | ⏱ Alndust Essence → 0:47 388k | — | — |
| P6 | 47% left | 3.1M | Rift Sickness 1.4M *(aggregated, no ⏱)* | ⚡3:10 Essence Bolt | 🛡 2:30 Blur |

**Ability vocabulary** (for any extra rows you invent): avoidable — Alndust Essence (ground pool), Corrupted Devastation (P2 breath line), Dissonance (proximity, source+target); interruptible — Fearsome Cry, Essence Bolt; non-avoidable filler — Rift Emergence, Rift Sickness, Alndust Upheaval, Discordant Roar, Caustic Phlegm.

**Sample AI debrief text:**

> **Pattern flags (3+ pulls):**
>
> Zalindra took Alndust Essence on 9 of 21 pulls, including three hits after the 2-minute mark when pools are predictable. She also died on 4 pulls without casting a single defensive — Blur was available on at least two of those deaths. This is the night's clearest repeat pattern: same mechanic, same player, no adaptation.
>
> Vexmourn ate Corrupted Devastation on 5 pulls, all in Phase 2. The breath line is telegraphed for 3 seconds — this looks like a camera or positioning habit, worth a direct conversation.
>
> Liorah caused Dissonance damage to other players on 3 separate pulls, all in the final transition. Check her realm-swap positioning assignment.
>
> **Group-level:** Fearsome Cry went uninterrupted 6 times across the night, concentrated in pulls 12–17 when the second interrupt rotation slot was empty. Re-assign the backup kick.
>
> **Clean performers:** Gnuminator and Sylquen had zero repeat avoidable patterns across all 21 pulls.

**Status-bar examples:** "Authenticating with WarcraftLogs…" · "Loading report fights…" · "Loading player roster…" · "Analyzing pull 9/21…" · "Deep analysis: pull 14/21 — fetching events…"
**Error example:** "Failed to load report: report not found or private."
**Token readout example:** "12,431 in · 1,892 out · $0.07"

## 6. Visual language

**Current tokens (the starting point — evolve, don't discard the identity):**

```css
--bg:#0a0c0f; --surface:#111418; --surface2:#181c22;
--border:rgba(255,255,255,0.07); --border2:rgba(255,255,255,0.12);
--text:#e8eaf0; --muted:#7a8090;
--accent:#c89b3c; --accent2:#a07828;          /* gold — the brand */
--danger:#e05252; --warn:#e09c40; --ok:#52b788; --info:#4a9eda;
```

- Fonts: **Rajdhani** (600/700) for headings, buttons, numbers, badges; **Inter** for body. Keep this pairing or propose one equally available on Google Fonts.
- Logo treatment: "RAID" in gold + "LENS" in white, Rajdhani 700.
- **Semantic color rules that carry meaning and must survive the redesign:** red = aggregated avoidable damage / danger flags; **gold + ⏱ = deep-mode timestamped data**; green = kills, landed interrupts, cast defensives, clean; amber = warnings, partial attendance, "took" Dissonance; blue = Tank badge.
- **WoW class colors** — use for avatars/accents per player (instead of the current arbitrary palette): Death Knight `#C41E3A`, Demon Hunter `#A330C9`, Druid `#FF7C0A`, Evoker `#33937F`, Hunter `#AAD372`, Mage `#3FC7EB`, Monk `#00FF98`, Paladin `#F48CBA`, Priest `#FFFFFF`, Rogue `#FFF468`, Shaman `#0070DD`, Warlock `#8788EE`, Warrior `#C69B6D`. Most are bright — use as tinted fills/borders on dark, not raw text colors.
- Mood: confident, technical, calm. No parchment textures, no ornate fantasy borders, no neon glow. WoW flavor comes from class colors, terminology, and the gold accent — nothing louder.

## 7. Technical contract — the JS will be wired to your design

The final implementation keeps the existing vanilla JS modules. Your mockup is the visual source of truth; Claude Code will port it. To make that painless:

**These element IDs must exist** (same roles as today): `clientId`, `clientSecret`, `anthropicKey`, `rememberToggle`, `storageNote`, `reportUrl`, `statusDiv`, `statusText`, `errorDiv`, `fightSection`, `fightSelect`, `refKillSection`, `refReportUrl`, `refFightId`, `refKillStatus`, `pullSection`, `pullTags`, `deepSection`, `deepBtn`, `analyzeSection`, `resultsSection`, `summaryCards`, `playerTableCard`, `aiOutput`, `tokenUsage`.

**These containers are filled by JS `innerHTML`** — design their *contents* as styled templates driven by CSS classes (no per-element hand-tweaks): `summaryCards` (metric cards), `pullTags` (tag chips), `playerTableCard` (entire player list + expanded rows), `aiOutput` (plain text, `white-space: pre-wrap`).

**State classes JS toggles:** `.hidden` on sections; `.visible` on `.status` and `.error`; `.active` and `.kill` on `.tag`. Keep these class names. Existing component classes worth keeping (restyle freely): `.section`, `.section-title`, `.card`, `.metric-card/.metric-label/.metric-value`, `.player-row`, `.avatar`, `.player-info/.player-name/.player-detail`, `.badge` (+ `-danger/-warn/-ok`), `.stat/.stat-num/.stat-label`, `.ai-header/.ai-badge/.ai-output`, `.tag`, `.status`, `.spinner`, `.error`.

**Buttons call these globals** (wire as `onclick` or leave hooks): `loadReport()`, `onFightChange()` (boss `<select>` change), `loadRefKill()`, `selectAllPulls()`, `clearPulls()`, `selectWipesOnly()`, `analyze()`, `runDeepAnalysis()`, `toggleExpand(id)` (player row click), `clearSettings()`.

**Environment:** single HTML file + one CSS file, no build step, no framework, runs from `file://` in Edge on Windows. Google Fonts via `@import` is fine. Desktop-first; graceful down to ~1000px is enough, mobile is a non-goal.

## 8. Non-negotiable UX rules (hard-won decisions — do not redesign away)

1. **Deaths are context, not a headline.** No death-count summary card; death badges on players stay small. Avg pull length holds the third summary slot.
2. **Tanks are special-cased**: their headline is "Top non-tank dmg", never "Top avoidable" (tank damage profiles are intentionally high).
3. **The fast/deep distinction must stay visually legible**: gold ⏱ timestamped vs red aggregated, with the legend in the Avoidable column header.
4. **Progressive rendering is a feature**: the player table populates pull-by-pull during analysis and must look alive mid-stream, not broken.
5. **The "died Nx with none" defensive flag** (red) and "not tracked for this spec" (muted, never accusatory) phrasings stay.
6. **The ⚠Ndead marker** on deep-mode hit chips stays — it tells the raid leader a hit happened during an already-called wipe.
7. **Kill pulls are green** everywhere they appear (tags, phase column).
8. The "Stored unencrypted in this browser only. Never sent anywhere except directly to WarcraftLogs and Anthropic." disclaimer stays with the credentials.
9. Expanded player rows must survive re-renders — design expansion as a per-row state, not a single global drawer.

## 9. Where you have creative freedom (and what to fix)

Current pain points to solve — these are invitations, not specs:

- **The page is one long form.** All five setup regions stack above the results, so after analyzing, the good stuff is below a wall of inputs. Consider: a collapsible setup panel, a slim setup sidebar, a sticky compact toolbar once results exist, or a step/wizard treatment — your call.
- **Credentials are visually loud for something touched once.** They're remembered in localStorage after first entry. Demote them: collapsed drawer, settings flyout, gear icon — anything that gets them out of the daily flow while staying reachable.
- **No data visualization at all.** The data would support: a pull-timeline strip (bar per pull, height = duration or HP%, green kill marker), sparklines of avoidable damage per player across pulls, or a small per-ability breakdown. One or two restrained additions that aid scanning are welcome; this is an analyst tool, not a dashboard demo — no charts for charts' sake.
- **Player rows carry up to five stat lines** and get tall. Tighten the information hierarchy: the headline + flags should pop, the rest can compress (icon clusters, inline chips, a second column — your call).
- **The state-reveal choreography is abrupt** (sections just appear). A considered progressive-disclosure rhythm would help.
- **The AI debrief is a plain text blob.** It's the payoff of the whole tool — give it presentation weight (typographic rhythm for the bold-header paragraphs, maybe player-name highlighting). Note: content arrives as plain text with markdown-style `**bold**` markers at most; don't design around rich structured data.

## 10. Deliverable

One self-contained HTML file (embedded CSS, no JS needed beyond trivial state-toggling for the mockup) showing:
1. **Hero state:** results fully loaded, deep mode, Zalindra's row expanded with the sample data above, AI debrief filled in.
2. **Fresh-session state:** setup regions only, nothing loaded.
3. **Mid-analysis state:** status bar active ("Analyzing pull 9/21…"), table partially populated.

A small fixed toggle bar to switch the three states inside the mockup is ideal. Use the sample data from section 5 verbatim. Desktop, 1280px design width, dark only.
