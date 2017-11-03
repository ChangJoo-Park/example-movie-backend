const faker = require('faker')

const dummyRoles = require('../seed-data/roles')
const dummyMovies = require('../seed-data/movies')
const dummyPeople = require('../seed-data/people')

const records = 50

exports.seed = function (knex, Promise) {
  return knex('roles')
    .del()
    .then(() => knex('people').del())
    .then(() => knex('movies').del())
    .then(() => knex('casts').del())
    .then(() => knex('roles').insert(dummyRoles))
    .then(() => knex('people').insert(dummyPeople))
    .then(() => knex('movies').insert(dummyMovies))
    .then(() => {
      return Promise.resolve(['people', 'roles', 'movies'])
        .map(table => {
          return knex
            .select('id')
            .from(table)
            .pluck('id')
        })
        .spread((people, roles, movies) => {
          let arr = []
          for (var index = 0; index < records; index++) {
            arr.push({
              id: index + 1,
              person_id: faker.random.arrayElement(people),
              role_id: faker.random.arrayElement(roles),
              movie_id: faker.random.arrayElement(movies)
            })
          }
          return arr
        })
        .then(properties => {
          return knex.into('casts').insert(properties)
        })
    })
}
