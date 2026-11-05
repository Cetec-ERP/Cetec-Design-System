import { useContext } from 'react';

import { cx } from '@styled-system/css';
import { peekBar } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Button } from '~/components/Button';
import { DrawerContext } from '~/components/Drawer/DrawerContext';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { useLocale } from '~/system/context/useLocale';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/** Props for {@link PeekBar}. */
export type PeekBarProps = Omit<BoxProps, 'children'> & {
  /** What the list holds, singular, such as "Case" or "Order". Used in the position text and button names. */
  noun: string;
  /** Position of the open record in the list, starting at 1. */
  index: number;
  /** Number of records in the list. */
  total: number;
  /** Opens the previous record. The button is disabled on the first record or when this is not set. */
  onPrevious?: () => void;
  /** Opens the next record. The button is disabled on the last record or when this is not set. */
  onNext?: () => void;
  /** Link to the record's full page. Shows the "Open" button. */
  openHref?: string;
  /** Opens the record's full page. Shows the "Open" button. Ignored when `openHref` is set. */
  onOpen?: () => void;
  /**
   * Closes the peek. Inside a `Drawer`, it defaults to the drawer's close.
   * The close button is hidden when there is no close action.
   */
  onClose?: () => void;
};

/**
 * Drawer chrome for a record opened from a list: position, previous and next,
 * open full page, and close.
 *
 * Place it at the top of a `Drawer`, above the record's page header. The
 * position text ("Case 3 of 40") is announced when it changes. All text comes
 * from `LocaleProvider` (`peekPosition`, `previousItem`, `nextItem`,
 * `openFullPage`, and `closeDrawer`).
 *
 * @example
 * ```tsx
 * <PeekBar noun="Case" index={3} total={40} onPrevious={prev} onNext={next} openHref="/case/3" />
 * ```
 */
export const PeekBar = (props: PeekBarProps) => {
  const {
    noun,
    index,
    total,
    onPrevious,
    onNext,
    openHref,
    onOpen,
    onClose: onCloseProp,
    ...rest
  } = props;
  const { labels } = useLocale();
  const drawer = useContext(DrawerContext);
  const onClose = onCloseProp ?? drawer?.onClose;
  const classes = peekBar();
  const [className, otherProps] = splitProps(rest);
  const showOpen = Boolean(openHref || onOpen);

  return (
    <Box
      {...dsComponent('PeekBar')}
      className={cx(classes.root, className)}
      {...otherProps}
    >
      <Box as="span" className={classes.position} aria-live="polite">
        {labels.peekPosition({ noun, index, total })}
      </Box>
      <Box className={classes.controls}>
        <IconButton
          variant="ghost"
          size="sm"
          iconName="arrow-left"
          altText={labels.previousItem(noun)}
          disabled={!onPrevious || index <= 1}
          onClick={onPrevious}
        />
        <IconButton
          variant="ghost"
          size="sm"
          iconName="arrow-right"
          altText={labels.nextItem(noun)}
          disabled={!onNext || index >= total}
          onClick={onNext}
        />
        {showOpen && (
          <Button
            size="sm"
            after={<Icon name="arrow-square-out" aria-hidden />}
            {...(openHref ? { href: openHref } : { onClick: onOpen })}
          >
            {labels.openFullPage}
          </Button>
        )}
        {onClose && (
          <IconButton
            variant="ghost"
            size="sm"
            iconName="x"
            altText={labels.closeDrawer}
            onClick={onClose}
          />
        )}
      </Box>
    </Box>
  );
};
