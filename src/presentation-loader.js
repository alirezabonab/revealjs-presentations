import fs from "node:fs/promises";
import path from "node:path";
import { normalizePresentationAssetPath, rewriteMarkdownAssetUrls } from "./markdown-utils.js";
import { validatePresentationMarkdown } from "./slide-contract.js";

const DEFAULT_CONFIG = {
  title: "Reveal Presentation",
  entry: "deck.md",
  theme: "white",
  styles: [],
  scripts: [],
  reveal: {
    hash: true,
    controls: true,
    progress: true,
    center: true,
    controlsLayout: "edges",
    transition: "fade",
    backgroundTransition: "none",
    navigationMode: "default",
    slideNumber: "c/t",
    margin: 0.08
  }
};

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function loadPresentationConfig(presentationDir) {
  const configPath = path.join(presentationDir, "presentation.json");

  if (!(await pathExists(configPath))) {
    return structuredClone(DEFAULT_CONFIG);
  }

  const rawConfig = await fs.readFile(configPath, "utf8");
  const parsedConfig = JSON.parse(rawConfig);

  return {
    ...structuredClone(DEFAULT_CONFIG),
    ...parsedConfig,
    reveal: {
      ...structuredClone(DEFAULT_CONFIG.reveal),
      ...(parsedConfig.reveal ?? {})
    }
  };
}

function normalizeEntryName(entryName) {
  if (!entryName) {
    return null;
  }

  const posixEntry = entryName.split(path.sep).join(path.posix.sep);
  const withExtension = posixEntry.endsWith(".md") ? posixEntry : `${posixEntry}.md`;
  const normalized = path.posix.normalize(withExtension);

  if (path.posix.isAbsolute(normalized) || normalized.startsWith("../")) {
    const error = new Error(`Markdown entry path escapes the presentation folder: ${entryName}`);
    error.statusCode = 400;
    throw error;
  }

  return normalized;
}

function normalizeAssetList(presentationName, items = []) {
  return items.map((item) => {
    const normalized = normalizePresentationAssetPath(item);
    return `/content/${presentationName}/${normalized}`;
  });
}

export async function listPresentations(presentationsRoot) {
  const entries = await fs.readdir(presentationsRoot, { withFileTypes: true });
  const presentationDirs = entries.filter((entry) => entry.isDirectory());

  const presentations = await Promise.all(
    presentationDirs.map(async (entry) => {
      const presentationName = entry.name;
      const presentationDir = path.join(presentationsRoot, presentationName);
      const config = await loadPresentationConfig(presentationDir);

      return {
        name: presentationName,
        title: config.title,
        entry: config.entry
      };
    })
  );

  return presentations.sort((left, right) => left.name.localeCompare(right.name));
}

export async function loadPresentation(presentationsRoot, presentationName, requestedEntryName) {
  const presentationDir = path.join(presentationsRoot, presentationName);

  const stats = await fs.stat(presentationDir).catch(() => null);

  if (!stats?.isDirectory()) {
    const error = new Error(`Presentation "${presentationName}" was not found.`);
    error.statusCode = 404;
    throw error;
  }

  const config = await loadPresentationConfig(presentationDir);
  const entry = normalizeEntryName(requestedEntryName) ?? config.entry;
  const entryPath = path.join(presentationDir, entry);
  const markdownExists = await pathExists(entryPath);

  if (!markdownExists) {
    const error = new Error(
      `Markdown entry "${entry}" was not found in presentation "${presentationName}".`
    );
    error.statusCode = 404;
    throw error;
  }

  const rawMarkdown = await fs.readFile(entryPath, "utf8");
  validatePresentationMarkdown(rawMarkdown, {
    presentationName,
    entry
  });
  const markdownRelativePath = path.posix.normalize(entry.split(path.sep).join(path.posix.sep));
  const markdown = rewriteMarkdownAssetUrls(rawMarkdown, presentationName, markdownRelativePath);

  return {
    name: presentationName,
    title: config.title,
    markdown,
    theme: config.theme,
    styles: normalizeAssetList(presentationName, config.styles),
    scripts: normalizeAssetList(presentationName, config.scripts),
    reveal: config.reveal,
    entry
  };
}
