let obj = {
  a: 1,
  b: 2
};

const p = new Proxy(obj, {
  get(target, key, value) {
    if (key === "c") {
      return "我是自定义的一个结果";
    } else {
      return target[key];
    }
  },
  set(target, key, value) {
    if (value === 4) {
      target[key] = "我是自定义的一个结果";
    } else {
      target[key] = value;
    }
  }
});

console.log(obj.a);
console.log(obj.c);
console.log(p.a);
console.log(p.c);

obj.name = "李白";
console.log(obj.name);
obj.age = 4;
console.log(obj.age);

p.name="李白"
console.log(p.name)
p.age=4
console.log(p.age)
