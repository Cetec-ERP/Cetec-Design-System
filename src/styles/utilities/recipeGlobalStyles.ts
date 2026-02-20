import { defineStyles } from '@pandacss/dev';
import { fontVariants } from './fontVariants';

export const globalBaseStyles = defineStyles({
  fontFamily: 'body',
  fontVariationSettings: fontVariants.body,
  fontWeight: 'normal',
  lineHeight: 'default',
  color: 'text.subtlest',
});
