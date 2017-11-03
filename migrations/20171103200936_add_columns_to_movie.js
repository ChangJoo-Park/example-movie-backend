exports.up = function (knex, Promise) {
  return knex.schema.table('movies', table => {
    table.integer('year').nullable()
    table.string('poster').nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('movies', table => {
    table.dropColumn('year')
    table.dropColumn('poster')
  })
}
