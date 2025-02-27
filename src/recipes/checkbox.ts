import { defineSlotRecipe } from "@pandacss/dev";
/*
const checkBoxBase = {
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  borderWidth: "1px",
  '& [type="checkbox"]': {
    position: 'absolute',
    appearance: 'none',
    '-webkit-appearance': 'none',
  }
}

const checkBoxVariants = {
  variant: {
    default: {
      bg: { base: 'slate.0', _dark: 'slate.90' },
      color: { base: 'slate.90', _dark: 'slate.0' },
      borderColor: 'slate.20'
    },
    checked: {
      bg: { base: 'slate.90', _dark: 'slate.0' },
      color: { base: 'slate.0', _dark: 'slate.90' },
      borderColor: { base: 'slate.90', _dark: 'slate.0' }
    },
    indeterminate: {
      bg: { base: 'slate.90', _dark: 'slate.0' },
      color: { base: 'slate.0', _dark: 'slate.90' },
      borderColor: { base: 'slate.90', _dark: 'slate.0' }
    },
    disabled: {
      bg: { base: 'slate.0', _dark: 'slate.90' },
      opacity: 0.4
    },
    error: {
      bg: { base: 'slate.0', _dark: 'slate.90' },
      borderColor: 'red.50'
    }
  },
};
*/

export const checkBoxRecipe = defineSlotRecipe({
    className: "checkbox",
    jsx: ['CheckBox'],
    slots: ["container", "input", "indicator"],
    base: {
        container: {
            position: "relative",
            display: "inline-grid",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
        },
        input: {
            position: "absolute",
            opacity: 0,
            width: "full",
            height: "full",
            margin: "0",
            padding: "0",
            zIndex: 1,
            cursor: "inherit",
        },
        indicator: {
            display: "inline-grid",
            placeContent: "center",
            width: 14,
            height: 14,
            bg: { base: "slate.0", _dark: "slate.90" },
            borderColor: "slate.20",
            borderRadius: 3,
            borderWidth: 1,
            color: { base: "slate.90", _dark: "slate.0" },
            _focusVisible: {
                outlineColor: { base: 'slate.80', _dark: 'slate.5' },
            }
        },
    },
    variants: {
        checked: {
            true: {
                indicator: {
                    bg: { base: "slate.90", _dark: "slate.0" },
                    borderColor: { base: "slate.90", _dark: "slate.0" },
                    color: { base: "slate.0", _dark: "slate.90" },
                },
            },
        },
        indeterminate: {
            true: {
                indicator: {
                    bg: { base: "slate.90", _dark: "slate.0" },
                    borderColor: { base: "slate.90", _dark: "slate.0" },
                    color: { base: "slate.0", _dark: "slate.90" },
                },
            },
        },
        disabled: {
            true: {
                indicator: {
                    opacity: 0.4,
                    pointerEvents: 'none',
                    cursor: 'none',
                },
            },
        },
        error: {
            true: {
                indicator: {
                    borderColor: "red.50",
                },
            },
        },
    },
    defaultVariants: {
        checked: false,
        indeterminate: false,
        error: false,
        disabled: false,
    },
});
