'use strict'

const rimraf = require( 'rimraf' )
const { lstat } = require( 'fs' )

lstat( 'lib', function remove( err ) {

  if ( err ) {

    if ( err.code !== 'ENOENT' ) {

      console.error( err.stack )
      process.exit( 1 )

    }

    process.exit( 0 )

  }

  rimraf( 'lib', function complete( err ) {

    if ( err ) {

      console.error( err.stack || err.message || err )
      process.exit( 1 )

    }

    console.log( 'Removed "lib"' )

  } )

} )
