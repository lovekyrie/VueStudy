const Koa = require('koa')
//注意koa-router返回的是函数
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app = new Koa()

//log request url
app.use(async (ctx, next) => {

  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(bodyParser())
// add url-router
router.get('/hello/:name', async (ctx, next) => {
  debugger
  const name = ctx.params.name
  ctx.response.body = `<h1>Hello,${name}!</h1>`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action = "/signin" method = "post" >
      <p> Name: <input name="name" value="koa"></p> 
      <p> Password: <input name="password" type="password"></p> 
      <p> <input type = "submit" value = "Submit"></p> 
    </form>`
})

router.post('/signin', async (ctx, next) => {
  const username = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';
  console.log(`signin with name:${username},password:${password}`)
  if (username === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome,${username}!</h1>`
  } else {
    ctx.response.body = `<h1>Login failed!<h1>
    <p><a href="/">Try again</a></p>`
  }
})

// add router middleware
app.use(router.routes());

app.listen(3000)
console.log('app started at port 3000...')