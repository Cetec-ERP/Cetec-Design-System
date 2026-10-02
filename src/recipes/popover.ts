import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const popoverBase = {
  content: {
    ...globalBaseStyles,
    display: 'flex',
    flexDirection: 'column',
    bg: 'surface.overlay',
    color: 'text',
    borderRadius: '8',
    border: 'default',
    boxShadow: 'overlay',
    zIndex: 'elevated',
    outline: 'none',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '8',
    px: '12',
    pt: '12',
    pb: '4',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '6',
    fontWeight: 'bold',
    color: 'text',
    lineHeight: 'tight',
    minW: '0',
    flex: '1',
  },
  titleIcon: {
    display: 'flex',
    alignItems: 'center',
    flex: 'none',
  },
  description: {
    color: 'text.subtle',
    lineHeight: 'default',
    px: '12',
    pb: '4',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8',
    px: '12',
    py: '8',
    color: 'text',
    lineHeight: 'default',
  },
  media: {
    display: 'block',
    width: 'full',
    overflow: 'hidden',
    '& img': {
      display: 'block',
      width: 'full',
      height: 'auto',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: '8',
    px: '12',
    pt: '4',
    pb: '12',
  },
  close: {
    flex: 'none',
    ms: 'auto',
  },
  trigger: {
    display: 'inline',
    width: 'fit',
    cursor: 'help',
  },
};

const popoverVariants = {
  size: {
    sm: {
      content: { maxW: '280', fontSize: '12' },
      title: { fontSize: '12' },
      description: { fontSize: '12' },
      body: { fontSize: '12' },
    },
    md: {
      content: { maxW: 'xs', fontSize: '14' },
      title: { fontSize: '14' },
      description: { fontSize: '14' },
      body: { fontSize: '14' },
    },
    lg: {
      content: { maxW: 'sm', fontSize: '14' },
      title: { fontSize: '16' },
      description: { fontSize: '14' },
      body: { fontSize: '14' },
    },
  },
  /**
   * Visual tone for handbook-style notes. Quiet chrome only: left accent bar +
   * soft title tint. Surface stays neutral (surface.overlay). Never maps to
   * role="alert".
   */
  tone: {
    note: {
      content: { borderLeft: 'default', borderLeftWidth: '4' },
      title: { color: 'text.subtle' },
    },
    tip: {
      content: { borderLeft: 'info', borderLeftWidth: '4' },
      title: { color: 'text.subtle' },
    },
    warning: {
      content: { borderLeft: 'warning', borderLeftWidth: '4' },
      title: { color: 'text.warning' },
    },
    important: {
      content: { borderLeft: 'danger', borderLeftWidth: '4' },
      title: { color: 'text.danger' },
    },
    caution: {
      content: { borderLeft: 'warning', borderLeftWidth: '4' },
      title: { color: 'text.warning' },
    },
  },
};

export const popoverRecipe = defineSlotRecipe({
  className: 'popover',
  jsx: [
    'Popover',
    'PopoverTrigger',
    'PopoverContent',
    'PopoverHeader',
    'PopoverTitle',
    'PopoverDescription',
    'PopoverBody',
    'PopoverMedia',
    'PopoverFooter',
    'PopoverClose',
    'PopoverArrow',
  ],
  slots: [
    'content',
    'header',
    'title',
    'titleIcon',
    'description',
    'body',
    'media',
    'footer',
    'close',
    'trigger',
  ],
  base: popoverBase,
  variants: popoverVariants,
  defaultVariants: {
    size: 'md',
  },
});
