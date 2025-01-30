import { Box } from '../Box/Box';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = HeadingVariantProps &
  Omit<React.ComponentProps<typeof Box>, 'as'> & {
  as?: HeadingElement; // Restrict 'as' prop to only heading elements
} & SystemStyleObject;

export function Heading({
  as = 'h2',
  className,
  ...props
}: HeadingProps) {
  const { children, ...restProps } = props;
  const styleProps: SystemStyleObject = { ...restProps };

  return (
    <Box
      as={as}
      className={cx(
        heading({ as }),
        css(styleProps),
        className,
      )}
    >
      {children}
    </Box>
  );
}