module.exports = {
  entry: ["./js/app.jsx", "./css/main.scss"],
  output: {
    path: "public/js",
    publicPath: "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules|bower_components|neal-react)/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
};