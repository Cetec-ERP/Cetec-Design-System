import { css, cx } from '@styled-system/css';
import { splitCssProps } from '@styled-system/jsx';

/** Record of native attributes and Panda CSS properties accepted by `splitProps`. */
type PropsRecord = Record<string, unknown>;

/**
 * Separates Panda CSS props from remaining element props and returns a merged
 * class name for the generated styles.
 *
 * The first tuple value combines an existing string `className` with styles
 * generated from Panda CSS props, including the `css` prop. The second value
 * excludes those styling props and `className`, so it can be spread onto an
 * element without leaking them to the DOM.
 *
 * @example
 * ```tsx
 * const [className, elementProps] = splitProps({ p: '4', id: 'profile' });
 * ```
 */
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
