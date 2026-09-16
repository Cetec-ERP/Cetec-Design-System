/**
 * Panda config used ONLY to generate Playroom's static CSS.
 *
 * Playroom snippets are strings evaluated in the browser, so Panda's static
 * extractor never sees them. Anything a snippet might use has to be generated
 * up front via `staticCss`.
 *
 * ---------------------------------------------------------------------------
 * WHY `staticCss` IS SPLIT FOUR WAYS
 * ---------------------------------------------------------------------------
 * This config used to apply a single rule to all 47 properties:
 *
 *     conditions: ['light', 'dark'],
 *     responsive: true,
 *
 * That multiplied every property by every token value, by 6 breakpoints, by 2
 * themes — including combinations that cannot occur in real code. Measured from
 * the generated output at the time (9.1 MB, 271,536 lines, ~76,000 selectors,
 * of which `@layer utilities` was 97%):
 *
 *     bg    10,637 selectors
 *     c     10,634
 *     fill  10,621
 *     stk   10,620
 *     -----------------------
 *     4 colour properties = 42,512 selectors = 56% of the entire file
 *
 * A representative rule from that output:
 *
 *     .xs\:cetec-fill_colorPalette\.pear\.bold {
 *       fill: var(--cetec-colors-color-palette-pear-bold);
 *     }
 *
 * An SVG fill colour, from the full palette, scoped to the `xs` breakpoint.
 * Nobody writes that — we generated ~886 of them per colour property, per
 * breakpoint, anyway.
 *
 * Splitting the block along the axis each property actually varies on:
 *
 *     A. Colour              -> themed, NOT responsive
 *     B. Themed non-colour   -> themed, NOT responsive
 *     C. Layout & spacing    -> responsive, NOT themed
 *     D. Typography          -> responsive, NOT themed
 *
 * MEASURED RESULT (2026-08-05, 298 source files):
 *
 *     before   124,457 ms   8 MiB
 *     after     20,838 ms   4 MiB
 *     -----------------------------
 *              6.0x faster  2.0x smaller
 *
 * Note that time improved 6x while output only halved. Panda's cost is in
 * generating and deduping the candidate rule set, not in writing the file, so
 * removing impossible combinations saves far more work than it saves bytes.
 * Do not treat output size as a proxy for generation time here.
 *
 * ---------------------------------------------------------------------------
 * IF SOMETHING RENDERS UNSTYLED
 * ---------------------------------------------------------------------------
 * The failure mode this introduces is a snippet using a combination the split
 * no longer emits — most plausibly a genuinely responsive colour, e.g.
 * `<Box color={{ base: 'text', md: 'text.subtle' }} />`.
 *
 * Fix by moving that ONE property into the responsive group. Do not revert the
 * whole split; the cost is concentrated in four colour properties, and losing
 * the split costs two minutes on every cache miss.
 */
import { defineConfig } from '@pandacss/dev';

import { cetecPreset } from '../src/cetec-preset';
import * as regularRecipes from '../src/recipes/recipes-regular';
import * as slotRecipes from '../src/recipes/recipes-slot';

import type { RecipeRule } from '@pandacss/types';

const recipeNames = [
  ...Object.keys(regularRecipes),
  ...Object.keys(slotRecipes),
].map((key) => key.replace(/Recipe$/, ''));

const recipeOverrides: Record<string, RecipeRule[]> = {
  avatar: [{ size: ['*'], responsive: true }, { shape: ['*'] }],
  badge: [{ size: ['*'], responsive: true }],
  chip: [{ size: ['*'], responsive: true }],
  list: [{ density: ['*'] }],
  listItem: [{ density: ['*'], selected: ['*'] }],
  listItemGroup: [{ density: ['*'] }],
};

const staticCssRecipes: Record<string, RecipeRule[]> = Object.fromEntries(
  recipeNames.map((name) => [name, ['*'] as unknown as RecipeRule[]]),
);

/**
 * A. Colour properties.
 *
 * Themed, never responsive. The single biggest win — these accounted for 56%
 * of the previous output, and roughly 6/7 of each one's selectors existed only
 * to serve a breakpoint variant.
 */
const colorProperties = {
  background: ['*'],
  backgroundColor: ['*'],
  color: ['*'],
  fill: ['*'],
  stroke: ['*'],
  borderColor: ['*'],
} as const;

/**
 * B. Non-colour properties that still resolve colour values.
 *
 * `boxShadow` and the `border` shorthand genuinely differ between light and
 * dark. Neither is meaningfully responsive.
 */
const themedNonColorProperties = {
  border: ['*'],
  boxShadow: ['*'],
} as const;

/**
 * C. Layout, sizing and spacing.
 *
 * Responsive, never themed. Padding does not change between light and dark
 * mode; generating both halved the output of 33 properties for nothing.
 */
const layoutProperties = {
  borderRadius: ['*'],
  borderWidth: ['*'],
  display: ['*'],
  position: ['*'],
  flex: ['*'],
  flexDirection: ['*'],
  flexWrap: ['*'],
  alignItems: ['*'],
  alignContent: ['*'],
  alignSelf: ['*'],
  justifyItems: ['*'],
  justifyContent: ['*'],
  justifySelf: ['*'],
  gap: ['*'],
  rowGap: ['*'],
  columnGap: ['*'],
  zIndex: ['*'],
  width: ['*'],
  minWidth: ['*'],
  maxWidth: ['*'],
  height: ['*'],
  minHeight: ['*'],
  maxHeight: ['*'],
  margin: ['*'],
  marginTop: ['*'],
  marginRight: ['*'],
  marginBottom: ['*'],
  marginLeft: ['*'],
  padding: ['*'],
  paddingTop: ['*'],
  paddingRight: ['*'],
  paddingBottom: ['*'],
  paddingLeft: ['*'],
} as const;

/**
 * D. Typography.
 *
 * Responsive, never themed. Type scales across breakpoints; it does not change
 * between light and dark.
 */
const typographyProperties = {
  fontFamily: ['*'],
  fontSize: ['*'],
  fontWeight: ['*'],
  lineHeight: ['*'],
  letterSpacing: ['*'],
  textStyle: ['*'],
} as const;

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false, // do not add Panda's default reset styles
  strictTokens: true,
  watch: true,

  presets: [cetecPreset],

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.stories.{js,jsx,mjs,ts,tsx}',
    './src/storybook/**/*.{js,jsx,mjs,ts,tsx,mdx}',
  ],

  exclude: [],

  prefix: 'cetec',
  importMap: '@styled-system',
  outdir: 'src/styled-system',

  staticCss: {
    css: [
      // A. Colour — themed, not responsive.
      {
        properties: { ...colorProperties },
        conditions: ['light', 'dark'],
        responsive: false,
      },
      // B. Themed non-colour — themed, not responsive.
      {
        properties: { ...themedNonColorProperties },
        conditions: ['light', 'dark'],
        responsive: false,
      },
      // C. Layout & spacing — responsive, not themed.
      {
        properties: { ...layoutProperties },
        responsive: true,
      },
      // D. Typography — responsive, not themed.
      {
        properties: { ...typographyProperties },
        responsive: true,
      },
    ],
    // Recipes are only ~6,700 lines (2.5% of output). Not worth tuning.
    recipes: {
      ...staticCssRecipes,
      ...recipeOverrides,
    },
  },

  hooks: {
    'preset:resolved': ({ utils, preset, name }) => {
      if (name === 'cetecPreset') {
        return utils.omit(preset, ['patterns.box', 'patterns.divider']);
      }
      return preset;
    },
  },
});
