import { execSync } from 'node:child_process';

import {
  copyPlayroomFontsCssToDist,
  copyPlayroomCssToDist,
  copySpriteToDist,
  ensurePlayroomStaticCss,
  ensureDirectory,
  paths,
  spriteExists,
  writePlayroomExportsFile,
} from './utils.js';

function run(command, env = {}) {
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...env },
  });
}

function main() {
  writePlayroomExportsFile();
  ensureDirectory(paths.distPlayroom);

  run('PANDA_STATIC=true npx panda codegen');
  ensurePlayroomStaticCss({ minify: true, runCommand: run });
  run('playroom build', { NODE_OPTIONS: '--max-old-space-size=8192' });

  copyPlayroomCssToDist();
  copyPlayroomFontsCssToDist();

  if (!spriteExists()) {
    run('npm run generate-sprite');
  }
  copySpriteToDist();
}

main();
