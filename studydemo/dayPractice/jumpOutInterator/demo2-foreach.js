const arr = [1, 2, 3, 4, 5, 6]
let i = 0;
arr.forEach(item => {
  i++;
  if (item > 3) {
    return;
  }
})
console.log(i)