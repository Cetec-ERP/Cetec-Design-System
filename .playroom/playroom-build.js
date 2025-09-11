#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, cpSync } from 'fs';
import { projectRoot, distPlayroomDir, fontImportsSource, fontSourceDir, fontDestDirBuild, spriteSource, spriteDest, generateExportsFile, fontImportsDestBuild } from './utils.js';

console.log('🚀 Starting Playroom build process...\n');

try {
  // Ensure dist/playroom directory exists
  if (!existsSync(distPlayroomDir)) {
    mkdirSync(distPlayroomDir, { recursive: true });
    console.log('✅ Created dist/playroom directory');
  }

  // Step 1: Copy font imports
  console.log('[1/6] 📝 Copying font imports...');
  copyFileSync(fontImportsSource, fontImportsDestBuild);
  console.log('✅ Font imports copied\n');

  // Step 2: Copy font files from node_modules
  console.log('[2/6] 🔤 Copying font files from node_modules...');
  cpSync(fontSourceDir, fontDestDirBuild, { recursive: true });
  console.log('✅ Font files copied from node_modules\n');

  // Step 3: Generate exports.ts exports
  console.log('[3/6] 🧱 Generating components, ThemeProvider, and patterns exports...');
  generateExportsFile();
  console.log('✅ .playroom/exports.ts generated\n');

  // Step 4: Copy SVG sprite
  console.log('[4/6] 🖼️  Copying SVG sprite...');
  copyFileSync(spriteSource, spriteDest);
  console.log('✅ SVG sprite copied\n');

  // Step 5: Build static CSS
  console.log('[5/6] 🎨 Generating static CSS...');
  execSync('npx panda cssgen --config ./.playroom/panda.static.config.ts --outfile dist/playroom/playroom-static.css --minify', {
    cwd: projectRoot,
    stdio: 'inherit'
  });
  console.log('✅ Static CSS generated\n');

  // Step 6: Build Playroom
  console.log('[6/6] 📦 Building Playroom...');
  execSync('playroom build', {
    cwd: projectRoot,
    stdio: 'inherit'
  });
  console.log('✅ Playroom build completed\n');

  console.log('\n🎉 Playroom build completed successfully!');
  console.log(`📁 Output directory: ${distPlayroomDir}`);

} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}