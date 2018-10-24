const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    // Koa2中 cookie 操作
    // 设置
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'Myname','LYY',{
                domain: '127.0.0.1',//所在域名
                path: '/index',//所在路径
                maxAge:1000*60*60*24,//有效时长
                expires: new Date('2018-12-31'),//失效时间
                httpOnly:false,//是否只用于http请求
                overwrite:false//是否允许重写
            }
        )
        ctx.body = 'cookie is ok'
    }else{
        if(ctx.cookies.get('Myname')){
            ctx.body = ctx.cookies.get('Myname')
        }else{
            ctx.body = 'Cookie is none'
        }
    }

})
app.listen(3000,()=>{
    console.log('This is a demo')
})