//Shape-superclass(父类)
function Shape(x, y) {
  this.x = 0;
  this.y = 0;
}

//父类的方法
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.')
}

//Rectangle- subclass(子类)
function Rectangle() {
  Shape.call(this); //call super constructor
}

//子类继承父类
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle)
console.log('Is rect an instance of Shape?', rect instanceof Shape)
rect.move(1, 1)