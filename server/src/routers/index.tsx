import * as React from 'react'
import * as Router from 'koa-router'
import * as ReactDOMServer from 'react-dom/server'

import Index from '../views'

const router = new Router()

router.get('/', async (ctx: any) => {
  ctx.body = ReactDOMServer.renderToStaticMarkup(<Index />)
})

export default router
