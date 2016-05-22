'use strict'

const rd = require('rd')
const path = require('path')
const fs = require('fs-extra')
const colors = require('colors')
const format = require('date-format')
const md = require('./md')

const mds = path.resolve(process.cwd(), 'mds')
const posts = path.resolve(process.cwd(), 'posts')
const readme = path.resolve(posts, 'readme.json')
const postsJSON = {}

module.exports = () => {
  // find ".md" file.
  rd.eachFileFilterSync(mds, /\.md$/, (f, s) => {
    const source = fs.readFileSync(f).toString()
    const post = md.parseSourceContent(source)
    const title = post.t
    const date = posts.d || format('yyyy-MM-dd', new Date)
    const file = path.resolve(posts, post.d, post.t + '.html')
    const url = path.resolve('/posts', post.d, post.t + '.html')
    const json = {
      title: title,
      url: url
    }
    
    if (!title) {
      fs.removeSync(posts)
      
      throw Error(f + ' title is empty!')
    }
    
    if (postsJSON[post.d]) {
      postsJSON[post.d].push(json)
    } else {
      postsJSON[post.d] = [json]
    }
    
    fs.outputFileSync(file, md.markdownToHTML(post.source), 'utf8')
    
    console.log('Create'.green, file)
  })
  
  fs.writeJson(readme, postsJSON)
  
  console.log('Create'.green, readme)
}