import { defineSemanticTokens } from '@pandacss/dev';

/**
 * Sizes for printed documents, in points. A point is 1/72 inch, so these
 * sizes hold on any printer and do not follow the root font size.
 */
export const sizes = defineSemanticTokens.sizes({
  paper: {
    /**
     * The printed tick box icon. The box inside the 24-unit icon is 10 pt
     * wide, and its outline is about 1.1 pt.
     */
    tickBox: { value: '16pt' },
  },
});
