import { type ChangeEvent, type KeyboardEvent, useState } from 'react';

import { HStack, VStack, Flex } from '@styled-system/jsx';

import { Box } from '../Box';
import { Button } from '../Button';
import { FormField } from '../FormField';
import { TextInput } from '../TextInput';

import { Menu } from './Menu';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { SubMenu } from './SubMenu';

import type { Meta, StoryObj } from '@storybook/react';

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

const SingleSelectExample = () => {
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
};

const MultiSelectExample = () => {
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
      <MenuGroup label="Wave type">
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
      </MenuGroup>
    </Menu>
  );
};

const ToggleOptionsExample = () => {
  const [compact, setCompact] = useState(false);
  const [alerts, setAlerts] = useState(true);

  return (
    <Menu inline closeOnSelect={false} w="264">
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
};

const SubMenuDiginFormsExample = () => {
  const [profileName, setProfileName] = useState('');
  const [profileOwner, setProfileOwner] = useState('');
  const [alertTopic, setAlertTopic] = useState('');
  const [alertChannel, setAlertChannel] = useState('');

  return (
    <Menu
      trigger={<Button iconAfter="caret-down">Open menu</Button>}
      subMenuInteraction="digin"
      closeOnSelect={false}
    >
      <MenuItem label="Dashboard" />

      <SubMenu label="Edit profile">
        <Box p="24" display="grid" gap="8" minW="248" justifyItems="end">
          <FormField label="Profile name" labelFor="profile-name">
            <TextInput
              id="profile-name"
              name="profileName"
              value={profileName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setProfileName(event.target.value)
              }
            />
          </FormField>

          <FormField label="Owner" labelFor="profile-owner">
            <TextInput
              id="profile-owner"
              name="profileOwner"
              value={profileOwner}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setProfileOwner(event.target.value)
              }
            />
          </FormField>

          <Button variant="primary">Submit</Button>
        </Box>
      </SubMenu>

      <SubMenu label="Create alert">
        <Box p="24" display="grid" gap="8" minW="248" justifyItems="end">
          <FormField label="Topic" labelFor="alert-topic">
            <TextInput
              id="alert-topic"
              name="alertTopic"
              value={alertTopic}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAlertTopic(event.target.value)
              }
            />
          </FormField>

          <FormField label="Channel" labelFor="alert-channel">
            <TextInput
              id="alert-channel"
              name="alertChannel"
              value={alertChannel}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setAlertChannel(event.target.value)
              }
            />
          </FormField>

          <Button variant="primary">Submit</Button>
        </Box>
      </SubMenu>
    </Menu>
  );
};

const AutocompleteFilteringExample = () => {
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
};

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
  render: () => <SingleSelectExample />,
  parameters: { controls: { disable: true } },
};

export const MultiSelect: Story = {
  render: () => <MultiSelectExample />,
  parameters: { controls: { disable: true } },
};

export const Density: Story = {
  render: () => (
    <HStack gap="12" alignItems="flex-start">
      <Menu inline density="compact">
        <MenuItem label="Compact" description="Small row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="comfortable">
        <MenuItem label="Comfortable" description="Default row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
      <Menu inline density="spacious">
        <MenuItem label="Spacious" description="Large row spacing" />
        <MenuItem label="Second row" iconBefore="apps" />
        <MenuItem label="Third row" iconBefore="settings" />
      </Menu>
    </HStack>
  ),
  parameters: { controls: { disable: true } },
};

export const ToggleOptions: Story = {
  render: () => <ToggleOptionsExample />,
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

/**
 * Example of composing multiple `Menu` components into a top navigation bar with
 * APG-aligned semantics. See "Top Nav Keyboard UI" documentation.
 */
const TopNavExampleWrapper = () => {
  /** Stable ids so Top nav example can move focus between menubar triggers (APG horizontal navigation). */
  const TOP_NAV_MENUBAR_TRIGGER_IDS = [
    'story-topnav-menubar-sales',
    'story-topnav-menubar-production',
    'story-topnav-menubar-admin',
  ] as const;

  const TOP_NAV_ORDER = ['sales', 'production', 'admin'] as const;

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const getMenuProps = (id: string) => ({
    open: openMenu === id,
    onOpenChange: (nextOpen: boolean) => {
      if (nextOpen) {
        setOpenMenu(id);
        return;
      }
      // When roving focus between section triggers, the previous Menu can emit
      // onOpenChange(false) from focus-out after openMenu already points at the
      // next section. Only clear if this Menu was still the open one.
      setOpenMenu((current) => (current === id ? null : current));
    },
  });

  const navigateTopNavMenubar = (
    direction: 1 | -1,
    fromKey: (typeof TOP_NAV_ORDER)[number],
  ) => {
    const idx = TOP_NAV_ORDER.indexOf(fromKey);
    const len = TOP_NAV_ORDER.length;
    const nextIndex = (idx + direction + len * 10) % len;
    const nextKey = TOP_NAV_ORDER[nextIndex];
    const nextId = TOP_NAV_MENUBAR_TRIGGER_IDS[nextIndex];
    if (nextKey === undefined) {
      return;
    }

    // APG Navigation Menubar: when no section menu is open, Left/Right only
    // rove focus between triggers. When any menu is open, moving to another
    // trigger also opens that section’s menu (see example JS: openPopup when
    // isAnyPopupOpen / menubar expanded).
    const shouldOpenNextMenu = openMenu !== null;

    if (!shouldOpenNextMenu) {
      window.requestAnimationFrame(() => {
        if (nextId) {
          document.getElementById(nextId)?.focus();
        }
      });
      return;
    }

    window.requestAnimationFrame(() => {
      setOpenMenu(nextKey);
      if (nextId) {
        document.getElementById(nextId)?.focus();
      }
    });
  };

  const handleMenubarTriggerKeyDown =
    (menuKey: (typeof TOP_NAV_ORDER)[number]) =>
    (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      navigateTopNavMenubar(event.key === 'ArrowRight' ? 1 : -1, menuKey);
    };

  return (
    <VStack
      alignItems="stretch"
      minW="3xl"
      h="2xl"
      bg="bg.neutral"
      p="24"
      gap="16"
    >
      <Box
        role="menubar"
        aria-label="Example site sections"
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="12"
        borderWidth="1"
        borderColor="border"
        bg="surface"
        px="24"
        py="16"
      >
        <Menu
          triggerInteraction="click-and-hover"
          trigger={
            <Button
              id={TOP_NAV_MENUBAR_TRIGGER_IDS[0]}
              variant="selectedBold"
              onKeyDown={handleMenubarTriggerKeyDown('sales')}
            >
              Sales
            </Button>
          }
          subMenuInteraction="hover"
          closeOnSelect={false}
          onMenubarEdgeNavigate={(direction) =>
            navigateTopNavMenubar(direction, 'sales')
          }
          {...getMenuProps('sales')}
        >
          <SubMenu label="Quotes">
            <MenuItem label="Open quotes" />
            <MenuItem label="Draft quotes" />
          </SubMenu>

          <SubMenu label="Orders" selected>
            <MenuItem label="Order list" />
            <SubMenu label="Used orders" selected>
              <MenuItem label="Order as used" selected />
              <MenuItem label="Bookings" />
              <MenuItem label="Order commissions" />
            </SubMenu>
          </SubMenu>

          <SubMenu label="Invoices">
            <MenuItem label="All invoices" />
            <MenuItem label="Credit notes" />
          </SubMenu>
        </Menu>

        <Menu
          triggerInteraction="click-and-hover"
          trigger={
            <Button
              id={TOP_NAV_MENUBAR_TRIGGER_IDS[1]}
              onKeyDown={handleMenubarTriggerKeyDown('production')}
            >
              Production
            </Button>
          }
          subMenuInteraction="hover"
          closeOnSelect={false}
          onMenubarEdgeNavigate={(direction) =>
            navigateTopNavMenubar(direction, 'production')
          }
          {...getMenuProps('production')}
        >
          <SubMenu label="Work Orders">
            <MenuItem label="Open work orders" />
            <MenuItem label="Completed" />
          </SubMenu>

          <SubMenu label="Scheduling">
            <MenuItem label="Production schedule" />
            <MenuItem
              href="https://www.google.com"
              label="Resource calendar"
              target="_blank"
              rel="noopener noreferrer"
            />
          </SubMenu>

          <MenuItem label="Inventory" />
        </Menu>

        <Menu
          triggerInteraction="click-and-hover"
          trigger={
            <Button
              id={TOP_NAV_MENUBAR_TRIGGER_IDS[2]}
              onKeyDown={handleMenubarTriggerKeyDown('admin')}
            >
              Admin
            </Button>
          }
          subMenuInteraction="hover"
          closeOnSelect={false}
          onMenubarEdgeNavigate={(direction) =>
            navigateTopNavMenubar(direction, 'admin')
          }
          {...getMenuProps('admin')}
        >
          <SubMenu label="Users">
            <MenuItem label="All users" />
            <MenuItem label="Roles & permissions" />
          </SubMenu>

          <SubMenu label="Settings">
            <MenuItem label="General" />
            <MenuItem label="Integrations" />
            <MenuItem label="Billing" />
          </SubMenu>

          <MenuItem label="Audit log" iconBefore="list-bullets" />
        </Menu>
      </Box>
    </VStack>
  );
};

export const TopNavExample: Story = {
  name: 'Top nav example',
  render: () => <TopNavExampleWrapper />,
  parameters: { controls: { disable: true } },
};

export const SubMenuDigin: Story = {
  render: () => (
    <Menu
      trigger={<Button iconAfter="caret-down">Open menu</Button>}
      subMenuInteraction="digin"
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

export const SubMenuDiginForms: Story = {
  render: () => <SubMenuDiginFormsExample />,
  parameters: { controls: { disable: true } },
};

export const AutocompleteFiltering: Story = {
  render: () => <AutocompleteFilteringExample />,
  parameters: { controls: { disable: true } },
};

export const PanelAsSidebar: Story = {
  name: 'Panel as sidebar',
  render: () => (
    <Flex
      minW="3xl"
      h="lg"
      bg="bg.neutral"
      overflow="hidden"
      boxShadow="overlay"
    >
      <Menu
        subMenuInteraction="hover"
        panel={true}
        maxW="264"
        density="comfortable"
      >
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>
  ),
  parameters: { controls: { disable: true } },
};

export const PanelAsMobileNav: Story = {
  name: 'Panel as mobile nav',
  render: () => (
    <Flex
      minW="3xl"
      h="lg"
      bg="bg.neutral"
      overflow="hidden"
      boxShadow="overlay"
    >
      <Menu
        subMenuInteraction="digin"
        panel={true}
        maxW="264"
        w="full"
        density="comfortable"
      >
        <MenuItem label="View profile" />
        <SubMenu label="More actions" minW="180">
          <MenuItem label="Export" />
          <MenuItem label="Share" />
          <SubMenu label="Advanced" minW="180">
            <MenuItem label="Audit log" />
            <MenuItem label="Settings" />
          </SubMenu>
        </SubMenu>
      </Menu>
    </Flex>
  ),
  parameters: { controls: { disable: true } },
};
