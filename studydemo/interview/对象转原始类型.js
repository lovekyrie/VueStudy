/* 对象转原始类型的时候，首先会调用[Symbol.toPrimitive]()方法，优先级最高
  如果已经是原始类型了，就不需要转换 
  调用x.valueOf()
  调用x.toString()
  如果上述情况都不存在，则会报错
*/

let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}

console.log(1 + a)