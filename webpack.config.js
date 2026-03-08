/* eslint-disable no-undef */
const path = require('path');
const merge = require('webpack-merge'); // Updated import syntax for webpack-merge
const webpack = require('webpack');
const cssLoaderPart = require('./webpack/cssLoader.config.js');
const copyPlugin = require('./webpack/copy.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'src/js/index.ts'),
  build: path.join(__dirname, 'dist'),
};

// Common configuration
const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: 'bundle.js',
      assetModuleFilename: 'images/[name][ext]', // Configure the output path for asset files
      clean: true, // Clean the output directory before build
    },
    resolve: {
      // Add `.ts` and `.tsx` as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
        // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`.
        { test: /\.tsx?$/, loader: 'ts-loader' },
      ],
    },
  },
  copyPlugin.copy(),
  cssLoaderPart.extractCSS(),
]);

// Development configuration
const developmentConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'), // Path to your static files
      watch: true, // This replaces watchContentBase
    },
    host: process.env.HOST,
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    hot: true,
    client: {
      logging: 'info', // Updated for Webpack 5
      progress: true, // Show progress in the browser's console
    },
    allowedHosts: 'all',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

// Production configuration
const productionConfig = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new TerserPlugin({
        // TerserPlugin options here
        terserOptions: {
          // Custom Terser options
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};

// Conditional configuration merge based on TARGET
module.exports = (() => {
  if (TARGET === 'start' || !TARGET) {
    return merge(commonConfig, developmentConfig);
  }
  if (TARGET === 'build') {
    return merge(commonConfig, productionConfig);
  }
})();
