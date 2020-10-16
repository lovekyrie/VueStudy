let arr = [1, 2, 3, 4, 5];


console.time('map')
arr.map(item=>{
  console.log(item)
  if(item>3){
    return 
  }
})
console.timeEnd('map')