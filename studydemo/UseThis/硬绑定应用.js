/* 硬绑定的典型应用之一就是创建一个包裹函数 */
function foo(something) {
  console.log(this.a, something)
  return this.a + something
}

var obj = {
  a: 2
};

var bar = function () {
  return foo.apply(obj, arguments)
}

var b = bar(3);
console.log(b)