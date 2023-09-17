function cssStyle2DomStyle(sName) {
  let arr = sName.split('-') 
  if(!arr[0]) arr.splice(0, 1)
  const newStrArr = []
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if( i ===0 ) {
      newStrArr.push(item) 
    } else if(item) {
      newStrArr.push(item.charAt(0).toUpperCase() + item.slice(1))
    }
  }
  return newStrArr.join('')
}

