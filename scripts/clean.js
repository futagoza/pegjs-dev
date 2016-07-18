'use strict'

const rimraf = require('rimraf')
const { lstat } = require('fs')
const { target } = require('../package.json')

lstat(target, err => {
  if ( err ) {
    if ( err.code != 'ENOENT' ) {
      console.error(err.stack)
      process.exit(1)
    }
    process.exit(0)
  }
  rimraf(target, function(err){
    if ( err ) {
      console.error(err.stack || err.message || err)
      process.exit(1)
    }
    console.log(`Removed "${ target }"`)
  })
})
