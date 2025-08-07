import { defineSlotRecipe } from '@pandacss/dev';

const tooltipBase = {
  wrapper: {
    position: 'relative',
    width: 'fit-content',
    height: 'fit-content',
    lineHeight: 'fit-content',
    cursor: 'default',
  },
  tooltipContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
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
    pointerEvents: 'none',
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
        opacity: 1,
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
        transform: 'translate(-10%, -0%)',
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
        transform: 'translate(10%, 0%)',
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
        transform: 'translate(-10%, -0%)',
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
        transform: 'translate(10%, -0%)',
        _after: {
          bottom: '8',
          left: '-5%',
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
        },
        _placement:{
          top:{
            tooltipContent:{
              mb: '12',
            }
          }
        }
      },
      false:{
        tooltipContent:{
          _after:{
            display: 'none',
          }
        },
        _placement:{
          top:{
            tooltipContent:{
              mb: '8'
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    placement: 'bottom',
  },
  compoundVariants: [
    {
      placement: ['top', 'top-start', 'top-end'],
      caret: true,
      css: {
        tooltipContent: {
          mb: '12',
        },
      },
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      caret: false,
      css: {
        tooltipContent: {
          mb: '8',
        },
      },
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      caret: true,
      css: {
        tooltipContent: {
          mt: '12',
        },
      },
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      caret: false,
      css: {
        tooltipContent: {
          mt: '8',
        },
      },
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      caret: true,
      css: {
        tooltipContent: {
          mr: '12',
        },
      },
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      caret: false,
      css: {
        tooltipContent: {
          mr: '8',
        },
      },
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      caret: true,
      css: {
        tooltipContent: {
          ml: '12',
        },
      },
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      caret: false,
      css: {
        tooltipContent: {
          ml: '8',
        },
      },
    },
  ],
});
