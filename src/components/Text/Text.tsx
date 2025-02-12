import React, {
  type ElementType,
  type AllHTMLAttributes,
} from 'react';
//import { Box, BoxProps } from '~/components/Box';
import { text } from '@styled-system/recipes';
import { type FontToken } from '@styled-system/tokens';
import { splitCssProps } from '@styled-system/jsx';
import { cx, css } from '@styled-system/css';

export interface TextProps extends Omit<AllHTMLAttributes<HTMLElement>, 'as'> {
  italic?: boolean;
  family?: FontToken;
  bold?: boolean;
  underline?: boolean;
  children?: string | React.ReactNode;
  as?: ElementType;
  className?: string;
};

export const Text: React.FC<TextProps> = ( 
  { as, italic, family, bold, underline, children, ...props }: TextProps,
) => {
//  const Component = as ?? 'p';

  const [cssProps, otherProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;
  const className = css(cssProp, styleProps);

  return (
    <p
//      as={Component}
      className={cx(
          text({ family, bold, underline, italic }),
          className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  );
};
