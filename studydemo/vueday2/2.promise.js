//resolve代表的是转向成功态
//reject代表的是转向失败态 resolve和reject均是函数
//promise的实例就一个then方法，then方法有两个参数 
let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let a='蘑菇';
        //resolve(a); 成功执行，调用then的第一个参数
        reject(a);
    }, 2000);
}).then((data)=>{
    console.log(data);
},(err)=>{
    console.log('err');
})