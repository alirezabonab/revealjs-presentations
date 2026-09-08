# Models and Effort Levels - Deck Context

## Purpose

This deck is the slide version of the first AI Guild topic session: which
frontier model to use, at what effort, for which kind of task, and how the
Claude and OpenAI lineups compare.

It is a talk, not a review. The talk script already existed in the ai-guild
repo. This deck puts it on screen and keeps the speaker notes close to that
script.

## Source material

The content comes from six files in the sibling repo `ai-guild`, under
`presentations/01-models-and-effort-levels/`:

- `TALK.md` - the talk, with timing and speaker notes per section. Primary
  source for the slide order and the notes.
- `CHEAT-SHEET.md` - the one-page takeaway. Source for the lineup table, the
  effort ladder, the starting points table, the five rules and the tooling
  slide.
- `examples/code-tasks.md` - seven code tasks with a starting configuration.
  Source for the code review boundary in the starting points notes.
- `examples/orchestration-tasks.md` - six orchestration shapes. Source for the
  three rules slide and the "same tool, paying off and not" pair.
- `examples/live-demo.md` - the demo script. Source for the demo slide.
- `README.md` - trust levels and vendor links. Prices and dates come from here.

All numbers on the slides are the numbers in those files. Nothing was added
from outside them. The README lists the vendor pages and the date they were
checked (2026-09-03).

## Audience and framing

- AI Guild: developers and technical colleagues who use Claude Code, the Claude
  API, ChatGPT or Codex day to day.
- About 20 minutes plus discussion. For the 12-minute Show and Tell slot, drop
  section four and run one demo comparison instead of three. The cover notes
  say so.
- Tone is plain English and declarative, as in deck 06. The reframe comes
  first (effort is the dial nobody turns), the evidence in the middle, the
  decision guide and the compliance frame at the end.

## Structure

Twenty-four slides: a cover, a short-version summary, five section dividers,
sixteen content slides, and a closing.

| # | Slide | Job |
| --- | --- | --- |
| 1 | cover | open with the idea |
| 2 | the short version | the reframe and the five rules, up front |
| 3 | divider one | two dials and a mode |
| 4 | two dials, and a mode on top | model, effort, and why ultra is not a level |
| 5 | the defaults nobody changed | three tools, three defaults, one ladder |
| 6 | divider two | the lineup |
| 7 | four tiers, two vendors | the lineup table with list prices |
| 8 | three things the table does not say | tiers align, price per task, newest at low |
| 9 | divider three | what effort actually does |
| 10 | the effort ladder | the five levels and what each does |
| 11 | three curve shapes | flat, real tradeoff, steep |
| 12 | when something checks the answer | low first, re-run the failures |
| 13 | signs you have it wrong | too little, too much |
| 14 | live demo | same bug, three configurations, scoreboard |
| 15 | divider four | orchestration, and when it pays |
| 16 | three rules from the measurements | bulk, one chain, sweep first |
| 17 | the same tool, paying off and not | forty modules against four files |
| 18 | divider five | the decision guide |
| 19 | starting points | task shape, start with, then |
| 20 | the five rules | with the reason behind each |
| 21 | where the dials are | Claude Code and the API |
| 22 | none of this changes with the model | the compliance frame |
| 23 | discussion | the question for the room |
| 24 | closing | two dials, on purpose |

## Before presenting

Open items carried over from the source README:

- Check prices against the vendor pages. The lineup slide carries list prices
  as of 2026-09-03, and they move.
- Find out which models are on the approved tools list. The compliance slide
  says to confirm it. Replace that line with the answer, or say it out loud.
- Confirm whether Fable 5.1's 30-day vendor-side retention has been assessed.
  The compliance slide states it as a CTO and Compliance decision.
- Build and rehearse the synthetic demo repo. Nothing from company code goes
  on screen.
- Confirm the Claude Code effort controls against the installed version. The
  tooling slide reflects the docs on the check date.

## Compliance content

Slide 22 is deliberate, not decoration. It carries the frame from section 8 of
the talk:

- no customer PII, credit, KYC or AML data, and no credentials, in any of these
  tools (ISMS 1.4)
- no model here is suitable for credit decisioning, scoring or risk assessment
  without CTO and Compliance review - high-risk under the EU AI Act
  (2024/1689) Annex III point 5
- Fable 5.1's 30-day vendor-side retention is a CTO and Compliance decision
- a new model or vendor reached through the API is an ICT third-party
  arrangement under DORA (EU 2022/2554)

The slide and its notes state that these are risk flags, not legal advice, and
that compliance and legal sign off the specifics. Keep that caveat if the slide
is edited.

## Visual direction

Theme and styling follow `06-product-development-process`:

- same `presentation.json` reveal settings, `simple` theme, fade transition
- `assets/theme.css` keeps no local overrides, as deck 06 effectively does
- every slide is one ASCII stage, which is what the engine's slide contract
  allows
- content stages are 100 columns wide, section dividers are 66
- the cover uses the same block lettering as decks 05 to 07 and sets
  `class="ascii-tight"` so the letters render solid rather than striped
- no emoji anywhere inside the ASCII, so column widths stay stable off-Mac
- the only glyphs outside plain ASCII are the box-drawing set, `█`, `·` and
  `▲`, all of which the sibling decks already use

The curve sketches on slide 11 are horizontal `█` bars rather than plotted
points. A bar on one row does not depend on vertical alignment across rows,
and the 1.5 line-height would otherwise show gaps.

## Maintaining the ASCII

The deck was generated from a small script that pads every row to an exact
width, so all borders line up by construction. If you hand-edit a box, keep
the row widths equal - a single missing space breaks the vertical borders
further down. Three checks worth repeating after an edit:

1. every line inside one box has the same length
2. every vertical border character sits directly above and below another box
   character
3. no character wider than one column is introduced, and no emoji at all

The engine fits one stage per slide into Reveal's 1400x900 box and caps the
font at 24px. At 100 columns the width limit is about 22px. A slide of more
than 23 lines is then limited by height instead, at roughly 499 divided by the
line count. The densest slides here are the compliance table (29 lines) and
the tooling slide (27 lines), which is why they carry no spare blank rows.

The engine validator is the other gate:

```bash
node -e "import('./src/slide-contract.js').then(async m => { const fs = await import('node:fs/promises'); m.validatePresentationMarkdown(await fs.readFile(process.argv[1],'utf8'), { presentationName: '08-models-and-effort-levels', entry: 'deck.md' }); console.log('PASS') })" presentations/08-models-and-effort-levels/deck.md
```

## Route

- `/presentation/08-models-and-effort-levels`
