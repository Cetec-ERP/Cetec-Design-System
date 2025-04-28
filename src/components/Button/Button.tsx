import { FC, ReactNode } from 'react';
import { cx } from '@styled-system/css';
import { Box, type BoxProps } from '~/components/Box';
import { button, type ButtonVariantProps } from '@styled-system/recipes';
import { ButtonContent } from './ButtonContent';
import { splitProps } from '~/utils/splitProps';
import { buttonTypes } from '~/recipes/button';

export type ButtonProps = BoxProps &
  ButtonVariantProps & {
    href?: string;
    loading?: boolean;
    className?: string;
    children?: string | ReactNode;
    disabled?: boolean;
    type?: buttonTypes;
  };

export const Button: FC<ButtonProps> = ({
  variant,
  size,
  href,
  className: customClassName = '',
  children,
  loading,
  disabled,
  type,
  ...props
}: ButtonProps) => {
  const trulyDisabled = loading || disabled;

  const [className, otherProps] = splitProps(props);

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      className={cx(button({ variant, size }), className, customClassName)}
      {...(href ? { href } : { type: type || 'button' })}
      {...otherProps}
    >
      <ButtonContent loading={!!loading}>{children}</ButtonContent>
    </Box>
  );
};

export default Button;
