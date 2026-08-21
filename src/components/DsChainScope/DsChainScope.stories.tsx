import { useState } from 'react';

import { expect, userEvent, within } from '@storybook/test';

import { useDsChain } from '~/utils/dsChain';

import { Box } from '../Box';
import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import { Modal, ModalBody, ModalHeader } from '../Modal';
import { Select, SelectOption } from '../Select';
import { Text } from '../Text';

import { DsChainScope } from './DsChainScope';

import type { Meta, StoryObj } from '@storybook/react';

/**
 * Reads the chain at its own position in the React tree and writes it to a
 * queryable attribute. `data-probe` deliberately avoids `data-testid` so the
 * probe itself never contributes a node to the chain it is reporting.
 */
const ChainProbe = ({ name }: { name: string }) => {
  const chain = useDsChain();

  return (
    <Box
      data-probe={name}
      data-chain={chain.join('>')}
      p="8"
      borderWidth="1"
      borderColor="border"
      borderRadius="4"
    >
      <Text>
        {name}: {chain.join('>') || '(empty)'}
      </Text>
    </Box>
  );
};

const readProbe = (root: HTMLElement, name: string) =>
  root.querySelector(`[data-probe="${name}"]`)?.getAttribute('data-chain');

const meta = {
  title: 'Components/DsChainScope',
  component: DsChainScope,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Adds a test id to the interaction chain shared with a subtree. `Box` opens a scope automatically whenever it receives a `data-testid`, so this component is only needed around raw DOM that does not render through `Box`.',
      },
    },
  },
  args: {
    testId: 'scope',
  },
} satisfies Meta<typeof DsChainScope>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DsChainScope testId="order-table">
      <DsChainScope testId="order-row">
        <ChainProbe name="default" />
      </DsChainScope>
    </DsChainScope>
  ),
  parameters: { controls: { disable: true } },
};

export const ChainBuildsAcrossTaggedElements: Story = {
  name: 'Chain: Tagged Ancestors Accumulate',
  render: () => (
    <Box display="grid" gap="12">
      <ChainProbe name="untracked" />
      <Box data-testid="page" display="grid" gap="12">
        <ChainProbe name="page" />
        {/* Untagged Box: present in the DOM, absent from the chain. */}
        <Box display="grid" gap="12">
          <ChainProbe name="untagged" />
          <Box data-testid="panel" display="grid" gap="12">
            <ChainProbe name="panel" />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // A probe outside every scope reads the shared empty chain.
    expect(readProbe(canvasElement, 'untracked')).toBe('');

    // A tagged Box pushes its own `data-testid` for its subtree.
    expect(readProbe(canvasElement, 'page')).toBe('page');

    // An untagged Box between two tagged ones contributes nothing.
    expect(readProbe(canvasElement, 'untagged')).toBe('page');

    // Nested tags accumulate nearest-last.
    expect(readProbe(canvasElement, 'panel')).toBe('page>panel');
  },
  parameters: { controls: { disable: true } },
};

export const ChainKeepsTheNearestFive: Story = {
  name: 'Chain: Depth Is Bounded At Five',
  render: () => (
    <Box data-testid="one">
      <Box data-testid="two">
        <Box data-testid="three">
          <Box data-testid="four">
            <Box data-testid="five">
              <Box data-testid="six">
                <Box data-testid="seven">
                  <ChainProbe name="deep" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // Seven tagged ancestors, nearest five retained.
    expect(readProbe(canvasElement, 'deep')).toBe('three>four>five>six>seven');
  },
  parameters: { controls: { disable: true } },
};

export const RepeatedNodeIsCollapsed: Story = {
  name: 'Chain: A Repeated Node Is Collapsed',
  render: () => (
    <Box data-testid="page">
      {/*
        The scope and the element carry the same id. A component that opens a
        scope above its root and also writes the id on an inner element
        produces this, and so does a consumer wrapping a tagged component.
      */}
      <DsChainScope testId="status">
        <Box data-testid="status">
          <ChainProbe name="collapsed" />
        </Box>
      </DsChainScope>

      {/* Only the innermost node is compared, so real nesting still counts. */}
      <Box data-testid="grid">
        <Box data-testid="row">
          <Box data-testid="grid">
            <ChainProbe name="nested" />
          </Box>
        </Box>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // Not `page>status>status` — the repeat carries nothing and would spend
    // one of five slots.
    expect(readProbe(canvasElement, 'collapsed')).toBe('page>status');

    // A grid inside a grid is real structure, so the repeat is kept.
    expect(readProbe(canvasElement, 'nested')).toBe('page>grid>row>grid');
  },
  parameters: { controls: { disable: true } },
};

export const ScopeCoversRawDom: Story = {
  name: 'Ex: Scope Around Raw DOM',
  render: () => (
    <Box data-testid="order-table">
      {/* A raw element never reaches Box, so the scope supplies the node. */}
      <DsChainScope testId="order-row">
        <div data-testid="order-row">
          <ChainProbe name="raw" />
        </div>
      </DsChainScope>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    expect(readProbe(canvasElement, 'raw')).toBe('order-table>order-row');
  },
  parameters: { controls: { disable: true } },
};

export const PortalStampsResolvedChain: Story = {
  name: 'Ex: Portaled Listbox Carries The Chain',
  render: () => (
    <Box data-testid="page">
      <Box data-testid="filters">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', { name: /status/i });

    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');

    const listbox = await screen.findByRole('listbox');

    // The problem this solves: the listbox has no DOM ancestry to its opener.
    expect(trigger.contains(listbox)).toBe(false);

    // The portal root carries the chain from the opener's React-tree position.
    const portalRoot = listbox.closest('[data-ds-chain]');
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).toHaveAttribute('data-ds-chain', 'page>filters');
  },
  parameters: { controls: { disable: true } },
};

export const PortalRootIsMarkedWithoutAChain: Story = {
  name: 'Ex: Portal Boundary Is Findable With No Chain',
  render: () => (
    // Deliberately untagged: no ancestor carries a `data-testid`, which is the
    // state of almost every screen before anyone tags it.
    <Box>
      <Select aria-label="Status" placeholder="Choose a status...">
        <SelectOption value="draft" label="Draft" />
        <SelectOption value="published" label="Published" />
      </Select>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', { name: /status/i });

    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');

    const listbox = await screen.findByRole('listbox');
    const portalRoot = listbox.closest('[data-ds-portal-root]');

    // The marker is unconditional, so the boundary is findable.
    expect(portalRoot).not.toBeNull();

    // The chain is not: an empty chain emits no attribute, so a reader can
    // tell "resolved to nothing" from "never resolved". Without the marker
    // this element would be an ordinary div and a walk-up would pass straight
    // through it into `document.body`.
    expect(portalRoot).not.toHaveAttribute('data-ds-chain');
  },
  parameters: { controls: { disable: true } },
};

const NestedPortalsExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box data-testid="page">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>Assign owner</ModalHeader>
        <ModalBody>
          <Box data-testid="owner-field">
            <Menu
              trigger={<Button iconAfter="caret-down">Choose owner</Button>}
            >
              <MenuItem label="Ada Lovelace" />
              <MenuItem label="Grace Hopper" />
            </Menu>
          </Box>
        </ModalBody>
      </Modal>
    </Box>
  );
};

export const NestedPortalsCompose: Story = {
  name: 'Ex: Portal Inside A Portal',
  render: () => <NestedPortalsExample />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));

    const modalRoot = (await screen.findByText('Assign owner')).closest(
      '[data-ds-chain]',
    );
    expect(modalRoot).toHaveAttribute('data-ds-chain', 'page');

    await userEvent.click(screen.getByText('Choose owner'));

    const menuRoot = (await screen.findByText('Ada Lovelace')).closest(
      '[data-ds-chain]',
    );

    // The menu opened from inside the modal, and its chain continues past it.
    expect(menuRoot).toHaveAttribute('data-ds-chain', 'page>owner-field');

    // Both portals are siblings in the body, so the composition came from the
    // React tree rather than from DOM containment.
    expect(menuRoot).not.toBe(modalRoot);
    expect(modalRoot?.contains(menuRoot ?? null)).toBe(false);
  },
  parameters: { controls: { disable: true } },
};

const openStatusListbox = async (canvasElement: HTMLElement) => {
  const trigger = within(canvasElement).getByRole('combobox', {
    name: /status/i,
  });

  trigger.focus();
  await userEvent.keyboard('{ArrowDown}');

  const listbox = await within(canvasElement.ownerDocument.body).findByRole(
    'listbox',
  );

  return listbox.closest('[data-ds-portal-root]');
};

export const PortalCarriesTheObject: Story = {
  name: 'Ex: Portaled Listbox Carries The Object',
  render: () => (
    // The shape of a legacy Perl screen: one layout wrapper carries the object
    // for the whole page, and every interaction on it resolves to that object.
    <Box data-track-object="orderline">
      <Box data-testid="page">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const portalRoot = await openStatusListbox(canvasElement);

    // The wrapper that carries the object is not an ancestor of the portal —
    // that is the whole bug. Walking up from inside the listbox reaches
    // `document.body` and stops.
    expect(portalRoot?.closest('[data-track-object]')).toBe(portalRoot);

    // The value is copied from the opening element's nearest tagged ancestor.
    expect(portalRoot).toHaveAttribute('data-track-object', 'orderline');
  },
  parameters: { controls: { disable: true } },
};

export const NearestObjectWins: Story = {
  name: 'Ex: Nearest Object Wins',
  render: () => (
    // The shape of a React screen: several tagged regions on one page, so an
    // interaction has to resolve to the region it started in, not to the page.
    <Box data-track-object="order">
      <Box data-track-object="orderline">
        <Select aria-label="Status" placeholder="Choose a status...">
          <SelectOption value="draft" label="Draft" />
          <SelectOption value="published" label="Published" />
        </Select>
      </Box>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const portalRoot = await openStatusListbox(canvasElement);

    expect(portalRoot).toHaveAttribute('data-track-object', 'orderline');
  },
  parameters: { controls: { disable: true } },
};

export const UntaggedPageYieldsNoObject: Story = {
  name: 'Ex: Untagged Page Yields No Object',
  render: () => (
    // No ancestor carries an object, which is the state of every screen the
    // application has not tagged yet.
    <Box>
      <Select aria-label="Status" placeholder="Choose a status...">
        <SelectOption value="draft" label="Draft" />
        <SelectOption value="published" label="Published" />
      </Select>
    </Box>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const portalRoot = await openStatusListbox(canvasElement);

    // The boundary is still findable, so a reader stops here and records the
    // object as unknown rather than walking on and borrowing one.
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).not.toHaveAttribute('data-track-object');
  },
  parameters: { controls: { disable: true } },
};

const ModalWithoutAnOpenerExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box data-track-object="orderline">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>Assign owner</ModalHeader>
        <ModalBody>
          <Text>Nothing here resolves to an object.</Text>
        </ModalBody>
      </Modal>
    </Box>
  );
};

export const ModalHasNoOpeningElement: Story = {
  name: 'Ex: Modal Resolves No Object',
  render: () => <ModalWithoutAnOpenerExample />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));

    const portalRoot = (await screen.findByText('Assign owner')).closest(
      '[data-ds-portal-root]',
    );

    // A Modal is driven by the `open` prop and never sets a reference, so
    // there is no opening element to resolve from. The chain still arrives
    // through React context; the object does not, and no object is emitted.
    // This is the known gap, recorded here rather than papered over: a guessed
    // page-level object would be right on a legacy screen and wrong on a React
    // screen that tags individual elements.
    expect(portalRoot).not.toBeNull();
    expect(portalRoot).not.toHaveAttribute('data-track-object');
  },
  parameters: { controls: { disable: true } },
};
