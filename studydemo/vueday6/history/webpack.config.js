let path=require('path');
console.log(path.resolve('./dist'))

let HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve('./dist')
  },
  // 模块解析规则
  // - js 匹配所有的js 用babel-loader转 译 排除掉node_modules
  module:{
    rules:[
      {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
      // 解析的时候从右往左写
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      //转化base64只有在8192字节以下转换。其他情况输出图片
      {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
      {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({//自动插入到dist目录中
      template:'.src/index.html',//作为模板的文件路径
      filename:'login.html'//产出的文件名字 
    })
  ]
}