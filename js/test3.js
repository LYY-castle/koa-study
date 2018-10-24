const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    ctx.body = 'hello'
})
app.listen(3000)
// 模拟数据从后台请求有延时
function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => resolve('long_time_value'),1000)
    })
}
async function test(){
    const v = await takeLongTime()
    console.log(v)
}

test()