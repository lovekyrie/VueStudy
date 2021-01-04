const model = require('./model')

debugger
let Pet = model.Pet,
  User = model.User;

(async () => {
  var user = await User.create({
    name: 'John',
    gender: false,
    email: 'john' + Date.now() + '@garfield.pet',
    passwd: 'hahaha'
  })
  console.log('created user: ' + JSON.stringify(user))
  var cat = await Pet.create({
    ownerId: user.ID,
    name: 'Garfield',
    gender: false,
    birth: '2007-07-07'
  })
  console.log('created cat: ' + JSON.stringify(cat))
  var dog = await Pet.create({
    ownerId: user.ID,
    name: 'Odie',
    gender: false,
    birth: '2008-08-08'
  })
  console.log('created dog: ' + JSON.stringify(dog))
})();