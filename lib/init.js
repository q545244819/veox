'use strict'

const fs = require('fs-extra')
const path = require('path')
const colors = require('colors')

module.exports = dir => {
  const template = path.resolve(__dirname, '../template')  
  const file = path.resolve(process.cwd(), dir || '')
  
  fs.copySync(template, file)
  
  console.log('Create a new veox project!'.green)
}