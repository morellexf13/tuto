const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
        template: './src/index.html'
    })
],
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
      ]
  },
};
