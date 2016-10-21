var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src/');
var BIN_DIR = path.resolve(__dirname, 'bin/');

var config = {
  entry: SRC_DIR + '/app.js',
  output: {
    path: BIN_DIR,
    filename: 'app.bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;