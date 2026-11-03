import { useState } from 'react';

import { expect, waitFor, within } from 'storybook/test';

import { Grid, HStack, VStack } from '@styled-system/jsx';

import { Box } from '../Box';
import { Button } from '../Button';

import { type PrintPreviewFit } from './pageGeometry';
import { pageSizes, type PageSize } from './pageSizes';
import { PrintPage } from './PrintPage';
import { PrintPreview } from './PrintPreview';
import { usePrintPage } from './usePrintPage';

import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * Shows printed pages at their true proportions, scaled to fit the area.
 *
 * - `PrintPreview` measures itself and applies one scale to every page.
 * - `PrintPage` takes the page size as a prop. It does not know what the
 *   content is, so it works with server HTML in an iframe, an editable
 *   canvas, or a rendered PDF page.
 * - `usePrintPage` gives content the scale and page geometry.
 */
const meta = {
  title: 'Components/PrintPreview',
  component: PrintPreview,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    fit: {
      control: 'select',
      options: ['page', 'width', 0.5, 1],
      description:
        '`page` fits the whole page, `width` fits its width, a number is a fixed zoom',
      table: { defaultValue: { summary: 'page' } },
    },
  },
  args: {
    fit: 'page',
    'aria-label': 'Document preview',
  },
} satisfies Meta<typeof PrintPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Sample content that pads itself to the page margins with `usePrintPage`. */
const SampleDocument = ({ title }: { title: string }) => {
  const { margins } = usePrintPage();
  // Margins are runtime page values, so they pass through as a style.
  const padding = {
    paddingTop: margins.top,
    paddingRight: margins.right,
    paddingBottom: margins.bottom,
    paddingLeft: margins.left,
  };
  return (
    // Plain elements inherit the sheet's ink, so the sample reads the same in
    // both app themes.
    <VStack alignItems="stretch" gap="12" h="full" style={padding}>
      <Box as="h2" fontSize="24" fontWeight="bold">
        {title}
      </Box>
      <Box as="p">Bill to: Example Manufacturing</Box>
      <Box as="p">Ship to: 100 Main Street</Box>
      <VStack
        alignItems="stretch"
        gap="4"
        borderTopWidth="1"
        borderColor="neutral.30"
        pt="12"
      >
        <Box as="p">Line 1 · Widget · 4 × $12.00</Box>
        <Box as="p">Line 2 · Bracket · 10 × $3.50</Box>
      </VStack>
    </VStack>
  );
};

export const Default: Story = {
  render: (args) => (
    <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Invoice" />
        </PrintPage>
      </PrintPreview>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const preview = canvas.getByLabelText('Document preview');
    const page = preview.querySelector<HTMLElement>(
      '[data-ds-component="PrintPage"]',
    );
    await waitFor(() => {
      expect(page).not.toHaveAttribute('data-measuring');
    });
    // Letter is 816 CSS pixels wide at scale 1. Fit scales it down.
    await expect(page?.getBoundingClientRect().width).toBeLessThan(816);
  },
};

/** The same 4 × 6 in label, as given and turned to landscape. */
export const Orientation: Story = {
  render: (args) => (
    <Grid columns={2} gap="0">
      <Box h="md">
        <PrintPreview {...args} aria-label="Portrait label">
          <PrintPage size={pageSizes.label4x6} orientation="portrait">
            <SampleDocument title="Portrait" />
          </PrintPage>
        </PrintPreview>
      </Box>
      <Box h="md">
        <PrintPreview {...args} aria-label="Landscape label">
          <PrintPage size={pageSizes.label4x6} orientation="landscape">
            <SampleDocument title="Landscape" />
          </PrintPage>
        </PrintPreview>
      </Box>
    </Grid>
  ),
};

const sizeExamples: { name: string; size: PageSize }[] = [
  { name: 'Letter', size: pageSizes.letter },
  { name: 'A4', size: pageSizes.a4 },
  { name: 'Legal', size: pageSizes.legal },
  { name: 'Label 4 × 2 in', size: pageSizes.label4x2 },
  { name: 'Label 2 × 1 in', size: pageSizes.label2x1 },
  { name: 'Custom 100 × 50 mm', size: { width: 100, height: 50, unit: 'mm' } },
];

/** Presets and a custom size. Every size is a plain `PageSize` object. */
export const Sizes: Story = {
  render: (args) => (
    <Grid columns={3} gap="0">
      {sizeExamples.map(({ name, size }) => (
        <Box key={name} h="xs">
          <PrintPreview {...args} aria-label={name}>
            <PrintPage size={size}>
              <Box p="8">
                <Box as="p">{name}</Box>
              </Box>
            </PrintPage>
          </PrintPreview>
        </Box>
      ))}
    </Grid>
  ),
};

/** Margins can be one number or four sides, in the unit of the page size. */
export const Margins: Story = {
  render: (args) => (
    <Grid columns={2} gap="0">
      <Box h="md">
        <PrintPreview {...args} aria-label="Even margins">
          <PrintPage size={pageSizes.letter} margins={1} showMargins>
            <SampleDocument title="1 in all sides" />
          </PrintPage>
        </PrintPreview>
      </Box>
      <Box h="md">
        <PrintPreview {...args} aria-label="Mixed margins">
          <PrintPage
            size={pageSizes.a4}
            margins={{ top: 30, right: 15, bottom: 20, left: 25 }}
            showMargins
          >
            <SampleDocument title="Mixed, in mm" />
          </PrintPage>
        </PrintPreview>
      </Box>
    </Grid>
  ),
};

/** Pages stack and share one scale, set by the largest page. */
export const MultiplePages: Story = {
  args: { fit: 'width' },
  render: (args) => (
    <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Page 1" />
        </PrintPage>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Page 2" />
        </PrintPage>
        <PrintPage size={pageSizes.label4x6}>
          <SampleDocument title="Packing label" />
        </PrintPage>
      </PrintPreview>
    </Box>
  ),
};

const invoiceHtml = `<!doctype html>
<html><head><style>
  @page { size: letter; margin: 0.5in; }
  body { margin: 0.5in; font: 14px/1.4 system-ui, sans-serif; color: #1e1f21; }
  h1 { font-size: 28px; margin: 0 0 16px; }
  table { width: 100%; border-collapse: collapse; margin-top: 24px; }
  th, td { text-align: left; padding: 6px 0; border-bottom: 1px solid #dddee1; }
</style></head><body>
  <h1>Invoice 10482</h1>
  <div>Example Manufacturing · 100 Main Street</div>
  <table>
    <tr><th>Part</th><th>Qty</th><th>Price</th></tr>
    <tr><td>Widget</td><td>4</td><td>$12.00</td></tr>
    <tr><td>Bracket</td><td>10</td><td>$3.50</td></tr>
  </table>
</body></html>`;

/**
 * Server-rendered HTML in an iframe. The iframe fills the sheet at 96 CSS
 * pixels per inch, so it lays out as it prints.
 */
export const IframeContent: Story = {
  render: (args) => (
    <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <Box
            as="iframe"
            title="Invoice 10482"
            srcDoc={invoiceHtml}
            w="full"
            h="full"
            borderWidth="0"
          />
        </PrintPage>
      </PrintPreview>
    </Box>
  ),
};

/** The overlay draws in page space above the content, such as an error marker. */
export const Overlay: Story = {
  render: (args) => (
    <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage
          size={pageSizes.letter}
          margins={0.5}
          overlay={
            <Box
              position="absolute"
              top="96"
              left="48"
              w="272"
              h="40"
              borderWidth="2"
              borderStyle="solid"
              borderColor="border.danger"
              borderRadius="4"
            />
          }
        >
          <SampleDocument title="Invoice" />
        </PrintPage>
      </PrintPreview>
    </Box>
  ),
};

const fitOptions: { label: string; value: PrintPreviewFit }[] = [
  { label: 'Fit page', value: 'page' },
  { label: 'Fit width', value: 'width' },
  { label: '100%', value: 1 },
];

const TemplateEditorPane = () => {
  const [fit, setFit] = useState<PrintPreviewFit>('page');
  const [landscape, setLandscape] = useState(false);
  const [showMargins, setShowMargins] = useState(true);
  return (
    <VStack alignItems="stretch" gap="0" h="lg">
      <HStack gap="8" p="8" borderBottomWidth="1" borderColor="border">
        {fitOptions.map((option) => (
          <Button
            key={option.label}
            size="sm"
            variant={fit === option.value ? 'primary' : undefined}
            onClick={() => setFit(option.value)}
          >
            {option.label}
          </Button>
        ))}
        <Button size="sm" onClick={() => setLandscape((value) => !value)}>
          {landscape ? 'Portrait' : 'Landscape'}
        </Button>
        <Button size="sm" onClick={() => setShowMargins((value) => !value)}>
          {showMargins ? 'Hide margins' : 'Show margins'}
        </Button>
      </HStack>
      <Box flex="1" minH="0">
        <PrintPreview fit={fit} aria-label="Order acknowledgment preview">
          <PrintPage
            size={pageSizes.letter}
            orientation={landscape ? 'landscape' : 'portrait'}
            margins={0.5}
            showMargins={showMargins}
          >
            <Box
              as="iframe"
              title="Order acknowledgment"
              srcDoc={invoiceHtml}
              w="full"
              h="full"
              borderWidth="0"
            />
          </PrintPage>
        </PrintPreview>
      </Box>
    </VStack>
  );
};

/** Ex: the preview pane of a document template editor. */
export const ExTemplateEditorPane: Story = {
  render: () => <TemplateEditorPane />,
};
