// 发布 emit 订阅 on 一对多 {'女生失恋':['哭','购物','吃']}

function Girl() {

    this._events = {};
}

Girl.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback]; //{'失恋':[cry]}
    }
}

Girl.prototype.emit = function (eventName, ...args) { //...args在参数里面是收敛运算符
    //[].slice.call(arguments,1);
    // Array.from(arguments).slice(1);
    if (this._events[eventName]) {
        this._events[eventName].forEach(cb => {
            cb(...args); //...[] 展开运算符 [...[1,2,3]]=>[1,2,3]
            //cb.apply(this,args) apply规则会一个一个的传递参数
        });
    }
}

let girl = new Girl();

let cry = (who) => {
    console.log(who + '哭')
};
let shopping = (who) => {
    console.log(who + '购物')
};
let eat = (who) => {
    console.log(who + '吃')
};

girl.on('失恋', cry);
girl.on('失恋', shopping);
girl.on('失恋', eat);
girl.emit('失恋', '你', '我');