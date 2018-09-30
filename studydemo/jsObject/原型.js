
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 原型的作用之一，节省开辟的空间，每个对象指向的方法是同一个地址。
Person.prototype.eat = function () {
  console.log("吃凉菜");
}

var p1=new Person("小明",20);
var p2=new Person("小红",30);

var p3=Object.assign({},p1);

console.dir(p1);
console.dir(p2);
console.dir(Person);

console.log(p1==p3);
console.log(p1.eat==p2.eat);

/**
 * 构造函数可以实例化对象
 * 构造函数中有一个属性叫prototype,是构造函数的原型对象
 * 构造函数的原型对象(prototype)中有一个constructor构造器，这个构造器
 * 指向的就是自己所在的原型对象所在的构造函数
 * 实例对象的原型对象(__proto__)指向的是该构造函数的原型对象
 * 构造函数的原型对象(prototype)中的方法是可以被实现对象直接访问的
 */