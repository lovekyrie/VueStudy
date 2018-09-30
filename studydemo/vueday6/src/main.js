let str=require('./a.js')
import xxx from './b'
console.log(str);
console.log(xxx)

import './style.css'
import './style.less'

// 在js中引入图片需要import ，或者写一个线上路径
import page from './IMG_1305.jpg'
console.log(page)//page就是webpack打包后的图片路径
let img=new Image()
img.src=page;

document.body.appendChild(img)
