import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const entryPath = path.resolve(process.cwd(), 'dist/index.js');
const forbiddenImports = new Set(['@pandacss/dev']);
const visited = new Set();
const failures = [];

const importPattern =
  /(?:import|export)\s+(?:[^'";]*?\sfrom\s*)?['"]([^'"]+)['"]/gu;

const inspectModule = async (modulePath) => {
  if (visited.has(modulePath)) {
    return;
  }

  visited.add(modulePath);
  const source = await readFile(modulePath, 'utf8');

  for (const match of source.matchAll(importPattern)) {
    const specifier = match[1];
    if (!specifier) {
      continue;
    }

    if (forbiddenImports.has(specifier)) {
      failures.push(
        `${path.relative(process.cwd(), modulePath)} imports ${specifier}`,
      );
      continue;
    }

    if (specifier.startsWith('.')) {
      await inspectModule(path.resolve(path.dirname(modulePath), specifier));
    }
  }
};

await inspectModule(entryPath);

if (failures.length > 0) {
  throw new Error(
    `Runtime entry contains build-time dependencies:\n${failures.join('\n')}`,
  );
}

console.log(
  `Runtime dependency check passed (${visited.size} modules inspected).`,
);
