
//函数声明会提升作用域，函数表达式不会
// 函数声明会在编译阶段把声明和函数体整体提升至执行环境顶部，所以我们在函数声明之前就可以调用这个函数

// function fn(a,b){
//     return a+b;
// }

var fn=function(){
    return 5;
}

console.log(fn());