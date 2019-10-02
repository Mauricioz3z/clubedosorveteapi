'use strict'
const Feed = use('App/Models/Feed')
var Chance = require('chance');
class FeedController {

  async index({ params,request, response }) {
    const page = request.get().page || 1
 
    const feed = await Feed.query().paginate(page)
    // const feed = Feed.all()
     return feed
  }

  async store({ request }) {
    var chance = new Chance();
    var my_random_string = chance.string();

  for (var i = 0; i < 10000; i++) {
    const feed = await Feed.create({title:chance.name(),comment:chance.paragraph().substring(0,240)})
    console.log('criado'+i)
 }

 return  'ok'


    // const data = request.only(["comment", "title"]) 
    // const feed = await Feed.create(data)
    // return feed
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
