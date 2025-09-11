#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, copyFileSync, cpSync } from 'fs';
import { join } from 'path';
import { generateExportsFile, projectRoot, publicDir, fontImportsSource, fontImportsDestDev, fontSourceDir, fontDestDirDev } from './utils.js';

console.log('🚀 Starting Playroom dev process...\n');

try {
  // Step 1: Copy font imports
  console.log('[1/5] 📝 Copying font imports...');
  copyFileSync(fontImportsSource, fontImportsDestDev);
  console.log('✅ Font imports copied\n');

  // Step 2: Copy font files from node_modules
  console.log('[2/5] 📝 Copying font files from node_modules...');
  cpSync(fontSourceDir, fontDestDirDev, { recursive: true });
  console.log('✅ Font files copied from node_modules\n');

  // Step 3: Generate exports.ts exports
  console.log('[3/5] 🧱 Generating components, ThemeProvider, and patterns exports...');
  generateExportsFile();
  console.log('✅ .playroom/exports.ts generated\n');

  // Step 4: Generate Playroom static CSS
  console.log('[4/5] 👀 Checking if Playroom static CSS exists...');
  if (existsSync(join(publicDir, 'playroom-static.css'))) {
    console.log('✅ Playroom static CSS already exists, skipping...\n');
  } else {
    console.log('🎨 Generating Playroom static CSS...');
    execSync('npx panda cssgen --config .playroom/panda.static.config.ts --outfile public/playroom-static.css', {
      cwd: projectRoot,
      stdio: 'inherit'
    });
    console.log('✅ Playroom static CSS generated\n');
  }

  // Step 5: Start playroom dev (skip if --css-only flag is present)
  if (!process.argv.includes('--css-only')) {
    console.log('[5/5] 🚀 Starting Playroom dev...\n');
    execSync('playroom start', {
      cwd: projectRoot,
      stdio: 'inherit'
    });
  } else {
    console.log('[5/5] ⏭️  Skipping Playroom dev (--css-only flag present)\n');
  }

  console.log('\n🎉 Playroom dev completed successfully!\n');

} catch (error) {
  console.error('❌ Playroom dev failed:', error);
  process.exit(1);
}