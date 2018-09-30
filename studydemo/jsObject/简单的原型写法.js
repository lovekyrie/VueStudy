
function Student(name,age,sex){
  this.name=name;
  this.age=age;
  this.sex=sex;
}

Student.prototype={
  // 必须手动修改构造器的指向
  constructor:Student,
  height:'188cm',
  weight:'65kg',  
  study:function () {
    console.log("学习，写500行代码，小菜一碟");
  },
  eat:function () { 
    console.log("吃一个10斤的西瓜");
  }
}

// 实例化对象，并初始化 
var stu=new Student('超纲',30,'男');
console.dir(Student);
console.dir(stu);
