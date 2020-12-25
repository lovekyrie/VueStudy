const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {

  //对于任何请求，app将调用异步函数处理请求：
  await next()
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello,koa2!</h1>'
})

app.listen(3000)
console.log('app started at port 3000...')