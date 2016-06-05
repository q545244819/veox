'use strict'

const rd = require('rd')
const path = require('path')
const fs = require('fs-extra')
const colors = require('colors')
const format = require('date-format')
const _ = require('lodash')
const md = require('./md')

module.exports = () => {
  const deploy = path.resolve(process.cwd(), 'deploy')
  const posts = path.resolve(deploy, 'posts')
  const tags = path.resolve(deploy, 'tags')
  const _posts = path.resolve(process.cwd(), '_posts')
  const readme = path.resolve(posts, 'readme.json')
  const about = path.resolve(posts, 'about.html')
  const postsJSON = {}
  const tagsJSON = {}
  const dates = {}
  const datesOftags = {}
    
  // find ".md" file.
  rd.eachFileFilterSync(_posts, /\.md$/, (f, s) => {
    const source = fs.readFileSync(f).toString()
    const post = md.parseSourceContent(source)
    const title = post['title']
    const date = post['date'] || format('yyyy-MM-dd', new Date)
    const tag = post['tag']
    const json = {
      title: title,
      date: date,
      tag: tag,
      url: './posts/' + date + '/' + title + '.html'
    }
    let file = path.resolve(posts, date, title + '.html')
    
    if (!title) {
      fs.removeSync(posts)
      
      throw Error(f + ' title is empty!')
    }
    
    if (f.indexOf('about.md') > 0) {
      fs.outputFileSync(about, md.markdownToHTML(post.source), 'utf8')
      file = about
    } else {
      postsJSON[date] ? postsJSON[date].push(json) : postsJSON[date] = [json]
      tagsJSON[tag] ? tagsJSON[tag][date].push(json) : tagsJSON[tag] = {}
      datesOftags[tag] ? datesOftags[tag][date] = 1 : datesOftags[tag] = {}
      
      if (_.isEmpty(tagsJSON[tag]) && _.isObject(tagsJSON[tag])) {
        tagsJSON[tag][date] = [json]
      }
      
      if (_.isEmpty(datesOftags[tag]) && _.isObject(datesOftags[tag])) {
        datesOftags[tag][date] = 1
      }
      
      dates[date] = 1;
      
      fs.outputFileSync(file, md.markdownToHTML(post.source), 'utf8')      
    }
    
    console.log('Create'.green, file)
  })
  
  Object.keys(tagsJSON).forEach(item => {
    const f = path.resolve(tags, item + '.json')
    
    fs.outputJsonSync(f, {
      posts: tagsJSON[item],
      dates: _.reverse(_.sortBy(Object.keys(datesOftags[item])))
    })
    
    console.log('Create'.green, f)
  })
  
  fs.outputJsonSync(readme, {
    posts: postsJSON,
    dates: _.reverse(_.sortBy(Object.keys(dates)))
  })
  
  console.log('Create'.green, readme)
}