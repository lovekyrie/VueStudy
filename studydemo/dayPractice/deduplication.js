let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
console.time('reduce deduplication')
let result = arr.sort().reduce((prev, next) => {
  if (prev.length === 0 || prev[prev.length - 1] !== next) {
    prev.push(next);
  }
  return prev;
}, []);
console.timeEnd('reduce deduplication')
console.log(result);
