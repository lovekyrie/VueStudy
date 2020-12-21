'use strict'

const fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');

//从命令行参数获取root目录，默认是当前目录
const root = path.resolve(process.argv[2] || '.')

console.log('Static root dir:' + root)

//创建服务器
const server = http.createServer((request, response) => {
  //获取url的path,类似’/css/bootstrap.css‘
  const path = url.parse(request.url).pathname
  //获取对应的本地路径，类似’/srv/www/css/bootstrap.css‘
  const filePath = path.join(root, pathname)

  //获取文件状态
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      console.log('200' + request.url)
      response.writeHead(200)
      fs.createReadStream(filePath).pipe(response)
    } else {
      //出错
      console.log(`404${request.url}`)
      //发送404响应
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(8080)

console.log('Server is running at http://127.0.0.1:8080')