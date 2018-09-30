//CommonJs 规范下require用法
// 但是CommonJS规范 不适用于浏览器环境。
// 假设有一个数学模块 math.js
var math=require('math');

//下面这行的代码 会在上面这行的代码运行之后才能运行，因为必须等math.js加载完毕。
// 也就是说，如果加载时间很长，整个应用就会停在那里
let sum=math.add(2,3);