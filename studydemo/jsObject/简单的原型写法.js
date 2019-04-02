function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

Student.prototype = {
  // 必须手动修改构造器的指向
  constructor: Student,
  height: '188cm',
  weight: '65kg',
  study: function () {
    console.log("学习，写500行代码，小菜一碟");
  },
  eat: function () {
    console.log("吃一个10斤的西瓜");
  }
}

/* 在没有声明原型内容之前，用new Student创建的实例对象只是拥有上面的3个属性，下面的属性不会拥有 */
// 实例化对象，并初始化 
var stu = new Student('超纲', 30, '男');
console.log(stu.study)
console.dir(Student);
console.dir(stu);