import { defineSlotRecipe } from '@pandacss/dev';

import { globalBaseStyles } from '~/styles/utilities';

// Wraps SegmentedDate in a bordered field with before/after slot support,
// mirroring textInput's container/slot/buttonSlot mechanics. Covers both
// DateInput (range: false) and DateRangeInput (range: true) — a single
// recipe file per the recommended file shape, not one recipe per component.
const dateInputsBase = {
  container: {
    ...globalBaseStyles,
    '--input-py': 'token(sizes.3)',
    '--input-px': 'token(sizes.10)',
    '--slot-size': 'token(sizes.20)',
    '--slot-px': 'token(sizes.6)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    minW: '128',
    py: 'var(--input-py)',
    px: 'var(--input-px)',
    bg: 'bg.input',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: 'border.input',
    borderRadius: '4',
    outlineWidth: '2',
    outlineOffset: '-1',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    transitionDuration: 'fast',
    transitionProperty: 'background, border-color, outline-color',
    transitionTimingFunction: 'default',
    '&:focus-within:not(:has(button:focus))': {
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
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
    _error: {
      borderColor: 'border.danger',
      '&:focus-within:not(:has(button:focus))': {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
    },
    _invalid: {
      borderColor: 'border.danger',
      '&:focus-within:not(:has(button:focus))': {
        borderColor: 'border.danger',
        outlineColor: 'border.danger',
      },
    },
  },
  slot: {
    display: 'inline-flex',
    alignItems: 'center',
    transitionDuration: 'fast',
    transitionProperty: 'all',
    transitionTimingFunction: 'default',
    flex: '0 0 var(--slot-size)',
    px: 'var(--slot-px)',
    fill: 'icon.decorative',
    pointerEvents: 'none',
    zIndex: 1,
  },
  buttonSlot: {
    display: 'inline-flex',
    alignItems: 'center',
    flex: '0 0 var(--slot-size)',
    px: '0',
    zIndex: 1,
    m: '-1',
  },
};

const dateInputsVariants = {
  size: {
    sm: {
      container: {
        '--input-py': 'token(sizes.0)',
        '--input-px': 'token(sizes.8)',
        '--slot-size': 'token(sizes.16)',
        '--slot-px': 'token(sizes.4)',
      },
    },
    md: {
      container: {
        '--input-py': 'token(sizes.3)',
        '--input-px': 'token(sizes.10)',
        '--slot-size': 'token(sizes.20)',
        '--slot-px': 'token(sizes.6)',
      },
    },
    lg: {
      container: {
        '--input-py': 'token(sizes.7)',
        '--input-px': 'token(sizes.12)',
        '--slot-size': 'token(sizes.24)',
        '--slot-px': 'token(sizes.8)',
      },
    },
    xl: {
      container: {
        '--input-py': 'token(sizes.9)',
        '--input-px': 'token(sizes.16)',
        '--slot-size': 'token(sizes.28)',
        '--slot-px': 'token(sizes.10)',
      },
    },
  },
  // DateRangeInput — 248px per the confirmed Figma symbol width.
  range: {
    true: {
      container: {
        minW: '248',
      },
    },
  },
  before: {
    true: {
      container: {
        ps: '0',
      },
      buttonSlot: {
        '& button': {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
        },
      },
    },
  },
  after: {
    true: {
      container: {
        pe: '0',
      },
      buttonSlot: {
        '& button': {
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
        },
      },
    },
  },
};

// validate-ignore: recipe-jsx-name-matches-component — covers a component family, not a single "DateInputs" component
export const dateInputsRecipe = defineSlotRecipe({
  className: 'dateInputs',
  jsx: ['DateInput', 'DateRangeInput'],
  slots: ['container', 'slot', 'buttonSlot'],
  base: dateInputsBase,
  variants: dateInputsVariants,
  defaultVariants: {
    size: 'md',
  },
});
