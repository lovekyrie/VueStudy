/* 闭包 */
/* for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
} */

/* 使用闭bao */
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    }, j * 1000);
  })(i)
}