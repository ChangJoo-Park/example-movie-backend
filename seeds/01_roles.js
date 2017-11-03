exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles')
        .insert([
          { id: 1, type: '배우/주연' },
          { id: 2, type: '배우/조연' },
          { id: 3, type: '감독' },
          { id: 4, type: '스태프' }
        ])
    })
}
