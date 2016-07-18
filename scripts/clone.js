'use strict'

const { spawn } = require('child_process')
const { pegjs, target } = require('../package.json')

spawn('git', ['clone', pegjs.repository, target], {
  cwd: require('path').join(__dirname, '..'),
  env: process.env,
  stdio: 'inherit'
})
.on('error', err => {
  if ( err.stderr ) {
    // It shouldn't, but it seems to print error even without this
    // console.error('\n' + err.stderr.toString('utf-8'))
  } else {
    console.error(err.stack || err.message || err)
  }
  process.exit(1)
})
