
let arr=[1,2,3,4,5];
arr.a='b';

for(let i=0;i<arr.length;i++){

    console.log(arr[i]);
}

//面试 forEach,for in,for,for of的区别
//1) forEach 不支持return
console.log('######forEach#####');

arr.forEach(function(item){
    console.log(item);
})

// for in key会变成字符串类型，并且会遍历出数组的属性
console.log('######for in######');

for(let key in arr){

    console.log(key);
}

// for of 支持return 并且值只会of数组(不能遍历对象)
console.log('#######for of#######');

let obj={school:'清晰中学',age:17};
for(let val of arr){
    console.log(val);
}

for(let val of Object.keys(obj)){

    console.log(obj[val]);
}

//如果想用强制遍历，利用object.keys()
//2) Filter 是否操作原数组：不 返回结果：过滤后的新数组
//回调函数：满足条件的值生成新数组
//(删除)

let newArr=[1,2,3,4,5].filter(function(item){
    return item>2 && item<5;
})

console.log(newArr);

//#3)  map 映射 将所有的原数组映射成一个新数组[1,2,3]
//<li>1</li><li>2</li><li>3</li> 
//不操作原数组 返回新数组 回调函数中返回什么这一项就是什么
//(新增)

let arr1=[1,2,3].map(function(item){
    //``是es6z中的模板字符串 遇到变量用${}取值
    return `<li>${item}</li>`;
})

console.log(arr1.join(''));

//4 返回的是boolean
let arr3=[1,2,3,4,55];
console.log(arr3.includes(5));

//5 返回找到的那一项 不会改变数组 回调函数中返回true表示找到了，找到后停止循环，找不到返回的是undefined
let result=arr3.find(function(item,index){
    return item.toString().indexOf(5)>-1;
});
console.log(result);

//6)some 找true 找到true后停止 返回true,找不到返回false
let someResult=arr3.some(item=>item.toString().indexOf(5)>-1);
console.log('someResult:'+someResult);

//7)every 找false 找到false后停止 返回false
let everyResult=arr3.every(item=>item.toString().indexOf(5)>-1);
console.log('everyResult:'+everyResult);
//8) reduce 收敛 4个参数 返回的是叠加的结果 原数组保持不变 回调函数返回结果
//第一次循环 prev(previous) 代表的是第一项，next是数组的第二项
//第二次循环 当没有return 是prev代表undefined next是数组的第三项
//          当return时 prev代表return值 next还是第三项

let sum=[1,2,3,4,5].reduce(function(perv,next,index,item){
    console.log(perv,next);
    return perv+next;
});
console.log(sum);

let sum2=[{price:30,count:2},{price:30,count:3},{price:40,count:4}].reduce(function (prev,next) {

    return prev+next.price*next.count;
  },0) //指定第一次perv的值，相当于这个数组的第一项为0
  console.log(sum2);

  //二维数组转为一维数组
  let newArray=[[1,2,3],[4,5,6],[7,8,9]].reduce(function(perv,next){
    return perv.concat(next);
  });

  console.log(newArray);