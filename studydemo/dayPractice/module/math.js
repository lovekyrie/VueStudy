//不依赖其他模块的CMD规范，那么可以直接定义在define()函数之中

define(function(){

    var add=function(x,y){
        return x+y;
    };

    return{
        add:add
    };
})