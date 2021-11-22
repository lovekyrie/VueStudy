const path = require('path'),
  mime = require('mime'),
  fs = require('mz/fs');

function staticFiles(url, dir) {
  return async (ctx, next) => {
    const rpath = ctx.request.path
    if (rpath.startsWith(url)) {
      //获取文件完整路径
      let fpath = path.join(dir, rpath.substring(url.length))
      //判断文件是否存在
      if (await fs.existsSync(fpath)) {
        //查找文件的mime
        ctx.response.type = mime.getType(rpath)
        //读取文件并赋值给response.body
        ctx.response.body = await fs.readFile(fpath)
      } else {
        //文件不存在
        ctx.response.status = 404
      }
    } else {
      //不是指定前缀的URL，继续处理下一个middlemare
      await next()
    }
  }
}

module.exports = staticFiles