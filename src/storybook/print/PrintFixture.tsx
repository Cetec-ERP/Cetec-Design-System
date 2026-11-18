import { type ReactNode } from 'react';

import { Grid, GridItem, styled, VStack } from '@styled-system/jsx';

import { Box, type BoxProps } from '~/components/Box';
import { CodeBlock } from '~/components/CodeBlock';
import { type PrintPreviewFit } from '~/components/PrintPreview/pageGeometry';
import {
  type PageMargins,
  type PageSize,
} from '~/components/PrintPreview/pageSizes';
import { PrintPage } from '~/components/PrintPreview/PrintPage';
import { PrintPreview } from '~/components/PrintPreview/PrintPreview';
import { usePrintPage } from '~/components/PrintPreview/usePrintPage';
import { type PrintFixture } from '~/print/printFixtures';

import {
  fixtureDocument,
  fixtureHtmlClasses,
  paperSizes,
  type PaperName,
} from './printStory';

type PrintFixtureMarkupProps = {
  /** The fixture to render. */
  fixture: PrintFixture;
  /** Adds `cetec-ink-thermal` to the root when the fixture does not have it. */
  thermal?: boolean;
  /**
   * Content for the bottom page margin, such as a page footer. It stands in
   * for an `@page` margin box, so it sits inside the root and reads its
   * custom properties.
   */
  footer?: ReactNode;
};

/**
 * Renders a fixture's HTML as the Go print helper writes it. The outer `div`
 * stands in for `<html>` and carries the fixture's root classes. The inner
 * `div` stands in for `<body>`. It pads to the page margins, as `@page`
 * margins do in print. Both are plain elements with no design-system recipe,
 * so only the fixture's classes style the markup.
 */
export const PrintFixtureMarkup = ({
  fixture,
  thermal = false,
  footer,
}: PrintFixtureMarkupProps) => {
  const { margins } = usePrintPage();
  // Margins are runtime page values, so they pass through as a style.
  const bodyPadding = {
    paddingTop: margins.top,
    paddingRight: margins.right,
    paddingBottom: margins.bottom,
    paddingLeft: margins.left,
  };
  const footerBox = {
    height: margins.bottom,
    left: margins.left,
    right: margins.right,
  };
  return (
    <styled.div
      className={fixtureHtmlClasses(fixture, thermal).join(' ')}
      data-fixture={fixture.name}
      position="relative"
      h="full"
    >
      <styled.div
        data-fixture-body=""
        h="full"
        style={bodyPadding}
        // Fixture HTML is repository content, written to match the Go helper.
        dangerouslySetInnerHTML={{ __html: fixture.html }}
      />
      {footer !== undefined && (
        <styled.div
          data-page-footer=""
          position="absolute"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={footerBox}
        >
          {footer}
        </styled.div>
      )}
    </styled.div>
  );
};

type PrintFixtureViewProps = PrintFixtureMarkupProps & {
  /** Paper size, as the template setting names it. */
  /** @default "letter" */
  paper?: PaperName;
  /** A page size that overrides `paper`, such as a label stock. */
  size?: PageSize;
  /** Page margins in the unit of the page size. */
  /** @default 0.5 */
  margins?: PageMargins;
  /** How the page scales to the preview area. */
  /** @default "page" */
  fit?: PrintPreviewFit;
  /** Height of the preview area. */
  /** @default "3xl" */
  h?: BoxProps['h'];
  /** Accessible name of the preview. Defaults to the fixture name. */
  label?: string;
};

/**
 * A fixture on a page inside a print preview. For stories only. Every print
 * story renders through it, so the story shows the markup Go writes.
 */
export const PrintFixtureView = ({
  fixture,
  thermal,
  footer,
  paper = 'letter',
  size,
  margins = 0.5,
  fit = 'page',
  h = '3xl',
  label,
}: PrintFixtureViewProps) => (
  <Box h={h}>
    <PrintPreview fit={fit} aria-label={label ?? fixture.name}>
      <PrintPage size={size ?? paperSizes[paper]} margins={margins}>
        <PrintFixtureMarkup
          fixture={fixture}
          thermal={thermal}
          footer={footer}
        />
      </PrintPage>
    </PrintPreview>
  </Box>
);

type PrintFixtureSpecProps = PrintFixtureViewProps & {
  /** The print recipe the fixture belongs to. */
  recipe: string;
};

/**
 * A fixture as a spec: its page, then the input and the document the Go
 * print helper writes for it. For stories only.
 */
export const PrintFixtureSpec = ({
  recipe,
  ...viewProps
}: PrintFixtureSpecProps) => {
  const { fixture, thermal } = viewProps;
  return (
    <VStack alignItems="stretch" gap="0">
      <PrintFixtureView {...viewProps} />
      <Grid columns={{ base: 1, lg: 3 }} gap="16" px="24" py="16">
        <CodeBlock
          title={`${recipe}/${fixture.name} input`}
          language="json"
          code={JSON.stringify(fixture.input, null, 2)}
        />
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <CodeBlock
            title="HTML the Go helper writes"
            language="html"
            wrap
            code={fixtureDocument(fixture, thermal)}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};
