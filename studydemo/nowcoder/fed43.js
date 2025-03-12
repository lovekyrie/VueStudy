function curtail(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(i === 0) continue 
    res.push(ele)
  }
  return res
}
