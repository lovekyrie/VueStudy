function insert(arr, item, index) {
  const newArr = [...arr]
  return newArr.splice(index, item)
}
