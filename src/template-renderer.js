import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { escapeMarkdownTemplate } from "./markdown-utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, "templates");
const templateCache = new Map();

async function loadTemplate(name) {
  if (!templateCache.has(name)) {
    templateCache.set(name, await fs.readFile(path.join(templatesDir, name), "utf8"));
  }

  return templateCache.get(name);
}

function injectTokens(template, tokens) {
  return Object.entries(tokens).reduce((output, [token, value]) => {
    return output.replaceAll(`{{${token}}}`, value);
  }, template);
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderThemeBootScript() {
  return `<script>
    (() => {
      const storageKey = "presentation-color-mode";
      const defaultMode = "dark";
      const toggleIcons = {
        light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5M5.85 5.85l1.8 1.8M16.35 16.35l1.8 1.8M18.15 5.85l-1.8 1.8M7.65 16.35l-1.8 1.8"></path></svg>',
        dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.2 14.2A8.8 8.8 0 0 1 9.8 3.8a9 9 0 1 0 10.4 10.4Z"></path></svg>'
      };

      const readMode = () => {
        const savedMode = window.localStorage.getItem(storageKey);
        return savedMode === "light" || savedMode === "dark" ? savedMode : defaultMode;
      };

      const themeColors = {
        dark: "#0c1115",
        light: "#f6f1e8"
      };

      const applyMode = (mode) => {
        document.documentElement.dataset.colorMode = mode;
        const nextMode = mode === "dark" ? "light" : "dark";
        const toggleLabel = nextMode === "light" ? "Switch to light mode" : "Switch to dark mode";
        const toggleIcon = toggleIcons[nextMode];

        document.querySelectorAll("[data-theme-toggle]").forEach((node) => {
          node.setAttribute("aria-label", toggleLabel);
          node.setAttribute("title", toggleLabel);
        });

        document.querySelectorAll("[data-theme-icon]").forEach((node) => {
          node.innerHTML = toggleIcon;
        });

        const metaTheme = document.querySelector('meta[name="theme-color"]');

        if (metaTheme) {
          metaTheme.setAttribute("content", themeColors[mode]);
        }
      };

      window.toggleColorMode = () => {
        const nextMode = document.documentElement.dataset.colorMode === "dark" ? "light" : "dark";
        window.localStorage.setItem(storageKey, nextMode);
        applyMode(nextMode);
      };

      applyMode(readMode());

      document.addEventListener("DOMContentLoaded", () => {
        applyMode(readMode());
      });
    })();
  </script>`;
}

function renderThemeToggle() {
  return `<button class="theme-toggle" data-theme-toggle type="button" onclick="toggleColorMode()" aria-label="Switch to light mode" title="Switch to light mode">
    <span class="theme-toggle__icon" data-theme-icon aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5M5.85 5.85l1.8 1.8M16.35 16.35l1.8 1.8M18.15 5.85l-1.8 1.8M7.65 16.35l-1.8 1.8"></path></svg></span>
  </button>`;
}

function renderPresentationItems(presentations) {
  return presentations
    .map((presentation) => {
      const defaultRoute = `/presentation/${presentation.name}`;

      return `
        <article class="index-card">
          <div class="index-card__copy">
            <h2><a href="${defaultRoute}">${escapeHtml(presentation.title)}</a></h2>
            <p>${escapeHtml(presentation.name)}</p>
          </div>
          <code class="index-card__route">${escapeHtml(defaultRoute)}</code>
          <a class="index-card__action" href="${defaultRoute}">Open</a>
        </article>`;
    })
    .join("");
}

export async function renderIndexPage({ indexTitle, presentations }) {
  const template = await loadTemplate("index.html");

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(indexTitle),
    INDEX_TITLE: escapeHtml(indexTitle),
    PRESENTATION_COUNT: String(presentations.length),
    PRESENTATION_LABEL: presentations.length === 1 ? "presentation" : "presentations",
    PRESENTATION_ITEMS: renderPresentationItems(presentations),
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderThemeToggle()
  });
}

export async function renderPresentationPage(presentation) {
  const template = await loadTemplate("presentation.html");
  const extraStyles = presentation.styles
    .map((href) => `<link rel="stylesheet" href="${href}" />`)
    .join("\n");
  const extraScripts = presentation.scripts
    .map((src) => `<script src="${src}"></script>`)
    .join("\n");

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(presentation.title),
    REVEAL_THEME: escapeHtml(presentation.theme),
    EXTRA_STYLES: extraStyles,
    EXTRA_SCRIPTS: extraScripts,
    MARKDOWN_SOURCE: escapeMarkdownTemplate(presentation.markdown),
    REVEAL_CONFIG: JSON.stringify(presentation.reveal, null, 2),
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderThemeToggle()
  });
}
