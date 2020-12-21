'use strict'

const path = require('path')

//解析当前目录：
const workDir = path.resolve('.')

//组合完整文件路径：当前目录+'pub'+'index.html'
const filePath = path.join(workDir, 'pub', 'index.html')