import type { ReactElement } from 'react';
import { Children, isValidElement, cloneElement } from 'react';

import { cx } from '@styled-system/css';
import { listItem, type ListItemVariantProps } from '@styled-system/recipes';

import { type IconNamesList } from '~/components/Icon';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Divider } from '../Divider';

import { useListContext } from './listContext';

import type { ListItemContentProps } from './ListItemContent';

export type ListItemProps = Omit<
  BoxProps<'button'>,
  keyof ListItemVariantProps | 'as' | 'type'
> &
  Omit<ListItemVariantProps, 'selected' | 'iconBefore' | 'iconAfter'> & {
    selected?: boolean;
    variant?: ListItemVariantProps['variant'];
    density?: ListItemVariantProps['density'];
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
  };

export const ListItem = (props: ListItemProps) => {
  const {
    selected = false,
    density,
    variant,
    children,
    iconBefore,
    iconAfter,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const listContext = useListContext();

  const isSelected = Boolean(selected);
  const resolvedDensity = density ?? listContext.density;

  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const mergeProps: Partial<ListItemContentProps> = {
        selected: isSelected || undefined,
        variant,
        density: resolvedDensity,
        iconBefore,
        iconAfter,
      };
      return cloneElement(
        child as ReactElement<Partial<ListItemContentProps>>,
        mergeProps,
      );
    }
    return child;
  });

  const classes = listItem({
    selected: isSelected,
    density: resolvedDensity,
    variant: variant ?? 'default',
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
  });

  if (variant === 'divider') {
    return (
      <Box className={classes.divider}>
        <Divider />
      </Box>
    );
  }

  return (
    <Box
      as="button"
      type="button"
      className={cx(classes.wrapper, className)}
      role="option"
      aria-selected={isSelected}
      data-selected={isSelected || undefined}
      {...otherProps}
    >
      {clonedChildren}
    </Box>
  );
};
