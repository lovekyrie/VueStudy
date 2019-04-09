const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items)

let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
//['red','green','blue']，扩展运算符(...)内部使用for...of循环，所以也可以用于Set结构。
for (let item of set.keys()) {
  console.log(item)
}

for (let item of set.values()) {
  console.log(item)
}

for (let item of set.entries()) {
  console.log(item)
}

//set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

//这意味着可以省略values方法，直接用for...of循环遍历Set
for (let x of set) {
  console.log(x)
}

let set1 = new Set([1, 2, 3])
let array1 = [...set1].map(x => x * 2)
set1 = new Set(array1)

let set2 = new Set([1, 2, 3, 4, 5])
set2 = new Set([...set2].filter(x => (x % 2) === 0));
console.dir(set2)