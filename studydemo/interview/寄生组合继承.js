/*这种继承方式对组合继承进行了优化，
组合继承缺点在于继承父类函数时调用了构造函数，我们只需优化掉这一点就好 */
function Parent(value) {
  this.val = value;
}

Parent.prototype.getValue = function () {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue()
console.log(child instanceof Parent)
/* 以上继承实现的核心就是将父类的原型赋值给了子类，并且将构造函数设置为子类 */