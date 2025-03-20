import { splitCssProps } from '@styled-system/jsx';
import { css } from '@styled-system/css';

export const splitProps = (
  props: Record<string, any>
): [string, Record<string, any>] => {
  const [cssProps, otherProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;
  const className: string  = css(cssProp, styleProps);
  return [className, otherProps];
}
