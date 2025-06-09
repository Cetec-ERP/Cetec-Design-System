import { defineConfig } from '@pandacss/dev';
import CetecPreset from './panda-preset.js';

export default defineConfig({
  presets: ['@pandacss/dev/presets', CetecPreset],
  eject: true,
  gitignore: true,
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  jsxFactory: 'styled',
  watch: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  preflight: true,
  exclude: [],
  strictTokens: true,
  importMap: '@styled-system',
  outdir: 'styled-system',
});
