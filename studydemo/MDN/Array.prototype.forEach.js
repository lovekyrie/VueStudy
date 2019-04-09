/* forEach使用第二个参数thisArg */
function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    this.count++;
  }, this)
  console.log(this)
};

var obj = new Counter()
obj.add([1, 3, 5, 7])

console.log(obj.count)
console.log(obj.sum)
/* 因为 thisArg 参数（this）传给了 forEach()，
每次调用时，它都被传给 callback 函数，作为它的 this 值。 */
/* Note:如果使用箭头函数来传入函数参数，thisArg参数会被忽略，
因为箭头在词法上绑定来this值 */