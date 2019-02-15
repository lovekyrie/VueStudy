var kvArray = [{
    key: 1,
    value: 10
  },
  {
    key: 2,
    value: 20
  },
  {
    key: 3,
    value: 30
  }
]

var newArr = kvArray.map(item => {
  let obj = {}
  obj[item.key] = item.value;
  obj['src'] = 'aaa'
  return obj
})

var newArr2 = kvArray.map(item => {
  item.key = item.value
})

let numbers = [1, 4, 9];
let doubles = numbers.map((item) => item * 2)
console.log(doubles)

console.log(newArr)
console.log(newArr2)