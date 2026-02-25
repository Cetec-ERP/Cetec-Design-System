import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { cx } from '@styled-system/css';
import { menu } from '@styled-system/recipes';
import {
  type HTMLProps,
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { splitProps } from '~/utils/splitProps';
import {
  deriveItemTextValue,
  isItemMatch,
  MenuFilterProvider,
  MenuListProvider,
  MENU_COMPONENT_TYPES,
  menuComponentTypeKey,
  type SubMenuProps,
  useMenuFilterContext,
  useMenuListContext,
  useMenuRootContext,
} from './menuContext';

export const SubMenu = (props: SubMenuProps) => {
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const {
    label,
    description,
    disabled,
    iconBefore,
    interaction,
    placement,
    children,
    textValue,
    density,
    ...rest
  } = props;
  const [itemClassName, htmlProps] = splitProps(rest);
  const menuItemHtmlProps: Omit<HTMLProps<HTMLElement>, 'ref'> = {
    ...htmlProps,
  };

  const rootContext = useMenuRootContext();
  const filterContext = useMenuFilterContext();
  const parentListContext = useMenuListContext();

  const resolvedInteraction = interaction ?? rootContext.subMenuInteraction;
  const classes = menu({ density: density ?? rootContext.density });

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

  if (!isVisible) {
    return null;
  }

  const listItem = useListItem({ label: resolvedTextValue });

  if (resolvedInteraction === 'drilldown') {
    const buttonProps: HTMLProps<HTMLElement> = parentListContext
      ? parentListContext.getItemProps({
          onClick: (event?: MouseEvent<HTMLElement>) => {
            event?.preventDefault();
            event?.stopPropagation();
            if (!disabled) {
              rootContext.onPushDrilldownPanel(label, children);
            }
          },
          onKeyDown: (event) => {
            if (
              event.key === 'ArrowRight' ||
              event.key === 'Enter' ||
              event.key === ' '
            ) {
              event.preventDefault();
              event.stopPropagation();
              if (!disabled) {
                rootContext.onPushDrilldownPanel(label, children);
              }
            }
          },
        })
      : {
          onClick: (event?: MouseEvent<HTMLElement>) => {
            event?.preventDefault();
            event?.stopPropagation();
            if (!disabled) {
              rootContext.onPushDrilldownPanel(label, children);
            }
          },
          onKeyDown: (event?: KeyboardEvent<HTMLElement>) => {
            if (
              event &&
              (event.key === 'ArrowRight' ||
                event.key === 'Enter' ||
                event.key === ' ')
            ) {
              event.preventDefault();
              event.stopPropagation();
              if (!disabled) {
                rootContext.onPushDrilldownPanel(label, children);
              }
            }
          },
        };
    const drilldownButtonProps: Omit<HTMLProps<HTMLElement>, 'ref'> = {
      ...buttonProps,
    };

    return (
      <button
        {...menuItemHtmlProps}
        role="menuitem"
        disabled={disabled}
        className={classes.item}
        ref={(node: HTMLButtonElement | null) => {
          listItem.ref(node as HTMLElement | null);
        }}
        tabIndex={
          parentListContext
            ? parentListContext.activeIndex === listItem.index
              ? 0
              : -1
            : 0
        }
        {...drilldownButtonProps}
        type="button"
      >
        {iconBefore && (
          <Box className={classes.itemIconBefore}>
            <Icon name={iconBefore} />
          </Box>
        )}

        <Box className={classes.itemMain}>
          <Text className={classes.itemLabel} textStyle="body.sm">
            {label}
          </Text>
          {description && (
            <Text className={classes.itemDescription} textStyle="body.xs">
              {description}
            </Text>
          )}
        </Box>

        <Box className={classes.submenuCaret}>
          <Icon name="caret-right" />
        </Box>
      </button>
    );
  }

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const floatingListRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const handleOpenChange = (
    nextOpen: boolean,
    _event?: Event,
    reason?: string,
  ) => {
    if (
      !nextOpen &&
      reason === 'focus-out' &&
      resolvedInteraction === 'hover' &&
      parentId != null
    ) {
      return;
    }
    setOpen(nextOpen);
  };

  const floating = useFloating({
    nodeId,
    open,
    onOpenChange: handleOpenChange,
    placement: placement ?? 'right-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({ mainAxis: 0, alignmentAxis: -4 }),
      flip(),
      shift({ padding: 8 }),
    ],
  });

  const hover = useHover(floating.context, {
    enabled: !disabled && parentId != null,
    delay: { open: 75 },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const click = useClick(floating.context, {
    event: 'mousedown',
    toggle: false,
    ignoreMouse: true,
  });
  const dismiss = useDismiss(floating.context, { bubbles: true });
  const role = useRole(floating.context, { role: 'menu' });
  const listNavigation = useListNavigation(floating.context, {
    listRef: floatingListRef,
    activeIndex,
    onNavigate: setActiveIndex,
    nested: true,
  });
  const typeahead = useTypeahead(floating.context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: open ? setActiveIndex : undefined,
    resetMs: 600,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, dismiss, role, listNavigation, typeahead],
  );

  useEffect(() => {
    if (!tree) {
      return;
    }

    const handleTreeClick = () => {
      setOpen(false);
    };

    const onSubMenuOpen = (event: {
      nodeId: string;
      parentId: string | null;
    }) => {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setOpen(false);
      }
    };

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (open && tree) {
      tree.events.emit('menuopen', { parentId, nodeId });
    }
  }, [tree, open, nodeId, parentId]);

  const nestedFilterContext = useMemo(
    () => ({
      query: filterContext.query,
      filterMode: filterContext.filterMode,
      highlightMatches: filterContext.highlightMatches,
      getItemText: filterContext.getItemText,
    }),
    [filterContext],
  );

  const nestedListContext = {
    activeIndex,
    getItemProps: (userProps?: HTMLProps<HTMLElement>) =>
      getItemProps(userProps) as HTMLProps<HTMLElement>,
  };

  const floatingStyle = {
    ...floating.floatingStyles,
    ...(htmlProps.style || {}),
  };

  const parentItemProps = parentListContext
    ? parentListContext.getItemProps({
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          if (event.key === 'ArrowRight' && !disabled) {
            event.preventDefault();
            setOpen(true);
          }
        },
      })
    : {
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          if (event.key === 'ArrowRight' && !disabled) {
            event.preventDefault();
            setOpen(true);
          }
        },
      };

  const referenceProps = getReferenceProps(parentItemProps);
  const referencePropsWithoutRef: Omit<HTMLProps<HTMLElement>, 'ref'> = {
    ...referenceProps,
  };

  return (
    <FloatingNode id={nodeId}>
      <button
        {...menuItemHtmlProps}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={disabled}
        className={cx(classes.item, itemClassName)}
        ref={(node: HTMLButtonElement | null) => {
          listItem.ref(node as HTMLElement | null);
          floating.refs.setReference(node);
        }}
        tabIndex={
          parentListContext
            ? parentListContext.activeIndex === listItem.index
              ? 0
              : -1
            : 0
        }
        {...referencePropsWithoutRef}
        type="button"
      >
        {iconBefore && (
          <Box className={classes.itemIconBefore}>
            <Icon name={iconBefore} />
          </Box>
        )}

        <Box className={classes.itemMain}>
          <Text className={classes.itemLabel} textStyle="body.sm">
            {label}
          </Text>
          {description && (
            <Text className={classes.itemDescription} textStyle="body.xs">
              {description}
            </Text>
          )}
        </Box>

        <Box className={classes.submenuCaret}>
          <Icon name="caret-right" />
        </Box>
      </button>

      {open && (
        <FloatingPortal>
          <FloatingFocusManager
            context={floating.context}
            modal={false}
            initialFocus={-1}
            returnFocus={false}
          >
            <MenuFilterProvider value={nestedFilterContext}>
              <MenuListProvider value={nestedListContext}>
                <Box
                  ref={floating.refs.setFloating}
                  className={classes.wrapper}
                  {...getFloatingProps({
                    onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
                      if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        setOpen(false);
                      }
                    },
                  })}
                  style={floatingStyle}
                >
                  <FloatingList
                    elementsRef={floatingListRef}
                    labelsRef={labelsRef}
                  >
                    <Box className={classes.list}>{children}</Box>
                  </FloatingList>
                </Box>
              </MenuListProvider>
            </MenuFilterProvider>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </FloatingNode>
  );
};

(SubMenu as unknown as { [menuComponentTypeKey]: string })[
  menuComponentTypeKey
] = MENU_COMPONENT_TYPES.subMenu;
