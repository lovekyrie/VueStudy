function sum(...theArgs){
  return theArgs.reduce((prev,next)=>{
    return prev+next
  })
}

console.log(sum(1,2,3))
console.log(sum(1,2,3,4))