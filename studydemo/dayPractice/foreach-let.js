// let arr=[1,2,3,4,5,6]

// arr.forEach(item=>{
//   let element=item;
//   console.log(element)
// })

let arr=[null,1,2]
let arr2=[],arr3=[]
arr2.push(...arr)
arr3.push(...arr)

arr=arr.filter(item=>item)

arr2=arr2.filter(Boolean)

arr3=arr3.filter(Number)

console.log(arr)
console.log(arr2)
console.log(arr3)