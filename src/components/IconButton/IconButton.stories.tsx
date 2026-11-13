import { expect, fn, userEvent, within } from 'storybook/test';

import { Wrap } from '@styled-system/jsx';

import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    iconName: 'edit',
    altText: 'Edit item',
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Wrap gap="14">
      <IconButton iconName="edit" altText="Edit" variant="standard" />
      <IconButton iconName="download" altText="Download" variant="primary" />
      <IconButton iconName="printer" altText="Print" variant="hollow" />
      <IconButton iconName="info" altText="Info" variant="ghost" />
      <IconButton iconName="send" altText="Send" variant="cta" />
      <IconButton iconName="trash" altText="Delete" variant="danger" />
      <IconButton iconName="alarm" altText="Alarms" variant="selected" />
      <IconButton iconName="barcode" altText="Barcode" variant="selectedBold" />
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => (
    <Wrap gap="14" alignItems="center">
      <IconButton iconName="calendar" altText="Calendar" size="sm" />
      <IconButton iconName="calendar" altText="Calendar" size="md" />
      <IconButton iconName="calendar" altText="Calendar" size="lg" />
      <IconButton iconName="calendar" altText="Calendar" size="xl" />
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const ExLoadingAndDisabled: Story = {
  name: 'Ex: Loading and Disabled',
  render: () => (
    <Wrap gap="14">
      <IconButton iconName="cloud-synced" altText="Syncing" loading />
      <IconButton iconName="trash" altText="Delete" variant="danger" disabled />
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const ExDisabledWithReason: Story = {
  name: 'Ex: Disabled With Reason',
  render: () => (
    <Wrap gap="14">
      <IconButton
        iconName="edit"
        altText="Edit order"
        disabledReason="Closed orders can't be edited."
      />
      <IconButton
        iconName="trash"
        altText="Delete order"
        variant="danger"
        disabledReason="Orders with shipments can't be deleted."
      />
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const DisabledReasonBehavior: Story = {
  name: 'Test: disabledReason',
  args: {
    iconName: 'trash',
    altText: 'Delete order',
    disabledReason: "Orders with shipments can't be deleted.",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    // altText stays the accessible name; the reason is the description.
    const button = canvas.getByRole('button', { name: 'Delete order' });

    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(button).not.toHaveAttribute('disabled');
    await expect(button).toHaveAccessibleDescription(
      "Orders with shipments can't be deleted.",
    );

    // Clicks and keyboard activation do nothing.
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).not.toHaveBeenCalled();

    // Keyboard focus shows the label as the title, with the reason below.
    button.blur();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Delete order');
    await expect(tooltip).toHaveTextContent(
      "Orders with shipments can't be deleted.",
    );
  },
};

export const DisabledReasonLink: Story = {
  name: 'Test: disabled link has no href',
  // Behavior test only. It looks the same as "Test: disabledReason".
  tags: ['!snapshot'],
  args: {
    iconName: 'edit',
    altText: 'Edit order',
    href: 'https://example.com/orders/1042/edit',
    disabledReason: "Closed orders can't be edited.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // No live href, so the context menu can't open it in a new tab.
    const link = canvas.getByRole('link', { name: 'Edit order' });

    await expect(link).not.toHaveAttribute('href');
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  },
};
