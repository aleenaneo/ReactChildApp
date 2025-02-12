//home-app/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
module.exports = {
  entry: "./src/entry.js",
  mode: "production",
  devServer: {
    port: 3001, // port 3001 for header-app
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
        name: "HeaderApp", // This application named ''HeaderApp''
        filename: "remoteEntry.js", // output a js file
        exposes: {
          // which exposes
          "./Header": "./src/components/Button1", // a module ''Header'' from ''./src/App''
        },
        shared: {
          // and shared
          ...dependencies, // some other dependencies
          react: {
            // react
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            // react-dom
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};