'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('feed', 'FeedController')
  .apiOnly()
  .middleware('auth')

  Route.resource('shop', 'ShopController')
  .apiOnly()
  .middleware('auth')