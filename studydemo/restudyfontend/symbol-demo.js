var o = new Object()

o[Symbol.iterator] = function () {
  var v = 0
  return {
    next: function () {
      return {
        value: v++,
        done: v > 10
      }
    }
  }
}
console.log(o)

for (var v of o)
  console.log(v)