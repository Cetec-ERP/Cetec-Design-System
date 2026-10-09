import { withThemeByClassName } from '@storybook/addon-themes';

import { IconProvider } from '../src/components/Icon';
import DocTemplate from '../src/storybook/doctemplate.mdx';

import type { Preview, ReactRenderer } from '@storybook/react-vite';
import '../src/styles/index.css';
import './story-docs-style.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <IconProvider spritePath={`${import.meta.env.BASE_URL}sprite.svg`}>
        <Story />
      </IconProvider>
    ),
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),
  ],
  initialGlobals: {},
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // FloatingFocusManager renders `aria-hidden` focus guards with
            // `tabindex="0"` around portaled popups. They forward focus as
            // soon as they receive it, so they are never a resting point.
            id: 'aria-hidden-focus',
            // Keeps axe's default `[aria-hidden="true"]` target minus the guards.
            selector:
              '[aria-hidden="true"]:not([data-floating-ui-focus-guard])',
          },
        ],
      },
    },
    backgrounds: { disabled: true },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Intro',
          'Tokens',
          ['Overview', 'Colors', 'Typography', 'Sizes', 'Shadows', '*'],
          'Components',
          'Docs',
          '*',
        ],
      },
    },
    docs: {
      page: DocTemplate,
      toc: {
        headingSelector: 'h2, h3, h4',
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
