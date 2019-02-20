function Tiger() {

}

function Cat() {

}

Tiger.prototype = {
  a: function () {
    console.log('a')
  },
  b: function () {
    console.log('b')
  }
}

var tiger = new Tiger()
var cat = new Cat();
console.dir(tiger)
console.dir(cat)
console.log(tiger instanceof Tiger)
console.log(tiger.a)
console.log(tiger.b)