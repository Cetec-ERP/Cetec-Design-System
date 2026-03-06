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
  useHover,
  useListNavigation,
  useFloatingNodeId,
  useRole,
  safePolygon,
  useTypeahead,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { menu } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

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

type DiginLevel = {
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

const withLevelScopedKeys = (nodes: ReactNode, levelKey: string) => {
  return Children.map(nodes, (childNode, index) => {
    if (!isValidElement(childNode)) {
      return childNode;
    }

    const childKey = childNode.key ?? index;
    return cloneElement(childNode, {
      key: `${levelKey}-${String(childKey)}`,
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
    triggerInteraction = 'click',
    triggerOpenDelay = 75,
    triggerCloseDelay = 100,
    subMenuInteraction = 'hover',
    density = 'compact',
    panel,
    query = '',
    filterMode = 'none',
    renderNoResults,
    highlightMatches = Boolean(query),
    getItemText = defaultGetItemText,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const userStyle = otherProps.style as CSSProperties | undefined;
  const classes = menu({ density, panel });

  const hasReference = Boolean(trigger) && !inline;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;
  const isMenuVisible = hasReference ? isOpen : true;

  const setOpenState = (nextOpen: boolean, _event?: Event, reason?: string) => {
    if (
      triggerInteraction === 'hover' &&
      !nextOpen &&
      (reason === 'hover' || reason === 'safe-polygon')
    ) {
      return;
    }

    if (!isControlled) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const [diginLevels, setDiginLevels] = useState<DiginLevel[]>([]);
  const [wrapperSize, setWrapperSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });
  const diginDepth = diginLevels.length;

  useEffect(() => {
    if (!isOpen) {
      setDiginLevels([]);
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

  const hover = useHover(floating.context, {
    enabled: hasReference && triggerInteraction === 'hover',
    delay: {
      open: triggerOpenDelay,
      close: triggerCloseDelay,
    },
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  });
  const click = useClick(floating.context, {
    enabled: hasReference && triggerInteraction === 'click',
  });
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
    [hover, click, dismiss, role, listNavigation, typeahead],
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

  const activeLevelChildren =
    diginLevels[diginLevels.length - 1]?.children ?? children;

  const hasVisibleResults = hasMatchingItems(
    activeLevelChildren,
    filterContextValue,
  );

  const rootContextValue: MenuRootContextValue = {
    density,
    panel,
    closeOnSelect,
    subMenuInteraction,
    inline,
    onCloseMenu: () => {
      setOpenState(false);
      setDiginLevels([]);
    },
    onPushDiginLevel: (title, levelChildren) => {
      setDiginLevels((prev) => {
        const activeLevel = prev[prev.length - 1];

        if (
          activeLevel &&
          activeLevel.title === title &&
          activeLevel.children === levelChildren
        ) {
          return prev;
        }

        return [
          ...prev,
          {
            key: `${title}-${prev.length}`,
            title,
            children: levelChildren,
          },
        ];
      });
    },
    onPopDiginLevel: () => {
      setDiginLevels((prev) => prev.slice(0, -1));
    },
    diginDepth,
  };

  const menuListContextValue = {
    activeIndex,
    getItemProps: (userProps?: HTMLProps<HTMLElement>) =>
      getItemProps(userProps) as HTMLProps<HTMLElement>,
  };

  const levels = [{ key: 'root', title: 'Menu', children }, ...diginLevels];
  const activeLevel = levels[Math.min(diginDepth, levels.length - 1)]!;
  const levelCount = levels.length;
  const trackWidthPercent = levelCount * 100;
  const levelWidthPercent = 100 / levelCount;
  const trackTranslatePercent = (diginDepth * 100) / levelCount;
  const shouldUsePanelDiginProbeFill =
    Boolean(panel) && subMenuInteraction === 'digin';
  const shouldUseDiginSizing =
    subMenuInteraction === 'digin' && hasVisibleResults;

  const sizeProbeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!isMenuVisible || !shouldUseDiginSizing) {
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
    activeLevel.children,
    activeLevel.key,
    activeLevel.title,
    density,
    diginDepth,
    hasVisibleResults,
    isMenuVisible,
    shouldUseDiginSizing,
  ]);

  const diginWrapperStyle: CSSProperties =
    shouldUseDiginSizing && wrapperSize.width && wrapperSize.height
      ? {
          width: `${wrapperSize.width}px`,
          height: `${wrapperSize.height}px`,
        }
      : {};

  const floatingStyle = {
    ...(hasReference && !inline ? floating.floatingStyles : {}),
    ...diginWrapperStyle,
    ...(userStyle ?? {}),
  };
  const diginSizeProbeStyle: CSSProperties = shouldUsePanelDiginProbeFill
    ? { inset: '0', width: '100%', height: '100%' }
    : {};

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
            <Box className={classes.levelsViewport}>
              {shouldUseDiginSizing && (
                <Box
                  ref={sizeProbeRef}
                  className={classes.sizeProbe}
                  aria-hidden
                  style={diginSizeProbeStyle}
                >
                  <Box className={classes.level}>
                    {diginDepth > 0 && (
                      <Box
                        as="button"
                        type="button"
                        className={classes.backHeader}
                      >
                        <Icon name="caret-left" fill="icon" />
                        {activeLevel.title}
                      </Box>
                    )}
                    <Box className={classes.list}>
                      {withLevelScopedKeys(
                        activeLevel.children,
                        `${activeLevel.key}-probe`,
                      )}
                    </Box>
                  </Box>
                </Box>
              )}

              <Box
                className={classes.levelsTrack}
                style={{
                  width: `${trackWidthPercent}%`,
                  transform: `translateX(-${trackTranslatePercent}%)`,
                }}
              >
                {levels.map((level, index) => {
                  const isActiveLevel = index === diginDepth;
                  const levelChildren = withLevelScopedKeys(
                    level.children,
                    level.key,
                  );

                  if (!isActiveLevel) {
                    return (
                      <Box
                        key={level.key}
                        className={classes.level}
                        style={{
                          flex: `0 0 ${levelWidthPercent}%`,
                        }}
                        aria-hidden
                      >
                        {index > 0 && (
                          <Box
                            as="button"
                            type="button"
                            className={classes.backHeader}
                            onClick={rootContextValue.onPopDiginLevel}
                          >
                            <Icon
                              className={classes.icon}
                              name="caret-left"
                              // fill="icon"
                            />
                            {level.title}
                          </Box>
                        )}
                        <Box className={classes.list}>{levelChildren}</Box>
                      </Box>
                    );
                  }

                  return (
                    <MenuListProvider
                      key={level.key}
                      value={menuListContextValue}
                    >
                      <FloatingList elementsRef={listRef} labelsRef={labelsRef}>
                        <Box
                          className={classes.level}
                          style={{
                            flex: `0 0 ${levelWidthPercent}%`,
                          }}
                        >
                          {index > 0 && (
                            <Box
                              as="button"
                              type="button"
                              className={classes.backHeader}
                              onClick={rootContextValue.onPopDiginLevel}
                            >
                              <Icon
                                className={classes.icon}
                                name="caret-left"
                                // fill="icon"
                              />
                              {level.title}
                            </Box>
                          )}
                          <Box className={classes.list}>{levelChildren}</Box>
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
    return (
      <FloatingTree>
        <FloatingNode id={nodeId}>{content}</FloatingNode>
      </FloatingTree>
    );
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
