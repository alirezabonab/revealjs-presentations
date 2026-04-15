import fs from "node:fs/promises";

export async function loadAsciiMorphBrowserSource(entryPath) {
  const source = await fs.readFile(entryPath, "utf8");

  return source.replace(
    /export default AsciiMorph;/,
    "window.AsciiMorph = AsciiMorph;"
  );
}
