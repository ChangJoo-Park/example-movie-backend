exports.up = function (knex, Promise) {
  return knex.schema
  .createTable('movies', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema
  .dropTable('movies')
}
