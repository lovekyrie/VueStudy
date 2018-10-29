
var str=' 1 2 3 ';

//去除所有的空格
var str2=str.replace(/\s*/g,'');
console.log(str2)

//去除两边的空格
var str3=str.replace(/^\s*|\s*$/,'');
console.log(str3)

var str4=str.replace(/^\s*/,'')
console.log(str4)
console.log(str4.length)

var str5=str.replace(/\s*$/,'')
console.log(str5)