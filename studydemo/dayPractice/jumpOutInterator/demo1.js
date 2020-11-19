for (let index = 0; index < 5; index++) {

  let isBreak = false
  setTimeout(() => {
    if (index > 3) {
      isBreak = true
    }
  }, index * 1000);

  if (isBreak) {
    break;
  }
  console.log(index)
}