import type { ReactNode } from 'react';

import { cx } from '@styled-system/css';
import { kbdGroup } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';

import { Kbd, type KbdValue } from './Kbd';

export type KbdGroupProps = Omit<BoxProps, 'children'> & {
  children?: ReactNode;
  keys?: KbdValue[];
};

export const KbdGroup = (props: KbdGroupProps) => {
  const { children, keys, ...rest } = props;
  const [className, otherProps] = splitProps(rest);

  return (
    <Box as="span" className={cx(kbdGroup({}), className)} {...otherProps}>
      {keys
        ? keys.map((keyValue, index) => (
            <Kbd key={`${keyValue}-${index}`} value={keyValue} />
          ))
        : children}
    </Box>
  );
};
