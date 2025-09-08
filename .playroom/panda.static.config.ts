// A dedicated config for one-off static CSS builds
// It imports your base config and *only* adds `staticCss`.
// Your normal Panda flow stays exactly as-is.

import base from '../panda.config.ts'
import { defineConfig } from '@pandacss/dev'
import * as tokens from '../src/styles/tokens' // <-- you already import this in base
import basePreset from '@pandacss/preset-base'

// Some Panda presets export a factory function. Realize it so we can read .utilities
const basePresetObj = (typeof (basePreset as any) === 'function') ? (basePreset as any)() : (basePreset as any)

// Hard fail-safe lists for enum utilities in case the preset shape isn't introspectable
const FALLBACK_ENUMS: Record<string, string[]> = {
  display: [
    'block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'flow-root', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row', 'table-row-group', 'list-item', 'none'
  ],
  position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right'],
  alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end'],
  alignContent: ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch', 'start', 'end'],
  placeItems: ['start', 'center', 'end', 'stretch', 'baseline'],
  placeContent: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
  alignSelf: ['auto', 'stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end'],
  justifyItems: ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'legacy', 'stretch'],
  justifySelf: ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'stretch'],
  placeSelf: ['auto', 'start', 'center', 'end', 'stretch'],
  visibility: ['visible', 'hidden', 'collapse'],
  overflow: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
  objectPosition: [
    'center', 'top', 'bottom', 'left', 'right',
    'left top', 'left center', 'left bottom',
    'center top', 'center center', 'center bottom',
    'right top', 'right center', 'right bottom'
  ],
  textAlign: ['left', 'right', 'center', 'justify', 'start', 'end', 'match-parent'],
  textTransform: ['none', 'capitalize', 'uppercase', 'lowercase'],
  textDecoration: ['none', 'underline', 'overline', 'line-through', 'blink']
}

// Build an array like ["red.50","red.60", "blue.50", ...] from your palette
const colorTokenValues = Object.entries(tokens.colors).flatMap(([name, scale]) => {
  if (typeof scale === 'string') return [name]              // single value color
  return Object.keys(scale).map((shade) => `${name}.${shade}`) // palette shades
})

// --- Explicit token-path builders (ensure staticCss covers all tokens) ---
const mapTokenKeys = (obj: Record<string, unknown>, prefix: string, filter?: (k: string) => boolean) =>
  Object.keys(obj || {}).filter(filter ?? (() => true)).map((k) => `${prefix}.${k}`)

const isNumericKey = (k: string) => /^-?\d+(?:\.\d+)?$/.test(k)

// Spacing in Panda utilities typically maps to the `spacing` category; we mirror that from numeric sizes
// so padding/margin/gap get a dense set of values (4, 8, 12, 16, ...)
const SPACING_TOKENS = mapTokenKeys((tokens as any).numericSizes ?? {}, 'sizes', isNumericKey)

// Optional: radius & font sizes if you want to force full coverage elsewhere as well
const RADIUS_TOKENS = mapTokenKeys((tokens as any).radii ?? {}, 'radii')
const SIZE_TOKENS = mapTokenKeys((tokens as any).sizes ?? {}, 'sizes')
const FONT_SIZE_TOKENS = mapTokenKeys((tokens as any).fontSizes ?? {}, 'fontSizes')
const LINE_HEIGHT_TOKENS = mapTokenKeys((tokens as any).lineHeights ?? {}, 'lineHeights')
const LETTER_SPACING_TOKENS = mapTokenKeys((tokens as any).letterSpacings ?? {}, 'letterSpacings')


// Build a spacing alias from numeric sizes so padding/margin/gap resolve to CSS vars
const buildSpacingAlias = () => {
  const src = ((tokens as any).sizes ?? {}) as Record<string, unknown>
  const out: Record<string, { value: string }> = {}
  for (const k of Object.keys(src)) {
    if (isNumericKey(k)) out[k] = { value: `{sizes.${k}}` }
  }
  return out
}

// Build a borderWidths alias from numeric sizes so borderWidth props resolve to CSS vars
const buildBorderWidthsAlias = () => {
  const src = ((tokens as any).sizes ?? {}) as Record<string, unknown>
  const out: Record<string, { value: string }> = {}
  for (const k of Object.keys(src)) {
    if (isNumericKey(k)) out[k] = { value: `{sizes.${k}}` }
  }
  return out
}

// ---- Value resolvers -------------------------------------------------------
type UtilityInfo = {
  key: string
  className?: string
  shorthand?: string | string[]
  kind: 'enum' | 'tokens'
  values: string[]
}
const resolveEnumValues = (v: unknown): string[] => {
  if (!v) return []
  // Direct array
  if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string')
  // Object shapes used by some presets
  if (typeof v === 'object') {
    const obj = v as any
    // { values: [...] } or { value: [...] }
    if (Array.isArray(obj.values)) return obj.values
    if (Array.isArray(obj.value)) return obj.value
    // map-like { start: 'start', center: 'center' }
    const keys = Object.keys(obj)
    // if values mirror keys or are truthy, treat keys as enum
    if (keys.length && keys.every(k => typeof obj[k] !== 'object')) return keys
  }
  return []
}
const flattenTokenKeys = (obj: any, prefix = ''): string[] => {
  if (!obj || typeof obj !== 'object') return []
  const out: string[] = []
  for (const [k, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k
    if (val && typeof val === 'object') out.push(...flattenTokenKeys(val, path))
    else out.push(path)
  }
  return out
}
// Try to resolve token category names (e.g., 'spacing', 'colors', etc.) to actual token keys
const tokenCategoryValues = (category: string): string[] => {
  // Special-case colors to produce "blue.50" style values
  if (category === 'colors') {
    return Object.entries(tokens.colors).flatMap(([name, scale]) =>
      typeof scale === 'string' ? [name] : Object.keys(scale).map((shade) => `${name}.${shade}`)
    )
  }
  const candidate = (tokens as any)[category]
  if (candidate) return flattenTokenKeys(candidate)
  // Fallback: some presets use names like 'radii' but tokens define 'radius' (or vice versa)
  const alt = (tokens as any)[category.replace(/ies$/, 'y').replace(/s$/, '')]
  if (alt) return flattenTokenKeys(alt)
  return []
}
const normalizeUtilityValues = (raw: any): { kind: 'enum' | 'tokens', values: string[] } => {
  // string means token category like 'colors', 'spacing', etc.
  if (typeof raw === 'string') {
    return { kind: 'tokens', values: tokenCategoryValues(raw) }
  }
  // array or map-like enum
  if (Array.isArray(raw) || (raw && typeof raw === 'object' && !('type' in raw))) {
    const values = resolveEnumValues(raw)
    return { kind: 'enum', values }
  }
  // structured shapes { type: 'token' | 'enum', value(s): ... }
  if (raw && typeof raw === 'object') {
    const type = (raw.type || raw.kind) as string | undefined
    if (type === 'token') {
      const cat = raw.value || raw.values || raw.tokens
      return { kind: 'tokens', values: tokenCategoryValues(String(cat)) }
    }
    if (type === 'enum') {
      const values = resolveEnumValues(raw.values ?? raw.value)
      return { kind: 'enum', values }
    }
  }
  // unknown -> empty
  return { kind: 'enum', values: [] }
}
const getUtilityInfo = (utilKey: string): UtilityInfo => {
  const conf = (basePresetObj as any)?.utilities?.[utilKey] ?? {}
  const className = conf.className
  const shorthand = conf.shorthand
  const raw = conf.values
  let { kind, values } = normalizeUtilityValues(raw)

  // Fallback to hardcoded enums if preset doesn't expose them
  if ((!values || values.length === 0) && FALLBACK_ENUMS[utilKey]) {
    kind = 'enum'
    values = FALLBACK_ENUMS[utilKey]
  }

  return { key: utilKey, className, shorthand, kind, values }
}

// ---- Utilities we want to verify/generate ---------------------------------
const U_DISPLAY = getUtilityInfo('display')
const U_POSITION = getUtilityInfo('position')
const U_FLEX_DIRECTION = getUtilityInfo('flexDirection')
const U_FLEX_WRAP = getUtilityInfo('flexWrap')
const U_JUSTIFY_CONTENT = getUtilityInfo('justifyContent')
const U_ALIGN_ITEMS = getUtilityInfo('alignItems')
const U_ALIGN_CONTENT = getUtilityInfo('alignContent')
const U_PLACE_ITEMS = getUtilityInfo('placeItems')
const U_PLACE_CONTENT = getUtilityInfo('placeContent')
const U_ALIGN_SELF = getUtilityInfo('alignSelf')
const U_JUSTIFY_ITEMS = getUtilityInfo('justifyItems')
const U_JUSTIFY_SELF = getUtilityInfo('justifySelf')
const U_PLACE_SELF = getUtilityInfo('placeSelf')
const U_VISIBILITY = getUtilityInfo('visibility')
const U_OVERFLOW = getUtilityInfo('overflow')
const U_OBJECT_FIT = getUtilityInfo('objectFit')
const U_OBJECT_POSITION = getUtilityInfo('objectPosition')
const U_TEXT_ALIGN = getUtilityInfo('textAlign')
const U_TEXT_TRANSFORM = getUtilityInfo('textTransform')
const U_TEXT_DECORATION = getUtilityInfo('textDecoration')

// === Debug helpers for verifying enum harvesting ===
const dumpEnums = () => {
  const pick = (u: UtilityInfo) => ({
    key: u.key,
    className: u.className,
    shorthand: u.shorthand,
    kind: u.kind,
    count: u.values.length,
    sample: u.values.slice(0, 12)
  })
  const snapshot = {
    display: pick(U_DISPLAY),
    position: pick(U_POSITION),
    flexDirection: pick(U_FLEX_DIRECTION),
    flexWrap: pick(U_FLEX_WRAP),
    justifyContent: pick(U_JUSTIFY_CONTENT),
    alignItems: pick(U_ALIGN_ITEMS),
    alignContent: pick(U_ALIGN_CONTENT),
    placeItems: pick(U_PLACE_ITEMS),
    placeContent: pick(U_PLACE_CONTENT),
    alignSelf: pick(U_ALIGN_SELF),
    justifyItems: pick(U_JUSTIFY_ITEMS),
    justifySelf: pick(U_JUSTIFY_SELF),
    placeSelf: pick(U_PLACE_SELF),
    visibility: pick(U_VISIBILITY),
    overflow: pick(U_OVERFLOW),
    objectFit: pick(U_OBJECT_FIT),
    objectPosition: pick(U_OBJECT_POSITION),
    textAlign: pick(U_TEXT_ALIGN),
    textTransform: pick(U_TEXT_TRANSFORM),
    textDecoration: pick(U_TEXT_DECORATION),
  } as const
  if (process.env.PANDA_DEBUG_ENUMS === '1') {
    // eslint-disable-next-line no-console
    console.log('[panda.static.config] Snapshot:', snapshot)
    try {
      const out = process.env.PANDA_ENUM_SNAPSHOT || 'public/panda-enums.json'
      const keysOut = 'public/panda-utility-keys.json'
      const utilEntries = Object.entries((basePresetObj as any)?.utilities ?? {})
        .map(([key, val]: [string, any]) => ({ key, className: val.className, shorthand: val.shorthand }))
      require('fs').writeFileSync(keysOut, JSON.stringify({ utilities: utilEntries }, null, 2), 'utf8')
      require('fs').writeFileSync(out, JSON.stringify(snapshot, null, 2), 'utf8')
      // eslint-disable-next-line no-console
      console.log(`[panda.static.config] Wrote enum snapshot to ${out}`)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[panda.static.config] Failed to write enum snapshot:', e)
    }
  }
  return snapshot
}
// Trigger dump if env flag is set during cssgen
dumpEnums()

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

  // Override/extend theme to add spacing alias
  theme: {
    ...base.theme,
    extend: {
      ...(base as any).theme?.extend,
      tokens: {
        ...((base as any).theme?.extend?.tokens ?? {}),
        spacing: buildSpacingAlias(),
        borderWidths: buildBorderWidthsAlias(),
        outlineWidths: buildBorderWidthsAlias(),
      },
    },
  },

  // IMPORTANT: we do NOT change outdir/include/etc. `cssgen` writes ONLY to --outfile
  // so this won’t touch your styled-system build.

  // Generate a comprehensive utilities sheet from your tokens & conditions
  // (breakpoints: xs–2xl; color modes: light/dark; states from conditions.ts)
  staticCss: {
    css: [
      // Layout & display (keyword enums from preset)
      { properties: { display: U_DISPLAY.values }, responsive: true },
      { properties: { visibility: U_VISIBILITY.values }, responsive: true },
      { properties: { position: U_POSITION.values, inset: ['*'], top: ['*'], right: ['*'], bottom: ['*'], left: ['*'], zIndex: ['*'] }, responsive: true },

      // Spacing (let Panda resolve token -> CSS var via the spacing alias)
      {
        properties: {
          margin: ['*'],
          marginTop: ['*'],
          marginRight: ['*'],
          marginBottom: ['*'],
          marginLeft: ['*'],
          marginInline: ['*'],
          marginBlock: ['*'],
          padding: ['*'],
          paddingTop: ['*'],
          paddingRight: ['*'],
          paddingBottom: ['*'],
          paddingLeft: ['*'],
          paddingInline: ['*'], // -> px
          paddingBlock: ['*'],  // -> py
          gap: ['*'],
          rowGap: ['*'],
          columnGap: ['*'],
        },
        responsive: true,
      },

      // Sizing
      { properties: { width: ['*'], minWidth: ['*'], maxWidth: ['*'], height: ['*'], minHeight: ['*'], maxHeight: ['*'] }, responsive: true },

      // Flex & Grid
      { properties: { flex: ['*'], flexGrow: ['*'], flexShrink: ['*'], flexBasis: ['*'], flexDirection: U_FLEX_DIRECTION.values, flexWrap: U_FLEX_WRAP.values, order: ['*'] }, responsive: true },
      { properties: { alignItems: U_ALIGN_ITEMS.values, justifyItems: U_JUSTIFY_ITEMS.values, alignContent: U_ALIGN_CONTENT.values, justifyContent: U_JUSTIFY_CONTENT.values, placeItems: U_PLACE_ITEMS.values, placeContent: U_PLACE_CONTENT.values }, responsive: true },
      { properties: { alignSelf: U_ALIGN_SELF.values, justifySelf: U_JUSTIFY_SELF.values, placeSelf: U_PLACE_SELF.values }, responsive: true },
      { properties: { gridTemplateColumns: ['*'], gridTemplateRows: ['*'], gridAutoFlow: ['*'], gridAutoColumns: ['*'], gridAutoRows: ['*'], gridColumn: ['*'], gridRow: ['*'], gridColumnStart: ['*'], gridColumnEnd: ['*'], gridRowStart: ['*'], gridRowEnd: ['*'] }, responsive: true },

      // Borders & Outline & Radius
      { properties: { borderWidth: ['*'], borderStyle: ['solid', 'dashed', 'dotted', 'double'], borderColor: ['*'], borderTopWidth: ['*'], borderRightWidth: ['*'], borderBottomWidth: ['*'], borderLeftWidth: ['*'] }, responsive: true },
      { properties: { borderTopColor: ['*'], borderRightColor: ['*'], borderBottomColor: ['*'], borderLeftColor: ['*'], outlineWidth: ['*'], outlineStyle: ['*'], outlineColor: ['*'] }, responsive: true },
      { properties: { borderRadius: ['*'], borderTopLeftRadius: ['*'], borderTopRightRadius: ['*'], borderBottomRightRadius: ['*'], borderBottomLeftRadius: ['*'] }, responsive: true },

      // Typography
      { properties: { fontFamily: ['*'], fontSize: ['*'], fontWeight: ['*'], lineHeight: ['*'], letterSpacing: ['*'], textAlign: U_TEXT_ALIGN.values, textTransform: U_TEXT_TRANSFORM.values, textDecoration: U_TEXT_DECORATION.values, whiteSpace: ['*'], wordBreak: ['*'], textOverflow: ['*'] }, responsive: true },

      // Color utilities (mode + state variants)
      { properties: { color: ['*'] }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled', 'visited'], responsive: true },

      // Backgrounds & Effects
      { properties: { backgroundColor: ['*'], backgroundImage: ['*'], backgroundSize: ['*'], backgroundPosition: ['*'], backgroundRepeat: ['*'], backgroundBlendMode: ['*'] }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled'], responsive: true },
      // Add the background shorthand, but LIMIT to color tokens only:
      { properties: { background: colorTokenValues }, conditions: ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled'], responsive: true },
      { properties: { boxShadow: ['*'], opacity: ['*'], mixBlendMode: ['*'], filter: ['*'], backdropFilter: ['*'] }, responsive: true },

      // Overflow & object fit/position (keyword enums)
      { properties: { overflow: U_OVERFLOW.values, objectFit: U_OBJECT_FIT.values, objectPosition: U_OBJECT_POSITION.values }, responsive: true },

      // Transforms & Transitions
      { properties: { transform: ['*'], transformOrigin: ['*'], willChange: ['*'] }, responsive: true },
      { properties: { transitionProperty: ['*'], transitionDuration: ['*'], transitionTimingFunction: ['*'], transitionDelay: ['*'], rotate: ['*'], scale: ['*'], skew: ['*'], translate: ['*'], translateX: ['*'], translateY: ['*'], translateZ: ['*'], scaleX: ['*'], scaleY: ['*'], scaleZ: ['*'], rotateX: ['*'], rotateY: ['*'], rotateZ: ['*'] }, responsive: true },

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

  // Run with PANDA_DEBUG_ENUMS=1 to write snapshots to /public
})