const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const serve = require('koa-static');
const router = require('./router.js')

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .listen(8080)
