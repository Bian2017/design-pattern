const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    // 自动打开浏览器
    open: true,
    port: 9022,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
