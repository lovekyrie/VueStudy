'use strict'

const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname) + '/sample.txt', 'utf-8')
console.log(data)