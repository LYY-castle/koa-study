const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    ctx.body = 'ctx'
    // 在koa中，get请求通过request接收，接收的方法有两种：
    // query：格式化好的参数对象
    // querystring请求字符串
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring
    // 直接在ctx中得到get请求
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
    ctx.body = {
        url,
        req_query,
        
    }
    // 访问地址：http://127.0.0.1:3000?user=jspang&age=18来进行访问。我们在网页中可以得到一串JSON字符串，这是不是很想后端传给我们的接口。
})
app.listen(3000,() => {
    console.log('demo server is starting at port 3000')
})