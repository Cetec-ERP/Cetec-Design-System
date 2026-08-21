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

export const DsComponentAttribute: Story = {
  name: 'Test: data-ds-component',
  render: () => (
    <>
      <Pre>{'const defaultPre = true;'}</Pre>
      <Pre data-ds-component="ExamplePre">{'const customPre = true;'}</Pre>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultPre = canvas
      .getByText('const defaultPre = true;')
      .closest('pre');
    const customPre = canvas
      .getByText('const customPre = true;')
      .closest('pre');

    expect(defaultPre).toHaveAttribute('data-ds-component', 'Pre');
    expect(defaultPre?.querySelector('code')).toHaveAttribute(
      'data-ds-component',
      'Code',
    );
    expect(customPre).toHaveAttribute('data-ds-component', 'ExamplePre');
    expect(customPre?.querySelector('code')).toHaveAttribute(
      'data-ds-component',
      'Code',
    );
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
