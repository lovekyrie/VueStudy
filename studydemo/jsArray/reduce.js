const arr = [1, 2, 3]
const mapArray = arr.map(item => item * 2)
const reduceArray = arr.reduce((acc, current) => {
  acc.push(current * 2)
  return acc
}, [])
console.log(mapArray)
console.log(reduceArray)