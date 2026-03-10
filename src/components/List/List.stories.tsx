import { useState } from 'react';
import type { ReactNode } from 'react';

import { HStack, VStack } from '@styled-system/jsx';

import { Card } from '../Card';

import { List, ListItem, ListItemContent } from './index';

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
          >
            <ListItemContent label={item.label} description={item.desc} />
          </ListItem>
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
          >
            <ListItemContent
              variant="checkbox"
              label={item.label}
              description={item.desc}
            />
          </ListItem>
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
          >
            <ListItemContent label={item.label} description={item.desc} />
          </ListItem>
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
          >
            <ListItemContent label={item.label} description={item.desc} />
          </ListItem>
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
          {items.slice(0, 3).map((item) => (
            <ListItem key={`compact-${item.id}`}>
              <ListItemContent label={item.label} description={item.desc} />
            </ListItem>
          ))}
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="comfortable">
          {items.slice(0, 3).map((item) => (
            <ListItem key={`comfortable-${item.id}`}>
              <ListItemContent label={item.label} description={item.desc} />
            </ListItem>
          ))}
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="spacious">
          {items.slice(0, 3).map((item) => (
            <ListItem key={`spacious-${item.id}`}>
              <ListItemContent label={item.label} description={item.desc} />
            </ListItem>
          ))}
        </List>
      </Card>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

export const SelectionControls: Story = {
  args: {},
  render: () => (
    <VStack alignItems="start" gap="16">
      <MultiSelectCheckboxExample />
      <Card variant="flat" minW="2xs">
        <List role="listbox" aria-label="Toggle list">
          {items.slice(0, 3).map((item, index) => (
            <ListItem key={item.id} variant="toggle" selected={index === 0}>
              <ListItemContent
                variant="toggle"
                label={item.label}
                description={item.desc}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </VStack>
  ),
  parameters: { controls: { disable: true } },
};

export const Highlighting: Story = {
  args: {},
  render: () => <HighlightingExample />,
  parameters: { controls: { disable: true } },
};

export const ExFloatingSearchBar: Story = {
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: { controls: { disable: true } },
};
