import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useFloatingNodeId,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { cx } from '@styled-system/css';
import { menu } from '@styled-system/recipes';
import {
  Children,
  cloneElement,
  type HTMLProps,
  type CSSProperties,
  type ReactNode,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import {
  hasMatchingItems,
  MenuFilterProvider,
  MenuListProvider,
  MenuRootProvider,
  type MenuProps,
  type MenuRootContextValue,
} from './menuContext';
import { splitProps } from '~/utils/splitProps';

type DrilldownPanel = {
  key: string;
  title: string;
  children: ReactNode;
};

const defaultGetItemText = ({
  label,
  description,
}: {
  label?: string;
  description?: string;
}) => {
  return [label, description].filter(Boolean).join(' ').trim();
};

const withPanelScopedKeys = (nodes: ReactNode, panelKey: string) => {
  return Children.map(nodes, (childNode, index) => {
    if (!isValidElement(childNode)) {
      return childNode;
    }

    const childKey = childNode.key ?? index;
    return cloneElement(childNode, {
      key: `${panelKey}-${String(childKey)}`,
    });
  });
};

export const Menu = (props: MenuProps) => {
  const nodeId = useFloatingNodeId();
  const {
    trigger,
    children,
    open,
    defaultOpen,
    onOpenChange,
    placement = 'bottom-start',
    strategy = 'absolute',
    closeOnSelect = true,
    inline = false,
    subMenuInteraction = 'hover',
    density = 'compact',
    query = '',
    filterMode = 'none',
    renderNoResults,
    highlightMatches = Boolean(query),
    getItemText = defaultGetItemText,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const classes = menu({ density });

  const hasReference = Boolean(trigger) && !inline;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpenState = (nextOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const [drilldownPanels, setDrilldownPanels] = useState<DrilldownPanel[]>([]);
  const [wrapperSize, setWrapperSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });
  const drilldownDepth = drilldownPanels.length;

  useEffect(() => {
    if (!isOpen) {
      setDrilldownPanels([]);
    }
  }, [isOpen]);

  const floating = useFloating({
    nodeId,
    open: hasReference ? isOpen : true,
    onOpenChange: setOpenState,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip(), shift({ padding: 8 }), size()],
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const click = useClick(floating.context, { enabled: hasReference });
  const dismiss = useDismiss(floating.context, { enabled: hasReference });
  const role = useRole(floating.context, { role: 'menu' });
  const listNavigation = useListNavigation(floating.context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });
  const typeahead = useTypeahead(floating.context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
    resetMs: 600,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNavigation, typeahead],
  );

  const filterContextValue = useMemo(
    () => ({
      query,
      filterMode,
      highlightMatches,
      getItemText,
    }),
    [filterMode, getItemText, highlightMatches, query],
  );

  const activePanelChildren =
    drilldownPanels[drilldownPanels.length - 1]?.children ?? children;

  const hasVisibleResults = hasMatchingItems(
    activePanelChildren,
    filterContextValue,
  );

  const rootContextValue: MenuRootContextValue = {
    density,
    closeOnSelect,
    subMenuInteraction,
    inline,
    onCloseMenu: () => {
      setOpenState(false);
      setDrilldownPanels([]);
    },
    onPushDrilldownPanel: (title, panelChildren) => {
      setDrilldownPanels((prev) => [
        ...prev,
        {
          key: `${title}-${prev.length}`,
          title,
          children: panelChildren,
        },
      ]);
    },
    onPopDrilldownPanel: () => {
      setDrilldownPanels((prev) => prev.slice(0, -1));
    },
    drilldownDepth,
  };

  const menuListContextValue = {
    activeIndex,
    getItemProps: (userProps?: HTMLProps<HTMLElement>) =>
      getItemProps(userProps) as HTMLProps<HTMLElement>,
  };

  const panels = [{ key: 'root', title: 'Menu', children }, ...drilldownPanels];
  const activePanel = panels[Math.min(drilldownDepth, panels.length - 1)]!;
  const panelCount = panels.length;
  const trackWidthPercent = panelCount * 100;
  const panelWidthPercent = 100 / panelCount;
  const trackTranslatePercent = (drilldownDepth * 100) / panelCount;
  const shouldUseDrilldownSizing =
    subMenuInteraction === 'drilldown' && hasVisibleResults;

  const sizeProbeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isOpen || !shouldUseDrilldownSizing) {
      setWrapperSize({ width: null, height: null });
      return;
    }

    const sizeProbe = sizeProbeRef.current;
    if (!sizeProbe) {
      return;
    }

    const updateWrapperSize = () => {
      const nextWidth = Math.ceil(sizeProbe.scrollWidth);
      const nextHeight = Math.ceil(sizeProbe.scrollHeight);

      setWrapperSize((previous) => {
        if (previous.width === nextWidth && previous.height === nextHeight) {
          return previous;
        }

        return {
          width: nextWidth,
          height: nextHeight,
        };
      });
    };

    updateWrapperSize();

    const resizeObserver = new ResizeObserver(updateWrapperSize);
    resizeObserver.observe(sizeProbe);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    activePanel.children,
    activePanel.key,
    activePanel.title,
    density,
    drilldownDepth,
    hasVisibleResults,
    isOpen,
    shouldUseDrilldownSizing,
  ]);

  const drilldownWrapperStyle: CSSProperties =
    shouldUseDrilldownSizing && wrapperSize.width && wrapperSize.height
      ? {
          width: `${wrapperSize.width}px`,
          height: `${wrapperSize.height}px`,
        }
      : {};

  const floatingStyle = {
    ...(hasReference && !inline ? floating.floatingStyles : {}),
    ...drilldownWrapperStyle,
    ...otherProps.style,
  };

  const content = (
    <MenuRootProvider value={rootContextValue}>
      <MenuFilterProvider value={filterContextValue}>
        <Box
          ref={floating.refs.setFloating}
          className={cx(classes.wrapper, className)}
          {...getFloatingProps()}
          {...otherProps}
          style={floatingStyle}
        >
          {!hasVisibleResults && (
            <Box className={classes.noResults}>
              {renderNoResults ?? (
                <Text textStyle="body.sm">No results found</Text>
              )}
            </Box>
          )}

          {hasVisibleResults && (
            <Box className={classes.panelsViewport}>
              {shouldUseDrilldownSizing && (
                <Box
                  ref={sizeProbeRef}
                  className={classes.sizeProbe}
                  aria-hidden
                >
                  <Box className={classes.panel}>
                    {drilldownDepth > 0 && (
                      <Box
                        as="button"
                        type="button"
                        className={classes.backHeader}
                      >
                        <Icon name="caret-left" fill="icon" />
                        {activePanel.title}
                      </Box>
                    )}
                    <Box className={classes.list}>
                      {withPanelScopedKeys(
                        activePanel.children,
                        `${activePanel.key}-probe`,
                      )}
                    </Box>
                  </Box>
                </Box>
              )}

              <Box
                className={classes.panelsTrack}
                style={{
                  width: `${trackWidthPercent}%`,
                  transform: `translateX(-${trackTranslatePercent}%)`,
                }}
              >
                {panels.map((panel, index) => {
                  const isActivePanel = index === drilldownDepth;
                  const panelChildren = withPanelScopedKeys(
                    panel.children,
                    panel.key,
                  );

                  if (!isActivePanel) {
                    return (
                      <Box
                        key={panel.key}
                        className={classes.panel}
                        style={{
                          flex: `0 0 ${panelWidthPercent}%`,
                        }}
                        aria-hidden
                      >
                        {index > 0 && (
                          <Box
                            as="button"
                            type="button"
                            className={classes.backHeader}
                            onClick={rootContextValue.onPopDrilldownPanel}
                          >
                            <Icon name="caret-left" fill="icon" />
                            {panel.title}
                          </Box>
                        )}
                        <Box className={classes.list}>{panelChildren}</Box>
                      </Box>
                    );
                  }

                  return (
                    <MenuListProvider
                      key={panel.key}
                      value={menuListContextValue}
                    >
                      <FloatingList elementsRef={listRef} labelsRef={labelsRef}>
                        <Box
                          className={classes.panel}
                          style={{
                            flex: `0 0 ${panelWidthPercent}%`,
                          }}
                        >
                          {index > 0 && (
                            <Box
                              as="button"
                              type="button"
                              className={classes.backHeader}
                              onClick={rootContextValue.onPopDrilldownPanel}
                            >
                              <Icon name="caret-left" fill="icon" />
                              {panel.title}
                            </Box>
                          )}
                          <Box className={classes.list}>{panelChildren}</Box>
                        </Box>
                      </FloatingList>
                    </MenuListProvider>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </MenuFilterProvider>
    </MenuRootProvider>
  );

  const shouldRenderInline = inline || !trigger;

  if (shouldRenderInline) {
    return content;
  }

  return (
    <FloatingTree>
      <FloatingNode id={nodeId}>
        {cloneElement(
          trigger,
          getReferenceProps({
            ref: floating.refs.setReference,
          }),
        )}
        {isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={floating.context} modal={false}>
              {content}
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </FloatingNode>
    </FloatingTree>
  );
};
