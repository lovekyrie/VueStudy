var one={
    x:1
};

var two=new Object();
// 对象__proto__属性的值就是它所对应的原型对象
console.log(one.__proto__===Object.prototype);
console.log(two.__proto__===Object.prototype);
console.log(one.toString===one.__proto__.toString);
