module.exports = {
  plugins: [
    {
      '@pandacss/dev/postcss': {},
    },
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    }),
  ]
}