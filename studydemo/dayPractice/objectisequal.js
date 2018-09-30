
let objectA={
    name:'Lilei',
    age:27
};

let objectB={
    name:'Lilei',
    age:27
};

console.log(objectA===objectB);

objectB=objectA
console.log(objectA===objectB);
//可以得出===判断是判断对象的地址是否相等。