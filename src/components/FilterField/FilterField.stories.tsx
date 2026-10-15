import { useState, type KeyboardEvent } from 'react';

import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { VStack } from '@styled-system/jsx';

import { LocaleProvider } from '~/system/context';

import { Box } from '../Box';
import { Button } from '../Button';
import { FilterMenu, type FilterMenuRow } from '../FilterMenu';
import { useFilterMenu } from '../FilterMenu/useFilterMenu';
import { Text } from '../Text';

import { FilterField, type FilterFieldProps } from './FilterField';

import type { FilterTokenState } from '../FilterToken';
import type { Meta, StoryObj } from '@storybook/react-vite';

type DemoFilter = {
  id: string;
  field: string;
  operator: string;
  value: string | string[];
  state?: FilterTokenState;
  locked?: boolean;
};

const CASE_FILTERS: DemoFilter[] = [
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
    value: ['Open', 'In progress'],
  },
  {
    id: 'entered',
    field: 'Entered On',
    operator: 'is on or after',
    value: 'Sep 1, 2026',
  },
];

const MANY_FILTERS: DemoFilter[] = [
  ...CASE_FILTERS,
  {
    id: 'assigned',
    field: 'Assigned To',
    operator: 'is any of',
    value: ['Brent Barton', 'David Atkins'],
    state: 'pending',
  },
  { id: 'type', field: 'Case Type', operator: 'is', value: 'Warranty' },
  { id: 'customer', field: 'Customer', operator: 'is', value: 'Acme Corp' },
];

type DemoProps = Partial<FilterFieldProps> & {
  initial?: DemoFilter[];
  width?: FilterFieldProps['w'];
};

/** Holds the filters and the typed text, as the app does. */
const FieldDemo = ({
  initial = CASE_FILTERS,
  width = 'full',
  shortcut = '/',
  ...fieldProps
}: DemoProps) => {
  const [filters, setFilters] = useState(initial);
  const [text, setText] = useState('');
  const remove = (id: string) =>
    setFilters((current) => current.filter((f) => f.id !== id));

  return (
    <VStack alignItems="start" gap="12">
      <FilterField
        w={width}
        tokens={filters.map((f) => ({
          key: f.id,
          field: f.field,
          operator: f.operator,
          value: f.value,
          state: f.state,
          operatorLocked: f.locked,
          onRemove: () => remove(f.id),
        }))}
        inputValue={text}
        onInputChange={setText}
        placeholder="Filter or search…"
        shortcut={shortcut}
        onClearAll={() => {
          setFilters([]);
          setText('');
        }}
        {...fieldProps}
      />
      <Button size="sm" variant="ghost" onClick={() => setFilters(initial)}>
        Reset
      </Button>
    </VStack>
  );
};

const meta = {
  title: 'Components/FilterField',
  component: FilterField,
  parameters: {
    layout: 'padded',
  },
  args: {
    tokens: [],
    inputValue: '',
    onInputChange: fn(),
    onClearAll: fn(),
    onMoreClick: fn(),
    shortcut: '/',
  },
  render: (args) => (
    <FieldDemo
      shortcut={args.shortcut}
      disabled={args.disabled}
      onMoreClick={args.onMoreClick}
    />
  ),
} satisfies Meta<typeof FilterField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Filter or search' });

    expect(
      canvas.getByRole('group', { name: 'Stage is any of Open, In progress' }),
    ).toBeVisible();
    expect(input).toHaveAttribute('aria-keyshortcuts', '/');

    // Typed text stays in the input.
    await userEvent.click(input);
    await userEvent.type(input, 'acme');
    expect(input).toHaveValue('acme');

    // The clear button removes every token and the text.
    await userEvent.click(
      canvas.getByRole('button', { name: 'Clear all filters' }),
    );
    await waitFor(() => expect(canvas.queryAllByRole('group')).toHaveLength(0));
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();

    await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
    await waitFor(() => expect(canvas.getAllByRole('group')).toHaveLength(3));
  },
};

export const Empty: Story = {
  render: (args) => <FieldDemo initial={[]} shortcut={args.shortcut} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // With no token and no text, there is nothing to clear.
    expect(
      canvas.queryByRole('button', { name: 'Clear all filters' }),
    ).not.toBeInTheDocument();
    expect(canvas.getByText('/')).toBeVisible();
    expect(
      canvas.getByRole('textbox', { name: 'Filter or search' }),
    ).toHaveAttribute('placeholder', 'Filter or search…');
  },
};

// The first call's arguments of a story `fn()` spy.
const firstCall = (spy: unknown) =>
  (spy as { mock: { calls: unknown[][] } }).mock.calls[0] as [
    string[],
    HTMLElement,
  ];

export const Overflow: Story = {
  render: (args) => (
    <FieldDemo
      initial={MANY_FILTERS}
      width="2xl"
      onMoreClick={args.onMoreClick}
    />
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // Tokens that do not fit go behind "+N more". The button has a dashed
    // border when a hidden token is pending.
    const more = await canvas.findByRole('button', { name: /^\+\d more$/ });
    expect(more).toHaveAttribute('data-pending');
    expect(
      canvas.getByRole('group', { name: 'Resolution is All open' }),
    ).toBeVisible();
    expect(
      canvas.queryByRole('group', { name: 'Customer is Acme Corp' }),
    ).not.toBeInTheDocument();

    // A click gives the app the hidden keys and the button, for a menu.
    await userEvent.click(more);
    expect(args.onMoreClick).toHaveBeenCalledOnce();
    const [hiddenKeys, anchor] = firstCall(args.onMoreClick);
    expect(hiddenKeys).toContain('customer');
    expect(hiddenKeys).not.toContain('resolution');
    expect(anchor).toBe(more);

    // The click focused the input. Leave the field so the hint shows.
    canvas.getByRole('textbox', { name: 'Filter or search' }).blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
  },
};

export const Focused: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Filter or search' });

    expect(canvas.getByText('/')).toBeVisible();
    await userEvent.click(input);
    await waitFor(() => expect(input).toHaveFocus());

    // The shortcut hint hides while the field has focus.
    expect(canvas.queryByText('/')).not.toBeInTheDocument();

    // It comes back on blur, also when the input has text.
    await userEvent.type(input, 'acme');
    input.blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
    await userEvent.clear(input);
    input.blur();
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole('textbox', { name: 'Filter or search' }),
    ).toBeDisabled();
    expect(
      canvas.getByRole('button', { name: /^Remove filter: Stage/ }),
    ).toBeDisabled();
    expect(
      canvas.queryByRole('button', { name: 'Clear all filters' }),
    ).not.toBeInTheDocument();
    expect(canvas.queryByText('/')).not.toBeInTheDocument();
  },
};

export const Shortcut: Story = {
  render: (args) => (
    <VStack alignItems="start" gap="12">
      <Box
        as="input"
        aria-label="Notes"
        w="xs"
        h="32"
        px="8"
        borderWidth="1"
        borderStyle="solid"
        borderColor="border"
        borderRadius="4"
        bg="surface"
        color="text"
      />
      <FieldDemo shortcut={args.shortcut} />
    </VStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Filter or search' });
    const notes = canvas.getByRole('textbox', { name: 'Notes' });

    // "/" typed in another text field stays there.
    await userEvent.type(notes, 'a/b');
    expect(notes).toHaveValue('a/b');
    expect(input).not.toHaveFocus();

    // Anywhere else, "/" focuses the field and is not typed.
    notes.blur();
    await userEvent.keyboard('/');
    await waitFor(() => expect(input).toHaveFocus());
    expect(input).toHaveValue('');

    // Leave the field so the hint shows again.
    input.blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
  },
};

export const BackspaceRemoves: Story = {
  name: 'Backspace removes',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Filter or search' });
    const entered = () =>
      canvas.queryByRole('group', {
        name: 'Entered On is on or after Sep 1, 2026',
      });

    await userEvent.click(input);

    // Backspace in text deletes text and arms nothing.
    await userEvent.type(input, 'a{Backspace}');
    expect(entered()).toHaveAttribute('data-state', 'applied');

    // The first Backspace arms the last token. Another key disarms it.
    await userEvent.keyboard('{Backspace}');
    await waitFor(() =>
      expect(entered()).toHaveAttribute('data-state', 'armed'),
    );
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() =>
      expect(entered()).toHaveAttribute('data-state', 'applied'),
    );

    // Two Backspaces in a row remove it.
    await userEvent.keyboard('{Backspace}{Backspace}');
    await waitFor(() => expect(entered()).not.toBeInTheDocument());
    expect(input).toHaveFocus();

    await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
    await waitFor(() => expect(entered()).toBeVisible());
  },
};

const EditingDemo = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [text, setText] = useState('');
  return (
    <VStack alignItems="start" gap="12">
      <FilterField
        w="full"
        tokens={CASE_FILTERS.map((f) => ({
          key: f.id,
          field: f.field,
          operator: f.operator,
          value: f.value,
          state: f.id === editing ? 'editing' : 'applied',
          operatorLocked: f.locked,
          onValueClick: () => setEditing(f.id),
        }))}
        inputValue={text}
        onInputChange={setText}
        inputProps={{
          onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Escape') setEditing(null);
          },
        }}
        placeholder="Filter or search…"
        editingKey={editing}
        shortcut="/"
      />
      <Text textStyle="body.sm" color="text.subtlest">
        Click a value to edit it in place. Esc ends the edit.
      </Text>
    </VStack>
  );
};

export const EditingInPlace: Story = {
  render: () => <EditingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const stage = () =>
      canvas.getByRole('group', { name: 'Stage is any of Open, In progress' });

    // A click on a value moves the input into that token, with focus.
    await userEvent.click(
      canvas.getByRole('button', { name: 'Open, In progress' }),
    );
    await waitFor(() =>
      expect(stage()).toHaveAttribute('data-state', 'editing'),
    );
    const inline = within(stage()).getByRole('textbox', {
      name: 'Filter or search',
    });
    await waitFor(() => expect(inline).toHaveFocus());

    await userEvent.type(inline, 'Wai');
    expect(inline).toHaveValue('Wai');

    // Esc moves the input back to the end, and focus stays in it.
    await userEvent.keyboard('{Escape}');
    await waitFor(() =>
      expect(stage()).toHaveAttribute('data-state', 'applied'),
    );
    const input = canvas.getByRole('textbox', { name: 'Filter or search' });
    expect(within(stage()).queryByRole('textbox')).not.toBeInTheDocument();
    await waitFor(() => expect(input).toHaveFocus());

    // Leave the story at rest for the visual snapshot.
    await userEvent.clear(input);
    await userEvent.click(
      canvas.getByRole('button', { name: 'Open, In progress' }),
    );
    await waitFor(() =>
      expect(stage()).toHaveAttribute('data-state', 'editing'),
    );
  },
};

export const TranslatedLabels: Story = {
  render: () => (
    <LocaleProvider
      labels={{
        filterOrSearch: 'Filtrar o buscar',
        clearFilters: 'Quitar todos los filtros',
        moreFilters: (count) => `+${count} más`,
      }}
    >
      <FieldDemo initial={MANY_FILTERS} width="2xl" />
    </LocaleProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole('textbox', { name: 'Filtrar o buscar' }),
    ).toBeVisible();
    expect(
      canvas.getByRole('button', { name: 'Quitar todos los filtros' }),
    ).toBeVisible();
    expect(
      await canvas.findByRole('button', { name: /^\+\d más$/ }),
    ).toBeVisible();
  },
};

/* ---------- Ex: Add a filter ---------- */

const FIELD_VALUES: Record<string, string[]> = {
  Stage: ['Open', 'In progress', 'Waiting on customer', 'Closed'],
  'Case Type': ['Warranty', 'Repair', 'Question'],
  Priority: ['High', 'Medium', 'Low'],
};

type Mode = { type: 'closed' } | { type: 'fields' } | { type: 'values' };

const AddFilterDemo = () => {
  const [filters, setFilters] = useState<DemoFilter[]>([]);
  const [text, setText] = useState('');
  const [mode, setMode] = useState<Mode>({ type: 'closed' });
  const [editing, setEditing] = useState<string | null>(null);
  const [input, setInput] = useState<HTMLInputElement | null>(null);

  const edited = filters.find((f) => f.id === editing);
  const picked = edited && Array.isArray(edited.value) ? edited.value : [];
  const q = text.trim().toLowerCase();

  const rows: FilterMenuRow[] = [];
  if (mode.type === 'fields') {
    rows.push({ type: 'group', label: 'Fields' });
    for (const field of Object.keys(FIELD_VALUES)) {
      if (field.toLowerCase().includes(q)) {
        rows.push({ type: 'item', key: field, label: field, detail: 'list' });
      }
    }
  } else if (mode.type === 'values' && edited) {
    rows.push({ type: 'group', label: `${edited.field} is any of` });
    for (const value of FIELD_VALUES[edited.field] ?? []) {
      if (value.toLowerCase().includes(q)) {
        rows.push({
          type: 'item',
          key: value,
          label: value,
          checked: picked.includes(value),
        });
      }
    }
  }
  if (q && !rows.some((row) => row.type === 'item')) {
    rows.push({ type: 'empty', label: `No match for “${text}”` });
  }

  // Ends the edit. A filter with no value is dropped.
  const finish = () => {
    setFilters((current) =>
      current.filter((f) => f.id !== editing || f.value.length > 0),
    );
    setEditing(null);
    setMode({ type: 'closed' });
    setText('');
  };

  const editValues = (id: string) => {
    setEditing(id);
    setMode({ type: 'values' });
    setText('');
  };

  const onSelect = (key: string) => {
    if (mode.type === 'fields') {
      const id = `${key}-${filters.length}`;
      setFilters((current) => [
        ...current,
        { id, field: key, operator: 'is any of', value: [] },
      ]);
      editValues(id);
      return;
    }
    setFilters((current) =>
      current.map((f) =>
        f.id === editing
          ? {
              ...f,
              value: picked.includes(key)
                ? picked.filter((v) => v !== key)
                : [...picked, key],
            }
          : f,
      ),
    );
    setText('');
  };

  const menu = useFilterMenu({
    rows,
    open: mode.type !== 'closed',
    onSelect,
    onClose: finish,
    spaceSelects: mode.type === 'values' && text === '',
  });

  return (
    <VStack alignItems="start" gap="12" minH="sm">
      <FilterField
        w="full"
        tokens={filters.map((f) => ({
          key: f.id,
          field: f.field,
          operator: f.operator,
          value: f.value,
          state: f.id === editing ? 'editing' : 'applied',
          onValueClick: () => editValues(f.id),
          onRemove: () => {
            if (f.id === editing) finish();
            setFilters((current) => current.filter((x) => x.id !== f.id));
          },
        }))}
        inputValue={text}
        onInputChange={(value) => {
          setText(value);
          menu.setActiveKey(null);
          if (mode.type === 'closed') setMode({ type: 'fields' });
        }}
        inputRef={setInput}
        inputProps={{
          ...menu.inputProps,
          onFocus: () => {
            if (mode.type === 'closed') setMode({ type: 'fields' });
          },
          onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
            // Enter on an empty input ends a multi-pick edit.
            if (event.key === 'Enter' && mode.type === 'values' && !text) {
              event.preventDefault();
              finish();
              return;
            }
            menu.inputProps.onKeyDown(event);
          },
        }}
        placeholder="Filter or search…"
        editingKey={editing}
        shortcut="/"
        onClearAll={() => {
          setFilters([]);
          finish();
        }}
      />
      <FilterMenu
        {...menu.menuProps}
        anchor={input}
        aria-label={mode.type === 'values' ? 'Values' : 'Fields'}
        query={text}
        footer={
          mode.type === 'values'
            ? 'Space toggles · Enter done · Esc done'
            : 'Type a field · Enter picks'
        }
      />
    </VStack>
  );
};

export const ExAddAFilter: Story = {
  name: 'Ex: Add a filter',
  render: () => <AddFilterDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const input = () =>
      canvas.getByRole('combobox', { name: 'Filter or search' });

    // Typing narrows the fields. Enter starts a Stage token, and the input
    // moves into it.
    await userEvent.click(input());
    await userEvent.type(input(), 'sta');
    await body.findByRole('option', { name: /^Stage/ });
    await userEvent.keyboard('{Enter}');
    // While a combobox menu is open, Floating UI hides the rest of the page
    // from screen readers, tokens included. So token queries allow hidden.
    const stage = () =>
      canvas.getByRole('group', { name: /^Stage/, hidden: true });
    await waitFor(() =>
      expect(stage()).toHaveAttribute('data-state', 'editing'),
    );
    await waitFor(() =>
      expect(
        within(stage()).getByRole('combobox', { hidden: true }),
      ).toHaveFocus(),
    );

    // Space toggles the active value. Arrow keys move.
    await body.findByRole('option', { name: /^Open/ });
    await userEvent.keyboard(' {ArrowDown} ');
    await waitFor(() =>
      expect(stage()).toHaveAccessibleName('Stage is any of Open, In progress'),
    );

    // Enter on the empty input ends the edit. The input goes back to the end.
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(stage()).toHaveAttribute('data-state', 'applied'),
    );
    await waitFor(() => expect(input()).toHaveFocus());

    // Leave the menu open for the visual snapshot.
    await userEvent.type(input(), 'p');
    await body.findByRole('option', { name: /^Priority/ });
  },
};
