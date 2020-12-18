'use strict'

const fs = require('fs')
const path = require('path')

//打开一个流
const rs = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8')

rs.on('data', function (chunk) {
  console.log('DATA:')
  console.log(chunk)
})


rs.on('end', function () {
  console.log('END')
})

rs.on('error', function (err) {
  console.log('ERROR:' + err)
})