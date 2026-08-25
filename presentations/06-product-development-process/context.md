# Product Development Process - Feedback Deck Context

## Purpose

This deck presents the feedback on the E2E Group product development process.

It is a review, not a rewrite. The two documents under review already exist and
this deck responds to them.

## Source material

The content comes from three files in the sibling repo
`e2e-prod-tech-ways-of-working`:

- `feedback.md` - the review itself: overall assessment, what works,
  14 recommended improvements, the recommended operating structure, and the six
  highest-priority changes. This is the primary source for the deck.
- `jira-requirements-and-artifacts-proposal-2026-08.md` - the proposed artifact
  and Jira model. Source for the Confluence / Figma / Jira split, the hierarchy,
  the NFR treatment, and the linking-rules discussion question.
- `product-development-process-overview.ppt` - the 11-phase process overview.
  Source for the phase names, the per-phase required and extra outputs, the
  involvement table, the RACI table, and the loopback list.

The involvement figures on the compliance slide are read straight from the
involvement and RACI tables in the .ppt, so they can be checked against it.

## Audience and framing

- Product and tech leadership: PM, UX, tech leads, CTO and CPO.
- These are the people who authored or own the process, so the deck keeps the
  Jira, RACI and NFR vocabulary and glosses only the regulatory items.
- Tone is plain English and declarative. Strengths come before criticism.
- The deck asks for agreement on six changes, and owners for the two that need a
  real decision.

## Structure

```text
cover
the short version                    strong foundation, three things to fix
SECTION ONE   what already works     five strengths, the artifact split
SECTION TWO   the three gaps         reads as a line, no unit of flow,
                                     compliance fades
SECTION THREE the rest of the        gates, ownership, two rules, timing,
              feedback               linking, NFRs, measurement, small fixes
SECTION FOUR  regulated flows        four things that stop being optional
SECTION FIVE  the model we           six stages, what each stage owns,
              recommend              the six priority changes
closing
```

## Compliance content

Section four is deliberate, not decoration. It carries the regulatory flags from
improvement 12 of `feedback.md`:

- wording approval at UAT for flows under konsumentkreditlagen (2010:1846) and
  LFD (2018:1219)
- a change record at deploy, for DORA (EU 2022/2554)
- a visible high-risk rule for credit decisioning, scoring and risk assessment
  under the EU AI Act (2024/1689) Annex III point 5, and the same visibility for
  KYC and AML work under penningtvättslagen (2017:630)
- deciding the traceability question before an FI inspection forces it

The slide and its notes state that these are risk flags, not legal advice, and
that compliance and legal sign off the specifics. Keep that caveat if the slide
is edited.

## Visual direction

Theme and styling are copied from `05-ai-native-mcp-platform`:

- `assets/theme.css` is the same file
- same `presentation.json` reveal settings, `simple` theme, fade transition
- every slide is one ASCII stage, which is what the engine's slide contract
  allows
- content boxes are 100 columns wide, section dividers are 66
- no emoji anywhere inside the ASCII, so column widths stay stable off-Mac

## Maintaining the ASCII

Every box in the deck is built so that its border columns line up exactly. If
you hand-edit a box, keep the row widths equal - a single missing space breaks
the vertical borders further down. Three checks worth repeating after an edit:

1. every line inside one box has the same length
2. every vertical border character sits directly above and below another box
   character
3. no character wider than one column is introduced, and no emoji at all

Content boxes are 100 columns wide and section dividers are 66, so a new slide
should reuse those widths rather than picking a new one.

The engine validator is the other gate:

```bash
node --input-type=module -e "import { validatePresentationMarkdown } from './src/slide-contract.js'; import { readFileSync } from 'node:fs'; validatePresentationMarkdown(readFileSync('presentations/06-product-development-process/deck.md','utf8'), { presentationName: '06-product-development-process', entry: 'deck.md' }); console.log('ok');"
```

## Route

- `/presentation/06-product-development-process`
