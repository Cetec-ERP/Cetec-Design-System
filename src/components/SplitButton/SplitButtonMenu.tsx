import { useEffect, useState } from 'react';

import { IconButton } from '~/components/IconButton';
import { Menu, type MenuProps } from '~/components/Menu';
import { useLocale } from '~/system/context/useLocale';

import { useSplitButtonContext } from './SplitButtonContext';

/**
 * Props for {@link SplitButtonMenu}. Accepts the {@link Menu} props except
 * the ones the split button sets: the trigger, its placement, and how it opens.
 */
export type SplitButtonMenuProps = Omit<
  MenuProps,
  | 'trigger'
  | 'placement'
  | 'inline'
  | 'panel'
  | 'triggerInteraction'
  | 'triggerOpenDelay'
  | 'triggerCloseDelay'
  | 'onMenubarEdgeNavigate'
>;

/**
 * The menu half of a {@link SplitButton}: a caret toggle that opens a menu of
 * related actions below the button, aligned to its end.
 *
 * Use it as the last direct child of `SplitButton`. Do not wrap it in another
 * component: `SplitButton` finds it by type, so a wrapped menu is treated as
 * part of the label. Its children are `MenuItem`, `MenuGroup`, and `SubMenu`.
 * The toggle takes its variant, size, accessible name, and disabled reason
 * from the parent `SplitButton`. It has `aria-haspopup="menu"` and
 * `aria-expanded`. Enter, Space, and the arrow keys open the menu. Escape
 * closes it and returns focus to the toggle.
 *
 * The open state is uncontrolled by default. Pass `open` and `onOpenChange`
 * to control it. While the parent has a `menuDisabledReason`, the menu stays
 * closed. If the reason arrives while a controlled menu is open, the menu
 * calls `onOpenChange(false)`, so it stays closed after the reason clears.
 *
 * @example
 * ```tsx
 * <SplitButton onClick={moveToNext}>
 *   Move to next: Packing
 *   <SplitButtonMenu>
 *     <MenuItem label="Choose location…" onClick={chooseLocation} />
 *   </SplitButtonMenu>
 * </SplitButton>
 * ```
 */
export const SplitButtonMenu = (props: SplitButtonMenuProps) => {
  const { children, open, defaultOpen, onOpenChange, ...rest } = props;
  const { labels } = useLocale();
  const { variant, size, menuLabel, menuDisabledReason, toggleClassName } =
    useSplitButtonContext();
  const menuDisabled = Boolean(menuDisabledReason);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );

  // A menu closed by a disabled reason stays closed when the reason clears.
  if (menuDisabled && uncontrolledOpen) {
    setUncontrolledOpen(false);
  }

  const isOpen = !menuDisabled && (open ?? uncontrolledOpen);

  // A controlled menu is closed by its owner. Ask for that when a reason
  // arrives while it is open, so it does not reopen when the reason clears.
  const closedByReason = menuDisabled && open === true;
  useEffect(() => {
    if (closedByReason) onOpenChange?.(false);
  }, [closedByReason, onOpenChange]);

  // The toggle blocks clicks while disabled, but the arrow keys would still
  // ask the menu to open.
  const handleOpenChange = (nextOpen: boolean) => {
    if (menuDisabled && nextOpen) return;
    if (open === undefined) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <Menu
      {...rest}
      open={isOpen}
      onOpenChange={handleOpenChange}
      placement="bottom-end"
      trigger={
        <IconButton
          variant={variant}
          size={size}
          iconName="caret-down"
          altText={menuLabel ?? labels.moreActions}
          disabledReason={menuDisabledReason}
          // Above, as the action's reason is, and clear of the menu below.
          tooltipPlacement="top"
          aria-haspopup="menu"
          className={toggleClassName}
        />
      }
    >
      {children}
    </Menu>
  );
};
