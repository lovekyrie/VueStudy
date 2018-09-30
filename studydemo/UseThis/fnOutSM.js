var a=2;
function foo(){
    let a=2;
    console.log(this.a);
    console.log(a);
}

foo();

//运行在node环境下，node会对上面的代码加一成包裹，实际上是按照下面这样子运行的

/* (function(exports,require,modules,_filename,_dirname){
    var a=2;
    function foo(){
        console.log(this.a);
    }
    foo();
}) */