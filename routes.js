const routes = require('next-routes')();

routes
  .add('/home', '/')
  .add('about')
  .add('posts')
  .add('/post/:year/:month/:day/:name', 'post')
  .add('tags');

module.exports = routes;
