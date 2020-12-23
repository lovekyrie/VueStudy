'use strict'

const crypto = require('crypto')

const algorithm = 'aes-256-cbc'
// define key
const key = crypto.randomBytes(32)
// define iv
const iv = crypto.randomBytes(16)
/**
 * key是用于加密的密钥； iv参数可选， 用于指定加密时所用的向量。 注意这里的密钥必须是8 / 16 / 32 位，
 * 如果加密算法是128， 则对应的密钥是16位， 如果加密算法是256， 则对应的密钥是32位。 
 */
function aesEncrypt(data) {

  //Creating Cipheriv with its parameter
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)

  //updating data
  let crypted = cipher.update(data)

  //using concatenation
  crypted = Buffer.concat([crypted, cipher.final()])

  //returning iv and encrypted data
  return {
    iv: iv.toString('hex'),
    encryptedData: crypted.toString('hex')
  }
}

//A decrypt function
function aesDecrypt(data) {

  let iv = Buffer.from(data.iv, 'hex')
  let encryptedText = Buffer.from(data.encryptedData, 'hex')

  //Creating decipher
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)

  //updating encrypted data
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  //returns data after decryption
  return decrypted.toString()
}

const data = 'Hello, this is a secret message!'
const encrypted = aesEncrypt(data)
const decrypted = aesDecrypt(encrypted)

console.log('Plain text: ' + data);
console.log(encrypted);
console.log(decrypted)