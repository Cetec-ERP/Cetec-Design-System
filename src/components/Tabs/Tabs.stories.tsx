import { useState } from 'react';

import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import { Tabs } from './Tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'Tabs keep every `TabPanel` mounted by default and hide the inactive',
          'ones with `display: none`. That preserves scroll position, form',
          'drafts, and grid state when a user moves between tabs, at the cost',
          'of keeping hidden work alive. Hidden panels receive an `isActive`',
          'signal — as a render-prop argument or through `useTabPanelActive()`',
          '— so polling, timers, and animation can pause themselves. Set',
          '`unmountInactive` when a panel is expensive enough that discarding',
          'its state is the better trade.',
        ].join(' '),
      },
    },
  },
  args: {
    'aria-label': 'Example sections',
    children: null,
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="overview">
      <Tab value="overview">Overview</Tab>
      <Tab value="activity">Activity</Tab>
      <Tab value="settings">Settings</Tab>
      <TabPanel value="overview">
        <Text py="16">Summary of the current record.</Text>
      </TabPanel>
      <TabPanel value="activity">
        <Text py="16">Recent activity for the current record.</Text>
      </TabPanel>
      <TabPanel value="settings">
        <Text py="16">Settings for the current record.</Text>
      </TabPanel>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  name: 'Badges',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Tabs {...args} defaultValue="work">
      <Tab value="work">Work</Tab>
      <Tab
        value="materials"
        badge={3}
        badgeTooltip="2 Open Part Request, 1 Short Part(s)"
      >
        Materials
      </Tab>
      <Tab value="status" badge={12}>
        Status
      </Tab>
      <Tab value="documents" badge={0}>
        Documents
      </Tab>
      <TabPanel value="work">
        <Text py="16">A badge without a tooltip is a bare count.</Text>
      </TabPanel>
      <TabPanel value="materials">
        <Text py="16">
          Hover or focus the Materials badge to read what the count means.
        </Text>
      </TabPanel>
      <TabPanel value="status">
        <Text py="16">Status content.</Text>
      </TabPanel>
      <TabPanel value="documents">
        <Text py="16">A zero count renders no badge at all.</Text>
      </TabPanel>
    </Tabs>
  ),
};

const overflowTabs = [
  'Work',
  'Info',
  'Materials',
  'Status',
  'Documents',
  'History',
  'Labor',
  'Quality',
  'Shipping',
  'Invoicing',
  'Costing',
  'Notes',
];

export const Overflow: Story = {
  name: 'Overflow',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Box
      resize="horizontal"
      overflow="auto"
      width="lg"
      maxWidth="full"
      minWidth="240"
      borderWidth="1"
      borderStyle="dashed"
      borderColor="border"
      p="16"
    >
      <Text pb="12" color="text.subtlest">
        Drag the bottom-right corner. Tabs nearest the selected one keep their
        place; the rest move into the overflow menu.
      </Text>
      <Tabs {...args} defaultValue="work">
        {overflowTabs.map((label) => (
          <Tab key={label} value={label.toLowerCase()}>
            {label}
          </Tab>
        ))}
        {overflowTabs.map((label) => (
          <TabPanel key={label} value={label.toLowerCase()}>
            <Text py="16">{label} content.</Text>
          </TabPanel>
        ))}
      </Tabs>
    </Box>
  ),
};

const iconTabs = [
  { value: 'work', label: 'Work', icon: 'wrench-2' },
  { value: 'materials', label: 'Materials', icon: 'cube-focus' },
  { value: 'schedule', label: 'Schedule', icon: 'calendar-view-week' },
  { value: 'shipping', label: 'Shipping', icon: 'truck-trailer' },
  { value: 'quality', label: 'Quality', icon: 'list-checks' },
  { value: 'history', label: 'History', icon: 'clock-countdown' },
  { value: 'notes', label: 'Notes', icon: 'note-stack' },
] as const;

export const LabelOverride: Story = {
  name: 'Label Override for Overflow',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Box width="md" maxWidth="full">
      <Text pb="12" color="text.subtlest">
        These tabs render an icon beside their text, so flattening `children`
        would produce a poor menu row. Each one passes `label`, and the overflow
        menu uses that text. The strip still renders `children` as-is.
      </Text>
      <Tabs {...args} defaultValue="work">
        {iconTabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label}>
            <Icon name={tab.icon} aria-hidden />
            {tab.label}
          </Tab>
        ))}
        {iconTabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            <Text py="16">{tab.label} content.</Text>
          </TabPanel>
        ))}
      </Tabs>
    </Box>
  ),
};

export const UnmountInactive: Story = {
  name: 'Unmount Inactive Panels',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Tabs {...args} defaultValue="first" unmountInactive>
      <Tab value="first">First</Tab>
      <Tab value="second">Second</Tab>
      <TabPanel value="first">
        <Text py="16">
          Only this panel exists in the DOM while it is selected.
        </Text>
      </TabPanel>
      <TabPanel value="second">
        <Text py="16">
          Switching tabs unmounts the other panel and discards its state.
        </Text>
      </TabPanel>
    </Tabs>
  ),
};

const WorkView = () => {
  const [hasSchedule, setHasSchedule] = useState(true);
  const [lastChange, setLastChange] = useState('none yet');

  return (
    <Box>
      <Box pb="12">
        <Button
          variant="hollow"
          size="sm"
          onClick={() => setHasSchedule((current) => !current)}
        >
          {hasSchedule ? 'Remove Schedule tab' : 'Add Schedule tab'}
        </Button>
      </Box>
      <Tabs
        aria-label="Work order sections"
        defaultValue="work"
        onChange={(_event, value, reason) =>
          setLastChange(`${value} (${reason})`)
        }
      >
        <Tab value="work">Work</Tab>
        <Tab value="info">Info</Tab>
        <Tab
          value="materials"
          badge={3}
          badgeTooltip="2 Open Part Request, 1 Short Part(s)"
        >
          Materials
        </Tab>
        <Tab value="status" badge={5} badgeTooltip="5 Operations Behind">
          Status
        </Tab>
        {hasSchedule ? <Tab value="schedule">Schedule</Tab> : null}
        <Tab value="documents">Documents</Tab>
        <Tab value="history">History</Tab>

        <TabPanel value="work">
          <Text py="16">Work instructions and operations.</Text>
        </TabPanel>
        <TabPanel value="info">
          <Text py="16">Order header and customer details.</Text>
        </TabPanel>
        <TabPanel value="materials">
          <Text py="16">Bill of materials and part requests.</Text>
        </TabPanel>
        <TabPanel value="status">
          <Text py="16">Operation status roll-up.</Text>
        </TabPanel>
        <TabPanel value="schedule">
          {({ isActive }) => (
            <Text py="16">
              Schedule board. Live refresh is {isActive ? 'running' : 'paused'}.
              Select this tab, remove it with the button above, and the strip
              falls back to the first remaining tab.
            </Text>
          )}
        </TabPanel>
        <TabPanel value="documents">
          <Text py="16">Attached drawings and travelers.</Text>
        </TabPanel>
        <TabPanel value="history">
          <Text py="16">Audit trail.</Text>
        </TabPanel>
      </Tabs>
      <Text pt="16" color="text.subtlest">
        Last change: {lastChange}
      </Text>
    </Box>
  );
};

export const ExWorkView: Story = {
  name: 'Ex: Work View',
  parameters: { controls: { disable: true } },
  render: () => <WorkView />,
};

export const DisabledFirstTab: Story = {
  name: 'Test: disabled first tab is not the default',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Box>
      <Text pb="12" color="text.subtlest">
        No `defaultValue` is given and the first tab is disabled. The strip
        selects the first enabled tab so the keyboard can still enter it.
      </Text>
      <Tabs {...args}>
        <Tab value="archived" disabled>
          Archived
        </Tab>
        <Tab value="open">Open</Tab>
        <Tab value="closed">Closed</Tab>
        <TabPanel value="archived">
          <Text py="16">Archived content.</Text>
        </TabPanel>
        <TabPanel value="open">
          <Text py="16">Open content.</Text>
        </TabPanel>
        <TabPanel value="closed">
          <Text py="16">Closed content.</Text>
        </TabPanel>
      </Tabs>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const open = canvas.getByRole('tab', { name: 'Open' });

    await expect(open).toHaveAttribute('aria-selected', 'true');
    await expect(open).toHaveAttribute('tabindex', '0');
    await expect(canvas.getByRole('tab', { name: 'Archived' })).toHaveAttribute(
      'aria-selected',
      'false',
    );

    // Tab from the page body lands on the strip's only focusable tab.
    await userEvent.tab();
    await expect(open).toHaveFocus();
  },
};

export const BadgeKeepsHeight: Story = {
  name: 'Test: badge does not change tab height',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Box display="flex" flexDirection="column" gap="16">
      <Text color="text.subtlest">
        Both strips are 40px tall. The 20px badge sits inside the 22px line box
        and never grows the tab. Matches Figma `_TabsTab`.
      </Text>
      <Tabs {...args} aria-label="Without badges" defaultValue="work">
        <Tab value="work">Work</Tab>
        <Tab value="materials">Materials</Tab>
      </Tabs>
      <Tabs {...args} aria-label="With badges" defaultValue="work">
        <Tab value="work" badge={3}>
          Work
        </Tab>
        <Tab value="materials" badge={12} badgeTooltip="12 Short Part(s)">
          Materials
        </Tab>
      </Tabs>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [plain, badged] = canvas.getAllByRole('tablist');

    await expect(badged?.offsetHeight).toBe(plain?.offsetHeight);

    for (const tab of canvas.getAllByRole('tab')) {
      await expect(tab.offsetHeight).toBe(40);
    }
  },
};

const fitTabs = ['Work', 'Info', 'Materials', 'Status'];

export const ToggleReserveOnlyOnOverflow: Story = {
  name: 'Test: toggle space is reserved only once tabs overflow',
  parameters: { controls: { disable: true } },
  render: (args) => (
    <Box>
      <Text pb="12" color="text.subtlest">
        The wrapper is sized to the strip plus 16px, which is less than the 32px
        toggle reserve. Every tab fits, so no toggle renders. Shrinking it below
        the strip makes the toggle appear.
      </Text>
      <Box
        data-fit-wrapper
        borderWidth="1"
        borderStyle="dashed"
        borderColor="border"
      >
        <Tabs {...args} defaultValue="work">
          {fitTabs.map((label) => (
            <Tab key={label} value={label.toLowerCase()}>
              {label}
            </Tab>
          ))}
          {fitTabs.map((label) => (
            <TabPanel key={label} value={label.toLowerCase()}>
              <Text py="16">{label} content.</Text>
            </TabPanel>
          ))}
        </Tabs>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const wrapper =
      canvasElement.querySelector<HTMLElement>('[data-fit-wrapper]');
    const list = canvas.getByRole('tablist');
    const tabs = canvas.getAllByRole('tab');

    if (!wrapper) throw new Error('wrapper not found');

    const gap = Number.parseFloat(getComputedStyle(list).columnGap) || 0;
    const needed =
      tabs.reduce((sum, tab) => sum + tab.getBoundingClientRect().width, 0) +
      gap * (tabs.length - 1);

    // Room for every tab, but not for the 32px toggle on top of them.
    wrapper.style.width = `${String(Math.ceil(needed) + 16)}px`;

    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(fitTabs.length);
      await expect(
        canvas.queryByRole('button', { name: 'More tabs' }),
      ).not.toBeInTheDocument();
    });

    // Now genuinely too narrow: the toggle renders and at least one tab hides.
    wrapper.style.width = `${String(Math.floor(needed) - 8)}px`;

    await waitFor(async () => {
      await expect(
        canvas.getByRole('button', { name: 'More tabs' }),
      ).toBeInTheDocument();
      await expect(canvas.getAllByRole('tab').length).toBeLessThan(
        fitTabs.length,
      );
    });
  },
};
