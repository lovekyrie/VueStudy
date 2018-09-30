
// 小舒这个人,姓名,年龄,性别,吃饭,打招呼,睡觉

// 自定义构造函数--->实例化对象
function Person(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.eat=function(){
        console.log("吃大蒜拌臭豆腐加榴莲酱")
    }
}

// 构造函数---->创建对象
var per=new Person("小苏",38,"女");
// per.eat();
// 实例对象是通过构造函数来创建
// 实例对象会指向自己的构造函数(暂时理解，是错误的)
// 把这个对象的结构显示出来
console.dir(per);
console.dir(Person);

console.log(per instanceof Person);
console.log(per.__proto__.constructor==Person);
console.log(per.__proto__.constructor==Person.prototype.constructor);

/**
 * 总结L
 * 实例对象和构造函数之间的关系
 * 1，实例对象是通过构造函数来创建的---创建的过程叫实例化
 * 2.如何判断对象是不是这个数据类型？
 * 1)通过构造器的方式 实例对象.构造器==构造函数名字
 * 2)对象 instanceof 构造函数名字
 *  注:尽可能的使用第二种方式来识别，为什么?原型讲完再说。
 */