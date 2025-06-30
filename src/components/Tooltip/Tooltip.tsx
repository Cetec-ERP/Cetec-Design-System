import { Box, type BoxProps } from '../Box';
import { tooltip, type TooltipVariantProps } from '@styled-system/recipes';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

export type TooltipProps = Omit<BoxProps, keyof TooltipVariantProps> &
  TooltipVariantProps & {
    text?: string;
    title?: string;
    caret?: boolean;
    placement?:
        'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end';
    children?: string | ReactNode;
    trigger?: 'onHover' | 'onClick';
  };

  export const Tooltip: FC<TooltipProps> = ({
    trigger = 'onHover',
    caret = true,
    text,
    title,
    children,
    placement = 'bottom', // ✅ Set default here
    ...props
  }) => {
    const styles = tooltip({ position: placement }); // ✅ styles.tooltipContent is now based on placement
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
      <Box as="div" {...props} className={styles.wrapper} ref={tooltipRef}>
        <Box
          className={styles.tooltipTriger}
          onMouseEnter={trigger === 'onHover' ? handleMouseEnter : undefined}
          onMouseLeave={trigger === 'onHover' ? handleMouseLeave : undefined}
          onClick={trigger === 'onClick' ? handleClick : undefined}
        >
          {children}
        </Box>
  
        {show && (
          <Box as="span" className={styles.tooltipContent}>
            {title && <Box as="p">{title}</Box>}
            {text && <Box as="span">{text}</Box>}
          </Box>
        )}
      </Box>
    );
  };
  
