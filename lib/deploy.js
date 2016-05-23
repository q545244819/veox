'use strict'

const fs = require('fs-extra')
const path = require('path')
const format = require('date-format')

module.exports = () => {
  const deploy = path.resolve(process.cwd(), 'deploy')
  const git = path.resolve(deploy, '.git')
  const _template = path.resolve(process.cwd(), '_template')
  const configJSON = path.resolve(process.cwd(), 'config.json')
  const simpleGit = require('simple-git')(deploy)
  const config = fs.readJsonSync(configJSON)
  
  if (!fs.existsSync(deploy)) {
    throw Error('Please run build first!')
  }
  
  fs.copySync(_template, deploy)
  
  if (!fs.existsSync(git)) {
    simpleGit.init()
    .addRemote('origin', config.git.url)
  }
  
  simpleGit.add('./*')
    .commit(format('yyyy-MM-dd hh:mm:ss.SSS', new Date))
    .push('origin', 'master')
}