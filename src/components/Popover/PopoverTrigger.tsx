import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';

import { useMergeRefs } from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { popover } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

import { usePopoverContext } from './PopoverContext';

/** Props for {@link PopoverTrigger}, the control that opens the popover. */
export type PopoverTriggerProps = Omit<BoxProps, 'children'> & {
  /**
   * Trigger content. A single React element receives refs and interaction
   * props via `cloneElement` and keeps its own styles. Otherwise content is
   * wrapped in an inline `button` (`rich`) or focusable `span` (`definition`).
   */
  children: ReactNode;
};

/**
 * Marks the control that opens a parent {@link Popover}.
 *
 * For `interaction="definition"`, prefer a dashed-underline phrase (for
 * example `Text` with `dashedUnderline`) so keyboard users can focus it. For
 * `interaction="rich"`, prefer a button or other interactive control.
 *
 * @example
 * ```tsx
 * <PopoverTrigger>
 *   <Text dashedUnderline tabIndex={0}>cycle time</Text>
 * </PopoverTrigger>
 * ```
 */
export const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { children, ref, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const { interaction, getReferenceProps, setReferenceRef } =
    usePopoverContext();
  const classes = popover({ interaction });

  const childArray = Children.toArray(children);
  const onlyChild = childArray.length === 1 ? childArray[0] : null;
  const childRefProp = isValidElement(onlyChild)
    ? (onlyChild.props as { ref?: Ref<Element | null> }).ref
    : undefined;
  const mergedRef = useMergeRefs([childRefProp, ref, setReferenceRef]);

  if (isValidElement(onlyChild)) {
    const child = onlyChild as ReactElement<
      HTMLAttributes<HTMLElement> & { ref?: Ref<Element>; className?: string }
    >;
    const referenceProps = getReferenceProps({
      ...(otherProps as Record<string, unknown>),
      ...(child.props as Record<string, unknown>),
    });

    return cloneElement(child, {
      ...referenceProps,
      ref: mergedRef,
      className: cx(child.props.className, className) || undefined,
    } as HTMLAttributes<HTMLElement>);
  }

  if (interaction === 'rich') {
    return (
      <Box
        as="button"
        type="button"
        ref={mergedRef}
        className={cx(classes.trigger, className)}
        {...getReferenceProps(otherProps)}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      as="span"
      ref={mergedRef}
      tabIndex={0}
      className={cx(classes.trigger, className)}
      {...getReferenceProps(otherProps)}
    >
      {children}
    </Box>
  );
};
