import { useState } from 'react';

import { expect, userEvent, within } from '@storybook/test';

import { Box } from '../Box';
import { Button } from '../Button';
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
  { value: 'vite', label: 'Vite', description: 'Build tooling' },
];

const extendedOptions = [
  ...baseOptions,
  { value: 'vitest', label: 'Vitest', description: 'Unit testing' },
  { value: 'playwright', label: 'Playwright', description: 'Browser testing' },
  { value: 'eslint', label: 'ESLint', description: 'Code analysis' },
  { value: 'prettier', label: 'Prettier', description: 'Code formatting' },
  { value: 'react-router', label: 'React Router', description: 'Routing' },
  { value: 'tanstack-query', label: 'TanStack Query', description: 'Data' },
];

const renderOptions = (options = baseOptions) =>
  options.map((option) => (
    <Option
      key={option.value}
      value={option.value}
      label={option.label}
      description={option.description}
    />
  ));

const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use Autocomplete when people benefit from filtering a set of options as they type. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text.',
      },
    },
  },
  args: {
    'aria-label': 'Technology',
    placeholder: 'Choose a technology…',
  },
  argTypes: {
    multiple: { control: 'boolean' },
    limitTags: { control: 'number' },
    allowCustomValue: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    invalid: { control: 'boolean' },
    valid: { control: 'boolean' },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | string[] | null>(null);

    return (
      <Box w="xs">
        <Autocomplete
          {...args}
          value={value}
          onValueChange={setValue}
          name="technology"
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const Selected: Story = {
  render: (args) => (
    <Box w="xs">
      <Autocomplete {...args} defaultValue="react" name="technology">
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole('combobox', {
      name: 'Technology',
    });
    await userEvent.click(input);
    await userEvent.keyboard('P');
    await expect(input).toHaveValue('P');
  },
};

export const Multiple: Story = {
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>([
      'react',
      'typescript',
      'storybook',
    ]);

    return (
      <Box w="sm">
        <Autocomplete
          multiple
          value={value}
          onValueChange={setValue}
          name="stack"
          aria-label="Project stack"
          placeholder="Add technology…"
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
};

export const MultipleLongValues: Story = {
  render: () => (
    <Box w="224">
      <Autocomplete
        multiple
        defaultValue={['storybook', 'floating-ui', 'typescript']}
        name="narrow-stack"
        aria-label="Narrow project stack"
        placeholder="Add…"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const LimitTags: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete
        multiple
        limitTags={2}
        defaultValue={[
          'react',
          'typescript',
          'storybook',
          'panda',
          'floating-ui',
        ]}
        name="limited-stack"
        aria-label="Limited project stack"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('+3')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(canvas.queryByText('+3')).not.toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: 'Remove Floating UI' }),
    ).toBeInTheDocument();
  },
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => (
    <Box display="grid" gap="12" w="sm">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Autocomplete
          key={size}
          size={size}
          defaultValue="react"
          name={`technology-${size}`}
          aria-label={`${size} autocomplete`}
        >
          {renderOptions()}
        </Autocomplete>
      ))}
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const ValidationStates: Story = {
  render: () => (
    <Box display="grid" gap="12" w="sm">
      <Autocomplete name="default" aria-label="Default">
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="valid" aria-label="Valid" valid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="invalid" aria-label="Invalid" invalid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="error" aria-label="Error" error>
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete
        multiple
        disabled
        defaultValue={['react', 'typescript']}
        name="disabled-stack"
        aria-label="Disabled technologies"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
    await expect(
      canvas.getByRole('button', { name: 'Remove React' }),
    ).toBeDisabled();
  },
  parameters: { controls: { disable: true } },
};

export const DisabledOptions: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete name="framework" aria-label="Framework">
        <Option value="react" label="React" />
        <Option value="legacy" label="Legacy framework" disabled />
        <Option value="storybook" label="Storybook" />
      </Autocomplete>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const AllowCustomValue: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete
        multiple
        allowCustomValue
        defaultValue={['react']}
        name="custom-stack"
        aria-label="Technologies"
        placeholder="Add a technology…"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Svelte');
    const body = within(document.body);
    await expect(
      body.getByRole('option', { name: /create “svelte”/i }),
    ).toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(
      canvas.getByRole('button', { name: 'Remove Svelte' }),
    ).toBeInTheDocument();
  },
  parameters: { controls: { disable: true } },
};

export const Loading: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete
        loading
        defaultOpen
        name="loading"
        aria-label="Loading technologies"
      />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const InfiniteLoading: Story = {
  render: function InfiniteLoadingRender() {
    const [options, setOptions] = useState(() => extendedOptions.slice(0, 8));
    const [loadingMore, setLoadingMore] = useState(false);
    const hasMore = options.length < extendedOptions.length;

    const loadMore = () => {
      if (loadingMore || !hasMore) {
        return;
      }

      setLoadingMore(true);
      window.setTimeout(() => {
        setOptions((currentOptions) =>
          extendedOptions.slice(0, currentOptions.length + 4),
        );
        setLoadingMore(false);
      }, 200);
    };

    return (
      <Box w="sm">
        <Autocomplete
          defaultOpen
          name="infinite"
          aria-label="Technology with more results"
          hasMore={hasMore}
          loadingMore={loadingMore}
          onLoadMore={loadMore}
        >
          {renderOptions(options)}
        </Autocomplete>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const EmptyResults: Story = {
  render: () => (
    <Box w="sm">
      <Autocomplete
        defaultInputValue="angular"
        defaultOpen
        name="empty"
        aria-label="Technology with no matches"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const ControlledInput: Story = {
  render: function ControlledInputRender() {
    const [inputValue, setInputValue] = useState('');

    return (
      <Box display="grid" gap="8" w="sm">
        <Autocomplete
          inputValue={inputValue}
          onInputValueChange={setInputValue}
          name="controlled-input"
          aria-label="Controlled query"
        >
          {renderOptions()}
        </Autocomplete>
        <Box color="text.subtle">{`Query: ${inputValue || 'empty'}`}</Box>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const ControlledOpen: Story = {
  render: function ControlledOpenRender() {
    const [open, setOpen] = useState(false);

    return (
      <Box display="grid" gap="8" w="sm">
        <Button onClick={() => setOpen((currentOpen) => !currentOpen)}>
          Toggle suggestions
        </Button>
        <Autocomplete
          open={open}
          onOpenChange={setOpen}
          name="controlled-open"
          aria-label="Controlled suggestions"
        >
          {renderOptions()}
        </Autocomplete>
      </Box>
    );
  },
  parameters: { controls: { disable: true } },
};

export const WithFormField: Story = {
  name: 'Ex: With FormField',
  render: () => (
    <Box w="sm">
      <FormField
        label="Primary technology"
        labelFor="primary-technology"
        helpText="Choose the technology this project depends on most."
      >
        <Autocomplete id="primary-technology" name="primaryTechnology">
          {renderOptions()}
        </Autocomplete>
      </FormField>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const TechnologyAssignmentExample: Story = {
  name: 'Ex: Technology Assignment',
  render: () => (
    <Box w="md">
      <FormField
        label="Project stack"
        labelFor="project-stack"
        helpText="Search the supported catalog or create a project-specific value."
      >
        <Autocomplete
          id="project-stack"
          name="projectStack"
          multiple
          allowCustomValue
          defaultValue={['react', 'typescript']}
          placeholder="Add technology…"
        >
          {renderOptions(extendedOptions)}
        </Autocomplete>
      </FormField>
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const KeyboardSelection: Story = {
  name: 'Ex: Keyboard Selection',
  render: () => (
    <Box w="sm">
      <Autocomplete name="keyboard" aria-label="Keyboard selection">
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await expect(input).toHaveAttribute('aria-activedescendant');
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('React');
  },
  parameters: { controls: { disable: true } },
};

export const KeyboardTokenEditing: Story = {
  name: 'Ex: Keyboard Token Editing',
  render: () => (
    <Box w="sm">
      <Autocomplete
        multiple
        defaultValue={['react', 'typescript']}
        name="token-editing"
        aria-label="Token editing"
      >
        {renderOptions()}
      </Autocomplete>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const removeTypeScript = canvas.getByRole('button', {
      name: 'Remove TypeScript',
    });
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');
    await expect(removeTypeScript).toHaveFocus();
    await expect(removeTypeScript).toBeInTheDocument();
    await userEvent.keyboard('{Backspace}');
    await expect(
      canvas.queryByRole('button', { name: 'Remove TypeScript' }),
    ).not.toBeInTheDocument();
  },
  parameters: { controls: { disable: true } },
};
