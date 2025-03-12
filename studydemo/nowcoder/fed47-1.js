function duplicates(arr) {
  const temp = []
  arr.forEach(item => {
    if(arr.indexOf(item) !== arr.lastIndexOf(item) && temp.indexOf(item)!== -1) temp.push(item)
  })
  return temp
}
