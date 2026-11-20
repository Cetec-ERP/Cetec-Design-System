import { expect, waitFor } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** 2.4 in at 96 CSS px per inch. */
const cap = 230.4;

/** Waits for the image in a fixture story to load, then returns its size. */
const loadedSize = async (canvasElement: HTMLElement, fixture: string) => {
  const image = canvasElement.querySelector<HTMLImageElement>(
    `[data-fixture="${fixture}"] img.cetec-image`,
  );
  await expect(image).not.toBeNull();
  await waitFor(() => expect(image?.naturalWidth).toBeGreaterThan(0));
  const style = getComputedStyle(image as HTMLImageElement);
  return { width: parseFloat(style.width), height: parseFloat(style.height) };
};

/**
 * A contract image, the `image` recipe, for the kit element `image`. The Go
 * print helper writes the same markup for the screen and for paper. It has
 * no React component yet.
 *
 * The image keeps its aspect ratio and is at most 2.4 in on its long side.
 * When the field has a value but the file cannot be read, Go writes an empty
 * hairline box with the `broken` class. When the field is empty, Go writes
 * nothing.
 *
 * Each story renders one fixture from `src/recipes/image.fixtures.json` on a
 * Letter page. The fixture images are inline SVG, so the stories load nothing
 * from outside.
 */
const meta = {
  title: 'Print/Image',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'image',
    fixture: printFixture('image', 'part-photo'),
    paper: 'letter',
    fit: 'width',
    h: 'lg',
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

/** Fixture `part-photo`: a 1200 px photo scales down to the 2.4 in cap. */
export const PartPhoto: Story = {
  play: async ({ canvasElement }) => {
    const { width, height } = await loadedSize(canvasElement, 'part-photo');
    await expect(width).toBeCloseTo(cap, 1);
    // The photo is 1200 × 783, so the height keeps that ratio.
    await expect(height).toBeCloseTo((cap * 783) / 1200, 0);
  },
};

/** Fixture `wide-logo`: a wide logo is 2.4 in wide and short. */
export const WideLogo: Story = {
  args: {
    fixture: printFixture('image', 'wide-logo'),
  },
  play: async ({ canvasElement }) => {
    const { width, height } = await loadedSize(canvasElement, 'wide-logo');
    await expect(width).toBeCloseTo(cap, 1);
    await expect(height).toBeCloseTo(cap / 5, 0);
  },
};

/** Fixture `tall-photo`: the long side is the height, so it is 2.4 in high. */
export const TallPhoto: Story = {
  args: {
    fixture: printFixture('image', 'tall-photo'),
  },
  play: async ({ canvasElement }) => {
    const { width, height } = await loadedSize(canvasElement, 'tall-photo');
    await expect(height).toBeCloseTo(cap, 1);
    await expect(width).toBeCloseTo((cap * 600) / 900, 0);
  },
};

/**
 * Fixture `broken`: the file cannot be read. An empty hairline box takes the
 * place of the image. It is as wide as its slot, up to 2.4 in, and 4 by 3.
 */
export const Broken: Story = {
  args: {
    fixture: printFixture('image', 'broken'),
  },
  play: async ({ canvasElement }) => {
    const box = canvasElement.querySelector(
      '[data-fixture="broken"] .cetec-image',
    );
    await expect(box).not.toBeNull();
    await expect(box?.getAttribute('aria-label')).toBe('Part photo');
    const style = getComputedStyle(box as Element);
    await expect(style.borderTopStyle).toBe('solid');
    await expect(parseFloat(style.width)).toBeCloseTo(cap, 1);
    await expect(parseFloat(style.height)).toBeCloseTo((cap * 3) / 4, 1);
  },
};

/**
 * Fixture `broken` in thermal ink, on 4 × 6 in label stock.
 * The broken box outline is black and 1.5 pt.
 */
export const Thermal: Story = {
  args: {
    fixture: printFixture('image', 'broken'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl',
  },
  play: async ({ canvasElement }) => {
    const box = canvasElement.querySelector(
      '[data-fixture="broken"] .cetec-image',
    );
    await expect(box).not.toBeNull();
    const style = getComputedStyle(box as Element);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(
      style.getPropertyValue('--cetec-border-widths-paper-hairline').trim(),
    ).toBe('1.5pt');
  },
};

/** Fixture `part-photo` in thermal ink. The photo itself does not change. */
export const ThermalPhoto: Story = {
  args: {
    ...Thermal.args,
    fixture: printFixture('image', 'part-photo'),
  },
  play: async ({ canvasElement }) => {
    const { width } = await loadedSize(canvasElement, 'part-photo');
    await expect(width).toBeCloseTo(cap, 1);
  },
};
