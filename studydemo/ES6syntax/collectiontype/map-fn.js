let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

arr.map(function(item){
  return getKeyValue(item)
})

function getKeyValue(obj){
  for(let [k,v] of Object.entries(obj)){
    console.log(k,v)
    console.log(typeof k)
  }
}