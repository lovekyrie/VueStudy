'use strict'

//导入http模块
const http = require('http')

//创建http server，并传入回调函数
const server = http.createServer((request, response) => {

  console.log(`${request.method} : ${request.url}`)

  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  response.end('<h1>hello world</h1>')
})

server.listen(8080)

console.log('Server is running at htpp://127.0.0.1:8080');