'use strict'

const fs = require('fs')
const path = require('path')

const ws1 = fs.createWriteStream(path.join(__dirname, 'output1.txt'), 'utf-8')
ws1.write('使用stream写入文本数据...\n')
ws1.write('END.')
ws1.end()

const ws2 = fs.createWriteStream(path.join(__dirname, 'output2.txt'))
ws2.write(new Buffer.from('使用Stream写入二进制数据...\n'), 'utf-8')
ws2.write(new Buffer.from('END.\n'), 'utf-8')
ws2.end()