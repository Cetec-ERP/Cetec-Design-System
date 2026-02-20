import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/*/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    backgrounds: false,
    backgroundsStoryGlobals: false,
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    // STORYBOOK_BASE_PATH allows PR previews to set paths like /Cetec-Design-System/pr-123/
    // Falls back to GH_REPO for backwards compatibility, then to /
    const base = process.env.STORYBOOK_BASE_PATH
      || (process.env.GH_REPO ? `/${process.env.GH_REPO}/` : '/');
    config.base = base;
    return config;
  },
  env: () => ({
    BASE_PATH: process.env.STORYBOOK_BASE_PATH
      || (process.env.GH_REPO ? `/${process.env.GH_REPO}/` : '/'),
  }),
};

export default config;
