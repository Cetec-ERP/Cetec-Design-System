import { tag, type TagVariantProps } from '@styled-system/recipes';
import { Box, type BoxProps } from '../Box';
import { ReactNode } from 'react';
import { splitProps } from '~/utils/splitProps';
import { cx } from '@styled-system/css';
import { Icon, type IconNamesList } from '../Icon';

export type TagProps = Omit<BoxProps, keyof TagVariantProps> &
  TagVariantProps & {
    children: string | ReactNode;
    iconName?: IconNamesList;
  };

export const Tag = (props: TagProps) => {
  const {
    variant,
    hue,
    iconPosition = 'left',
    children,
    iconName,
    ...rest
  } = props;
  const [className, otherProps] = splitProps(rest);
  const hasIcon = !!iconName;

  return (
    <Box
      as="span"
      className={cx(tag({ variant, hue, iconPosition, hasIcon }), className)}
      {...otherProps}
    >
      {iconName && <Icon name={iconName} width={20} height={20} />}
      {children}
    </Box>
  );
};
