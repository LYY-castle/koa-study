const app = new Koa()
app.use(async (ctx) => {
    // asyn/await的使用方法
    ctx.body = 'hello'
})
app.listen(3000)

// console.log(123)

 // asyn/await的使用方法
 async function testAsync(){
     return 'testAsync'
 }
 function getSomething(){
     return 'getSomething'
 }
// 例1
//  const result = testAsync()
//  console.log(result)

// 例2
async function test(){
    const v1 = await getSomething()
    const v2 = await testAsync()
    console.log(v1,v2)
}
test()