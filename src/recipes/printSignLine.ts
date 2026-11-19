import { defineSlotRecipe } from '@pandacss/dev';

/**
 * A line to sign by hand, for the kit element `sign_line`. Checks print
 * "Authorized signature", and packing slips print "Received by".
 *
 * The `label` comes first. Then a `field` for the signature, and one more
 * field for each of `name`, `date`, and `initials` that the template asks
 * for, in that order. Each field has a `line` and a `caption`. A printed
 * name goes in the `value` slot, on the name line. With no lines, the label
 * has one field with no caption, a write-in field.
 *
 * The rule is 1 pt on paper and 1.5 pt in thermal ink. The Go print helper
 * writes the caption words, so it can use the company language.
 *
 * This recipe has no React component. Its fixtures in
 * `printSignLine.fixtures.json` are the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — print-only recipe with no React component
export const printSignLineRecipe = defineSlotRecipe({
  className: 'printSignLine',
  jsx: [],
  slots: ['root', 'label', 'field', 'line', 'value', 'caption'],
  base: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      columnGap: 'print.8',
      rowGap: 'print.6',
      // A signature block never splits across pages.
      breakInside: 'avoid',
    },
    label: {
      textStyle: 'print.body',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      pb: 'print.2',
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'print.2',
      flexGrow: '1',
      flexShrink: '1',
      flexBasis: 'signField',
      minW: 'signFieldMin',
    },
    line: {
      position: 'relative',
      h: '22',
      borderBottomWidth: 'paper.rule',
      borderBottomStyle: 'solid',
      borderBottomColor: 'paper.ink',
    },
    value: {
      position: 'absolute',
      left: '3',
      bottom: '3',
      textStyle: 'print.fieldValue',
      whiteSpace: 'nowrap',
    },
    caption: {
      textStyle: 'print.capsLabel',
    },
  },
  variants: {
    kind: {
      date: {
        field: {
          flexBasis: 'signDate',
          minW: 'signDate',
        },
      },
      initials: {
        field: {
          flexBasis: 'signInitials',
          minW: 'signInitials',
        },
      },
    },
  },
});
