'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  user() {
    return this.belongsTo('App/Model/User')
  }

  event() {
    return this.belongsTo('App/Model/Event')
  }

  answers() {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = Comment
