const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function webpackConfig(env) {
  return {
    entry: './src/index.jsx',

    output: {
      path: __dirname,
      filename: 'bundle.js',
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015'],
          },
        },
      ],
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        IS_GITHUB_PROJECT: env.is_gh_project,
        IS_PROD: env.prod,
      }),
      new ExtractTextPlugin('bundle.css'),
    ],

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    resolveLoader: {
      moduleExtensions: ['-loader'],
    },

    devServer: {
      contentBase: './',
      port: 8080,
    },
  };
};
