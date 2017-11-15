const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/posts/:id', (req, res) => {
    return app.render(
      req,
      res,
      '/post',
      Object.assign({ id: req.params.id }, req.query)
    )
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`listening on: http://localhost:${port}`)
  })
})
