import faker from 'faker'

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      let dummyPeople = []
      const countPeople = 100
      for (var i = 0; i < countPeople; i++) {
        dummyPeople.push({
          name: faker.name.findName(),
          sex: faker.random.arrayElement(['male', 'female', 'other'])
        })
      }
      return knex('people').insert(dummyPeople)
    })
}
