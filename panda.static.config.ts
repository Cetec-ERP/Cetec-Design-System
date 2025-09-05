// A dedicated config for one-off static CSS builds
// It imports your base config and *only* adds `staticCss`.
// Your normal Panda flow stays exactly as-is.

import base from './panda.config'
import { defineConfig } from '@pandacss/dev'
import * as tokens from './src/styles/tokens' // <-- you already import this in base

// Build an array like ["red.50","red.60", "blue.50", ...] from your palette
const colorTokenValues = Object.entries(tokens.colors).flatMap(([name, scale]) => {
  if (typeof scale === 'string') return [name]              // single value color
  return Object.keys(scale).map((shade) => `${name}.${shade}`) // palette shades
})

// Helper: shallow-merge presets if needed (base may export strings or actual presets)
const mergedPresets = Array.isArray((base as any).presets)
  ? (base as any).presets
  : ['@pandacss/dev/presets']

export default defineConfig({
  // keep everything from your main config
  ...base,

  // re-apply presets so nothing gets lost if spreading above overwrote them oddly
  presets: mergedPresets,
  prefix: 'Cetec',
  separator: '_',
  hash: false,

  // IMPORTANT: we do NOT change outdir/include/etc. `cssgen` writes ONLY to --outfile
  // so this won’t touch your styled-system build.

  // Generate a comprehensive utilities sheet from your tokens & conditions
  // (breakpoints: xs–2xl; color modes: light/dark; states from conditions.ts)
  staticCss: {
    css: [
      // Layout & display
      { properties: { display: ['flex', 'inline-flex', 'block', 'inline', 'inline-block', 'grid', 'inline-grid', 'none'] }, responsive: true },
      { properties: { visibility: ['visible', 'hidden', 'collapse'] }, responsive: true },
      { properties: { position: ['*'], inset: ['*'], top: ['*'], right: ['*'], bottom: ['*'], left: ['*'], zIndex: ['*'] }, responsive: true },

      // Spacing
      { properties: { margin: ['*'], marginTop: ['*'], marginRight: ['*'], marginBottom: ['*'], marginLeft: ['*'], padding: ['*'], gap: ['*'] }, responsive: true },

      // Sizing
      { properties: { width: ['*'], minWidth: ['*'], maxWidth: ['*'], height: ['*'], minHeight: ['*'], maxHeight: ['*'] }, responsive: true },

      // Flex & Grid
      { properties: { flex: ['*'], flexGrow: ['*'], flexShrink: ['*'], flexBasis: ['*'], flexDirection: ['column', 'row', 'row-reverse', 'column-reverse'], flexWrap: ['*'], order: ['*'] }, responsive: true },
      { properties: { alignItems: ['*'], justifyItems: ['*'], alignContent: ['*'], justifyContent: ['*'], placeItems: ['*'], placeContent: ['*'], alignSelf: ['*'], justifySelf: ['*'], placeSelf: ['*'] }, responsive: true },
      { properties: { gridTemplateColumns: ['*'], gridTemplateRows: ['*'], gridAutoFlow: ['*'], gridAutoColumns: ['*'], gridAutoRows: ['*'], gridColumn: ['*'], gridRow: ['*'], gridColumnStart: ['*'], gridColumnEnd: ['*'], gridRowStart: ['*'], gridRowEnd: ['*'] }, responsive: true },

      // Borders & Outline & Radius
      { properties: { borderWidth: ['*'], borderStyle: ['*'], borderColor: ['*'], borderTopWidth: ['*'], borderRightWidth: ['*'], borderBottomWidth: ['*'], borderLeftWidth: ['*'] }, responsive: true },
      { properties: { borderTopColor: ['*'], borderRightColor: ['*'], borderBottomColor: ['*'], borderLeftColor: ['*'], outlineWidth: ['*'], outlineStyle: ['*'], outlineColor: ['*'] }, responsive: true },
      { properties: { borderRadius: ['*'], borderTopLeftRadius: ['*'], borderTopRightRadius: ['*'], borderBottomRightRadius: ['*'], borderBottomLeftRadius: ['*'] }, responsive: true },

      // Typography
      { properties: { fontFamily: ['*'], fontSize: ['*'], fontWeight: ['*'], lineHeight: ['*'], letterSpacing: ['*'], textAlign: ['*'], textTransform: ['*'], textDecoration: ['*'], whiteSpace: ['*'], wordBreak: ['*'] }, responsive: true },

      // Color utilities (mode + state variants)
      { properties: { color: ['*'] }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled', 'visited'], responsive: true },

      // Backgrounds & Effects
      { properties: { backgroundColor: ['*'], backgroundImage: ['*'], backgroundSize: ['*'], backgroundPosition: ['*'], backgroundRepeat: ['*'], backgroundBlendMode: ['*'] }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled'], responsive: true },
      // Add the background shorthand, but LIMIT to color tokens only:
      { properties: { background: colorTokenValues }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled'], responsive: true },
      { properties: { boxShadow: ['*'], opacity: ['*'], mixBlendMode: ['*'], filter: ['*'], backdropFilter: ['*'] }, responsive: true },

      // Transforms & Transitions
      { properties: { transform: ['*'], transformOrigin: ['*'], willChange: ['*'] }, responsive: true },
      { properties: { transitionProperty: ['*'], transitionDuration: ['*'], transitionTimingFunction: ['*'], transitionDelay: ['*'] }, responsive: true },

      // SVG
      { properties: { fill: ['*'], stroke: ['*'], strokeWidth: ['*'] }, responsive: true },

      // Optional: container queries (uncomment if you actually use them;
      // these expand FAST, so keep targeted if enabling)
      { properties: { margin: ['*'], padding: ['*'], fontSize: ['*'] }, conditions: ['containerSmall', 'containerMedium', 'containerLarge'], responsive: true },
    ],

    // Prebuild every variant of your recipes (as exported in ./src/recipes/index)
    // so downstream consumers can use them without running Panda.
    recipes: '*',
  },
})