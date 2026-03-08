/* eslint-disable global-require */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./src/static/*.html', './src/**/*.js'],

    //   // This option is not necessary for the PurgeCSS plugin setup.
    //   // The 'css' option isn't used here. PurgeCSS will process the CSS files that are piped through PostCSS.
    //   // If you're looking to directly specify input CSS files, consider using a different approach or script to run PurgeCSS separately.

    //   safelist: [], // Specify classes that should not be removed.
    // }),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-preset-env')({
      stage: 1,
    }),
  ],
};
