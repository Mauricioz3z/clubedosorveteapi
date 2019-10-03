'use strict'
const Feed = use('App/Models/Feed')
var Chance = require('chance');
class FeedController {

  async index({request}) {
    const page = request.get().page || 1
    const feed = await Feed.query().paginate(page)
    return feed
  }

  async store({ request }) {

    const data = request.only(["comment", "title"])
    const feed = await Feed.create(data)
    return feed
  }
  async show({ params }) {
    const feed = await Feed.findOrFail(params.id)
    return feed;
  }

  async update({ params, request }) {
    const data = request.only(["comment", "title"])

    const feed = await Feed.findOrFail(params.id)
    feed.comment = data.comment
    feed.title = data.title
    feed.save();
    return feed;
  }
  async destroy({ params }) {
    const feed = await Feed.findOrFail(params.id)
    return await feed.delete()
  }
}

module.exports = FeedController
