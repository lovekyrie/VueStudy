//amd 模块的写法，不依赖其他模块
define(function () {
  var add = function (x, y) {
    return x + y
  }
  return {
    add: add
  }
})