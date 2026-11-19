import { expect } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** The parties in a fixture story. */
const parties = (canvasElement: HTMLElement, fixture: string) => [
  ...canvasElement.querySelectorAll<HTMLElement>(
    `[data-fixture="${fixture}"] .cetec-printParty__root`,
  ),
];

/** The slot names of the lines in a party, in order. */
const lines = (party: HTMLElement | undefined) =>
  [...(party?.children ?? [])].map((line) =>
    line.className.replace('cetec-printParty__', ''),
  );

/**
 * A party, the `printParty` recipe, for the kit element `party`. It prints From,
 * Bill to, Ship to, or Remit to, and is the only element that prints an
 * address. It has no React component. The Go print helper writes the classes
 * from the fixtures.
 *
 * The label comes first. Then the lines print in this order: attention, name,
 * address, country, and contact. Go skips an empty line. Line breaks in a
 * line print as they are. Inside a print grid, a hairline separates parties
 * side by side. Each story renders one fixture from
 * `src/recipes/printParty.fixtures.json` on a Letter page.
 */
const meta = {
  title: 'Print/Party',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printParty',
    fixture: printFixture('printParty', 'all-lines'),
    paper: 'letter',
    fit: 'width',
    h: 'lg',
  },
  argTypes: {
    paper: {
      control: 'inline-radio',
      options: ['letter', 'a4', 'legal'],
    },
    fixture: { control: false },
    size: { control: false },
    footer: { control: false },
  },
} satisfies Meta<typeof PrintFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Fixture `all-lines`: all five lines, with the attention line above the name. */
export const AllLines: Story = {
  play: async ({ canvasElement }) => {
    const [party] = parties(canvasElement, 'all-lines');
    await expect(lines(party)).toEqual([
      'label',
      'attention',
      'name',
      'address',
      'country',
      'contact',
    ]);
    const address = party?.querySelector('.cetec-printParty__address');
    await expect(getComputedStyle(address as Element).whiteSpace).toBe(
      'pre-line',
    );
  },
};

/** Fixture `no-attention`: no attention line. */
export const NoAttention: Story = {
  args: { fixture: printFixture('printParty', 'no-attention') },
  play: async ({ canvasElement }) => {
    const [party] = parties(canvasElement, 'no-attention');
    await expect(lines(party)).toEqual(['label', 'name', 'address', 'contact']);
  },
};

/** Fixture `no-contact`: no contact line. */
export const NoContact: Story = {
  args: { fixture: printFixture('printParty', 'no-contact') },
  play: async ({ canvasElement }) => {
    const [party] = parties(canvasElement, 'no-contact');
    await expect(lines(party)).toEqual([
      'label',
      'attention',
      'name',
      'address',
    ]);
  },
};

/**
 * Fixture `remit-no-name`: a remit-to with a remit address set. It has no
 * name line, so the remit text prints whole.
 */
export const RemitNoName: Story = {
  args: { fixture: printFixture('printParty', 'remit-no-name') },
  play: async ({ canvasElement }) => {
    const [party] = parties(canvasElement, 'remit-no-name');
    await expect(lines(party)).toEqual(['label', 'address']);
  },
};

/**
 * Fixture `three-in-grid`: Bill to, Ship to, and Remit to in a 3-column grid
 * on a Letter page. A hairline separates parties side by side.
 */
export const ThreeInGrid: Story = {
  args: { fixture: printFixture('printParty', 'three-in-grid') },
  play: async ({ canvasElement }) => {
    const styles = parties(canvasElement, 'three-in-grid').map((party) =>
      getComputedStyle(party),
    );
    await expect(styles.map((style) => style.borderLeftStyle)).toEqual([
      'none',
      'solid',
      'solid',
    ]);
    // The rule is 1 pt wide.
    await expect(
      getComputedStyle(
        canvasElement.querySelector(
          '[data-fixture="three-in-grid"]',
        ) as Element,
      ).getPropertyValue('--cetec-border-widths-paper-rule'),
    ).toBe('1pt');
  },
};

/** Fixture `credit-memo`: Bill to and Remit to only. */
export const CreditMemo: Story = {
  args: { fixture: printFixture('printParty', 'credit-memo') },
  play: async ({ canvasElement }) => {
    await expect(parties(canvasElement, 'credit-memo')).toHaveLength(2);
  },
};

/**
 * Fixture `with-key-facts`: parties in a 3-column grid, then a fit grid of
 * KeyFacts, as the top of an invoice prints them.
 */
export const WithKeyFacts: Story = {
  args: { fixture: printFixture('printParty', 'with-key-facts') },
  play: async ({ canvasElement }) => {
    await expect(parties(canvasElement, 'with-key-facts')).toHaveLength(3);
    const facts = canvasElement.querySelectorAll(
      '[data-fixture="with-key-facts"] .cetec-keyFact__root',
    );
    await expect(facts).toHaveLength(4);
  },
};

/**
 * Fixture `three-in-grid` in thermal ink, on 4 × 6 in label stock. Every ink
 * and the hairline print black.
 */
export const ThreeInGridThermal: Story = {
  args: {
    fixture: printFixture('printParty', 'three-in-grid'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
  },
  play: async ({ canvasElement }) => {
    const [, second] = parties(canvasElement, 'three-in-grid');
    await expect(getComputedStyle(second as Element).borderLeftColor).toBe(
      'rgb(0, 0, 0)',
    );
  },
};
