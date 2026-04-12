**important: use easy english tone**

# Reveal.js Presentation Agent Guide

## Purpose

This project is a markdown-first presentation engine built with Reveal.js.

The goal is to let a human describe a presentation need in plain language, and let the agent create or update:

- presentations
- markdown slides
- local assets
- deck themes
- colors and visual direction

## When working in this repo

- Always ask clarifying questions before making slide, presentation, theme, or content changes.
- Only skip questions when the user already gave enough detail to build safely.
- If the request is vague, stop and ask for the missing details first.
- After the answers are clear, make the changes directly in the repo.
- Verify the route locally when slide structure, assets, or presentation rendering changed.
- Only use `yarn` for package manager commands in this repo. Do not use `npm` or `pnpm`.

## Required clarifying questions

Before building or editing a deck, ask about the missing parts:

- what is the goal of the presentation
- who is the audience
- is this a new presentation or an update to an existing one
- what route or presentation slug should be used
- how many slides or what length is expected
- what visual direction, brand, or color mood is wanted
- are there source notes, docs, links, or images to use
- should speaker notes be included

## Project structure rules

- Each presentation lives in `presentations/<presentation-name>/`
- Default entry file is `deck.md`
- Extra markdown entries can live in subfolders
- Routes are:
  - `/presentation/<presentation-name>`
  - `/presentation/<presentation-name>/<entry-path>`
- Keep presentation-local images, css, and other files in that presentation folder, usually under `assets/`
- Keep deck config in `presentation.json`

## Slide writing rules

- Use `<!-- ## Slide (Section: name) -->` for human grouping
- Use `<!-- .slide: ... -->` for Reveal.js slide options
- Make `# Title` the first visible line of every slide
- Use normal markdown for body content
- Put ASCII diagrams in fenced `text` blocks
- Do not put emoji inside ASCII diagram boxes. Emoji width can change and break vertical alignment.
- Emoji are okay outside ASCII diagram boxes.
- Put notes after `Note:` or `Notes:`
- Use `---` between slides
- Keep each slide focused on one main idea

## Theme rules

- Prefer theme changes in `presentations/<presentation-name>/assets/theme.css`
- Keep colors high contrast and easy to read
- Make room for ASCII diagrams and large images
- Keep one clear visual direction per deck

## Local skill

For requests about creating or shaping presentations, use the local skill at:

- `.codex/skills/revealjs-presentation-authoring/SKILL.md`
