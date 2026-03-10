import { listItemGroup } from '@styled-system/recipes';

import { Box } from '../Box';
import { Divider } from '../Divider';
import { Text } from '../Text';

import {
  hasMatchingItems,
  MENU_COMPONENT_TYPES,
  menuComponentTypeKey,
  type MenuGroupProps,
  useMenuFilterContext,
  useMenuRootContext,
} from './context/menuContext';

export const MenuGroup = (props: MenuGroupProps) => {
  const { label, children, divider, ...rest } = props;
  const rootContext = useMenuRootContext();
  const filterContext = useMenuFilterContext();
  const classes = listItemGroup({
    density: rootContext.density || undefined,
  });

  const hasMatches = hasMatchingItems(children, filterContext);

  if (!hasMatches) {
    return null;
  }

  return (
    <Box {...rest}>
      {label && (
        <Text as="div" className={classes.groupLabel}>
          {label}
        </Text>
      )}

      <Box>{children}</Box>

      {divider && <Divider role="separator" className={classes.divider} />}
    </Box>
  );
};

(MenuGroup as unknown as { [menuComponentTypeKey]: string })[
  menuComponentTypeKey
] = MENU_COMPONENT_TYPES.group;
