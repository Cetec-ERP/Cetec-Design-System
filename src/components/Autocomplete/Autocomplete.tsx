import { type HTMLProps, type ReactNode } from 'react';

import {
  FloatingFocusManager,
  FloatingPortal,
  type Placement,
} from '@floating-ui/react';

import { cx } from '@styled-system/css';
import type { AutocompleteVariantProps } from '@styled-system/recipes';

import type { MenuDensity } from '~/components/Menu';

import { Box, type BoxProps } from '../Box/Box';
import { Spinner } from '../Spinner/Spinner';

import { AutocompleteListbox } from './AutocompleteListbox';
import { AutocompleteToken } from './AutocompleteToken';
import { useAutocompleteController } from './useAutocompleteController';

import type {
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  AutocompleteOpenChangeReason,
  AutocompleteValue,
} from './types';

export type AutocompleteProps<Multiple extends boolean = boolean> = Omit<
  BoxProps<'div'>,
  | keyof AutocompleteVariantProps
  | 'children'
  | 'defaultValue'
  | 'onChange'
  | 'value'
> &
  AutocompleteVariantProps & {
    value?: AutocompleteValue<Multiple>;
    defaultValue?: AutocompleteValue<Multiple>;
    onValueChange?: (
      value: AutocompleteValue<Multiple>,
      reason: AutocompleteChangeReason,
    ) => void;
    /** @deprecated Use onValueChange. */
    onChange?: (
      value: AutocompleteValue<Multiple>,
      reason: AutocompleteChangeReason,
    ) => void;
    inputValue?: string;
    defaultInputValue?: string;
    onInputValueChange?: (
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => void;
    /** @deprecated Use onInputValueChange. */
    onInputChange?: (
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (
      open: boolean,
      reason: AutocompleteOpenChangeReason,
    ) => void;
    multiple?: Multiple;
    allowCustomValue?: boolean;
    getCreateOptionLabel?: (inputValue: string) => string;
    limitTags?: number;
    placeholder?: string;
    placement?: Placement;
    offset?: number;
    children?: ReactNode;
    id?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    valid?: boolean;
    invalid?: boolean;
    density?: MenuDensity;
    loading?: boolean;
    loadingMore?: boolean;
    hasMore?: boolean;
    onLoadMore?: () => void;
    loadingText?: ReactNode;
    noOptionsText?: ReactNode;
  };

export const Autocomplete = <Multiple extends boolean = boolean>(
  props: AutocompleteProps<Multiple>,
) => {
  const controller = useAutocompleteController(props);
  const {
    activeIndex,
    announcement,
    ariaDescribedBy,
    ariaLabel,
    ariaLabelledBy,
    ariaRequired,
    baseId,
    chipSize,
    classes,
    className,
    currentInputValue,
    currentValue,
    density,
    disabled,
    displayedInputValue,
    error,
    floating,
    getFloatingProps,
    getItemProps,
    getReferenceProps,
    handleBlurCapture,
    handleControlMouseDown,
    handleFocusCapture,
    handleInputChange,
    handleInputFocus,
    handleInputKeyDown,
    handleInputMouseDown,
    handleListScroll,
    handleOptionSelect,
    handleTokenKeyDown,
    hiddenTagCount,
    inputId,
    inputRef,
    invalid,
    isOpen,
    listboxId,
    loading,
    loadingMore,
    loadingText,
    multiple,
    name,
    navigationItems,
    noOptionsText,
    otherProps,
    placeholder,
    readOnly,
    removeSelectedValue,
    rootRef,
    selectedLabels,
    selectedValues,
    setFloatingRef,
    setItemRef,
    setTokenRef,
    valid,
    visibleSelectedValues,
  } = controller;

  return (
    <Box
      ref={rootRef}
      className={cx(classes.root, className)}
      data-disabled={disabled || undefined}
      aria-disabled={disabled || undefined}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      {...otherProps}
    >
      {name &&
        selectedValues.map((selectedValue) => (
          <Box
            key={`hidden-${selectedValue}`}
            as="input"
            type="hidden"
            name={name}
            value={selectedValue}
            disabled={disabled}
          />
        ))}

      <Box
        ref={floating.refs.setReference}
        className={classes.control}
        data-open={isOpen || undefined}
        data-disabled={disabled || undefined}
        data-error={error || undefined}
        data-valid={valid || undefined}
        data-invalid={invalid || undefined}
        onMouseDown={handleControlMouseDown}
      >
        <Box className={classes.valueContainer}>
          {multiple &&
            visibleSelectedValues.map((selectedValue, index) => {
              const label = selectedLabels[index] ?? selectedValue;

              return (
                <AutocompleteToken
                  key={selectedValue}
                  className={classes.token}
                  size={chipSize}
                  label={label}
                  disabled={disabled || readOnly}
                  dismissButtonRef={(node) => setTokenRef(index, node)}
                  onDismiss={() => removeSelectedValue(selectedValue, label)}
                  onKeyDown={(event) =>
                    handleTokenKeyDown(event, index, selectedValue, label)
                  }
                />
              );
            })}

          {hiddenTagCount > 0 && (
            <Box
              as="span"
              className={classes.overflowIndicator}
              aria-label={`${hiddenTagCount} more selected`}
            >
              {`+${hiddenTagCount}`}
            </Box>
          )}

          <Box
            as="input"
            id={inputId}
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={
              isOpen && activeIndex !== null
                ? `${baseId}-option-${activeIndex}`
                : undefined
            }
            aria-haspopup="listbox"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-required={ariaRequired}
            aria-disabled={disabled || undefined}
            aria-invalid={error || invalid || undefined}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={selectedValues.length === 0 ? placeholder : undefined}
            value={displayedInputValue}
            className={classes.input}
            onChange={handleInputChange}
            {...(getReferenceProps({
              onFocus: handleInputFocus,
              onKeyDown: handleInputKeyDown,
              onMouseDown: handleInputMouseDown,
            }) as Record<string, unknown>)}
            autoComplete="off"
          />
        </Box>

        {loading && (
          <Box as="span" className={classes.loadingIndicator} aria-hidden>
            <Spinner size="sm" />
          </Box>
        )}
      </Box>

      <Box
        as="span"
        className={classes.liveRegion}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </Box>

      {isOpen && !disabled && !readOnly && (
        <FloatingPortal>
          <FloatingFocusManager
            context={floating.context}
            modal={false}
            initialFocus={-1}
          >
            <AutocompleteListbox
              activeIndex={activeIndex}
              baseId={baseId}
              density={density}
              floatingProps={getFloatingProps() as Record<string, unknown>}
              floatingRef={setFloatingRef}
              floatingStyles={floating.floatingStyles}
              getItemProps={(itemProps: HTMLProps<HTMLElement>) =>
                getItemProps(itemProps) as Record<string, unknown>
              }
              items={navigationItems}
              listboxClassName={classes.listbox}
              listboxId={listboxId}
              loading={loading}
              loadingMore={loadingMore}
              loadingText={loadingText}
              multiple={Boolean(multiple)}
              noOptionsText={noOptionsText}
              onScroll={handleListScroll}
              onSelect={handleOptionSelect}
              query={currentInputValue}
              selectedValues={selectedValues}
              setItemRef={setItemRef}
              statusClassName={classes.status}
              value={currentValue}
            />
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Box>
  );
};
