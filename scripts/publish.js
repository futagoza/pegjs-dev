'use strict'

const { exec } = require( 'child_process' )
const { join } = require( 'path' )

exec(

  `npm publish`, { cwd: join( __dirname, '..', 'lib' ) },

  function printResult( err, stdout ) {

    if ( err ) {

      console.error( err.stack || err.message || err )
      process.exit( 1 )

    }

    if ( stdout ) process.stdout.write( stdout )

  }

)
