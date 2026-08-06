import type { ReactNode } from 'react';
import { type ElementType } from 'react';

import { cx } from '@styled-system/css';
import { text, type TextVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { splitProps } from '~/utils/splitProps';

/** Props accepted by {@link Text}. */
export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    /** Text or inline content to render. */
    children: string | ReactNode;
    /** Semantic element or component used for the text. */
    /** @default "span" */
    as?: ElementType;
    /** Explicit ARIA role when the rendered element does not provide it. */
    role?: string;
    /** Adds the text to sequential keyboard focus when a composite widget requires it. */
    tabIndex?: number;
  };

/**
 * Renders design-system typography without imposing document semantics.
 *
 * The component renders a `span` by default. Choose `as` based on the content's
 * semantic role; use `Heading` for document headings and `Label` for form
 * labels.
 *
 * @example
 * ```tsx
 * <Text as="p" size="md">Account details</Text>
 * ```
 */
export const Text = (props: TextProps) => {
  const {
    as = 'span',
    family,
    italic,
    bold,
    underline,
    size,
    children,
    textStyle,
    weight,
    role, // role if use in form input text for refrence, also semantic role overrides if non-semantic tag.
    tabIndex, // tabIndex main use for in list or loop select text using key press focus
    truncate,
    allCaps,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  return (
    <Box
      as={as}
      textStyle={textStyle}
      role={role}
      tabIndex={tabIndex}
      className={cx(
        text({
          family,
          bold,
          underline,
          italic,
          size,
          weight,
          truncate,
          allCaps,
        }),
        className,
      )}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
