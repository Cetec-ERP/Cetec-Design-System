/**
 * Attribute name that names an interactive part inside a design-system
 * component. Always lowercase and hyphenated; HTML lowercases attribute names,
 * so a camelCase spelling would silently produce a different attribute.
 */
export const DS_PART_ATTRIBUTE = 'data-ds-part';

/** Attribute record applied to a named part of a design-system component. */
export type DsPartAttribute = {
  'data-ds-part': string;
};

/**
 * Returns the `data-ds-part` attribute for a named part of a component.
 *
 * Internal instrumentation with the same status as `data-ds-component`: emitted
 * automatically, not a supported public API, and not part of any prop type.
 * It exists because some components move `data-testid` off the element a test
 * actually drives. `Box` opens an interaction-chain scope wherever a
 * `data-testid` lands, so a component whose popup is portaled must write the id
 * on a root that encloses the portal's React-tree position. That leaves the
 * trigger with no stable query handle, and a second `data-testid` there would
 * push the same id into the chain twice.
 *
 * Spread the result before the component's rest props so a consumer-supplied
 * value in rest props still wins, matching `dsComponent`.
 *
 * The chain mechanism reads `data-testid` only (see `Box` and
 * `~/utils/dsChain`), so this attribute never contributes a chain node.
 *
 * @example
 * ```tsx
 * <Box role="combobox" {...dsPart('trigger')} {...triggerProps} />
 * ```
 */
export const dsPart = (part: string): DsPartAttribute => ({
  [DS_PART_ATTRIBUTE]: part,
});
