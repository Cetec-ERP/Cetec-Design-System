import { Box } from '../Box/Box';
import { link, type LinkVariantProps } from '@styled-system/recipes';
import { cx, css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';
import { Icon } from '../Icon/Icon';

type LinkProps = LinkVariantProps &
  Omit<React.ComponentProps<typeof Box>, 'as'> & {
    href: string;
    external?: boolean;
    disabled?: boolean;
    level?: number;
    font?: string;
    italic?: boolean;
    bold?: boolean;
    underline?: boolean;
    className?: string;
  } & SystemStyleObject;

export function Link({
  href,
  external,
  disabled,
  children,
  level,
  font,
  weight,
  italic,
  bold,
  underline,
  className,
  ...props
}: LinkProps) {
  const styles = {
    ...props,
  };

  return (
    <Box
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-disabled={disabled}
      disabled={disabled}
      level={level}
      font={font}
      weight={weight}
      className={cx(
        link({ font, italic, bold, underline, level }),
        css(styles),
        className
      )}
    >
      {children}
      {external && <Icon name="arrow-square-out" size={20} />}
    </Box>
  );
} 
