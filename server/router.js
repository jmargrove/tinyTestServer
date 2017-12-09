const Router = require('koa-router')
const router = new Router()
const controler = require('./controler.js')

router.get('/test', controler.getReq)

module.exports = router
