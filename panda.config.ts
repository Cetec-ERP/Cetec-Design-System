import { defineConfig } from '@pandacss/dev';
import { cetecPreset } from './cetec-preset';

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: true,
  strictTokens: true,
  watch: true,

  // removed @pandacss/dev/presets because it was adding back things we intentionally excluded
  presets: [cetecPreset],

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)',
    './src/storybook/**/*.{js,jsx,mjs,ts,tsx,mdx}',
  ],

  exclude: [],

  prefix: 'cetec',
  importMap: '@styled-system',
  outdir: 'styled-system',
});
