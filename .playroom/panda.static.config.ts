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

// const U_DISPLAY = ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'contents', 'none',];
// const U_POSITION = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
// const U_FLEX_DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'];
// const U_FLEX_WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
// const U_JUSTIFY_CONTENT = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right',];
// const U_ALIGN_ITEMS = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end',];
// const U_ALIGN_CONTENT = ['normal', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch', 'start', 'end',];
// const U_PLACE_ITEMS = ['start', 'center', 'end', 'stretch', 'baseline'];
// const U_PLACE_CONTENT = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch',];
// const U_ALIGN_SELF = ['auto', 'stretch', 'flex-start', 'center', 'flex-end', 'baseline', 'start', 'end', 'self-start', 'self-end',];
// const U_JUSTIFY_ITEMS = ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'legacy', 'stretch',];
// const U_JUSTIFY_SELF = ['auto', 'normal', 'start', 'center', 'end', 'left', 'right', 'stretch',];
// const U_PLACE_SELF = ['auto', 'start', 'center', 'end', 'stretch'];
// const U_VISIBILITY = ['visible', 'hidden', 'collapse'];
// const U_OVERFLOW = ['visible', 'hidden', 'clip', 'scroll', 'auto'];
// const U_OBJECT_FIT = ['contain', 'cover', 'fill', 'none', 'scale-down'];
// const U_OBJECT_POSITION = ['center', 'top', 'bottom', 'left', 'right', 'left top', 'left center', 'left bottom', 'center top', 'center center', 'center bottom', 'right top'];
// const U_TEXT_ALIGN = ['left', 'right', 'center',];
// const U_TEXT_TRANSFORM = ['none', 'uppercase', 'lowercase'];
// const U_TEXT_DECORATION = ['none', 'underline', 'line-through'];

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
          display: U_DISPLAY.values, visibility: U_VISIBILITY.values, position: U_POSITION.values, inset: ['*'], top: ['*'], right: ['*'], bottom: ['*'], left: ['*'], zIndex: ['*'],
        },
        conditions: Object.keys(tokens.containerSizes),
        responsive: true,
      },

      // Spacing (let Panda resolve token -> CSS var via the spacing alias)
      {
        properties: {
          margin: ['*'], marginTop: ['*'], marginRight: ['*'], marginBottom: ['*'], marginLeft: ['*'], marginInline: ['*'], marginBlock: ['*'], padding: ['*'], paddingTop: ['*'], paddingRight: ['*'], paddingBottom: ['*'], paddingLeft: ['*'], paddingInline: ['*'], paddingBlock: ['*'], gap: ['*'], rowGap: ['*'], columnGap: ['*'],
        },
        conditions: Object.keys(tokens.containerSizes),
        responsive: true,
      },

      // Sizing
      {
        properties: {
          width: ['*'], minWidth: ['*'], maxWidth: ['*'], height: ['*'], minHeight: ['*'], maxHeight: ['*'],
        },
        conditions: Object.keys(tokens.containerSizes),
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

      // Borders & Outline & Radius
      {
        properties: {
          outlineWidth: ['*'], borderWidth: ['*']
        },
        responsive: true,
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

      // SVG
      {
        properties: {
          fill: ['*'], stroke: ['*'], strokeWidth: ['*']
        },
        conditions: themeAndStateConditions,
        responsive: true,
      },
    ],

    // Prebuild every variant of your recipes (as exported in ./src/recipes/index)
    // so downstream consumers can use them without running Panda.
    recipes: '*',
  },
});
