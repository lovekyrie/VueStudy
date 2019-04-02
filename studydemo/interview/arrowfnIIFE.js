var samurai = (() => "Tomoe")();
var ninja = (() => {
  "Yoshi"
  /* 注意这里是大括号，所以是return undefined */
})();
console.log(samurai)
console.log(ninja)