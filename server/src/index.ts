import * as Koa from 'koa'
import * as path from 'path'
import * as serve from 'koa-static'
import router from './routers'

const mount = require('koa-mount')
const port = 3124
const app = new Koa()

app
  .use(require('koa-body')())
  .use(router.routes())
  .use(mount('/assets', serve(path.join(__dirname, '..', 'assets'))))

app.listen(port, async () => {
  console.log('empty-web server online on port:', port)
})
