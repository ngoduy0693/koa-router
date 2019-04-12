var Koa = require('koa');
var Router = require('koa-router');
var request = require('nunjucks')
 
var app = new Koa();
var router = new Router();
 
router.get('/', (context) => {
  context.body= request.render('./show.html', {name: "\n koa-router"});
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1234);