# Reveal.js Presentations

This project is a small presentation engine built on top of Reveal.js.

It is designed for many markdown-driven decks, where each presentation lives in its own folder and keeps its images, CSS, and other assets nearby.

The engine now uses one strict visible slide contract:

- one ASCII stage per slide
- or one image per slide
- speaker notes stay outside the visible stage

Project-level agent instructions live in `AGENTS.md`.
The repo-local presentation authoring skill lives in `.codex/skills/revealjs-presentation-authoring/`.

## What this setup gives you

- Route-based decks at `http://localhost:4100/presentation/<presentation-name>`
- Optional entry override at `http://localhost:4100/presentation/<presentation-name>/<entry-path>`
- One folder per presentation under `presentations/`
- Relative asset paths in markdown rewritten to `/content/<presentation-name>/...`
- Optional per-presentation config in `presentation.json`
- A simple index page at `/`
- Strict validation for mixed or unsupported slide content

## Project layout

```text
revealjs-presentations/
├── package.json
├── public/
│   ├── scripts/
│   │   └── presentation-runtime.js
│   └── styles/
│       ├── base.css
│       ├── index.css
│       └── presentation.css
├── src/
│   ├── markdown-utils.js
│   ├── presentation-loader.js
│   ├── server.js
│   ├── slide-contract.js
│   ├── template-renderer.js
│   └── templates/
│       ├── index.html
│       └── presentation.html
└── presentations/
    └── example/
        ├── assets/
        │   ├── board.svg
        │   └── theme.css
        ├── deck.md
        └── presentation.json
```

## Presentation folder contract

Each presentation should live in its own folder:

```text
presentations/<presentation-name>/
├── assets/
├── deck.md
└── presentation.json
```

`presentation.json` is optional. Example:

```json
{
  "title": "Quarterly Update",
  "entry": "deck.md",
  "theme": "simple",
  "styles": ["assets/theme.css"],
  "scripts": ["assets/custom.js"],
  "reveal": {
    "transition": "slide",
    "width": 1400,
    "height": 900
  }
}
```

## Markdown format

Use this structure:

````md
<!-- ## Slide (Section: name) -->
<!-- .slide: data-background="#f7f1e7" data-transition="fade" -->
```text
+---------------------------+
| ASCII TITLE               |
+---------------------------+
| One complete ASCII stage. |
+---------------------------+
```

Notes:
Speaker notes go here.

---

![Image-only slide](./assets/example.png)

---

<pre data-ascii-morph="demo"><code>Loading animation…</code></pre>

---

```text
+--------+
| ASCII  |
+--------+
```
````

Rules used by this engine:

- `---` splits horizontal slides
- `--` splits vertical slides
- `Note:` or `Notes:` starts speaker notes
- visible content must be exactly one ASCII stage or one image
- keep big diagrams inside fenced `text` blocks or one raw `<pre>` stage
- do not mix headings, bullets, captions, images, and ASCII on the same slide

## Run the project

This repo uses `yarn` for package manager commands.

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Create your local env file if needed:

   ```bash
   cp .env.example .env
   ```

3. Start the server:

   ```bash
   yarn start
   ```

   `yarn start` runs in watch mode and reloads the server when files change in `src/`, `presentations/`, or `public/`.

   If you want one non-watch server process, use:

   ```bash
   yarn start:once
   ```

4. Open:

   - `http://localhost:4100/`
   - `http://localhost:4100/presentation/example`

## Environment variables

The project reads `.env` automatically.

```env
PORT=4100
HOST=0.0.0.0
PRESENTATIONS_DIR=presentations
STATIC_DIR=public
INDEX_TITLE=Reveal.js Presentation Engine
```

## Expand the setup

- Add more folders under `presentations/`
- Keep deck-specific CSS or images in that folder's `assets/`
- Use `presentation.json` for per-deck theme, scripts, and Reveal options
- Add more markdown files in the same folder or nested subfolders and open them with `/presentation/<name>/<entry-path>`
