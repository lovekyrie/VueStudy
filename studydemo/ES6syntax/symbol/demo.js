const obj = {}
const sym = Symbol()

obj[sym] = 'foo'
obj.bar = 'bar'
console.log(obj)
console.log(sym in obj)
console.log(obj[sym])
console.log(Object.keys(obj))