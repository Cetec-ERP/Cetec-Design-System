import type { Preview } from '@storybook/react';
import DocTemplate from '../src/storybook/doctemplate.mdx';
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#F9F8F6' },
        dark: { name: 'Dark', value: '#2E2E2E' },
      },
    },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocTemplate,
      toc: {},
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
