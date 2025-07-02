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

export const Tooltip: FC<TooltipProps> = ({
  trigger = 'onHover',
  caret = true,
  text,
  title,
  children,
  placement = 'bottom',
  ...props
}) => {
  const { wrapper, tooltipContent } = tooltip({ placement, caret });
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== 'onClick') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
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
    <Box {...props} className={wrapper} ref={tooltipRef}>
      <Box
        onMouseEnter={trigger === 'onHover' ? handleMouseEnter : undefined}
        onMouseLeave={trigger === 'onHover' ? handleMouseLeave : undefined}
        onClick={trigger === 'onClick' ? handleClick : undefined}
      >
        {children}
      </Box>

      {show && (
        <Box className={tooltipContent}>
          {title && <Text as="p" textStyle={"body-md"} bold color={{base:'slate.0', _dark: 'slate.90'}}>{title}</Text>}
          {text && <Text as="span" textStyle={"body-sm"} color={{base:'slate.0', _dark: 'slate.90'}}>{text}</Text>}
        </Box>
      )}
    </Box>
  );
};
