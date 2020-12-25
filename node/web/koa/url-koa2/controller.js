const fs = require('fs')
const path = require('path')

const router = require('koa-router')()

function addControllers(router) {

  const files = fs.readdirSync(path.join(__dirname, '/controllers'))
  //过滤出.js文件
  const fs_files = files.filter(item => {
    return item.endsWith('.js')
  })

  //处理每个js文件
  for (var f of fs_files) {
    console.log(`Process controllers:${f}...`)

    //导入js文件
    let mapping = require(__dirname + '/controllers/' + f)
    addMapping(router, mapping)
  }
}

function addMapping(router, mapping) {
  for (const url in mapping) {
    if (url.startsWith('GET ')) {
      const path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      const path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      //无效URL
      console.log(`invalid URL: ${url}`)
    }
  }
}


module.exports = function (dir) {
  addControllers(router)
  return router.routes();
}