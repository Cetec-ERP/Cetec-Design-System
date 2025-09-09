import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  title: 'Cetec ERP Design System',
  components: './.playroom/exports.ts',
  frameComponent: './.playroom/frameComponent.tsx',
  snippets: './.playroom/snippets.ts',
  scope: './.playroom/scope.ts',
  themes: './.playroom/themes.ts',
  outputPath: './dist/playroom',
  baseUrl: '/playroom/',
  widths: [320, 768, 1024, 1200],
  defaultVisibleWidths: [1200],
  port: 9000,
  openBrowser: false,
  paramType: 'search', // default is 'hash'
  iframeSandbox: 'allow-scripts allow-same-origin',
  exampleCode: `
<Card maxWidth="xs">
  <Flex
    as="header"
    px="12"
    py="4"
    justifyContent="space-between"
    borderBottomWidth={'1'}
    borderStyle={'solid'}
    borderColor={{ base: 'slate.10', _dark: 'slate.80' }}
  >
    <Text textStyle="heading-xs" textAlign="left">Howdy</Text>
    <IconButton variant="ghost">
      <Icon name="menu" />
    </IconButton>
  </Flex>
  <Flex p="12">
    <Text>
      Dolor sunt est qui incididunt ipsum esse esse do minim id officia
      laboris culpa.
    </Text>
  </Flex>
</Card>
    `,
  webpackConfig: () => ({
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
        '@styled-system': path.resolve(__dirname, 'styled-system'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, '.playroom')
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              extends: path.join(__dirname, '.playroom/.babelrc'),
            },
          },
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'dist'),
            // path.resolve(__dirname, '.playroom')
          ],
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, '.playroom/postcss.playroom.config.cjs'),
                },
              },
            },
          ],
        },
      ],
    },
  }),
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  // propsParser: docgen.withDefaultConfig({
  //     savePropValueAsString: true,
  // }).parse,
};
