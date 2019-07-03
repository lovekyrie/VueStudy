//最简单的表示方法： [类型+方括号] 来表示数组
let fibonacci: number[] = [1, 1, 2, 3, 5]

//数组中不允许出现其他的类型
//let fibonacci1: number[] = [1, '1', 2, 3, 5]
// error TS2322: Type 'string' is not assignable to type 'number'.

let fibonacci2: number[] = [1, 1, 2, 3, 5];
//fibonacci2.push('8')
//error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'

//数组泛型
let fibonacciGeneric: Array<Number> = [1, 1, 2, 3, 5]

//用接口表示数组
interface NumberArray {
  [index: number]: number;
}

let fibonacciInterface: NumberArray = [1, 1, 2, 3, 5]
//NumberArray表示：只要index的类型是number，那么值的类型必须是number

//any在数组中应用
let list: any[]=['Xcat Liu',25,{website:'http://xcatliu.com'}]

// Array-like Object 不是数组类型，比如arguments
function sum1(){
  //let args: number[]=arguments
}
//Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.ts(2740)

//事实上常见的类数组都有自己的接口定义，如IArguments,NodeList,HTMLCollection等
function sum2(){
  let args: IArguments=arguments;
}
