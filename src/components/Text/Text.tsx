import type { ReactNode } from 'react';
import { type ElementType } from 'react';

import { cx } from '@styled-system/css';
import { text, type TextVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Tooltip } from '~/components/Tooltip';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/** Props accepted by {@link Text}. */
export type TextProps = Omit<BoxProps, keyof TextVariantProps> &
  TextVariantProps & {
    /** Text or inline content to render. */
    children: string | ReactNode;
    /** Semantic element or component used for the text. */
    /** @default "span" */
    as?: ElementType;
    /**
     * Short, nonessential explanation shown in a tooltip. Applies a dashed
     * underline and adds the text to sequential keyboard focus.
     */
    definition?: string;
    /** Explicit ARIA role when the rendered element does not provide it. */
    role?: string;
    /** Adds the text to sequential keyboard focus when a composite widget requires it. */
    tabIndex?: number;
    /**
     * Keeps the line breaks in the text. Use it for text that comes from a
     * multi-line field, such as terms or a note.
     */
    /** @default false */
    preserveLines?: TextVariantProps['preserveLines'];
    /**
     * A block of words in a document. `note` is body text, `terms` is small
     * print, `closing` is a closing line in the heading font, and `title` is
     * a caps heading with a rule under it. Inside a printed document each one
     * takes its paper look.
     */
    variant?: TextVariantProps['variant'];
  };

/**
 * Renders design-system typography without imposing document semantics.
 *
 * The component renders a `span` by default. Choose `as` based on the content's
 * semantic role; use `Heading` for document headings and `Label` for form
 * labels. Provide `definition` for a short explanation that appears on hover
 * and keyboard focus.
 *
 * Use `variant` for a block of words in a document, and `preserveLines` to
 * keep the line breaks of a multi-line field. In a printed document, under a
 * `cetec-printDoc` root, text takes the paper look of its variant.
 *
 * @example
 * ```tsx
 * <Text definition="Application programming interface">API</Text>
 * ```
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
    preserveLines,
    variant,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const content = (
    <Box
      {...dsComponent('Text')}
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
          preserveLines,
          variant,
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
