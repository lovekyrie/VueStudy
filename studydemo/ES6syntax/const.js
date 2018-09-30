
/* const formData = new FormData();
formDate.append("filename","API.png");

console.log(formDate); */

const locationArr=[
  {'nm':1},
  {'address':2},
];

locationArr.forEach((item)=>{
  Object.keys(item).forEach(function(key){
    console.log(key,item[key]);
  })
})