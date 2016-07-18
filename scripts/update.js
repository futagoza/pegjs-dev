'use strict'

const { exec } = require('child_process')
const { pegjs, target } = require('../package.json')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const cwd = join(__dirname, '..')
const pegREADME = join(cwd, 'lib', 'README.md')
const devREADME = join(cwd, 'src', 'README.md')
const pegVERSION = join(cwd, 'lib', 'VERSION')

const pegPackage = join(cwd, 'lib', 'package.json')
const devPackage = join(cwd, 'src', 'package.json')

exec(
  `node scripts/count`, { cwd },
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
    const count = stdout ? stdout.toString('utf-8') : ''
    if ( count !== '' ) {
      writeFileSync(pegREADME, readFileSync(devREADME, 'utf-8'))
      let metaData = Object.assign(require(pegPackage), require(devPackage))
      metaData.version += `-${ count }`
      writeFileSync(pegPackage, JSON.stringify(metaData, null, '  ') + '\n')
      writeFileSync(pegVERSION, metaData.version + '\n')
      process.exit(0)
    }
  }
)
