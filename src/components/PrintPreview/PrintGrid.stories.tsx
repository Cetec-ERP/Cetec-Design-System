import { expect } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** Counts the columns of the grid in a fixture story. */
const columnCount = async (canvasElement: HTMLElement, fixture: string) => {
  const grid = canvasElement.querySelector(
    `[data-fixture="${fixture}"] .cetec-printGrid`,
  );
  await expect(grid).not.toBeNull();
  return getComputedStyle(grid as Element).gridTemplateColumns.split(' ')
    .length;
};

/** The flex direction of each KeyFact in a fixture story. */
const factDirections = (canvasElement: HTMLElement, fixture: string) =>
  [
    ...canvasElement.querySelectorAll(
      `[data-fixture="${fixture}"] .cetec-keyFact__inner`,
    ),
  ].map((inner) => getComputedStyle(inner).flexDirection);

/**
 * The print grid, the `printGrid` recipe, for the kit element `grid`. It puts
 * any elements side by side. It has no React component. The Go print helper
 * writes the classes from the fixtures.
 *
 * `columns` is `2`, `3`, `4`, or `fit`. `fit` makes as many columns as fit,
 * each at least 1.6 in wide. The elements are the cells, with no wrapper.
 * Each cell is an inline size container, so a part in a narrow cell can change
 * its layout. An aligned KeyFact stacks its label over its value in a cell
 * narrower than 15rem. Each story renders one fixture from
 * `src/recipes/printGrid.fixtures.json` on a Letter page with 0.5 in margins,
 * so the content is 7.5 in wide.
 */
const meta = {
  title: 'Print/Grid',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printGrid',
    fixture: printFixture('printGrid', 'columns-2'),
    paper: 'letter',
    h: 'lg',
    fit: 'width',
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

/** Fixture `columns-2`: two columns. */
export const Columns2: Story = {
  play: async ({ canvasElement }) => {
    await expect(await columnCount(canvasElement, 'columns-2')).toBe(2);
    const cell = canvasElement.querySelector(
      '[data-fixture="columns-2"] .cetec-printGrid > *',
    );
    await expect(getComputedStyle(cell as Element).containerType).toBe(
      'inline-size',
    );
    // Cells are wider than 15rem, so labels stay beside values.
    await expect(factDirections(canvasElement, 'columns-2')).toEqual(
      Array(4).fill('row'),
    );
  },
};

/** Fixture `columns-3`: three columns. */
export const Columns3: Story = {
  args: { fixture: printFixture('printGrid', 'columns-3') },
  play: async ({ canvasElement }) => {
    await expect(await columnCount(canvasElement, 'columns-3')).toBe(3);
    // Cells are narrower than 15rem, so each KeyFact stacks.
    await expect(factDirections(canvasElement, 'columns-3')).toEqual(
      Array(6).fill('column'),
    );
  },
};

/** Fixture `columns-4`: four columns. */
export const Columns4: Story = {
  args: { fixture: printFixture('printGrid', 'columns-4') },
  play: async ({ canvasElement }) => {
    await expect(await columnCount(canvasElement, 'columns-4')).toBe(4);
    // Cells are narrower than 15rem, so each KeyFact stacks.
    await expect(factDirections(canvasElement, 'columns-4')).toEqual(
      Array(4).fill('column'),
    );
  },
};

/**
 * Fixture `columns-fit`: as many columns as fit, each at least 1.6 in wide. A
 * 7.5 in content width fits four, so the fifth cell starts a new row.
 */
export const ColumnsFit: Story = {
  args: { fixture: printFixture('printGrid', 'columns-fit') },
  play: async ({ canvasElement }) => {
    await expect(await columnCount(canvasElement, 'columns-fit')).toBe(4);
  },
};

/**
 * Fixture `columns-fit` on 4 × 6 in label stock in thermal ink. A 3.5 in
 * content width fits two columns.
 */
export const ColumnsFitThermalLabel: Story = {
  args: {
    fixture: printFixture('printGrid', 'columns-fit'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
  },
  play: async ({ canvasElement }) => {
    await expect(await columnCount(canvasElement, 'columns-fit')).toBe(2);
  },
};
