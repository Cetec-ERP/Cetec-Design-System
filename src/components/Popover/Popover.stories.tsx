import { Box } from '../Box';
import { Button } from '../Button';
import { Link } from '../Link';
import { Text } from '../Text';

import { Popover } from './Popover';
import { PopoverBody } from './PopoverBody';
import { PopoverClose } from './PopoverClose';
import { PopoverContent } from './PopoverContent';
import { PopoverFooter } from './PopoverFooter';
import { PopoverHeader } from './PopoverHeader';
import { PopoverMedia } from './PopoverMedia';
import { PopoverTitle } from './PopoverTitle';
import { PopoverTrigger } from './PopoverTrigger';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  args: {
    children: null,
    interaction: 'rich',
    size: 'md',
    showArrow: true,
    placement: 'bottom',
  },
  argTypes: {
    interaction: {
      control: 'select',
      options: ['definition', 'rich'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    tone: {
      control: 'select',
      options: ['note', 'tip', 'warning', 'important', 'caution'],
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    showArrow: { control: 'boolean' },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Handbook definition note — hover or focus the dashed phrase. */
export const DefinitionNote: Story = {
  name: 'Ex: Definition note',
  args: {
    interaction: 'definition',
    tone: 'warning',
    size: 'md',
    showArrow: true,
    placement: 'bottom',
  },
  render: ({ children: _children, ...args }) => (
    <Box maxW="prose" p="32">
      <Text>
        Operators should track{' '}
        <Popover {...args}>
          <PopoverTrigger>
            <Text as="span" dashedUnderline tabIndex={0}>
              cycle time
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Warning</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Cycle time includes queue and wait, not only active work. Do not
              treat machine run time as the full cycle when estimating delivery
              commitments.
            </PopoverBody>
          </PopoverContent>
        </Popover>{' '}
        before promising a ship date.
      </Text>
    </Box>
  ),
};

/** Handbook rich note — click the dashed phrase; focus is trapped. */
export const RichNote: Story = {
  name: 'Ex: Rich note',
  args: {
    interaction: 'rich',
    tone: 'tip',
    size: 'md',
    showArrow: true,
    placement: 'bottom',
  },
  render: ({ children: _children, ...args }) => (
    <Box maxW="prose" p="32">
      <Text>
        See the{' '}
        <Popover {...args}>
          <PopoverTrigger>
            <Text as="span" dashedUnderline tabIndex={0}>
              setup checklist
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Tip</PopoverTitle>
              <PopoverClose />
            </PopoverHeader>
            <PopoverMedia>
              <Box
                as="img"
                src="https://placehold.co/320x120/png?text=Setup+diagram"
                alt="Setup diagram placeholder"
                w="full"
                display="block"
              />
            </PopoverMedia>
            <PopoverBody>
              Confirm tooling, material, and traveler notes before the first
              piece. Open the full checklist when onboarding a new operator.
            </PopoverBody>
            <PopoverFooter>
              <Link href="https://example.com/handbook/setup" external>
                Open handbook
              </Link>
              <Button size="sm">Got it</Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>{' '}
        before starting the job.
      </Text>
    </Box>
  ),
};

export const Tones: Story = {
  render: () => (
    <Box display="flex" gap="24" flexWrap="wrap" p="32">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(
        (tone) => (
          <Popover key={tone} interaction="rich" tone={tone} defaultOpen>
            <PopoverTrigger>
              <Button size="sm">{tone}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </PopoverTitle>
                <PopoverClose />
              </PopoverHeader>
              <PopoverBody>
                Visual tone only — this never maps to role=&quot;alert&quot;.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ),
      )}
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="48" alignItems="flex-start" p="32">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Popover
          key={size}
          interaction="rich"
          tone="note"
          size={size}
          defaultOpen
        >
          <PopoverTrigger>
            <Button size="sm">{size}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Size {size}</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Popover panels are wider than Tooltip (max 240) so handbook notes
              can carry multi-line guidance.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ))}
    </Box>
  ),
};
