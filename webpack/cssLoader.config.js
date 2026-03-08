/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TARGET = process.env.npm_lifecycle_event;

exports.extractCSS = ({ loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            ...loaders, // Additional loaders passed as argument
          ],
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader', // Converts SASS to CSS
              options: {
                sourceMap: TARGET === 'start' || !TARGET ? true : false, // Enable source maps for development
              },
            },
            ...loaders, // Additional loaders passed as argument
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css', // Output CSS file name
        chunkFilename: 'main.css', // For lazy-loaded chunks
      }),
    ],
  };
};
