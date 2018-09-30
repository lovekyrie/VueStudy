
function Person(name,age){

    this.name=name;
    this.age=age;

    this.say=function(){
        console.log('我叫:'+this.name+',年龄是：'+this.age);
    }
}

// 自定义构造函数创建对象，先自定义一个构造函数，创建对象
var obj=new Person('小明',10);
console.log(obj.name);
console.log(obj.age);
obj.say();

var obj2=new Person('小红',20);
console.log(obj2.name);
console.log(obj2.age);
obj2.say();

console.log(obj instanceof Person);
console.log(obj2 instanceof Person);

function Dog(name,age,sex){
    
    this.name=name;
    this.age=age;
    this.sex=sex;
}

/**
 * 自定义构造函数创建一个对象的时候，发生了4件事
 * 1.申请空闲的内存空间，用来存放这个新创建的对象
 * 2.把this设置为当前的对象
 * 3.设置对象的属性和方法的值
 * 4.把this这个对象返回
 */


 /**
  * 工厂模式跟构造函数创建对象的区别
  * 
  * 工厂模式：
  * 函数名是小写
  * new
  * return value
  * new之后的对象是当前的对象
  * 直接调用函数就可已创建对象
  * 
  * 自定义构造函数：
  * 函数名是大写(首字母)
  * no new
  * no return value
  * this是当前的对象
  * 通过过new的方式来创建对象
  */
var dog=new Dog('小黄',8,'男');
console.log(dog instanceof Person);
console.log(dog instanceof Dog);