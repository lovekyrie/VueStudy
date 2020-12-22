'use strict'

const crypto = require('crypto')

const hash = crypto.createHash('md5')
//可任意多次调用update
hash.update('Hello,world!')
hash.update('Hello,nodejs!')

console.log(hash.digest('hex'))

//如果要计算SHA1,只需把'md5'改成'sha1'
//还可以使用更安全的'sha256','sha512'