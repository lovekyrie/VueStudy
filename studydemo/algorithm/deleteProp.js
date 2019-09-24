let arr = [
  {
    a: 1,
    b: 2
  },
  {
    a: 2,
    b: 3
  }
];

 arr.map(item => {
  delete item['a'];
});

console.dir(arr);
