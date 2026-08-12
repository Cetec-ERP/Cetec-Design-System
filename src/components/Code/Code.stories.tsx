import { expect, within } from '@storybook/test';

import { Box } from '../Box';
import { Text } from '../Text';

import { Code } from './Code';
import { Pre } from './Pre';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'npm run build',
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InlineUsage: Story = {
  render: () => (
    <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>
  ),
  parameters: { controls: { disable: true } },
};

export const CodeBlock: Story = {
  render: () => (
    <Box maxW="2xl">
      <Pre lang="tsx">{`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`}</Pre>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const PreRootProps: Story = {
  name: 'Test: Pre root props',
  render: () => (
    <Box maxW="2xl">
      <Pre
        lang="tsx"
        id="pre-root"
        data-testid="pre-root"
        data-ds-component="CodeBlock"
      >
        {'const ready = true;'}
      </Pre>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pre = canvas.getByTestId('pre-root');
    const code = pre.querySelector('code');

    if (!(code instanceof HTMLElement)) {
      throw new Error('Pre should render a nested code element.');
    }

    // Consumer props land on the root `pre` only.
    expect(pre).toHaveAttribute('id', 'pre-root');
    expect(pre).toHaveAttribute('data-ds-component', 'CodeBlock');

    // The nested `code` keeps its own identity and does not receive the
    // consumer props spread onto the root.
    expect(code).not.toHaveAttribute('id');
    expect(code).not.toHaveAttribute('data-testid');
    expect(code).toHaveAttribute('data-ds-component', 'Code');
    expect(code).toHaveAttribute('lang', 'tsx');
  },
  parameters: { controls: { disable: true } },
};

export const ExCommandSnippet: Story = {
  name: 'Ex: Command Snippet',
  render: () => (
    <Box display="grid" gap="8" maxW="prose">
      <Text>Build Storybook for review:</Text>
      <Pre>npm run storybook:build</Pre>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};
