# Engineering Handbook onboarding

Meeting: tech lead meeting, 13 October 2026.

Purpose: introduce the Engineering Handbook draft in PR #1. Agree, in this order, that it is the right direction, the right setup, and then the right content for the rules.

Audience: tech leads.

The deck has 15 slides and takes about 16 minutes before discussion. Press `S` in Reveal.js to open the speaker notes. The notes hold the detail and the sources.

## Content order

| # | Slide | Main point |
| --- | --- | --- |
| 1 | Cover | Engineering Handbook, tech lead meeting, PR #1 |
| 2 | Vision | One shared set of rules; we need it anyway (team growth, agents, many repositories, build and maintain) |
| 3 | Why now | Always needed and in the backlog; the Brain and agentic development made us start |
| 4 | Why this shape | Technology-agnostic chapters, subjects, and rules, Markdown, stable rule IDs, links. WHAT, HOW, WHY |
| 5 | Handbook structure | Abstract file tree of `docs/engineering-standards/`, tagged WHAT, HOW, WHY |
| 6-8 | The 14 chapters | One sentence per chapter: what it covers and why we need it |
| 9 | A subject and its rules | Annotated anatomy of a subject |
| 10 | Sample subject | Chapter 06, Repeated requests and safe retries (API-RTY-01, API-RTY-02) |
| 11 | Sample: apply and verify | The lost-response example and one check |
| 12 | Technology guides and decisions | What each folder tracks and how it links to rules |
| 13 | The current PR | 14 chapters → 97 subjects → 227 rules; status |
| 14 | Feedback we need | Direction → setup → content; comments under the PR |
| 15 | Handbook roadmap | Chapters now → technologies next → decisions when we choose |

## Sources and limits

Source: PR #1, **AUTO-286: Draft engineering handbook for team review**.

PR: https://github.com/Enklare-Development/enklare-ai-brain/pull/1

The source is the PR head commit `b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84` (`origin/task/AUTO-286` in the local `e2e-knowledge-graph` checkout), checked on 13 October 2026. Speaker notes link to this exact commit.

That commit changed every rule ID to the format chapter, subject code, rule number, for example `API-RTY-01` (was `API-06`). The deck uses the new IDs. Old heading links still work through compatibility anchors. The commit changed IDs only, so the counts below did not change.

Counts were checked against the source: 14 chapters, 97 subjects, and 227 rules. The per-chapter counts are in the chapter slide notes.

"35 repositories" comes from the handbook README's repository scope (the Brain's selected snapshot). It is not a count of every repository the team maintains.

The `technology/` folder existed in earlier drafts with 32 guides. The PR removed them and deferred technology guides. The `decisions/` folder path comes from the handbook plan. Neither folder has files in the PR. Only their templates exist.

All handbook guidance remains Draft until the required owners approve it. Existing repository requirements still apply. The PR states that the proposed application checks were not executed. The roadmap gives the order of the work. It sets no dates and assigns no reviewers.

## Presentation format

Route: `/presentation/11-engineering-handbook-onboarding`.

The deck uses one framed ASCII stage per slide. It uses the shared fonts, colors, and 1400 by 900 layout of decks 07-10. The cover uses ANSI Shadow block letters copied from the covers of decks 05-10.

Every stage is exactly 88 columns wide and at most 21 lines tall, so the text renders at the engine's 24px ceiling. The chapters use three slides so each entry has space around it.

Diagrams show only useful relationships: the abstract file tree, the subject anatomy, the guides and decisions that link to chapter rules, the chapter-subject-rule hierarchy, the feedback order, and the roadmap order.

## If you edit the ASCII

- Keep every stage at 88 columns and at most 21 lines.
- Pad each box row to the box width, and leave one space before the right border.
- Use full-gap connectors such as `│─────►│`.
- Do not put emoji inside the stages.
- Do not write `-<`, `->`, or `<-` inside a stage. JetBrains Mono turns them into arrow ligatures. Use `{placeholder}` for abstract names, as the handbook templates do.
