import type { ChangeEventHandler, HTMLProps, MouseEvent } from 'react';

import { useFloatingTree, useListItem } from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { listItem as listItemRecipe } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Divider } from '../Divider';
import { ListItemContent } from '../List';

import {
  deriveItemTextValue,
  isItemMatch,
  MENU_COMPONENT_TYPES,
  menuComponentTypeKey,
  type MenuItemProps,
  useMenuFilterContext,
  useMenuListContext,
  useMenuRootContext,
} from './context/menuContext';

export const MenuItem = (props: MenuItemProps) => {
  const {
    label,
    description,
    variant = 'default',
    disabled,
    selected,
    iconBefore,
    iconAfter,
    href,
    target,
    rel,
    closeOnSelect,
    density,
    textValue,
    onClick,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);

  const rootContext = useMenuRootContext();
  const tree = useFloatingTree();
  const filterContext = useMenuFilterContext();
  const listContext = useMenuListContext();
  const visualVariant: 'default' | 'checkbox' | 'toggle' =
    variant === 'divider' ? 'default' : variant;

  const resolvedDensity = density ?? rootContext.density;
  const classes = listItemRecipe({
    density: resolvedDensity,
    variant: visualVariant,
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
    selected: Boolean(selected),
  });

  const resolvedTextValue = deriveItemTextValue({
    textValue,
    label,
    description,
    getItemText: filterContext.getItemText,
  });

  const isVisible = isItemMatch({
    textValue: resolvedTextValue,
    query: filterContext.query,
    filterMode: filterContext.filterMode,
  });

  const listItemData = useListItem({ label: resolvedTextValue });

  // TODO: Fix Divider collapse
  if (variant === 'divider') {
    return <Divider />;
  }

  if (!isVisible) {
    return null;
  }

  const shouldCloseOnSelect = closeOnSelect ?? rootContext.closeOnSelect;
  const controlName = textValue ?? label ?? 'menu-item';

  const handleSelect = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      tree?.events.emit('click');
    }

    if (!event.defaultPrevented && shouldCloseOnSelect) {
      rootContext.onCloseMenu();
    }
  };

  const handleControlChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  type MenuInteractionProps = Pick<
    HTMLProps<HTMLElement>,
    'onClick' | 'onKeyDown' | 'onPointerMove' | 'onMouseMove' | 'onFocus'
  >;

  const itemProps = (
    listContext
      ? listContext.getItemProps({
          onClick: handleSelect,
        })
      : {
          onClick: handleSelect,
        }
  ) as MenuInteractionProps;

  const role =
    variant === 'checkbox' || variant === 'toggle'
      ? 'menuitemcheckbox'
      : 'menuitem';

  // const selectionControl =
  //   variant === 'checkbox' || variant === 'toggle' ? variant : 'none';

  const elementProps: BoxProps<'a'> | BoxProps<'button'> = href
    ? ({
        as: 'a',
        href,
        target,
        rel,
        ...(disabled && {
          onClick: (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
          },
        }),
      } satisfies BoxProps<'a'>)
    : ({
        as: 'button',
        type: 'button',
        disabled,
      } satisfies BoxProps<'button'>);

  const itemRef = (node: HTMLAnchorElement | HTMLButtonElement | null) => {
    listItemData.ref(node as HTMLElement | null);
  };

  return (
    <Box
      {...elementProps}
      className={cx(classes, className)}
      ref={itemRef}
      role={role}
      aria-checked={
        variant === 'checkbox' || variant === 'toggle'
          ? Boolean(selected)
          : undefined
      }
      aria-disabled={disabled}
      data-selected={selected}
      data-disabled={disabled}
      data-active={
        listContext ? listContext.activeIndex === listItemData.index : false
      }
      tabIndex={
        listContext
          ? listContext.activeIndex === listItemData.index
            ? 0
            : -1
          : 0
      }
      {...itemProps}
      {...otherProps}
    >
      <ListItemContent
        label={label}
        description={description}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        selected={selected}
        variant={variant}
        controlName={controlName}
        onControlChange={handleControlChange}
        query={filterContext.query}
        highlightMatches={filterContext.highlightMatches}
        density={resolvedDensity}
      />
    </Box>
  );
};

(MenuItem as unknown as { [menuComponentTypeKey]: string })[
  menuComponentTypeKey
] = MENU_COMPONENT_TYPES.item;
