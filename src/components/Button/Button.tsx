import * as React from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { ButtonContent } from './ButtonContent';

export type ButtonProps = BoxProps & ButtonVariantProps & {
  variant?: 'primary' | 'standard' | 'hollow' | 'ghost' | 'cta' | 'danger';
  href?: string;
  loading?: boolean;
  className?: string;
  children?: string | React.ReactNode;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (
    {
      variant='primary',
      size,
      href,
      className,
      children,
      loading,
      disabled,
      as,
      ...props
    }: ButtonProps,
  ) => {
    const trulyDisabled = loading || disabled;
    const asComponent = href ? 'a' : 'button';
    const Component = as ?? 'button';
    return (
      <Box
        as={Component}
        href={href}
        disabled={trulyDisabled}
        aria-disabled={trulyDisabled}
        className={cx(
          button({ variant, size }), 
          className
        )}
        type={asComponent === 'button' ? 'button' : undefined}
        {...props}
      >
        <>
          <ButtonContent loading={!!loading}>{children}</ButtonContent>
        </>
      </Box>
    );
  };

export default Button;
