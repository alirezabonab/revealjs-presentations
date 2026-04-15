import path from "node:path";

const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;
const SPECIAL_URL_PATTERN = /^(?:#|\/|data:|mailto:|tel:)/i;

function isRelativeAssetUrl(value) {
  if (!value) {
    return false;
  }

  return !ABSOLUTE_URL_PATTERN.test(value) && !SPECIAL_URL_PATTERN.test(value);
}

function normalizeContentPath(targetPath) {
  const normalized = path.posix.normalize(targetPath);

  if (normalized.startsWith("../")) {
    throw new Error(`Asset path escapes the presentation folder: ${targetPath}`);
  }

  return normalized.replace(/^\.\//, "");
}

function toContentUrl(presentationName, markdownDir, rawTarget, contentBasePath) {
  if (!isRelativeAssetUrl(rawTarget)) {
    return rawTarget;
  }

  const [pathname, suffix = ""] = rawTarget.split(/([?#].*)/, 2);
  const combinedPath = path.posix.join(markdownDir, pathname);
  const normalizedPath = normalizeContentPath(combinedPath);

  return `${contentBasePath}/${presentationName}/${normalizedPath}${suffix}`;
}

export function rewriteMarkdownAssetUrls(
  markdown,
  presentationName,
  markdownRelativePath,
  contentBasePath = "/content"
) {
  const markdownDir = path.posix.dirname(markdownRelativePath);
  const baseDir = markdownDir === "." ? "" : markdownDir;

  let rewritten = markdown.replace(
    /(!?\[[^\]]*]\()([^)]+)(\))/g,
    (fullMatch, prefix, target, suffix) => {
      const cleanTarget = target.trim();
      return `${prefix}${toContentUrl(
        presentationName,
        baseDir,
        cleanTarget,
        contentBasePath
      )}${suffix}`;
    }
  );

  rewritten = rewritten.replace(
    /((?:src|href)=["'])([^"']+)(["'])/g,
    (fullMatch, prefix, target, suffix) => {
      return `${prefix}${toContentUrl(
        presentationName,
        baseDir,
        target,
        contentBasePath
      )}${suffix}`;
    }
  );

  return rewritten;
}

export function escapeMarkdownTemplate(markdown) {
  return markdown.replace(/<\/textarea/gi, "&lt;/textarea");
}

export function normalizePresentationAssetPath(assetPath) {
  const normalized = normalizeContentPath(assetPath);
  return normalized;
}
