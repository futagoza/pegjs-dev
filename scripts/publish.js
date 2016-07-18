'use strict'

const { exec } = require('child_process')
const { target } = require('../package.json')

exec(
  `npm publish`, { cwd: require('path').join(__dirname, '..', target) },
  ( err, stdout, stderr ) => {
    if ( err ) {
      if ( stderr || err.stderr ) {
        console.error('\n' + (stderr || err.stderr).toString('utf-8'))
      } else {
        console.error(err.stack || err.message || err)
      }
      process.exit(1)
    }
    if ( stdout ) process.stdout.write(stdout)
  }
)
