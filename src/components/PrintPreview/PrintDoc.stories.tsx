import { expect, within } from 'storybook/test';

import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { pageSizes } from './pageSizes';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * The document root, the `printDoc` recipe. It has no React component. The
 * Go print helper puts `cetec-printDoc` on the `<html>` element of every kit
 * document and adds `cetec-ink-thermal` for thermal label printers.
 *
 * The root sets the white sheet and the paper ink. `<html>` keeps the browser
 * text size, so 1 rem is 16 px, as in the app. `<body>` takes the body text
 * style, and each top-level block after the first gets 12 pt above it. So the
 * fixture HTML needs no classes of its own. Each story renders one
 * fixture from `src/recipes/printDoc.fixtures.json`, exactly as stored. The
 * page margins stand in for the `@page` margins Go writes.
 *
 * Switch the app theme to dark. The pages do not change.
 */
const meta = {
  title: 'Print/Document root',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'printDoc',
    fixture: printFixture('printDoc', 'normal-ink'),
    paper: 'letter',
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

/** Fixture `normal-ink`: a document on Letter paper in normal ink. */
export const NormalInk: Story = {
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('normal-ink'),
    );
    const text = await page.findByText(/Thank you for your order/);
    const style = getComputedStyle(text);
    // print.body is 8.5 pt, which is 11.33 px at 96 px per inch.
    await expect(style.fontSize).toBe('11.3333px');
    // paper.ink is neutral.100, #292A2E.
    await expect(style.color).toBe('rgb(41, 42, 46)');
    const root = canvasElement.querySelector('[data-fixture="normal-ink"]');
    await expect(root).not.toBeNull();
    // The paper token is white.
    await expect(getComputedStyle(root as Element).backgroundColor).toBe(
      'rgb(255, 255, 255)',
    );
  },
};

/**
 * Fixture `thermal-ink`: a label in thermal ink, on 4 × 6 in label stock.
 * Every paper ink is solid black.
 */
export const ThermalInk: Story = {
  args: {
    fixture: printFixture('printDoc', 'thermal-ink'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('thermal-ink'),
    );
    const text = await page.findByText(/Handle with care/);
    await expect(getComputedStyle(text).color).toBe('rgb(0, 0, 0)');
  },
};
