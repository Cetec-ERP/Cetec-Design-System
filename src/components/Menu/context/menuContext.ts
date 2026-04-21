import {
  Children,
  createContext,
  isValidElement,
  useContext,
  type HTMLProps,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';

import type { MenuVariantProps } from '@styled-system/recipes';

import type { BoxProps } from '~/components/Box';
import type { IconNamesList } from '~/components/Icon';
import type { ListDensity } from '~/components/List';

import type { Placement } from '@floating-ui/react';

export type MenuDensity = ListDensity;
export type MenuFilterMode = 'none' | 'contains';
export type SubMenuInteraction = 'hover' | 'digin';
export type MenuTriggerInteraction = 'click' | 'hover' | 'click-and-hover';

export type MenuProps = {
  trigger?: ReactElement;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  strategy?: 'absolute' | 'fixed';
  closeOnSelect?: boolean;
  inline?: boolean;
  triggerInteraction?: MenuTriggerInteraction;
  triggerOpenDelay?: number;
  triggerCloseDelay?: number;
  subMenuInteraction?: SubMenuInteraction;
  density?: MenuDensity;
  query?: string;
  onQueryChange?: (query: string) => void;
  filterMode?: MenuFilterMode;
  renderNoResults?: ReactNode;
  highlightMatches?: boolean;
  getItemText?: (item: { label?: string; description?: string }) => string;
  panel?: MenuVariantProps['panel'];
  /**
   * When this `Menu` is used as one section of a horizontal menubar, pass a
   * handler so Arrow Left / Arrow Right on **leaf** items and at the first
   * submenu level can move to the previous/next menubar section (APG Navigation
   * Menubar pattern). Typically closes this menu then focuses/opens the
   * adjacent section’s trigger.
   * Also enables focus order so the trigger keeps focus while the panel is open
   * until the user arrows into the list (otherwise focus would jump to the first
   * row and horizontal menubar keys would not run on the trigger).
   */
  onMenubarEdgeNavigate?: (direction: 1 | -1) => void;
} & BoxProps;

export type MenuItemVariant = 'default' | 'checkbox' | 'toggle' | 'divider';

export type MenuItemProps = Omit<
  BoxProps<'button'>,
  'as' | 'ref' | 'onClick' | 'type'
> &
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
    onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
  };

export type MenuGroupProps = BoxProps & {
  label?: string;
  children: ReactNode;
  divider?: boolean;
};

export type SubMenuProps = Omit<BoxProps, 'as'> &
  Omit<MenuVariantProps, 'iconBefore' | 'iconAfter'> & {
    label: string;
    description?: string;
    disabled?: boolean;
    selected?: boolean;
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
  panel?: MenuVariantProps['panel'];
  closeOnSelect: boolean;
  subMenuInteraction: SubMenuInteraction;
  inline: boolean;
  onCloseMenu: () => void;
  onPushDiginLevel: (title: string, levelChildren: ReactNode) => void;
  onPopDiginLevel: () => void;
  diginDepth: number;
  /** See `Menu` prop `onMenubarEdgeNavigate`. */
  onMenubarEdgeNavigate?: (direction: 1 | -1) => void;
};

export type MenuListContextValue = {
  activeIndex: number | null;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => HTMLProps<HTMLElement>;
  /** Move active item along the list main axis (looping), for nested submenu delegation. */
  navigateMainAxis?: (direction: 1 | -1) => void;
  /** 0 = root menu panel; each nested `SubMenu` flyout increments by 1. */
  nestedMenuDepth: number;
  /** Close the flyout for this list’s parent `SubMenu` and focus its trigger (APG popout Left). */
  closeParentSubMenuFlyout?: () => void;
};

export type MenuProviderProps = {
  children: ReactNode;
  root?: Partial<MenuRootContextValue>;
  filter?: Partial<MenuFilterContextValue>;
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

const noop = () => undefined;

export const defaultMenuFilterContextValue: MenuFilterContextValue = {
  query: '',
  filterMode: 'none',
  highlightMatches: true,
  getItemText: defaultGetItemText,
};

export const defaultMenuRootContextValue: MenuRootContextValue = {
  density: 'compact',
  panel: false,
  closeOnSelect: true,
  subMenuInteraction: 'hover',
  inline: false,
  onCloseMenu: noop,
  onPushDiginLevel: noop,
  onPopDiginLevel: noop,
  diginDepth: 0,
};

const MenuFilterContext = createContext<MenuFilterContextValue>({
  ...defaultMenuFilterContextValue,
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
  return Children.toArray(children).some((childNode) => {
    if (!isValidElement(childNode)) {
      return false;
    }

    const child = childNode as ReactElement<Record<string, unknown>>;

    const componentType = getComponentType(child);

    if (componentType === MENU_COMPONENT_TYPES.item) {
      const variant = child.props.variant as MenuItemVariant | undefined;
      if (variant === 'divider') {
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
