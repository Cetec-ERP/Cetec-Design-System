# Conditional Variants

Conditional variants only work reliably when recipe and component typing stay on
the narrow path.

## Hard Standards

1. Do not use `compoundVariants` in recipes that need conditional variant values.
2. When combined styling is needed, prefer component-local CSS variables or
   explicit runtime booleans over recipe-level compound variants.
3. Type component props like `size` and `variant` from the generated recipe
   variant props so conditional object values remain accepted.
4. If a local alias is used for `size` or `variant`, derive it from
   `*VariantProps['size']` or `*VariantProps['variant']` instead of redefining
   the union manually.
5. Do not declare `staticCss` inside recipe files.
6. Register conservative `staticCss` coverage in `panda.config.ts` instead,
   where recipe-level static CSS is actually collected.

## Guidance

- `avoidCompoundVariantsInRecipes` exists because conditional objects do not
  compose with recipe-level compound variants in a predictable way.
- `useCorrectConditionalVariantType` should focus on the usual conditional
  variant props first: `size` and `variant`.
- `noStaticCssInRecipeFiles` exists because `staticCss` inside a recipe file has
  no effect when static recipe coverage is controlled centrally in
  `panda.config.ts`.
