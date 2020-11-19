/**
 * 防抖（ Debounce)
 * 最后一个人说了算
 */
function debounce(fn, delay) {
  let timer = null

  return function () {
    let context = this

    let args = arguments

    // 每次事件被触发时，都去清除之前的旧定时器
    if (timer) {
      clearTimeout(timer)
    }
    //设立新定时器
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}

// 用debounce来包装scroll的回调
const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)
document.addEventListener('scroll', better_scroll)