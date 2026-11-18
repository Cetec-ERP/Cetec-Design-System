import { expect, waitFor } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import {
  expectSlotsMatchOverlay,
  expectSlotsOnGrid,
} from '~/storybook/print/canvasChecks';
import { PrintCanvasFixtureSpec } from '~/storybook/print/PrintCanvasFixture';
import { canvasLayout } from '~/storybook/print/printCanvasStory';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * Canvas layouts for checks and labels: the `printCanvas` and `printSlot`
 * recipes. They have no React component. The author places slots on a
 * 1/64 in grid, and Go writes the canvas with the same classes.
 *
 * - The canvas is the stock. Go sets its size in inches as inline values.
 * - Each slot is placed in the canvas by inline `left`, `top`, `width`, and
 *   `height` values. The class carries the look, not the position. A slot
 *   clips its content and never grows.
 * - `rotate: 90` turns a whole layout, or the content of one slot.
 * - Ink comes from the document root, as on every kit document.
 *
 * The dashed boxes, name tags, perforations, and striped MICR band are the
 * slot editor's overlay. They are not printed. The overlay goes in the
 * `overlay` of each `PrintPage` and reads the page size from `usePrintPage`,
 * so the app's editor can draw the same boxes over these slots. Turn it off
 * with the `showSlots` control to see the printed page.
 *
 * Slot content is plain text here. The kit elements in each slot, such as
 * `LabelField` and `Barcode`, have their own fixtures and stories.
 */
const meta = {
  title: 'Print/Canvas',
  component: PrintCanvasFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printCanvas',
    fixture: printFixture('printCanvas', 'check'),
    showSlots: true,
  },
  argTypes: {
    fixture: { control: false },
    recipe: { control: false },
  },
} satisfies Meta<typeof PrintCanvasFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fixture `check`: today's default check on one Letter sheet. A window stub
 * on top, the check face in the middle, and the remittance below.
 * Perforations are at 3.5 in and 7 in. Only the locked MICR slot prints in
 * the clear band, the bottom 5/8 in of the face.
 */
export const Check: Story = {
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'check'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const band = layout.micrBand;
    await expect(band).toBeDefined();
    if (!band) return;
    // Only the MICR slot touches the clear band.
    const inBand = layout.slots.filter(
      (slot) =>
        slot.y < band.top + band.height && slot.y + slot.height > band.top,
    );
    await expect(inBand.map((slot) => slot.name)).toEqual(['micr']);
    const micr = canvasElement.querySelector(
      '[data-slot="micr"] .cetec-printSlot__content',
    );
    await expect(micr).not.toBeNull();
    const style = getComputedStyle(micr as Element);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.whiteSpace).toBe('nowrap');
  },
};

/**
 * Fixture `packing-label`: the order line packing label on 4 × 6 in stock,
 * in thermal ink. Slots with a top rule split it into sections. Every ink is
 * solid black, and rules are 1.5 pt.
 */
export const PackingLabel: Story = {
  args: {
    fixture: printFixture('printCanvas', 'packing-label'),
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'packing-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const part = canvasElement.querySelector('[data-slot="part"]');
    await expect(part).not.toBeNull();
    const style = getComputedStyle(part as Element);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    // Chromium rounds drawn widths, so read the token value.
    await expect(
      style.getPropertyValue('--cetec-border-widths-paper-rule').trim(),
    ).toBe('1.5pt');
    await expect(getComputedStyle(part as Element).color).toBe('rgb(0, 0, 0)');
  },
};

/**
 * Fixture `turned-label`: a carton label turned 90°. The stock is 4 × 6 in
 * as the printer feeds it, so the layout is 6 × 4 in, turned a quarter turn
 * clockwise. The `lot` slot is also turned 90° inside the layout. The
 * overlay maps layout positions to the stock the same way.
 */
export const TurnedLabel: Story = {
  args: {
    fixture: printFixture('printCanvas', 'turned-label'),
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'turned-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    // The layout's top slot lands along the right edge of the stock.
    const part = canvasElement.querySelector('[data-slot="part"]');
    const sheet = canvasElement.querySelector('[data-canvas-page="1"]');
    await expect(part).not.toBeNull();
    const partBox = (part as Element).getBoundingClientRect();
    const sheetBox = (sheet as Element).getBoundingClientRect();
    await expect(Math.abs(partBox.right - sheetBox.right)).toBeLessThan(1);
    await expect(partBox.height).toBeGreaterThan(partBox.width);
  },
};

/**
 * Fixture `serial-labels`: one layout that repeats over `serials`, on 3 × 1
 * in stock in thermal ink. Go builds the loop and writes one canvas per
 * item, and each canvas starts a new page. Two serials print two labels.
 */
export const SerialLabels: Story = {
  args: {
    fixture: printFixture('printCanvas', 'serial-labels'),
    h: 'xl',
  },
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'serial-labels'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const pages = await waitFor(() => {
      const found = canvasElement.querySelectorAll('[data-canvas-page]');
      if (found.length !== 2) throw new Error('Expected two pages.');
      return [...found];
    });
    await expect(pages[0]?.textContent).toContain('SN-26450118');
    await expect(pages[1]?.textContent).toContain('SN-26450119');
    // In print, every canvas but the last breaks the page after it.
    const fixture = printFixture('printCanvas', 'serial-labels');
    const probe = document.createElement('div');
    probe.className = 'cetec-printDoc';
    probe.innerHTML = fixture.html;
    document.body.append(probe);
    const [first, second] = [...probe.children];
    try {
      await expect(getComputedStyle(first as Element).breakAfter).toBe('page');
      await expect(getComputedStyle(second as Element).breakAfter).toBe('auto');
    } finally {
      probe.remove();
    }
  },
};
