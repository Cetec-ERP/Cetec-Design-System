import { expect, within } from '@storybook/test';

import { VStack } from '@styled-system/jsx';

import { FormField } from '../FormField';
import { TextInput } from '../TextInput';

import { InlineNote } from './InlineNote';

import type { Meta, StoryObj } from '@storybook/react';

const description = `
\`InlineNote\` is the smallest placement in the notification set: field-level
awareness, directly beneath the control it describes. It has no title, no
actions, and no dismiss control, and it uses the smallest type size.

| Category | Placement | Tone | Dismiss |
| --- | --- | --- | --- |
| System | \`PageBanner\` | danger / warning / info | No — until resolved |
| Feedback, blocking | \`Alert\` | danger | Yes |
| Feedback, non-blocking | \`Toast\` | success / danger | Auto |
| Awareness, section | \`Alert\` | info / warning / neutral | Optional |
| Awareness, field | \`InlineNote\` | info / warning / danger | No |

**Accessibility.** \`role="alert"\` when \`tone\` is \`danger\`,
\`role="status"\` otherwise. Give the note an \`id\` and point the field's
\`aria-describedby\` at it so the message reaches screen readers on focus.
\`tone="neutral"\` renders no icon.
`;

const meta = {
  title: 'Components/InlineNote',
  component: InlineNote,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: description } } },
  argTypes: {
    tone: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
    },
  },
  args: {
    tone: 'info',
    children: 'Use the format ORD-000000.',
  },
} satisfies Meta<typeof InlineNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  name: 'Every tone',
  render: () => (
    <VStack alignItems="start" gap="8">
      <InlineNote tone="info">Use the format ORD-000000.</InlineNote>
      <InlineNote tone="success">Order number is available.</InlineNote>
      <InlineNote tone="warning">
        This order number is already in use on a draft.
      </InlineNote>
      <InlineNote tone="danger">Enter an order number.</InlineNote>
      <InlineNote tone="neutral">
        Neutral renders no icon, by design.
      </InlineNote>
    </VStack>
  ),
};

export const ExFieldValidation: Story = {
  name: 'Ex: field validation message',
  render: () => (
    <VStack alignItems="stretch" gap="16" maxW="xs">
      <FormField label="Order number" labelFor="order-number">
        <TextInput
          id="order-number"
          name="orderNumber"
          aria-describedby="order-number-note"
        />
        <InlineNote id="order-number-note" tone="info">
          Use the format ORD-000000.
        </InlineNote>
      </FormField>
      <FormField label="Quantity" labelFor="quantity">
        <TextInput
          id="quantity"
          name="quantity"
          aria-describedby="quantity-note"
        />
        <InlineNote id="quantity-note" tone="danger">
          Enter a quantity of at least one.
        </InlineNote>
      </FormField>
    </VStack>
  ),
};

export const RoleByTone: Story = {
  name: 'Test: role by tone',
  render: () => (
    <VStack alignItems="start" gap="8">
      <InlineNote tone="danger">Danger notes interrupt.</InlineNote>
      <InlineNote tone="info">Every other tone announces politely.</InlineNote>
    </VStack>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
};
