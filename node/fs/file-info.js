'use strict'

const fs = require('fs')
const path = require('path')

fs.stat(path.join(__dirname, 'sample.txt'), function (err, stat) {
  if (err) {
    console.log(err)
  } else {
    //是否文件
    console.log(`isFile: ${stat.isFile()}`)
    //是否目录
    console.log(`isDirectory: ${stat.isDirectory()}`)
    if (stat.isFile()) {
      //文件大小
      console.log(`size: ${stat.size}`)
      //创建时间，date对象
      console.log(`birth time: ${stat.birthtime}`)
      //修改时间
      console.log(`modifyied time: ${stat.mtime}`)
    }
  }
})