// 调用的函数运行在非strict mode下，那么就算在严格模式下面调用也不影响默认绑定

function foo(){
    console.log(this.a);
}

var a=2;

(function(){
    "use strict"

    foo();//2
})();