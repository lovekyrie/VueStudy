function hello() {
  console.log('hello world,module script')
}

function helloToWho(name) {
  console.log(`hello,${name}`)
}

module.exports = {
  hello,
  helloToWho
}