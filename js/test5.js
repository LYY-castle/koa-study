const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
    // POST请求如何接收
    // 1.解析上下文ctx中的原生node.js对象req
    // 2.蒋POST表单数据解析成query string字符串
    // 3.将字符串转换成JSON格式
    // ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
    // ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h1>这是一个GET请求</h1>
        <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>`
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // ctx.body = `<h1>这是一个POST请求</h1>`
        let postData = await parsePostData(ctx)
        ctx.body = parseQueryStr(postData)
    } else {
        ctx.body = '404'
    }
    // 解析node原生post参数
    function parsePostData() {
        return new Promise((resolve, reject) => {
            try {
                let postdata = ''
                ctx.req.on('data', (data) => {
                    postdata += data
                })
                ctx.req.addListener('end', function () {
                    resolve(postdata)
                })
            } catch (error) {
                reject(error)
            }
        })
    }
    // POST字符串解析成JSON对象
    function parseQueryStr(queryStr){
        let queryData = {}
        let queryStrList = queryStr.split('&')
        console.log(queryStrList)
        for(let [index,queryStr] of queryStrList.entries()){
            let itemList = queryStr.split('=')
            console.log(itemList)
            queryData[itemList[0]] = decodeURIComponent(itemList[1])
        }
        return queryData
    }
})
app.listen(3000, () => {
    console.log('Test POST')
})