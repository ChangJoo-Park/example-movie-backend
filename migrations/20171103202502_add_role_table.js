exports.up = function (knex, Promise) {
  return knex.schema.createTable('roles', table => {
    table.increments('id').primary()
    table.string('type').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('roles')
}
