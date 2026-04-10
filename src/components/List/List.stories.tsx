import { useState } from 'react';
import type { ReactNode } from 'react';

import { HStack, VStack } from '@styled-system/jsx';

import { BreakpointIndicator } from '../BreakpointIndicator';
import { Card } from '../Card';
import { Text } from '../Text';

import { List, ListItem, ListItemGroup } from './index';

import type { Meta, StoryObj } from '@storybook/react';

const items = [
  { id: 'acct', label: 'Account settings', desc: 'Manage profile and access' },
  { id: 'notify', label: 'Notifications', desc: 'Email, SMS, and push alerts' },
  {
    id: 'audit',
    label: 'Audit history',
    desc: 'Track critical account events',
  },
  { id: 'integrations', label: 'Integrations', desc: 'Connect external tools' },
];

const meta = {
  title: 'Components/List',
  component: List,
  args: {
    children: null as ReactNode,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const SingleSelectExample = () => {
  const [selected, setSelected] = useState(items[1]?.id ?? '');

  return (
    <Card variant="flat" minW="2xs">
      <List role="listbox" aria-label="Settings list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            selected={selected === item.id}
            onClick={() => setSelected(item.id)}
            label={item.label}
            description={item.desc}
          />
        ))}
      </List>
    </Card>
  );
};

const MultiSelectCheckboxExample = () => {
  const [selected, setSelected] = useState<string[]>(['notify', 'audit']);

  const toggleItem = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id],
    );
  };

  return (
    <Card variant="flat" minW="2xs">
      <List role="listbox" aria-label="Notification filters">
        {items.map((item) => (
          <ListItem
            key={item.id}
            variant="checkbox"
            selected={selected.includes(item.id)}
            onClick={() => toggleItem(item.id)}
            label={item.label}
            description={item.desc}
          />
        ))}
      </List>
    </Card>
  );
};

const ToggleSelectionExample = () => {
  const [selected, setSelected] = useState<string[]>(['notify', 'audit']);

  const toggleItem = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id],
    );
  };

  return (
    <Card variant="flat" minW="2xs">
      <List role="listbox" aria-label="Toggle list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            variant="toggle"
            selected={selected.includes(item.id)}
            onClick={() => toggleItem(item.id)}
            label={item.label}
            description={item.desc}
          />
        ))}
      </List>
    </Card>
  );
};

const HighlightingExample = () => {
  const query = 'acc';

  return (
    <Card variant="flat" minW="2xs">
      <List
        role="listbox"
        aria-label="Search results"
        query={query}
        highlightMatches
      >
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            selected={index === 0}
            iconAfter="arrow-right"
            label={item.label}
            description={item.desc}
          />
        ))}
      </List>
    </Card>
  );
};

const FloatingSearchBarExample = () => {
  const query = 'acc';

  return (
    <Card variant="flat" minW="lg" maxW="2xl">
      <List
        role="listbox"
        aria-label="Floating search results"
        density="comfortable"
        query={query}
        highlightMatches
      >
        {items.concat(items).map((item, index) => (
          <ListItem
            key={`${item.id}-${index}`}
            selected={index === 0}
            iconAfter="arrow-right"
            label={item.label}
            description={item.desc}
          />
        ))}
      </List>
    </Card>
  );
};

export const Default: Story = {
  args: {},
  render: () => <SingleSelectExample />,
  parameters: { controls: { disable: true } },
};

export const Density: Story = {
  args: {},
  render: () => (
    <HStack gap="12" alignItems="start">
      <Card variant="flat" minW="2xs">
        <List density="compact">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map((item) => (
              <ListItem
                key={`compact-${item.id}`}
                label={item.label}
                description={item.desc}
              />
            ))}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="comfortable">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map((item) => (
              <ListItem
                key={`compact-${item.id}`}
                label={item.label}
                description={item.desc}
              />
            ))}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="spacious">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map((item) => (
              <ListItem
                key={`compact-${item.id}`}
                label={item.label}
                description={item.desc}
              />
            ))}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

export const SelectionControls: Story = {
  args: {},
  render: () => (
    <HStack alignItems="start" gap="16">
      <MultiSelectCheckboxExample />
      <ToggleSelectionExample />
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

export const Highlighting: Story = {
  args: {},
  render: () => <HighlightingExample />,
  parameters: { controls: { disable: true } },
};

export const ConditionalBreakpoints: Story = {
  args: {},
  render: () => (
    <VStack>
      <Card variant="flat" minW="2xs">
        <List density={{ base: 'spacious', xs: 'comfortable', sm: 'compact' }}>
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map((item) => (
              <ListItem
                key={`item-${item.id}`}
                label={item.label}
                description={item.desc}
              />
            ))}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"spacious"', xs: '"comfortable"', sm: '"compact"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const ConditionalBreakpointsStandalone: Story = {
  args: {},
  render: () => (
    <VStack>
      <Card variant="flat" minW="2xs">
        <VStack alignItems="stretch" gap="0">
          <ListItemGroup
            label="Account Settings"
            divider
            density={{ base: 'spacious', xs: 'comfortable', sm: 'compact' }}
          >
            {items.slice(0, 2).map((item) => (
              <ListItem
                key={`standalone-group-${item.id}`}
                label={item.label}
                description={item.desc}
              />
            ))}
          </ListItemGroup>
          <ListItem
            density={{ base: 'spacious', xs: 'comfortable', sm: 'compact' }}
            iconAfter="arrow-square-out"
            label="Logout"
            description="Close the current session"
          />
        </VStack>
      </Card>
      <Text
        textAlign="center"
        textStyle="mono.sm"
        _after={{
          display: 'inline',
          content: { base: '"spacious"', xs: '"comfortable"', sm: '"compact"' },
          color: 'text.bold',
          fontWeight: 'bold',
        }}
      >
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const ExFloatingSearchBar: Story = {
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: { controls: { disable: true } },
};
