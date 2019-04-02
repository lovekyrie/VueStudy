/* es6之后还能制定@@toPrimitive Symbol来覆盖原有的行为 */

var o = {
  valueOf: () => {
    console.log("valueOf");
    return {}
  },
  toString: () => {
    console.log("toString");
    return {}
  }
}

/* o[Symbol.toPrimitive] = () => {
  console.log("toPrimitive");
  return "hello"
} */

console.log(o + "")