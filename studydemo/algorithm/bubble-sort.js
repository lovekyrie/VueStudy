function bubble(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const element = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = element;
      }
    }
  }

  return arr;
}

//第一次循环3次 第二次循环2次 第三次 循环1次 如果数组元素为4个的话
const arr = [40, 4, 2, 30];
const newArr=bubble(arr)
console.log(newArr)