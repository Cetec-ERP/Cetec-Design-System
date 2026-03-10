import type { ChangeEventHandler } from 'react';

import {
  listItemContent,
  type ListItemContentVariantProps,
} from '~/styled-system/recipes';

import { Box, type BoxProps } from '../Box';
import { Checkbox } from '../Checkbox';
import { Divider } from '../Divider';
import { Icon, type IconNamesList } from '../Icon';
import { Text } from '../Text';
import { Toggle } from '../Toggle';

import { HighlightText } from './HighlightText';
import { useListContext } from './listContext';

// type SelectionControl = 'none' | 'checkbox' | 'toggle';

// type ListItemContentClasses = {
//   icon?: string;
//   itemMain?: string;
//   itemLabel?: string;
//   itemDescription?: string;
//   highlight?: string;
// };

export type ListItemContentProps = Omit<
  BoxProps,
  keyof ListItemContentVariantProps
> &
  ListItemContentVariantProps & {
    label?: string;
    description?: string;
    iconBefore?: IconNamesList;
    iconAfter?: IconNamesList;
    query?: string;
    highlightMatches?: boolean;
    selected?: boolean;
    controlName?: string;
    onControlChange?: ChangeEventHandler<HTMLInputElement>;
  };

// const selectionControl =
//   variant === 'checkbox' || variant === 'toggle' ? variant : 'none';

export const ListItemContent = (props: ListItemContentProps) => {
  const {
    label,
    description,
    iconBefore,
    iconAfter,
    query,
    highlightMatches,
    selected,
    variant = 'default',
    controlName = 'list-item',
    onControlChange,
  } = props;
  const classes = listItemContent({});
  const listContext = useListContext();

  const resolvedQuery = query ?? listContext.query;
  const shouldHighlight = highlightMatches ?? listContext.highlightMatches;

  const handleControlChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onControlChange?.(event);
  };

  if (variant === 'divider') {
    return <Divider className={classes.divider} />;
  }

  return (
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
            <HighlightText
              value={label}
              query={resolvedQuery}
              enabled={shouldHighlight}
            />
          </Text>
        )}

        {description && (
          <Text className={classes.itemDescription}>
            <HighlightText
              value={description}
              query={resolvedQuery}
              enabled={shouldHighlight}
            />
          </Text>
        )}
      </Box>

      {iconAfter && (
        <Icon className={classes.icon} name={iconAfter} ml="auto" />
      )}
    </>
  );
};
