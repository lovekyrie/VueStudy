const p = Promise.resolve();

(async () => {
  await p;
  console.log(1)
})();

p.then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5))