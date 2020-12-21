'use strict'

const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'sample.txt'))
const ws = fs.createWriteStream(path.join(__dirname, 'copied.txt'))

rs.pipe(ws)