const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const port = 30001

const app = express()
app.use(serveStatic(path.join(__dirname), {'index': ['../iframe.html']}))
// This allows the dist/ relative path to be resolved
app.use(serveStatic(path.join(__dirname, '../')))
app.listen(port, () => {
  console.log(`Use http://localhost:${port} as iframePath option in the 3box-js library. Allows this iframe to be used for shared store and message passing.`)
})
