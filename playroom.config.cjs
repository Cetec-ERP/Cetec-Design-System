const path = require('path');
const { writeFileSync } = require('fs');

module.exports = {
  title: 'Cetec ERP Design System',
  components: './src/index.ts',
  outputPath: './dist/playroom',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: false,
  paramType: 'search', // default is 'hash'
  exampleCode: `
		<Box p="24" display="flex" flexDirection="column">
        <Spinner />
				</Box>
    `,
  baseUrl: '/playroom/',
  iframeSandbox: 'allow-scripts',
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
            path.resolve(__dirname, 'playroom')
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              extends: path.join(__dirname, '.playroom/.babelrc'),
            },
          },
        },
      ],
    },
  }),
  // Inject the dynamically generated Panda CSS into the iframe
  frameComponent: './playroom/frameComponent.tsx',
  defaultVisibleWidths: [
    // subset of widths to display on first load
  ],
  defaultVisibleThemes: [
    // subset of themes to display on first load
  ],
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  // propsParser: docgen.withDefaultConfig({
  //     savePropValueAsString: true,
  // }).parse,
};
