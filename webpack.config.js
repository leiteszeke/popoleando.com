const path                     = require('path');
const webpack                  = require('webpack');
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
  entry: './src/ui.js',
  output: {
    path: path.join(__dirname, './src/'),
    filename: 'ui.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
