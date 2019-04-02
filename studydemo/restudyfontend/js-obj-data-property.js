var o = {
  a: 1
}
o.b = 2;
//a和b皆为数据属性
console.log(Object.getOwnPropertyDescriptor(o, "a"))
console.log(Object.getOwnPropertyDescriptor(o, "b"))

Object.defineProperty(o, "c", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true
})

o.c = 4
console.log(o.c)