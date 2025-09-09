#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, copyFileSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Starting Playroom dev process...\n');

try {
  const publicDir = join(projectRoot, 'public');

  // Step 1: Copy font imports
  console.log('[1/4] 👀 Checking if font imports exist...');
  if (existsSync(join(publicDir, 'font-imports.css'))) {
    console.log('✅ Font imports already exist, skipping...\n');
  } else {
    console.log('📝 Copying font imports...');
    const fontImportsSource = join(projectRoot, 'src', 'styles', 'font-imports.css');
    const fontImportsDest = join(publicDir, 'font-imports.css');
    copyFileSync(fontImportsSource, fontImportsDest);
    console.log('✅ Font imports copied\n');
  }

  // Step 2: Copy font files from node_modules
  console.log('[2/4] 👀 Checking if font files exist...');
  if (existsSync(join(publicDir, '@fontsource-variable'))) {
    console.log('✅ Font files already exist, skipping...\n');
  } else {
    console.log('🔤 Copying font files from node_modules...');
    const fontSourceDir = join(projectRoot, 'node_modules', '@fontsource-variable');
    const fontDestDir = join(publicDir, '@fontsource-variable');
    cpSync(fontSourceDir, fontDestDir, { recursive: true });
    console.log('✅ Font files copied from node_modules\n');
  }

  // Step 3: Generate Playroom static CSS
  console.log('[3/4] 👀 Checking if Playroom static CSS exists...');
  if (existsSync(join(publicDir, 'playroom-static.css'))) {
    console.log('✅ Playroom static CSS already exists, skipping...\n');
  } else {
    console.log('🔤 Generating Playroom static CSS...');
    execSync('npx panda cssgen --config panda.static.config.ts --outfile public/playroom-static.css', {
      cwd: projectRoot,
      stdio: 'inherit'
    });
    console.log('✅ Playroom static CSS generated\n');
  }

  // Step 4: Start playroom dev
  console.log('[4/4] 🚀 Starting Playroom dev...\n');
  execSync('playroom start', {
    cwd: projectRoot,
    stdio: 'inherit'
  });

  console.log('\n🎉 Playroom dev completed successfully!\n');

} catch (error) {
  console.error('❌ Playroom dev failed:', error);
  process.exit(1);
}