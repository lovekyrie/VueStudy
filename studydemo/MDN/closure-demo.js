function makeFunc() {
  var name = "Mozilla"

  function displayName() {
    console.log(name)
  }
  return displayName
}

var myFunc = makeFunc()
myFunc()

function makeAdd(x) {
  return function (y) {
    return x + y
  }
}

var add5 = makeAdd(5)
var add10 = makeAdd(10)

console.log(add5(2))
console.log(add10(2))

/* add5和add10都是闭包。它们共享相同的函数定义，但是保存了不能的词法环境
在add5的环境中，x为5，在add10的环境中，x的值为10 */