import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { HStack, VStack } from '@styled-system/jsx';

import { LocaleProvider } from '~/system/context';

import { Box } from '../Box';
import { Button } from '../Button';
import { FilterMenu, type FilterMenuRow } from '../FilterMenu';
import { useFilterMenu } from '../FilterMenu/useFilterMenu';
import { Text } from '../Text';

import {
  FilterField,
  type FilterFieldProps,
  type FilterFieldToken,
} from './FilterField';

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

/* ---------- Ex: Filter bar with Apply ---------- */

type BarFieldKind = 'many' | 'one' | 'lookup' | 'date' | 'text';

type BarField = {
  kind: BarFieldKind;
  /** Operators. The first is the default. */
  ops: string[];
  /** Values of a `many` or `one` field. */
  options?: string[];
};

const BAR_FIELDS: Record<string, BarField> = {
  Stage: {
    kind: 'many',
    ops: ['is any of', 'is none of'],
    options: ['Open', 'In progress', 'Waiting on customer', 'Closed'],
  },
  Priority: {
    kind: 'one',
    ops: ['is', 'is not'],
    options: ['High', 'Medium', 'Low'],
  },
  Customer: { kind: 'lookup', ops: ['is', 'is not'] },
  'Entered On': { kind: 'date', ops: ['is on or after', 'is before'] },
  'All text': { kind: 'text', ops: ['contains'] },
};

/** Fields a person can pick. "All text" comes from the search row only. */
const BAR_PICKABLE = ['Stage', 'Priority', 'Customer', 'Entered On'];

const KIND_DETAIL: Record<BarFieldKind, string> = {
  many: 'pick many',
  one: 'pick one',
  lookup: 'search',
  date: 'date',
  text: 'text',
};

const EXCLUDE_OPS = new Set(['is none of', 'is not']);

const CUSTOMERS = [
  { name: 'Acme Corp', city: 'Austin, TX' },
  { name: 'Apex Machining', city: 'Dallas, TX' },
  { name: 'Bluebird Labs', city: 'Denver, CO' },
  { name: 'Cobalt Motors', city: 'Detroit, MI' },
  { name: 'Delta Fabrication', city: 'Tulsa, OK' },
  { name: 'Evergreen Plastics', city: 'Portland, OR' },
  { name: 'Granite Controls', city: 'Austin, TX' },
];

const DATE_PRESETS = [
  { label: 'Start of this month', value: 'Oct 1, 2026' },
  { label: 'Start of last month', value: 'Sep 1, 2026' },
  { label: 'Start of the year', value: 'Jan 1, 2026' },
];

type BarFilter = { id: string; field: string; op: string; values: string[] };

const BAR_APPLIED: BarFilter[] = [
  {
    id: 'stage',
    field: 'Stage',
    op: 'is any of',
    values: ['Open', 'In progress'],
  },
  { id: 'priority', field: 'Priority', op: 'is', values: ['High'] },
  {
    id: 'entered',
    field: 'Entered On',
    op: 'is on or after',
    values: ['Sep 1, 2026'],
  },
  { id: 'customer', field: 'Customer', op: 'is not', values: ['Acme Corp'] },
];

const sameFilter = (a: BarFilter, b: BarFilter) =>
  a.field === b.field &&
  a.op === b.op &&
  a.values.join('\n') === b.values.join('\n');

const describeFilter = (f: BarFilter) =>
  `${f.field} ${f.op} ${f.values.join(', ')}`;

// A typed date needs a digit, so "Sep" alone is not read as a date.
const parseDate = (text: string) => {
  if (!/\d/.test(text)) return null;
  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

type BarMode =
  | { type: 'closed' }
  | { type: 'root' }
  | { type: 'values'; id: string }
  | { type: 'op'; id: string }
  | { type: 'more'; keys: string[] };

type BarToken = {
  filter: BarFilter;
  state: 'applied' | 'editing' | 'pending';
};

/**
 * A filter bar with staged changes: added and edited filters wait for Apply.
 * A removed filter applies at once, so it never waits. The app owns the
 * applied set, the draft, the edited token and the menu mode. The field and
 * the menu only show them.
 */
const StagedFilterBarDemo = () => {
  const [applied, setApplied] = useState(BAR_APPLIED);
  const [draft, setDraft] = useState(BAR_APPLIED);
  // A copy of the token being edited. Esc throws it away.
  const [edit, setEdit] = useState<BarFilter | null>(null);
  const [mode, setMode] = useState<BarMode>({ type: 'closed' });
  const [text, setText] = useState('');
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  // The input moves back out of a token when an edit ends, and gets focus
  // again. That focus must not open the menu.
  const quietFocus = useRef(false);

  /* What the field shows */

  const isPending = (f: BarFilter) => {
    const before = applied.find((a) => a.id === f.id);
    return !before || !sameFilter(before, f);
  };
  const pending = draft.filter(isPending).length;

  const shown: BarToken[] = [
    ...draft.map(
      (f): BarToken =>
        edit?.id === f.id
          ? { filter: edit, state: 'editing' }
          : { filter: f, state: isPending(f) ? 'pending' : 'applied' },
    ),
    ...(edit && !draft.some((f) => f.id === edit.id)
      ? [{ filter: edit, state: 'editing' } as BarToken]
      : []),
  ];

  /* Open, keep, cancel */

  const reset = () => {
    if (mode.type === 'values') {
      quietFocus.current = true;
      requestAnimationFrame(() => {
        quietFocus.current = false;
      });
    }
    setEdit(null);
    setMode({ type: 'closed' });
    setText('');
    setAnchor(null);
    // The next menu starts on its first row, not the last row used.
    menu.setActiveKey(null);
  };

  // Keeps the edit in the draft. A filter left with no value is dropped.
  const commit = (next: BarFilter | null = edit) => {
    if (next) {
      setDraft((current) => {
        if (next.values.length === 0) {
          return current.filter((f) => f.id !== next.id);
        }
        return current.some((f) => f.id === next.id)
          ? current.map((f) => (f.id === next.id ? next : f))
          : [...current, next];
      });
    }
    reset();
  };

  const open = (
    f: BarFilter,
    type: 'values' | 'op',
    from: HTMLElement | null,
  ) => {
    if (edit && edit.id !== f.id) commit(edit);
    setEdit({ ...f, values: [...f.values] });
    setMode({ type, id: f.id });
    setText('');
    setAnchor(from);
    menu.setActiveKey(null);
  };

  const startField = (field: string) => {
    const f: BarFilter = {
      id: `new-${nextId.current++}`,
      field,
      op: BAR_FIELDS[field]!.ops[0]!,
      values: [],
    };
    setEdit(f);
    setMode({ type: 'values', id: f.id });
    setText('');
    menu.setActiveKey(null);
  };

  // A value picked from the root menu. A field that has a filter with the
  // default operator gets the value, so two Stage tokens never show.
  const addValue = (field: string, value: string) => {
    const def = BAR_FIELDS[field]!;
    setDraft((current) => {
      const same = current.find(
        (f) => f.field === field && f.op === def.ops[0],
      );
      if (!same) {
        return [
          ...current,
          {
            id: `new-${nextId.current++}`,
            field,
            op: def.ops[0]!,
            values: [value],
          },
        ];
      }
      const values =
        def.kind === 'many'
          ? [...same.values.filter((v) => v !== value), value]
          : [value];
      return current.map((f) => (f.id === same.id ? { ...f, values } : f));
    });
    reset();
  };

  // A removal applies at once. Other pending changes still wait.
  const remove = (id: string) => {
    if (edit?.id === id) reset();
    setDraft((current) => current.filter((f) => f.id !== id));
    setApplied((current) => current.filter((f) => f.id !== id));
  };

  const apply = () => {
    setApplied(draft);
    reset();
  };

  const discard = () => {
    setDraft(applied);
    reset();
  };

  // A click outside the field and the menu keeps the edit and closes.
  useEffect(() => {
    if (mode.type === 'closed') return;
    const onMouseDown = (event: globalThis.MouseEvent) => {
      const target = event.target as Element;
      if (
        fieldRef.current?.contains(target) ||
        target.closest('[data-filter-bar-menu]')
      ) {
        return;
      }
      commit();
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  });

  /* Menu rows */

  const rows: FilterMenuRow[] = [];
  const actions = new Map<string, () => void>();
  const addRow = (
    row: Omit<Extract<FilterMenuRow, { type: 'item' }>, 'type'>,
    action: () => void,
  ) => {
    rows.push({ type: 'item', ...row });
    actions.set(row.key, action);
  };
  const query = text.trim();
  const q = query.toLowerCase();
  const editField = edit ? BAR_FIELDS[edit.field] : undefined;
  let footer = 'Enter picks · Esc cancels';

  if (mode.type === 'root') {
    const fields = BAR_PICKABLE.filter((f) => f.toLowerCase().includes(q));
    if (fields.length > 0) rows.push({ type: 'group', label: 'Fields' });
    for (const field of fields) {
      addRow(
        {
          key: `field:${field}`,
          label: field,
          detail: KIND_DETAIL[BAR_FIELDS[field]!.kind],
        },
        () => startField(field),
      );
    }
    if (q) {
      const matches = BAR_PICKABLE.flatMap((field) =>
        (BAR_FIELDS[field]!.options ?? CUSTOMERS.map((c) => c.name))
          .filter((value) => value.toLowerCase().includes(q))
          .map((value) => ({ field, value })),
      ).filter(({ field }) => BAR_FIELDS[field]!.kind !== 'date');
      if (matches.length > 0) {
        rows.push({ type: 'group', label: `Values matching “${query}”` });
      }
      for (const { field, value } of matches) {
        addRow(
          { key: `value:${field}:${value}`, label: `${field} is ${value}` },
          () => addValue(field, value),
        );
      }
      rows.push({ type: 'group', label: 'Search' });
      addRow({ key: 'search', label: `All text contains “${query}”` }, () =>
        addValue('All text', query),
      );
    }
    footer =
      pending > 0 && !q
        ? 'Type a field or a value · Enter applies'
        : 'Type a field or a value · Enter picks';
  }

  if (mode.type === 'op' && edit && editField) {
    rows.push({ type: 'group', label: `${edit.field} operator` });
    for (const op of editField.ops) {
      addRow(
        {
          key: `op:${op}`,
          label: op,
          selected: op === edit.op,
          detail:
            op === edit.op
              ? 'current'
              : EXCLUDE_OPS.has(op)
                ? 'excludes'
                : undefined,
        },
        () => {
          const next = { ...edit, op };
          if (next.values.length > 0) {
            commit(next);
          } else {
            setEdit(next);
            setMode({ type: 'values', id: next.id });
            setAnchor(null);
          }
        },
      );
    }
  }

  if (mode.type === 'values' && edit && editField) {
    rows.push({ type: 'group', label: `${edit.field} ${edit.op}` });
    if (editField.kind === 'many') {
      for (const value of editField.options ?? []) {
        if (!value.toLowerCase().includes(q)) continue;
        addRow(
          { key: value, label: value, checked: edit.values.includes(value) },
          () => {
            setEdit({
              ...edit,
              values: edit.values.includes(value)
                ? edit.values.filter((v) => v !== value)
                : [...edit.values, value],
            });
            setText('');
          },
        );
      }
      footer = 'Space toggles · Enter done · Esc cancels';
    } else if (editField.kind === 'one') {
      for (const value of editField.options ?? []) {
        if (!value.toLowerCase().includes(q)) continue;
        addRow(
          { key: value, label: value, selected: edit.values[0] === value },
          () => commit({ ...edit, values: [value] }),
        );
      }
    } else if (editField.kind === 'lookup') {
      // A lookup lists nothing until the person types.
      const current = edit.values[0];
      if (!q && current) {
        addRow({ key: current, label: current, selected: true }, () =>
          commit(),
        );
      }
      if (!q) rows.push({ type: 'empty', label: 'Type a customer name' });
      for (const customer of CUSTOMERS) {
        if (!q || !customer.name.toLowerCase().includes(q)) continue;
        addRow(
          {
            key: customer.name,
            label: customer.name,
            description: customer.city,
            selected: current === customer.name,
          },
          () => commit({ ...edit, values: [customer.name] }),
        );
      }
      footer = 'Type to find · Enter picks · Esc cancels';
    } else if (editField.kind === 'date') {
      const typed = parseDate(query);
      if (typed) {
        addRow({ key: 'typed', label: typed, detail: 'typed' }, () =>
          commit({ ...edit, values: [typed] }),
        );
      }
      for (const preset of DATE_PRESETS) {
        addRow(
          {
            key: preset.value,
            label: preset.label,
            detail: preset.value,
            selected: edit.values[0] === preset.value,
          },
          () => commit({ ...edit, values: [preset.value] }),
        );
      }
      footer = 'Type a date, such as 10/15/2026 · Esc cancels';
    }
    if (q && !rows.some((row) => row.type === 'item')) {
      rows.push({
        type: 'empty',
        label: `No ${edit.field.toLowerCase()} matches “${query}”`,
      });
    }
  }

  if (mode.type === 'more') {
    const hidden = shown.filter((t) => mode.keys.includes(t.filter.id));
    rows.push({ type: 'group', label: `${hidden.length} more filters` });
    for (const { filter, state } of hidden) {
      addRow(
        {
          key: filter.id,
          label: describeFilter(filter),
          detail: state === 'pending' ? state : undefined,
        },
        () => open(filter, 'values', null),
      );
    }
    footer = 'Pick a filter to edit it';
  }

  const editingMany = mode.type === 'values' && editField?.kind === 'many';
  const menu = useFilterMenu({
    rows,
    open: mode.type !== 'closed',
    onSelect: (key) => actions.get(key)?.(),
    onClose: reset,
    spaceSelects: editingMany && text === '',
  });

  const openRoot = () => {
    if (mode.type === 'closed') setMode({ type: 'root' });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const empty = text.trim() === '';
    const atRoot = mode.type === 'closed' || mode.type === 'root';
    // Enter on an empty input applies the pending changes.
    if (event.key === 'Enter' && empty && atRoot && pending > 0) {
      event.preventDefault();
      apply();
      return;
    }
    // Enter on an empty input ends a pick-many edit.
    if (event.key === 'Enter' && empty && editingMany) {
      event.preventDefault();
      commit();
      return;
    }
    // Esc with no menu open throws away the pending changes.
    if (event.key === 'Escape' && mode.type === 'closed' && pending > 0) {
      event.preventDefault();
      discard();
      return;
    }
    if (event.key === 'ArrowDown' && mode.type === 'closed') {
      event.preventDefault();
      openRoot();
      return;
    }
    menu.inputProps.onKeyDown(event);
  };

  const tokens = shown.map(({ filter, state }): FilterFieldToken => {
    const field = BAR_FIELDS[filter.field]!;
    return {
      key: filter.id,
      field: filter.field,
      operator: filter.op,
      value: field.kind === 'many' ? filter.values : (filter.values[0] ?? ''),
      state,
      tone: EXCLUDE_OPS.has(filter.op) ? 'exclude' : 'default',
      operatorLocked: field.ops.length === 1,
      onValueClick: () => open(filter, 'values', null),
      onOperatorClick: (event) => open(filter, 'op', event.currentTarget),
      onRemove: () => remove(filter.id),
    };
  });

  const menuAnchor =
    mode.type === 'op' || mode.type === 'more' ? anchor : input;

  return (
    <VStack alignItems="stretch" gap="12" w="full" minH="md">
      <HStack gap="8" alignItems="start">
        <Box ref={fieldRef} flex="1" minW="0">
          <FilterField
            w="full"
            tokens={tokens}
            inputValue={text}
            onInputChange={(value) => {
              setText(value);
              menu.setActiveKey(null);
              if (mode.type === 'closed' || mode.type === 'more') {
                setMode({ type: 'root' });
              }
            }}
            inputRef={setInput}
            inputProps={{
              ...menu.inputProps,
              onFocus: () => {
                if (!quietFocus.current) openRoot();
              },
              onMouseDown: openRoot,
              onKeyDown,
            }}
            placeholder="Filter or search…"
            editingKey={mode.type === 'values' ? (edit?.id ?? null) : null}
            onMoreClick={(keys, from) => {
              if (mode.type === 'more') return reset();
              commit();
              setMode({ type: 'more', keys });
              setAnchor(from);
            }}
            moreOpen={mode.type === 'more'}
            shortcut="/"
            onClearAll={() => {
              setDraft([]);
              setApplied([]);
              reset();
            }}
          />
        </Box>
        {pending > 0 && (
          <>
            <Button variant="ghost" onClick={discard}>
              Discard
            </Button>
            <Button variant="primary" onClick={apply}>
              {`Apply (${pending})`}
            </Button>
          </>
        )}
      </HStack>
      <Text textStyle="body.sm" color="text.subtle">
        {pending > 0
          ? `These results do not include ${pending} pending ${pending === 1 ? 'change' : 'changes'}. Press Enter or Apply to update them. Press Esc or Discard to undo.`
          : 'The results match the applied filters.'}
      </Text>
      <Text textStyle="body.sm" color="text.subtlest" data-testid="applied">
        {`Applied: ${applied.map(describeFilter).join(' · ') || 'none'}`}
      </Text>
      <FilterMenu
        {...menu.menuProps}
        anchor={menuAnchor}
        aria-label={
          mode.type === 'values'
            ? `${edit?.field ?? ''} values`
            : mode.type === 'op'
              ? 'Operators'
              : mode.type === 'more'
                ? 'More filters'
                : 'Fields and values'
        }
        query={mode.type === 'op' || mode.type === 'more' ? undefined : text}
        footer={footer}
        data-filter-bar-menu
      />
    </VStack>
  );
};

export const ExFilterBarWithApply: Story = {
  name: 'Ex: Filter bar with Apply',
  render: () => <StagedFilterBarDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    // While a combobox menu is open, Floating UI hides the rest of the page
    // from screen readers. So queries in the field allow hidden elements.
    const token = (name: RegExp) =>
      canvas.getByRole('group', { name, hidden: true });
    const part = (name: RegExp, partName: string) =>
      within(token(name)).getByRole('button', { name: partName, hidden: true });
    const applyButton = () =>
      canvas.queryByRole('button', { name: /^Apply/, hidden: true });
    // The input remounts when it moves into a token, so find it each time.
    const input = () =>
      canvas.getByRole('combobox', { name: 'Filter or search', hidden: true });

    // A click on the value opens its menu, with the picked values checked.
    // A new pick waits for Apply.
    await userEvent.click(part(/^Stage/, 'Open, In progress'));
    await waitFor(() =>
      expect(token(/^Stage/)).toHaveAttribute('data-state', 'editing'),
    );
    await userEvent.click(
      await body.findByRole('option', { name: /^Waiting on customer/ }),
    );
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(token(/^Stage/)).toHaveAttribute('data-state', 'pending'),
    );
    expect(applyButton()).toHaveTextContent('Apply (1)');

    // Esc cancels an edit and puts the token back as it was.
    await userEvent.click(part(/^Stage/, 'Stage'));
    await body.findByRole('option', { name: /^Open/ });
    await userEvent.keyboard(' ');
    await waitFor(() =>
      expect(token(/^Stage/)).toHaveAccessibleName(
        'Stage is any of In progress, Waiting on customer',
      ),
    );
    await userEvent.keyboard('{Escape}');
    await waitFor(() =>
      expect(token(/^Stage/)).toHaveAccessibleName(
        'Stage is any of Open, In progress, Waiting on customer',
      ),
    );

    // The operator menu switches to an excluding operator.
    await userEvent.click(part(/^Priority/, 'is'));
    await userEvent.click(await body.findByRole('option', { name: /^is not/ }));
    await waitFor(() =>
      expect(token(/^Priority/)).toHaveAttribute('data-tone', 'exclude'),
    );
    expect(token(/^Priority/)).toHaveAttribute('data-state', 'pending');
    expect(applyButton()).toHaveTextContent('Apply (2)');

    // Apply makes the draft the applied set.
    await userEvent.click(applyButton()!);
    await waitFor(() => expect(applyButton()).toBeNull());
    expect(canvas.getByTestId('applied')).toHaveTextContent(
      'Priority is not High',
    );

    // The remove button applies at once. It does not wait for Apply.
    await userEvent.click(
      within(token(/^Priority/)).getByRole('button', {
        name: /^Remove filter/,
        hidden: true,
      }),
    );
    await waitFor(() =>
      expect(canvas.getByTestId('applied')).not.toHaveTextContent('Priority'),
    );
    expect(applyButton()).toBeNull();

    // Backspace twice removes the last filter, also at once.
    await userEvent.click(input());
    await userEvent.keyboard('{Backspace}{Backspace}');
    await waitFor(() =>
      expect(canvas.getByTestId('applied')).not.toHaveTextContent('Customer'),
    );
    expect(applyButton()).toBeNull();

    // An edit waits for Apply. Esc with no menu open throws it away.
    await userEvent.click(part(/^Stage/, 'Stage'));
    await userEvent.click(await body.findByRole('option', { name: /^Closed/ }));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(applyButton()).toHaveTextContent('Apply (1)'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(applyButton()).toBeNull());

    // Typing finds fields, values and a text search. Leave the menu open for
    // the visual snapshot.
    await userEvent.type(input(), 'clo');
    // The test library drops the space before a highlight, so the name is
    // matched on the value alone.
    await body.findByRole('option', { name: /Closed$/ });
  },
};
