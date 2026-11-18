import { defineRecipe } from '@pandacss/dev';

/**
 * A contract image, for the kit element `image`, such as a part photo, a step
 * image, or a second logo. The Go print helper writes the same markup for the
 * screen and for paper.
 *
 * The image keeps its aspect ratio and is at most 2.4 in on its long side, so
 * a phone photo cannot fill a page. When the image field has a value but the
 * file cannot be read, Go writes an empty element with `broken` instead. It
 * prints as an empty hairline box, as wide as its slot up to the cap. When
 * the field is empty, Go writes nothing.
 *
 * This recipe has no React component yet. Its fixtures in
 * `image.fixtures.json` are the markup the Go helper writes.
 */
// validate-ignore: recipe-jsx-name-matches-component — kit recipe with no React component yet
export const imageRecipe = defineRecipe({
  className: 'image',
  jsx: [],
  base: {
    display: 'block',
    w: 'auto',
    h: 'auto',
    maxW: 'imageMax',
    maxH: 'imageMax',
    objectFit: 'contain',
  },
  variants: {
    broken: {
      true: {
        // The image size is not known, so the box takes the full cap width,
        // or the width of a narrower slot, at 4 by 3.
        w: 'full',
        aspectRatio: 'landscape',
        borderWidth: 'paper.hairline',
        borderStyle: 'solid',
        borderColor: 'border',
        _thermal: {
          borderColor: 'paper.hairline',
        },
      },
    },
  },
});
