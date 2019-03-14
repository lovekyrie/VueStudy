Promise.resolve(1)
  .then(res => {
    console.log(res)
    return 2 //包装成Promise.resolve(2)
  })
  .then(res => {
    console.log(res)
  })