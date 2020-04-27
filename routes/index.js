const router = require('koa-router')()
const fs = require('fs')

router.post('/upload',async(ctx)=>{
	console.log(ctx.request);
	const file = ctx.request.files.file;	// 获取上传文件
	const reader = fs.createReadStream(file.path);	// 创建可读流
	const ext = file.name.split('.').pop();		// 获取上传文件扩展名
	const upStream = fs.createWriteStream(`public/${Math.random().toString()}.${ext}`);		// 创建可写流
	reader.pipe(upStream);	// 可读流通过管道写入可写流
	return ctx.body = '上传成功';
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
