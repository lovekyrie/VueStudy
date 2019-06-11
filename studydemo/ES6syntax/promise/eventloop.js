setTimeout(() => {
  console.log('d');
}, 0)

var r = new Promise((resolve, reject) => {
  resolve()
});

r.then(() => {
  var begin = Date.now()
  console.log('c1')
  while (Date.now() - begin < 3)
    new Promise((resolve, reject) => {
      resolve()
    }).then(() => {
      console.log('c2')
    })
})