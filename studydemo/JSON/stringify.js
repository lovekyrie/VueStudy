let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

let arrStr = JSON.stringify(arr);

let str = "1" + "_" + "2" + "_" + arrStr;
console.log(arrStr);
console.log(str);

const newArr=str.split('_')
console.log(newArr)