import { defineSlotRecipe } from '@pandacss/dev';

const tooltipBase = {
  wrapper: {
    position: 'relative',
    width: 'fit-content',
    height: 'fit-content',
    cursor: 'default',
  },
  tooltipContent: {
    bg: { base: 'slate.90', _dark: 'slate.0' },
    color: { base: 'slate.0', _dark: 'slate.90' },
    py: '8',
    px: '12',
    fontFamily: 'body',
    fontSize: '14',
    fontWeight: 'normal',
    borderRadius: '4',
    position: 'absolute',
    maxWidth: 'max-content',
    width: 'max-content',
    boxShadow: 'medium',
    zIndex: 1,
    _after: {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '0',
      borderWidth: '8',
      borderStyle: 'solid',
      borderColor: 'transparent',
    },
  },
};

const tooltipVariants = {
  placement: {
    top: {
      tooltipContent: {
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        mb: '8',
        _after: {
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          borderTopColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    bottom: {
      tooltipContent: {
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        mt: '8',
        _after: {
          bottom: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          borderBottomColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    left: {
      tooltipContent: {
        top: '50%',
        right: 'calc(100% - 0.75rem)',
        transform: 'translate(-10%, -50%)',
        mr: '8',
        _after: {
          top: '50%',
          right: '-6%',
          transform: 'translate(50%, -50%)',
          borderLeftColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    right: {
      tooltipContent: {
        top: '50%',
        left: `calc(100% - 0.75rem)`,
        transform: 'translate(10%, -50%)',
        ml: '8',
        _after: {
          top: '50%',
          left: '-6%',
          transform: 'translate(-50%, -50%)',
          borderRightColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'top-start': {
      tooltipContent: {
        bottom: '100%',
        left: '0',
        mb: '8',
        _after: {
          top: '100%',
          left: '8',
          transform: 'translate(0, 0)',
          borderTopColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'bottom-start': {
      tooltipContent: {
        top: '100%',
        left: '0',
        transform: 'translateX(0)',
        mt: '8',
        _after: {
          bottom: '100%',
          left: '8',
          transform: 'translate(0%, 0)',
          borderBottomColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'left-start': {
      tooltipContent: {
        top: '0',
        right: 'calc(100% - 0.75rem)',
        transform: 'translate(-10%, -5%)',
        mr: '8',
        _after: {
          top: '8',
          right: '-6%',
          transform: 'translate(50%, 0)',
          borderLeftColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'right-start': {
      tooltipContent: {
        top: '0',
        left: `calc(100% - 0.75rem)`,
        transform: 'translate(10%, -5%)',
        ml: '8',
        _after: {
          top: '8',
          left: '-6%',
          transform: 'translate(-50%, 0)',
          borderRightColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'top-end':{
      tooltipContent:{
        bottom: '100%',
        right: '0',
        mb: '8',
        _after: {
          top: '100%',
          right: '8',
          transform: 'translate(0, 0)',
          borderTopColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      }
    },
    'bottom-end': {
      tooltipContent: {
        top: '100%',
        right: '0',
        transform: 'translateX(0)',
        mt: '8',
        _after: {
          bottom: '100%',
          right: '8',
          transform: 'translate(0%, 0)',
          borderBottomColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'left-end': {
      tooltipContent: {
        bottom: '0',
        right: 'calc(100% - 0.75rem)',
        transform: 'translate(-10%, -5%)',
        mr: '8',
        _after: {
          bottom: '8',
          right: '-6%',
          transform: 'translate(50%, 0)',
          borderLeftColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
    'right-end': {
      tooltipContent: {
        bottom: '0',
        left: `calc(100% - 0.75rem)`,
        transform: 'translate(10%, -5%)',
        ml: '8',
        _after: {
          bottom: '8',
          left: '-6%',
          transform: 'translate(-50%, 0)',
          borderRightColor: { base: 'slate.90', _dark: 'slate.0' },
        },
      },
    },
  },
};

export const tooltipRecipe = defineSlotRecipe({
  className: 'tooltip',
  jsx: ['Tooltip'],
  slots: ['wrapper', 'tooltipContent'],
  base: tooltipBase,
  variants: {...tooltipVariants,
    caret:{
      true:{
        tooltipContent:{
          _after:{
            display: 'block',
          }
        }
      },
      false:{
        tooltipContent:{
          _after:{
            display: 'none',
          }
        }
      }
    }
  },
  defaultVariants: {
    placement: 'bottom',
  },
});
