const p=Promise.resolve();

(async()=>{
   await p.then(res=>{
     console.log(0)
   });
   console.log(1)
})();

p.then(()=>{console.log(2)})
 .then(()=>{
   return new Promise((resolve,reject)=>{
     resolve(43)
     console.log(6)
   })
 })
 .then(()=>{console.log(4)})
 .then(()=>{console.log(5)})