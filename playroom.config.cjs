const path = require('path');

module.exports = {
    components: './src/index.ts',
    outputPath: './dist/playroom',

    // Optional:
    title: 'Cetec ERP Design System',
    //   themes: './src/themes',
    // snippets: './node_modules/playroom/src/snippets.ts',
    // snippets: './playroom/snippets.js',
    // frameComponent: './node_modules/playroom/src/frameComponent.ts',
    // frameComponent: './playroom/FrameComponent.js',
    // frameComponent: './playroom/FrameComponent.tsx',
    // scope: './node_modules/playroom/src/useScope.ts',
    // scope: './playroom/useScope.js',
    widths: [320, 768, 1024],
    port: 9000,
    // openBrowser: true,
    openBrowser: false,
    paramType: 'search', // default is 'hash'
    exampleCode: `
        <Spinner />
    `,
    baseUrl: '/playroom/',
    iframeSandbox: 'allow-scripts',
    webpackConfig: () => ({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: __dirname,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            // presets: [
                            // '@babel/preset-env',
                            // '@babel/preset-typescript',
                            // '@babel/preset-react',
                            // ],
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                ['@babel/preset-typescript'],
                                ['@babel/preset-react', { runtime: 'automatic' }], // 👈 this fixes "React is not defined"
                            ],
                        },
                    },
                },
                // {
                //     test: /\.css$/, // 👈 Add this rule
                //     use: [
                //         'style-loader',
                //         'css-loader',
                //         {
                //             loader: 'postcss-loader',
                //             options: {
                //                 postcssOptions: {
                //                     plugins: [
                //                         require('postcss-preset-env')({
                //                             stage: 1,
                //                             features: {
                //                                 'nesting-rules': true,
                //                             },
                //                         }),
                //                     ],
                //                 },
                //             },
                //         },
                //     ],
                // }
                {
                    test: /\.css$/,
                    include: [
                        path.resolve(__dirname, 'styled-system'),
                        path.resolve(__dirname, 'src'),
                    ],
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                            plugins: [
                                require('postcss-preset-env')({
                                    stage: 1,
                                    features: {
                                        'nesting-rules': true,
                                    },
                                }),
                                '@csstools/postcss-cascade-layers',
                            ],
                            },
                        },
                        },
                    ],
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            alias: {
                '~': path.resolve(__dirname, 'src'),
                '@styled-system': path.resolve(__dirname, 'styled-system'),
                'component-library': path.resolve(__dirname, 'src/component-library/'),
            },
        },
    }),
    // webpackConfig: () => {
    //   console.log('🛠️ Webpack config running — injecting postcss-loader');

    //   return {
    //     module: {
    //       rules: [
    //         {
    //             test: /\.css$/,
    //             enforce: 'pre',
    //             include: [
    //                 path.resolve(__dirname, 'styled-system'),
    //                 path.resolve(__dirname, 'src'),
    //             ],
    //             use: [
    //                 'style-loader',
    //                 'css-loader',
    //                 // 'postcss-loader',
    //                 // {
    //                 //   loader: 'postcss-loader',
    //                 //   options: {
    //                 //     postcssOptions: {
    //                 //       plugins: [
    //                 //         (() => {
    //                 //           console.log('🔧 postcss-preset-env loaded'); // <--- Add this
    //                 //           return require('postcss-preset-env')({
    //                 //             stage: 1,
    //                 //             features: {
    //                 //               'nesting-rules': true,
    //                 //             },
    //                 //           });
    //                 //         })(),
    //                 //       ],
    //                 //     },
    //                 //   },
    //                 // },
    //                 {
    //                     loader: 'postcss-loader',
    //                     options: {
    //                         postcssOptions: {
    //                             plugins: [
    //                                 require('@pandacss/dev/postcss')(),
    //                                 require('postcss-preset-env')({
    //                                     stage: 1,
    //                                     features: {
    //                                         'nesting-rules': true,
    //                                     },
    //                                 }),
    //                             ],
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //         {
    //           test: /\.tsx?$/,
    //           include: [
    //             path.resolve(__dirname, 'src'),
    //             path.resolve(__dirname, 'playroom'),
    //           ], // 👈 Add this
    //           exclude: /node_modules/,
    //           use: {
    //             loader: 'babel-loader',
    //             options: {
    //               presets: [
    //                 ['@babel/preset-env', { targets: 'defaults' }],
    //                 ['@babel/preset-typescript'],
    //                 ['@babel/preset-react', { runtime: 'automatic' }],
    //               ],
    //             },
    //           },
    //         },
    //       ],
    //     },
    //     resolve: {
    //       extensions: ['.js', '.ts', '.tsx'],
    //       alias: {
    //         '~': path.resolve(__dirname, 'src'),
    //         '@styled-system': path.resolve(__dirname, 'styled-system'),
    //         'component-library': path.resolve(__dirname, 'src/component-library/'),
    //       },
    //     },
    //   };
    // },
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