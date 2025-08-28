import { Box, type BoxProps } from '../Box';
import { tooltip, type TooltipVariantProps } from '@styled-system/recipes';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Text } from '../Text';

export type TooltipProps = Omit<BoxProps, keyof TooltipVariantProps> &
  TooltipVariantProps & {
    text?: string;
    title?: string;
    caret?: boolean;
    placement?: TooltipVariantProps['placement'];
    children?: string | ReactNode;
    trigger?: 'onHover' | 'onClick';
  };

const allPlacements: TooltipVariantProps['placement'][] = [
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-end',
  'bottom-start',
  'left-start',
  'left-end',
];

export const Tooltip: FC<TooltipProps> = ({
  trigger = 'onHover',
  caret = true,
  text,
  title,
  children,
  placement = 'bottom',
  ...props
}) => {
  const [currentPlacement, setCurrentPlacement] = useState(placement);
  const { wrapper, tooltipContent } = tooltip({
    placement: currentPlacement,
    caret,
  });
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const resolvedPlacement =
    typeof placement === 'string' ? placement : 'bottom';

  const checkPlacement = () => {
    const tooltipPostition = tooltipRef.current;
    const trigger = triggerRef.current;
    if (!tooltipPostition || !trigger) return;

    const triggerRect = trigger.getBoundingClientRect();

    for (const positioning of [
      resolvedPlacement,
      ...allPlacements.filter((pl) => pl !== resolvedPlacement),
    ]) {
      const tooltipRect = getSimulatedRect(
        triggerRect,
        tooltipPostition.offsetWidth,
        tooltipPostition.offsetHeight,
        positioning,
      );
      const fits =
        tooltipRect.top >= 0 &&
        tooltipRect.left >= 0 &&
        tooltipRect.bottom <= window.innerHeight &&
        tooltipRect.right <= window.innerWidth;
      if (fits) {
        setCurrentPlacement(positioning);
        return;
      }
    }
    setCurrentPlacement(placement);
  };

  type Placement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'bottom-start' | 'left-start' | 'right-start' | 'top-end' | 'bottom-end' | 'left-end' | 'right-end'

  function getSimulatedRect(
    triggerRect: DOMRect,
    tooltipWidth: number,
    tooltipHeight: number,
    place: Placement,
  ) {
    const gap = 8;

    const verticalCenter =
      triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
    const horizontalCenter =
      triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;

    switch (place) {
      case 'top':
        return {
          top: triggerRect.top - tooltipHeight - gap,
          bottom: triggerRect.top - gap,
          left: verticalCenter,
          right: verticalCenter + tooltipWidth,
        };
      case 'top-start':
        return {
          top: triggerRect.top - tooltipHeight - gap,
          bottom: triggerRect.top - gap,
          left: triggerRect.left,
          right: triggerRect.left + tooltipWidth,
        };
      case 'top-end':
        return {
          top: triggerRect.top - tooltipHeight - gap,
          bottom: triggerRect.top - gap,
          left: triggerRect.right - tooltipWidth,
          right: triggerRect.right,
        };
      case 'bottom':
        return {
          top: triggerRect.bottom + gap,
          bottom: triggerRect.bottom + tooltipHeight + gap,
          left: verticalCenter,
          right: verticalCenter + tooltipWidth,
        };
      case 'bottom-start':
        return {
          top: triggerRect.bottom + gap,
          bottom: triggerRect.bottom + gap + tooltipHeight,
          left: triggerRect.left,
          right: triggerRect.left + tooltipWidth,
        };
      case 'bottom-end':
        return {
          top: triggerRect.bottom + gap,
          bottom: triggerRect.bottom + gap + tooltipHeight,
          left: triggerRect.right - tooltipWidth,
          right: triggerRect.right,
        };
      case 'left':
        return {
          top: horizontalCenter,
          bottom: horizontalCenter + tooltipHeight,
          left: triggerRect.left - tooltipWidth - gap,
          right: triggerRect.left - gap,
        };
      case 'left-start':
        return {
          top: triggerRect.top,
          bottom: triggerRect.top + tooltipHeight,
          left: triggerRect.left - tooltipWidth - gap,
          right: triggerRect.left - gap,
        };
      case 'left-end':
        return {
          top: triggerRect.bottom - tooltipHeight,
          bottom: triggerRect.bottom,
          left: triggerRect.left - tooltipWidth - gap,
          right: triggerRect.left - gap,
        };
      case 'right':
        return {
          top: horizontalCenter,
          bottom: horizontalCenter + tooltipHeight,
          left: triggerRect.right + gap,
          right: triggerRect.right + gap + tooltipWidth,
        };
      case 'right-start':
        return {
          top: triggerRect.top,
          bottom: triggerRect.top + tooltipHeight,
          left: triggerRect.right + gap,
          right: triggerRect.right + gap + tooltipWidth,
        };
      case 'right-end':
        return {
          top: triggerRect.bottom - tooltipHeight,
          bottom: triggerRect.bottom,
          left: triggerRect.right + gap,
          right: triggerRect.right + gap + tooltipWidth,
        };
      default:
        return { top: 0, bottom: 0, left: 0, right: 0 };
    }
  }

  useEffect(() => {
    if (show) {
      checkPlacement();
      window.addEventListener('resize', checkPlacement);
      return () => window.removeEventListener('resize', checkPlacement);
    }
  }, [show, placement]);

  useEffect(() => {
    if (trigger !== 'onClick') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [trigger]);

  const handleMouseEnter = () => {
    if (trigger === 'onHover') setShow(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'onHover') setShow(false);
  };

  const handleClick = () => {
    if (trigger === 'onClick') setShow((prev) => !prev);
  };

  return (
    <Box {...props} className={wrapper}>
      <Box
        ref={triggerRef}
        onMouseEnter={trigger === 'onHover' ? handleMouseEnter : undefined}
        onMouseLeave={trigger === 'onHover' ? handleMouseLeave : undefined}
        onClick={trigger === 'onClick' ? handleClick : undefined}
      >
        {children}
      </Box>

      {show && (
        <Box className={tooltipContent} ref={tooltipRef}>
          {title && (
            <Text
              as="p"
              textStyle="body-md"
              bold
              color={{ base: 'slate.0', _dark: 'slate.90' }}
            >
              {title}
            </Text>
          )}
          {text && (
            <Text
              as="span"
              textStyle="body-sm"
              color={{ base: 'slate.0', _dark: 'slate.90' }}
            >
              {text}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};
