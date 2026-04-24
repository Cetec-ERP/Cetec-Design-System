import { defineSlotRecipe } from '@pandacss/dev';

const selectBase = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    maxW: 'full',
  },
  trigger: {
    '--icon-size': 'token(sizes.24)',
    '--icon-margin': 'token(sizes.3)',
    '--input-icon-padding': 'token(sizes.10)',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: 'border.input',
    borderRadius: '4',
    outlineWidth: '2',
    outlineOffset: '-1',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    bg: 'bg.input',
    color: 'text',
    fontFamily: 'body',
    lineHeight: 'default',
    cursor: 'pointer',
    overflow: 'hidden',
    transitionDuration: 'fast',
    transitionProperty: 'background, border-color, outline-color',
    transitionTimingFunction: 'default',
    _hover: {
      bg: 'bg.input.hovered',
    },
    _focusVisible: {
      bg: 'bg.input.pressed',
      borderColor: 'border.focused',
      outlineColor: 'border.focused',
    },
    _open: {
      bg: 'bg.input.pressed',
      borderColor: 'border.focused',
      outlineColor: 'border.focused',
    },
    _disabled: {
      bg: 'bg.disabled',
      borderColor: 'border.disabled',
      color: 'text.disabled',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    _error: {
      borderColor: 'border.danger',
      _hover: {
        borderColor: 'border.danger',
      },
      _focusVisible: {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
      _open: {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
    },
  },
  value: {
    flex: 1,
    textAlign: 'left',
    truncate: true,
    color: 'text',
    pe: 'var(--input-icon-padding)',
  },
  placeholder: {
    flex: 1,
    textAlign: 'left',
    truncate: true,
    color: 'text.placeholder',
    pe: 'var(--input-icon-padding)',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: '0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'var(--icon-size)',
    height: 'var(--icon-size)',
    marginInline: 'var(--icon-margin)',
    transform: 'translateY(-50%)',
    fill: 'icon.decorative',
    transitionDuration: 'normal',
    transitionProperty: 'transform',
    transitionTimingFunction: 'default',
    pointerEvents: 'none',
    '&[data-open="true"]': {
      transform: 'translateY(-50%) rotate(180deg)',
    },
  },
};

const selectVariants = {
  size: {
    sm: {
      trigger: {
        '--icon-size': 'token(sizes.22)',
        '--icon-margin': 'token(sizes.2)',
        '--input-icon-padding': '[26px]',
        py: '0',
        px: '8',
        fontSize: '14',
      },
    },
    md: {
      trigger: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.3)',
        '--input-icon-padding': '[31px]',
        py: '3',
        px: '10',
        fontSize: '16',
      },
    },
    lg: {
      trigger: {
        '--icon-size': 'token(sizes.24)',
        '--icon-margin': 'token(sizes.5)',
        '--input-icon-padding': '[34px]',
        py: '7',
        px: '12',
        fontSize: '16',
      },
    },
    xl: {
      trigger: {
        '--icon-size': 'token(sizes.28)',
        '--icon-margin': 'token(sizes.7)',
        '--input-icon-padding': '[42px]',
        py: '9',
        px: '16',
        fontSize: '20',
      },
    },
  },
};

export const selectRecipe = defineSlotRecipe({
  className: 'select',
  jsx: ['Select'],
  slots: ['root', 'trigger', 'value', 'placeholder', 'icon'],
  base: selectBase,
  variants: selectVariants,
  defaultVariants: {
    size: 'md',
  },
});
