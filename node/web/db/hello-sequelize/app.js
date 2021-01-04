const Sequelize = require('sequelize');
const config = require('./config')

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

var Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
});


// add
// (async () => {
//   var now = Date.now()

//   var dog = await Pet.create({
//     id: 'g-' + now,
//     name: '0die',
//     gender: false,
//     birth: '2008-08-08',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log('created: ' + JSON.stringify(dog))
// })();

//search
const queryFromSomewhere = (async () => {
  var pets = await Pet.findAll({
    where: {
      name: '0die'
    }
  })
  console.log(`find ${pets.length} pets:`)
  for (let p of pets) {
    console.log(JSON.stringify(p))
  }

  return pets
});

//update

//delete
(async () => {
  var pets = await queryFromSomewhere()

  for (let p of pets) {
    await p.destroy()
  }
})();