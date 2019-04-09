/* 任何具有iterator接口、且每个成员都是一个双元素的数组的数据结构，都可以
当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的Map */
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);

const m1 = new Map(set);
console.log(m1.get('foo'))

const m2 = new Map([
  ['baz', 3]
]);
const m3 = new Map(m2);
console.log(m3.get('baz'))

/* 如果是同一个键多次赋值，那么后面的值会覆盖前面的 */
const map = new Map();
map.set(1, 'aaa').set(1, 'bbb');

console.log(map.get(1))

/* 如果读取未知的键，则返回undefined */
console.log(new Map().get('adfkasdjfksd'))

/* 注意：只有对同一个对象的引用，Map结构才将其视为同一个键，这一点要非常小心 */
const map2 = new Map();
map2.set(['a'], 555);
console.log(map2.get(['a']))

//同样，同样的值的两个实例，在Map结构中被视为两个键。
const map3 = new Map();
const k1 = ['a'];
// const k2 = ['a'];
const k2 = k1;

map3.set(k1, 111);
map3.set(k2, 222);

console.log(map3.get(k1))
console.log(map3.get(k2))