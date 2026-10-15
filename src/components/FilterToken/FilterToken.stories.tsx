import { useState } from 'react';

import { HStack, VStack, Wrap } from '@styled-system/jsx';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

import { FilterToken, type FilterTokenState } from './FilterToken';

import type { Meta, StoryObj } from '@storybook/react-vite';

const noop = () => undefined;

const meta = {
  title: 'Components/FilterToken',
  component: FilterToken,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['applied', 'editing', 'pending', 'removing', 'armed'],
    },
    tone: {
      control: 'select',
      options: ['default', 'exclude'],
    },
    editor: { control: false },
  },
  args: {
    field: 'Stage',
    operator: 'is any of',
    value: 'Open, In progress',
    state: 'applied',
    tone: 'default',
    operatorLocked: false,
    disabled: false,
    onValueClick: noop,
    onOperatorClick: noop,
    onRemove: noop,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilterToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const STATES: { state: FilterTokenState; note: string }[] = [
  { state: 'applied', note: 'The results include this filter.' },
  { state: 'editing', note: 'A menu for this token is open.' },
  { state: 'pending', note: 'Added or changed. Waits for Apply.' },
  { state: 'removing', note: 'Removed. Waits for Apply. Click to restore.' },
  { state: 'armed', note: 'The next Backspace removes it.' },
];

export const States: Story = {
  render: (args) => (
    <VStack alignItems="start" gap="12">
      {STATES.map(({ state, note }) => (
        <HStack key={state} gap="16">
          <Box w="96">
            <Text textStyle="body.sm" fontWeight="medium">
              {state}
            </Text>
          </Box>
          <FilterToken {...args} state={state} />
          <Text textStyle="body.sm" color="text.subtlest">
            {note}
          </Text>
        </HStack>
      ))}
    </VStack>
  ),
};

export const ExcludeTone: Story = {
  args: {
    operator: 'is none of',
    tone: 'exclude',
  },
};

export const LockedOperator: Story = {
  args: {
    field: 'Case Type',
    operator: 'is',
    value: 'Warranty',
    operatorLocked: true,
  },
};

export const ValueStates: Story = {
  render: (args) => (
    <VStack alignItems="start" gap="12">
      <FilterToken {...args} field="Customer" operator="is" value="" />
      <FilterToken
        {...args}
        field="Stage"
        operator="is any of"
        value={['Open', 'In progress']}
      />
      <FilterToken
        {...args}
        field="Entered On"
        operator="is between"
        value="Sep 1, 2026 – Sep 30, 2026"
      />
      <FilterToken
        {...args}
        field="Assigned To"
        operator="is any of"
        value={['Brent Barton', 'David Atkins', 'Mike Congdon', 'Taylor Wagen']}
      />
    </VStack>
  ),
};

export const EditingInPlace: Story = {
  render: (args) => (
    <FilterToken
      {...args}
      field="Case #"
      operator="is"
      value=""
      state="editing"
      operatorLocked
      editor={
        <Box
          as="input"
          aria-label="Case number"
          placeholder="type a number"
          size={14}
          h="22"
          p="0"
          bg="transparent"
          borderWidth="0"
          outline="none"
          fontFamily="body"
          fontSize="body.sm"
          color="text"
        />
      }
    />
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

type DemoFilter = {
  id: string;
  field: string;
  operator: string;
  value: string;
  locked?: boolean;
};

const APPLIED: DemoFilter[] = [
  {
    id: 'resolution',
    field: 'Resolution',
    operator: 'is',
    value: 'All open',
    locked: true,
  },
  {
    id: 'stage',
    field: 'Stage',
    operator: 'is any of',
    value: 'Open, In progress',
    locked: true,
  },
  {
    id: 'entered',
    field: 'Entered On',
    operator: 'is on or after',
    value: 'Sep 1, 2026',
  },
];

const StagedRemovalDemo = () => {
  const [applied, setApplied] = useState(APPLIED);
  const [removed, setRemoved] = useState<string[]>([]);
  const toggle = (id: string) =>
    setRemoved((r) =>
      r.includes(id) ? r.filter((x) => x !== id) : [...r, id],
    );
  return (
    <VStack alignItems="start" gap="12" w="xl">
      <Wrap gap="4">
        {applied.map((f) => {
          const removing = removed.includes(f.id);
          return (
            <FilterToken
              key={f.id}
              field={f.field}
              operator={f.operator}
              value={f.value}
              operatorLocked={f.locked}
              state={removing ? 'removing' : 'applied'}
              onValueClick={() => removing && toggle(f.id)}
              onOperatorClick={() => removing && toggle(f.id)}
              onRemove={() => toggle(f.id)}
            />
          );
        })}
      </Wrap>
      <HStack gap="8">
        <Button
          size="sm"
          variant="primary"
          disabled={removed.length === 0}
          onClick={() => {
            setApplied((a) => a.filter((f) => !removed.includes(f.id)));
            setRemoved([]);
          }}
        >
          {`Apply (${removed.length})`}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setApplied(APPLIED);
            setRemoved([]);
          }}
        >
          Reset
        </Button>
      </HStack>
    </VStack>
  );
};

export const ExFilterRow: Story = {
  name: 'Ex: Staged removal',
  render: () => <StagedRemovalDemo />,
};
