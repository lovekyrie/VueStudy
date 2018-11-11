/**Object.assign */

var receiver = {}

Object.assign(receiver, 
  {
    type: "js",
    name: "file.js"
  }, 
  {
    type: "css"
  }
);

console.log(receiver)