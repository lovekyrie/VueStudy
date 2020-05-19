let corp = {}

//存放用来放回调函数
corp.list = []
//去订阅事件
corp.on = function (fn) {
  this.list.push(fn)
}
//去发布事件
corp.emit = function () {
  //当发布的时候，再把列表里面的函数依次执行
  this.list.forEach(cb => {
    cb.apply(this, arguments)
  })
}

//测试用例
corp.on(function (position, salary) {
  console.log(`你的职位是：${position}`)
  console.log(`期望薪水：${salary}`)
})
corp.on(function (skill, hobby) {
  console.log(`你的技能有：${skill}`);
  console.log(`爱好：${hobby}`);
})

corp.emit('前端', 10000)
corp.emit('端茶和倒水', '篮球')