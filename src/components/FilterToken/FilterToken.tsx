import {
  type MouseEvent,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { cx } from '@styled-system/css';
import { filterToken } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon } from '~/components/Icon';
import { Tooltip } from '~/components/Tooltip';
import { useLocale } from '~/system/context/useLocale';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/**
 * Where a filter token is in the edit cycle.
 *
 * - `applied`: the results include this filter.
 * - `editing`: a menu for this token is open.
 * - `pending`: added or changed, and waits for Apply.
 * - `removing`: removed, and waits for Apply. Shown struck through.
 * - `armed`: the next Backspace removes it.
 */
export type FilterTokenState =
  | 'applied'
  | 'editing'
  | 'pending'
  | 'removing'
  | 'armed';

/** Visual tone of a filter token. `exclude` marks a negated operator, such as "is not". */
export type FilterTokenTone = 'default' | 'exclude';

/** Number of list values shown before the rest collapse into `+N`. */
const MAX_VISIBLE_VALUES = 2;

type FilterTokenOwnProps = {
  /** Name of the filtered field, such as "Stage". */
  field: string;
  /** Operator text, such as "is", "is any of" or "is between". */
  operator: string;
  /**
   * The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
   * shows its first two items, then `+N` for the rest, and a tooltip lists
   * every item. A value cut off by the width limit also shows the tooltip,
   * so the full text can be read on hover or focus. An empty
   * string or list shows "…" for a filter that has no value yet. Omit it for
   * an operator that takes no value, such as "is empty".
   */
  value?: string | string[];
  /** @default "applied" */
  state?: FilterTokenState;
  /** @default "default" */
  tone?: FilterTokenTone;
  /**
   * Renders the operator as text, not as a button. Use it when the field
   * supports only one operator.
   */
  operatorLocked?: boolean;
  /**
   * Content that replaces the value button while the token is edited in
   * place, usually a text input. The value text stays before it.
   */
  editor?: ReactNode;
  /** Disables every part of the token, the `editor` included. */
  disabled?: boolean;
  /**
   * Keeps focus where it is when a part is clicked with a pointer. A filter
   * field sets this so focus stays in its input, as in a combobox.
   */
  retainFocus?: boolean;
  /**
   * Runs when the field part is clicked. Falls back to `onValueClick` when
   * absent, because the field and the value both open the value menu.
   */
  onFieldClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the operator part is clicked. Not called when `operatorLocked` is true. */
  onOperatorClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the value part is clicked. */
  onValueClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Runs when the remove button is clicked. The button is not shown when this
   * is absent or when `state` is `removing`.
   */
  onRemove?: () => void;
  /**
   * Accessible name for the remove button.
   * @default `labels.removeFilter` (English: `Remove filter: ${field} ${operator} ${values}`), with every value
   */
  removeLabel?: string;
};

/** Props for {@link FilterToken}. Includes `Box` style props for the root. */
export type FilterTokenProps = Omit<
  BoxProps,
  keyof FilterTokenOwnProps | 'children'
> &
  FilterTokenOwnProps;

/**
 * One filter in a filter field, read as a sentence: field, operator, value.
 *
 * Each part is its own click target, and the remove button ends the token.
 * A part with no click handler renders as text. Use `Chip` for a label with
 * one action. The root renders a `span` with `role="group"` and an
 * accessible name made from the sentence.
 *
 * In `removing` state, the parts stay clickable so the consumer can restore
 * the filter, and the remove button is hidden.
 *
 * @example
 * ```tsx
 * <FilterToken
 *   field="Stage"
 *   operator="is any of"
 *   value="Open, In progress"
 *   onValueClick={openValues}
 *   onRemove={() => remove('stage')}
 * />
 * ```
 */
export const FilterToken = (props: FilterTokenProps) => {
  const {
    field,
    operator,
    value,
    state = 'applied',
    tone = 'default',
    operatorLocked,
    editor,
    disabled,
    retainFocus,
    onFieldClick,
    onOperatorClick,
    onValueClick,
    onRemove,
    removeLabel,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const classes = filterToken();
  const { labels } = useLocale();

  const values = Array.isArray(value) ? value : undefined;
  const fullValue = Array.isArray(value) ? value.join(', ') : value;
  const hidden = values ? Math.max(0, values.length - MAX_VISIBLE_VALUES) : 0;
  const shownValue = values
    ? values.slice(0, MAX_VISIBLE_VALUES).join(', ')
    : value;
  const sentence = [field, operator, fullValue].filter(Boolean).join(' ');
  const keepFocus = retainFocus
    ? (e: MouseEvent) => e.preventDefault()
    : undefined;

  // A value cut off by its max width gets the tooltip too, not only `+N`.
  const valueTextRef = useRef<HTMLSpanElement>(null);
  const [clipped, setClipped] = useState(false);
  useLayoutEffect(() => {
    const node = valueTextRef.current;
    if (!node) {
      setClipped(false);
      return;
    }
    const check = () => setClipped(node.scrollWidth > node.clientWidth);
    check();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(check);
    observer.observe(node);
    return () => observer.disconnect();
  }, [shownValue, editor]);

  const part = (
    slot: string,
    content: ReactNode,
    onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined,
    extra?: Record<string, unknown>,
  ) =>
    onClick ? (
      <Box
        as="button"
        type="button"
        className={cx(classes.part, slot)}
        disabled={disabled}
        onMouseDown={keepFocus}
        onClick={onClick}
        {...extra}
      >
        {content}
      </Box>
    ) : (
      <Box as="span" className={cx(classes.part, slot)} {...extra}>
        {content}
      </Box>
    );

  // With a +N count, screen readers get the full list instead of the short one.
  const valueContent = (
    <>
      <Box
        as="span"
        ref={valueTextRef}
        className={classes.valueText}
        aria-hidden={hidden > 0 || undefined}
      >
        {shownValue || '…'}
      </Box>
      {hidden > 0 && (
        <>
          <Box as="span" className={classes.count} aria-hidden>
            {`+${hidden}`}
          </Box>
          <Box as="span" srOnly>
            {fullValue}
          </Box>
        </>
      )}
    </>
  );

  return (
    <Box
      {...dsComponent('FilterToken')}
      as="span"
      role="group"
      aria-label={sentence}
      className={cx(classes.root, className)}
      data-state={state}
      data-tone={tone}
      data-disabled={disabled || undefined}
      {...otherProps}
    >
      {part(classes.field, field, onFieldClick ?? onValueClick)}
      {part(
        classes.operator,
        operator,
        operatorLocked ? undefined : onOperatorClick,
        operatorLocked ? { 'data-locked': true } : undefined,
      )}
      {editor !== undefined ? (
        // `inert` keeps a disabled token's editor out of the tab order.
        <Box
          as="span"
          className={cx(classes.part, classes.editor)}
          inert={disabled || undefined}
        >
          {shownValue && (
            <Box as="span" className={classes.value}>
              {valueContent}
            </Box>
          )}
          {editor}
        </Box>
      ) : (
        value !== undefined && (
          <Tooltip text={fullValue ?? ''} disabled={hidden === 0 && !clipped}>
            {part(classes.value, valueContent, onValueClick)}
          </Tooltip>
        )
      )}
      {onRemove && state !== 'removing' && (
        <Box
          as="button"
          type="button"
          className={classes.remove}
          aria-label={removeLabel ?? labels.removeFilter(sentence)}
          disabled={disabled}
          onMouseDown={keepFocus}
          onClick={onRemove}
        >
          <Icon name="x" size="16" aria-hidden />
        </Box>
      )}
    </Box>
  );
};
