import { useState } from 'react';

import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { HStack, VStack } from '@styled-system/jsx';

import { Box } from '../Box';
import { MenuGroup, MenuItem, SubMenu } from '../Menu';
import { Text } from '../Text';

import { SplitButton } from './SplitButton';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * A main action joined to a menu of related actions.
 *
 * - When to use: one action is the usual choice, and a few related actions
 *   are the other ways to do it, such as "Move to next" with "Choose
 *   location…" and "Partial move…" in the menu.
 * - When not to use: for one action, use `Button`. When no action is the
 *   main one, use `Menu` with `trigger={<Button>…</Button>}`.
 * - Each half can be disabled on its own, with a reason in a tooltip:
 *   `disabledReason` for the main action and `menuDisabledReason` for the
 *   menu toggle.
 * - Keyboard: two tab stops. Enter, Space, or the arrow keys on the toggle
 *   open the menu. Escape closes it and returns focus to the toggle.
 * - The toggle's accessible name comes from `menuLabel`, or from the
 *   `moreActions` label of `LocaleProvider`.
 *
 * ```tsx
 * <SplitButton onClick={moveToNext} menuLabel="More move options">
 *   Move to next: Packing
 *   <SplitButton.Menu>
 *     <MenuItem label="Choose location…" onClick={chooseLocation} />
 *     <MenuItem label="Partial move…" onClick={partialMove} />
 *   </SplitButton.Menu>
 * </SplitButton>
 * ```
 */
const meta = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'primary', 'cta', 'hollow', 'danger'],
      table: { defaultValue: { summary: 'standard' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    loading: { control: 'boolean' },
    disabledReason: { control: 'text' },
    menuDisabledReason: { control: 'text' },
    menuLabel: { control: 'text' },
  },
  args: {
    onClick: fn(),
    children: (
      <>
        Move to next: Packing
        <SplitButton.Menu>
          <MenuItem label="Choose location…" />
          <MenuItem label="Partial move…" />
        </SplitButton.Menu>
      </>
    ),
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const variants = ['standard', 'primary', 'cta', 'hollow', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const moveMenu = (
  <SplitButton.Menu>
    <MenuItem label="Choose location…" />
    <MenuItem label="Partial move…" />
  </SplitButton.Menu>
);

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <VStack gap="12" alignItems="start">
      {variants.map((variant) => (
        <SplitButton key={variant} variant={variant}>
          {`Move to next (${variant})`}
          {moveMenu}
        </SplitButton>
      ))}
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => (
    <VStack gap="12" alignItems="start">
      {sizes.map((size) => (
        <HStack key={size} gap="8">
          <SplitButton size={size}>
            {`Move to next (${size})`}
            {moveMenu}
          </SplitButton>
          <SplitButton size={size} variant="primary">
            {`Move to next (${size})`}
            {moveMenu}
          </SplitButton>
          <SplitButton size={size} variant="hollow">
            {`Move to next (${size})`}
            {moveMenu}
          </SplitButton>
        </HStack>
      ))}
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * The main action is disabled with a reason. The menu still opens, so the
 * other actions stay available.
 */
export const ActionDisabled: Story = {
  name: 'Action Disabled With Reason',
  render: () => (
    <VStack gap="12" alignItems="start">
      {variants.map((variant) => (
        <SplitButton
          key={variant}
          variant={variant}
          disabledReason="This is the last location on the route."
        >
          Move to next
          {moveMenu}
        </SplitButton>
      ))}
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

/** The menu toggle is disabled with a reason. The main action still works. */
export const MenuDisabled: Story = {
  name: 'Menu Disabled With Reason',
  render: () => (
    <VStack gap="12" alignItems="start">
      {variants.map((variant) => (
        <SplitButton
          key={variant}
          variant={variant}
          menuDisabledReason="You need the Inventory role to choose a location."
        >
          Move to next: Packing
          {moveMenu}
        </SplitButton>
      ))}
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

/** `loading` shows a spinner on the main action only. */
export const Loading: Story = {
  render: () => (
    <HStack gap="8">
      {variants.map((variant) => (
        <SplitButton key={variant} variant={variant} loading>
          Move to next
          {moveMenu}
        </SplitButton>
      ))}
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * The menu holds `MenuItem`, `MenuGroup`, and `SubMenu` children. It opens
 * below the button, aligned to its end. This story opens it with
 * `defaultOpen`.
 */
export const MenuOpen: Story = {
  name: 'Menu Open',
  render: () => (
    <Box pb="224">
      <SplitButton variant="primary" menuLabel="More move options">
        Move to next: Packing
        <SplitButton.Menu defaultOpen>
          <MenuItem label="Choose location…" />
          <MenuItem label="Partial move…" />
          <MenuGroup label="Undo" divider>
            <MenuItem label="Move back to Picking" />
          </MenuGroup>
          <SubMenu label="Send to">
            <MenuItem label="Quality hold" />
            <MenuItem label="Rework" />
          </SubMenu>
        </SplitButton.Menu>
      </SplitButton>
    </Box>
  ),
  parameters: { controls: { disable: true } },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);

    await expect(await body.findByRole('menu')).toBeVisible();
    await expect(
      body.getByRole('button', { name: 'More move options' }),
    ).toHaveAttribute('aria-expanded', 'true');
  },
};

const route = ['Receiving', 'Inspection', 'Picking', 'Packing', 'Shipping'];

/**
 * Use case: the work view's "Move to next". One click moves the job to the
 * next location on its route. The menu holds the other ways to move. At the
 * last location, the main action is disabled with a reason, and the menu
 * still works.
 */
export const ExMoveToNext: Story = {
  name: 'Ex: Move to Next',
  render: function Render() {
    const [index, setIndex] = useState(2);
    const current = route[index] ?? '';
    const next = route[index + 1];

    return (
      <VStack gap="12" alignItems="start">
        <Text>{`Job 1042 is at ${current}.`}</Text>
        <SplitButton
          variant="primary"
          menuLabel="More move options"
          onClick={() => setIndex((i) => i + 1)}
          disabledReason={
            next ? undefined : 'This is the last location on the route.'
          }
        >
          {next ? `Move to next: ${next}` : 'Move to next'}
          <SplitButton.Menu>
            <MenuItem label="Choose location…" />
            <MenuItem label="Partial move…" />
            <MenuItem
              label="Start over at Receiving"
              disabled={index === 0}
              onClick={() => setIndex(0)}
            />
          </SplitButton.Menu>
        </SplitButton>
      </VStack>
    );
  },
  parameters: { controls: { disable: true } },
};

const chooseLocation = fn();

export const KeyboardBehavior: Story = {
  name: 'Test: keyboard',
  render: (args) => (
    <SplitButton {...args}>
      Move to next: Packing
      <SplitButton.Menu>
        <MenuItem label="Choose location…" onClick={chooseLocation} />
        <MenuItem label="Partial move…" />
      </SplitButton.Menu>
    </SplitButton>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    chooseLocation.mockClear();
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing',
    });
    const toggle = canvas.getByRole('button', { name: 'More actions' });

    // Two tab stops: the action, then the toggle.
    await userEvent.tab();
    await expect(action).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await expect(toggle).toHaveAttribute('aria-haspopup', 'menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // Enter opens the menu and focuses the first item.
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(
        body.getByRole('menuitem', { name: 'Choose location…' }),
      ).toHaveFocus(),
    );
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{ArrowDown}');
    await expect(
      body.getByRole('menuitem', { name: 'Partial move…' }),
    ).toHaveFocus();

    // Escape closes the menu and returns focus to the toggle.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(toggle).toHaveFocus();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // ArrowDown also opens it. Enter on an item runs it and closes the menu.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() =>
      expect(
        body.getByRole('menuitem', { name: 'Choose location…' }),
      ).toHaveFocus(),
    );
    await userEvent.keyboard('{Enter}');
    await expect(chooseLocation).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await waitFor(() => expect(toggle).toHaveFocus());
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  },
};

export const OpenAndClose: Story = {
  name: 'Test: menu opens and closes',
  render: (args) => (
    <VStack gap="16" alignItems="start">
      <SplitButton {...args} />
      <Text>Outside the split button</Text>
    </VStack>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const toggle = canvas.getByRole('button', { name: 'More actions' });

    const caret = toggle.querySelector('svg');
    if (!caret) throw new Error('Missing the caret.');
    await expect(getComputedStyle(caret).transform).toBe('none');

    // A click on the toggle opens the menu without running the action. The
    // caret turns over while the menu is open.
    await userEvent.click(toggle);
    const menu = await body.findByRole('menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(args.onClick).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(getComputedStyle(caret).transform).toBe(
        'matrix(-1, 0, 0, -1, 0, 0)',
      ),
    );

    // The menu opens below the button, aligned to its end.
    const toggleBox = toggle.getBoundingClientRect();
    const menuBox = menu.getBoundingClientRect();
    await expect(menuBox.top).toBeGreaterThanOrEqual(toggleBox.bottom);
    await expect(Math.round(menuBox.right)).toBe(Math.round(toggleBox.right));

    // A second click closes it, and the caret turns back.
    await userEvent.click(toggle);
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await waitFor(() => expect(getComputedStyle(caret).transform).toBe('none'));

    // A click outside closes it.
    await userEvent.click(toggle);
    await body.findByRole('menu');
    await userEvent.click(canvas.getByText('Outside the split button'));
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());

    // Choosing an item closes it.
    await userEvent.click(toggle);
    await userEvent.click(
      await body.findByRole('menuitem', { name: 'Partial move…' }),
    );
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(args.onClick).not.toHaveBeenCalled();

    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  },
};

export const ActionDisabledBehavior: Story = {
  name: 'Test: action disabled, menu works',
  args: { disabledReason: 'This is the last location on the route.' },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing',
    });
    const toggle = canvas.getByRole('button', { name: 'More actions' });

    await expect(action).toHaveAttribute('aria-disabled', 'true');
    await expect(action).toHaveAccessibleDescription(
      'This is the last location on the route.',
    );
    await expect(toggle).not.toHaveAttribute('aria-disabled', 'true');

    // The action stays in the tab order but does nothing.
    await userEvent.tab();
    await expect(action).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(action);
    await expect(args.onClick).not.toHaveBeenCalled();

    // The menu still opens from the keyboard and the pointer.
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await userEvent.click(toggle);
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());

    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  },
};

export const MenuDisabledBehavior: Story = {
  name: 'Test: menu disabled, action works',
  args: {
    menuDisabledReason: 'You need the Inventory role to choose a location.',
  },
  // Room above for the tooltip, so it does not flip below.
  render: (args) => (
    <Box pt="64">
      <SplitButton {...args} />
    </Box>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing',
    });
    const toggle = canvas.getByRole('button', { name: 'More actions' });

    await expect(toggle).toHaveAttribute('aria-disabled', 'true');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAccessibleDescription(
      'You need the Inventory role to choose a location.',
    );
    await expect(action).not.toHaveAttribute('aria-disabled', 'true');

    // The action works.
    await userEvent.click(action);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // The toggle stays in the tab order, but no key or click opens the menu.
    action.focus();
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    for (const key of ['{Enter}', ' ', '{ArrowDown}', '{ArrowUp}']) {
      await userEvent.keyboard(key);
    }
    await userEvent.click(toggle);
    await expect(body.queryByRole('menu')).toBeNull();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // The reason shows in the toggle's tooltip, above the toggle, on the
    // same side as the action's reason.
    const tooltip = await body.findByRole('tooltip');
    await expect(tooltip).toHaveTextContent(
      'You need the Inventory role to choose a location.',
    );
    await waitFor(() =>
      expect(tooltip.getBoundingClientRect().bottom).toBeLessThanOrEqual(
        toggle.getBoundingClientRect().top,
      ),
    );

    await userEvent.unhover(toggle);
    toggle.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  },
};

export const LoadingBehavior: Story = {
  name: 'Test: loading is on the action only',
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const action = canvas.getByRole('button', {
      name: 'Move to next: Packing',
    });
    const toggle = canvas.getByRole('button', { name: 'More actions' });

    await expect(action).toHaveAttribute('aria-busy', 'true');
    await expect(toggle).not.toHaveAttribute('aria-busy');
  },
};

export const MenuLabelBehavior: Story = {
  name: 'Test: menuLabel names the toggle',
  args: { menuLabel: 'More move options' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByRole('button', { name: 'More move options' }),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByRole('button', { name: 'More actions' }),
    ).toBeNull();
  },
};

export const JoinedShape: Story = {
  name: 'Test: halves share one shape',
  render: () => (
    <VStack gap="12" alignItems="start">
      {sizes.flatMap((size) =>
        (['standard', 'hollow'] as const).map((variant) => (
          <SplitButton
            key={`${size}-${variant}`}
            size={size}
            variant={variant}
            data-testid={`${size}-${variant}`}
          >
            Move to next
            {moveMenu}
          </SplitButton>
        )),
      )}
    </VStack>
  ),
  parameters: { controls: { disable: true } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (const size of sizes) {
      for (const variant of ['standard', 'hollow']) {
        const root = canvas.getByTestId(`${size}-${variant}`);
        const [action, toggle] = within(root).getAllByRole('button');
        if (!action || !toggle) throw new Error('Missing a half.');
        const actionStyle = getComputedStyle(action);
        const toggleStyle = getComputedStyle(toggle);

        // Inner corners are square and inner borders are dropped. The outer
        // corners keep the button radius.
        await expect(actionStyle.borderTopRightRadius).toBe('0px');
        await expect(actionStyle.borderBottomRightRadius).toBe('0px');
        await expect(actionStyle.borderRightWidth).toBe('0px');
        await expect(actionStyle.borderTopLeftRadius).not.toBe('0px');
        await expect(toggleStyle.borderTopLeftRadius).toBe('0px');
        await expect(toggleStyle.borderBottomLeftRadius).toBe('0px');
        await expect(toggleStyle.borderLeftWidth).toBe('0px');
        await expect(toggleStyle.borderTopRightRadius).not.toBe('0px');

        // Both halves are the same height.
        await expect(toggle.getBoundingClientRect().height).toBe(
          action.getBoundingClientRect().height,
        );
      }
    }
  },
};
