function strLength(s, bUnicode255For1) {
  let len = s.length
  if(!bUnicode255For1) {
    for(var i in s) {
      if(i.charCodeAt(i) > 255) {
        len ++
      }
    }
  }
  return len
}
