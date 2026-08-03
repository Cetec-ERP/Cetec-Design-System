import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { label, type LabelVariantProps } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

/** Props accepted by {@link Label}. */
export type LabelProps = Omit<BoxProps, keyof LabelVariantProps> &
  LabelVariantProps & {
    /** ID of the form control labeled by this element. */
    htmlFor: string;
    /** Visible label content. */
    children?: string | ReactNode;
  };

/**
 * Renders a native label for a form control.
 *
 * `htmlFor` must match the target control's `id`. Use `FormField` when the
 * control also needs help text, validation messaging, or shared field state.
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email address</Label>
 * ```
 */
export const Label = (props: LabelProps) => {
  const { htmlFor, children, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Box
      as="label"
      htmlFor={htmlFor}
      className={cx(label({}), className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
