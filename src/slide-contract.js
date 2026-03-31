const HORIZONTAL_SEPARATOR_PATTERN = /^---$/;
const VERTICAL_SEPARATOR_PATTERN = /^--$/;
const NOTE_START_PATTERN = /^Notes?:/i;
const HTML_COMMENT_PATTERN = /<!--[\s\S]*?-->/g;
const IMAGE_ONLY_PATTERN = /^!\[[^\]]*]\([\s\S]+?\)$/;
const ASCII_FENCE_PATTERN = /^```(?:text|txt|plaintext)\s*\n[\s\S]*\n```$/i;
const ASCII_PRE_PATTERN = /^<pre\b[\s\S]*<\/pre>$/i;

function stripHtmlComments(markdown) {
  return markdown.replace(/\r\n/g, "\n").replace(HTML_COMMENT_PATTERN, "");
}

function updateBlockState(line, state) {
  const trimmed = line.trim();

  if (!state.inHtmlPre && trimmed.startsWith("```")) {
    state.inFence = !state.inFence;
  }

  if (state.inFence) {
    return;
  }

  const hasPreOpen = /<pre\b/i.test(line);
  const hasPreClose = /<\/pre>/i.test(line);

  if (!state.inHtmlPre && hasPreOpen && !hasPreClose) {
    state.inHtmlPre = true;
    return;
  }

  if (state.inHtmlPre && hasPreClose) {
    state.inHtmlPre = false;
  }
}

function splitIntoLeafSlides(markdown) {
  const groups = [];
  const lines = stripHtmlComments(markdown).split("\n");
  const state = { inFence: false, inHtmlPre: false };
  let currentGroup = [];
  let currentSlide = [];

  const pushSlide = () => {
    currentGroup.push(currentSlide.join("\n"));
    currentSlide = [];
  };

  const pushGroup = () => {
    pushSlide();
    groups.push(currentGroup);
    currentGroup = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!state.inFence && !state.inHtmlPre && HORIZONTAL_SEPARATOR_PATTERN.test(trimmed)) {
      pushGroup();
      continue;
    }

    if (!state.inFence && !state.inHtmlPre && VERTICAL_SEPARATOR_PATTERN.test(trimmed)) {
      pushSlide();
      continue;
    }

    currentSlide.push(line);
    updateBlockState(line, state);
  }

  pushGroup();

  return groups;
}

function extractVisibleContent(slideSource) {
  const lines = stripHtmlComments(slideSource).split("\n");
  const state = { inFence: false, inHtmlPre: false };
  const visibleLines = [];

  for (const line of lines) {
    if (!state.inFence && !state.inHtmlPre && NOTE_START_PATTERN.test(line.trim())) {
      break;
    }

    visibleLines.push(line);
    updateBlockState(line, state);
  }

  return visibleLines.join("\n").trim();
}

function buildSlideLabel(horizontalIndex, verticalIndex, groupSize) {
  if (groupSize === 1) {
    return String(horizontalIndex);
  }

  return `${horizontalIndex}.${verticalIndex}`;
}

function buildValidationError(message, context) {
  const error = new Error(
    `Invalid slide ${context.slideLabel} in "${context.presentationName}/${context.entry}": ${message}`
  );
  error.statusCode = 400;
  return error;
}

function validateSlideContent(content, context) {
  if (!content) {
    throw buildValidationError(
      "slides must contain exactly one ASCII stage or one image stage.",
      context
    );
  }

  if (ASCII_FENCE_PATTERN.test(content) || ASCII_PRE_PATTERN.test(content)) {
    return;
  }

  if (IMAGE_ONLY_PATTERN.test(content)) {
    return;
  }

  const hasAsciiStage = /```(?:text|txt|plaintext)\b/i.test(content) || /<pre\b/i.test(content);
  const hasImageStage = /!\[[^\]]*]\([^)]+\)/.test(content);

  if (hasAsciiStage && hasImageStage) {
    throw buildValidationError("ASCII and image content cannot share the same slide.", context);
  }

  if (hasAsciiStage) {
    throw buildValidationError("ASCII slides can only contain one visible ASCII stage.", context);
  }

  if (hasImageStage) {
    throw buildValidationError("image slides can only contain one visible image.", context);
  }

  throw buildValidationError(
    "supported slide content is one fenced text block, one <pre> stage, or one markdown image.",
    context
  );
}

export function validatePresentationMarkdown(markdown, context) {
  const groups = splitIntoLeafSlides(markdown);

  groups.forEach((group, groupIndex) => {
    group.forEach((slideSource, slideIndex) => {
      validateSlideContent(extractVisibleContent(slideSource), {
        ...context,
        slideLabel: buildSlideLabel(groupIndex + 1, slideIndex + 1, group.length)
      });
    });
  });
}
