const faker = require('faker')

let dummyPeople = []
const countPeople = 100
for (var i = 0; i < countPeople; i++) {
  dummyPeople.push({
    id: i + 1,
    name: faker.name.findName(),
    sex: faker.random.arrayElement(['male', 'female', 'other'])
  })
}

module.exports = dummyPeople
