let promise =new Promise((resolve,reject)=>{
  resolve()
  console.log("promise")
})

promise.then(()=>{
  console.log("World")
})
console.log("Hi")