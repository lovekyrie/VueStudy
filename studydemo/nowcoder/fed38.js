function removeTheNumOfArray(arr, item) {
  const resArr = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element === item) continue
    resArr.push(element)
  }
  return resArr
}
