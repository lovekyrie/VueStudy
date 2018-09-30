// 立即执行函数写法

var module = (function () {
    var _count = 0;
    var m1 = function () {
        console.log(_count);
    }
    var m2 = function () {
        console.log(_count+1);
    }

    return {
        m1:m1,
        m2:m2
    }
})()

//使用上述的写法，外部无法访问内部变量_count的值

console.log(module._count);
console.log(module.m1());