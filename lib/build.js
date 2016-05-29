'use strict'

const rd = require('rd')
const path = require('path')
const fs = require('fs-extra')
const colors = require('colors')
const format = require('date-format')
const md = require('./md')

module.exports = () => {
  const deploy = path.resolve(process.cwd(), 'deploy')
  const posts = path.resolve(process.cwd(), 'deploy', 'posts')
  const _posts = path.resolve(process.cwd(), '_posts')
  const readme = path.resolve(posts, 'readme.json')
  const about = path.resolve(posts, 'about.html')
  const postsJSON = {}
    
  // find ".md" file.
  rd.eachFileFilterSync(_posts, /\.md$/, (f, s) => {
    const source = fs.readFileSync(f).toString()
    const post = md.parseSourceContent(source)
    const title = post['t']
    const date = post['d'] || format('yyyy-MM-dd', new Date)
    const url = path.resolve('/posts', date, title + '.html')
    const json = {
      title: title,
      url: url
    }
    let file = path.resolve(posts, date, title + '.html')
    
    if (!title) {
      fs.removeSync(posts)
      
      throw Error(f + ' title is empty!')
    }
    
    if (postsJSON[date]) {
      postsJSON[date].push(json)
    } else {
      postsJSON[date] = [json]
    }
    
    if (f.indexOf('about.md') > 0) {
      fs.outputFileSync(about, md.markdownToHTML(post.source), 'utf8')
      file = about
    } else {
      fs.outputFileSync(file, md.markdownToHTML(post.source), 'utf8')      
    }
    
    console.log('Create'.green, file)
  })
  
  fs.writeJson(readme, postsJSON)
  
  console.log('Create'.green, readme)
}