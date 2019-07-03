//函数声明的类型定义
function sum(x: number, y: number): number {
  return x + y;
}

//输入多余的(或者少于要求的)参数，是不被允许的
//sum(1,2,3)

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.

//sum(1)
// An argument for 'y' was not provided.

//函数表达式
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

//接口定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

//可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  else {
    return firstName
  }
}

let tomcat = buildName('Tom', 'Cat')
let tomSimple = buildName('Tom')

//参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
  return `${firstName} ${lastName}`
}
let tomcat1 = buildName('Tom', 'Cat');
let tomSimple1 = buildName1('Tom')

//此时就不受[可选参数必须接在必须参数后面]的限制了
function buildName2(firstName: string = 'Tom', lastName: string) {
  return `${firstName} ${lastName}`
}
let tomcat2 = buildName2('Tom', 'Cat')
let tomDefault = buildName2(undefined, 'Cat')

//剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a: any[] = [];
push(a, 1, 2, 3);

//重载 可以使用重载定义多个reverse的函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number| string):number|string{
  if(typeof x==='number'){
    return Number(x.toString().split('').reverse().join(''));
  }
  else{
    return x.split('').reverse().join('');
  }
}
