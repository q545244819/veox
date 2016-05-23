'use strict'

const express = require('express')
const serveStatic = require('serve-static')
const colors = require('colors')

module.exports = () => {
  const app = express()
  const port = 3001
  
  app.use('/', serveStatic(process.cwd()))

  app.listen(port , err => {
    if (err) {
      return console.error(err)
    }
    
    console.log(('You can visit http://localhost:' + port + 'to see it!').green)
  })
}