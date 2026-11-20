# Recipe Naming and Registration

Defines the contract from recipe filename to preset registration.

## Hard Standards

1. `src/recipes/**` filenames are camelCase.
2. Recipe exports use `*Recipe` suffix.
3. Recipes are registered by stripping the `Recipe` suffix from the export
   name.
4. Regular recipes are exported from `src/recipes/recipes-regular.ts`, and
   slot recipes from `src/recipes/recipes-slot.ts`.
5. `src/cetec-preset.ts` imports both files and registers every export under
   `recipes` or `slotRecipes`. No other registration step is needed.
6. Recipe `jsx` names must align with component naming conventions.

## Registration Pattern

```ts
const transformedRecipes = Object.fromEntries(
  Object.entries(regularRecipes).map(([key, value]) => [
    key.replace(/Recipe$/, ''),
    value,
  ]),
);
```
