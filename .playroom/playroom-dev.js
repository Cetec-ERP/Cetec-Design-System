import { execSync } from 'node:child_process';

import {
  copyPlayroomCssToPublic,
  ensurePlayroomStaticCss,
  writePlayroomExportsFile,
} from './utils.js';

function run(command, env = {}) {
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...env },
  });
}

function main() {
  const cssOnly = process.argv.includes('--css-only');

  writePlayroomExportsFile();

  run('PANDA_STATIC=true npx panda codegen');
  ensurePlayroomStaticCss({ minify: false, runCommand: run });

  copyPlayroomCssToPublic();

  if (!cssOnly) {
    run('playroom start', { NODE_OPTIONS: '--max-old-space-size=8192' });
  }
}

main();
