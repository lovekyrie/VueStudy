function sum(...arg) {
  var sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];

  }
  return sum;
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))