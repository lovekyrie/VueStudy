'use strict'

const fs = require('fs')
const path = require('path')

const data = 'Hello, Node.js'
fs.writeFile(path.join(__dirname, 'output.txt'), data, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('ok.')
  }
})