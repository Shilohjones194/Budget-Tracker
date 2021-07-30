const path = require("path");
// needs entry, output and mode

const path = require('path');
module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  mode: 'development'
};

module.exports = {};