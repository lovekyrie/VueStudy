let myFavoriteNum: string|number;
myFavoriteNum='seven'
myFavoriteNum=7

let myFavoriteNum2: string|number;
//myFavoriteNum2=true

// error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNum3 :string|number;
myFavoriteNum3='seven'
console.log(myFavoriteNum3.length)

myFavoriteNum3=7
//console.log(myFavoriteNum3.length); //编译时错误