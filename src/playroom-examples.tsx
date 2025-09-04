// This file forces Panda CSS to generate CSS for all possible styles
// It's used to ensure Playroom has access to all Panda CSS utilities

import { css } from '../styled-system/css';

// Force generation of all color utilities
const colorExamples = css({
  color: 'red.500',
  bg: 'blue.500',
  borderColor: 'green.500',
  textDecorationColor: 'purple.500',
  textEmphasisColor: 'yellow.500',
  fill: 'pink.500',
  stroke: 'orange.500',
});

// Force generation of all spacing utilities
const spacingExamples = css({
  p: '4',
  px: '8',
  py: '12',
  pt: '16',
  pr: '20',
  pb: '24',
  pl: '28',
  m: '4',
  mx: '8',
  my: '12',
  mt: '16',
  mr: '20',
  mb: '24',
  ml: '28',
  gap: '4',
  rowGap: '8',
  columnGap: '12',
});

// Force generation of all sizing utilities
const sizingExamples = css({
  w: 'full',
  h: 'full',
  minW: '0',
  minH: '0',
  maxW: 'full',
  maxH: 'full',
  size: '4',
});

// Force generation of all typography utilities
const typographyExamples = css({
  fontSize: 'sm',
  fontWeight: 'bold',
  lineHeight: 'tight',
  letterSpacing: 'wide',
  textAlign: 'center',
  textDecoration: 'underline',
  textTransform: 'uppercase',
  fontFamily: 'mono',
});

// Force generation of all layout utilities
const layoutExamples = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  flex: '1',
  flexGrow: '1',
  flexShrink: '1',
  flexBasis: 'auto',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridColumn: 'span 2',
  gridRow: 'span 2',
  position: 'relative',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: '10',
});

// Force generation of all border utilities
const borderExamples = css({
  border: '1px solid',
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderColor: 'gray.300',
  borderRadius: 'md',
  borderTopLeftRadius: 'lg',
  borderTopRightRadius: 'xl',
  borderBottomLeftRadius: '2xl',
  borderBottomRightRadius: '3xl',
});

// Force generation of all shadow utilities
const shadowExamples = css({
  boxShadow: 'sm',
  textShadow: 'sm',
  dropShadow: 'sm',
});

// Force generation of all background utilities
const backgroundExamples = css({
  background: 'red.500',
  backgroundImage: 'url("/image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
});

// Force generation of all transform utilities
const transformExamples = css({
  transform: 'rotate(45deg)',
  transformOrigin: 'center',
  transition: 'all 0.2s',
  transitionProperty: 'all',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0s',
});

// Force generation of all opacity utilities
const opacityExamples = css({
  opacity: '0.5',
  visibility: 'visible',
  overflow: 'hidden',
  overflowX: 'auto',
  overflowY: 'scroll',
});

// Force generation of all cursor utilities
const cursorExamples = css({
  cursor: 'pointer',
  userSelect: 'none',
  pointerEvents: 'none',
  resize: 'both',
});

// Force generation of all animation utilities
const animationExamples = css({
  animation: 'spin 1s linear infinite',
  animationName: 'spin',
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'normal',
  animationFillMode: 'forwards',
  animationPlayState: 'running',
});

// Force generation of all filter utilities
const filterExamples = css({
  filter: 'blur(4px)',
  backdropFilter: 'blur(4px)',
  mixBlendMode: 'multiply',
  isolation: 'isolate',
});

// Force generation of all mask utilities
const maskExamples = css({
  mask: 'url("/mask.svg")',
  maskSize: 'cover',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
  clipPath: 'circle(50%)',
});

// Force generation of all table utilities
const tableExamples = css({
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  borderSpacing: '0',
  captionSide: 'top',
  emptyCells: 'show',
});

// Force generation of all list utilities
const listExamples = css({
  listStyleType: 'disc',
  listStylePosition: 'inside',
  listStyleImage: 'url("/bullet.png")',
});

// Force generation of all outline utilities
const outlineExamples = css({
  outline: '2px solid red',
  outlineWidth: '2px',
  outlineStyle: 'solid',
  outlineColor: 'red',
  outlineOffset: '2px',
});

// Force generation of all focus utilities
const focusExamples = css({
  _focus: {
    outline: '2px solid blue',
    outlineOffset: '2px',
  },
  _focusVisible: {
    outline: '2px solid green',
  },
});

// Force generation of all hover utilities
const hoverExamples = css({
  _hover: {
    bg: 'blue.500',
    color: 'white',
  },
});

// Force generation of all active utilities
const activeExamples = css({
  _active: {
    bg: 'red.500',
    color: 'white',
  },
});

// Force generation of all disabled utilities
const disabledExamples = css({
  _disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
});

// Force generation of all responsive utilities
const responsiveExamples = css({
  fontSize: { base: 'sm', md: 'md', lg: 'lg' },
  p: { base: '4', md: '8', lg: '12' },
  display: { base: 'block', md: 'flex', lg: 'grid' },
});

// Force generation of all dark mode utilities
const darkModeExamples = css({
  _dark: {
    bg: 'gray.900',
    color: 'white',
  },
});

// Force generation of all print utilities
const printExamples = css({
  _print: {
    display: 'none',
  },
});

// Force generation of all reduced motion utilities
const reducedMotionExamples = css({
  _motionReduce: {
    animation: 'none',
    transition: 'none',
  },
});

// Force generation of all high contrast utilities
const highContrastExamples = css({
  _highContrast: {
    border: '2px solid',
  },
});

// Force generation of all container queries utilities
const containerQueryExamples = css({
  '@container (min-width: 768px)': {
    fontSize: 'lg',
  },
});

// Force generation of all arbitrary value utilities
const arbitraryExamples = css({
  w: '123px',
  h: '456px',
  bg: '#ff0000',
  color: 'rgb(0, 255, 0)',
  fontSize: '1.5rem',
  p: 'calc(1rem + 2px)',
});

// Export all examples to ensure they're included in the build
export {
  colorExamples,
  spacingExamples,
  sizingExamples,
  typographyExamples,
  layoutExamples,
  borderExamples,
  shadowExamples,
  backgroundExamples,
  transformExamples,
  opacityExamples,
  cursorExamples,
  animationExamples,
  filterExamples,
  maskExamples,
  tableExamples,
  listExamples,
  outlineExamples,
  focusExamples,
  hoverExamples,
  activeExamples,
  disabledExamples,
  responsiveExamples,
  darkModeExamples,
  printExamples,
  reducedMotionExamples,
  highContrastExamples,
  containerQueryExamples,
  arbitraryExamples,
};