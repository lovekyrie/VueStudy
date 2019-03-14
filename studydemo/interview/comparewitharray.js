let arr = [5, 458, 120, -215];

let maxInNumbers = Math.max.apply(this, arr);
console.log(maxInNumbers)

let add = function (a, b) {
  return a + b
}

let arr1 = [2, 3, 4]
let sum = add.apply(null, arr1)
console.log(sum)