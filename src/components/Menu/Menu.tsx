import {
  Children,
  cloneElement,
  type HTMLAttributes,
  type HTMLProps,
  type CSSProperties,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  size,
  useClick,
  useDismiss,
  useInteractions,
  useHover,
  useListNavigation,
  useFloatingNodeId,
  useMergeRefs,
  useRole,
  safePolygon,
  useTypeahead,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { list, menu } from '@styled-system/recipes';

import {
  createOverlayMiddleware,
  useOverlayFloating,
} from '~/system/floating-ui/floating';
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
} from './context/menuContext';
import { useBlockPointerEventsForHoverPolygon } from './hooks/useBlockPointerEventsForHoverPolygon';
import { navigateListMainAxisLoop } from './utils/navigateListMainAxis';

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
    onMenubarEdgeNavigate,
    ...rest
  } = props;

  const [className, otherProps] = splitProps(rest);
  const userStyle = otherProps.style as CSSProperties | undefined;
  const classes = menu({ density, panel });
  const listClassName = list({ density });

  const hasReference = Boolean(trigger) && !inline;

  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;
  const isMenuVisible = hasReference ? isOpen : true;

  const setOpenState = (nextOpen: boolean, _event?: Event, reason?: string) => {
    if (!nextOpen && (reason === 'hover' || reason === 'safe-polygon')) {
      if (
        triggerInteraction === 'hover' ||
        triggerInteraction === 'click-and-hover'
      ) {
        return;
      }
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

  const floating = useOverlayFloating({
    nodeId,
    open: hasReference ? isOpen : true,
    onOpenChange: setOpenState,
    placement,
    strategy,
    middleware: createOverlayMiddleware({
      extras: [size()],
    }),
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const blockPointerEventsForHoverPolygon =
    useBlockPointerEventsForHoverPolygon();

  const hover = useHover(floating.context, {
    enabled:
      hasReference &&
      (triggerInteraction === 'hover' ||
        triggerInteraction === 'click-and-hover'),
    delay: {
      open: triggerOpenDelay,
      close: triggerCloseDelay,
    },
    handleClose: safePolygon({
      blockPointerEvents: blockPointerEventsForHoverPolygon,
    }),
  });
  const click = useClick(floating.context, {
    enabled:
      hasReference &&
      (triggerInteraction === 'click' ||
        triggerInteraction === 'click-and-hover'),
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
    onMenubarEdgeNavigate,
  };

  const navigateMainAxis = useCallback((direction: 1 | -1) => {
    setActiveIndex((prev) =>
      navigateListMainAxisLoop(listRef, direction, prev),
    );
  }, []);

  const menuListContextValue = {
    activeIndex,
    getItemProps: (userProps?: HTMLProps<HTMLElement>) =>
      getItemProps(userProps) as HTMLProps<HTMLElement>,
    navigateMainAxis,
    nestedMenuDepth: 0,
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
                    <Box className={listClassName}>
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
                            <Icon name="caret-left" />
                            {level.title}
                          </Box>
                        )}
                        <Box className={listClassName}>{levelChildren}</Box>
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
                              <Icon name="caret-left" />
                              {level.title}
                            </Box>
                          )}
                          <Box className={listClassName}>{levelChildren}</Box>
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

  const triggerRefProp = isValidElement(trigger)
    ? (trigger.props as { ref?: Ref<Element | null> }).ref
    : undefined;

  const mergedTriggerRef = useMergeRefs([
    triggerRefProp,
    floating.refs.setReference,
  ]);

  if (shouldRenderInline) {
    return (
      <FloatingTree>
        <FloatingNode id={nodeId}>{content}</FloatingNode>
      </FloatingTree>
    );
  }

  const triggerExtract =
    isValidElement(trigger) && trigger.props
      ? (() => {
          const {
            ref: _r,
            children: _ch,
            onKeyDown: triggerOnKeyDownProp,
            ...rest
          } = trigger.props as Record<string, unknown> & {
            ref?: unknown;
            children?: unknown;
            onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
          };
          return {
            rest,
            onKeyDown: triggerOnKeyDownProp,
          };
        })()
      : {
          rest: {} as Record<string, unknown>,
          onKeyDown: undefined as
            | ((event: KeyboardEvent<HTMLElement>) => void)
            | undefined,
        };

  const triggerPropsForReference = triggerExtract.rest;
  const triggerOnKeyDown = triggerExtract.onKeyDown;

  const referencePropsFromFloating = getReferenceProps({
    ...triggerPropsForReference,
    ref: mergedTriggerRef,
  });

  const composedTriggerOnKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    // When the menu is open, Floating UI's reference key handler often runs
    // before the consumer's onKeyDown, so menubar Left/Right (on the trigger)
    // never fires. Run the trigger handler first for horizontal navigation.
    if (
      isOpen &&
      (event.key === 'ArrowLeft' || event.key === 'ArrowRight') &&
      typeof triggerOnKeyDown === 'function'
    ) {
      triggerOnKeyDown(event);
      return;
    }
    const refOnKeyDown = referencePropsFromFloating.onKeyDown;
    if (typeof refOnKeyDown === 'function') {
      refOnKeyDown(event);
    }
    if (typeof triggerOnKeyDown === 'function') {
      triggerOnKeyDown(event);
    }
  };

  return (
    <FloatingTree>
      <FloatingNode id={nodeId}>
        {cloneElement(
          trigger as ReactElement<HTMLAttributes<HTMLElement>>,
          {
            ...referencePropsFromFloating,
            onKeyDown: composedTriggerOnKeyDown,
          } as HTMLAttributes<HTMLElement>,
        )}
        {isOpen && (
          <FloatingPortal>
            <FloatingFocusManager
              context={floating.context}
              modal={false}
              // Menubar composition: keep focus on the section trigger until the
              // user arrows into the panel, so Left/Right can move between
              // top-level menubar items while the dropdown is open (APG pattern).
              // Default initialFocus=0 would move focus to the first menu row and
              // swallow menubar navigation until a child is focused.
              order={
                onMenubarEdgeNavigate ? ['reference', 'content'] : undefined
              }
            >
              {content}
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </FloatingNode>
    </FloatingTree>
  );
};
