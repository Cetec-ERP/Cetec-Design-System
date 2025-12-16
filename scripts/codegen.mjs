#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

try {
  // Read current package.json
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

  // Temporarily remove "type": "module" to allow CommonJS require() calls
  const originalType = packageJson.type;
  delete packageJson.type;

  // Write modified package.json
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  try {
    // Run panda codegen directly from node_modules to avoid npx permission issues
    execSync('./node_modules/.bin/panda codegen', { stdio: 'inherit' });
  } finally {
    // Restore original package.json
    if (originalType) {
      packageJson.type = originalType;
      writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }
  }
} catch (error) {
  console.error('Error during codegen:', error.message);
  process.exit(1);
}
