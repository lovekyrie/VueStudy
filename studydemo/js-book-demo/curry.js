var curry= function (x){
  return function(y){
    return x+y
  }
}

console.log(curry(2)(3)); 