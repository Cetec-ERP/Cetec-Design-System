import { join } from 'path';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const projectRoot = join(__dirname, '..');
export const playroomDir = join(projectRoot, '.playroom');
export const publicDir = join(projectRoot, 'public');
export const distDir = join(projectRoot, 'dist');
export const distPlayroomDir = join(distDir, 'playroom');
export const fontImportsSource = join(projectRoot, 'src', 'styles', 'font-imports.css');
export const fontImportsDestDev = join(publicDir, 'font-imports.css');
export const fontImportsDestBuild = join(distPlayroomDir, 'font-imports.css');
export const fontSourceDir = join(projectRoot, 'node_modules', '@fontsource-variable');
export const fontDestDirDev = join(publicDir, '@fontsource-variable');
export const fontDestDirBuild = join(distPlayroomDir, '@fontsource-variable');
export const spriteSource = join(projectRoot, 'public', 'sprite.svg');
export const spriteDest = join(distPlayroomDir, 'sprite.svg');

// Function to generate .playroom/exports.ts exports
export function generateExportsFile() {
  const componentsDir = join(projectRoot, 'src', 'components');
  const outputPath = join(projectRoot, '.playroom', 'exports.ts');

  // Get all component directories
  const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Generate component exports
  const componentExports = [];
  for (const componentName of componentDirs) {
    const indexFile = join(componentsDir, componentName, 'index.tsx');
    if (existsSync(indexFile)) {
      try {
        const content = readFileSync(indexFile, 'utf8');
        // Extract all export statements
        const exportMatches = content.match(/export\s*{\s*([^}]+)\s*}/g);
        if (exportMatches) {
          const allExports = exportMatches.map(match => {
            const exportContent = match.match(/export\s*{\s*([^}]+)\s*}/)[1].trim();
            return `export { ${exportContent} } from '~/components/${componentName}';`;
          });
          componentExports.push(...allExports);
        }
      } catch (error) {
        console.warn(`⚠️  Warning: Could not read ${indexFile}`);
      }
    }
  }

  // Sort component exports alphabetically
  componentExports.sort();

  // Static exports
  const staticExports = [
    "export { ThemeProvider } from '~/contexts/ThemeContext';",
    "export {",
    "  Flex,",
    "  Stack,",
    "  VStack,",
    "  HStack,",
    "  Grid,",
    "  GridItem,",
    "  Container,",
    "  Center,",
    "  Circle,",
    "  AspectRatio",
    "} from '@styled-system/jsx';"
  ];

  // Combine all exports
  const allExports = [...componentExports, '', ...staticExports];

  // Write to index.ts
  writeFileSync(outputPath, allExports.join('\n'));
}