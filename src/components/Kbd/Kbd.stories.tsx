import { Box } from '../Box';
import { Card } from '../Card';
import { Text } from '../Text';

import { Kbd } from './Kbd';
import { KbdGroup } from './KbdGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    value: '⌘',
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InlineUsage: Story = {
  render: () => (
    <Text>
      Press <KbdGroup keys={['⌘', 'K']} /> to open global search.
    </Text>
  ),
  parameters: { controls: { disable: true } },
};

export const ExShortcutReference: Story = {
  name: 'Ex: Shortcut Reference',
  render: () => (
    <Card p="16" display="grid" gap="12" minW="sm">
      <Text as="strong">Keyboard shortcuts</Text>
      <Box display="grid" gap="8">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Search</Text>
          <KbdGroup keys={['⌘', 'K']} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Save draft</Text>
          <KbdGroup keys={['⌘', 'S']} />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text>Open command menu</Text>
          <KbdGroup keys={['Shift', '?']} />
        </Box>
      </Box>
    </Card>
  ),
  parameters: { controls: { disable: true } },
};

export const A11ySemanticKeyboardInput: Story = {
  name: 'A11y: Semantic Keyboard Input',
  render: () => (
    <Box display="grid" gap="10">
      <Text>
        Use <Kbd value="Esc" /> to close the dialog and return focus to the
        trigger.
      </Text>
      <Text size="14" color="text.subtle">
        `Kbd` should be reserved for actual keyboard input, not for badge-like
        status labels or decorative pills.
      </Text>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const ExManualComposition: Story = {
  name: 'Ex: Manual Composition',
  render: () => (
    <Text>
      Press{' '}
      <KbdGroup>
        <Kbd value="⌃" />
        <Kbd value="P" />
      </KbdGroup>{' '}
      to print the current view.
    </Text>
  ),
  parameters: { controls: { disable: true } },
};
