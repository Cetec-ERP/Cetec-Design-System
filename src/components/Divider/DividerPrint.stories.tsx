import { expect, within } from 'storybook/test';

import { pageSizes } from '~/components/PrintPreview/pageSizes';
import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** Reads the rule of the divider on a fixture page. */
const findRule = async (canvasElement: HTMLElement, label: string) => {
  const page = await within(canvasElement).findByLabelText(label);
  const rule = page.querySelector('hr.cetec-divider');
  await expect(rule).not.toBeNull();
  return rule as HTMLElement;
};

/**
 * The print look of `Divider`, for the kit element `divider`. It is a plain
 * horizontal rule between flow elements, in place of a hand-written `<hr>`.
 *
 * The kit element has no props. The Go print helper writes an `<hr>` with
 * the `divider` recipe classes for the horizontal direction and the default
 * weight. On paper the rule is the hairline color at 1 pt, with space above
 * and below. Thermal ink prints it solid black at 1.5 pt. Each story renders
 * one fixture from `src/recipes/divider.fixtures.json`, exactly as stored.
 */
const meta = {
  title: 'Print/Divider',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'divider',
    fixture: printFixture('divider', 'between-text'),
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

/** Fixture `between-text`: a divider between two text blocks, normal ink. */
export const BetweenText: Story = {
  play: async ({ canvasElement }) => {
    const rule = await findRule(canvasElement, 'between-text');
    const style = getComputedStyle(rule);
    await expect(style.borderTopStyle).toBe('solid');
    // paper.hairline is neutralA.30, a soft grey, not solid black.
    await expect(style.borderTopColor).not.toBe('rgb(0, 0, 0)');
    // Chromium rounds the rendered width, so read the weight variable. It
    // holds paper.rule, 1 pt.
    await expect(style.getPropertyValue('--divider-weight').trim()).toBe('1pt');
  },
};

/**
 * Fixture `between-text-thermal`: the same divider in thermal ink, on
 * 4 × 6 in label stock. The rule is solid black at 1.5 pt.
 */
export const ThermalInk: Story = {
  args: {
    fixture: printFixture('divider', 'between-text-thermal'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl',
  },
  play: async ({ canvasElement }) => {
    const rule = await findRule(canvasElement, 'between-text-thermal');
    const style = getComputedStyle(rule);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(style.getPropertyValue('--divider-weight').trim()).toBe(
      '1.5pt',
    );
  },
};
