let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}

let b = {
  ...a
}
/* a.jobs.first = 'native'
a.age = 3
console.log(b.jobs.first)
console.log(b.age) */

//这个问题可以通过JSON.stringify()解决
let c = JSON.parse(JSON.stringify(a))
a.jobs.first = 'soft programer'
console.log(c.jobs.first)

/* 但是该方法也有局限性：
  a.会忽略undefined
  b.会忽略symbol
  c.不能序列化函数
  d.不能解决循环引用的对象 */