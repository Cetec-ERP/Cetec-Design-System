import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const autocompleteBase = {
  root: {
    ...globalBaseStyles,
    '--icon-size': 'token(sizes.24)',
    '--icon-margin': 'token(sizes.3)',
    '--input-icon-padding': 'token(sizes.10)',
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    width: 'full',
    minWidth: '0',
    maxW: 'full',
    bg: 'surface',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: 'border.input',
    borderRadius: '4',
    outlineWidth: '1',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    overflow: 'hidden',
    lineHeight: 'none',
    _focusWithin: {
      borderColor: 'border.focused',
      outlineColor: 'border.focused',
    },
    _error: {
      borderColor: 'border.danger',
      _focusWithin: {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
    },
    _invalid: {
      borderColor: 'border.danger',
      _focusWithin: {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
    },
    _valid: {
      borderColor: 'border.success',
      _focusWithin: {
        borderColor: 'border.success',
        outlineColor: 'border.success',
      },
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      _focusWithin: {
        outlineColor: 'transparent',
        borderColor: 'border.input',
      },
    },
    _groupDisabled: {
      opacity: 1,
    },
  },
  control: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: '0',
    width: 'full',
    gap: '4',
    pe: 'var(--input-icon-padding)',
    bg: 'surface',
    color: 'text',
    fontFamily: 'body',
    lineHeight: 'default',
  },
  chips: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '0',
    flex: '1',
    gap: '4',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'thin',
  },
  input: {
    flex: '1',
    minWidth: '8',
    bg: 'transparent',
    color: 'text',
    fontFamily: 'body',
    lineHeight: 'default',
    border: 'none',
    outline: 'none',
    _placeholder: {
      color: 'text.placeholder',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'var(--icon-size)',
    height: 'var(--icon-size)',
    marginInline: 'var(--icon-margin)',
    transform: 'translateY(-50%)',
    bg: 'surface',
    fill: 'icon.decorative.subtle',
    pointerEvents: 'none',
    transitionDuration: 'fast',
    transitionProperty: 'all',
    transitionTimingFunction: 'default',
    _icon: {
      width: 'var(--icon-size)',
      height: 'var(--icon-size)',
      transitionDuration: 'fast',
      transitionProperty: 'all',
      transitionTimingFunction: 'default',
    },
  },
};

const autocompleteVariants = {
  size: {
    sm: {
      root: {
        '--icon-size': 'token(sizes.22)',
        '--icon-margin': 'token(sizes.2)',
        '--input-icon-padding': '[26px]',
      },
      control: {
        py: '0',
        px: '8',
        fontSize: '14',
      },
      chips: {
        gap: '3',
      },
      input: {
        py: '0',
        fontSize: '14',
      },
    },
    md: {
      root: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.3)',
        '--input-icon-padding': '[31px]',
      },
      control: {
        py: '3',
        px: '10',
        fontSize: '16',
      },
      chips: {
        gap: '4',
      },
      input: {
        py: '0',
        fontSize: '16',
      },
    },
    lg: {
      root: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.5)',
        '--input-icon-padding': '[34px]',
      },
      control: {
        py: '7',
        px: '12',
        fontSize: '16',
      },
      chips: {
        gap: '5',
      },
      input: {
        py: '0',
        fontSize: '16',
      },
    },
    xl: {
      root: {
        '--icon-size': 'token(sizes.28)',
        '--icon-margin': 'token(sizes.7)',
        '--input-icon-padding': '[42px]',
      },
      control: {
        py: '9',
        px: '16',
        fontSize: '20',
      },
      chips: {
        gap: '6',
      },
      input: {
        py: '0',
        fontSize: '20',
      },
    },
  },
  multiple: {
    true: {
      control: {
        alignItems: 'flex-start',
      },
      chips: {
        alignItems: 'flex-start',
      },
    },
  },
  autoSize: {
    true: {
      root: {
        height: 'auto',
        overflow: 'visible',
      },
      control: {
        flexWrap: 'wrap',
      },
      chips: {
        flexWrap: 'wrap',
        overflowX: 'visible',
        overflowY: 'visible',
      },
      input: {
        fieldSizing: 'content',
        maxW: 'full',
      },
    },
    false: {
      chips: {
        flexWrap: 'nowrap',
      },
    },
  },
};

export const autocompleteRecipe = defineSlotRecipe({
  className: 'autocomplete',
  jsx: ['Autocomplete'],
  slots: ['root', 'control', 'chips', 'input', 'icon'],
  base: autocompleteBase,
  variants: autocompleteVariants,
  defaultVariants: {
    size: 'md',
  },
});
