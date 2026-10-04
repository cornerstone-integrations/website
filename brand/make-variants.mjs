// Derives the logo variants in public/brand/ from the designer's base exports
// (logo-horizontal.svg, logo-vertical.svg, icon.svg). Re-run after replacing
// those base files:  node brand/make-variants.mjs
//
// Variants (rules in brand/README.md):
//   *-reversed  full color for dark backgrounds: Slate -> Mist, Sienna -> Sienna Light
//   *-white     one-color white knockout
//   logo-horizontal-compact*  horizontal lockup without the tagline, for small sizes
//   favicon.svg  reversed icon on a Slate tile
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../public/brand/', import.meta.url));
const SLATE = '#2c3a47';
const SIENNA = '#b95827';
const SIENNA_LIGHT = '#de7a45';
const MIST = '#c9d1d9';
const WHITE = '#ffffff';

// Normalize line endings: the designer exports use CRLF.
const read = (name) => readFileSync(dir + name, 'utf8').replace(/\r\n/g, '\n');
const write = (name, svg) => {
  writeFileSync(dir + name, svg);
  console.log('wrote', name);
};
const recolor = (svg, slate, sienna) =>
  svg.replaceAll(`"${SLATE}"`, `"${slate}"`).replaceAll(`"${SIENNA}"`, `"${sienna}"`);
const reversed = (svg) => recolor(svg, MIST, SIENNA_LIGHT);
const white = (svg) => recolor(svg, WHITE, WHITE);

// Compact lockup: drop the tagline rules and glyphs, then nudge the wordmark down
// so it centers on the icon again (the tagline was balancing it).
function compact(svg) {
  const out = svg
    .replace(/<path id="font_[^>]*>\n?/g, '')
    .replace(/<path [^>]*stroke="#b95827" d="M0 0H29.594"\/>\n?/g, '')
    .replace(/<g clip-path="url\(#clip_1\)">[\s\S]*?<\/g>\n<\/g>\n<\/g>\n/, '');
  // Wordmark letters are the slate paths that start after the icon (x > 100).
  const lines = out.split('\n');
  const firstLetter = lines.findIndex((l) => /matrix\(1,0,0,-1,124\.772/.test(l));
  const lastLetter = lines.findLastIndex((l) => /matrix\(1,0,0,-1,352\.6211/.test(l));
  if (firstLetter < 0 || lastLetter < 0) throw new Error('compact: wordmark paths not found');
  lines.splice(lastLetter + 1, 0, '</g>');
  lines.splice(firstLetter, 0, '<g transform="translate(0,5.5)">');
  return lines
    .join('\n')
    .replace(/aria-label="[^"]*"/, 'aria-label="Cornerstone"')
    .replace(/<title>[^<]*<\/title>/, '<title>Cornerstone</title>');
}

const horizontal = read('logo-horizontal.svg');
const vertical = read('logo-vertical.svg');
const icon = read('icon.svg');
const horizontalCompact = compact(horizontal);

write('logo-horizontal-reversed.svg', reversed(horizontal));
write('logo-horizontal-white.svg', white(horizontal));
write('logo-vertical-reversed.svg', reversed(vertical));
write('logo-vertical-white.svg', white(vertical));
write('icon-reversed.svg', reversed(icon));
write('icon-white.svg', white(icon));
write('logo-horizontal-compact.svg', horizontalCompact);
write('logo-horizontal-compact-reversed.svg', reversed(horizontalCompact));

// Favicon: the reversed icon, enlarged to fill a rounded Slate tile so it stays legible
// at 16px and visible on dark browser tabs. Rasterize favicon.ico and apple-touch-icon.png from it.
const iconPaths = reversed(icon).match(/<path [^>]*\/>/g).join('\n');
write(
  'favicon.svg',
  `<svg role="img" aria-label="Cornerstone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"><title>Cornerstone</title>
<rect width="360" height="360" rx="56" fill="${SLATE}"/>
<g transform="translate(180 180) scale(1.14) translate(-180 -180)">
${iconPaths}
</g>
</svg>
`,
);
