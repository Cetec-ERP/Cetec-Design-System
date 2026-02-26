import React, { createContext, useContext } from 'react';
import type { HTMLProps, ReactElement, ReactNode } from 'react';

import type { Placement } from '@floating-ui/react';
import type { BoxProps } from '~/components/Box';
import type { IconNamesList } from '~/components/Icon';
import type { MenuVariantProps } from '@styled-system/recipes';

export type MenuDensity = 'compact' | 'comfortable' | 'spacious';
export type MenuFilterMode = 'none' | 'contains';
export type SubMenuInteraction = 'hover' | 'drilldown';

export type MenuProps = {
  trigger?: React.ReactElement;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  strategy?: 'absolute' | 'fixed';
  closeOnSelect?: boolean;
  inline?: boolean;
  subMenuInteraction?: SubMenuInteraction;
  density?: MenuDensity;
  query?: string;
  onQueryChange?: (query: string) => void;
  filterMode?: MenuFilterMode;
  renderNoResults?: ReactNode;
  highlightMatches?: boolean;
  getItemText?: (item: { label?: string; description?: string }) => string;
  sidebar?: MenuVariantProps['sidebar'];
} & BoxProps;

export type MenuItemVariant =
  | 'default'
  | 'checkbox'
  | 'toggle'
  | 'section'
  | 'divider';

export type MenuItemProps = Omit<BoxProps, 'as'> &
  Omit<MenuVariantProps, 'iconBefore' | 'iconAfter'> & {
    label?: string;
    description?: string;
    variant?: MenuItemVariant;
    disabled?: boolean;
    selected?: boolean;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    href?: string;
    target?: string;
    rel?: string;
    closeOnSelect?: boolean;
    density?: MenuDensity;
    textValue?: string;
  };

export type MenuGroupProps = BoxProps & {
  label?: string;
  children: ReactNode;
  divider?: boolean;
};

export type SubMenuProps = Omit<BoxProps, 'as'> &
  Omit<MenuVariantProps, 'iconBefore'> & {
    label: string;
    description?: string;
    disabled?: boolean;
    iconBefore?: IconNamesList;
    interaction?: SubMenuInteraction;
    placement?: Placement;
    children: ReactNode;
    textValue?: string;
  };

export type MenuFilterContextValue = {
  query: string;
  filterMode: MenuFilterMode;
  highlightMatches: boolean;
  getItemText: (item: { label?: string; description?: string }) => string;
};

export type MenuRootContextValue = {
  density: MenuDensity;
  sidebar?: MenuVariantProps['sidebar'];
  closeOnSelect: boolean;
  subMenuInteraction: SubMenuInteraction;
  inline: boolean;
  onCloseMenu: () => void;
  onPushDrilldownPanel: (title: string, panelChildren: ReactNode) => void;
  onPopDrilldownPanel: () => void;
  drilldownDepth: number;
};

export type MenuListContextValue = {
  activeIndex: number | null;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => HTMLProps<HTMLElement>;
};

export const MENU_COMPONENT_TYPES = {
  group: 'MenuGroup',
  item: 'MenuItem',
  subMenu: 'SubMenu',
} as const;

export const menuComponentTypeKey = '__menuComponentType' as const;

const defaultGetItemText = ({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) => {
  return [label, description].filter(Boolean).join(' ').trim();
};

const MenuFilterContext = createContext<MenuFilterContextValue>({
  query: '',
  filterMode: 'none',
  highlightMatches: true,
  getItemText: defaultGetItemText,
});

const MenuRootContext = createContext<MenuRootContextValue | null>(null);

const MenuListContext = createContext<MenuListContextValue | null>(null);

export const useMenuFilterContext = () => useContext(MenuFilterContext);

export const useMenuRootContext = () => {
  const context = useContext(MenuRootContext);
  if (!context) {
    throw new Error('Menu compound components must be used within <Menu />');
  }

  return context;
};

export const useMenuListContext = () => {
  return useContext(MenuListContext);
};

export const MenuFilterProvider = MenuFilterContext.Provider;
export const MenuRootProvider = MenuRootContext.Provider;
export const MenuListProvider = MenuListContext.Provider;

export const deriveItemTextValue = ({
  textValue,
  label,
  description,
  getItemText,
}: {
  textValue?: string;
  label?: string;
  description?: string;
  getItemText: (item: { label?: string; description?: string }) => string;
}) => {
  if (textValue) {
    return textValue;
  }

  return getItemText({ label, description });
};

export const isItemMatch = ({
  textValue,
  query,
  filterMode,
}: {
  textValue: string;
  query: string;
  filterMode: MenuFilterMode;
}) => {
  if (filterMode === 'none' || !query.trim()) {
    return true;
  }

  return textValue.toLowerCase().includes(query.trim().toLowerCase());
};

export const getComponentType = (node: unknown) => {
  if (!node || typeof node !== 'object') {
    return null;
  }

  if (!('type' in node)) {
    return null;
  }

  const type = (node as { type?: { [menuComponentTypeKey]?: string } }).type;
  return type?.[menuComponentTypeKey] ?? null;
};

export const hasMatchingItems = (
  children: ReactNode,
  filterContext: MenuFilterContextValue,
): boolean => {
  return React.Children.toArray(children).some((childNode) => {
    if (!React.isValidElement(childNode)) {
      return false;
    }

    const child = childNode as ReactElement<Record<string, unknown>>;

    const componentType = getComponentType(child);

    if (componentType === MENU_COMPONENT_TYPES.item) {
      const variant = child.props.variant as MenuItemVariant | undefined;
      if (variant === 'divider' || variant === 'section') {
        return true;
      }

      const textValue = deriveItemTextValue({
        textValue: child.props.textValue as string | undefined,
        label: child.props.label as string | undefined,
        description: child.props.description as string | undefined,
        getItemText: filterContext.getItemText,
      });

      return isItemMatch({
        textValue,
        query: filterContext.query,
        filterMode: filterContext.filterMode,
      });
    }

    if (componentType === MENU_COMPONENT_TYPES.subMenu) {
      const textValue = deriveItemTextValue({
        textValue: child.props.textValue as string | undefined,
        label: child.props.label as string | undefined,
        description: child.props.description as string | undefined,
        getItemText: filterContext.getItemText,
      });

      const selfMatches = isItemMatch({
        textValue,
        query: filterContext.query,
        filterMode: filterContext.filterMode,
      });

      return (
        selfMatches ||
        hasMatchingItems(child.props.children as ReactNode, filterContext)
      );
    }

    if (componentType === MENU_COMPONENT_TYPES.group) {
      return hasMatchingItems(child.props.children as ReactNode, filterContext);
    }

    return true;
  });
};

export const getHighlightedTextParts = (value: string, query: string) => {
  if (!query.trim()) {
    return [{ text: value, match: false }];
  }

  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regExp = new RegExp(`(${safeQuery})`, 'ig');
  const parts = value.split(regExp).filter((part) => part.length > 0);

  return parts.map((part) => ({
    text: part,
    match: part.toLowerCase() === query.toLowerCase(),
  }));
};
