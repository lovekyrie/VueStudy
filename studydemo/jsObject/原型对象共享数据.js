
// 需要共享的数据放在原型对象中，
// 不需要共享的数据放在构造函数中

function Student(name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
}

// 所有的学生升高都是188 所有人的体重都是55
// 所有学生都要每天写500行代码
// 所有学生每天都要吃一个10斤的西瓜
// 原型对象

Student.prototype.height="188";
Student.prototype.weight="55kg";
Student.prototype.study=function () {
  console.log("学习，写500行代码，小菜一碟");
}
Student.prototype.eat=function () { 
  console.log("吃一个10斤的西瓜");
}

// 实例化对象，并初始化 
var stu=new Student('超纲',30,'男');
console.dir(Student);
console.dir(stu);
