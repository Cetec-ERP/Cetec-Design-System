/**
 * Post-build script to fix declaration file paths
 *
 * The vite-plugin-dts rollupTypes option generates .d.ts files with
 * relative paths that point outside the dist folder. This script:
 * 1. Copies styled-system type definitions to dist/styled-system
 * 2. Rewrites imports in dist/*.d.ts to use the correct paths
 */

import { readFileSync, writeFileSync, cpSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const distDir = resolve(projectRoot, 'dist');
const styledSystemSrc = resolve(projectRoot, 'src/styled-system');
const styledSystemDest = resolve(distDir, 'styled-system');

// Patterns to fix in .d.ts files
const pathPatterns = [
  // ../../styled-system/* -> ./styled-system/*
  { from: /from ['"]\.\.\/\.\.\/styled-system\//g, to: "from './styled-system/" },
  // ../../../styled-system/* -> ./styled-system/*
  { from: /from ['"]\.\.\/\.\.\/\.\.\/styled-system\//g, to: "from './styled-system/" },
  // ../types/* (orphaned path) -> ./styled-system/types/*
  { from: /from ['"]\.\.\/types\//g, to: "from './styled-system/types/" },
];

function fixDtsFile(filePath) {
  if (!existsSync(filePath)) {
    console.log(`[fix-dts-paths] Skipping ${filePath} (not found)`);
    return;
  }

  let content = readFileSync(filePath, 'utf-8');
  let modified = false;

  for (const pattern of pathPatterns) {
    if (pattern.from.test(content)) {
      content = content.replace(pattern.from, pattern.to);
      modified = true;
    }
    // Reset regex lastIndex for global patterns
    pattern.from.lastIndex = 0;
  }

  if (modified) {
    writeFileSync(filePath, content);
    console.log(`[fix-dts-paths] Fixed paths in ${filePath}`);
  } else {
    console.log(`[fix-dts-paths] No changes needed in ${filePath}`);
  }
}

function copyStyledSystemTypes() {
  if (!existsSync(styledSystemSrc)) {
    console.error(`[fix-dts-paths] Source not found: ${styledSystemSrc}`);
    process.exit(1);
  }

  // Create destination directory
  if (!existsSync(styledSystemDest)) {
    mkdirSync(styledSystemDest, { recursive: true });
  }

  // Copy only the type-related folders and files
  const typeFolders = ['css', 'jsx', 'patterns', 'recipes', 'tokens', 'types'];

  for (const folder of typeFolders) {
    const src = resolve(styledSystemSrc, folder);
    const dest = resolve(styledSystemDest, folder);

    if (existsSync(src)) {
      cpSync(src, dest, { recursive: true });
      console.log(`[fix-dts-paths] Copied ${folder}/ to dist/styled-system/`);
    }
  }

  // Copy package.json for proper module resolution
  const pkgSrc = resolve(styledSystemSrc, 'package.json');
  const pkgDest = resolve(styledSystemDest, 'package.json');
  if (existsSync(pkgSrc)) {
    cpSync(pkgSrc, pkgDest);
    console.log(`[fix-dts-paths] Copied package.json to dist/styled-system/`);
  }
}

// Main execution
console.log('[fix-dts-paths] Starting post-build path fixes...');

// Step 1: Copy styled-system types to dist
copyStyledSystemTypes();

// Step 2: Fix paths in declaration files
const dtsFiles = ['index.d.ts', 'preset.d.ts'];
for (const file of dtsFiles) {
  fixDtsFile(resolve(distDir, file));
}

console.log('[fix-dts-paths] Done!');
