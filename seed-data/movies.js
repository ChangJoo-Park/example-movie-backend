const faker = require('faker')

let dummyMovies = []
const countMovies = 10
for (var i = 0; i < countMovies; i++) {
  dummyMovies.push({
    id: i + 1,
    title: faker.lorem.sentence(),
    year: faker.random.number({ min: 1980, max: 2017 }),
    poster: faker.random.image()
  })
}

module.exports = dummyMovies
