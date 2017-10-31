import * as Knex from 'knex'
import * as Bookshelf from 'bookshelf'
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
export const knex = Knex(config[env])

export default Bookshelf(knex)
