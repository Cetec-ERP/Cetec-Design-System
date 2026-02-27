import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { Box } from '../Box';
import { Card } from '../Card';
import { Checkbox, type CheckboxChangeHandler } from './Checkbox';
import { CheckboxInput } from '../CheckboxInput';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    indeterminate: { control: 'boolean' },
  },
  args: {
    name: 'checkbox-story',
    checked: false,
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultRender() {
    const [checked, setChecked] = useState(false);
    const onChange: CheckboxChangeHandler = (e) => setChecked(e.target.checked);

    return (
      <Checkbox
        name="primitive-checkbox"
        id="primitive-checkbox"
        checked={checked}
        onChange={onChange}
      />
    );
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <Card p="24" bg="bg.accent.tan.subtlest" display="grid" gap="12">
      <Checkbox
        name="unchecked"
        id="unchecked"
        checked={false}
        onChange={() => {}}
      />
      <Checkbox
        name="checked"
        id="checked"
        checked={true}
        onChange={() => {}}
      />
      <Checkbox
        name="indeterminate"
        id="indeterminate"
        checked={false}
        indeterminate
        onChange={() => {}}
      />
      <Checkbox
        name="error"
        id="error"
        checked={false}
        error
        onChange={() => {}}
      />
      <Checkbox
        name="disabled"
        id="disabled"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <Checkbox
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
  name: 'Ex: With CheckboxInput Wrapper',
  render: function ExWithLabelWrapperRender() {
    const [checked, setChecked] = useState(false);

    return (
      <Box maxW="prose" display="grid" gap="12">
        <CheckboxInput
          name="terms"
          id="terms"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        >
          I agree to the terms and conditions
        </CheckboxInput>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const ExSelectAllPattern: Story = {
  name: 'Ex: Select All Pattern',
  render: function ExSelectAllPatternRender() {
    const [items, setItems] = useState({ a: false, b: true, c: false });
    const checkedCount = Object.values(items).filter(Boolean).length;
    const total = Object.keys(items).length;
    const allChecked = checkedCount === total;
    const someChecked = checkedCount > 0 && checkedCount < total;

    return (
      <Box display="grid" gap="10">
        <CheckboxInput
          name="all"
          id="all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={(e) => {
            const next = e.target.checked;
            setItems({ a: next, b: next, c: next });
          }}
        >
          Select all
        </CheckboxInput>

        <Box pl="24" display="grid" gap="10">
          {Object.entries(items).map(([key, value]) => (
            <CheckboxInput
              key={key}
              name={key}
              id={key}
              checked={value}
              onChange={(e) => setItems({ ...items, [key]: e.target.checked })}
            >
              Item {key.toUpperCase()}
            </CheckboxInput>
          ))}
        </Box>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const A11yKeyboardInteraction: Story = {
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [checked, setChecked] = useState(false);

    return (
      <CheckboxInput
        name="a11y-checkbox"
        id="a11y-checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      >
        Enable notifications
      </CheckboxInput>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /enable notifications/i,
    });

    checkbox.focus();
    expect(checkbox).toHaveFocus();
    await userEvent.keyboard(' ');
    expect(checkbox).toBeChecked();
  },
  parameters: { controls: { disable: true } },
};
