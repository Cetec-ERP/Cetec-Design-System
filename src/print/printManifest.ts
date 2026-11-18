import { token } from '@styled-system/tokens';

import * as regularRecipes from '~/recipes/recipes-regular';
import * as slotRecipes from '~/recipes/recipes-slot';
import * as semanticTokens from '~/styles/semantics';
import { textStyles } from '~/styles/utilities/textStyles';

import { printRecipeNames, printRootClasses } from './printRecipes';

/** The class prefix set in `panda.config.ts`. */
const prefix = 'cetec';

/** Variant classes by variant name, then by variant value. */
export type PrintVariantClasses = Record<string, Record<string, string>>;

/** One class the Go print helper puts on the `<html>` element. */
export type PrintRootClass = {
  /** The class name. */
  className: string;
  /** The element that carries the class. Always `html`. */
  element: 'html';
  /** What the class does. */
  description: string;
};

/** The classes of one slot in a slot recipe. */
export type PrintSlotClasses = {
  /** The class for the slot. */
  className: string;
  /** Classes for the variants that style this slot. */
  variants: PrintVariantClasses;
};

/** The classes of one print recipe. */
export type PrintRecipeClasses = {
  /** `recipe` has one element. `slotRecipe` has one element per slot. */
  kind: 'recipe' | 'slotRecipe';
  /** The base class. Set for a `recipe` only. */
  className?: string;
  /** Variant classes. Set for a `recipe` only. */
  variants?: PrintVariantClasses;
  /** Slot classes, by slot name. Set for a `slotRecipe` only. */
  slots?: Record<string, PrintSlotClasses>;
  /** The variant values used when the kit element does not set one. */
  defaultVariants: Record<string, string>;
  /** Path of the fixture file, relative to the package `dist` folder. */
  fixtures: string;
};

/** CSS declarations by property name, ready to write into a CSS rule. */
export type PrintDeclarations = Record<string, string>;

/**
 * How the Go print helper writes page numbers in an `@page` margin box.
 *
 * Margin boxes read custom properties that the `<html>` element inherits, so
 * `declarations` use token variables with the literal value as a fallback.
 * Use `literal` or `literalThermal` where variables are not available, such
 * as a browser print header or footer template.
 */
export type PrintPageFooter = {
  /** The text style the footer uses. */
  textStyle: string;
  /** The margin box the footer goes in. */
  marginBox: string;
  /** CSS `content` values. Go may swap "Page" and "of" for the company language. */
  content: {
    /** For example "Page 2". */
    page: string;
    /** For example "Page 2 of 3". */
    pageOfPages: string;
  };
  /** Declarations with token variables and literal fallbacks. */
  declarations: PrintDeclarations;
  /** Declarations with literal values, in normal ink. */
  literal: PrintDeclarations;
  /** Declarations with literal values, in thermal ink. */
  literalThermal: PrintDeclarations;
};

/**
 * The class manifest that ships as `cetec-design-system/print-classes.json`.
 * The Go print helper reads it to write the same classes as the recipes.
 */
export type PrintClassManifest = {
  /** The stylesheet to link in every kit document. */
  stylesheet: 'print.css';
  /** Classes for the `<html>` element. */
  roots: Record<keyof typeof printRootClasses, PrintRootClass>;
  /** Classes of each print recipe, by recipe name. */
  recipes: Record<string, PrintRecipeClasses>;
  /** The page number footer. */
  pageFooter: PrintPageFooter;
};

type StyleObject = Record<string, unknown>;

type RecipeLike = {
  className: string;
  slots?: string[];
  variants?: Record<string, Record<string, StyleObject | undefined>>;
  defaultVariants?: Record<string, unknown>;
};

const allRecipes = { ...regularRecipes, ...slotRecipes } as unknown as Record<
  string,
  RecipeLike
>;

const hasStyles = (style: unknown) =>
  typeof style === 'object' && style !== null && Object.keys(style).length > 0;

const variantClasses = (
  base: string,
  variants: RecipeLike['variants'],
  slot?: string,
): PrintVariantClasses => {
  const result: PrintVariantClasses = {};
  for (const [variant, values] of Object.entries(variants ?? {})) {
    for (const [value, style] of Object.entries(values)) {
      const styled = slot ? hasStyles(style?.[slot]) : hasStyles(style);
      if (!styled) continue;
      result[variant] ??= {};
      result[variant][value] = `${base}--${variant}_${value}`;
    }
  }
  return result;
};

const recipeClasses = (name: string): PrintRecipeClasses => {
  const recipe = allRecipes[`${name}Recipe`];
  if (!recipe) {
    throw new Error(`Print recipe "${name}" is not exported from src/recipes.`);
  }
  const base = `${prefix}-${recipe.className}`;
  const defaultVariants = Object.fromEntries(
    Object.entries(recipe.defaultVariants ?? {}).map(([key, value]) => [
      key,
      String(value),
    ]),
  );
  const fixtures = `print-fixtures/${name}.json`;
  if (!recipe.slots) {
    return {
      kind: 'recipe',
      className: base,
      variants: variantClasses(base, recipe.variants),
      defaultVariants,
      fixtures,
    };
  }
  const slots = Object.fromEntries(
    recipe.slots.map((slot) => {
      const slotBase = `${base}__${slot}`;
      return [
        slot,
        {
          className: slotBase,
          variants: variantClasses(slotBase, recipe.variants, slot),
        },
      ];
    }),
  );
  return { kind: 'slotRecipe', slots, defaultVariants, fixtures };
};

type SemanticNode = { value?: unknown } & Record<string, unknown>;

const semanticSource = semanticTokens as unknown as Record<
  string,
  Record<string, unknown>
>;

/** Finds a semantic token definition, such as `colors.paper.inkSoft`. */
const findSemantic = (path: string): SemanticNode | undefined => {
  const [category = '', ...rest] = path.split('.');
  let node: unknown = semanticSource[category];
  for (const key of rest) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = (node as Record<string, unknown>)[key];
  }
  if (typeof node !== 'object' || node === null) return undefined;
  const found = node as SemanticNode;
  if ('value' in found) return found;
  const fallback = found.DEFAULT;
  return typeof fallback === 'object' && fallback !== null
    ? (fallback as SemanticNode)
    : undefined;
};

type Ink = 'base' | '_thermal';

/** Resolves a token path to its literal CSS value in the given ink. */
const literalToken = (path: string, ink: Ink): string => {
  const semantic = findSemantic(path);
  if (semantic) {
    const value = semantic.value;
    const picked =
      typeof value === 'object' && value !== null
        ? ((value as Record<string, unknown>)[ink] ??
          (value as Record<string, unknown>).base)
        : value;
    const text = String(picked);
    const reference = /^\{(.+)\}$/.exec(text);
    return reference?.[1] ? literalToken(reference[1], ink) : text;
  }
  const primitive: unknown = token(path as Parameters<typeof token>[0]);
  const text = primitive === undefined ? '' : String(primitive);
  if (!text || text.startsWith('var(')) {
    throw new Error(`Cannot resolve token "${path}" to a literal value.`);
  }
  // Font stacks in the primitives end with a semicolon. CSS does not want it.
  return text.replace(/;\s*$/, '');
};

/** CSS property and token category for each text style property. */
const textStyleProperties: Record<string, [string, string | null]> = {
  fontFamily: ['font-family', 'fonts'],
  fontSize: ['font-size', 'fontSizes'],
  fontWeight: ['font-weight', 'fontWeights'],
  lineHeight: ['line-height', 'lineHeights'],
  letterSpacing: ['letter-spacing', 'letterSpacings'],
  color: ['color', 'colors'],
  fontVariationSettings: ['font-variation-settings', null],
  fontVariantNumeric: ['font-variant-numeric', null],
  textTransform: ['text-transform', null],
};

type TextStyleTree = Record<string, unknown>;

const findTextStyle = (path: string): StyleObject => {
  let node: unknown = textStyles as TextStyleTree;
  for (const key of path.split('.')) {
    node = (node as TextStyleTree | undefined)?.[key];
  }
  const value = (node as { value?: StyleObject } | undefined)?.value;
  if (!value) throw new Error(`Text style "${path}" does not exist.`);
  return value;
};

const textStyleDeclarations = (path: string, mode: 'var' | Ink) => {
  const result: PrintDeclarations = {};
  for (const [property, raw] of Object.entries(findTextStyle(path))) {
    const mapping = textStyleProperties[property];
    if (!mapping) {
      throw new Error(`Text style property "${property}" has no CSS mapping.`);
    }
    const [cssProperty, category] = mapping;
    if (!category) {
      result[cssProperty] = String(raw);
      continue;
    }
    const tokenPath = `${category}.${String(raw)}`;
    const literal = literalToken(tokenPath, mode === 'var' ? 'base' : mode);
    if (mode === 'var') {
      const variable = token.var(tokenPath as Parameters<typeof token>[0]);
      result[cssProperty] = variable.replace(/\)$/, `, ${literal})`);
    } else {
      result[cssProperty] = literal;
    }
  }
  return result;
};

const pageFooterStyle = 'print.pageFooter';

/**
 * Builds the print class manifest from the recipe configs and tokens.
 *
 * The build writes the result to `dist/print-classes.json` and checks that
 * every class in it is in `dist/print.css`. Stories and tests call it to read
 * the same manifest without a build.
 */
export const buildPrintManifest = (): PrintClassManifest => ({
  stylesheet: 'print.css',
  roots: {
    printDoc: {
      className: printRootClasses.printDoc,
      element: 'html',
      description:
        'Every kit document. Sets the paper look and resets semantic colors to light values.',
    },
    thermal: {
      className: printRootClasses.thermal,
      element: 'html',
      description:
        'Thermal label printers. Every paper ink is solid black and rules are at least 1.5 pt.',
    },
  },
  recipes: Object.fromEntries(
    printRecipeNames.map((name) => [name, recipeClasses(name)]),
  ),
  pageFooter: {
    textStyle: pageFooterStyle,
    marginBox: '@bottom-center',
    content: {
      page: '"Page " counter(page)',
      pageOfPages: '"Page " counter(page) " of " counter(pages)',
    },
    declarations: textStyleDeclarations(pageFooterStyle, 'var'),
    literal: textStyleDeclarations(pageFooterStyle, 'base'),
    literalThermal: textStyleDeclarations(pageFooterStyle, '_thermal'),
  },
});

/** Every class in the manifest: roots, recipes, slots, and variants. */
export const manifestClasses = (manifest: PrintClassManifest): Set<string> => {
  const classes = new Set<string>();
  for (const root of Object.values(manifest.roots)) classes.add(root.className);
  const addVariants = (variants: PrintVariantClasses | undefined) => {
    for (const values of Object.values(variants ?? {})) {
      for (const className of Object.values(values)) classes.add(className);
    }
  };
  for (const recipe of Object.values(manifest.recipes)) {
    if (recipe.className) classes.add(recipe.className);
    addVariants(recipe.variants);
    for (const slot of Object.values(recipe.slots ?? {})) {
      classes.add(slot.className);
      addVariants(slot.variants);
    }
  }
  return classes;
};
