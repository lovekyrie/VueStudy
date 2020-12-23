'use strict'

const fs = require('fs'),
  path = require('path'),
  crypto = require('crypto')

//从文件加载key
function loadKey(file) {
  //key实际上就是PEM编码的字符串
  return fs.readFileSync(file, 'utf-8')
}

let prvKey = loadKey(path.join(__dirname, 'rsa-prv.pem')),
  pubKey = loadKey(path.join(__dirname, 'rsa-pub.pem')),
  message = 'Hello, world!'

// 使用私钥加密
const enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf-8'))
console.log(enc_by_prv.toString('hex'))

// 使用公钥解密
const dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv)
console.log(dec_by_pub.toString('utf8'))