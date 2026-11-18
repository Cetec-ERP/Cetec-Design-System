import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { createServer } from 'vite';

// Builds the print kit files in dist:
//
// - print.css: tokens without dark values, the fonts, a small reset, and every
//   print recipe with all variants (panda.print.config.ts)
// - print-classes.json: the class manifest the Go print helper reads
// - print-fixtures/<recipe>.json: the markup fixtures, one file per recipe
//
// It fails when a print recipe has no fixture, when a fixture uses a class
// that is not in the manifest, or when a manifest class is not in print.css.
// Run it after `vite build` and `tools/build-fonts.mjs`.

const root = process.cwd();
const distDir = path.resolve(root, 'dist');
const pandaOut = path.join(distDir, '.print-panda.css');

const fail = (problems) => {
  console.error('Print kit build failed:');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
};

execFileSync(
  'npx',
  [
    'panda',
    'cssgen',
    '--config',
    'panda.print.config.ts',
    '--outfile',
    pandaOut,
  ],
  { stdio: ['ignore', 'ignore', 'inherit'] },
);

// fonts.css already points at ./fonts/, which sits next to print.css.
const fonts = await readFile(path.join(distDir, 'fonts.css'), 'utf8');
const panda = await readFile(pandaOut, 'utf8');
await rm(pandaOut);
const printCss = `${panda.trimEnd()}\n\n${fonts.trim()}\n`;

// Load the TypeScript sources the stories use, so the build and the stories
// read the same manifest and fixtures.
const server = await createServer({
  configFile: false,
  root,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  resolve: {
    alias: {
      '~': path.resolve(root, 'src'),
      '@styled-system': path.resolve(root, 'src/styled-system'),
    },
  },
});

let manifest;
let fixtureFiles;
let check;
try {
  const { buildPrintManifest, manifestClasses } = await server.ssrLoadModule(
    '/src/print/printManifest.ts',
  );
  const { checkPrintFixtures, fixtureCheckProblems } =
    await server.ssrLoadModule('/src/print/printFixtures.ts');
  const { printFixtureFiles } = await server.ssrLoadModule(
    '/src/print/printFixtureFiles.ts',
  );
  const { printRecipeNames } = await server.ssrLoadModule(
    '/src/print/printRecipes.ts',
  );
  manifest = buildPrintManifest();
  fixtureFiles = printFixtureFiles;
  const classes = manifestClasses(manifest);
  check = fixtureCheckProblems(
    checkPrintFixtures(printRecipeNames, classes, printFixtureFiles),
  );

  // Panda escapes characters such as `:` in class names. Match that form.
  const cssEscape = (name) => name.replace(/[^\w-]/g, (c) => `\\${c}`);
  const regexEscape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const className of classes) {
    const selector = new RegExp(
      `\\.${regexEscape(cssEscape(className))}(?![\\w-])`,
    );
    if (!selector.test(printCss)) {
      check.push(`Manifest class "${className}" is not in print.css.`);
    }
  }
} finally {
  await server.close();
}

if (check.length > 0) fail(check);

await writeFile(path.join(distDir, 'print.css'), printCss);
await writeFile(
  path.join(distDir, 'print-classes.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
const fixturesDir = path.join(distDir, 'print-fixtures');
await mkdir(fixturesDir, { recursive: true });
for (const file of fixtureFiles) {
  await writeFile(
    path.join(fixturesDir, `${file.recipe}.json`),
    `${JSON.stringify(file, null, 2)}\n`,
  );
}

console.log(
  `Built dist/print.css (${String(Math.round(printCss.length / 1024))} KB), ` +
    `dist/print-classes.json (${String(Object.keys(manifest.recipes).length)} recipes), ` +
    `and ${String(fixtureFiles.length)} fixture files in dist/print-fixtures`,
);
