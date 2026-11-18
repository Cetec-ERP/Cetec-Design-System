import { expect } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';
import { containerSizes } from '~/styles/utilities/containerSizes';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** The computed style of every element that matches in a fixture story. */
const styles = (canvasElement: HTMLElement, fixture: string, part: string) =>
  [
    ...canvasElement.querySelectorAll(
      `[data-fixture="${fixture}"] .cetec-keyFact__${part}`,
    ),
  ].map((element) => getComputedStyle(element));

/**
 * KeyFact on paper, for the kit element `key_fact`. The Go print helper
 * writes the same markup and classes as the `KeyFact` component, with no
 * tooltip or link.
 *
 * The kit element has no `layout` prop. The element around it picks one. A
 * `grid` or a `section` writes `aligned`. A `header` writes `horizontal`.
 * Labels print in the caps style and values never truncate. Each story renders
 * one fixture from `src/recipes/keyFact.fixtures.json` on a Letter page.
 */
const meta = {
  title: 'Print/KeyFact',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'keyFact',
    fixture: printFixture('keyFact', 'aligned'),
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

/** Fixture `aligned`: one fact with a fixed label width. */
export const Aligned: Story = {
  play: async ({ canvasElement }) => {
    const [label] = styles(canvasElement, 'aligned', 'label');
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(label?.fontSize).toBe('9.33333px');
    await expect(label?.textTransform).toBe('uppercase');
    // sizes.keyFactLabel is 6rem.
    await expect(label?.width).toBe('96px');
  },
};

/**
 * Fixture `types`: each type in a 2-column grid. Number and currency use
 * tabular figures. Money shows the digits Go formats, in the document format.
 */
export const Types: Story = {
  args: { fixture: printFixture('keyFact', 'types') },
  play: async ({ canvasElement }) => {
    const texts = styles(canvasElement, 'types', 'text');
    const numeric = texts.map((style) => style.fontVariantNumeric);
    await expect(numeric).toEqual([
      'normal',
      'tabular-nums',
      'normal',
      'normal',
      'tabular-nums',
      'tabular-nums',
    ]);
    await expect(texts[2]?.whiteSpace).toBe('nowrap');
  },
};

/**
 * Fixture `aligned-grid`: five aligned facts in a 2-column grid. The values of
 * each column start at the same x.
 */
export const AlignedGrid: Story = {
  args: { fixture: printFixture('keyFact', 'aligned-grid') },
  play: async ({ canvasElement }) => {
    const values = [
      ...canvasElement.querySelectorAll(
        '[data-fixture="aligned-grid"] .cetec-keyFact__value',
      ),
    ].map((value) => Math.round(value.getBoundingClientRect().left));
    // Facts 1, 3, and 5 are in the first column. Facts 2 and 4 are in the second.
    await expect(new Set([values[0], values[2], values[4]]).size).toBe(1);
    await expect(values[1]).toBe(values[3]);
    const directions = styles(canvasElement, 'aligned-grid', 'inner').map(
      (style) => style.flexDirection,
    );
    await expect(directions).toEqual(Array(5).fill('row'));
  },
};

/**
 * Fixture `aligned-grid` in a 260 px container, a page 195 pt wide with no
 * margins. Each cell is narrower than 15rem, so each fact stacks its label
 * over its value.
 */
export const AlignedGridStacked: Story = {
  args: {
    fixture: printFixture('keyFact', 'aligned-grid'),
    size: { width: 195, height: 150, unit: 'pt' },
    margins: 0,
    fit: 1,
    h: 'xs',
  },
  play: async ({ canvasElement }) => {
    // The recipe query and the token must agree.
    await expect(containerSizes.keyFactStack).toBe('15rem');
    const directions = styles(canvasElement, 'aligned-grid', 'inner').map(
      (style) => style.flexDirection,
    );
    await expect(directions).toEqual(Array(5).fill('column'));
    const [label] = styles(canvasElement, 'aligned-grid', 'label');
    await expect(label?.width).not.toBe('96px');
  },
};

/** Fixture `wrap`: a long label and a long value wrap. Nothing truncates. */
export const Wrap: Story = {
  args: { fixture: printFixture('keyFact', 'wrap') },
  play: async ({ canvasElement }) => {
    for (const text of canvasElement.querySelectorAll<HTMLElement>(
      '[data-fixture="wrap"] .cetec-keyFact__text',
    )) {
      await expect(getComputedStyle(text).whiteSpace).toBe('normal');
      await expect(text.scrollWidth).toBeLessThanOrEqual(text.clientWidth);
    }
  },
};

/**
 * Fixture `horizontal`: the layout a header writes for its meta list. The
 * label sizes itself and ends in a colon.
 */
export const Horizontal: Story = {
  args: { fixture: printFixture('keyFact', 'horizontal') },
  play: async ({ canvasElement }) => {
    const colons = styles(canvasElement, 'horizontal', 'labelWithColon');
    await expect(colons.map((style) => style.display)).toEqual(
      Array(3).fill('inline'),
    );
  },
};

/** Fixture `emphasis-total`: a total row prints large in full ink. */
export const EmphasisTotal: Story = {
  args: { fixture: printFixture('keyFact', 'emphasis-total') },
  play: async ({ canvasElement }) => {
    const [, total] = styles(canvasElement, 'emphasis-total', 'value');
    // print.total is 14 pt, which is 18.67 px.
    await expect(total?.fontSize).toBe('18.6667px');
    // paper.ink is neutral.100.
    await expect(total?.color).toBe('rgb(41, 42, 46)');
  },
};

/** Fixture `tone-danger`: the label and the value print in the alert ink. */
export const ToneDanger: Story = {
  args: { fixture: printFixture('keyFact', 'tone-danger') },
  play: async ({ canvasElement }) => {
    const [label] = styles(canvasElement, 'tone-danger', 'label');
    const [text] = styles(canvasElement, 'tone-danger', 'text');
    // paper.inkAlert is red.50.
    await expect(label?.color).toBe(text?.color);
    await expect(text?.color).not.toBe('rgb(41, 42, 46)');
  },
};

/**
 * Fixture `tone-danger` in thermal ink, on 4 × 6 in label stock. Thermal
 * printers have one ink, so the alert prints black.
 */
export const ToneDangerThermal: Story = {
  args: {
    fixture: printFixture('keyFact', 'tone-danger'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
  },
  play: async ({ canvasElement }) => {
    const [label] = styles(canvasElement, 'tone-danger', 'label');
    const [text] = styles(canvasElement, 'tone-danger', 'text');
    await expect(label?.color).toBe('rgb(0, 0, 0)');
    await expect(text?.color).toBe('rgb(0, 0, 0)');
  },
};
