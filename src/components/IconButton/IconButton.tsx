import { cx } from '@styled-system/css';
import { Grid } from '@styled-system/jsx';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { Spinner } from '~/components/Spinner';
import { Icon, type IconNamesList } from '~/components/Icon';

/**
 * The IconButton component builds on Box.
 * It automatically renders as a "button" (or an "a" if an href is provided)
 * and applies the iconButton recipe styles.
 *
 * It requires exactly one child which must be an <Icon /> element.
 */
export type IconButtonProps = BoxProps &
  IconButtonVariantProps & {
    iconName: IconNamesList;
    href?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const IconButton = (props: IconButtonProps) => {
  const {
    iconName,
    variant,
    size,
    href,
    loading,
    disabled,
    type = 'button',
    ...rest
  } = props;
  const classes = iconButton({ variant, size });
  const [className, otherProps] = splitProps(rest);
  const trulyDisabled = loading || disabled;

  return (
    <Box
      as={href ? 'a' : 'button'}
      disabled={trulyDisabled}
      aria-disabled={trulyDisabled}
      aria-label={`icon-button`}
      className={cx(classes.container, className)}
      {...(href ? { href } : { type })}
      {...otherProps}
      {...(trulyDisabled &&
        href && {
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault(),
        })}
    >
      <>
        <Icon
          name={iconName}
          className={classes.icon}
          opacity={loading ? 0 : 1}
        />
        {loading && (
          <Grid
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            placeItems="center"
          >
            <Spinner size="sm" />
          </Grid>
        )}
      </>
    </Box>
  );
};
