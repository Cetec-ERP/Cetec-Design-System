import { resolve } from 'path';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { storybookVis } from 'storybook-addon-vis/vitest-plugin';
import { defineConfig } from 'vitest/config';

const configDir = resolve(__dirname, '.storybook');

const browserTest = {
  // Files share one browser, and only one frame can hold focus. Running
  // them in parallel makes focus assertions flaky.
  fileParallelism: false,
  browser: {
    enabled: true,
    headless: true,
    // Storybook sizes each story frame to 1200x900. The window must fit it,
    // or Vitest scales the frame down and snapshots lose detail.
    provider: playwright({
      contextOptions: { viewport: { width: 1280, height: 1000 } },
    }),
    instances: [{ browser: 'chromium' as const }],
  },
};

// Runs every story as a test: render, play function, and a11y checks.
// https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@styled-system': resolve(__dirname, './src/styled-system'),
    },
  },
  // Pre-bundle deps the story tests discover late; otherwise Vite reloads mid-run on a cold cache (every CI run).
  optimizeDeps: {
    include: [
      'react/jsx-dev-runtime',
      '@storybook/addon-themes',
      '@floating-ui/react',
      '@tanstack/react-form',
    ],
  },
  test: {
    projects: [
      // `npm test`: behavior only.
      {
        extends: true,
        plugins: [storybookTest({ configDir })],
        test: { name: 'storybook', ...browserTest },
      },
      // `npm run test:visual`: behavior plus a light and a dark image snapshot
      // of every story. Baselines live in __vis__/linux and are generated only
      // by CI, because fonts render differently on macOS. Local runs write to
      // __vis__/local, which git ignores.
      {
        extends: true,
        plugins: [storybookTest({ configDir }), storybookVis()],
        test: {
          name: 'visual',
          setupFiles: ['.storybook/vitest.visual.setup.ts'],
          ...browserTest,
        },
      },
    ],
  },
});
