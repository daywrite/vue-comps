var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }
    ]
  }
}
