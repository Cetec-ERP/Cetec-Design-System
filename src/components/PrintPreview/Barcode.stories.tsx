import { expect, within } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import {
  expectSlotsMatchOverlay,
  expectSlotsOnGrid,
  flaggedSlots,
} from '~/storybook/print/canvasChecks';
import { PrintCanvasFixtureSpec } from '~/storybook/print/PrintCanvasFixture';
import { canvasLayout } from '~/storybook/print/printCanvasStory';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * A barcode: the kit element `barcode` and the `barcode` recipe. It has no
 * React component. Go encodes the value and draws the bars as inline SVG.
 * The design system owns the frame and the text under the bars.
 *
 * - `symbology`: `code128` (default), `qr`, or `datamatrix`.
 * - A Code 128 prints its value under the bars in the mono face.
 * - In flow, every code has one fixed height, 5/8 in.
 * - In a slot, a code fills the slot height. A Code 128 uses the widest bars
 *   that fit the slot width, in whole printer dots.
 * - Bars are solid black on every ink.
 * - When Go cannot encode the value, the preview shows a box with the
 *   message. The value is never changed.
 *
 * The bars in these stories are the output of the Go barcode module that
 * Cetec-ERP uses, `github.com/boombuler/barcode`, so they scan.
 */
const meta = {
  title: 'Print/Barcode',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'barcode',
    fixture: printFixture('barcode', 'code128'),
    size: { width: 4, height: 1.5, unit: 'in' },
    margins: 0.25,
    h: 'md',
  },
  argTypes: {
    fixture: { control: false },
    recipe: { control: false },
    size: { control: false },
    footer: { control: false },
    paper: { table: { disable: true } },
  },
} satisfies Meta<typeof PrintFixtureSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

const part = (canvasElement: HTMLElement, name: string, scope = '') => {
  const element = canvasElement.querySelector(
    `${scope} .cetec-barcode__${name}`,
  );
  if (!element) throw new Error(`No barcode ${name} in "${scope}".`);
  return element as HTMLElement;
};

/** 5/8 in at 96 CSS px per inch. */
const flowHeight = '60px';

/**
 * Fixture `code128`: a Code 128 in the flow of a document. The value prints
 * under the bars in the mono face.
 */
export const Code128: Story = {
  play: async ({ canvasElement }) => {
    await within(canvasElement).findAllByText('SO7731-1');
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.fill).toBe('rgb(0, 0, 0)');
    const text = getComputedStyle(part(canvasElement, 'text'));
    await expect(text.fontVariationSettings).toContain('"MONO" 1');
    await expect(text.color).toBe('rgb(41, 42, 46)');
  },
};

/** Fixture `code128-thermal`: the same code in thermal ink. */
export const Code128Thermal: Story = {
  args: {
    fixture: printFixture('barcode', 'code128-thermal'),
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement).findAllByText('SO7731-1');
    await expect(getComputedStyle(part(canvasElement, 'bars')).fill).toBe(
      'rgb(0, 0, 0)',
    );
    await expect(getComputedStyle(part(canvasElement, 'text')).color).toBe(
      'rgb(0, 0, 0)',
    );
  },
};

/** Fixture `qr`: a QR code in flow. It is square and has no text. */
export const Qr: Story = {
  args: {
    fixture: printFixture('barcode', 'qr'),
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByRole('img', { name: /^QR code/ });
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.width).toBe(flowHeight);
    await expect(
      canvasElement.querySelector('.cetec-barcode__text'),
    ).toBeNull();
  },
};

/** Fixture `datamatrix`: a Data Matrix code in flow. */
export const DataMatrix: Story = {
  args: {
    fixture: printFixture('barcode', 'datamatrix'),
  },
  play: async ({ canvasElement }) => {
    await within(canvasElement).findByRole('img', { name: /^Data Matrix/ });
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.width).toBe(flowHeight);
  },
};

/**
 * Fixture `in-slot`: each symbology in a slot on a 4 × 3 in label in
 * thermal ink. Each code fills the slot height below any label field in the
 * slot. A Code 128 uses the widest bars that fit, in whole dots at 203 dpi.
 * A square code is the largest square that fits.
 */
export const InSlot: Story = {
  render: () => (
    <PrintCanvasFixtureSpec
      recipe="barcode"
      fixture={printFixture('barcode', 'in-slot')}
      h="2xl"
    />
  ),
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('barcode', 'in-slot'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const dpi = layout.dpi ?? 203;
    for (const slot of layout.slots) {
      const content = part(canvasElement, 'root', `[data-slot="${slot.name}"]`)
        .parentElement as HTMLElement;
      const style = getComputedStyle(content);
      const innerWidth =
        content.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);
      const innerBottom =
        content.getBoundingClientRect().bottom -
        parseFloat(style.paddingBottom) *
          (content.getBoundingClientRect().height / content.offsetHeight);
      const root = part(canvasElement, 'root', `[data-slot="${slot.name}"]`);
      // The code fills the slot height.
      await expect(
        Math.abs(root.getBoundingClientRect().bottom - innerBottom),
      ).toBeLessThan(1.5);
      const bars = part(canvasElement, 'bars', `[data-slot="${slot.name}"]`);
      if (bars.getAttribute('preserveAspectRatio') !== 'none') continue;
      // The widest whole-dot module that fits the width.
      const columns = Number(bars.getAttribute('viewBox')?.split(' ')[2]);
      const widthPx = parseFloat(bars.getAttribute('width') ?? '0') * 96;
      const dots = Math.round((widthPx / 96 / columns) * dpi);
      await expect(widthPx).toBeLessThanOrEqual(innerWidth + 0.5);
      await expect((((dots + 1) * columns) / dpi) * 96).toBeGreaterThan(
        innerWidth,
      );
    }
  },
};

/**
 * Fixture `in-slot-paper`: the same slots in normal ink, in whole dots at
 * 300 dpi.
 */
export const InSlotPaper: Story = {
  render: () => (
    <PrintCanvasFixtureSpec
      recipe="barcode"
      fixture={printFixture('barcode', 'in-slot-paper')}
      h="2xl"
    />
  ),
  play: async ({ canvasElement }) => {
    const layout = canvasLayout(printFixture('barcode', 'in-slot-paper'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(
      getComputedStyle(part(canvasElement, 'bars', '[data-slot="po"]')).fill,
    ).toBe('rgb(0, 0, 0)');
  },
};

/**
 * Fixture `error`: the preview when Go cannot encode the value. The box
 * shows the message in the alert ink.
 */
export const EncodeError: Story = {
  args: {
    fixture: printFixture('barcode', 'error'),
  },
  play: async ({ canvasElement }) => {
    const alert = await within(canvasElement).findByRole('alert');
    await expect(alert.textContent).toBe(
      'Code 128 cannot encode this character.',
    );
    const style = getComputedStyle(alert);
    await expect(style.color).toBe('rgb(229, 5, 19)');
    await expect(style.borderTopStyle).toBe('solid');
    await expect(
      canvasElement.querySelector('.cetec-barcode__bars'),
    ).toBeNull();
  },
};
