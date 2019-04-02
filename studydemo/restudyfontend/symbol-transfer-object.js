var symbolObject = function () {
  return this
}.call(Symbol("a"))

console.log(typeof symbolObject)
console.log(symbolObject instanceof Symbol)
console.log(symbolObject.constructor == Symbol)

let symbolObject1 = Object(Symbol("a"))
console.log(typeof symbolObject1)
console.log(symbolObject1 instanceof Symbol)
console.log(symbolObject1.constructor == Symbol)

//每一组装箱对象皆有私有的class属性，这些属性可以用Object.prototype.toString获取
console.log(Object.prototype.toString.call(symbolObject1))

let str = 'hello'
console.log(Object.prototype.toString.call(str))