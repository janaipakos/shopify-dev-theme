const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const yargs = require("yargs");
const parsed_args = yargs(process.argv).argv;

// Run watch script
let onBuildEnd = {},
  stats = "normal";
if(parsed_args.watch === true) {
  onBuildEnd = {
    scripts: ['node ./.dev/scripts/deploy.js --command=watch --verbose=false'],
    parallel: true
  };
  stats = "errors-only";
}

module.exports = {
  stats,
  entry: {
    site: [
      path.resolve(__dirname, "./src/liquid/assets/theme.js"),
      path.resolve(__dirname, "./src/scripts/index.js")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-syntax-dynamic-import"]
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }, 
      {
        test: /\.(svg)$/,
        use: "file-loader",
        include: path.join(__dirname, "src/liquid/assets")
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/[name].css",
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: "./src/liquid/", 
          to: path.resolve(__dirname, "./dist"),
          globOptions: {
            dot: false
          }  
        },
        { from: "./config.yml", to: path.resolve(__dirname, "./dist")}
      ],
    }),
     new WebpackShellPluginNext({
      onBuildStart:{
        scripts: ['echo "Starting build 📦"'],
        blocking: true,
        parallel: false
      },
      onBuildEnd
    })
  ]
}
