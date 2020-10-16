/* 参数不确定调用写法 */
function sum() {
  var fir = arguments[0];
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(sec) {
      return fir + sec;
    };
  }
}

console.log(sum(2,3))
console.log(sum(2)(3))