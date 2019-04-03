//使用 Object.create 的 propertyObject参数
var o, o2

//创建一个原型为null的空对象
o = Object.create(null)

o = {}
//以字面量形式创建的空对象就相当于：
o = Object.create(Object.prototype)

o = Object.create(Object.prototype, {
  //foo会成为对象的数据属性
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  //bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function () {
      return 10
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value)
    }
  }
})

function Constructor() {}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码

// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, {
  p: {
    value: 42
  }
})

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
  console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的，可枚举的，可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42,
    configurable: true,
    enumerable: true,
    writable: true
  }
})