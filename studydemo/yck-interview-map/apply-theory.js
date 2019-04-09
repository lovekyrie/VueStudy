let a = {
  value: 1
}

let b = {
  value: 2
}

function getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}

getValue.apply(a, ['dyp', '29'])

Function.prototype.myCall = function (context) {
  var context = context || window;

  //this就是当前要调用的函数
  context.fn = this

  var args = [...arguments].slice(1)
  var result = context.fn(...args)

  delete context.fn
  return result
}
getValue.myCall(b, 'dyp', 29)