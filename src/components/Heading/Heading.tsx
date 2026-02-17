import { Text, type TextProps } from '~/components/Text';
import { heading, type HeadingVariantProps } from '@styled-system/recipes';
import { cx } from '@styled-system/css';
import { splitProps } from '~/utils/splitProps';

export type HeadingProps = Omit<TextProps, keyof HeadingVariantProps> &
  HeadingVariantProps & {
    children?: string | React.ReactNode;
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

export const Heading = (props: HeadingProps) => {
  const { level = 'h2', allCaps, children, ...rest } = props;
  const [className, otherProps] = splitProps(rest);
  return (
    <Text
      as={level}
      className={cx(heading({ level, allCaps }), className)}
      {...otherProps}
    >
      {children}
    </Text>
  );
};
