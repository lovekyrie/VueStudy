const Koa = require('koa')
//注意koa-router返回的是函数
const bodyParser = require('koa-bodyparser')
const app = new Koa()

//log request url
app.use(async (ctx, next) => {

  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(bodyParser())
// add url-router

const controller = require('./controller')
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')