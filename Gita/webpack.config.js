const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(
        process.env.REACT_APP_FIREBASE_API_KEY,
      ),
      "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      ),
      "process.env.REACT_APP_FIREBASE_DATABASEURL": JSON.stringify(
        process.env.REACT_APP_FIREBASE_DATABASEURL,
      ),
      "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_PROJECT_ID,
      ),
      "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      ),
      "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      ),
      "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_APP_ID,
      ),
      "process.env.REACT_APP_FIREBASE_MEASUREMENT_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
      ),
    }),
  ],
};
