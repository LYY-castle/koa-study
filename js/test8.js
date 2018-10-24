const Koa = require('koa')
// Koa-router中间件 基础
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
router.get('/', (ctx, next) => {
        ctx.body = 'Hello LYY'
    })
    .get('/todo', (ctx, next) => {
        ctx.body = 'Todo Page'
    })
app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000, () => {
    console.log('This is a demo')
})