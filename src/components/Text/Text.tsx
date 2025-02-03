import { Box } from '../Box';
import { text, type TextVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { fontSizes, fonts } from '~/styles/tokens';

export interface TextProps extends Omit<SystemStyleObject, keyof TextVariantProps> {
  variants?: TextVariantProps;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
  level?: keyof typeof fontSizes;
  font?: keyof typeof fonts;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

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
        text({ font, italic, bold, underline, level }),
        css(styleProps),
        className,
      )}
    >
      {children}
    </Box>
  );
}
