/* eslint-disable no-undef */
const CopyPlugin = require('copy-webpack-plugin');

exports.copy = () => {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [
          // { from: 'source', to: 'dest' },
          // Examples:
          { from: 'src/static/', to: '' }, // Copy everything from src/static to dist/static
          // { from: 'src/assets/images', to: 'assets/images' }, // Copy images
          // Copy a single file
          // { from: 'src/external/some-library.min.js', to: 'external/some-library.min.js' },
        ],
      }),
    ],
  };
};
