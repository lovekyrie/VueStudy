function removeWithoutCopy(arr, item) {
  while(arr.indexOf(item)!==-1) {
    arr.splice(arr.indexOf(item), 1)
  }
  return arr
}
