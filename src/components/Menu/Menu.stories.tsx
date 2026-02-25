import type { Meta, StoryObj } from '@storybook/react';
import { HStack, VStack } from '@styled-system/jsx';
import { type ChangeEvent, useState } from 'react';

import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { Menu } from './Menu';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { SubMenu } from './SubMenu';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  args: {
    children: null,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  render: () => (
    <Menu inline>
      <MenuItem label="Edit" iconBefore="pencil" />
      <MenuItem label="Duplicate" iconBefore="copy" />
      <MenuItem label="Archive" iconBefore="trash" />
    </Menu>
  ),
  parameters: { controls: { disable: true } },
};

export const ActionsWithSections: Story = {
  render: () => (
    <Menu inline>
      <MenuGroup label="Actions" divider>
        <MenuItem label="Rename" />
        <MenuItem label="Move" />
      </MenuGroup>
      <MenuGroup label="Danger Zone">
        <MenuItem label="Delete" iconBefore="trash" />
      </MenuGroup>
    </Menu>
  ),
  parameters: { controls: { disable: true } },
};

export const SingleSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState('item-2');

    return (
      <Menu inline closeOnSelect={false}>
        <MenuItem
          label="Option One"
          selected={selected === 'item-1'}
          onClick={() => setSelected('item-1')}
        />
        <MenuItem
          label="Option Two"
          selected={selected === 'item-2'}
          onClick={() => setSelected('item-2')}
        />
        <MenuItem
          label="Option Three"
          selected={selected === 'item-3'}
          onClick={() => setSelected('item-3')}
        />
      </Menu>
    );
  },
  parameters: { controls: { disable: true } },
};

export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['beta']);
    const toggle = (value: string) => {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((entry) => entry !== value)
          : [...prev, value],
      );
    };

    return (
      <Menu inline closeOnSelect={false}>
        <MenuItem
          variant="checkbox"
          label="Alpha"
          selected={selected.includes('alpha')}
          onClick={() => toggle('alpha')}
        />
        <MenuItem
          variant="checkbox"
          label="Beta"
          selected={selected.includes('beta')}
          onClick={() => toggle('beta')}
        />
        <MenuItem
          variant="checkbox"
          label="Gamma"
          selected={selected.includes('gamma')}
          onClick={() => toggle('gamma')}
        />
      </Menu>
    );
  },
  parameters: { controls: { disable: true } },
};

export const LocalOptions: Story = {
  render: () => {
    const [compact, setCompact] = useState(false);
    const [alerts, setAlerts] = useState(true);

    return (
      <Menu inline closeOnSelect={false}>
        <MenuGroup label="Options" divider>
          <MenuItem
            variant="toggle"
            label="Compact mode"
            selected={compact}
            onClick={() => setCompact((state) => !state)}
          />
          <MenuItem
            variant="toggle"
            label="Email alerts"
            selected={alerts}
            onClick={() => setAlerts((state) => !state)}
          />
        </MenuGroup>
        <MenuItem
          label="Open docs"
          href="https://cetecerp.com"
          iconAfter="arrow-square-out"
          target="_blank"
          rel="noreferrer"
        />
      </Menu>
    );
  },
  parameters: { controls: { disable: true } },
};

export const SubMenuHover: Story = {
  render: () => (
    <Menu
      trigger={<Button iconAfter="caret-down">Open menu</Button>}
      subMenuInteraction="hover"
    >
      <MenuItem label="View profile" />
      <SubMenu label="More actions">
        <MenuItem label="Export" />
        <MenuItem label="Share" />
        <SubMenu label="Advanced">
          <MenuItem label="Audit log" />
          <MenuItem label="Settings" />
        </SubMenu>
      </SubMenu>
    </Menu>
  ),
  parameters: { controls: { disable: true } },
};

export const SubMenuDrilldown: Story = {
  render: () => (
    <Menu
      trigger={<Button iconAfter="caret-down">Open menu</Button>}
      subMenuInteraction="drilldown"
    >
      <MenuItem label="Dashboard" />
      <SubMenu label="Settings">
        <MenuItem label="Profile" />
        <MenuItem label="Billing" />
        <SubMenu label="Team">
          <MenuItem label="Members" />
          <MenuItem label="Permissions" />
        </SubMenu>
      </SubMenu>
    </Menu>
  ),
  parameters: { controls: { disable: true } },
};

export const AutocompleteFiltering: Story = {
  render: () => {
    const [query, setQuery] = useState('');

    return (
      <VStack gap="12" alignItems="stretch" width="full" maxW="sm">
        <TextInput
          name="menu-query"
          iconBefore="search"
          placeholder="Filter menu items"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
        />

        <Menu inline query={query} filterMode="contains" highlightMatches>
          <MenuItem
            label="Account settings"
            description="Manage profile and security"
          />
          <MenuItem
            label="Notifications"
            description="Email, SMS and push alerts"
          />
          <MenuItem label="Integrations" description="Connect external tools" />
          <MenuItem label="Audit history" description="Track critical events" />
        </Menu>
      </VStack>
    );
  },
  parameters: { controls: { disable: true } },
};

export const Density: Story = {
  render: () => (
    <HStack gap="12" alignItems="flex-start">
      <Menu inline density="condensed">
        <MenuItem label="Condensed" description="Small row spacing" />
        <MenuItem label="Second row" />
      </Menu>
      <Menu inline density="comfortable">
        <MenuItem label="Comfortable" description="Default row spacing" />
        <MenuItem label="Second row" />
      </Menu>
      <Menu inline density="spacious">
        <MenuItem label="Spacious" description="Large row spacing" />
        <MenuItem label="Second row" />
      </Menu>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};
