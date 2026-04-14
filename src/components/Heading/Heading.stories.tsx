import { Flex, VStack, Grid } from '@styled-system/jsx';

import { BreakpointIndicator } from '../BreakpointIndicator';
import { Text } from '../Text';

import { Heading } from './Heading';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    level: 'h2',
    children: 'Quarterly Revenue',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Levels: Story = {
  render: () => (
    <VStack gap="8">
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const ConditionalBreakpoints: Story = {
  render: () => (
    <Grid
      w="full"
      h="full"
      position="relative"
      placeContent="center"
      justifyItems="center"
      gap="12"
    >
      <Heading
        level="h1"
        fontSize={{ base: '64', xs: '40', sm: '20', md: '12' }}
        color={{
          base: 'text.accent.cyan',
          xs: 'text.accent.indigo',
          sm: 'text.accent.purple',
          md: 'text.accent.violet',
        }}
      >
        Heading 1
      </Heading>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"64"', xs: '"40"', sm: '"20"', md: '"12"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Size:{' '}
      </Text>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: {
            base: '"text.accent.cyan"',
            xs: '"text.accent.indigo"',
            sm: '"text.accent.purple"',
            md: '"text.accent.violet"',
          },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Color:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>
  ),
  parameters: { controls: { disable: true } },
};

export const ExContentHierarchy: Story = {
  name: 'Ex: Content Hierarchy',
  render: () => (
    <VStack alignItems="start" gap="24">
      <Flex direction="column">
        <Heading level="h2">Billing Settings</Heading>
        <Text>Manage your payment methods and invoice preferences.</Text>
      </Flex>

      <Flex direction="column">
        <Heading level="h3">Default Payment Method</Heading>
        <Text>Visa ending in 0091 is used for recurring charges.</Text>
      </Flex>

      <Flex direction="column">
        <Heading level="h3">Invoice Delivery</Heading>
        <Text>Invoices are emailed to accounting@company.com.</Text>
      </Flex>
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const ExAllCaps: Story = {
  name: 'Ex: All Caps Variant',
  render: () => (
    <Flex direction="column" gap="4">
      <Heading level="h4" allCaps>
        Section label
      </Heading>
      <Text>
        Use all caps sparingly for short section labels, not for long headings.
      </Text>
    </Flex>
  ),
  parameters: { controls: { disable: true } },
};
