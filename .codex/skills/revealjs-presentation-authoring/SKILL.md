---
name: revealjs-presentation-authoring
description: Create or update Reveal.js presentations in this repo. Use when the user wants a new presentation, new slides, theme changes, visual direction, colors, markdown deck updates, or presentation assets. Always ask clarifying questions first unless the request is already complete.
---

# Reveal.js Presentation Authoring

Use this skill for any request that changes presentation content, slide structure, local deck assets, or deck styling in this repo.

## First step

Always ask clarifying questions before editing, unless the user already provided enough detail to build safely.

Read `references/intake-checklist.md` when the request is loose, incomplete, or visual.

## Workflow

1. Ask concise clarifying questions.
2. Find the target presentation or decide the new presentation slug.
3. Reuse the existing project structure and patterns.
4. Make the changes in markdown, `presentation.json`, and local assets as needed.
5. Keep theme changes local to the presentation unless the user asks for global changes.
6. Verify the route locally if rendering, assets, or slide structure changed.

## New presentation

When creating a new presentation:

- create `presentations/<slug>/`
- start from the files in `assets/presentation-starter/`
- adjust `presentation.json`
- write the first deck in `deck.md`
- place local styling in `assets/theme.css`
- place local images and other files in `assets/`

## New slide

When creating or editing slides:

- keep `# Title` as the first visible line
- use one main idea per slide
- use fenced `text` blocks for ASCII diagrams
- use notes only when they help the speaker
- separate slides with `---`

## Theme and visuals

When shaping the deck theme:

- prefer local css in `assets/theme.css`
- use a small set of colors with clear contrast
- keep diagrams readable
- avoid mixing too many visual styles in one deck

## Resources

- For question prompts and the minimum brief, read `references/intake-checklist.md`
- For starter files, reuse `assets/presentation-starter/`
