function count(str) {
  const strExcludeWhite = str.replace(/\s/gi, '')
  const m = {}
  for (let k of strExcludeWhite) {
    if(k in m) {
      m[k]++
    } else {
      m[k] = 1
    }
  }
  return m
}
