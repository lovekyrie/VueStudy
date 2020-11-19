interface Person {
  name: string;
  age: number;
}

let tomZero: Person = {
  name: 'Tom',
  age: 25
}

interface Person1 {
  name: string,
  age?: number
}

let tomOne: Person1 = {
  name: 'Tom1'
}

let tomTwo: Person1 = {
  name: 'Tom2',
  age: 26
}

//任意属性
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tomThree: Person2 = {
  name: 'Tom3',
  gender: 'male'
}

//Note: 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 下面例子，任意属性的值允许是string，但是可选属性age的值却是number，number不是string的子属性，所以报错了

interface Person3 {
  name: string;
  //age?: number;
  [propName: string]: string;
}
let tomFour: Person3 = {
  name: 'Tom4',
  //age: 25,
  gender: 'male'
}

//只读属性
interface Person4{
  readonly id: number;
  name: string;
  age?: number,
  [propName: string]: any;
}

let tom5:Person4={
  id:97814,
  name:'Tom',
  gender:'male'
}

//tom.id=9527;
//error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.