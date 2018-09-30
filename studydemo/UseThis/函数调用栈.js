
function baz(){
    // 当前调用栈是:baz
    // 因此调用位置是全局作用域
    
    console.log("baz");
    bar(); //<--bar的调用位置
}

function bar(){
    // 当前调用栈是:baz->bar
    // 因此，当前调用位置是在baz中

    console.log("bar");
    foo();
}

function foo(){
    //当前调用栈是:baz ->bar ->foo
    //因此，当前调用位置是在bar中

    console.log("foo");
}

baz();