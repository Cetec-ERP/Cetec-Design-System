import { cx } from '@styled-system/css';
import { iconStyle } from './iconStyle';
import { IconNamesList } from './utils/icons';
import { type HTMLStyledProps } from '@styled-system/types';

type IconProps = HTMLStyledProps<'svg'> & {
  name: IconNamesList;
  className?: string;
};

const IconSVG = ({
  children,
  className,
  ...props
}: HTMLStyledProps<'svg'> & {
  children: React.ReactNode;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(iconStyle(), className)}
      {...props}
    >
      {children}
    </svg>
  );
};

export const Icon = ({ name, className, ...props }: IconProps) => {
  return (
    <IconSVG className={className} width="24" height="24" {...props}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </IconSVG>
  );
};
