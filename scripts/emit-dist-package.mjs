import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

const srcPath = resolve(root, 'package.json');
const srcPkg = JSON.parse(readFileSync(srcPath, 'utf8'));

const stripDistPrefix = (value) =>
  typeof value === 'string' ? value.replace(/^\.\/dist\//, './') : value;

const mapPaths = (value) => {
  if (Array.isArray(value)) return value.map(mapPaths);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapPaths(v)]));
  }
  return stripDistPrefix(value);
};

const fieldsToCopy = [
  'name',
  'version',
  'description',
  'type',
  'keywords',
  'license',
  'author',
  'homepage',
  'repository',
  'bugs',
  'peerDependencies',
];

const distPkg = {};
fieldsToCopy.forEach((field) => {
  if (field in srcPkg) distPkg[field] = srcPkg[field];
});

if (srcPkg.main) distPkg.main = stripDistPrefix(srcPkg.main);
if (srcPkg.module) distPkg.module = stripDistPrefix(srcPkg.module);
if (srcPkg.types) distPkg.types = stripDistPrefix(srcPkg.types);
if (srcPkg.exports) distPkg.exports = mapPaths(srcPkg.exports);
if (srcPkg.sideEffects !== undefined) distPkg.sideEffects = srcPkg.sideEffects;

if (!existsSync(dist)) {
  mkdirSync(dist, { recursive: true });
}

const outPath = resolve(dist, 'package.json');
writeFileSync(outPath, JSON.stringify(distPkg, null, 2) + '\n', 'utf8');
console.log(`[emit-dist-package] wrote ${outPath}`);
