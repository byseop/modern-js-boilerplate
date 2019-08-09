const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // app: '파일경로'
    // app: ['a.js', 'b.js'] -> 다른 a.js와 b.js가 app.js로 합쳐짐
    // ex) vendor: ['@babel/polyfill', 'eventsource-polyfill', 'react', 'react-dom'],
    bundle: ['./src/js/todolist.js'],
    entry: ['@babel/polyfill', './src/js/todolist.js']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
};