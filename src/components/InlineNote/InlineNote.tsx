import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import {
  inlineNote,
  type InlineNoteVariantProps,
} from '@styled-system/recipes';
import type { ColorToken } from '@styled-system/tokens';

import type { AlertTone } from '~/components/Alert';
import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { Text } from '~/components/Text';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

const toneIconNames: Record<AlertTone, IconNamesList> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'error',
  neutral: 'info',
};

const toneIconColors: Record<AlertTone, ColorToken> = {
  info: 'icon.info',
  success: 'icon.success',
  warning: 'icon.warning',
  danger: 'icon.danger',
  neutral: 'icon.subtle',
};

const toneTextColors: Record<AlertTone, ColorToken> = {
  info: 'text.subtle',
  success: 'text.success',
  warning: 'text.warning',
  danger: 'text.danger',
  neutral: 'text.subtle',
};

type InlineNoteOwnProps = {
  /** Semantic tone. Selects the text and icon color tokens and the tone icon. */
  /** @default "info" */
  tone?: AlertTone;
  /** The note text. */
  children: ReactNode;
};

/** Props accepted by {@link InlineNote}. Includes compatible native element props. */
export type InlineNoteProps = Omit<
  BoxProps,
  keyof InlineNoteVariantProps | keyof InlineNoteOwnProps
> &
  Omit<InlineNoteVariantProps, 'tone'> &
  InlineNoteOwnProps;

/**
 * Attaches short guidance or a validation message to a single form field.
 *
 * An inline note has no surface, title, actions, or dismiss control: it is the
 * smallest notification in the set and belongs directly beneath the control it
 * describes. Use `Alert` when the message concerns a whole section.
 *
 * Renders a `div` with `role="alert"` when `tone` is `danger` and
 * `role="status"` otherwise. Reference it from the field with
 * `aria-describedby` so the message reaches screen readers on focus.
 * `tone="neutral"` uses the info icon.
 *
 * @example
 * ```tsx
 * <InlineNote id="email-note" tone="danger">Enter a valid email address.</InlineNote>
 * ```
 */
export const InlineNote = (props: InlineNoteProps) => {
  const { tone = 'info', children, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = inlineNote({ tone });

  const iconName = toneIconNames[tone];

  return (
    <Box
      {...dsComponent('InlineNote')}
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cx(classes.root, className)}
      {...otherProps}
    >
      <Box className={classes.icon}>
        <Icon
          name={iconName}
          size="16"
          fill={toneIconColors[tone]}
          aria-hidden="true"
        />
      </Box>
      <Text
        textStyle="body.xs"
        lineHeight="tight"
        color={toneTextColors[tone]}
        className={classes.message}
      >
        {children}
      </Text>
    </Box>
  );
};
