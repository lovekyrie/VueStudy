// {'失恋',  [findboy, drink]}
// 监听的目的 就是为了构造这样一个对象 一对多的关系    on

// 发布的时候 会让数组的函数依次执行    emit
// [findboy, drink]

let EventEmitter = require('events')
let util = require('util')

function Girl() {}
// Girl继承EventEmitter上的方法
util.inherits(Girl, EventEmitter); //相当于Girl.prototype._proto_=EventEmitter.prototype