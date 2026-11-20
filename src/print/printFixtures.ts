import { printRootClasses } from './printRecipes';

/**
 * One markup fixture: a kit element input and the HTML the Go print helper
 * must write for it.
 */
export type PrintFixture = {
  /** A short name, unique in its file, such as `thermal-ink`. */
  name: string;
  /** What the fixture shows. */
  description: string;
  /** The kit element input, as the template gives it to the Go helper. */
  input: Record<string, unknown>;
  /**
   * Classes on the `<html>` element. Leave unset for `cetec-printDoc` alone.
   */
  root?: string[];
  /** The HTML the Go helper writes inside `<body>`. */
  html: string;
};

/**
 * A fixture file. Each print recipe has one beside it, named
 * `src/recipes/<recipe>.fixtures.json`. The build copies it to
 * `dist/print-fixtures/<recipe>.json`.
 */
export type PrintFixtureFile = {
  /** The print recipe the fixtures cover. */
  recipe: string;
  /** One or more fixtures. */
  fixtures: PrintFixture[];
};

/** A fixture class that is not in the class manifest. */
export type UnknownFixtureClass = {
  recipe: string;
  fixture: string;
  className: string;
};

/** The result of {@link checkPrintFixtures}. Every list is empty when valid. */
export type PrintFixtureCheck = {
  /** Print recipes with no fixture file, or a file with no fixtures. */
  missingFixtures: string[];
  /** Fixture files for a recipe that is not a print recipe. */
  strayFixtures: string[];
  /** Classes in a fixture that the manifest does not list. */
  unknownClasses: UnknownFixtureClass[];
  /** Fixture names used more than once in one file, as `recipe/name`. */
  duplicateNames: string[];
};

/** The `<html>` classes of a fixture. */
export const fixtureRootClasses = (fixture: PrintFixture): string[] =>
  fixture.root ?? [printRootClasses.printDoc];

const classAttribute = /\bclass\s*=\s*(?:"([^"]*)"|'([^']*)')/g;

/** Every class a fixture uses, on `<html>` and in its markup. */
export const fixtureClasses = (fixture: PrintFixture): string[] => {
  const classes = new Set(fixtureRootClasses(fixture));
  for (const match of fixture.html.matchAll(classAttribute)) {
    for (const name of (match[1] ?? match[2] ?? '').split(/\s+/)) {
      if (name) classes.add(name);
    }
  }
  return [...classes];
};

/**
 * Checks fixtures against the print recipe list and the class manifest.
 *
 * Every print recipe needs a fixture file with at least one fixture. Every
 * class in a fixture must be in the manifest. Fixture names must be unique in
 * their file, because each one has its own story.
 */
export const checkPrintFixtures = (
  recipeNames: readonly string[],
  knownClasses: Set<string>,
  files: readonly PrintFixtureFile[],
): PrintFixtureCheck => {
  const byRecipe = new Map(files.map((file) => [file.recipe, file]));
  const missingFixtures = recipeNames.filter(
    (name) => (byRecipe.get(name)?.fixtures.length ?? 0) === 0,
  );
  const strayFixtures = files
    .map((file) => file.recipe)
    .filter((name) => !recipeNames.includes(name));
  const unknownClasses = files.flatMap((file) =>
    file.fixtures.flatMap((fixture) =>
      fixtureClasses(fixture)
        .filter((className) => !knownClasses.has(className))
        .map((className) => ({
          recipe: file.recipe,
          fixture: fixture.name,
          className,
        })),
    ),
  );
  const duplicateNames = files.flatMap((file) => {
    const names = file.fixtures.map((fixture) => fixture.name);
    return [
      ...new Set(names.filter((name, i) => names.indexOf(name) !== i)),
    ].map((name) => `${file.recipe}/${name}`);
  });
  return { missingFixtures, strayFixtures, unknownClasses, duplicateNames };
};

/** The problems in a {@link PrintFixtureCheck}, one line each. */
export const fixtureCheckProblems = (check: PrintFixtureCheck): string[] => [
  ...check.missingFixtures.map(
    (recipe) =>
      `Print recipe "${recipe}" has no fixture. Add src/recipes/${recipe}.fixtures.json.`,
  ),
  ...check.strayFixtures.map(
    (recipe) =>
      `Fixture file for "${recipe}" has no print recipe. Add it to printRecipeNames.`,
  ),
  ...check.unknownClasses.map(
    ({ recipe, fixture, className }) =>
      `Fixture "${recipe}/${fixture}" uses class "${className}", which is not in the manifest.`,
  ),
  ...check.duplicateNames.map(
    (name) => `Fixture name "${name}" is used more than once.`,
  ),
];
