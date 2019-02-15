let app = {
  x: 42,
  getX: function () {
    return this.x;
  }
}

let unboundGetX = app.getX;
//The function gets invoked at the global scope
//excepted ouput:undefined
console.log(unboundGetX());

console.log(app.getX())
let boundGetX = unboundGetX.bind(app);
console.log(boundGetX())
let boundGetX2 = unboundGetX.apply(app);
console.log(boundGetX2)