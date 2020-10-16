let arr=[1,2,3,4,5]

console.time('for')
for (let index = 0, len = arr.length; index < len; index++) {
  const element = arr[index];
  console.log(element);
  if (element > 3) {
    console.timeEnd('for')
    return;
  }
}

