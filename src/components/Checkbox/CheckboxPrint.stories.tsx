import { expect, within } from 'storybook/test';

import { pageSizes } from '~/components/PrintPreview/pageSizes';
import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import type { Meta, StoryObj } from '@storybook/react-vite';

type IconName = 'checkbox' | 'checkbox-checked';

/** Reads the path of a design system icon from `public/svgs`. */
const iconPath = async (name: IconName) => {
  const response = await fetch(`/svgs/${name}.svg`);
  const source = await response.text();
  return /<path d="([^"]*)"/.exec(source)?.[1];
};

/** Finds the printed boxes on a fixture page. */
const findBoxes = async (canvasElement: HTMLElement, label: string) => {
  const page = await within(canvasElement).findByLabelText(label);
  return [
    ...page.querySelectorAll<SVGSVGElement>('svg.cetec-checkbox__indicator'),
  ];
};

/** Checks that a printed box draws the named icon, path for path. */
const expectIcon = async (box: SVGSVGElement | undefined, name: IconName) => {
  await expect(box).toBeDefined();
  await expect(box?.dataset.icon).toBe(name);
  await expect(box?.querySelector('path')?.getAttribute('d')).toBe(
    await iconPath(name),
  );
};

/**
 * The print look of `Checkbox`, for the kit element `checkbox`. It prints a
 * box to tick by hand, or a box ticked from a yes/no field.
 *
 * The Go print helper writes static markup with no input: the `checkbox`
 * recipe's `container`, one icon in the `indicator` slot, and the text in
 * the `label` slot. The icon is the design system `checkbox` icon for an
 * empty box and `checkbox-checked` for a ticked one. Go inlines the icon
 * SVG, because the PDF renderer may not load the icon sprite.
 *
 * The box is 10 pt, in paper ink. Thermal ink prints it solid black. The
 * label carries the meaning, so the box never stands alone. Each story
 * renders one fixture from `src/recipes/checkbox.fixtures.json`, exactly as
 * stored.
 */
const meta = {
  title: 'Print/Checkbox',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'checkbox',
    fixture: printFixture('checkbox', 'empty-boxes'),
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

/**
 * Fixture `empty-boxes`: three empty boxes to tick by hand, as on the
 * Inspection Label. Each box is in its own cell.
 */
export const EmptyBoxes: Story = {
  play: async ({ canvasElement }) => {
    const boxes = await findBoxes(canvasElement, 'empty-boxes');
    await expect(boxes).toHaveLength(3);
    for (const box of boxes) await expectIcon(box, 'checkbox');
    const page = within(
      await within(canvasElement).findByLabelText('empty-boxes'),
    );
    for (const label of ['Rework', 'Use as is', 'Scrap']) {
      await expect(await page.findByText(label)).toBeVisible();
    }
    const style = getComputedStyle(boxes[0] as Element);
    // paper.tickBox is 16 pt, which is 21.33 px at 96 px per inch. Layout
    // rounds it to a 64th of a pixel.
    await expect(parseFloat(style.width)).toBeCloseTo(21.33, 1);
    // paper.ink is neutral.100, #292A2E.
    await expect(style.fill).toBe('rgb(41, 42, 46)');
  },
};

/** Fixture `checked-field`: a box ticked from a yes/no field that is true. */
export const CheckedField: Story = {
  args: {
    fixture: printFixture('checkbox', 'checked-field'),
  },
  play: async ({ canvasElement }) => {
    const boxes = await findBoxes(canvasElement, 'checked-field');
    await expect(boxes).toHaveLength(1);
    await expectIcon(boxes[0], 'checkbox-checked');
  },
};

/** Fixture `empty-field`: an empty box from a yes/no field that is false. */
export const EmptyField: Story = {
  args: {
    fixture: printFixture('checkbox', 'empty-field'),
  },
  play: async ({ canvasElement }) => {
    const boxes = await findBoxes(canvasElement, 'empty-field');
    await expect(boxes).toHaveLength(1);
    await expectIcon(boxes[0], 'checkbox');
  },
};

/**
 * Fixture `thermal-ink`: a ticked and an empty box in thermal ink, on
 * 4 × 6 in label stock. Both icons print solid black.
 */
export const ThermalInk: Story = {
  args: {
    fixture: printFixture('checkbox', 'thermal-ink'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl',
  },
  play: async ({ canvasElement }) => {
    const boxes = await findBoxes(canvasElement, 'thermal-ink');
    await expect(boxes).toHaveLength(2);
    await expectIcon(boxes[0], 'checkbox-checked');
    await expectIcon(boxes[1], 'checkbox');
    for (const box of boxes) {
      await expect(getComputedStyle(box).fill).toBe('rgb(0, 0, 0)');
    }
    const page = within(
      await within(canvasElement).findByLabelText('thermal-ink'),
    );
    const label = await page.findByText('First article');
    await expect(getComputedStyle(label).color).toBe('rgb(0, 0, 0)');
  },
};
