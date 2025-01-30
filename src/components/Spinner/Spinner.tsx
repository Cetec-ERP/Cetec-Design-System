import { cx } from '@styled-system/css';
import { Box } from '../Box/Box';
import { spinnerStyle } from './spinnerStyles';
import { type HTMLStyledProps } from '@styled-system/types';
// import { defineKeyframes } from '@pandacss/dev'

// export const keyframes = defineKeyframes({
//   spin: {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' }
//   }
// })

type SpinnerProps = HTMLStyledProps<'div'> & {
  size?: 'standard' | 'small' | 'large';
};

export const Spinner = ({ size = 'standard', className, ...props }: SpinnerProps) => {
  return <Box className={cx(spinnerStyle({ size }), className)} {...props} />;
};
