/**
 * 打造一个“ 有底线” 的 debounce—— 等你可以， 
 * 但我有我的原则： delay 时间内， 我可以为你重新生成定时器； 但只要delay的时间到了， 我必须要给用户一个响应。 
 */
function throttle(fn, delay) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0,
    timer = null
  return function () {

    let context = this
    let args = arguments
    let now = +new Date()

    if (now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, delay);
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

// 用新的throttle包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)