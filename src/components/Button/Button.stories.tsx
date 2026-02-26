import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { Text } from '../Text';
import { IconButton } from '../IconButton';
import { Divider } from '../Divider';
import { Tooltip } from '../Tooltip';
import { HStack, Wrap, Grid } from '@styled-system/jsx';

/**
 * Button component with comprehensive variant support.
 *
 * Features:
 * - Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
 * - Four sizes (sm, md, lg, xl)
 * - Icon support via string names (iconBefore, iconAfter, iconName)
 * - Loading and disabled states
 * - Auto-renders as anchor when href is provided
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'],
      description: 'Visual style variants',
      table: {
        defaultValue: { summary: 'standard' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - non-interactive',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state - shows spinner and disables interaction',
    },
    iconBefore: {
      control: 'select',
      options: [undefined, 'plus', 'check', 'arrow-left', 'edit', 'search'],
      description: 'Icon name to display before text',
    },
    iconAfter: {
      control: 'select',
      options: [undefined, 'arrow-right', 'chevron-down', 'arrow-square-out'],
      description: 'Icon name to display after text',
    },
    href: {
      control: 'text',
      description: 'When provided, button renders as anchor element',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Variants
// ============================================================================

export const Variants: Story = {
  render: () => (
    <Wrap gap="12" alignItems="center">
      {(
        ['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const
      ).map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

export const Sizes: Story = {
  render: () => (
    <Wrap gap="12" alignItems="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Wrap>
  ),
  parameters: { controls: { disable: true } },
};

// ============================================================================
// States
// ============================================================================

export const InteractionStates: Story = {
  render: () => (
    <Grid
      gridTemplateColumns="auto 1fr"
      columnGap="12"
      rowGap="32"
      alignItems="center"
    >
      <Text textStyle="mono.md" mr="16">
        Disabled
      </Text>
      <Wrap gap="12" alignItems="center">
        {(
          ['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const
        ).map((variant) => (
          <Button key={variant} variant={variant} disabled>
            {variant}
          </Button>
        ))}
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        Loading
      </Text>
      <Wrap gap="12" alignItems="center">
        {(
          ['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const
        ).map((variant) => (
          <Button key={variant} variant={variant} loading>
            {variant}
          </Button>
        ))}
      </Wrap>
    </Grid>
  ),
  parameters: { controls: { disable: true } },
};

// ============================================================================
// Icon Support
// ============================================================================

export const WithIcon: Story = {
  render: () => (
    <Grid
      gridTemplateColumns="auto 1fr"
      columnGap="12"
      rowGap="32"
      alignItems="center"
    >
      <Text textStyle="heading.sm" gridColumn="1 / -1">
        Button
      </Text>
      <Text textStyle="mono.md" mr="16">
        iconBefore
      </Text>
      <Wrap gap="12">
        <Button iconBefore="plus">Add</Button>
        <Button iconBefore="timer" variant="primary">
          Start Timer
        </Button>
        <Button iconBefore="calendar" variant="hollow">
          2026-01-12
        </Button>
        <Button iconBefore="info" variant="ghost">
          Learn More
        </Button>
        <Button iconBefore="trash" variant="danger">
          Delete
        </Button>
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        iconAfter
      </Text>
      <Wrap gap="12">
        <Button iconAfter="send" variant="cta">
          Send Invoice
        </Button>
        <Button iconAfter="arrow-square-out">Logout</Button>
        <Button iconAfter="download" variant="primary">
          Download
        </Button>
        <Button iconAfter="arrow-square-out">Logout</Button>
      </Wrap>

      <Divider gridColumn="1 / -1" />

      <Text textStyle="heading.sm" mr="16">
        IconButton
      </Text>
      <Wrap gap="56">
        <IconButton iconName="download" altText="Download" />
        <IconButton iconName="printer" variant="hollow" altText="Print" />
        <IconButton
          iconName="cloud-synced"
          variant="ghost"
          altText="Last sync: 3 hours ago"
        />
        <IconButton iconName="edit" variant="primary" altText="Edit" />
        <IconButton iconName="send" variant="cta" altText="Send" />
        <IconButton
          iconName="trash"
          variant="danger"
          altText="This cannot be undone"
        />
      </Wrap>
    </Grid>
  ),
  parameters: { controls: { disable: true } },
};

// ============================================================================
// Link Buttons (href)
// ============================================================================

/**
 * Button with href automatically renders as anchor element
 */
export const AsLink: Story = {
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out',
  },
};

// ============================================================================
// Common Use Cases
// ============================================================================

/**
 * Use case: Primary action button group (e.g., form submission)
 */
export const ActionGroup: Story = {
  name: 'Ex: Action Group',
  render: () => (
    <HStack gap="8">
      <Button variant="hollow">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: Form actions with multiple options
 */
export const FormActions: Story = {
  name: 'Ex: Form Actions',
  render: () => (
    <HStack gap="8" justifyContent="flex-end">
      <Button variant="hollow">Reset</Button>
      <Button variant="hollow">Save Draft</Button>
      <Button variant="primary" iconAfter="arrow-right">
        Submit
      </Button>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: Pagination buttons
 */
export const Pagination: Story = {
  name: 'Ex: Pagination',
  render: () => (
    <HStack gap="8" justifyContent="space-between" width="280">
      <Button variant="hollow" iconBefore="arrow-left">
        Back
      </Button>
      <Button variant="primary" iconAfter="arrow-right">
        Next
      </Button>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: CRUD operation buttons
 */
export const CrudActions: Story = {
  name: 'Ex: CRUD Actions',
  render: () => (
    <HStack gap="8" flexWrap="wrap">
      <Button variant="primary" size="sm" iconBefore="plus">
        Create
      </Button>
      <Button variant="hollow" size="sm" iconBefore="edit">
        Edit
      </Button>
      <Button variant="ghost" size="sm" iconBefore="trash">
        Delete
      </Button>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

/**
 * Use case: Form submitting state
 */
export const FormSubmitting: Story = {
  name: 'Ex: Form Submitting',
  render: () => (
    <HStack gap="8">
      <Button variant="hollow" disabled>
        Cancel
      </Button>
      <Button variant="primary" loading>
        Saving...
      </Button>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

// ============================================================================
// Interactive Playground
// ============================================================================

/**
 * Interactive playground to test all props
 */
export const Interactive: Story = {
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false,
  },
};
