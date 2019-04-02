function f1(){
  let n=5;
  if(true){
    let n=10
    console.log(n)
  }
  console.log(n)
}

function f2(){
  var n=5;
  if(true){
    var n=10;
  }
  console.log(n)
}

f1()
f2()