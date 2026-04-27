import { cx } from '@styled-system/css';
import { kbd } from '@styled-system/recipes';

import { splitProps } from '~/utils/splitProps';

import { Box, type BoxProps } from '../Box';
import { Tooltip } from '../Tooltip';

import { getKbdLabel, isSpecialSymbol, type KbdValue } from './kbdUtils';

export type KbdProps = Omit<BoxProps, 'children'> & {
  keys: KbdValue[];
};

const defaultClasses = kbd({});
const symbolClasses = kbd({ variant: 'symbol' });

/**
 * Used to display keyboard shortcuts.
 * Supported special symbols: ⌘ command, ⌥ option, ⌃ control, ⇪ shift,
 * ⎋ escape, ⌫ delete, ↩ return, ⇥ tab, ← left, → right, ↑ up, ↓ down.
 * Example: <Kbd keys={['⌘', 'K']} />
 */
export const Kbd = (props: KbdProps) => {
  const { keys, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  const tooltipText = keys.map(getKbdLabel).join(' + ');
  const content = (
    <Box
      as="span"
      className={cx(defaultClasses.kbdGroup, className)}
      {...otherProps}
    >
      {keys.map((keyValue, index) => (
        <Box
          as="kbd"
          key={`${keyValue}-${index}`}
          className={
            isSpecialSymbol(keyValue) ? symbolClasses.key : defaultClasses.key
          }
        >
          {keyValue}
        </Box>
      ))}
    </Box>
  );

  return <Tooltip text={tooltipText}>{content}</Tooltip>;
};
