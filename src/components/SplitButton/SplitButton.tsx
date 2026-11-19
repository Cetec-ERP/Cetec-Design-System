import {
  Children,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useMemo,
} from 'react';

import { cx } from '@styled-system/css';
import {
  splitButton,
  type SplitButtonVariantProps,
} from '@styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Button, type ButtonProps } from '~/components/Button';
import { dsComponent } from '~/utils/dsComponent';
import { splitProps } from '~/utils/splitProps';

import {
  SplitButtonContext,
  type SplitButtonContextValue,
} from './SplitButtonContext';
import { SplitButtonMenu } from './SplitButtonMenu';

type SplitButtonOwnProps = {
  /**
   * The main action's visible label, followed by one `SplitButton.Menu` that
   * holds the related actions. The menu must be a direct child, or inside a
   * fragment. A component that renders `SplitButton.Menu` itself is not
   * found, and its content would land inside the action button.
   */
  children: ReactNode;
  /** Runs when the main action is clicked. Not called while it is disabled. */
  onClick?: ButtonProps['onClick'];
  /**
   * Disables the main action only and explains why. The action stays
   * focusable and is marked `aria-disabled`, and the reason shows in a
   * tooltip, as on `Button`. The menu toggle stays available.
   */
  disabledReason?: string;
  /**
   * Disables the menu toggle only and explains why. The toggle stays
   * focusable, the reason shows in its tooltip, and the menu does not open.
   * The main action stays available.
   */
  menuDisabledReason?: string;
  /**
   * Shows a spinner on the main action and sets `aria-busy` on it. The menu
   * toggle is not affected. Loading does not disable the action.
   *
   * @default false
   */
  loading?: boolean;
  /**
   * Accessible name and tooltip of the menu toggle, such as "More move
   * options". Takes precedence over the `moreActions` label of
   * `LocaleProvider`, which is "More actions" in English.
   */
  menuLabel?: string;
};

/**
 * Props for {@link SplitButton}. Extends {@link BoxProps} for the root
 * element. `variant` and `size` apply to both halves.
 */
export type SplitButtonProps = Omit<
  BoxProps,
  keyof SplitButtonVariantProps | keyof SplitButtonOwnProps
> &
  SplitButtonVariantProps &
  SplitButtonOwnProps;

const isSplitButtonMenu = (child: ReactNode) =>
  isValidElement(child) && child.type === SplitButtonMenu;

// Looks inside fragments, so `<>Label<SplitButton.Menu /></>` also works.
const flattenChildren = (children: ReactNode): ReactNode[] =>
  Children.toArray(children).flatMap((child) =>
    isValidElement(child) && child.type === Fragment
      ? flattenChildren(
          (child as ReactElement<{ children?: ReactNode }>).props.children,
        )
      : [child],
  );

/**
 * A main action joined to a menu of related actions.
 *
 * The first half is a `Button` that runs the main action in one click. The
 * second half is a caret toggle that opens a `Menu` of other ways to do it.
 * Each half can be disabled on its own with a reason: a disabled main action
 * leaves the menu available. Use a plain `Button` when there is one action,
 * and `Menu` with `trigger={<Button>…</Button>}` when no action is the main
 * one.
 *
 * Renders a `div` with two native buttons, so it has two tab stops. The
 * toggle's accessible name comes from `menuLabel`, or from the `moreActions`
 * label of `LocaleProvider`. `variant` and `size` use the `button` recipe
 * values: `standard` (default), `primary`, `cta`, `hollow`, or `danger`, and
 * `sm`, `md` (default), or `lg`.
 *
 * @example
 * ```tsx
 * <SplitButton onClick={moveToNext} menuLabel="More move options">
 *   Move to next: Packing
 *   <SplitButton.Menu>
 *     <MenuItem label="Choose location…" onClick={chooseLocation} />
 *     <MenuItem label="Partial move…" onClick={partialMove} />
 *   </SplitButton.Menu>
 * </SplitButton>
 * ```
 */
export const SplitButton = (props: SplitButtonProps) => {
  const {
    variant,
    size,
    children,
    onClick,
    disabledReason,
    menuDisabledReason,
    loading,
    menuLabel,
    ...rest
  } = props;
  const classes = splitButton({ variant, size });
  const [className, otherProps] = splitProps(rest);

  const childArray = flattenChildren(children);
  const menu = childArray.find(isSplitButtonMenu);
  const label = childArray.filter((child) => !isSplitButtonMenu(child));

  if (import.meta.env.DEV && !menu) {
    console.warn(
      'SplitButton needs a SplitButton.Menu as a direct child. A component that renders SplitButton.Menu is not found. Use Button for an action without a menu.',
    );
  }

  const context = useMemo<SplitButtonContextValue>(
    () => ({
      variant,
      size,
      menuLabel,
      menuDisabledReason,
      toggleClassName: classes.toggle,
    }),
    [variant, size, menuLabel, menuDisabledReason, classes.toggle],
  );

  return (
    <Box
      {...dsComponent('SplitButton')}
      className={cx(classes.root, className)}
      {...otherProps}
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        disabledReason={disabledReason}
        loading={loading}
        className={classes.action}
      >
        {label}
      </Button>
      {menu && (
        <>
          <Box as="span" aria-hidden className={classes.divider} />
          <SplitButtonContext.Provider value={context}>
            {menu}
          </SplitButtonContext.Provider>
        </>
      )}
    </Box>
  );
};

/** The menu half. Same as {@link SplitButtonMenu}. */
SplitButton.Menu = SplitButtonMenu;
