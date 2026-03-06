import { defineSlotRecipe } from '@pandacss/dev';

const textInputBase = {
  container: {
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
    fill: 'icon.decorative.subtle',
    mixBlendMode: { base: 'multiply', _dark: 'screen' },
    pointerEvents: 'none',
    zIndex: 1,
  },
};

const textInputVariants = {
  size: {
    md: {
      input: {
        py: 3,
        px: 10,
        fontSize: '16',
      },
      icon: {
        mx: '3',
        w: '24',
      },
    },
    sm: {
      input: {
        py: 0,
        px: 8,
        fontSize: '14',
      },
      icon: {
        mx: '2',
        w: '22',
      },
    },
    lg: {
      input: {
        py: 7,
        px: 12,
        fontSize: '16',
      },
      icon: {
        mx: '5',
        w: '24',
      },
    },
    xl: {
      input: {
        py: 9,
        px: 16,
        fontSize: '20',
      },
      icon: {
        mx: '7',
        w: '28',
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

const textInputCompoundVariants: NonNullable<
  Parameters<typeof defineSlotRecipe>[0]['compoundVariants']
> = [
  {
    size: 'md',
    iconBefore: true,
    css: {
      input: { ps: '[31px]' },
    },
  },
  {
    size: 'md',
    iconAfter: true,
    css: {
      input: { pe: '[31px]' },
    },
  },
  {
    size: 'sm',
    iconBefore: true,
    css: {
      input: { ps: '[26px]' },
    },
  },
  {
    size: 'sm',
    iconAfter: true,
    css: {
      input: { pe: '[26px]' },
    },
  },
  {
    size: 'lg',
    iconBefore: true,
    css: {
      input: { ps: '[34px]' },
    },
  },
  {
    size: 'lg',
    iconAfter: true,
    css: {
      input: { pe: '[34px]' },
    },
  },
  {
    size: 'xl',
    iconBefore: true,
    css: {
      input: { ps: '[42px]' },
    },
  },
  {
    size: 'xl',
    iconAfter: true,
    css: {
      input: { pe: '[42px]' },
    },
  },
];

export const textInputRecipe = defineSlotRecipe({
  className: 'textInput',
  jsx: ['TextInput'],
  slots: ['container', 'input', 'icon'],
  base: textInputBase,
  variants: textInputVariants,
  compoundVariants: textInputCompoundVariants,
  defaultVariants: {
    size: 'md',
  },
});
