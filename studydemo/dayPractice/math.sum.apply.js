
var arr=[1,2,3,4,5];

var result=Math.max.apply(this,arr);

console.log(result);

arr.forEach((item,index)=>{
    console.log(item+index);
})