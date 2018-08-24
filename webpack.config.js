const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  // @see https://github.com/webpack/webpack/issues/6460#issuecomment-364286147
  const PROD_MODE = argv.mode === 'production'

  return {
    entry: "./src/index.js", 
    output: {
      path: path.resolve(__dirname, "build-webpack"),
      filename: "[name].[hash].js",
    },
    // @see https://webpack.js.org/configuration/devtool/
    // @see https://github.com/webpack-contrib/mini-css-extract-plugin/issues/29#issuecomment-382424129
    // devtool: 'cheap-module-eval-source-map',
    optimization: {
      // @see https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        // @see https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/71#issuecomment-412143710
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: true
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /\.module.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.module.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: '[folder]__[local]--[hash:base64:5]'
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css"
      }),
      // @see https://github.com/webpack-contrib/mini-css-extract-plugin/issues/29#issuecomment-382424129
      new webpack.SourceMapDevToolPlugin({
        filename: "[file].map"
      }),
      // clean build folder before build
      // @see https://github.com/johnagan/clean-webpack-plugin#usage
      new CleanWebpackPlugin(['build-webpack'])
    ]
  }
}
