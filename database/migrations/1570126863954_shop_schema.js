'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShopSchema extends Schema {
  up () {
    this.create('shops', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('comment', 254)
      table.string('picture', 254)
      table.string('address', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('shops')
  }
}

module.exports = ShopSchema
