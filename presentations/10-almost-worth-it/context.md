# Almost Worth It - Deck Context

## Purpose

A Show and Tell talk for the AI Guild. One argument: the rule for what to build
never changed, but the cost of building did, so the same rule now says yes to a
list of things it used to say no to.

It is a talk, not a proposal. Nothing in it asks for budget or headcount.

## Source material

The content is the brief the author wrote in the session that produced this
deck: twelve items plus a closing caveat about maintenance. Nothing was added
from outside that brief. The two compliance lines on slide 9 restate the
constraints the organisation already applies - EU AI Act Annex III §5 for
anything that decides about an individual customer, and GDPR for production
data in test environments.

The numbers on slide 3 ("one week" becoming "an hour") are the brief's own
order-of-magnitude estimates, not measurements. The speaker notes say not to
defend them.

## Audience and framing

- AI Guild: developers and technical colleagues. Peer to peer, no explaining
  what a mock is.
- Twelve-minute Show and Tell slot. Ten slides, so roughly a minute each.
- Item 3 in the original brief - write the calculation twice and compare - is
  the one the author wanted room for, so it gets three of the ten slides. The
  other eleven items are one fast list.
- Tone is plain English and declarative, as in decks 06 to 08.

## Structure

Ten slides. Cover, the reframe, the economics, three on the double
implementation, one list, two on the limits, one close.

| # | Slide | Job |
| --- | --- | --- |
| 1 | cover | open with the title |
| 2 | the short version | the reframe and three things to leave with |
| 3 | the line moved | before and after cost, six examples |
| 4 | why your own tests do not save you | one head, one misunderstanding, two artefacts |
| 5 | the method | the five steps and the compare diagram |
| 6 | what falls out | the disagreements, the edge cases, why this is new |
| 7 | the other eleven | the rest of the brief, grouped into four themes |
| 8 | the part people miss | writing got cheap, keeping did not - the stale fake |
| 9 | build what you can delete | three safe shapes, the one that does not fit, the two compliance lines |
| 10 | what to do this week | one concrete action |

## Conventions

- Every slide is one ASCII stage, as `src/slide-contract.js` requires: exactly
  one fenced `text` block or one image per slide.
- Every stage is 88 columns wide.
- Speaker notes are short cues, one or two lines, not a script.
- The cover uses ANSI Shadow block letters, same glyph set as decks 05 to 08.

## If you rework the ASCII

The stages were generated rather than hand-aligned, so box midpoints and
connectors line up arithmetically rather than by eye. If you edit them by hand,
two conventions keep the art consistent:

- a box reached by a `▼` keeps a plain top border; a box reached by a `│` gets
  a `┴` at the connection point, and the box above it gets a `┬`
- forks and joins are centred on the midpoint of the box they come from, and
  the two arms are the same length

Check any edit by confirming every stage is still exactly 88 columns wide.
