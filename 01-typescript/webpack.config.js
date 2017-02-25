module.exports = {
  entry: "./index.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}
