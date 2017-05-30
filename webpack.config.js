const webpack = require('webpack');

module.exports = function webpackConfig(env) {
  return {
    entry: './src/index.jsx',

    output: {
      path: __dirname,
      filename: 'bundle.js',
    },

    plugins: [
      new webpack.DefinePlugin({
        IS_GITHUB_PROJECT: env.is_gh_project,
        IS_PROD: env.prod,
      }),
    ],

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
    },

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
