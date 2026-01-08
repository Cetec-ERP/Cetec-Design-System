import { card, type CardVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { ReactNode, forwardRef } from 'react';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';

export type CardProps = Omit<BoxProps, keyof CardVariantProps> &
  CardVariantProps & {
    as?: React.ElementType;
    href?: string;
    onClick?: () => void;
    children?: string | ReactNode;
    grabbed?: boolean;
    disabled?: boolean;
    interactive?: boolean;
  };

export const Card = forwardRef<HTMLElement, CardProps>((props, ref) => {
  const {
    as,
    variant,
    href,
    onClick,
    children,
    disabled,
    grabbed,
    interactive,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  // Determine if card should be interactive based on props
  const isInteractive = interactive || Boolean(href) || Boolean(onClick);

  // Determine the element to render
  let asComponent: React.ElementType = as || 'div';
  if (!as) {
    if (href) {
      asComponent = 'a';
    } else if (isInteractive) {
      asComponent = 'button';
    }
  }

  const isButton = asComponent === 'button';
  const isLink = asComponent === 'a';

  return (
    <Box
      ref={ref}
      as={asComponent}
      data-grabbed={grabbed}
      className={cx(card({ variant, interactive: isInteractive }), className)}
      {...(href && { href })}
      {...(isButton && { type: 'button' })}
      {...(onClick && { onClick })}
      {...(isInteractive &&
        disabled && {
        disabled: true,
        'aria-disabled': true,
        ...(isLink && { tabIndex: -1 }),
      })}
      {...(!isInteractive && disabled && { 'aria-disabled': true })}
      {...otherProps}
    >
      {children}
    </Box>
  );
});
