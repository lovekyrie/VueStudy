
function Animal(name,age){
  this.name=name;
  this.age=age;
}

// 原型中添加方法
Animal.prototype.eat=function(){
  console.log("动物吃东西");
  this.play();
}

Animal.prototype.play=function(){
  console.log("玩球");
  this.sleep();
}

Animal.prototype.sleep=function(){
  console.log("睡觉了");
}

var dog=new Animal('小ss',20);
dog.eat();