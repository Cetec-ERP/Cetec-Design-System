// A dedicated config for one-off static CSS builds
// It imports your base config and *only* adds `staticCss`.
// Your normal Panda flow stays exactly as-is.

import base from './panda.config';
import { defineConfig } from '@pandacss/dev';
import * as tokens from './src/styles/tokens'; // <-- you already import this in base
import basePreset from '@pandacss/preset-base';

// Some Panda presets export a factory function. Realize it so we can read .utilities
const basePresetObj =
  typeof (basePreset as any) === 'function'
    ? (basePreset as any)()
    : (basePreset as any);

// Build an array like ["red.50","red.60", "blue.50", ...] from your palette
const colorTokenValues = Object.entries(tokens.colors).flatMap(
  ([name, scale]) => {
    if (typeof scale === 'string') return [name]; // single value color
    return Object.keys(scale).map((shade) => `${name}.${shade}`); // palette shades
  },
);

// Harvest keyword-enum values from Panda's base preset utilities
const enumValues = (util: string) => {
  const conf = basePresetObj?.utilities?.[util];
  if (!conf?.values) return [];
  const v = conf.values;
  return Array.isArray(v) ? v : Object.keys(v ?? {});
};

// Common keyword enums we want full coverage for
const displayVals = enumValues('display');
const positionVals = enumValues('position');
const flexDirectionVals = enumValues('flexDirection');
const flexWrapVals = enumValues('flexWrap');
const justifyContentVals = enumValues('justifyContent');
const alignItemsVals = enumValues('alignItems');
const alignContentVals = enumValues('alignContent');
const placeItemsVals = enumValues('placeItems');
const placeContentVals = enumValues('placeContent');
const alignSelfVals = enumValues('alignSelf');
const justifyItemsVals = enumValues('justifyItems');
const justifySelfVals = enumValues('justifySelf');
const placeSelfVals = enumValues('placeSelf');
const visibilityVals = enumValues('visibility');
const overflowVals = enumValues('overflow');
const objectFitVals = enumValues('objectFit');
const objectPositionVals = enumValues('objectPosition');
const textAlignVals = enumValues('textAlign');
const textTransformVals = enumValues('textTransform');
const textDecorationVals = enumValues('textDecoration');

// === Debug helpers for verifying enum harvesting ===
const dumpEnums = () => {
  const snapshot = {
    display: displayVals,
    position: positionVals,
    flexDirection: flexDirectionVals,
    flexWrap: flexWrapVals,
    justifyContent: justifyContentVals,
    alignItems: alignItemsVals,
    alignContent: alignContentVals,
    placeItems: placeItemsVals,
    placeContent: placeContentVals,
    alignSelf: alignSelfVals,
    justifyItems: justifyItemsVals,
    justifySelf: justifySelfVals,
    placeSelf: placeSelfVals,
    visibility: visibilityVals,
    overflow: overflowVals,
    objectFit: objectFitVals,
    objectPosition: objectPositionVals,
    textAlign: textAlignVals,
    textTransform: textTransformVals,
    textDecoration: textDecorationVals,
  } as const;
  if (process.env.PANDA_DEBUG_ENUMS === '1') {
    // eslint-disable-next-line no-console
    console.log('[panda.static.config] Enum counts:');
    Object.entries(snapshot).forEach(([k, arr]) => {
      // eslint-disable-next-line no-console
      console.log(
        `  ${k.padEnd(16)} ${String(arr?.length ?? 0).padStart(3)}  ${Array.isArray(arr) ? arr.slice(0, 8).join(', ') : ''}${(arr?.length ?? 0) > 8 ? '…' : ''}`,
      );
    });
    try {
      const out = process.env.PANDA_ENUM_SNAPSHOT || 'public/panda-enums.json';
      const keysOut = 'public/panda-utility-keys.json';
      require('fs').writeFileSync(
        keysOut,
        JSON.stringify(
          { base: Object.keys(basePresetObj?.utilities ?? {}) },
          null,
          2,
        ),
        'utf8',
      );
      // write a JSON file you can inspect in repo (Playroom can also fetch it)
      require('fs').writeFileSync(
        out,
        JSON.stringify(snapshot, null, 2),
        'utf8',
      );
      // eslint-disable-next-line no-console
      console.log(`[panda.static.config] Wrote enum snapshot to ${out}`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[panda.static.config] Failed to write enum snapshot:', e);
    }
  }
  return snapshot;
};
// Trigger dump if env flag is set during cssgen
dumpEnums();

// Helper: shallow-merge presets if needed (base may export strings or actual presets)
const mergedPresets = Array.isArray((base as any).presets)
  ? (base as any).presets
  : ['@pandacss/dev/presets'];

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
      // Layout & display (keyword enums from preset)
      { properties: { display: displayVals }, responsive: true },
      { properties: { visibility: visibilityVals }, responsive: true },
      {
        properties: {
          position: positionVals,
          inset: ['*'],
          top: ['*'],
          right: ['*'],
          bottom: ['*'],
          left: ['*'],
          zIndex: ['*'],
        },
        responsive: true,
      },

      // Spacing
      {
        properties: {
          margin: ['*'],
          marginTop: ['*'],
          marginRight: ['*'],
          marginBottom: ['*'],
          marginLeft: ['*'],
          padding: ['*'],
          gap: ['*'],
        },
        responsive: true,
      },

      // Sizing
      {
        properties: {
          width: ['*'],
          minWidth: ['*'],
          maxWidth: ['*'],
          height: ['*'],
          minHeight: ['*'],
          maxHeight: ['*'],
        },
        responsive: true,
      },

      // Flex & Grid
      {
        properties: {
          flex: ['*'],
          flexGrow: ['*'],
          flexShrink: ['*'],
          flexBasis: ['*'],
          flexDirection: flexDirectionVals,
          flexWrap: flexWrapVals,
          order: ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          alignItems: alignItemsVals,
          justifyItems: justifyItemsVals,
          alignContent: alignContentVals,
          justifyContent: justifyContentVals,
          placeItems: placeItemsVals,
          placeContent: placeContentVals,
        },
        responsive: true,
      },
      {
        properties: {
          alignSelf: alignSelfVals,
          justifySelf: justifySelfVals,
          placeSelf: placeSelfVals,
        },
        responsive: true,
      },
      {
        properties: {
          gridTemplateColumns: ['*'],
          gridTemplateRows: ['*'],
          gridAutoFlow: ['*'],
          gridAutoColumns: ['*'],
          gridAutoRows: ['*'],
          gridColumn: ['*'],
          gridRow: ['*'],
          gridColumnStart: ['*'],
          gridColumnEnd: ['*'],
          gridRowStart: ['*'],
          gridRowEnd: ['*'],
        },
        responsive: true,
      },

      // Borders & Outline & Radius
      {
        properties: {
          borderWidth: ['*'],
          borderStyle: ['*'],
          borderColor: ['*'],
          borderTopWidth: ['*'],
          borderRightWidth: ['*'],
          borderBottomWidth: ['*'],
          borderLeftWidth: ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          borderTopColor: ['*'],
          borderRightColor: ['*'],
          borderBottomColor: ['*'],
          borderLeftColor: ['*'],
          outlineWidth: ['*'],
          outlineStyle: ['*'],
          outlineColor: ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          borderRadius: ['*'],
          borderTopLeftRadius: ['*'],
          borderTopRightRadius: ['*'],
          borderBottomRightRadius: ['*'],
          borderBottomLeftRadius: ['*'],
        },
        responsive: true,
      },

      // Typography
      {
        properties: {
          fontFamily: ['*'],
          fontSize: ['*'],
          fontWeight: ['*'],
          lineHeight: ['*'],
          letterSpacing: ['*'],
          textAlign: textAlignVals,
          textTransform: textTransformVals,
          textDecoration: textDecorationVals,
          whiteSpace: ['*'],
          wordBreak: ['*'],
        },
        responsive: true,
      },

      // Color utilities (mode + state variants)
      {
        properties: { color: ['*'] },
        conditions: [
          'light',
          'dark',
          'hover',
          'focus',
          'focusVisible',
          'active',
          'disabled',
          'visited',
        ],
        responsive: true,
      },

      // Backgrounds & Effects
      {
        properties: {
          backgroundColor: ['*'],
          backgroundImage: ['*'],
          backgroundSize: ['*'],
          backgroundPosition: ['*'],
          backgroundRepeat: ['*'],
          backgroundBlendMode: ['*'],
        },
        conditions: [
          'light',
          'dark',
          'hover',
          'focus',
          'focusVisible',
          'active',
          'disabled',
        ],
        responsive: true,
      },
      // Add the background shorthand, but LIMIT to color tokens only:
      {
        properties: { background: colorTokenValues },
        conditions: [
          'light',
          'dark',
          'hover',
          'focus',
          'focusVisible',
          'active',
          'disabled',
        ],
        responsive: true,
      },
      {
        properties: {
          boxShadow: ['*'],
          opacity: ['*'],
          mixBlendMode: ['*'],
          filter: ['*'],
          backdropFilter: ['*'],
        },
        responsive: true,
      },

      // Overflow & object fit/position (keyword enums)
      {
        properties: {
          overflow: overflowVals,
          objectFit: objectFitVals,
          objectPosition: objectPositionVals,
        },
        responsive: true,
      },

      // Transforms & Transitions
      {
        properties: {
          transform: ['*'],
          transformOrigin: ['*'],
          willChange: ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          transitionProperty: ['*'],
          transitionDuration: ['*'],
          transitionTimingFunction: ['*'],
          transitionDelay: ['*'],
        },
        responsive: true,
      },

      // SVG
      {
        properties: { fill: ['*'], stroke: ['*'], strokeWidth: ['*'] },
        responsive: true,
      },

      // Optional: container queries (uncomment if you actually use them;
      // these expand FAST, so keep targeted if enabling)
      {
        properties: { margin: ['*'], padding: ['*'], fontSize: ['*'] },
        conditions: ['containerSmall', 'containerMedium', 'containerLarge'],
        responsive: true,
      },
    ],

    // Prebuild every variant of your recipes (as exported in ./src/recipes/index)
    // so downstream consumers can use them without running Panda.
    recipes: '*',
  },
});
