'use strict'

const { exec } = require( 'child_process' )
const { pegjs } = require( '../package.json' )
const { join } = require( 'path' )

exec(

  `git rev-list ${ pegjs.releaseTag }..${ pegjs.branch }`,

  { cwd: join( __dirname, '..', 'lib' ) },

  function printResult( err, stdout ) {

    if ( err ) {

      console.error( err.stack || err.message || err )
      process.exit( 1 )

    }

    const commits = stdout ? stdout.toString( 'utf8' ) : ''

    if ( commits !== '' ) {

      // -1, as the above git command returns 1 extra result
      process.stdout.write( `${ --commits.split( '\n' ).length }` )

    }

  }

)
