//如果是第三方模块不用加./
// 如果是文件模块需要加./ （自己添加的文件）

// 在另一个文件中将内容解构出来即可使用
// import拥有声明功能
// import放到页面的顶部 
import {str,str2} from './a.js';

console.log(str,str2); 

/* 
import {a} from './a.js'
import * as a from './a.js' */

// xxx代表的是default后的结果
import xxx from './b.js'
console.log(xxx);