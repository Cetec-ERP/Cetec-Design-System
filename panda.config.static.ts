import { defineConfig } from '@pandacss/dev';
import { cetecPreset } from './cetec-preset';

export default defineConfig({
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false,
  strictTokens: true,
  watch: true,
  clean: true,

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

  staticCss: {
    css: [
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
    ],
  },
});
