function truncate(arr) {
  const res = []
  for (let index = 0, len = arr.length; index < len; index++) {
    const ele = arr[index];
    if(index === len - 1) continue
    res.push(ele)
  }
  return res
}
