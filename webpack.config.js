const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry:  './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "src"),
    watchContentBase: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
      { filename: './assets/styles/style.css' }
    ),
    new HtmlWebpackPlugin(
      { template: "./src/index.html" }
    )
  ],
};
