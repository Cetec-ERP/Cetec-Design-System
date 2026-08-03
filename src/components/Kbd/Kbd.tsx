import { cx } from '@styled-system/css';
import { kbd } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Tooltip } from '../Tooltip';

import { getKbdLabel, isSpecialSymbol, type KbdValue } from './kbdUtils';

/** Props accepted by {@link Kbd}. */
export type KbdProps = Omit<BoxProps, 'children'> & {
  /** Ordered key labels that make up the shortcut. */
  keys: KbdValue[];
};

const defaultClasses = kbd({});
const symbolClasses = kbd({ variant: 'symbol' });

/**
 * Displays a keyboard shortcut as a group of native `kbd` elements.
 *
 * Known symbols receive readable tooltip labels: ⌘ command, ⌥ option,
 * ⌃ control, ⇪ shift, ⎋ escape, ⌫ delete, ↩ return, ⇥ tab, and the four arrow
 * symbols. `Kbd` describes a shortcut; it is not an interactive control.
 *
 * @example
 * ```tsx
 * <Kbd keys={['⌘', 'K']} />
 * ```
 */
export const Kbd = (props: KbdProps) => {
  const { keys, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const tooltipText = keys.map(getKbdLabel).join(' + ');
  const keyOccurrences = new Map<KbdValue, number>();
  const renderedKeys = keys.map((keyValue) => {
    const occurrence = keyOccurrences.get(keyValue) ?? 0;
    keyOccurrences.set(keyValue, occurrence + 1);
    return { id: `${keyValue}-${occurrence}`, value: keyValue };
  });
  const content = (
    <Box
      as="span"
      className={cx(defaultClasses.kbdGroup, className)}
      {...otherProps}
    >
      {renderedKeys.map(({ id, value }) => (
        <Box
          as="kbd"
          key={id}
          className={
            isSpecialSymbol(value) ? symbolClasses.key : defaultClasses.key
          }
        >
          {value}
        </Box>
      ))}
    </Box>
  );

  return <Tooltip text={tooltipText}>{content}</Tooltip>;
};
