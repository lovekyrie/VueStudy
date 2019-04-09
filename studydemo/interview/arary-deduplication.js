function method1() {
  let arr = [0, 2, 3, 4, 4, 0, 2];
  let temp = []
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
      temp.push(arr[i])
    }
  }

  console.log(temp)
}

function method2() {
  var arr = [2, 3, 4, 4, 5, 2, 3, 6],
    arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) < 0) {
      arr2.push(arr[i])
    }
  }

  console.log(arr2)
}

function method3() {
  var arr = [2, 3, 4, 4, 5, 2, 3, 6];
  var arr2 = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })

  console.log(arr2)
}

function method4() {
  var arr = [1, 2, 3, 4, 2, 3];
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i])
    }
  }

  console.log(arr2)
}

function method5(arr) {
  return [...new Set(arr)]
}

var arr = [1, 2, 3, 3, 3, 2];

method1()
method2()
method3()
method4()
console.log(method5(arr))