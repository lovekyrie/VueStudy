function count(arr, item) {
  let res = 0
  arr.forEach(i => {
    if(i === item) res++
  })
  return res
}
