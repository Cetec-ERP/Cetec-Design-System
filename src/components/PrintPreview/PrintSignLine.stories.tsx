import { expect } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** The parts of the sign line in a fixture story. */
const signLine = async (canvasElement: HTMLElement, fixture: string) => {
  const root = canvasElement.querySelector(
    `[data-fixture="${fixture}"] .cetec-printSignLine__root`,
  );
  await expect(root).not.toBeNull();
  const all = (slot: string) => [
    ...(root as Element).querySelectorAll<HTMLElement>(
      `.cetec-printSignLine__${slot}`,
    ),
  ];
  return {
    fields: all('field'),
    lines: all('line'),
    captions: all('caption').map((caption) => caption.textContent),
    label: all('label')[0]?.textContent,
  };
};

/**
 * A line to sign by hand, the `printSignLine` slot recipe, for the kit
 * element `sign_line`. It has no React component. The Go print helper writes
 * the classes and the caption words from the fixtures.
 *
 * The label comes first, then a signature line, then a line for each of
 * `name`, `date`, and `initials` that the template asks for, in that order.
 * A printed name sits on the name line. With no lines, it is a write-in
 * field with one rule. The rule is 1 pt on paper and 1.5 pt in thermal ink.
 *
 * Each story renders one fixture from
 * `src/recipes/printSignLine.fixtures.json` on a Letter page.
 */
const meta = {
  title: 'Print/Sign line',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printSignLine',
    fixture: printFixture('printSignLine', 'name-and-date'),
    paper: 'letter',
    fit: 'width',
    h: 'xs',
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

/** Fixture `name-and-date`: a signature with a printed name and a date. */
export const NameAndDate: Story = {
  play: async ({ canvasElement }) => {
    const { fields, lines, captions } = await signLine(
      canvasElement,
      'name-and-date',
    );
    await expect(captions).toEqual(['Signature', 'Name', 'Date']);
    // The printed name sits on the name line.
    await expect(lines[1]?.textContent).toBe('Tamsin Okoro');
    const rule = getComputedStyle(lines[0] as Element);
    await expect(rule.borderBottomStyle).toBe('solid');
    await expect(
      rule.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1pt');
    // The date line starts narrower than the signature line.
    const [signature, , date] = fields.map(
      (field) => field.getBoundingClientRect().width,
    );
    await expect(date).toBeLessThan(signature ?? 0);
  },
};

/** Fixture `all-lines`: name, date, and initials, in that order. */
export const AllLines: Story = {
  args: {
    fixture: printFixture('printSignLine', 'all-lines'),
  },
  play: async ({ canvasElement }) => {
    const { captions } = await signLine(canvasElement, 'all-lines');
    await expect(captions).toEqual(['Signature', 'Name', 'Date', 'Initials']);
  },
};

/** Fixture `write-in`: no lines, so one rule with no caption. */
export const WriteIn: Story = {
  args: {
    fixture: printFixture('printSignLine', 'write-in'),
  },
  play: async ({ canvasElement }) => {
    const { fields, captions, label } = await signLine(
      canvasElement,
      'write-in',
    );
    await expect(fields).toHaveLength(1);
    await expect(captions).toEqual([]);
    await expect(label).toBe('Measured torque (N·m)');
  },
};

/** Fixture `check-face`: "Authorized signature" on a check, a write-in. */
export const CheckFace: Story = {
  args: {
    fixture: printFixture('printSignLine', 'check-face'),
  },
  play: async ({ canvasElement }) => {
    const { fields, captions } = await signLine(canvasElement, 'check-face');
    await expect(fields).toHaveLength(1);
    await expect(captions).toEqual([]);
  },
};

/**
 * Fixture `all-lines` in thermal ink, on 4 × 6 in label stock. The rules
 * are black and 1.5 pt. The lines wrap to fit the label.
 */
export const Thermal: Story = {
  args: {
    fixture: printFixture('printSignLine', 'all-lines'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl',
  },
  play: async ({ canvasElement }) => {
    const { lines } = await signLine(canvasElement, 'all-lines');
    const rule = getComputedStyle(lines[0] as Element);
    await expect(rule.borderBottomColor).toBe('rgb(0, 0, 0)');
    await expect(
      rule.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1.5pt');
  },
};
