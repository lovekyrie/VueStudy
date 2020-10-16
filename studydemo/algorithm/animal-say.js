var Chicken=function(){}

var Duck=function(){}

function animalSay(obj){
  if(obj instanceof Chicken){
    console.log('gaogaogao')
  }
  else if(obj instanceof Duck){
    console.log('gagaga')
  }
}

var chicken=new Chicken()
var duck=new Duck()

animalSay(chicken)
animalSay(duck)