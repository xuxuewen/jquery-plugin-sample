const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babel_options ={
  presets:[
    ['env',{
      "targets": {
        "browsers": ["last 4 versions", "safari >= 7"]
      }
    }]
  ]
}
module.exports = {
  entry:'./demo/demo.js',
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'index.js'
  },
  module:{
    rules:[
      // es6 语法解析
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:[
          {
            loader:'babel-loader',
            options:babel_options
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./demo/index.ejs',
      filename:'index.html'
    })
  ],
  externals: {
    'jquery': 'jQuery'
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000
  }
};
