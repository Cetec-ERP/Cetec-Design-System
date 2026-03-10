import type { ChangeEventHandler } from 'react';

import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { Icon, type IconNamesList } from '../Icon';
import { Text } from '../Text';
import { Toggle } from '../Toggle';

import { HighlightText } from './HighlightText';

type SelectionControl = 'none' | 'checkbox' | 'toggle';

type OptionRowContentClasses = {
  icon?: string;
  itemMain?: string;
  itemLabel?: string;
  itemDescription?: string;
  highlight?: string;
};

export type OptionRowContentProps = {
  label?: string;
  description?: string;
  iconBefore?: IconNamesList;
  iconAfter?: IconNamesList;
  query?: string;
  highlightMatches?: boolean;
  classes?: OptionRowContentClasses;
  selected?: boolean;
  selectionControl?: SelectionControl;
  controlName?: string;
  onControlChange?: ChangeEventHandler<HTMLInputElement>;
};

export const OptionRowContent = ({
  label,
  description,
  iconBefore,
  iconAfter,
  query = '',
  highlightMatches = false,
  classes,
  selected,
  selectionControl = 'none',
  controlName = 'option-row',
  onControlChange,
}: OptionRowContentProps) => {
  const handleControlChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onControlChange?.(event);
  };

  return (
    <>
      {selectionControl === 'checkbox' && (
        <Checkbox
          name={controlName}
          checked={Boolean(selected)}
          onChange={handleControlChange}
          tabIndex={-1}
        />
      )}

      {selectionControl === 'toggle' && (
        <Toggle
          name={controlName}
          checked={Boolean(selected)}
          onChange={handleControlChange}
          mr="4"
          tabIndex={-1}
        />
      )}

      {iconBefore && <Icon className={classes?.icon} name={iconBefore} />}

      <Box className={classes?.itemMain}>
        {label && (
          <Text className={classes?.itemLabel}>
            <HighlightText
              value={label}
              query={query}
              enabled={highlightMatches}
              highlightClassName={classes?.highlight}
            />
          </Text>
        )}

        {description && (
          <Text className={classes?.itemDescription}>
            <HighlightText
              value={description}
              query={query}
              enabled={highlightMatches}
              highlightClassName={classes?.highlight}
            />
          </Text>
        )}
      </Box>

      {iconAfter && (
        <Icon className={classes?.icon} name={iconAfter} ml="auto" />
      )}
    </>
  );
};
