let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//并集
let union = new Set([...a, ...b]);
console.log(union)

//交集
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect)

//差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference)

let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
console.log(set)