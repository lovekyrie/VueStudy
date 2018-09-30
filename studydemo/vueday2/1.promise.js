//做饭->买菜

let a = '';

function buy(callback) {
    setTimeout(() => {
        a='蘑菇';
        callback(a);
    }, 2000);
}

buy(function cookie(val){
    console.log(val);
})

//回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用次函数
//promise 有3个状态 成功 失败 等待