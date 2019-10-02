'use strict'
const Feed = use('App/Models/Feed')
class FeedController {

  async index({ request, response }) {
    const feed = Feed.all()
    return feed
  }

  async store({ request }) {
    const data = request.only(["comment", "title"]) 
    const feed = await Feed.create(data)
    return feed
  }

  async show({ params}) {

     
    const feed = await Feed.findOrFail(params.id)

    return feed;
  }

  async update({ params,request}) {
    const data = request.only(["comment", "title"]) 

    const feed = await Feed.findOrFail(params.id)
          feed.comment=data.comment
          feed.title=data.title
          feed.save();
    return feed;
  }

  async destroy({ params }) {
    const feed = await Feed.findOrFail(params.id)
    
    
    // if (feed.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }

    return await feed.delete()
  }
}

module.exports = FeedController
