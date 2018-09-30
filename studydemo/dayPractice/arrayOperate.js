
let arr1=[1,2,3,4,5];
let result=arr1.concat([1,2,3]);

console.log(result);

arr1.unshift(6);
console.log(arr1);

console.log(arr1.filter(item=>item>2 && item<5).length);