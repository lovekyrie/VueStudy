'use strict'

const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'secret-key')

hmac.update('Hello,world!')
hmac.update('Hello,nodejs!')

console.log(hmac.digest('hex'))
//可以把hmac理解为随机数“增强”的算法。因为key不同，对应得到不同的结果签名