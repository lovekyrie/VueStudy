
let arr=[1,2,1,2,3,5,4,5,3,4,4,4,4];

let startTime=new Date();

let result=arr.sort().reduce((prev,next)=>{
    if(prev.length===0 || prev[prev.length-1]!==next){
        prev.push(next);
    }
    return prev;
},[]);

let endTime=new Date();
console.log(result);
console.log(startTime.getMilliseconds());
console.log(endTime.getMilliseconds());