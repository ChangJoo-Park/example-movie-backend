import Knex from 'knex'
import Bookshelf from 'bookshelf'
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env.trim()]
export const knex = Knex(dbConfig)
export default Bookshelf(knex)
