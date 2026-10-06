import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';

// Builds dist/fonts.css and dist/fonts/*.woff2 from src/styles/font-imports.css.
// The source file uses bare package paths (resolved by Vite in development);
// the published file uses paths relative to itself, so any bundler can resolve
// it from node_modules without the consumer installing the font packages.

const require = createRequire(import.meta.url);
const sourcePath = path.resolve(process.cwd(), 'src/styles/font-imports.css');
const distDir = path.resolve(process.cwd(), 'dist');
const fontsDir = path.join(distDir, 'fonts');

const urlPattern = /url\(\s*['"]?(@fontsource-variable\/[^'")\s]+)['"]?\s*\)/gu;

const source = await readFile(sourcePath, 'utf8');
const specifiers = [
  ...new Set([...source.matchAll(urlPattern)].map((m) => m[1])),
];

if (specifiers.length === 0) {
  console.error(`No @fontsource-variable urls found in ${sourcePath}`);
  process.exit(1);
}

await mkdir(fontsDir, { recursive: true });

// The fonts are licensed under the SIL Open Font License, which requires the
// license to travel with the font files.
const packageNames = new Set();

for (const specifier of specifiers) {
  await copyFile(
    require.resolve(specifier),
    path.join(fontsDir, path.basename(specifier)),
  );
  packageNames.add(specifier.split('/').slice(0, 2).join('/'));
}

for (const packageName of packageNames) {
  await copyFile(
    require.resolve(`${packageName}/LICENSE`),
    path.join(fontsDir, `LICENSE-${packageName.split('/')[1]}.txt`),
  );
}

const output = source.replace(
  urlPattern,
  (_match, specifier) => `url('./fonts/${path.basename(specifier)}')`,
);

await writeFile(path.join(distDir, 'fonts.css'), output);

console.log(
  `Built dist/fonts.css with ${specifiers.length} font files: ${specifiers
    .map((specifier) => path.basename(specifier))
    .join(', ')}`,
);
