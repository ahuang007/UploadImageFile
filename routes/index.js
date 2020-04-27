const router = require('koa-router')()
const fs = require('fs')

router.post('/upload',async(ctx)=>{
	console.log(ctx.request);
	const file = ctx.request.files.file;	// 获取上传文件
	const reader = fs.createReadStream(file.path);	// 创建可读流
	const ext = file.name.split('.').pop();		// 获取上传文件扩展名
	const crypto = require('crypto');
	const md5 = crypto.createHash('md5')
	let file_name = `${Date.now().toString()}` + Math.random().toString();
	file_name = md5.update(file_name).digest('hex') + `.${ext}`;
	const file_path = `public/${file_name}`;
	const upStream = fs.createWriteStream(file_path);		// 创建可写流
	reader.pipe(upStream);	// 可读流通过管道写入可写流
	return ctx.body = {"result":0, "url":"http://localhost:3000/" + file_name};
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '上传图片'
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
