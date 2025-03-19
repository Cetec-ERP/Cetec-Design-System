import { FC, ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { ButtonContent } from './ButtonContent';

type buttonVariants =
  | 'primary'
  | 'standard'
  | 'hollow'
  | 'ghost'
  | 'cta'
  | 'danger';

type buttonTypes = 'submit' | 'reset' | 'button';

export type ButtonProps = BoxProps &
  ButtonVariantProps & {
    variant?: buttonVariants;
    href?: string;
    loading?: boolean;
    className?: string;
    children?: string | ReactNode;
    disabled?: boolean;
    type?: buttonTypes;
  };

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size,
  href,
  className,
  children,
  loading = false,
  disabled,
  as,
  type,
  ...props
}: ButtonProps) => {
  const trulyDisabled = loading || disabled;

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      className={cx(button({ variant, size }), className)}
      {...(href && { href })}
      {...(!href && { type: type || 'button' })}
      {...props}
    >
      <ButtonContent loading={!!loading}>{children}</ButtonContent>
    </Box>
  );
};

export default Button;
