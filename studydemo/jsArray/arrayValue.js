let arr=[1,2,3,4,5]
let arr=[1,2,3]
arr.forEach(item=>{
  let element=item;
  console.log(item)
})
//  let arr2=arr;
//  console.log(arr2)

let arr3=[]
arr3.push(...arr)

console.log(arr)
console.log(arr3)