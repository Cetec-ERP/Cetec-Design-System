import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

const textInputBase = {
  container: {
    ...globalBaseStyles,
    '--icon-size': 'token(sizes.24)',
    '--icon-margin': 'token(sizes.3)',
    '--input-icon-padding': 'token(sizes.10)',
    position: 'relative',
    width: 'full',
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
      outlineColor: 'border.focused',
      borderColor: 'border.focused',
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
      opacity: 1, // let FormField handle disabled state opacity
    },
  },
  input: {
    width: 'full',
    bg: 'surface',
    color: 'text',
    lineHeight: 'default',
    fontFamily: 'body',
    border: 'none',
    outline: 'none',
    _placeholder: {
      color: 'text.placeholder',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    w: 'var(--icon-size)',
    mx: 'var(--icon-margin)',
    fill: 'icon.decorative.subtle',
    mixBlendMode: { base: 'multiply', _dark: 'screen' },
    pointerEvents: 'none',
    zIndex: 1,
  },
};

const textInputVariants = {
  size: {
    sm: {
      container: {
        '--icon-size': 'token(sizes.22)',
        '--icon-margin': 'token(sizes.2)',
        '--input-icon-padding': '[26px]',
      },
      input: {
        py: 0,
        px: 8,
        fontSize: '14',
      },
      inputIconBefore: {
        ps: 'var(--input-icon-padding)',
      },
      inputIconAfter: {
        pe: 'var(--input-icon-padding)',
      },
    },
    md: {
      container: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.3)',
        '--input-icon-padding': '[31px]',
      },
      input: {
        py: 3,
        px: 10,
        fontSize: '16',
      },
      inputIconBefore: {
        ps: 'var(--input-icon-padding)',
      },
      inputIconAfter: {
        pe: 'var(--input-icon-padding)',
      },
    },
    lg: {
      container: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.5)',
        '--input-icon-padding': '[34px]',
      },
      input: {
        py: 7,
        px: 12,
        fontSize: '16',
      },
      inputIconBefore: {
        ps: 'var(--input-icon-padding)',
      },
      inputIconAfter: {
        pe: 'var(--input-icon-padding)',
      },
    },
    xl: {
      container: {
        '--icon-size': 'token(sizes.28)',
        '--icon-margin': 'token(sizes.7)',
        '--input-icon-padding': '[42px]',
      },
      input: {
        py: 9,
        px: 16,
        fontSize: '20',
      },
      inputIconBefore: {
        ps: 'var(--input-icon-padding)',
      },
      inputIconAfter: {
        pe: 'var(--input-icon-padding)',
      },
    },
  },
  iconBefore: {
    true: {
      icon: {
        left: '0',
      },
    },
  },
  iconAfter: {
    true: {
      icon: {
        right: '0',
      },
    },
  },
  autoSize: {
    true: {
      input: {
        fieldSizing: 'content',
        maxW: 'full',
      },
    },
  },
};

export const textInputRecipe = defineSlotRecipe({
  className: 'textInput',
  jsx: ['TextInput'],
  slots: ['container', 'input', 'icon', 'inputIconBefore', 'inputIconAfter'],
  base: textInputBase,
  variants: textInputVariants,
  defaultVariants: {
    size: 'md',
  },
});
