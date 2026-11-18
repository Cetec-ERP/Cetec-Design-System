import { type PageSize } from '~/components/PrintPreview/pageSizes';
import { type PrintFixture } from '~/print/printFixtures';

/** One slot in a canvas layout, as the kit template stores it. */
export type CanvasSlotInput = {
  /** The slot name. Go writes it as `data-slot`. */
  name: string;
  /** Left edge in layout space, in the stock unit. */
  x: number;
  /** Top edge in layout space, in the stock unit. */
  y: number;
  /** Width in the stock unit. */
  width: number;
  /** Height in the stock unit. */
  height: number;
  /** Turns the slot content a quarter turn clockwise. */
  rotate?: 0 | 90;
  /** Draws a rule along the top edge. */
  rule?: boolean;
  /** The MICR line on a check face. */
  micr?: boolean;
  /** The author cannot move or change the slot. */
  locked?: boolean;
  /** The kit elements the slot holds, by name or as element inputs. */
  holds?: (string | Record<string, unknown>)[];
};

/** A canvas layout, as the kit template stores it. */
export type CanvasLayoutInput = {
  /** `check` or `label`. */
  canvas: string;
  /** The stock, as the printer feeds it. */
  stock: PageSize;
  /** `paper` or `thermal`. */
  ink: string;
  /** Turns the whole layout a quarter turn clockwise on the stock. */
  rotate: 0 | 90;
  /** The grid slot positions snap to. */
  grid: string;
  /** Perforation lines, as distances from the top of the layout. */
  perforations?: number[];
  /** The MICR clear band. Only the locked MICR slot prints in it. */
  micrBand?: { top: number; height: number };
  /** The list a label repeats over, or `off`. */
  repeat?: string;
  /** The items Go loops over when the label repeats. */
  items?: string[];
  /** The slots, in layout space. */
  slots: CanvasSlotInput[];
};

/** A box in the stock unit, measured from the top left of the stock. */
export type StockRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

/** Reads the canvas layout from a canvas fixture's input. */
export const canvasLayout = (fixture: PrintFixture): CanvasLayoutInput =>
  fixture.input as unknown as CanvasLayoutInput;

/** Layout width and height. A turned layout swaps the stock sides. */
export const layoutSize = (layout: CanvasLayoutInput) =>
  layout.rotate === 90
    ? { width: layout.stock.height, height: layout.stock.width }
    : { width: layout.stock.width, height: layout.stock.height };

/**
 * Maps a box in layout space to the stock, where the page is. A turned layout
 * turns a quarter turn clockwise, so its top edge lands on the right side of
 * the stock.
 */
export const layoutToStock = (
  box: { x: number; y: number; width: number; height: number },
  layout: CanvasLayoutInput,
): StockRect =>
  layout.rotate === 90
    ? {
        left: layout.stock.width - box.y - box.height,
        top: box.x,
        width: box.height,
        height: box.width,
      }
    : { left: box.x, top: box.y, width: box.width, height: box.height };

/**
 * Splits a canvas fixture into one fixture per canvas. A repeating label has
 * one canvas per item, and each prints on its own page.
 */
export const canvasPages = (fixture: PrintFixture): PrintFixture[] => {
  const doc = new DOMParser().parseFromString(fixture.html, 'text/html');
  const canvases = [...doc.body.children];
  if (canvases.length <= 1) return [fixture];
  return canvases.map((canvas) => ({ ...fixture, html: canvas.outerHTML }));
};
