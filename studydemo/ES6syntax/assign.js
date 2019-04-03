/**Object.assign
 * 
 * 将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象
 */

var receiver = {}

Object.assign(receiver, {
  type: "js",
  name: "file.js"
}, {
  type: "css"
});

console.log(receiver)

const obj1 = {
  name: 'durant'
}

const obj2 = {
  name: 'kyrie',
  age: 27
}

let obj3 = Object.assign(obj1, obj2)
console.log(obj1)
console.log(obj3)