import { ComponentPropsWithRef, type ElementType, createElement } from 'react';
import { box, type BoxVariantProps } from '@styled-system/recipes';
import type { SystemStyleObject } from '@styled-system/types';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';
/*
 * Imports from recipes are placeholders for if we want to add some kind of styling to Box
 */

/**
 * Our base polymorphic component, which provides the correct default props based on the rendered element type.
 * Note: in React 19+, ref is passed through as a prop, and onClick is inherited based on the element type.
 */
export type BoxProps = Omit<ComponentPropsWithRef<ElementType>, 'as'> &
  SystemStyleObject &
  BoxVariantProps & {
    as?: ElementType;
  };

export const Box = (props: BoxProps) => {
  const { as = 'div', ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const comboClassName = cx(box({}), className);
  return createElement(as, {
    className: comboClassName,
    ...otherProps,
  });
};

// React 19+: ComponentPropsWithRef<ElementType> is recommended as refs are now passed as props in function components.
// https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/
// ---------------
// ComponentPropsWithRef<ElementType> includes all HTML element props, so onClick is inherited.
// The inherited type would be:
// onClick?: React.MouseEventHandler<HTMLElement>
// i.e., (event: React.MouseEvent<HTMLElement>) => void
// ---------------
//
// In React 19+, you can access ref directly as a prop in function components - no forwardRef wrapper needed.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
