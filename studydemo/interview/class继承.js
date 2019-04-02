class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}

class Child extends Parent {
  constructor(value) {
    super(value)
    this.val = value;
  }
}

let child = new Child(1)
child.getValue()
console.log(child instanceof Parent)
/* class继承的核心在于使用extends表明继承自哪个父类,
并且在子类构造函数必定调用super */