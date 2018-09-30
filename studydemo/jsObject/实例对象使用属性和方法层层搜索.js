
function Person(age,sex){
  this.age=age;
  this.sex=sex;
  this.eat=function(){
    console.log("构造函数中的吃")
  }
}

Person.prototype.sex='女';
Person.prototype.eat=function(){
  console.log("原型对象中的吃")
}

var per=new Person(20,"男");
console.log(per.sex);
per.eat();
console.log(per);

/**
 * 实例对象使用的属性或者方法，先在实例中查找，找到了则直接使用，
 * 找不到则去实例对象的__proto__指向的原型对象prototype中找，
 * 找到了则使用，找不到则报错。
 */