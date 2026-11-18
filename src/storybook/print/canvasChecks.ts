import { expect, waitFor } from 'storybook/test';

import { type CanvasLayoutInput } from './printCanvasStory';

const close = (a: number, b: number) => Math.abs(a - b) <= 1;

/**
 * Checks that every slot Go writes lines up with the editor overlay box for
 * it, on every canvas page, within one screen pixel. The overlay is placed
 * from the layout input through `usePrintPage`, so this also checks that the
 * fixture HTML matches its input. For story play functions.
 */
export const expectSlotsMatchOverlay = async (
  canvasElement: HTMLElement,
  layout: CanvasLayoutInput,
) => {
  const pages = await waitFor(() => {
    const found = [...canvasElement.querySelectorAll('[data-canvas-page]')];
    if (found.length === 0) throw new Error('No canvas page yet.');
    return found;
  });
  for (const page of pages) {
    for (const slot of layout.slots) {
      const element = page.querySelector(`[data-slot="${slot.name}"]`);
      const overlay = page.querySelector(`[data-overlay-slot="${slot.name}"]`);
      await expect(element, `slot ${slot.name}`).not.toBeNull();
      await expect(overlay, `overlay ${slot.name}`).not.toBeNull();
      const a = (element as Element).getBoundingClientRect();
      const b = (overlay as Element).getBoundingClientRect();
      const matches =
        close(a.left, b.left) &&
        close(a.top, b.top) &&
        close(a.width, b.width) &&
        close(a.height, b.height);
      await expect(
        matches,
        `slot ${slot.name} at ${JSON.stringify(a)}, overlay at ${JSON.stringify(b)}`,
      ).toBe(true);
    }
  }
};

/** Checks that every slot position and size is on the 1/64 in grid. */
export const expectSlotsOnGrid = async (layout: CanvasLayoutInput) => {
  for (const slot of layout.slots) {
    for (const value of [slot.x, slot.y, slot.width, slot.height]) {
      await expect(Number.isInteger(value * 64), `${slot.name}: ${value}`).toBe(
        true,
      );
    }
  }
};
