// src/components/Tooltip/Tooltip.tsx
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

import {
  FloatingArrow,
  FloatingPortal,
  type Placement,
  arrow,
  useDismiss,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { type TooltipVariantProps, tooltip } from '@styled-system/recipes';
import { token } from '@styled-system/tokens';

import {
  createOverlayMiddleware,
  useOverlayFloating,
} from '~/system/floating-ui/floating';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';

/** Props for {@link Tooltip}, nonessential contextual text shown on hover or focus. */
export type TooltipProps = Omit<
  BoxProps,
  keyof TooltipVariantProps | 'children'
> &
  TooltipVariantProps & {
    /** Text displayed in the tooltip body. Use an accessible label instead when this is essential control information. */
    text: string;
    /** Optional title displayed above the tooltip body. */
    title?: string;
    /**
     * Shows the arrow pointing at the trigger.
     * @default true
     */
    caret?: boolean;
    /**
     * Preferred placement relative to the trigger. The overlay can flip when it does not fit.
     * @default 'bottom'
     */
    placement?: Placement;
    /**
     * Gap between trigger and tooltip, in pixels.
     * @default 8
     */
    offset?: number;
    /** Hover open/close delay in milliseconds, or separate `open` and `close` delays. */
    delay?: number | { open: number; close: number };
    /** Trigger content, wrapped in an inline-flex span to receive floating interaction props. */
    children?: ReactNode;
    /**
     * Tooltip recipe size.
     * @default 'md'
     */
    size?: TooltipVariantProps['size'];
  };

/**
 * Shows nonessential contextual text for a trigger on hover and keyboard focus.
 *
 * The trigger is wrapped in a span and linked with `aria-describedby`; Escape
 * dismisses the portalled tooltip. Do not use a tooltip as the only accessible
 * name or instruction for an interactive control.
 *
 * @example
 * ```tsx
 * <Tooltip text="Copies the link"><IconButton iconName="copy" altText="Copy link" /></Tooltip>
 * ```
 */
export const Tooltip = (props: TooltipProps) => {
  const {
    caret = true,
    size = 'md',
    text,
    title,
    children,
    placement = 'bottom',
    offset = 8,
    delay,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useOverlayFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: createOverlayMiddleware({
      offset,
      extras: [arrow({ element: arrowRef })],
    }),
  });

  const hover = useHover(context, { move: false, delay });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // useRole sets role="tooltip" on the floating element and
  // aria-describedby on the reference — no manual useId needed
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const classes = tooltip({ size, hasTitle: !!title });

  return (
    <>
      <Box
        as="span"
        ref={refs.setReference}
        display="inline-flex"
        alignItems="center"
        lineHeight="none"
        {...getReferenceProps()}
      >
        {children}
      </Box>

      {isOpen && (
        <FloatingPortal>
          <Box
            ref={refs.setFloating}
            style={floatingStyles}
            className={cx(classes.tooltipContent, className)}
            {...(getFloatingProps() as Record<string, unknown>)}
            {...otherProps}
          >
            {title && <Text className={classes.title}>{title}</Text>}
            {text && <Text className={classes.text}>{text}</Text>}
            {caret && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                fill={token.var('colors.bg.neutral.inverse')}
              />
            )}
          </Box>
        </FloatingPortal>
      )}
    </>
  );
};
