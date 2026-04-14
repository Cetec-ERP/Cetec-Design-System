import { defineConfig } from '@pandacss/dev';

import { cetecPreset } from './src/cetec-preset';
import * as regularRecipes from './src/recipes/recipes-regular';
import * as slotRecipes from './src/recipes/recipes-slot';

import type { RecipeRule } from '@pandacss/types';

// Control whether the staticCss is included or not
// because it's not needed for production and
// generates a ton of CSS
const isStatic = process.env.PANDA_STATIC === 'true';

const recipeNames = [
  ...Object.keys(regularRecipes),
  ...Object.keys(slotRecipes),
].map((key) => key.replace(/Recipe$/, ''));

const recipeOverrides: Record<string, RecipeRule[]> = {
  avatar: [{ size: ['*'], responsive: true }, { shape: ['*'] }],
  badge: [
    {
      size: ['*'],
      responsive: true,
    },
    {
      standalone: ['*'],
      dot: ['*'],
      variant: ['*'],
    },
  ],
  button: [{ size: ['*'], variant: ['*'], responsive: true }],
  card: [{ size: ['*'], variant: ['*'], responsive: true }],
  chip: [{ size: ['*'], before: ['*'], after: ['*'], responsive: true }],
  chipGroup: [{ size: ['*'], responsive: true }],
  datePicker: [{ size: ['*'], responsive: true }],
  divider: [{ size: ['*'], responsive: true }],
  formField: [{ size: ['*'], layout: ['*'], responsive: true }],
  iconButton: [{ size: ['*'], responsive: true }],
  list: [{ density: ['*'], responsive: true }],
  listItem: [{ density: ['*'], responsive: true }, { selected: ['*'] }],
  listItemGroup: [{ density: ['*'], responsive: true }],
  menu: [{ density: ['*'], responsive: true }],
  spinner: [{ size: ['*'], responsive: true }],
  tag: [{ variant: ['*'], hue: ['*'] }],
  textarea: [{ size: ['*'], responsive: true }],
  textInput: [{ size: ['*'], responsive: true }],
  timePicker: [{ size: ['*'], responsive: true }],
  tooltip: [{ size: ['*'], responsive: true }],
};

const staticCssRecipes: Record<string, RecipeRule[]> = Object.fromEntries(
  recipeNames.map((name) => [name, ['*'] as unknown as RecipeRule[]]),
);

const staticCssCss = [
  {
    properties: {
      background: ['*'],
      color: ['*'],
      border: ['*'],
      fill: ['*'],
      boxShadow: ['*'],
      width: ['*'],
      height: ['*'],
      minWidth: ['*'],
      minHeight: ['*'],
      maxWidth: ['*'],
      maxHeight: ['*'],
      borderRadius: ['*'],
      textStyle: ['*'],
      fontFamily: ['*'],
      fontSize: ['*'],
      fontWeight: ['*'],
      lineHeight: ['*'],
      letterSpacing: ['*'],
    },
    conditions: ['light', 'dark'],
  },
];

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false, // do not add Panda's default reset styles
  strictTokens: true,

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
    css: isStatic ? staticCssCss : undefined,
    recipes: {
      ...(isStatic ? staticCssRecipes : {}),
      // below is static CSS we always want
      ...recipeOverrides,
    },
  },
});
