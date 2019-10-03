'use strict'
const Shop = use('App/Models/Shop')
class ShopController {

  async index({request}) {
    const page = request.get().page || 1
    const shop = await Shop.query().paginate(page)
    return shop
  }

  async store({ request }) {
    const data = request.only(["name", "comment","picture", "address"])
    const shop = await Shop.create(data)
    return shop
  }
  async show({ params }) {
    const shop = await Shop.findOrFail(params.id)
    return shop;
  }

  async update({ params, request }) {
    const data = request.only(["name", "comment","picture", "address"])
    const shop = await Shop.findOrFail(params.id)
    
    shop.name=data.name
    shop.comment=data.comment
    shop.picture=data.picture
    shop.address=data.address

    shop.save();
    return shop;
  }
  async destroy({ params }) {
    const shop = await Shop.findOrFail(params.id)
    return await shop.delete()
  }
}

module.exports = ShopController
