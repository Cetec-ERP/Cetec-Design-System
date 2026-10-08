import { resolve } from 'path';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

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
    include: ['react/jsx-dev-runtime'],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: resolve(__dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          // Files share one browser, and only one frame can hold focus. Running
          // them in parallel makes focus assertions flaky.
          fileParallelism: false,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
