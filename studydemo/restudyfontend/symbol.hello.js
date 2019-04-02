Symbol.prototype.hello = () => {
  console.log('hello')
}

var a = Symbol("a")
console.log(typeof a)
a.hello()

/* 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用
对应对象的方法 */