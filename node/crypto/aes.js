'use strict'

const crypto = require('crypto')

/**
 * key是用于加密的密钥； iv参数可选， 用于指定加密时所用的向量。 注意这里的密钥必须是8 / 16 / 32 位，
 * 如果加密算法是128， 则对应的密钥是16位， 如果加密算法是256， 则对应的密钥是32位。 
 */
function aesEncrypt(data, key, iv) {

  const cipher = crypto.createCipheriv('aes-128-gcm', key, iv)
  let crypted = cipher.update(data, 'binary', 'base64')
  crypted += cipher.final('base64')
  return crypted
}


function aesDecrypt(encrypted, key, iv) {

  const decipher = crypto.createDecipheriv('aes-128-gcm', key, iv)
  let decrypted = decipher.update(encrypted, 'binary', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

const data = 'Hello, this is a secret message!'
const key = 'password12345678'
const iv = '12345678password'
const encrypted = aesEncrypt(data, key, iv)
const decrypted = aesDecrypt(encrypted, key, iv)

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);