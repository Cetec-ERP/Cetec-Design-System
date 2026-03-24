import type { ReactNode } from 'react';

import { cx } from '@cetec/styled-system/css';
import { label, type LabelVariantProps } from '@cetec/styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

export type LabelProps = Omit<BoxProps, keyof LabelVariantProps> &
  LabelVariantProps & {
    htmlFor: string;
    children?: string | ReactNode;
  };

export const Label = (props: LabelProps) => {
  const { htmlFor, children, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Box
      as="label"
      htmlFor={htmlFor}
      className={cx(label({}), className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
