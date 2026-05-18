import {
  Children,
  isValidElement,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type UIEvent,
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
  useDismiss,
  useInteractions,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import {
  autocomplete,
  highlightText,
  menu,
  type AutocompleteVariantProps,
} from '@styled-system/recipes';

import type { MenuDensity } from '~/components/Menu';
import {
  createOverlayMiddleware,
  useOverlayFloating,
} from '~/system/floating-ui/floating';
import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { List, ListItem } from '../List';
import { Text } from '../Text';

import type { OptionProps } from './Option';

type AutocompleteValue = string | string[] | null;

type AutocompleteOptionData = OptionProps & {
  created?: boolean;
};

const LIMIT_TAGS_VISIBLE_COUNT = 2;
const optionComponentTypeKey = '__autocompleteComponentType' as const;

const chipSizeByAutocompleteSize = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'md',
} as const;

const resolveChipSize = (size: AutocompleteProps['size']): 'sm' | 'md' => {
  if (!size || typeof size === 'string') {
    return chipSizeByAutocompleteSize[size ?? 'md'];
  }

  const firstSize = Object.values(size as Record<string, unknown>).find(
    (value): value is keyof typeof chipSizeByAutocompleteSize =>
      typeof value === 'string' && value in chipSizeByAutocompleteSize,
  );

  return firstSize ? chipSizeByAutocompleteSize[firstSize] : 'sm';
};

const isOptionElement = (
  child: ReactNode,
): child is ReactElement<OptionProps> => {
  return (
    isValidElement(child) &&
    typeof child.type === 'function' &&
    (child.type as { [optionComponentTypeKey]?: string })[
      optionComponentTypeKey
    ] === 'Option'
  );
};

const normalizeText = (value: string) => value.trim().toLowerCase();

const getSearchText = (option: AutocompleteOptionData) => {
  return [option.label, option.description].filter(Boolean).join(' ').trim();
};

const isExactMatch = (option: AutocompleteOptionData, query: string) => {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return false;
  }

  return (
    normalizeText(option.value) === normalizedQuery ||
    normalizeText(option.label) === normalizedQuery
  );
};

const isFuzzyMatch = (text: string, query: string) => {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return true;
  }

  const normalizedText = normalizeText(text);
  if (normalizedText.includes(normalizedQuery)) {
    return true;
  }

  let textIndex = 0;

  for (
    let queryIndex = 0;
    queryIndex < normalizedQuery.length;
    queryIndex += 1
  ) {
    const queryChar = normalizedQuery[queryIndex];
    let matched = false;

    while (textIndex < normalizedText.length) {
      if (normalizedText[textIndex] === queryChar) {
        matched = true;
        textIndex += 1;
        break;
      }

      textIndex += 1;
    }

    if (!matched) {
      return false;
    }
  }

  return true;
};

type HighlightPart = {
  text: string;
  match: boolean;
};

const getFuzzyHighlightParts = (
  value: string,
  query: string,
): HighlightPart[] => {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return [{ text: value, match: false }];
  }

  const normalizedValue = value.toLowerCase();
  const substringIndex = normalizedValue.indexOf(normalizedQuery);
  if (substringIndex >= 0) {
    return [
      { text: value.slice(0, substringIndex), match: false },
      {
        text: value.slice(
          substringIndex,
          substringIndex + normalizedQuery.length,
        ),
        match: true,
      },
      {
        text: value.slice(substringIndex + normalizedQuery.length),
        match: false,
      },
    ].filter((part) => part.text.length > 0);
  }

  const matchedIndices: number[] = [];
  let textIndex = 0;

  for (
    let queryIndex = 0;
    queryIndex < normalizedQuery.length;
    queryIndex += 1
  ) {
    const queryChar = normalizedQuery[queryIndex];
    let matched = false;

    while (textIndex < normalizedValue.length) {
      if (normalizedValue[textIndex] === queryChar) {
        matchedIndices.push(textIndex);
        textIndex += 1;
        matched = true;
        break;
      }

      textIndex += 1;
    }

    if (!matched) {
      return [{ text: value, match: false }];
    }
  }

  if (matchedIndices.length === 0) {
    return [{ text: value, match: false }];
  }

  const parts: HighlightPart[] = [];
  let cursor = 0;

  matchedIndices.forEach((index) => {
    if (index > cursor) {
      parts.push({
        text: value.slice(cursor, index),
        match: false,
      });
    }

    parts.push({
      text: value.slice(index, index + 1),
      match: true,
    });
    cursor = index + 1;
  });

  if (cursor < value.length) {
    parts.push({
      text: value.slice(cursor),
      match: false,
    });
  }

  return parts.filter((part) => part.text.length > 0);
};

const mergeOptions = (options: AutocompleteOptionData[]) => {
  const map = new Map<string, AutocompleteOptionData>();

  options.forEach((option) => {
    if (!map.has(option.value)) {
      map.set(option.value, option);
    }
  });

  return Array.from(map.values());
};

const getValueArray = (value: AutocompleteValue, multiple: boolean) => {
  if (multiple) {
    return Array.isArray(value) ? value : value ? [value] : [];
  }

  return typeof value === 'string' ? [value] : [];
};

const getFirstEnabledIndex = (options: AutocompleteOptionData[]) =>
  options.findIndex((option) => !option.disabled);

const getNextEnabledIndex = (
  options: AutocompleteOptionData[],
  fromIndex: number | null,
  direction: 1 | -1,
) => {
  if (!options.length) {
    return null;
  }

  let index =
    fromIndex === null ? (direction === 1 ? -1 : options.length) : fromIndex;

  for (let step = 0; step < options.length; step += 1) {
    index = (index + direction + options.length) % options.length;
    const candidate = options[index];

    if (candidate && !candidate.disabled) {
      return index;
    }
  }

  return null;
};

const getSelectedOptionLabel = (
  options: AutocompleteOptionData[],
  value: AutocompleteValue,
) => {
  if (typeof value !== 'string') {
    return '';
  }

  const option = options.find((entry) => entry.value === value);
  return option?.label ?? value;
};

const renderHighlightedText = (value: string, query: string) => {
  const parts = getFuzzyHighlightParts(value, query);

  return parts.map((part, index) => {
    if (!part.match) {
      return <span key={`${part.text}-${index}`}>{part.text}</span>;
    }

    return (
      <Box as="mark" key={`${part.text}-${index}`} className={highlightText()}>
        {part.text}
      </Box>
    );
  });
};

export type AutocompleteProps = Omit<
  BoxProps<'div'>,
  keyof AutocompleteVariantProps | 'children' | 'onChange' | 'value'
> &
  AutocompleteVariantProps & {
    value?: AutocompleteValue;
    onChange?: (value: AutocompleteValue) => void;
    inputValue?: string;
    onInputChange?: (value: string) => void;
    defaultInputValue?: string;
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
    valid?: boolean;
    invalid?: boolean;
    density?: MenuDensity;
    autoSize?: boolean;
    limitTags?: boolean;
    hasMore?: boolean;
    loadingMore?: boolean;
    onLoadMore?: () => void;
    addOptions?: boolean;
  };

export const Autocomplete = (props: AutocompleteProps) => {
  const {
    value: controlledValue,
    onChange,
    inputValue: controlledInputValue,
    onInputChange,
    defaultInputValue = '',
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
    valid = false,
    invalid = false,
    size = 'md',
    density = 'compact',
    autoSize = false,
    limitTags = false,
    hasMore = false,
    loadingMore = false,
    onLoadMore,
    addOptions = false,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);

  const generatedId = useId();
  const baseId = id ?? `autocomplete-${generatedId}`;
  const inputId = baseId;
  const listboxId = `${baseId}-listbox`;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [internalOpen, setInternalOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<AutocompleteValue>(null);
  const [internalInputValue, setInternalInputValue] =
    useState(defaultInputValue);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [focusedWithin, setFocusedWithin] = useState(false);
  const [createdOptions, setCreatedOptions] = useState<
    AutocompleteOptionData[]
  >([]);

  const isOpenControlled = controlledOpen !== undefined;
  const isOpen = isOpenControlled ? controlledOpen : internalOpen;
  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue;
  const currentInputValue =
    controlledInputValue !== undefined
      ? controlledInputValue
      : internalInputValue;

  const baseOptions = useMemo(() => {
    return Children.toArray(children)
      .filter(isOptionElement)
      .map((child) => ({
        ...child.props,
        created: false,
      }));
  }, [children]);

  const options = useMemo(
    () => mergeOptions([...baseOptions, ...createdOptions]),
    [baseOptions, createdOptions],
  );

  const optionByValue = useMemo(() => {
    return new Map(options.map((option) => [option.value, option]));
  }, [options]);

  const selectedValues = useMemo(
    () => getValueArray(currentValue, multiple),
    [currentValue, multiple],
  );

  const selectedLabels = useMemo(() => {
    return selectedValues.map((selectedValue) => {
      return optionByValue.get(selectedValue)?.label ?? selectedValue;
    });
  }, [optionByValue, selectedValues]);

  const selectedLabel = useMemo(() => {
    return getSelectedOptionLabel(options, currentValue);
  }, [currentValue, options]);

  const visibleOptions = useMemo(() => {
    const query = currentInputValue.trim();
    if (!query) {
      return options;
    }

    return options.filter((option) =>
      isFuzzyMatch(getSearchText(option), query),
    );
  }, [currentInputValue, options]);

  const visibleSelectedIndex = useMemo(() => {
    const querySelectedValues = getValueArray(currentValue, multiple);
    return visibleOptions.findIndex((option) =>
      querySelectedValues.includes(option.value),
    );
  }, [currentValue, multiple, visibleOptions]);

  const hiddenTagCount = multiple
    ? Math.max(0, selectedValues.length - LIMIT_TAGS_VISIBLE_COUNT)
    : 0;
  const shouldLimitTags = multiple && limitTags && !focusedWithin && !isOpen;
  const visibleSelectedValues = shouldLimitTags
    ? selectedValues.slice(0, LIMIT_TAGS_VISIBLE_COUNT)
    : selectedValues;
  const visibleSelectedLabels = shouldLimitTags
    ? selectedLabels.slice(0, LIMIT_TAGS_VISIBLE_COUNT)
    : selectedLabels;

  useEffect(() => {
    if (controlledInputValue !== undefined || multiple) {
      return;
    }

    if (!focusedWithin) {
      setInternalInputValue(selectedLabel);
    }
  }, [controlledInputValue, focusedWithin, multiple, selectedLabel]);

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(null);
      return;
    }

    if (visibleSelectedIndex >= 0) {
      setActiveIndex(visibleSelectedIndex);
      return;
    }

    const firstEnabled = getFirstEnabledIndex(visibleOptions);
    setActiveIndex(firstEnabled >= 0 ? firstEnabled : null);
  }, [isOpen, visibleOptions, visibleSelectedIndex]);

  const setOpenState = useCallback(
    (nextOpen: boolean) => {
      if (!isOpenControlled) {
        setInternalOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isOpenControlled, onOpenChange],
  );

  const setValueState = useCallback(
    (nextValue: AutocompleteValue) => {
      if (controlledValue === undefined) {
        setInternalValue(nextValue);
      }

      onChange?.(nextValue);
    },
    [controlledValue, onChange],
  );

  const setInputState = useCallback(
    (nextValue: string) => {
      if (controlledInputValue === undefined) {
        setInternalInputValue(nextValue);
      }

      onInputChange?.(nextValue);
    },
    [controlledInputValue, onInputChange],
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

  const dismiss = useDismiss(floating.context, {
    enabled: !disabled,
  });
  const { getFloatingProps } = useInteractions([dismiss]);

  const classes = autocomplete({ size, multiple, autoSize });
  const chipSize = resolveChipSize(size);

  const handleOptionSelect = useCallback(
    (option: AutocompleteOptionData) => {
      if (option.disabled) {
        return;
      }

      if (multiple) {
        const nextValues = selectedValues.includes(option.value)
          ? selectedValues.filter((value) => value !== option.value)
          : [...selectedValues, option.value];

        setValueState(nextValues.length > 0 ? nextValues : null);
        setInputState('');
        setOpenState(true);
        requestAnimationFrame(() => {
          inputRef.current?.focus();
        });
        return;
      }

      if (currentValue === option.value) {
        setValueState(null);
        setInputState('');
      } else {
        setValueState(option.value);
        setInputState(option.label);
      }

      setOpenState(false);
    },
    [
      currentValue,
      multiple,
      selectedValues,
      setInputState,
      setOpenState,
      setValueState,
    ],
  );

  const createCustomOption = useCallback(
    (rawQuery: string) => {
      const trimmedQuery = rawQuery.trim();
      if (!trimmedQuery) {
        return;
      }

      const exactOption = options.find((option) =>
        isExactMatch(option, trimmedQuery),
      );
      if (exactOption && !exactOption.disabled) {
        handleOptionSelect(exactOption);
        return;
      }

      const createdOption: AutocompleteOptionData = {
        value: trimmedQuery,
        label: trimmedQuery,
        created: true,
      };

      setCreatedOptions((currentOptions) => {
        if (currentOptions.some((option) => option.value === trimmedQuery)) {
          return currentOptions;
        }

        return [...currentOptions, createdOption];
      });

      handleOptionSelect(createdOption);
    },
    [handleOptionSelect, options],
  );

  const removeSelectedValue = useCallback(
    (selectedValue: string) => {
      if (multiple) {
        const nextValues = selectedValues.filter(
          (value) => value !== selectedValue,
        );
        setValueState(nextValues.length > 0 ? nextValues : null);
        return;
      }

      if (currentValue === selectedValue) {
        setValueState(null);
        setInputState('');
      }
    },
    [currentValue, multiple, selectedValues, setInputState, setValueState],
  );

  const focusChip = useCallback((index: number) => {
    chipRefs.current[index]?.focus();
  }, []);

  const handleFocusCapture = useCallback(() => {
    if (disabled) {
      return;
    }

    setFocusedWithin(true);
    setOpenState(true);
  }, [disabled, setOpenState]);

  const handleBlurCapture = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      const nextTarget = event.relatedTarget as Node | null;

      window.setTimeout(() => {
        const activeElement = document.activeElement;
        const isInsideRoot =
          (nextTarget && rootRef.current?.contains(nextTarget)) ||
          (activeElement && rootRef.current?.contains(activeElement));
        const isInsideFloating =
          (nextTarget && floatingRef.current?.contains(nextTarget)) ||
          (activeElement && floatingRef.current?.contains(activeElement));

        if (!isInsideRoot && !isInsideFloating) {
          setFocusedWithin(false);
          setOpenState(false);
        }
      }, 0);
    },
    [setOpenState],
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setInputState(nextValue);

      if (!disabled) {
        setOpenState(true);
      }
    },
    [disabled, setInputState, setOpenState],
  );

  const handleInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      if (
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Escape'
      ) {
        event.preventDefault();
      }

      if (event.key === 'ArrowDown') {
        if (!isOpen) {
          setOpenState(true);
        }

        const nextIndex = getNextEnabledIndex(visibleOptions, activeIndex, 1);
        if (nextIndex !== null) {
          setActiveIndex(nextIndex);
        }
        return;
      }

      if (event.key === 'ArrowUp') {
        if (!isOpen) {
          setOpenState(true);
        }

        const nextIndex = getNextEnabledIndex(visibleOptions, activeIndex, -1);
        if (nextIndex !== null) {
          setActiveIndex(nextIndex);
        }
        return;
      }

      if (event.key === 'Escape') {
        setOpenState(false);
        return;
      }

      if (event.key === 'Enter') {
        const activeOption =
          activeIndex !== null ? visibleOptions[activeIndex] : undefined;

        if (activeOption) {
          event.preventDefault();
          handleOptionSelect(activeOption);
          return;
        }

        if (addOptions && currentInputValue.trim()) {
          event.preventDefault();
          createCustomOption(currentInputValue);
        }
        return;
      }

      if (
        (event.key === 'Backspace' || event.key === 'Delete') &&
        currentInputValue.length === 0
      ) {
        if (multiple) {
          const lastValue = selectedValues[selectedValues.length - 1];
          if (lastValue) {
            event.preventDefault();
            removeSelectedValue(lastValue);
            setTimeout(() => inputRef.current?.focus(), 0);
          }
          return;
        }

        if (currentValue) {
          event.preventDefault();
          setValueState(null);
          return;
        }
      }

      if (
        event.key === 'ArrowLeft' &&
        multiple &&
        currentInputValue.length === 0 &&
        selectedValues.length > 0
      ) {
        event.preventDefault();
        focusChip(visibleSelectedValues.length - 1);
      }
    },
    [
      activeIndex,
      addOptions,
      createCustomOption,
      currentInputValue,
      currentValue,
      disabled,
      focusChip,
      handleOptionSelect,
      isOpen,
      multiple,
      removeSelectedValue,
      selectedValues,
      setOpenState,
      setValueState,
      visibleOptions,
      visibleSelectedValues.length,
    ],
  );

  const handleChipKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number, value: string) => {
      if (disabled) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (index > 0) {
          focusChip(index - 1);
          return;
        }

        inputRef.current?.focus();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (index < visibleSelectedValues.length - 1) {
          focusChip(index + 1);
          return;
        }

        inputRef.current?.focus();
        return;
      }

      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        removeSelectedValue(value);
        if (index > 0) {
          requestAnimationFrame(() => focusChip(index - 1));
        } else {
          requestAnimationFrame(() => inputRef.current?.focus());
        }
      }
    },
    [disabled, focusChip, removeSelectedValue, visibleSelectedValues.length],
  );

  const handleListScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      if (!hasMore || loadingMore || disabled || !onLoadMore) {
        return;
      }

      const target = event.currentTarget;
      const distanceFromBottom =
        target.scrollHeight - target.scrollTop - target.clientHeight;

      if (distanceFromBottom <= 32) {
        onLoadMore();
      }
    },
    [disabled, hasMore, loadingMore, onLoadMore],
  );

  const handleOptionMouseDown = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
    },
    [],
  );

  const isLoading = loadingMore;

  return (
    <Box
      className={`${cx(classes.root, className)} group`}
      data-disabled={disabled || undefined}
      data-error={error || undefined}
      data-valid={valid || undefined}
      data-invalid={invalid || undefined}
      aria-disabled={disabled}
      ref={rootRef}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      {...otherProps}
    >
      {name &&
        selectedValues.map((selectedValue, index) => (
          <Box
            key={`${selectedValue}-${index}`}
            as="input"
            type="hidden"
            name={name}
            value={selectedValue}
            disabled={disabled}
          />
        ))}

      <Box className={classes.control}>
        {multiple && visibleSelectedValues.length > 0 && (
          <Box className={classes.chips}>
            {visibleSelectedValues.map((selectedValue, index) => {
              const selectedLabelForChip =
                visibleSelectedLabels[index] ?? selectedValue;

              return (
                <Box
                  key={`${selectedValue}-${index}`}
                  onMouseDown={handleOptionMouseDown}
                >
                  <Chip
                    ref={(node: HTMLButtonElement | null) => {
                      chipRefs.current[index] = node;
                    }}
                    size={chipSize}
                    dismissable
                    tabIndex={-1}
                    onDismiss={() => removeSelectedValue(selectedValue)}
                    onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) =>
                      handleChipKeyDown(event, index, selectedValue)
                    }
                  >
                    {selectedLabelForChip}
                  </Chip>
                </Box>
              );
            })}

            {hiddenTagCount > 0 && (
              <Chip size={chipSize} tabIndex={-1} aria-hidden disabled>
                +{hiddenTagCount}
              </Chip>
            )}
          </Box>
        )}

        <Box
          as="input"
          id={inputId}
          ref={(node: HTMLInputElement | null) => {
            inputRef.current = node;
            floating.refs.setReference(node);
          }}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? listboxId : undefined}
          aria-autocomplete="list"
          aria-activedescendant={
            isOpen && activeIndex !== null
              ? `${baseId}-option-${activeIndex}`
              : undefined
          }
          aria-haspopup="listbox"
          aria-disabled={disabled}
          aria-invalid={error || invalid || undefined}
          disabled={disabled}
          placeholder={placeholder}
          value={currentInputValue}
          className={classes.input}
          onFocus={() => {
            if (!disabled) {
              setFocusedWithin(true);
              setOpenState(true);
            }
          }}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoComplete="off"
        />
      </Box>

      <Box as="span" className={classes.icon} data-open={isOpen} aria-hidden>
        <Icon name="caret-down" />
      </Box>

      {isOpen && !disabled && (
        <FloatingPortal>
          <FloatingFocusManager
            context={floating.context}
            modal={false}
            initialFocus={-1}
          >
            <List
              ref={(node: HTMLDivElement | null) => {
                floatingRef.current = node;
                floating.refs.setFloating(node);
              }}
              id={listboxId}
              role="listbox"
              aria-labelledby={inputId}
              aria-multiselectable={multiple || undefined}
              density={density}
              className={menu({ density }).wrapper}
              maxH="80"
              overflowY="auto"
              data-loading={isLoading || undefined}
              style={floating.floatingStyles}
              onScroll={handleListScroll}
              {...(getFloatingProps() as Record<string, unknown>)}
            >
              {visibleOptions.length === 0 ? (
                <Box px="12" py="10" color="text.subtlest">
                  No options
                </Box>
              ) : (
                visibleOptions.map((option, index) => {
                  const isSelected = multiple
                    ? selectedValues.includes(option.value)
                    : currentValue === option.value;
                  const isActive = activeIndex === index;

                  return (
                    <ListItem
                      key={option.value}
                      id={`${baseId}-option-${index}`}
                      aria-selected={isSelected}
                      disabled={option.disabled}
                      selected={isSelected}
                      density={density}
                      variant={multiple ? 'checkbox' : 'default'}
                      bg={isActive ? 'bg.neutral.hovered' : undefined}
                      onMouseDown={handleOptionMouseDown}
                      onClick={() => {
                        if (!option.disabled) {
                          handleOptionSelect(option);
                        }
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="start"
                        gap="4"
                        minW="0"
                        w="full"
                      >
                        {multiple && (
                          <Box
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            w="20"
                            flexShrink="0"
                            color={
                              isSelected ? 'text' : 'icon.decorative.subtle'
                            }
                          >
                            <Icon name={isSelected ? 'check' : 'checkbox'} />
                          </Box>
                        )}

                        <Box
                          display="flex"
                          flexDirection="column"
                          gap="0"
                          minW="0"
                          flex="1"
                        >
                          <Text color="text" size="14">
                            {renderHighlightedText(
                              option.label,
                              currentInputValue,
                            )}
                          </Text>

                          {option.description && (
                            <Text
                              color="text.subtlest"
                              size="12"
                              lineHeight="tight"
                            >
                              {renderHighlightedText(
                                option.description,
                                currentInputValue,
                              )}
                            </Text>
                          )}
                        </Box>

                        {option.iconLeft && !multiple && (
                          <Box
                            as="span"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink="0"
                            color="icon.decorative.subtle"
                          >
                            <Icon name={option.iconLeft} />
                          </Box>
                        )}

                        {option.iconRight && (
                          <Box
                            as="span"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink="0"
                            color="icon.decorative.subtle"
                          >
                            <Icon name={option.iconRight} />
                          </Box>
                        )}
                      </Box>
                    </ListItem>
                  );
                })
              )}

              {isLoading && (
                <Box px="12" py="10" color="text.subtlest">
                  Loading more...
                </Box>
              )}
            </List>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Box>
  );
};
