import { withThemeByClassName } from '@storybook/addon-themes';
import { visAnnotations } from 'storybook-addon-vis';

import { IconProvider } from '../src/components/Icon';
import DocTemplate from '../src/storybook/doctemplate.mdx';

import type { Preview, ReactRenderer } from '@storybook/react-vite';
import '../src/styles/index.css';
import './story-docs-style.css';

const preview: Preview = {
  // Turns on image snapshots per story under Vitest. A no-op in Storybook.
  ...visAnnotations,
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

      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
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
  // `snapshot` opts every story into visual tests. Opt one out with '!snapshot'.
  tags: ['autodocs', 'snapshot'],
};

export default preview;
