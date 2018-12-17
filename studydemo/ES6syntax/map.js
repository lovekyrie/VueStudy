var kvArray=[
  {key:1,value:10},
  {key:2,value:20},
  {key:3,value:30}
]

var newArr=kvArray.map(item=>{
  let obj={}
  obj[item.key]=item.value;
  obj['src']='aaa'
  return obj
})

var newArr2=kvArray.map(item=>{
  item.key=item.value
})

console.log(newArr)
console.log(newArr2)