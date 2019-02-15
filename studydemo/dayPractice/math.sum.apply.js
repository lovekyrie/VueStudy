var arr = [1, 2, 3, 4, 5];

/* apply方法调用一个具有给定this值的函数，以及作为一个数组(类数组) 提供的参数*/
var result = Math.max.apply(this, arr);

var resultMin = Math.min.call(null, 1, 2, 3, 4, 5)
console.log(result);
console.log(resultMin);

arr.forEach((item, index) => {
  console.log(item + index);
})

function list() {
  /* 解释了为什么arguments是类数组 */
  console.log(arguments)
  console.log([...arguments])
  return Array.prototype.slice.call(arguments)
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

let list1 = list(1, 2, 3)
console.log(list1)

let result1 = addArguments(1, 2);
//创建一个函数，它拥有预设参数列表。
let leadingThirtysevenList = list.bind(null, 37);

//创建一个函数，它拥有预设的第一个参数
let addThirtySeven = addArguments.bind(null, 37);

let list2 = leadingThirtysevenList()
console.log(list2)

let list3 = leadingThirtysevenList(1, 2, 3);
console.log(list3)

let result2 = addThirtySeven(5);
console.log(result2)

//第二个参数会被忽略
let result3 = addThirtySeven(5, 10);
console.log(result3)