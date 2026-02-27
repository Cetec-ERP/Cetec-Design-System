import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { useId, useState, type ChangeEvent } from 'react';
import { Box } from '../Box';
import { Card } from '../Card';
import { RadioInput } from '../RadioInput';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    id: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    name: 'radio-story',
    checked: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('one');

    return (
      <Box display="grid" gap="10">
        <Radio
          name={`${groupId}-primitive`}
          id={`${groupId}-one`}
          checked={selected === 'one'}
          onChange={() => setSelected('one')}
        />
        <Radio
          name={`${groupId}-primitive`}
          id={`${groupId}-two`}
          checked={selected === 'two'}
          onChange={() => setSelected('two')}
        />
      </Box>
    );
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <Radio
        name="unchecked"
        id="unchecked"
        checked={false}
        onChange={() => {}}
      />
      <Radio name="checked" id="checked" checked={true} onChange={() => {}} />
      <Radio
        name="error"
        id="error"
        checked={false}
        error
        onChange={() => {}}
      />
      <Radio
        name="disabled"
        id="disabled"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <Radio
        name="disabled-checked"
        id="disabled-checked"
        checked={true}
        disabled
        onChange={() => {}}
      />
    </Card>
  ),
  parameters: { controls: { disable: true } },
};

export const ExWithLabelWrapper: Story = {
  name: 'Ex: With RadioInput Wrapper',
  render: function ExWithLabelWrapperRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('standard');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.id.endsWith('express')) {
        setSelected('express');
        return;
      }
      setSelected('standard');
    };

    return (
      <Box display="grid" gap="10">
        <RadioInput
          name={`${groupId}-shipping`}
          id={`${groupId}-standard`}
          checked={selected === 'standard'}
          onChange={handleChange}
        >
          Standard shipping
        </RadioInput>
        <RadioInput
          name={`${groupId}-shipping`}
          id={`${groupId}-express`}
          checked={selected === 'express'}
          onChange={handleChange}
        >
          Express shipping
        </RadioInput>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const A11yKeyboardNavigation: Story = {
  name: 'A11y: Arrow Key Navigation',
  render: function A11yKeyboardNavigationRender() {
    const groupId = useId();
    const [selected, setSelected] = useState('first');

    const makeChangeHandler = (value: 'first' | 'second' | 'third') => {
      return () => setSelected(value);
    };

    return (
      <Box display="grid" gap="10">
        <RadioInput
          name={`${groupId}-a11y-group`}
          id={`${groupId}-first`}
          checked={selected === 'first'}
          onChange={makeChangeHandler('first')}
        >
          First option
        </RadioInput>
        <RadioInput
          name={`${groupId}-a11y-group`}
          id={`${groupId}-second`}
          checked={selected === 'second'}
          onChange={makeChangeHandler('second')}
        >
          Second option
        </RadioInput>
        <RadioInput
          name={`${groupId}-a11y-group`}
          id={`${groupId}-third`}
          checked={selected === 'third'}
          onChange={makeChangeHandler('third')}
        >
          Third option
        </RadioInput>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('radio', { name: /first option/i });

    first.focus();
    expect(first).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');

    const second = canvas.getByRole('radio', { name: /second option/i });
    expect(second).toBeChecked();
  },
  parameters: { controls: { disable: true } },
};
