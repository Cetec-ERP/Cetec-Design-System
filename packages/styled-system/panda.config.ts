import { defineConfig } from '@pandacss/dev';

import { cetecPreset } from '../components/src/cetec-preset';

const isStatic = process.env.PANDA_STATIC === 'true';

const staticCss = isStatic
  ? {
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
        recipes: '*' as const,
      },
    }
  : {};

export default defineConfig({
  eject: true,
  gitignore: false,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  preflight: false,
  strictTokens: true,
  watch: true,
  presets: [cetecPreset],
  include: [
    '../components/src/**/*.{js,jsx,ts,tsx}',
    '../components/src/storybook/**/*.{js,jsx,mjs,ts,tsx,mdx}',
  ],
  exclude: [],
  prefix: 'cetec',
  // importMap: '@cetec/styled-system',
  outdir: '.',
  ...staticCss,
});
