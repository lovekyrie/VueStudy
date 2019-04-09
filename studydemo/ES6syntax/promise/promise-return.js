//在promise链中返回promise
//应用于在得到某个请求返回值，又是下一个接口的请求参数时
// let p1=new Promise((resolve,reject)=>{
//   resolve(42)
// })

// let p2=new Promise((resolve,reject)=>{
//   resolve(43)
// })

// p1.then(value=>{
//   //第一个处理程序完成
//   console.log(value);
//   return p2
// }).then(value=>{
//   console.log(value)
// })

new Promise((resolve,reject)=>{
  resolve(42)
}).then(value=>{
  console.log(value)
  return new Promise((resolve,reject)=>{
    resolve(43)
  })
}).then(value=>{
  console.log(value)
})