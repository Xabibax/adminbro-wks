import Adminjs from 'adminjs'
import AdminjsExpress from '@adminjs/express'

import Express from 'express'

export const run = async () => {
  const app = Express()
  const port = 8888

  const adminjs = new Adminjs({
    databases: [],
    rootPath: '/admin',
  })

  const router = AdminjsExpress.buildRouter(adminjs)

  app.use(adminjs.options.rootPath, router)
  app.listen(port, () => console.log(`AdminBro is under localhost:${port}/admin`))
}