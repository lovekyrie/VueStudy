// arrow function 不具备this,arguments

//如歌更改this指向
//1) call apply bind
//2) var that=this;
//3) =>

//如何确定this是谁 看谁调用的 。前面是谁this就是谁
// function a(b){
//     return b+1;
// }

//let a=b=>b+1;
//函数声明转化为箭头函数方法：
//a去掉function b参数有一个可以省略小括号 小括号和大括号之间有一个箭头
//b如果没有大括号则直接是返回值 有大括号必须写return


// function a(b){
//     return function (c){
//         return b+c;
//     }
// }

// var result=a(1)(2);
// console.log(result);

let a = b => c => b + c;

//高阶函数 箭头数量>=2的函数
console.log(a(1)(2));

//vue中很多时候都不能用闭包