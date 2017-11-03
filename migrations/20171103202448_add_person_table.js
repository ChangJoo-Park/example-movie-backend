exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('people', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('sex').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('people')
}
