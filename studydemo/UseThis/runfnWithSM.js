function foo(){
    'use strict';

    console.log(this.a);
    // alert('这条语句执行完了以后能否继续执行！');
    // window.location.href='https://www.baidu.com';
}

var a=2;

foo();