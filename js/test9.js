const Koa = require('koa')
// Koa-router中间件 层级
const Router = require('koa-router')
const app = new Koa()
// const router = new Router({
//     prefix: '/exx'
// })
// router.get('/', (ctx, next) => {
//         ctx.body = 'Hello LYY'
//     })
//     .get('/todo', (ctx, next) => {
//         ctx.body = 'Todo Page'
//     })

// // 给不同的路由加层级
// let home = new Router()
// home.get('/lyy', async (ctx) => {
//         ctx.body = 'Home LYY'
//     })
//     .get('/todo', async (ctx) => {
//         ctx.body = 'Home Todo'
//     })

// let page = new Router()
// page.get('/lyy', async (ctx) => {
//         ctx.body = 'Page LYY'
//     })
//     .get('/todo', async (ctx) => {
//         ctx.body = 'Page Todo'
//     })
// // 装载所有子路由
// let router = new Router()
// router.use('/home', home.routes(), home.allowedMethods())
//     .use('/page', page.routes(), page.allowedMethods())

// koa-router中间件  参数
const router = new Router()
router.get('/',(ctx,next)=>{
    ctx.body = ctx.query
})
// 加载路由中间件
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
    console.log('This is a demo')
})