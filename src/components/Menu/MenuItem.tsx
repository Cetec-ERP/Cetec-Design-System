import type { ChangeEventHandler, HTMLProps, MouseEvent } from 'react';

import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { menu } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Toggle } from '../Toggle';

import {
  deriveItemTextValue,
  getHighlightedTextParts,
  isItemMatch,
  MENU_COMPONENT_TYPES,
  menuComponentTypeKey,
  type MenuItemProps,
  useMenuFilterContext,
  useMenuListContext,
  useMenuRootContext,
} from './menuContext';

const HighlightedText = ({ value }: { value: string }) => {
  const { query, highlightMatches } = useMenuFilterContext();
  const classes = menu({});

  if (!highlightMatches || !query.trim()) {
    return <>{value}</>;
  }

  const parts = getHighlightedTextParts(value, query);
  let runningOffset = 0;

  return (
    <>
      {parts.map((part) => {
        const key = `${part.text}-${runningOffset}`;
        runningOffset += part.text.length;

        if (!part.match) {
          return <span key={key}>{part.text}</span>;
        }

        return (
          <Box as="mark" key={key} className={classes.highlight}>
            {part.text}
          </Box>
        );
      })}
    </>
  );
};

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

  const [itemClassName, htmlProps] = splitProps(rest);

  const rootContext = useMenuRootContext();
  const tree = useFloatingTree();
  const filterContext = useMenuFilterContext();
  const listContext = useMenuListContext();

  const classes = menu({
    density: density ?? rootContext.density,
    itemVariant: variant,
    iconBefore: Boolean(iconBefore),
    iconAfter: Boolean(iconAfter),
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

  const listItem = useListItem({ label: resolvedTextValue });
  const mergedRef = useMergeRefs([listItem.ref]);

  if (variant === 'divider') {
    return (
      <Box
        role="separator"
        aria-orientation="horizontal"
        className={classes.divider}
      />
    );
  }

  if (variant === 'section') {
    return (
      <Box role="presentation" className={classes.item}>
        <Text className={classes.groupLabel} textStyle="body.xs">
          {label}
        </Text>
      </Box>
    );
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

  const itemProps: HTMLProps<HTMLElement> = listContext
    ? listContext.getItemProps({
        onClick: handleSelect,
      })
    : {
        onClick: handleSelect,
      };

  const commonProps = {
    ...htmlProps,
    ...itemProps,
    ref: mergedRef,
    className: cx(classes.item, itemClassName),
    'data-selected': selected,
    'data-disabled': disabled,
    'data-active': listContext
      ? listContext.activeIndex === listItem.index
      : false,
    tabIndex: listContext
      ? listContext.activeIndex === listItem.index
        ? 0
        : -1
      : 0,
  };

  const role =
    variant === 'checkbox' || variant === 'toggle'
      ? 'menuitemcheckbox'
      : 'menuitem';

  const content = (
    <>
      {variant === 'checkbox' && (
        <Checkbox
          name={controlName}
          checked={Boolean(selected)}
          onChange={handleControlChange}
          tabIndex={-1}
        />
      )}

      {variant === 'toggle' && (
        <Toggle
          name={controlName}
          checked={Boolean(selected)}
          onChange={handleControlChange}
          mr="4"
          tabIndex={-1}
        />
      )}

      {iconBefore && <Icon className={classes.icon} name={iconBefore} />}

      <Box className={classes.itemMain}>
        {label && (
          <Text className={classes.itemLabel}>
            <HighlightedText value={label} />
          </Text>
        )}

        {description && (
          <Text className={classes.itemDescription}>
            <HighlightedText value={description} />
          </Text>
        )}
      </Box>

      {iconAfter && (
        <Icon className={classes.icon} name={iconAfter} ml="auto" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        role={role}
        aria-checked={
          variant === 'checkbox' || variant === 'toggle'
            ? Boolean(selected)
            : undefined
        }
        aria-disabled={disabled}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      role={role}
      aria-checked={
        variant === 'checkbox' || variant === 'toggle'
          ? Boolean(selected)
          : undefined
      }
      disabled={disabled}
      aria-disabled={disabled}
      {...commonProps}
      type="button"
    >
      {content}
    </button>
  );
};

(MenuItem as unknown as { [menuComponentTypeKey]: string })[
  menuComponentTypeKey
] = MENU_COMPONENT_TYPES.item;
