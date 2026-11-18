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
 * A captioned value in a canvas slot: the kit element `label_field` and the
 * `labelField` recipe. It has no React component. It works only inside a
 * slot, so each story shows label fields on a check face or a label.
 *
 * - `caption`: the caps label over the value. Optional.
 * - `type`: `text` (default), `money`, `date`, or `amount_words`. Go formats
 *   the value. Money and dates use tabular figures. Words print in the body
 *   face and wrap.
 * - `size`: `normal` (default) or `large`.
 *
 * A value too long for its slot is cut at the slot edge in print. The slot
 * editor's overlay flags that slot in red.
 */
const meta = {
  title: 'Print/Label field',
  component: PrintCanvasFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'labelField',
    fixture: printFixture('labelField', 'check-face'),
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

const field = (canvasElement: HTMLElement, slot: string, part: string) => {
  const element = canvasElement.querySelector(
    `[data-slot="${slot}"] .cetec-labelField__${part}`,
  );
  if (!element) throw new Error(`Slot "${slot}" has no ${part}.`);
  return getComputedStyle(element);
};

/** 11 pt and 17 pt at 96 CSS px per inch. */
const normalSize = '14.6667px';
const largeSize = '22.6667px';

/**
 * Fixture `check-face`: the label fields on a check face in normal ink.
 * The check number and the amount are large. The amount in words wraps in
 * the body face.
 */
export const CheckFace: Story = {
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('labelField', 'check-face'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const caption = field(canvasElement, 'payee', 'caption');
    await expect(caption.textTransform).toBe('uppercase');
    await expect(caption.color).toBe('rgb(41, 42, 46)');
    await expect(field(canvasElement, 'payee', 'value').fontSize).toBe(
      normalSize,
    );
    const amount = field(canvasElement, 'amount', 'value');
    await expect(amount.fontSize).toBe(largeSize);
    await expect(amount.fontVariantNumeric).toBe('tabular-nums');
    await expect(amount.fontVariationSettings).toContain('"MONO" 1');
    const words = field(canvasElement, 'words', 'value');
    await expect(words.fontVariationSettings).toContain('"MONO" 0');
    await expect(words.whiteSpace).toBe('normal');
    // Every value fits its slot.
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
  },
};

/** Fixture `check-face-thermal`: the same fields in thermal ink. */
export const CheckFaceThermal: Story = {
  args: {
    fixture: printFixture('labelField', 'check-face-thermal'),
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(
      printFixture('labelField', 'check-face-thermal'),
    );
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(field(canvasElement, 'payee', 'caption').color).toBe(
      'rgb(0, 0, 0)',
    );
    await expect(field(canvasElement, 'payee', 'value').color).toBe(
      'rgb(0, 0, 0)',
    );
  },
};

/**
 * Fixture `packing-label`: the label fields on the 4 × 6 in packing label in
 * thermal ink. The part number and the ship quantity are large.
 */
export const PackingLabel: Story = {
  args: {
    fixture: printFixture('labelField', 'packing-label'),
    h: '3xl',
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('labelField', 'packing-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const part = field(canvasElement, 'part', 'value');
    await expect(part.fontSize).toBe(largeSize);
    await expect(part.color).toBe('rgb(0, 0, 0)');
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
  },
};

/** Fixture `packing-label-paper`: the same fields in normal ink. */
export const PackingLabelPaper: Story = {
  args: {
    fixture: printFixture('labelField', 'packing-label-paper'),
    h: '3xl',
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(
      printFixture('labelField', 'packing-label-paper'),
    );
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(field(canvasElement, 'part', 'value').color).toBe(
      'rgb(41, 42, 46)',
    );
  },
};

/**
 * Fixture `variants`: each type and size, a field with no caption, and two
 * values too long for their slots. The slots keep their size and cut the
 * values, and the editor flags both slots.
 */
export const Variants: Story = {
  args: {
    fixture: printFixture('labelField', 'variants'),
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('labelField', 'variants'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(
      canvasElement.querySelector(
        '[data-slot="no_caption"] .cetec-labelField__caption',
      ),
    ).toBeNull();
    await expect(field(canvasElement, 'date', 'value').fontVariantNumeric).toBe(
      'tabular-nums',
    );
    await expect(await flaggedSlots(canvasElement)).toEqual([
      'too_long',
      'words_long',
    ]);
  },
};
