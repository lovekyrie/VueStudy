function rgb2hex(sGRB) {
  // 去除 sRGB 的空格
  let newSRGB = sGRB.replace(/\s+/, '')
  // 定义 rbg 的正则表达式
  const exp = /rgb\((0|1\d{0,2}|2[0-5]{2}), (0|1\d{0,2}|2[0-5]{2}), (0|1\d{0,2}|2[0-5]{2})\)/
    // 若不符合规则，则返回原字符串
  if(!exp.test(sGRB)) return sGRB
    // 剔除 'rgb(' 和 ')', 剩下 'xx,xx,xx' 的字符串
  const rgbstring = newSRGB.slice(4, newSRGB.length - 1)
    // 拆分上述字符串，生成数组
  const arr = rgbstring.split(',')
 

  let color = '#'
    // 遍历数组，将每个元素转成16进制的字符串
  for(const item of arr) {
    const str = Number(item).toString(16)
    color += str.length === 2 ? str: `0${str}`
  }
  return color
}
