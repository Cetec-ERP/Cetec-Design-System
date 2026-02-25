import { menu } from '@styled-system/recipes';

import { Box } from '../Box';
import { Text } from '../Text';
import {
  hasMatchingItems,
  MENU_COMPONENT_TYPES,
  menuComponentTypeKey,
  type MenuGroupProps,
  useMenuFilterContext,
} from './menuContext';

export const MenuGroup = (props: MenuGroupProps) => {
  const { label, children, divider, ...rest } = props;
  const classes = menu({});
  const filterContext = useMenuFilterContext();

  const hasMatches = hasMatchingItems(children, filterContext);

  if (!hasMatches) {
    return null;
  }

  return (
    <Box {...rest}>
      {label && (
        <Box className={classes.groupLabel}>
          <Text textStyle="body.xs">{label}</Text>
        </Box>
      )}

      <Box>{children}</Box>

      {divider && (
        <Box
          role="separator"
          aria-orientation="horizontal"
          className={classes.divider}
        />
      )}
    </Box>
  );
};

(MenuGroup as unknown as { [menuComponentTypeKey]: string })[
  menuComponentTypeKey
] = MENU_COMPONENT_TYPES.group;
