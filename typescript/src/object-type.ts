interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
}

interface Person1 {
  name: string,
  age?: number
}

let tom1: Person1 = {
  name: 'Tom1'
}

let tom2: Person1 = {
  name: 'Tom2',
  age: 26
}

//任意属性
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom3: Person2 = {
  name: 'Tom3',
  gender: 'male'
}

//Note: 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

interface Person3 {
  name: string;
  //age?: number;
  [propName: string]: string;
}
let tom4: Person3 = {
  name: 'Tom4',
  //age: 25,
  gender: 'male'
}