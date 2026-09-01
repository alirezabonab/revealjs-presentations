# Company brain: challenges and solutions — deck context

## Communication job

By the end, product and technology colleagues should understand what a codebase map is, see the people and products it can support, compare the credible implementation routes, and approve a bounded pilot of the mixed approach because it best matches our need for evidence-backed cross-repository answers.

## Audience and purpose

- Audience: product and technology leadership, technical leads, engineers, and domain reviewers.
- Purpose: educate first, compare choices second, recommend an approach third, and ask for time and named ownership last.
- Tone: plain English, direct, technically honest, and decision-oriented.
- Everyday words over jargon in the slide text. Domain terms the team already
  uses stay (map, index, canonical records, golden answer); everything around
  them is written the way you would say it out loud. "Optimizes" became "is
  good at", "orchestration" became "more moving parts", "deterministic"
  became "machine rules", and "falsifiable" left the deck entirely.
- This is a funding and alignment deck, not a detailed architecture approval.

## Narrative

```text
short version → definition → evidence → who it serves → scope
              → routes → tradeoffs → the dial
              → recommendation → how it works → proof → ask
```

Slide two gives the whole argument up front, so nobody has to wait until the
end to learn what is being asked. Everything after it is detail underneath
those four lines.

The middle of the deck still follows the originally requested sequence:

1. what a codebase map and index are;
2. who and which products benefit;
3. which knowledge aspects it must cover;
4. the possible implementation routes;
5. the advantages and limits of each route; and
6. the approach that best fits the pilot and why.

The final two slides preserve the original purpose of the presentation: state
the three questions that decide the pilot, then ask the team for a bounded
amount of time, ownership, review support, and read-only access.

## Structure

Sixteen slides: a cover, a short-version summary, three chapter dividers, and
eleven content slides.

| # | Slide | Job |
| --- | --- | --- |
| 1 | cover | open with the idea |
| 2 | the short version | whole argument in ninety seconds |
| 3 | divider one | what it is, and who needs it |
| 4 | three things people mix up | separate map, index and brain |
| 5 | search finds words | the evidence chain, step by step |
| 6 | one shared map, many jobs | roles, their questions, and the products |
| 7 | four things to cover | scope beyond code structure |
| 8 | divider two | how we could build it |
| 9 | four routes | the real options |
| 10 | each route is good at | the four routes side by side |
| 11 | speed or proof | all four routes placed on one scale |
| 12 | divider three | what we recommend |
| 13 | the mixed route | what we need, so what we cannot use |
| 14 | how the mixed route works | the six-step loop |
| 15 | three questions | the pass rule, in plain terms |
| 16 | the ask | time, owner, reviewer, access, decision |

## Source material

Primary sources in the sibling `e2e-knowledge-graph` repository:

- `docs/problem-statement.md`
- `docs/knowledge-topic-contracts.md`
- `docs/artifact-contracts.md`
- `docs/evaluation/question-catalog.md`
- `docs/evaluation/question-to-artifact-mapping.md`
- `docs/research/scan-zero-findings.md`
- `docs/research/production-method-assessment.md`
- `docs/golden/`

External tool references are included only in speaker-note source blocks:

- GitLab Orbit: `https://docs.gitlab.com/orbit/`
- SCIP: `https://github.com/sourcegraph/scip`

The fact counts on the recommendation slide are the retained complete-scan counts recorded in `scan-zero-findings.md`. They demonstrate extraction volume, not answer quality.

The two-to-three-week duration on the closing slide is a suggested time box for team discussion. It is not an evidence-backed delivery estimate.

## Visual direction

The deck follows `06-product-development-process`: monochrome fenced `text`
stages, plain declarative titles, one argument per slide, a strong summary box
at the bottom, substantial speaker notes with source blocks, and the same
Reveal settings and minimal local theme. No colour and no inline HTML, so the
deck reads the same as its siblings.

### Why 88 columns

The engine fits one ASCII stage per slide into Reveal's 1400x900 box and caps
the font at 24px. With JetBrains Mono (0.6em advance) and the deck-wide 1.5
leading, the two binding limits are:

```text
max font by width  = 2206 / columns
max font by height =  499 / lines
```

Every content slide is therefore held to 88 columns and at most 21 lines, which
lands on the 24px ceiling. The earlier version used 100 columns and up to 24
lines and fitted at roughly 20px.

Two consequences worth keeping:

- No vertical `│` connectors inside prose. At 1.5 leading they never join the
  row below, so they read as stray ticks. Sequence is carried by numbering and
  blank lines instead.
- The cover and the three dividers set `class="ascii-tight"`, which drops the
  leading to 1 so the block lettering renders solid rather than striped.

### Matrices and tables

Anything with rows and columns is drawn so it reads as a matrix at a glance,
not as a paragraph in a box. Two heavy lines do that work:

- a **double rule** under the header row, and
- a **double divider** after the first column.

Thin lines stay thin everywhere else. The reader can then see instantly which
cells are labels and which are values. The four-route comparison also gets thin
rules between rows, because scanning one row across four columns is the whole
point of that slide; the two-column tables do not need them.

The generator keeps at least one space between cell text and the divider, so no
glyph ever presses against a line.

The route comparison and the speed-or-proof scale are deliberately paired: the
table names the four routes, and the scale then shows they are four positions
on one dial rather than four unrelated ideas.

### Chapter dividers

Each divider is a block numeral above the section title. They exist so a
sixteen-slide deck still feels short: three named chapters instead of one long
run. There are no other section slides.
