import { defineUtility } from '@pandacss/dev';

export const filterAutoValue =
  'var(--blur, ) var(--brightness, ) var(--contrast, ) var(--grayscale, ) var(--hue-rotate, ) var(--invert, ) var(--saturate, ) var(--sepia, ) var(--drop-shadow, )';

export const filters = {
  auto: { value: filterAutoValue },
  invert: { value: 'invert(1)' },
  blur: { value: 'blur(8px)' },
  none: { value: 'none' },
};

export const filtersProperty = defineUtility({
  className: 'filters',
  values: 'filters',
});
