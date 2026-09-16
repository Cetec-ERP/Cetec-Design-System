import { Box } from '../Box';
import { Card } from '../Card';
import { Text } from '../Text';

import { Skeleton } from './Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skeleton is for loading placeholders where the final layout is known. Use it to reserve space and reduce layout shift. Do not use it as a generic loading spinner or for content that will not appear in the same shape.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rounded', 'rectangular'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
    },
    component: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
  args: {
    variant: 'text',
    animation: 'pulse',
    component: 'span',
    width: '280',
    height: '24',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} />,
};

export const Variants: Story = {
  render: () => (
    <Box display="grid" gap="8">
      <Skeleton variant="text" width="280" height="24" />
      <Skeleton variant="rounded" width="280" height="40" />
      <Skeleton variant="rectangular" width="280" height="40" />
      <Skeleton variant="circular" width="48" height="48" />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const Animations: Story = {
  render: () => (
    <Box display="grid" gap="8">
      <Skeleton animation="pulse" width="280" height="24" />
      <Skeleton animation="wave" width="280" height="24" />
      <Skeleton animation={false} width="280" height="24" />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};

export const ChildrenSizing: Story = {
  name: 'Children: Masked Content',
  render: () => (
    <Skeleton variant="text" animation="wave">
      <Text weight="bold">Invoice #C-1042</Text>
    </Skeleton>
  ),
  parameters: { controls: { disable: true } },
};

export const ExDashboardPlaceholder: Story = {
  name: 'Ex: Dashboard Placeholder',
  render: () => (
    <Card p="16" display="grid" gap="8" maxW="sm">
      <Box display="grid" gap="4">
        <Skeleton variant="text" width="160" height="20" />
        <Skeleton variant="text" width="220" height="24" />
      </Box>
      <Box display="grid" gap="6">
        <Skeleton variant="rounded" width="100%" height="16" />
        <Skeleton variant="rounded" width="85%" height="16" />
        <Skeleton variant="rounded" width="70%" height="16" />
      </Box>
      <Box display="flex" alignItems="center" gap="8">
        <Skeleton variant="circular" width="40" height="40" />
        <Box display="grid" gap="3">
          <Skeleton variant="text" width="140" height="20" />
          <Skeleton variant="text" width="100" height="16" />
        </Box>
      </Box>
    </Card>
  ),
  parameters: { controls: { disable: true } },
};
