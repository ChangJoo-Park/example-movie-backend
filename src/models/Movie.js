import db from '../db'

export const Movie = db.Model.extend({
  tableName: 'movies',
  hasTimestamps: ['created_at', 'updated_at'],
  initialize: function () {
  }
})
