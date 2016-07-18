'use strict'

const { exec } = require('child_process')
const { pegjs, target } = require('../package.json')
const { releaseTag, branch } = pegjs

const cwd = require('path').join(__dirname, '..', target)

exec(
  `git rev-list ${ releaseTag }..${ branch }`, { cwd },
  ( err, stdout, stderr ) => {
    if ( err ) {
      if ( stderr || err.stderr ) {
        // It shouldn't, but it seems to print error even without this
        // console.error('\n' + (stderr || err.stderr).toString('utf-8'))
      } else {
        console.error(err.stack || err.message || err)
      }
      process.exit(1)
    }
    const commits = stdout ? stdout.toString('utf-8') : ''
    if ( commits !== '' ) {
      // -1, as the above git command returns 1 extra result
      process.stdout.write(`${ --commits.split('\n').length }`)
      process.exit(0)
    }
  }
)
