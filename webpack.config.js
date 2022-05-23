const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
  resolve: {
    alias: {
      // "vue": 'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@.": path.resolve(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }
        ],
      },
    ],
  },
};
