import { expect, within } from 'storybook/test';

import { pageSizes } from '~/components/PrintPreview/pageSizes';
import { printFixture } from '~/print/printFixtureFiles';
import { PrintFixtureSpec } from '~/storybook/print/PrintFixture';

import { Box } from '../Box';

import { Text } from './Text';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** Counts the rendered lines of an element's text. */
const renderedLines = (element: Element) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  const tops = new Set(
    [...range.getClientRects()]
      .filter((rect) => rect.width > 0)
      .map((rect) => Math.round(rect.top)),
  );
  return tops.size;
};

/**
 * The print look of `Text`, for the kit element `text`. It prints a note,
 * terms, payment instructions, or the closing line of a quote or invoice.
 *
 * The Go print helper writes the `text` recipe classes. A title is a `Text`
 * with `variant="title"` above the text. The kit always sets
 * `preserveLines`, so the line breaks of a contract text field print as they
 * are. Each paper story renders one fixture from
 * `src/recipes/text.fixtures.json`, exactly as stored.
 */
const meta = {
  title: 'Print/Text',
  component: PrintFixtureSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    recipe: 'text',
    fixture: printFixture('text', 'titled-note'),
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
 * The same blocks of words on screen, in the app theme. Use `variant` for
 * the look and `preserveLines` for text from a multi-line field.
 */
export const OnScreen: Story = {
  render: () => (
    <Box display="grid" gap="24" p="24" maxW="prose" bg="surface">
      <Box>
        <Text as="h3" variant="title">
          Note
        </Text>
        <Text as="p" variant="note" preserveLines>
          Parts ship in ESD bags. Lot traceability on request.
        </Text>
      </Box>
      <Box>
        <Text as="h3" variant="title">
          Terms
        </Text>
        <Text as="p" variant="terms" preserveLines>
          {
            'Claims must be made within 10 days of receipt. Returns need a return authorization number, and goods must come back in their original packing.\nPrices do not include taxes, duties, or freight unless this document lists them.'
          }
        </Text>
      </Box>
      <Text as="p" variant="closing" preserveLines>
        Thank you for your business.
      </Text>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const terms = await canvas.findByText(/Claims must be made/);
    await expect(getComputedStyle(terms).whiteSpace).toBe('pre-line');
    const title = await canvas.findByRole('heading', { name: 'Terms' });
    await expect(getComputedStyle(title).textTransform).toBe('uppercase');
  },
};

/** Fixture `titled-note`: a note with a title, on paper. */
export const TitledNote: Story = {
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('titled-note'),
    );
    const note = await page.findByText(/Parts ship in ESD bags/);
    // print.body is 8.5 pt, which is 11.33 px at 96 px per inch.
    await expect(getComputedStyle(note).fontSize).toBe('11.3333px');
    // paper.ink is neutral.100, #292A2E.
    await expect(getComputedStyle(note).color).toBe('rgb(41, 42, 46)');
    const title = await page.findByRole('heading', { name: 'Note' });
    const titleStyle = getComputedStyle(title);
    // print.capsLabel is 7 pt, which is 9.33 px.
    await expect(titleStyle.fontSize).toBe('9.33333px');
    await expect(titleStyle.textTransform).toBe('uppercase');
    await expect(titleStyle.borderBottomStyle).toBe('solid');
  },
};

/** Fixture `terms`: long terms in small print, on paper. */
export const Terms: Story = {
  args: {
    fixture: printFixture('text', 'terms'),
  },
  play: async ({ canvasElement }) => {
    const page = within(await within(canvasElement).findByLabelText('terms'));
    const terms = await page.findByText(/Claims must be made/);
    // print.smallPrint is 7.5 pt, which is 10 px.
    await expect(getComputedStyle(terms).fontSize).toBe('10px');
    // paper.inkSoft is neutral.70.
    await expect(getComputedStyle(terms).color).not.toBe('rgb(41, 42, 46)');
  },
};

/** Fixture `closing-line`: a closing line with no title, on paper. */
export const ClosingLine: Story = {
  args: {
    fixture: printFixture('text', 'closing-line'),
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('closing-line'),
    );
    const closing = await page.findByText('Thank you for your business.');
    const style = getComputedStyle(closing);
    await expect(style.fontFamily).toMatch(/Ruda/);
    // print.fieldValue is 9.5 pt, which is 12.67 px.
    await expect(style.fontSize).toBe('12.6667px');
  },
};

/**
 * Fixture `line-breaks`: payment instructions with three line breaks. They
 * print on four lines.
 */
export const LineBreaks: Story = {
  args: {
    fixture: printFixture('text', 'line-breaks'),
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('line-breaks'),
    );
    const value = await page.findByText(/Pay by wire transfer/);
    await expect(value.textContent?.split('\n')).toHaveLength(4);
    await expect(getComputedStyle(value).whiteSpace).toBe('pre-line');
    await expect(renderedLines(value)).toBe(4);
  },
};

/**
 * Fixture `titled-note` in thermal ink, on 4 × 6 in label stock. The title,
 * its rule, and the note are solid black.
 */
export const ThermalInk: Story = {
  args: {
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl',
  },
  play: async ({ canvasElement }) => {
    const page = within(
      await within(canvasElement).findByLabelText('titled-note'),
    );
    const note = await page.findByText(/Parts ship in ESD bags/);
    await expect(getComputedStyle(note).color).toBe('rgb(0, 0, 0)');
    const title = await page.findByRole('heading', { name: 'Note' });
    const titleStyle = getComputedStyle(title);
    await expect(titleStyle.color).toBe('rgb(0, 0, 0)');
    await expect(titleStyle.borderBottomColor).toBe('rgb(0, 0, 0)');
    // Thermal rules are at least 1.5 pt.
    await expect(
      getComputedStyle(title).getPropertyValue(
        '--cetec-border-widths-paper-rule',
      ),
    ).toBe('1.5pt');
  },
};
