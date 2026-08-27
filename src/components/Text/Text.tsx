import type { ReactNode } from 'react';
import { type ElementType } from 'react';

import { cx } from '@styled-system/css';
import { text, type TextVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Tooltip } from '~/components/Tooltip';
import { splitProps } from '~/utils/splitProps';

export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    /** Content rendered by the text element. */
    children: string | ReactNode;
    /** Semantic element rendered by Text. Default: 'span'. */
    as?: ElementType;
    /**
     * Explanation shown in a tooltip. Also applies a dashed underline and
     * makes the text keyboard-focusable.
     */
    definition?: string;
    /** Semantic role applied to the rendered element. */
    role?: string;
    /** Keyboard tab order applied to the rendered element. */
    tabIndex?: number;
  };

/**
 * Renders text using the design system typography recipe.
 * Use `as` to select a semantic element and `definition` for terms that need
 * a short explanation on hover or keyboard focus.
 *
 * @example
 * <Text as="p">Your changes have been saved.</Text>
 *
 * @example
 * <Text definition="Application programming interface">API</Text>
 */
export const Text = (props: TextProps) => {
  const {
    as = 'span',
    family,
    italic,
    bold,
    underline,
    dashedUnderline,
    definition,
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

  const content = (
    <Box
      as={as}
      textStyle={textStyle}
      role={role}
      tabIndex={tabIndex ?? (definition ? 0 : undefined)}
      className={cx(
        text({
          family,
          bold,
          underline,
          dashedUnderline: definition ? true : dashedUnderline,
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

  return definition ? <Tooltip text={definition}>{content}</Tooltip> : content;
};
