const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.(pdf|gif|svg)$/,
        use: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.pdf'],
    modules: [
      'node_modules',
      'src',
      'src/reducers',
      'src/store',
      'src/test',
      'src/components',
      'src/components/common',
      'src/components/fun',
      'src/containers',
      'src/styles',
      'src/assets',
      'src/assets/codeIcons',
      'src/assets/workIcons',
    ],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 9000,
  },
};
