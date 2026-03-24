import type { MouseEvent } from 'react';

import { cx } from '@cetec/styled-system/css';
import {
  iconButton,
  type IconButtonVariantProps,
} from '@cetec/styled-system/recipes';

import { Box, type BoxProps } from '~/components/Box';
import { Icon, type IconNamesList } from '~/components/Icon';
import { Spinner } from '~/components/Spinner';
import { Tooltip } from '~/components/Tooltip';
import { splitProps } from '~/utils/splitProps';

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
        {...(href
          ? ({
              as: 'a',
              href,
              ...(disabled && {
                onClick: (e: MouseEvent<HTMLAnchorElement>) =>
                  e.preventDefault(),
              }),
            } satisfies BoxProps<'a'>)
          : ({
              as: 'button',
              type,
              disabled,
            } satisfies BoxProps<'button'>))}
        className={`${cx(classes.container, className)} group`}
        {...(loading && {
          'aria-busy': true,
          'aria-live': 'polite',
        })}
        aria-disabled={disabled}
        aria-label={altText}
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
