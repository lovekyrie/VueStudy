/**对象之间的复制 */
function mixin(receiver,supplier){
  Object.keys(supplier).forEach(function(key){
    receiver[key]=supplier[key]
  })

  return receiver;
};

let son={
  sex:'man',
  age:17,
  name:'liquid@pan'
};

let student={
  class:'三年一班',
  teacher:'MrZhang'
}

console.log(son)
son=mixin(son,student);
console.log(son)