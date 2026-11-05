import { useId, useLayoutEffect, useRef, useState } from 'react';

import { cx } from '@styled-system/css';
import { keyFact, type KeyFactVariantProps } from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Link } from '~/components/Link';
import { TextInput, type TextInputProps } from '~/components/TextInput';
import { Tooltip } from '~/components/Tooltip';
import { useLocale } from '~/system/context/useLocale';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

/** Props for {@link KeyFact}. */
export type KeyFactProps = Omit<
  BoxProps,
  keyof KeyFactVariantProps | 'children'
> &
  KeyFactVariantProps & {
    /** Name of the fact, such as "Owner" or "Due". */
    label: string;
    /** Value of the fact. A value wider than the space it has truncates and shows the full value in a tooltip. */
    value: string;
    /** Makes the value a link, such as to the related record. Ignored while `editing`. */
    href?: string;
    /**
     * `horizontal` reads "Label: Value" on one line, for a page header aside.
     * `vertical` stacks the label over a larger value, for a facts strip.
     *
     * @default 'horizontal'
     */
    layout?: KeyFactVariantProps['layout'];
    /**
     * Replaces the value with a text input labeled by `label`. The input starts
     * with `value`.
     *
     * @default false
     */
    editing?: boolean;
    /** Props for the text input shown while `editing`, such as `name` and `onChange`. */
    inputProps?: Partial<Omit<TextInputProps, 'id'>>;
  };

/**
 * Shows one short fact about a record as a label and a value.
 *
 * Use up to three horizontal key facts in a page header aside. Use the vertical
 * layout in a strip of facts under the title. A horizontal label ends in the
 * `keyFactLabel` text from `LocaleProvider` ("Owner:" in English). Set `editing`
 * to change the value in place.
 *
 * @example
 * ```tsx
 * <KeyFact label="Customer" value="Acme Corp" href="/customer/42" />
 * ```
 */
export const KeyFact = (props: KeyFactProps) => {
  const {
    label,
    value,
    href,
    layout = 'horizontal',
    editing = false,
    inputProps,
    ...rest
  } = props;
  const { labels } = useLocale();
  const inputId = useId();
  const textRef = useRef<HTMLElement>(null);
  const [truncated, setTruncated] = useState(false);
  const classes = keyFact({ layout, editing });
  const [className, otherProps] = splitProps(rest);
  const labelText =
    layout === 'horizontal' ? labels.keyFactLabel(label) : label;

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () =>
      setTruncated(element.scrollWidth > element.clientWidth);
    measure();

    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [editing, value]);

  return (
    <Box
      {...dsComponent('KeyFact')}
      className={cx(classes.root, className)}
      {...otherProps}
    >
      {editing ? (
        <>
          <Box as="label" htmlFor={inputId} className={classes.label}>
            {labelText}
          </Box>
          <Box className={classes.value}>
            <TextInput
              name={inputProps?.name ?? inputId}
              size="sm"
              defaultValue={value}
              {...inputProps}
              id={inputId}
            />
          </Box>
        </>
      ) : (
        <>
          <Box as="span" className={classes.label}>
            {labelText}
          </Box>
          <Box className={classes.value}>
            <Tooltip text={value} placement="top" disabled={!truncated}>
              {href ? (
                <Link
                  ref={textRef}
                  href={href}
                  size={layout === 'horizontal' ? '14' : '20'}
                  className={classes.text}
                >
                  {value}
                </Link>
              ) : (
                <Box
                  as="span"
                  ref={textRef}
                  className={classes.text}
                  color="text"
                >
                  {value}
                </Box>
              )}
            </Tooltip>
          </Box>
        </>
      )}
    </Box>
  );
};
