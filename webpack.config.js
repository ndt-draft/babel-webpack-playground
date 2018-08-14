const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", 
  output: {
    path: path.resolve(__dirname, "build-webpack"),
    filename: "bundle.js",
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
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
}
