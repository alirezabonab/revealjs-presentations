# Jev - Deck Context

## Purpose

This deck is the second AI Guild topic session. Deck 08 was about turning two
dials on a model that writes. This one is about the case where you do not want
writing at all: a model that returns a typed decision instead of a paragraph.

It is a talk, not a review. Nothing in it is built, approved, or running.

## Source material

Jev launched on 15 September 2026, after the assistant's knowledge cutoff, so
everything here came from the open web and was read at build time
(22 September 2026):

- `typesafe.ai/blog/introducing-system-one-models-and-jev` - the launch post.
  Source for the System One framing, pricing, the 70-500 ms latency figure,
  the 40x-200x speed claim, the RLCD name, and the stated limitations.
- `docs.typesafe.ai/introduction` - the three primitives and their response
  fields, the "atomic questions, compose in code" guidance.
- `docs.typesafe.ai/concepts/use-case-map` - TypeSafe's own use-case list.
  Source for the financial-crime, insurance-claim and triage framings behind
  slides 7 and 8.
- `docs.aimlapi.com/api-references/decision-models/typesafe/jev` - confirms the
  primitive names, including that the boolean primitive is called `noul`.
- `firecrawl.dev/blog/what-is-jev` - the single-forward-pass explanation and
  the pre-Jev alternatives on slide 5.
- `pearpages.com` (16 Sep 2026) - the confirmed-versus-claimed split that
  slide 9 is built from, including the absence of reliability diagrams.
- `mindstudio.ai/blog/jev-use-cases-automation` - the measured 1,000-email
  example on slide 6.

## Numbers that are contested

Deliberately kept off the slides, because the secondary sources disagree:

- **Benchmark accuracy.** Two write-ups give different tables for TypeSafe's
  own workflow eval - one has Jev at 67.8%, another at 76.0%, against different
  model line-ups. Slide 6 therefore says "roughly the frontier band, below the
  top tier on the harder ones" rather than a number.
- **Context window.** The API reference says 32K; one write-up says 64K. Slide
  9 says "tens of thousands of tokens, not millions".

If either is pinned down before presenting, put the number on the slide.

## Audience and framing

- AI Guild: developers and technical colleagues, same room as decks 05 to 08.
- About twenty minutes plus discussion.
- Tone is plain English and declarative, as in decks 06 and 08. The category
  correction comes first (it is not a chatbot), the mechanism in the middle,
  the use cases and then the limits and the boundary at the end.

## Structure

Eleven slides: a cover, nine content slides, and a closing. No section
dividers - the deck is short enough not to need them.

| # | Slide | Job |
| --- | --- | --- |
| 1 | cover | name the category correction |
| 2 | what Jev is | System One model, and the three primitives |
| 3 | the problem it solves | the judgment in the middle of the pipeline |
| 4 | how it solves it | no generation loop, one pass, calibration |
| 5 | what we used before | rules, classifiers, LLM+JSON, a person |
| 6 | cost and speed | the numbers, and what they actually change |
| 7 | use case one | transaction monitoring triage |
| 8 | use case two | loan and claim document intake |
| 9 | what is still just a claim | the limits, on screen not in a footnote |
| 10 | the boundary | the E2E compliance frame |
| 11 | closing | three sentences and two actions |

## Before presenting

- Re-check pricing and latency against `typesafe.ai`. The model is weeks old
  and the launch post says pricing "may be subsidised".
- Resolve the two contested numbers above if the vendor has published since.
- Confirm with the CTO whether any Jev evaluation is approved at all before
  describing slides 7 and 8 as things we might build. As written they are
  sketches on synthetic data, and the notes say so.
- Both fintech use cases were chosen to sit on the near side of the EU AI Act
  high-risk line. If anyone edits them, keep them there.

## Compliance content

Slide 10 is deliberate, not decoration, and mirrors slide 22 of deck 08:

- no customer PII, credit, KYC or AML data into a third-party decision API
  without CTO approval
- credit decisioning, scoring and risk assessment are high-risk under the EU AI
  Act (2024/1689) Annex III point 5 - CTO and Compliance review first, and no
  automated decision with a legal or financial effect on a customer
- a model that returns no rationale cannot on its own satisfy an obligation to
  explain a decision
- a new vendor reached over an API is an ICT third-party arrangement under DORA
  (EU 2022/2554)

The slide states that these are risk flags, not legal advice, and that
Compliance and Legal own the specifics. Keep that caveat if the slide is
edited.

## Visual direction

Theme and styling follow `08-models-and-effort-levels`:

- same `presentation.json` reveal settings, `simple` theme, fade transition
- `assets/theme.css` carries no local overrides
- every slide is one ASCII stage, 100 columns wide
- the cover uses the same ANSI Shadow block lettering as decks 05 to 08 and
  sets `class="ascii-tight"` so the letters render solid rather than striped

The deck was generated by a script that computes every box's padding, so the
borders cannot drift. Editing a stage by hand is fine; just keep the stage at
100 columns and check that the box columns still line up.
