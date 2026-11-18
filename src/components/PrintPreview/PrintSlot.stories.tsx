import { expect } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import {
  expectSlotsMatchOverlay,
  expectSlotsOnGrid,
  flaggedSlots,
} from '~/storybook/print/canvasChecks';
import { PrintCanvasFixtureSpec } from '~/storybook/print/PrintCanvasFixture';
import { canvasLayout } from '~/storybook/print/printCanvasStory';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * A slot on a canvas layout: the `printSlot` recipe. It has no React
 * component. Go writes each slot with its position and size in inches as
 * inline values, and `data-slot` with the slot name.
 *
 * - `rotate: 90` turns the content a quarter turn clockwise. The slot box
 *   stays where it is placed.
 * - `rule: true` draws a rule along the top edge, 1 pt on paper and 1.5 pt in
 *   thermal ink.
 * - `micr: true` is Cetec's locked MICR slot on a check face.
 * - A slot never grows. Content that does not fit is clipped.
 *
 * See "Print/Canvas" for whole checks and labels.
 */
const meta = {
  title: 'Print/Slot',
  component: PrintCanvasFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printSlot',
    fixture: printFixture('printSlot', 'variants'),
    showSlots: true,
    h: 'xl',
  },
  argTypes: {
    fixture: { control: false },
    recipe: { control: false },
  },
} satisfies Meta<typeof PrintCanvasFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

const slotContent = (canvasElement: HTMLElement, name: string) => {
  const content = canvasElement.querySelector(
    `[data-slot="${name}"] .cetec-printSlot__content`,
  );
  if (!content) throw new Error(`Slot "${name}" has no content.`);
  return content as HTMLElement;
};

/**
 * Fixture `variants`: each slot variant on a 4 × 2 in label in normal ink.
 * The last slot's text is too long. The slot clips it and keeps its size.
 */
export const Variants: Story = {
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printSlot', 'variants'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual(['clipped']);
    // Slot text keeps the print reset: no paragraph margins.
    const paragraph = slotContent(canvasElement, 'plain').querySelector('p');
    await expect(getComputedStyle(paragraph as Element).marginBottom).toBe(
      '0px',
    );
    // The clipped slot holds more than it shows.
    const clipped = slotContent(canvasElement, 'clipped');
    await expect(clipped.scrollHeight).toBeGreaterThan(clipped.clientHeight);
    await expect(getComputedStyle(clipped).overflow).toBe('hidden');
    // The turned slot's content is turned a quarter turn.
    const turned = slotContent(canvasElement, 'turned');
    await expect(getComputedStyle(turned).transform).toBe(
      'matrix(0, 1, -1, 0, 0, 0)',
    );
    // Paper ink: the rule is 1 pt in the ink color.
    const ruled = canvasElement.querySelector('[data-slot="ruled"]');
    const style = getComputedStyle(ruled as Element);
    await expect(
      style.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1pt');
    await expect(style.borderTopColor).toBe('rgb(41, 42, 46)');
  },
};

/**
 * Fixture `variants-thermal`: the same slots in thermal ink. Text and rules
 * are solid black, and the rule is 1.5 pt.
 */
export const VariantsThermal: Story = {
  args: {
    fixture: printFixture('printSlot', 'variants-thermal'),
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printSlot', 'variants-thermal'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    const ruled = canvasElement.querySelector('[data-slot="ruled"]');
    const style = getComputedStyle(ruled as Element);
    await expect(
      style.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1.5pt');
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(
      getComputedStyle(slotContent(canvasElement, 'plain')).color,
    ).toBe('rgb(0, 0, 0)');
  },
};

/**
 * Fixture `micr`: the locked MICR slot in the clear band of a check face.
 * The line is solid black on every ink, does not wrap, and sits against the
 * slot's right edge with no inset. The Go print path sets the MICR font, so
 * the story shows the mono face.
 */
export const Micr: Story = {
  args: {
    fixture: printFixture('printSlot', 'micr'),
    h: 'md',
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printSlot', 'micr'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const content = slotContent(canvasElement, 'micr');
    const style = getComputedStyle(content);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.whiteSpace).toBe('nowrap');
    await expect(style.alignItems).toBe('flex-end');
    await expect(style.paddingRight).toBe('0px');
  },
};
