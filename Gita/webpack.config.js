const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  mode: "production",
  devtool: "hidden-source-map",
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 244 * 1024,
    maxAssetSize: 244 * 1024,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: "json-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: [
          path.resolve(__dirname, "src/assets/images"),
          path.resolve(__dirname, "src/assets/icon"),
        ],
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "app/index.html"),
      filename: "index.html",
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images/icon/",
          to: "static/images/icon/",
        },
        {
          from: "app/manifest.json",
          to: "manifest.json",
        },
      ],
    }),
  ],
};
