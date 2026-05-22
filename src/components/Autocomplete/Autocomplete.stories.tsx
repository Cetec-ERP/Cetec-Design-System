import { useState } from 'react';

import { expect, userEvent, within } from '@storybook/test';

import { Box } from '../Box';
import { FormField } from '../FormField';

import { Autocomplete } from './Autocomplete';
import { Option } from './Option';

import type { Meta, StoryObj } from '@storybook/react';

const baseOptions = [
  { value: 'react', label: 'React', description: 'UI library' },
  { value: 'typescript', label: 'TypeScript', description: 'Type safety' },
  { value: 'storybook', label: 'Storybook', description: 'Component workshop' },
  { value: 'panda', label: 'Panda CSS', description: 'Design system styles' },
  { value: 'floating-ui', label: 'Floating UI', description: 'Popup engine' },
  { value: 'infinite', label: 'Infinite loading', description: 'More rows' },
];

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Combobox-style autocomplete for single and multi-select flows. It uses the TextInput visual language, opens on focus, supports custom option creation, and can load more results as the list scrolls.',
      },
    },
  },
  args: {
    placeholder: 'Choose an option...',
  },
  argTypes: {
    multiple: {
      control: 'boolean',
    },
    limitTags: {
      control: 'boolean',
    },
    autoSize: {
      control: 'boolean',
    },
    addOptions: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderOptions = (values = baseOptions) =>
  values.map((option) => (
    <Option
      key={option.value}
      value={option.value}
      label={option.label}
      description={option.description}
    />
  ));

export const Default: Story = {
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="xs">
        <Autocomplete {...args} value={value} onChange={setValue} name="tech">
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const Multiple: Story = {
  render: function MultipleRender(args) {
    const [value, setValue] = useState<string[] | null>([
      'react',
      'typescript',
      'storybook',
    ]);

    return (
      <Box w="sm">
        <Autocomplete
          {...args}
          multiple
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="stack"
          placeholder="Choose stack..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const LimitTags: Story = {
  render: function LimitTagsRender(args) {
    const [value, setValue] = useState<string[] | null>([
      'react',
      'typescript',
      'storybook',
      'panda',
      'floating-ui',
    ]);

    return (
      <Box w="sm">
        <Autocomplete
          {...args}
          multiple
          limitTags
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="tags"
          placeholder="Choose tags..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const AutoSize: Story = {
  render: function AutoSizeRender(args) {
    const [value, setValue] = useState<string[] | null>([
      'react',
      'typescript',
      'storybook',
      'panda',
    ]);

    return (
      <Box display="grid" gap="16" w="xl">
        <Autocomplete
          {...args}
          multiple
          autoSize
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="auto-size"
          placeholder="Auto-size on"
        >
          {renderOptions()}
        </Autocomplete>
        <Autocomplete
          {...args}
          multiple
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="auto-size-2"
          placeholder="Auto-size off"
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const AddOptions: Story = {
  render: function AddOptionsRender(args) {
    const [value, setValue] = useState<string[] | null>(['react']);

    return (
      <Box w="sm">
        <Autocomplete
          {...args}
          multiple
          addOptions
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="custom-tags"
          placeholder="Add your own tags..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const InfiniteLoading: Story = {
  render: function InfiniteLoadingRender(args) {
    const [options, setOptions] = useState(() => baseOptions.slice(0, 4));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [value, setValue] = useState<string | string[] | null>(null);

    const loadMore = () => {
      if (loading || !hasMore) {
        return;
      }

      setLoading(true);

      window.setTimeout(() => {
        setOptions((currentOptions) => [
          ...currentOptions,
          ...baseOptions.slice(
            currentOptions.length,
            currentOptions.length + 2,
          ),
        ]);
        setHasMore(false);
        setLoading(false);
      }, 200);
    };

    return (
      <Box w="sm">
        <Autocomplete
          {...args}
          value={value}
          onChange={setValue}
          name="load-more"
          placeholder="Scroll to load more..."
          hasMore={hasMore}
          loadingMore={loading}
          onLoadMore={loadMore}
        >
          {renderOptions(options)}
        </Autocomplete>
      </Box>
    );
  },
};

export const InFormField: Story = {
  name: 'Ex: In FormField',
  render: function InFormFieldRender() {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="sm">
        <FormField
          label="Primary stack"
          labelFor="primary-stack"
          helpText="Choose the technologies the team depends on most."
        >
          <Autocomplete
            id="primary-stack"
            name="primaryStack"
            value={value}
            onChange={setValue}
            placeholder="Select technologies..."
          >
            {renderOptions()}
          </Autocomplete>
        </FormField>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const KeyboardSelection: Story = {
  name: 'Ex: Keyboard Selection',
  render: function KeyboardSelectionRender() {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="sm">
        <Autocomplete
          value={value}
          onChange={setValue}
          name="keyboard-select"
          placeholder="Use keyboard..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    await userEvent.click(input);
    await expect(input).toHaveAttribute('aria-activedescendant');
    await userEvent.keyboard('{Enter}');

    await expect(input).toHaveValue('React');
  },
  parameters: { controls: { disable: true } },
};

export const DisabledMultiple: Story = {
  name: 'Ex: Disabled Multiple',
  render: function DisabledMultipleRender() {
    const [value, setValue] = useState<string[] | null>(['react']);

    return (
      <Box w="sm">
        <Autocomplete
          multiple
          disabled
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="disabled-stack"
          placeholder="Disabled stack..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const removeButton = canvas.getByRole('button', {
      name: /remove react/i,
    });

    await expect(removeButton).toBeDisabled();
  },
  parameters: { controls: { disable: true } },
};

export const KeyboardChipRemoval: Story = {
  name: 'Ex: Keyboard Chip Removal',
  render: function KeyboardChipRemovalRender() {
    const [value, setValue] = useState<string[] | null>([
      'react',
      'typescript',
    ]);

    return (
      <Box w="sm">
        <Autocomplete
          multiple
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="keyboard-remove"
          placeholder="Remove with keyboard..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');

    await expect(canvas.queryByText('TypeScript')).not.toBeInTheDocument();
  },
  parameters: { controls: { disable: true } },
};

export const AddOptionsWithKeyboard: Story = {
  name: 'Ex: Add Options With Keyboard',
  render: function AddOptionsWithKeyboardRender() {
    const [value, setValue] = useState<string[] | null>(['react']);

    return (
      <Box w="sm">
        <Autocomplete
          multiple
          addOptions
          value={value}
          onChange={(nextValue) =>
            setValue(Array.isArray(nextValue) ? nextValue : null)
          }
          name="keyboard-add"
          placeholder="Add your own tags..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    await userEvent.click(input);
    await userEvent.type(input, 'Svelte');
    await userEvent.keyboard('{Enter}');

    await expect(canvas.getByText('Svelte')).toBeInTheDocument();
  },
  parameters: { controls: { disable: true } },
};

export const OpenOnFocus: Story = {
  name: 'Ex: Open On Focus',
  render: function OpenOnFocusRender() {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="sm">
        <Autocomplete
          value={value}
          onChange={setValue}
          name="focus-open"
          placeholder="Focus to open..."
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(input).toHaveAttribute('aria-expanded', 'true');
  },
};
