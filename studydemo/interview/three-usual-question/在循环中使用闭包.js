/**
 * 编写一个函数， 该函数将遍历整数列表， 并在延迟3秒后打印每个元素的索引。
 * 
 */

/**
 * 不正确的做法
 */
const arr = [10, 12, 15, 21];
for (var i = 0, len = arr.length; i < len; i++) {
  setTimeout(function () {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

/**
 * 正确的做法
 */
const arr1 = [10, 12, 15, 21];
for (var i = 0, len = arr1.length; i < len; i++) {
  setTimeout(function (i_local) {
    return function () {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

const arr2 = [10, 12, 15, 21];
for (let i = 0, len = arr2.length; i < len; i++) {
  setTimeout(function () {
    console.log('The index of this number is: ' + i);
  }, 3000);
}