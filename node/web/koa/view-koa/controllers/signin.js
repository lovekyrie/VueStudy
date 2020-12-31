module.exports = {
  'POST /signin': async (ctx, next) => {
    const email = ctx.request.body.email || '',
      password = ctx.request.body.password || '';

    if (email === 'amind@exmaple.com' && password === '123456') {
      console.log('signin ok!')
      ctx.render('signin-ok.html', {
        title: 'Sign In Ok',
        name: 'Mr Node'
      })
    } else {
      console.log('signin failed')
      ctx.render('signin-failed.html', {
        title: 'Sign In Failed'
      })
    }
  }
}