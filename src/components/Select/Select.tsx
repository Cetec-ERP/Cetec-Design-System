import {
  Children,
  type HTMLProps,
  isValidElement,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
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

import type { MenuDensity } from '~/components/Menu/context/menuContext';
import {
  createOverlayMiddleware,
  useOverlayFloating,
} from '~/system/floating-ui/floating';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box/Box';
import { Chip } from '../Chip/Chip';
import { DsChainPortalRoot } from '../DsChainScope/DsChainPortalRoot';
import { Icon } from '../Icon/Icon';
import { List } from '../List/List';
import { ListItem } from '../List/ListItem';

import { SelectOption, type SelectOptionProps } from './SelectOption';

type SelectValue = string | string[] | null;

const defaultDensity: MenuDensity = 'compact';
const chipSizeBySelectSize = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'md',
} as const;

const resolveChipSize = (size: SelectProps['size']): 'sm' | 'md' => {
  if (!size || typeof size === 'string') {
    return chipSizeBySelectSize[size ?? 'md'];
  }

  const values = Array.isArray(size)
    ? (size as Array<string | null>)
    : Object.values(size as Record<string, unknown>);

  const firstSize = values.find(
    (value): value is keyof typeof chipSizeBySelectSize =>
      typeof value === 'string' && value in chipSizeBySelectSize,
  );

  return firstSize ? chipSizeBySelectSize[firstSize] : 'sm';
};

const isSelectOptionElement = (
  child: ReactNode,
): child is ReactElement<SelectOptionProps> => {
  return isValidElement(child) && child.type === SelectOption;
};

const getOptionText = (option: ReactElement<SelectOptionProps>) => {
  return option.props.label;
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
    const selectedValueSet = new Set(selectedValues);
    const selectedOptions = options.filter((option) =>
      selectedValueSet.has(option.props.value),
    );

    if (selectedOptions.length === 0) {
      return placeholder;
    }

    return selectedOptions.map(getOptionText).join(', ');
  }

  const selectedOption = options.find((option) => option.props.value === value);
  return selectedOption ? getOptionText(selectedOption) : placeholder;
};

const getSelectedOptions = (
  options: ReactElement<SelectOptionProps>[],
  value: SelectValue,
  multiple: boolean,
) => {
  if (!multiple) {
    return [];
  }

  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];
  const selectedValueSet = new Set(selectedValues);
  return options.filter((option) => selectedValueSet.has(option.props.value));
};

/** Props for {@link Select}, an ARIA listbox-based single or multiple select. */
export type SelectProps = Omit<
  BoxProps,
  keyof SelectVariantProps | 'children' | 'onChange' | 'type' | 'value'
> &
  SelectVariantProps & {
    /** Controlled selected value. Use a string for single selection or a string array for multiple selection, with `onChange` to accept changes. */
    value?: SelectValue;
    /**
     * Initial selected value for an uncontrolled select. It is used only on first render.
     * @default null
     */
    defaultValue?: SelectValue;
    /** Called when the user selects, deselects, or clears an option. In controlled mode, update `value` with the supplied value. */
    onChange?: (value: SelectValue) => void;
    /**
     * Allows several options to be selected and renders selected options as removable chips.
     * @default false
     */
    multiple?: boolean;
    /**
     * Text shown while no option is selected.
     * @default 'Select...'
     */
    placeholder?: string;
    /** Controlled popup state. Pair with `onOpenChange`; omit it to use `defaultOpen`. */
    open?: boolean;
    /**
     * Initial popup state for an uncontrolled select. It is used only on first render.
     * @default false
     */
    defaultOpen?: boolean;
    /** Called when user interaction requests that the popup open or close. */
    onOpenChange?: (open: boolean) => void;
    /**
     * Floating UI placement for the listbox relative to the trigger.
     * @default 'bottom-start'
     */
    placement?: Placement;
    /**
     * Gap between the trigger and listbox, in pixels.
     * @default 4
     */
    offset?: number;
    /** Metadata-only `SelectOption` children used to build the listbox. Other children are ignored. */
    children?: ReactNode;
    /** Identifier for the combobox trigger. A generated identifier is used when omitted. */
    id?: string;
    /** Form field name. Each selected value is submitted through a hidden input. */
    name?: string;
    /**
     * Prevents opening, selection, and hidden-input submission.
     * @default false
     */
    disabled?: boolean;
    /**
     * Marks the combobox as invalid with `aria-invalid` and error styling.
     * @default false
     */
    error?: boolean;
    /**
     * Density applied to the popup options.
     * @default 'compact'
     */
    density?: MenuDensity;
    /**
     * Shrinks the trigger to its content instead of using the standard select width.
     * @default false
     */
    autoSize?: boolean;
  };

/**
 * Chooses one or more values from metadata-only {@link SelectOption} children.
 *
 * The trigger uses combobox/listbox semantics. Arrow keys, Enter, and Space open
 * it; typeahead and arrow keys navigate options; Escape or outside press closes
 * it. Focus stays on the trigger when the non-modal popup opens.
 *
 * @example
 * ```tsx
 * <Select defaultValue="draft" name="status">
 *   <SelectOption value="draft" label="Draft" />
 *   <SelectOption value="published" label="Published" />
 * </Select>
 * ```
 */
export const Select = (props: SelectProps) => {
  const {
    value: controlledValue,
    defaultValue = null,
    onChange,
    multiple = false,
    placeholder = 'Select...',
    open: controlledOpen,
    defaultOpen = false,
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
    autoSize = false,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  // `data-testid` is pulled out and written on the root instead of the trigger.
  // `Box` opens a chain scope wherever the test id lands, and the trigger is a
  // sibling of the portal that renders the listbox, so a scope opened there
  // could never enclose it. The root does enclose the portal's React-tree
  // position, so the listbox inherits the id. Only the test id moves; every
  // other rest prop still lands on the trigger, where consumers expect it.
  const { 'data-testid': testId, ...triggerProps } = otherProps;

  const generatedId = useId();
  const triggerId = id ?? `select-${generatedId}`;
  const labelId = `${triggerId}-label`;
  const listboxId = `${triggerId}-listbox`;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState<SelectValue>(defaultValue);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const options = useMemo(() => {
    return Children.toArray(children).filter(isSelectOptionElement);
  }, [children]);

  const selectedValues = useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }

    return typeof value === 'string' ? [value] : [];
  }, [multiple, value]);
  const selectedValueSet = useMemo(
    () => new Set(selectedValues),
    [selectedValues],
  );

  const selectedIndex = useMemo(() => {
    return options.findIndex((option) => {
      if (multiple) {
        return selectedValueSet.has(option.props.value);
      }

      return option.props.value === value;
    });
  }, [multiple, options, selectedValueSet, value]);

  const firstEnabledIndex = useMemo(() => {
    return options.findIndex((option) => !option.props.disabled);
  }, [options]);

  const disabledIndices = useMemo(() => {
    return options.flatMap((option, index) =>
      option.props.disabled ? index : [],
    );
  }, [options]);

  const initialActiveIndex =
    selectedIndex >= 0
      ? selectedIndex
      : firstEnabledIndex >= 0
        ? firstEnabledIndex
        : null;
  const resolvedActiveIndex = isOpen
    ? (activeIndex ?? initialActiveIndex)
    : null;

  const activeOptionId =
    resolvedActiveIndex !== null
      ? `${triggerId}-option-${resolvedActiveIndex}`
      : undefined;

  const setOpenState = (nextOpen: boolean) => {
    setActiveIndex(nextOpen ? initialActiveIndex : null);
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
    activeIndex: resolvedActiveIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
    disabledIndices,
  });
  const typeahead = useTypeahead(floating.context, {
    listRef: labelsRef,
    activeIndex: resolvedActiveIndex,
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
  const selectedOptions = getSelectedOptions(options, value, multiple);
  const classes = select({ size, multiple, autoSize });
  const menuClasses = menu({ density });
  const hasValue = value !== null && value !== undefined && value !== '';
  const chipSize = resolveChipSize(size);
  const accessibleName =
    typeof displayValue === 'string' && displayValue.length > 0
      ? displayValue
      : placeholder;

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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

    if (value === optionValue) {
      handleValueChange(null);
      setOpenState(false);
      return;
    }

    handleValueChange(optionValue);
    setOpenState(false);
  };

  const handleChipDismiss = (optionValue: string) => {
    if (!multiple) {
      return;
    }

    const currentValues = Array.isArray(value) ? value : value ? [value] : [];
    const nextValues = currentValues.filter(
      (currentValue) => currentValue !== optionValue,
    );

    handleValueChange(nextValues.length > 0 ? nextValues : null);
  };

  return (
    <Box className={classes.root} data-testid={testId}>
      {name &&
        selectedValues.map((selectedValue) => (
          <Box
            key={selectedValue}
            as="input"
            type="hidden"
            name={name}
            value={selectedValue}
            disabled={disabled}
          />
        ))}

      <Box
        as="div"
        id={triggerId}
        ref={floating.refs.setReference}
        className={`${cx(classes.trigger, className)} peer`}
        role="combobox"
        tabIndex={disabled ? -1 : 0}
        aria-labelledby={labelId}
        aria-label={accessibleName}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-activedescendant={isOpen ? activeOptionId : undefined}
        aria-disabled={disabled}
        aria-invalid={error || undefined}
        data-disabled={disabled || undefined}
        data-error={error || undefined}
        data-open={isOpen || undefined}
        {...(getReferenceProps({
          onKeyDown: handleTriggerKeyDown,
        }) as Record<string, unknown>)}
        {...triggerProps}
      >
        {multiple && selectedOptions.length > 0 ? (
          <Box className={cx(classes.content, classes.chips)}>
            {selectedOptions.map((option) => (
              <Box
                key={option.props.value}
                onMouseDown={(event: MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                onClick={(event: MouseEvent<HTMLElement>) => {
                  event.stopPropagation();
                }}
              >
                <Chip
                  size={chipSize}
                  dismissable
                  onDismiss={() => handleChipDismiss(option.props.value)}
                >
                  {option.props.label}
                </Chip>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
            className={cx(
              classes.content,
              hasValue ? classes.value : classes.placeholder,
            )}
          >
            {displayValue}
          </Box>
        )}
      </Box>
      <Box
        as="span"
        className={classes.icon}
        data-open={isOpen || undefined}
        aria-hidden
      >
        <Icon name="caret-down" />
      </Box>

      {isOpen && !disabled && (
        <FloatingPortal>
          <DsChainPortalRoot>
            <FloatingFocusManager
              context={floating.context}
              modal={false}
              initialFocus={-1}
            >
              {/* validate-ignore: useSemanticElements — custom select popup uses ARIA listbox semantics on a non-native container */}
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
                    ? selectedValueSet.has(option.props.value)
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
                      iconBefore={
                        !multiple
                          ? (option.props.iconLeft ?? 'check')
                          : option.props.iconLeft
                      }
                      iconBeforeFill={
                        !multiple
                          ? isSelected
                            ? 'icon'
                            : option.props.iconLeft
                              ? undefined
                              : 'transparent'
                          : undefined
                      }
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
          </DsChainPortalRoot>
        </FloatingPortal>
      )}
    </Box>
  );
};
