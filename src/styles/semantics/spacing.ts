import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Spacing for printed documents, in points. The app spacing scale is in rem,
 * and `print.css` sets the body text size on `<html>`. So 1 rem prints at
 * 8.5 pt, not 16 px. Print recipes use these tokens where a gap must hold on
 * paper.
 */
export const spacing = defineSemanticTokens.spacing({
  print: {
    /** Space between a canvas slot's top and bottom edges and its content. */
    slotBlock: { value: '2pt' },
    /** Space between a canvas slot's side edges and its content. */
    slotInline: { value: '5pt' },
  },
});
