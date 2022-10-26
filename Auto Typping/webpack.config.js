const path = require("path");

module.exports = {
  entry: {
    index: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
