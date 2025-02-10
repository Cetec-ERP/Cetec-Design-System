import type { Preview } from '@storybook/react';
import DocTemplate from '../src/storybook/doctemplate.mdx';
import '../styled-system/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocTemplate,
      toc: { 
      },
    },
  },
};

export default preview;
