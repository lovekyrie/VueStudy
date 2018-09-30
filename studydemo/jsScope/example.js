
function test(){

    console.log(a);
    console.log(foo());
    
    var a=2;

    var foo= function () {
        return 2;
    }  
   
}

test();

/**
 * 解释:定义的这个变量a，会提升,相当于会在作用域最前面声明了函数foo，跟变量a
 * 这时候a还没有赋值==>var a=undefined，而foo已经完全暴露了
 * 
 */