'use strict'

const fs = require('fs-extra')
const path = require('path')
const colors = require('colors')

const template = path.resolve(__dirname, '../template')

module.exports = dir => {
  const file = path.resolve(process.cwd(), dir || '')
  
  fs.copySync(template, file)
  
  console.log('Create a new veox project!'.green)
}