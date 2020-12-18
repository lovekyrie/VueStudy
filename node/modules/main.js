const hi = require('./hello')
const process = require('process')

const s1 = 'kevin durant';

hi.hello()
hi.helloToWho(s1)

process.nextTick(function () {
  console.log('nextTick callback!')
})
console.log('nextTick was set!')