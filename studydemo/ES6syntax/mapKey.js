/* 由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键 
如果Map的键是一个简单类型的值(数字，字符串，布尔值)，则只要两个值严格相等，Map将其视为一个件，
有个特殊情况：虽然NaN不严格等于自身，但Map将其视为同一个键*/
let map = new Map()

map.set(-0, 123);
console.log(map.get(+0));

map.set(true, 1);
map.set('true', 2);
console.log(map.get(true));

map.set(undefined, 3);
map.set(null, 4);
console.log(map.get(undefined));

map.set(NaN, 123);
console.log(map.get(NaN))