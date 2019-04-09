/* map遍历器遍历方法 
需要注意的是：Map的遍历顺序就是插入顺序*/
const map = new Map([
  ['F', 'no'],
  ['T', 'yes']
]);

for (let key of map.keys()) {
  console.log(key)
}

for (let value of map.values()) {
  console.log(value)
}

for (let item of map.entries()) {
  console.log(item[0], item[1])
}

//或者
for (let [key, value] of map.entries()) {
  console.log(key, value)
}

//等同于map.entries()
for (let [key, value] of map) {
  console.log(key, value)
}
/* 上面代码最后的那个例子，表示Map结构的默认遍历器接口(Symbol.iterator属性),就是entries方法 */
console.log(map[Symbol.iterator] === map.entries)

/* 结合数组的map方法，filter方法，可以实现Map的遍历和过滤（Map本身没有map和filter方法） */
const map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
)
console.log(map1)