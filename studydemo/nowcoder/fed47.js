function duplicates(arr) {
  const obj = {}
  const temp = []
  for(let i of arr) {
    if(obj[i]) {
      obj[i] ++
    } else {
      obj[i] = 1
    }
  }
  for (let k in obj) {
    if(obj[k] > 1) temp.push(parseInt(k))
  }
  return temp
}
