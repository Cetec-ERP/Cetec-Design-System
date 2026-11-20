import { expect } from 'storybook/test';

import { styled } from '@styled-system/jsx';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** Returns the first element in a fixture story that matches a selector. */
const part = async (
  canvasElement: HTMLElement,
  fixture: string,
  selector: string,
) => {
  const element = canvasElement.querySelector(
    `[data-fixture="${fixture}"] ${selector}`,
  );
  await expect(element).not.toBeNull();
  return element as HTMLElement;
};

/**
 * A titled group, the `printSection` slot recipe, for the kit element
 * `section`. It has no React component. The Go print helper writes the
 * classes from the fixtures.
 *
 * The `title` slot prints as a caps heading with a hairline under it, and
 * never ends a page alone. `keep="together"` keeps the whole section on one
 * page when it fits. A template puts a plain Liquid `if` around a section to
 * show it only sometimes.
 *
 * Each story renders one fixture from `src/recipes/printSection.fixtures.json`
 * on a Letter page. The tables in the fixtures have no classes, so they show
 * the section only, not the print look of a table.
 */
const meta = {
  title: 'Print/Section',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printSection',
    fixture: printFixture('printSection', 'titled'),
    paper: 'letter',
    fit: 'width',
    h: 'md',
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

/** Fixture `titled`: a title and a table. The section may break. */
export const Titled: Story = {
  play: async ({ canvasElement }) => {
    const title = await part(
      canvasElement,
      'titled',
      '.cetec-printSection__title',
    );
    const style = getComputedStyle(title);
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(parseFloat(style.fontSize)).toBeCloseTo(9.333, 2);
    await expect(style.textTransform).toBe('uppercase');
    await expect(style.borderBottomStyle).toBe('solid');
    await expect(style.breakAfter).toBe('avoid');
    const root = await part(
      canvasElement,
      'titled',
      '.cetec-printSection__root',
    );
    await expect(getComputedStyle(root).breakInside).toBe('auto');
  },
};

/**
 * Fixture `keep-together`: the section moves to the next page as one unit
 * when it does not fit. In this story only, a dashed outline marks the unit.
 * It is not part of the recipe and does not print.
 */
export const KeepTogether: Story = {
  args: {
    fixture: printFixture('printSection', 'keep-together'),
  },
  decorators: [
    (Story) => (
      <styled.div
        css={{
          '& .cetec-printSection__root--keep_together': {
            outlineWidth: '1',
            outlineStyle: 'dashed',
            outlineColor: 'border.bold',
            outlineOffset: '4',
          },
        }}
      >
        <Story />
      </styled.div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const root = await part(
      canvasElement,
      'keep-together',
      '.cetec-printSection__root',
    );
    await expect(getComputedStyle(root).breakInside).toBe('avoid');
  },
};

/** Fixture `untitled`: no title. The content starts at the top. */
export const Untitled: Story = {
  args: {
    fixture: printFixture('printSection', 'untitled'),
  },
  play: async ({ canvasElement }) => {
    const root = await part(
      canvasElement,
      'untitled',
      '.cetec-printSection__root',
    );
    await expect(root.querySelector('.cetec-printSection__title')).toBeNull();
  },
};

/** Fixture `stacked`: space comes between sections, not above the first. */
export const Stacked: Story = {
  args: {
    fixture: printFixture('printSection', 'stacked'),
  },
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll(
      '[data-fixture="stacked"] .cetec-printSection__root',
    );
    await expect(roots).toHaveLength(2);
    await expect(getComputedStyle(roots[0] as Element).marginTop).toBe('0px');
    await expect(
      parseFloat(getComputedStyle(roots[1] as Element).marginTop),
    ).toBeGreaterThan(0);
  },
};

/**
 * Fixture `titled` in thermal ink, on 4 × 6 in label stock. The title and its
 * rule are black, and the rule is 1.5 pt.
 */
export const Thermal: Story = {
  args: {
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl',
  },
  play: async ({ canvasElement }) => {
    const title = await part(
      canvasElement,
      'titled',
      '.cetec-printSection__title',
    );
    const style = getComputedStyle(title);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.borderBottomColor).toBe('rgb(0, 0, 0)');
    await expect(
      style.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1.5pt');
  },
};
