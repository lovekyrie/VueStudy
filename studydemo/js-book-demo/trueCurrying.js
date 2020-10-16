function trueCurrying(fn,...arg){
  if(arg.length>=fn.length){
    return fn(...arg)
  }

  return function(...arg2){
    return trueCurrying(fn,...arg,...arg2)
  }
}

var match = trueCurrying(function(what, str) {
  return str.match(what);
});



console.log(match(/\s+/g, "hello world"));
// [ ' ' ]

console.log(match(/\s+/g)("hello world"));