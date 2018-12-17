let arr=[268, 171, 353, 111, 363, 73, 354, 37, 328, 13, 296, 5, 256, 16, 234, 43, 222, 144, 247, 151];

let newArr= arr.map(item=>{
  return item*1.5
})

console.log(JSON.stringify(newArr))