import { defineUtility } from '@pandacss/dev';

export const fontVariants = {
  body: '"MONO" 0, "CRSV" 0, "CASL" 0, "slnt" 0',
  'body-italic': '"MONO" 0, "CRSV" 1, "CASL" 0, "slnt" -15',
  'body-casual': '"MONO" 0, "CRSV" 1, "CASL" 1, "slnt" 0',
  'body-casual-italic': '"MONO" 0, "CRSV" 1, "CASL" 1, "slnt" -15',
  mono: '"MONO" 1, "CRSV" 0, "CASL" 0, "slnt" 0',
  'mono-italic': '"MONO" 1, "CRSV" 1, "CASL" 0, "slnt" -15',
  'mono-casual': '"MONO" 1, "CRSV" 1, "CASL" 1, "slnt" 0',
  'mono-casual-italic': '"MONO" 1, "CRSV" 1, "CASL" 1, "slnt" -15',
};

export const fontVariantsProperty = defineUtility({
  className: 'fontVariants',
  values: 'fontVariants',
});
