import { Text, type TextProps } from '../Text';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

 // Restrict 'as' prop to only heading elements
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps
  extends Omit<TextProps, 'as' | 'size' | 'family' | 'italic' | 'bold' | 'underline'>,
    HeadingVariantProps {
  as?: HeadingElement;
}

export function Heading({
  as = 'h2',
  className,
  ...props
}: HeadingProps) {
  const { children, ...restProps } = props;
  const styleProps: SystemStyleObject = { ...restProps };

  return (
    <Text
      as={as}
      className={cx(
        heading({ as }),
        css(styleProps),
        className,
      )}
    >
      {children}
    </Text>
  );
}