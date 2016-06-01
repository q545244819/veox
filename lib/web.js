'use strict'

const express = require('express')
const serveStatic = require('serve-static')
const colors = require('colors')
const path = require('path')

module.exports = () => {
  const app = express()
  const port = 3001
  
  app.use('/', serveStatic(path.resolve(process.cwd(), 'deploy')))

  app.listen(port , err => {
    if (err) {
      return console.error(err)
    }
    
    console.log(('You can visit http://localhost:' + port + ' to see it!').green)
  })
}