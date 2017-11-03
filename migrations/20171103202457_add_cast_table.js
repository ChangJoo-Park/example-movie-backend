exports.up = function (knex, Promise) {
  return knex.schema.createTable('casts', table => {
    table.increments('id').primary()
    table
      .integer('movie_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('movies')
    table
      .integer('person_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('people')
    table
      .integer('role_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('roles')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('casts')
}
