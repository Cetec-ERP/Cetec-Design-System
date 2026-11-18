import { defineRecipe } from '@pandacss/dev';

/**
 * Puts the elements of a printed document side by side, for the kit element
 * `grid`. The invoice uses it for the parties row and the facts strip.
 *
 * `columns` is `2`, `3`, `4`, or `fit`. `fit` makes as many columns as fit,
 * each at least `sizes.gridFitColumn` (1.6 in) wide. Each cell is an inline
 * size container, so a part in a narrow cell can change its layout with a
 * container query.
 *
 * This is a recipe, not the Panda `grid` pattern, so the Go print helper can
 * write fixed classes. It has no React component. Its fixture in
 * `printGrid.fixtures.json` is the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printGridRecipe = defineRecipe({
  className: 'printGrid',
  jsx: [],
  base: {
    display: 'grid',
    rowGap: '10',
    columnGap: '18',
    '& > *': {
      containerType: 'inline-size',
      minW: '0',
    },
  },
  variants: {
    columns: {
      '2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      '3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
      '4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
      fit: {
        gridTemplateColumns:
          'repeat(auto-fill, minmax({sizes.gridFitColumn}, 1fr))',
      },
    },
  },
  defaultVariants: {
    columns: '2',
  },
});
