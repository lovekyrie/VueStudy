var str = "aaaabbbcdeefg";

function dealStr(str) {
  
  var obj = {}
  for (var i = 0, len = str.length; i < len; i++) {
    var val = str.charAt(i);

    if (obj[val] && obj[val].value === val) {

      obj[val].count++
    } else {

      obj[val] = {
        value: val,
        count: 1
      }
    }
  }

  return obj
}

var result = dealStr(str)
for(let [key,value] of Object.entries(result)){
  console.log(key,value)
}