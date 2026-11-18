import { useEffect, useRef, useState } from 'react';

import { Grid, GridItem, styled, VStack } from '@styled-system/jsx';

import { Box, type BoxProps } from '~/components/Box';
import { CodeBlock } from '~/components/CodeBlock';
import { PrintPage } from '~/components/PrintPreview/PrintPage';
import { PrintPreview } from '~/components/PrintPreview/PrintPreview';
import { usePrintPage } from '~/components/PrintPreview/usePrintPage';
import { type PrintFixture } from '~/print/printFixtures';
import { DS_COMPONENT_ATTRIBUTE } from '~/utils/dsComponent';

import {
  canvasLayout,
  canvasPages,
  layoutSize,
  layoutToStock,
  type CanvasLayoutInput,
  type StockRect,
} from './printCanvasStory';
import { PrintFixtureMarkup } from './PrintFixture';
import { fixtureDocument } from './printStory';

type CanvasSlotOverlayProps = {
  /** The layout the slots come from. */
  layout: CanvasLayoutInput;
};

/**
 * Names of the slots on the same page whose content does not fit. The slot
 * clips it in print, so the editor flags it. Measured once the fonts load.
 */
const useOverflowingSlots = (layout: CanvasLayoutInput) => {
  const anchor = useRef<HTMLDivElement>(null);
  const [names, setNames] = useState<ReadonlySet<string>>(() => new Set());
  const [measured, setMeasured] = useState(false);
  useEffect(() => {
    const page = anchor.current?.closest(
      `[${DS_COMPONENT_ATTRIBUTE}="PrintPage"]`,
    );
    if (!page) return;
    let active = true;
    const measure = () => {
      const found = new Set<string>();
      for (const slot of page.querySelectorAll<HTMLElement>('[data-slot]')) {
        const content = slot.firstElementChild;
        if (!(content instanceof HTMLElement)) continue;
        const tooWide = content.scrollWidth > content.clientWidth + 1;
        const tooTall = content.scrollHeight > content.clientHeight + 1;
        if (tooWide || tooTall) found.add(slot.dataset.slot ?? '');
      }
      if (!active) return;
      setNames(found);
      setMeasured(true);
    };
    void document.fonts.ready.then(measure);
    return () => {
      active = false;
    };
  }, [layout]);
  return { anchor, names, measured };
};

/**
 * The slot editor's overlay: a dashed box and a name tag on each slot, the
 * perforations, and the MICR clear band. A slot whose content does not fit
 * gets a solid red box and "too long" in its tag. The overlay goes in the
 * `overlay` of a `PrintPage` and reads the page size from `usePrintPage`, so
 * it lines up with the slots Go writes at any preview scale. For stories
 * only.
 */
export const CanvasSlotOverlay = ({ layout }: CanvasSlotOverlayProps) => {
  const page = usePrintPage();
  const { anchor, names: overflowing, measured } = useOverflowingSlots(layout);
  // Page space is CSS pixels at scale 1. The stock fills the page.
  const perUnit = page.width / layout.stock.width;
  const place = (rect: StockRect) => ({
    left: rect.left * perUnit,
    top: rect.top * perUnit,
    width: rect.width * perUnit,
    height: rect.height * perUnit,
  });
  const { width: layoutWidth } = layoutSize(layout);
  const band = layout.micrBand;
  return (
    <styled.div
      ref={anchor}
      data-overlay-measured={measured || undefined}
      position="absolute"
      inset="0"
    >
      {band && (
        <styled.div
          data-overlay-band=""
          position="absolute"
          bgColor="orange.5"
          opacity="0.8"
          style={place(
            layoutToStock(
              { x: 0, y: band.top, width: layoutWidth, height: band.height },
              layout,
            ),
          )}
        />
      )}
      {(layout.perforations ?? []).map((distance) => (
        <styled.div
          key={distance}
          data-overlay-perforation={distance}
          position="absolute"
          borderTopWidth="1"
          borderTopStyle="dashed"
          borderTopColor="neutral.40"
          style={place(
            layoutToStock(
              { x: 0, y: distance, width: layoutWidth, height: 0 },
              layout,
            ),
          )}
        >
          <styled.span
            position="absolute"
            right="4"
            top="2"
            px="2"
            bg="neutral.0"
            color="neutral.70"
            fontFamily="body"
            fontSize="10"
            fontWeight="bold"
            lineHeight="none"
          >
            perforation {distance} in
          </styled.span>
        </styled.div>
      ))}
      {layout.slots.map((slot) => {
        // Turned text starts at the top right of the page box, so the tag
        // moves to the bottom right, out of its way.
        const turned = ((layout.rotate + (slot.rotate ?? 0)) / 90) % 2 === 1;
        const tooLong = overflowing.has(slot.name);
        const tone = slot.locked ? 'orange' : tooLong ? 'red' : 'blue';
        return (
          <styled.div
            key={slot.name}
            data-overlay-slot={slot.name}
            data-overflowing={tooLong || undefined}
            position="absolute"
            outlineWidth="1"
            outlineStyle={tooLong ? 'solid' : 'dashed'}
            outlineOffset="-1"
            outlineColor={
              tone === 'orange'
                ? 'orange.50'
                : tone === 'red'
                  ? 'red.50'
                  : 'blue.30'
            }
            style={place(layoutToStock(slot, layout))}
          >
            <styled.span
              position="absolute"
              top={turned ? undefined : '1'}
              bottom={turned ? '1' : undefined}
              right={slot.micr ? undefined : '2'}
              left={slot.micr ? '2' : undefined}
              px="2"
              bg="neutral.0"
              color={
                tone === 'orange'
                  ? 'orange.60'
                  : tone === 'red'
                    ? 'red.50'
                    : 'blue.50'
              }
              fontFamily="body"
              fontSize="10"
              fontWeight="bold"
              lineHeight="none"
            >
              {slot.micr
                ? 'MICR (locked)'
                : tooLong
                  ? `${slot.name} · too long`
                  : slot.name}
            </styled.span>
          </styled.div>
        );
      })}
    </styled.div>
  );
};

type PrintCanvasFixtureViewProps = {
  /** The canvas fixture to render. Its input is the canvas layout. */
  fixture: PrintFixture;
  /** Draws the slot editor's overlay over the slots. */
  /** @default true */
  showSlots?: boolean;
  /** Height of the preview area. */
  /** @default "3xl" */
  h?: BoxProps['h'];
};

/**
 * A canvas fixture in a print preview, one page per canvas. Each page is the
 * stock size with no margins, because the canvas fills the stock. For
 * stories only.
 */
export const PrintCanvasFixtureView = ({
  fixture,
  showSlots = true,
  h = '3xl',
}: PrintCanvasFixtureViewProps) => {
  const layout = canvasLayout(fixture);
  const pages = canvasPages(fixture);
  return (
    <Box h={h}>
      <PrintPreview fit="page" aria-label={fixture.name}>
        {pages.map((page, index) => (
          <PrintPage
            // Pages are a fixed list from the fixture.
            key={index}
            size={layout.stock}
            data-canvas-page={index + 1}
            overlay={
              showSlots ? <CanvasSlotOverlay layout={layout} /> : undefined
            }
          >
            <PrintFixtureMarkup fixture={page} />
          </PrintPage>
        ))}
      </PrintPreview>
    </Box>
  );
};

type PrintCanvasFixtureSpecProps = PrintCanvasFixtureViewProps & {
  /** The print recipe the fixture belongs to. */
  recipe: string;
};

/**
 * A canvas fixture as a spec: its pages, then the layout input and the
 * document the Go print helper writes for it. For stories only.
 */
export const PrintCanvasFixtureSpec = ({
  recipe,
  ...viewProps
}: PrintCanvasFixtureSpecProps) => {
  const { fixture } = viewProps;
  return (
    <VStack alignItems="stretch" gap="0">
      <PrintCanvasFixtureView {...viewProps} />
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
            code={fixtureDocument(fixture)}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};
