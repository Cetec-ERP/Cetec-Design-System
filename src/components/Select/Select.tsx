import {
  Children,
  type HTMLProps,
  isValidElement,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  FloatingFocusManager,
  FloatingPortal,
  size as floatingSize,
  type Placement,
  useClick,
  useDismiss,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import { menu, select, type SelectVariantProps } from '@styled-system/recipes';

import type { MenuDensity } from '~/components/Menu';
import {
  createOverlayMiddleware,
  useOverlayFloating,
} from '~/system/floating-ui/floating';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Icon } from '../Icon';
import { List, ListItem } from '../List';

import type { SelectOptionProps } from './SelectOption';

type SelectValue = string | string[] | null;

const defaultDensity: MenuDensity = 'compact';

const isSelectOptionElement = (
  child: ReactNode,
): child is ReactElement<SelectOptionProps> => {
  return (
    isValidElement(child) &&
    typeof child.props === 'object' &&
    child.props !== null &&
    'value' in child.props
  );
};

const getOptionText = (option: ReactElement<SelectOptionProps>) => {
  return typeof option.props.label === 'string'
    ? option.props.label
    : option.props.value;
};

const getSelectedDisplay = (
  options: ReactElement<SelectOptionProps>[],
  value: SelectValue,
  multiple: boolean,
  placeholder: string,
) => {
  if (value === null || value === undefined || value === '') {
    return placeholder;
  }

  if (multiple) {
    const selectedValues = Array.isArray(value)
      ? value
      : ([value].filter(Boolean) as string[]);
    const selectedOptions = options.filter((option) =>
      selectedValues.includes(option.props.value),
    );

    if (selectedOptions.length === 0) {
      return placeholder;
    }

    return selectedOptions.map(getOptionText).join(', ');
  }

  const selectedOption = options.find((option) => option.props.value === value);
  return selectedOption ? getOptionText(selectedOption) : placeholder;
};

export type SelectProps = Omit<
  BoxProps<'button'>,
  keyof SelectVariantProps | 'children' | 'onChange' | 'type' | 'value'
> &
  SelectVariantProps & {
    value?: SelectValue;
    onChange?: (value: SelectValue) => void;
    multiple?: boolean;
    placeholder?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: Placement;
    offset?: number;
    children?: ReactNode;
    id?: string;
    name?: string;
    disabled?: boolean;
    error?: boolean;
    density?: MenuDensity;
  };

export const Select = (props: SelectProps) => {
  const {
    value: controlledValue,
    onChange,
    multiple = false,
    placeholder = 'Select...',
    open: controlledOpen,
    onOpenChange,
    placement = 'bottom-start',
    offset = 4,
    children,
    id,
    name,
    disabled = false,
    error = false,
    size = 'md',
    density = defaultDensity,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const generatedId = useId();
  const triggerId = id ?? `select-${generatedId}`;
  const listboxId = `${triggerId}-listbox`;

  const [internalOpen, setInternalOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<SelectValue>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const options = useMemo(() => {
    return Children.toArray(children).filter(isSelectOptionElement);
  }, [children]);

  const selectedIndex = useMemo(() => {
    return options.findIndex((option) => {
      if (multiple) {
        return Array.isArray(value) && value.includes(option.props.value);
      }

      return option.props.value === value;
    });
  }, [multiple, options, value]);

  const firstEnabledIndex = useMemo(() => {
    return options.findIndex((option) => !option.props.disabled);
  }, [options]);

  const disabledIndices = useMemo(() => {
    return options.flatMap((option, index) =>
      option.props.disabled ? index : [],
    );
  }, [options]);

  const selectedValues = useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }

    return typeof value === 'string' ? [value] : [];
  }, [multiple, value]);

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(null);
      return;
    }

    if (selectedIndex >= 0) {
      setActiveIndex(selectedIndex);
      return;
    }

    setActiveIndex(firstEnabledIndex >= 0 ? firstEnabledIndex : null);
  }, [firstEnabledIndex, isOpen, selectedIndex]);

  const activeOptionId =
    activeIndex !== null ? `${triggerId}-option-${activeIndex}` : undefined;

  const setOpenState = (nextOpen: boolean) => {
    if (!isOpenControlled) {
      setInternalOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  };

  const handleValueChange = useCallback(
    (nextValue: SelectValue) => {
      if (controlledValue === undefined) {
        setInternalValue(nextValue);
      }

      onChange?.(nextValue);
    },
    [controlledValue, onChange],
  );

  const floating = useOverlayFloating({
    open: isOpen,
    onOpenChange: (nextOpen) => {
      if (!disabled) {
        setOpenState(nextOpen);
      }
    },
    placement,
    middleware: createOverlayMiddleware({
      offset,
      extras: [
        floatingSize({
          apply({ rects, elements }) {
            elements.floating.style.minWidth = `${rects.reference.width}px`;
          },
        }),
      ],
    }),
  });

  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const click = useClick(floating.context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(floating.context, {
    enabled: !disabled,
  });
  const role = useRole(floating.context, { role: 'listbox' });
  const listNavigation = useListNavigation(floating.context, {
    listRef: itemRefs,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
    disabledIndices,
  });
  const typeahead = useTypeahead(floating.context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNavigation, typeahead],
  );

  const displayValue = getSelectedDisplay(
    options,
    value,
    multiple,
    placeholder,
  );
  const classes = select({ size });
  const menuClasses = menu({ density });
  const hasValue = value !== null && value !== undefined && value !== '';

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    if (
      !isOpen &&
      (event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Enter' ||
        event.key === ' ')
    ) {
      event.preventDefault();
      setOpenState(true);
    }

    if (
      !multiple &&
      hasValue &&
      (event.key === 'Backspace' || event.key === 'Delete')
    ) {
      event.preventDefault();
      handleValueChange(null);
    }
  };

  const handleOptionSelect = (optionValue: string) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : value ? [value] : [];
      const nextValues = currentValues.includes(optionValue)
        ? currentValues.filter((currentValue) => currentValue !== optionValue)
        : [...currentValues, optionValue];

      handleValueChange(nextValues.length > 0 ? nextValues : null);
      return;
    }

    handleValueChange(optionValue);
    setOpenState(false);
  };

  return (
    <Box className={classes.root}>
      {name &&
        selectedValues.map((selectedValue, index) => (
          <Box
            key={`${selectedValue}-${index}`}
            as="input"
            type="hidden"
            name={name}
            value={selectedValue}
          />
        ))}

      <Box
        as="button"
        type="button"
        id={triggerId}
        ref={floating.refs.setReference}
        className={cx(classes.trigger, className)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-activedescendant={isOpen ? activeOptionId : undefined}
        aria-disabled={disabled}
        aria-invalid={error || undefined}
        disabled={disabled}
        data-disabled={disabled || undefined}
        data-error={error || undefined}
        data-open={isOpen || undefined}
        {...(getReferenceProps({
          onKeyDown: handleTriggerKeyDown,
        }) as Record<string, unknown>)}
        {...otherProps}
      >
        <Box className={hasValue ? classes.value : classes.placeholder}>
          {displayValue}
        </Box>
        <Icon
          name="caret-down"
          className={classes.icon}
          data-open={isOpen}
          aria-hidden
        />
      </Box>

      {isOpen && !disabled && (
        <FloatingPortal>
          <FloatingFocusManager
            context={floating.context}
            modal={false}
            initialFocus={-1}
          >
            {/* biome-ignore lint/a11y/useSemanticElements: custom select popup uses an ARIA listbox on a non-native container */}
            <List
              ref={floating.refs.setFloating}
              id={listboxId}
              role="listbox"
              aria-labelledby={triggerId}
              aria-multiselectable={multiple || undefined}
              density={density}
              className={menuClasses.wrapper}
              style={floating.floatingStyles}
              {...(getFloatingProps() as Record<string, unknown>)}
            >
              {options.map((option, index) => {
                const optionLabel = getOptionText(option);
                const isSelected = multiple
                  ? Array.isArray(value) && value.includes(option.props.value)
                  : value === option.props.value;

                return (
                  <ListItem
                    key={option.props.value}
                    id={`${triggerId}-option-${index}`}
                    ref={(node: HTMLElement | null) => {
                      itemRefs.current[index] = node;
                      labelsRef.current[index] = optionLabel;
                    }}
                    disabled={option.props.disabled}
                    selected={isSelected}
                    variant={multiple ? 'checkbox' : 'default'}
                    label={optionLabel}
                    description={option.props.description}
                    iconBefore={option.props.iconLeft}
                    iconAfter={option.props.iconRight}
                    {...(getItemProps({
                      onClick: () => {
                        if (!option.props.disabled) {
                          handleOptionSelect(option.props.value);
                        }
                      },
                    } as HTMLProps<HTMLElement>) as Record<string, unknown>)}
                  />
                );
              })}
            </List>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Box>
  );
};
