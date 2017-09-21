const routes = require('next-routes')();

routes
  .add('/home', 'posts')
  .add('about')
  .add('posts')
  .add('/post/:year/:month/:day/:name', 'post')
  .add('tags');

module.exports = routes;
