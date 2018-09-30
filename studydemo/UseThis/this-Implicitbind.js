function foo(){
    console.log(this.a);
}

var obj={
    a:2,
    foo:foo
};

var obj2={
    a:42,
    foo:foo
};

var obj1={
    a:2,
    obj2:obj2
};

obj.foo();
obj1.obj2.foo();//对象属性引用链只有上一层或者说最后一层在调用位置中起作用。
