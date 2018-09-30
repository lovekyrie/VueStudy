
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);
setTimeout(() => {
    console.log(4);
}, 1000);

/* The output will be 1 3 4 2 .
 You may wonder why 4 is logged before 2. 
 The reason for that is that even though line 2started executing before line 4 , 
 it did not start executing for 3000ms and hence 4 is logged before 2 . */