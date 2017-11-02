exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert([
        { title: 'Movie 1' },
        { title: 'Movie 2' },
        { title: 'Movie 3' }
      ])
    })
}
