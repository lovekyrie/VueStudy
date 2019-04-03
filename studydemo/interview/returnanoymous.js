/* 返回一个匿名函数 */
function outFunc() {
  return function () {
    console.log('are anoymous function are exact itself')
  }
}

outFunc()()