# Boss Guide Build — Ready-to-Paste Prompt

_Paste the block below in a fresh session to build boss guides for every boss in a raid. Fill in the two bracketed spots first. Convention: ONE all-difficulty file per boss, Mythic differences inline (see Notes)._

---

```
RaidLens boss guide build.

First read, in this order: DECISIONS.md, CLAUDE.md, js/boss-knowledge.js, and the existing
guides/bosses/dreamrift/chimaerus-mythic.md — that Chimaerus file is the STRUCTURE TEMPLATE,
match its sections and tone.

GOAL: produce boss strategy guides for [RAID NAME] — ONE markdown file per boss covering ALL
difficulties, with Heroic/Mythic differences called out explicitly inline:
  guides/bosses/{raid-slug}/{boss-slug}.md
Subtitle each guide "Covers all difficulties; Mythic differences called out explicitly." and
give it dedicated "Heroic Changes" and "Mythic Changes" sections plus a difficulty summary
table — match the 8 existing Voidspire / March on Quel'Danas guides.

BOSS LIST: [paste the boss list here, OR write "enumerate the current raid's bosses from
Wowhead and confirm the list with me before writing"].

Each guide serves TWO jobs, like the Chimaerus one:
  1. It is fetched and injected into Claude's prompt as boss analysis context.
  2. It is a human raid-leader guide.

Each guide mirrors chimaerus-mythic.md: Overview, core mechanic, pre-pull setup, phase-by-phase
breakdown, an Ability Reference that says WHAT EACH LOGGED ABILITY MEANS (avoidable vs expected
vs unavoidable), add priority, "individual mistakes to flag (3+ pulls)", a non-avoidable/expected
list, a Heroic-vs-Mythic differences table, and quick tips.

STRICT SOURCING (same rules as the spec guides): research live Wowhead boss guides + the
in-game Dungeon Journal. The AVOIDABLE and INTERRUPT spell IDs are the most important data in
the whole file — confirm each one against a page you actually fetched; if you can't confirm an
ID, omit the number, list the ability by name, and flag it. NEVER fabricate or recall an ID
from memory. WCL's "Avoidable" classification is ground truth — prefer it over guide opinion.

CRITICAL — RaidLens integration. For each boss, also propose the exact js/boss-knowledge.js
entries so I can wire them in, using the EXACT encounter-name string WCL returns as the key
(e.g. 'Chimaerus, the Undreamt God' — confirm these names; see note below):
  - BOSS_KNOWLEDGE_META['<exact name>'] = { avoidableSpellIds: { id: 'Name', ... },
                                            interruptTargetSpellIds: { id: 'Name', ... } }
  - BOSS_NON_AVOIDABLE['<exact name>'] = new Set([ 'Ability', ... ])
  - BOSS_KNOWLEDGE['<exact name>'] = `...prose context block, Chimaerus-style...`
Heroic and Mythic usually share the same spell IDs; call out Mythic-only abilities (and any
Heroic-only simplifications) explicitly. The spell-ID maps are difficulty-agnostic in the JS,
so one set per boss is fine — and the guide is one file per boss with difficulty differences
inline, so the two stay one-to-one.

ENCOUNTER NAMES: the BOSS_KNOWLEDGE keys must match WCL's encounter names character-for-character
or the lookup fails. Before finalising the JS entries, ask me for a WarcraftLogs report from
this raid so you can read the exact fight.name strings (or I'll paste them).

EXECUTION: use the agent swarm — one agent per boss (each producing the boss's guide file +
the proposed JS entries), in parallel, under the strict rules above. When done, give me: the
files written, a single combined boss-knowledge.js patch to review, and a gap list of any
unconfirmed spell IDs (same style as guides/classes/SPEC_GUIDE_GAPS.md).

Before you start writing, confirm with me: (1) the raid name + boss list, (2) that you have the
WCL encounter-name strings, (3) anything ambiguous about difficulty differences.
```

---

## Notes for future-me / Christian

- **Why one file per boss?** The prose differs by difficulty (Mythic adds mechanics), but `BOSS_KNOWLEDGE_META` spell-ID maps are keyed by encounter name and are difficulty-agnostic in the current code. The 8 guides built for Voidspire and March on Quel'Danas adopted a single all-difficulty file per boss (`{boss-slug}.md`) with Heroic/Mythic changes called out inline — that is the convention going forward. One markdown guide per boss, one JS spell-ID entry per boss. (`guides/bosses/dreamrift/chimaerus-mythic.md` predates this convention and is the legacy exception — its filename stays as-is.)
- **Encounter-name accuracy is non-negotiable.** `BOSS_KNOWLEDGE`, `BOSS_KNOWLEDGE_META`, and `BOSS_NON_AVOIDABLE` are all keyed by the exact WCL `fight.name`. Chimaerus is stored as `'Chimaerus, the Undreamt God'`. Always confirm names from a real report.
- **This pairs with Step 12 (multi-boss support).** Once several bosses have knowledge entries, the analyzer already keys off `currentEncounterId` → boss name, so multi-boss mostly "just works" as long as the knowledge keys match. Building these guides is the data half of Step 12.
- **The Chimaerus guide already exists** (`guides/bosses/dreamrift/chimaerus-mythic.md`) — reuse it as the structure template. The Dreamrift is a single-boss raid (Chimaerus only); the other 8 scaffolded bosses are 6 Voidspire + 2 March on Quel'Danas encounters, and their guides are already built under `guides/bosses/voidspire/` and `guides/bosses/march-on-queldanas/`.
