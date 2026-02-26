import { MouseEvent } from 'react';
import { cx } from '@styled-system/css';
import { Tooltip } from '~/components/Tooltip';
import { Box, type BoxProps } from '~/components/Box';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@styled-system/recipes';
import { splitProps } from '~/utils/splitProps';
import { Spinner } from '~/components/Spinner';
import { Icon, type IconNamesList } from '~/components/Icon';

export type IconButtonProps = Omit<BoxProps, keyof IconButtonVariantProps> &
  IconButtonVariantProps & {
    iconName: IconNamesList;
    altText: string;
    href?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
  };

export const IconButton = (props: IconButtonProps) => {
  const {
    iconName,
    altText,
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

  return (
    <Tooltip text={altText}>
      <Box
        as={href ? 'a' : 'button'}
        className={`${cx(classes.container, className)} group`}
        {...(href ? { href } : { type })}
        {...(loading && {
          'aria-busy': true,
          'aria-live': 'polite',
        })}
        disabled={disabled}
        aria-label={altText}
        {...(disabled &&
          href && {
            onClick: (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
          })}
        {...otherProps}
      >
        <Icon
          name={iconName}
          className={classes.icon}
          opacity={loading ? 0 : 1}
        />
        {loading && (
          <Spinner
            size="sm"
            inverse={variant === 'primary' || variant === 'danger'}
            centered
          />
        )}
      </Box>
    </Tooltip>
  );
};
