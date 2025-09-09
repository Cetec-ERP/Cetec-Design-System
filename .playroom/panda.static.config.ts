// A dedicated config for one-off static CSS builds
// It imports your base config and *only* adds `staticCss`.
// Your normal Panda flow stays exactly as-is.

import base from '../panda.config.ts';
import { defineConfig } from '@pandacss/dev';
import * as tokens from '../src/styles/tokens'; // <-- you already import this in base
import basePreset from '@pandacss/preset-base';

// Some Panda presets export a factory function. Realize it so we can read .utilities
const basePresetObj =
  typeof (basePreset as any) === 'function'
    ? (basePreset as any)()
    : (basePreset as any);

// Hard fail-safe lists for enum utilities in case the preset shape isn't introspectable
const FALLBACK_ENUMS: Record<string, string[]> = {
  display: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'none',],
  position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right',],
  alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end',],
  alignContent: ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch', 'start', 'end',],
  placeItems: ['start', 'center', 'end', 'stretch', 'baseline'],
  placeContent: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch',],
  alignSelf: ['auto', 'stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end',],
  justifyItems: ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'legacy', 'stretch',],
  justifySelf: ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'stretch',],
  placeSelf: ['auto', 'start', 'center', 'end', 'stretch'],
  visibility: ['visible', 'hidden', 'collapse'],
  overflow: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  objectFit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
  objectPosition: ['center', 'top', 'bottom', 'left', 'right', 'left top', 'left center', 'left bottom', 'center top', 'center center', 'center bottom', 'right top', 'right center', 'right bottom',],
  textAlign: ['left', 'right', 'center',],
  textTransform: ['none', 'uppercase', 'lowercase'],
  textDecoration: ['none', 'underline', 'line-through'],
};

// Build an array like ["red.50","red.60", "blue.50", ...] from your palette
const colorTokenValues = Object.entries(tokens.colors).flatMap(
  ([name, scale]) => {
    if (typeof scale === 'string') return [name]; // single value color
    if (scale && typeof scale === 'object' && 'value' in scale) return [name]; // single value color with value property (transparent, current)
    return Object.keys(scale).map((shade) => `${name}.${shade}`); // palette shades
  },
);

// --- Explicit token-path builders (ensure staticCss covers all tokens) ---
// const mapTokenKeys = (
//   obj: Record<string, unknown>,
//   prefix: string,
//   filter?: (k: string) => boolean,
// ) =>
//   Object.keys(obj || {})
//     .filter(filter ?? (() => true))
//     .map((k) => `${prefix}.${k}`);

const isNumericKey = (k: string) => /^-?\d+(?:\.\d+)?$/.test(k);

const buildTokenAlias = (token: string, numeric: boolean) => {
  const src = ((tokens as any)[token] ?? {}) as Record<string, unknown>;
  const out: Record<string, { value: string }> = {};
  for (const k of Object.keys(src)) {
    if (numeric && isNumericKey(k)) out[k] = { value: `{${token}.${k}}` };
    else out[k] = { value: `{${token}.${k}}` };
  }
  return out;
};

// Special handling for containerSizes and breakpoints - they are direct values, not token references
const buildContainerSizesTokens = () => {
  const src = tokens.containerSizes;
  const out: Record<string, { value: string }> = {};
  for (const [k, v] of Object.entries(src)) {
    out[k] = { value: v as string };
  }
  return out;
};

const buildBreakpointsTokens = () => {
  const src = tokens.breakpoints;
  const out: Record<string, { value: string }> = {};
  for (const [k, v] of Object.entries(src)) {
    out[k] = { value: v as string };
  }
  return out;
};

const spacingTokens = buildTokenAlias('sizes', true);
const borderWidthsTokens = buildTokenAlias('sizes', true);
const outlineWidthsTokens = buildTokenAlias('sizes', true);
const containerSizesTokens = buildContainerSizesTokens();
const breakpointsTokens = buildBreakpointsTokens();

// Build specific token sets for different property restrictions
const numericSizesTokens = buildTokenAlias('numericSizes', true);
const utilitySizesTokens = buildTokenAlias('utilitySizes', false);
const allSizesTokens = buildTokenAlias('sizes', true);

// Custom size values for specific properties
const heightCustomSizes = {
  ...numericSizesTokens,
  ...utilitySizesTokens,
  '100svh': { value: '100svh' },
  '100lvh': { value: '100lvh' },
  '100dvh': { value: '100dvh' },
  '100vh': { value: '100vh' },
};

const widthCustomSizes = {
  ...allSizesTokens,
  ...containerSizesTokens,
  '100vw': { value: '100vw' },
  '80%': { value: '80%' },
  '75%': { value: '75%' },
  '66.666%': { value: '66.666%' },
  '60%': { value: '60%' },
  '40%': { value: '40%' },
  '33.333%': { value: '33.333%' },
  '25%': { value: '25%' },
  '20%': { value: '20%' },
};

const marginCustomSizes = {
  ...numericSizesTokens,
  ...utilitySizesTokens,
  // Add negative values for margins
  '-1': { value: '-0.0625rem' },
  '-2': { value: '-0.125rem' },
  '-3': { value: '-0.1875rem' },
  '-4': { value: '-0.25rem' },
  '-5': { value: '-0.3125rem' },
  '-6': { value: '-0.375rem' },
  '-7': { value: '-0.4375rem' },
  '-8': { value: '-0.5rem' },
  '-9': { value: '-0.5625rem' },
  '-10': { value: '-0.625rem' },
  '-12': { value: '-0.75rem' },
  '-14': { value: '-0.875rem' },
  '-16': { value: '-1rem' },
  '-20': { value: '-1.25rem' },
  '-22': { value: '-1.375rem' },
  '-24': { value: '-1.5rem' },
  '-32': { value: '-2rem' },
  '-40': { value: '-2.5rem' },
  '-48': { value: '-3rem' },
  '-56': { value: '-3.5rem' },
  '-64': { value: '-4rem' },
  '-72': { value: '-4.5rem' },
  '-80': { value: '-5rem' },
  '-96': { value: '-6rem' },
};

// ---- Value resolvers -------------------------------------------------------
type UtilityInfo = {
  key: string;
  className?: string;
  shorthand?: string | string[];
  kind: 'enum' | 'tokens';
  values: string[];
};
const resolveEnumValues = (v: unknown): string[] => {
  if (!v) return [];
  // Direct array
  if (Array.isArray(v))
    return v.filter((x): x is string => typeof x === 'string');
  // Object shapes used by some presets
  if (typeof v === 'object') {
    const obj = v as any;
    // { values: [...] } or { value: [...] }
    if (Array.isArray(obj.values)) return obj.values;
    if (Array.isArray(obj.value)) return obj.value;
    // map-like { start: 'start', center: 'center' }
    const keys = Object.keys(obj);
    // if values mirror keys or are truthy, treat keys as enum
    if (keys.length && keys.every((k) => typeof obj[k] !== 'object'))
      return keys;
  }
  return [];
};
const flattenTokenKeys = (obj: any, prefix = ''): string[] => {
  if (!obj || typeof obj !== 'object') return [];
  const out: string[] = [];
  for (const [k, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (val && typeof val === 'object')
      out.push(...flattenTokenKeys(val, path));
    else out.push(path);
  }
  return out;
};
// Try to resolve token category names (e.g., 'spacing', 'colors', etc.) to actual token keys
const tokenCategoryValues = (category: string): string[] => {
  // Special-case colors to produce "blue.50" style values
  if (category === 'colors') {
    return Object.entries(tokens.colors).flatMap(([name, scale]) =>
      typeof scale === 'string'
        ? [name]
        : Object.keys(scale).map((shade) => `${name}.${shade}`),
    );
  }
  const candidate = (tokens as any)[category];
  if (candidate) return flattenTokenKeys(candidate);
  // Fallback: some presets use names like 'radii' but tokens define 'radius' (or vice versa)
  const alt = (tokens as any)[category.replace(/ies$/, 'y').replace(/s$/, '')];
  if (alt) return flattenTokenKeys(alt);
  return [];
};
const normalizeUtilityValues = (
  raw: any,
): { kind: 'enum' | 'tokens'; values: string[] } => {
  // string means token category like 'colors', 'spacing', etc.
  if (typeof raw === 'string') {
    return { kind: 'tokens', values: tokenCategoryValues(raw) };
  }
  // array or map-like enum
  if (
    Array.isArray(raw) ||
    (raw && typeof raw === 'object' && !('type' in raw))
  ) {
    const values = resolveEnumValues(raw);
    return { kind: 'enum', values };
  }
  // structured shapes { type: 'token' | 'enum', value(s): ... }
  if (raw && typeof raw === 'object') {
    const type = (raw.type || raw.kind) as string | undefined;
    if (type === 'token') {
      const cat = raw.value || raw.values || raw.tokens;
      return { kind: 'tokens', values: tokenCategoryValues(String(cat)) };
    }
    if (type === 'enum') {
      const values = resolveEnumValues(raw.values ?? raw.value);
      return { kind: 'enum', values };
    }
  }
  // unknown -> empty
  return { kind: 'enum', values: [] };
};
const getUtilityInfo = (utilKey: string): UtilityInfo => {
  const conf = (basePresetObj as any)?.utilities?.[utilKey] ?? {};
  const className = conf.className;
  const shorthand = conf.shorthand;
  const raw = conf.values;
  let { kind, values } = normalizeUtilityValues(raw);

  // Fallback to hardcoded enums if preset doesn't expose them
  if ((!values || values.length === 0) && FALLBACK_ENUMS[utilKey]) {
    kind = 'enum';
    values = FALLBACK_ENUMS[utilKey];
  }

  return { key: utilKey, className, shorthand, kind, values };
};

// ---- Utilities we want to verify/generate ---------------------------------
const U_DISPLAY = getUtilityInfo('display');
const U_POSITION = getUtilityInfo('position');
const U_FLEX_DIRECTION = getUtilityInfo('flexDirection');
const U_FLEX_WRAP = getUtilityInfo('flexWrap');
const U_JUSTIFY_CONTENT = getUtilityInfo('justifyContent');
const U_ALIGN_ITEMS = getUtilityInfo('alignItems');
const U_ALIGN_CONTENT = getUtilityInfo('alignContent');
const U_PLACE_ITEMS = getUtilityInfo('placeItems');
const U_PLACE_CONTENT = getUtilityInfo('placeContent');
const U_ALIGN_SELF = getUtilityInfo('alignSelf');
const U_JUSTIFY_ITEMS = getUtilityInfo('justifyItems');
const U_JUSTIFY_SELF = getUtilityInfo('justifySelf');
const U_PLACE_SELF = getUtilityInfo('placeSelf');
const U_VISIBILITY = getUtilityInfo('visibility');
const U_OVERFLOW = getUtilityInfo('overflow');
const U_OBJECT_FIT = getUtilityInfo('objectFit');
const U_OBJECT_POSITION = getUtilityInfo('objectPosition');
const U_TEXT_ALIGN = getUtilityInfo('textAlign');
const U_TEXT_TRANSFORM = getUtilityInfo('textTransform');
const U_TEXT_DECORATION = getUtilityInfo('textDecoration');

// Helper: shallow-merge presets if needed (base may export strings or actual presets)
const mergedPresets = Array.isArray((base as any).presets)
  ? (base as any).presets
  : ['@pandacss/dev/presets'];

const themeAndStateConditions = ['light', 'dark', 'hover', 'focus', 'focusVisible', 'active', 'disabled', 'visited',]
const minimalSizeTokens = ['*']

export default defineConfig({
  // keep everything from your main config
  ...base,

  // re-apply presets so nothing gets lost if spreading above overwrote them oddly
  presets: mergedPresets,
  prefix: 'Cetec',
  separator: '_',
  hash: false,

  // Override/extend theme to ensure all tokens are available
  theme: {
    ...base.theme,
    extend: {
      ...(base as any).theme?.extend,
      tokens: {
        ...((base as any).theme?.extend?.tokens ?? {}),
        spacing: spacingTokens,
        borderWidths: borderWidthsTokens,
        outlineWidths: outlineWidthsTokens,
        containerSizes: containerSizesTokens,
        breakpoints: breakpointsTokens,
        // Custom restricted token sets
        heightSizes: heightCustomSizes,
        widthSizes: widthCustomSizes,
        marginSizes: marginCustomSizes,
        paddingSizes: numericSizesTokens,
        strokeWidthSizes: numericSizesTokens,
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
      {
        properties: {
          display: U_DISPLAY.values,
          visibility: U_VISIBILITY.values,
          position: U_POSITION.values,
          zIndex: ['*'],
        },
        responsive: true,
      },

      // Height properties: numericSizes + utilitySizes + viewport units, no container/breakpoint sizes, no negatives
      // with container/breakpoint conditions
      {
        properties: {
          height: Object.keys(heightCustomSizes),
          minHeight: Object.keys(heightCustomSizes),
          maxHeight: Object.keys(heightCustomSizes),
        },
        conditions: [...Object.keys(tokens.containerSizes), ...Object.keys(tokens.breakpoints)],
        responsive: true,
      },

      // Width properties: all sizes + custom percentages + container sizes, no breakpoint sizes, no negatives
      // with container/breakpoint conditions
      {
        properties: {
          width: Object.keys(widthCustomSizes),
          minWidth: Object.keys(widthCustomSizes),
          maxWidth: Object.keys(widthCustomSizes),
        },
        conditions: [...Object.keys(tokens.containerSizes), ...Object.keys(tokens.breakpoints)],
        responsive: true,
      },

      // Padding/gap properties: numericSizes only, no container/breakpoint sizes, no negatives
      // with container/breakpoint conditions
      {
        properties: {
          padding: Object.keys(numericSizesTokens),
          paddingTop: Object.keys(numericSizesTokens),
          paddingRight: Object.keys(numericSizesTokens),
          paddingBottom: Object.keys(numericSizesTokens),
          paddingLeft: Object.keys(numericSizesTokens),
          paddingInline: Object.keys(numericSizesTokens),
          paddingBlock: Object.keys(numericSizesTokens),
          paddingInlineStart: Object.keys(numericSizesTokens),
          paddingInlineEnd: Object.keys(numericSizesTokens),
          paddingBlockStart: Object.keys(numericSizesTokens),
          paddingBlockEnd: Object.keys(numericSizesTokens),
          gap: Object.keys(numericSizesTokens),
          rowGap: Object.keys(numericSizesTokens),
          columnGap: Object.keys(numericSizesTokens),
        },
        conditions: [...Object.keys(tokens.containerSizes), ...Object.keys(tokens.breakpoints)],
        responsive: true,
      },

      // Margin/inset properties: numericSizes + utilitySizes, no container/breakpoint sizes, allow negatives
      // with container/breakpoint conditions
      {
        properties: {
          margin: Object.keys(marginCustomSizes),
          marginTop: Object.keys(marginCustomSizes),
          marginRight: Object.keys(marginCustomSizes),
          marginBottom: Object.keys(marginCustomSizes),
          marginLeft: Object.keys(marginCustomSizes),
          marginInline: Object.keys(marginCustomSizes),
          marginBlock: Object.keys(marginCustomSizes),
          marginInlineStart: Object.keys(marginCustomSizes),
          marginInlineEnd: Object.keys(marginCustomSizes),
          marginBlockStart: Object.keys(marginCustomSizes),
          marginBlockEnd: Object.keys(marginCustomSizes),
          inset: Object.keys(marginCustomSizes),
          top: Object.keys(marginCustomSizes),
          bottom: Object.keys(marginCustomSizes),
          left: Object.keys(marginCustomSizes),
          right: Object.keys(marginCustomSizes),
        },
        conditions: [...Object.keys(tokens.containerSizes), ...Object.keys(tokens.breakpoints)],
        responsive: true,
      },

      // Flex & Grid
      {
        properties: {
          flex: ['*'], flexDirection: U_FLEX_DIRECTION.values, flexWrap: U_FLEX_WRAP.values, order: ['*'], alignItems: U_ALIGN_ITEMS.values, justifyItems: U_JUSTIFY_ITEMS.values, alignContent: U_ALIGN_CONTENT.values, justifyContent: U_JUSTIFY_CONTENT.values, placeItems: U_PLACE_ITEMS.values, placeContent: U_PLACE_CONTENT.values, gridTemplateColumns: ['*'], gridTemplateRows: ['*'], gridColumn: ['*'], gridRow: ['*'], gridColumnStart: ['*'], gridColumnEnd: ['*'], gridRowStart: ['*'], gridRowEnd: ['*'],
        },
        conditions: Object.keys(tokens.containerSizes),
        responsive: true,
      },
      {
        properties: {
          flexGrow: ['*'], flexShrink: ['*'], flexBasis: ['*'], alignSelf: U_ALIGN_SELF.values, justifySelf: U_JUSTIFY_SELF.values, placeSelf: U_PLACE_SELF.values, gridAutoFlow: ['*'], gridAutoColumns: ['*'], gridAutoRows: ['*'],
        },
        responsive: false,
      },

      // Border/outline width: numericSizes only, no conditions
      {
        properties: {
          outlineWidth: Object.keys(numericSizesTokens),
          borderWidth: Object.keys(numericSizesTokens),
        },
        responsive: false,
      },
      {
        properties: {
          borderStyle: ['solid', 'dashed', 'dotted', 'double'], borderColor: ['*'], borderTopWidth: ['*'], borderRightWidth: ['*'], borderBottomWidth: ['*'], borderLeftWidth: ['*'], borderTopColor: ['*'], borderRightColor: ['*'], borderBottomColor: ['*'], borderLeftColor: ['*'], outlineStyle: ['*'], outlineColor: ['*'], borderRadius: ['*'], borderTopLeftRadius: ['*'], borderTopRightRadius: ['*'], borderBottomRightRadius: ['*'], borderBottomLeftRadius: ['*'],
        },
        responsive: false,
      },

      // Typography
      {
        properties: {
          fontSize: ['*'], fontWeight: ['*'], lineHeight: ['*'], textAlign: U_TEXT_ALIGN.values,
        },
        conditions: Object.keys(tokens.containerSizes),
        responsive: true,
      },
      {
        properties: {
          fontFamily: ['*'], letterSpacing: ['*'], textDecoration: U_TEXT_DECORATION.values, whiteSpace: ['*'], wordBreak: ['*'], textOverflow: ['*'], textTransform: U_TEXT_TRANSFORM.values,
        },
        responsive: false,
      },

      // Color utilities (mode + state variants)
      {
        properties: { color: ['*'] },
        conditions: themeAndStateConditions,
        responsive: true,
      },

      // Backgrounds & Effects
      {
        properties: { // Add the background shorthand, but LIMIT to color tokens only:
          background: colorTokenValues, backgroundColor: colorTokenValues, opacity: ['*'],
        },
        conditions: themeAndStateConditions,
        responsive: true,
      },
      {
        properties: {
          backgroundImage: ['*'], backgroundSize: ['*'], backgroundPosition: ['*'], backgroundRepeat: ['*'], backgroundBlendMode: ['*'], boxShadow: ['*'],
          mixBlendMode: ['*'], filter: ['*'], backdropFilter: ['*'],
        },
        responsive: false,
      },

      // Overflow & object fit/position (keyword enums)
      {
        properties: {
          overflow: U_OVERFLOW.values, objectFit: U_OBJECT_FIT.values, objectPosition: U_OBJECT_POSITION.values,
        },
        responsive: false,
      },

      // Transforms & Transitions
      {
        properties: {
          transform: ['*'], transformOrigin: ['*'], transitionProperty: ['*'], transitionDuration: ['*'], transitionTimingFunction: ['*'], transitionDelay: ['*'], rotate: ['*'], scale: ['*'], skew: ['*'], translate: ['*'], translateX: ['*'], translateY: ['*'], translateZ: ['*'], scaleX: ['*'], scaleY: ['*'], scaleZ: ['*'], rotateX: ['*'], rotateY: ['*'], rotateZ: ['*'], willChange: ['*'],
        },
        responsive: false,
      },

      // SVG: stroke/fill with color tokens only, no breakpoint/container conditions, only themeAndStateConditions
      {
        properties: {
          fill: colorTokenValues,
          stroke: colorTokenValues,
        },
        conditions: themeAndStateConditions,
        responsive: false,
      },
      {
        properties: {
          strokeWidth: Object.keys(numericSizesTokens),
        },
        responsive: false,
      },
    ],

    // Prebuild every variant of your recipes (as exported in ./src/recipes/index)
    // so downstream consumers can use them without running Panda.
    recipes: '*',
  },
});
