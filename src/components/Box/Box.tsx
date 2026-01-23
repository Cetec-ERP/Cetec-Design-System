import React, {
  ComponentPropsWithoutRef,
  type ElementType,
  createElement,
} from 'react';
import { box, type BoxVariantProps } from '@styled-system/recipes';
import type { StyleObject } from '~/types/panda-shim';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
/*
 * Imports from recipes are placeholders for if we want to add some kind of styling to Box
 */
export type BoxProps = Omit<ComponentPropsWithoutRef<ElementType>, 'as'> &
  StyleObject &
  BoxVariantProps & {
    as?: ElementType;
  };

export const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const [className, otherProps] = splitProps(props);
  const comboClassName = cx(box({}), className);
  return createElement(as, {
    className: comboClassName,
    ...otherProps,
  });
};
