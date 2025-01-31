// SOURCE
// https://www.adebayosegun.com/blog/typography-component-with-panda-css-recipes

import { Box } from '../Box/Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type TextElement = 'p' | 'span';
type TextProps = TextVariantProps &
  Omit<React.ComponentProps<typeof Box>, 'as'> & {
  as?: TextElement; // Restrict 'as' prop to only text elements
  level?: number;
  font?: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
} & SystemStyleObject;

export function Text({
  as = 'p',
  font,
  level,
  italic,
  bold,
  underline,
  className,
  ...props
}: TextProps) {
  const { children, ...restProps } = props;
  const styleProps: SystemStyleObject = { ...restProps };

  return (
    <Box
      as={as}
      className={cx(
        text({ font, italic, bold, underline, as, level }),
        css(styleProps),
        className,
      )}
    >
      {children}
    </Box>
  );
}
