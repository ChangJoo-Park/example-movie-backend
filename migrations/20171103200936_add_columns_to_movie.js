exports.up = function (knex, Promise) {
  return knex.schema.table('movies', table => {
    table.integer('year').notNullable()
    table.string('poster').nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('movies', table => {
    table.dropColumn('year')
    table.dropColumn('poster')
  })
}
