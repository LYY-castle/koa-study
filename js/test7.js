const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
app.use(async (ctx) => {
    // koa原生路由实现
    let url = ctx.request.url
    let html = await router(url)
    ctx.body = html;
})
app.listen(3000, () => {
    console.log('This is a demo')
})

function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`
        fs.readFile(pageUrl, 'binary', (err, data) => {
            console.log(444)
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function router(url) {
    let page = '404.html'
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/indx':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html'
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    return html;
}