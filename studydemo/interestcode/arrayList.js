function ArrayList() {
  console.log(arguments);
  [].push.apply(this, arguments)
}
let arrayList = new ArrayList("yang", "yang", "stupid", "billy")
console.log(arrayList.length)
console.log(arrayList[0])
console.log(arrayList['0'])
//我想这个方法的实际用处就是创建一个类数组的对象

let set = new Set(["yang", "yang", "stupid", "billy"])
console.log(set)