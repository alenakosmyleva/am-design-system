/**
 * @am/tokens — Design token constants
 *
 * Barrel file exporting paths to the raw JSON token files
 * produced by Figma export. These can be consumed by build
 * scripts (e.g. tools/scripts/build-tokens.js) to generate
 * platform-specific outputs.
 */

/** Path to the full merged token set */
export const TOKENS_JSON = 'libs/tokens/src/tokens.json';

/** Path to the palette primitives */
export const PALETTE_JSON = 'libs/tokens/src/palette.json';

/** Path to the semantic color tokens (light + dark) */
export const COLORS_JSON = 'libs/tokens/src/colors.json';

/** Path to shadow tokens */
export const SHADOW_JSON = 'libs/tokens/src/shadow.json';
