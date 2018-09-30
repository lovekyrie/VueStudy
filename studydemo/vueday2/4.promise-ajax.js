 function ajax({ url = '',type = 'get',datatype = 'json'}) {

     return new Promise((resolve, reject) => {

         let xhr = new XMLHttpRequest();
         xhr.open(type, url, true);
         xhr.responseType = datatype;
         xhr.onload = function () { //xhr.readyState=4,status=200
            if(xhr.status===200){ 
                reject('Not Found!');
            }
         };
         xhr.onerror = function (err) {
             reject(err)
         }
         xhr.send();
     })
 }

 /* ajax({}).then(()=>{

 },()=>{
     
 })
  */

 /* $.ajax({
     url:'',
     data:{

     },
     type:'GET',
     datatype:'json'
 }) */