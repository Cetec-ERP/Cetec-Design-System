import type { PrintFixture, PrintFixtureFile } from './printFixtures';

const modules = import.meta.glob<PrintFixtureFile>(
  '../recipes/*.fixtures.json',
  { eager: true, import: 'default' },
);

/** Every fixture file in `src/recipes`, sorted by recipe name. */
export const printFixtureFiles: PrintFixtureFile[] = Object.values(
  modules,
).sort((a, b) => a.recipe.localeCompare(b.recipe));

/** Returns one fixture by recipe and name. Throws when it does not exist. */
export const printFixture = (recipe: string, name: string): PrintFixture => {
  const fixture = printFixtureFiles
    .find((file) => file.recipe === recipe)
    ?.fixtures.find((item) => item.name === name);
  if (!fixture) {
    throw new Error(`Print fixture "${recipe}/${name}" does not exist.`);
  }
  return fixture;
};
