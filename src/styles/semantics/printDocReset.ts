type TokenNode = { [key: string]: unknown };

const isConditionalValue = (
  value: unknown,
): value is { base: unknown; _dark: unknown } & TokenNode =>
  typeof value === 'object' &&
  value !== null &&
  'base' in value &&
  '_dark' in value;

/**
 * Adds a `_printDoc` value equal to the light `base` value to every semantic
 * token that has a dark value.
 *
 * Paper is white in both themes. With this reset, a design-system part placed
 * inside a `cetec-printDoc` root reads its light colors, even when the app is
 * in dark mode. Tokens without a dark value are returned as they are.
 *
 * @example
 * ```ts
 * semanticTokens: { colors: withPrintDocReset(colors) }
 * ```
 */
export const withPrintDocReset = <T extends object>(tokens: T): T => {
  const walk = (node: unknown): unknown => {
    if (typeof node !== 'object' || node === null) return node;
    return Object.fromEntries(
      Object.entries(node).map(([key, child]) => {
        if (key === 'value' && isConditionalValue(child)) {
          return [key, { ...child, _printDoc: child.base }];
        }
        return [key, walk(child)];
      }),
    );
  };
  return walk(tokens) as T;
};
