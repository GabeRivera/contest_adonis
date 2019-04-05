'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Startup extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }
    votes () {
        return this.hasMany('App/Models/Vote')
    }
}

module.exports = Startup
