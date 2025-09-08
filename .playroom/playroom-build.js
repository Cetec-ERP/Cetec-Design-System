#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Starting Playroom build process...\n');

try {
  // Ensure dist/playroom directory exists
  const distPlayroomDir = join(projectRoot, 'dist', 'playroom');
  if (!existsSync(distPlayroomDir)) {
    mkdirSync(distPlayroomDir, { recursive: true });
    console.log('✅ Created dist/playroom directory');
  }

  // Step 1: Build Playroom
  console.log('📦 Building Playroom...');
  execSync('playroom build', {
    cwd: projectRoot,
    stdio: 'inherit'
  });
  console.log('✅ Playroom build completed\n');

  // Step 2: Build static CSS
  console.log('🎨 Generating static CSS...');
  execSync('npx panda cssgen --config ./.playroom/panda.static.config.ts --outfile dist/playroom/playroom-static.css --minify', {
    cwd: projectRoot,
    stdio: 'inherit'
  });
  console.log('✅ Static CSS generated\n');

  // Step 3: Copy font imports
  console.log('📝 Copying font imports...');
  const fontImportsSource = join(projectRoot, 'src', 'styles', 'font-imports.css');
  const fontImportsDest = join(distPlayroomDir, 'font-imports.css');

  if (existsSync(fontImportsSource)) {
    copyFileSync(fontImportsSource, fontImportsDest);
    console.log('✅ Font imports copied');
  } else {
    console.log('⚠️  Font imports file not found, skipping...');
  }

  // Step 4: Copy font files from node_modules
  console.log('🔤 Copying font files from node_modules...');
  const fontSourceDir = join(projectRoot, 'node_modules', '@fontsource-variable');
  const fontDestDir = join(distPlayroomDir, '@fontsource-variable');

  if (existsSync(fontSourceDir)) {
    cpSync(fontSourceDir, fontDestDir, { recursive: true });
    console.log('✅ Font files copied from node_modules');
  } else {
    console.log('⚠️  Font source directory not found in node_modules, skipping...');
  }

  // Step 5: Copy SVG sprite
  console.log('🖼️  Copying SVG sprite...');
  const spriteSource = join(projectRoot, 'public', 'sprite.svg');
  const spriteDest = join(distPlayroomDir, 'sprite.svg');

  if (existsSync(spriteSource)) {
    copyFileSync(spriteSource, spriteDest);
    console.log('✅ SVG sprite copied');
  } else {
    console.log('⚠️  SVG sprite file not found, skipping...');
  }

  console.log('\n🎉 Playroom build completed successfully!');
  console.log(`📁 Output directory: ${distPlayroomDir}`);

} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}