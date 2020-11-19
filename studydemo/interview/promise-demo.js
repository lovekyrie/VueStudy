/**
 * 循环输出0->1->2->3->4->5
 * ->表示大概有1s的间隔
 */

const tasks = []
// for (var i = 0; i < 5; i++) {
//   ((j) => {
//     tasks.push(new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(new Date, j)
//         resolve()
//       }, j * 1000)
//     }))
//   })(i)
// }

/**
 * es6
 */
/* const output = (j) => new Promise((resolve) => {
setTimeout(() => {
  console.log(new Date, j)
  resolve()
}, j * 1000)
}) 

for (var i = 0; i < 5; i++) {
  tasks.push(output(i))
}

Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(new Date, i)
  }, 1000)
})
*/


const sleep = (timeoutMS) => new Promise((resolve) => {
  setTimeout(resolve, timeoutMS)
});

(async () => {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000)
    }
    console.log(new Date, i)
  }

  await sleep(1000)
  console.log(new Date, i)
})();