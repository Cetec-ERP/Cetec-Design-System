import { expect, userEvent, waitFor, within } from 'storybook/test';

import { HStack, VStack, Wrap } from '@styled-system/jsx';

import { Box } from '../Box';
import { Divider } from '../Divider';

import { KeyFact } from './KeyFact';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * One short fact about a record, as a label and a value.
 *
 * - `horizontal` ("Label: Value") for up to three facts in a page header aside
 * - `vertical` for a strip of facts under the title
 * - `href` makes the value a link
 * - A long value truncates and shows the full value in a tooltip
 * - `editing` replaces the value with a text input
 */
const meta = {
  title: 'Components/KeyFact',
  component: KeyFact,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Customer',
    value: 'Acme Corp',
  },
  argTypes: {
    layout: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof KeyFact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Layouts: Story = {
  render: () => (
    <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" layout="horizontal" />
      <KeyFact label="Customer" value="Acme Corp" layout="vertical" />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const AsLink: Story = {
  name: 'As Link',
  render: () => (
    <VStack gap="24" alignItems="flex-start">
      <KeyFact label="Customer" value="Acme Corp" href="#customer" />
      <KeyFact
        label="Customer"
        value="Acme Corp"
        href="#customer"
        layout="vertical"
      />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const Editing: Story = {
  render: () => (
    <VStack gap="24" alignItems="flex-start">
      <KeyFact
        label="PO number"
        value="PO-88213"
        editing
        inputProps={{ name: 'poNumber' }}
      />
      <KeyFact
        label="PO number"
        value="PO-88213"
        layout="vertical"
        editing
        inputProps={{ name: 'poNumberVertical' }}
      />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const Truncated: Story = {
  render: () => (
    <Box w="224">
      <KeyFact
        label="Ship to"
        value="Acme Corp, Receiving Dock 4, 1200 Industrial Parkway"
      />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: three facts in a record page header aside, with thin dividers.
 */
export const ExPageHeaderAside: Story = {
  name: 'Ex: Page Header Aside',
  render: () => (
    <HStack gap="12">
      <KeyFact label="Customer" value="Acme Corp" href="#customer" />
      <Divider direction="vertical" h="16" />
      <KeyFact label="Owner" value="Dana Ortiz" />
      <Divider direction="vertical" h="16" />
      <KeyFact label="Due" value="Nov 14, 2026" />
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: a strip of facts under a record title, for records with more
 * than three facts.
 */
export const ExFactsStrip: Story = {
  name: 'Ex: Facts Strip',
  render: () => (
    <Wrap gap="32">
      <KeyFact layout="vertical" label="Order total" value="$18,240.00" />
      <KeyFact layout="vertical" label="Lines" value="12" />
      <KeyFact layout="vertical" label="Ship date" value="Nov 14, 2026" />
      <KeyFact
        layout="vertical"
        label="Customer"
        value="Acme Corp"
        href="#customer"
      />
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const EditingLabelsInput: Story = {
  name: 'Test: editing labels the input',
  args: {
    label: 'PO number',
    value: 'PO-88213',
    editing: true,
    inputProps: { name: 'poNumber' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'PO number:' });

    await expect(input).toHaveValue('PO-88213');
    await expect(input).toHaveAttribute('name', 'poNumber');
  },
};

export const TruncatedShowsTooltip: Story = {
  name: 'Test: truncated value shows a tooltip',
  render: () => (
    <VStack gap="12" alignItems="flex-start">
      <Box w="160">
        <KeyFact label="Ship to" value="Acme Corp, Receiving Dock 4" />
      </Box>
      <KeyFact label="Owner" value="Dana Ortiz" />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);

    // A truncated value shows the full value on hover.
    await userEvent.hover(canvas.getByText('Acme Corp, Receiving Dock 4'));
    await expect(await body.findByRole('tooltip')).toHaveTextContent(
      'Acme Corp, Receiving Dock 4',
    );
    await userEvent.unhover(canvas.getByText('Acme Corp, Receiving Dock 4'));
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());

    // A value that fits shows no tooltip.
    await userEvent.hover(canvas.getByText('Dana Ortiz'));
    await new Promise((resolve) => setTimeout(resolve, 200));
    await expect(body.queryByRole('tooltip')).toBeNull();
    await userEvent.unhover(canvas.getByText('Dana Ortiz'));
  },
};
