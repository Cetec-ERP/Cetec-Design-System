import { type ReactNode } from 'react';

import { expect, within } from 'storybook/test';

import { cx } from '@styled-system/css';
import { Grid, HStack, styled, VStack } from '@styled-system/jsx';

import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';

import { type PageSize } from './pageSizes';
import { PrintPage } from './PrintPage';
import { PrintPreview } from './PrintPreview';

import type { Meta, StoryObj } from '@storybook/react-vite';

/** The root class the Go print helper puts on every printed document. */
const printDocClass = 'cetec-printDoc';
/** The class the Go print helper adds for thermal label printers. */
const thermalClass = 'cetec-ink-thermal';

type Ink = 'normal' | 'thermal';

const sheetSize: PageSize = { width: 4.5, height: 6.5, unit: 'in' };

/**
 * The print foundation: paper inks, print text styles in points, and rule
 * widths. Printed documents use them through two root classes.
 *
 * - `cetec-printDoc` goes on the document root. Recipes read it as the
 *   `_printDoc` condition. Inside it, semantic colors reset to their light
 *   values, so paper stays white in dark mode.
 * - `cetec-ink-thermal` goes next to it for thermal label printers. Recipes
 *   read it as the `_thermal` condition. Every paper ink turns solid black,
 *   and rules are at least 1.5 pt.
 *
 * Switch the app theme to dark. The sheets do not change.
 */
const meta = {
  title: 'Print/Foundation',
  component: PrintPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    size: sheetSize,
  },
} satisfies Meta<typeof PrintPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A document root, as the Go print helper writes it. The outer element stands
 * in for `<html>` and the inner one for `<body>`, which takes the body text
 * style from the root.
 */
const PaperRoot = ({ ink, children }: { ink: Ink; children: ReactNode }) => (
  <Box
    className={cx(printDocClass, ink === 'thermal' && thermalClass)}
    h="full"
    p="24"
  >
    <styled.div>{children}</styled.div>
  </Box>
);

/** A section heading on the sheet. */
const SheetHeading = ({ children }: { children: ReactNode }) => (
  <Box
    textStyle="print.capsLabel"
    color="paper.ink"
    pb="4"
    borderBottomWidth="paper.rule"
    borderBottomStyle="solid"
    borderColor="paper.hairline"
  >
    {children}
  </Box>
);

/** One row that names a token on the left and shows it on the right. */
const SpecRow = ({ name, children }: { name: string; children: ReactNode }) => (
  <HStack alignItems="baseline" gap="12">
    <Box textStyle="print.smallPrint" fontFamily="mono" w="128" flexShrink="0">
      {name}
    </Box>
    <Box flex="1" minW="0">
      {children}
    </Box>
  </HStack>
);

const TextStyleRows = () => (
  <VStack alignItems="stretch" gap="6">
    <SheetHeading>Text styles</SheetHeading>
    <SpecRow name="print.title · 20 pt">
      <Box textStyle="print.title">Invoice</Box>
    </SpecRow>
    <SpecRow name="print.total · 14 pt">
      <Box textStyle="print.total">$12,480.00</Box>
    </SpecRow>
    <SpecRow name="print.fieldValue · 9.5 pt">
      <Box textStyle="print.fieldValue">Net 30</Box>
    </SpecRow>
    <SpecRow name="print.body · 8.5 pt">
      <Box textStyle="print.body">Aluminum bracket, 4 in</Box>
    </SpecRow>
    <SpecRow name="print.smallPrint · 7.5 pt">
      <Box textStyle="print.smallPrint">Prices valid for 30 days.</Box>
    </SpecRow>
    <SpecRow name="print.capsLabel · 7 pt">
      <Box textStyle="print.capsLabel">Due date</Box>
    </SpecRow>
  </VStack>
);

const InkRows = () => (
  <VStack alignItems="stretch" gap="6">
    <SheetHeading>Paper inks</SheetHeading>
    <SpecRow name="paper.ink">
      <HStack gap="8">
        <Box w="16" h="16" bg="paper.ink" />
        <Box textStyle="print.body">Main text and strong rules</Box>
      </HStack>
    </SpecRow>
    <SpecRow name="paper.inkSoft">
      <HStack gap="8">
        <Box w="16" h="16" bg="paper.inkSoft" />
        <Box textStyle="print.body" color="paper.inkSoft">
          Labels and secondary text
        </Box>
      </HStack>
    </SpecRow>
    <SpecRow name="paper.hairline">
      <HStack gap="8">
        <Box w="16" h="16" bg="paper.hairline" />
        <Box textStyle="print.body">Rules between rows</Box>
      </HStack>
    </SpecRow>
    <SpecRow name="paper.inkAlert">
      <HStack gap="8">
        <Box w="16" h="16" bg="paper.inkAlert" />
        <Box textStyle="print.body" color="paper.inkAlert">
          −$240.00 overdue
        </Box>
      </HStack>
    </SpecRow>
  </VStack>
);

const RuleRows = () => (
  <VStack alignItems="stretch" gap="6">
    <SheetHeading>Rules</SheetHeading>
    <SpecRow name="paper.hairline · 0.5 pt">
      <Box
        data-rule="hairline"
        borderTopWidth="paper.hairline"
        borderTopStyle="solid"
        borderColor="paper.ink"
        mt="4"
      />
    </SpecRow>
    <SpecRow name="paper.rule · 1 pt">
      <Box
        data-rule="rule"
        borderTopWidth="paper.rule"
        borderTopStyle="solid"
        borderColor="paper.ink"
        mt="4"
      />
    </SpecRow>
  </VStack>
);

const ResetRows = () => (
  <VStack alignItems="stretch" gap="6">
    <SheetHeading>Semantic colors</SheetHeading>
    <Box bg="surface.sunken" p="6" borderRadius="2">
      <Text size="12" color="text.subtle">
        Design-system text reads its light colors on paper.
      </Text>
    </Box>
  </VStack>
);

/** Every token on one sheet, in the given ink. */
const FoundationSheet = ({ ink }: { ink: Ink }) => (
  <PaperRoot ink={ink}>
    <VStack alignItems="stretch" gap="16">
      <TextStyleRows />
      <InkRows />
      <RuleRows />
      <ResetRows />
    </VStack>
  </PaperRoot>
);

/** A sheet at true size (96 CSS pixels per inch), with a caption above it. */
const TrueSizeSheet = ({
  label,
  size,
  h = '3xl',
  children,
}: {
  label: string;
  size: PageSize;
  /** Height of the preview area. Fits the sheet plus its padding. */
  h?: BoxProps['h'];
  children: ReactNode;
}) => (
  <VStack alignItems="stretch" gap="0">
    <Box px="24" pt="16" textStyle="body.sm" color="text.subtle">
      {label}
    </Box>
    <Box h={h}>
      <PrintPreview fit={1} aria-label={label}>
        <PrintPage size={size}>{children}</PrintPage>
      </PrintPreview>
    </Box>
  </VStack>
);

/**
 * Normal ink and thermal ink side by side. In thermal ink every ink is solid
 * black and both rules are 1.5 pt.
 */
export const Foundation: Story = {
  render: (args) => (
    <Grid columns={2} gap="0">
      <TrueSizeSheet label="Normal ink" size={args.size}>
        <FoundationSheet ink="normal" />
      </TrueSizeSheet>
      <TrueSizeSheet label="Thermal ink" size={args.size}>
        <FoundationSheet ink="thermal" />
      </TrueSizeSheet>
    </Grid>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const normal = canvas.getByLabelText('Normal ink');
    const thermal = canvas.getByLabelText('Thermal ink');
    const ruleWidth = (root: HTMLElement, rule: string) =>
      getComputedStyle(root.querySelector(`[data-rule="${rule}"]`) ?? root)
        .getPropertyValue(`--cetec-border-widths-paper-${rule}`)
        .trim();
    await expect(ruleWidth(normal, 'hairline')).toBe('0.5pt');
    await expect(ruleWidth(normal, 'rule')).toBe('1pt');
    await expect(ruleWidth(thermal, 'hairline')).toBe('1.5pt');
    await expect(ruleWidth(thermal, 'rule')).toBe('1.5pt');
  },
};

/**
 * Paper stays white in dark mode. The text on the sheet is a design-system
 * `Text` with a semantic color. Inside `cetec-printDoc` it reads the light
 * value.
 */
export const SemanticReset: Story = {
  args: {
    size: { width: 4.5, height: 1.75, unit: 'in' },
  },
  render: (args) => (
    <TrueSizeSheet label="Semantic colors on paper" size={args.size} h="2xs">
      <PaperRoot ink="normal">
        <VStack alignItems="stretch" gap="8">
          <Text color="text">Text in the default text color.</Text>
          <Text color="text.subtle">Text in the subtle text color.</Text>
          <Box bg="surface.sunken" p="8" borderRadius="2">
            <Text size="12">A sunken surface.</Text>
          </Box>
        </VStack>
      </PaperRoot>
    </TrueSizeSheet>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Text in the default text color.');
    // The light value of the `text` token is neutral.100, #292A2E.
    await expect(getComputedStyle(text).color).toBe('rgb(41, 42, 46)');
  },
};

/** Ex: the top of an invoice, built from the print text styles. */
export const ExInvoiceTop: Story = {
  args: {
    size: { width: 8.5, height: 1.5, unit: 'in' },
  },
  render: (args) => (
    <VStack alignItems="stretch" gap="0">
      {(['normal', 'thermal'] as const).map((ink) => (
        <TrueSizeSheet
          key={ink}
          label={ink === 'normal' ? 'Normal ink' : 'Thermal ink'}
          size={args.size}
          h="2xs"
        >
          <PaperRoot ink={ink}>
            <HStack alignItems="flex-start" justifyContent="space-between">
              <VStack alignItems="flex-start" gap="4">
                <Box textStyle="print.capsLabel">Invoice</Box>
                <Box textStyle="print.title">INV-10482</Box>
                <Box textStyle="print.smallPrint">
                  Payment is due within 30 days.
                </Box>
              </VStack>
              <VStack alignItems="flex-end" gap="4">
                <Box textStyle="print.capsLabel">Amount due</Box>
                <Box textStyle="print.total">$12,480.00</Box>
                <Box textStyle="print.fieldValue" color="paper.inkAlert">
                  Past due
                </Box>
              </VStack>
            </HStack>
          </PaperRoot>
        </TrueSizeSheet>
      ))}
    </VStack>
  ),
};
