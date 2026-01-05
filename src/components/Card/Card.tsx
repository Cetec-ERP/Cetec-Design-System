import { card, CardVariantProps } from '@styled-system/recipes';
import { Box, BoxProps } from '../Box';
import { ReactNode } from 'react';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';

export type CardProps = Omit<BoxProps, keyof CardVariantProps> &
  CardVariantProps & {
    href?: string;
    onClick?: () => void;
    children?: string | ReactNode;
    grabbed?: boolean;
    disabled?: boolean;
  };

export const Card: React.FC<CardProps> = ({
  variant,
  href,
  onClick,
  children,
  disabled,
  grabbed,
  ...props
}: CardProps) => {
  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as={href ? 'a' : onClick ? 'button' : 'div'}
      disabled={disabled}
      aria-disabled={disabled}
      data-grabbed={grabbed}
      className={cx(card({ variant }), className)}
      {...(href ? { href } : onClick ? { onClick } : {})}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
