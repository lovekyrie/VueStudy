const m = new Map();
const o = {
  p: 'Hello World'
};

m.set(o, 'content');
console.log(m.get(o));

console.log(m.has(o))
m.delete(o)
console.log(m.has(o))
/* Map()构造函数可以接受一个数组作为参数，该数组的成员
是一个个表示键值对的数组。 */
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

console.log(map.size)
console.log(map.has('name'))
console.log(map.get('name'))
console.log(map.has('title'))
console.log(map.get('title'))

const items = [
  ['name', '张三'],
  ['title', 'Author']
]

const toMap = new Map();
items.forEach(([key, value]) => toMap.set(key, value))
console.log(toMap)