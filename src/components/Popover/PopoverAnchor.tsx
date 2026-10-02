import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';

import { useMergeRefs } from '@floating-ui/react';

import { Box, type BoxProps } from '../Box';

import { usePopoverContext } from './PopoverContext';

/** Props for {@link PopoverAnchor}, an optional positioning reference. */
export type PopoverAnchorProps = Omit<BoxProps, 'children'> & {
  /**
   * Element used for positioning while Trigger retains interaction props.
   * A single React element receives the position ref via `cloneElement`.
   */
  children: ReactNode;
};

/**
 * Optionally separates positioning from the interactive trigger.
 *
 * When mounted, Floating UI positions the content relative to this element
 * while `PopoverTrigger` still receives hover/focus/click interactions.
 *
 * @example
 * ```tsx
 * <PopoverAnchor>
 *   <Box display="inline-block">…</Box>
 * </PopoverAnchor>
 * ```
 */
export const PopoverAnchor = (props: PopoverAnchorProps) => {
  const { children, ...rest } = props;
  const { refs, setHasAnchor } = usePopoverContext();

  useEffect(() => {
    setHasAnchor(true);
    return () => setHasAnchor(false);
  }, [setHasAnchor]);

  const childArray = Children.toArray(children);
  const onlyChild = childArray.length === 1 ? childArray[0] : null;
  const childRefProp = isValidElement(onlyChild)
    ? (onlyChild.props as { ref?: Ref<Element | null> }).ref
    : undefined;
  const mergedRef = useMergeRefs([childRefProp, refs.setPositionReference]);

  if (isValidElement(onlyChild)) {
    const child = onlyChild as ReactElement<HTMLAttributes<HTMLElement>>;

    return cloneElement(child, {
      ...rest,
      ref: mergedRef,
    } as HTMLAttributes<HTMLElement>);
  }

  return (
    <Box as="span" display="inline" ref={refs.setPositionReference} {...rest}>
      {children}
    </Box>
  );
};
