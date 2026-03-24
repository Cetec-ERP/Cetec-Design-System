import { css, cx } from '@cetec/styled-system/css';
import { splitCssProps } from '@cetec/styled-system/jsx';

type PropsRecord = Record<string, unknown>;

export const splitProps = (props: PropsRecord): [string, PropsRecord] => {
  const [cssProps, otherProps] = splitCssProps(props);
  const { css: cssProp, ...styleProps } = cssProps;

  const generatedClassName: string = css(cssProp, styleProps);
  const existingClassName =
    typeof otherProps.className === 'string' ? otherProps.className : '';

  const mergedClassName = cx(existingClassName, generatedClassName);

  const { className: _className, ...remainingProps } = otherProps;

  return [mergedClassName, remainingProps];
};
