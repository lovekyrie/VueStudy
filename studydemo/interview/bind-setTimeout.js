/* 在默认情况下，使用window.setTimeout()时，this关键字会指向window(或global)对象。
当类的方法中需要this指向类的实例时，你可能需要显示地把this绑定到回调函数，就不会
丢失该实例的引用 */

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

LateBloomer.prototype.declare = function () {
  console.log('I am a beautiful flower with ' + this.petalCount + ' petals!');
}

//在1秒钟后声明bloom
LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
}

let flower = new LateBloomer();
flower.bloom(); //1秒钟后，调用'declare'方法