import { defineTokens } from '@pandacss/dev';

import { getBoxShadowPrimitive } from '../utilities/shadowDefinitions';

export const shadows = defineTokens.shadows({
  zeroBase: {
    value: getBoxShadowPrimitive('zero'),
  },
  raisedBase: {
    value: getBoxShadowPrimitive('raised'),
  },
  elevatedBase: {
    value: getBoxShadowPrimitive('elevated'),
  },
  overlayBase: {
    value: getBoxShadowPrimitive('overlay'),
  },
  overflowBase: {
    value: getBoxShadowPrimitive('overflow'),
  },
});
