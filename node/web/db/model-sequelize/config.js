const defaultConf = './config-default.js'
const overrideConf = './config-override.js'
const testConf = './config-test.js'

const fs = require('fs')

let config = null

if (process.env.NODE_ENV === 'test') {
  console.log(`Load ${testConf}`)
  config = require(testConf)
} else {
  console.log(`Load ${defaultConf}`)
  config = require(defaultConf)
  try {
    if (fs.statSync(overrideConf).isFile()) {
      console.log(`Load ${overrideConf}`)
      fs = require(overrideConf)
    }
  } catch (err) {
    console.log(`Cannot load ${overrideConf}`)
  }
}

module.exports = config