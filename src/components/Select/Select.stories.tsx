import { useState } from 'react';

import { expect, userEvent, within } from '@storybook/test';

import { Box } from '../Box';
import { FormField } from '../FormField';
import { Text } from '../Text';

import { Select } from './Select';
import { SelectOption } from './SelectOption';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Custom listbox-style select for controlled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging.',
      },
    },
  },
  args: {
    placeholder: 'Choose an option...',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled selected value for single-select usage',
    },
    placeholder: {
      control: 'text',
      description: 'Display text when no value is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'boolean',
      description: 'Error state styling',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selected values',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    density: {
      control: 'select',
      options: ['compact', 'comfortable', 'spacious'],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultRender(args) {
    return (
      <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>
    );
  },
};

export const States: Story = {
  render: () => (
    <Box display="grid" gap="12" w="xs">
      <Select placeholder="Default">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select value="growth" placeholder="With value">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select error placeholder="Error state">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select disabled value="starter" placeholder="Disabled">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => (
    <Box display="grid" gap="12" w="xs">
      <Select size="sm" placeholder="Small">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="md" placeholder="Medium">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="lg" placeholder="Large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="xl" placeholder="Extra large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const WithDescriptionsAndIcons: Story = {
  render: () => (
    <Box w="xs">
      <Select placeholder="Choose a support channel...">
        <SelectOption
          value="email"
          label="Email"
          description="Best for non-urgent requests"
          iconLeft="envelope"
        />
        <SelectOption
          value="phone"
          label="Phone"
          description="Best for urgent issues"
          iconLeft="at"
        />
        <SelectOption
          value="chat"
          label="Live chat"
          description="During business hours"
          iconLeft="message"
        />
      </Select>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const Multiple: Story = {
  render: function MultipleRender() {
    const [value, setValue] = useState<string[] | null>([
      'react',
      'typescript',
    ]);

    return (
      <Box display="grid" gap="12" maxW="xs" bg="[pink]">
        <Select
          multiple
          value={value}
          onChange={(nextValue: string | string[] | null) => {
            setValue(Array.isArray(nextValue) ? nextValue : null);
          }}
          placeholder="Choose tags..."
        >
          <SelectOption value="react" label="React" />
          <SelectOption value="typescript" label="TypeScript" />
          <SelectOption value="storybook" label="Storybook" />
          <SelectOption value="panda" label="Panda CSS" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value?.join(', ') || 'none'}
        </Text>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const InFormField: Story = {
  name: 'Ex: In FormField',
  render: function InFormFieldRender() {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="sm">
        <FormField
          label="Team size"
          labelFor="team-size"
          helpText="Choose the option that best fits your current headcount."
          error={!value}
          errorText="Select a team size."
        >
          <Select
            id="team-size"
            name="teamSize"
            value={value}
            onChange={setValue}
            placeholder="Select team size..."
          >
            <SelectOption value="1-10" label="1–10 people" />
            <SelectOption value="11-50" label="11–50 people" />
            <SelectOption value="51-200" label="51–200 people" />
            <SelectOption value="201-plus" label="201+ people" />
          </Select>
        </FormField>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const ExControlled: Story = {
  name: 'Ex: Controlled',
  render: function ExControlledRender() {
    const [value, setValue] = useState<string | string[] | null>('growth');

    return (
      <Box display="grid" gap="12" w="xs">
        <Select
          value={value}
          onChange={setValue}
          placeholder="Choose a plan..."
        >
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value || 'none'}
        </Text>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const A11yKeyboardInteraction: Story = {
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="xs">
        <Select
          value={value}
          onChange={setValue}
          placeholder="Choose an option..."
        >
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /choose an option/i,
    });

    trigger.focus();
    expect(trigger).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');

    const listbox = canvas.getByRole('listbox');
    expect(listbox).toBeVisible();

    await userEvent.keyboard('{ArrowDown}{Enter}');

    expect(
      canvas.getByRole('button', {
        name: /growth/i,
      }),
    ).toBeVisible();
  },
  parameters: { controls: { disable: true } },
};
