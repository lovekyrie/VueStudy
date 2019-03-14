/* Es6的class */
class PersonClass {
  //等价于PersonType的构造函数
  constructor(name) {
    this.name = name;
  }

  //等价于PersonType.prototype.sayName
  sayName() {
    console.log(this.name)
  }
}

let person = new PersonClass("Nicholas");
person.sayName();

console.log(person instanceof PersonClass)
console.log(person instanceof Object)

console.log(typeof PersonClass)
console.log(typeof PersonClass.prototype.sayName)

/* 自定义类型，实现同上面一样的功能 */
//等价于PersonClass
let PersonType2 = (function () {
  "use strict"

  const PersonType2 = function (name) {

    //确保通过new关键字调用
    if (typeof new.target === "undefined") {
      throw new Error("必须通过关键字new调用构造函数")
    }

    this.name = name;
  }

  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function () {

      //确保不会通过new关键字调用
      if (typeof new.target !== undefined) {
        throw new Error("不可使用new关键字调用该方法");
      }

      console.log(this.name)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  return PersonType2;
})()