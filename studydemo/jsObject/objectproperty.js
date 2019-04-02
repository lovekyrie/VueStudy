let person = {
  1: '章三',
  2: '李四',
  3: '王五'
}

Object.keys(person).forEach(item => {
  console.log(item)
  console.log(typeof (item))
})

console.log(person[1])