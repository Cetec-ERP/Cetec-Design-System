import { expect, within } from 'storybook/test';

import { Grid, styled, VStack } from '@styled-system/jsx';

import { printFixture } from '~/print/printFixtureFiles';
import { buildPrintManifest } from '~/print/printManifest';
import { PrintFixtureView } from '~/storybook/print/PrintFixture';
import {
  declarationsToStyle,
  pageFooterCss,
  type PageFooterFormat,
} from '~/storybook/print/printStory';

import { Box } from '../Box';
import { CodeBlock } from '../CodeBlock';

import type { Meta, StoryObj } from '@storybook/react-vite';

const manifest = buildPrintManifest();

/** The footer declarations from the manifest, with token variables. */
const footerStyle = declarationsToStyle(manifest.pageFooter.declarations);

type PageFooterSpecProps = {
  /** Which footer to write. */
  format: PageFooterFormat;
  /** The footer text, as the browser fills in the page counters. */
  text: string;
};

/**
 * One page in normal ink and one in thermal ink, each with the page footer
 * in its bottom margin, then the `@page` rule the Go helper writes.
 */
const PageFooterSpec = ({ format, text }: PageFooterSpecProps) => (
  <VStack alignItems="stretch" gap="0">
    <Grid columns={2} gap="0">
      {(['normal-ink', 'thermal-ink'] as const).map((name) => (
        <PrintFixtureView
          key={name}
          fixture={printFixture('printDoc', name)}
          label={name === 'normal-ink' ? 'Normal ink' : 'Thermal ink'}
          footer={<styled.span style={footerStyle}>{text}</styled.span>}
        />
      ))}
    </Grid>
    <Box px="24" py="16">
      <CodeBlock
        title="@page rule the Go helper writes"
        language="css"
        code={pageFooterCss(manifest, format)}
      />
    </Box>
  </VStack>
);

/**
 * The page footer, the `print.pageFooter` text style. It prints page numbers,
 * such as "Page 2" or "Page 2 of 3", in an `@page` margin box.
 *
 * A margin box cannot carry a class. So the Go print helper reads the footer
 * declarations from `print-classes.json` and writes them into its `@page`
 * rule. The declarations use token variables with literal fallbacks. Margin
 * boxes read custom properties only from the `<html>` element, so the root
 * classes must go on `<html>`. Under `cetec-ink-thermal` the footer turns
 * black with no extra rule. The manifest also carries plain literal values for
 * places with no variables, such as a browser print footer template.
 *
 * In these stories a box in the bottom page margin stands in for the margin
 * box. It uses the manifest declarations, not the text style, so it shows
 * what Go writes. Go may swap "Page" and "of" for the company language.
 */
const meta = {
  title: 'Print/Page footer',
  component: PageFooterSpec,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    format: 'page',
    text: 'Page 2',
  },
  argTypes: {
    format: {
      control: 'inline-radio',
      options: ['page', 'pageOfPages'],
    },
  },
} satisfies Meta<typeof PageFooterSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The page number alone: "Page 2". */
export const Page: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [normal, thermal] = await canvas.findAllByText('Page 2');
    // 7.5 pt is 10 px at 96 px per inch.
    await expect(getComputedStyle(normal as Element).fontSize).toBe('10px');
    // paper.inkSoft is neutral.70, #6B6E76.
    await expect(getComputedStyle(normal as Element).color).toBe(
      'rgb(107, 110, 118)',
    );
    await expect(getComputedStyle(thermal as Element).color).toBe(
      'rgb(0, 0, 0)',
    );
  },
};

/** The page number with the page count: "Page 2 of 3". */
export const PageOfPages: Story = {
  args: {
    format: 'pageOfPages',
    text: 'Page 2 of 3',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const footers = await canvas.findAllByText('Page 2 of 3');
    await expect(footers).toHaveLength(2);
  },
};
