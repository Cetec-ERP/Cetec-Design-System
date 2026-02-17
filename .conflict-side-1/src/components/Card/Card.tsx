import { ReactNode, ElementType, MouseEvent } from 'react';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
import { Box, type BoxProps } from '../Box';
import { card, type CardVariantProps } from '@styled-system/recipes';

export type CardProps = Omit<BoxProps, keyof CardVariantProps> &
  CardVariantProps & {
    href?: string;
    children?: string | ReactNode;
    grabbed?: boolean;
    disabled?: boolean;
    interactive?: boolean;
  };

export const Card = (props: CardProps) => {
  const {
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

  // Determine if card should be interactive based on props (used for styling)
  const isInteractive = interactive || Boolean(href) || Boolean(onClick);

  // Determine the correct semantic element to render
  const asComponent: ElementType =
    (Boolean(href) && 'a') || (Boolean(onClick) && 'button') || 'div';

  return (
    <Box
      as={asComponent}
      data-grabbed={grabbed}
      className={cx(card({ variant, interactive: isInteractive }), className)}
      href={href}
      {...(isInteractive && !href ? { type: 'button' } : {})}
      {...(disabled &&
        href && {
          onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        })}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
